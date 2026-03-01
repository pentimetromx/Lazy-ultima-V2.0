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
// BOTON INTERFAZ AZUL  
document.querySelector('#contenedor-botonera button:nth-child(5)').addEventListener('click', () => {
  var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales']
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
      document.querySelector('#formulario-cuenta').style.display = 'grid'
    }
  }
  container1.style.display='grid'
  manejarTransicion('child-move-azul', 'formulario-cuenta', 'marco-formulario',100);
  container1.style.display='grid'
  const cont = document.querySelector('#imagenes-sheeter');
  cont.style.position = 'absolute';
  cont.style.top='-1vh'

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
const formularioCuenta = document.getElementById('formulario-cuenta');
function ocultarTodosExcepto(idVisible) {
  configIndex.forEach(cfg => {
    const el = document.getElementById(cfg.id);
    if (!el) return;

    if (cfg.id === idVisible) {
      // nada aquí; se muestra después
    } else {
      el.style.display = 'none';
      el.removeAttribute('style'); // limpia estilos inline previos si los sets
      el.style.display = 'none';   // forzamos ocultamiento real
    }
  });
}

// BOTONES AZULES
formularioCuenta.addEventListener('click', e => {
  const btn = e.target.closest('.etq-frm');
  if (!btn || !formularioCuenta.contains(btn)) return;

  const all = Array.from(formularioCuenta.querySelectorAll('.etq-frm'));
  const index = all.indexOf(btn);

  const cfg = configIndex[index]; 
  if (!cfg) return;        
 
  ocultarTodos([cfg.id]);

  document.querySelector('#marco-formulario').style.display = 'flex';
  document.querySelector('#marco-formulario').style.top='10vh'
  document.querySelector('#formulario-cuenta').style.display = 'grid';
  document.querySelector('#buscador').style.display = 'flex';
  document.querySelector('#search-form').style.displ='flex'
  container1.style.display='grid'
  linkIni1.style.display='block'
  linkIni2.style.display='block'

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
function   showImage(index, imageArray) {
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

  const spans = document.querySelectorAll('.etq-frm');
  spans.forEach(span => {
    span.style.backgroundColor = '';
    span.style.color = '';
  });
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
    case 'butts-simulador':
      container1.style.display='grid'
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
const diasMes = document.querySelectorAll('.dia');
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
  const spans = document.querySelectorAll('.item-naranja .item-naranja');

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
  const padreGrafica10 = document.querySelector('#padre-grafica4'); 
  padreGrafica10.style.display = 'flex';
  const canvas = document.getElementById('MiGrafica10');

  // Destruir gráfico previo (idéntico a función que sí funciona)
  if (chart13) {
    chart13.destroy();
    chart13 = null;
  }

  // Ocultar y mostrar con un delay EXACTO igual al gráfico que sí funciona
  canvas.style.display = 'none';
  setTimeout(() => (canvas.style.display = 'block'), 100);

  const ctx = canvas.getContext('2d');

  // Configuración alineada con la otra función (misma estructura general)
  const configBase = {
    type: 'bar',
    data: {
      labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
      datasets: [
        {
          label: 'Participación en M.A',
          data: [100, 75, 86, 98],
          backgroundColor: [
            'rgba(30,149,54,1)',
            'rgba(30,149,54,0.7)',
            'rgba(30,149,54,0.5)',
            'rgba(30,149,54,0.3)'
          ],
          borderWidth: 1
        },
        {
          type: 'line',
          data: [100, 80, 90, 95],
          barPercentage: 1.24,
          borderColor: 'orange',
          borderWidth: 1,
          pointRadius: 0,
          fill: false,
          tension: 0.2
        }
      ]
    },
    options: {
      responsive: false,            // igual que tu función que sí anima
      maintainAspectRatio: false,   // igual
      animation: {
        duration: 900,              // igual que el correcto
        easing: 'easeOutQuart'      // igual
      },
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Sesiones M.A Mes',
          font: { size: 13 }
        }
      },
      scales: {
        x: {
          categoryPercentage: 1,
          grid: { display: false },
          ticks: { color: '#fff', font: { size: 7 } }
        },
        y: {
          grid: { display: false },
          ticks: { display: false }
        }
      }
    }
  };

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
          data: [100, 50, 75, 100, 100],
          backgroundColor: [
            'rgba(255,255,0,0.3)',
            'rgba(255,255,0,0.4)',
            'rgba(255,255,0,0.5)',
            'rgba(255,255,0,0.6)',
            'rgba(255,255,0,0.7)'
          ],
          borderWidth: 1
        },
        {
          type: 'line',
          data: [100, 80, 90, 95],
          barPercentage: 1.24,
          borderWidth: 1,
          pointRadius: 0,
          fill: false,
          tension: 0.2
        }

      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      animation: {
        duration: 1500,              // igual que el correcto
        easing: 'easeOutQuart'      // igual
      },
      plugins: {
        legend: { display: false },
        title: {
          display: true, 
          text: 'Cumplimiento semanal', 
          font: { size: 13 } 
        }
      },
      indexAxis: 'y',
      scales: {
        x: {
          min: 0,
          max: 150,          
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

  chart14 = new Chart(ctx, configBase);
}
let miCanvas14 = document.getElementById('MiGrafica12').getContext('2d')
let chart15;

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
      animation: {
        duration: 1500,              // igual que el correcto
        easing: 'easeOutQuart'      // igual
      },
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
          min: 0,
          max: 150,          
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
      responsive: false,
      maintainAspectRatio: false,
      animation: {
        duration: 1500,              // igual que el correcto
        easing: 'easeOutQuart'      // igual
      },
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

function crearGraficoParticipacion() {
  const padreGrafica12 = document.querySelector('#padre-grafica6');
  padreGrafica12.style.display = 'flex';
  const canvas = document.getElementById('MiGrafica12');

  // Destruir grafico previo
  if (chart15) {
    chart15.destroy();
    chart15 = null;
  }

  canvas.style.display = 'none';
  setTimeout(() => canvas.style.display = 'block', 100);

  const ctx = canvas.getContext('2d');

  const configLine = {
    type: 'line',
    data: {
      labels: ['Mecánicas', 'Layout','Diseño','Temporales','Fijas','Transición'],
      datasets: [
        {
          label: 'Participación en M.A',
          data: [17, 9, 27, 55, 19, 33],
          borderColor: 'rgb(0,0,255)',
          backgroundColor: 'rgb(0,255,255)',
          borderWidth: 1,
          pointRadius: 2,
          pointBackgroundColor: 'rgb(0,255,255)',
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      animation: {
        duration: 1500,              // igual que el correcto
        easing: 'easeOutQuart'      // igual
      },
      plugins: {
        legend: {
        display: false },
        title: {
          display: true,
          text: 'Variación general',
          font: { size: 13 },
          color: 'rgb(111,111,111)'
        }
      },
      scales: {
        x: {
          min: 0,
          max: 150,          
          grid: { display: false },
          ticks: { color: '#fff', font: { size: 7 } }
        },
        y: {
          grid: { display: false },
          ticks: { beginAtZero: true, color: '#fff', font: { size: 7 } }
        }
      }
    }
  };

  chart15 = new Chart(ctx, configLine);

}
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
  const buscador  = document.getElementById('buscador');
  mostrar(linkIni1, linkIni1, buscador);
  padreLinks.style.display='none'
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
      alternarColor(firstMachine)
      saltarAlerta('Seleccione una Maquina y el Mes', 'lanzaGrafos')
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

const mesCalendario = document.getElementById('calendario-mes');
mesCalendario.addEventListener('click', (e) => {
  const dia = e.target.closest('.dia');
  
  if (!dia || dia.classList.contains('vacio')) return;

  // quitar estado activo a todos
  mesCalendario.querySelectorAll('.dia.activo')
    .forEach(d => d.classList.remove('activo'));

  // activar el clicado
  dia.classList.add('activo');
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
  }, 350);
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
  document.querySelector('#porta-imagen').style.marginTop='3vh'
  const padreRgb = document.querySelector('.contenedor-visor')
  const visorImg = document.querySelector('.visor-imagen')
  padreRgb.style.display = 'flex';
  padreRgb.style.flexDirection='column'
  padreRgb.style.alignItems = 'center';
  padreRgb.style.justifyContent = 'center';
  padreRgb.style.width='15vw'
  padreRgb.style.height='50vh'
  padreRgb.style.marginTop = '90px';
  padreRgb.style.left='1vw'
  padreRgb.style.border='1px solid #1e90ff'
  visorImg.style.width='100%'
  visorImg.style.marginLeft= '-0.1vw'

  setTimeout(() => {
  document.querySelector('.panel-nombres').style.display='none'          
  }, 10);

}

function ingresoEmpleado(){  
  calculadoraSimulador=true
  const excluidos = [
    'ingresos-sistema','buscador','search-form','links-inicialesI','links-iniciales','container01'
  ];
  allContenedores.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = excluidos.includes(id) ? 'grid' : 'none';
  });
  const inputs = document.querySelectorAll('.verGraficos');
  const hijo = document.getElementById('ingresos-sistema');

  flagEmpleado = true
  interfazRRHH.removeAttribute('style');
  hijo.removeAttribute('style');  
  ["padre-ingresos","ingresos-sistema"].forEach(id => aparecerElemento(id, "grid"));
  limpiarEntradas()

  setTimeout(() => {
    if (!esDesktop) {
      inputs.forEach(input => {
        if (input.tagName === 'INPUT') {
          input.readOnly = true; 
        }
      });      

      calculadora.classList.remove('move-calculadora-1')
      calculadora.classList.remove('move-calculadora')
      calculadora.classList.remove('move-calculadora-up')

      reUbicarElemento('calculadora', {
        display: 'grid',
        left: '40vw',
        width: '40vw',
        top: '102vh',
        height: '45vh',
        parentSelector: '#simulador'
      });

    } else{
      inputs.forEach(input => {
        if (input.tagName === 'INPUT' && input.id !== 'numDoc' && input.id !== 'numDoc1') {
          input.readOnly = false;
        }
      });      
    }    
  }, 350);  
}

