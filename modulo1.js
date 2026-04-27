
const seccionesMap = new Map([
  ['desbobinadorId', 0],
  ['uTeñido', 1],
  ['alimentadorId', 2],
  ['unidProceso', 3],
  ['rebobinador', 4]
]);  

function cierraContenedores(elementId, buttonID) {
  const pantallaInicial = document.getElementById('pantalla-inicial'); 

  // Reiniciar estilos de todos los botones
  document.querySelectorAll('.boton-c').forEach(boton => {
    boton.style = '';
  });

  if (firstClick) {
    if (elementId && !idsArray.includes(elementId)) {
      idsArray.push(elementId);
      console.log(idsArray);
    }

    if (pantallaInicial && seccionesMap.has(elementId)) {
      const visibleIndex = seccionesMap.get(elementId);

      [...pantallaInicial.children].forEach((child, i) => {
        child.style.display = i === visibleIndex ? 'flex' : 'none';
        child.style.position = i === visibleIndex ? 'relative' : '';
        document.querySelector('#barras-inicio').style.display='none' 
        document.querySelector('#barras-contenedor').style.display='none'                   
      }); 
    }

    if (buttonID) {
      const botonAsociado = document.getElementById(buttonID);
      if (botonAsociado) {
        botonAsociado.style.display = 'block';
      }
    }

    firstClick = false;
  } else {
    mostrarElementos([
      'pantalla-inicial', 'buscador', 'container01', 'search-form',
      'toggleVideoButton', 'links-inicialesI', 'links-iniciales',
      'desbobinadorId', 'uTeñidos', 'alimentadorId', 'unidProceso',
      'rebobinador', 'torre-imp', 'tinter-o', 'bateria-entintado',
      'gran-cortina','barras-contenedor','barras-inicio'
    ]);
  }
}
function muestraRodillo (vidElem, imgCont){
  document.querySelector('.contene-botones').style.top='-0.8vh'
  switch(vidElem){
  case 'videoElement2':
    var elementosExcluidos = ['buscador','search-form','sector-distribuidor','butt-repuestos','conti-video-distribuidor','videoElement2','images-distribuidor','conti-boton-repuestos','contenedor-7-V','links-iniciales','links-inicialesI','videosTraining']; 
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i]) 
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
      }
    }
    container1.style.display='grid'
    const container = document.getElementById(imgCont)
    const pict = container.getElementsByTagName('img')
    container.style.display = 'flex'
    for (var i = 0; i < images.length; i ++) {
      var pic = images[i]
      pic.style.display = 'block'
    }
    reproducirVideo('videoElement2')
    setTimeout(() => {
      applyImageEffects('#imageElement, #imageElement2, #imageElement3, #imageElement4, #imageElement5') 
    }, 277)
    if (screenWidth < 500) { 
        var elementosExcluidos = ['buscador','search-form','sector-distribuidor','conti-boton-repuestos','butt-repuestos','links-iniciales','links-inicialesI','contene-images','images-distribuidor','contenedor-7-V','videosTraining','videos-training','conti-video-distribuidor','videoElement2']; 
        for (var i = 0; i < allContenedores.length; i++) { 
          var elemento = document.getElementById(allContenedores[i]) 
          if (elemento) {
            elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
          }
        }
        container1.style.display='grid'
        contibotsDistriII.classList.remove('move-butts')
        contImgsDistribuidor.classList.remove('move-images')
        buttRepuest.classList.remove('move-repuest')
        contiVidDistribuidor.classList.remove('move-video')   
        desplegarBotonesII()
    }
  break;
  case 'videoElement3':
    var elementosExcluidos = ['buscador','search-form','sector-distribuidor','butt-repuestos','conti-video-entintador','videoElement3','images-entintador','conti-boton-repuestos','contenedor-7-V','links-iniciales','links-inicialesI','videosTraining']; 
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i]) 
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
      }
    }
    container1.style.display='grid'
    const contiene = document.getElementById(imgCont)
    const foto = contiene.getElementsByTagName('img')
    contiene.style.display = 'flex'
    for (var i = 0; i < images.length; i ++) {
      var pic = images[i]
      pic.style.display = 'block'
    }
    reproducirVideo('videoElement3');
    setTimeout(() => {
      applyImageEffects('#imageElement6,#imageElement7')
    }, 277) 
    if (screenWidth < 500) {
      var elementosExcluidos = ['buscador','search-form','sector-entintador','conti-boton-repuestos-I','butt-repuestos-I','conti-video-entintador','videoElement3','images-entintador','contenedor-7-VI','links-iniciales','links-inicialesI','videosTraining']; 
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }
      container1.style.display='grid'
      videoElements.forEach(video => {
        if (video.id === 'videoElement3') {
          video.play()      
        } else {
          video.style.display = 'none'
        }
      })
      contibotsDistriIII.classList.remove('move-butts-II')
      contImgsEntintador.classList.remove('move-images-II') 
      buttRepuestI.classList.remove('move-repuest-II')  
      contiVidEntintador.classList.remove('move-vid-entintador')
      document.getElementById('imageElement6').style.display='flex'  
      document.getElementById('imageElement7').style.display='flex'
      desplegarBotonesIII()      
    }
  break;
  case 'plate-smed' :
    var elementosExcluidos = ['buscador','search-form','sector-distribuidor','conti-boton-repuestos','butt-repuestos','conti-video-smed','plate-smed','images-smed','contenedor-7-V','links-iniciales','links-inicialesI','videosTraining']; 
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i]) 
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
      }
    }
    container1.style.display='grid'
    const contenedor = document.getElementById(imgCont)
    const pict1 = contenedor.getElementsByTagName('img')
    contenedor.style.display = 'flex'
    for (var i = 0; i < images.length; i ++) {
      var pic = images[i]
      pic.style.display = 'block'
    }
    reproducirVideo('plate-smed')
    setTimeout(() => {
      applyImageEffects('#imageElement11, #imageElement22, #imageElement33, #imageElement44, #imageElement55')
    }, 277)            
    if (screenWidth < 500) {
      var elementosExcluidos = ['buscador','search-form','sector-smed','conti-boton-repuestos-II','butt-repuestos-II','conti-video-smed','plate-smed','images-smed','contenedor-7-VII','links-iniciales','links-inicialesI','videosTraining'];
      for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i]) 
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
      }
      }
      container1.style.display='grid'
      for (const video of videoElements) {
        if (video.id === vidElem) {
          video.style.display = 'flex' 
          video.currentTime = 0;           
          video.play()
        } else {
          video.style.display = 'none' 
          video.pause() 
        }
        }          
        contImgsSmed.classList.remove('move-images-III')  
        contiVidSmed.classList.remove('move-vid-smed')
        contibotsDistriV.classList.remove('move-butts-III')
        buttRepuestIII.classList.remove('move-repuest-III')
        desplegarBotonesIV()  
  }
  if (typeof vidElem !== 'undefined' && !idsArray.includes(vidElem)) {
    idsArray.push(vidElem);
    console.log(idsArray);
  }

  break;  
  case 'videoElement5' :
    var elementosExcluidos = ['buscador','search-form','sector-smed','contenedor-7-VII','links-iniciales','links-inicialesI']; 
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i]) 
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
      }
    }
    container1.style.display='grid'  
    setTimeout(() => {
      applyImageEffects()
    }, 200) 
    
    for (const video of videoElements) {
      if (video.id === vidElem) {
        video.style.display = 'block'
        video.currentTime = 0;           
        video.play()
      } else {
        video.style.display = 'none'
        video.pause()
      }
    }

  break; 
  case 'videoElement6' :
    var elementosExcluidos = ['buscador','search-form','sector-smed','contenedor-7-VII','links-iniciales','links-inicialesI']; 
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i]) 
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
      }
    }
    container1.style.display='grid'
  break;  
  case 'videoElement7' :
    var elementosExcluidos = ['buscador','search-form','sector-smed','contenedor-7-VII','links-iniciales','links-inicialesI']; 
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i]) 
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
      }
    }
    container1.style.display='grid'
  break;
  default:
  }
}
function muestraHumedad(){
  var contImgsIsopropil = document.getElementById('imgsIsopropil')
  const pict = contImgsIsopropil.getElementsByTagName('img') 
  contImgsIsopropil.style.display = 'flex'
  for (let i = 0; i < pict.length; i++) {
  pict[i].style.display = 'block'
  }
}
async function applyImageEffects(selector) {
  const imageElements = document.querySelectorAll(selector);

  if (imageElements.length === 0) {
    console.warn('No images found for selector:', selector);
    return;
  }

  // 🔧 Resetear posición inicial como en el CSS antes de animar
  imageElements.forEach((img, index) => {
    img.style.display = 'block';             // Aseguras visibilidad
    img.style.zIndex = imageElements.length - index; // Superposición ordenada
    img.style.transform = 'translateY(0)';   // Posición inicial como en CSS
    img.style.transition = 'transform 0.7s'; // Define transición suave
  });

  // 🔄 Animar desplazamiento vertical escalonado
  for (let i = 1; i < imageElements.length; i++) {
    await delay(100);
    imageElements[i].style.transform = `translateY(${i * 110}%)`;
  }
}
// Helper para delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function alternarVisibilidad(docId) {
  var elementosParaAlternar = document.querySelectorAll('.bot-entre, .video-training,.image-training, .butt-partes, .documentos')
  for (var i = 0; i < elementosParaAlternar.length; i++) {
  if (elementosParaAlternar[i].id === docId) {
    elementosParaAlternar[i].style.display = "block";
  } else {
    elementosParaAlternar[i].style.display = "none";
  }
  }

}
function mostrarBotMa(id) {
  var elemento = document.getElementById(id)
  if (elemento.style.display === 'none') {
    elemento.style.display = 'block'
  } else {
    elemento.style.display = 'none'
  }
}
function showNextGraf() {
  if (nowIndex < inpt.length ){
  inpt[nowIndex].style.display = 'block'
  nowIndex++;
  setTimeout(showNextGraf, 57)
  }
}
function showRepuesto(elementId) {
  const config = {
    contImgDistribuidor: {
      excluidos: ['buscador','search-form','links-iniciales','links-inicialesI','frame-rollers','grilla-entintado'],
      grid: 'grilla-entintado',      
    },
    contImgEntintador: {
      excluidos: ['buscador','search-form','abuelo-entintadores','padre-entintadores','links-iniciales','links-inicialesI'],
      grid: 'grilla-corta-entintado',
      transicion: ['child-move-IV','abuelo-entintadores','marco-rodillos',1500]
    },
    contPortPlaca: {
      excluidos: ['buscador','search-form','links-iniciales','links-inicialesI','agrupaOblicuos-placa','placa'],
      extra: () => {
        const c = document.getElementById('agrupaOblicuos-DXXX');
        c.classList.remove('activo');
        c.style.display = 'none';
        aparecerElemento('contPortPlaca','flex');
        reproducirVideo('video-placa');
        setTimeout(() => crearOblicuosPlaca('agrupaOblicuos-DXXX'), 500);
      }
    },
    contPortManta: {
      excluidos: ['buscador','search-form','manta','agrupaOblicuos-IX','links-iniciales','links-inicialesI'],
      extra: () => {
        const c = document.getElementById('agrupaOblicuos-XC');
        c.classList.remove('activo');
        c.style.display = 'none';
        aparecerElemento('contPortManta','flex');
        reproducirVideo('videoManta');
        setTimeout(() => crearOblicuosMantilla('agrupaOblicuos-XC'), 500);
      }
    },
    contImpresor: {
      excluidos: ['buscador','search-form','agrupaOblicuos-XXIII','impresorImg','links-iniciales','links-inicialesI'],
      extra: () => {
        const c = document.getElementById('agrupaOblicuos-C');
        c.classList.remove('activo');
        c.style.display = 'none';
        aparecerElemento('contImpresor','flex');
        reproducirVideo('video-impresor');
        setTimeout(() => crearOblicuosImpresor('agrupaOblicuos-C'), 500);
      }
    }
  };

  const cfg = config[elementId];
  if (!cfg) return;

  // ocultar/mostrar
  for (const id of allContenedores) {
    const el = document.getElementById(id);
    if (el) el.style.display = cfg.excluidos.includes(id) ? 'flex' : 'none';
  }

  container1.style.display = 'grid';

  if (cfg.grid) {
    const grid = document.getElementById(cfg.grid);
    if (grid) grid.style.display = 'grid';
  }

  if (cfg.transicion) manejarTransicion(...cfg.transicion);
  if (cfg.extra) cfg.extra();

  if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
    console.log(idsArray);
  }
}

function cargarColaboradoresDesdeStorage() {
  const almacenJSON = localStorage.getItem('empleadosRegistrados');
  if (!almacenJSON) return [];

  const almacen = JSON.parse(almacenJSON);

  const almacenArray = Array.isArray(almacen) 
    ? almacen 
    : Object.values(almacen);

  return almacenArray.map(empleado => ({
    ruta: empleado.imagen || "./assets/silueta.png",
    nombre: empleado.nombre || "Sin nombre"
  }));
}


document.addEventListener('DOMContentLoaded', () => {
  const colaboradores = cargarColaboradoresDesdeStorage();
 
  const cuartoHijo   = document.getElementById('ultimoElemento');
  const segundaLista = document.getElementById('segundaLista');
  if (!cuartoHijo || !segundaLista) return;
  let hideTimer = null;
  function scheduleHide() {
    // Inicia un retraso de 100 ms
    hideTimer = setTimeout(() => {
      segundaLista.style.display = 'none';
      hideTimer = null;
    }, 100);
  }
  function cancelHide() {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
  }
  cuartoHijo.addEventListener('mouseleave', e => {
    const destino = e.relatedTarget;
    // Si el cursor NO entra ni en cuarto hijo ni en la segunda lista,
    // programamos el ocultamiento con retardo
    const saliendoDeTodo =
      !destino ||
      (!cuartoHijo.contains(destino) && !segundaLista.contains(destino));

    if (saliendoDeTodo) {
      scheduleHide();
    }
  });
  // Cancelar el ocultamiento si el cursor entra a la segunda lista
  segundaLista.addEventListener('mouseenter', cancelHide);
  // También cancelarlo si el cursor regresa al cuarto hijo
  cuartoHijo.addEventListener('mouseenter', cancelHide);
  // Cerrar si se abandona la segunda lista y no vuelve al cuarto hijo
  segundaLista.addEventListener('mouseleave', e => {
    const destino = e.relatedTarget;
    const fueraAmbos = !destino || !cuartoHijo.contains(destino);
    if (fueraAmbos) {
      scheduleHide();
    }
  });

  const contene = document.getElementById('info-interna');
  const nombres = ['Ana', 'Luis', 'María', 'José', 'Elena', 'Pedro', 'Lucía', 'Carlos','Juan','Mario','Fredy','Fernando','Olga','Marta','Olga','Jose'];

  for (let i = 0; i < 64; i++) {
    const celda = document.createElement('div');
    celda.classList.add('col');
    celda.style.cursor='pointer'
    celda.textContent = nombres[i] || `Persona ${i + 1}`;

    // 👉 Primera columna (nombres destacados)
    if (i % 8 === 0) {
      celda.style.backgroundColor = 'rgb(0, 0, 20)';
      celda.style.color = 'whitesmoke';
      celda.style.fontWeight = 'bold';
      celda.style.fontSize = '0.8vw';
      celda.style.display = 'flex';
      celda.style.alignItems = 'center';
      celda.style.justifyContent = 'flex-start';
      celda.style.paddingLeft = '5px';
    }

    // 👉 Últimas dos columnas → insertar span azul
    if (i % 8 === 6 || i % 8 === 7) {
      // Limpiar el texto por defecto
      celda.textContent = '';
      celda.style.border='none'

      const span = document.createElement('span');
      span.style.display = 'block';
      span.style.width = '27%';
      span.style.height = '25%';
      span.style.backgroundColor = 'blue';
      span.style.borderRadius = '4px';
      span.style.margin = '0 auto';
      span.style.textAlign = 'center';

      celda.style.display = 'flex';
      celda.style.alignItems = 'center';
      celda.style.justifyContent = 'flex-end';

      celda.appendChild(span);
    }
    contene.appendChild(celda);
  }

  const celda40 = contene.children[39];
  const spanInterno = celda40.querySelector('span');

  if (spanInterno) {
    spanInterno.style.backgroundColor = 'red'; 
    spanInterno.textContent = 'VER';
  }


  const listadoNombres = document.getElementById('listaNombres');
  const img = document.getElementById('imagenVisor');
  const nombre = document.querySelector('.visor > span');

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // estado
  let indiceActual = 0;
  let fotoFijada = null;

  // --- construir lista dinámica ---
  /* colaboradores.forEach((emp, i) => {
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
  }); */


  colaboradores.forEach((emp, i) => {
    const span = document.createElement('span');
    span.textContent = emp.nombre;
    span.dataset.img = emp.ruta;
    span.dataset.index = i;

    // ── Lógica compartida ──────────────────────────────────────
    function activarEmpleado() {
      indiceActual = i;
      if (fotoFijada === emp) {
        fotoFijada = null;
        limpiarVisor();
      } else {
        fotoFijada = emp;
        mostrarEmpleadoObj(emp);
      }
    }

    // ── PC: mouse ──────────────────────────────────────────────
    span.addEventListener('mouseenter', () => {
      indiceActual = i;
      if (fotoFijada === emp) {
        fotoFijada = null;
        limpiarVisor();
      } else {
        fotoFijada = emp;
        mostrarEmpleadoObj(emp);
      }
    });

    span.addEventListener('mouseleave', () => {
      if (fotoFijada) {
        mostrarEmpleadoObj(fotoFijada);
      } else {
        limpiarVisor();
      }
    });

    span.addEventListener('click', activarEmpleado);

    // ── Táctil ─────────────────────────────────────────────────
    span.addEventListener('touchstart', (e) => {
      // Guarda la posición inicial del toque
      span._touchStartY = e.touches[0].clientY;
      span._touchStartX = e.touches[0].clientX;
    }, { passive: true }); // passive:true para no bloquear el scroll

    span.addEventListener('touchend', (e) => {
      const deltaY = Math.abs(e.changedTouches[0].clientY - span._touchStartY);
      const deltaX = Math.abs(e.changedTouches[0].clientX - span._touchStartX);

      // Solo activa si fue un tap, no un scroll (menos de 10px de movimiento)
      if (deltaY < 10 && deltaX < 10) {
        e.preventDefault(); // ahora sí cancela el click fantasma
        activarEmpleado();
      }
    }, { passive: false });
    

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

  const esTactil = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

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
  campoBusqueda.addEventListener('input', () => {
    const valor = campoBusqueda.value.trim().toLowerCase();
    if (!valor) {
      limpiarVisor();
      fotoFijada = null;
      return;
    }
    const coincidencia = colaboradores.find(c => c.nombre.toLowerCase().includes(valor));
    if (coincidencia) {
      fotoFijada = coincidencia;
      mostrarEmpleadoObj(coincidencia);
      const idx = colaboradores.indexOf(coincidencia);
      if (idx >= 0) indiceActual = idx;
    } else {
      limpiarVisor();
      fotoFijada = null;
    }
  });

  campoBusqueda.addEventListener('click', (e) => {
    console.log('click en input');    
    activeInput = e.target;
    mostrarListaClientes('perfilesIndividual');
  });

  campoBusqueda.addEventListener('mouseenter', () => {
    mostrarListaClientes('perfilesIndividual');
  });

  campoBusqueda.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!listaClientes.matches(':hover')) {
        listaClientes.style.display = 'none';
      }
    }, 200);
  });

  campoBusqueda.addEventListener('blur', () => {
    if (!esDesktop) hideKeyboard();
  });

