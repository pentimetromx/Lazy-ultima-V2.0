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

  video.pause();
  video.currentTime = 0
  if (video.readyState >= 4) {
    video.play().catch(err => {
      console.log('Error al reproducir video:', err);
    });
  } else {
    // Si aún no está listo, esperamos el evento canplaythrough:
    const reproducirCuandoListo = () => {
      video.removeEventListener('canplaythrough', reproducirCuandoListo);
      video.play().catch(err => {
        console.log('Error al reproducir video:', err);
      });
    };
    video.addEventListener('canplaythrough', reproducirCuandoListo);
  }

})
document.querySelector('#contenedor-botonera button:nth-child(3)').addEventListener('click', () =>{
  mostrarElementos(['image-uno','butts-simulador', 'contenedor-botonera','search-form','buscador','links-inicialesI','links-iniciales'])
})
document.querySelector('#contenedor-botonera button:nth-child(4)').addEventListener('click', () => {
  ocultarTodos(['image-tres', 'image-cuatro']);

  setTimeout(() => {
    const contenedor = document.querySelector("#image-cuatro");
    const img = contenedor.querySelector("img");

    if (!img.src) {
      img.src = img.dataset.src;
    }

    if (!contenedor.classList.contains("rotando")) {
      contenedor.classList.add("rotando");

      setTimeout(() => {
        contenedor.classList.remove("rotando");
      }, 1000);
    }

    setTimeout(() => {
      let escala = 1;
      const intervalo = setInterval(() => {
        if (escala >= 3) {
          clearInterval(intervalo);
        } else {
          escala += 0.1;
          contenedor.style.transform = `scale(${escala})`;
        }
      }, 50);
    }, 1000);

  }, 100);
});
document.querySelector('#contenedor-botonera button:nth-child(5)').addEventListener('click', () => {
  var elementosExcluidos = ['']
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
      document.querySelector('#formulario-cuenta').style.display = 'grid'
      /* ["porta-visor"].forEach(id => aparecerElemento(id, "flex")); */
      /* ["marco-formulario"].forEach(id => aparecerElemento(id, "flex")); */

    }
  }

   manejarTransicion('child-move-azul', 'formulario-cuenta', 'marco-formulario',100);
   resaltarSecuencial();   
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
  spanClicado.style.backgroundColor = '#00cc88';
  spanClicado.style.color = 'black';
  const index = Array.from(spans).indexOf(spanClicado);
  if (index === 3) {
    const elementos = document.querySelectorAll('.ajuste-corte');
    elementos.forEach(el => {
      el.style.display = 'block';
    });
  }
}
const labels = document.querySelectorAll('#formulario-cuenta label');
labels.forEach(label => {
  label.addEventListener('click', () => {
    labels.forEach(l => l.classList.remove('label-activa'));
    label.classList.add('label-activa');
  });
});

const configIndex = [
  { id: 'imagenes-sheeter', extra: () => {
      document.querySelectorAll('.imagenes-cortador').forEach(img => {
        img.classList.remove('imagen-expandida');
      });
      const cont = document.querySelector('#imagenes-sheeter');
      cont.style.position = 'absolute';
      cont.style.left = '26vw';
    }},
  { id: 'contenedor-sheeter', extra: () => setTimeout(() => mostrarAyudas('visor'), 500) },
  { id: 'video-graduar-sheeter' },
  { id: 'triada-videos' },
  { id: 'video-la-manta' },
  { id: 'video-manta-render' },
  { id: 'video-manta-dos' },
  { id: 'video-completo' },
  { id: 'video-cadena-offset' },
  { id: 'video-manta-enrolla' },
  { id: 'video-manta-capas' },
  { id: 'video-desliza-plancha' },
  { id: 'video-insolacion' },                 
  { id: 'video-doctor-blade' },
  { id: 'tintero-interior' },
  { id: 'tintero-palanca' },
  { id: 'tinta_segmento' },
  { id: 'trinquete-rodillo-tintero-v' },             
  { id: 'trinquete' },
  { id: 'trinquete-multi' },
  { id: 'trinquete-rodillo-tintero' }  
];

function reproducirVideoSiExiste(contenedor) {
  const video = contenedor.querySelector('video');
  if (!video) return;
  video.pause();
  video.currentTime = 0;
  if (video.readyState >= 4) {
    video.play().catch(err => console.log('Error al reproducir video:', err));
  } else {
    const reproducirCuandoListo = () => {
      video.removeEventListener('canplaythrough', reproducirCuandoListo);
      video.play().catch(err => console.log('Error al reproducir video:', err));
    };
    video.addEventListener('canplaythrough', reproducirCuandoListo);
  }
}

