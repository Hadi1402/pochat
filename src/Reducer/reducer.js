
//import RegisterUser from "../Actions/RegisterUser"
import dispalyBox from "../Actions/displayChatbox"
import editGroup from "../Actions/editGroupTable"

const initialState={  
    data_user:' ',
    data_edit:'',
    display:'block',
     }


export function settingReducer(state=initialState,action)  {

    switch(action.type){
        case 'register_user':
            return {...state , data_user:action.payload.data_user}

          
        case 'displayBox':
            if(action.payload.display == 'block')
            return { ...state , display:'none'}
            else if(action.payload.display == 'none')        
            return {...state , display:'block',}

        case 'edit_group':
            console.log("here",action.payload.data_edit )
            return {...state , data_edit:action.payload.data_edit}

    }

    return state
    }









//export function settingDisplayBox(state=initialState,action)  {
   // console.log("state:", state)
   // if (){
        
   // }
   // return state
   // }





   export default settingReducer;