if (!esDesktop && esTactil) {
  campoBusqueda.setAttribute('readonly', true);
}
  
});
function showNextInputChec() {
var conteneChecks = document.getElementById('contChecks')
if (conteneChecks.style.display === 'block') {
for (var i = 0; i < checks.length; i++) {
  checks[i].style.display = 'none'
}
conteneChecks.style.display = 'none'
} else {
conteneChecks.style.display = 'block'
if (actualtIndex < input.length) {
  input[actualtIndex].style.display = 'block'
  actualtIndex++;
} else {
  actualtIndex = 0;
}
setTimeout(showNextInputChec, 37)  
}
}
function mantAutonomo (idElement) {
  var conteLinksI = document.getElementById('links-inicialesI')
  switch (idElement) {
    case 'troubleshooting':       
        deslizarTrouble(idElement)
    break;
    case 'canvasContainer2':   
        deslizarCanvas2(idElement)
    break;
    case 'contChecks':
      var contenedorPadre = document.getElementById('largoImpresion')
      var hijos = contenedorPadre.children;
      var linksMAVisible = false;
      var imgsEntrenosVisible = false;
      for (var i = 0; i < hijos.length; i++) {
      var hijo = hijos[i]
      if (hijo.id === 'linksMA' || hijo.style.display !== 'none') {
      linksMAVisible = true;
      }
      if (hijo.className === 'imgs-entrenos' || hijo.style.display !== 'none') {
      imgsEntrenosVisible = true;
      }
      }
      if (linksMAVisible && imgsEntrenosVisible) {
      document.getElementById('linksMA').style.display = 'none'
      document.getElementById('contImgEntrenos').style.display = 'none'
      }
      var contCheck = document.getElementById('contChecks')
      var inpts = document.querySelectorAll('.input-class')
      if (contCheck.style.display === 'block') {
      contCheck.style.display = 'none'
      for (var i = 0; i < inpts.length; i++) {
      inpts[i].style.display = 'none'
      }
      } else {
      contCheck.style.display = 'block'
      for (var i = 0; i < inpts.length; i++) {
      (function(index) {
      setTimeout(function() {
      inpts[index].style.display = 'block'
      }, 77 * index)
      })(i)
      }
      }
      if (index !== -1) {
        arrayPosicionnador.splice(index, 1)
        } else {
        arrayPosicionnador.push(idElement)
        }
        console.log(arrayPosicionnador)  
        modificarPosicion()
    break;
    case 'canvasContainer3':
      var contenedorPadre = document.getElementById('largoImpresion')
      var hijos = contenedorPadre.children;
      var linksMAVisible = false;
      var imgsEntrenosVisible = false;
      for (var i = 0; i < hijos.length; i++) {
      var hijo = hijos[i]
      if (hijo.id === 'linksMA' || hijo.style.display !== 'none') {
      linksMAVisible = true;      }
      if (hijo.className === 'imgs-entrenos' || hijo.style.display !== 'none') {
      imgsEntrenosVisible = true;
      }
      }
      if (linksMAVisible && imgsEntrenosVisible) {
      document.getElementById('linksMA').style.display = 'none'
      document.getElementById('contImgEntrenos').style.display = 'none'
      }
      const contGrafitos = document.getElementById('canvasContainer3')
      if (contGrafitos.style.display !== 'block') {
        contGrafitos.style.display = 'block' 
        conteLinksI.style.left='547px'
      } else {
        contGrafitos.style.display = 'none'
        conteLinksI.style.left='187px'
      }
      if (index !== -1) {
        arrayPosicionnador.splice(index, 1)
        } else {
        arrayPosicionnador.push(idElement)
        }
        console.log(arrayPosicionnador)  
        modificarPosicion()
    break;
    case 'contImagNeg':
      var contenedorPadre = document.getElementById('largoImpresion')
      var hijos = contenedorPadre.children;
      var linksMAVisible = false;
      var imgsEntrenosVisible = false;
      for (var i = 0; i < hijos.length; i++) {
      var hijo = hijos[i]
      if (hijo.id === 'linksMA' || hijo.style.display !== 'none') {
      linksMAVisible = true;
      }
      if (hijo.className === 'imgs-entrenos' || hijo.style.display !== 'none') {
      imgsEntrenosVisible = true;
      }
      }
      if (linksMAVisible && imgsEntrenosVisible) {
      document.getElementById('linksMA').style.display = 'none'
      document.getElementById('contImgEntrenos').style.display = 'none'
      }
      if (index !== -1) {
        arrayPosicionnador.splice(index, 1)
        } else {
        arrayPosicionnador.push(idElement)
        }
        console.log(arrayPosicionnador) 
        modificarPosicion()
    break;
    case 'contImagGraf':
      var contenedorPadre = document.getElementById('largoImpresion')
      var hijos = contenedorPadre.children;
      var linksMAVisible = false;
      var imgsEntrenosVisible = false;
      for (var i = 0; i < hijos.length; i++) {
      var hijo = hijos[i]
      if (hijo.id === 'linksMA' || hijo.style.display !== 'none') {
      linksMAVisible = true;
      }
      if (hijo.className === 'imgs-entrenos' || hijo.style.display !== 'none') {
      imgsEntrenosVisible = true;
      }}
      if (linksMAVisible && imgsEntrenosVisible) {
      document.getElementById('linksMA').style.display = 'none'
      document.getElementById('contImgEntrenos').style.display = 'none'
      }
      var contGrafNeg = document.getElementById('contImagGraf')
      if (contGrafNeg.style.display === 'block') {
      contGrafNeg.style.display = 'none' 
      } else {
      contGrafNeg.style.display = 'block'
      }
      if (index !== -1) {
        arrayPosicionnador.splice(index, 1)
        } else {
        arrayPosicionnador.push(idElement)
        }
        console.log(arrayPosicionnador)  
        modificarPosicion()
    break;
  default:
}}
function cambiaColorBotones(){
  var botones = [
    document.getElementById('archivo'),
    document.getElementById('btt2'),
    document.getElementById('btt3'),
    document.getElementById('btt4'),
    document.getElementById('btt5'),
    document.getElementById('btt6'),
    document.getElementById('btt7'),
    document.getElementById('btt8')
  ];
  setTimeout(() => {
    botones.forEach((boton, index) => {
      setTimeout(() => {
        boton.style.backgroundColor = '';
      }, 70 * index + 7);
    });    
  }, 500);
  botones.forEach((boton, index) => {
    setTimeout(() => {
      boton.style.backgroundColor = 'rgba(33,33,33,0.5)';
      boton.style.color = '#F2F6F7'
    }, 35 * index + 7);
  });
}
function resetBotns() {  
  clearAllIntervals()
  var elementosExcluidos = ['nicho_spans','pantalla','conteneMantaut','buscador','search-form','links-inicialesI','links-iniciales'];          
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
      if (elementosExcluidos.includes(allContenedores[i])) {
        elemento.style.display = 'flex';
      } else {
        elemento.style.display = 'none';
      }
    }
  } 
  container1.style.display='grid'
  document.querySelector('#conti-boton').style.display='grid'        
  document.getElementById('conti-boton').style.top=''
  linkIni1.style.left= ''  
  linkIni2.style.left = ''   
  if (document.body.style.zoom !== "100%") {
    document.body.style.zoom = "100%";
  }
  console.log(arrayPosicionnador)
  arrayPosicionnador = []
  container1.style.left = ''
  destino = 257;
  arrayPosicionnador = []
  console.log(arrayPosicionnador)
}
function deslizarTrouble(idElemento) {
  if (!arrayPosicionnador.includes(idElemento)) {
    arrayPosicionnador.push(idElemento)
  }
  console.log(arrayPosicionnador)
  console.log(destino)
}
function deslizarCanvas2(idElement) {
  var index = arrayPosicionnador.indexOf(idElement)
  if (index !== -1) {
    arrayPosicionnador.splice(index, 1)
  } else {
    arrayPosicionnador.push(idElement)
  }
  console.log(arrayPosicionnador)
  var contenedor = document.getElementById('troubleshooting')
  var contenedor1 = document.getElementById('canvasContainer2')
  if (contenedor1) {
    var estilo = getComputedStyle(contenedor1)
    var left = estilo.getPropertyValue('left')
    var width = estilo.getPropertyValue('width')
    var leftValue = parseFloat(left)
    var widthValue = parseFloat(width)
    var ultimaPosicion = leftValue + widthValue;
    console.log(ultimaPosicion)
  } else {
  console.error("El contenedor con ID 'troubleshooting' no se encontró.")
  }
  if (contenedor1) {
    contenedor1.style.display = 'block'
    contenedor1.style.left = '1200px'
    var destino = parseInt(contenedor.style.left) + contenedor.clientWidth;
    var inicio = 1200;
    var velocidad = 300;
    var duracion = Math.abs(destino - inicio) / velocidad * 100;
    var inicioTiempo = null;
    function animar(tiempo) {
      if (!inicioTiempo) inicioTiempo = tiempo;
      var progreso = (tiempo - inicioTiempo) / duracion;
      var izquierda = inicio + progreso * (destino - inicio)
      contenedor1.style.left = izquierda + 'px'
      if (progreso < 1) {
        requestAnimationFrame(animar)
      } else {
        contenedor1.style.left = destino + 'px'
      }
    }
    requestAnimationFrame(animar)
  } else {
    console.error("Los contenedores 'troubleshooting' o 'canvasContainer2' no se encontraron.")
  }
}
function deslizarChecks(idElement) {
  var index = arrayPosicionnador.indexOf(idElement)
  if (index !== -1) {
    arrayPosicionnador.splice(index, 1)
  } else {
    arrayPosicionnador.push(idElement)
  }
  console.log(arrayPosicionnador)
  var contenedor2 = document.getElementById('canvasContainer2')  

  if (contenedor1) {
    contenedor1.style.display = 'flex'
    contenedor1.style.left = '1200px'
    var destino = parseInt(contenedor2.style.left) + contenedor2.clientWidth;
    var inicio = 1200;
    var velocidad = 300
    var duracion = Math.abs(destino - inicio) / velocidad * 100;
    var inicioTiempo = null;
    function animar(tiempo) {
      if (!inicioTiempo) inicioTiempo = tiempo;
      var progreso = (tiempo - inicioTiempo) / duracion;
      var izquierda = inicio + progreso * (destino - inicio)
      contenedor1.style.left = izquierda + 'px'

      if (progreso < 1) {
        requestAnimationFrame(animar)
      } else {
        contenedor1.style.left = destino + 'px'
      }
    }
    requestAnimationFrame(animar)
    } else {
    console.error("Los contenedores 'troubleshooting' o 'canvasContainer2' no se encontraron.")
    }
}
function deslizarCanvas3(idElement) {
  var index = arrayPosicionnador.indexOf(idElement)
  if (index !== -1) {
    arrayPosicionnador.splice(index, 1)
  } else {
    arrayPosicionnador.push(idElement)
  }
  console.log(arrayPosicionnador)
  var contenedor1 = document.getElementById('canvasContainer3')
  var contenedor2 = document.getElementById('contChecks')

  if (contenedor1) {
    contenedor1.style.display = 'block'
    contenedor1.style.left = '1200px'
    var destino = parseInt(contenedor2.style.left) + contenedor2.clientWidth;
    var inicio = 1200;
    var velocidad = 300;
    var duracion = Math.abs(destino - inicio) / velocidad * 100;
    var inicioTiempo = null;

    function animar(tiempo) {
      if (!inicioTiempo) inicioTiempo = tiempo;
      var progreso = (tiempo - inicioTiempo) / duracion;
      var izquierda = inicio + progreso * (destino - inicio)
      contenedor1.style.left = izquierda + 'px'

      if (progreso < 1) {
        requestAnimationFrame(animar)
      } else {
        contenedor1.style.left = destino + 'px'
      }
    }
    requestAnimationFrame(animar)
    } else {
    console.error("Los contenedores 'troubleshooting' o 'canvasContainer2' no se encontraron.")
    }
}
function deslizarContImagNeg(idElement) {
  var index = arrayPosicionnador.indexOf(idElement)
  if (index !== -1) {
    arrayPosicionnador.splice(index, 1)
  } else {
    arrayPosicionnador.push(idElement)
  }
  console.log(arrayPosicionnador)
  var contenedor2 = document.getElementById('canvasContainer3')
}
function deslizarContImagGraf(idElement) {
  var index = arrayPosicionnador.indexOf(idElement)
  if (index !== -1) {
    arrayPosicionnador.splice(index, 1)
  } else {
    arrayPosicionnador.push(idElement)
  }
  console.log(arrayPosicionnador)
  var contenedor1 = document.getElementById('contImagGraf')
}
function modificarPosicion() {  
  var destino = '257px'
  arrayPosicionnador.forEach(function(id) {
  var elemento = document.getElementById(id)
  if (elemento) {
    elemento.style.left = destino;
    var width = window.getComputedStyle(elemento).getPropertyValue('width')   
    var ancho = parseFloat(width)
    destino = parseInt(destino) + ancho + 'px'
    console.log(id + " - posicion left:", destino)
  } else {
    console.error("Elemento con ID '" + id + "' no encontrado.")
  }
}) 
} 
function muestraTorres(seleccion) {
  seccionTintero.style.display = 'none'
  for (var i = 0; i < pantallas.length; i++) {
    var elemento = document.getElementById(pantallas[i])
    if (elemento) {
      elemento.style.display = 'none'
    }
  }
  switch (seleccion) {
    case 'frente':
      var contOblicuoT = document.getElementById('agrupaOblicuos-II')
      contOblicuoT.style.display = 'flex'
      contOblicuoT.style.marginTop = '3px'
      contOblicuoT.style.marginLeft = '3px'   

      const elementoMandosFrente = document.getElementById('pantalla-frente')
      if (elementoMandosFrente) {  
        elementoMandosFrente.style.display = 'block'
        elementoMandosFrente.style.marginRight = '150px'
      }

      if (!idsArray.includes(seleccion)) {
        idsArray.push(seleccion)
        console.log(idsArray)
      }
      break;
    case 'mandos':
      const elementoMandos = document.getElementById('pantalla-mandos')
      if (elementoMandos) {
        elementoMandos.style.display = 'block'
      }
      if (!idsArray.includes(seleccion)) {
        idsArray.push(seleccion)
        console.log(idsArray)
      }
      break;
    case 'servicio':
      const elementoServicio = document.getElementById('pantalla-servicio')
      if (elementoServicio) {
        elementoServicio.style.display = 'block'
      }
      if (!idsArray.includes(seleccion)) {
        idsArray.push(seleccion)
        console.log(idsArray)
      }
      break;
    case 'atras':
      const elementoAtras = document.getElementById('pantalla-atras')
      if (elementoAtras) {
        elementoAtras.style.display = 'block'
      }
      if (!idsArray.includes(seleccion)) {
        idsArray.push(seleccion)
        console.log(idsArray)
      }
      break;
    default:
      break;
  }
}
function crearOblicuos(contenedorId) {
  const opciones = [
    { label: 'Frente', id: 'pantalla-frente' },
    { label: 'Mandos', id: 'pantalla-mandos' },
    { label: 'Servicio', id: 'pantalla-servicio' },
    { label: 'Atras', id: 'pantalla-atras' }
  ];

  const contenedor = document.getElementById(contenedorId);
  contenedor.innerHTML = ''; // Limpiar por si acaso

  opciones.forEach((opcion, index) => {
    const div = document.createElement('div');
    div.className = 'cont-oblicuos';
    div.id = `oblicuo-tintero-${index + 1}-${contenedorId}`;

    div.innerHTML = `
      <button class="Bot-inicio2">${opcion.label}</button>
      <button class="Bot-inicio2-fondo"></button>
    `;
    contenedor.appendChild(div);
    aparecerElemento("agrupaOblicuos-XXX", "grid");

    // 🔧 Lógica de color y llamada a muestraTorresI
    const botonPrincipal = div.querySelector('.Bot-inicio2');
    const botonesFondo = div.querySelectorAll('.Bot-inicio2-fondo');

    if (botonPrincipal) {
      botonPrincipal.addEventListener('click', () => {
        // Guardar colores originales del boton principal
        const estiloPrincipal = getComputedStyle(botonPrincipal);
        const colorOriginal = estiloPrincipal.backgroundColor;
        const colorTextoOriginal = estiloPrincipal.color;

        // Cambiar a verde temporalmente
        botonPrincipal.style.backgroundColor = 'rgb(0,255,0)';
        botonPrincipal.style.color = 'black';

        // Cambiar a gris oscuro los botones fondo
        const coloresOriginalesFondo = [];
        botonesFondo.forEach(botonFondo => {
          const estiloFondo = getComputedStyle(botonFondo);
          coloresOriginalesFondo.push(estiloFondo.backgroundColor);
          botonFondo.style.backgroundColor = 'rgb(50,50,50)';
        });

        // Restaurar colores después de 100ms
        setTimeout(() => {
          botonPrincipal.style.backgroundColor = colorOriginal;
          botonPrincipal.style.color = colorTextoOriginal;

          botonesFondo.forEach((botonFondo, i) => {
            botonFondo.style.backgroundColor = coloresOriginalesFondo[i];
          });

          // ⚙️ Llama a muestraTorresI después del efecto visual
          muestraTorresI(opcion.id);

        }, 100);
      });
    }
  });
}
function muestraTorresI(elementId) {
  const pantallas = {
    'pantalla-frente': 'agrupaOblicuos',
    'pantalla-mandos': 'agrupaOblicuos-III',
    'pantalla-servicio': 'agrupaOblicuos-IV',
    'pantalla-atras': 'agrupaOblicuos-V'
  };

  const imagsTinter = document.getElementById('imgsRepuestos');
  seccionTintero.style.display = 'none';
  imagsTinter.style.display = 'none';

  const oblicuoId = pantallas[elementId];
  if (!oblicuoId) return console.warn('Elemento no reconocido:', elementId);

  const oblicuosMap = {
    'pantalla-frente': 'agrupaOblicuos-XD',
    'pantalla-mandos': 'agrupaOblicuos-D',
    'pantalla-servicio': 'agrupaOblicuos-DX',
    'pantalla-atras': 'agrupaOblicuos-DXX'
  };
  if (oblicuosMap[elementId]) {
    crearOblicuos(oblicuosMap[elementId]);
  }

  const elementosExcluidos = [
    'buscador',
    'search-form',
    elementId,
    'links-inicialesI',
    'links-iniciales',
    oblicuoId
  ];

  // Mostrar/ocultar contenedores
  allContenedores.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = elementosExcluidos.includes(id) ? 'flex' : 'none';
    }
  });

  container1.style.display = 'grid';

  // Ajustes para pantallas pequeñas
  if (screenWidth < 500) {
    const oblicuo = document.getElementById(oblicuoId);
    if (oblicuo) {
      oblicuo.style.left = '77%';
    }
  }

  // Manejo de idsArray
  const index = idsArray.indexOf(elementId);
  if (index !== -1) {
    idsArray.splice(index, 1);
  }
  idsArray.push(elementId);
  console.log(idsArray);
}
function crearOblicuosPlaca(contenedorId) {
  const opciones = [
    { label: 'Frente', id: 'imagen1' },
    { label: 'Mandos', id: 'imagen2' },
    { label: 'Servicio', id: 'imagen3' },
    { label: 'Atras', id: 'imagen4' }
  ];

  const contenedor = document.getElementById(contenedorId);
  contenedor.innerHTML = ''; // Limpiar el contenedor por si acaso

  opciones.forEach((opcion, index) => {
    const div = document.createElement('div');
    div.className = 'cont-oblicuos';
    div.id = `oblicuo-tintero-${20 + index + 1}`;

    div.innerHTML = `
      <button class="Bot-inicio2">${opcion.label}</button>
      <button class="Bot-inicio2-fondo"></button>
    `;

    contenedor.appendChild(div);
    aparecerElemento("agrupaOblicuos-DXXX","grid")

    // Lógica de color + llamada a ladosPlancha
    const botonPrincipal = div.querySelector('.Bot-inicio2');
    const botonesFondo = div.querySelectorAll('.Bot-inicio2-fondo');

    if (botonPrincipal) {
      botonPrincipal.addEventListener('click', () => {
        // Guardar colores originales
        const estiloPrincipal = getComputedStyle(botonPrincipal);
        const colorOriginal = estiloPrincipal.backgroundColor;
        const colorTextoOriginal = estiloPrincipal.color;

        // Cambiar a verde temporalmente
        botonPrincipal.style.backgroundColor = 'rgb(0,255,0)';
        botonPrincipal.style.color = 'black';

        // Cambiar fondo a gris oscuro temporalmente
        const coloresOriginalesFondo = [];
        botonesFondo.forEach(botonFondo => {
          const estiloFondo = getComputedStyle(botonFondo);
          coloresOriginalesFondo.push(estiloFondo.backgroundColor);
          botonFondo.style.backgroundColor = 'rgb(50,50,50)';
        });

        setTimeout(() => {
          // Restaurar colores originales
          botonPrincipal.style.backgroundColor = colorOriginal;
          botonPrincipal.style.color = colorTextoOriginal;

          botonesFondo.forEach((botonFondo, i) => {
            botonFondo.style.backgroundColor = coloresOriginalesFondo[i];
          });

          // Llamar a ladosPlancha después del efecto visual
          ladosPlancha(opcion.id);
        }, 100);
      });
    }
  });
}
function ladosPlancha(elementId) {
  if (!elementId) return console.warn('elementId no proporcionado');

  // Definir elementos base a excluir (comunes a todos los casos)
  const elementosBase = [
    'buscador',
    'search-form',
    'contPortPlaca',
    'agrupaOblicuos-placa',
    'links-iniciales',
    'links-inicialesI',
    'imagenes-plancha'
  ];

  // Agregar dinámicamente el elementId correspondiente (imagen1, imagen2, etc.)
  const elementosExcluidos = [...elementosBase, elementId];

  // Mostrar/ocultar contenedores según el filtro
  allContenedores.forEach(id => {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(id) ? 'flex' : 'none';
    }
  });

  // Mostrar el container principal
  container1.style.display = 'grid';

  // Manejar idsArray sin duplicados
  idsArray = idsArray.filter(id => id !== elementId);
  idsArray.push(elementId);

  console.log(idsArray);
}
function crearOblicuosMantilla(contenedorId) {
  const opciones = [
    { label: 'Frente', id: 'mantilla1' },
    { label: 'Mandos', id: 'mantilla2' },
    { label: 'Servicio', id: 'mantilla3' },
    { label: 'Atras', id: 'mantilla4' }
  ];

  const contenedor = document.getElementById(contenedorId);
  contenedor.innerHTML = ''; // Limpiar el contenedor por si acaso

  opciones.forEach((opcion, index) => {
    const div = document.createElement('div');
    div.className = 'cont-oblicuos';
    div.id = `oblicuo-tintero-${25 + index}`; // Genera IDs 25, 26, 27, 28

    div.innerHTML = `
      <button class="Bot-inicio2">${opcion.label}</button>
      <button class="Bot-inicio2-fondo"></button>
    `;

    contenedor.appendChild(div);
    aparecerElemento("agrupaOblicuos-XC", "grid");
    // Lógica de colores + llamada a ladosMantilla
    const botonPrincipal = div.querySelector('.Bot-inicio2');
    const botonesFondo = div.querySelectorAll('.Bot-inicio2-fondo');

    if (botonPrincipal) {
      botonPrincipal.addEventListener('click', () => {
        // Guardar colores originales
        const estiloPrincipal = getComputedStyle(botonPrincipal);
        const colorOriginal = estiloPrincipal.backgroundColor;
        const colorTextoOriginal = estiloPrincipal.color;

        // Cambiar temporalmente a verde
        botonPrincipal.style.backgroundColor = 'rgb(0,255,0)';
        botonPrincipal.style.color = 'black';

        // Cambiar fondo a gris oscuro temporalmente
        const coloresOriginalesFondo = [];
        botonesFondo.forEach(botonFondo => {
          const estiloFondo = getComputedStyle(botonFondo);
          coloresOriginalesFondo.push(estiloFondo.backgroundColor);
          botonFondo.style.backgroundColor = 'rgb(50,50,50)';
        });

        setTimeout(() => {
          // Restaurar colores
          botonPrincipal.style.backgroundColor = colorOriginal;
          botonPrincipal.style.color = colorTextoOriginal;

          botonesFondo.forEach((botonFondo, i) => {
            botonFondo.style.backgroundColor = coloresOriginalesFondo[i];
          });

          // Llama a ladosMantilla
          ladosMantilla(opcion.id);
        }, 100);
      });
    }
  });
}
function ladosMantilla(elementId) {
  const mapaMantillas = {
    'mantilla1': ['manta0', 'manta1'],
    'mantilla2': ['manta2', 'manta3'],
    'mantilla3': ['manta4', 'manta5'],
    'mantilla4': ['manta6', 'manta7']
  };

  const elementosExcluidos = [
    'buscador',
    'search-form',
    'imagenes-manta',
    'contPortManta',
    'agrupaOblicuos-IX',
    'links-inicialesI',
    'links-iniciales'
  ];

  // Mostrar/ocultar contenedores
  allContenedores.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = elementosExcluidos.includes(id) ? 'flex' : 'none';
    }
  });

  // Ocultar video y preparar imágenes
  const contChildManta = document.getElementById('imagenes-manta');
  const imgsManta = document.querySelectorAll('.imgMant');
  const videoCaucho = document.getElementById('videoManta');
  const imgsMantasI = document.getElementById('manta');
  container1.style.display = 'grid';
  imgsMantasI.style.display = 'none';
  videoCaucho.pause();
  videoCaucho.style.display = 'none';
  contChildManta.style.display = 'flex';

  // Mostrar sólo las imágenes correspondientes a la mantilla
  imgsManta.forEach(imagen => {
    if (mapaMantillas[elementId]?.includes(imagen.id)) {
      imagen.style.display = 'block';
    } else {
      imagen.style.display = 'none';
    }
  });

  // Manejo de versión móvil
  if (screenWidth < 500) {
    imgsMantasI.style.marginLeft = '-22%';
  }

  // Manejo de idsArray sin duplicados
  idsArray = idsArray.filter(id => id !== elementId);
  idsArray.push(elementId);
  console.log(idsArray);
}
function crearOblicuosImpresor(contenedorId) {
  const opciones = [
    { label: 'Frente', id: 'forward' },
    { label: 'Mandos', id: 'comands' },
    { label: 'Servicio', id: 'service' },
    { label: 'Atras', id: 'back' }
  ];

  const contenedor = document.getElementById(contenedorId);
  contenedor.innerHTML = ''; // Limpiar el contenedor por si acaso

  opciones.forEach((opcion, index) => {
    const div = document.createElement('div');
    div.className = 'cont-oblicuos';
    div.id = `oblicuo-tintero-${29 + index}`; // IDs 29,30,31,32

    div.innerHTML = `
      <button class="Bot-inicio2">${opcion.label}</button>
      <button class="Bot-inicio2-fondo"></button>
    `;

    contenedor.appendChild(div);
    aparecerElemento("agrupaOblicuos-C", "grid");
    const botonPrincipal = div.querySelector('.Bot-inicio2');
    const botonesFondo = div.querySelectorAll('.Bot-inicio2-fondo');

    if (botonPrincipal) {
      botonPrincipal.addEventListener('click', () => {
        // Guardar colores originales
        const estiloPrincipal = getComputedStyle(botonPrincipal);
        const colorOriginal = estiloPrincipal.backgroundColor;
        const colorTextoOriginal = estiloPrincipal.color;

        // Cambiar a verde temporalmente
        botonPrincipal.style.backgroundColor = 'rgb(0,255,0)';
        botonPrincipal.style.color = 'black';

        // Cambiar fondo de los botones secundarios a gris oscuro
        const coloresOriginalesFondo = [];
        botonesFondo.forEach(botonFondo => {
          const estiloFondo = getComputedStyle(botonFondo);
          coloresOriginalesFondo.push(estiloFondo.backgroundColor);
          botonFondo.style.backgroundColor = 'rgb(50,50,50)';
        });

        // Restaurar colores después de 100ms y llamar a ladosImpresor
        setTimeout(() => {
          botonPrincipal.style.backgroundColor = colorOriginal;
          botonPrincipal.style.color = colorTextoOriginal;

          botonesFondo.forEach((botonFondo, i) => {
            botonFondo.style.backgroundColor = coloresOriginalesFondo[i];
          });

          // ⚙️ Llamar a la función principal del impresor
          ladosImpresor(opcion.id);

        }, 100);
      });
    }
  });
}
function ladosImpresor(elementId) {
  if (!elementId) {
    console.warn('elementId no proporcionado');
    return;
  }

  const mapaImpresor = {
    'forward': ['impresor', 'impresor1'],
    'comands': ['impresor2', 'impresor3'],
    'service': ['impresor4', 'impresor5'],
    'back': ['impresor6', 'impresor7']
  };

  const elementosBase = [
    'buscador',
    'search-form',
    'contImpresor',
    'contPortImpresor',
    'agrupaOblicuos-C',
    'links-iniciales',
    'links-inicialesI',
    'imagenes-impresor',
    elementId
  ];

  // Mostrar u ocultar contenedores
  allContenedores.forEach(id => {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.style.display = elementosBase.includes(id) ? 'flex' : 'none';
    }
  });

  // Mostrar imágenes específicas del impresor
  const imgsImpresor = document.querySelectorAll('.imgImpresor');
  const idsAMostrar = mapaImpresor[elementId] || [];

  imgsImpresor.forEach(imagen => {
    imagen.style.display = idsAMostrar.includes(imagen.id) ? 'block' : 'none';
  });
  container1.style.display = 'grid';
  // Manejo de idsArray sin duplicados
  idsArray = idsArray.filter(id => id !== elementId);
  idsArray.push(elementId);

  console.log(idsArray);
}
function videosImpresor(videoId) {
  const video = document.getElementById(videoId)  
  switch (videoId) {
    case 'videoTrain00':
      videoElements.forEach(video => {
      if (video.id !== videoId) {
        video.style.display = 'none'   
        } else {
        video.style.display = 'block'
        video.pause()
        video.currentTime = 0;
        video.play()   
      } 
    })
    break;
    case 'videoTrain02':
      videoElements.forEach(video => {
      if (video.id !== videoId) {
        video.style.display = 'none'     
        } else {
        video.style.display = 'block'
        video.pause()
        video.currentTime = 0;
        video.play()           
      } 
    })
    break;

    default: 
  } 
} 
function iniciarAnimaciones(){
  revertirInterfazPerfiles()
  var elementosExcluidos = ['simulador','botonera-frente','boton-perfiles','boton-reseteo','butt-perfil','butt-control','butt-perfil-tinta','butt-job-track','boton-prensas','bot-revertir','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4','spn-blur-5','spn-blur-6','spn-blur-7'] 
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  container1.style.display = 'none'
  document.querySelectorAll('.butt-perfiles, .btn-respaldo').forEach(elemento => {
     elemento.style.display = 'block';
  })
  
  setTimeout(() => {
    aparecerElemento("interfaz-perfiles", "flex")
    animarHorizontalEye() 
    document.querySelector('#padre-evento').style.display='none'
  }, 200);
  setTimeout(() => {
    animarHumanEye()
  }, 750);
  setTimeout(() => {
    colorearRespaldos();    
  }, 1000);
}
function alternarColorRojo(){
  var buttons = document.querySelectorAll('.Bot-inicio7');  
  buttons.forEach(function(currentButton, index) {
      setTimeout(function () {
          currentButton.style.backgroundColor = "red";          
          setTimeout(function () {
              currentButton.style.backgroundColor = "";
          }, 33);
      }, index * 33);
  });
}
function alternarColorVerde(){
  var buttons = document.querySelectorAll('.Bot-inicio3');  
  buttons.forEach(function(currentButton, index) {
    setTimeout(function () {
      currentButton.style.backgroundColor = "green";          
      setTimeout(function () {
          currentButton.style.backgroundColor = "";
      }, 77);
    }, index * 77);
  });
}
function alternarColorVerdeInverso() {
  var buttonIDs = ['butt-7','butt-5','butt-3','butt-01110'];
  buttonIDs.forEach(function(buttonID, index) {
    var currentButton = document.getElementById(buttonID);      
    if (currentButton) {
      setTimeout(function () {
        currentButton.style.backgroundColor = "green";
        setTimeout(function () {
          currentButton.style.backgroundColor = "";
        }, 77);
      }, index * 77);
      }
  });
}
function abrirSeccionAdministrativa(elementId) {  
  allContenedores.forEach(elemen => {
    var element = document.getElementById(elemen)
    if (element) {
      element.style.display = 'none'
    }
  });

  setTimeout(function () {
    cambiarColoresConRetraso();
  }, 100);

  contAdministrar.style.display = 'flex'
  container1.style.display = 'flex'

  var elementosOblicuos = document.getElementsByClassName('oblicuosInicio')
  var arrayOblicuos = Array.from(elementosOblicuos)
  for (var i = 0; i < arrayOblicuos.length; i++) {
    var elemento = arrayOblicuos[i];
    elemento.style.display = "flex";
  }
  for (var i = 0; i < arrayButtsIniciales.length; i++) {
    var botonId = arrayButtsIniciales[i];
    var boton = document.getElementById(botonId);
    if (boton) {
      boton.style.backgroundColor = 'rgb(213, 245, 7)'
      boton.style.color = 'black'
  }}
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId);
    if (index !== -1) {
      idsArray.splice(index, 1);
    }
    idsArray.push(elementId);
    console.log(idsArray);
  }  
}
function abrirSeccionComercial(elementId) {
  allContenedores.forEach(elemen => {
    var element = document.getElementById(elemen)
    if (element) {
      element.style.display = 'none'
    }
  });
  contComercial.style.display = 'flex'
  container1.style.display = 'flex'
  setTimeout(function () {
    cambiarColoresConRetrasoII();
  }, 100);

  for (var i = 0; i < arrayButtsIniciales.length; i++) {
    var botonId = arrayButtsIniciales[i];
    var boton = document.getElementById(botonId);
    if (boton) {
      boton.style.backgroundColor = 'rgb(0, 255, 0)'
      boton.style.color = 'black'
  }}
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId);
    if (index !== -1) {
      idsArray.splice(index, 1);
    }
    idsArray.push(elementId);
    console.log(idsArray);
  }  
}
function abrirSeccionCalidad(elementId){ 
  allContenedores.forEach(elemen => {
    var element = document.getElementById(elemen)
    if (element) {
      element.style.display = 'none'
    }
  });
  contCalidad.style.display = 'flex'
  container1.style.display = 'flex'
  setTimeout(function () {
    cambiarColoresConRetrasoIII();
  }, 100);

  for (var i = 0; i < arrayButtsIniciales.length; i++) {
  var botonId = arrayButtsIniciales[i];
  var boton = document.getElementById(botonId);
  if (boton) {
  boton.style.backgroundColor = 'rgb(252, 5, 224)'
  boton.style.color = 'white'
  }}
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId);
    if (index !== -1) {
      idsArray.splice(index, 1);
    }
    idsArray.push(elementId);
    console.log(idsArray);
  }  
}
function cambiarColoresConRetraso() {
  function cambiarColorConRetraso(indice) {
    document.getElementById(arrayButtsRutilantes[indice]).style.backgroundColor = 'black';
    indice++;

    if (indice < arrayButtsRutilantes.length) {
      setTimeout(function () {
        cambiarColorConRetraso(indice);
      }, 37);
    } else {
      devolverColoresConRetraso();
    }
  }

  setTimeout(function () {
    cambiarColorConRetraso(0);
  }, 7);
}
function devolverColoresConRetraso() {
function cambiarColorConRetraso(indice) {
  document.getElementById(arrayButtsRutilantes[indice]).style.backgroundColor = '';
  indice++;
  if (indice < arrayButtsRutilantes.length) {
    setTimeout(function () {
      cambiarColorConRetraso(indice);
    }, 37);
  }
}
setTimeout(function () {
  cambiarColorConRetraso(0);
}, 77);
}
function cambiarColoresConRetrasoIII() {
  function cambiarColorConRetrasoIII(indice) {
    document.getElementById(arrayButtsRutilantesIII[indice]).style.backgroundColor = 'black';
    indice++;

    if (indice < arrayButtsRutilantesIII.length) {
      setTimeout(function () {
        cambiarColorConRetrasoIII(indice);
      }, 37);
    } else {
      devolverColoresConRetrasoIII();
    }
  }
  setTimeout(function () {
    cambiarColorConRetrasoIII(0);
  }, 37);
}
function devolverColoresConRetrasoII() {
  function cambiarColorConRetrasoII(indice) {
    document.getElementById(arrayButtsRutilantesII[indice]).style.backgroundColor = '';
    indice++;
    if (indice < arrayButtsRutilantesII.length) {
      setTimeout(function () {
        cambiarColorConRetrasoII(indice);
      }, 77);
    }
  }
  setTimeout(function () {
    cambiarColorConRetrasoII(0);
  }, 77);
}
function cambiarColoresConRetrasoII() {
  function cambiarColorConRetrasoII(indice) {
    document.getElementById(arrayButtsRutilantesII[indice]).style.backgroundColor = 'black';
    indice++;

    if (indice < arrayButtsRutilantesII.length) {
      setTimeout(function () {
        cambiarColorConRetrasoII(indice);
      }, 37);
    } else {
      devolverColoresConRetrasoII();
    }
  }
  setTimeout(function () {
    cambiarColorConRetrasoII(0);
  }, 37);
}
function cambiarColoresConRetrasoI(){
  function cambiarColorConRetrasoI(indice) {
    document.getElementById(arrayButtsRutilantesI[indice]).style.backgroundColor = 'black';
    indice++;
    if (indice < arrayButtsRutilantesI.length) {
      setTimeout(function () {
        cambiarColorConRetrasoI(indice);
      }, 37);
    } else {
      devolverColoresConRetrasoI();
    }
  }
  setTimeout(function () {
    cambiarColorConRetrasoI(0);
  }, 37);
}
function devolverColoresConRetrasoI() {
  function cambiarColorConRetrasoI(indice) {
    document.getElementById(arrayButtsRutilantesI[indice]).style.backgroundColor = '';
    indice++;
    if (indice < arrayButtsRutilantesI.length) {
      setTimeout(function () {
        cambiarColorConRetrasoI(indice);
      }, 77);
    }
  }

  setTimeout(function () {
    cambiarColorConRetrasoI(0);
  }, 77);
}
function devolverColoresConRetrasoIII() {
  function cambiarColorConRetrasoIII(indice) {
    document.getElementById(arrayButtsRutilantesIII[indice]).style.backgroundColor = '';
    indice++;
    if (indice < arrayButtsRutilantesIII.length) {
      setTimeout(function () {
        cambiarColorConRetrasoIII(indice);
      }, 77);
    }
  }
  setTimeout(function () {
    cambiarColorConRetrasoIII(0);
  }, 77);
}

