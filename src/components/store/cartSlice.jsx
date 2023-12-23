import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload
      const existItem = state.cartItems.find((item) => item.id === newItem.id)
      state.totalQuantity++

      if (!existItem) {
        state.cartItems.push({
          id: newItem.id,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem,
        })
      } else {
        existItem.quantity++
        existItem.totalPrice =
          Number(existItem.totalPrice) + Number(newItem.price)
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0,
      )

      // console.log(state.totalQuantity)
      // console.log(state.cartItems)
      // console.log(newItem)
    },
    deleteItem: (state, action) => {
      const id = action.payload
      const existingItem = state.cartItems.find((item) => item.id === id)
      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id)
        state.totalQuantity = state.totalQuantity - existingItem.quantity
      }
    },
  },
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer
