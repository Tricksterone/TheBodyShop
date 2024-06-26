import { PropsWithChildren, createContext, useContext } from "react";
import { CartItem, Product } from "../../data";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useProducts } from "../context/ProductsContext";

type cartItem = CartItem;

type CartContext = {
  getItemQuantity: (id: string) => number;
  increaseCartQuantity: (id: string) => void;
  decreaseCartQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  removeAllProductsById: (id: string) => void;
  removeAllFromCart: () => void;
  confirmationCart: () => void;
  cartQuantity: number;
  cartItems: CartItem[];
  confirmationCartItems: CartItem[];
};

const CartContext = createContext({} as CartContext);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider(props: PropsWithChildren) {
  const [cartItems, setCartItems] = useLocalStorage<cartItem[]>("cart", []);
  const [confirmationCartItems, setCartConfirmation] = useLocalStorage<
    cartItem[]
  >("cartConfirmation", []);
  const { products } = useProducts();

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function getProductById(id: string): Product | undefined {
    return products.find((product) => product.id === id);
  }

  function increaseCartQuantity(id: string) {
    setCartItems((currItems: cartItem[]) => {
      const existingItem = currItems.find((item) => item.id === id);

      if (existingItem == null) {
        const product = getProductById(id);
        if (product) {
          const newItem: cartItem = {
            id,
            image: product.image,
            title: product.title,
            description: product.description,
            price: product.price,
            quantity: 1,
          };
          return [...currItems, newItem];
        }
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
      return currItems;
    });
  }

  function decreaseCartQuantity(id: string) {
    setCartItems((currItems: cartItem[]) => {
      const existingItem = currItems.find((item) => item.id === id);

      if (existingItem == null) {
        const product = getProductById(id);
        if (product) {
          const newItem: cartItem = {
            id,
            image: product.image,
            title: product.title,
            description: product.description,
            price: product.price,
            quantity: 1,
          };
          return [...currItems, newItem];
        }
      } else {
        const updatedItems = currItems.map((item) => {
          if (item.id === id) {
            const updatedQuantity = item.quantity - 1;
            if (updatedQuantity <= 0) {
              return null;
            } else {
              return { ...item, quantity: updatedQuantity };
            }
          } else {
            return item;
          }
        });

        return updatedItems.filter((item) => item !== null) as cartItem[];
      }
      return currItems;
    });
  }

  function removeFromCart(id: string) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  function removeAllProductsById(id: string) {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  }

  function removeAllFromCart() {
    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }

  function confirmationCart() {
    setCartConfirmation([]);
    localStorage.setItem("cartConfirmation", JSON.stringify([]));
    setCartConfirmation(cartItems);
  }

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        removeAllProductsById,
        removeAllFromCart,
        confirmationCart,
        cartItems,
        cartQuantity,
        confirmationCartItems,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
