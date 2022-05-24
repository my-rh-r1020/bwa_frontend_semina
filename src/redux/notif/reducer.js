import { SET_NOTIF, CLEAR_NOTIF } from "./constants";

let initialState = { status: false, variant: "", message: "" };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_NOTIF:
      return {
        status: action.status,
        variant: action.variant,
        message: action.message,
      };

    case CLEAR_NOTIF:
      // Clear notif v1
      // return { status: false, variant: "", message: "" };

      // Clear notif v2
      return { state, initialState };

    default:
      return state;
  }
}
