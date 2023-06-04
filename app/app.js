import {
  saludos,
  hora,
  chiste,
  chistes,
  chisme,
  chism,
  horoscopos,
  datosHoroscopos,
} from "../array/Datos.js";

let botonEnviar = document.querySelector(".send-button");

botonEnviar.addEventListener("click", nose);
window.addEventListener("DOMContentLoaded", (event) => {
  Swal.fire({
    title: "Hola soy bottie",
    text:
      "Te mostrare que me puedes preguntar en este momento ," +
      "puedes escribirme: chisme o chismesito,chiste,chistes,hola,hora,Horoscopos",
  });
});

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
  } else if (
    chiste.filter((chiste) => chiste == nuevaConversacion.texto).length > 0
  ) {
    chist();
  } else if (
    chisme.filter((chisme) => chisme == nuevaConversacion.texto).length > 0
  ) {
    chismu();
  } else if (
    horoscopos.filter((horoscopos) => horoscopos == nuevaConversacion.texto)
      .length > 0
  ) {
    horoscopo();
  } else {
    proximamente();
  }
}

function horoscopo() {
  let campoTexto = document.querySelector(".message-input").value;
  let conversacion = document.querySelector(".chat-window");
  let conversacionBot = new prueba(campoTexto);
  switch (conversacionBot.texto) {
    case "Aries":
    case "Aries ":
      let elemento = `
  <div class="conversacion">
  <h2 class="preguntas">${conversacionBot.texto}</h2>
  <div class="prueba">
    <img src="img/Boot.png" class="boot" alt="">
    <div class="chisme">
    <p clas='descripcion'>${datosHoroscopos[0].mensaje}</p>
    <div class="container__galeria">
</div>
    </div>
  </div>
</div>
  `;
      conversacion.innerHTML += elemento;
      limpiarInput();
      break;
    case "Tauros":
    case "Tauros ":
      let elementoTauro = `
  <div class="conversacion">
  <h2 class="preguntas">${conversacionBot.texto}</h2>
  <div class="prueba">
    <img src="img/Boot.png" class="boot" alt="">
    <div class="chisme">
    <p clas='descripcion'>${datosHoroscopos[1].mensaje}</p>
    <div class="container__galeria">
</div>
    </div>
  </div>
</div>
  `;
      conversacion.innerHTML += elementoTauro;
      break;

    case "Cancer":
    case "Cancer ":
      let elementoCancer = `
  <div class="conversacion">
  <h2 class="preguntas">${conversacionBot.texto}</h2>
  <div class="prueba">
    <img src="img/Boot.png" class="boot" alt="">
    <div class="chisme">
    <p clas='descripcion'>${datosHoroscopos[3].mensaje}</p>
    <div class="container__galeria">
</div>
    </div>
  </div>
</div>
  `;
      conversacion.innerHTML += elementoCancer;
      limpiarInput();
      break;
    case "Libra":
    case "Libra ":
      let elementoLibra = `
  <div class="conversacion">
  <h2 class="preguntas">${conversacionBot.texto}</h2>
  <div class="prueba">
    <img src="img/Boot.png" class="boot" alt="">
    <div class="chisme">
    <p clas='descripcion'>${datosHoroscopos[6].mensaje}</p>
    <div class="container__galeria">
</div>
    </div>
  </div>
</div>
  `;
      conversacion.innerHTML += elementoLibra;
      limpiarInput();
      break;

    case "Géminis":
    case "Géminis ":
      let elementoGeminis = `
      <div class="conversacion">
      <h2 class="preguntas">${conversacionBot.texto}</h2>
      <div class="prueba">
        <img src="img/Boot.png" class="boot" alt="">
        <div class="chisme">
        <p clas='descripcion'>${datosHoroscopos[2].mensaje}</p>
        <div class="container__galeria">
    </div>
        </div>
      </div>
    </div>
      `;
      conversacion.innerHTML += elementoGeminis;
      limpiarInput();
      break;

    case "Leo":
    case "Leo ":
      let elementoLeo = `
          <div class="conversacion">
          <h2 class="preguntas">${conversacionBot.texto}</h2>
          <div class="prueba">
            <img src="img/Boot.png" class="boot" alt="">
            <div class="chisme">
            <p clas='descripcion'>${datosHoroscopos[4].mensaje}</p>
            <div class="container__galeria">
        </div>
            </div>
          </div>
        </div>
          `;
      conversacion.innerHTML += elementoLeo;
      limpiarInput();
      break;

    case "Virgo":
    case "Virgo ":
      let elementovirgo = `
              <div class="conversacion">
              <h2 class="preguntas">${conversacionBot.texto}</h2>
              <div class="prueba">
                <img src="img/Boot.png" class="boot" alt="">
                <div class="chisme">
                <p clas='descripcion'>${datosHoroscopos[5].mensaje}</p>
                <div class="container__galeria">
            </div>
                </div>
              </div>
            </div>
              `;
      conversacion.innerHTML += elementovirgo;
      limpiarInput();
      break;

    case "Escorpio":
    case "Escorpio ":
      let elementoescorpio = `
                  <div class="conversacion">
                  <h2 class="preguntas">${conversacionBot.texto}</h2>
                  <div class="prueba">
                    <img src="img/Boot.png" class="boot" alt="">
                    <div class="chisme">
                    <p clas='descripcion'>${datosHoroscopos[7].mensaje}</p>
                    <div class="container__galeria">
                </div>
                    </div>
                  </div>
                </div>
                  `;
      conversacion.innerHTML += elementoescorpio;
      limpiarInput();
      break;

    case "Sagitario":
    case "Sagitario ":
      let elementoSagitorio = `
                      <div class="conversacion">
                      <h2 class="preguntas">${conversacionBot.texto}</h2>
                      <div class="prueba">
                        <img src="img/Boot.png" class="boot" alt="">
                        <div class="chisme">
                        <p clas='descripcion'>${datosHoroscopos[8].mensaje}</p>
                        <div class="container__galeria">
                    </div>
                        </div>
                      </div>
                    </div>
                      `;
      conversacion.innerHTML += elementoSagitorio;
      limpiarInput();
      break;

    case "Capricornio":
    case "Capricornio ":
      let elementoCapricornio = `
                          <div class="conversacion">
                          <h2 class="preguntas">${conversacionBot.texto}</h2>
                          <div class="prueba">
                            <img src="img/Boot.png" class="boot" alt="">
                            <div class="chisme">
                            <p clas='descripcion'>${datosHoroscopos[9].mensaje}</p>
                            <div class="container__galeria">
                        </div>
                            </div>
                          </div>
                        </div>
                          `;
      conversacion.innerHTML += elementoCapricornio;
      limpiarInput();
      break;

    case "Acuario":
    case "Acuario ":
      let elementoAcuario = `
                              <div class="conversacion">
                              <h2 class="preguntas">${conversacionBot.texto}</h2>
                              <div class="prueba">
                                <img src="img/Boot.png" class="boot" alt="">
                                <div class="chisme">
                                <p clas='descripcion'>${datosHoroscopos[10].mensaje}</p>
                                <div class="container__galeria">
                            </div>
                                </div>
                              </div>
                            </div>
                              `;
      conversacion.innerHTML += elementoAcuario;
      limpiarInput();
      break;

    case "Piscis":
    case "Piscis ":
      let elementoPiscis = `
                                  <div class="conversacion">
                                  <h2 class="preguntas">${conversacionBot.texto}</h2>
                                  <div class="prueba">
                                    <img src="img/Boot.png" class="boot" alt="">
                                    <div class="chisme">
                                    <p clas='descripcion'>${datosHoroscopos[11].mensaje}</p>
                                    <div class="container__galeria">
                                </div>
                                    </div>
                                  </div>
                                </div>
                                  `;
      conversacion.innerHTML += elementoPiscis;
      limpiarInput();
      break;

    default:
      let elementoSinopcion = `
      <div class="conversacion">
      <h2 class="preguntas">${conversacionBot.texto}</h2>
      <div class="prueba">
        <img src="img/Boot.png" class="boot" alt="">
        <div class="chisme">
        <p clas='descripcion'>Por el momento esta opcion no se encuentra, por favor vulva a intentarlo</p>
        <div class="container__galeria">
    </div>
        </div>
      </div>
    </div>
      `;
      conversacion.innerHTML += elementoSinopcion;
      limpiarInput();
      break;
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
  limpiarInput();
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

  limpiarInput();
}

function chist() {
  let campoTexto = document.querySelector(".message-input").value;
  let conversacion = document.querySelector(".chat-window");
  let conversacionBot = new prueba(campoTexto);
  let fraseAleatoria = chistes[Math.floor(Math.random() * chistes.length)];
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
  limpiarInput();
}
function chismu() {
  let campoTexto = document.querySelector(".message-input").value;
  let conversacion = document.querySelector(".chat-window");
  let conversacionBot = new prueba(campoTexto);
  let indice = Math.floor(Math.random() * chism.length);

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
  limpiarInput();
}

function proximamente() {
  let campoTexto = document.querySelector(".message-input").value;
  let conversacion = document.querySelector(".chat-window");
  let conversacionBot = new prueba(campoTexto);
  let elemento = `

  <div class="conversacion">
  <h2 class="preguntas">${conversacionBot.texto}</h2>
  <div class="prueba">
    <img src="img/Boot.png" class="boot" alt="">
    <div class="chisme">
    <p clas='descripcion'>Por el momento esta opcion no se encuentra, por favor vulva a intentarlo</p>
    <div class="container__galeria">
</div>
    </div>
  </div>
</div>

  `;
  conversacion.innerHTML += elemento;
  limpiarInput();
}

function limpiarInput() {
  setTimeout(() => {
    
  let  campoTexto = document.querySelector(".message-input").value = "";
  }, 1000);
}
