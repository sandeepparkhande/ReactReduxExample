const initialState = { items: [] };

export function msgReducer(state = initialState, action) {
  console.log(action);
  let items = [...state.items];
  switch (action.type) {
    case "ADD_MESSAGE":
      items.push(action.payload);
      return {
        ...state,
        items
      };

    case "DELETE_MESSAGE":
      console.log("DELETE_MESSAGE", action.payload);
      items.splice(action.payload);
      console.log("DELETE_MESSAGE", items);
      return {
        ...state,
        items
      };

    case "EDIT_MESSAGE":
      console.log("EDIT_MESSAGE", action.payload);
      //items.splice(action.payload);
      // console.log("DELETE_MESSAGE", items);
      return {
        ...state,
        items
      };
    default:
      return state;
  }
}
