import { SET_NOTIF } from "./constants";

let initialState = { status: false, variant: "", message: "" };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_NOTIF:
      return {
        status: action.status,
        variant: action.variant,
        message: action.message,
      };

    default:
      return state;
  }
}
