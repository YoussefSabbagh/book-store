import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import CartFinder from '../services/cartApi';

const initialState = {
  cartState: false,
  cartItems: sessionStorage.getItem('cart')
    ? JSON.parse(sessionStorage.getItem('cart'))
    : [],
  cartTotalAmount: 0,
  cartTotalQantity: 0,
};

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    setLoadCart: (state, action) => {
      state.cartItems = action.payload;
    },
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },

    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },

    setAddItemToCart: (state, action) => {
      const book = {
        product: action.payload.product,
        title: action.payload.title,
        subtitle: action.payload.subtitle,
        image: action.payload.image,
        price: action.payload.price,
        qty: 1,
      };
      const token = action.payload.token;

      const itemIndex = state.cartItems.findIndex(
        (item) => item.product === action.payload.product
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty += 1;
        book.qty = state.cartItems[itemIndex].qty;
        toast.success(`Se incremento ${action.payload.title}`);
      } else {
        const temp = { ...action.payload, qty: 1 };

        state.cartItems.push(temp);
        toast.success(`${action.payload.title} added to Cart`);
      }

      const addBook = async (book, token) => {
        try {
          await CartFinder.addBookToCart(book, token);
        } catch (error) {
          console.error(error.message);
        }
      };

      addBook(book, token);

      sessionStorage.setItem('cart', JSON.stringify(state.cartItems));
    },

    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.product !== action.payload.product
      );

      state.cartItems = removeItem;
      sessionStorage.setItem('cart', JSON.stringify(state.cartItems));
      const deleteBook = async (product, token) => {
        try {
          await CartFinder.deleteBookFromCart(product, token);
        } catch (error) {
          console.error(error.message);
        }
      };

      deleteBook(action.payload.product, action.payload.token);

      toast.success(`${action.payload.title} Removed From Cart`);
    },

    setIncreaseItemQTY: (state, action) => {
      const book = {
        product: action.payload.product,
        title: action.payload.title,
        subtitle: action.payload.subtitle,
        image: action.payload.image,
        price: action.payload.price,
        qty: 1,
      };

      const token = action.payload.token;

      const itemIndex = state.cartItems.findIndex(
        (item) => item.product === action.payload.product
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty += 1;
        book.qty = state.cartItems[itemIndex].qty;
        toast.success(`Se incremento ${action.payload.title}`);
      }

      const addBook = async (book, token) => {
        try {
          await CartFinder.addBookToCart(book, token);
        } catch (error) {
          console.error(error.message);
        }
      };

      addBook(book, token);
      sessionStorage.setItem('cart', JSON.stringify(state.cartItems));
    },

    setDecreaseItemQTY: (state, action) => {
      const book = {
        product: action.payload.product,
        title: action.payload.title,
        subtitle: action.payload.text,
        image: action.payload.img,
        price: action.payload.price,
        qty: 1,
      };

      const token = action.payload.token;

      const itemIndex = state.cartItems.findIndex(
        (item) => item.product === action.payload.product
      );

      if (state.cartItems[itemIndex].qty > 1) {
        state.cartItems[itemIndex].qty -= 1;
        book.qty = state.cartItems[itemIndex].qty;
        toast.success(`Se decremento ${action.payload.title}`);
      }
      const addBook = async (book, token) => {
        try {
          await CartFinder.addBookToCart(book, token);
        } catch (error) {
          console.error(error.message);
        }
      };

      addBook(book, token);

      sessionStorage.setItem('cart', JSON.stringify(state.cartItems));
    },

    setClearCartItems: (state, action) => {
      const token = action.payload;

      state.cartItems = [];
      const removeAllBooks = async (token) => {
        try {
          await CartFinder.closeCart(token);
        } catch (error) {
          console.error(error.message);
        }
        toast.success(`Cart Cleared`);
      };

      removeAllBooks(token);

      sessionStorage.setItem('cart', JSON.stringify(state.cartItems));
    },

    setGetTotals: (state, action) => {
      let { totalAmount, totalQTY } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, qty } = cartItem;
          const totalPrice = price * qty;

          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQTY += qty;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQTY: 0,
        }
      );

      state.cartTotalAmount = totalAmount;
      state.cartTotalQantity = totalQTY;
    },
  },
});

export const {
  setLoadCart,
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearCartItems,
  setGetTotals,
} = cartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;

export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state) => state.cart.cartTotalQantity;

export default cartSlice.reducer;