const cont = document.getElementById('formulario-cuenta');
cont.addEventListener('click', e => {
  const btn = e.target.closest('.etq-frm');
  if (!btn || !cont.contains(btn)) return;

  const all = Array.from(cont.querySelectorAll('.etq-frm'));
  const index = all.indexOf(btn);
  const cfg = configIndex[index];
  if (!cfg) return;

  ocultarTodos([cfg.id]);
  document.querySelector('#marco-formulario').style.display = 'block';
  document.querySelector('#formulario-cuenta').style.display = 'grid';

  const contenedor = document.querySelector(`#${cfg.id}`);
  if (contenedor) {
    contenedor.style.display = contenedor.tagName === 'DIV' ? 'grid' : 'block';
    reproducirVideoSiExiste(contenedor);
  }

  if (typeof cfg.extra === 'function') cfg.extra();
  aplicarEstiloActivo(e.target);
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
    document.querySelector('#marco-formulario').style.display = 'block'             
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
  aparecerElemento("visor-tools", "grid")  

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
  activarPantallaCompleta();
  allContenedores.forEach(id => {
    const elem = document.getElementById(id);
    if (!elem) return;
  
    document.querySelectorAll('#container01 > button')
    .forEach(btn => btn.style.backgroundColor = '');

    if (visibles.includes(id)) {
      const dataDisplay = elem.getAttribute("data-display");
      elem.style.display = dataDisplay || tipoDisplayDefecto; 
    } else {
      elem.style.display = "none";
    }
  });

  if (visibles.length === 0) return; // No hay elementos visibles, salir.
  const elementId = visibles[0];
  switch (elementId) {
    case 'cont-titulo-operacion':
      animateScroll('contLineas');
      actualizarIdsArray(elementId);
    break;
    case 'pantalla-inicial':
      aparecerElemento('pantalla-inicial', 'flex')
      aparecerElemento('torre-imp', 'grid')
      setTimeout(() => {
        aparecerElemento('barras-contenedor', 'flex')
        aparecerElemento('barras-inicio', 'flex')        
      }, 150);
      ocultarGranCortina();
      document.body.style.zoom = "100%";      
      firstClick = true;
      actualizarIdsArray(elementId);
    break;
    default:
      activarPantallaCompleta();
    break;
  }
}

function ocultarGranCortina() {
  setTimeout(() => {
    const cortina = document.getElementById('gran-cortina');
    if (cortina) cortina.style.display = 'none';
  }, 500);
}
function actualizarIdsArray(elementId) {
  const index = idsArray.indexOf(elementId);
  if (index !== -1) {
    idsArray.splice(index, 1);
  }
  idsArray.push(elementId);
  console.log(idsArray);
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
      }, 177 + i * 67); // escalonado
    });
  });
});
function resaltarSecuencial() {
  const spans = document.querySelectorAll('#formulario-cuenta .etq-frm');

  // Opcional: limpiar estado previo
  spans.forEach(s => s.classList.remove('activo'));

  spans.forEach((span, index) => {
    // Cada span inicia 10 ms después del anterior (superpuestos)
    setTimeout(() => {
      span.classList.add('activo');
      // A los 2s desde su propio inicio, comienza el desvanecido (al quitar la clase)
      setTimeout(() => {
        span.classList.remove('activo');
      }, 400);
    }, index * 10);
  });
}
function resaltarSecuencialVariable() {
  const spans = document.querySelectorAll('#cont-variable .child-section');

  // Opcional: limpiar estado previo
  spans.forEach(s => s.classList.remove('activa'));

  spans.forEach((span, index) => {
    // Cada span inicia 10 ms después del anterior (superpuestos)
    setTimeout(() => {
      span.classList.add('activa');
      // A los 2s desde su propio inicio, comienza el desvanecido (al quitar la clase)
      setTimeout(() => {
        span.classList.remove('activa');
      }, 400);
    }, index * 10);
  });
}
function resaltarSecuencialDemo() {
  const spans = document.querySelectorAll('#tendencia-naranja .item-orange');

  // Opcional: limpiar estado previo
  spans.forEach(s => s.classList.remove('activa'));

  spans.forEach((span, index) => {
    // Cada span inicia 10 ms después del anterior (superpuestos)
    setTimeout(() => {
      span.classList.add('activa');
      // A los 2s desde su propio inicio, comienza el desvanecido (al quitar la clase)
      setTimeout(() => {
        span.classList.remove('activa');
      }, 400);
    }, index * 10);
  });
}
let miCanvas12 = document.getElementById('MiGrafica10').getContext('2d')
let chart13;
function crearGraficoMes() {
  const padreGrafica10 = document.querySelector('#padre-grafica4')
  padreGrafica10.style.display='flex'
  const canvas = document.getElementById('MiGrafica10');

  // 1️⃣ Destruir si ya existe
  if (chart13) {
    chart13.destroy();
    chart13 = null;
  }

  // 2️⃣ Ocultar/mostrar con transición (opcional)
  canvas.style.display = 'none';
  setTimeout(() => canvas.style.display = 'block', 100);

  const ctx = canvas.getContext('2d');

  // 3️⃣ Configuración del gráfico
  const configBase = {
    type: 'bar',
    data: {
      labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
      datasets: [
        {
          label: 'Participación en M.A',
          backgroundColor: [
            'rgba(30,149,54,1)',
            'rgba(30,149,54,0.7)',
            'rgba(30,149,54,0.5)',
            'rgba(30,149,54,0.3)'
          ],
          data: [100, 75, 86, 98],
          barPercentage: 1.24
        },
        {
          type: 'line',
          data: [100, 80, 90, 95],
          borderColor: 'orange',
          borderWidth: 1,
          pointRadius: 0,
          fill: false,
          tension: 0.2
        }
      ]   
    },
    options: {
      /* animation: false, */ 
      plugins: {
        legend: { display: false },
        title: { display: true, text: 'Sesiones M.A Mes', font: { size: 13 } }
      },
      maintainAspectRatio: false,
      indexAxis: 'x', // horientacion de barras vertical / horizontales
      scales: {
        x: {
          categoryPercentage: 1,
          grid: { display: false },
          ticks: { color: '#fff', font: { size: 7 } }
        },
        y: {
          grid: { display: false },
          ticks: { display: false } // sin leyendas verticales
        }
      }
    }
  };

  // 4️⃣ Crear el nuevo gráfico
  chart13 = new Chart(ctx, configBase);
}
let miCanvas13 = document.getElementById('MiGrafica11').getContext('2d')
let chart14;
function crearGraficoSemana() {
  const padreGrafica11 = document.querySelector('#padre-grafica5')
  padreGrafica11.style.display='flex'
  const canvas = document.getElementById('MiGrafica11');

  // 1️⃣ Destruir si ya existe
  if (chart14) {
    chart14.destroy();
    chart14 = null;
  }

  // 2️⃣ Ocultar/mostrar con transición (opcional)
  canvas.style.display = 'none';
  setTimeout(() => canvas.style.display = 'block', 100);

  const ctx = canvas.getContext('2d');

  // 3️⃣ Configuración del gráfico
  const configBase = {
    type: 'bar',
    data: {
      labels: ['Lunes','Martes','Miercoles','Jueves','Viernes'],
      datasets: [
        {
          label: 'Cumplimiento semanal',
          backgroundColor: [
            'rgba(255,255,0,0.3)',
            'rgba(255,255,0,0.4)',
            'rgba(255,255,0,0.5)',
            'rgba(255,255,0,0.6)',
            'rgba(255,255,0,0.7)'
          ],
          data: [100, 50, 75, 100, 100],
          barPercentage: 1.24
        }
      ]
    },
    options: {
      plugins: {
        legend: { display: false },
        title: {
          display: true, 
          text: 'Cumplimiento semanal', 
          font: { size: 13 } 
        }
      },
      maintainAspectRatio: false,
      indexAxis: 'y', // horientacion de barras vertical / horizontales
      scales: {
        x: {
          categoryPercentage: 1,
          grid: { display: false },
          ticks: { color: '#fff', font: { size: 7 } }
        },
        y: {
          grid: { display: false },
          ticks: { display: true }, // sin leyendas verticales
          ticks: { color: '#fff', font: { size: 7 } }

        }
      }
    }
  };

  // 4️⃣ Crear el nuevo gráfico
  chart14 = new Chart(ctx, configBase);
}
let miCanvas14 = document.getElementById('MiGrafica12').getContext('2d')
let chart15;
function crearGraficoParticipacion() {
  const padreGrafica12 = document.querySelector('#padre-grafica6')
  padreGrafica12.style.display='flex'
  const canvas = document.getElementById('MiGrafica12');

  // 1️⃣ Destruir si ya existe
  if (chart15) {
    chart15.destroy();
    chart15 = null;
  }

  // 2️⃣ Ocultar/mostrar con transición (opcional)
  canvas.style.display = 'none';
  setTimeout(() => canvas.style.display = 'block', 100);

  const ctx = canvas.getContext('2d');

  // 3️⃣ Configuración del gráfico
  const configLine = {
    type: 'line',
    data: {
      labels: ['Mecanicas', 'Layout','Diseño','Temporales','Fijas','Transicion'],
      datasets: [
        {
          label: 'Participación en M.A',
          data: [17, 9, 27, 55, 19, 33],
          borderColor: 'rgb(0,0,255)',
          backgroundColor: 'rgb(0,255,255)',
          borderWidth: 1,
          pointRadius: 2,
          pointBackgroundColor: 'rgb(0,255,255)',
          tension: 0.3 // suaviza la línea
        }
      ]
    },
    options: {
      maintainAspectRatio: false, 
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Variacion general',
          font: { size: 13 },
          color: 'rgb(111,111,111)'
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            color: '#fff',
            font: { size: 7 }
          }
        },
        y: {
          grid: { display: false },
          ticks: {
            beginAtZero: true,
            color: '#fff',
            font: { size: 7 }
          }
        }
      }
    }
  };  


  // 4️⃣ Crear el nuevo gráfico
  chart15 = new Chart(ctx, configLine);
}
let miCanvas15 = document.getElementById('MiGrafica13').getContext('2d')
let chart16;
function crearGraficoApilado() {
  const padreGrafica13 = document.querySelector('#padre-grafica7')
  padreGrafica13.style.display='flex'
  const canvas = document.getElementById('MiGrafica13');

  // 1️⃣ Destruir si ya existe
  if (chart16) {
    chart16.destroy(); 
    chart16 = null;
  }

  const oldChart = Chart.getChart(canvas);
  if (oldChart) {
    oldChart.destroy();
  }  

  // 2️⃣ Ocultar/mostrar con transición (opcional)
  canvas.style.display = 'none';
  setTimeout(() => canvas.style.display = 'block', 100);

  const ctx = canvas.getContext('2d');

  const configArea = {
    type: 'line', // tipo "line" con relleno para áreas apiladas
    data: {
      labels: [
        'Semana 1','Semana 2','Semana 3','Semana 4'
      ],
      datasets: [
        {
          label: 'I.V',
          data: [5,15,22,29],
          backgroundColor: 'rgba(220,80,40,0.7)',
          borderColor: 'rgba(220,80,40,1)',
          fill: true,
          tension: 0.4
        },
        {
          label: 'Tarjetas',
          data: [10,25,30,25],
          backgroundColor: 'rgba(0,120,255,0.7)',
          borderColor: 'rgba(0,120,255,1)',
          fill: true,
          tension: 0.4
        },
        {
          label: 'Formas',
          data: [15,27,30,20,40,61,93],
          backgroundColor: 'rgba(0,200,120,0.7)',
          borderColor: 'rgba(0,200,120,1)',
          fill: true,
          tension: 0.4
        },
        {
          label: 'Almacen',
          data: [60,32,30,28],
          backgroundColor: 'rgba(230,200,0,0.7)',
          borderColor: 'rgba(230,200,0,1)',
          fill: true,
          tension: 0.4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Participación Areas',
          color: 'rgb(111,111,111)',
          font: { size: 14 }
        },
        legend: {
          labels: {
            color: '#fff',        // color de texto para todas las leyendas
            font: {
              size: 7,           // tamaño de texto (China, USA, EU, India)
              family: 'Arial',    // (opcional) familia de fuente
              weight: 'bold'      // (opcional) peso del texto
            },
            boxWidth: 10,          // ancho del rectángulo de color
            boxHeight: 5          // alto del rectángulo de color
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: '#fff',
            font: {
              size: 6
            }
          },
          grid: {
            color: '#333'
          }
        },
        y: {
          stacked: true,
          beginAtZero: true,
          max: 100,
          ticks: {
            color: '#fff',
            font: {
              size: 7   // tamaño muy pequeño
            }
          },

          grid: { color: '#333' }
        }
      },
      elements: {
        line: { borderWidth: 0 }, // elimina el borde de las líneas
        point: { radius: 0 }      // elimina los puntos en las líneas
      }
    }
  };

  
  // 4️⃣ Crear el nuevo gráfico
  chart16 = new Chart(ctx, configArea);
}
let miCanvas16 = document.getElementById('MiGrafica14').getContext('2d')
let chart17;
function crearGraficoOperadores() {
  const padreGrafica10 = document.querySelector('#padre-grafica8')
  padreGrafica10.style.display='flex'
  const canvas = document.getElementById('MiGrafica14');

  // 1️⃣ Destruir si ya existe
  if (chart17) {
    chart17.destroy();
    chart17 = null;
  }
  canvas.style.display = 'none';
  setTimeout(() => canvas.style.display = 'block', 100);
  const ctx = canvas.getContext('2d');
  const configZona = {
    type: 'bar',
    data: {
      labels: ['Sergio Lopez', 'Noe Alzate', 'Mario Pineda', 'Juan Taborda'],
      datasets: [
        {
          label: 'Participación en M.A',
          backgroundColor: ['#0B3D91', '#007A7C', '#E57200', '#9B1B30'],
          data: [100, 66, 70, 85],
          barPercentage: 0.9
        }
      ]
    },
    options: {
      plugins: {
        legend: { 
        display: false },
        title: { 
          display: true, 
          text: 'Aporte Mes Empleado', 
          font: { size: 13 },
          padding: { top: 10 } // ← controla la posición en Y del título
        },
        datalabels: {
          color: '#fff',
          anchor: 'end',
          align: 'end',
          font: { weight: 'bold', size: 10 },
          formatter: value => `${value}`
        }
      },
      maintainAspectRatio: false,
      indexAxis: 'x',
      scales: {
        x: {
          categoryPercentage: 1,
          grid: { display: false },
          ticks: { color: '#fff', font: { size: 7 } }
        },
        y: {
          // 👇 Aumenta el rango superior para dar espacio
          suggestedMax: 110,   // o max: 110 si quieres fijarlo
          grid: { display: false },
          ticks: { display: false }
        }
      },
      layout: {
        padding: { top: 20 }   // espacio extra entre el chart area y el título
      }
    },
    plugins: [ChartDataLabels]
  };

  

  // 4️⃣ Crear el nuevo gráfico
  chart17 = new Chart(ctx, configZona);
}

