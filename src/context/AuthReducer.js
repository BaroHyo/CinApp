export const AuthReducer = (state, action) => {

  switch (action.type) {
    case "addError":
      return {
        ...state,
        status: "not-authenticated",
        codigo: null,
        errorMessage: action.payload,
      };

    case "removeError":
      return {
        ...state,
        errorMessage: "",
      };

    case "signUp":
      return {
        ...state,
        errorMessage: "",
        status: "authenticated",
        codigo: action.payload.codigo,
      };

    case "logout":
    case "notAuthenticated":
      return {
        ...state,
        status: "not-authenticated",
        codigo: null,
      };

    default:
      return state;
  }
};
