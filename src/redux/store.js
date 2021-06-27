import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from 'redux-logger';

import rootReducer from "./root-reducer";

// used in debugging our redux code and other stuff to ...
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

const storeFunctions = {
    store,
    persistor
};

export default storeFunctions;