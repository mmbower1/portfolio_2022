import { combineReducers } from "redux";
// redux persist for localStorage
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// reducers
import alertReducer from "./alertReducers";
import { userLoginReducer, userRegisterReducer } from "./userReducers";

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['cart']
// }

const rootReducer = combineReducers({
  alertReducer,
  userLoginReducer,
  userRegisterReducer,
});

// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;
