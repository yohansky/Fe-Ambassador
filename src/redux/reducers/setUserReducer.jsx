const initial = {
  user: new User(),
};

export const setUserReducer = (state = initial, action) => {
  switch (action) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