let miCanvas17 = document.getElementById('MiGrafica15').getContext('2d')    
let chart18;
function obtenerDiasDelMes(nombreMes) {
  switch (nombreMes.toLowerCase()) {
    case 'enero':
    case 'marzo':
    case 'mayo':
    case 'julio':
    case 'agosto':
    case 'octubre':
    case 'diciembre':
      return 31;
    case 'abril':
    case 'junio':
    case 'septiembre':
    case 'noviembre':
      return 30;
    case 'febrero':
      return 28; // puedes extender para años bisiestos si quieres
    default:
      return 30; // valor por defecto en caso de error
  }
}

function activarBlur() {
  document.getElementById('blur-layer').style.display = 'block';
}
function desactivarBlur() {
  document.getElementById('blur-layer').style.display = 'none';
}

function crearGraficoLleno() {
  const padreGrafica11 = document.querySelector('#padre-grafica9');
  const linksMA = document.querySelector('#links-inicialesI');
  const linkLista = document.querySelector('#links-iniciales');
  const buscador = document.querySelector('#buscador');
  const blurOverlay = document.querySelector('#blur-layer'); // nuevo overlay

  padreGrafica11.style.display = 'flex';
  const canvas = document.getElementById('MiGrafica15');

  ['click', 'touchstart'].forEach(evt => {
    canvas.addEventListener(evt, () => {
      
      ["grafico-area"].forEach(id => aparecerElemento(id, "block"));

      const contenedor = document.querySelector('.calendario-interfaz');
      if (!contenedor) return;

      // Mostrar mes actual
      const spanMes = document.querySelector('#mes-area');
      spanMes.textContent = mesGlobal;

      // Determinar días
      const diasMes = obtenerDiasDelMes(mesGlobal);

      // Generar calendario dinámico
      generarBotoneraDias('.calendario-interfaz', diasMes, offset, index => cambiarFuente(index));

      // Activar blur overlay
      if (blurOverlay) activarBlur();
      

      // Ocultar elementos innecesarios
      [linksMA, linkLista, buscador].forEach(el => {
        if (el) el.style.display = 'none';
      });
    });
  });

  // Destruir gráfico previo
  if (chart18) {
    chart18.destroy();
    chart18 = null;
  }

  canvas.style.display = 'none';
  setTimeout(() => (canvas.style.display = 'block'), 100);

  const ctx = canvas.getContext('2d');

  
  const configZona = {
    type: 'line',
    data: {
      labels: ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
      datasets: [
        {
          label: 'Total FTE Availability',
          data:[4, 3.5, 3.75, 3.45, 4, 3.9, 4.05, 4.2, 4.45, 4, 3.5, 3.75, 3.45, 4, 3.9, 4.05, 4.2, 4.45, 4.6, 4.9, 4.85, 4.95, 5.05, 4.95, 4.75, 4.5, 5.05, 5.4, 5.5, 5.65, 5.55, 5.75, 5.85, 5.7, 5.9],
          fill: true,
          /* backgroundColor: 'rgba(22, 0, 222, 0.67)', */
          backgroundColor: 'rgba(42, 18, 163, 0.78)',
          borderColor: 'rgba(0, 255, 0, 0.9)', // color visible del borde
          borderWidth: 1,                      // grosor de la línea
          tension: 0,                        // suaviza la curva
          pointRadius: 0
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
          labels: { color: '#fff' }
        },
        title: {
          display: true,
          text: 'Comportamiento',
          color: '#61676eff',
          font: { size: 14 }
        }
      },
      scales: {
        x: {
          min: 0,
          max: 40,
          ticks: {
            color: '#ccc',
            font: { size:1 }
          },
          grid: { display: false }
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: '#ccc',
            font: { size: 7 }
          },
          grid: {
            color: 'rgba(255,255,255,0.1)'
          }
        }
      }
    }
  };



  chart18 = new Chart(ctx, configZona);
}

