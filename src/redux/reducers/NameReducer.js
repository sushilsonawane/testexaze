import { SAVE_NAME } from '../actions/ActionTypes'

const initialState = {
    name: ''
}

const nameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_NAME:
            return {
                ...state,
                name: action.payload
            }

        default:
            return state
    }
}

export default nameReducer
