import { Loader2, Search, User, X } from "lucide-react";
import { Button } from "../ui/button";

interface SearchableSelectProps<T> {
  items: T[];
  selectedItem: T | null;
  searchTerm: string;
  isLoading: boolean;
  onSearchChange: (term: string) => void;
  onSelect: (item: T) => void;
  onClear: () => void;
  renderItem: (item: T) => React.ReactNode;
  renderSelected: (item: T) => React.ReactNode;
  placeholder: string;
  emptyMessage: string;
  disabled?: boolean;
  color?: "blue" | "green";
}

export default function TaskSearchableSelect<T extends { id: string }>({
  items,
  selectedItem,
  searchTerm,
  isLoading,
  onSearchChange,
  onSelect,
  onClear,
  renderItem,
  renderSelected,
  placeholder,
  emptyMessage,
  disabled = false,
  color = "blue",
}: SearchableSelectProps<T>) {
  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: "bg-blue-100 text-blue-600",
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      icon: "bg-green-100 text-green-600",
    },
  };

  const colors = colorClasses[color];

  return (
    <div className="space-y-3">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          disabled={disabled}
        />
        {searchTerm && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            disabled={disabled}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
          <span className="ml-2 text-sm text-gray-500">Searching...</span>
        </div>
      )}

      {/* Selected Item Display */}
      {selectedItem && !isLoading && (
        <div
          className={`p-4 ${colors.bg} border-2 ${colors.border} rounded-lg`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3 flex-1">
              <div
                className={`h-10 w-10 rounded-full ${colors.icon} flex items-center justify-center flex-shrink-0`}
              >
                <User className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                {renderSelected(selectedItem)}
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onClear}
              className="h-8 w-8 p-0 flex-shrink-0"
              disabled={disabled}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Items List */}
      {!isLoading && !selectedItem && items.length > 0 && (
        <div className="border rounded-lg divide-y max-h-80 overflow-y-auto">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item)}
              className="w-full p-3 hover:bg-gray-50 transition-colors text-left flex items-center gap-3"
              disabled={disabled}
            >
              <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <User className="h-5 w-5 text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">{renderItem(item)}</div>
            </button>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!isLoading &&
        !selectedItem &&
        items.length === 0 &&
        searchTerm.length >= 2 && (
          <div className="text-center py-12 text-gray-500">
            <User className="h-12 w-12 mx-auto mb-3 text-gray-300" />
            <p className="text-sm">{emptyMessage}</p>
          </div>
        )}

      {/* Minimum Character Message */}
      {!isLoading &&
        !selectedItem &&
        searchTerm.length < 2 &&
        searchTerm.length > 0 && (
          <div className="text-center py-8 text-gray-400">
            <p className="text-sm">Type at least 2 characters to search...</p>
          </div>
        )}
    </div>
  );
}