function abrirSeccionVariable(elementId){
  clearAllIntervals()
  var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','abuelo-variable','padre-variable'];
  document.getElementById('linkList').style.display = 'none'
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
    }
  }
  container1.style.display='grid'
  document.getElementById('cont-variable').style.display='grid'
  /* manejarTransicion('child-move-variable', 'padre-variable', 'marco-variable',1200); */
  setTimeout(() => {
    resaltarSecuencialVariable()
  }, 1100);
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId);
    if (index !== -1) {
      idsArray.splice(index, 1);
    }
    idsArray.push(elementId);
    console.log(idsArray);
  }
} 
function abrirSeccionPlanas(elementId){
  clearAllIntervals()
  var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','abuelo-plana','padre-plana'];
  document.getElementById('linkList').style.display = 'none'
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
    }
  }
  container1.style.display='grid'
  document.getElementById('cont-plana').style.display='grid'
  /* manejarTransicion('child-move-plana', 'padre-plana', 'marco-plana',1200); */
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId);
    if (index !== -1) {
      idsArray.splice(index, 1);
    }
    idsArray.push(elementId);
    console.log(idsArray);
  }
}
function abrirSeccionCurado(elementId){
  var elementosExcluidos = ['buscador','search-form','cont-secador','video-container','curado-uv','links-inicialesI','links-iniciales'];  
  document.getElementById('linkList').style.display = 'none'
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
    }
  }
  container1.style.display='grid'
  document.body.style.zoom = "100%";
  container1.style.left=''
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId); 
    if (index !== -1) {
      idsArray.splice(index, 1);
    }
    idsArray.push(elementId);
    console.log(idsArray);
  }  
}
function abrirSeccionDemo(elementId) {
  var elementosExcluidos = ['buscador','search-form', 'links-inicialesI', 'links-iniciales', 'planetary', 'tendencia-naranja','padre-naranja'];
  document.getElementById('linkList').style.display = 'none';
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
    }
  }
  container1.style.display='grid'
  /* manejarTransicion('child-move-naranja', 'tendencia-naranja', 'marco-planetario',1000); */
  setTimeout(() => {
    resaltarSecuencialDemo()
  }, 800);
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId);
    if (index !== -1) {
      idsArray.splice(index, 1);
    }
    idsArray.push(elementId);
    console.log(idsArray);
  }
}
function manejarTransicion(movilId, destinoId, marcoId, delay) {
  const movil = document.getElementById(movilId);
  const destino = document.getElementById(destinoId);
  const marco = document.getElementById(marcoId);

  if (!movil || !destino || !marco) {
    console.warn("Alguno de los elementos no existe:", { movilId, destinoId, marcoId });
    return;
  }
  movil.style.display = 'flex';
  moveElement(movil, destino, marcoId);
  document.body.style.zoom = "100%";
  container1.style.left = '';

  setTimeout(() => {
    marco.style.display = 'flex';
    movil.style.display = 'none';
  }, delay);

  setTimeout(() => {
    marco.classList.add("apagado");
  }, delay + 1);
}

