import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { useDebounce } from "../../../hooks/useDebounce";
import { productService } from "../../../services/product/productService";
import { ProductPreview } from "../../../types/product.types";

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<ProductPreview[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      searchProducts(debouncedSearchTerm);
    } else {
      setResults([]);
      setIsSearching(false);
    }
  }, [debouncedSearchTerm]);

  const searchProducts = async (term: string) => {
    try {
      const products = await productService.searchProducts(term);
      setResults(products.slice(0, 5)); // Show only top 5 results
    } catch (error) {
      console.error("Error searching products:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowResults(value.length > 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
      setShowResults(false);
    }
  };

  const handleResultClick = (productId: string) => {
    navigate(`/products/${productId}`);
    setSearchTerm("");
    setShowResults(false);
  };

  const handleClickOutside = () => {
    setShowResults(false);
  };

  // Use the useOutsideClick hook to close results when clicking outside
  const searchRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  return (
    <div className="relative w-full" ref={searchRef}>
      <form onSubmit={handleSubmit} className="relative">
        <Input
          type="search"
          placeholder="Search products, materials..."
          className="w-full pl-10"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => searchTerm && setShowResults(true)}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <Button
          type="submit"
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0 h-full"
        >
          <span className="sr-only">Search</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Button>
      </form>

      {/* Search Results Dropdown */}
      {showResults && (
        <div className="absolute z-10 w-full bg-white mt-1 rounded-md border border-gray-200 shadow-lg max-h-80 overflow-auto">
          {isSearching ? (
            <div className="p-4 text-gray-500 text-center">Searching...</div>
          ) : results.length > 0 ? (
            <ul>
              {results.map((product) => (
                <li key={product.id}>
                  <button
                    type="button"
                    className="flex items-center w-full px-4 py-3 hover:bg-gray-50 transition-colors text-left"
                    onClick={() => handleResultClick(product.id)}
                  >
                    {product.thumbnailUrl && (
                      <img
                        src={product.thumbnailUrl}
                        alt={product.name}
                        className="w-10 h-10 object-cover rounded-sm mr-3"
                      />
                    )}
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {product.name}
                      </p>
                      <p className="text-xs text-gray-500">{product.price}</p>
                    </div>
                  </button>
                </li>
              ))}
              <li className="border-t border-gray-100">
                <button
                  type="button"
                  className="w-full px-4 py-2 text-sm text-primary hover:bg-gray-50 text-center"
                  onClick={handleSubmit}
                >
                  View all results
                </button>
              </li>
            </ul>
          ) : searchTerm ? (
            <div className="p-4 text-gray-500 text-center">
              No products found
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Search;
