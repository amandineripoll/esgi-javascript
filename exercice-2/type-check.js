function type_check_v1(object ,string){
    if(typeof object == string){
        return true;
    }
    else if(object == null && string == "null"){
        return true;
    }
    else if(Array.isArray(object) == true && string =="array"){
        return true;
    }
    else{
        return false;
    }
}

//var arrayTest = ["amandine", "amandine"];
var nullObject = null;
console.log(type_check_v1(nullObject ,"null"));