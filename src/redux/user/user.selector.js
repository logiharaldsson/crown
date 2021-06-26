import { createSelector } from "reselect";

// This is to get the state from Redux
const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)