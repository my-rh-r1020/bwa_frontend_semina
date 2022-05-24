import { SET_NOTIF } from "./constants";

export function setNotif(status, variant, message) {
  return { type: SET_NOTIF, status, variant, message };
}
