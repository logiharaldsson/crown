import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';

import rootReducer from "./root-reducer";

// used in debugging our redux code and other stuff to ...
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;