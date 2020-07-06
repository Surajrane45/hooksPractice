import { List, Map } from "immutable";
const initState = Map({
  users: List([]),
  isLoading: false
});

export function rootReducer(state = initState, action) {
  switch (action.type) {
    case "FETCH_USER":
      return state.set("isLoading", true);

    case "FETCH_USER_SUCCESSFUL":
      return state.withMutations((state) => {
        state
          .set("isLoading", false)
          .set("users", state.get("users").merge(action.payload));
      });

    case "FETCH_USER_FAILED":
      return state.withMutations((state) => {
        state.set("isLoading", false).set("error", action.error);
      });

    case "CREATE_USER":
      return state.set("isLoading", true);

    case "CREATE_USER_SUCCESSFUL":
      return state.withMutations((state) => {
        state
          .set("isLoading", false)
          .set("users", state.get("users").push(action.payload));
      });

    case "CREATE_USER_FAILED":
      return state.withMutations((state) => {
        state.set("isLoading", false).set("error", action.error);
      });

    case "UPDATE_USER":
      return state.set("isLoading", true);

    case "UPDATE_USER_SUCCESSFUL":
      return state.withMutations((state) => {
        state.set("isLoading", false).set(
          "users",
          state.get("users").update(
            state
              .get("users")
              .findIndex(
                (item) => item.first_name === action.payload.get("first_name")
              ),
            (item) => {
              item.last_name = action.payload.get("last_name");
              return item;
            }
          )
        );
      });

    case "UPDATE_USER_FAILED":
      return state.withMutations((state) => {
        state.set("isLoading", false).set("error", action.error);
      });

    case "DELETE_USER":
      return state.set("isLoading", true);

    case "DELETE_USER_SUCCESSFUL":
      return state.withMutations((state) => {
        state
          .set("isLoading", false)
          .set(
            "users",
            state
              .get("users")
              .delete(
                state
                  .get("users")
                  .findIndex((item) => item.first_name === action.payload)
              )
          );
      });

    case "DELETE_USER_FAILED":
      return state.withMutations((state) => {
        state.set("isLoading", false).set("error", action.error);
      });

    default:
      return state;
  }
}
