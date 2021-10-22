import types from "./types";

export const addToContacts = (newBook) => {
  console.log("newBook", newBook);
  return {
    type: types.ADD_TO_CONTACTS,
    payload: newBook,
  };
};

export const removeFromContacts = (payload) => {
  return {
    type: types.REMOVE_FROM_CONTACTS,
    payload,
  };
};

export const updateFilter = (payload) => {
  return {
    type: types.UPDATE_FILTER,
    payload,
  };
};
