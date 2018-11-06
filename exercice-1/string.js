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

}



console.log(ucfirst('coucou'));
console.log(capitalize('bonjour amandine'));
