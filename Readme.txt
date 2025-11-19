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





COLOR MENTA 
color: #00FFC6;



CONSIDERAR SI SE BORRAN:

<button id="borrar-temporal" 

function extraerObjetosLocalStorage










 











