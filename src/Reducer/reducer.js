

const initialState={  
    data_user:' ',
     }


export function settingReducer(state=initialState,action)  {

    switch(action.type){
        case 'register_user':
            return {...state , data_user:action.payload.data_user}

    }

    return state
    }






   export default settingReducer;