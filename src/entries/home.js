import React from 'react'
import ReactDom from 'react-dom'
import data from './../api/categories.json'
import Home from './../pages/containers/home'
import { createStore } from 'redux';


const initialState = {
    data: {
        ...data
    }
}

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
    (state) => state,
    initialState,
    enhancer
)

console.log(store.getState())

const homeContainer = document.getElementById('home-container')
const home = <Home data={data} />
ReactDom.render(home, homeContainer)