function ingresoEmpleadoMA(){  
  calculadoraSimulador=true
  const excluidos = [
    'buscador','search-form','links-inicialesI','links-iniciales','container01'
  ];
  allContenedores.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = excluidos.includes(id) ? 'grid' : 'none';
  });
  const inputs = document.querySelectorAll('.verGraficos');
  const hijo = document.getElementById('ingresos-sistema-ma');
  inputs.forEach(input => {
    input.style.backgroundColor = '';
  });

  flagEmpleado = true
  interfazMA.removeAttribute('style');
  hijo.removeAttribute('style');
  ["padre-ingresos-ma","ingresos-sistema-ma"].forEach(id => aparecerElemento(id, "grid"));
  limpiarEntradas()

  setTimeout(() => {
    if (!esDesktop) {
      inputs.forEach(input => {
        if (input.tagName === 'INPUT') {
          input.readOnly = true;
        }
      });
    
      calculadora.classList.remove('move-calculadora-1')
      calculadora.classList.remove('move-calculadora')
      calculadora.classList.remove('move-calculadora-up')

      reUbicarElemento('calculadora', {
        display: 'grid',
        left: '44vw',
        width: '40vw',
        top: '102vh',
        height: '45vh',
        parentSelector: '#simulador'
      });

    } else{
      inputs.forEach(input => {
        if (input.tagName === 'INPUT' && input.id !== 'numDoc-ma' && input.id !== 'numDoc9-ma') {
          input.readOnly = false;
        }
      });      
    }   
  }, 350); 
}

/*********************************************************************************************************************************************** */
const soloNumerosInputs = [
  document.getElementById('numDoc1'),          
  document.getElementById('numDoc1-ma'),
  document.getElementById('numDoc2-ma'),
  document.getElementById('numDoc5-ma'),
  document.getElementById('numDoc3-ma'),
  document.getElementById('numDoc4-ma'),
  document.getElementById('numDoc8-ma'),
  document.getElementById('numDoc7-ma'),
  document.getElementById('numDoc6-ma'),
  document.getElementById('nomEmpl-ma')
];
// Lógica reutilizable
function limpiarYCapitalizar(e) {
  let valor = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');

  valor = valor.toLowerCase().replace(/\b\w/g, letra => letra.toUpperCase());

  e.target.value = valor;
}

// Aplicarlo a ambos inputs
[inputNombre, inputNombreMA].forEach(input => {
  if (input) input.addEventListener('input', limpiarYCapitalizar);
});

inputNombre.addEventListener('focusin',() =>{
  if(!esDesktop) showKeyboard()
})
inputNombre.addEventListener('blur', () => {
  if(!esDesktop) hideKeyboard()
});

buscaNombre.addEventListener('focusin',() =>{
  if(!esDesktop) showKeyboard()
})
buscaNombre.addEventListener('blur', () => {
  if(!esDesktop) hideKeyboard()
});


function permitirSoloNumeros(e) {
  const input = e.target;

  input.value = input.value.replace(/\D/g, '');

  if (input.value.length > 1 && !input.hasAttribute('data-multi')) {
    input.value = input.value.slice(-1);
  }
}


soloNumerosInputs.forEach(input => {
  if (input) input.addEventListener('focusin', permitirSoloNumeros);
});

/*********************************************************************************************************************************************** */

const simuladorGraf = document.getElementById('simulador');

const restablecerEstilos = el => {
  const nodo = typeof el === 'string'
    ? document.getElementById(el)
    : el;

  if (!nodo) return;

  nodo.removeAttribute('style');
};

const reUbicarElemento = (
  el,
  { display, left, width, top, height, parentSelector }
) => {
  const nodo = typeof el === 'string'
    ? document.getElementById(el)
    : el;

  if (!nodo) return;

  if (parentSelector) {
    const padre = document.querySelector(parentSelector);
    if (padre) padre.style.display = 'block';
  }

  Object.assign(nodo.style, {
    display,
    left,
    width,
    top,
    height
  });
};

const configCalculadora = {
  display: 'grid',
  left: '45%',
  width: '25%',
  top: '38%',
  height: '30%',
  parentSelector: '#simulador'
};

// FOCO/CLICK EN INPUTS M.A
const soloNumerosSet = new Set(soloNumerosInputs);

interfazMA.addEventListener('focusin', e => {
  const target = e.target;

  if (target.tagName !== 'INPUT') return;

  if (!soloNumerosSet.has(target)) return;
});

document.querySelectorAll('.fila-ingreso-ma > input').forEach(input => {
  input.addEventListener('input', () => {
    if (input.value.length > 1) {
      input.value = input.value.slice(0, 1);
    }
  });
});

inputRRHH.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
  if(!esDesktop)ubicaCalculadoraSegunContexto()
});
inputRRHH.addEventListener('click',() =>{
  if(!esDesktop) ubicaCalculadoraSegunContexto()
})
inputDocumentoEmpleado.addEventListener('click',() =>{
  if(!esDesktop) ubicaCalculadoraSegunContexto()
})



inputMA.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
  ubicaCalculadoraSegunContexto()
});

inputMA.addEventListener('click', (e) => {
  if(!esDesktop){ubicaCalculadoraSegunContexto()}
});




const contextoActivo = () =>[interfazRRHH, interfazMA].some(el => el && el.getBoundingClientRect().width > 0 && el.getBoundingClientRect().height > 0);

document.addEventListener('pointerdown', (e) => {
  if (esDesktop) return;
  if (!contextoActivo()) return;

  const clickDentroCalculadora = calculadora.contains(e.target);
  const clickEnInput = inputMA.contains(e.target);
  const clickEnItemsMA = [...entradas].some(el =>
    el.contains(e.target)
  );

  if (!clickDentroCalculadora && !clickEnInput && !clickEnItemsMA) {
    hideCalculator();
  }
});



document.querySelector('#recarga').addEventListener('click', ingresoEmpleado);
document.querySelector('#recargaMA').addEventListener('click', ingresoEmpleadoMA);

