const videoSheeter = document.querySelectorAll('.vid-demo'); 
function ocultarTodos(elementosVisibles = []) {
  for (let i = 0; i < allContenedores.length; i++) {
    const id = allContenedores[i];
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.style.display = elementosVisibles.includes(id) ? 'flex' : 'none';
    }
  }
}
function mostrarTodos() {
  for (let i = 0; i < allContenedores.length; i++) {
    const elemento = document.getElementById(allContenedores[i])
    if (elemento) {
      elemento.style.display = 'flex'
    }
  }
}
document.querySelector('#contenedor-botonera button:nth-child(1)').addEventListener('click', () =>{
  mostrarElementos(['butts-simulador', 'contenedor-botonera','search-form','buscador','links-inicialesI','links-iniciales'])
  document.querySelector('#contenedor-1').style.display = 'grid'
  document.querySelector('.calendar-container').style.display = 'grid'
})
document.querySelector('#contenedor-botonera button:nth-child(2)').addEventListener('click', () => {
  mostrarElementos(['contenedor-sheeter','butts-simulador', 'contenedor-botonera','search-form','buscador','links-inicialesI','links-iniciales'])
  const contenedor = document.querySelector('#contenedor-sheeter')
  contenedor.style.top='15vh'
  contenedor.style.left='25vw'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()
})
document.querySelector('#contenedor-botonera button:nth-child(3)').addEventListener('click', () =>{
  mostrarElementos(['image-uno','butts-simulador', 'contenedor-botonera','search-form','buscador','links-inicialesI','links-iniciales'])
})
document.querySelector('#contenedor-botonera button:nth-child(4)').addEventListener('click', () =>{
  ocultarTodos(['image-tres', 'image-cuatro'])
  setTimeout(() => {
    const imagen = document.querySelector("#image-cuatro");
    // Evita que se vuelva a activar si ya está en rotación
    if (!imagen.classList.contains("rotando")) {
      imagen.classList.add("rotando");
      // Opcional: Remueve la clase después de la animación para poder volver a girar
      setTimeout(() => {
      imagen.classList.remove("rotando");
      }, 1000); // Debe coincidir con la duración de la animación en CSS (1s)
    }      
  }, 100);
  setTimeout(() => {
    const imagen = document.querySelector("#image-cuatro");
    let escala = 1; // Tamaño inicial  
    const intervalo = setInterval(() => {
      if (escala >= 3) {
        clearInterval(intervalo); // Detiene el aumento al llegar a 7X
      } else {
        escala += 0.1; // Incremento progresivo
        imagen.style.transform = `scale(${escala})`;
      }
    }, 50); 
  }, 1000);
})
document.querySelector('#contenedor-botonera button:nth-child(5)').addEventListener('click', () => {
  var elementosExcluidos = ['']  
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        const contenedor = document.querySelector('#formulario-cuenta').style.display = 'grid'
    }
  }

})
document.querySelector('#contenedor-botonera button:nth-child(6)').addEventListener('click', () => {
    var elementosExcluidos = ['']  
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
      const contenedor = document.querySelector('#home-gym').style.display = 'grid'
    }
  }
})
function alternarImagenes() {
  const imgUno = document.getElementById("image-uno");
  const imgDos = document.getElementById("image-tres");

  imgUno.style.opacity = "1"; // Asegurar que inicia visible
  imgDos.style.opacity = "0"; // Asegurar que inicia oculto

  // Aplicar transición de desvanecimiento
  imgUno.style.transition = "opacity 2s ease-in-out";
  imgDos.style.transition = "opacity 2s ease-in-out";

  setTimeout(() => {
      imgUno.style.opacity = "0"; // Se desvanece
      imgDos.style.opacity = "1"; // Aparece
  }, 100); // Pequeño retraso para asegurar que la transición se active
}
function aplicarEstiloActivo(spanClicado) {
  const spans = document.querySelectorAll('.etq-frm');
  spans.forEach(span => {
    span.style.backgroundColor = '';
    span.style.color = '';
  });
  spanClicado.style.backgroundColor='#00cc88'

  spanClicado.style.color = 'black';
}
document.querySelector('.formulario-crear-cuenta :nth-child(2)').addEventListener('click', (e) => {
  ocultarTodos(['imagenes-sheeter'])
  const coleccionSpans = document.querySelectorAll('.etq-frm')
  document.querySelector('#imagenes-sheeter').style.display = 'grid'
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  document.querySelectorAll('.imagenes-cortador').forEach(img => {
    img.classList.remove('imagen-expandida');
  });
  ocultarTodos()
  document.querySelector('#formulario-cuenta').style.display = 'grid'           
  document.querySelector('#imagenes-sheeter').style.display = 'grid'
  document.querySelector('#img-cuchilla-1').style.display = 'flex'
  document.querySelector('#img-cuchilla-2').style.display = 'flex'
  document.querySelector('#img-cuchilla-3').style.display = 'flex'
  document.querySelector('#img-cuchilla-4').style.display = 'flex'
  const contenedor = document.querySelector('#imagenes-sheeter')
  contenedor.style.position = 'absolute'
  contenedor.style.left='26vw'
  aplicarEstiloActivo(e.target);
});
document.querySelector('.formulario-crear-cuenta :nth-child(3)').addEventListener('click', (e) => {
  ocultarTodos(['contenedor-sheeter'])
  const contenedor = document.querySelector('#contenedor-sheeter')
  contenedor.style.left = '';
  contenedor.style.top = '';

  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()
  setTimeout(() => {
    mostrarAyudas('visor')
  }, 500);
  aplicarEstiloActivo(e.target);
});
document.querySelector('.formulario-crear-cuenta :nth-child(4)').addEventListener('click', (e) => {
  ocultarTodos(['video-graduar-sheeter'])
  const contenedor = document.querySelector('#video-graduar-sheeter')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play() 
  aplicarEstiloActivo(e.target);
});
document.querySelector('.formulario-crear-cuenta :nth-child(5)').addEventListener('click', (e) => {
  ocultarTodos(['corte-ajuste','corte-oscilacion','ajuste-corte'])
  const contenedor = document.querySelector('#corte-ajuste')
  const contenedorI = document.querySelector('#corte-oscilacion')
  const contenedorII = document.querySelector('#ajuste-corte')
  document.querySelector('#triada-videos').style.display = 'grid'
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  aplicarEstiloActivo(e.target);
});
document.querySelector('.formulario-crear-cuenta :nth-child(6)').addEventListener('click', (e) => {
  ocultarTodos(['video-la-manta'])
  const contenedor = document.querySelector('#video-la-manta')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
  aplicarEstiloActivo(e.target);
});
document.querySelector('.formulario-crear-cuenta :nth-child(7)').addEventListener('click', (e) => {
  ocultarTodos(['video-manta-render'])
  const contenedor = document.querySelector('#video-manta-render')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
  aplicarEstiloActivo(e.target);
});
document.querySelector('.formulario-crear-cuenta :nth-child(8)').addEventListener('click', (e) => {
  ocultarTodos(['video-manta-dos'])
  const contenedor = document.querySelector('#video-manta-dos')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
  aplicarEstiloActivo(e.target);
});
document.querySelector('.formulario-crear-cuenta :nth-child(9)').addEventListener('click', (e) => {
  ocultarTodos(['video-completo'])
  const contenedor = document.querySelector('#video-completo')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
  aplicarEstiloActivo(e.target);
});
document.querySelector('.formulario-crear-cuenta :nth-child(10)').addEventListener('click', (e) => {
  ocultarTodos(['video-cadena-offset'])
  const contenedor = document.querySelector('#video-cadena-offset')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
  aplicarEstiloActivo(e.target);
});
document.querySelector('.formulario-crear-cuenta :nth-child(11)').addEventListener('click', (e) => {
  ocultarTodos(['video-manta-enrolla'])
  const contenedor = document.querySelector('#video-manta-enrolla')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
  aplicarEstiloActivo(e.target);
});
document.querySelector('.formulario-crear-cuenta :nth-child(12)').addEventListener('click', (e) => {
  ocultarTodos(['video-manta-capas'])
  const contenedor = document.querySelector('#video-manta-capas')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
  aplicarEstiloActivo(e.target);
});
document.querySelector('.formulario-crear-cuenta :nth-child(13)').addEventListener('click', (e) => {
  ocultarTodos(['video-desliza-plancha'])
  const contenedor = document.querySelector('#video-desliza-plancha')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
  aplicarEstiloActivo(e.target);
});
document.querySelector('.formulario-crear-cuenta :nth-child(14)').addEventListener('click', (e) => {
  ocultarTodos(['video-insolacion'])
  const contenedor = document.querySelector('#video-insolacion')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play() 
  aplicarEstiloActivo(e.target);
});
document.querySelector('.formulario-crear-cuenta :nth-child(15)').addEventListener('click', (e) => {
  ocultarTodos(['video-doctor-blade'])
  const contenedor = document.querySelector('#video-doctor-blade')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play() 
  aplicarEstiloActivo(e.target);
});
document.querySelector('.formulario-crear-cuenta :nth-child(16)').addEventListener('click', (e) => {
  ocultarTodos(['tintero-interior'])
  const contenedor = document.querySelector('#tintero-interior')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play() 
  aplicarEstiloActivo(e.target);
});
document.querySelector('.formulario-crear-cuenta :nth-child(17)').addEventListener('click', (e) => {
  ocultarTodos(['tintero-palanca'])
  const contenedor = document.querySelector('#tintero-palanca')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
  aplicarEstiloActivo(e.target);
});
document.querySelector('.formulario-crear-cuenta :nth-child(18)').addEventListener('click', (e) => {
  ocultarTodos(['tinta_segmento'])
  const contenedor = document.querySelector('#tinta_segmento')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
  aplicarEstiloActivo(e.target);
});
document.querySelector('.formulario-crear-cuenta :nth-child(19)').addEventListener('click', (e) => {
  ocultarTodos(['trinquete-rodillo-tintero-v'])
  const contenedor = document.querySelector('#trinquete-rodillo-tintero-v')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play() 
  aplicarEstiloActivo(e.target);
});
document.querySelector('.formulario-crear-cuenta :nth-child(20)').addEventListener('click', (e) => {
  ocultarTodos(['trinquete'])
  const contenedor = document.querySelector('#trinquete')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
  aplicarEstiloActivo(e.target);
});
document.querySelector('.formulario-crear-cuenta :nth-child(21)').addEventListener('click', (e) => {
  ocultarTodos(['trinquete-multi'])
  const contenedor = document.querySelector('#trinquete-multi')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
  aplicarEstiloActivo(e.target);
});
document.querySelector('.formulario-crear-cuenta :nth-child(22)').addEventListener('click', (e) => {
  ocultarTodos(['trinquete-rodillo-tintero'])
  const contenedor = document.querySelector('#trinquete-rodillo-tintero')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
  aplicarEstiloActivo(e.target);
});
const labels = document.querySelectorAll('#formulario-cuenta label');
labels.forEach(label => {
  label.addEventListener('click', () => {
    labels.forEach(l => l.classList.remove('label-activa'));
    label.classList.add('label-activa');
  });
});
// Capturamos los 3 videos
const video1 = document.querySelector('#corte-ajuste video');
const video2 = document.querySelector('#corte-oscilacion video');
const video3 = document.querySelector('#ajuste-corte video');
// Los agrupamos en un array
const videos = [video1, video2, video3];
// Función general para manejar el clic en cualquier video
function manejarClick(videoSeleccionado) {
  videos.forEach(video => {
    if (video === videoSeleccionado) {
      video.currentTime = 0;
      video.play().catch(error => {
        console.error('Error al reproducir video:', error);
      });
    } else {
      video.pause();
      video.currentTime = 0;
    }
  });
}
// Asignar el evento click a cada video
videos.forEach(video => {
  video.addEventListener('click', () => {
    manejarClick(video);
  });
});
const alojamiento = document.getElementById("imagenes-sheeter");
const imagenes = alojamiento.querySelectorAll("img");
imagenes.forEach((img, index) => {
  img.addEventListener("click", () => {

    if (index === 0 || index === 1) {
      ocultarTodos(['video-cuchilla'])
      document.querySelector('#formulario-cuenta').style.display = 'grid'
      const contenedor = document.querySelector('#video-cuchilla')  
      const video = contenedor.querySelector('video')
      video.currentTime = 0
      video.play()
    }
    if (index === 2 || index === 3) {
      ocultarTodos(['video-cuchilla-1'])
      document.querySelector('#formulario-cuenta').style.display = 'grid'
      const contenedor = document.querySelector('#video-cuchilla-1')  
      const video = contenedor.querySelector('video')
      video.currentTime = 0
      video.play()
    }
    
    // Ocultar todas excepto la clickeada
    imagenes.forEach(i => {
     i.style.display = "none";
    });

  });
});
videoSheeter.forEach(video => {
  video.addEventListener('click', () => {
    // Oculta todos los videos con clase 'vid-demo'
    document.querySelectorAll('.vid-demo').forEach(v => {
      v.style.display = 'none';
    });

    // Elimina la clase 'imagen-expandida' de todos los elementos con clase 'imagenes-cortador'
    document.querySelectorAll('.imagenes-cortador').forEach(img => {
      img.classList.remove('imagen-expandida');
    });
    ocultarTodos()
    document.querySelector('#formulario-cuenta').style.display = 'grid'           
    document.querySelector('#imagenes-sheeter').style.display = 'grid'
    document.querySelector('#img-cuchilla-1').style.display = 'flex'
    document.querySelector('#img-cuchilla-2').style.display = 'flex'
    document.querySelector('#img-cuchilla-3').style.display = 'flex'
    document.querySelector('#img-cuchilla-4').style.display = 'flex'
  });
});
const imgsVisor = [
  './assets/sheeter contra cuchilla.png',
  './assets/sheeter contra cuchilla_A.png',
  './assets/sheeter contra cuchilla_B.png',
  './assets/sheeter contra cuchilla_C.png',
  './assets/sheeter cuchilla giratoria.png',
  './assets/sheeter cuchilla giratoria_A.png',
  './assets/sheeter cuchilla giratoria_B.png',
  './assets/sheeter cuchilla giratoria_C.png',
  './assets/sheeter tornillo regulador.png',
  './assets/sheeter tornillo regulador_A.png',
  './assets/sheeter tornillo regulador_B.png',
  './assets/sheeter tornillo sujecion.png',
  './assets/sheeter tornillo sujecion_A.png',
  './assets/sheeter tornillo sujecion_B.png',
  './assets/llave 10.png',
  './assets/llave 8 mm.png',
];
const imgsVisorII = [
  './assets/aceite.jpg',
  './assets/aceitera.jpg',
  './assets/agua.png',
  './assets/antes 1.jpg',
  './assets/anodizado.jpg',
  './assets/cadena logo big.png'
];
let flagImgsVisor = false;
let flagImgsVisorII = false;
let actualPosicion = 0;
function showImage(index, imageArray) {
  const mainImage = document.getElementById('mainImage');
  mainImage.src = imageArray[index];
}
function prevImage() {
  let selectedArray;
  switch (true) {
    case flagImgsVisor:
      selectedArray = imgsVisor;
    break;
    case flagImgsVisorII:
      selectedArray = imgsVisorII;
    break;
    default:
      console.warn('No hay un array seleccionado');
    return;
  }
  actualPosicion = (actualPosicion - 1 + selectedArray.length) % selectedArray.length;
  showImage(actualPosicion, selectedArray);
}
function nextImage() {
  let selectedArray;
  switch (true) {
    case flagImgsVisor:
      selectedArray = imgsVisor;
      break;
    case flagImgsVisorII:
      selectedArray = imgsVisorII;
      break;
    default:
      console.warn('No hay un array seleccionado');
      return;
  }
  actualPosicion = (actualPosicion + 1) % selectedArray.length;
  showImage(actualPosicion, selectedArray);
}
function mostrarAyudas(parametro) {
  // Mostrar el visor
  document.querySelector('.image-viewer').style.display = 'grid';

  // Resetear todas las banderas
  flagImgsVisor = false;
  flagImgsVisorII = false;

  // Activar solo la bandera correspondiente
  switch (parametro) {
    case 'visor':
      flagImgsVisor = true;
      break;
    case 'visorII':
      flagImgsVisorII = true;
      break;
    default:
      console.warn('Parámetro inválido');
      return;
  }

  // Reiniciar posición y mostrar la primera imagen
  actualPosicion = 0;
  let selectedArray;
  switch (parametro) {
    case 'visor':
      selectedArray = imgsVisor;
      break;
    case 'visorII':
      selectedArray = imgsVisorII;
      break;
  }
  showImage(actualPosicion, selectedArray);
}
function mostrarElementos(visibles = [], tipoDisplayDefecto = "flex") {

  allContenedores.forEach(id => {
    const elem = document.getElementById(id);
    if (!elem) return;

    if (visibles.includes(id)) {
      const dataDisplay = elem.getAttribute("data-display");
      elem.style.display = dataDisplay || tipoDisplayDefecto;
    } else {
      elem.style.display = "none";
    }
  });

  switch (expresion) {
    case '':
    break;
    default:
    break;
  }
}
function mostrarElementos(visibles = [], tipoDisplayDefecto = "flex") {
  allContenedores.forEach(id => {
    const elem = document.getElementById(id);
    if (!elem) return;

    if (visibles.includes(id)) {
      const dataDisplay = elem.getAttribute("data-display");
      elem.style.display = dataDisplay || tipoDisplayDefecto;
    } else {
      elem.style.display = "none";
    }
  });
  const elementId = visibles[0];
  switch (elementId) {
    case 'cont-titulo-operacion':
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen(); // Método estándar
      } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { /* IE11 */
        document.documentElement.msRequestFullscreen();
      }
      animateScroll('agrupaOblicuos-XII')
      if (typeof elementId !== 'undefined') {
        const index = idsArray.indexOf(elementId);
        if (index !== -1) {
          idsArray.splice(index, 1);
        }
        idsArray.push(elementId);
        console.log(idsArray);  
      }
    break; 
    case "pantalla-inicial":
      setTimeout(() => {
        document.getElementById('gran-cortina').style.display='none'
      }, 500);
      document.body.style.zoom = "100%"
      if (typeof elementId !== 'undefined') {
        const index = idsArray.indexOf(elementId);
        if (index !== -1) {
          idsArray.splice(index, 1);
        }
        idsArray.push(elementId);
        console.log(idsArray);
      }
      firstClick = true;   
    break;
    default:
      /* alert("No se reconoció el primer elemento visible"); */
    break;
  }
}
function resaltarDiaSeleccionado(diaClicado) {
  const dias = document.querySelectorAll('.day-cell');
  dias.forEach(dia => {
    dia.style.backgroundColor = '';
    dia.style.color = ''; 
  });

  diaClicado.style.backgroundColor = '#00cc88';
  diaClicado.style.color = 'black';
}
document.querySelectorAll('.day-cell').forEach(dia => {
  dia.addEventListener('click', () => {
    resaltarDiaSeleccionado(dia);
  });
});


