import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './App';
import configureStore from './store/configureStore'
import { startGetCategories } from './action/categoriesAction';
import {startGetNotes} from './action/notesAction'
import { accountUser } from './action/userAction'

const store=configureStore()
if(localStorage.getItem('authToken')){
    store.dispatch(startGetCategories())
    store.dispatch(startGetNotes())
    store.dispatch(accountUser())
}



store.subscribe(()=>{
    console.log(store.getState())
})
const jsx=(
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));