document.getElementById('shrinkButton').addEventListener('click', function() {
  const items = document.querySelectorAll('.span-extension');

  items.forEach(function(item) {

    // El padre real que contiene .first-lbl
    const parent = item.closest('.item-naranja');
    const label = parent.querySelector('.first-lbl');

    const initialWidth = item.offsetWidth;
    let width = initialWidth;
    const decrement = width / 25;

    const interval = setInterval(function() {
      width -= decrement;

      if (width <= 5) {
        width = 5;
        clearInterval(interval);

        setTimeout(function() {
          item.style.width = initialWidth + 'px';
          label.textContent = initialWidth/2 + ' %';
        }, 500);

      } else {
        item.style.width = width + 'px';
        label.textContent = Math.round(width) + '%';
      }
    }, 16);
  });
});

function abrirPilarMA(){
  linkListI.style.display = "none";    
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])
    if (elemento) {
      elemento.style.display = 'none'
    }
  }
  botonMa.style.display='block'
  butInicio.style.display='block'
  const buttonElements = document.querySelectorAll('.butt-mautonomo')
  var delay = 100;
  for (var i = 0; i < buttonElements.length; i++) {
    setTimeout(function(index) {
      buttonElements[index].style.display = 'block'
    }, delay * i,i)
  }    
}
function abrirPrepress(elementId) {
  var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pre-prensa','primerCont','imgs-prepress','conte-botDensitoII'] 
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i]);  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
    }
  }
  container1.style.display='grid'
  botIzquierda.style.display = 'flex'
  botDerecha.style.display = 'flex'
  videosPrepress.forEach(video => {
    if (video) {
      video.style.display = 'none'
  }})
  var padreVidPress = document.getElementById('imgs-prepress');
  var imagenes = padreVidPress.getElementsByTagName('img');
  for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].removeAttribute('style')
  }    
  setTimeout(() => {
    showButtonsTeoriaConRetraso()   
  }, 25);

  var videos = padreVidPress.getElementsByTagName('video');
  for (var i = 0; i < videos.length; i++) {
    videos[i].style.display = 'flex';
  }

  document.body.style.zoom = "100%"

  reproducirVideo('vidCicodelia');
  reproducirVideo('vid01');
  reproducirVideo('vid02');
  reproducirVideo('vid03');

  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId);
    if (index !== -1) {
      idsArray.splice(index, 1);
    }
    idsArray.push(elementId);
    console.log(idsArray);
  }
}

function abrirDensitometria(elementId){
  var contieneLinks = document.getElementById('linkList')
  var elementosExcluidos = ['buscador','search-form','densitometria','links-inicialesI','links-iniciales','imgs-densito','contDensito','conte-botDensito','segundoContDensito','tercerContDensito','cuartoContDensito','linkList']         
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
    }
  }
  container1.style.display='grid'
  var conteBotsDensito = ['bot-densi-1','bot-densi-2','bot-densi-3','bot-densi-4','bot-densi-5','bot-densi-6'];
  for (var i = 0; i < conteBotsDensito.length; i++) {
    var botDensitometria = document.getElementById(conteBotsDensito[i]);
    if (botDensitometria) {
        botDensitometria.style.display = 'flex';
    }
  }
  document.body.style.zoom = "100%" 
  container1.style.left=''
  contieneLinks.style.display = 'none'
  var vidDensitometria = document.getElementById('vidCicodeliaII')
  vidDensitometria.style.display = 'flex'
  vidDensitometria.pause();
  setTimeout(function() {
    vidDensitometria.currentTime = '0'
    vidDensitometria.play();
  }, 77);
  setTimeout(() => {
    showButtonsDensitoConRetraso()        
  }, 77);
  const imagenesDensito = document.querySelectorAll('.imgDensito');
  imagenesDensito.forEach((imagen) => {
      imagen.style.display = 'flex';
  });
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId);
    if (index !== -1) {
      idsArray.splice(index, 1);
    }
    idsArray.push(elementId);
    console.log(idsArray);
  }
}

function muestraVidPrisma(eltoHtml) {
  clickHabilitado = true
  acumuladorVideos.pop()
  acumuladorVideos.push(eltoHtml)
  videoStore.pop()
  var circulo = document.getElementById('circle')
  var circulo1 = document.getElementById('padre-circle')
  circulo1.style.display='flex'

  var conteAyudas = document.getElementById('conte-ayudas')
  var primerAyuda = document.getElementById('imagen-ayudas')
  const videoComponent = document.getElementById(eltoHtml)
  primerAyuda.style.display = 'flex'
  conteAyudas.style.display = 'flex'
  circulo.style.display = 'flex'
  document.getElementById('padre-circle').removeAttribute('style')

  let arrayVideos = ['vid06','prisma-vid-II','vid04','vid05']   

  arrayVideos.forEach(videoId => {
    let videoElement = document.getElementById(videoId)
    if (videoElement) {
      videoElement.removeAttribute('style')
      videoElement.classList.remove('move-video-up')
    }
  })

  if(screenWidth < 500){
    var elementosExcluidos = ['buscador','search-form','vidCicodelia','nicho-videos','padre-circle','circle','options','conte-ayudas','imagen-ayudas','ayudas-video']  
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i])  
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'                 
      }
    }
    container1.style.display='grid'
    arrayVideos.forEach(videoId => {
      let videoElement = document.getElementById(videoId)
      if (videoElement) {
        videoElement.removeAttribute('style')
        videoElement.classList.remove('move-video-up')
      }
    })
  }else{
    var elementosExcluidos = ['buscador','search-form','nicho-videos','padre-circle','circle','options','conte-ayudas','imagen-ayudas','ayudas-video']  
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i])  
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'                 
      }
    }
    container1.style.display='grid'
  }
  switch(eltoHtml){    
    case 'prisma-vid-II':
      reproducirVideo('prisma-vid-II');
    break
    case 'vid04' :
      formateaPrepress('vid04')
      videoStore.push(videoComponent)
    break; 
    case 'vid05' :
      formateaPrepress('vid05')   
      videoStore.push(videoComponent)
    break; 
    case 'vid06' :
      formateaPrepress('vid06')
      videoStore.push(videoComponent)      
    break;    
    default:
  } 
}
let ejecutando = false;

let imagenAyudas = document.getElementById('imagen-ayudas')
  let contenedorElementos = document.getElementById('contenedorElementos')

function alternarAyudas() {
  document.getElementById('segundaLista').style.display='none'
  document.getElementById('ventana-lateral').style.display='none'
  imagenAyudas.classList.remove('pressed');

  if (ejecutando) {
    return;
  }
  ejecutando = true;
  setTimeout(() => {
    imagenAyudas.classList.add('pressed');
    blurValue = 10;
    padreImgs.style.filter=`blur(${blurValue}px)`;
  }, 17);
  setTimeout(() => {
    contenedorElementos.style.display = 'grid';
  }, 333);
  setTimeout(() => {
    imagenAyudas.classList.remove('pressed');
    ejecutando = false;
  },500);
}
imagenAyudas.addEventListener('mouseleave',()=>{
  setTimeout(() => {
  // Solo ocultar si el cursor NO está sobre listaClientes
  if (!contenedorElementos.matches(':hover')) {
    contenedorElementos.style.display = 'none';
    
  }
}, 300);
})

