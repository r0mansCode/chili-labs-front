import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PaginationElement } from "./pagination-element";

describe("PaginationElement", () => {
  it("renders PaginationElement component", () => {
    const { getByText } = render(
      <BrowserRouter>
        <PaginationElement pageNumber='1' pagesCount={10} />
      </BrowserRouter>
    );

    const pageNumberButton = getByText("1");
    expect(pageNumberButton).toBeInTheDocument();
  });

  it("clicking the button triggers the setPage function", () => {
    const { getByText } = render(
      <BrowserRouter>
        <PaginationElement pageNumber='3' pagesCount={10} />
      </BrowserRouter>
    );

    const pageNumberButton = getByText("3");
    fireEvent.click(pageNumberButton);

    expect(global.window.location.href).toContain("3");
  });
});
