import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import partner from './reducers/partner'
// import auth from './reducers/auth'
// import profile from './reducers/profile'





const middleware = [thunk];

const store = createStore(
combineReducers({
    // alert,
    // auth,
    partner
}),
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;