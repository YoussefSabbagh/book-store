import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import CartFinder from '../services/api';

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [], // Let Suppose Database
  cartTotalAmount: 0,
  cartTotalQantity: 0,
};

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },

    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },

    setAddItemToCart: (state, action) => {
      const book = {
        product: action.payload.id,
        title: action.payload.title,
        subtitle: action.payload.text,
        image: action.payload.img,
        price: action.payload.price,
        qty: 1,
      };
      const token = action.payload.token;

      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        book.qty = state.cartItems[itemIndex].cartQuantity;
        toast.success(`Se incremento ${action.payload.title}`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };

        state.cartItems.push(temp);
        toast.success(`${action.payload.title} added to Cart`);
      }

      const addBook = async (book, token) => {
        try {
          const data = await CartFinder.addBookToCart(book, token);
        } catch (error) {
          console.error(error.message);
        }
      };

      addBook(book, token);

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },

    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItems = removeItem;
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
      const deleteBook = async (id, token) => {
        try {
          const data = await CartFinder.deleteBookFromCart(id, token);
        } catch (error) {
          console.error(error.message);
        }
      };

      deleteBook(action.payload.id, action.payload.token);

      toast.success(`${action.payload.title} Removed From Cart`);
    },

    setIncreaseItemQTY: (state, action) => {
      const book = {
        product: action.payload.id,
        title: action.payload.title,
        subtitle: action.payload.text,
        image: action.payload.img,
        price: action.payload.price,
        qty: 1,
      };

      const token = action.payload.token;

      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        book.qty = state.cartItems[itemIndex].cartQuantity;
        toast.success(`Se incremento ${action.payload.title}`);
      }

      const addBook = async (book, token) => {
        try {
          const data = await CartFinder.addBookToCart(book, token);
        } catch (error) {
          console.error(error.message);
        }
      };

      addBook(book, token);
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },

    setDecreaseItemQTY: (state, action) => {
      const book = {
        product: action.payload.id,
        title: action.payload.title,
        subtitle: action.payload.text,
        image: action.payload.img,
        price: action.payload.price,
        qty: 1,
      };

      const token = action.payload.token;

      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        book.qty = state.cartItems[itemIndex].cartQuantity;
        toast.success(`Se decremento ${action.payload.title}`);
      }
      const addBook = async (book, token) => {
        try {
          const data = await CartFinder.addBookToCart(book, token);
        } catch (error) {
          console.error(error.message);
        }
      };

      addBook(book, token);

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },

    setClearCartItems: (state, action) => {
      const token = action.payload;

      state.cartItems = [];
      const removeAllBooks = async (token) => {
        try {
          const data = await CartFinder.closeCart(token);
        } catch (error) {
          console.error(error.message);
        }
        toast.success(`Cart Cleared`);
      };

      removeAllBooks(token);

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },

    setGetTotals: (state, action) => {
      let { totalAmount, totalQTY } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const totalPrice = price * cartQuantity;

          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQTY += cartQuantity;

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
