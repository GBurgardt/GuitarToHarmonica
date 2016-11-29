import { createStore } from 'redux'
import indexReducer from './reducers/indexReducer'

const store = createStore(indexReducer);
export default store;

//
// import {createStore, combineReducers, compose} from 'redux';
// import {reduxReactFirebase, firebaseStateReducer} from 'redux-react-firebase';
// import indexReducer from './reducers/indexReducer';
// import configFirebase from './utils/FirebaseConfig';
//
// const rootReducer = combineReducers({
//     firebase: firebaseStateReducer,
//     indexReducer
// })
//
// const createStoreWithFirebase = compose(
//     reduxReactFirebase(configFirebase),
// )(createStore)
//
// export default initialState => createStoreWithFirebase(rootReducer, initialState)
//
//