function interfazAvance() {
  if(screenWidth < 500){
    var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pre-prensa','imgs-prepress','primerCont','conte-ayudas','nicho-videos','contenedor_padre_3','contenedor_padre_2','contenedor_padre'];
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i]);  
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
      }
    }  
    container1.style.display='grid'
    document.getElementById('nicho-videos').classList.add('move-vid-dens-up')
    setTimeout(() => {
      const parentContainer3 = document.getElementById('contenedor_padre_3');
      const children3 = parentContainer3.querySelectorAll('*');
      children3.forEach(child => {
        child.style.display = 'flex';
      });  
    }, 2000);
    setTimeout(() => {
      const parentContainer3 = document.getElementById('contenedor_padre_2');
      const children3 = parentContainer3.querySelectorAll('*');
      children3.forEach(child => {
        child.style.display = 'flex';
      });  
    }, 2300);
    setTimeout(() => {
      const parentContainer3 = document.getElementById('contenedor_padre');
      const children3 = parentContainer3.querySelectorAll('*');
      children3.forEach(child => {
        child.style.display = 'flex';
      });  
    }, 2600);
    blurValue = 10;
    padreImgs.style.filter=`blur(${blurValue}px)`;
  }else{
    var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','conte-ayudas','contenedor_padre_3','nicho-videos','contenedor_padre_2','contenedor_padre'];
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i]);  
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
      }
    }  
    container1.style.display='grid'
    const parentContainer2 = document.getElementById('contenedor_padre_2');
    const children2 = parentContainer2.querySelectorAll('*');
    children2.forEach(child => {
      child.style.display = 'flex';
    });
    const parentContainer = document.getElementById('contenedor_padre');
    const children = parentContainer.querySelectorAll('*');
    children.forEach(child => {
      child.style.display = 'flex';
    });
    const parentContainer3 = document.getElementById('contenedor_padre_3');
    const children3 = parentContainer3.querySelectorAll('*');
    children3.forEach(child => {
      child.style.display = 'flex';
    });
    padreVideos.classList.add('move_vid_pre')
  }  
} 
function muestraVidColor(elementId){
  if (screenWidth > 900) {
    allContenedores.forEach(contenedor => {
    if (contenedor === 'vidColor') {
      if(contenedor.style.display !== 'none'){
        contenedor.style.display = 'none'
      }             
    } 
    })
    var contImgsTeoria = document.getElementsByClassName('imgTeoria')
    for (var i = 0; i < contImgsTeoria.length; i++) {
      var teorImage = contImgsTeoria[i] 
      teorImage.style.display = 'none'  
    }
    videoElements.forEach(video => {
    if (video.id === 'color-vid') {
      video.style.display = 'block'
      video.play()      
    } else {
      video.style.display = 'none'
    }
    })
    const videos = document.querySelectorAll('.vidTeoria') 
        videos.forEach(video => {
            video.pause()
            video.style.display='none'
        })
  }else{
    var contiVidPrisma = document.getElementById('vidColor-II')
    var vidPrisma = document.getElementById('color-vid')
    contiVidPrisma.style.display = 'flex'
    vidPrisma.style.display = 'flex'
    vidPrisma.currentTime = '0'
    vidPrisma.play()
  }  
}
function formateaPrepress(eltoHtml){ 
  videosPrepress.forEach(video => {
    if (video) {
      video.style.display = 'none'
    }
    })
    videosPrepress.forEach(video => {
      if (video.id === eltoHtml) {
        video.style.display = 'flex'
    video.pause(); // Siempre pausamos antes para evitar conflictos.
    video.currentTime = 0;
    // Verificamos si ya está listo para reproducirse:
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
      }
    })  
    if(screenWidth < 500){
      document.getElementById('pre-prensa').style.display = 'flex'
      document.getElementById('imgs-prepress').style.display = 'flex'
      document.getElementById('primerCont').style.display = 'flex'
      document.getElementById('vid01').style.display = 'flex'
      document.getElementById('vid01').style.left='0'
      animateVideoWidth(eltoHtml)
    }else{
      animateVideoWidthII(eltoHtml) 
    }
}
function irContenedorAnterior() {
  if (idsArray.length === 2) {
    mostrarElementos(['pantalla-inicial','buscador','container01','search-form','toggleVideoButton','links-inicialesI','links-iniciales','pantalla-inicial','desbobinadorId','uTeñidos','alimentadorId','unidProceso','rebobinador','torre-imp','tinter-o','bateria-entintado','gran-cortina'])
    idsArray=[]
    return;
  }
  var previousElementID = idsArray[idsArray.length - 2];  
  switch (previousElementID ) {  
    case "cont-titulo":
    location.reload()
    break;
    case 'cont-titulo-operacion':
      abrirSeccionOperativa()        
    break;
    case 'cont-titulo-admin':
      abrirSeccionAdministrativa()        
    break; 
    case 'cont-titulo-comercial':
      abrirSeccionComercial()        
    break; 
    case 'cont-titulo-calidad':
      abrirSeccionCalidad()        
    break;     
    case "pantalla-inicial":        
      mostrarElementos(['pantalla-inicial','buscador','container01','search-form','toggleVideoButton','links-inicialesI','links-iniciales','desbobinadorId','uTeñidos','alimentadorId','unidProceso','rebobinador','gran-cortina'])
    break; 
    case "pantalla-tintero":
      changeButtonStyles('pantalla-tintero')  
    break;
    case "videoElement1-II":
      changeButtonStyles('videoElement1-II')  
    break;          
    case "contImgEntintador":
      showRepuesto('contImgEntintador')
    break; 
    case "contImgDistribuidor":
      showRepuesto ('contImgDistribuidor') 
    break;          
    case "contPortPlaca":
      contIMPlaca.style.display='block'
      showRepuesto('contPortPlaca')
    break;
    case "contPortManta":
      container1.style.display='grid'
      contIMmanta.style.display='block'
      showRepuesto('contPortManta', 'videoTrain03')  
    break;
    case "contImpresor":
      showRepuesto('contImpresor', 'videoTrain01')
    break;
    case "imagen1":
      ladosPlancha('imagen1')
    break;
    case "imagen2":
      ladosPlancha('imagen2')
    break; 
    case "imagen3":
      ladosPlancha('imagen3')
    break;
    case "imagen4":
      ladosPlancha('imagen4')
    break; 
    case "cont-variable":
      abrirSeccionVariable('cont-variable')
    break;   
    case "cont-plana":
      abrirSeccionPlanas('cont-plana')
    break; 
    case "cont-secador":
      abrirSeccionCurado('cont-secador')
    break;
    case "bateria-entintado-II":
      changeButtonStyles('bateria-entintado-II', 'contene-7')
    break; 
    case "bancada-torre-II":
      changeButtonStyles('bancada-torre-II')
    break; 
    case "conteneMantaut":
      ElementosMaII('conteneMantaut')
    break; 
    case "torre-imp":
      location.reload()
    break; 
    case "frente":
      muestraTorresI('frente')
    break;  
    case "sitema-humedad":
      changeButtonStyles('sitema-humedad')
    break; 
    case "pre-prensa":
      abrirPrepress()
    break; 
    case "densitometria":
      abrirDensitometria('densitometria')
    break;  
    case "vidColor":
      var mostrario = document.getElementById('pre-prensa')
      var videos = document.getElementById('vidColor')
      mostrario.style.display='flex'
      videos.style.style='flex'
      videoElements.forEach(vide => {
      if (vide.id === 'prisma-vid') {
        vide.style.display = 'block'
        vide.currentTime = 0;
        vide.loop = true;               
        vide.play()      
      } else {
        vide.style.display = 'none'
      }
      })
    break; 
    case "vidColor-II":
      var mostrari = document.getElementById('pre-prensa')
      var videos = document.getElementById('vidColor-II')
      mostrari.style.display='flex'
      videos.style.style='flex'
      videoElements.forEach(vid => {
      if (vid.id === 'color-vid') {
        vid.style.display = 'block'
        vid.currentTime = 0;
        vid.loop = true;                            
        vid.play()      
      } else {
        vid.style.display = 'none'
      }
      })
    break; 
    case "mantilla1" :
      ladosMantilla('mantilla1')
    break;
    case "mantilla2" :
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i]) 
          if (elemento) {
            elemento.style.display='none'
          }  
        }
      ladosMantilla('mantilla2')
    break;
    case "mantilla3" :
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          elemento.style.display='none'
        }  
      }
      ladosMantilla('mantilla3')
    break; 
    case "mantilla4" :
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          elemento.style.display='none'
        }  
      }
      ladosMantilla('mantilla4')
    break;
    case 'forward':
      ladosImpresor('forward')
      var contImpresor = document.getElementById('contImpresor')
      contImpresor.style.display = 'block'
    break;
    case 'comands':
      ladosImpresor('comands')
      var contImpresor = document.getElementById('contImpresor')
      contImpresor.style.display = 'block'
    break; 
    case 'service':
      ladosImpresor('service')
      var contImpresor = document.getElementById('contImpresor')
      contImpresor.style.display = 'block'
    break;
    case 'back':
      ladosImpresor('back')
      var contImpresor = document.getElementById('contImpresor')
      contImpresor.style.display = 'block'
    break; 
    case 'desbobinadorId':
      var elementosExcluidos = ['buscador','search-form','pantalla-inicial','desbobinadorId','cont-Verticales1']          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      var pantallaInicial = document.getElementById('pantalla-inicial');
      if (pantallaInicial) {
        for (var i = 0; i < pantallaInicial.children.length; i++) {
          var hijo = pantallaInicial.children[i];
          if (i === 0) {
            hijo.style.display = 'flex';
          } else {
            hijo.style.display = 'none';
          }
        }
      }  
      for (var i = 0; i < linksIniciales.length; i++) {
        var elemento = document.getElementById(linksIniciales[i]);
        elemento.style.display = 'flex'
      }   
    break;
    case 'uTeñido':
      var elementosExcluidos = ['buscador','search-form','pantalla-inicial','uTeñidos','cont-Verticales2']          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      var pantallaInicial = document.getElementById('pantalla-inicial');
      if (pantallaInicial) {
        for (var i = 0; i < pantallaInicial.children.length; i++) {
          var hijo = pantallaInicial.children[i];
          if (i === 1) {
            hijo.style.display = 'flex';
          } else {
            hijo.style.display = 'none';
          }
        }
      } 
      for (var i = 0; i < linksIniciales.length; i++) {
        var elemento = document.getElementById(linksIniciales[i]);
        elemento.style.display = 'flex'
      }      
    break;
    case 'alimentadorId':
      var elementosExcluidos = ['buscador','search-form','pantalla-inicial','alimentadorId','verticales-alimentador']          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      var pantallaInicial = document.getElementById('pantalla-inicial');
      if (pantallaInicial) {
        for (var i = 0; i < pantallaInicial.children.length; i++) {
          var hijo = pantallaInicial.children[i];
          if (i === 2) {
            hijo.style.display = 'flex';
          } else {
            hijo.style.display = 'none';
          }
        }
      } 
      for (var i = 0; i < linksIniciales.length; i++) {
        var elemento = document.getElementById(linksIniciales[i]);
        elemento.style.display = 'flex'
      }      
    break;
    case 'unidProceso':
      var elementosExcluidos = ['buscador','search-form','pantalla-inicial','unidProceso','cont-Verticales7']          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      var pantallaInicial = document.getElementById('pantalla-inicial');
      if (pantallaInicial) {
        for (var i = 0; i < pantallaInicial.children.length; i++) {
          var hijo = pantallaInicial.children[i];
          if (i === 3) {
            hijo.style.display = 'flex';
          } else {
            hijo.style.display = 'none';
          }
        }
      } 
      for (var i = 0; i < linksIniciales.length; i++) {
        var elemento = document.getElementById(linksIniciales[i]);
        elemento.style.display = 'flex'
      } 
    break;
    case 'rebobinador':
      var elementosExcluidos = ['buscador','search-form','pantalla-inicial','rebobinador']          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      var pantallaInicial = document.getElementById('pantalla-inicial');
      if (pantallaInicial) {
        for (var i = 0; i < pantallaInicial.children.length; i++) {
          var hijo = pantallaInicial.children[i];
          if (i === 4) {
            hijo.style.display = 'flex';
          } else {
            hijo.style.display = 'none';
          }
        }
      } 
      for (var i = 0; i < linksIniciales.length; i++) {
        var elemento = document.getElementById(linksIniciales[i]);
        elemento.style.display = 'flex'
      } 
    break;
    case 'pantalla-frente':
      muestraTorresI('pantalla-frente')
    break;
    case 'pantalla-mandos':
      muestraTorresI('pantalla-mandos')
    break;
    case 'pantalla-servicio':
      muestraTorresI('pantalla-servicio')
    break;
    case 'pantalla-atras':
      muestraTorresI('pantalla-atras')
    break;
    case 'troubleshooting':
      deslizaContenedor('troubleshooting','troubleshoot')
    break;
    case 'canvasContainer2':
      deslizaContenedor('canvasContainer2','def1')              
    break;
    case 'contChecks':
      deslizaContenedor('contChecks','def2')            
    break;
    case 'canvasContainer3':
      deslizaContenedor('canvasContainer3','adtBut')           
    break;
    case 'contImagNeg':
      deslizaContenedor('contImagNeg','fua1')          
    break;
    case 'contImagGraf':
      deslizaContenedor('contImagGraf','lup')          
    break;
    case 'conti-boton-kaizen':
      deslizaContenedor('conti-boton-kaizen','kaizen')          
    break;
    case 'interfaz-mtto':
      resultadosMA('interfaz-mtto')          
    break;
    case 'padre-cmyk':
      let padreCMYK = document.querySelector('#padre-cmyk');  
      let slidersCMYK = document.querySelector('#container-slider')

      var elementosExcluidos = ['colorCMYK','container-slider','padre-cmyk','simulador'] 
      for (var i = 0; i < allContenedores.length; i++) { 
        var element = document.getElementById(allContenedores[i])
        if (element) {
          element.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      } 
      container1.style.display='grid'
      padreCMYK.style.display = "grid";
      slidersCMYK.style.display = 'grid';
      padreCMYK.style.zIndex = 200
      padreCMYK.classList.remove('move-panel-cmyk')
    break;
    case 'padre-rgb':
      let padreRGB = document.querySelector('#padre-rgb');
      let slidersRGB = document.querySelector('#padre-controles')

      var elementosExcluidos = ['colorDisplay','padre-controles','padre-rgb','simulador'] 
      for (var i = 0; i < allContenedores.length; i++) { 
        var element = document.getElementById(allContenedores[i])  
        if (element) {
          element.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      } 
      container1.style.display='grid'
      padreRGB.style.display = "grid";
      slidersRGB.style.display = 'grid';
      padreRGB.style.zIndex = 200
      padreRGB.classList.remove('move-panel-rgb')      
    break;   

    default:
  } 
  let elementoEliminado = idsArray.pop();
  if (!idsArrayEliminados.includes(elementoEliminado)) {
    idsArrayEliminados.push(elementoEliminado);
  } 
  console.log('1.', idsArray)
}

function irContenedorSiguiente() {
  if (idsArrayEliminados.length === 2) {
    mostrarElementos(['pantalla-inicial','buscador','container01','search-form','toggleVideoButton','links-inicialesI','links-iniciales','pantalla-inicial','desbobinadorId','uTeñidos','alimentadorId','unidProceso','rebobinador','torre-imp','tinter-o','bateria-entintado','gran-cortina'])
    idsArrayEliminados=[]
      return;
  }
  var previousElementID = idsArrayEliminados[idsArrayEliminados.length - 2];
  switch (previousElementID ) {  
    case "cont-titulo":
    location.reload()
    break;
    case 'cont-titulo-operacion':
      abrirSeccionOperativa()        
    break;
    case 'cont-titulo-admin':
      abrirSeccionAdministrativa()        
    break; 
    case 'cont-titulo-comercial':
      abrirSeccionComercial()        
    break; 
    case 'cont-titulo-calidad':
      abrirSeccionCalidad()        
    break;     
    case "pantalla-inicial":        
      mostrarElementos(['pantalla-inicial','buscador','container01','search-form','toggleVideoButton','links-inicialesI','links-iniciales','pantalla-inicial','desbobinadorId','uTeñidos','alimentadorId','unidProceso','rebobinador','torre-imp','tinter-o','bateria-entintado','gran-cortina'])
    break; 
    case "pantalla-tintero":
      container1.style.display='grid'             
      changeButtonStyles('pantalla-tintero')  
    break;
    case "videoElement1-II":
      changeButtonStyles('videoElement1-II')  
    break;          
    case "contImgEntintador":
      showRepuesto('contImgEntintador')
    break; 
    case "contImgDistribuidor":
      showRepuesto ('contImgDistribuidor') 
    break;          
    case "contPortPlaca":
      contIMPlaca.style.display='block'
      showRepuesto('contPortPlaca')
    break;
    case "contPortManta":
      contIMmanta.style.display='block'
      showRepuesto('contPortManta', 'videoTrain03')  
    break;
    case "contImpresor":
      showRepuesto('contImpresor', 'videoTrain01')
    break;
    case "imagen1":
      ladosPlancha('imagen1')
    break;
    case "imagen2":
      ladosPlancha('imagen2')
    break; 
    case "imagen3":
      ladosPlancha('imagen3')
    break;
    case "imagen4":
      ladosPlancha('imagen4')
    break; 
    case "cont-variable":
      abrirSeccionVariable('cont-variable')
    break; 
    case "cont-plana":
      abrirSeccionPlanas('cont-plana')
    break; 
    case "cont-secador":
      abrirSeccionCurado('cont-secador')
    break;
    case "bateria-entintado-II":
      changeButtonStyles('bateria-entintado-II', 'contene-7')
    break; 
    case "bancada-torre-II":
      changeButtonStyles('bancada-torre-II')
    break; 
    case "conteneMantaut":
      ElementosMaII('conteneMantaut')
    break; 
    case "torre-imp":
      location.reload()
    break; 
    case "frente":
      muestraTorresI('frente')
    break;  
    case "sitema-humedad":
      changeButtonStyles('sitema-humedad')
    break; 
    case "pre-prensa":
      abrirPrepress()
    break; 
    case "densitometria":
      abrirDensitometria('densitometria')
    break;  
    case "vidColor":
      var mostrario = document.getElementById('pre-prensa')
      var videos = document.getElementById('vidColor')
      mostrario.style.display='flex'
      videos.style.style='flex'
      videoElements.forEach(vide => {
      if (vide.id === 'prisma-vid') {
        vide.style.display = 'block'
        vide.currentTime = 0;
        vide.loop = true;               
        vide.play()      
      } else {
        vide.style.display = 'none'
      }
      })
    break; 
    case "vidColor-II":
      var mostrari = document.getElementById('pre-prensa')
      var videos = document.getElementById('vidColor-II')
      mostrari.style.display='flex'
      videos.style.style='flex'
      videoElements.forEach(vid => {
      if (vid.id === 'color-vid') {
        vid.style.display = 'block'
        vid.currentTime = 0;
        vid.loop = true;                            
        vid.play()      
      } else {
        vid.style.display = 'none'
      }
      })
    break; 
    case "mantilla1" :
      ladosMantilla('mantilla1')
    break;
    case "mantilla2" :
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i])
          if(elemento){
            elemento.style.display='none'
          } 
        }
      ladosMantilla('mantilla2')
    break;
    case "mantilla3" :
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i]) 
        if(elemento){
          elemento.style.display='none'
        } 
      }
      ladosMantilla('mantilla3')
    break; 
    case "mantilla4" :
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i]) 
        if(elemento){
          elemento.style.display='none'
        } 
      }
      ladosMantilla('mantilla4')
    break;
    case 'forward':
      ladosImpresor('forward')
      var contImpresor = document.getElementById('contImpresor')
      contImpresor.style.display = 'block'
    break;
    case 'comands':
      ladosImpresor('comands')
      var contImpresor = document.getElementById('contImpresor')
      contImpresor.style.display = 'block'
    break; 
    case 'service':
      ladosImpresor('service')
      var contImpresor = document.getElementById('contImpresor')
      contImpresor.style.display = 'block'
    break;
    case 'back':
      ladosImpresor('back')
      var contImpresor = document.getElementById('contImpresor')
      contImpresor.style.display = 'block'
    break; 
    case 'desbobinadorId':
      var elementosExcluidos = ['buscador','search-form','pantalla-inicial','desbobinadorId','cont-Verticales1']            
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      var pantallaInicial = document.getElementById('pantalla-inicial');
      if (pantallaInicial) {
        for (var i = 0; i < pantallaInicial.children.length; i++) {
          var hijo = pantallaInicial.children[i];
          if (i === 0) {
            hijo.style.display = 'flex';
          } else {
            hijo.style.display = 'none';
          }
        }
      }  
      for (var i = 0; i < linksIniciales.length; i++) {
        var elemento = document.getElementById(linksIniciales[i]);
        elemento.style.display = 'flex'
      }   
    break;
    case 'uTeñido':
      var elementosExcluidos = ['buscador','search-form','pantalla-inicial','uTeñidos','cont-Verticales2']          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      var pantallaInicial = document.getElementById('pantalla-inicial');
      if (pantallaInicial) {
        for (var i = 0; i < pantallaInicial.children.length; i++) {
          var hijo = pantallaInicial.children[i];
          if (i === 1) {
            hijo.style.display = 'flex';
          } else {
            hijo.style.display = 'none';
          }
        }
      } 
      for (var i = 0; i < linksIniciales.length; i++) {
        var elemento = document.getElementById(linksIniciales[i]);
        elemento.style.display = 'flex'
      }      
    break;
    case 'alimentadorId':
      var elementosExcluidos = ['buscador','search-form','pantalla-inicial','alimentadorId','verticales-alimentador']          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      var pantallaInicial = document.getElementById('pantalla-inicial');
      if (pantallaInicial) {
        for (var i = 0; i < pantallaInicial.children.length; i++) {
          var hijo = pantallaInicial.children[i];
          if (i === 2) {
            hijo.style.display = 'flex';
          } else {
            hijo.style.display = 'none';
          }
        }
      } 
      for (var i = 0; i < linksIniciales.length; i++) {
        var elemento = document.getElementById(linksIniciales[i]);
        elemento.style.display = 'flex'
      }      
    break;
    case 'unidProceso':
      var elementosExcluidos = ['buscador','search-form','pantalla-inicial','unidProceso','cont-Verticales7']           
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      var pantallaInicial = document.getElementById('pantalla-inicial');
      if (pantallaInicial) {
        for (var i = 0; i < pantallaInicial.children.length; i++) {
          var hijo = pantallaInicial.children[i];
          if (i === 3) {
            hijo.style.display = 'flex';
          } else {
            hijo.style.display = 'none';
          }
        }
      } 
      for (var i = 0; i < linksIniciales.length; i++) {
        var elemento = document.getElementById(linksIniciales[i]);
        elemento.style.display = 'flex'
      } 
    break;
    case 'rebobinador':
      var elementosExcluidos = ['buscador','search-form','pantalla-inicial','rebobinador']          
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      var pantallaInicial = document.getElementById('pantalla-inicial');
      if (pantallaInicial) {
        for (var i = 0; i < pantallaInicial.children.length; i++) {
          var hijo = pantallaInicial.children[i];
          if (i === 4) {
            hijo.style.display = 'flex';
          } else {
            hijo.style.display = 'none';
          }
        }
      } 
      for (var i = 0; i < linksIniciales.length; i++) {
        var elemento = document.getElementById(linksIniciales[i]);
        elemento.style.display = 'flex'
      } 
    break;
    case 'pantalla-frente':
      muestraTorresI('pantalla-frente')
    break;
    case 'pantalla-mandos':
      muestraTorresI('pantalla-mandos')
    break;
    case 'pantalla-servicio':
      muestraTorresI('pantalla-servicio')
    break;
    case 'pantalla-atras':
      muestraTorresI('pantalla-atras')
    break;
    case 'troubleshooting':
      deslizaContenedor('troubleshooting','troubleshoot')
    break;
    case 'canvasContainer2':
      deslizaContenedor('canvasContainer2','def1')              
    break;
    case 'contChecks':
      deslizaContenedor('contChecks','def2')            
    break;
    case 'canvasContainer3':
      deslizaContenedor('canvasContainer3','adtBut')           
    break; 
    case 'contImagNeg':
      deslizaContenedor('contImagNeg','fua1')           
    break;
    case 'contImagGraf':
      deslizaContenedor('contImagGraf','lup')          
    break;
    case 'conti-boton-kaizen':
      deslizaContenedor('conti-boton-kaizen','kaizen')         
    break; 
    case 'interfaz-mtto':
      resultadosMA('interfaz-mtto')          
    break; 
    case 'padre-cmyk':
      let padreCMYK = document.querySelector('#padre-cmyk');  
      let slidersCMYK = document.querySelector('#container-slider')

      var elementosExcluidos = ['colorCMYK','container-slider','padre-cmyk','simulador'] 
      for (var i = 0; i < allContenedores.length; i++) { 
        var element = document.getElementById(allContenedores[i])
        if (element) {
          element.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      } 
      container1.style.display='grid'
      padreCMYK.style.display = "grid";
      slidersCMYK.style.display = 'grid';
      padreCMYK.style.zIndex = 200
      padreCMYK.classList.remove('move-panel-cmyk')
    break;
    case 'padre-rgb':
      let padreRGB = document.querySelector('#padre-rgb');
      let slidersRGB = document.querySelector('#padre-controles')

      var elementosExcluidos = ['colorDisplay','padre-controles','padre-rgb','simulador'] 
      for (var i = 0; i < allContenedores.length; i++) { 
        var element = document.getElementById(allContenedores[i])  
        if (element) {
          element.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      } 
      container1.style.display='grid'
      padreRGB.style.display = "grid";
      slidersRGB.style.display = 'grid';
      padreRGB.style.zIndex = 200
      padreRGB.classList.remove('move-panel-rgb')      
    break;   

    default:
  } 

  idsArrayEliminados.pop();
  console.log('2.', idsArrayEliminados)
}


