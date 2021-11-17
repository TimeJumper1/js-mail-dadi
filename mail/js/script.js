// chiedo all'utente l'email
let userEmail = prompt('inserisci la tua email di gmail');
console.log(userEmail)
// controllo che la sua email faccia parte dell'array di email autorizzate 
const emailList = ['gion@gmail.com' , 'franco@gmail.com' , 'peppe@gmail.com' , 'giulio29@gmail.com' , 'martina@gmail.com' , 'mejo@gmail.com'];
console.log(emailList);
let emailFound = false;
for (let i = 0; i < emailList.length; i++) {
    if ( userEmail === emailList[i]) {
        emailFound = true;
        
    }

}
if(emailFound) {
        
    alert('accesso autorizzato');
}else{
    alert('accesso negato')
        
}