const capas = {
  listaMaquinas: document.getElementById('lista-maquinas'),
  tituloCalendar: document.getElementById('titulo-calendar'),
  tituloMes: document.getElementById('titulo-mes'),
  calendarioMes: document.getElementById('calendario-mes'),
  contSpanSemanas: document.getElementById('cont-span-semanas'),
  meses: document.getElementById('meses'),
};



function aplicarZindex(valor = 200) {
  for (const clave in capas) {
    const el = capas[clave];
    if (el) {
      el.style.position = 'relative';
      el.style.zIndex = valor;
    }
  }
}
function mostrar(...elementos) {
  elementos.forEach(el => {
    if (el) el.style.display = 'block';
  });
}

const primerSpan = document.querySelector('.box-7');
primerSpan.addEventListener('click', () => {
  // Función genérica para quitar blur a varios selectores
  desactivarBlur()
  
  document.querySelectorAll('.titulo-graf-ma').forEach(el => el.classList.remove('blur'));
  document.querySelector('#grafico-area').style.display='none'
  const linksMA   = document.getElementById('links-inicialesI');
  const linkLista = document.getElementById('links-iniciales');
  const buscador  = document.getElementById('buscador');
  mostrar(linksMA, linkLista, buscador);
});

document.querySelectorAll('.span-semana').forEach((span, index) => {

  span.addEventListener('click', () => {

    document.querySelectorAll('.span-semana').forEach(s => {
      s.style.backgroundColor = '';
    });    

    span.style.backgroundColor ='rgb(20,40,60)';

    const azul = 'rgb(20, 40, 60)';

    const hayMesActivo = Array.from(document.querySelectorAll('.mes'))
    .some(el => getComputedStyle(el).backgroundColor === azul);

    const hayMaquinaActiva = Array.from(document.querySelectorAll('.maquina'))
    .some(el => getComputedStyle(el).backgroundColor === azul);

    if (!hayMesActivo || !hayMaquinaActiva){
      alert('Seleccione Maquina y Mes')
      return;
    }  // corta la ejecución

    // --- lógica original
    const abueloGrafica = document.querySelector('#abuelo-grafica4');
    abueloGrafica.style.display = 'grid';
    Array.from(abueloGrafica.querySelectorAll('*')).forEach(hijo => {
      hijo.style.display = '';
      hijo.style.visibility = 'visible';
      hijo.style.opacity = '1';
    });

    switch (index) {
      case 0: {
        const pasos = [
          crearGraficoMes,
          crearGraficoSemana,
          crearGraficoParticipacion,
          crearGraficoApilado,
          crearGraficoOperadores,
          crearGraficoLleno
        ];
        let delay = 0;
        for (const fn of pasos) {
          setTimeout(fn, delay);
          delay += 150;
        }
        break;
      }
      case 1:
        crearGraficoMes();
        break;
      case 2:
        crearGraficoSemana();
        break;
      case 3:
        crearGraficoParticipacion();
        break;
      case 4:
        crearGraficoApilado();
      break;
      case 5:
        crearGraficoOperadores();
      break;
      case 6:
        crearGraficoLleno();
      break;      

      default:
    }
  });
  
});
const btnDynamic = document.getElementById('dynamic-graphs');
const btnStatic = document.getElementById('static-graphs');

// Maneja tanto click de ratón como toque táctil
['click','touchstart'].forEach(ev => {
  btnDynamic.addEventListener(ev, updateDinamico, {passive:true});
});

['click','touchstart'].forEach(ev => {
  btnStatic.addEventListener(ev, detenerDinamica, {passive:true});
});

function generarBotoneraDias(selector = '.calendario-interfaz', days = 30, startOffset = 0, onSelect) {
  const container = document.querySelector(selector);
  if (!container) return null;

  while (container.firstChild) container.removeChild(container.firstChild);
  const frag = document.createDocumentFragment();
  for (let i = 0; i < startOffset; i++) {
    const ph = document.createElement('div');
    ph.className = 'child-calendar empty';
    ph.setAttribute('aria-hidden', 'true');
    frag.appendChild(ph);
  }

  const botones = [];
  for (let i = 1; i <= days; i++) {
    const day = document.createElement('div');
    day.className = 'child-calendar';
    day.dataset.index = (i - 1).toString();
    day.textContent = String(i);
    day.setAttribute('role', 'button');
    day.tabIndex = 0;
  // Función para crear o recrear el gráfico
  function createchart19(data, options) {
    const ctx = document.querySelector('#miCanvas').getContext('2d');

    // Si ya existe, lo destruimos primero
    if (chart19) chart19.destroy();

    chart19 = new Chart(ctx, {
      type: 'line', // o tu tipo
      data,
      options
    });
    }

    // Lógica de selección de días
    day.addEventListener('click', () => {
      botones.forEach(b => {
        b.style.backgroundColor = '';
        b.style.color = '';
      });
      day.style.backgroundColor = 'white';
      day.style.color = 'black';

      if (typeof onSelect === 'function') {
        const index = Number(day.dataset.index);
        onSelect(index);
      }
      const span = document.querySelector('.box-4 span');
      span.style.height = '';      
    });


    day.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        day.click();
      }
    });

    botones.push(day);
    frag.appendChild(day);
  }

  container.appendChild(frag);
  return botones; // array de botones creados
}

