import { nanoid } from "nanoid";
import { combineReducers } from "redux";

import types from "./types";

const initialStore = {
  contacts: {
    items: [],
    filter: "",
  },
};

const reducer = (store = { ...initialStore }, action) => {
  //   switch (action.type) {
  //     case types.ADD_TO_CONTACTS:
  //       const newContact = { ...action.payload };
  //       const newContacts = [...store.contacts.items, newContact];
  //       return { ...store.contacts, items: newContacts };
  //     default:
  //       return store;
  //   }

  switch (action.type) {
    case types.ADD_TO_C0NTACTS:
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

// const contactsReducer = (state = [], action) => {
//   switch (action.type) {
//     case types.ADD_TO_C0NTACTS:
//       return [...state, action.payload];

//     case types.REMOVE_FROM_CONTACTS:
//       return state.filter((item) => item.id !== action.payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case types.UPDATE_FILTER:
//       return action.payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items: contactsReducer,
//   filter: filterReducer,
// });

export default reducer;
