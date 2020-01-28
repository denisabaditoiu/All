
const FIRST_NAME = "Denisa";
const LAST_NAME = "Baditoiu";
const GRUPA = "1074";

/**
 * Make the implementation here
 */
function initCaching() {
   
    var cache={};
 var returnedObject={
     pageAccessCounter: function(section){
        if(section != undefined){
            if(cache[section.toString().toLowerCase()])
            {
            cache[section.toString().toLowerCase()]++;
            }
            else
            {
            cache[section.toString().toLowerCase()]=1;
            }
        }
        else{
            if(cache['home'])
            {
            cache['home']++;
            }
            else
            {
            cache['home']=1;
            }
        }
    },

    getCache:  function(){
     return cache;
    }
}
    return returnedObject;
   
   
}

module.exports = {
    FIRST_NAME,
    LAST_NAME,
    GRUPA,
    initCaching
}

