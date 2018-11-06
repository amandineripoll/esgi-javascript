function ucfirst(string) {
 if (string.length > 0) {
   return string[0].toUpperCase() + string.substring(1);
 } else {
   return string;
 }
}

function capitalize(string) {
   return string.replace(/\w\S*/g, function(txt){
       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
   });
}

function camelCase(string){
  if(typeof string === 'string'){
    return (capitalize(string)).replace(/ /g, "");
  }
  else {
    return null;
  }
}

function snake_case(string){
  return (string.replace(/ /g, "_")).toLowerCase();
}

function leet(string){
var tabCryptage = { "A" : "4", "E" : "3", "I": "1", "O": "0", "U" : "(_)", "Y" : "7"};
var data = "";
for (var i = 0; i < string.length; i++){
    if(typeof tabCryptage[string[i].toUpperCase()] === 'undefined') {
        data += string[i];
    }
    else {
        data += tabCryptage[string[i].toUpperCase()];
    }
}
return data;
}

function prop_access(){

}


// console.log(ucfirst('coucou'));
// console.log(capitalize('bonjour amandine'));
// console.log(camelCase('bonjour amandine la boss'));
// console.log(snake_case('bonjour amandine la boss'));
// console.log(leet('amandine'));