function resetChart() {
  if (chart19) {
    chart19.destroy();
    chart19 = null;
  }
}
function resetCalendarStyles() {
  document.querySelectorAll('.child-calendar', '.box-2').forEach(el => {
    el.removeAttribute('style');
  });
  document.querySelector('.box-2').style.backgroundColor= '';
  document.querySelector('.box-2').style.color = '';
}
document.querySelector('.box-6').addEventListener('click', () => { 
  animarWidth('.box-4 span', 1000);
  setTimeout(() => {
    resetChart();
    resetCalendarStyles();
  }, 1050);
});
const offset = 0;
const fuentesDeDatos = [
  [1]
  [0.5],
  [0.5,0.3],  
  [0.5,0.3,1.6],  
  [0.5,0.3,1.6,1.4],  
  [0.5,0.3,1.6,1.4,1.9],  
  [0.5,0.3,1.6,1.4,1.9,1.1],  
  [2, 3, 4, 4.5, 5, 5.5, 8.3],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9, 6.4],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9, 6.4, 7.9],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9, 6.4, 7.9, 8.3],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9, 6.4, 7.9, 8.3, 7.7],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9, 6.4, 7.9, 8.3, 7.7, 6.6],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9, 6.4, 7.9, 8.3, 7.7, 6.6, 5.4],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9, 6.4, 7.9, 8.3, 7.7, 6.6, 5.4, 7.8],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9, 6.4, 7.9, 8.3, 7.7, 6.6, 5.4, 7.8, 8.3],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9, 6.4, 7.9, 8.3, 7.7, 6.6, 5.4, 7.8, 8.3, 8.8],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9, 6.4, 7.9, 8.3, 7.7, 6.6, 5.4, 7.8, 8.3, 8.8, 10],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9, 6.4, 7.9, 8.3, 7.7, 6.6, 5.4, 7.8, 8.3, 8.8, 10, 10],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9, 6.4, 7.9, 8.3, 7.7, 6.6, 5.4, 7.8, 8.3, 8.8, 10, 10, 9.5],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9, 6.4, 7.9, 8.3, 7.7, 6.6, 5.4, 7.8, 8.3, 8.8, 10, 10, 9.5 , 8.7],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9, 6.4, 7.9, 8.3, 7.7, 6.6, 5.4, 7.8, 8.3, 8.8, 10, 10, 9.5 , 8.7, 9.1],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9, 6.4, 7.9, 8.3, 7.7, 6.6, 5.4, 7.8, 8.3, 8.8, 10, 10, 9.5 , 8.7, 9.1, 9.5],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9, 6.4, 7.9, 8.3, 7.7, 6.6, 5.4, 7.8, 8.3, 8.8, 10, 10, 9.5 , 8.7, 9.1, 9.5, 9.1],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9, 6.4, 7.9, 8.3, 7.7, 6.6, 5.4, 7.8, 8.3, 8.8, 10, 10, 9.5 , 8.7, 9.1, 9.5, 9.1, 8.9],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9, 6.4, 7.9, 8.3, 7.7, 6.6, 5.4, 7.8, 8.3, 8.8, 10, 10, 9.5 , 8.7, 9.1, 9.5, 9.1, 8.9, 9.7],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9, 6.4, 7.9, 8.3, 7.7, 6.6, 5.4, 7.8, 8.3, 8.8, 10, 10, 9.5 , 8.7, 9.1, 9.5, 9.1, 8.9, 9.7,8.9],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9, 6.4, 7.9, 8.3, 7.7, 6.6, 5.4, 7.8, 8.3, 8.8, 10, 10, 9.5 , 8.7, 9.1, 9.5, 9.1, 8.9, 9.7, 8.9, 7.7],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9, 6.4, 7.9, 8.3, 7.7, 6.6, 5.4, 7.8, 8.3, 8.8, 10, 10, 9.5 , 8.7, 9.1, 9.5, 9.1, 8.9, 9.7, 8.9, 7.7, 10],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9, 6.4, 7.9, 8.3, 7.7, 6.6, 5.4, 7.8, 8.3, 8.8, 10, 10, 9.5 , 8.7, 9.1, 9.5, 9.1, 8.9, 9.7, 8.9, 7.7, 10, 9.5],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9, 6.4, 7.9, 8.3, 7.7, 6.6, 5.4, 7.8, 8.3, 8.8, 10, 10, 9.5 , 8.7, 9.1, 9.5, 9.1, 8.9, 9.7, 8.9, 7.7, 10, 9.5, 8.9],
  [2, 3, 4, 4.5, 5, 5.5, 8.3, 7.9, 6.4, 7.9, 8.3, 7.7, 6.6, 5.4, 7.8, 8.3, 8.8, 10, 10, 9.5 , 8.7, 9.1, 9.5, 9.1, 8.9, 9.7, 8.9, 7.7, 10, 9.5, 8.9,7.1]
];
let miCanvas18 = document.getElementById('MiGrafica16').getContext('2d');
let chart19 = null; 
function createchart19(data, options) {
  const ctx = document.querySelector('#miCanvas').getContext('2d');

  // Si ya existe, lo destruimos primero
  if (chart19) chart19.destroy();

  chart19 = new Chart(ctx, {
    type: 'line', // o tu tipo
    data,
    options
  });
}
function crearGraficoAreas() {
  const ctx = document.getElementById('MiGrafica16').getContext('2d');

  if (!chart19) {
    chart19 = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['dia 1','dia 2','dia 3','dia 4','dia 5','dia 6','dia 7','dia 8','dia 9','dia 10','dia 11','dia 12','dia 13','dia 14','dia 15','dia 16','dia 17','dia 18','dia 19','dia 20','dia 21','dia 22','dia 23','dia 24','dia 25','dia 26','dia 27','dia 28','dia 29','dia 30','dia 31'],
        datasets: [{
          label: 'Total FTE Availability',
          borderColor: 'rgba(0, 255, 0, 0.9)', 
          borderWidth: 1,
          data: fuentesDeDatos[0],
          fill: true,
          backgroundColor: 'rgba(48, 13, 191, 0.67)',
          pointRadius: 0,
          tension: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 800,
          easing: 'easeInOutQuart'
        },
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Comportamiento',
            color: '#848b93ff',
            font: { size: 14 },
            align: 'start'
          }
        },
        scales: {
          x: {
            ticks: { color: '#ccc', font: { size: 7 } },
            grid: { display: false }
          },
          y: {
            min: 1,
            max: 10,
            ticks: {
              color: '#ccc',
              font: { size: 7 },
              stepSize: 1
            },
            grid: { display: false }
          }}
      }
    }
  );
  }
}
// Cambiar datos sin repintar completo
function cambiarFuente(indice) {
  crearGraficoAreas()
  chart19.data.datasets[0].data = fuentesDeDatos[indice];
  chart19.update();
}
const teclasInterfaz = document.querySelectorAll('.child-calendar');
teclasInterfaz.forEach(tecla => {
  // Inicializa estilos
  tecla.style.color = '';
  tecla.style.backgroundColor = '';

  tecla.addEventListener('click', () => {
    // Resetear todas
    teclasInterfaz.forEach(t => {
      t.style.backgroundColor = '';
      t.style.color = '';
    });

    // Aplicar a la clicada
    tecla.style.backgroundColor = 'white';
    tecla.style.color = 'black';
    document.querySelector('.box-2').style.backgroundColor= 'rgb(51, 0, 255)';
    document.querySelector('.box-2').style.color = '#ff7fbd';
  });
});
const slider = document.getElementById('miSlider');
const valor = document.getElementById('sliderValor')
slider.addEventListener('input', () => {
  const porcentaje = slider.value;
  valor.textContent = porcentaje;
  slider.style.background = `linear-gradient(to right, white ${porcentaje}%, blue ${porcentaje}%)`;
});
function destroyChart(chartInstance) {
  if (chartInstance) {
    chartInstance.destroy();
  }
}

document.addEventListener('click', (e) => {
  const contenedor = e.target.closest('.cont-userI');
  if (!contenedor) return;

  const img = contenedor.querySelector('img');
  const span = contenedor.querySelector('.lblNombres');
  if (!img || !span) return;

  const porta = document.getElementById('porta-imagen');
  const spanImg = porta.querySelector('.imagen-empleado');
  const spanNombre = porta.querySelector('.nombre-empleado');

  const src = img.getAttribute('data-src');
  const nombre = span.textContent.trim();

  spanImg.setAttribute('data-src', src);
  spanNombre.textContent = nombre;  
  spanImg.innerHTML = `<img src="${src}" alt="${nombre}">`;

  // Mapeo de nombres a funciones
  const funciones = {
    'Carlos Mario Sanchez': 'updateCarlos',
    'Andres Felipe Montoya': 'updateAndres',
    'Jorge Alberto Lozada': 'updateJorge',
    'Jesus Norvey Cordoba': 'updateJesus',
    'Sandra Milena Alvarez': 'updateSandra',
    'John Mario Mira Pineda': 'updateMario',
    'Ana Maria Duarte Pineda': 'updateAna'
  };

  const functionExe = funciones[nombre];
  if (functionExe) ejecutarFuncionEmpleado(functionExe);
});

