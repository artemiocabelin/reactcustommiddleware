import { FETCH_USERS } from '../actions/types'

export default function (state = [], action ) {
    switch (action.type) {
        case FETCH_USERS :
            console.log(action.payload.data)
            return [ ...state, ...action.payload.data ]
        
        default :
            return state
    }
}