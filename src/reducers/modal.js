const initialState = {
    visibility: false,
    mediaId: null
}


const modal = (state = initialState, action) => {

    switch (action.type) {
        case 'MODAL_OPEN': {
            return state
        }
        case 'MODAL_CLOSE': {
            return state
        }
        default:
            return state
    }

}

export default modal;