import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { List, Map } from "immutable";

function* AsyncFetchUser(action) {
  try {
    const userData = yield axios
      .get("https://reqres.in/api/users?page=2")
      .then((response) => response.data);

    const userList = userData.data.reduce((user_list, user) => {
      user_list.push(
        Map({
          first_name: user.first_name,
          last_name: user.last_name
        })
      );
      return user_list;
    }, []);

    yield put({ type: "FETCH_USER_SUCCESSFUL", payload: List(userList) });
  } catch (error) {
    yield put({ type: "FETCH_USER_FAILED", error });
  }
}

function* AsyncCreateUser(action) {
  try {
    const createdUser = yield axios
      .post("https://reqres.in/api/users", action.payload)
      .then((response) => response.data);

    const user = Map({
      first_name: createdUser.name,
      last_name: createdUser.job
    });
    yield put({ type: "CREATE_USER_SUCCESSFUL", payload: user });
  } catch (error) {
    yield put({ type: "CREATE_USER_FAILED", error });
  }
}

function* AsyncUpdateUser(action) {
  try {
    const createdUser = yield axios
      .put("https://reqres.in/api/users/2", action.payload)
      .then((response) => response.data);

    const user = Map({
      first_name: createdUser.name,
      last_name: createdUser.job
    });
    yield put({ type: "UPDATE_USER_SUCCESSFUL", payload: user });
  } catch (error) {
    yield put({ type: "UPDATE_USER_FAILED", error });
  }
}

function* AsyncDeleteUser(action) {
  try {
    const data = yield axios
      .delete("https://reqres.in/api/users/2", action.payload)
      .then((response) => response.status === 204);

    if (data) {
      yield put({
        type: "DELETE_USER_SUCCESSFUL",
        payload: action.payload
      });
    }
  } catch (error) {
    yield put({ type: "DELETE_USER_FAILED", error });
  }
}

export default function* rootSaga() {
  yield takeLatest("FETCH_USER", AsyncFetchUser);
  yield takeLatest("CREATE_USER", AsyncCreateUser);
  yield takeLatest("UPDATE_USER", AsyncUpdateUser);
  yield takeLatest("DELETE_USER", AsyncDeleteUser);
}
