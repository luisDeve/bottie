import { saludos, hora,chiste,chistes,chisme,chism} from "../array/Datos.js";

let botonEnviar = document.querySelector(".send-button");

botonEnviar.addEventListener("click", nose);
window.addEventListener('DOMContentLoaded',(event)=>{
  Swal.fire({
    title:'Hola soy bottie',
    text: 'Te mostrare que me puedes preguntar en este momento ,'+'puedes escribirme: chisme o chismesito,chiste,chistes,hola,hora',
  }
  )
})

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
    chist()
  }else if(chisme.filter((chisme)=>chisme==nuevaConversacion.texto).length>0){
    chismu()
  }
  else{
proximamente()
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
    <div class="chisme">
    <p clas='descripcion'>Hola, soy ${nombre} un gusto, <br>en que te puedo ayudar ??</p>
    <div class="container__galeria">
</div>
    </div>
  </div>
</div>
  `;
  conversacion.innerHTML += elementoNombre;
  setTimeout(() => {
    campoTexto = document.querySelector(".message-input").value=""
  }, 1000);
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
    <div class="chisme">
    <p clas='descripcion'>son las${hora.toLocaleTimeString()}</p>
    <div class="container__galeria">
</div>
    </div>
  </div>
</div>
`;
  conversacion.innerHTML += elemento;

  setTimeout(() => {
    campoTexto = document.querySelector(".message-input").value=""
  }, 1000);

}


function chist(){
  let campoTexto = document.querySelector(".message-input").value;
  let conversacion = document.querySelector(".chat-window");
  let conversacionBot = new prueba(campoTexto);
  let fraseAleatoria=chistes[Math.floor(Math.random()*chistes.length)]
  let elemento = `
  <div class="conversacion">
  <h2 class="preguntas">${conversacionBot.texto}</h2>
  <div class="prueba">
    <img src="img/Boot.png" class="boot" alt="">
    <div class="chisme">
    <p clas='descripcion'>${fraseAleatoria}</p>
    <div class="container__galeria">
</div>
    </div>
  </div>
</div>
  `;
  conversacion.innerHTML += elemento;
  setTimeout(() => {
    campoTexto = document.querySelector(".message-input").value=""
  }, 1000);
}
  function chismu(){
    let campoTexto = document.querySelector(".message-input").value;
    let conversacion = document.querySelector(".chat-window");
    let conversacionBot = new prueba(campoTexto);
    let  indice= Math.floor(Math.random()*chism.length)

    let elemento = `
    <div class="conversacion">
    <h2 class="preguntas">${conversacionBot.texto}</h2>
    <div class="prueba">
      <img src="img/Boot.png" class="boot" alt="">
      <div class="chisme">
      <h1 class='titulo'>${chism[indice].titulo}</h1>
      <p clas='descripcion'>${chism[indice].descripcion}</p>
      <div class="container__galeria">
      <img src="${chism[indice].imagen}" class='imagen' alt="imagen">
</div>
     
      </div>
    </div>
  </div>
    `;
    conversacion.innerHTML += elemento;
    setTimeout(() => {
      campoTexto = document.querySelector(".message-input").value=""
    }, 1000);
  }
  /*
  function horos(){
    let campoTexto = document.querySelector(".message-input").value;
    let conversacion = document.querySelector(".chat-window");
    let conversacionBot = new prueba(campoTexto);
    for(horosc of horoscopos){
      if(campoTexto[horosc].horoscopos==='Aries'){
        console.log('Hola')
      }
    }
  }
*/

function proximamente(){
  let campoTexto = document.querySelector(".message-input").value;
  let conversacion = document.querySelector(".chat-window");
  let conversacionBot = new prueba(campoTexto);
  let elemento = `

  <div class="conversacion">
  <h2 class="preguntas">${conversacionBot.texto}</h2>
  <div class="prueba">
    <img src="img/Boot.png" class="boot" alt="">
    <div class="chisme">
    <p clas='descripcion'>Hola por el momento la persona que me creo no a creado esa opción, si lo mira que esta haciendose wey,mandelo a crear esa opcion lo mas pronto posible </p>
    <div class="container__galeria">
</div>
    </div>
  </div>
</div>

  `;
  conversacion.innerHTML += elemento;
  setTimeout(() => {
    campoTexto = document.querySelector(".message-input").value=""
  }, 1000);
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
