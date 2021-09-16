import { createSlice } from "@reduxjs/toolkit";
import { store } from "./Store";

const slice = createSlice({
  name: "user",
  initialState: { jwt: null, user: null },
  reducers: {
    userSaved: (user, action) => {
      user.jwt = action.payload.jwt;
      user.user = action.payload.user;
    },
    userDeleted: (user, action) => {
      user.jwt = null;
      user.user = null;
    },
  },
});

const { userSaved, userDeleted } = slice.actions;
export default slice.reducer;

export const saveUser = (jwt, user) => {
  store.dispatch(userSaved({ jwt, user }));
};

// export const deleteUser = () => (dispatch) => {
//   dispatch(userDeleted());
// };
