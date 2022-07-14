import { USER_DATA } from "./action";

export const userReducer = (
  state = { usedId: "", name: "", mobile: "" },
  { type, payload }
) => {
  switch (type) {
    case USER_DATA:
      return { ...payload };

    default:
      return state;
  }
};