function actualizarAlturaBarra(contenedorPadre, nuevaAltura) {
  // Verifica si el contenedor tiene un hijo con la clase .bar
  const barra = contenedorPadre.querySelector('.bar');
  if (barra) {
    barra.style.height = nuevaAltura;
  } else {
    console.warn('No se encontró un div con clase .bar dentro del contenedor proporcionado');
  }
}

// Selecciona el segundo contenedor de barra
const primerContenedor = document.querySelectorAll('.bar-container')[0];
const segundoContenedor = document.querySelectorAll('.bar-container')[1];
const tercerContenedor = document.querySelectorAll('.bar-container')[2];
const cuartoContenedor = document.querySelectorAll('.bar-container')[3];
const quintoContenedor = document.querySelectorAll('.bar-container')[4];
const sextoContenedor = document.querySelectorAll('.bar-container')[5];
const septimoContenedor = document.querySelectorAll('.bar-container')[6];


const diasMes = document.querySelectorAll('.day-cell');


const datosPorDia = {
  1: ['75%', '55%', '35%', '87%', '90%', '22%', '67%'],
  2: ['37%', '82%', '77%', '22%', '5%', '88%', '97%'],
  3: ['12%', '33%', '65%', '41%', '69%', '11%', '23%'],
  4: ['58%', '49%', '36%', '72%', '84%', '15%', '66%'],
  5: ['90%', '44%', '29%', '53%', '61%', '77%', '35%'],
  6: ['26%', '61%', '42%', '38%', '93%', '70%', '18%'],
  7: ['13%', '47%', '78%', '55%', '80%', '99%', '30%'],
  8: ['40%', '59%', '32%', '76%', '69%', '25%', '88%'],
  9: ['60%', '31%', '83%', '28%', '74%', '39%', '92%'],
  10: ['81%', '63%', '56%', '34%', '91%', '17%', '46%'],
  11: ['24%', '70%', '48%', '62%', '79%', '52%', '11%'],
  12: ['50%', '22%', '68%', '94%', '35%', '85%', '19%'],
  13: ['43%', '75%', '20%', '57%', '98%', '27%', '86%'],
  14: ['87%', '66%', '14%', '37%', '71%', '96%', '33%'],
  15: ['45%', '21%', '61%', '99%', '12%', '58%', '74%'],
  16: ['73%', '36%', '54%', '83%', '25%', '91%', '47%'],
  17: ['62%', '11%', '90%', '40%', '66%', '78%', '32%'],
  18: ['39%', '57%', '13%', '71%', '93%', '26%', '80%'],
  19: ['31%', '95%', '84%', '19%', '44%', '55%', '67%'],
  20: ['88%', '29%', '76%', '51%', '60%', '38%', '15%'],
  21: ['92%', '42%', '17%', '85%', '34%', '73%', '27%'],
  22: ['33%', '64%', '26%', '48%', '79%', '13%', '95%'],
  23: ['98%', '30%', '59%', '81%', '20%', '43%', '70%'],
  24: ['65%', '18%', '74%', '97%', '50%', '60%', '41%'],
  25: ['77%', '93%', '24%', '36%', '89%', '12%', '53%'],
  26: ['69%', '87%', '16%', '45%', '31%', '82%', '22%'],
  27: ['53%', '20%', '63%', '90%', '17%', '44%', '79%'],
  28: ['80%', '35%', '96%', '23%', '58%', '67%', '14%'],
  29: ['46%', '28%', '91%', '70%', '39%', '21%', '83%'],
  30: ['94%', '62%', '19%', '88%', '33%', '75%', '48%'],
  31: ['50%', '60%', '70%', '80%', '90%', '100%', '30%']
};

const contenedores = [
  primerContenedor,
  segundoContenedor,
  tercerContenedor,
  cuartoContenedor,
  quintoContenedor,
  sextoContenedor,
  septimoContenedor
];

diasMes.forEach(dia => {
  dia.addEventListener('click', () => {
    const numeroDia = parseInt(dia.textContent.trim());
    const alturas = datosPorDia[numeroDia];

    if (!alturas) return;

    alturas.forEach((altura, i) => {
      setTimeout(() => {
        actualizarAlturaBarra(contenedores[i], altura);
      }, 177 + i * 67); // escalonado como antes
    });
  });
});