function listaEntrenamientosII(btnList) {
  restablecerPosiciones(['.ocultos']);
  const conteLink = document.querySelector('#linksMA');
  conteLink.style = '';
  troublesh.style.top = '';
  troublesh.style.left = '';
  document.body.style.zoom = "100%";

  enlacesIDs.forEach(id => {
    const enlace = document.getElementById(id);
    if (enlace) enlace.style.color = 'white';
  });

  const mostrarElementos = (excluidos = []) => {
    allContenedores.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = excluidos.includes(id) ? 'flex' : 'none';
    });
    container1.style.display = 'grid';
    document.querySelector('#conti-boton').style.display = 'grid';
    document.querySelector('#conti-boton').style.top=''
    document.getElementById('troubleshooting').style.display = 'grid';
  };


  const actualizarBotones = (btnActivo) => {
    contiBtt.forEach(id => {
      const boton = document.getElementById(id);
      if (!boton) return;
      boton.classList.toggle('activo', id === btnActivo);
      /* boton.style.borderRadius='7px' */
    });
  };


  switch (btnList) {
    case 'archivo':
      mostrarElementos(['buscador','search-form','conteneMantaut','links-inicialesI','links-iniciales','largoImpresion','contImgEntrenos','linksMA','linkLis']);
      aparecerElemento("linksMA", "flex");
      actualizarBotones(btnList);
      if (screenWidth < 500) {  }
      break;
    case 'btt2':
    case 'btt3':
    case 'btt4':
    case 'btt5':
    case 'btt6':
    case 'btt7':
    case 'btt8':
      mostrarElementos(['buscador','search-form','conteneMantaut','troubleshooting',
                        'links-inicialesI','links-iniciales','largoImpresion','contImgEntrenos']);
      actualizarBotones(btnList);
      break;

    default:
      break;
  }

  document.getElementById('context-menu').style.display = 'none';
}


function listaEntrenamientos(){
  var videoBackground = document.getElementById('videoBackground')
  var contTraining = document.getElementById('largoImpresion')
  var contBotMA = document.getElementById('conti-boton')
  var contLinksMA = document.getElementById('linksMA')

  videoBackground.pause()
  videoBackground.style.display = 'none' 

  var elementosExcluidos = ['buscador','search-form','conteneMantaut','links-inicialesI','links-iniciales']         
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  container1.style.display='grid'
  contTraining.style.display='block'
  contTraining.style.top='73px'
  contLinksMA.style.display='block'
  contLinksMA.style.marginLeft='427px'
  contLinksMA.style.marginTop='-16px'
  contBotMA.style.marginTop='45px'
}
function toggleFullScreen(element) {
  if (!document.fullscreenElement) {
    if (element.requestFullscreen) {
      element.requestFullscreen()
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen()
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen()
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen()
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }
  }
}

function imagenesPasoApaso(id) {
  desactivarClicsPorUnTiempo(500);
  const botoneras = document.querySelector('#conti-boton')
  const conteLink = document.getElementById('linksMA');
  const botones = document.getElementsByClassName('colorClick');
  const padre1 = document.getElementById('padre-1');
  const padre2 = document.getElementById('padre-2');
  const padre3 = document.getElementById('contImaginario');

  // Reinicio de clases activas
  [padre1, padre2, padre3].forEach(p => p.classList.remove("activo"));

  // Ajuste general de zoom y posición
  document.body.style.zoom = (screenWidth < 500) ? "100%" : "67%";
  conteLink.style.left = '43.5vw';
  conteLink.style.top = '12vh';

  const pasos = {
    link1: {
      excluidos: [ 'conteneMantaut', 'butt-links-II', 'largoImpresion', 'linksMA', 'linkLis', 'imag1', 'contImgEntrenos', 'control-neumatico', 'padre-1'],
      scroll: 'control-neumatico',
      accion: () => {
        padre1.style.top = '20vh';
        padre1.style.left = '77vw';
        aparecerElemento("padre-1", "flex");
        setTimeout(() => animateScroll('control-neumatico'), 800);
      }
    },
    link2: {
      excluidos: ['linksMA', 'butt-links-II', 'linkLis', 'conteneMantaut', 'largoImpresion', 'contImgEntrenos', 'padre-2', 'imag2', 'pneumatico', 'contImaginario-III'],
      scroll: 'pneumatico',
      accion: () => {
        padre2.style.top = '20vh';
        padre2.style.left = '77vw';
        aparecerElemento("padre-2", "flex");
        setTimeout(() => animateScroll('pneumatico'), 1000);
      }
    },
    contImaginario: {
      excluidos: ['largoImpresion', 'linksMA', 'linkLis', 'butt-links-II', 'conteneMantaut', 'contImgEntrenos', 'padre-neumat', 'contImaginario', 'imag3', 'bailarina'],
      scroll: 'bailarina',
      accion: () => {
        aparecerElemento("contImaginario", "flex");
        padre3.style.top = '20vh';
        padre3.style.left = '77vw';
      }
    },
    'contImaginario-II': {
      excluidos: [ 'largoImpresion', 'linksMA', 'linkLis', 'butt-links-II', 'conteneMantaut', 'contImgEntrenos', 'padre-neumat', 'imag4', 'rodillo-infeed', 'contImaginario-II'],
      scroll: 'rodillo-infeed',
      accion: () => {
        padre3.style.top = '20vh';
        padre3.style.left = '77vw';
        aparecerElemento("contImaginario-II", "flex");
        setTimeout(() => animateScroll('rodillo-infeed'), 1000);
      }
    },
    'puesta-punto': {
      excluidos: ['largoImpresion', 'linksMA', 'linkLis', 'butt-links-II', 'conteneMantaut', 'contImgEntrenos', 'padre-neumat', 'puesta-punto'],
      scroll: 'puesta-punto',
      accion: () => {
        padre3.style.top = '20vh';
        padre3.style.left = '77vw';
        aparecerElemento("puesta-punto", "flex");
        aparecerElemento("padre-instrucciones", "flex");
        setTimeout(() => animateScroll('puesta-punto'), 1000);
      }
    }
  };

  const paso = pasos[id];
  if (!paso) return console.warn('ID no reconocido:', id);

  // Mostrar/ocultar contenedores
  allContenedores.forEach(elId => {
    const el = document.getElementById(elId);
    if (el) el.style.display = paso.excluidos.includes(elId) ? 'flex' : 'none';
  });

  /* container1.style.display = 'grid'; */
  botoneras.style.display = 'grid';
  botoneras.style.top='14vh'
  troublesh.style.display = 'grid';
  troublesh.style.left = (screenWidth < 500) ? '2px' : '11.5%';
  troublesh.style.top='15vh'
  // Ejecutar acción específica del paso
  paso.accion();

  // Reajuste móvil
  if (screenWidth < 500) {
    Object.assign(troublesh.style, {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: 'repeat(4, 1fr)'
    });
  }

  // Resaltar botón activo
  Array.from(botones).forEach(b => b.style.color = (b.id === id) ? '#28a745' : '');
}



function lubricacion(buttId) {
  alternarButtsDesbobinador(buttId);

  const mostrarElementos = (excepciones) => {
    allContenedores.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.style.display = excepciones.includes(id) ? 'flex' : 'none';
      }
    });
    container1.style.display = 'grid';
  };

  switch (buttId) {
    case 'boton2': {
      const excepciones = [
        'buscador', 'search-form', 'links-inicialesI', 'links-iniciales',
        'pantalla-inicial', 'desbobinadorId', 'lubricacion', 'conti-boton-desb'
      ];
      mostrarElementos(excepciones);
      mostrartBotonesIntervalo('butt-mautonomo-desbobina');
      eliminarEstilos('.butt-mautonomo-desbobina');
      break;
    }

    case 'boton3': {
      const excepciones = [
        'buscador', 'search-form', 'links-inicialesI', 'links-iniciales',
        'pantalla-inicial', 'desbobinadorId', 'freno', 'conti-boton-freno'
      ];
      mostrarElementos(excepciones);
      mostrartBotonesIntervalo('butt-mautonomo-freno');
      eliminarEstilos('.butt-mautonomo-freno');
      break;
    }

    case 'boton4':
    case 'boton5':
    case 'boton6': {
      const excepciones = [
        'buscador', 'search-form', 'links-inicialesI', 'links-iniciales',
        'pantalla-inicial', 'desbobinadorId'
      ];
      mostrarElementos(excepciones);
      palpitarBoton('desbobinadorId');
      break;
    }

    default:
      // No hacer nada si el ID no coincide con ningún caso
      break;
  }
}




function alternarButtsDesbobinador(id) {
  alternarBotones(grupos.desbobinador, id);
}
function alternarButtsTeñido(id) {
  alternarBotones(grupos.teñido, id);
}
function alternarButtsFreno(id) {
  alternarBotones(grupos.freno, id);
}
function alternarButtsfeed(id) {
  alternarBotones(grupos.feed, id);
}
function alternarButtsUnit(id) {
  alternarBotones(grupos.unit, id);
}
function alternarButtsRebobina(id) {
  alternarBotones(grupos.rebobina, id);
}
function alternarButtsnPneumatic(id) {
  alternarBotones(grupos.pneumatic, id);
}
function alternarButtsnRodilleria(id) {
  alternarBotones(grupos.rodilleria, id);
}
const grupos = {
  desbobinador: ['boton2', 'boton3', 'boton4', 'boton5', 'boton6'],
  teñido: ['boton8', 'boton9', 'boton10', 'boton11', 'boton12'],
  freno: ['btn60','btn70','btn80','btn1','btn2','btn3','btn4','btn5'],
  feed: ['boton14', 'boton15', 'boton16', 'boton17', 'boton18'],
  unit: ['boton20', 'boton21', 'boton22', 'boton23', 'boton24'],
  rebobina: ['boton26', 'boton27', 'boton28', 'boton29', 'boton30'],
  pneumatic: ['btn600','btn700','btn800'],
  rodilleria: ['btn06','btn07','btn08']
}; 
function alternarBotones(grupoIds, idActivo) {
  grupoIds.forEach(id => {
    const boton = document.getElementById(id);
    if (!boton) return;

    if (id === idActivo) {
      boton.style.background = '#28A745';
      boton.style.boxShadow = 'inset 5px 15px 5px rgba(0, 0, 0, 0.8)';
      boton.style.color = 'white';
    } else {
      boton.removeAttribute('style');
      boton.style.display = 'block';
    }
  });
}

function LubricaDesbobinador(idButt) {
  var arrayIdButtsLub = ['btn1', 'btn2', 'btn3', 'btn4', 'btn5', 'btn60', 'btn70', 'btn80']
  var arrayIdButtsLubII = ['btn60', 'btn70', 'btn80']
  var arrayLabels = ['labl1', 'labl2', 'labl3']
  var arrayLabels = ['labl1', 'labl2', 'labl3']
  var contFreno = document.getElementById('freno')
  var arrayIdButtsCheck = ['lub-diario', 'lub-semanal', 'lub-mensual']                   
  for (var i = 0; i < arrayIdButtsCheck.length; i++) {
    var button = arrayIdButtsCheck[i]
    if (button) {
      document.getElementById(button).style.backgroundColor = 'rgb(138, 149, 151)'
    } 
  }
    arrayLabels.forEach(label => {
    if (label) {
      document.getElementById(label).style.color = 'rgb(0, 255, 0)'
    }
  }) 
  for (var i = 0; i < arrayIdButtsLub.length; i++) {                                                     
    var button = arrayIdButtsLub[i]                                                                                         
    if (button === idButt) {
      document.getElementById(button).style.backgroundColor = 'rgb(0, 255, 0)'
      document.getElementById(button).style.color = 'black'  
    } else {
      document.getElementById(button).style.backgroundColor= '#333333'
      document.getElementById(button).style.color = 'white'
    }
  }
  for (var i = 0; i < arrayIdButtsLubII.length; i++) {                                                            
    var button = arrayIdButtsLubII[i]                                                                                         
    if (button === idButt) {
      document.getElementById(button).style.backgroundColor = 'rgba(217, 255, 0, 1)'
      document.getElementById(button).style.color = 'black'

    } else {
      document.getElementById(button).style.backgroundColor= '#333333'
      document.getElementById(button).style.color = 'white'
    }
  }
  let coleccionLubrica = document.querySelectorAll('.butt-mautonomo-desbobina');
  coleccionLubrica.forEach(element => {
    if (idButt === element.id) {
      // Aplicar estilos al botón seleccionado
      element.style.backgroundColor = 'rgba(0,255,0,1)';
    } else {
      // Restablecer estilos en los demás botones
      element.style = ""; 
      element.style.display = "block"; 
    }
  }); 

  switch (idButt) {
    case 'btn1':
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','desbobinadorId','lubricacion','conti-boton-desb']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      document.querySelector('#frec-lubrica').style.display='grid'
      alternarButtsFreno(idButt)
      showLablsLubricacion()
      break;
    case 'btn2':
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','desbobinadorId','lubricacion','conti-boton-desb']  
      let elementosGrid =['inicio','bis-abuelo','padre-lubrica']
      
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      for (var i = 0; i < elementosGrid.length; i++) { 
        var elemento = document.getElementById(elementosGrid[i])  
        if (elemento) {
          elemento.style.display ='grid'
        }
      }
      manejarTransicion('child-div', 'inicio', 'marco-lubrica',1200);
      alternarButtsFreno(idButt)
      if(screenWidth < 500){
        document.getElementById('butt-links-II').style.display='flex'
        document.getElementById('butt-links-II').style.top='64vh'
      }

    break; 
    case 'btn3':
    var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','conti-boton-desb','desbobinadorId','lubricacion','padre-lubrica','pantalla-inicial']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      palpitarBoton('desbobinadorId')
      document.getElementById('frec-lubrica').style.display = 'none'
      alternarButtsFreno(idButt)
    break;
    case 'btn4':
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','conti-boton-desb','desbobinadorId','lubricacion','padre-lubrica','pantalla-inicial']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      palpitarBoton('desbobinadorId')
      document.getElementById('frec-lubrica').style.display = 'none'
      alternarButtsFreno(idButt)
    break; 
    case 'btn5':
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','conti-boton-desb','desbobinadorId','lubricacion','padre-lubrica','pantalla-inicial']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      palpitarBoton('desbobinadorId')
      document.getElementById('frec-lubrica').style.display = 'none'
      alternarButtsFreno(idButt)
    break;
    case 'btn60':
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','abuelo-grilla','freno','cont-arriba-freno',
        'conti-boton-freno','desbobinadorId','padre-lubrica','pantalla-inicial','abuelo-grilla-freno']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      gridFreno.style.display='grid'
      container1.style.display='grid'
      alternarButtsFreno(idButt)
      /* manejarTransicion('child-move-II', 'abuelo-grilla','marco-freno',1000); */
      if(screenWidth < 500){
        let boton = document.getElementById('butt-links-II')
        boton.style .display='flex'
        boton.style.left='33vw'
      }
    break;
    case 'btn70': 
      var contFreno = document.getElementById('freno')
      for (var i = 0; i < contFreno.children.length; i++) {
        var hijo = contFreno.children[i]
        var estiloCalculado = window.getComputedStyle(hijo)
        if (estiloCalculado.getPropertyValue('display') === 'flex') {
          hijo.style.display = 'none'
        }
      }
      contPadre.style.display = 'flex'
      alternarButtsFreno(idButt)
    break;
    case 'btn80': 
      var contFreno = document.getElementById('freno')
      for (var i = 0; i < contFreno.children.length; i++) {
        var hijo = contFreno.children[i]
        var estiloCalculado = window.getComputedStyle(hijo)
        if (estiloCalculado.getPropertyValue('display') === 'flex') {
          hijo.style.display = 'none'
        }
      }
      contPadre.style.display = 'flex' 
      alternarButtsFreno(idButt)
    break;    
    default:
  }   
} 

