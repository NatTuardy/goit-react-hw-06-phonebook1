import types from "./types";

const initialStore = {
  contacts: {
    items: [],
    filter: "",
  },
};

const reducer = (store = { ...initialStore }, action) => {
  switch (action.type) {
    case types.ADD_TO_CONTACTS:
      const newContact = { ...action.payload };
      const newContacts = [...store.contacts.items, newContact];
      return { contacts: { ...store.contacts, items: newContacts } };

    case types.REMOVE_FROM_CONTACTS:
      const updateContacts = store.contacts.items.filter(
        (item) => item.id !== action.payload
      );
      return { contacts: { ...store.contacts, items: updateContacts } };

    case types.UPDATE_FILTER:
      return { contacts:{...store.contacts, filter: action.payload} };

    default:
      return store;
  }
};

export default reducer;
