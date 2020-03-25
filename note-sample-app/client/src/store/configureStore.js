import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import categoriesReducer from '../reducers/categoriesReducer'
import notesReducer from '../reducers/notesReducer'
import userReducer from '../reducers/userReducer'
const configureStore=()=>{
    const store=createStore(combineReducers({
        categories:categoriesReducer,
        notes:notesReducer,
        user:userReducer
        
    }),applyMiddleware(thunk))
    return store
}

export default configureStore