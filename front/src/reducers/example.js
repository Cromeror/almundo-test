import { EXAMPLE_MESSAGE } from '../types'

const data = (state = { message: null }, action) => {
    switch (action.type) {
        case EXAMPLE_MESSAGE:
            return Object.assign({}, action.data)

        default:
            return state
    }
}

export default data