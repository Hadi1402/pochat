
var groupProfile = (function() {
    var id = "";
    var group_name = "";
    var status_group = "";
    
  
    var getId = function() {
      return id; 
    };
  
    var setId = function(Id) {
      id = Id;     
    };

    var getName = function() {
        return group_name; 
      };
    
      var setName = function(name) {
        group_name = name;     
      };
  
      var getStatus= function() {
        return status_group; 
      };
    
      var setStatus = function(status) {
        status_group = status;     
      };
  
   
  
    return {
      getId:getId,
      setId:setId,
      getName: getName,
      setName: setName,
      getStatus:getStatus,
      setStatus:setStatus

    }
  
  })();
  
  export default groupProfile;