const visorI = document.getElementById('imagenVisor');
const listado = document.getElementById('listaNombres');
const buscador = document.getElementById('buscador-empleado');
const listaNombres = document.querySelectorAll('#listaNombres span');
const visorImagen = document.querySelector('#visorImagen span:first-child');
const visorTexto = document.querySelector('.visor > span');
const nombres = Array.from(document.querySelectorAll('#listaNombres span')); 
const visor = document.getElementById('imagenVisor');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let permitirEliminarImagen = true;


const spansI = document.querySelector('.nombre-empleado');
if (spansI) {
  spansI.addEventListener('click', () => {
    spansI.textContent = '';
  });
}


function mostrarEmpleado(index) {
  const listado = document.getElementById('listaNombres');
  const spans = listado.querySelectorAll('span'); // solo los de la lista dinámica
  const span = spans[index];
  if (!span) return;

  const imgSrc = span.getAttribute('data-img');
  if (!imgSrc) return; // evita errores si no tiene ruta

  const visorI = document.getElementById('visorImagen');
  const visorTexto = document.getElementById('visorTexto');
  const porta = document.getElementById('porta-imagen');
  const spanImg = porta.querySelector('.imagen-empleado');
  const spanNombre = porta.querySelector('.nombre-empleado');

  visorI.innerHTML = `<img src="${imgSrc}" alt="${span.textContent}">`;
  visorTexto.textContent = span.textContent;

  spanImg.innerHTML = `<img src="${imgSrc}" alt="${span.textContent}">`;
  spanNombre.textContent = span.textContent;

  indiceActual = index;
}
indiceActual = index;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CLICK / MOUSELEAVE EN LISTADO DE NOMBRES / M.A

let fotoFijada = null;

