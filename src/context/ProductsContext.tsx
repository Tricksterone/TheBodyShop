import { PropsWithChildren, createContext, useContext } from "react";
import { Product, products as mockedProducts } from "../../data";
import { useLocalStorage as useLocalStorageState } from "../hooks/useLocalStorage";

type ProductsContextValue = {
  addProduct: (product: Product) => void;
  editProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  products: Product[];
};

const ProductsContext = createContext<ProductsContextValue>(
  {} as ProductsContextValue
);

export function useProducts() {
  return useContext(ProductsContext);
}

export function ProductProvider(props: PropsWithChildren) {
  const [products, setProducts] = useLocalStorageState<Product[]>(
    "products",
    mockedProducts
  );

  function deleteProduct(id: string) {
    setProducts((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  function addProduct(product: Product) {
    console.log(product);
    setProducts((products) => [...products, product]);
  }

  function editProduct(updatedProduct: Product) {
    setProducts((prevProducts) => {
      return prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      );
    });
  }

  return (
    <ProductsContext.Provider
      value={{
        addProduct,
        editProduct,
        deleteProduct,
        products,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}
