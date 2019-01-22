import React from 'react'
import ReactDom from 'react-dom'
import data from './../api/categories.json'
import Home from './../pages/containers/home'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './../reducers'
import normalizedData from './../schemas'
import { Map as map } from 'immutable'

console.log(normalizedData)

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
    rootReducer,
    map(),
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