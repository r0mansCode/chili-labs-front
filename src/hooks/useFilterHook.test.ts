import { renderHook } from "@testing-library/react";
import { useFilter } from "./useFilterHook";
import { mockItems } from "../mockData/mockItems";

describe("useFilter", () => {
  it("should filter items by name when search is provided", () => {
    const mockSearchUrl = "pasta";
    const mockPageNrUrl = "1";

    const { result } = renderHook(() =>
      useFilter(mockItems, mockSearchUrl, mockPageNrUrl)
    );

    expect(result.current.filteredItems).toEqual([
      {
        category: "Pasta",
        currency: "EUR",
        description: "Italian-style pasta, perfect for your favorite sauces.",
        id: 11,
        name: "Pasta",
        price: 1.35,
      },
    ]);
  });

  it("should paginate items based on page number", () => {
    const mockSearchUrl = "";
    const mockPageNrUrl = "2";

    const { result } = renderHook(() =>
      useFilter(mockItems, mockSearchUrl, mockPageNrUrl)
    );

    // Expect filteredItems to contain the second page of items
    expect(result.current.filteredItems).toEqual([
      {
        category: "Pasta",
        currency: "EUR",
        description: "Italian-style pasta, perfect for your favorite sauces.",
        id: 11,
        name: "Pasta",
        price: 1.35,
      },
      {
        category: "Vegetables",
        currency: "EUR",
        description: "Crisp and fresh lettuce for salads and sandwiches.",
        id: 12,
        name: "Lettuce",
        price: 1.15,
      },
      {
        category: "Beverages",
        currency: "EUR",
        description: "100% pure orange juice, packed with vitamins.",
        id: 13,
        name: "Orange Juice",
        price: 2.49,
      },
    ]);
  });
});
