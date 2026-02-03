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




document.querySelector('#boton-reseteo').addEventListener('click', () =>{
  var elementosExcluidos = ['simulador','butt-perfil-tinta', 'butt-control-tinta', 'butt-perfil', 'butt-job-track', 'boton-perfiles', 'interfaz-perfiles','boton-reseteo','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4','spn-blur-5','spn-blur-6','spn-blur-7']  
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  container1.style.display = 'none'
  desactivarClick(['.butt-perfiles']); 
  saltarAlerta('Esta acción elimina definitivamente los perfiles guardados','contenedor')

  
})




function saltarAlerta(texto, padre) {
  const modal = document.querySelector('#padre-evento');
  const mensaje = document.querySelector('#mensaje-alerta');
  const aceptar = document.querySelector('#aceptar-evento');
  const cancelar = document.querySelector('#denegar-evento');

  mensaje.textContent = texto;
  modal.style.display = 'flex';
  globalAlerta = padre

  const cerrar = () => {
    modal.style.display = 'none';
    aceptar.onclick = null;
    cancelar.onclick = null;
  };

  aceptar.onclick = () => {
    accionesPorPadre[padre]?.();
    cerrar();
  };

  cancelar.onclick = cerrar;
}




document.querySelector('#aceptar-eliminar').addEventListener('click', () =>{
  const contenedor = document.getElementById('botonera-fondo');
  const alertasPerfiles = document.querySelectorAll('.alerta-perfiles');  

  vaciarObjeto()
  vaciarAlmacenObjetos()
  const colecciones = document.querySelectorAll('.lineas-tinta, .lineas-solucion, .leds, .led, .led-general, .clase-dos');
  colecciones.forEach((elemento) => {
    elemento.style.backgroundColor = '';
  });
  alertasPerfiles.forEach(alertaPerfiles => {
    alertaPerfiles.style.opacity = '0'; // Desvanece el elemento
    setTimeout(() => {
      alertaPerfiles.style.display = 'none';
      document.querySelector('#cliente-nombre').textContent = ''
      botonesPerfilColor.forEach(elemento => {  
        elemento.style.display = 'block';
      });
      botonesPerfilColor.forEach(elemento => {
        elemento.style.display = 'block';
      });      
      if (contenedor) {
        contenedor.querySelectorAll('*').forEach(elemento => {
          elemento.style.display = 'block';
        });
      }

      objetoGlobal = {}
    }, 1000);
  });
  restablecerClick(['.butt-perfiles'])
})




226500
5800
40000

180700