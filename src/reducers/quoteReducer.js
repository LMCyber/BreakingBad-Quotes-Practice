
export const quoteReducer = (state = [], action) => {
  switch (state) {
    case 'add':
      return [...state, action.payload]

    default:
      return state
  }
}
