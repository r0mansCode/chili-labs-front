import { Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { useEffect } from "react";
import { fetchItems } from "./store/reducers/ActionCreators";
import { useFilter } from "./hooks/useFilterHook";
import { AppHeader } from "./components/app-header/app-header";
import { ProductsPage } from "./pages/products-page/products-page";
import { SingleProductPage } from "./pages/single-product-page/single-product-page";

function App() {
  const dispatch = useAppDispatch();
  const { filteredItems, filteredByNameItems } = useFilter();
  const { isLoading, error } = useAppSelector((state) => state.dataReducer);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<AppHeader />}>
          <Route
            index
            element={
              <ProductsPage
                items={filteredItems}
                isLoading={isLoading}
                error={error}
                filteredByNameItems={filteredByNameItems}
              />
            }
          />
          <Route path='/product/:productId' element={<SingleProductPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
