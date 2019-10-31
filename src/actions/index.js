
import {
  DELETE_AUTHOR,
  FETCH_AUTHOR,
  FETCH_AUTHORS_REQUESTED,
  FETCH_AUTHORS_SUCCESS
} from "./types";



export const fetchAuthorsRequested = () => {
  return {
    type: FETCH_AUTHORS_REQUESTED
  }
}
export const fetchAuthors = () => async dispatch => {
  dispatch(fetchAuthorsRequested());
  await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw (res.error)
      }
      dispatch(fetchAuthorsSuccess(res));
      return res
    }).catch(error => {
      dispatch(fetchAuthorsError(error));
    })
  // dispatch({
  //   type: FETCH_AUTHORS,
  //   payload: response
  // });
};
export const fetchAuthorsSuccess = (authors) => {
  return {
    type: FETCH_AUTHORS_SUCCESS,
    payload: authors
  }
}
export const fetchAuthorsError = () => async dispatch => {

}

export const fetchAuthor = id => async dispatch => {
  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(response => {
      if (response.error) {
        throw (response.error)
      }
      dispatch({
        type: FETCH_AUTHOR,
        payload: response
      });
    }).catch(error => {

    })

};

// export const editStream = (id, formValues) => async dispatch => {
//   const response = await streams.patch(`/streams/${id}`, formValues);

//   dispatch({
//     type: EDIT_STREAM,
//     payload: response.data
//   });
//   history.push("/");
// };
export const deleteAuthor = id => async dispatch => {
  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'DELETE'
  })

  dispatch({
    type: DELETE_AUTHOR,
    payload: id
  });
};
