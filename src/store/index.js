
//applyMiddleware方法主要是对redux的dispacth方法进行封装

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
//这个是用来处理异步的action
import promiseMiddleware from 'redux-promise-middleware'

import reducer from './reducer'

const store = createStore(
    reducer,
    // composeWithDevTools( 
        applyMiddleware(promiseMiddleware())
    // )
)



export default store