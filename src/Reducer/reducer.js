const initialState = {
    data_user: ' ',
    data_token: ' ',
}


export function settingReducer(state = initialState, action) {

    switch (action.type) {
        case 'register_user':
            return {
                ...state, data_user: action.payload.data_user
            }

            case 'token':
                return {
                    ...state, data_token: action.payload.data_token
                }
    }
    return state

}





export default settingReducer;