document.querySelector('#cerrarVentana').addEventListener('click', () =>{
  traerElementos('.ocultos')
  document.querySelector('#container01').style.display='grid'
  restablecerClick(['.entrada-empleado']);
  document.querySelector('.ventana-mensaje').style.display='none'
})
btnDblFlecha.addEventListener('click', ()=>{
 if(flagEmpleado === true){
  return
 }else{
  desaparecerElemento('grafico-area')
  desaparecerElemento('abuelo-indicadores') 
  desaparecerElemento('abuelo-grafica12')
  desaparecerElemento('padre-desempeños') 
  restaurarPosicionPadreIngresos() 
  detenerAlternarColor(btnDblFlecha,btnAgregar,btnLimpiar,btnModificar)
  flagEmpleado = true
 }
})
const inputArchivo = document.getElementById('numDoc6');
let escala = 1;
// BOTON ROJO
function moverPadreIngresos(porcentajeX, porcentajeY) {
  flagEmpleado = false
  const inputs = document.querySelectorAll('.storeText');
  const img = document.querySelector('.imgEmpleado img');
  const valor = inputArchivo.value.trim().toLowerCase();

  for (const input of inputs) {
    if (!input.value.trim()) {
      /* mostrarVentanaMensaje('Hay campos sin diligenciar.'); */
      parpadearElemento('nomEmpl');
      saltarAlerta('Hay campos sin diligenciar.', 'moverRrhh')
      flagEmpleado = true
      return;
    }

    if (!img || !img.src || img.src.trim() === '' || img.src.endsWith('/')) {
      mostrarVentanaMensaje('Debe insertar una imagen.'); 
      flagEmpleado = true
      return;
    }

  }
  if (!valor.endsWith('.png') && !valor.endsWith('.jpg') && !valor.endsWith('.jpeg')) {
    mostrarVentanaMensaje('El archivo debe ser una imagen .png o .jpg');  
    flagEmpleado = true
    return;
  }
  eliminarCalendario('.calendario-interfaz');
  const padre = document.getElementById('padre-ingresos');
  if (!padre) return;
  const desplazamientoX = padre.offsetWidth * (porcentajeX / 100);
  const desplazamientoY = padre.offsetHeight * (porcentajeY / 100);
  setTimeout(() => {
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
// boton rojo 
document.querySelector('.metricas-empleado').addEventListener('click', ()=>{ 
  console.log('BANDERA : ', flagEmpleado)
  const padre = document.getElementById('padre-ingresos');
  padre.style.transform = `translate(${desplazamientoX * -1}px, ${desplazamientoY * -1}px) scale(1)`;    
  moverPadreIngresos(61,28)
  if (inputRRHH.value !== ''){
    alternarResultados('grafico-area')
  }
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

// CLICK EN EL INPUT
inputFoto.addEventListener('click', () => {
  /* listaFotos.style.display = 'block'; */
  generarListaFotos()
});
// ocultar lista si se hace clic fuera

document.addEventListener('click', e => {
  if (!listaFotos.contains(e.target) && e.target !== inputFoto) {
    listaFotos.style.display = 'none';
  }
});
function generarListaFotos() {
  listaFotos.innerHTML = ""; // limpia anterior

  rutasFotos.forEach(ruta => {
    const itemFoto = document.createElement('div');
    itemFoto.textContent = ruta;

    itemFoto.addEventListener('mouseenter', () => {
      previewFoto.src = ruta;
    });

    itemFoto.addEventListener('click', () => {  
      inputFoto.value = ruta;
      previewFoto.src = ruta;
      listaFotos.style.display = 'none';
    });

    listaFotos.appendChild(itemFoto);
  });

  listaFotos.style.display = 'block'; // mostrar solo cuando se genera
}


/**************************************************************************************************************** */

document.querySelector('#borrarBoton').addEventListener('click', () =>{
  activarPantallaCompleta()
  ingresoEmpleado()
})
document.querySelector('#borrarBoton2').addEventListener('click', () =>{
  activarPantallaCompleta()
  deslizaContenedor('conti-boton-kaizen','kaizen')
  rodillosKaizen('btn17','')
  ingresoEmpleadoMA()

})

const botoni = document.querySelector('#borrarBoton3');
const wrapper = document.querySelector('#calculadora');

botoni.addEventListener('click', () => {
  const visible = getComputedStyle(wrapper).display !== 'none';

  if (!visible) {
    // elimina TODOS los estilos en línea antes de mostrar
    wrapper.removeAttribute('style');
    wrapper.style.display = 'grid';
    wrapper.style.left='10vw'
    botoni.style.backgroundColor = 'orange';
  } else {
    wrapper.style.display = 'none';
    botoni.style.backgroundColor = 'green'

  }
});

/******************************************************************************************************************** */


/* function crearControlLed(idContenedor, idInput, totalLeds = 10) {
  const contenedor = document.getElementById(idContenedor);
  let leds = [];
  let indice = 0;

  function construir() {
    contenedor.innerHTML = '';
    for (let i = 0; i < totalLeds; i++) {
      const celda = document.createElement('div');
      celda.classList.add('led-celda');
      contenedor.appendChild(celda);
    }
    leds = [...contenedor.querySelectorAll('.led-celda')];
  }

  function aumentar() {
    if (indice >= totalLeds) return;
    leds[indice].classList.add('led-amarillo');
    indice++;
  }

  function disminuir() {
    if (indice <= 0) return;
    indice--;
    leds[indice].classList.remove('led-amarillo');
  }

  construir();
} */
const contenedoresLineas = document.querySelectorAll('#contenedor-indicador');
function waitUntilFull(contenedor, blockout, anchoTotal, timeout = 2000) {
  // Espera hasta que blockout.offsetWidth sea ~ anchoTotal (tolerancia 1px)
  // timeout en ms por seguridad
  return new Promise((resolve) => {
    const start = performance.now();
    function check(now) {
      const current = blockout.offsetWidth;
      if (Math.abs(current - anchoTotal) <= 1) {
        resolve(true);
        return;
      }
      if (now - start > timeout) { // si se excede, forzamos
        // Forzamos ancho final si algo falla
        blockout.style.width = `${anchoTotal}px`;
        resolve(true);
        return;
      }
      requestAnimationFrame(check);
    }
    requestAnimationFrame(check);
  });
}
function reducirBlockout(contenedor) {
  const blockout = contenedor.querySelector('.blockout');
  if (!blockout) return;

  // Si ya está ocupada, evitar reiniciar
  if (contenedor.dataset.busy === "true") return;
  contenedor.dataset.busy = "true";

  // Medir ancho real y fijarlo como ancho inicial en px
  const anchoTotal = contenedor.offsetWidth;
  blockout.style.width = `${anchoTotal}px`;

  // Esperar hasta que DOM/render haya aplicado ese ancho (seguro)
  waitUntilFull(contenedor, blockout, anchoTotal, 1500).then(() => {
    // Parametros de animación
    const duracionMs = 500;   // duracion total de reducción
    const intervaloMs = 50;   // intervalo de paso (mantengo tu ritmo)
    const pasos = Math.max(1, Math.round(duracionMs / intervaloMs));
    const paso = anchoTotal / pasos;

    let progreso = anchoTotal;
    const intervalo = setInterval(() => {
      progreso -= paso;

      if (progreso <= 0) {
        progreso = 0;
        clearInterval(intervalo);
        contenedor.dataset.busy = "false"; // liberar
      }

      // Aplicar en px (redondeado para evitar sub-píxeles raros)
      blockout.style.width = `${Math.max(0, Math.round(progreso))}px`;
    }, intervaloMs);
  }).catch(() => {
    // En caso de error improbable, liberamos el flag
    contenedor.dataset.busy = "false";
  });
}
let dentro = false;
function mostrar() {
  if(flagEmpleado === true)return
  padreLinks.style.display = 'block';
}
function ocultar() {
  setTimeout(() => {
    // Solo ocultar si el cursor NO está sobre listaClientes
    if (!padreLinks.matches(':hover')) {
      padreLinks.style.display = 'none';
      restablecerClick(['.estilo-1', '.jobs']);
    }
  }, 300);  
}

btnAreas.addEventListener('click', () => {
  if (inputNombre.value === '') {
    parpadearElemento('nomEmpl');
    saltarAlerta('Debe ingresar un numero de documento', 'detieneArea');
  } else {
    dentro = true;
    mostrar();
  }
});

btnAreas.addEventListener('mouseleave', () => {
  dentro = false;
  ocultar();
});

padreLinks.addEventListener('mouseenter', () => {
  dentro = true;
  mostrar();
});
padreLinks.addEventListener('mouseleave', () => {
  dentro = false;
  ocultar();
});

primerItem.addEventListener('click', () =>{
  const padres = document.querySelector('#grafico-area')  
  padres.style.display = 'block';
    Array.from(padres.querySelectorAll('*')).forEach(hijo => {
    hijo.style.display = '';
    hijo.style.visibility = 'visible';
    hijo.style.opacity = '1';
  });
  alternarResultados('abuelo-indicadores')

  setTimeout(() => {
    aplicarLedsDesdeEmpleado(empleadoGlobal.documento);
  }, 1300);
  setTimeout(() => {
    aplicarNormalizacionDeColores()
  }, 2200); 
  padreLinks.style.display='none'
})

segundoItem.addEventListener('click', () =>{
  padreLinks.style.display='none'
  alternarResultados('padre-desempeños')
})

tercerItem.addEventListener('click', () =>{
  padreLinks.style.display='none'
  alternarResultados('abuelo-grafica12')
  setTimeout(() => {
    crearGraficoTreeMap()
  }, 350);
})

function aplicarLedsDesdeEmpleado(empleadoGlobal) {
  // 1. Cargar la colección completa
  const almacen = JSON.parse(localStorage.getItem('empleadosRegistrados'));
  if (!almacen || !Array.isArray(almacen)) {
    console.error('No existe el objeto empleadosRegistrados en localStorage.');
    return;
  }

  // 2. Buscar el empleado seleccionado por nombre
  const empleado = almacen.find(e => e.documento === empleadoGlobal);
  if (!empleado) {
    console.error(`No se encontró un empleado con nombre: ${empleadoGlobal}`);
    return;
  }

  // 3. Propiedades requeridas en el orden exacto
  const campos = [
    'identificados',
    'corregidos',
    'tipoA',
    'tipoB',
    'kaizen',
    'adas',
    'adt',
    'lup'
  ];

  // 4. Extraer valores numéricos en ese orden
  const valores = campos.map(prop => Number(empleado[prop] ?? 0));

  // 5. Llamar a tu función base
  aplicarLeds(valores);
}

function aplicarLeds(valores) {
  const ids = [
    'led-identificados',
    'led-corregidos',
    'led-tipo-a',
    'led-tipo-b',
    'led-kaizen',
    'led-adas',
    'led-adt',
    'led-lup'
  ];

  ids.forEach((id, index) => {
    const cantidad = valores[index];
    const contenedor = document.getElementById(id);

    contenedor.innerHTML = ''; // limpiar antes

    for (let i = 0; i < cantidad; i++) {
      const celda = document.createElement('div');
      celda.classList.add('led-celda', 'led-verdes');
      contenedor.appendChild(celda);
    }
  });

  contenedoresLineas.forEach(contenedor => {
  const blockout = contenedor.querySelector('.blockout');
  if (!blockout) return;

  // Aseguramos ancho inicial real
  const anchoTotal = contenedor.offsetWidth;
  blockout.style.width = `${anchoTotal}px`;

  reducirBlockout(contenedor);
  });        
    
}
function cargarEmpleadoMA() {
  const valorBusqueda = inputMA.value.trim();

  if (!valorBusqueda) {
    console.log('NO HAY VALOR DE BUSQUEDA');
    return;
  }

  const empleados = JSON.parse(localStorage.getItem('empleadosRegistrados')) || [];

  // Buscar empleado por documento
  const empleado = empleados.find(emp => emp.documento === valorBusqueda);

  if (!empleado) {
    console.log('NO HAY COINCIDENCIA EN LOCAL ALMACEN');
    empleadoGlobal = null;        // Limpia global si no hay coincidencia
    return;
  }

  // Guardar en variable global
  empleadoGlobal = empleado;

  // Rellenar inputs destino
  const inputNombreMA        = document.getElementById('numDoc-ma');
  const inputDocumentoMA     = document.getElementById('numDoc9-ma');
  const inputIdentificadosMA = document.getElementById('numDoc1-ma');
  const inputCorregidosMA    = document.getElementById('numDoc2-ma');
  const inputTipoAMA         = document.getElementById('numDoc5-ma');
  const inputTipoBMA         = document.getElementById('numDoc3-ma');
  const inputAdasMA          = document.getElementById('numDoc7-ma');
  const inputAdtMA           = document.getElementById('numDoc6-ma');
  const inputLupMA           = document.getElementById('numDoc8-ma');
  const inputKaizenMA        = document.getElementById('numDoc4-ma');

  if (inputNombreMA)         inputNombreMA.value        = empleado.nombre        || '';
  if (inputDocumentoMA)      inputDocumentoMA.value     = empleado.documento     || '';
  if (inputIdentificadosMA)  inputIdentificadosMA.value = empleado.identificados || '';
  if (inputCorregidosMA)     inputCorregidosMA.value    = empleado.corregidos    || '';
  if (inputTipoAMA)          inputTipoAMA.value         = empleado.tipoA         || '';
  if (inputTipoBMA)          inputTipoBMA.value         = empleado.tipoB         || '';
  if (inputAdasMA)           inputAdasMA.value          = empleado.adas          || '';
  if (inputAdtMA)            inputAdtMA.value           = empleado.adt           || '';
  if (inputLupMA)            inputLupMA.value           = empleado.lup           || '';
  if (inputKaizenMA)         inputKaizenMA.value        = empleado.kaizen        || '';

  // Cargar imagen
  const imgElemento = document.getElementById('empleadoImg-ma');

  if (!empleadoGlobal) {
    console.warn('empleadoGlobal está vacío o es null');
    return;
  }

  if (!imgElemento) {
    console.warn('Elemento #empleadoImg-ma no existe en el DOM');
    return;
  }

  console.log('Valor original de imagen:', empleadoGlobal.imagen);

  let rutaImagen = empleadoGlobal.imagen?.trim() || '';

  if (!rutaImagen) {
    console.log('No hay ruta en el objeto. Usando silueta.');
    rutaImagen = './assets/silueta.png';
  } else if (!rutaImagen.startsWith('./') && !rutaImagen.startsWith('assets/')) {
    console.log('Ruta sin prefijo. Ajustando:', rutaImagen);
    rutaImagen = `./assets/${rutaImagen}`;
  }

  console.log('Ruta final que intenta cargar:', rutaImagen);

  /* imgElemento.onerror = () => { 
    console.warn('ERROR cargando imagen. Colocando silueta por fallback.');
    imgElemento.src = './assets/silueta.png';
  }; */
  imgElemento.src = rutaImagen;
}

document.querySelector('#lbl-ingreso-ma').addEventListener('click', infoEmpleadoPorSector('mantAutonomo'));
document.querySelector('#lbl-ingreso').addEventListener('click', infoEmpleadoPorSector('recursoHumano'));

function infoEmpleadoPorSector(infoSector) {
  return function () {
    switch (infoSector) {
      case 'mantAutonomo': {

        if (!inputMA || inputMA.value.trim() === '') {
          saltarAlerta('Ingrese numero de documento', 'autonomoIngreso');
          parpadearElemento('nomEmpl-ma');
          return;
        }else{
          calculadora.classList.remove('move-calculadora-up')

          const valor = inputMA.value.trim();
          const empleados = JSON.parse(
            localStorage.getItem('empleadosRegistrados')
          ) || [];

          const empleadoEncontrado = empleados.find(
            emp => emp.documento === valor
          );

          if (!empleadoEncontrado) {
            saltarAlerta('Empleado no encontrado en la BD.', 'recursoNn');
            return;
          }

          cargarEmpleadoMA();
          setTimeout(aplicarColoresInputs, 250);


        }

        break;
      }
      case 'recursoHumano': {
        
        console.log(
          'Contenido de localStorage empleadosRegistrados:',
          JSON.parse(localStorage.getItem('empleadosRegistrados'))
        );

        const valor = inputRRHH.value.trim();
        
        // Validación inicial
        if (!valor) {
          /* mostrarVentanaMensaje('Debe ingresar un número de documento.', 'padre-ingresos'); */
          saltarAlerta('Debe ingresar un número de documento.', 'recursoDocumento')
          parpadearElemento('nomEmpl');
          restaurarPosicionPadreIngresos();
          flagEmpleado = true;
          return;
        }else{
          calculadora.classList.remove('move-calculadora-up')
          const empleados = JSON.parse(localStorage.getItem('empleadosRegistrados')) || [];

          // Buscar usando cualquiera de los dos valores
          const empleadoEncontrado = empleados.find(emp =>
            emp.documento === valor
          );

          if (empleadoEncontrado) {
            console.log('Empleado encontrado:');
            console.log(`Nombre: ${empleadoEncontrado.nombre}`);
            console.log(`Documento: ${empleadoEncontrado.documento}`);
            console.log(`Área: ${empleadoEncontrado.area}`);
            console.log(`Cargo: ${empleadoEncontrado.cargo}`);
            console.log(`Equipo: ${empleadoEncontrado.equipo}`);
            console.log(`Fecha ingreso: ${empleadoEncontrado.fecha}`);
            console.log(`Imagen: ${empleadoEncontrado.imagen}`);
            console.log(`Identificados: ${empleadoEncontrado.identificados}`);
            console.log(`Corregidos: ${empleadoEncontrado.corregidos}`);
            console.log(`Tipo A: ${empleadoEncontrado.tipoA}`);
            console.log(`Tipo B: ${empleadoEncontrado.tipoB}`);
            console.log(`Kaizen: ${empleadoEncontrado.kaizen}`);
            console.log(`ADA.s: ${empleadoEncontrado.adas}`);
            console.log(`ADT: ${empleadoEncontrado.adt}`);
            console.log(`Lup: ${empleadoEncontrado.lup}`);


            document.getElementById('numDoc').value = empleadoEncontrado.nombre;
            document.getElementById('numDoc1').value = empleadoEncontrado.documento;
            document.getElementById('numDoc2').value = empleadoEncontrado.area;
            document.getElementById('numDoc3').value = empleadoEncontrado.equipo;
            document.getElementById('numDoc4').value = empleadoEncontrado.fecha;
            document.getElementById('numDoc5').value = empleadoEncontrado.cargo;
            document.getElementById('numDoc6').value = empleadoEncontrado.imagen || './assets/';

            document.getElementById('numDoc-ma').value = empleadoEncontrado.nombre;
            document.getElementById('numDoc9-ma').value = empleadoEncontrado.documento;
            document.getElementById('numDoc1-ma').value = empleadoEncontrado.identificados;
            document.getElementById('numDoc2-ma').value = empleadoEncontrado.corregidos;
            document.getElementById('numDoc5-ma').value = empleadoEncontrado.tipoA;
            document.getElementById('numDoc3-ma').value = empleadoEncontrado.tipoB;
            document.getElementById('numDoc4-ma').value = empleadoEncontrado.kaizen;
            document.getElementById('numDoc8-ma').value = empleadoEncontrado.lup;
            document.getElementById('numDoc7-ma').value = empleadoEncontrado.adas;
            document.getElementById('numDoc6-ma').value = empleadoEncontrado.adt;  

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
            /* mostrarVentanaMensaje('Empleado no encontrado en la BD.'); */
            saltarAlerta('Empleado no encontrado en la BD.', 'recursoNn')
          }
          empleadoGlobal = empleadoEncontrado
          console.log('TRANSFERIDO A GLOBAL :', empleadoGlobal  )
          
          break;
        }

      }
    };



        }

}

document.querySelector('#nuevo-ingreso-ma').addEventListener('click',()=>{
  if (inputNombreMA.value !== '') {
    saltarAlerta('Confirmar cambios', 'recursosConfirmar')
  }else{
    saltarAlerta('Ingrese numero de documento', 'mantenimientoID')
    parpadearElemento('nomEmpl-ma');
  }
  
}) 

function actualizarIdentificadosMA(sector) {
  if(sector === 'M.A'){
    const docInput   = document.getElementById('numDoc9-ma');
    const identInput = document.getElementById('numDoc1-ma');
    const corrInput = document.getElementById('numDoc2-ma');
    const tipoaInput = document.getElementById('numDoc5-ma');
    const tipobInput = document.getElementById('numDoc3-ma');
    const kaizenInput = document.getElementById('numDoc4-ma');
    const adaInput = document.getElementById('numDoc7-ma');
    const adtInput = document.getElementById('numDoc6-ma');
    const lupInput = document.getElementById('numDoc8-ma');

    const documentoBusqueda = docInput.value.trim();
    const nuevoIdentificado = identInput.value.trim();
    const nuevoCorregido = corrInput.value.trim();
    const nuevoTipoA = tipoaInput.value.trim();
    const nuevoTipoB = tipobInput.value.trim();
    const nuevoKaizen = kaizenInput.value.trim();
    const nuevoAda = adaInput.value.trim();
    const nuevoAdt = adtInput.value.trim();
    const nuevoLup = lupInput.value.trim();

    if (!documentoBusqueda || !nuevoIdentificado || !nuevoCorregido || !nuevoTipoA || !nuevoTipoB || !nuevoKaizen || !nuevoAda || !nuevoAdt || !nuevoLup) {
      saltarAlerta('Faltan datos para continuar.', 'recursoFaltante')
      return;
    }

    let empleados = JSON.parse(localStorage.getItem('empleadosRegistrados')) || [];

    console.log('Estado inicial de empleadosRegistrados:', empleados);

    // Ubicar empleado correspondiente
    const empleado = empleados.find(emp => emp.documento === documentoBusqueda);

    if (!empleado) {
      console.log('No se encontró un empleado con ese documento.');
      return;
    }

    // Actualizar propiedad
    empleado.identificados = nuevoIdentificado;
    empleado.corregidos = nuevoCorregido;
    empleado.tipoA = nuevoTipoA;
    empleado.tipoB = nuevoTipoB;
    empleado.kaizen = nuevoKaizen;
    empleado.adas = nuevoAda;
    empleado.adt = nuevoAdt;
    empleado.lup = nuevoLup;

    empleadoGlobal = empleado

    console.log('Empleado actualizado:', empleado);
    saltarAlerta('Empleado actualizado','recursosActualizar')

    // Guardar cambios
    localStorage.setItem('empleadosRegistrados', JSON.stringify(empleados));

    // Verificación final
    const verificacion = JSON.parse(localStorage.getItem('empleadosRegistrados'));
    console.log('Estado final en localStorage:', verificacion);
    console.log('GLOBAL : ', empleadoGlobal)
  }

  else {

    const nombInput   = document.getElementById('numDoc');
    const docInput    = document.getElementById('numDoc1');
    const areaInput   = document.getElementById('numDoc2');
    const cargoInput  = document.getElementById('numDoc5');
    const fechaInput  = document.getElementById('numDoc4');
    const equipoInput = document.getElementById('numDoc3');
    const fotoInput   = document.getElementById('numDoc6');

    const documentoBusqueda = docInput.value.trim();
    const nuevoIdentificado = nombInput.value.trim();
    const nuevoArea         = areaInput.value.trim();
    const nuevoCargo        = cargoInput.value.trim();
    const nuevoFecha        = fechaInput.value.trim();
    const nuevoEquipo       = equipoInput.value.trim();
    const nuevoFoto         = fotoInput.value.trim();

    // Validación básica
    if (!documentoBusqueda) {
      parpadearElemento('nomEmpl');
      saltarAlerta('Ingrese documento del empleado.', 'recursoNuevo')
      return;
    }

    // 1. Cargar empleados
    let empleados = JSON.parse(localStorage.getItem('empleadosRegistrados')) || [];

    console.log('Estado inicial empleados:', empleados);

    // 2. Buscar empleado por documento
    const empleado = empleados.find(emp => emp.documento === documentoBusqueda);

    if (!empleado) {
      mostrarVentanaMensaje('No se encontró un empleado con ese documento.');
      return;
    }

    console.log('Empleado encontrado:', empleado);

    // 3. Actualizar propiedades usando lo que hay en los inputs AHORA MISMO
    empleado.nombre   = nuevoIdentificado;
    empleado.documento = documentoBusqueda;
    empleado.area     = nuevoArea;
    empleado.cargo    = nuevoCargo;
    empleado.fecha    = nuevoFecha;
    empleado.equipo   = nuevoEquipo;
    empleado.imagen   = nuevoFoto;

    // 4. Actualizar variable global
    empleadoGlobal = { ...empleado };

    console.log('Empleado actualizado:', empleadoGlobal);

    // 5. Guardar en localStorage
    localStorage.setItem('empleadosRegistrados', JSON.stringify(empleados));

    const verificacion = JSON.parse(localStorage.getItem('empleadosRegistrados'));
    console.log('Estado final localStorage:', verificacion);
    saltarAlerta('Empleado actualizado correctamente.','actualizado')
  }
  


}

function limpiarEmpleadosRegistrados() {
  localStorage.setItem('empleadosRegistrados', JSON.stringify([]));
  console.log('empleadosRegistrados se ha vaciado:', JSON.parse(localStorage.getItem('empleadosRegistrados')));
}
function mostrarLocalStorageComoJSON() {
  const resultado = {};

  for (let i = 0; i < localStorage.length; i++) {
    const clave = localStorage.key(i);
    const valor = localStorage.getItem(clave);

    try {
      // Intentar parsear JSON; si no es JSON, se deja como texto plano
      resultado[clave] = JSON.parse(valor);
    } catch {
      resultado[clave] = valor;
    }
  }

  console.log(JSON.stringify(resultado, null, 2));
}
function mostrarVentanaMensaje(texto) {
  document.getElementById('alerta-mensaje').textContent = texto;
  alertaMSG.style.display = 'flex';
}
document.getElementById('alerta-ok').addEventListener('click', () => {
  alertaMSG.style.display = 'none';
  if (inputRRHH instanceof HTMLElement) {
    inputRRHH.focus();
  }

});

let chart20 = null;
let valorActual = 0; 
let valorObjetivo = 0;
let animando = false;
const series = [
  [0,0,0,0],
  [15, 15, 10, 16],
  [22, 16, 12, 21],
  [20, 17, 15, 30],
  [27, 15, 25, 33],
  [20, 15, 31, 35],
  [40, 16, 32, 39],
  [40, 19, 25, 35],
  [45, 20, 33, 27],
  [48, 27, 30, 41],
  [50, 25, 45, 52],
  [53, 17, 40, 44],
  [60, 30, 36, 50],
  [66, 33, 29, 38],
  [70, 44, 49, 50],  
  [55, 69, 44, 100],
  [69, 85, 53, 91], 
  [77, 89, 65, 98], 
  [88, 92, 71, 75], 
  [72, 40, 52, 48],
  [75, 38, 55, 60],
  [78, 45, 50, 58],
  [82, 43, 62, 65],
  [79, 50, 58, 70],
  [85, 48, 63, 68],
  [88, 55, 60, 72],
  [92, 53, 66, 75],
  [90, 60, 70, 78],
  [95, 57, 68, 82],
  [98, 62, 73, 80]
];
function crearLeds(contenedorLeds) {
  const container = document.getElementById(contenedorLeds);
  container.innerHTML = '';

  for (let i = 0; i < 30; i++) {
    const led = document.createElement('div');
    if(contenedorLeds === 'ledContainer'){
      led.classList.add('led-graphs');
    }else{
      led.classList.add('led-treemap');
    } 
    
    container.appendChild(led);
  }
}

function crearDias(contenedorDias) {
  const container = document.getElementById(contenedorDias);
  container.innerHTML = '';

  for (let i = 1; i <= 30; i++) {
    const day = document.createElement('div');
    if(contenedorDias === 'daysContainer')day.classList.add('day-number');
    if(contenedorDias === 'dias-grafico')day.classList.add('day-treemap');

    day.textContent = i;
    container.appendChild(day);
  }
}

//INPUTS DESLIZADORES
const sliderTree = document.getElementById('slidTree');
const sliderGraf = document.getElementById('miSlid');

//ETIQUETAS PARA ELVALOR
const spanValor = document.getElementById('slider-Valor');
const spanValorTree = document.getElementById('slider-map');

function actualizarDiasYLedsTreeMap(valor) {
  const leds = document.querySelectorAll('.led-treemap');
  const dias = document.querySelectorAll('.day-treemap');

  const currentIndex = valor - 1;

  leds.forEach((led, index) => {
    led.classList.toggle('led-on', index === currentIndex);
  });

  dias.forEach((day, index) => {
    day.classList.toggle('day-on', index === currentIndex);
  });
}

function actualizarDiasYLeds(valor) {
  const leds = document.querySelectorAll('.led-graphs');
  const dias = document.querySelectorAll('.day-number');

  const currentIndex = valor - 1;

  leds.forEach((led, index) => {
    led.classList.toggle('led-on', index === currentIndex);
  });

  dias.forEach((day, index) => {
    day.classList.toggle('day-on', index === currentIndex);
  });
}

// GRAFICO TREEMAP
crearLeds('leds-grafico')
crearDias('dias-grafico')

// GRAFICO BARRAS
crearLeds('ledContainer')
crearDias('daysContainer')
crearGraficoOperacion()   

sliderTree.addEventListener('input', () => {
  if (!chart21) return;

  const valor = Math.floor(Number(sliderTree.value));
  spanValorTree.textContent = valor;

  actualizarTreeMapPorSlider(valor);
  actualizarDiasYLedsTreeMap(valor);
});

let chart21 = null;

function crearGraficoTreeMap() {
  const ctx = document.getElementById('MiGrafica20').getContext('2d');

  if (chart21) {
    chart21.destroy();
  }

  chart21 = new Chart(ctx, {
    type: 'treemap',
    data: {
      datasets: [{
        tree: treeData,
        key: 'value',
        groups: ['category'],
        spacing: 0,
        borderWidth: 0.5,
        borderColor: '#ffffff',

        backgroundColor: ctx => {
          const item = ctx.raw;
          return item ? CATEGORY_COLORS[item.g] : '#ffffff';
        },

        labels: {
          display: true,
          formatter: ctx => CATEGORY_LABELS[ctx.raw.g] || '',
          color: 'rgba(255,255,255,0.85)',
          font: { size: 10, weight: '500' },
          align: 'center',
          position: 'top'
        }
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      }
    }
  });
}

function actualizarTreeMapPorSlider(valor){
  const index = Math.min(valor, series.length - 1);

  const nuevaData = treeData.map((item, i) => ({
    ...item,
    value: series[index][i] ?? 0
  }));

  chart21.data.datasets[0].tree = nuevaData;
  chart21.update();
}

function crearGraficoTreeMap() {
  const ctx = document.getElementById('MiGrafica20').getContext('2d');

  if (chart21) {
    chart21.destroy();
  }

  chart21 = new Chart(ctx, {
    type: 'treemap',
    data: {
      datasets: [{
        tree: treeData,
        key: 'value',
        groups: ['category'],
        spacing: 0,
        borderWidth: 0.5,
        borderColor: '#ffffff',

        backgroundColor: ctx => {
          const item = ctx.raw;
          return item ? CATEGORY_COLORS[item.g] : '#ffffff';
        },

        labels: {
          display: true,
          formatter: ctx => CATEGORY_LABELS[ctx.raw.g] || '',
          color: 'rgba(255,255,255,0.85)',
          font: { size: 10, weight: '500' },
          align: 'center',
          position: 'top'
        }
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      }
    }
  });
}

sliderGraf.addEventListener('input', () => {
  if (!chart20) return;

  const valor = Math.round(Number(sliderGraf.value));
  spanValor.textContent = valor;

  // Seguridad: si el slider supera las series definidas
  const index = Math.min(valor, series.length - 1);

  // Actualizar gráfico con la serie correspondiente
  chart20.data.datasets[0].data = [...series[index]];
  chart20.update();

  actualizarDiasYLeds(valor);
});
function crearGraficoOperacion() {
  const canvas = document.getElementById('MiGrafica17');
  const ctx = canvas.getContext('2d');

  const dataInicial = [0,0,0,0];

  chart20 = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Sergio Lopez', 'Noe Alzate', 'Mario Pineda', 'Juan Taborda'],
      datasets: [
        {
          label: 'Participación en M.A',
          backgroundColor: ['#0B3D91', '#007A7C', '#E57200', '#9B1B30'],
          data: [...dataInicial],
          barPercentage: 1,
          categoryPercentage: 0.95
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      animation: { duration: 300, easing: 'easeOutQuart' },
      plugins: {
        legend: { display: false },
        datalabels: {
          color: '#fff',
          anchor: 'end',
          align: 'end',
          font: { weight: 'bold', size: 10 },
          formatter: v => `${v}`
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#fff', font: { size: 7 } }
        },
  y: {
    min: 0,
    max: 100,
    ticks: {
      stepSize: 25,
      color: '#fff',
      font: { size: 8 }
    },
    grid: {
      display: true,
      color: 'rgba(255,255,255,0.2)'
    }
  }      }
    }
  });
}

function animarTransicion() {
  if (!animando) return;

  // interpolación: suaviza desplazamiento (0.15 es un buen punto medio)
  valorActual += (valorObjetivo - valorActual) * 0.15;

  // redondeo visual para leds y gráfico
  const valorRedondeado = Math.round(valorActual);

  // aplica a gráfico
  chart20.data.datasets[0].data =
    chart20.data.datasets[0].data.map(() => valorRedondeado);
  chart20.update();

  // aplica a leds y días
  actualizarDiasYLeds(valorRedondeado);

  // condición para terminar la animación
  if (Math.abs(valorObjetivo - valorActual) < 0.01) {
    valorActual = valorObjetivo;
    animando = false;
    return;
  }
  requestAnimationFrame(animarTransicion);
}

function alternarResultados(selector) {
  const grafsDesempeño = document.querySelectorAll('.current-graph');
  grafsDesempeño.forEach(item => {
    if (item.id === selector) {
      if(item.id === 'grafico-area'){
        aparecerElemento('grafico-area', 'block')
      }
      if(item.id === 'abuelo-grafica12'){
        aparecerElemento('abuelo-grafica12', 'grid')
      }
      else{
        aparecerElemento(item.id);
      }
    } else {
      desaparecerElemento(item.id);
    }
  });
}

function animarHumanEye() {
  if (!interfazColor) return;
  revertirInterfazPerfiles()

  // valores iniciales (vh)
  let height = 0.1;
  let top = 50;

  const targetHeight = 90;
  const targetTop = 5;

  // "velocidad base" en vh por frame para la parte del top (ajustable)
  const baseTopSpeed = 1.7;

  function step() {
    const remainingHeight = targetHeight - height; // >0 si falta crecer
    const remainingTop = top - targetTop;         // >0 si falta bajar

    // si ambos necesitan moverse, aplicamos dh = 2 * dtop
    if (remainingTop > 0 && remainingHeight > 0) {
      // intentamos mover top por baseTopSpeed, pero lo limitamos por lo que quede
      let dTop = Math.min(baseTopSpeed, remainingTop);
      let dHeight = dTop * 2;

      // si queremos aumentar más height del que queda, ajustamos ambos proporcionalmente
      if (dHeight > remainingHeight) {
        dHeight = remainingHeight;
        dTop = dHeight / 2; // mantenemos la relación dh = 2 * dtop
      }

      top -= dTop;
      height += dHeight;
    } else if (remainingHeight > 0) {
      // top ya llegó; seguimos sólo con height hasta target
      const dHeight = Math.min(baseTopSpeed * 2, remainingHeight);
      height += dHeight;
      top = targetTop;
    } else if (remainingTop > 0) {
      // height ya llegó pero top no (caso raro); bajar top hasta target
      const dTop = Math.min(baseTopSpeed, remainingTop);
      top -= dTop;
      height = targetHeight;
    }

    // aplicar estilos (misma frame)
    interfazColor.style.height = height + 'vh';
    interfazColor.style.top = top + 'vh';

    // continuar hasta que ambos hayan llegado a su objetivo
    if (height < targetHeight || top > targetTop) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

function animarHorizontalEye() {
  if (!interfazColor) return;
  revertirInterfazPerfiles()

  let left = 50;     // vw inicial
  let width = 1;     // vw inicial

  const targetLeft = 1;
  const targetWidth = 95;

  // velocidad base (reducción del left por frame)
  const baseX = 1.7;

  function step() {
    const remainingLeft  = left - targetLeft;     // cuánto falta para llegar a 1
    const remainingWidth = targetWidth - width;   // cuánto falta para llegar a 95

    if (remainingLeft > 0 && remainingWidth > 0) {

      // queremos mover:
      // dLeft  = baseX
      // dWidth = 2 * baseX
      let dLeft = Math.min(baseX, remainingLeft);
      let dWidth = dLeft * 2;

      // si dWidth excede el objetivo de width, corregimos ambos
      if (dWidth > remainingWidth) {
        dWidth = remainingWidth;
        dLeft = dWidth / 2;
      }

      left -= dLeft;
      width += dWidth;
    }

    interfazColor.style.left = `${left}%`;
    interfazColor.style.width = `${width}%`;

    if (left > targetLeft || width < targetWidth) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

function revertirInterfazPerfiles() {
  const respaldos = document.querySelectorAll('.btn-respaldo');
  if (!respaldos.length) return;

  // 1. Quitar color de fondo en ambos grupos
  respaldos.forEach(el => {
    el.style.backgroundColor = '';
    el.style.height = '';
  });

  if (!interfazColor) return;

  const propiedades = ['height', 'width', 'top', 'left'];

  const limpiar = (el) => {
    propiedades.forEach(prop => el.style.removeProperty(prop));
  };

  // limpiar el elemento raíz
  limpiar(interfazColor);

  // limpiar todos los hijos y nietos
  const descendants = interfazColor.querySelectorAll('*');
  descendants.forEach(el => limpiar(el));
}

function decisionesEstrategicas(){
  var elementosExcluidos = ['buscador','search-form','links-iniciales','links-inicialesI','decisiones-estrategicas']; 
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]) 
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
    }
  }


}

const listarI = document.querySelectorAll('#linkListI li');
const linksAuxiliar = document.getElementById('links-auxiliar');
const linksPadre = document.querySelector('#linkListI')
const linksPadreColor = document.querySelector('#linkList')
const novenoElemento = listarI[7];
let masTiempo = null;

if (listarI.length >= 9) {

  novenoElemento.addEventListener('mouseenter', () => {
    masTiempo = setTimeout(() => {
      linksAuxiliar.style.display = 'block';
    }, 250);
  });

  novenoElemento.addEventListener('mouseleave', () => {
    if (masTiempo) {
      clearTimeout(masTiempo);
      sobreTmasTiempoiempo = null;
    }
    linksAuxiliar.style.display = 'none';
  });
}

linksAuxiliar.addEventListener('mouseleave', (e) => {
  const destino = e.relatedTarget;

  // Si vuelve al noveno elemento, no cerrar
  if (novenoElemento.contains(destino)) return;

  setTimeout(() => {
    linksAuxiliar.style.display = 'none';
  }, 350);
});

const listar = document.querySelectorAll('#linkList > li');
const listarDos = document.querySelectorAll('#links-color > li');

const linksRegistro = document.getElementById('links-registro');
const linksRgbaCmyk = document.getElementById('links-registro');

const segundoElemento = listar[1]
const septimoElemento = listar[6];
const quintoElemento = listarDos[4];

const linksColor = septimoElemento.querySelector('#links-color');
const linksTec = quintoElemento.querySelector('.submenu-colorimetria'); 
let sobreTiempo = null;

simulador.addEventListener('click', (e) => {
  document.querySelector('#calculadora').style.display='none'
  restablecerClick(['.butt-perfiles']);
  // solo se ejecuta si el click fue directamente en el li padre
  if (e.target !== simulador) return;
  iniciarAnimaciones();
});

if (!segundoElemento || !linksRgbaCmyk || !linksRegistro) {
  throw new Error('Elemento requerido no encontrado');
}
linksRegistro.addEventListener('click', (e) => {
  e.stopPropagation();
});
segundoElemento.addEventListener('mouseenter', () => {
  sobreTiempo = setTimeout(() => {
    linksRgbaCmyk.style.display = 'block';
  }, 250);
});
segundoElemento.addEventListener('mouseleave', () => {
  if (sobreTiempo) {
    clearTimeout(sobreTiempo);
    sobreTiempo = null;
  }
  linksRgbaCmyk.style.display = 'none';
});
if (!septimoElemento || !linksColor) {
  throw new Error('Elemento requerido no encontrado');
}
if (!quintoElemento || !linksTec) {
  throw new Error('Elemento requerido no encontrado');
}
septimoElemento.addEventListener('mouseenter', () => {
  sobreTiempo = setTimeout(() => {
    linksColor.style.display = 'block';
  }, 250);
});
quintoElemento.addEventListener('mouseenter', () => {
  sobreTiempo = setTimeout(() => {
    linksTec.style.display = 'block';
  }, 250);
});
septimoElemento.addEventListener('mouseleave', () => {
  if (sobreTiempo) {
    clearTimeout(sobreTiempo);
    sobreTiempo = null;
  }
  linksColor.style.display = 'none';
});
quintoElemento.addEventListener('mouseleave', () => {
  if (sobreTiempo) {
    clearTimeout(sobreTiempo);
    sobreTiempo = null;
  }
  linksTec.style.display = 'none';
});

// LI autonomo tercer hijo
hijos.forEach((li, index) => {
  li.addEventListener('click', (e) => {
    e.stopPropagation();

    if (index === 0) {
      ingresoEmpleado()
    }  
    if (index === 2) {
        ingresoEmpleadoMA()
    }
    if (index === 3) {
      resultadosMA('interfaz-mtto')
    }

  });
});

hijosColor.forEach((li, index) => {
  li.addEventListener('click', (e) => {
    e.stopPropagation();

    if (index === 0) {
      abrirDensitometria('densitometria')
    }
    if (index === 1) {
      abrirPrepress('pre-prensa')
    }
  });
});

hijosTec.forEach((li, index) => {
  li.addEventListener('click', (e) => {
    e.stopPropagation();

    if (index === 0) {
       ocultaElementos('colorCMYK','container-slider','padre-cmyk','container01','links-inicialesI','links-iniciales','buscador','search-form')
    }
    if (index === 1) {
      ocultaElementos('colorDisplay','padre-controles','padre-rgb','container01','links-inicialesI','links-iniciales','buscador','search-form')
    }
  });
});

const mostrarRegistro = document.querySelector('#links-registro > li:nth-child(2)')
mostrarRegistro.addEventListener('click', () =>{
  mostrarElementos(['butts-simulador','sections-fondo','simulador', 'contenedor-botonera','search-form','buscador','links-inicialesI','links-iniciales'])
})
//*********************************************************************************************************************** */
function aplicarColoresInputs() {
  document
    .querySelectorAll('input[data-colorable]')
    .forEach(input => {
    const value = Number(input.value);

    if (Number.isNaN(value)) {
      input.style.backgroundColor = '';
      return;
    }

    if (value <= 4) {
      input.style.backgroundColor = '#CC3333';
      input.style.color = '#FFFFFF';
    } else if (value >=5 && value <=8) {
      input.style.backgroundColor = '#F9A536';
      input.style.color = '#000000';
    } else {
      input.style.backgroundColor = '#8CE15B';
      input.style.color = '#000000';
    }
  });
  setTimeout(() => {
    if(inputMA)inputMA.style=''
  }, 350);
}

function aplicarColorPorValor(input) {
  const value = Number(input.value);

  if (Number.isNaN(value)) {
    input.style.backgroundColor = '';
    return;
  }

  let color;

  if (value <= 4) {
    color = '#CC3333';
    input.style.color = '#FFFFFF'; 
  } else if (value <= 8) {
    color = '#F9A536';
    input.style.color = '#000000';
  } else {
    color = '#8CE15B';
    input.style.color = '#000000';
  }

  

  input.style.backgroundColor = color;
}

document.addEventListener('blur', (e) => {
  if (e.target.matches('input[data-colorable]')) {
    aplicarColorPorValor(e.target);
  }
}, true);

const INDICADORES = [
  'led-identificados',
  'led-corregidos',
  'led-tipo-a',
  'led-tipo-b',
  'led-kaizen',
  'led-adas',
  'led-adt',
  'led-lup'
];

function contarLeds(id, total = 10) {
  const contenedor = document.getElementById(id);
  if (!contenedor) return { verdes: 0, sinColor: total };

  const verdes = contenedor.querySelectorAll(
    '.led-celda.led-verdes'
  ).length;

  return {
    verdes,
    sinColor: total - verdes
  };
}

function obtenerEstadoLeds() {
  const estado = {};

  INDICADORES.forEach((id) => {
    estado[id] = contarLeds(id);
  });

  return estado;
}
//*********************************************************************************************************************** */

const estadoIndicadores = {};

function actualizarEstadoIndicadores() {
  INDICADORES.forEach((id) => {
    const { verdes } = contarLeds(id);
    estadoIndicadores[id] = verdes;
  });
}

function colorPorCantidadVerdes(verdes) {
  if (verdes <= 4) return 'red';
  if (verdes <= 7) return 'orange';
  return 'green';
}

function normalizarColorCeldas() {
  Object.entries(estadoIndicadores).forEach(([id, verdes]) => {
    const contenedor = document.getElementById(id);
    if (!contenedor) return;

    const colorFinal = colorPorCantidadVerdes(verdes);

    contenedor
      .querySelectorAll('.led-celda.led-verdes')
      .forEach((celda) => {
        celda.style.backgroundColor = colorFinal;
      });
  });
}

function aplicarNormalizacionDeColores() {
  actualizarEstadoIndicadores();
  normalizarColorCeldas();
}
//*********************************************************************************************************************** */

const MOVE_CLASSES = [
  'move-kaizen',
  'move-kaizen-1',
  'move-kaizen-2',
  'move-kaizen-3',
  'move-kaizen-4',
  'move-kaizen-5'
];

const contKaizen = document.querySelector('#kaizen-propuestos');
const kaizens = [...contKaizen.querySelectorAll('.cell')];

kaizens.forEach((grafico, index) => {
  grafico.dataset.index = index;
});

imgsKaizen.addEventListener('click', (e) => {
  imgsKaizen.style.zIndex = '100';
  const cellSeleccionada = e.target.closest('.cell');
  if (!cellSeleccionada || !imgsKaizen.contains(cellSeleccionada)) return;

  aparecerElemento("fichas-tecnicas", "flex")  
  desactivarClick(['.cell']); 

  if(turnBlock === false){
    turnBlock = true
  }

  setTimeout(() => {   
    if(turnGraphic === false){
      turnGraphic = true
      /* moverElementos(["conte-butts-graphs"], 27, -7); */
    }
  }, 500); 

  const index = Number(cellSeleccionada.dataset.index);

  kaizens.forEach((grafico, i) => {
    const esActivo = grafico === cellSeleccionada;

    // limpiar clases de movimiento
    grafico.classList.remove(...MOVE_ELEMENT);

    // marcar estado lógico
    grafico.classList.toggle('oculto', !esActivo);

    // visibilidad real (canvas incluido)
    const opacity = esActivo ? '1' : '0';
    grafico.style.opacity = opacity;

    // aplicar movimiento solo al activo
    if (esActivo) {
      grafico.classList.add(MOVE_CLASSES[index]);
    }
  });  

  /* setTimeout(() => {
    fichaTecnica.style.zIndex = '100';
  }, 800); */
  setTimeout(() => {
    restablecerClick(['.cell']);    
  }, 2500);
});

//*********************************************************************************************************************** */
function aplicarEstilo(elemento, estilos) {
  if (!elemento) return;
  Object.assign(elemento.style, {
    position: 'absolute',
    ...estilos
  });
}
const CATEGORY_COLORS = {
  A: '#DB76FF',
  B: '#0087F5',
  C: '#0A2DA8',
  D: '#FF5F7F',
  E: '#00B8A9'
};
const treeData = [
  { category: 'A', value: 7 },
  { category: 'B', value: 15 },
  { category: 'C', value: 40 },
  { category: 'D', value: 13 },
  { category: 'E', value: 13 }
];
const CATEGORY_LABELS = {
  A: 'Objetivos',
  B: 'Liderazgo',
  C: 'Engagement',
  D: 'Desarrollo',
  E: 'Cumplimiento'
};
function mostrarAlertaEnElemento(mensaje, top, left) {
  const alerta = document.getElementById('alerta-ui');
  const texto = alerta.querySelector('.texto');

  texto.textContent = mensaje;
  alerta.hidden = false;

  alerta.style.top = typeof top === 'number' ? `${top}px` : top;
  alerta.style.left = typeof left === 'number' ? `${left}px` : left;
}
mostrarAlertaEnElemento({mensaje: 'Ingrese solo valores numéricos',top: '70%',left: '40%'});

let inputActivo = null;
function onFocusIn(e) {
  if (e.target.matches('.columna-izq-ma input, .columna-derecha input')) {
    inputActivo = e.target;
  }
}

function onGridClick(e) {  
  const boton = e.target;

  if (!boton.classList.contains('grid-item')) return;
  if (!inputActivo) return;
  if(inputActivo.id !=='nomEmpl-ma' && inputActivo.id !=='nomEmpl')inputActivo.value=''

  const valor = boton.textContent.trim();
  inputActivo.value += valor;
}

function activarLogicaMobile() {
  document.addEventListener('focusin', onFocusIn);
  gridNumbers.addEventListener('click', onGridClick);
}
function desactivarLogicaMobile() {
  document.removeEventListener('focusin', onFocusIn);
  gridNumbers.removeEventListener('click', onGridClick);
  inputActivo = null; 
}
mediaDesktop.addEventListener('change', e => {
  esDesktop = e.matches;

  if (!esDesktop) {
    activarLogicaMobile();
  } else {
    desactivarLogicaMobile();
  }
});
// Orden lógico deseado (independiente del DOM)
const ordenInputs = [
  'nomEmpl-ma',
  'numDoc1-ma',
  'numDoc2-ma',
  'numDoc5-ma',
  'numDoc3-ma',
  'numDoc4-ma',
  'numDoc7-ma',
  'numDoc6-ma',
  'numDoc8-ma',
  'nuevo-ingreso-ma'
];
let indiceFoco = 0;
/* ===============================
   Sincronizar índice con foco real
   =============================== */

document.addEventListener('focusin', (e) => {
  const index = ordenInputs.indexOf(e.target.id);
  if (index !== -1) {
    indiceFoco = index;
  }
});

/* ===============================
   Función para avanzar foco
   =============================== */

function avanzarFoco() {
  indiceFoco++;

  // Si quieres ciclo continuo:
  if (indiceFoco >= ordenInputs.length) {
    indiceFoco = 0;
  }
  if(inputNombreMA.value === ''){
    saltarAlerta('No ha ingresado el empleado','sinID')
  }

  const siguienteInput = document.getElementById(ordenInputs[indiceFoco]);
  siguienteInput?.focus();
  if(siguienteInput.id==='nuevo-ingreso-ma'){
    return
  }else{
    siguienteInput.style.backgroundColor='black'
    siguienteInput.style.color='white'
  }
}  
/*************************************************************************************************************************************************************** */
inputNombre.addEventListener('focusin',()=>{
  keyboardWrapper.style.display='flex'
})
const keyboardLayout = [
  ['q','w','e','r','t','y','u','i','o','p'],
  ['a','s','d','f','g','h','j','k','l','ñ'],
  ['z','x','c','v','b','n','m','backspace'],
  ['space']
];
const keyboard = document.getElementById('virtual-keyboard');
document.addEventListener('focusin', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
    lastFocusedInput = e.target;
  }
});
function createKeyboard(layout) {
  keyboard.innerHTML = '';

  layout.forEach(rowLetters => {
    const row = document.createElement('div');
    row.className = 'keyboard-row';

    rowLetters.forEach(letter => {
      const key = document.createElement('button');
      key.type = 'button';
      key.className = 'key';

      /* ===== RENDER (una sola vez) ===== */
      if (letter === 'space') {
        key.classList.add('key-space');
        key.innerHTML = '<div class="space-bar"></div>';
      } else if (letter === 'backspace') {
        key.textContent = '⌫';
      } else {
        key.textContent = letter;
      }

      /* ===== LÓGICA DE CLICK ===== */
      const DELETE_INITIAL_DELAY = 400;
      const DELETE_REPEAT_RATE = 60;

      let deleteTimeout = null;
      let deleteInterval = null;

      key.addEventListener('touchstart', (e) => {
        e.preventDefault();

        if (!lastFocusedInput) return;

        const input = lastFocusedInput;

        const deleteCharacter = () => {
          const value = input.value;

          if (!value.length) return;

          // elimina siempre el último carácter
          input.value = value.slice(0, -1);

          // coloca el cursor al final
          const newLength = input.value.length;
          input.selectionStart = input.selectionEnd = newLength;

          input.focus();
        };
        

        const startPos = input.selectionStart;
        const endPos = input.selectionEnd;
        const value = input.value;

        // BACKSPACE
        if (letter === 'backspace') {

          // primer borrado inmediato
          deleteCharacter();

          // repetición progresiva
          deleteTimeout = setTimeout(() => {
            deleteInterval = setInterval(
              deleteCharacter,
              DELETE_REPEAT_RATE
            );
          }, DELETE_INITIAL_DELAY);

          return;
        }

        // SPACE
        if (letter === 'space') {
          input.value =
            value.slice(0, startPos) + ' ' + value.slice(endPos);
          input.selectionStart =
          input.selectionEnd = startPos + 1;
          input.focus();
          return;
        }

        // LETRAS con mayúscula automática
        const prevChar = value[startPos - 1];
        const shouldUppercase =
          startPos === 0 || prevChar === ' ';
        const char = shouldUppercase
          ? letter.toUpperCase()
          : letter;

        input.value =
          value.slice(0, startPos) + char + value.slice(endPos);
        input.selectionStart =
        input.selectionEnd = startPos + 1;
        input.focus();
      });

      // detener repetición
      const stopDeleting = () => {
        clearTimeout(deleteTimeout);
        clearInterval(deleteInterval);
        deleteTimeout = null;
        deleteInterval = null;
      };

      key.addEventListener('touchend', stopDeleting);
      key.addEventListener('touchcancel', stopDeleting);
      

      row.appendChild(key);
    });

    keyboard.appendChild(row);
  });
}
function handleKeyPress(letter) {
  if (!lastFocusedInput) return;

  const input = lastFocusedInput;
  const start = input.selectionStart;
  const end = input.selectionEnd;
  const value = input.value;

  // BACKSPACE
  if (letter === '⌫') {
    if (start === end && start > 0) {
      input.value =
        value.slice(0, start - 1) + value.slice(end);
      input.selectionStart =
      input.selectionEnd = start - 1;
    } else {
      input.value =
        value.slice(0, start) + value.slice(end);
      input.selectionStart =
      input.selectionEnd = start;
    }

    input.focus();
    return;
  }

  // LETRAS / ESPACIO
  input.value =
    value.slice(0, start) + letter + value.slice(end);

  input.selectionStart =
  input.selectionEnd = start + 1;

  input.focus();
}
createKeyboard(keyboardLayout);
const closeKeyboardBtn = document.getElementById('close-keyboard-btn');
closeKeyboardBtn.addEventListener('click',()=>{keyboardWrapper.style.display='none'})
document.addEventListener('focusin', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
    lastFocusedInput = e.target;
  }
});
const tclVirtual = document.getElementById('keyboard-wrapper');
function showKeyboard() {
  tclVirtual.classList.add('is-visible');
}
function hideKeyboard() {
  tclVirtual.classList.remove('is-visible');
}
function hideCalculator() {
  calculadora.classList.add('move-calculadora-down');
}

function ubicaCalculadoraSegunContexto(){
  restablecerEstilos('calculadora');
  calculadora.classList.remove('move-calculadora')
  calculadora.classList.remove('move-calculadora-1')
  calculadora.classList.remove('move-calculadora-up');
  calculadora.classList.remove('move-calculadora-down');


  if(!esDesktop && interfazRRHH.style.display==='grid'){
    simulador.style.display='flex'
    calculadora.classList.remove('move-calculadora-1')
    calculadora.style.display='grid'
    calculadora.style.left='40vw'
    calculadora.style.top='102vh' 
    calculadora.style.height='45vh'
    calculadora.style.width='40vw'
    setTimeout(() => {
      calculadora.classList.add('move-calculadora-up');
    }, 100);
  }

  if(!esDesktop && interfazMA.style.display==='grid'){
    simulador.style.display='flex'
    calculadora.classList.remove('move-calculadora-1')
    calculadora.style.display='grid'
    calculadora.style.left='44vw'
    calculadora.style.top='102vh' 
    calculadora.style.height='45vh'
    calculadora.style.width='40vw'
    setTimeout(() => {
      calculadora.classList.add('move-calculadora-up');
    }, 100);
  }
}