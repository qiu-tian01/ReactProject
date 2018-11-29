
import default_state from './defaultState'
import * as types from './actionTypes'

import { connect } from 'murlin-connect'

// 给connect添加可以配置的atcionCreators
import actionCreators from './actionCreators'
connect.addActionCreator({
    main: actionCreators
})


const reducer = (
    previous_state = default_state,
    action
) => {
    let new_state = Object.assign({}, previous_state)
    switch (action.type) {
       
        case types.GET_LIST_ASYNC+'_FULFILLED':
            new_state.list = action.payload.data.movieList; break;
            
        case types.GET_CINEMA_ASYNC + '_FULFILLED' : 
            new_state.cinema  = action.payload.data.cinemas; break;
        default:return previous_state;
    }
    return new_state
}

export default reducer