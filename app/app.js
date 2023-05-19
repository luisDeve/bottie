import { saludos, hora,chiste,annette,maydeli,dulce,perla,edith} from "../array/Datos.js";

let botonEnviar = document.querySelector(".send-button");

botonEnviar.addEventListener("click", nose);

class prueba {
  constructor(texto) {
    this.texto = texto;
  }
}
function nose() {
  conversacion();
}
function conversacion() {
  let campoTexto = document.querySelector(".message-input").value;
  const nuevaConversacion = new prueba(campoTexto);
  if (
    saludos.filter((saludos) => saludos === nuevaConversacion.texto).length > 0
  ) {
    dialogoBot();
  } else if (
    hora.filter((hora) => hora === nuevaConversacion.texto).length > 0
  ) {
    horas();
  }else if(chiste.filter((chiste)=>chiste==nuevaConversacion.texto).length>0){
    chistes()
  }else if(annette.filter((annette)=>annette==nuevaConversacion.texto).length>0){
    annett()
  }else if(maydeli.filter((maydeli)=>maydeli==nuevaConversacion.texto).length>0){
    May()
  }else if(dulce.filter((dulce)=>dulce==nuevaConversacion.texto).length>0){
    dul()
  }else if(perla.filter((perla)=>perla==nuevaConversacion.texto).length>0){
    per()
  }else if(edith.filter((edith)=>edith==nuevaConversacion.texto).length>0){
    edi()
}
}

function dialogoBot() {
  let campoTexto = document.querySelector(".message-input").value;
  let conversacion = document.querySelector(".chat-window");

  let conversacionBot = new prueba(campoTexto);

  let nombre = "Bottie";
  let elementoNombre = `
  <div class="conversacion">
  <h2 class="preguntas">${conversacionBot.texto}</h2>
  <div class="prueba">
    <img src="img/Boot.png" class="boot" alt="">
    <p class="convesacion">Hola, soy ${nombre} un gusto, <br>en que te puedo ayudar ??</p>
  </div>
</div>
  `;
  conversacion.innerHTML += elementoNombre;

}

function horas() {
  let campoTexto = document.querySelector(".message-input").value;
  let conversacionBot = new prueba(campoTexto);
  let hora = new Date();
  let conversacion = document.querySelector(".chat-window");
  let elemento = `
  <div class="conversacion">
  <h2 class="preguntas">${conversacionBot.texto}</h2>
  <div class="prueba">
    <img src="img/Boot.png" class="boot" alt="">
    <p class="convesacion">son las ${hora.toLocaleTimeString()}</p>
  </div>
</div>
`;
  conversacion.innerHTML += elemento;
}

function chistes(){
  let campoTexto = document.querySelector(".message-input").value;
  let conversacion = document.querySelector(".chat-window");
  let conversacionBot = new prueba(campoTexto);
  let elemento = `
  <div class="conversacion">
  <h2 class="preguntas">${conversacionBot.texto}</h2>
  <div class="prueba">
    <img src="img/Boot.png" class="boot" alt="">
    <p class="convesacion">¿Por qué los astronautas no pueden tomar refresco? <br>Porque se les escapa el gas.</p>
  </div>
</div>
  `;
  conversacion.innerHTML += elemento;
}
function annett(){
  let campoTexto = document.querySelector(".message-input").value;
  let conversacion = document.querySelector(".chat-window");
  let conversacionBot = new prueba(campoTexto);
  let elemento = `
  <div class="conversacion">
  <h2 class="preguntas">${conversacionBot.texto}</h2>
  <div class="prueba">
    <img src="img/Boot.png" class="boot" alt="">
    <p class="convesacion">Hola Annette, dice apolinar que no borres las empresas de compaqi,por favor <br> (╯°□°）╯︵ ┻━┻</p>
  </div>
</div>
  `;
  conversacion.innerHTML += elemento;
}

function May(){
  let campoTexto = document.querySelector(".message-input").value;
  let conversacion = document.querySelector(".chat-window");
  let conversacionBot = new prueba(campoTexto);
  let elemento = `
  <div class="conversacion">
  <h2 class="preguntas">${conversacionBot.texto}</h2>
  <div class="prueba">
    <img src="img/Boot.png" class="boot" alt="">
    <p class="convesacion">Hola Maydeli<br> Dice apolinar que cuides la pila de tu computadora ,por favor <br> (☞ﾟヮﾟ)☞</p>
  </div>
</div>
  `;
  conversacion.innerHTML += elemento;
}

