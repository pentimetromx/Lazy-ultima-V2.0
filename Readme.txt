OBJETOS EN LOCAL STORAGE:
- empleadosRegistrados

1. incrementar tamaño de mínimo a máximo:
	aparecerElemento("troubleshooting", "grid") - 	en parámetros se pasa el contenedor del elemento y el tipo de display , hay que aplicar la clase (.activo)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

2. forzar aparición de elementos hijos / Eliminar estilos en linea hijos
	

const padres = document.querySelectorAll('.constellation');

function mostrarConstellation(coleccion) {
  coleccion.forEach(padre => {
    padre.style.display = 'grid';
    padre.querySelectorAll('*').forEach(hijo => {
      hijo.style.display = '';
      hijo.style.visibility = 'visible';
      hijo.style.opacity = '1';
    });
  });
}


>>>>>>>>>>>>>>>   mostrarConstellation(padres);




padres.forEach(padre => {
  padre.removeAttribute('style'); // limpia el padre

  padre.querySelectorAll('*').forEach(hijo => {
    hijo.removeAttribute('style'); // limpia todos los descendientes
  });
});
		
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 3. FORZAR OCULTAMIENTO DE ELEMENTOS 


function ocultarConstellation(coleccion) {
  coleccion.forEach(padre => {
    padre.querySelectorAll('*').forEach(hijo => {
      hijo.style.display = 'none';
      hijo.style.visibility = 'hidden';
      hijo.style.opacity = '0';
    });
  });
}

>>>>>>>>>>>>>>>   ocultarConstellation(padres);

 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
3. No esta visible o no existe:
	const el = document.querySelector('#calendario-mes');
        if (!el || el.offsetParent === null) {
         return
       }else{ ...

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

4. Clicks activar/desactivar:

desactivarClick(['.div-ctrl','.butt-perfiles', '.butt-selector', '.digit']);

function desactivarClick(classElements) {
  if (!Array.isArray(classElements)) {
    console.error('El parámetro debe ser un array de selectores.'); 
    return;
  }
  classElements.forEach(selector => {
    const botones = document.querySelectorAll(selector);
    botones.forEach(boton => {
      boton.style.pointerEvents = 'none'; // Bloquea clic
    });
  });
}

////////////////////////////////////////////////////////////////////////////////////////

restablecerClick(['.cabeza']);

function restablecerClick(classElements) { 
  if (!Array.isArray(classElements)) {
    console.error('El parámetro debe ser un array de selectores.');
    return;
  }

  classElements.forEach(selector => {
    const botones = document.querySelectorAll(selector);
    botones.forEach(boton => {
      boton.style.pointerEvents = 'auto'; // Reactiva eventos de clic
      boton.style.opacity = '1'; // Restaura la apariencia
    });
  });
}  










4. PROMPT PARA GEMINI:

A candid portrait in the style of an old Polaroid photograph, vertical 2:3 aspect ratio. Two individuals are shown from the waist up, one with their arm around the other, looking relaxed and natural. Behind them are plain white curtains. The image exhibits a subtle blur and diffused light as if captured by a flash in a dimly lit space. The overall look should replicate the authentic, slightly faded and light-streaked appearance of a vintage Polaroid, capturing a simple, unposed moment.




CONSIDERAR SI SE BORRAN:

<button id="borrar-temporal" 













const MOVE_ELEMENT = [
  
  'move-canvas-1',
  'move-canvas-2',
  'move-canvas-3',
  'move-canvas-4',
  'move-canvas-5',
  'move-canvas-6'
];

const contLineas = document.querySelector('#contLineas');
const graficos = [...contLineas.querySelectorAll('.graphs-lines')];


const botonesFlotantes = document.querySelector('#conte-butts-graphs')
const imagenSola = document.querySelector('#porta-imagen')

if(turnBlock === false){
  turnBlock = true
}



graficos.forEach((grafico, index) => {
  grafico.dataset.index = index;
});

contLineas.addEventListener('click', (e) => {
  const graficoSeleccionado = e.target.closest('.graphs-lines');
  if (!graficoSeleccionado || !contLineas.contains(graficoSeleccionado)) return;

  const index = Number(graficoSeleccionado.dataset.index);

  graficos.forEach((grafico, i) => {
    const esActivo = grafico === graficoSeleccionado;

    // limpiar clases de movimiento
    grafico.classList.remove(...MOVE_ELEMENT);

    // marcar estado lógico
    grafico.classList.toggle('oculto', !esActivo);

    // visibilidad real (canvas incluido)
    const opacity = esActivo ? '1' : '0';
    grafico.style.opacity = opacity;

    const canvas = grafico.querySelector('canvas');
    if (canvas) canvas.style.opacity = opacity;

    // aplicar movimiento solo al activo
    if (esActivo) {
      grafico.classList.add(MOVE_ELEMENT[index]);
    }
  });
});







  










 