function UnidadTeñido(buttId) {
  alternarButtsTeñido(buttId);

  const mostrarElementos = (excepciones) => {
    allContenedores.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.style.display = excepciones.includes(id) ? 'flex' : 'none';
      }
    });
    container1.style.display = 'grid';
  };

  switch (buttId) {
    case 'boton8': {
      const excepciones = [
        'buscador', 'search-form', 'links-inicialesI', 'links-iniciales',
        'pantalla-inicial', 'uTeñidos', 'uniteñido', 'conti-boton-teñido'
      ];
      mostrarElementos(excepciones);
      mostrartBotonesIntervalo('butt-mautonomo-teñido');
      eliminarEstilos('.butt-mautonomo-teñido');
      break;
    }
    case 'boton9': {
      const excepciones = [
        'buscador', 'search-form', 'links-inicialesI', 'links-iniciales',
        'pantalla-inicial', 'uTeñidos', 'rodilleria'
      ];
      mostrarElementos(excepciones);
      mostrartBotonesIntervalo('butt-mautonomo-rodilleria');
      eliminarEstilos('.butt-mautonomo-rodilleria');
      break;
    }
    case 'boton10':
    case 'boton11':
    case 'boton12': {
      const excepciones = [
        'buscador', 'search-form', 'links-inicialesI', 'links-iniciales',
        'pantalla-inicial', 'uTeñidos'
      ];
      mostrarElementos(excepciones);
      palpitarBoton('uTeñidos');
      break;
    }

    case 'btn600': {
      const excepciones = [
        'buscador', 'search-form', 'links-inicialesI', 'links-iniciales',
        'pantalla-inicial', 'uTeñidos', 'uniteñido', 'conti-boton-teñido',
        'cont-arriba', 'padre-grilla', 'teñido-I', 'vidTeñido', 'teñido-vid'
      ];
      mostrarElementos(excepciones);
      alternarButtsnPneumatic(buttId);
      gridTeñido.style.display = 'grid';
     break;
    }

    case 'btn700':
    case 'btn800': {
      const excepciones = [
        'buscador', 'search-form', 'links-inicialesI', 'links-iniciales',
        'pantalla-inicial', 'uTeñidos', 'uniteñido', 'conti-boton-teñido',
        'teñido-I', 'vidTeñido', 'teñido-vid'
      ];
      mostrarElementos(excepciones);
      alternarButtsnPneumatic(buttId);
      break;
    }

    default:
      // No hacer nada si no coincide con ningún caso
      break;
  }
}

function mostrartBotonesIntervalo(className) {
  const buttons = document.querySelectorAll(`.${className}`);
  buttons.forEach(button => button.style.visibility = 'hidden');

  let delay = 0;
  buttons.forEach(button => {
    setTimeout(() => {
        button.style.visibility = 'visible';
        button.style.display='flex'
    }, delay);
    delay += 177;
  });
}

function UnidadAlimenta(buttId) {
  alternarButtsfeed(buttId);

  const mostrarElementos = (excepciones) => {
    allContenedores.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.style.display = excepciones.includes(id) ? 'flex' : 'none';
      }
    });
    container1.style.display = 'grid';
  };

  switch (buttId) {
    case 'boton14':
    case 'boton15':
    case 'boton16':
    case 'boton17':
    case 'boton18': {
      const excepciones = [
        'buscador', 'search-form', 'links-inicialesI', 'links-iniciales',
        'pantalla-inicial', 'alimentadorId'
      ];
      mostrarElementos(excepciones);
      palpitarBoton('alimentadorId');
      break;
    }

    default:
      // No hacer nada si no coincide con ningún caso
      break;
  }
}

function UnidadProceso(buttId) {
  alternarButtsUnit(buttId);

  const elementosExcluidos = [
    'buscador',
    'search-form',
    'links-inicialesI',
    'links-iniciales',
    'pantalla-inicial',
    'unidProceso'
  ];

  const botonesValidos = ['boton20', 'boton21', 'boton22', 'boton23', 'boton24'];
  if (botonesValidos.includes(buttId)) {
    for (let i = 0; i < allContenedores.length; i++) {
      const elemento = document.getElementById(allContenedores[i]);
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
      }
    }
    container1.style.display = 'grid';
    palpitarBoton('unidProceso');
  }
}

function UnidadRebonina(buttId) {
  alternarButtsRebobina(buttId);

  const elementosExcluidos = [
    'buscador',
    'search-form',
    'links-inicialesI',
    'links-iniciales',
    'pantalla-inicial',
    'rebobinador'
  ];

  const botonesValidos = ['boton26', 'boton27', 'boton28', 'boton29', 'boton30'];
  if (botonesValidos.includes(buttId)) {
    for (let i = 0; i < allContenedores.length; i++) {
      const elemento = document.getElementById(allContenedores[i]);
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
      }
    }
    container1.style.display = 'grid';
    palpitarBoton('rebobinador');
  }
}

function UnidadTintero(buttId,btnIniId){
  var alimenta = document.getElementById('uTeñidos')
  var botsTorre = ['boton1','boton7','boton13','boton19','boton25',]
  var botsUnidadT = ['boton31','boton32','boton33','boton34','boton35','boton36']
  var contiDesbobina = document.getElementById('desbobinadorId')
  var computedStyleUteñido = window.getComputedStyle(contiDesbobina);
  if (computedStyleUteñido.display === 'flex') {
    palpitarBotonTintero()
  }
  if(alimenta.style.display === 'none'){
    switch (buttId) {
      case 'boton8' :
        var computedStyleUteñido = window.getComputedStyle(contiDesbobina);
        if (computedStyleUteñido.display === 'flex') {
          palpitarBotonTintero()
        }
      for (var i = 0; i < botsTorre.length; i++) {
        var currentId = botsTorre[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === btnIniId && currentElement) {
          currentElement.style.backgroundColor = 'rgb(255, 24, 55)'                         
          currentElement.style.color = 'white'
          break;
        }
      }
      for (var i = 0; i < botsUnidadT.length; i++) {
        var currentId = botsUnidadT[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === buttId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
        }else{
          currentElement.style.backgroundColor = ''

        }
      }
      for (var i = 0; i < botsDesplegables.length; i++) {
        var currentId = botsDesplegables[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === btnIniId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
        }else{
          currentElement.style.backgroundColor = ''

        }
      }
      botsDesplegables.forEach(boton => {
        botDesplegable = document.getElementById(boton)
        if(botDesplegable){
          botDesplegable.style.backgroundColor = '#333333'
          }
        })      

      showButtonsUTeñidoconRetraso()
      break;
      case 'boton9' :
          botsDesplegables.forEach(boton => {
          botDesplegable = document.getElementById(boton)
          if(botDesplegable){
            botDesplegable.style.backgroundColor = '#333333'
          }
        })
        for (var i = 0; i < botsTorre.length; i++) {
          var currentId = botsTorre[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === btnIniId && currentElement) {
            currentElement.style.backgroundColor = 'rgba(255,0,255, 1)'                         
            currentElement.style.color = 'white'
            break;
          }
        }
        for (var i = 0; i < botsUnidadT.length; i++) {
          var currentId = botsUnidadT[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === buttId && currentElement) {
            currentElement.style.backgroundColor = 'rgba(255,0,255, 1)'                              
          }else{
            currentElement.style.backgroundColor = ''

          }
        }
        showButtonsRodilleria()      
      break; 

        for (var i = 0; i < contenedorPadre.children.length; i++) {
          var hijo = contenedorPadre.children[i]
          hijo.style.display = 'none'
        }

        var contiBotonTeñido = document.getElementById('conti-boton-teñido')
        if (contiBotonTeñido) {
            contiBotonTeñido.style.display = 'flex'
        }
        for (var i = 0; i < contiBotonTeñido.children.length; i++) {
            var hijo = contiBotonTeñido.children[i]
    
            if (hijo.tagName.toLowerCase() === 'button') {
                hijo.style.display = 'flex'
            }
        }
        for (var i = 0; i < botsDesplegables.length; i++) {
          var currentId = botsDesplegables[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === buttId) {
            currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
          }else{
            currentElement.style.backgroundColor = '#333333'
  
          }
        }
        showButtonsUTeñidoconRetraso()        
      break;                               
      default:
    }
  }
}
function UnidadBateria(buttId,btnIniId){
  var alimenta = document.getElementById('uTeñidos')
  var botsTorre = ['boton1','boton7','boton13','boton19','boton25',]
  var botsUnidadT = ['boton37','boton38','boton39','boton40','boton41']
  var contiDesbobina = document.getElementById('desbobinadorId')

  var computedStyleUteñido = window.getComputedStyle(contiDesbobina);
  if (computedStyleUteñido.display === 'flex') {
    palpitarBotonBateria()
  }

  if(alimenta.style.display === 'none'){

    switch (buttId) {
      case 'boton8' :
        var computedStyleUteñido = window.getComputedStyle(contiDesbobina);
        if (computedStyleUteñido.display === 'flex') {
          palpitarBotonBateria()
        }
      for (var i = 0; i < botsTorre.length; i++) {
        var currentId = botsTorre[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === btnIniId && currentElement) {
          currentElement.style.backgroundColor = 'rgb(255, 24, 55)'                         
          currentElement.style.color = 'white'
          break;
        }
      }
      for (var i = 0; i < botsUnidadT.length; i++) {
        var currentId = botsUnidadT[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === buttId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
        }else{
          currentElement.style.backgroundColor = ''

        }
      }
      for (var i = 0; i < botsDesplegables.length; i++) {
        var currentId = botsDesplegables[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === btnIniId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
        }else{
          currentElement.style.backgroundColor = ''

        }
      }
      botsDesplegables.forEach(boton => {
        botDesplegable = document.getElementById(boton)
        if(botDesplegable){
          botDesplegable.style.backgroundColor = '#333333'
          }
        })      

      showButtonsUTeñidoconRetraso()
      break;
      case 'boton9' :
          botsDesplegables.forEach(boton => {
          botDesplegable = document.getElementById(boton)
          if(botDesplegable){
            botDesplegable.style.backgroundColor = '#333333'
          }
        })
        for (var i = 0; i < botsTorre.length; i++) {
          var currentId = botsTorre[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === btnIniId && currentElement) {
            currentElement.style.backgroundColor = 'rgba(255,0,255, 1)'                         
            currentElement.style.color = 'white'
            break;
          }
        }
        for (var i = 0; i < botsUnidadT.length; i++) {
          var currentId = botsUnidadT[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === buttId && currentElement) {
            currentElement.style.backgroundColor = 'rgba(255,0,255, 1)'                              
          }else{
            currentElement.style.backgroundColor = ''

          }
        }
        showButtonsRodilleria()      
      break; 

        for (var i = 0; i < contenedorPadre.children.length; i++) {
          var hijo = contenedorPadre.children[i]
          hijo.style.display = 'none'
        }

        var contiBotonTeñido = document.getElementById('conti-boton-teñido')
        if (contiBotonTeñido) {
            contiBotonTeñido.style.display = 'flex'
        }
        for (var i = 0; i < contiBotonTeñido.children.length; i++) {
            var hijo = contiBotonTeñido.children[i]
                if (hijo.tagName.toLowerCase() === 'button') {
                hijo.style.display = 'flex'
            }
        }
        for (var i = 0; i < botsDesplegables.length; i++) {
          var currentId = botsDesplegables[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === buttId) {
            currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
          }else{
            currentElement.style.backgroundColor = '#333333'
  
          }
        }
        showButtonsUTeñidoconRetraso()        
      break;                               
      default:
    }
  }
}
function UnidadTorre(buttId,btnIniId){
  var alimenta = document.getElementById('uTeñidos')
  var botsTorre = ['boton1','boton7','boton13','boton19','boton25',]
  var botsUnidadT = ['boton42','boton43']
  var contiDesbobina = document.getElementById('desbobinadorId')
  var computedStyleUteñido = window.getComputedStyle(contiDesbobina);
  if (computedStyleUteñido.display === 'flex') {
    palpitarBotonTorre()
  }
  if(alimenta.style.display === 'none'){
    switch (buttId) {
      case 'boton8' :
        var computedStyleUteñido = window.getComputedStyle(contiDesbobina);
        if (computedStyleUteñido.display === 'flex') {
          palpitarBotonTorre()
        }
      for (var i = 0; i < botsTorre.length; i++) {
        var currentId = botsTorre[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === btnIniId && currentElement) {
          currentElement.style.backgroundColor = 'rgb(255, 24, 55)'                         
          currentElement.style.color = 'white'
          break;
        }
      }
      for (var i = 0; i < botsUnidadT.length; i++) {
        var currentId = botsUnidadT[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === buttId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
        }else{
          currentElement.style.backgroundColor = ''

        }
      }
      for (var i = 0; i < botsDesplegables.length; i++) {
        var currentId = botsDesplegables[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === btnIniId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
        }else{
          currentElement.style.backgroundColor = ''

        }
      }
      botsDesplegables.forEach(boton => {
        botDesplegable = document.getElementById(boton)
        if(botDesplegable){
          botDesplegable.style.backgroundColor = '#333333'
          }
        })      

      showButtonsUTeñidoconRetraso()
      break;
      case 'boton9' :
          botsDesplegables.forEach(boton => {
          botDesplegable = document.getElementById(boton)
          if(botDesplegable){
            botDesplegable.style.backgroundColor = '#333333'
          }
        })
        for (var i = 0; i < botsTorre.length; i++) {
          var currentId = botsTorre[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === btnIniId && currentElement) {
            currentElement.style.backgroundColor = 'rgba(255,0,255, 1)'                         
            currentElement.style.color = 'white'
            break;
          }
        }
        for (var i = 0; i < botsUnidadT.length; i++) {
          var currentId = botsUnidadT[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === buttId && currentElement) {
            currentElement.style.backgroundColor = 'rgba(255,0,255, 1)'                              
          }else{
            currentElement.style.backgroundColor = ''

          }
        }
        showButtonsRodilleria()      
      break; 

        for (var i = 0; i < contenedorPadre.children.length; i++) {
          var hijo = contenedorPadre.children[i]
          hijo.style.display = 'none'
        }

        var contiBotonTeñido = document.getElementById('conti-boton-teñido')
        if (contiBotonTeñido) {
            contiBotonTeñido.style.display = 'flex'
        }
        for (var i = 0; i < contiBotonTeñido.children.length; i++) {
            var hijo = contiBotonTeñido.children[i]
                if (hijo.tagName.toLowerCase() === 'button') {
                hijo.style.display = 'flex'
            }
        }
        for (var i = 0; i < botsDesplegables.length; i++) {
          var currentId = botsDesplegables[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === buttId) {
            currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
          }else{
            currentElement.style.backgroundColor = '#333333'
  
          }
        }
        showButtonsUTeñidoconRetraso()        
      break;                               
      default:
    }
  }
}
function UnidadSisHumedad(buttId,btnIniId){
  var alimenta = document.getElementById('uTeñidos')
  var botsTorre = ['boton1','boton7','boton13','boton19','boton25',]
  var botsUnidadT = ['boton44','boton45','boton4']
  var contiDesbobina = document.getElementById('desbobinadorId')
  var computedStyleUteñido = window.getComputedStyle(contiDesbobina);
  if (computedStyleUteñido.display === 'flex') {
    palpitarBotonHumedad()
  }
  if(alimenta.style.display === 'none'){
    switch (buttId) {
      case 'boton8' :
        var computedStyleUteñido = window.getComputedStyle(contiDesbobina);
        if (computedStyleUteñido.display === 'flex') {
          palpitarBotonHumedad()
        }
      for (var i = 0; i < botsTorre.length; i++) {
        var currentId = botsTorre[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === btnIniId && currentElement) {
          currentElement.style.backgroundColor = 'rgb(255, 24, 55)'                         
          currentElement.style.color = 'white'
          break;
        }
      }
      for (var i = 0; i < botsUnidadT.length; i++) {
        var currentId = botsUnidadT[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === buttId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
        }else{
          currentElement.style.backgroundColor = ''

        }
      }
      for (var i = 0; i < botsDesplegables.length; i++) {
        var currentId = botsDesplegables[i]
        var currentElement = document.getElementById(currentId)
        if (currentId === btnIniId && currentElement) {
          currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
        }else{
          currentElement.style.backgroundColor = ''

        }
      }
      botsDesplegables.forEach(boton => {
        botDesplegable = document.getElementById(boton)
        if(botDesplegable){
          botDesplegable.style.backgroundColor = '#333333'
          }
        })      

      showButtonsUTeñidoconRetraso()
      break;
      case 'boton9' :
          botsDesplegables.forEach(boton => {
          botDesplegable = document.getElementById(boton)
          if(botDesplegable){
            botDesplegable.style.backgroundColor = '#333333'
          }
        })
        for (var i = 0; i < botsTorre.length; i++) {
          var currentId = botsTorre[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === btnIniId && currentElement) {
            currentElement.style.backgroundColor = 'rgba(255,0,255, 1)'                         
            currentElement.style.color = 'white'
            break;
          }
        }
        for (var i = 0; i < botsUnidadT.length; i++) {
          var currentId = botsUnidadT[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === buttId && currentElement) {
            currentElement.style.backgroundColor = 'rgba(255,0,255, 1)'                              
          }else{
            currentElement.style.backgroundColor = ''

          }
        }
        showButtonsRodilleria()      
      break; 

        for (var i = 0; i < contenedorPadre.children.length; i++) {
          var hijo = contenedorPadre.children[i]
          hijo.style.display = 'none'
        }

        var contiBotonTeñido = document.getElementById('conti-boton-teñido')
        if (contiBotonTeñido) {
            contiBotonTeñido.style.display = 'flex'
        }
        for (var i = 0; i < contiBotonTeñido.children.length; i++) {
            var hijo = contiBotonTeñido.children[i]
            if (hijo.tagName.toLowerCase() === 'button') {
                hijo.style.display = 'flex'
            }
        }
        for (var i = 0; i < botsDesplegables.length; i++) {
          var currentId = botsDesplegables[i]
          var currentElement = document.getElementById(currentId)
          if (currentId === buttId) {
            currentElement.style.backgroundColor = 'rgba(255,0,0, 1)'                              
          }else{
            currentElement.style.backgroundColor = '#333333'
  
          }
        }
        showButtonsUTeñidoconRetraso()        
      break;                               
      default:
    }
  }
}
function rodillosTeñido(botId) {
  var rodilleria = document.getElementById('rodilleria')
  var contenedoresHijos = rodilleria.children;
  for (var i = 0; i < contenedoresHijos.length; i++) {
    var hijo = contenedoresHijos[i]
    var estiloComputado = window.getComputedStyle(hijo)
    if (estiloComputado.display === 'flex' && hijo === 'conti-boton-rodilleria') {
      hijo.style.display = 'none'
    }
  }

  switch(botId) {
    case 'btn06':
      var elementosExcluidos = ['buscador','search-form','cont-links','links-inicialesI','links-iniciales','pantalla-inicial','uTeñidos','rodilleria','vidRodillos','rodilleria-vid','conti-boton-rodilleria','cont-arriba-rodillos','abuelo-cuadricula','padre-cuadricula']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      alternarButtsnRodilleria(botId)
      reproducirVideo('rodilleria-vid');
      manejarTransicion('child-div-I', 'abuelo-cuadricula', 'marco-repuestos',1100);
      if(screenWidth < 500){
        let boton = document.getElementById('butt-links-II')
        boton.style.display='flex'
        boton.style.top='88vh'
      }
    break;
    case 'btn07':
      var elementosExcluidos = ['buscador','search-form','cont-links','links-inicialesI','links-iniciales','pantalla-inicial','uTeñidos','rodilleria','conti-boton-rodilleria','grilla-durezas','abuelo-grilla-dureza']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      } 
      document.querySelector('#grilla-duro').style.display='grid'
      container1.style.display='grid'
      alternarButtsnRodilleria(botId)
      manejarTransicion('item-movil', 'grilla-durezas', 'marco-durezas',1100);
      if(screenWidth < 500){
        let boton = document.getElementById('butt-links-II')
        boton.style.display='flex'
        boton.style.top='77vh'
      }
      
    break;
    case 'btn08':
      var childContainers = rodilleria.children;
      for (var i = 0; i < childContainers.length; i++) {
        var container = childContainers[i]
        if (container.id !== 'conti-boton-rodilleria') {
          container.style.display = 'none'
        } else {
          container.style.display = 'flex'
        }
      }
      alternarButtsnRodilleria(botId)
    break;
    default:
  } 
}  


