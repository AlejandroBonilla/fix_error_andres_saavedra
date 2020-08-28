document.getElementById("enviar").addEventListener("click", function (event) {
  //para evitar que el fo
  if(validar()){
      alert("todo ok , validacion valida");
  }
    
  
});

function validar() {
  //rut
  var rut = document.getElementById("rut").value;
  //nombres
  var nombres = document.getElementById("nombres").value;
  //apellidos
  var apellidos = document.getElementById("apellidos").value;
  var edad = document.getElementById("edad").value;
  //email
  var email = document.getElementById("email").value;
  var mail = /^\w+[@]\w+\.\D{2,3}$/;

  var especialidad = document.getElementById("especialidad").value;
  var fecha = document.getElementById("fecha").value;
  var hora = document.getElementById("hora").value;

  // teléfono
  var fono = /^[+]\d{2}\s\d\s\d{8}$/;
   /*
    para los demas campos debes agregar las otras validaciones
    if (!validarMail(email) && !validarNombre(nombre) && !validarEmail(email) && !validarFecha(fecha)) {
        return false;
    }
  */
  if (!validarMail(email)) {
    return false;
  }
 
  //si todas las validaciones son correctas retorno true
  return true;
}

function validarMail(email) {
  //email
  var expresion_regular = /^\w+[@]\w+\.\D{2,3}$/;
  console.log("mail =>", expresion_regular.test("hola@and318.com"));
  //si la expresion no es correcta entro al if  con el signo ! niego ,entonces entro cuando sea falso
  if (!email.match(expresion_regular)) {
    var error = document.getElementById("email").value;
    //error.classList.add("error");
    alert("no funka");
    return false; //si la expresion no se cumple, retorno false y salgo de la funcion
  }

  //si todo sale bien retorno (true)
  return true;
}
