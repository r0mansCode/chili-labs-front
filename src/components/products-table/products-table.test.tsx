import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ProductsTable } from "./products-table";
import { mockItems } from "../../mockData/mockItems";

describe("ProductsTable", () => {
  it("renders ProductsTable component", () => {
    render(
      <BrowserRouter>
        <ProductsTable items={mockItems} />
      </BrowserRouter>
    );

    const productName = screen.getByText("Lettuce");
    expect(productName).toBeInTheDocument;
  });

  it("should navigate to the single items page URL after clicking on it", () => {
    render(
      <BrowserRouter>
        <ProductsTable items={mockItems} />
      </BrowserRouter>
    );

    const productName = screen.getByText("Lettuce");
    fireEvent.click(productName);

    expect(global.window.location.href).toContain("product/12");
  });
});
