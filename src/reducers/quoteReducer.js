
export const quoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]

    case 'delete':
      return state.filter(quote => quote.id !== action.payload)

    default:
      return state
  }
}