document.addEventListener('DOMContentLoaded', () => {
  const listadoNombres = document.getElementById('listaNombres');
  const img = document.getElementById('imagenVisor');
  const nombre = document.querySelector('.visor > span');
  const campoBusqueda = document.getElementById('buscador-empleado');

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // estado
  let indiceActual = 0;
  let fotoFijada = null;

  // --- construir lista dinámica ---
  colaboradores.forEach((emp, i) => {
    const span = document.createElement('span');
    span.textContent = emp.nombre;
    span.dataset.img = emp.ruta; // importante para navegación
    span.dataset.index = i;

    span.addEventListener('mouseenter', () => {
      indiceActual = i;
      mostrarEmpleadoPorIndice(i, { fijar: false });
    });

    span.addEventListener('mouseleave', () => {
      if (fotoFijada) {
        mostrarEmpleadoObj(fotoFijada);
      } else {
        limpiarVisor();
      }
    });

    span.addEventListener('click', () => {
      indiceActual = i;
      if (fotoFijada === emp) {
        fotoFijada = null;
        limpiarVisor();
      } else {
        fotoFijada = emp;
        mostrarEmpleadoObj(emp);
      }
    });

    listadoNombres.appendChild(span);
  });

  // --- navegación Prev / Next ---
  prevBtn.addEventListener('click', () => {
    const spans = listadoNombres.querySelectorAll('span');
    if (!spans.length) return;
    const nuevo = Math.max(0, indiceActual - 1);
    mostrarEmpleadoPorIndice(nuevo, { fijar: false });
  });

  nextBtn.addEventListener('click', () => {
    const spans = listadoNombres.querySelectorAll('span');
    if (!spans.length) return;
    const nuevo = Math.min(spans.length - 1, indiceActual + 1);
    mostrarEmpleadoPorIndice(nuevo, { fijar: false });
  });

  // --- búsqueda ---
  campoBusqueda.addEventListener('input', () => {
    const valor = campoBusqueda.value.trim().toLowerCase();

    if (!valor) {
      limpiarVisor();
      fotoFijada = null;
      return;
    }

    const coincidencia = colaboradores.find(c =>
      c.nombre.toLowerCase().includes(valor)
    );

    if (coincidencia) {
      fotoFijada = coincidencia; // fija desde buscador
      mostrarEmpleadoObj(coincidencia);
      // sincronizar índice si coincide con la lista
      const idx = colaboradores.indexOf(coincidencia);
      if (idx >= 0) indiceActual = idx;
    } else {
      limpiarVisor();
      fotoFijada = null;
    }
  });

  // --- funciones auxiliares ---

  // muestra por índice (usa los spans actuales). opción {fijar: true} para setear fotoFijada
  function mostrarEmpleadoPorIndice(index, opts = { fijar: false }) {
    const spans = listadoNombres.querySelectorAll('span');
    const span = spans[index];
    if (!span) return;
    const imgSrc = span.dataset.img;
    if (!imgSrc) return;

    // actualizar visor
    img.src = imgSrc;
    nombre.textContent = span.textContent;
    indiceActual = Number(span.dataset.index ?? index);

    if (opts.fijar) {
      // fijar objeto si existe en colaboradores
      const emp = colaboradores[indiceActual];
      if (emp) fotoFijada = emp;
    }
  }

  // muestra usando el objeto de colaboradores (click o buscador)
  function mostrarEmpleadoObj(emp) {
    if (!emp) return;
    img.src = emp.ruta ?? '';
    nombre.textContent = emp.nombre ?? '';
    // sincronizar indiceActual con la posición en colaboradores
    const idx = colaboradores.indexOf(emp);
    if (idx >= 0) indiceActual = idx;
  }

  function limpiarVisor() {
    img.src = '';
    nombre.textContent = '';
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const rutasFotos = [
  "./assets/silueta.png",
  "./assets/silueta1.png",
  "./assets/silueta2.png",
  "./assets/silueta3.png",
  "./assets/silueta4.png",
  "./assets/silueta5.png",
  "./assets/silueta6.png",
  "./assets/silueta7.png",
  "./assets/gato.png",
  "./assets/icono1.png"
];
const colaboradores = [
  { ruta: "./assets/cadena logo.png", nombre: "Monica Muñoz Sepulveda" },
  { ruta: "./assets/silueta.png", nombre: "Carlos Mario Sanchez" },
  { ruta: "./assets/silueta1.png", nombre: "Jorge Alberto Lozada" },
  { ruta: "./assets/silueta2.png", nombre: "Jesus Norvey Cordoba" },
  { ruta: "./assets/silueta3.png", nombre: "Sandra Milena Alvarez" },
  { ruta: "./assets/silueta4.png", nombre: "John Mario Mira Pineda" },
  { ruta: "./assets/silueta5.png", nombre: "Ana Maria Duarte Pineda" },
  { ruta: "./assets/silueta6.png", nombre: "Juan Perez" },
  { ruta: "./assets/silueta7.png", nombre: "Camila Lopez" },
  { ruta: "./assets/gato.png", nombre: "Roberto Diaz" },
  { ruta: "./assets/icono1.png", nombre: "Paola Herrera" }
];
const imgEmpleado = document.getElementById('empleadoImg');
const btnMostrar = document.getElementById('btnMostrar');
const inputFoto = document.getElementById('numDoc6'); 
const listaFotos = document.getElementById('listaFotos');
const previewFoto = document.getElementById('empleadoImg'); 

prevBtn.addEventListener('click', () => {
  if (indiceActual > 0) {
    mostrarEmpleado(indiceActual - 1);
  }
});

nextBtn.addEventListener('click', () => {
  if (indiceActual < nombres.length - 1) {
    mostrarEmpleado(indiceActual + 1);
  }
});

// CLICK EN IMAGEN EN SOLITARIO INICIAL

visor.addEventListener('click', (e) => {
  const padreEmpleados = document.querySelector('#father-employees');
  const padreImagenes = document.querySelector('.contenedor-visor'); 
  if (e.target.tagName !== 'IMG') return;

  const visor = document.getElementById('visorImagen');
  const imgSrc = e.target.getAttribute('src');
  const segundoSpan = visor.querySelector('span:nth-child(2)');
    if (!imgSrc) return;

  imagenSeleccionada = imgSrc;
  nombreSeleccionado = segundoSpan ? segundoSpan.textContent.trim() : '';

  // obtener los spans actuales en el momento del clic
  const nombres = Array.from(document.querySelectorAll('#listaNombres span'));
  const span = indiceActual !== null ? nombres[indiceActual] : null;
  if (!span) return; // evita el error si no existe

  padreEmpleados.style.display = 'none';
  padreImagenes.style.display = 'none';
  buscador.value=''

  switch (span.textContent) {
    case 'Monica Muñoz Sepulveda':
      console.log('NOMBRE EN SPAN:',span.textContent)
      resultadosEmpleado('icon-andres', 'updateAndres', 'img2', 'true');
      break;
    case 'Carlos Mario Sanchez':
      console.log('NOMBRE EN SPAN:',span.textContent)
      resultadosEmpleado('icon-carlos', 'updateCarlos', 'false');
      break;
    case 'Jorge Alberto Lozada':
      resultadosEmpleado('icon-jorge', 'updateJorge', 'img3', 'true');
      break;
    case 'Jesus Norvey Cordoba':
      resultadosEmpleado('icon-jesus', 'updateJesus', 'img4', 'true');
      break;
    case 'Sandra Milena Alvarez':
      resultadosEmpleado('icon-sandra', 'updateSandra', 'img5', 'true');
      break;
    case 'John Mario Mira Pineda':
      resultadosEmpleado('icon-mario', 'updateMario', 'img6', 'true');
      break;
    case 'Ana Maria Duarte Pineda':
      resultadosEmpleado('icon-ana', 'updateAna', 'img7', 'true');
      break;
  }

  setTimeout(() => {
    permitirEliminarImagen = true;
  }, 100);
});


function reubicarVisor(){
  document.querySelector('#conte-secundario').style.display='flex'
  document.querySelector('.visor').style.width='100%'
  const padreRgb = document.querySelector('.contenedor-visor')
  const visorImg = document.querySelector('.visor-imagen')
  padreRgb.style.display = 'flex';
  padreRgb.style.flexDirection='column'
  padreRgb.style.alignItems = 'center';
  padreRgb.style.justifyContent = 'center';
  padreRgb.style.width='15vw'
  padreRgb.style.height='50vh'
  padreRgb.style.marginTop = '80px';
  padreRgb.style.left='1vw'
  padreRgb.style.border='1px solid #1e90ff'
  visorImg.style.width='100%'
  visorImg.style.marginLeft= '-0.1vw'

  setTimeout(() => {
  document.querySelector('.panel-nombres').style.display='none'          
  }, 10);

}


function ingresoEmpleado(){
  const excluidos = [
    'ingresos-sistema','buscador','search-form','links-inicialesI','links-iniciales','container01'
  ];
  allContenedores.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = excluidos.includes(id) ? 'grid' : 'none';
  });
  ["padre-ingresos","ingresos-sistema"].forEach(id => aparecerElemento(id, "grid"));
}

const inputNombre = document.getElementById('numDoc');
inputNombre.addEventListener('input', (e) => {
  // Eliminar números y símbolos
  let valor = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
  // Poner en minúsculas y capitalizar cada palabra
  valor = valor
    .toLowerCase()
    .replace(/\b\w/g, letra => letra.toUpperCase());
  e.target.value = valor;
});
document.getElementById('numDoc1').addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
});
document.getElementById('nomEmpl').addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
});
document.querySelector('#lbl-ingreso').addEventListener('click', () => {
  presentarEmpleado();
  
});
// EXTRAER EMPLEADO
function presentarEmpleado() {
  console.log('Contenido de localStorage empleadosRegistrados:', JSON.parse(localStorage.getItem('empleadosRegistrados')));
  
  const input = document.getElementById('nomEmpl');
  const valor = input.value.trim();
  if (!valor){
    mostrarVentanaMensaje('Debe ingresar un número de documento.', 'padre-ingresos');
    desactivarClick(['.entrada-empleado']);
    ocultarElementos('.ocultos')

    desaparecerElemento('grafico-area')    
    restaurarPosicionPadreIngresos()    
    flagEmpleado = true
    
    return;
  }

  const empleados = JSON.parse(localStorage.getItem('empleadosRegistrados')) || [];
  const empleadoEncontrado = empleados.find(emp => emp.documento === valor);

  if (empleadoEncontrado) {
    console.log('Empleado encontrado:');
    console.log(`Nombre: ${empleadoEncontrado.nombre}`);
    console.log(`Documento: ${empleadoEncontrado.documento}`);
    console.log(`Área: ${empleadoEncontrado.area}`);
    console.log(`Cargo: ${empleadoEncontrado.cargo}`);
    console.log(`Equipo: ${empleadoEncontrado.equipo}`);
    console.log(`Fecha ingreso: ${empleadoEncontrado.fecha}`);
    console.log(`Imagen: ${empleadoEncontrado.imagen}`);

    document.getElementById('numDoc').value = empleadoEncontrado.nombre;
    document.getElementById('numDoc1').value = empleadoEncontrado.documento;
    document.getElementById('numDoc2').value = empleadoEncontrado.area;
    document.getElementById('numDoc3').value = empleadoEncontrado.equipo;
    document.getElementById('numDoc4').value = empleadoEncontrado.fecha;
    document.getElementById('numDoc5').value = empleadoEncontrado.cargo;
    document.getElementById('numDoc6').value = empleadoEncontrado.imagen || './assets/';

    const imgElemento = document.getElementById('empleadoImg');
    if (imgElemento) {
      let rutaImagen = empleadoEncontrado.imagen?.trim() || '';
      if (!rutaImagen) {
        rutaImagen = './assets/silueta.png';
      } else if (!rutaImagen.startsWith('./') && !rutaImagen.startsWith('assets/')) {
        rutaImagen = `./assets/${rutaImagen}`;
      }
      imgElemento.src = rutaImagen;
    }

  } else {
    desactivarClick(['.entrada-empleado']);
    mostrarVentanaMensaje('Empleado no encontrado en la BD.', '23vh', '56vw');
    ocultarElementos('.ocultos')

  }
}
document.querySelector('#cerrarVentana').addEventListener('click', () =>{
  traerElementos('.ocultos')
  document.querySelector('#container01').style.display='grid'
  restablecerClick(['.entrada-empleado']);
  document.querySelector('.ventana-mensaje').style.display='none'
})
document.querySelector('.cierra-graficos').addEventListener('click', ()=>{ // doble flecha boton gris
 if(flagEmpleado === true){
  return
 }else{
  desaparecerElemento('grafico-area')    
  restaurarPosicionPadreIngresos()    
  flagEmpleado = true
 }
})
const inputArchivo = document.getElementById('numDoc6');
let escala = 1;
// BOTON ROJO
function moverPadreIngresos(porcentajeX, porcentajeY) {
  flagEmpleado = false
  const inputs = document.querySelectorAll('.verGraficos');
  const img = document.querySelector('.imgEmpleado img');
  const valor = inputArchivo.value.trim().toLowerCase();

  for (const input of inputs) {
    if (!input.value.trim()) {
      mostrarVentanaMensaje('Hay campos vacíos.');
      desactivarClick(['.entrada-empleado']);
      ocultarElementos('.ocultos')
      flagEmpleado = true
      return;
    }

    if (!img || !img.src || img.src.trim() === '' || img.src.endsWith('/')) {
      mostrarVentanaMensaje('Debe insertar una imagen.'); 
      desactivarClick(['.entrada-empleado']);
      ocultarElementos('.ocultos')
      flagEmpleado = true
      return;
    }

  }
  if (!valor.endsWith('.png') && !valor.endsWith('.jpg') && !valor.endsWith('.jpeg')) {
    mostrarVentanaMensaje('El archivo debe ser una imagen .png o .jpg');  
    desactivarClick(['.entrada-empleado']);
    ocultarElementos('.ocultos')
    flagEmpleado = true
    return;
  }

  eliminarCalendario('.calendario-interfaz');
  const grafArea = document.querySelector('#grafico-area')
  const padre = document.getElementById('padre-ingresos');
  if (!padre) return;
  const desplazamientoX = padre.offsetWidth * (porcentajeX / 100);
  const desplazamientoY = padre.offsetHeight * (porcentajeY / 100);

  grafArea.style.display = 'block';
  grafArea.classList.add('modo-ingresos');
  requestAnimationFrame(() => grafArea.classList.add('activo'));

  setTimeout(() => {
    ["grafico-area"].forEach(id => aparecerElemento(id, "block"));
    mostrarCalendario('Febrero'); 

  }, 5);
  setTimeout(() => {
    padre.style.transform = `translate(${desplazamientoX * -1}px, ${desplazamientoY * -1}px) scale(1)`;    
  }, 25);
}
function restaurarPosicionPadreIngresos() {
  const padre = document.getElementById('padre-ingresos');
  if (!padre) return;
  padre.style.transform = ''; // elimina el translate aplicado por JS
}
document.querySelector('.metricas-empleado').addEventListener('click', ()=>{ // boton rojo 
  moverPadreIngresos(61,28) // mueve boton doble flecha y aparece grafico area  
})
function mostrarCalendario(mes, contenedorSelector = '.calendario-interfaz') {
  const contenedor = document.querySelector(contenedorSelector);
  if (!contenedor) return;

  // Mostrar mes actual
  const spanMes = document.querySelector('#mes-area');
  if (spanMes) spanMes.textContent = mes;

  // Determinar días
  const diasMes = obtenerDiasDelMes(mes);

  // Generar calendario dinámico
  generarBotoneraDias(contenedorSelector, diasMes, offset, index => cambiarFuente(index));
}

