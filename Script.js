// JavaScript source code
// • Interattività  
// - Un utente può iscriversi alla Newsletter inserendo il proprio nome nella pagina 
//News e  cliccando Subscribe.
// - Se l’utente non ha inserito alcun testo, il pulsante Subscribe deve essere disabilitato. 
//- Se l’utente ha effettuato la sottoscrizione alla newsletter, allora nella pagina News sarà 
//visibile solo un pulsante “Unsubscribe”.
// - Se l’utente ha effettuato la sottoscrizione alla newsletter, allora ogni qual volta 
//che l’utente  entra nella pagina Home sarà inviato un alert con scritto “Benvenuto” 
//con il nome  dell’utente.
// - Se l’utente clicca Unsubscribe, la sua sottoscrizione viene cancellata. 



function save() {
  var email = document.getElementById("field-e").value;
   var name = document.getElementById("field-n").value;
  var localStorage = window.localStorage;

  localStorage.setItem("email", email);
   localStorage.setItem("name", name);
  if (localStorage) check();
}
function load() {
  var name = localStorage.getItem("name");
  alert("Benvenuta" + " " + name);
}
function check() {
    localStorage.getItem("name");
  localStorage.getItem("email");
var email = document.getElementById("field-e").value;
 var name = document.getElementById("field-n").value;
  if (email != "" && name != "") {
    SDisabled(UDisabled());
  } else {
    return alert("non hai inserito la tua email");
  }
}

function UDisabled() {
  let U = document.getElementById("Unsubscribe");
    U.disabled = false;
     hide();
}
function SDisabled() {
  let S = document.getElementById("subscribe");
  S.disabled = true;
}
function hide() {
  document.getElementById("subscribe").style.display = "none"; 
}
function show() {
    document.getElementById("subscribe").style.display = "block";
     let S = document.getElementById("subscribe");
     S.disabled = false;
}
function Unsubscribe() {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
}
function Disabled() {
   let U = document.getElementById("Unsubscribe");
   U.disabled = true;  
}