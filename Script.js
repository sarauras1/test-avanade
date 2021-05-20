// JavaScript source code

//Hotel: l'utente può fare login al sito con il proprio username.
//Finchè l'utente non compila il campo username, il tasto login deve essere
//disabilitato(disabled).Quando l'utente è loggato, scompare il tasto login e compare il tasto logout. 

//Quando l'utente va nella pagina home, c'è un messaggio di benvenuto personalizzato(es.ciao username)

//Quando l'utente clicca logout


//viene eliminata la sua sessione utente.

function load() { 
    var username = localStorage.getItem('Username');
    alert('ciao' + username);
}

function save() {

    var username = document.getElementById('field-n').value;
    var password = document.getElementById('field-p').value;
    var localStorage = window.localStorage;

    localStorage.setItem('Username', username);
    localStorage.setItem('Password', password);
    if (localStorage)
    check();
   
        }
  
function check() {
    localStorage.getItem('Username');
    localStorage.getItem('Password');
    var username = document.getElementById('field-n').value;
    var password = document.getElementById('field-p').value;
    if (username != '' && password != '') {
        logoutDisabled(loginDisabled()); 
        
    }
    else {
        return alert('non hai inserito i tuoi dati correttamente');
    }
   
}

function logoutDisabled() {
    let logout = document.getElementById('logout');
    logout.disabled = false;
}
function loginDisabled() {
    let login = document.getElementById('loginButton');
    login.disabled = true;
}