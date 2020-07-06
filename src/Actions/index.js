export const createUser = (username, job) => ({
  type: "CREATE_USER",
  payload: {
    name: username,
    job: job
  }
});

export const updateUser = (username, job) => ({
  type: "UPDATE_USER",
  payload: {
    name: username,
    job: job
  }
});

export const deleteUser = (username) => ({
  type: "DELETE_USER",
  payload: username
});
