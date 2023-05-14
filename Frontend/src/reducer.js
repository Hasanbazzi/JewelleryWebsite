export const initialState = {
  jewel: [],
};
export const getJewelTotal = (jewel) => {
  return jewel?.reduce((amount, item) => item.price + amount, 0);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_JEWEL":
      return {
        ...state,
        jewel: [...state.jewel, action.item],
      };

    default:
      return state;
  }
};
export default reducer;