function showLablsLubricacion() { 
  var botones = document.querySelectorAll('.labl-lub')
  function mostrarLabelConRetraso(i) {
    if (i < botones.length) {
      var boton = botones[i]
      boton.style.display = 'inline-block'
      setTimeout(function() {
        mostrarLabelConRetraso(i + 1)
      }, 150)
    }
  }
  mostrarLabelConRetraso(0)
}
function lubricaDiario(butId,labelId){
  var arrayIdButtsLub = ['lub-diario', 'lub-semanal', 'lub-mensual']
  var arrayLabels = ['labl1', 'labl2', 'labl3']
  for (var i = 0; i < arrayIdButtsLub.length; i++) {
    var button = arrayIdButtsLub[i]
    if (button === butId) {
      document.getElementById(button).style.backgroundColor = 'rgb(0,255,0)'
    } else {
      document.getElementById(button).style.backgroundColor= 'rgb(138, 149, 151)'
    }
  }
  arrayLabels.forEach(label => {
    if (label === labelId) {
      document.getElementById(label).style.color = 'rgb(0, 255, 0)'
    }else{
      document.getElementById(label).style.color = 'rgb(255, 255, 0)'
    }
  }) 
  var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','conti-boton-desb','desbobinadorId','lubricacion','padre-lubrica','pantalla-inicial']  
  var elementosGrid =['lubricantes','abuelo-lubrica','padre-lubricante','frec-lubrica']
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  container1.style.display='grid'
  switch(butId) {    
    case 'lub-diario':
      for (var i = 0; i < elementosGrid.length; i++) { 
        var elemento = document.getElementById(elementosGrid[i])  
        if (elemento) {
          elemento.style.display ='grid'
        }
      }
      manejarTransicion('child-move', 'lubricantes', 'marco-lubricantes',1200);
      if(screenWidth < 500){
        document.getElementById('butt-links-II').style.display='flex'
        document.getElementById('butt-links-II').style.top='64%'
      }
    break;
    case 'lub-semanal':
      
    break;
    case 'lub-mensual':
    break;
    default:
  }
}
function antesImagenes(){
  var contImagenAntes = document.getElementById('toyota-kaizen-antes')
  contImagenAntes.style.display = 'flex'
}
function ubicaPerfilPequeño(idEmpleado){
  var contSecundario = document.getElementById('contenedor-vertical')
  var contUserElements = document.getElementsByClassName('cont-user')
  var colorIndex = 0;

  for (var j = 0; j < contUserElements.length; j++) {
    contUserElements[j].style.display = 'none';
  }

  if(screenWidth < 500){
    for (var i = 0; i < contUserElements.length; i++) {
      var element = contUserElements[i]
      if (element.id === idEmpleado) {
        contSecundario.style.display = 'flex'
        element.style.position = 'absolute'
        element.style.display = 'flex'
        element.style.height = '12vh'
        element.style.width = '25vw'
        element.style.top = '0'
        element.style.left = '2vw'
        var label = element.querySelector('label')
        if (label) {
          intervaloColor = setInterval(function () {
            label.style.color = colors[colorIndex]
            colorIndex = (colorIndex + 1) % colors.length;
          }, 200)
      }
    }
  }}
}

function ubicaPerfil(idEmpleado) {
  var contUserElements = document.getElementsByClassName('cont-user')   
  var contSecundario = document.getElementById('conte-secundario')

  if(screenWidth > 500){
    for (var i = 0; i < contUserElements.length; i++) { 
      var element = contUserElements[i]
      if (element.id === idEmpleado) {
        contSecundario.style.display = 'flex'
        element.style.position = 'absolute'
        element.style.display = 'flex'
        element.style.height = '15vh'
        element.style.width = '10vw'
        element.style.top = '-10vh'
        element.style.left = '3.5vw'
    } else {
      element.style.display = 'none'
    }}
  }else {
    for (var i = 0; i < contUserElements.length; i++) { 
      var element = contUserElements[i]
      if (element.id === idEmpleado) {
        contSecundario.style.display = 'flex'
        element.style.position = 'absolute'
        element.style.display = 'flex'
        element.style.height = '12vh'
        element.style.width = '25vw'
        element.style.top = '-1vh'
        element.style.left = '2vw'
      } else {
        element.style.display = 'none'

      }
    }
  }
}
let llamadaEjecutada = false;
var intervaloActualizarII = null;  
var intervaloActualizar = null;
let intervaloProgreso = null;

function resultadosMaquina(){
  var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','title-interfaz']
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  
  ['.maquina', '.mes', '.indicador','.span-semana'].forEach(selector => {
    document.querySelectorAll(selector).forEach(el => el.removeAttribute('style'));
  });
  document.querySelectorAll('.titulo-graf-ma').forEach(el => {
    el.textContent = '';
  });

  ["lista-maquinas", "meses", "calendario-mes", "cont-span-semanas", "titulo-calendar", "titulo-mes", "contenedor-global"].forEach(id => aparecerElemento(id, "grid"));
  destruirCharts()
  container1.style.display='grid'
}

document.querySelectorAll('.maquina').forEach((maquina, index) => {
  const rotativas = ['ROTATIVA 1','ROTATIVA 2','ROTATIVA 3','ROTATIVA 4'];
  maquina.addEventListener('click', () => {

    // restaurar estilos de todos los padres
    document.querySelectorAll('.maquina').forEach(m => {
      m.removeAttribute('style');
    });

    // restaurar color inicial de todos los hijos
    document.querySelectorAll('.indicador').forEach(i => {
      i.removeAttribute('style');   // vuelve al color del CSS
    });

    // aplicar color al padre seleccionado
    maquina.style.backgroundColor ='rgb(20,40,60)';
    maquina.style.color = 'rgb(90,160,220)';
    maquina.style.fontWeight='bold'

    // aplicar color al hijo seleccionado
    const hijo = maquina.querySelector('.indicador');
    if (hijo) hijo.style.backgroundColor = 'rgb(0,191,255)';

    // actualizar título
    const titulo = document.querySelector('#titulo-calendar');
    titulo.style.display = 'flex';
    titulo.textContent = maquina.firstChild.textContent.trim();

    const abuelo = document.getElementById('abuelo-grafica4');
    Array.from(abuelo.children).forEach(hijo => {
      abuelo.style.display='none'
      hijo.style.display = 'none';     // los ocultamos
    });

    [chart16, chart15, chart14, chart13].forEach((chart, i, arr) => {
      if (chart) {
        chart.destroy();
        arr[i] = null; // solo nulifica en el array local
      }
    });

    document.querySelectorAll('.maquina').forEach((maquina, index) => {
      maquina.addEventListener('click', () => {
        const nombre = rotativas[index];
        if (nombre) console.log(nombre);
      });
    });
  });
});

let imagenSeleccionada = null;
let nombreSeleccionado = null;























  
// CICK IMAGENES VERTICALES
function resultadosEmpleado(idEmpleado, functionExe, icono, state) {

  detenerDinamica();
  verificarPosicionTop(['conte-butts-graphs']); 
  mostrarImagenSuperior();
  alternarContenedores();
  limpiarImagenDinamica(); 
  restaurarPosicion(['conte-butts-graphs']);
  container1.style.display = 'grid';
  if (turnBlock === 'false') restablecerClick(['.desactivar', '.graphs-lines']);
  resetearAnimacionesCanvas();
  ajustarContenedorGrafs();
  mostrarGraficas();
  reubicarVisor()
  setTimeout(() => {
    ejecutarFuncionEmpleado(functionExe);
  },400);
}

// === Auxiliares ===
function mostrarImagenSuperior(imagenClicada) {
  if (!imagenSeleccionada) return;

  const destino = document.getElementById('porta-imagen');
  const spanImagen = destino.querySelector('.imagen-empleado');
  const spanNombre = destino.querySelector('.nombre-empleado');

  spanImagen.setAttribute('data-src', imagenSeleccionada);
  spanImagen.innerHTML = `<img src="${imagenSeleccionada}" alt="foto">`;
  if (nombreSeleccionado) spanNombre.textContent = nombreSeleccionado;

  // ✅ Elimina listener anterior antes de agregar uno nuevo
  spanImagen.removeEventListener('click', handleSpanImagenClick);
  spanImagen.addEventListener('click', handleSpanImagenClick);
}

// ✅ Función nombrada fuera de mostrarImagenSuperior
function handleSpanImagenClick() {
  restaurarPosicion(["conte-butts-graphs"]);
  document.querySelector('#canvasContainer4').classList.remove('move-canvas-1');
  document.querySelector('#canvasContainer5').classList.remove('move-canvas-2');
  document.querySelector('#canvasContainer6').classList.remove('move-canvas-3');
  document.querySelector('#canvasContainer7').classList.remove('move-canvas-4');
  document.querySelector('#canvasContainer8').classList.remove('move-canvas-5');
  document.querySelector('#canvasContainer9').classList.remove('move-canvas-6');
  document.querySelector('#metas-diarias').style.display = 'none';
  const padreLineas = document.querySelector('#contLineas');
  padreLineas.style.display = 'grid';
  padreLineas.querySelectorAll('*').forEach(hijo => {
    hijo.style.display = '';
    hijo.style.visibility = 'visible';
    hijo.style.opacity = '1';
  });
  restablecerClick(['.graphs-lines']);
}

document.querySelector("#porta-imagen > img").addEventListener('click', () => {
  mostrarImagenSuperior();
  handleSpanImagenClick()
});




function alternarContenedores() {
  const excluidos = [
    'buscador','search-form','links-inicialesI','links-iniciales',
    'iconos','title-interfaz'
  ];
  allContenedores.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = excluidos.includes(id) ? 'flex' : 'none';
  });                      
  document.querySelector('#conte-butts-graphs').style.display='grid'
  document.querySelector('#porta-imagen').style.display='grid'
}


function mostrarGraficas() {
  document.querySelectorAll('.graphs-lines').forEach(div => {
    Object.assign(div.style, { visibility: 'visible', opacity: '1' });
    const cv = div.querySelector('canvas');
    if (cv) Object.assign(cv.style, { visibility: 'visible', opacity: '1' });
  });
}

function limpiarImagenDinamica() {
  if (!permitirEliminarImagen) return;
  const img = document.getElementById('img-dinamica');
  if (img) img.remove();
}

function resetearAnimacionesCanvas() {
  document.querySelectorAll('.graphs-lines').forEach(el => {
    el.classList.remove(
      'move-canvas-1','move-canvas-2','move-canvas-3',
      'move-canvas-4','move-canvas-5','move-canvas-6'
    );
    restablecerClick(['.desactivar', '.graphs-lines']);
  });
}

function  ejecutarFuncionEmpleado(nombre) {
  const mapa = {
    updateAna:      () => { updateAna(); updateAnaII(); },
    updateMario:    () => { updateMario(); updateMarioII(); },
    updateSandra:   () => { updateSandra(); updateSandraII(); },
    updateJesus:    () => { updateJesus(); updateJesusII(); },
    updateJorge:    () => { updateJorge(); updateJorgeII(); },
    updateAndres:   () => { updateAndres(); updateAndresII(); },
    updateCarlos:   () => { updateCarlos(); updateCarlosII(); }
  };
  if (mapa[nombre]) mapa[nombre]();
}

function ajustarContenedorGrafs() {
  const padre = document.getElementById('contLineas');
  padre.style.display = 'grid';
  padre.querySelectorAll('*').forEach(hijo => {
    Object.assign(hijo.style, {
      display: 'flex',
      visibility: 'visible',
      height: '90%',
      width: '93%',
      opacity: '1'
    });
  });
}

// ULTIMO BOTON M.A 
function resultadosMA(identificador){
  restablecerPosiciones(['.ocultos'])      
  var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','iconos','conte-secundario','conte-maquinas','title-interfaz']  
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    } 
  }
  container1.style.display='grid'
  document.querySelector("#porta-visor").classList.remove('modificarPosicion')
  document.querySelector("#buscador-empleado").classList.remove("ubicacion"); 
  document.querySelector("#visorImagen").classList.remove('ubicar-visor') 
  document.querySelector("#porta-visor > div.visor > span").classList.remove('ubicado')
  document.querySelector("#porta-visor > div.visor > div.navegacion").classList.remove('ancho')
  /* rutasFotos.forEach(ruta => {
    const span = document.createElement('span');
    span.textContent = ruta;
    contenedor.appendChild(span);
  }); */

  const padre = document.querySelector('.contenedor-visor');
  // elimina todos los estilos en línea del padre y sus hijos
  padre.removeAttribute('style');
  padre.querySelectorAll('*').forEach(hijo => hijo.removeAttribute('style'));
  document.body.style.zoom = "100%";
  ["porta-visor"].forEach(id => aparecerElemento(id, "flex"));

  var contiUsers = document.getElementsByClassName('cont-user'); 
  for (var i = 0; i < contiUsers.length; i++) {
    var usuario = contiUsers[i];
    usuario.style.top = '';
    usuario.style.display = 'flex';
    usuario.style.position = '';
    usuario.style.height = '';
    usuario.style.width = '';
    usuario.style.left = '';
    var label = usuario.querySelector('label');
    clearInterval(intervaloColor);
  }
  if(screenWidth < 500){
    document.getElementById('gran-cortina').style.display='flex'
    setTimeout(() => {
      document.getElementById('gran-cortina').style.display='none'
    }, 500);
    var etiquetasIconos = document.getElementsByClassName('lblNombres');
    for(var i = 0; i < etiquetasIconos.length; i++){
      var labelIcon = etiquetasIconos[i];
      clearInterval(intervaloColor);
      if(labelIcon){
        labelIcon.style.color = 'yellow';
      }    
    }
  }
  const imgDinamica = document.querySelector('#img-dinamica');
  if (imgDinamica) imgDinamica.remove();
  actualizarIdsArray(identificador);      
}


function aumentarTamaño(element, factor, tiempo) {
  const originalWidth = element.clientWidth;
  const originalHeight = element.clientHeight;

  element.style.transition = `transform ${tiempo}s`;
  element.style.transform = `scale(${factor})`;
  setTimeout(() => {
    element.style.transition = 'none'
    element.style.transform = 'scale(1)'
  }, tiempo * 500)
}
function deslizaMosaico(){
  deslizaMosaicoII('icon-carlos', 'troubleshoot')  
  setTimeout(function() {
    deslizaMosaicoII('icon-andres', 'def1')  
    setTimeout(function() {
      deslizaMosaicoII('icon-jorge', 'def2')  
      setTimeout(function() {
        deslizaMosaicoII('icon-jesus', 'adtBut')  
        setTimeout(function() {
          deslizaMosaicoII('icon-sandra', 'fua1')  
          setTimeout(function() {
            deslizaMosaicoII('icon-mario', 'lup')
            setTimeout(function() {
            deslizaMosaicoII('icon-ana', 'lup')
          }, 300)
        }, 300)
      }, 300)
    }, 300)
  }, 300)
  }, 300)
}

function graficosAutomaticos(idGrafico){
  for (var i = 0; i < idsMA.length; i++) {
    var elto = idsMA[i]
    var elemento = document.getElementById(elto)
    
    if (elto === idGrafico) {
      elemento.style.display = 'block'      
    }
  }
}

document.getElementById('titleContainerI').addEventListener('mouseenter', () => {
  let padreLinks = document.getElementById('links-inicialesI');

  if (screenWidth < 500) {
    var elementosNoIncluidos = ['buscador', 'search-form', 'links-inicialesI', 'links-iniciales', 'linkList', 'linkListI'];  
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i]);
      if (elemento) {
        if (elementosNoIncluidos.includes(allContenedores[i])) {
          elemento.style.filter = '';
        } else {
          if (screenWidth < 500) {
            elemento.style.filter = 'blur(6px)';
          }
        }
      }
    }
    container1.style.display = 'grid';
    setTimeout(() => {
      padreLinks.style.display = 'block';
      conteLinks.style.display = 'block';
    }, 400);
  } else {
    padreLinks.style.display = 'block';
    linkListI.style.display = 'block';
    padre.style.display='block'  
  }
});
document.getElementById('titleContainer').addEventListener('mouseenter', () => {
  let padreLinks = document.getElementById('links-iniciales')
  let conteLinks = document.getElementById('linkList')

  if(screenWidth < 500){
    var elementosNoIncluidos = ['buscador','search-form','links-inicialesI', 'links-iniciales','linkList','linkListI'];  
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i]);
      if (elemento) {
        if (elementosNoIncluidos.includes(allContenedores[i])) {
          elemento.style.filter = '';
        } else {
          if(screenWidth < 500){
            elemento.style.filter = 'blur(6px)';
          }
        }
      }
    }
    container1.style.display='grid'
    setTimeout(() => {
      padreLinks.style.display='block'
      conteLinks.style.display='block'
    }, 400);
  }else{
    padreLinks.style.display='block'
    conteLinks.style.display='block'   
  }
}
);
let intervaloAltura = null; 
let intervaloAlturaI = null;
let alturaObjetivoAlcanzada = false;

linkListI.addEventListener('mouseleave', () =>{
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
        elemento.style.filter = '';
      }
    }
    linkListI.style.display='none'
})
linkIni1.addEventListener('mouseleave', () =>{
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
        elemento.style.filter = '';
      }
    }
    linkListI.style.display='none'
})
linkList.addEventListener('mouseleave', () =>{
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
        elemento.style.filter = '';
      }
    }
    linkList.style.display='none'
})
linkIni2.addEventListener('mouseleave', () =>{
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
        elemento.style.filter = '';
    }
  }
  document.getElementById('linkList').style.display='none'
})