function dul(){
  let campoTexto = document.querySelector(".message-input").value;
  let conversacion = document.querySelector(".chat-window");
  let conversacionBot = new prueba(campoTexto);
  let elemento = `
  <div class="conversacion">
  <h2 class="preguntas">${conversacionBot.texto}</h2>
  <div class="prueba">
    <img src="img/Boot.png" class="boot" alt="">
    <p class="convesacion">Hola Dulce<br> Dice Apolinar que si le puedes mandar a pedir comida por que otra vez se le olvido traer su fruta </p>
  </div>
</div>
  `;
  conversacion.innerHTML += elemento;
}
function per(){
  let campoTexto = document.querySelector(".message-input").value;
  let conversacion = document.querySelector(".chat-window");
  let conversacionBot = new prueba(campoTexto);
  let elemento = `
  <div class="conversacion">
  <h2 class="preguntas">${conversacionBot.texto}</h2>
  <div class="prueba">
    <img src="img/Boot.png" class="boot" alt="">
    <p class="convesacion">Oye Oye Oye Oye Oye OyeOye Oye Oye Oye Oye Oye Oye OyeOye Oye Oye Oye Oye Oye Oye Oye Oye Oye Oye Oye Oye Oye Oye Oye Oye Oye Oye OyeOye Oye Oye Oye Oye Oye Oye OyeOye Oye Oye Oye Oye Oye Oye Oye Oye Oye Oye Oye Oye Oye
    <br>
    <br>
    Hola, me caes bien 😃 ༼ つ ◕_◕ ༽つ </p>
  </div>
</div>
  `;
  conversacion.innerHTML += elemento;
}
function edi(){
  let campoTexto = document.querySelector(".message-input").value;
  let conversacion = document.querySelector(".chat-window");
  let conversacionBot = new prueba(campoTexto);
  let elemento = `
  <div class="conversacion">
  <h2 class="preguntas">${conversacionBot.texto}</h2>
  <div class="prueba">
    <img src="img/Boot.png" class="boot" alt="">
    <p class="convesacion">Hola Edith, Dice Apolinar que bueno que ya hay una persona de marketing 😃👌 \^o^/</p>
  </div>
</div>
  `;
  conversacion.innerHTML += elemento;
}
/*
function prueba(){
  let textos = new Conversacion(conversacion);
  conversacion=document.querySelector('.texto').value
  console.log(conversacion)
}
*/

/*

function conversacionBoot() {
  let textos = texto.value;
  prueba(textos);
}
function prueba(conversacionBot) {
  if (saludos.filter((saludos) => saludos === conversacionBot).length > 0) {
    let nombre = "Bottie";
    let elemento = `
    <div class="contenedorPregunta">
    <p class="bot">${conversacionBot}</p>
  </div>
  <div class="respuestabot">
    <p class="bot">Hola, soy ${nombre} un gusto</p>
    <p class="bot">en que te puedo ayudar ??</p>
  </div>
  `;
    conversacion.innerHTML += elemento;
  } else if (hora.filter((hora) => hora == conversacionBot).length > 0) {
    let horas = new Hora();
    let minutos = new Hora();
    let segundos = new Hora();
    let elemento = `
    <div class="contenedorPregunta">
    <p class="bot">${conversacionBot}</p>
  </div>
  <div class="respuestabot">
    <p class="bot">Son las ${horas.horas}:${minutos.minutos}:${segundos.segundos}</p>
  </div>
  `;
    conversacion.innerHTML += elemento;
  } else if (fecha.filter((fecha) => fecha == conversacionBot).length > 0) {
    let hoy = new Mes();
    let elemento = `
    <div class="contenedorPregunta">
    <p class="bot">${conversacionBot}</p>
  </div>
  <div class="respuestabot">
    <p class="bot">Hoy es ${hoy.diaCompleto.toDateString()}</p>
  </div>
  `;
    conversacion.innerHTML += elemento;
  }
}

/*
  else if (horayFecha.indexOf(conversacionBot)) {
    let now= new Date()
    let elemento = `
    <div class="contenedorPregunta">
    <p class="bot">${textos}</p>
  </div>
  <div class="respuestabot">
  <span class="bot">${now}</span>
</div>
  `;
  conversacion.innerHTML += elemento;

  }
}


 let pruebaFilter = saludos.filter((saludos) => saludos === conversacionBot);
  let nombre = "Bottie";
  let elemento = `
  <div class="contenedorPregunta">
  <p class="bot">${pruebaFilter}</p>
</div>
<div class="respuestabot">
  <p class="bot">Hola, soy ${nombre} un gusto</p>
  <p class="bot">en que te puedo ayudar ??</p>
</div>
`;
conversacion.innerHTML += elemento;
*/

/*
function saludo() {
  const miRespuesta= setTimeout(nose,100)
  const respuestaBoot= setTimeout(nose2,1000)
}
function nose(text){
    let elemento = `
    <div class="contenedorPregunta">
    <p class="bot">${textos}</p>
  </div>`
  conversacion.innerHTML += elemento;
  
}

function nose2(){
    let nombre = "Bottie";
    let elemento = `
    <div class="respuestabot">
    <p class="bot">Hola, soy ${nombre} un gusto</p>
    <p class="bot">en que te puedo ayudar ??</p>
  </div>
 `;
  conversacion.innerHTML += elemento;

}


/*
let datos = [];
function datosBoot(){

datos.push(conversacion);
if (datos.includes("Hola")) {
  console.log("fffff");
}

}
*/

/*

function boot(preguntaBot) {

  let preguntaBot = texto.value;
  let ConversionPregunta = preguntaBot.toLowerCase();
  if (ConversionPregunta == "hola") {
    let elemento = `
     <div class="respuesta">
<p class="bot">${preguntaBot}</p>
 </div>
 `;
    conversacion.innerHTML += elemento;
    setTimeout(() => {
      preguntaBot = texto.value = "";
    }, 500);
    setTimeout(() => {
      respuestaHola();
    }, 1000);
  }
  if (ConversionPregunta == "como estas") {
    let elemento = `
     <div class="respuesta">
<p class="bot">${preguntaBot}</p>
 </div>
 `;
    conversacion.innerHTML += elemento;
    setTimeout(() => {
      preguntaBot = texto.value = "";
    }, 500);
    setTimeout(() => {
      respuestaComoEstas();
    }, 1000);
  }
}

function respuestaHola() {
  let elemento = `
     <div class="conversacion">
     <p class="respuestayo">Hola, mucho gusto</p>
     </div>`;
  conversacion.innerHTML += elemento;
}
function respuestaComoEstas() {
  let elemento = `
     <div class="conversacion">
     <p class="respuestayo">Bien y tu ??</p>
     </div>`;
  conversacion.innerHTML += elemento;
}
*/
