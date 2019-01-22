import React from 'react'
import ReactDom from 'react-dom'
import data from './../api/categories.json'
import Home from './../pages/containers/home'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './../reducers/data'


const initialState = {
    data: {
        ...data
    },
    search: [],
}

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
    reducer,
    initialState,
    enhancer
)

console.log(store.getState())

const home =
    <Provider store={store}>
        <Home />
    </Provider>

const homeContainer = document.getElementById('home-container')
ReactDom.render(home, homeContainer)

// const homeContainer = document.getElementById('home-container')
// const home = <Home data={data} />
// ReactDom.render(home, homeContainer)