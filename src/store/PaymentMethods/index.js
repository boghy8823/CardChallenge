import { createSlice } from '@reduxjs/toolkit'

const initialState = { cards: null, error: null, loading: false };

const paymentMethodsSlice = createSlice({
  name: 'paymentMethods',
  initialState,
  reducers: {
    fetchCards: (state, action) => ({
      ...state, cards: action.payload
    }),
    saveCard: (state, action) => ({
      ...state, cards: [ ...state.cards, action.payload ]
    }),
    editCard: (state, action) => ({
      ...state,
      cards: state.cards.map((card) => {
        if (card.id !== action.payload.id) {
          return card;
        }

        return { ...action.payload };
      })
    }),
  },
})

export const { fetchCards, saveCard, editCard } = paymentMethodsSlice.actions;

export default paymentMethodsSlice.reducer;