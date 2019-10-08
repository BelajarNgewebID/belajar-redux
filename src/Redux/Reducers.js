const defaultState = {
    qty: 0,
}

const rootReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'INC_QTY':
            return {
                // nambah kuantitas
                ...state,
                qty: state.qty + 1
            }
        case 'DEC_QTY':
            return {
                // ngurang kuantitas
                ...state,
                qty: state.qty - 1
            }
        default:
            return state
    }
}

export default rootReducer