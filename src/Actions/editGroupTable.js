
function editGroup(id,group_name,status_group,user_name){
    return{
     type:
        "edit_group",

        payload:{
            data_edit:
                {
                id:id,
                group_name:group_name,
                status_group:status_group,
                user_name:user_name,
                }
        }
   
}
}

  export default editGroup;