// Uso en los listeners
['click', 'touchstart'].forEach(evt => {
  canvas.addEventListener(evt, () => {
    document.querySelector('#grafico-area').style.display = 'block';

    mostrarCalendario(mesGlobal);

    if (blurOverlay) activarBlur();

    [linksMA, linkLista, buscador].forEach(el => {
      if (el) el.style.display = 'none';
    });
  });
});
function eliminarCalendario(contenedorSelector = '.calendario-interfaz') {
  const contenedor = document.querySelector(contenedorSelector);
  if (!contenedor) return;

  // Vaciar estructura generada dinámicamente
  contenedor.innerHTML = '';

  // Opcional: limpiar texto del mes
  const spanMes = document.querySelector('#mes-area');
  if (spanMes) spanMes.textContent = '';
}
function ocultarElementos(selectores) {
  const elementos = document.querySelectorAll(selectores);
  if (!elementos.length) return;

  elementos.forEach(el => {
    // Guardar display original si no está guardado
    if (!el.dataset.displayOriginal) {
      const estilo = getComputedStyle(el).display;
      el.dataset.displayOriginal = estilo === 'none' ? 'block' : estilo;
    }
    el.style.display = 'none';
  });
}
function traerElementos(selectores) {
  const elementos = document.querySelectorAll(selectores);
  if (!elementos.length) return;

  elementos.forEach(el => {
    // Recuperar el display original o usar block por defecto
    const displayOriginal = el.dataset.displayOriginal || 'block';
    el.style.display = displayOriginal;
  });
}
function insertarGrafico(idContenedor, idCanvas) {
  const contenedor = document.getElementById(idContenedor);
  if (!contenedor) return console.error(`No existe el contenedor con id: ${idContenedor}`);

  const canvas = document.createElement('canvas');
  canvas.id = idCanvas;

  // Limpia contenido previo del contenedor
  contenedor.innerHTML = '';
  contenedor.appendChild(canvas);

  // Ejemplo de creación de gráfico (usa Chart.js)
  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['A', 'B', 'D', 'E', 'F', 'G', 'H', 'I'],
      datasets: [{
        label: 'Ejemplo',
        data: [10, 20, 30, 17, 23, 9, 5, 27],
        backgroundColor: 'rgba(38,15,136)'
        
      }]
    },
    options: {
      indexAxis: 'x', // ← cambia orientación
      responsive: true,
      maintainAspectRatio: false
    }
  });
}
// generar lista para RRHH
rutasFotos.forEach(ruta => {
  const itemFoto = document.createElement('div');
  itemFoto.textContent = ruta;

  // vista previa al pasar el cursor
  itemFoto.addEventListener('mouseenter', () => {
    previewFoto.src = ruta;
  });

  // seleccionar la ruta
  itemFoto.addEventListener('click', () => {  
    inputFoto.value = ruta;
    previewFoto.src = ruta;
    listaFotos.style.display = 'none';
  });

  listaFotos.appendChild(itemFoto);
});
// CLICK EN EL INPUT
inputFoto.addEventListener('click', () => {
  listaFotos.style.display = 'block';
});
// ocultar lista si se hace clic fuera
document.addEventListener('click', e => {
  if (!listaFotos.contains(e.target) && e.target !== inputFoto) {
    listaFotos.style.display = 'none';
  }
});
document.querySelector('#borrarBoton').addEventListener('click', () =>{
  activarPantallaCompleta()
  resultadosMA('interfaz-mtto')
})
document.querySelector('#borrarBoton2').addEventListener('click', () =>{
  activarPantallaCompleta()
  ingresoEmpleado()
})



const contenedorLeds = document.getElementById('led');
const inputCantidad = document.getElementById('inputCantidad');
const totalLeds = 10;

// construir celdas
for (let i = 0; i < totalLeds; i++) {
  const celda = document.createElement('div');
  celda.classList.add('led-celda');
  contenedorLeds.appendChild(celda);
}

const leds = contenedorLeds.querySelectorAll('.led-celda');

// lógica de color
inputCantidad.addEventListener('input', () => {
  const valor = parseInt(inputCantidad.value) || 0;

  leds.forEach((led, i) => {
    led.className = 'led-celda';
    led.style.borderTopRightRadius = '';
    led.style.borderBottomRightRadius = '';

    if (i < valor) {
      if (i <= 2) led.classList.add('rojos');
      else if (i === 3) led.classList.add('gradiente-rojo-amarillo');
      else if (i >= 4 && i <= 6) led.classList.add('amarillo');
      else if (i === 7) led.classList.add('gradiente-amarillo-verde');
      else if (i >= 8) led.classList.add('verdes');

      if (i === valor - 1) {
        led.style.borderTopRightRadius = '6px';
        led.style.borderBottomRightRadius = '6px';
      }
    }
  });
});




const info = document.getElementById('info');
info.textContent = `W:${window.innerWidth} H:${window.innerHeight} DPR:${window.devicePixelRatio}`;
