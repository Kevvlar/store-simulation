import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import shopReducer from "./Shop/shopReducer";
import shelvesReducer from "./Shelves/shelveReducer";
import shelvesOrdersReucer from "./ShelvesOrder/shelvesOrderReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  shop: shopReducer,
  shelve: shelvesReducer,
  shelveOrder: shelvesOrdersReucer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
