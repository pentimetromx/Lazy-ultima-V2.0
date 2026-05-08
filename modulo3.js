document.addEventListener('keydown', function(event) {                 
  if (event.ctrlKey && event.shiftKey) { 
    switch (event.key) {  
      case 'Ñ':

      /* vaciarPorClaveLocalStore('empleadosRegistrados', 'object'); */
      setTimeout(() => {
        mostrarPorClaveLocalStore('empleadosRegistrados')        
      }, 200);

      break
      case 'Z':
      localStorage.removeItem('kaizenRegistrados');
            
      break;  
      case 'H':
        /* Geometria() */
        console.log('OBJETO GLOBAL', objetoGlobal)
      break;
      case 'X':
      eliminarClaveLocalStorage('empleadosRegistrados')
      break;                  
    }
  }
});   

function Geometria() {
  console.clear();  
  let contiBoton = document.querySelector('#calculadora');  
  var rect = contiBoton.getBoundingClientRect(); 
  var topPosition = rect.top;  
  var leftPosition = rect.left;  
  var widthValue = rect.width;  
  var heightValue = rect.height;  
  var style = window.getComputedStyle(contiBoton);  
  var positionType = style.position;  
  var displayType = style.display;  
  var visibilityType = style.visibility;  
  var zIndexValue = style.zIndex;  
  var isVisible = rect.width > 0 && rect.height > 0 && displayType !== 'none' && visibilityType !== 'hidden';   
  
  
  console.log("PADRE :", contiBoton.id);  
  console.log("Top:", topPosition);  
  console.log("Left:", leftPosition);  
  console.log("Height:", heightValue);  
  console.log("Width:", widthValue);  
  console.log("Position:", positionType);  
  console.log("Display:", displayType);  
  console.log("Visibility:", visibilityType);  
  console.log("Z-Index:", zIndexValue);  
  console.log("Is Visible:", isVisible);
  
  var contiBotonI = document.getElementById('contLineas') 
  var rect = contiBotonI.getBoundingClientRect();
  var topPosition = rect.top;
  var leftPosition = rect.left;
  var widthValue = rect.width;
  var heightValue = rect.height;
  var style = window.getComputedStyle(contiBotonI);
  var positionType = style.position;
  var displayType = style.display;
  var visibilityType = style.visibility;
  var isVisible = rect.width > 0 && rect.height > 0 && displayType !== 'none' && visibilityType !== 'hidden';
  console.log('2 :','PADRE :', contiBotonI.id);
  console.log('2 :','Top:', topPosition);
  console.log('2 :','Left:', leftPosition);
  console.log('2 :','Height:', heightValue);
  console.log('2 :','Width:', widthValue);
  console.log('2 :','Position:', positionType);
  console.log('2 :','Display:', displayType);
  console.log('2 :','Visibility:', visibilityType);
  console.log('2 :','Is Visible:', isVisible); 
  console.log("Z-Index:", style.zIndex);
}
function animarWidth(selector, duracion = 1000) {
  const elemento = document.querySelector(selector);
  if (!elemento) return;

  let heightInicial = 1;        // Valor de inicio en %
  const heightFinal = 93;      // Valor final en %
  const incremento = (heightFinal - heightInicial) / (duracion / 16.7); 
  // ~60 fps → 16.7 ms por frame

  function animar() {
    heightInicial += incremento;

    if (heightInicial >= heightFinal) {
      elemento.style.height = heightFinal + '%';
      return;
    }

    elemento.style.height = heightInicial + '%';
    requestAnimationFrame(animar);
  }
  requestAnimationFrame(animar);
}
function bloquearMenuPersonalizado(event) {
  event.preventDefault();
}  
function desactivarClicEnElementos(...elementos) {
  elementos.forEach(coleccion => {
    // Verificar si la colección es iterable (como un array o NodeList)   
    if (coleccion && typeof coleccion[Symbol.iterator] === 'function') {   
      coleccion.forEach(elemento => {
        elemento.style.pointerEvents = 'none'; 
      });
    } else if (coleccion instanceof HTMLElement) {   
      // Si es un solo elemento HTML
      coleccion.style.pointerEvents = 'none';  
    }
  });
} 
function reactivarClicEnElementos(...elementos) {   
  elementos.forEach(coleccion => {
    coleccion.forEach(elemento => {   
      elemento.style.pointerEvents = 'auto';
    });
  });
}
const masTintaGeneral = document.querySelector('#ctrl-gral-tinta > div:nth-of-type(1)')
const menosTintaGeneral = document.querySelector('#ctrl-gral-tinta > div:nth-of-type(2)')
const masSolucionGeneral = document.querySelector('#ctrl-gral-agua > div:nth-of-type(1)')
const menosSolucionGeneral = document.querySelector('#ctrl-gral-agua > div:nth-of-type(2)') 
const salirCalculadora = document.querySelector('#conte-butts-calculadora')
const botonesSelectores = document.querySelectorAll('.butt-selector') 
const nombreCliente = document.querySelector('.nombre-cliente') 
const alertaBotones = document.querySelector('.alerta-botones')
const buttsGenerales = document.querySelectorAll('.mod-tinta')
const alertaPerfil = document.querySelector('.alerta-perfil')
const buttsJobTrack = document.querySelectorAll('.estilo-1')   
const buttsControl = document.querySelectorAll('.div-ctrl')
const grupoBotsCrear = document.querySelectorAll('.jobs')
const buttsColores = document.querySelectorAll('.cabeza')  
const irAconsola = document.querySelector('#ir-consola')
const verdeAgua = 'rgb(127, 255, 212)'
const rojo = 'rgba(255, 0, 0, 0.63)'
const especial = 'rgb(255,130,0)' 
const barniz = 'rgb(200,200,200)'
const amarillo ='rgb(255,255,0)'
const magenta = 'rgb(255,0,255)'  
const cian = 'rgb(0,255,255)'
const verde = 'rgb(0,255,0)'
const negro = 'rgb(0,0,0)'
const azul = 'blue'
let botonera = document.querySelectorAll('.botones-registro');
let botonInicio = document.getElementById('startButton')
let botonDetener = document.getElementById('stopButton') 
let botonReseteo = document.getElementById('resetButton')
let lineaClientes = document.querySelector('#lista-lineas')
let flagAplicacion = false
let iniciador = document.getElementById('iniciador')
let retroceder = document.getElementById('iniciador-I')
let almacenObjetos = JSON.parse(localStorage.getItem('coloresRegistrados')) || {};  
let objetoGlobal = null
let nombreProvisional = null
let objetoGlobalColor = null

function ocultaElementos(id1,id2,id3,id4,id5,id6,id7,id8,id9,id10,id11,id12,id13,id14){
  var elementosExcluidos = [id1,id2,id3,id4,id5,id6,id7,id8,id9,id10,id11,id12,id13,id14]  
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'  
    }
  }
  document.querySelector('#simulador').style.display = 'flex'
  container1.style.display = 'grid'
  let displayTraining = document.getElementById('component1')  
  displayTraining.style.display = 'flex'
  switch(id1){
    case 'inerfaz-ajuste-fino':
      if (interfaz.style.display === 'none' || interfaz.style.visibility === 'hidden') {
        interfaz.style.display = 'flex'
      }
    break;
    case 'colorCMYK':
      const almacenCmyk = document.querySelector('#padre-cmyk')
      mostrarElementoProgressivo(almacenCmyk);
    
    break;
    case 'colorDisplay':
      const almacenRgb = document.querySelector('#padre-rgb')
      mostrarElementoProgressivo(almacenRgb);  
          
    break;
  }  
}

function updateDigitalClock() {   
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  document.getElementById('clock').textContent = formattedTime;
}
const colorComponents = document.querySelectorAll('.intermitencia');
let cronometroInterval = null;
let elapsedTime = 0;
let primerClick = true;
let colorInterval; 
const emergency = document.getElementById('emergency');
function toggleBackgroundColor() {
  const elements = document.querySelectorAll('.equal');
  let isOriginalColor = true;
  colorInterval = setInterval(() => {
    elements.forEach(element => {
      if (isOriginalColor) {
        element.style.backgroundColor = 'rgb(255, 0, 0)';
        colorComponents.forEach(colorComponent => {
          colorComponent.style.backgroundColor = '';
        });
      } else {
        element.style.backgroundColor = 'rgb(255, 166, 0)';
        colorComponents.forEach(colorComponent => {
          colorComponent.style.backgroundColor = 'rgb(255, 166, 0)';
        });
      }
    });
    isOriginalColor = !isOriginalColor;
  }, 500);
}
emergency.addEventListener('click', () => {
  let sombra = document.getElementById('sombra');
  if (primerClick) {
    emergency.style.transform = 'translateY(3px) rotate(85deg)';
    sombra.style.height = '21%';
    sombra.style.width = '12%';
    sombra.style.left = '27.5%';
    sombra.style.top = '9%';
    toggleBackgroundColor();
    balizaAlarma()
  } else {
    emergency.style.transform = 'translateY(0px) rotate(0deg)';
    sombra.style.height = '';
    sombra.style.width = '';
    sombra.style.left = '';
    sombra.style.top = '';
    colorComponents.forEach(colorComponent => {
    colorComponent.style.backgroundColor = '';
    detenerBaliza()
    });
    clearInterval(colorInterval); // Detenemos el intervalo
    document.querySelectorAll('.equal').forEach(element => {
      element.style.backgroundColor = 'rgb(255, 166, 0)'; // Color original
    });
  }
  primerClick = !primerClick;
});
function startCronometro() {
  botonDetener.style.backgroundColor = ''
  botonInicio.style.backgroundColor = 'rgb(0,255,0)'
  botonInicio.style.color = 'rgb(77,0,0)'
  botonReseteo.style.backgroundColor=''

  if (cronometroInterval === null) { // Verifica si no hay otro intervalo corriendo
    cronometroInterval = setInterval(() => {
      elapsedTime += 1;
      const hours = Math.floor(elapsedTime / 36000);
      const minutes = Math.floor((elapsedTime % 36000) / 600);
      const seconds = Math.floor((elapsedTime % 600) / 10);
      const tenths = elapsedTime % 10;

      document.getElementById('cronometro').textContent =
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${tenths}`;
    }, 100);
  }
}
function stopCronometro() {
  if(botonInicio.style.backgroundColor === 'rgb(0,255,0)'){    
    botonDetener.style.backgroundColor = 'rgb(255,0,0)'
    botonDetener.style.color='rgb(255,255,255)'
    botonReseteo.style.backgroundColor=''
  }else{
    botonInicio.style.backgroundColor = ''
    botonInicio.style.color = ''
    botonDetener.style.backgroundColor = 'rgb(255,0,0)'
    botonDetener.style.color='rgb(255,255,255)'
  }
  if (cronometroInterval !== null) {
    clearInterval(cronometroInterval);
    cronometroInterval = null;
    // Capturar y mostrar el tiempo transcurrido
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = Math.floor(elapsedTime % 60);
    const tenths = Math.floor((elapsedTime % 1) * 10);
  }
}
function resetCronometro() {
  if(botonDetener.style.backgroundColor === 'rgb(255,0,0)'){
    botonDetener.style.backgroundColor = ''
    botonDetener.style.color=''
    botonInicio.style.backgroundColor = ''
    botonInicio.style.color = ''
  }
  if (cronometroInterval !== null) {
    return;
  }
  stopCronometro(); 
  elapsedTime = 0;
  document.getElementById('cronometro').textContent = '00:00:00.0';
  botonDetener.style.backgroundColor = ''
  botonDetener.style.color=''
  botonInicio.style.backgroundColor = ''
  botonInicio.style.color = ''

}
botonInicio.addEventListener('click', startCronometro);
botonDetener.addEventListener('click', stopCronometro);
botonReseteo.addEventListener('click', resetCronometro);
setInterval(updateDigitalClock, 1000);
updateDigitalClock(); // Llamar inmediatamente para mostrar la hora al cargar
const contenedorPadre = document.getElementById('clock');
const tableta = document.getElementById('water-background');

/* let isDragging = false;
let isDraggingI = false;
let offsetX, offsetY; 


contenedorPadre.addEventListener('mousedown', (e) => {
  e.preventDefault(); // Prevenir comportamiento predeterminado de arrastre
  isDragging = true; // El elemento empieza a ser arrastrado
  offsetX = e.clientX - contenedorPadre.offsetLeft; // Distancia del clic desde el borde izquierdo del contenedor
  offsetY = e.clientY - contenedorPadre.offsetTop; // Distancia del clic desde el borde superior del contenedor
  contenedorPadre.style.cursor = 'grabbing'; // Cambia el cursor a "grabbing" durante el arrastre
}) */;

let enArrastre = false;
let offsetXX, offsetYY;
contenedorPanel.addEventListener('mousedown', (e) => {
  e.preventDefault(); // Prevenir comportamiento predeterminado
  enArrastre = true; // Indicar que estamos en modo de arrastre
  // Calcular la distancia desde el borde del elemento hasta el clic
  offsetXX = e.clientX - contenedorPanel.offsetLeft;
  offsetYY = e.clientY - contenedorPanel.offsetTop;
  contenedorPanel.style.cursor = 'grabbing'; // Cambia el cursor a "grabbing" durante el arrastre
});
// Mover el elemento mientras se arrastra
document.addEventListener('mousemove', (e) => {
  if (enArrastre) { // Si estamos en modo de arrastre
    // Calcular nuevas coordenadas del elemento
    let newX = e.clientX - offsetXX;
    let newY = e.clientY - offsetYY;
    // Actualizar posición del elemento
    contenedorPanel.style.left = newX + 'px';
    contenedorPanel.style.top = newY + 'px';
  }
});
// Detener el arrastre cuando se suelta el mouse
document.addEventListener('mouseup', () => {
  enArrastre = false; // Dejar de arrastrar
  contenedorPanel.style.cursor = 'grab'; // Cambia el cursor a "grab" cuando se suelta
});
function resetearElementos() {
  const elementos = [
    document.getElementById('miRectangulo'),
    document.getElementById('miRectangulo1'),
    document.getElementById('miRectangulo2'),
    document.getElementById('miRectangulo3'),
    document.getElementById('miRectangulo4'),
    document.getElementById('miRectangulo5'),
    document.getElementById('miRectangulo6')
  ];

  elementos.forEach(elemento => {
    elemento.style.transition = 'none'; // Elimina cualquier transición aplicada
    elemento.style.transform = 'none';  // Restablece la transformación (rotación, escala, etc.)
    elemento.style.top = ''; 
    elemento.style.display = 'none';
  });
}
function animarRectangulos() {
  const rectangulos = document.querySelectorAll('.rectangulo');
  rectangulos.forEach((rectangulo, index) => {
    const nuevaPosicion = 479 - index * 40; 
    setTimeout(() => {
      rectangulo.style.transition = 'top 0.5s ease';
      rectangulo.style.top = `${nuevaPosicion}px`;
    }, index * 200); 
  });
}
function girarElemento(esquina) {
  resetearElementos()
  const elementos = [
    document.getElementById('miRectangulo'),
    document.getElementById('miRectangulo1'),
    document.getElementById('miRectangulo2'),
    document.getElementById('miRectangulo3'),
    document.getElementById('miRectangulo4'),
    document.getElementById('miRectangulo5'),
    document.getElementById('miRectangulo6')
  ];
  const origenes = {
    'top-left': '0% 0%',
    'top-right': '100% 0%',
    'bottom-left': '0% 100%',
    'bottom-right': '100% 100%'
  };
  elementos.forEach((elemento, index) => {
    elemento.style.display='flex'
  });
  elementos.forEach((elemento, index) => {
    setTimeout(() => {
      elemento.style.transformOrigin = origenes[esquina];
      elemento.style.transition = 'transform 1.5s ease';
      elemento.style.transform = `rotate(${360}deg)`;
    }, index * 100);    
  });
  setTimeout(() => {
    animarRectangulos()
  }, 2000);
}

let btnRegistro = document.querySelector("#boton-registro")
btnRegistro.addEventListener('click',()=>{
var elementosExcluidos = ['simulador','interfaz-perfiles','boton-perfiles','boton-reseteo','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4','spn-blur-5','spn-blur-6','spn-blur-7'] 
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  container1.style.display = 'none'

  document.querySelector("#butts-simulador").style.display='grid'
})

let buttsSelectores = document.querySelectorAll('.section')
let zonasRegistro = document.querySelectorAll('.indexado')
buttsSelectores.forEach(boton =>{
  resetearElementos()
  let botonUno = buttsSelectores[0]
  let botonDos = buttsSelectores[1]
  let botonTres = buttsSelectores[2]
  let botonCuatro = buttsSelectores[3]

  botonUno.addEventListener('click',()=>{
    resetearElementos()    
    document.querySelector('#segunda-pantalla').style.display='flex'
    zonasRegistro.forEach(zona =>{
      if(zona === zonasRegistro[1]){
        zona.style.display='flex'
      }else{
        zona.style.display='none'
      }
    })
  })
  botonDos.addEventListener('click',()=>{
    resetearElementos()    
    document.querySelector('#water-background').style.display='flex'
    zonasRegistro.forEach(zona =>{
      if(zona === zonasRegistro[3]){
        zona.style.display='flex'
      }else{
        zona.style.display='none'
      }
    })
  })
  botonTres.addEventListener('click',()=>{
    resetearElementos()    
    document.querySelector('#interfaz-registro').style.display='flex'
    zonasRegistro.forEach(zona =>{      
      if(zona === zonasRegistro[0]){
        zona.style.display='flex'
      }else{
        zona.style.display='none'
      }
    })
  }) 
  botonCuatro.addEventListener('click',()=>{
    resetearElementos()    
    document.querySelector('#control-panel').style.display='flex'
    zonasRegistro.forEach(zona =>{
      if(zona === zonasRegistro[2]){
        zona.style.display='flex'
      }else{
        zona.style.display='none'
      }
    })
  }) 
})

document.getElementById('alterna1').addEventListener('click', () =>{ 
  document.getElementById('pantalla-registro').style.zIndex=2
  document.getElementById('pantalla-guias').style.zIndex=1
  document.getElementById('alterna2').style.backgroundColor='rgb(177,177,177)'
  document.getElementById('alterna1').style.backgroundColor=''
}  )
document.getElementById('alterna2').addEventListener('click', () =>{
  document.getElementById('pantalla-registro').style.zIndex=1
  document.getElementById('pantalla-guias').style.zIndex=2
  document.getElementById('alterna1').style.backgroundColor='rgb(177,177,177)'
  document.getElementById('alterna2').style.backgroundColor=''
})
const pliego = document.getElementById('pliego');
let anguloX = 0;
let posLeft = 50;
let direccionA = 1;
document.getElementById('guia-4').addEventListener('mouseup', () => {
  // Obtener la transformación actual del elemento
  const computedStyle = window.getComputedStyle(pliego);
  const matrix = computedStyle.transform;
  // Verificar si hay una transformación aplicada
  let anguloActual = 0;
  if (matrix !== 'none') {
    // Extraer el valor de la matriz de transformación y convertir a grados
    const values = matrix.split('(')[1].split(')')[0].split(',');
    const a = parseFloat(values[0]);
    const b = parseFloat(values[1]);
    anguloActual = Math.round(Math.atan2(b, a) * (180 / Math.PI));
  }
  // Sumar o restar el ángulo basado en la dirección
  let anguloX = anguloActual + direccionA;
  // Aplicar la nueva rotación al elemento
  pliego.style.transform = `rotateZ(${anguloX}deg)`;
  // Actualizar el texto de conteo
  document.getElementById('conteo-sup').textContent = `${anguloX}º`;
  document.getElementById('conteo-inf').textContent = ``;
});
document.getElementById('guia-1').addEventListener('mouseup', () => {
  const computedStyle = window.getComputedStyle(pliego);
  const matrix = computedStyle.transform;
  let anguloActual = 0;
  if (matrix !== 'none') {
    const values = matrix.split('(')[1].split(')')[0].split(',');
    const a = parseFloat(values[0]);
    const b = parseFloat(values[1]);
    anguloActual = Math.round(Math.atan2(b, a) * (180 / Math.PI));
  }
  let anguloX = anguloActual - direccionA;
  pliego.style.transform = `rotateZ(${anguloX}deg)`;
  document.getElementById('conteo-sup').textContent = `${anguloX}º`;
  document.getElementById('conteo-inf').textContent = ``;
});
let direccion = 1;
document.getElementById('guia-6').addEventListener('mouseup', () => {
  const computedStyle = window.getComputedStyle(pliego);
  const matrix = computedStyle.transform;
  let anguloActual = 0;
  if (matrix !== 'none') {
    const values = matrix.split('(')[1].split(')')[0].split(',');
    const a = parseFloat(values[0]);
    const b = parseFloat(values[1]);
    anguloActual = Math.round(Math.atan2(b, a) * (180 / Math.PI));
  }
  let anguloX = anguloActual - direccion;
  pliego.style.transform = `rotateZ(${anguloX}deg)`;
  document.getElementById('conteo-inf').textContent = `${anguloX}º`;
  document.getElementById('conteo-sup').textContent = ``;
});
document.getElementById('guia-3').addEventListener('mouseup', () => {
  // Obtener la transformación actual del elemento
  const computedStyle = window.getComputedStyle(pliego);
  const matrix = computedStyle.transform;
  // Verificar si hay una transformación aplicada
  let anguloActual = 0;
  if (matrix !== 'none') {
    // Extraer el valor de la matriz de transformación y convertir a grados
    const values = matrix.split('(')[1].split(')')[0].split(',');
    const a = parseFloat(values[0]);
    const b = parseFloat(values[1]);
    anguloActual = Math.round(Math.atan2(b, a) * (180 / Math.PI));
  }
  // Sumar o restar el ángulo basado en la dirección
  let anguloX = anguloActual + direccion;
  // Aplicar la nueva rotación al elemento
  pliego.style.transform = `rotateZ(${anguloX}deg)`;
  // Actualizar el texto de conteo
  document.getElementById('conteo-inf').textContent = `${anguloX}º`;
  document.getElementById('conteo-sup').textContent = ``;
});
let direccionLeft = -1;
document.getElementById('guia-2').addEventListener('click', () => {
  const computedStyle = window.getComputedStyle(pliego);
  let leftActual = parseFloat(computedStyle.left); // Obtener la posición actual (en píxeles)
  const parentWidth = pliego.offsetParent.offsetWidth;
  let leftPorcentajeActual = (leftActual / parentWidth) * 100;
  let nuevaPosLeft = leftPorcentajeActual + direccionLeft;
  if (nuevaPosLeft > 44) {
    pliego.style.left = `${nuevaPosLeft}%`;
  }
});
document.getElementById('guia-5').addEventListener('click', () => {
  const computedStyle = window.getComputedStyle(pliego);
  let leftActual = parseFloat(computedStyle.left); // Obtener la posición actual (en píxeles)
  const parentWidth = pliego.offsetParent.offsetWidth;
  let leftPorcentajeActual = (leftActual / parentWidth) * 100;
  let nuevaPosLeft = leftPorcentajeActual - direccionLeft;
  if (nuevaPosLeft < 57) {
    pliego.style.left = `${nuevaPosLeft}%`;
  }
});
const pliego1 = document.getElementById('pliego');
let incrementos = 0; // Contador de clics
document.getElementById('guia-7').addEventListener('click', () => {
  // Obtener los estilos computados
  let computedStyles = window.getComputedStyle(pliego1);
  let topPosition = parseFloat(computedStyles.getPropertyValue('top')); // Convertir 'top' a número en píxeles  
  // Obtener el alto del contenedor padre o de la ventana
  const containerHeight = pliego1.parentElement.clientHeight || window.innerHeight;  
  // Convertir 5% y 15% del alto del contenedor a píxeles
  const minTop = containerHeight * 0.05; // 5%
  const maxTop = containerHeight * 0.15; // 15%
  // Comprobar si el valor 'top' está dentro del rango y si no ha alcanzado el mínimo
  if (topPosition > minTop) {
    topPosition -= 1; // Mover hacia arriba (disminuir top en 1px)
    pliego1.style.top = `${topPosition}px`; // Actualizar la posición 'top'
  }
  document.getElementById('conteo-escuadra').textContent = `${topPosition.toFixed(1)}`}
);
document.getElementById('guia-8').addEventListener('click', () => {
  let computedStyles = window.getComputedStyle(pliego1);
  let topPosition = parseFloat(computedStyles.getPropertyValue('top')); // Convertir 'top' a número en píxeles 
  const containerHeight = pliego1.parentElement.clientHeight || window.innerHeight;
  const minTop = containerHeight * 0.05; // 5%
  const maxTop = containerHeight * 0.15; // 15%
  if (topPosition < maxTop) {
    topPosition += 1; // Mover hacia abajo (incrementar top en 1px)
    pliego1.style.top = `${topPosition}px`; // Actualizar la posición 'top'
  }
  document.getElementById('conteo-escuadra').textContent = `${topPosition.toFixed(1)}`
});
const reflejo = document.getElementById('reflejo');
let visible = true;
let intervaloId = null;
function balizaAlarma() {
  if (!intervaloId) {
    intervaloId = setInterval(() => {
      if (visible) {
        reflejo.style.boxShadow = 'none';
      } else {
        reflejo.style.display = 'flex'
        reflejo.style.boxShadow = '0 0 320px 160px rgba(255, 0, 0, 0.8)';
      }
      visible = !visible;
    }, 500);
  }
}
function detenerBaliza() {
  if (intervaloId) {
    clearInterval(intervaloId);
    intervaloId = null;
  }
  reflejo.style.display = 'none'
}
function resetRegistros() {
  pliego.style.top = '';
  pliego.style.left = '';
  pliego.style.zIndex = '';
  pliego.style.transform = '';
  document.getElementById('conteo-escuadra').textContent = ``
  document.getElementById('conteo-sup').textContent = ``
  document.getElementById('conteo-inf').textContent = ``;

  botonera.forEach(element => {
    element.style.backgroundColor = ''
  });
  
}
botonera.forEach(element => {
  element.addEventListener('click', () => {
    // Restablecer el color de todos los elementos al color por defecto
    botonera.forEach(el => {
      el.style.backgroundColor = ''; // Vuelve al color por defecto del CSS
    });

    // Cambiar el color del elemento que recibe el clic
    element.style.backgroundColor = 'rgb(0,200,255)'; // Color naranja
  });
});

// Incrementar la posición en Z solo cuando se haga clic en 'interfaz-perfiles'
interfazColor.addEventListener('click', (e) => {
  e.stopPropagation();   
  interfazColor.style.zIndex = 30;
});

// Evitar la propagación del clic en los elementos hijos
document.querySelectorAll('.cabeza').forEach(element => {
  element.addEventListener('click', (e) => {
    e.stopPropagation(); // Esto evita que el clic en '.cabeza' afecte al padre
  });
});
function crearLineaLeds(idLinea) {
  // Crear contenedor principal para la línea
  const lineaLeds = document.createElement('div');
  lineaLeds.id = `linea-${idLinea}`;
  lineaLeds.classList.add('linea-leds');
  // Crear regla de LEDs (divisiones numéricas del 24 al 1)
  const reglaLeds = document.createElement('div');
  reglaLeds.id = 'regla-leds';  
  for (let i = 24; i >= 1; i--) {
    const division = document.createElement('div');
    division.classList.add('division');
    division.textContent = i; // El número de la división
    reglaLeds.appendChild(division);
  }
  // Crear el display de LEDs (los LEDs visuales)
  const displayLeds = document.createElement('div');
  displayLeds.id = 'display-leds';  
  for (let i = 1; i <= 24; i++) {
    const led = document.createElement('div');
    led.classList.add('leds');
    displayLeds.appendChild(led);
  }
  // Crear el display de ajuste (otra fila de LEDs)
  const displayAjuste = document.createElement('div');
  displayAjuste.id = 'display-ajuste';  
  for (let i = 1; i <= 24; i++) {
    const led = document.createElement('div');
    led.classList.add('litle-leds');
    displayAjuste.appendChild(led);
  }
  // Añadir los tres bloques al contenedor de la línea
  lineaLeds.appendChild(reglaLeds);
  lineaLeds.appendChild(displayLeds);
  lineaLeds.appendChild(displayAjuste);
  // Devolver la línea completa
  return lineaLeds;
}
function crearVariasLineas(numeroDeLineas) {
  const contenedorPrincipal = document.getElementById('columna-70');

  for (let i = 1; i <= numeroDeLineas; i++) {
    const lineaLeds = crearLineaLeds(i);
    contenedorPrincipal.appendChild(lineaLeds);
  }
}
function crearBotoneraDinamica(color) {
  setTimeout(() => {
    eliminarBotonesSuma()
    eliminarBotonesResta()
  }, 20);
  setTimeout(() => {
    crearBotonSuma(color, 'linea', 'lineaSeguidor', 'lineaGrilla') 
    crearBotonResta(color, 'linea', 'lineaSeguidor', 'lineaGrilla')
  }, 40);
  setTimeout(() => {
    crearLedsSpan();
  }, 60);
  setTimeout(() => {
    renderizarPerfilesTinta(color)
  }, 80);
}
let almacenGlogal = [];
let flagNegro = false  
let flagCyan = false
let flagMagenta = false
let flagAmarillo = false
let flagEspecial = false
let flagBarniz = false
const estadoIntervaloSolucion = { intervalo: null };  
const estadoIntervaloTinta = { intervalo: null };
const estadoBalanceNegro = {
  indices: [], // Almacena los índices de los elementos coloreados de amarillo
  indicador: []
};
const estadoBalanceCyan = {
  indices: [],
  indicador: []
};
const estadoBalanceMagenta = {
  indices: [],
  indicador: []
};
const estadoBalanceAmarillo = {
  indices: [],
  indicador: []
};
const estadoBalanceEspecial = {
  indices: [],
  indicador: []
};
const estadoBalanceBarniz = {
  indices: [],
  indicador: []
};
const estadoTinta = {
  indices: []
}
const estadoSolucion = {
  indices: [],
  indicador: []
} 
// 🟢 Función para mostrar la alerta verde
const mostrarAlertaVerde = () => {
  darColorVerdeCabeza();
  alertaBotones.style.display = 'flex';
  alertaBotones.style.backgroundColor = verde;
  alertaBotones.style.color = 'black';
  alertaBotones.style.left = '21vw';
  setTimeout(() => {
    alertaBotones.style.backgroundColor = '';
    alertaBotones.style.color = '';
  }, 500);
};
// 🟢 Iniciar AUMENTAR tinta general
const iniciarMasTintaGeneral = () => {
  if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
    if (!flagNegro && !flagCyan && !flagMagenta && !flagAmarillo && !flagEspecial && !flagBarniz) {  
      mostrarAlertaVerde();
      desactivarClicEnElementos(botonesPerfilColor);
    }
  } else {
    mostrarAlertaVerde();
    desactivarClicEnElementos(botonesPerfilColor, buttsColores);
  }

  if (flagNegro) {
    aumentarBalanceTinta(estadoIntervaloTinta, '.lineas-tinta', '#footer-negro #footer-1 .divs-grales-tinta-negro', 'yellow', 'black', 'negro');
  }
  if (flagCyan) {
    aumentarBalanceTinta(estadoIntervaloTinta, '.lineas-tinta', '#footer-azul #footer-3 .divs-grales-tinta-azul', 'yellow', 'cyan', 'azul');
  }
  if (flagMagenta) {
    aumentarBalanceTinta(estadoIntervaloTinta, '.lineas-tinta', '#footer-magenta #footer-5 .divs-grales-tinta-magenta', 'yellow', 'magenta', 'magenta');
  }
  if (flagAmarillo) {
    aumentarBalanceTinta(estadoIntervaloTinta, '.lineas-tinta', '#footer-amarillo #footer-7 .divs-grales-tinta-amarillo', 'yellow', 'yellow', 'amarillo');
  }
  if (flagEspecial) {
    aumentarBalanceTinta(estadoIntervaloTinta, '.lineas-tinta', '#footer-especial #footer-9 .divs-grales-tinta-especial', 'yellow', 'rgb(255,130,0)', 'especial');
  }
  if (flagBarniz) {
    aumentarBalanceTinta(estadoIntervaloTinta, '.lineas-tinta', '#footer-barniz #footer-11 .divs-grales-tinta-barniz', 'yellow', 'rgb(200,200,200)', 'barniz');
  }

  masTintaGeneral.style.backgroundColor = '#2bf22bc0';
};
// 🔴 Detener AUMENTAR tinta general
const detenerMasTintaGeneral = () => {
  if (estadoIntervaloTinta.intervalo) {
    clearInterval(estadoIntervaloTinta.intervalo);
    estadoIntervaloTinta.intervalo = null;
  }
  masTintaGeneral.style.backgroundColor = '';
};

const aviso = document.querySelector('#span-index');
// 🟠 Iniciar DISMINUIR tinta general
const iniciarMenosTintaGeneral = () => {
  if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
    if (!flagNegro && !flagCyan && !flagMagenta && !flagAmarillo && !flagEspecial && !flagBarniz) {   
      mostrarAlertaVerde();
      desactivarClicEnElementos(botonesPerfilColor, botonesSelectores);
    }
  } else {
    mostrarAlertaVerde();
    desactivarClicEnElementos(botonesPerfilColor);
  }

  if (flagNegro) {
    disminuirBalanceTinta(estadoIntervaloTinta, '.lineas-tinta', '#footer-negro #footer-1 .divs-grales-tinta-negro', 'yellow', 'black', 'negro');
  }
  if (flagCyan) {
    disminuirBalanceTinta(estadoIntervaloTinta, '.lineas-tinta', '#footer-azul #footer-3 .divs-grales-tinta-azul', 'yellow', 'cyan', 'azul');
  }
  if (flagMagenta) {
    disminuirBalanceTinta(estadoIntervaloTinta, '.lineas-tinta', '#footer-magenta #footer-5 .divs-grales-tinta-magenta', 'yellow', 'magenta', 'magenta');
  }
  if (flagAmarillo) {
    disminuirBalanceTinta(estadoIntervaloTinta, '.lineas-tinta', '#footer-amarillo #footer-7 .divs-grales-tinta-amarillo', 'yellow', 'yellow', 'amarillo');
  }
  if (flagEspecial) {
    disminuirBalanceTinta(estadoIntervaloTinta, '.lineas-tinta', '#footer-especial #footer-9 .divs-grales-tinta-especial', 'yellow', 'orange', 'especial');
  }
  if (flagBarniz) {
    disminuirBalanceTinta(estadoIntervaloTinta, '.lineas-tinta', '#footer-barniz #footer-11 .divs-grales-tinta-barniz', 'yellow', 'gray', 'barniz');
  }

  menosTintaGeneral.style.backgroundColor = '#2bf22bc0';
};
// 🔴 Detener DISMINUIR tinta general
const detenerMenosTintaGeneral = () => {
  if (estadoIntervaloTinta.intervalo) {
    clearInterval(estadoIntervaloTinta.intervalo);
    estadoIntervaloTinta.intervalo = null;
  }
  menosTintaGeneral.style.backgroundColor = '';
};
// 🖱️ Eventos PC
masTintaGeneral.addEventListener('mousedown', iniciarMasTintaGeneral);
masTintaGeneral.addEventListener('mouseup', detenerMasTintaGeneral);
masTintaGeneral.addEventListener('mouseleave', () => { 
  if (aviso) aviso.style.display = 'none';
  detenerMasTintaGeneral(); 
  restablecerClick(['.cabeza']);
});
menosTintaGeneral.addEventListener('mousedown', iniciarMenosTintaGeneral);
menosTintaGeneral.addEventListener('mouseup', detenerMenosTintaGeneral);
menosTintaGeneral.addEventListener('mouseleave', () =>{
  if (aviso) aviso.style.display = 'none';
  detenerMenosTintaGeneral
} )
// 📱 Eventos táctiles
masTintaGeneral.addEventListener('touchstart', (e) => {
  e.preventDefault();
  iniciarMasTintaGeneral();
}, { passive: false });
masTintaGeneral.addEventListener('touchend', detenerMasTintaGeneral, { passive: true });
masTintaGeneral.addEventListener('touchcancel', detenerMasTintaGeneral, { passive: true });
menosTintaGeneral.addEventListener('touchstart', (e) => {
  e.preventDefault();
  iniciarMenosTintaGeneral();
}, { passive: false });
menosTintaGeneral.addEventListener('touchend', detenerMenosTintaGeneral, { passive: true });
menosTintaGeneral.addEventListener('touchcancel', detenerMenosTintaGeneral, { passive: true });

// 🟢 Iniciar AUMENTAR agua general
const iniciarMasSolucionGeneral = () => {
  if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
    if (!flagNegro && !flagCyan && !flagMagenta && !flagAmarillo && !flagEspecial && !flagBarniz) {
      mostrarAlertaVerde();
      desactivarClicEnElementos(botonesPerfilColor, buttsColores);
    }
  } else {
    mostrarAlertaVerde();
    desactivarClicEnElementos(botonesPerfilColor);
  }

  if (flagNegro) {
    aumentarBalanceSolucion(estadoIntervaloSolucion, '.lineas-solucion', '#footer-negro #footer-2 .divs-grales-solucion-negro', 'yellow', verdeAgua, 'negro', 'nivelAgua');
  }
  if (flagCyan) {
    aumentarBalanceSolucion(estadoIntervaloSolucion, '.lineas-solucion', '#footer-azul #footer-4 .divs-grales-solucion-azul', 'yellow', verdeAgua, 'azul', 'nivelAgua');
  }
  if (flagMagenta) {
    aumentarBalanceSolucion(estadoIntervaloSolucion, '.lineas-solucion', '#footer-magenta #footer-6 .divs-grales-solucion-magenta', 'yellow', verdeAgua, 'magenta', 'nivelAgua');
  }
  if (flagAmarillo) {
    aumentarBalanceSolucion(estadoIntervaloSolucion, '.lineas-solucion', '#footer-amarillo #footer-8 .divs-grales-solucion-amarillo', 'yellow', verdeAgua, 'amarillo', 'nivelAgua');
  }
  if (flagEspecial) {
    aumentarBalanceSolucion(estadoIntervaloSolucion, '.lineas-solucion', '#footer-especial #footer-10 .divs-grales-solucion-especial', 'yellow', verdeAgua, 'especial', 'nivelAgua');
  }
  if (flagBarniz) {
    aumentarBalanceSolucion(estadoIntervaloSolucion, '.lineas-solucion', '#footer-barniz #footer-12 .divs-grales-solucion-barniz', 'yellow', verdeAgua, 'barniz', 'nivelAgua');
  }

  masSolucionGeneral.style.backgroundColor = '#2bf22bc0';
};
// 🔴 Detener AUMENTAR agua general
const detenerMasSolucionGeneral = () => {
  if (estadoIntervaloSolucion.intervalo) {
    clearInterval(estadoIntervaloSolucion.intervalo);
    estadoIntervaloSolucion.intervalo = null;
  }
  masSolucionGeneral.style.backgroundColor = '';
};
// 🟠 Iniciar DISMINUIR agua general
const iniciarMenosSolucionGeneral = () => {
  if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
    if (!flagNegro && !flagCyan && !flagMagenta && !flagAmarillo && !flagEspecial && !flagBarniz) {
      mostrarAlertaVerde();
      desactivarClicEnElementos(botonesPerfilColor, buttsColores);
    }
  } else {
    mostrarAlertaVerde();
    desactivarClicEnElementos(botonesPerfilColor);
  }

  if (flagNegro) {
    reducirBalanceSolucion(estadoIntervaloSolucion, '.lineas-solucion', '#footer-negro #footer-2 .divs-grales-solucion-negro', 'yellow', verdeAgua, 'negro', 'nivelAgua');
  }
  if (flagCyan) {
    reducirBalanceSolucion(estadoIntervaloSolucion, '.lineas-solucion', '#footer-azul #footer-4 .divs-grales-solucion-azul', 'yellow', verdeAgua, 'azul', 'nivelAgua');
  }
  if (flagMagenta) {
    reducirBalanceSolucion(estadoIntervaloSolucion, '.lineas-solucion', '#footer-magenta #footer-6 .divs-grales-solucion-magenta', 'yellow', verdeAgua, 'magenta', 'nivelAgua');
  }
  if (flagAmarillo) {
    reducirBalanceSolucion(estadoIntervaloSolucion, '.lineas-solucion', '#footer-amarillo #footer-8 .divs-grales-solucion-amarillo', 'yellow', verdeAgua, 'amarillo', 'nivelAgua');
  }
  if (flagEspecial) {
    reducirBalanceSolucion(estadoIntervaloSolucion, '.lineas-solucion', '#footer-especial #footer-10 .divs-grales-solucion-especial', 'yellow', verdeAgua, 'especial', 'nivelAgua');
  }
  if (flagBarniz) {
    reducirBalanceSolucion(estadoIntervaloSolucion, '.lineas-solucion', '#footer-barniz #footer-12 .divs-grales-solucion-barniz', 'yellow', verdeAgua, 'barniz', 'nivelAgua');
  }

  menosSolucionGeneral.style.backgroundColor = 'rgb(0,255,0)';
};
// 🔴 Detener DISMINUIR agua general
const detenerMenosSolucionGeneral = () => {
  if (estadoIntervaloSolucion.intervalo) {
    clearInterval(estadoIntervaloSolucion.intervalo);
    estadoIntervaloSolucion.intervalo = null;
  }
  menosSolucionGeneral.style.backgroundColor = '';
};
// 🖱️ Eventos PC
masSolucionGeneral.addEventListener('mousedown', iniciarMasSolucionGeneral);
masSolucionGeneral.addEventListener('mouseup', detenerMasSolucionGeneral);
masSolucionGeneral.addEventListener('mouseleave',() =>{
  if (aviso) aviso.style.display = 'none';
 detenerMasSolucionGeneral
});
menosSolucionGeneral.addEventListener('mousedown', iniciarMenosSolucionGeneral);
menosSolucionGeneral.addEventListener('mouseup', detenerMenosSolucionGeneral);
menosSolucionGeneral.addEventListener('mouseleave',() =>{
 if (aviso) aviso.style.display = 'none';
 detenerMenosSolucionGeneral  
});
// 📱 Eventos táctiles
masSolucionGeneral.addEventListener('touchstart', (e) => {
  e.preventDefault();
  iniciarMasSolucionGeneral();
}, { passive: false });
masSolucionGeneral.addEventListener('touchend', detenerMasSolucionGeneral, { passive: true });
masSolucionGeneral.addEventListener('touchcancel', detenerMasSolucionGeneral, { passive: true });
menosSolucionGeneral.addEventListener('touchstart', (e) => {
  e.preventDefault();
  iniciarMenosSolucionGeneral();
}, { passive: false });

menosSolucionGeneral.addEventListener('touchend', detenerMenosSolucionGeneral, { passive: true });
menosSolucionGeneral.addEventListener('touchcancel', detenerMenosSolucionGeneral, { passive: true });
alertaBotones.addEventListener('click', () =>{
  document.querySelectorAll('.cliente-item').forEach(item => {
    item.style.filter = 'none';
  });
  reactivarClicEnElementos(botonesPerfilColor,buttsColores, buttsControl,buttsGenerales,botonesSelectores,buttsJobTrack);
  alertaBotones.classList.add('move-alerta')
  setTimeout(() => {
    alertaBotones.style.display='none'
    alertaBotones.classList.remove('move-alerta')
  }, 1000);   
})
alertaPerfil.addEventListener('click', () =>{
  reactivarClicEnElementos(botonesPerfilColor,buttsColores,buttsGenerales,botonesSelectores,buttsControl); 
  alertaPerfil.classList.add('move-alerta-perfil')
  setTimeout(() => {
    alertaPerfil.style.display='none'
    alertaPerfil.classList.remove('move-alerta-perfil')
  }, 1000);   
})
let contadorTinta = document.getElementById('tinta-perc')
let tanqueTinta = document.getElementById('tanque-tinta')
const masTinta = document.querySelector('#ctrl-gral > div:nth-of-type(5)')
const menosTinta = document.querySelector('#ctrl-gral > div:nth-of-type(7)')
let contadorSolucion = document.getElementById('solucion-porcentaje')
let tanqueSolucion = document.getElementById('tanque-solucion')
let lineasSolucion = document.querySelectorAll('.lineas-solucion')
const masSolucion = document.querySelector('#ctrl-gral > div:nth-of-type(6)')
const menosSolucion = document.querySelector('#ctrl-gral > div:nth-of-type(8)')
function AelementosDinamicamente(contPadre, numeroDeLineas, classElto, startNumber = null) {
  const contenedorPrincipal = document.getElementById(contPadre);
  contenedorPrincipal.innerHTML = '';
  let numeroConsecutivo = startNumber !== null ? startNumber : null;

  for (let i = 1; i <= numeroDeLineas; i++) {
    const lineaLeds = document.createElement('div'); 
    lineaLeds.classList.add(classElto);
    lineaLeds.classList.add('lineas-tinta')
    if (numeroConsecutivo !== null) {
      lineaLeds.textContent = numeroConsecutivo;
      numeroConsecutivo++;
    }
    contenedorPrincipal.appendChild(lineaLeds); 
  }
}
let actualIndexSolucion = 99;  
let actualIndexTinta = 99
let intervaloTinta = null;
const iniciarMasTinta = () => {
  if (objetoGlobal && Object.keys(objetoGlobal).length > 0) { 
    if (!flagNegro && !flagCyan && !flagMagenta && !flagAmarillo && !flagEspecial && !flagBarniz) {   
      darColorVerdeCabeza();
      alertaBotones.style.display = 'flex';
      alertaBotones.style.backgroundColor = verde;
      alertaBotones.style.color = 'black';
      alertaBotones.style.top = '25vh';
      alertaBotones.style.left = '21vw';
      setTimeout(() => {
        alertaBotones.style.backgroundColor = '';
        alertaBotones.style.color = '';
      }, 500);
      desactivarClicEnElementos(botonesPerfilColor, botonesSelectores);
    }
  } else {
    darColorVerdeCabeza();
    alertaBotones.style.display = 'flex';
    alertaBotones.style.backgroundColor = verde;
    alertaBotones.style.color = 'black';
    alertaBotones.style.top = '25vh';
    alertaBotones.style.left = '21vw';
    setTimeout(() => {
      alertaBotones.style.backgroundColor = '';
      alertaBotones.style.color = '';
    }, 500);
    desactivarClicEnElementos(botonesPerfilColor, botonesSelectores);
  }

  if (flagNegro) {
    aumentarBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-negro #footer-1 .divs-grales-tinta-negro',
      'yellow',
      'black',
      'negro'
    );
  }
  if (flagCyan) {
    aumentarBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-azul #footer-3 .divs-grales-tinta-azul',
      'yellow',
      'cyan',
      'azul',
    );
  }
  if (flagMagenta) {
    aumentarBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-magenta #footer-5 .divs-grales-tinta-magenta',
      'yellow',
      'magenta',
      'magenta'
    );
  }
  if (flagAmarillo) {
    aumentarBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-amarillo #footer-7 .divs-grales-tinta-amarillo',
      'yellow',
      'yellow',
      'amarillo',
    );
  }
  if (flagEspecial) {
    aumentarBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-especial #footer-9 .divs-grales-tinta-especial',
      'yellow',
      'rgb(255,130,0)',
      'especial',
    );
  }
  if (flagBarniz) {
    aumentarBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-barniz #footer-11 .divs-grales-tinta-barniz',
      'yellow',
      'rgb(200,200,200)',
      'barniz',
    );
  }

  masTinta.style.backgroundColor = '#2bf22bc0';
};
// 🟡 Evento estándar para PC
masTinta.addEventListener('mousedown', iniciarMasTinta);
// 🟡 Nuevo: soporte táctil para móviles
masTinta.addEventListener('touchstart', (e) => {
  e.preventDefault(); // evita que interprete el toque como scroll o selección
  iniciarMasTinta();
}, { passive: false });
const detenerMasTinta = () => {
  if (estadoIntervaloTinta.intervalo) {
    clearInterval(estadoIntervaloTinta.intervalo);
    estadoIntervaloTinta.intervalo = null;
  }
  masTinta.style.backgroundColor = '';
};
// 🖱️ PC
masTinta.addEventListener('mouseup', detenerMasTinta);
masTinta.addEventListener('mouseleave', detenerMasTinta);
// 📱 Táctil
masTinta.addEventListener('touchend', detenerMasTinta, { passive: true });
masTinta.addEventListener('touchcancel', detenerMasTinta, { passive: true });

const iniciarMenosTinta = () => {
  if (objetoGlobal && Object.keys(objetoGlobal).length > 0) { 
    if (!flagNegro && !flagCyan && !flagMagenta && !flagAmarillo && !flagEspecial && !flagBarniz) {   
      darColorVerdeCabeza();
      alertaBotones.style.display = 'flex';
      alertaBotones.style.backgroundColor = verde;
      alertaBotones.style.color = 'black';
      alertaBotones.style.top = '25vh';
      alertaBotones.style.left = '21vw';
      setTimeout(() => {
        alertaBotones.style.backgroundColor = ''; 
        alertaBotones.style.color = '';  
      }, 500);
      desactivarClicEnElementos(botonesPerfilColor, botonesSelectores);
    }
  } else {
    darColorVerdeCabeza();
    alertaBotones.style.display = 'flex';
    alertaBotones.style.backgroundColor = verde;
    alertaBotones.style.color = 'black';
    alertaBotones.style.top = '25vh';
    alertaBotones.style.left = '21vw';
    setTimeout(() => {
      alertaBotones.style.backgroundColor = ''; 
      alertaBotones.style.color = '';  
    }, 500);
    desactivarClicEnElementos(botonesPerfilColor, botonesSelectores);
  }

  if (flagNegro) {
    disminuirBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-negro #footer-1 .divs-grales-tinta-negro',
      'yellow',
      'black',
      'negro'
    );
  }
  if (flagCyan) {
    disminuirBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-azul #footer-3 .divs-grales-tinta-azul',
      'yellow',
      'cyan',
      'azul'
    );
  }
  if (flagMagenta) {
    disminuirBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-magenta #footer-5 .divs-grales-tinta-magenta',
      'yellow',
      'magenta',
      'magenta'
    );
  }
  if (flagAmarillo) {
    disminuirBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-amarillo #footer-7 .divs-grales-tinta-amarillo',
      'yellow',
      'amarillo',
      'amarillo'
    );
  }
  if (flagEspecial) {
    disminuirBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-especial #footer-9 .divs-grales-tinta-especial',
      'yellow',
      'especial',
      'especial'
    );
  }
  if (flagBarniz) {
    disminuirBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-barniz #footer-11 .divs-grales-tinta-barniz',
      'yellow',
      'gray',
      'barniz'
    );
  }

  menosTinta.style.backgroundColor = 'rgb(0,255,0)';
};
const detenerMenosTinta = () => {
  if (estadoIntervaloTinta.intervalo) {
    clearInterval(estadoIntervaloTinta.intervalo);
    estadoIntervaloTinta.intervalo = null;
  }
  menosTinta.style.backgroundColor = ''; 
};
// 🖱️ PC
menosTinta.addEventListener('mousedown', iniciarMenosTinta);
menosTinta.addEventListener('mouseup', detenerMenosTinta);
menosTinta.addEventListener('mouseleave', detenerMenosTinta);
// 📱 Táctil
menosTinta.addEventListener('touchstart', (e) => {
  e.preventDefault(); // evita scroll accidental
  iniciarMenosTinta();
}, { passive: false });
menosTinta.addEventListener('touchend', detenerMenosTinta, { passive: true });
menosTinta.addEventListener('touchcancel', detenerMenosTinta, { passive: true });




let intervaloTintaNegro = null
let intervaloTintaCyan = null
let intervaloTintaMagenta = null
let intervaloTintaAmarillo = null
let intervaloTintaEspecial = null
let intervaloTintaBarniz = null
let intervaloSolucionNegro = null
let intervaloSolucionCyan = null 
let intervaloSolucionMagenta = null 
let intervaloSolucionAmarillo = null
let intervaloSolucionEspecial = null
let intervaloSolucionBarniz = null
function reducirBalanceSolucion(estado, lineasSelector, footerSelector, colorTinta, colorAgua, gama) {
  const lineasTinta = document.querySelectorAll(lineasSelector);
  const lineasGrales = document.querySelectorAll(footerSelector);   
  const totalElementos = lineasTinta.length;
  let displays = document.querySelector('#ctrl-gral .div-ctrl #solucion-porcentaje');
  let displayGeneral = document.querySelector(`#display-general-${gama}`)
  
  if (flagNegro) {  
    traerObjetoNegro();
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelAgua.length;
      if (actualIndex < 0) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = '';
        lineaGral.style.backgroundColor = '';
        almacenObjetos[objetoGlobal][gama].nivelAgua.pop();
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%';
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = (actualIndex - 14) + '%'
        guardarObjetoNegro(objetoNegro);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
  if (flagCyan) {
    traerObjetoCian(); // Sincroniza el objetoNegro
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelAgua.length;
      if (actualIndex < 0) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = '';
        lineaGral.style.backgroundColor = '';        
        almacenObjetos[objetoGlobal][gama].nivelAgua.pop();
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%';        
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = (actualIndex - 14) + '%'
        guardarObjetoCian(objetoCian);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
  if (flagMagenta) {
    traerObjetoMagenta(); // Sincroniza el objetoNegro
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelAgua.length;
      if (actualIndex < 0) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = '';
        lineaGral.style.backgroundColor = '';        
        almacenObjetos[objetoGlobal][gama].nivelAgua.pop();
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%';        
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = (actualIndex - 14) + '%'
        guardarobjetoMagenta(objetoMagenta);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
  if (flagAmarillo) {
    traerObjetoAmarillo(); // Sincroniza el objetoNegro
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelAgua.length;
      if (actualIndex < 0) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = '';
        lineaGral.style.backgroundColor = '';        
        almacenObjetos[objetoGlobal][gama].nivelAgua.pop();
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%';        
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = (actualIndex - 14) + '%'
        guardarObjetoAmarillo(objetoAmarillo);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
  if (flagEspecial) {
    traerObjetoEspecial(); // Sincroniza el objetoNegro
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelAgua.length;
      if (actualIndex < 0) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = '';
        lineaGral.style.backgroundColor = '';        
        almacenObjetos[objetoGlobal][gama].nivelAgua.pop();
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%';        
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = (actualIndex - 14) + '%'
        guardarObjetoEspecial(objetoEspecial);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
  if (flagBarniz) {
    traerObjetoBarniz(); // Sincroniza el objetoNegro
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelAgua.length;
      if (actualIndex < 0) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = '';
        lineaGral.style.backgroundColor = '';        
        almacenObjetos[objetoGlobal][gama].nivelAgua.pop();
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%';        
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = (actualIndex - 14) + '%'
        guardarObjetoBarniz(objetoBarniz);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
}
function aumentarBalanceSolucion(estado, lineasSelector, footerSelector, colorTinta, colorAgua,gama, aquaLevel) {
  const lineasTinta = document.querySelectorAll(lineasSelector);
  const lineasGrales = document.querySelectorAll(footerSelector)
  const totalElementos = lineasTinta.length;
  let displays = document.querySelector('#ctrl-gral .div-ctrl #solucion-porcentaje') 
  let displayGeneral = document.querySelector(`#display-general-${gama}`)

  if(flagNegro){
    traerObjetoNegro(); // Sincroniza el objetoNegro
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelAgua.length - 1; 
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex]
      if (lineaActual) {
        lineaActual.style.backgroundColor = colorTinta;
        lineaGral.style.backgroundColor = colorAgua;
        almacenObjetos[objetoGlobal][gama].nivelAgua.push(actualIndex)
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%';
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = (actualIndex - 14) + '%'
        guardarObjetoNegro(objetoNegro);
        guardarCambiosGeneralesEnAlmacen()
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
  if(flagCyan){
    traerObjetoCian(); // Sincroniza el objetoNegro
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelAgua.length - 1;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex]
      if (lineaActual) {
        lineaActual.style.backgroundColor = colorTinta;
        lineaGral.style.backgroundColor = colorAgua;
        almacenObjetos[objetoGlobal][gama].nivelAgua.push(actualIndex)
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'; 
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = actualIndex + '%'
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = (actualIndex - 14) + '%'
        guardarObjetoCian(objetoCian);
        guardarCambiosGeneralesEnAlmacen()
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);

  }
  if (flagAmarillo) {
    traerObjetoAmarillo(); // Sincroniza el objetoAmarillo
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelAgua.length - 1;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        console.log("Proceso completado.");
        return;
      }  
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];  
      if (lineaActual) {
        lineaActual.style.backgroundColor = colorTinta;
        lineaGral.style.backgroundColor = colorAgua;
        almacenObjetos[objetoGlobal][gama].nivelAgua.push(actualIndex)
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%';
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = actualIndex + '%'
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = (actualIndex - 14) + '%'
        guardarObjetoAmarillo(objetoAmarillo);
        guardarCambiosGeneralesEnAlmacen()
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }  
  if (flagMagenta) {
    traerObjetoMagenta(); // Sincroniza el objetoMagenta
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelAgua.length - 1;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }  
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];  
      if (lineaActual) {
        lineaActual.style.backgroundColor = colorTinta;
        lineaGral.style.backgroundColor = colorAgua;
        almacenObjetos[objetoGlobal][gama].nivelAgua.push(actualIndex)
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%';
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = actualIndex + '%'
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = (actualIndex - 14) + '%'
        guardarobjetoMagenta(objetoMagenta);
        guardarCambiosGeneralesEnAlmacen()
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }  
  if (flagEspecial) {
    traerObjetoEspecial(); // Sincroniza el objetoEspecial
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelAgua.length - 1;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        console.log("Proceso completado.");
        return;
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = colorTinta;
        lineaGral.style.backgroundColor = colorAgua;
        almacenObjetos[objetoGlobal][gama].nivelAgua.push(actualIndex)
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%';
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = actualIndex + '%'
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = (actualIndex - 14) + '%'
        guardarObjetoEspecial(objetoEspecial);
        guardarCambiosGeneralesEnAlmacen()
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }  
  if (flagBarniz) {
    traerObjetoBarniz(); // Sincroniza el objetoBarniz
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelAgua.length - 1;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        console.log("Proceso completado.");
        return;
      }  
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = colorTinta;
        lineaGral.style.backgroundColor = colorAgua;
        almacenObjetos[objetoGlobal][gama].nivelAgua.push(actualIndex)
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%';
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = actualIndex + '%'
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = (actualIndex - 14) + '%'
        guardarObjetoBarniz(objetoBarniz);
        guardarCambiosGeneralesEnAlmacen()
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
}
function aumentarBalanceTinta(estado, lineasSelector, footerSelector, colorTinta, colorAgua, gama) { 
  const lineasTinta = document.querySelectorAll(lineasSelector);
  const lineasGrales = document.querySelectorAll(footerSelector);
  const totalElementos = lineasTinta.length;
  let displays = document.querySelector('#ctrl-gral .div-ctrl #tinta-perc');
  let displayGral = document.querySelector(`#gral-display-${gama}`);

  if (flagNegro) {
    traerObjetoNegro();
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelTinta.length - 1;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }      
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = colorTinta;
        lineaGral.style.backgroundColor = colorAgua;
        almacenObjetos[objetoGlobal][gama].nivelTinta.push(actualIndex);
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.style.top = (actualIndex - 14) + '%'
        guardarObjetoNegro(objetoNegro);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
  if (flagCyan) {
    traerObjetoCian(); // Sincroniza el objetoCian
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelTinta.length - 1;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;s
      }      
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = colorTinta; // Aplicar color de tinta
        lineaGral.style.backgroundColor = azul;   // Aplicar color general
        almacenObjetos[objetoGlobal][gama].nivelTinta.push(actualIndex)
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.style.top = (actualIndex - 14) + '%'
        guardarObjetoCian(objetoCian);
        guardarCambiosGeneralesEnAlmacen()
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }  
  if (flagAmarillo) {
    traerObjetoAmarillo(); // Sincroniza el objetoAmarillo
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelTinta.length - 1;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = colorTinta; // Aplicar color de tinta
        lineaGral.style.backgroundColor = colorAgua;   // Aplicar color general
        almacenObjetos[objetoGlobal][gama].nivelTinta.push(actualIndex)    
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.style.top = (actualIndex - 14) + '%'
        guardarObjetoAmarillo(objetoAmarillo);
        guardarCambiosGeneralesEnAlmacen()
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }  
  if (flagMagenta) {
    traerObjetoMagenta(); // Sincroniza el objetoMagenta
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelTinta.length - 1;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;s
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = colorTinta; // Aplicar color de tinta
        lineaGral.style.backgroundColor = colorAgua;   // Aplicar color general
        almacenObjetos[objetoGlobal][gama].nivelTinta.push(actualIndex)    
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.style.top = (actualIndex - 14) + '%'
        guardarobjetoMagenta(objetoMagenta);
        guardarCambiosGeneralesEnAlmacen()
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }  
  if (flagEspecial) {
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelTinta.length - 1;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = colorTinta; // Aplicar color de tinta
        lineaGral.style.backgroundColor = colorAgua;   // Aplicar color general
        almacenObjetos[objetoGlobal][gama].nivelTinta.push(actualIndex)    
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.style.top = (actualIndex - 14) + '%'
        guardarObjetoEspecial(objetoEspecial);
        guardarCambiosGeneralesEnAlmacen()
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }  
  if (flagBarniz) {
    traerObjetoBarniz(); // Sincroniza el objetoBarniz
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelTinta.length - 1;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;s
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = colorTinta; // Aplicar color de tinta
        lineaGral.style.backgroundColor = colorAgua;   // Aplicar color general
        almacenObjetos[objetoGlobal][gama].nivelTinta.push(actualIndex)    
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.style.top = (actualIndex - 14) + '%'
        guardarObjetoBarniz(objetoBarniz);
        guardarCambiosGeneralesEnAlmacen()
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
}
function disminuirBalanceTinta(estado, lineasSelector, footerSelector, uno, dos, gama) {
  const lineasTinta = document.querySelectorAll(lineasSelector);
  const lineasGrales = document.querySelectorAll(footerSelector);
  const totalElementos = lineasTinta.length;
  let displays = document.querySelector('#ctrl-gral .div-ctrl #tinta-perc');  
  let displayGral = document.querySelector(`#gral-display-${gama}`);

  if (flagNegro) {
    traerObjetoNegro();
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelTinta.length;
      if (actualIndex < 0 || actualIndex >= totalElementos) {   
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }      
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = '';
        lineaGral.style.backgroundColor = '';
        almacenObjetos[objetoGlobal][gama].nivelTinta.pop();
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.style.top = (actualIndex - 14) + '%'
        guardarObjetoNegro(objetoNegro);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }  
  if (flagCyan) {
    traerObjetoCian(); // Sincroniza el objetoNegro
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelTinta.length;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }      
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = ''; // Eliminar color de tinta
        lineaGral.style.backgroundColor = '';  // Eliminar color general
        almacenObjetos[objetoGlobal][gama].nivelTinta.pop(); // Elimina el índice del arreglo
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.style.top = (actualIndex - 14) + '%'
        guardarObjetoCian(objetoCian);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);

  }
  if (flagMagenta) {
    traerObjetoMagenta(); // Sincroniza el objetoNegro
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelTinta.length;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }      
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = ''; // Eliminar color de tinta
        lineaGral.style.backgroundColor = '';  // Eliminar color general
        almacenObjetos[objetoGlobal][gama].nivelTinta.pop(); // Elimina el índice del arreglo
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.style.top = (actualIndex - 14) + '%'
        guardarobjetoMagenta(objetoMagenta);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
  if (flagAmarillo) {
    traerObjetoAmarillo(); // Sincroniza el objetoNegro
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelTinta.length;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }      
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = ''; // Eliminar color de tinta
        lineaGral.style.backgroundColor = '';  // Eliminar color general
        almacenObjetos[objetoGlobal][gama].nivelTinta.pop(); // Elimina el índice del arreglo
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.style.top = (actualIndex - 14) + '%'
        guardarObjetoAmarillo(objetoAmarillo);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  } 
  if (flagEspecial) {
    traerObjetoEspecial(); // Sincroniza el objetoNegro
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelTinta.length;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }      
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = ''; // Eliminar color de tinta
        lineaGral.style.backgroundColor = '';  // Eliminar color general
        almacenObjetos[objetoGlobal][gama].nivelTinta.pop(); // Elimina el índice del arreglo
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.style.top = (actualIndex - 14) + '%'
        guardarObjetoEspecial(objetoEspecial);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
  if (flagBarniz) {
    traerObjetoBarniz(); // Sincroniza el objetoNegro
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelTinta.length;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }      
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = ''; // Eliminar color de tinta
        lineaGral.style.backgroundColor = '';  // Eliminar color general
        almacenObjetos[objetoGlobal][gama].nivelTinta.pop(); // Elimina el índice del arreglo
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.style.top = (actualIndex - 14) + '%'
        guardarObjetoBarniz(objetoBarniz);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
}

function darColorVerdeCabeza() {
  const elementosCabeza = document.querySelectorAll('.cabeza');
  let index = 0;
  const gris = '#A9B0B8';
  const noire = 'black';


  const intervaloAplicarColor = setInterval(() => {
    if (index >= elementosCabeza.length) {
      clearInterval(intervaloAplicarColor);
      setTimeout(() => {
        let eliminarIndex = elementosCabeza.length - 1;
        const intervaloEliminarColor = setInterval(() => {
          if (eliminarIndex >= 0) {
            elementosCabeza[eliminarIndex].style.backgroundColor = '';  
            eliminarIndex--;
          } else {
            clearInterval(intervaloEliminarColor);
          }
        }, 17);
      }, 300);
    } else {
      elementosCabeza[index].style.backgroundColor = gris;
      elementosCabeza[index].style.color = noire;
      index++;
    }
  }, 17);
}

let indexSolucion = 99;
let intervaloSolucion = null; 
const controlSolucion = [];   
let intervaloMasSolucion = null;
let intervaloMasTinta = null;
let intervaloMenosSolucion = null;
let indexAumento = 0
const lineasTinta = document.querySelectorAll('.lineas-tinta');
const contenedor = document.getElementById('butts-selectores');


// 🔸 Se agrupa la lógica de inicio en una función reutilizable
const iniciarMasSolucion = () => {
  if (objetoGlobal && Object.keys(objetoGlobal).length > 0) { 
    if (!flagNegro && !flagCyan && !flagMagenta && !flagAmarillo && !flagEspecial && !flagBarniz) {   
      darColorVerdeCabeza();
      alertaBotones.style.display = 'flex';
      alertaBotones.style.backgroundColor = verde;
      alertaBotones.style.color = 'black';
      alertaBotones.style.top = '25vh';
      alertaBotones.style.left = '21vw';
      setTimeout(() => {
        alertaBotones.style.backgroundColor = ''; 
        alertaBotones.style.color = '';  
      }, 500);
      desactivarClicEnElementos(botonesPerfilColor, botonesSelectores);
    }
  } else {
    darColorVerdeCabeza();
    alertaBotones.style.display = 'flex';
    alertaBotones.style.backgroundColor = verde;
    alertaBotones.style.color = 'black';
    alertaBotones.style.top = '25vh';
    alertaBotones.style.left = '21vw';
    setTimeout(() => {
      alertaBotones.style.backgroundColor = ''; 
      alertaBotones.style.color = '';  
    }, 500);
    desactivarClicEnElementos(botonesPerfilColor, botonesSelectores);
  }  

  if (flagNegro) {
    aumentarBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-negro #footer-2 .divs-grales-solucion-negro',   
      'yellow',
      verdeAgua,
      'negro',
      'nivelAgua',
    );    
  }
  if (flagCyan) {
    aumentarBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-azul #footer-4 .divs-grales-solucion-azul',
      'yellow',
      verdeAgua,
      'azul',
      'nivelAgua',
    );    
  }
  if (flagMagenta) {
    aumentarBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-magenta #footer-6 .divs-grales-solucion-magenta',
      'yellow',
      verdeAgua,
      'magenta',
      'nivelAgua',
    );    
  }
  if (flagAmarillo) {
    aumentarBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-amarillo #footer-8 .divs-grales-solucion-amarillo',
      'yellow',
      verdeAgua,
      'amarillo'
    );    
  }
  if (flagEspecial) {
    aumentarBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-especial #footer-10 .divs-grales-solucion-especial',
      'yellow',
      verdeAgua,
      'especial'
    );    
  }
  if (flagBarniz) {
    aumentarBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-barniz #footer-12 .divs-grales-solucion-barniz',
      'yellow',
      verdeAgua,
      'barniz'
    );    
  }

  masSolucion.style.backgroundColor = '#2bf22bc0';
};
// 🔸 Se agrupa la lógica de detención en otra función reutilizable
const detenerMasSolucion = () => {
  if (estadoIntervaloSolucion.intervalo) {
    clearInterval(estadoIntervaloSolucion.intervalo);
    estadoIntervaloSolucion.intervalo = null;
  }
  masSolucion.style.backgroundColor = '';
};
// 🖱️ PC
masSolucion.addEventListener('mousedown', iniciarMasSolucion);
masSolucion.addEventListener('mouseup', detenerMasSolucion);
masSolucion.addEventListener('mouseleave', detenerMasSolucion);
// 📱 Táctil
masSolucion.addEventListener('touchstart', (e) => {
  e.preventDefault(); // evita scroll accidental en móviles
  iniciarMasSolucion();
}, { passive: false });
masSolucion.addEventListener('touchend', detenerMasSolucion, { passive: true });
masSolucion.addEventListener('touchcancel', detenerMasSolucion, { passive: true });



// 🔸 Se agrupa la lógica de inicio en una función reutilizable
const iniciarMenosSolucion = () => {
  if (objetoGlobal && Object.keys(objetoGlobal).length > 0) { 
    if (!flagNegro && !flagCyan && !flagMagenta && !flagAmarillo && !flagEspecial && !flagBarniz) {   
      darColorVerdeCabeza();
      alertaBotones.style.display = 'flex';
      alertaBotones.style.backgroundColor = verde;
      alertaBotones.style.color = 'black';
      setTimeout(() => {
        alertaBotones.style.backgroundColor = '';
        alertaBotones.style.color = '';  
      }, 500);
      desactivarClicEnElementos(botonesPerfilColor, botonesSelectores);
    }
  } else {
    darColorVerdeCabeza();
    alertaBotones.style.display = 'flex';
    alertaBotones.style.backgroundColor = verde;
    alertaBotones.style.color = 'black';
    alertaBotones.style.top = '25vh';
    alertaBotones.style.left = '21vw';
    setTimeout(() => {
      alertaBotones.style.backgroundColor = ''; 
      alertaBotones.style.color = '';  
    }, 500);
    desactivarClicEnElementos(botonesPerfilColor, botonesSelectores);
  }  

  if (flagNegro) {
    reducirBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-negro #footer-2 .divs-grales-solucion-negro',
      'yellow', 
      verdeAgua,
      'negro',
    );
  }
  if (flagCyan) {
    reducirBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-azul #footer-4 .divs-grales-solucion-azul',
      'yellow',
      verdeAgua,
      'azul'
    );
  }
  if (flagMagenta) {
    reducirBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-magenta #footer-6 .divs-grales-solucion-magenta',
      'yellow',
      verdeAgua,
      'magenta',
    );
  }
  if (flagAmarillo) {
    reducirBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-amarillo #footer-8 .divs-grales-solucion-amarillo',
      'yellow',
      verdeAgua,
      'amarillo',
    );
  }
  if (flagEspecial) {
    reducirBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-especial #footer-10 .divs-grales-solucion-especial',
      'yellow',
      verdeAgua,
      'especial'
    );
  }
  if (flagBarniz) {
    reducirBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-barniz #footer-12 .divs-grales-solucion-barniz',
      'yellow',
      verdeAgua,
      'barniz',
    );
  }

  menosSolucion.style.backgroundColor = 'rgb(0,255,0)';
};
// 🔸 Se agrupa la lógica de detención en otra función reutilizable
const detenerMenosSolucion = () => {
  if (estadoIntervaloSolucion.intervalo) {
    clearInterval(estadoIntervaloSolucion.intervalo);
    estadoIntervaloSolucion.intervalo = null;
  }
  menosSolucion.style.backgroundColor = '';
};
// 🖱️ PC
menosSolucion.addEventListener('mousedown', iniciarMenosSolucion);
menosSolucion.addEventListener('mouseup', detenerMenosSolucion);
menosSolucion.addEventListener('mouseleave', detenerMenosSolucion);
// 📱 Táctil
menosSolucion.addEventListener('touchstart', (e) => {
  e.preventDefault(); // evita scroll accidental
  iniciarMenosSolucion();
}, { passive: false });
menosSolucion.addEventListener('touchend', detenerMenosSolucion, { passive: true });
menosSolucion.addEventListener('touchcancel', detenerMenosSolucion, { passive: true });



let almacenSolucionNegro = []  
let almacenSolucionCyan = []
let almacenSolucionMagenta = []
let almacenSolucionAmarillo = []
let almacenSolucionEspecial = []
let almacenSolucionBarniz = []
let almacenTintaNegro = []
let almacenTintaCyan = []
let almacenTintaMagenta = []
let almacenTintaAmarillo = []  
let almacenTintaEspecial = []
let almacenTintaBarniz = []
// Objetos que contienen las banderas y los estados correspondientes
const flags = {
  negro: flagNegro,
  cyan: flagCyan,
  magenta: flagMagenta,
  amarillo: flagAmarillo,
  epecial: flagEspecial,
  barniz: flagBarniz
};
const estadosBalance = {
  negro: estadoBalanceNegro,
  cyan: estadoBalanceCyan,
  magenta: estadoBalanceMagenta,
  amarillo: estadoBalanceAmarillo,
  especial: estadoBalanceEspecial,
  barniz: estadoBalanceBarniz
};
function aplicarColor(estadoObjeto, claseElemento) {
  const displaySolucion = document.getElementById('solucion-porcentaje')
  const displayTinta = document.getElementById('tinta-perc')
  const lineasTinta = document.querySelectorAll('.lineas-tinta');
  displaySolucion.textContent = 0 + '%'
  displayTinta.textContent = 0 + '%'
  lineasTinta.forEach(linea => {
    linea.style.backgroundColor = '';
  });
  if(flagNegro){
    const nivelTintaGral = document.querySelectorAll('#footer-negro #footer-1 .divs-grales-tinta-negro'); 
    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelSolucionGral = document.querySelectorAll('#footer-negro #footer-2 .divs-grales-solucion-negro')
    const nivelSolucion = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const displaySolucion = document.getElementById('solucion-porcentaje')
    const iteraciones = objetoNegro.nivelTinta.length;
    const iterAgua = objetoNegro.nivelAgua.length;
    // 4. Crear un bucle para recorrer los elementos desde el último hacia el primero 
    const elementosTinta = nivelTinta.length;
    for (let i = 0; i < iteraciones; i++) {
      const indice = elementosTinta - 1 - i; // Índice del elemento desde el final
      if (nivelTinta[indice]) { // Verificar que el elemento exista
        nivelTinta[indice].style.backgroundColor = amarillo; // Aplicar color
        nivelTintaGral[indice].style.backgroundColor = negro;
        displayTinta.textContent = iteraciones + '%';
      }
    }
    const elementosAgua = nivelSolucion.length;
    for (let i = 0; i < iterAgua; i++) {
      const indice = elementosAgua - 1 - i; // Índice del elemento desde el final
      if (nivelSolucion[indice]) { // Verificar que el elemento exista
        nivelSolucion[indice].style.backgroundColor = amarillo;
        nivelSolucionGral[indice].style.backgroundColor = verdeAgua;
        displaySolucion.textContent = iterAgua + '%';
      }
    }
  
  }
  if(flagCyan){
    const nivelTintaGral = document.querySelectorAll('#footer-azul #footer-3 .divs-grales-tinta-azul'); 
    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelSolucionGral = document.querySelectorAll('#footer-azul #footer-4 .divs-grales-solucion-azul')
    const nivelSolucion = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const displayTinta = document.getElementById('tinta-perc')
    const displaySolucion = document.getElementById('solucion-porcentaje')
    const iteraciones = objetoCian.nivelTinta.length;
    const iterAgua = objetoCian.nivelAgua.length;
    // 4. Crear un bucle para recorrer los elementos desde el último hacia el primero 
    const elementosTinta = nivelTinta.length;
    for (let i = 0; i < iteraciones; i++) {
      const indice = elementosTinta - 1 - i; // Índice del elemento desde el final
      if (nivelTinta[indice]) { // Verificar que el elemento exista
        nivelTinta[indice].style.backgroundColor = amarillo; // Aplicar color
        nivelTintaGral[indice].style.backgroundColor = cian;
        displayTinta.textContent = iteraciones + '%';
      }
    }
    const elementosAgua = nivelSolucion.length;
    for (let i = 0; i < iterAgua; i++) {
      const indice = elementosAgua - 1 - i; // Índice del elemento desde el final
      if (nivelSolucion[indice]) { // Verificar que el elemento exista
        nivelSolucion[indice].style.backgroundColor = amarillo;
        nivelSolucionGral[indice].style.backgroundColor = verdeAgua;
        displaySolucion.textContent = iterAgua + '%';
      }
    }
  }
  if(flagMagenta){
    const nivelTintaGral = document.querySelectorAll('#footer-magenta #footer-5 .divs-grales-tinta-magenta'); 
    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelSolucionGral = document.querySelectorAll('#footer-magenta #footer-6 .divs-grales-solucion-magenta')
    const nivelSolucion = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const displayTinta = document.getElementById('tinta-perc')
    const displaySolucion = document.getElementById('solucion-porcentaje')
    const iteraciones = objetoMagenta.nivelTinta.length;
    const iterAgua = objetoMagenta.nivelAgua.length;
    // 4. Crear un bucle para recorrer los elementos desde el último hacia el primero 
    const elementosTinta = nivelTinta.length;
    for (let i = 0; i < iteraciones; i++) {
      const indice = elementosTinta - 1 - i; // Índice del elemento desde el final
      if (nivelTinta[indice]) { // Verificar que el elemento exista
        nivelTinta[indice].style.backgroundColor = amarillo; // Aplicar color
        nivelTintaGral[indice].style.backgroundColor = magenta;
        displayTinta.textContent = iteraciones + '%';
      }
    }
    const elementosAgua = nivelSolucion.length;
    for (let i = 0; i < iterAgua; i++) {
      const indice = elementosAgua - 1 - i; // Índice del elemento desde el final
      if (nivelSolucion[indice]) { // Verificar que el elemento exista
        nivelSolucion[indice].style.backgroundColor = amarillo;
        nivelSolucionGral[indice].style.backgroundColor = verdeAgua;
        displaySolucion.textContent = iterAgua + '%';
      }
    }
  }
  if(flagAmarillo){
    const nivelTintaGral = document.querySelectorAll('#footer-amarillo #footer-7 .divs-grales-tinta-amarillo'); 
    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelSolucionGral = document.querySelectorAll('#footer-amarillo #footer-8 .divs-grales-solucion-amarillo')
    const nivelSolucion = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const displayTinta = document.getElementById('tinta-perc')
    const displaySolucion = document.getElementById('solucion-porcentaje')
    const iteraciones = objetoAmarillo.nivelTinta.length;
    const iterAgua = objetoAmarillo.nivelAgua.length;
    // 4. Crear un bucle para recorrer los elementos desde el último hacia el primero 
    const elementosTinta = nivelTinta.length;
    for (let i = 0; i < iteraciones; i++) {
      const indice = elementosTinta - 1 - i; // Índice del elemento desde el final
      if (nivelTinta[indice]) { // Verificar que el elemento exista
        nivelTinta[indice].style.backgroundColor = amarillo; // Aplicar color
        nivelTintaGral[indice].style.backgroundColor = amarillo;
        displayTinta.textContent = iteraciones + '%';
      }
    }
    const elementosAgua = nivelSolucion.length;
    for (let i = 0; i < iterAgua; i++) {
      const indice = elementosAgua - 1 - i; // Índice del elemento desde el final
      if (nivelSolucion[indice]) { // Verificar que el elemento exista
        nivelSolucion[indice].style.backgroundColor = amarillo;
        nivelSolucionGral[indice].style.backgroundColor = verdeAgua;
        displaySolucion.textContent = iterAgua + '%';
      }
    }
  }
  if(flagEspecial){
    const nivelTintaGral = document.querySelectorAll('#footer-especial #footer-9 .divs-grales-tinta-especial'); 
    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelSolucionGral = document.querySelectorAll('#footer-especial #footer-10 .divs-grales-solucion-especial')
    const nivelSolucion = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const displayTinta = document.getElementById('tinta-perc')
    const displaySolucion = document.getElementById('solucion-porcentaje')
    const iteraciones = objetoEspecial.nivelTinta.length;
    const iterAgua = objetoEspecial.nivelAgua.length;
    // 4. Crear un bucle para recorrer los elementos desde el último hacia el primero 
    const elementosTinta = nivelTinta.length;
    for (let i = 0; i < iteraciones; i++) {
      const indice = elementosTinta - 1 - i; // Índice del elemento desde el final
      if (nivelTinta[indice]) { // Verificar que el elemento exista
        nivelTinta[indice].style.backgroundColor = amarillo; // Aplicar color
        nivelTintaGral[indice].style.backgroundColor = especial;
        displayTinta.textContent = iteraciones + '%';
      }
    }
    const elementosAgua = nivelSolucion.length;
    for (let i = 0; i < iterAgua; i++) {
      const indice = elementosAgua - 1 - i; // Índice del elemento desde el final
      if (nivelSolucion[indice]) { // Verificar que el elemento exista
        nivelSolucion[indice].style.backgroundColor = amarillo;
        nivelSolucionGral[indice].style.backgroundColor = verdeAgua;
        displaySolucion.textContent = iterAgua + '%';
      }
    }
  }
  if(flagBarniz){
    const nivelTintaGral = document.querySelectorAll('#footer-barniz #footer-11 .divs-grales-tinta-barniz'); 
    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelSolucionGral = document.querySelectorAll('#footer-barniz #footer-12 .divs-grales-solucion-barniz')
    const nivelSolucion = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const displayTinta = document.getElementById('tinta-perc')
    const displaySolucion = document.getElementById('solucion-porcentaje')
    const iteraciones = objetoBarniz.nivelTinta.length;
    const iterAgua = objetoBarniz.nivelAgua.length;
    // 4. Crear un bucle para recorrer los elementos desde el último hacia el primero 
    const elementosTinta = nivelTinta.length;
    for (let i = 0; i < iteraciones; i++) {
      const indice = elementosTinta - 1 - i; // Índice del elemento desde el final
      if (nivelTinta[indice]) { // Verificar que el elemento exista
        nivelTinta[indice].style.backgroundColor = amarillo; // Aplicar color
        nivelTintaGral[indice].style.backgroundColor = barniz;
        displayTinta.textContent = iteraciones + '%';
      }
    }
    const elementosAgua = nivelSolucion.length;
    for (let i = 0; i < iterAgua; i++) {
      const indice = elementosAgua - 1 - i; // Índice del elemento desde el final
      if (nivelSolucion[indice]) { // Verificar que el elemento exista
        nivelSolucion[indice].style.backgroundColor = amarillo;
        nivelSolucionGral[indice].style.backgroundColor = verdeAgua;
        displaySolucion.textContent = iterAgua + '%';
      }
    }
  }
  const elementos = document.querySelectorAll(claseElemento);
  // Captura el último porcentaje almacenado en el objeto, o 0 si está vacío
  const porcentaje = estadoObjeto.indices.length > 0 ? estadoObjeto.indices.at(-1) : 0;
  contadorTinta.textContent = `${porcentaje}%`;
}
function aplicarSolucion(estadoObjeto, claseElemento) {
  const lineasSolucion = document.querySelectorAll('.lineas-solucion');
 // Restablecer colores
  lineasSolucion.forEach(linea => {
    linea.style.backgroundColor = ''; // Quitar cualquier color previo
  });

  if(flagNegro){
    const nivelTintaGral = document.querySelectorAll('#footer-negro #footer-1 .divs-grales-tinta-negro'); 
    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelSolucionGral = document.querySelectorAll('#footer-negro #footer-2 .divs-grales-solucion-negro')
    const nivelSolucion = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const displayTinta = document.getElementById('tinta-perc')
    const displaySolucion = document.querySelector('#inerfaz-ajuste-fino #ctrl-gral #solucion-porcentaje');

    const iteraciones = objetoNegro.nivelTinta.length;
    const iterAgua = objetoNegro.nivelAgua.length;
    // 4. Crear un bucle para recorrer los elementos desde el último hacia el primero 
    const elementosTinta = nivelTinta.length;
    for (let i = 0; i < iteraciones; i++) {
      const indice = elementosTinta - 1 - i; // Índice del elemento desde el final
      if (nivelTinta[indice]) { // Verificar que el elemento exista
        nivelTinta[indice].style.backgroundColor = amarillo; // Aplicar color
        nivelTintaGral[indice].style.backgroundColor = negro;
        displayTinta.textContent = iteraciones + '%';
      }
    }
    const elementosAgua = nivelSolucion.length;
    for (let i = 0; i < iterAgua; i++) {
      const indice = elementosAgua - 1 - i; // Índice del elemento desde el final
      if (nivelSolucion[indice]) { // Verificar que el elemento exista
        nivelSolucion[indice].style.backgroundColor = amarillo;
        nivelSolucionGral[indice].style.backgroundColor = verdeAgua;  
      }

    }
  }  
  if(flagCyan){
    const nivelTintaGral = document.querySelectorAll('#footer-azul #footer-3 .divs-grales-tinta-azul'); 
    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelSolucionGral = document.querySelectorAll('#footer-azul #footer-4 .divs-grales-solucion-azul')
    const nivelSolucion = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const displayTinta = document.getElementById('tinta-perc')
    const displaySolucion = document.querySelector('#inerfaz-ajuste-fino #ctrl-gral #solucion-porcentaje');

    const iteraciones = objetoCian.nivelTinta.length;
    const iterAgua = objetoCian.nivelAgua.length;
    // 4. Crear un bucle para recorrer los elementos desde el último hacia el primero 
    const elementosTinta = nivelTinta.length;
    for (let i = 0; i < iteraciones; i++) {
      const indice = elementosTinta - 1 - i; // Índice del elemento desde el final
      if (nivelTinta[indice]) { // Verificar que el elemento exista
        nivelTinta[indice].style.backgroundColor = amarillo; // Aplicar color
        nivelTintaGral[indice].style.backgroundColor = cian;
        displayTinta.textContent = iteraciones + '%';
      }
    }
    const elementosAgua = nivelSolucion.length;
    for (let i = 0; i < iterAgua; i++) {
      const indice = elementosAgua - 1 - i; // Índice del elemento desde el final
      if (nivelSolucion[indice]) { // Verificar que el elemento exista
        nivelSolucion[indice].style.backgroundColor = amarillo;
        nivelSolucionGral[indice].style.backgroundColor = verdeAgua;  
      }

    }
  }
  if(flagMagenta){
    const nivelTintaGral = document.querySelectorAll('#footer-magenta #footer-5 .divs-grales-tinta-magenta'); 
    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelSolucionGral = document.querySelectorAll('#footer-magenta #footer-6 .divs-grales-solucion-magenta')
    const nivelSolucion = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const displayTinta = document.getElementById('tinta-perc')
    const displaySolucion = document.querySelector('#inerfaz-ajuste-fino #ctrl-gral #solucion-porcentaje');

    const iteraciones = objetoMagenta.nivelTinta.length;
    const iterAgua = objetoMagenta.nivelAgua.length;
    // 4. Crear un bucle para recorrer los elementos desde el último hacia el primero 
    const elementosTinta = nivelTinta.length;
    for (let i = 0; i < iteraciones; i++) {
      const indice = elementosTinta - 1 - i; // Índice del elemento desde el final
      if (nivelTinta[indice]) { // Verificar que el elemento exista
        nivelTinta[indice].style.backgroundColor = amarillo; // Aplicar color
        nivelTintaGral[indice].style.backgroundColor = magenta;
        displayTinta.textContent = iteraciones + '%';
      }
    }
    const elementosAgua = nivelSolucion.length;
    for (let i = 0; i < iterAgua; i++) {
      const indice = elementosAgua - 1 - i; // Índice del elemento desde el final
      if (nivelSolucion[indice]) { // Verificar que el elemento exista
        nivelSolucion[indice].style.backgroundColor = amarillo;
        nivelSolucionGral[indice].style.backgroundColor = verdeAgua;  
      }

    }
  }
  if(flagAmarillo){
    const nivelTintaGral = document.querySelectorAll('#footer-amarillo #footer-7 .divs-grales-tinta-amarillo'); 
    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelSolucionGral = document.querySelectorAll('#footer-amarillo #footer-8 .divs-grales-solucion-amarillo')
    const nivelSolucion = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const displayTinta = document.getElementById('tinta-perc')
    const displaySolucion = document.querySelector('#inerfaz-ajuste-fino #ctrl-gral #solucion-porcentaje');

    const iteraciones = objetoAmarillo.nivelTinta.length;
    const iterAgua = objetoAmarillo.nivelAgua.length;
    // 4. Crear un bucle para recorrer los elementos desde el último hacia el primero 
    const elementosTinta = nivelTinta.length;
    for (let i = 0; i < iteraciones; i++) {
      const indice = elementosTinta - 1 - i; // Índice del elemento desde el final
      if (nivelTinta[indice]) { // Verificar que el elemento exista
        nivelTinta[indice].style.backgroundColor = amarillo; // Aplicar color
        nivelTintaGral[indice].style.backgroundColor = amarillo;
        displayTinta.textContent = iteraciones + '%';
      }
    }
    const elementosAgua = nivelSolucion.length;
    for (let i = 0; i < iterAgua; i++) {
      const indice = elementosAgua - 1 - i; // Índice del elemento desde el final
      if (nivelSolucion[indice]) { // Verificar que el elemento exista
        nivelSolucion[indice].style.backgroundColor = amarillo;
        nivelSolucionGral[indice].style.backgroundColor = verdeAgua;  
      }

    }
  }
  if(flagEspecial){
    const nivelTintaGral = document.querySelectorAll('#footer-especial #footer-9 .divs-grales-tinta-especial'); 
    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelSolucionGral = document.querySelectorAll('#footer-especial #footer-10 .divs-grales-solucion-especial')
    const nivelSolucion = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const displayTinta = document.getElementById('tinta-perc')
    const displaySolucion = document.querySelector('#inerfaz-ajuste-fino #ctrl-gral #solucion-porcentaje');

    const iteraciones = objetoEspecial.nivelTinta.length;
    const iterAgua = objetoEspecial.nivelAgua.length;
    // 4. Crear un bucle para recorrer los elementos desde el último hacia el primero 
    const elementosTinta = nivelTinta.length;
    for (let i = 0; i < iteraciones; i++) {
      const indice = elementosTinta - 1 - i; // Índice del elemento desde el final
      if (nivelTinta[indice]) { // Verificar que el elemento exista
        nivelTinta[indice].style.backgroundColor = amarillo; // Aplicar color
        nivelTintaGral[indice].style.backgroundColor = especial;
        displayTinta.textContent = iteraciones + '%';
      }
    }
    const elementosAgua = nivelSolucion.length;
    for (let i = 0; i < iterAgua; i++) {
      const indice = elementosAgua - 1 - i; // Índice del elemento desde el final
      if (nivelSolucion[indice]) { // Verificar que el elemento exista
        nivelSolucion[indice].style.backgroundColor = amarillo;
        nivelSolucionGral[indice].style.backgroundColor = verdeAgua;  
      }

    }
  }
  if(flagBarniz){
    const nivelTintaGral = document.querySelectorAll('#footer-barniz #footer-11 .divs-grales-tinta-barniz'); 
    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelSolucionGral = document.querySelectorAll('#footer-barniz #footer-12 .divs-grales-solucion-barniz')
    const nivelSolucion = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const displayTinta = document.getElementById('tinta-perc')
    const displaySolucion = document.querySelector('#inerfaz-ajuste-fino #ctrl-gral #solucion-porcentaje');

    const iteraciones = objetoBarniz.nivelTinta.length;
    const iterAgua = objetoBarniz.nivelAgua.length;
    // 4. Crear un bucle para recorrer los elementos desde el último hacia el primero 
    const elementosTinta = nivelTinta.length;
    for (let i = 0; i < iteraciones; i++) {
      const indice = elementosTinta - 1 - i; // Índice del elemento desde el final
      if (nivelTinta[indice]) { // Verificar que el elemento exista
        nivelTinta[indice].style.backgroundColor = amarillo; // Aplicar color
        nivelTintaGral[indice].style.backgroundColor = barniz;
        displayTinta.textContent = iteraciones + '%';
      }
    }
    const elementosAgua = nivelSolucion.length;
    for (let i = 0; i < iterAgua; i++) {
      const indice = elementosAgua - 1 - i; // Índice del elemento desde el final
      if (nivelSolucion[indice]) { // Verificar que el elemento exista
        nivelSolucion[indice].style.backgroundColor = amarillo;
        nivelSolucionGral[indice].style.backgroundColor = verdeAgua;  
      }

    }
  }
} 
function renderObjeto() {
  // 1. Selecciona todos los elementos con la clase `.lineas-tinta`
  const elementos = document.querySelectorAll('.lineas-tinta');  
  // 2. Calcula la cantidad de elementos a los que se les dará color
  const cantidad = estadoBalanceNegro.indices.length;  
  // 3. Recorre desde el último elemento hacia el primero, aplicando color a los `cantidad` elementos
  for (let i = 0; i < cantidad; i++) {
    const index = elementos.length - 1 - i;  // Calcula el índice desde el final
    
    if (index >= 0) {  // Verifica que el índice no sea negativo
      elementos[index].style.backgroundColor = 'yellow';  // Aplica el color amarillo
    }   
  }
  // 4. Actualiza el porcentaje de tinta en el elemento de texto
  const porcentajeTinta = document.getElementById('tinta-perc'); // Obtiene el elemento donde mostrar el porcentaje
  const porcentaje = Math.min(cantidad, elementos.length) * 100 / elementos.length; // Calcula el porcentaje (0-100)
  porcentajeTinta.textContent = `${Math.round(porcentaje)}%`;  
}  

document.getElementById('butt-perfil-tinta').addEventListener('click', () =>{ 
  nombreCliente.style.top=''
  let nombreDatos = document.querySelector('#cliente-nombre')
  interfazPerfiles.classList.remove('move-perfiles-entintado')
  desactivarClick(['.butt-perfiles', '.cabeza', '.mod-tinta']); 
  var elementosExcluidos = ['simulador','interfaz-perfiles','perfiles-entintado','boton-perfiles','boton-reseteo','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4','spn-blur-5','spn-blur-6','spn-blur-7'] 
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  container1.style.display = 'none'
  if(objetoGlobal === null || objetoGlobal === ''){nombreDatos.textContent = ''}
  setTimeout(() => {
    interfazPerfiles.classList.add('move-perfiles-entintado')
  }, 100);
  setTimeout(() => {
    document.querySelector('.nombre-cliente').style.display='flex'
  }, 1500);
  setTimeout(() =>{
    restablecerClick(['.butt-perfiles', '.cabeza', '.mod-tinta']);
  },1550);
    botonesPerfilColor.forEach(elemento => {  
    elemento.style.display = 'flex'; 
  });
})
document.getElementById('butt-perfil').addEventListener('click', () =>{
  var elementosExcluidos = ['simulador','inerfaz-ajuste-fino','perfil-individual','control-perfiles','admin-perfiles','texto-perf-indiv','blur-interfaz-perfiles','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4','spn-blur-5','spn-blur-6','spn-blur-7']  
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
    botonesPerfilColor.forEach(boton => {
    boton.style.display = 'block'
  } )
  container1.style.display = 'none'
  const displayAjusteFino = document.getElementById('inerfaz-ajuste-fino');
  interfazColor.style.zIndex = '';
  interfazColor.style.display = 'flex';
  interfazColor.style.position = 'absolute';
  interfazColor.style.top = '5vh';
  if (!primerClickRealizado) {
    displayAjusteFino.style.display = 'flex';
    displayAjusteFino.style.top = '33vh'
    crearVariasLineas(22);
    primerClickRealizado = true;
  }
})  

let primerClickRealizado = false;
document.getElementById('butt-control-tinta').addEventListener('click', () =>{ 
  const colorPerfilador = document.querySelector('#current-Color');   
  var elementosExcluidos = ['simulador','inerfaz-ajuste-fino','perfil-individual','control-perfiles','interfaz-perfiles','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4','spn-blur-5','spn-blur-6','spn-blur-7']  
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  container1.style.display = 'none'
  if(flagNegro){
    color = 'rgb(0,0,0)'
    flagNegro = true;
    flagCyan = false;
    flagMagenta = false;
    flagAmarillo = false;
    flagEspecial = false;
    flagBarniz = false; 
    crearBotoneraDinamica(color)
    setTimeout(() => {
      eliminarColores()
    }, 50);
    setTimeout(() => {
      if (objetoGlobal && flagNegro) {
        muestraRenderObjetoGlobal(objetoGlobal, 'negro', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 1,2);
      }
    }, 100);
    colorPerfilador.style.color = color
  }  
  if (flagCyan) {
    color = 'rgb(0,0,255)'
    flagCyan = true;
    flagNegro = false;
    flagMagenta = false;
    flagAmarillo = false;
    flagEspecial = false;
    flagBarniz = false; 
    crearBotoneraDinamica(color)
    setTimeout(() => {
      eliminarColores()
    }, 50);
    setTimeout(() => {
      if (objetoGlobal && flagCyan) {
        muestraRenderObjetoGlobal(objetoGlobal, 'azul', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 3,4);
      }
    }, 100);
  }
  if (flagMagenta) {
    color = 'rgb(255,0,255)'
    flagMagenta = true;
    flagCyan = false;
    flagNegro = false;
    flagAmarillo = false;
    flagEspecial = false;
    flagBarniz = false; 
    crearBotoneraDinamica(color)
    setTimeout(() => {
      eliminarColores()
    }, 50);
    setTimeout(() => {
      if (objetoGlobal && flagMagenta) {
        muestraRenderObjetoGlobal(objetoGlobal, 'magenta', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 5,6);
      }
    }, 100);
  }
  if (flagAmarillo) {
    color = 'rgb(255,255,0)'
    flagAmarillo = true;
    flagCyan = false;
    flagMagenta = false;
    flagNegro = false;
    flagEspecial = false;
    flagBarniz = false; 
    crearBotoneraDinamica(color)
    setTimeout(() => {
      eliminarColores()
    }, 50);
    setTimeout(() => {
      if (objetoGlobal && flagAmarillo) {
        muestraRenderObjetoGlobal(objetoGlobal, 'amarillo', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 7,8);
      }
    }, 100);
  }    
  if (flagEspecial) {
    color = 'rgb(255,130,0)'
    flagEspecial = true;
    flagCyan = false;
    flagMagenta = false;
    flagAmarillo = false;
    flagNegro = false;
    flagBarniz = false; 
    crearBotoneraDinamica(color)
    setTimeout(() => {
      eliminarColores()
    }, 50);
    setTimeout(() => {
      if (objetoGlobal && flagEspecial) {
        muestraRenderObjetoGlobal(objetoGlobal, 'especial', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 9,10);
      }
    }, 100);
  }    
  if (flagBarniz) {
    color = 'rgb(200,200,200)'
    flagBarniz = true;
    flagCyan = false;
    flagMagenta = false;
    flagAmarillo = false;
    flagEspecial = false;
    flagNegro = false; 
    crearBotoneraDinamica(barniz);
    setTimeout(() => {
      eliminarColores()
    }, 50);
    setTimeout(() => {
      if (objetoGlobal && flagBarniz) {
        muestraRenderObjetoGlobal(objetoGlobal, 'barniz', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 11,12);
      }
    }, 100);
    colorPerfilador.style.color = color
  }   
  const contPerfilIndividual = document.getElementById('perfil-individual')   
  contPerfilIndividual.classList.remove('move-perfil-individual')
  const displayAjusteFino = document.getElementById('inerfaz-ajuste-fino'); 
  nombreCliente.style.display='flex'
  nombreCliente.style.top='5vh'
  if (!primerClickRealizado) {
    displayAjusteFino.style.display = 'flex';
    displayAjusteFino.style.top = '33vh'
    crearVariasLineas(22);   
    primerClickRealizado = true;
  }
  contPerfilIndividual.classList.add('move-perfil-individual')
  setTimeout(() => {
    botonesPerfilColor.forEach(elemento => {   
      elemento.style.display = 'block'; 
    });   
    restablecerClick(['.butt-selector'])  
  }, 10);
})

let calculadoraSimulador = false

document.getElementById('butt-job-track').addEventListener('click', () =>{
  ["panel-uno", "panel-dos"].forEach(id => document.getElementById(id)?.removeAttribute("style"));
  const padreBotonera = document.querySelector('#botonera-frente')
  padreBotonera.style.display='grid'
  conteJobTrack.classList.remove('move-job-track')
  var elementosExcluidos = ['simulador','unit-job-track','interfaz-perfiles', 'boton-perfiles' , 'boton-reseteo','abandonar-perfiles','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4','spn-blur-5','spn-blur-6','spn-blur-7'] 
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
    }
  }
  container1.style.display = 'none'
  desactivarClick(['.butt-perfiles'])
  restablecerClick(['.estilo-1', '.butt-revierte'])
  document.getElementById('boton-reseteo').style.pointerEvents = 'auto';
  
  conteJobTrack.style.display='flex'
  document.querySelectorAll('.datos-base').forEach((elemento) => { 
    elemento.textContent = ''
  });  
  setTimeout(() => {
    conteJobTrack.classList.add('move-job-track') 
  }, 100);
})

document.getElementById('conte-img').addEventListener('click', () =>{
  var elementosExcluidos = ['simulador','interfaz-perfiles','inerfaz-ajuste-fino','perfil-individual','control-perfiles','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4','spn-blur-5','spn-blur-6','spn-blur-7']  
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }  
  botonesPerfilColor.forEach(boton => {
    boton.style.display = 'block'
  } )

})
let menuHambrgr = document.getElementById('show-todos')
let txtHambrgr = document.getElementById('texto-perf-todos')
// Función común para manejar el cambio de color y las acciones relacionadas
function manejarColor(flagActual, estadoBalance, color, index) {
  removerClasesColores()
  if (!flagActual) {
    // Restablecemos todos los flags a false y activamos el flag correspondiente
    flagNegro = flagCyan = flagMagenta = flagAmarillo = flagEspecial = flagBarniz = false;    
    switch(index) {
      case 1:
        flagNegro = true;
      break;
      case 2:
        flagCyan = true;
      break;
      case 3:
        flagMagenta = true;
      break;
      case 4:
        flagAmarillo = true;
        break;
      case 5:
        flagEspecial = true;
      break;
      case 6:
        flagBarniz = true;
      break;
    }
    // Llama a las funciones para actualizar la interfaz
    crearBotoneraDinamica(color);
    aplicarColor(estadoBalance, '.lineas-tinta');
    aplicarSolucion(estadoBalance, '.lineas-solucion');
  }
}
// Función común para mostrar los elementos y manejar el cambio de color
function mostrarMenuYAplicarColor(flagActual, estadoBalance, color, index) {
  menuHambrgr.style.display = 'flex';
  txtHambrgr.style.display = 'flex';
  manejarColor(flagActual, estadoBalance, color, index);
}
menuHambrgr.addEventListener('click', () => {
  document.querySelectorAll('.color-ind').forEach(el => el.style.display = 'flex');
  document.getElementById('info-perfiles').style.display = 'none'
  document.getElementById('cont-modificadores').style.display = 'none'       
});
document.querySelectorAll('.color-ind').forEach((elemento, index) => {
  elemento.addEventListener('click', () => {    
    document.getElementById('info-perfiles').style.display = 'grid'
    document.getElementById('cont-modificadores').style.display = 'grid'
    document.querySelectorAll('.color-ind').forEach(el => el.style.display = 'none');    
    elemento.style.display = 'flex';
    menuHambrgr.style.display='flex'
    txtHambrgr.style.display='flex'

    // Lógica de mostrar el menú y aplicar color basado en el índice
    switch(index + 1) {
      case 1:
        mostrarMenuYAplicarColor(flagNegro, estadoBalanceNegro, negro, 1);
      break;
      case 2:
        mostrarMenuYAplicarColor(flagCyan, estadoBalanceCyan, azul, 2);
      break;
      case 3:
        mostrarMenuYAplicarColor(flagMagenta, estadoBalanceMagenta, magenta, 3);
      break;
      case 4:
        mostrarMenuYAplicarColor(flagAmarillo, estadoBalanceAmarillo, 'yellow', 4);
      break;
      case 5:
        mostrarMenuYAplicarColor(flagEspecial, estadoBalanceEspecial, especial, 5);
      break;
      case 6:
        mostrarMenuYAplicarColor(flagBarniz, estadoBalanceBarniz, barniz, 6);
      break;
    }
  });
});
let banderaNegro = false;
let banderaCian = false;
let banderaMagenta = false;
let banderaAmarillo = false;
let banderaEspecial = false;  
let banderaBarniz = false;
function removerClasesColores() {
  const elementosColorInd = document.querySelectorAll('.color-ind');  
  // Recorremos todos los elementos y eliminamos las clases de movimiento
  elementosColorInd.forEach((elemento) => {
    elemento.classList.remove(
      'move-perfil-barniz',
      'move-perfil-especial',
      'move-perfil-amarillo',
      'move-perfil-magenta',
      'move-perfil-cian',  
      'move-perfil-negro'
    );
  });
}
const textos = ['N', 'C', 'M', 'A', 'E-1', 'E-2'];
const textosEncabezados = ['Negro', 'Cyan', 'Magenta', 'Aamarillo', 'Especial', 'Barniz'];
const textosReglas = Array.from({ length: 22 }, (_, i) => i + 1); // Array de números del 1 al 20
const idsEncabezados = ['cabeza-negro', 'cabeza-azul', 'cabeza-magenta', 'cabeza-amarillo', 'cabeza-especial', 'cabeza-barniz'];
const maquinasTextos = ['IBM 5000','IBM Infoprint','GTO 52','Pinza','Heidelberg SORMZ','rotatek RK-200','rotatek RK-300'] 
function elementosDinamicamente(contPadre, numeroDeLineas, classElto, startNumber = null, prefixId = '') {
  const contenedorPrincipal = document.getElementById(contPadre);
  // Limpiar el contenedor para evitar acumulación de elementos
  contenedorPrincipal.innerHTML = '';
  // Definir el número inicial solo si se proporciona `startNumber` y es un número
  let numeroConsecutivo = Number.isInteger(startNumber) ? startNumber : null;

  for (let i = 1; i <= numeroDeLineas; i++) {
    const lineaLeds = document.createElement('div');    
    lineaLeds.classList.add(classElto);

    // Asignar contenido de texto solo si `numeroConsecutivo` es un número válido
    if (numeroConsecutivo !== null) {
      lineaLeds.textContent = numeroConsecutivo;
      numeroConsecutivo++;
    }

    // Asignar ID con prefijo solo si `prefixId` tiene un valor
    if (prefixId) {
      lineaLeds.id = `${prefixId}-${i}`; // Prefijo y número de línea
    }

    contenedorPrincipal.appendChild(lineaLeds);
  }
}
function elementosConSpanDinamicamente(contPadre, numeroDeLineas, classElto, texts = [], ids = []) {
  const contenedorPrincipal = document.getElementById(contPadre);  
  contenedorPrincipal.innerHTML = '';

  for (let i = 0; i < numeroDeLineas; i++) {
    const lineaLeds = document.createElement('div');
    lineaLeds.classList.add(classElto);

    // Crear el span con el texto del array texts si está disponible
    if (texts[i]) {
      const span = document.createElement('span');
      span.classList.add('texto-selectores');
      span.textContent = texts[i];
      lineaLeds.appendChild(span);
    }

    // Asignar id del arreglo ids si está disponible
    if (ids[i]) {
      lineaLeds.id = ids[i];
    }    

    contenedorPrincipal.appendChild(lineaLeds);
  }
  
}
function clasePadreCantidadClaseTextId(contPadre, numeroDeLineas, classElto, texts = [], prefixId = '') {
  const contenedoresPrincipales = document.querySelectorAll(`.${contPadre}`);

  // Verifica si se encontraron elementos con la clase proporcionada
  if (contenedoresPrincipales.length === 0) {
    console.warn(`No se encontró ningún contenedor con la clase: ${contPadre}`);
    return;
  }

  contenedoresPrincipales.forEach((contenedorPrincipal, index) => {
    // Limpiar cada contenedor para evitar acumulación de elementos
    contenedorPrincipal.innerHTML = '';

    for (let i = 1; i <= numeroDeLineas; i++) {
      const spanElement = document.createElement('span');
      spanElement.classList.add(classElto);
      
      // Añadir el texto correspondiente, si se proporciona
      spanElement.textContent = texts.length > 0 ? texts[i - 1] || '' : ''; 

      // Asignar un ID basado en el índice y el prefijo, si se proporciona
      if (prefixId) {
        spanElement.id = `${prefixId}-${i}`; // Prefijo, índice del contenedor, y número de línea
      }

      // Agregar el span creado al contenedor padre
      contenedorPrincipal.appendChild(spanElement);
    }
  });
}
function idPadreCantidadClaseTextId(contPadre, numeroDeLineas, classElto, claseDos = '', texts = [], prefixId = '', padreEtiqueta, color, padreEtiquetaTinta) {   
  const contenedorPrincipal = document.getElementById(contPadre);  
  // Limpiar el contenedor para evitar acumulación de elementos
  contenedorPrincipal.innerHTML = '';
  // Crear el único span que debe estar fuera del bucle
  const spanAgua = document.createElement('span');
  const spanTinta = document.createElement('span');
  spanAgua.classList.add('div-agua', 'agua-div');
  spanTinta.classList.add('div-gral');
  // Asignar ID al span creado
  spanAgua.id = `display-general-${color}`;
  spanTinta.id = `gral-display-${color}`;
  // Agregar el span al contenedor padre especificado en `padreEtiqueta`
  const contenedorDestino = document.getElementById(padreEtiqueta);
  const contenedorTinta = document.getElementById(padreEtiquetaTinta);
  if (contenedorDestino) {
    contenedorDestino.appendChild(spanAgua);
  } else {
    
  }

  if (contenedorTinta) {
    contenedorTinta.appendChild(spanTinta);
  } else {
  
  }

  // Crear múltiples spans dentro del contenedorPrincipal usando el bucle
  for (let i = 1; i <= numeroDeLineas; i++) {
    const spanElement = document.createElement('span');
    
    // Agregar la clase principal
    spanElement.classList.add(classElto); 

    // Agregar la segunda clase si se proporciona
    if (claseDos) {
      spanElement.classList.add(claseDos);
    }

    // Añadir el texto correspondiente, si se proporciona
    spanElement.textContent = texts.length > 0 ? texts[i - 1] || '' : ''; 

    // Asignar un ID basado en el índice y el prefijo, si se proporciona
    if (prefixId) {
      spanElement.id = `${prefixId}-${i}`;
    }

    // Agregar el span creado dentro del contenedor principal
    contenedorPrincipal.appendChild(spanElement);
  }
}
let intervalColorNegro = null
let intervalColorCyan = null
let intervalColorMagenta = null
let intervalColorAmmarillo = null
let intervalColorEspecial = null
let intervalColorBarniz = null
function toggleColorButton(index) {
  const coleccionCabeza = document.querySelectorAll('.cabeza');
  const coleccionButtSelector = document.querySelectorAll('.butt-selector');

  // Restablece el color de todos los botones en ambas colecciones
  coleccionCabeza.forEach(boton => boton.style.backgroundColor = '');
  coleccionButtSelector.forEach(boton => boton.style.backgroundColor = '');

  // Aplica el color rojo solo a los botones en la posición `index`
  if (coleccionCabeza[index]) coleccionCabeza[index].style.backgroundColor = verde; 
  // Aplicar color verde al botón y negro al texto en el <span> inmediatamente
  if (coleccionButtSelector[index]) {
    coleccionButtSelector[index].style.backgroundColor = verde;

    // Captura el <span> directamente dentro del botón y aplica el color negro
    const span = coleccionButtSelector[index].querySelector(`#butts-selectores div:nth-child(${index}) .texto-selectores`);
    if (span) {
      span.style.color = 'black';
    }
  }
  
}
function crearLedsSpan() {
  // Ciclo para crear 22 padres con IDs secuenciales y 24 spans en cada uno
  for (let i = 1; i <= 22; i++) {
    // Obtener el padre correspondiente
    const contenedorLed = document.getElementById(`led-${i}`);
    
    // Verificar que el contenedor padre exista
    if (contenedorLed) {
      // Eliminar todos los spans hijos existentes en el contenedor
      while (contenedorLed.firstChild) {
        contenedorLed.removeChild(contenedorLed.firstChild);
      }

      // Crear 24 elementos span y agregarlos al padre actual
      for (let j = 1; j <= 24; j++) {
        const elementoSpan = document.createElement('span');
        elementoSpan.classList.add('led'); // Agregar la clase 'led' a cada span
        contenedorLed.appendChild(elementoSpan); // Agregar el span al contenedor padre 
      }
    } else {
      console.warn(`No se encontró el contenedor con id: led-${i}`);
    }
  }

  const columnaClon = document.querySelectorAll('#control-perfiles #led-1 .led')
  if (columnaClon.length === 0) { 
    columnaClon.forEach(nieto => {
      nieto.classList.add('elemento-sync');
    });
  }

}
function eliminarBotonesSuma() {
  const contenedorPrincipal = document.getElementById('columna-30');
  const botonesSuma = contenedorPrincipal.querySelectorAll('.linea-control.suma');
  botonesSuma.forEach((boton) => {
    contenedorPrincipal.removeChild(boton);
  });
}
function eliminarBotonesResta() {
  const contenedorPrincipal = document.getElementById('columna-30');
  const botonesSuma = contenedorPrincipal.querySelectorAll('.linea-control.resta');
  botonesSuma.forEach((boton) => {
    contenedorPrincipal.removeChild(boton);
  });
}
const informacionBotonesNegro = [];
const informacionBotonesAmarillo = [];
const informacionBotonesCyan = [];
const informacionBotonesMagenta = [];
const informacionBotonesNaranja = [];
const informacionBotonesGris = [];
let colorAplicadoContador = 0;
const numeroLineas = 22; 
let currentLinea = 0;
let currentIndice = 0;
function desactivarEventos() {
  // Prevenir clicks y mousedown en toda la página
  document.addEventListener('click', bloquearEvento, true);
  document.addEventListener('mousedown', bloquearEvento, true);
}
function activarEventos() {
  // Reactivar clicks y mousedown
  document.removeEventListener('click', bloquearEvento, true);
  document.removeEventListener('mousedown', bloquearEvento, true);
}
function bloquearEvento(e) {
  e.stopPropagation();
  e.preventDefault();
}
let objetoAmarillo = { 
  linea: {
    "linea-1": [],
    "linea-2": [],
    "linea-3": [],
    "linea-4": [],
    "linea-5": [],
    "linea-6": [],
    "linea-7": [],
    "linea-8": [],
    "linea-9": [],
    "linea-10": [],
    "linea-11": [],
    "linea-12": [],
    "linea-13": [],
    "linea-14": [],
    "linea-15": [],
    "linea-16": [],
    "linea-17": [],
    "linea-18": [],
    "linea-19": [],
    "linea-20": [],
    "linea-21": [],
    "linea-22": [],
  },
    lineaSeguidor: {
    "led-1": [],
    "led-2": [],
    "led-3": [],
    "led-4": [],
    "led-5": [],
    "led-6": [],
    "led-7": [],
    "led-8": [],
    "led-9": [],
    "led-10": [],
    "led-11": [],
    "led-12": [],
    "led-13": [],
    "led-14": [],
    "led-15": [],
    "led-16": [],
    "led-17": [],
    "led-18": [],
    "led-19": [],
    "led-20": [],
    "led-21": [],
    "led-22": [],
  },
    lineaGrilla: {
    "grilla-1": [],
    "grilla-2": [],
    "grilla-3": [],
    "grilla-4": [],
    "grilla-5": [],
    "grilla-6": [],
    "grilla-7": [],
    "grilla-8": [],
    "grilla-9": [],
    "grilla-10": [],
    "grilla-11": [],
    "grilla-12": [],
    "grilla-13": [],
    "grilla-14": [],
    "grilla-15": [],
    "grilla-16": [],
    "grilla-17": [],
    "grilla-18": [],
    "grilla-19": [],
    "grilla-20": [],
    "grilla-21": [],
    "grilla-22": [],
  },
  nivelAgua: [],
  nivelAguaGral: [],
  nivelTinta: [],
  nivelTintaGral: [],
  colorElemento: ''
};
let objetoMagenta = JSON.parse(JSON.stringify(objetoAmarillo));
let objetoCian = JSON.parse(JSON.stringify(objetoAmarillo));
let objetoNegro = JSON.parse(JSON.stringify(objetoAmarillo));
let objetoEspecial = JSON.parse(JSON.stringify(objetoAmarillo));
let objetoBarniz = JSON.parse(JSON.stringify(objetoAmarillo));
let primeraPantalla = true;
let segundaPantalla = false;
let objetoRender = {
  boton1: {
    boton: "",
    elementosColoreados: [],
    linea1: "",
    claseElemento: "",
    colorElemento: ""
  }
};
const colorNames = {
  "rgb(255,255,0)": "amarillo",
  "rgb(0,0,255)": "azul",
  "rgb(255,0,255)": "magenta",
  "rgb(0,0,0)": "negro",
  "rgb(255,130,0)": "especial",
  "rgb(200,200,200)": "barniz",
};
function getColorName(color) {
  const rgbColor = typeof color === "string" ? color : color.toString();      
  return colorNames[rgbColor] || "desconocido";
}

function crearBotonSuma(color, linea1, linea2, linea3) {
  const contenedorPrincipal = document.getElementById('columna-30');
  const botonesSuma = []; 
  const indexarElements = document.querySelectorAll('.indexar');

  for (let i = 1; i <= 22; i++) {
    const elementoSuma = document.createElement('div');
    elementoSuma.classList.add('linea-control', 'suma');
    elementoSuma.id = `bot-${i}`;
    contenedorPrincipal.appendChild(elementoSuma);
    botonesSuma.push(elementoSuma);

    let intervalID = null; // 🔸 Cada botón mantiene su propio intervalo

    // 🔸 Lógica de inicio común para mouse y táctil
    const iniciarAccion = () => {
      if (!flagAplicacion) {
        alertaBotones.style.display = 'flex';
        alertaBotones.style.backgroundColor = verde;
        alertaBotones.style.color = 'black';
        alertaBotones.style.top = '20vh';
        desactivarClicEnElementos(buttSelector, buttSelector, botonesPerfilColor, buttsControl, buttsColores, buttSuma, buttResta);
        setTimeout(() => {
          alertaBotones.style.backgroundColor = '';
          alertaBotones.style.color = '';
        }, 500);
        return;
      }

      const numeroBoton = elementoSuma.id.match(/\d+/)?.[0];
      elementoSuma.style.backgroundColor = 'rgb(0, 250, 254)';
      const colorName = getColorName(color);
      const lineaID = `linea-${numeroBoton}`;
      const ledID = `led-${numeroBoton}`;
      const ledGeneral = `grilla-${numeroBoton}`;

      const ledsRuta = `#columna-70 #${lineaID} #display-leds .leds`;
      const ledControlRuta = `#control-perfiles #led-${numeroBoton} .led`;
      const ledGeneralRuta = `#perfil-${colorName} #grilla-${numeroBoton} .led-general`;

      const coleccionLeds = document.querySelectorAll(ledsRuta);
      const coleccionLed = document.querySelectorAll(ledControlRuta);
      const coleccionGeneral = document.querySelectorAll(ledGeneralRuta);

      let index = (coleccionLeds.length - 1) - almacenObjetos[objetoGlobal][colorName][linea1][lineaID].length;

      intervalID = setInterval(() => {
        if (index >= 0) {
          coleccionLeds[index].style.backgroundColor = rojo;
          coleccionLed[index].style.backgroundColor = color;
          coleccionGeneral[index].style.backgroundColor = color;

          almacenObjetos[objetoGlobal][colorName][linea1][lineaID].push(index);
          almacenObjetos[objetoGlobal][colorName][linea2][ledID].push(index);
          almacenObjetos[objetoGlobal][colorName][linea3][ledGeneral].push(index);

          guardarObjetoEnLocalStorage();
          guardarCambiosGeneralesEnAlmacen();
          index--;
        } else {
          clearInterval(intervalID);
          intervalID = null;
        }
      }, 177);

      const indexarElement = indexarElements[i - 1];
      if (indexarElement) {
        indexarElement.style.color = 'red';
        indexarElement.style.fontSize = '1em';
        indexarElement.style.fontWeight = 'bold';
      }
    };

    // 🔸 Lógica de detención común
    const detenerAccion = () => {
      const indexarElement = indexarElements[i - 1];
      if (indexarElement) {
        indexarElement.style.color = '';
        indexarElement.style.fontSize = '';
        indexarElement.style.fontWeight = '';
      }
      elementoSuma.style.backgroundColor = '';
      if (intervalID) {
        clearInterval(intervalID);
        intervalID = null;
      }
    };

    // 🖱️ Eventos para PC
    elementoSuma.addEventListener('mousedown', iniciarAccion);
    elementoSuma.addEventListener('mouseup', detenerAccion);
    elementoSuma.addEventListener('mouseleave', detenerAccion);

    // 📱 Eventos para táctiles
    elementoSuma.addEventListener('touchstart', (e) => {
      e.preventDefault(); // evita scroll o zoom
      iniciarAccion();
    }, { passive: false });

    elementoSuma.addEventListener('touchend', detenerAccion, { passive: true });
    elementoSuma.addEventListener('touchcancel', detenerAccion, { passive: true });
  }
}

function guardarObjetoEnLocalStorage(){
  localStorage.setItem('objetoAmarillo', JSON.stringify(objetoAmarillo));
  localStorage.setItem('objetoMagenta', JSON.stringify(objetoMagenta));
  localStorage.setItem('objetoCian', JSON.stringify(objetoCian));
  localStorage.setItem('objetoNegro', JSON.stringify(objetoNegro));
  localStorage.setItem('objetoEspecial', JSON.stringify(objetoEspecial));
  localStorage.setItem('objetoBarniz', JSON.stringify(objetoBarniz));
}

function traerObjetoDeLocalStorage() {
  const objetoAmarilloDesdeLocal = JSON.parse(localStorage.getItem('objetoAmarillo') || '{}'); 
  const objetoMagentaDesdeLocal = JSON.parse(localStorage.getItem('objetoMagenta') || '{}');
  const objetoCianDesdeLocal = JSON.parse(localStorage.getItem('objetoCian') || '{}');
  const objetoNegroDesdeLocal = JSON.parse(localStorage.getItem('objetoNegro') || '{}');
  const objetoEspecialDesdeLocal = JSON.parse(localStorage.getItem('objetoEspecial') || '{}');
  const objetoBarnizDesdeLocal = JSON.parse(localStorage.getItem('objetoBarniz') || '{}');
  if (Object.keys(objetoAmarilloDesdeLocal).length > 0) {
    // Reasignar las propiedades del objeto local al objeto global
    Object.assign(objetoAmarillo, objetoAmarilloDesdeLocal);
  } else {
    console.warn('El objeto no existe en localStorage o está vacío.');
  }
  if (Object.keys(objetoMagentaDesdeLocal).length > 0) {
    // Reasignar las propiedades del objeto local al objeto global
    Object.assign(objetoMagenta, objetoMagentaDesdeLocal);
  } else {
    console.warn('El objeto no existe en localStorage o está vacío.');
  }
  if (Object.keys(objetoCianDesdeLocal).length > 0) {
    // Reasignar las propiedades del objeto local al objeto global
    Object.assign(objetoCian, objetoCianDesdeLocal);
  } else {
    console.warn('El objeto no existe en localStorage o está vacío.');
  }
  if (Object.keys(objetoNegroDesdeLocal).length > 0) {
    // Reasignar las propiedades del objeto local al objeto global
    Object.assign(objetoNegro, objetoNegroDesdeLocal);
  } else {
    console.warn('El objeto no existe en localStorage o está vacío.');
  }
  if (Object.keys(objetoEspecialDesdeLocal).length > 0) {
    // Reasignar las propiedades del objeto local al objeto global
    Object.assign(objetoEspecial, objetoEspecialDesdeLocal);
  } else {
    console.warn('El objeto no existe en localStorage o está vacío.');
  }
  if (Object.keys(objetoBarnizDesdeLocal).length > 0) {
    // Reasignar las propiedades del objeto local al objeto global
    Object.assign(objetoBarniz, objetoBarnizDesdeLocal);
  } else {
    console.warn('El objeto no existe en localStorage o está vacío.');
  }
  ensayoAplicacion(objetoMagenta,'#perfil-magenta',magenta,'magenta'); 
  ensayoAplicacion(objetoAmarillo,'#perfil-amarillo',amarillo,'amarillo');      
  ensayoAplicacion(objetoCian,'#perfil-azul',cian,'cyan');     
  ensayoAplicacion(objetoNegro,'#perfil-negro',negro,'negro'); 
  ensayoAplicacion(objetoEspecial,'#perfil-especial',especial,'especial');         
  ensayoAplicacion(objetoBarniz,'#perfil-barniz',barniz,'barniz');
}
function vaciarObjeto(){
  const objetos = [objetoAmarillo, objetoMagenta, objetoCian, objetoNegro, objetoEspecial, objetoBarniz];  
  objetos.forEach(objeto => {
    for (let key in objeto) {
      if (typeof objeto[key] === 'object' && !Array.isArray(objeto[key])) { 
        // Si es un objeto, limpiarlo recursivamente
        for (let subKey in objeto[key]) {
          objeto[key][subKey] = [];
        }
      } else if (Array.isArray(objeto[key])) {
        // Si es un array, vaciarlo
        objeto[key] = [];
      } else {
        // Si es otro tipo de dato, inicializarlo
        objeto[key] = '';
      }
    }
  });  
  guardarObjetoEnLocalStorage();
}
function vaciarAlmacenObjetos() {
  // 1. Traer el objeto almacenado en localStorage
  const almacenJSON = localStorage.getItem('coloresRegistrados');

  if (!almacenJSON) {
    console.log("El almacén de objetos está vacío o no existe.");
    return;
  }

  // Parsear el objeto JSON almacenado
  almacenObjetos = JSON.parse(almacenJSON);
  console.log("Almacén antes de vaciarlo:", almacenObjetos);

  // 2. Vaciar el objeto
  almacenObjetos = {};

  // 3. Guardar los cambios en localStorage
  localStorage.setItem('coloresRegistrados', JSON.stringify(almacenObjetos));

  console.log("El almacén de objetos ha sido vaciado.");
}
let buttonSmart = document.getElementById('seleccion-gral')
let intervaloLeds; // Declaración global
buttonSmart.addEventListener('mousedown', () =>{
  primeraPantalla = false
  segundaPantalla = true
  objetoAmarillo.linea['linea-11'].push(1);
  guardarObjetoAmarillo(objetoAmarillo)
  console.log(objetoAmarillo)
})
buttonSmart.addEventListener('mouseup', () =>{
  // Detener el intervalo si todos los LEDs han sido coloreados
  clearInterval(intervaloLeds);
  console.log("Todos los LEDs han sido coloreados.");  
})
function guardarObjetoEnLocal(objeto) {
  // Convertir el objeto a una cadena JSON
  const objetoString = JSON.stringify(objeto);
  
  // Guardarlo en localStorage
  localStorage.setItem('informacionCopia', objetoString);
  
}
function guardarObjetoAmarillo(objetoAmarillo) {   
  try {
      // Convertir el objeto a una cadena JSON
      const objetoString = JSON.stringify(objetoAmarillo);

      // Guardar en localStorage con la clave "objetoAmarillo"
      localStorage.setItem("objetoAmarillo", objetoString);

      console.log("Objeto guardado exitosamente:", objetoAmarillo);
  } catch (error) {
      console.error("Error al guardar el objeto en localStorage:", error);
  }
} 
function guardarobjetoMagenta(objetoMagenta) {
  try {
      // Convertir el objeto a una cadena JSON
      const objetoString = JSON.stringify(objetoMagenta);

      // Guardar en localStorage con la clave "objetoAmarillo"
      localStorage.setItem("objetoMagenta", objetoString);

      console.log("Objeto guardado exitosamente:", objetoMagenta);
  } catch (error) {
      console.error("Error al guardar el objeto en localStorage:", error);
  }
}
function guardarObjetoCian(objetoCian) {
  try {
    const objetoString = JSON.stringify(objetoCian);
    localStorage.setItem("objetoCian", objetoString);
    console.log("Objeto guardado exitosamente:", objetoCian);
  } catch (error) {
    console.error("Error al guardar el objeto en localStorage:", error);
  }
}
function guardarObjetoNegro(objetoNegro) {
  try {
    const objetoString = JSON.stringify(objetoNegro);
    localStorage.setItem("objetoNegro", objetoString);
    console.log("Objeto guardado exitosamente:", objetoNegro);
  } catch (error) {
    console.error("Error al guardar el objeto en localStorage:", error);
  }
}
function guardarObjetoEspecial(objetoEspecial) {
  try {
    const objetoString = JSON.stringify(objetoEspecial);
    localStorage.setItem("objetoEspecial", objetoString);
    console.log("Objeto guardado exitosamente:", objetoEspecial);
  } catch (error) {
    console.error("Error al guardar el objeto en localStorage:", error);
  }
}
function guardarObjetoBarniz(objetoBarniz) {
  try {
    const objetoString = JSON.stringify(objetoBarniz);
    localStorage.setItem("objetoBarniz", objetoString);
    console.log("Objeto guardado exitosamente:", objetoBarniz);
  } catch (error) {
    console.error("Error al guardar el objeto en localStorage:", error);
  }
}  
function vaciarObjetosPerfiles() {
  // Lista de nombres de los objetos a vaciar
  const objetos = ["objetoAmarillo", "objetoMagenta", "objetoCian", "objetoNegro", "objetoEspecial", "objetoBarniz"];
  // Estructura base para reiniciar
  const estructuraBase = {
    clase: '',
    claseSeguidor: '',
    claseGrilla: '',
    linea: {
      "linea-1": [],
      "linea-2": [],
      "linea-3": [],
      "linea-4": [],
      "linea-5": [],
      "linea-6": [],
      "linea-7": [],
      "linea-8": [],
      "linea-9": [],
      "linea-10": [],
      "linea-11": [],
      "linea-12": [],
      "linea-13": [],
      "linea-14": [],
      "linea-15": [],
      "linea-16": [],
      "linea-17": [],
      "linea-18": [],
      "linea-19": [],
      "linea-20": [],
      "linea-21": [],
      "linea-22": [],
    },
    lineaSeguidor: {
      "led-1": [],
      "led-2": [],
      "led-3": [],
      "led-4": [],
      "led-5": [],
      "led-6": [],
      "led-7": [],
      "led-8": [],
      "led-9": [],
      "led-10": [],
      "led-11": [],
      "led-12": [],
      "led-13": [],
      "led-14": [],
      "led-15": [],
      "led-16": [],
      "led-17": [],
      "led-18": [],
      "led-19": [],
      "led-20": [],
      "led-21": [],
      "led-22": [],
    },
    lineaGrilla: {
      "grilla-1": [],
      "grilla-2": [],
      "grilla-3": [],
      "grilla-4": [],
      "grilla-5": [],
      "grilla-6": [],
      "grilla-7": [],
      "grilla-8": [],
      "grilla-9": [],
      "grilla-10": [],
      "grilla-11": [],
      "grilla-12": [],
      "grilla-13": [],
      "grilla-14": [],
      "grilla-15": [],
      "grilla-16": [],
      "grilla-17": [],
      "grilla-18": [],
      "grilla-19": [],
      "grilla-20": [],
      "grilla-21": [],
      "grilla-22": [],
    },
    colorElemento: '',
    contadorPulsos: [], 
  };

  // Iterar sobre cada objeto
  objetos.forEach(nombre => {
    if (window[nombre]) {
      const objeto = window[nombre];
      // Restablecer al estado inicial
      Object.assign(objeto, JSON.parse(JSON.stringify(estructuraBase)));
    }
    // Eliminar del localStorage
    localStorage.removeItem(nombre);
  });
  console.log("Objetos vaciados y eliminados de localStorage.");

}
document.querySelector('#boton-reseteo').addEventListener('click', () =>{
  alertaGlobal='boton-reseteo'
  var elementosExcluidos = ['simulador','butt-perfil-tinta', 'butt-control-tinta', 'butt-perfil', 'butt-job-track', 'boton-perfiles', 'interfaz-perfiles','boton-reseteo','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4','spn-blur-5','spn-blur-6','spn-blur-7']  
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  container1.style.display = 'none'
  desactivarClick(['.butt-perfiles']); 
  saltarAlerta('Esta acción elimina definitivamente los perfiles guardados ', 'reseteo') 
})

// BOTON SALA
document.querySelector('#boton-prensas').addEventListener('click', () =>{
  var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','container01']  
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  interfazPerfiles.classList.remove('move-perfiles-entintado')

  document.querySelector('.sections').style.display = 'grid' 
  document.querySelector('#contenedor-botonera').style.display = 'grid'
})

// CREACION DE PERFILES
document.querySelector('#boton-perfiles').addEventListener('click', () =>{
  var elementosExcluidos = ['simulador','butt-perfil-tinta', 'butt-control-tinta', 'butt-perfil', 'butt-job-track', 'boton-perfiles', 'interfaz-perfiles', 'boton-reseteo','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4','spn-blur-5','spn-blur-6','spn-blur-7']  
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'   
    }
  } 
  container1.style.display = 'none'
  desactivarClick(['.butt-perfiles']); 
  restablecerClick(['.butt-revierte'])
  setTimeout(() => {
    moverFormulario()

  if (esDesktop) {
    inputPerfil.focus();
  }     
    inputPerfil.value = ''
  }, 20);
})

function traerObjetoAmarillo() {
  try {
    // Recuperar el objeto almacenado en localStorage
    const objetoString = localStorage.getItem("objetoAmarillo");

    if (objetoString) {
      // Convertir la cadena JSON de vuelta a un objeto
      const objeto = JSON.parse(objetoString);
      console.log("Objeto recuperado exitosamente:", objeto);
      return objeto;
    } else {
      console.warn("No se encontró un objeto en localStorage. Devolviendo un objeto vacío.");
      return {
        clase: [],
        claseSeguidor: [],
        claseGrilla: [],
        linea: '',
        lineaSeguidor: '',
        lineaGrilla: '',
        colorPerfilGrilla: '',
        colorElemento: '',
        contadorPulsos: []
      };
    }
  }
  catch (error) {
    console.error("Error al recuperar el objeto desde localStorage:", error);
    return {
      clase: [],
      claseSeguidor: [],
      linea: '',
      lineaSeguidor: '',
      colorElemento: '',
      contadorPulsos: []
    };
  }
}
function traerObjetoMagenta() {
  try {
    // Recuperar el objeto almacenado en localStorage
    const objetoString = localStorage.getItem("objetoMagenta");

    if (objetoString) {
      // Convertir la cadena JSON de vuelta a un objeto
      const objeto = JSON.parse(objetoString);
      console.log("Objeto recuperado exitosamente:", objeto);
      return objeto;
    } else {
      console.warn("No se encontró un objeto en localStorage. Devolviendo un objeto vacío.");
      return {
        clase: [],
        claseSeguidor: [],
        claseGrilla: [],
        colorPerfilGrilla: '',
        linea: '',
        lineaSeguidor: '',
        lineaGrilla: '',
        colorElemento: '',
        contadorPulsos: []
      };
    }
  }
  catch (error) {
    console.error("Error al recuperar el objeto desde localStorage:", error);
    return {
      clase: [],
      claseSeguidor: [],
      linea: '',
      lineaSeguidor: '',
      colorElemento: '',
      contadorPulsos: []
    };
  }
}
function traerObjetoCian() {
  try {
    // Recuperar el objeto almacenado en localStorage
    const objetoString = localStorage.getItem("objetoCian");

    if (objetoString) {
      // Convertir la cadena JSON de vuelta a un objeto
      const objeto = JSON.parse(objetoString);
      console.log("Objeto recuperado exitosamente:", objeto);
      return objeto;
    } else {
      console.warn("No se encontró un objeto en localStorage. Devolviendo un objeto vacío.");
      return {
        clase: [],
        claseSeguidor: [],
        claseGrilla: [],
        colorPerfilGrilla: '',
        linea: '',
        lineaSeguidor: '',
        lineaGrilla: '',
        colorElemento: '',
        contadorPulsos: []
      };
    }
  }
  catch (error) {
    console.error("Error al recuperar el objeto desde localStorage:", error);
    return {
      clase: [],
      claseSeguidor: [],
      linea: '',
      lineaSeguidor: '',
      colorElemento: '',
      contadorPulsos: []
    };
  }
}
function traerObjetoNegro() {
  try {
    // Recuperar el objeto almacenado en localStorage
    const objetoString = localStorage.getItem("objetoNegro");

    if (objetoString) {
      // Convertir la cadena JSON de vuelta a un objeto
      const objeto = JSON.parse(objetoString);
      console.log("Objeto recuperado exitosamente:", objeto);
      return objeto;
    } else {
      console.warn("No se encontró un objeto en localStorage. Devolviendo un objeto vacío.");
      return {
        clase: [],
        claseSeguidor: [],
        claseGrilla: [],
        colorPerfilGrilla: '',
        linea: '',
        lineaSeguidor: '',
        lineaGrilla: '',
        colorElemento: '',
        contadorPulsos: [],
        nivelTinta: [],
        nivelAgua: []
      };
    }
  }
  catch (error) {
    console.error("Error al recuperar el objeto desde localStorage:", error);
    return {
      clase: [],
      claseSeguidor: [],
      linea: '',
      lineaSeguidor: '',
      colorElemento: '',
      contadorPulsos: []
    };
  }
}
function traerObjetoEspecial() {
  try {
    // Recuperar el objeto almacenado en localStorage
    const objetoString = localStorage.getItem("objetoEspecial");

    if (objetoString) {
      // Convertir la cadena JSON de vuelta a un objeto
      const objeto = JSON.parse(objetoString);
      console.log("Objeto recuperado exitosamente:", objeto);
      return objeto;
    } else {
      console.warn("No se encontró un objeto en localStorage. Devolviendo un objeto vacío.");
      return {
        clase: [],
        claseSeguidor: [],
        claseGrilla: [],
        colorPerfilGrilla: '',
        linea: '',
        lineaSeguidor: '',
        lineaGrilla: '',
        colorElemento: '',
        contadorPulsos: []
      };
    }
  }
  catch (error) {
    console.error("Error al recuperar el objeto desde localStorage:", error);
    return {
      clase: [],
      claseSeguidor: [],
      linea: '',
      lineaSeguidor: '',
      colorElemento: '',
      contadorPulsos: []
    };
  }
}
function traerObjetoBarniz() {
  try {
    // Recuperar el objeto almacenado en localStorage
    const objetoString = localStorage.getItem("objetoBarniz");

    if (objetoString) {
      // Convertir la cadena JSON de vuelta a un objeto
      const objeto = JSON.parse(objetoString);
      console.log("Objeto recuperado exitosamente:", objeto);
      return objeto;
    } else {
      console.warn("No se encontró un objeto en localStorage. Devolviendo un objeto vacío.");
      return {
        clase: [],
        claseSeguidor: [],
        claseGrilla: [],
        colorPerfilGrilla: '',
        linea: '',
        lineaSeguidor: '',
        lineaGrilla: '',
        colorElemento: '',
        contadorPulsos: []
      };
    }
  }
  catch (error) {
    console.error("Error al recuperar el objeto desde localStorage:", error);
    return {
      clase: [],
      claseSeguidor: [],
      linea: '',
      lineaSeguidor: '',
      colorElemento: '',
      contadorPulsos: []
    };
  }
}
function aplicarColorDesdeObjeto(objeto) {
  if(objeto === objetoAmarillo){
    // 1. Capturar la colección de elementos
    const lineaLeds = document.querySelectorAll('#columna-70 #linea-1 #display-leds .leds')
    const lineaSeguidor = document.querySelectorAll('#control-perfiles #led-1 .led')
    const lineaGeneral = document.querySelectorAll('#perfil-amarillo #grilla-1 .led-general')

    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelAgua = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const nivelTintaGral = document.querySelectorAll('#footer-amarillo #footer-7 .divs-grales-tinta-amarillo');
    const nivelAguaGral = document.querySelectorAll('#footer-amarillo #footer-8 .divs-grales-solucion-amarillo');
    const ledsTinta = document.getElementsByClassName('lineas-tinta');
    const ledsAgua = document.getElementsByClassName('lineas-solucion');
    const displayAgua = document.getElementById('solucion-porcentaje')
    const displayTinta = document.getElementById('tinta-perc')

    let ledsParaColorear = objeto.linea["linea-1"].length;
    console.log('LEDS : ', ledsParaColorear)

  }
}
function traerObjetoDeLocal() {
  const objetoString = localStorage.getItem('informacionCopia');

  if (objetoString) {
    let objetos = JSON.parse(objetoString);

    if (Array.isArray(objetos)) {
      // Limitar a los primeros 22 elementos
      objetos = objetos.slice(0, 22);

      console.log('Información del objeto recuperado de localStorage:');
      objetos.forEach((objetoActual, index) => {
        console.log(`Elemento ${index + 1}:`);
        console.log(`botonOprimido: ${objetoActual.botonOprimido}`);
        console.log(`lineaActual: ${objetoActual.lineaActual}`);
        console.log(`ledActual: ${objetoActual.ledActual}`);
        console.log(`ledSecundario: ${objetoActual.ledSecundario}`);
        console.log(`ledsColoreados: ${objetoActual.ledsColoreados.length}`);
        console.log(`colorAplicadoContador: ${objetoActual.colorAplicadoContador}`);
        console.log(`clasesColoreadas: ${objetoActual.clasesColoreadas.join(', ')}`);
        console.log(`clasesColoreadas: ${objetoActual.colorElemento}`);
        console.log('---');
      });

      // Llama a renderizarObjetoLocal con el array de objetos
      objetos.forEach((objetoActual) => {
        renderizarObjetoLocal(objetoActual);
      });

      return objetos;
    } else {
      console.log('El objeto recuperado no es una lista.');
      return null;
    }
  } else {
    console.log('No se encontró objeto en localStorage.');
    return null;
  }
}
function renderizarObjetoLocal(objetoActual) {
  const elementosObjeto = document.querySelectorAll(`#${objetoActual.lineaActual} .${objetoActual.clasesColoreadas[0]}`);
  const elementosLedObjeto = document.querySelectorAll(`#${objetoActual.lineaActual} .${objetoActual.ledActual}`);
  const elementosGrillaObjeto = document.querySelectorAll(`#${objetoActual.lineaActual} .${objetoActual.ledSecundario}`);

  if (elementosObjeto.length > 0 || elementosLedObjeto.length || elementosGrillaObjeto.length > 0) {
    const limite = objetoActual.colorAplicadoContador;
    let coloreados = 0;

    // Aplicar el color almacenado
    for (let i = elementosObjeto.length - 1; i >= 0; i--) {
      if (coloreados < limite) {
        elementosObjeto[i].style.backgroundColor = objetoActual.colorElemento; // Usa el color directamente.
        coloreados++;
      } else {
        break;
      }
    }

    for (let i = elementosLedObjeto.length - 1; i >= 0; i--) {
      if (coloreados < limite) {
        elementosLedObjeto[i].style.backgroundColor = objetoActual.colorElemento;
        coloreados++;
      } else {
        break;
      }
    }
  } else {
    console.warn('No se encontraron elementos para aplicar color.');  
  }
}
function vaciarObjetoEnLocal() {
  // Eliminar el objeto almacenado en localStorage
  localStorage.removeItem('objetoAmarillo');
  
  console.log('Objeto eliminado de localStorage');
}  
function guardarCambios(nombreClave) {
  if (objetoGlobal) {
    try {
      // Convertir el objeto a una cadena JSON y almacenarlo en localStorage
      localStorage.setItem(nombreClave, JSON.stringify(almacenObjetos));
      console.log(`Cambios guardados bajo la clave: ${nombreClave}`);
    } catch (error) {
      console.error("Error al guardar los cambios en localStorage:", error);
    }
  } else {
    console.warn("No hay una instancia cargada para guardar cambios.");
  }
}
function cargarInstanciaDesdeLocalEnObjetoglobal(nombreClave) {
  const instanciaGuardada = localStorage.getItem(nombreClave);
    
  if (instanciaGuardada) {
    try {
      objetoGlobal = JSON.parse(instanciaGuardada);
      console.log(`Instancia cargada desde la clave "${nombreClave}":`, objetoGlobal);  
    } catch (error) {
      console.error("Error al parsear la instancia desde localStorage:", error);
      objetoGlobal = null;
    }
  } else {
    console.warn(`No se encontró ninguna instancia bajo la clave "${nombreClave}".`);
  }
}

inputPerfil.addEventListener('input', function () {
  const valor = this.value
    .toLowerCase()                         // normaliza todo
    .replace(/\b\w/g, c => c.toUpperCase()); // mayúscula por palabra

  this.value = valor;
});
inputPerfil.addEventListener('focusin',() =>{
  if(!esDesktop) showKeyboard()
})
inputPerfil.addEventListener('blur', () => {
  if(!esDesktop) hideKeyboard()
});


function vaciarTodoAlmacenObjetos() {
  localStorage.clear(); // Borra todo el contenido de localStorage
  console.log("Todos los objetos han sido eliminados del almacenamiento local.");
}

document.getElementById('btn-crea-perfil').addEventListener('click', () => {
  // Capturar el valor del input
  let inputNombre = inputPerfil.value.trim();
  if (inputNombre === '') {
    saltarAlerta('Por favor, ingrese un nombre válido', 'perfilador');
    return;
  }
  // Capitalizar la primera letra de cada palabra
  inputNombre = capitalizarTexto(inputNombre);
  if (almacenObjetos[inputNombre]) {
    saltarAlerta('Ya existe un perfil con este nombre', 'perfilExiste');
    /* mostrarVentanaEmergente('Ya existe un perfil con este nombre'); */
    return;
  }
  // Crear una nueva instancia de la clase objetoColores
  const nuevoObjeto = new objetoColores();
 
  // Almacenar el objeto en el almacén bajo el nombre del input 
  almacenObjetos[inputNombre] = nuevoObjeto;
  // Crear un nuevo objeto ordenado alfabéticamente por las claves
  const almacenObjetosOrdenado = Object.keys(almacenObjetos)
    .sort() // Ordenar las claves alfabéticamente
    .reduce((obj, key) => {
      obj[key] = almacenObjetos[key]; // Reconstruir el objeto con las claves ordenadas
      return obj;
    }, {});
  // Actualizar el almacén con el objeto ordenado
  almacenObjetos = almacenObjetosOrdenado;
  // Guardar el objeto ordenado en localStorage
  localStorage.setItem('coloresRegistrados', JSON.stringify(almacenObjetos));
  // Notificar al usuario
  console.log(`Perfil "${inputNombre}" creado y almacenado.`);
  console.log("Objeto almacenado en la variable global:", objetoGlobal);
  console.log(almacenObjetos);
  // Mostrar mensaje de éxito
  /* mostrarVentanaEmergente('Perfil creado y almacenado'); */
  saltarAlerta('Perfil creado y almacenado','perfilAgregado')
  // Limpiar el input
  inputPerfil.value = '';
  // Recuperar y mostrar el almacén desde localStorage
  const almacenJSON = localStorage.getItem('coloresRegistrados');
  if (almacenJSON) {
    const almacenRecuperado = JSON.parse(almacenJSON);
    console.log("Almacén de Objetos:", "almacenObjetos"); // Nombre del almacén 
    Object.keys(almacenRecuperado).forEach(nombreObjeto => {
      console.log(`- Objeto: ${nombreObjeto}`); // Nombre del objeto
      const propiedades = Object.keys(almacenRecuperado[nombreObjeto]);
      console.log("  Propiedades principales:", propiedades.join(", "));
    });
    console.log('VARIABLE GLOBAL CON JSON :', JSON.stringify(objetoGlobal, null, 2));
    console.log('VARIABLE GLOBAL SIN JSON :', objetoGlobal);
  } else {
    console.log("No se encontraron objetos almacenados en el localStorage.");
  }
  /* restablecerClick(['.butt-perfiles', '.jobs']) */
});

// Función para capitalizar la primera letra de cada palabra
function capitalizarTexto(texto) {
  return texto.replace(/\b\w/g, char => char.toUpperCase());
}
// Función para actualizar y mostrar la lista de nombres
function actualizarListaNombres() {
  const listaNombresContainer = document.getElementById('listaNombresContainer');  
  // Limpiar el contenedor antes de actualizarlo
  listaNombresContainer.innerHTML = '';

  // Obtener los nombres del almacén y ordenarlos alfabéticamente
  const nombresOrdenados = Object.keys(almacenObjetos)
    .sort(); // Ordenar alfabéticamente

  // Iterar sobre los nombres ordenados y mostrarlos en el contenedor
  nombresOrdenados.forEach(nombre => {
    const nombreDiv = document.createElement('div');
    nombreDiv.textContent = nombre; // Mostrar el nombre con formato
    nombreDiv.classList.add('elemento-objeto'); // Agregar clase para estilos o identificación

    // Agregar evento de clic al elemento dinámico
    nombreDiv.addEventListener('click', () => {
      resaltarElemento(nombreDiv);
    });

    listaNombresContainer.appendChild(nombreDiv);
  });
}
// Función para resaltar un elemento y ocultar los demás
function resaltarElemento(elementoClicado) {
  const listaNombresContainer = document.getElementById('listaNombresContainer');
  const nombresDivs = Array.from(listaNombresContainer.querySelectorAll('.elemento-objeto'));

  // Quitar el color de fondo y mostrar todos los elementos primero
  nombresDivs.forEach(div => {
    div.style.backgroundColor = ''; // Restaurar el color original
    div.style.color = ''; // Restaurar el color del texto
    div.style.display = 'block'; // Mostrar todos los elementos
  });

  // Aplicar el color azul de fondo al elemento clicado
  elementoClicado.style.backgroundColor = 'blue';
  elementoClicado.style.color = 'white';

  // Ocultar todos los demás elementos
  nombresDivs.forEach(div => {
    if (div !== elementoClicado) {
      div.style.display = 'none'; // Ocultar los demás
    }
   });
  document.querySelector('#filtroNombres input').value = '';
}
// LOGICA PARA ADMINISTRAR EL objetoGlobal
function cargarObjetoGlobalDesdeLocalStorage() {
  const datosObjetoGlobal = localStorage.getItem('objetoGlobal');
  if (datosObjetoGlobal) {
    try {
      objetoGlobal = JSON.parse(datosObjetoGlobal); // Carga objetoGlobal desde localStorage
      console.log('objetoGlobal cargado desde localStorage:', objetoGlobal);
    } catch (error) {
      console.error('Error al cargar objetoGlobal desde localStorage:', error);
    }
  } else {
    console.warn('No se encontraron datos de objetoGlobal en localStorage.');
  }
}
function guardarCambiosGeneralesEnAlmacen() {
  try {
    localStorage.setItem('coloresRegistrados', JSON.stringify(almacenObjetos));
    console.log('Todos los cambios en almacenObjetos guardados en localStorage.');
  } catch (error) {
    console.error('Error al guardar almacenObjetos en localStorage:', error);  
  }
}
// Función para mostrar la ventana emergente
function mostrarVentanaEmergente(mensaje) {
  const ventanaEmergente = document.getElementById('ventanaEmergente');
  const mensajeEmergente = document.getElementById('mensajeEmergente');
  mensajeEmergente.textContent = mensaje;
  ventanaEmergente.classList.remove('oculta');
}

document.getElementById('cerrarEmergente').addEventListener('click', () => {
  let conteCMYK = document.querySelector('#padre-cmyk');
  let conteRGB = document.querySelector('#padre-rgb');
  const mensajeEmergente = document.getElementById('mensajeEmergente');
  conteJobTrack.classList.remove('move-job-track')

  if (mensajeEmergente.textContent === 'Perfil creado y almacenado') {
    document.getElementById('ventanaEmergente').classList.add('oculta');
    document.querySelector('#unit-job-track').style.display = 'flex';

    // Verificar si alguno de los dos contenedores tiene display "grid"
    let cmykVisible = window.getComputedStyle(conteCMYK).display === 'grid';
    let rgbVisible = window.getComputedStyle(conteRGB).display === 'grid';
    buscaNombre.focus()


    if (!cmykVisible && !rgbVisible) { 
      conteJobTrack.classList.add('move-job-track'); 
    }

    inputPerfil.value = '';
    document.querySelectorAll('.datos-base').forEach((elemento) => {
      elemento.textContent = '';
    });

    desactivarClick(['.butt-perfiles']);
    restablecerClick(['.cont-vacio']);

    setTimeout(() => {
      ocultarElemento('#formulario-perfiles');
    }, 200);

    setTimeout(() => {
      mostrarElemento('.files-job');
      inputPerfil.focus();
      inputPerfil.value = '';
    }, 700);
    
  }
  if (mensajeEmergente.textContent === 'Por favor, ingrese un nombre válido') {
    document.getElementById('ventanaEmergente').classList.add('oculta');
    inputPerfil.focus();
    inputPerfil.value = '';
    detenerParpadeo() 
    if (esDesktop) {
      buscaNombre.focus()
    }    
  }
  if (mensajeEmergente.textContent === 'Cargue la base de datos antes de generar el perfil de color') {
    document.getElementById('ventanaEmergente').classList.add('oculta');
    if (esDesktop) {
      creaNombre.focus()
    }
    detenerParpadeo() 
    buscaNombre.value = ''
    creaNombre.value = ''

    botonesPerfilColor.forEach(elemento => {   
      elemento.style.display = 'block';   
    });
    limpiarColoresDeFondo()
    desactivarClick(['.butt-perfiles', '.estilo-1']);  
    mostrarNombresDeObjetos(); 
    setTimeout(() => {
      if (listaClientes && listaClientes.children.length === 0) {
        mostrarVentanaMensaje('El almacenamiento y la base de datos estan vacíos')
      }
    }, 50);      


  }
  if (mensajeEmergente.textContent === 'Ya existe un perfil con este nombre') {
    document.getElementById('ventanaEmergente').classList.add('oculta');
  }    

});
function crearBotonResta(color, linea1, linea2, linea3) {
  const contenedorPrincipal = document.getElementById('columna-30');
  const botonesResta = [];

  const indexarElements = document.querySelectorAll('.indexar');
  for (let i = 1; i <= 22; i++) {
    const elementoResta = document.createElement('div');
    elementoResta.classList.add('linea-control', 'resta');
    elementoResta.id = `bot-resta-${i}`;
    contenedorPrincipal.appendChild(elementoResta);
    botonesResta.push(elementoResta);

    // 🔸 Se agrupa la lógica común para reutilizar en eventos táctiles y de mouse
    const iniciarResta = () => {
      if (!flagAplicacion) {
        alertaBotones.style.display = 'flex';
        alertaBotones.style.backgroundColor = verde;
        alertaBotones.style.color = 'black';
        alertaBotones.style.top = '20vh';
        desactivarClicEnElementos(buttSelector, buttSelector, botonesPerfilColor, buttsControl, buttsColores, buttSuma, buttResta);
        setTimeout(() => {
          alertaBotones.style.backgroundColor = '';
          alertaBotones.style.color = '';
        }, 500);
      } else {
        const numeroBoton = elementoResta.id.match(/\d+/)?.[0];
        elementoResta.style.backgroundColor = 'rgb(0, 250, 254)';
        const colorName = getColorName(color);
        const lineaID = `linea-${numeroBoton}`;
        const ledID = `led-${numeroBoton}`;
        const ledGeneral = `grilla-${numeroBoton}`;
        const ledsRuta = `#columna-70 #${lineaID} #display-leds .leds`;
        const ledControlRuta = `#control-perfiles #led-${numeroBoton} .led`;
        const ledGeneralRuta = `#perfil-${colorName} #grilla-${numeroBoton} .led-general`;
        const coleccionLeds = document.querySelectorAll(ledsRuta);
        const coleccionLed = document.querySelectorAll(ledControlRuta);
        const coleccionGeneral = document.querySelectorAll(ledGeneralRuta);
        console.log(' COLORNAME :', colorName);

        let index = (coleccionLeds.length) - almacenObjetos[objetoGlobal][colorName][linea1][lineaID].length;
        let intervalID = setInterval(() => {
          if (index === 24) return;
          if (index >= 0) {
            coleccionLeds[index].style.backgroundColor = '';
            coleccionLed[index].style.backgroundColor = '';
            coleccionGeneral[index].style.backgroundColor = '';

            almacenObjetos[objetoGlobal][colorName][linea1][lineaID].pop();
            almacenObjetos[objetoGlobal][colorName][linea2][ledID].pop();
            almacenObjetos[objetoGlobal][colorName][linea3][ledGeneral].pop();

            guardarObjetoEnLocalStorage();
            guardarCambiosGeneralesEnAlmacen();
            index++;
          } else {
            clearInterval(intervalID);
          }
        }, 177);

        const indexarElement = indexarElements[i - 1];
        if (indexarElement) {
          indexarElement.style.color = 'red';
          indexarElement.style.fontSize = '1em';
          indexarElement.style.fontWeight = 'bold';
        }

        const detenerResta = () => { // 🟡 Nueva función reutilizable
          const indexarElement = indexarElements[i - 1];
          if (indexarElement) {
            indexarElement.style.color = '';
            indexarElement.style.fontSize = '';
            indexarElement.style.fontWeight = '';
          }
          elementoResta.style.backgroundColor = '';
          clearInterval(intervalID);
        };

        elementoResta.addEventListener("mouseup", detenerResta);
        elementoResta.addEventListener("mouseleave", detenerResta);

        // 🟡 Nuevos eventos táctiles equivalentes a mouseup/mouseleave
        elementoResta.addEventListener("touchend", detenerResta, { passive: true });
        elementoResta.addEventListener("touchcancel", detenerResta, { passive: true });
      }
    };

    elementoResta.addEventListener("mousedown", iniciarResta);

    // 🟡 Nuevo: soporte táctil equivalente a mousedown
    elementoResta.addEventListener("touchstart", (e) => {
      e.preventDefault(); // evita scroll en pantallas táctiles
      iniciarResta();
    }, { passive: false });
  }


  }
function renderizarPerfilesTinta(color) {
  const todosLeds = document.querySelectorAll('.led, .leds');
  todosLeds.forEach(led => {
    led.style.backgroundColor = '';
  });

  let informacionBalance; // Variable para almacenar la información de los botones según el color
  let informacionBotones; // Variable para almacenar la información de los botones según el color
  switch(color) {
    case negro:
      informacionBotones = informacionBotonesNegro;
    break;
    case amarillo:
    informacionBotones = informacionBotonesAmarillo;
    break;
    case magenta:        
      informacionBotones = informacionBotonesMagenta;
    break;
    case cian:
      informacionBotones = informacionBotonesCyan;
    break;
    case especial:
      informacionBotones = informacionBotonesNaranja;
    break;
    case barniz:
      informacionBotones = informacionBotonesGris;
    break;  
    default:
    return; // Salir si no hay un color válido
  }
  aplicarColorLeds(informacionBotones, color);
}
function aplicarColorLeds(informacionBotones, color) {
  informacionBotones.forEach((obj, index) => {
    // Seleccionar todos los leds correspondientes a la linea actual
    const displayLedsLinea = document.querySelectorAll(`#linea-${index + 1} #display-leds .leds`);
    const displayLedsSeguidores = document.querySelectorAll(`#control-perfiles #led-${index + 1} .led`);      

    // Recorrer los índices de leds coloreados almacenados en el objeto
    obj.ledsColoreados.forEach((ledIndex) => {
      // Aplicar el color a cada led que se encuentra en el array ledsColoreados
      const led = displayLedsLinea[ledIndex];
      const seguidorLed = displayLedsSeguidores[ledIndex];      
      if (led) {
        led.style.backgroundColor = color; // Cambia 'red' por el color deseado
        led.dataset.color = color;
      }      
      if (seguidorLed) {
        seguidorLed.style.backgroundColor = color;
        seguidorLed.dataset.color = color;
      }
    });
  });
}
document.querySelector('#cont-modificadores span:nth-child(1)').addEventListener('click', () =>{
  interfazColor.style.display='none'
  resetPerfiles()
  desactivarEventos()
})
document.querySelector('#cont-modificadores span:nth-child(3)').addEventListener('click', () =>{
  var elementosExcluidos = ['simulador','interfaz-perfiles','inerfaz-ajuste-fino','perfil-individual','control-perfiles']  
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }  
  
})
function resetPerfiles() {
  resetColor(flagNegro, informacionBotonesNegro, 'negro');
  resetColor(flagCyan, informacionBotonesCyan, 'cyan');
  resetColor(flagMagenta, informacionBotonesMagenta, 'magenta');
  resetColor(flagEspecial, informacionBotonesNaranja, 'especial');
  resetColor(flagBarniz, informacionBotonesGris, 'barniz');
  resetColor(flagAmarillo, informacionBotonesAmarillo, 'yellow');
}
function resetColor(flag, informacionBotones, color) {
  const displaySolucion = document.getElementById('solucion-porcentaje')
  const displayTinta = document.getElementById('tinta-perc')
  if (flag) {
    informacionBotones.forEach(informacion => {
      informacion.ledsColoreados = []; 
      informacion.colorAplicadoContador = 0;
     });
    eliminarColoresConIntervalo(color);
    displaySolucion.textContent = 0 + '%'
    displayTinta.textContent = 0 + '%'
  }
}
//ELIMINA COLOR DE PERFILES
function eliminarColoresConIntervalo(perfil) {
  const dialogoFlotante = document.getElementById('dialogo-flotante'); 
  dialogoFlotante.style.display = 'block';  
  if (currentLinea === 0 && currentIndice === 0) {
    desactivarEventos();
  }
  if (currentLinea < numeroLineas) {
    // Seleccionar elementos de las líneas y perfiles correspondientes
    const lineaActual = document.querySelectorAll(`#linea-${currentLinea + 1} #display-leds .leds`);
    const lineaClon = document.querySelectorAll(`#perfil-${perfil} #grilla-${currentLinea + 1} .led-general`);
    const lineaCopiadora = document.querySelectorAll(`#led-${currentLinea + 1} .led`);
    const colecciones = [lineaActual, lineaClon, lineaCopiadora];
    if (currentIndice < lineaActual.length) {
      colecciones.forEach((coleccion) => {
        const elemento = coleccion[currentIndice];
        if (elemento && elemento.style.backgroundColor !== '') {
          elemento.style.backgroundColor = '';
          elemento.style.border = '';
          elemento.dataset.color = ''; // Limpiar el dataset
        }
      });
      currentIndice++;
      setTimeout(() => eliminarColoresConIntervalo(perfil), 1); // Llamar de nuevo con el mismo perfil
    } else {
      currentLinea++; // Pasar a la siguiente línea
      currentIndice = 0; // Reiniciar el índice para la nueva línea
      setTimeout(() => eliminarColoresConIntervalo(perfil), 1); // Llamar de nuevo con el mismo perfil
    }
  } else {
    // Reactivar los eventos cuando todo ha finalizado
    activarEventos();
    dialogoFlotante.style.display = 'none';
    if(perfil === 'negro'){
    almacenSolucionNegro = []
    almacenTintaNegro = []
    limpiarColores('negro');
    }
    if(perfil === 'cyan'){
      almacenSolucionCyan = []
      almacenTintaCyan = []
    }
    if(perfil === 'magenta'){
      almacenSolucionMagenta = []
      almacenTintaMagenta = []
    }
    if(perfil === 'yellow'){
      almacenSolucionAmarillo = []
      almacenTintaAmarillo = []
    }
    if(perfil === 'especial'){
      almacenSolucionEspecial = []
      almacenTintaEspecial = []
    }
    if(perfil === 'barniz'){
      almacenSolucionBarniz = []
      almacenTintaBarniz = []
    }

    limpiarColores(perfil)
    // Reiniciar variables para futuras ejecuciones
    currentLinea = 0;
    currentIndice = 0;

  }

}
function limpiarColores(perfil) {
  const lineasSolucion = document.querySelectorAll('.lineas-solucion');
  const lineasTinta = document.querySelectorAll('.lineas-tinta');

  lineasTinta.forEach(lineas =>{
    lineas.style.backgroundColor=''
    almacenTintaNegro = []
  })
  lineasSolucion.forEach(lineat =>{
    lineat.style.backgroundColor=''
    almacenSolucionNegro = []
  })

  const inkLines = document.querySelectorAll(`#footer-${perfil} #footer-1 .divs-grales-tinta-${perfil}`);  
  inkLines.forEach(line => {
    line.style.backgroundColor = ''; // Elimina el color de fondo de cada elemento
  });

  const fontLines = document.querySelectorAll(`#footer-${perfil} #footer-2 .divs-grales-solucion-${perfil}`)
  fontLines.forEach(font => {
    font.style.backgroundColor = '';
    font.classList.remove('elemento-agua');
  });    
}
let intervalo = null    
function actualizarSolucion(color) {
  const boranda = document.querySelectorAll('.lineas-solucion');
  switch(color){
    case 'negro':  
        const limit = boranda.length - almacenSolucionNegro.length; // Límite hasta donde se aplicará el color  
        for (let index = boranda.length - 1; index >= limit; index--) {
          boranda[index].style.backgroundColor = 'yellow'; // Aplica el color amarillo simultáneamente
        } 
    break
    case 'cyan':
      const limit1 = boranda.length - almacenSolucionCyan.length; // Límite hasta donde se aplicará el color
      for (let index = boranda.length - 1; index >= limit1; index--) {
        boranda[index].style.backgroundColor = 'yellow'; // Aplica el color amarillo simultáneamente
      }
    break
    case 'magenta':
      const limit2 = boranda.length - almacenSolucionMagenta.length; // Límite hasta donde se aplicará el color
      for (let index = boranda.length - 1; index >= limit2; index--) {
        boranda[index].style.backgroundColor = 'yellow'; // Aplica el color amarillo simultáneamente
      }
    break
    case 'yellow':
      const limit3 = boranda.length - almacenSolucionAmarillo.length; // Límite hasta donde se aplicará el color
      for (let index = boranda.length - 1; index >= limit3; index--) {
        boranda[index].style.backgroundColor = 'yellow'; // Aplica el color amarillo simultáneamente
      }
    break
    case 'especial':
      const limit4 = boranda.length - almacenSolucionEspecial.length; // Límite hasta donde se aplicará el color
      for (let index = boranda.length - 1; index >= limit4; index--) {
        boranda[index].style.backgroundColor = 'yellow'; // Aplica el color amarillo simultáneamente
      }
    break
    case 'barniz':
      const limit5 = boranda.length - almacenSolucionBarniz.length; // Límite hasta donde se aplicará el color
      for (let index = boranda.length - 1; index >= limit5; index--) {
        boranda[index].style.backgroundColor = 'yellow'; // Aplica el color amarillo simultáneamente
      }
    break
  }
} 
function actualizarTinta(color) {
  const coleccionTinta = document.querySelectorAll('.lineas-tinta');
  switch(color){
    case 'negro':
      contadorTinta.textContent = objetoNegro.nivelTinta.length + '%';           
      const limit = coleccionTinta.length - almacenTintaNegro.length; // Límite hasta donde se aplicará el color
      for (let index = coleccionTinta.length - 1; index >= limit; index--) {
        coleccionTinta[index].style.backgroundColor = 'yellow'; // Aplica el color amarillo simultáneamente
      }
      const coleccionTintaNegro = document.querySelectorAll('.divs-grales-tinta-negro')
      for (let index = coleccionTintaNegro.length - 1; index >= limit; index--) {
        coleccionTintaNegro[index].style.backgroundColor = negro ; // Aplica el color amarillo simultáneamente
      }
    break
    case 'cyan':
      contadorTinta.textContent = objetoCian.nivelTinta.length + '%';   
      const limit1 = coleccionTinta.length - almacenTintaCyan.length; // Límite hasta donde se aplicará el color
      for (let index = coleccionTinta.length - 1; index >= limit1; index--) {
        coleccionTinta[index].style.backgroundColor = 'yellow'; // Aplica el color amarillo simultáneamente
      }
      const coleccionTintaCian = document.querySelectorAll('.divs-grales-tinta-azul')
      for (let index = coleccionTintaCian.length - 1; index >= limit1; index--) {
        coleccionTintaCian[index].style.backgroundColor = negro ; // Aplica el color amarillo simultáneamente
      }
    break
    case 'magenta':
      contadorTinta.textContent = objetoMagenta.nivelTinta.length + '%';   
      const limit2 = coleccionTinta.length - almacenTintaMagenta.length; // Límite hasta donde se aplicará el color
      for (let index = coleccionTinta.length - 1; index >= limit2; index--) {
        coleccionTinta[index].style.backgroundColor = 'yellow'; // Aplica el color amarillo simultáneamente
      }
      const coleccionTintaMagenta = document.querySelectorAll('.divs-grales-tinta-magenta')
      for (let index = coleccionTintaMagenta.length - 1; index >= limit2; index--) {
        coleccionTintaMagenta[index].style.backgroundColor = magenta ; // Aplica el color amarillo simultáneamente
      }
    break
    case 'yellow':
      contadorTinta.textContent = objetoAmarillo.nivelTinta.length + '%';   
      const limit3 = coleccionTinta.length - almacenTintaAmarillo.length; // Límite hasta donde se aplicará el color
      for (let index = coleccionTinta.length - 1; index >= limit3; index--) {
        coleccionTinta[index].style.backgroundColor = 'yellow'; // Aplica el color amarillo simultáneamente
      }
      const coleccionTintaAmarillo = document.querySelectorAll('.divs-grales-tinta-amarillo')
      for (let index = coleccionTintaAmarillo.length - 1; index >= limit3; index--) {
        coleccionTintaAmarillo[index].style.backgroundColor = amarillo ; // Aplica el color amarillo simultáneamente
      }      
    break
    case 'especial':
      contadorTinta.textContent = objetoEspecial.nivelTinta.length + '%';   
      const limit4 = coleccionTinta.length - almacenTintaEspecial.length; // Límite hasta donde se aplicará el color
      for (let index = coleccionTinta.length - 1; index >= limit4; index--) {
        coleccionTinta[index].style.backgroundColor = 'yellow'; // Aplica el color amarillo simultáneamente
      }
      const coleccionTintaEspecial = document.querySelectorAll('.divs-grales-tinta-especial')
      for (let index = coleccionTintaEspecial.length - 1; index >= limit4; index--) {
        coleccionTintaEspecial[index].style.backgroundColor = especial ; // Aplica el color amarillo simultáneamente
      }
    break
    case 'barniz':
      contadorTinta.textContent = objetoBarniz.nivelTinta.length + '%';   
      const limit5 = coleccionTinta.length - almacenTintaBarniz.length; // Límite hasta donde se aplicará el color
      for (let index = coleccionTinta.length - 1; index >= limit5; index--) {
        coleccionTinta[index].style.backgroundColor = 'yellow'; // Aplica el color amarillo simultáneamente
      }
      const coleccionTintaBarniz = document.querySelectorAll('.divs-grales-tinta-barniz')
      for (let index = coleccionTintaBarniz.length - 1; index >= limit5; index--) {
        coleccionTintaBarniz[index].style.backgroundColor = barniz ; // Aplica el color amarillo simultáneamente
      }
    break
  }
}  

botonesPerfilColor.forEach(boton => {
  boton.addEventListener('click', () => {
    botonesPerfilColor.forEach(b => b.style.backgroundColor = '');
    boton.style.backgroundColor = '#2bf22bc0';
  });
});

const intervalosColor = new Map();


function alternarColor(el1, el2,espera) {
  detenerTodosLosColores(); // ← CLAVE

  [el1, el2].forEach(el => {
    if (!el) return;

    el.style.backgroundColor = 'rgb(0, 255, 0)';

    const intervalo = setInterval(() => {
      el.style.backgroundColor =
        el.style.backgroundColor === 'rgb(0, 255, 0)'
          ? 'transparent'
          : 'rgb(0, 255, 0)';
    }, 100);

    intervalosColor.set(el, intervalo);
  });

  setTimeout(() => {
    detenerAlternarColor(el1, el2);
  }, espera);
}

function detenerAlternarColor(...elementos) {
  elementos.forEach(el => {
    if (!intervalosColor.has(el)) return;

    clearInterval(intervalosColor.get(el));
    intervalosColor.delete(el);
    el.style.backgroundColor = '';
  });
}

function detenerAlternarColor(...elementos) {
  elementos.forEach(el => {
    if (!intervalosColor.has(el)) return;

    clearInterval(intervalosColor.get(el));
    intervalosColor.delete(el);
    el.style.backgroundColor = '';
  });
}

function detenerTodosLosColores() {
  for (const [el, intervalo] of intervalosColor) {
    clearInterval(intervalo);
    el.style.backgroundColor = '';
  }
  intervalosColor.clear();
}


btnSalir.addEventListener('click', ()=>{ 
  const numeros = document.querySelectorAll('.number'); // Selecciona todos los elementos con la clase .number  
  const algunoConContenido = Array.from(numeros).some(numero => numero.textContent.trim() !== '');
  if (algunoConContenido) {
    /* mostrarVentanaMensaje('Click en ENTRAR para ingesar la informacion') */
    saltarAlerta('Click en ENTRAR para ingesar la informacion','salirCalcula')
    /* alternarColor('entrar-cantidad') */
    parpadearElemento('entrar-cantidad', 150, 2500);
  }else{
    calculadora.classList.add('move-calculadora')
  }
})      

const coleccionNumeros = [];
const contenedorResultado = document.querySelector('#resultado-calculadora');
const spansNumeros = contenedorResultado.querySelectorAll('.number');
const contenedorCantidad = document.querySelector('#display-cantidad')
const spansCantidades = contenedorCantidad.querySelectorAll('.cantidad-display'); 
const digitos = document.querySelectorAll('.grid-item');  
const buttsAguaGral = document.querySelectorAll('.mod-tinta');
const buttsAguaSingle = document.querySelectorAll('.div-ctrl');
const buttSelector = document.querySelectorAll('.butt-selector')
const buttSuma = document.querySelectorAll('.linea-control')
const buttResta = document.querySelectorAll('.resta')
const buttsClientes = document.querySelectorAll('.estilo-1');
const alertaTres = document.getElementById('alerta-tres')
const alertaCuatro = document.getElementById('alerta-cuatro')  
const alertaCinco = document.getElementById('alerta-cinco')
const alertaSeis = document.getElementById('alerta-seis')
const alertaSiete = document.getElementById('alerta-siete')
const alertaOcho = document.getElementById('alerta-ocho')
let alertaNueve = document.querySelector('#alerta-nueve')
const buttsJobs = document.querySelectorAll('.base-datos');
const botonClientes = document.querySelector('#clientes')

buttsJobs.forEach(boton => {
  let panelUno = document.getElementById('panel-uno')
  let panelDos = document.getElementById('panel-dos')  
  

  //CALCULADORA SIMULADOR
  boton.addEventListener('click', () => {
    
    restablecerEstilos('calculadora');
    calculadora.classList.remove('subir');   
    
    switch(boton.id) {
      case 'clientes':
        listaClientes.removeAttribute('style');     
        desactivarClick(['.butt-perfiles', '.estilo-1']);  
        mostrarListaClientes('jobTrack')        
        mostrarNombresDeObjetos();       
      break;
      case 'lineas':
        irAconsola.style.display='none'
        let lineaClientes = document.querySelector('#lista-lineas')
        lineaClientes.style.top='56vh'
        lineaClientes.style.height = '39vh'
        lineaClientes.addEventListener('mouseleave', () => {
          lineaClientes.style.display = 'none'
          restablecerClick(['.butt-perfiles', '.estilo-1']);
        })
        desactivarClick(['.butt-perfiles', '.estilo-1']);
        if(panelUno.textContent === ''){alertaTres.style.display = 'flex';} 
        else{
          document.querySelector('#lista-lineas').style.display = 'block'
          listaClientes.style.display = 'none'
        }
      break;
      case 'tirajes':
        if (getComputedStyle(padreLineas).isVisible === 'true') return;
        restablecerEstilos('calculadora');
        calculadora.classList.remove('move-calculadora-up')
        calculadora.classList.remove('move-calculadora-down')
        calculadora.classList.remove('move-calculadora-up-ingreso')
        calculadora.classList.remove('move-calculadora-1')

        calculadoraSimulador=false
        if(!calculadoraSimulador){
          irAconsola.style.display='none'
          desactivarClick(['.butt-perfiles', '.estilo-1']);
          restablecerClick(['.digito'])
          if(panelUno.textContent === '' || panelDos.textContent === ''){  
            alertaTres.style.display = 'flex';
          }else{          
            calculadora.classList.remove('move-calculadora')
            calculadora.classList.remove('move-calculadora-1')
            setTimeout(() => {
              gridNumbers.style.display = 'grid'
              calculadora.classList.add('move-calculadora-1') 
            }, 100);
          }
          coleccionNumeros.length = 0;
          actualizarDisplay(); 
        }
      break;  
    } 
  });

});
function actualizarDisplay() {
  document.querySelectorAll('#resultado-calculadora .number, #display-cantidad .cantidad-display').forEach(elemento => elemento.textContent = '');
}

// CLIENTES
const contenedorClientes = document.getElementById('lista-clientes');
const arriba = document.querySelector('#job-files > div:nth-child(1) > span:nth-child(2)');

contenedorClientes.addEventListener('click', (e) => {
  const cliente = e.target.closest('div');
  if (!cliente) return;

  arriba.textContent = cliente.textContent;
  contenedorClientes.style.display = 'none';
  restablecerClick(['.butt-perfiles', '.estilo-1']);
  blurOverlay.style.display = 'none';
});


// LINEAS
const contenedorLineas = document.getElementById('lista-lineas');
const panelDos = document.getElementById('panel-dos');
const destinoLinea = document.querySelector('#job-files > .jobs:nth-child(2) > .base-datos:nth-child(2)');

contenedorLineas.addEventListener('click', (e) => {
  const linea = e.target.closest('div');
  if (!linea) return;

  panelDos.style.backgroundColor = 'rgb(0,0,23)';
  panelDos.style.color = 'rgb(200,200,200)';

  destinoLinea.textContent = linea.textContent;
  contenedorLineas.style.display = 'none';

  restablecerClick(['.jobs', '.estilo-1']);
  mostrarBarraProgres(33.5, 67);
});

// BOTONES DE LA CALCULADORA

// BOTONES DE LA CALCULADORA

digitos.forEach((elemento) => {

  elemento.addEventListener('mousedown', (e) => e.preventDefault());

  elemento.addEventListener('click', (e) => {
    e.stopPropagation();

    if (!calculadoraSimulador) {  // CALCULADORA HEIDELBERG
      console.warn('HEIDELBERG')

      digitos.forEach(d => d.style.pointerEvents = 'none');

      const spans = document.querySelectorAll('.datos-base');

      if ([...spans].every(span => span.textContent.trim() === '')) {
        alertaTres.style.display = 'flex';
        desactivarClicEnElementos(digitos, botonesPerfilColor, buttsClientes);

      } else if (spans[0].textContent.trim() === '') {
        document.getElementById('alerta-uno').style.display = 'flex';
        desactivarClicEnElementos(digitos, botonesPerfilColor, buttsClientes);

      } else if (spans[1].textContent.trim() === '') {
        document.getElementById('alerta-dos').style.display = 'flex';
        desactivarClicEnElementos(digitos, botonesPerfilColor, buttsClientes);

      } else {

        const numero = parseInt(elemento.textContent);

        if (!isNaN(numero)) {

          if (coleccionNumeros.length >= 10) {
            digitos.forEach(d => d.style.pointerEvents = 'auto');
            return;
          }

          coleccionNumeros.push(numero);

          spansNumeros.forEach(span => span.textContent = '');
          spansCantidades.forEach(span => span.textContent = '');

          for (let i = 0; i < coleccionNumeros.length; i++) {

            spansNumeros[
              spansNumeros.length - coleccionNumeros.length + i
            ].textContent = coleccionNumeros[i];

            spansCantidades[
              spansCantidades.length - coleccionNumeros.length + i
            ].textContent = coleccionNumeros[i];
          }
        }

      }

      setTimeout(() => {
        digitos.forEach(d => d.style.pointerEvents = 'auto');
      }, 200);

    }else { // CALCULADORA ESPECIAL
      console.warn('NO ES HEIDELBERG')
      if (!lastFocusedInput) return;

      const input = lastFocusedInput;

      if (elemento.dataset.action === 'backspace') {

        const value = input.value ?? '';
        if (!value.length) return;

        input.value = value.slice(0, -1);

        input.selectionStart = input.selectionEnd = input.value.length;

        return; // evitar que continúe la inserción
      }
      const numero = elemento.textContent;
      const end = input.value.length;
      input.selectionStart = end;
      input.selectionEnd = end;
      input.value = input.value + numero;
      input.selectionStart = input.selectionEnd = input.value.length;
      if (input.id !== 'nomEmpl' && input.id !== 'nomEmpl-ma' && input.id !== 'numDoc1') {

        const clamp = (val, min, max) =>
          Math.min(max, Math.max(min, val));

        input.value = input.value.replace(/\D/g, '');

        if (input.value !== '' && input.id !== 'input-baja' && input.id !== 'doc-empl' && !input.classList.contains('input-especial')) {
          const min = Number(input.min) || 0;
          const max = Number(input.max) || 100;
          input.value = clamp(parseInt(input.value, 10), min, max);
        }

      }

    }

  });

});



alertaTres.addEventListener('click', ()=> {
  restablecerClick(['.butt-perfiles', '.estilo-1']);
})
btnSalir.addEventListener('mouseleave', () => {
  restablecerClick(['.estilo-1','.digit','.digito']);
  detenerAlternarColor(btnEntrar)
  alertaCinco.style.display='none'
} )

document.getElementById('alerta-seis').children[2].addEventListener('click', () => {
  alertaSeis.classList.add('move-alerta')
  restablecerClick(['.mod-tinta','.div-ctrl','.butt-perfiles', '.butt-selector', '.cabeza', '.estilo-1', '.digit', '.digito']);
  setTimeout(() => {
    alertaSeis.classList.remove('move-alerta')
    alertaSeis.style.display='none'
  }, 700);
});
document.querySelector('#perfil-existe').addEventListener('click', () => {
  ["panel-uno", "panel-dos"].forEach(id => document.getElementById(id)?.removeAttribute("style"));
  alertaSeis.classList.add('move-alerta')
  conteJobTrack.classList.remove('move-job-track')
  var elementosExcluidos = ['simulador','unit-job-track','interfaz-perfiles','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4','spn-blur-5','spn-blur-6','spn-blur-7','abandonar-perfiles']  
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'    
    }
  }
  container1.style.display = 'none'
  botonesPerfilColor.forEach(elemento => {
    elemento.style.display = 'block';
  });
  conteJobTrack.style.display='flex'
  document.querySelectorAll('.datos-base').forEach((elemento) => {
    elemento.textContent = ''
  });
   setTimeout(() => {
    conteJobTrack.classList.add('move-job-track') 
  }, 100); 
  setTimeout(() => {
    alertaSeis.style.display='none'
    alertaSeis.classList.remove('move-alerta')
    restablecerClick(['.cont-vacio', '.mod-tinta', '.div-ctrl','.base-datos'])
  }, 1000);

}) 
document.querySelector('#perfil-crear').addEventListener('click', () => {
  ["panel-uno", "panel-dos"].forEach(id => document.getElementById(id)?.removeAttribute("style"));
  alertaSeis.classList.add('move-alerta')  
  var elementosExcluidos = ['simulador','butt-perfil-tinta', 'butt-control-tinta', 'butt-perfil', 'butt-job-track', 'boton-perfiles', 'interfaz-perfiles','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4','spn-blur-5','spn-blur-6','spn-blur-7']  
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
    }
  } 
  container1.style.display = 'none'
  botonesPerfilColor.forEach(elemento => {
    elemento.style.display = 'block';
  });
  setTimeout(() => {
    desactivarClick(['.butt-perfiles'])
    restablecerClick(['.cont-vacio', '.mod-tinta', '.div-ctrl','.base-datos'])
  }, 50);
  setTimeout(() => {
    moverFormulario()
    inputPerfil.focus();
    inputPerfil.value = ''
  }, 200);   
})
const alertasVacios = document.querySelectorAll('.alerta-vacio');
const alertaNormal = document.querySelectorAll('.alerta-normal');
alertasVacios.forEach((alerta) => {
  alerta.addEventListener('click', () => {
    alertasVacios.forEach((alertaItem) => {
      alertaItem.style.backgroundColor = verde
      alertaItem.style.color = 'black'
      setTimeout(() => {
        alertaItem.style.display = 'none';
        alertaItem.style.backgroundColor = ''
        alertaItem.style.color = ''  
      }, 200);
    });
    reactivarClicEnElementos(digitos, botonesPerfilColor, buttsClientes);
    calculadora.classList.add('move-calculadora');
  });
});
alertaNormal.forEach((alerta) => {
  alerta.addEventListener('click', () => {
    alertaNormal.forEach((alertaItem) => {
      alertaItem.style.backgroundColor = verde
      alertaItem.style.color = 'black'
      setTimeout(() => {
        listaClientes.style.display = 'none';
        alertaItem.style.display = 'none';
        alertaItem.style.backgroundColor = ''
        alertaItem.style.color = ''  
      }, 200);
    });
    reactivarClicEnElementos(digitos, buttsClientes);
  });
});

// BOTON BORRAR CALCULADORA



const DELETE_INITIAL_DELAY = 400;
const DELETE_REPEAT_RATE = 70;

let deleteTimeout = null;
let deleteInterval = null;

document.addEventListener('focusin', (e) => {
  if (e.target.matches('input, textarea')) {
    lastFocusedInput = e.target;
  }
});

const limpiarBase = () => {
  coleccionNumeros.length = 0;
  actualizarDisplay();
  detenerAlternarColor();
};

const stopDeleting = () => {
  clearTimeout(deleteTimeout);
  clearInterval(deleteInterval);

  deleteTimeout = null;
  deleteInterval = null;
};

const deleteLastCharacter = (target) => {

  const value = target.value ?? target.textContent ?? '';
  if (!value.length) return;

  const newValue = value.slice(0, -1);

  if ('value' in target) {
    target.value = newValue;
  } else {
    target.textContent = newValue;
  }

};

if (esDesktop) {

  botonBorrar.addEventListener('click', (e) => {
    e.preventDefault();
    limpiarBase();
  });

}

if (!esDesktop) {

  inputPerfil.setAttribute('readonly', true);

  botonBorrar.addEventListener('touchstart', (e) => {
    e.preventDefault();

    document.querySelectorAll('.number').forEach(el => {
      el.textContent = '';
    });


    const target = lastFocusedInput;
    if (!target) return;

    // borrar carácter primero
    deleteLastCharacter(target);

    // luego limpiar estado interno
    limpiarBase();

    // iniciar repetición progresiva
    deleteTimeout = setTimeout(() => {

      deleteInterval = setInterval(() => {
        deleteLastCharacter(target);
      }, DELETE_REPEAT_RATE);

    }, DELETE_INITIAL_DELAY);

  });

  botonBorrar.addEventListener('touchend', stopDeleting);
  botonBorrar.addEventListener('touchcancel', stopDeleting);

}




document.querySelector('#abandonar-perfiles').addEventListener('click', () => {
  alertaMSG.style.display = 'none';
  conteJobTrack.style.display = 'none'
  document.querySelector('#contenedor-registro').style.display = 'none'
  calculadora.classList.add('move-calculadora')
  document.querySelectorAll('.butt-perfiles, .btn-respaldo').forEach(elemento => {
     elemento.style.display = 'block';
  }) 
  restablecerClick(['.butt-perfiles']) 
    setTimeout(() => {          
    animarColorSecuencia();
  }, 100);
  setTimeout(() => {
    animarSecuenciaPerfiles();
  }, 200); 
})

// ENTER DE LA CALCULADORA

btnEntrar.addEventListener('click', () => {  
  detenerParpadeo()

  if(!calculadoraSimulador){
    desactivarClick(['.butt-perfiles','.digit', '.estilo-1','digito']);
    detenerAlternarColor()
    const elementos = document.querySelectorAll('.number');
    const todosVacios = Array.from(elementos).every(elemento => elemento.textContent.trim() === '');  
    console.log(document.querySelectorAll('.digito'));
    if (todosVacios) {
      mostrarVentanaMensaje('Ingrese tiraje para este producto ...')
    }else{
      document.querySelectorAll('.butt-perfiles, .btn-respaldo').forEach(elemento => {  
        elemento.style.display = 'none';
        document.querySelector('#abandonar-perfiles').style.display = 'none'

      }); 
      coleccionNumeros.length = 0;        
      document.querySelectorAll('#resultado-calculadora .number').forEach(elemento => elemento.textContent = '');
      calculadora.classList.add('move-calculadora')
      setTimeout(() => {
        mostrarBarraProgres(67, 100);         
      }, 500);
      setTimeout(() => {
        irAconsola.style.display='block'
      }, 1600); 
      setTimeout(() => {
        desactivarClick(['.butt-perfiles']) 
      }, 1700);
    }
  }else{
    if(!esDesktop)avanzarFoco();
  }
});

document.querySelectorAll('.input-especial').forEach(input => {
  /* input.addEventListener('focus', manejarEntrar); */
  console.warn()
});

function sumarPorcentaje() {
  // Obtener el valor actual del contador (remover el símbolo '%')
  let porcentajeCurrent = parseInt(contadorTinta.textContent.replace('%', ''), 10);

  // Sumar 1 al porcentaje
  porcentajeCurrent = porcentajeCurrent + 1;

  // Si el porcentaje supera 100, igualarlo a 100
  if (porcentajeCurrent > 100) {
    porcentajeCurrent = 100;
  }

  // Actualizar el texto del contador con el nuevo valor y el símbolo '%'
  contadorTinta.textContent = porcentajeCurrent + '%';

  // Para depuración (opcional)
  console.log('Nuevo porcentaje:', porcentajeCurrent + '%');
}



//APLICA A leds, led, grilla
function muestraRenderObjetoGlobal(objeto, color, propiedad, propiedadII, propiedadIII, propiedadIV, propiedadV, propiedadVI, footer, foot){
  
  // Mapeo de nombres de colores a valores CSS válidos
  const colorMap = {
    negro: 'black',
    amarillo: 'yellow',
    rojo: 'red',
    azul: 'blue',
    verde: 'green',
    gris: 'rgb(200,200,200)',
    barniz: 'rgb(200,200,200)', 
    especial: 'rgb(255,130,0)',   
  };
  // Convertir el valor del parámetro `color` al correspondiente CSS
  const colorCSS = colorMap[color] || color; // Si no existe en el mapa, usar el valor directamente
  let displayTinta = document.querySelector('#ctrl-gral .div-ctrl #tinta-perc');
  let displaySolucion = document.querySelector('#ctrl-gral .div-ctrl #solucion-porcentaje');  
  let displayTintaGral = document.querySelector(`#gral-display-${color}`)
  let displaySolucionGral = document.querySelector(`#display-general-${color}`)


  /* console.log('OBJETO GLOBAL', objetoGlobal)
  console.group('Nueva Empresa');
  const obj = almacenObjetos['Nueva Empresa'];
  Object.entries(obj).forEach(([propiedad, valor]) => {
    console.group(propiedad);
    console.log(valor);
    console.groupEnd();
  });
  console.groupEnd(); */

  console.log('objetoGlobal:', objetoGlobal);
  console.log('almacenObjetos:', almacenObjetos);
  console.log('existe clave:', almacenObjetos[objetoGlobal]);
  console.log('color:', color);



  displaySolucion.textContent = almacenObjetos[objetoGlobal][color].nivelAgua.length + '%';


  displayTinta.textContent = almacenObjetos[objetoGlobal][color].nivelTinta.length + '%';
  // Primera iteración: Aplicar lógica a `#columna-70`
  for (let i = 1; i <= 22; i++) {
    const rutaEntrega = almacenObjetos[objeto][color][propiedad];    
    if (!rutaEntrega) {
      console.error(`No se encontró la propiedad '${propiedad}' en el color '${color}'.`);
      return;
    } 
    const lineaKey = `linea-${i}`;
    const linea = rutaEntrega[lineaKey];  
    if (linea) {
      const rutaRecibe = document.querySelectorAll(`#columna-70 #${lineaKey} #display-leds .leds`);
      if (rutaRecibe.length > 0) {
        for (let index = rutaRecibe.length - 1, count = 0; count < linea.length && index >= 0; index--, count++) {
          rutaRecibe[index].style.backgroundColor = rojo; // Aplicar el color CSS
        }
      }
    }
  }
  // Segunda iteración: Aplicar lógica a `#control-perfiles`
  for (let i = 1; i <= 22; i++) {
    const rutaEntregaII = almacenObjetos[objeto][color][propiedadII];    
    if (!rutaEntregaII) {
      console.error(`No se encontró la propiedad '${propiedadII}' en el color '${color}'.`);
      return;
    } 
    const lineaKey = `led-${i}`;
    const lineaSigue = rutaEntregaII[lineaKey];

    if (lineaSigue) {
      const rutaSigue = document.querySelectorAll(`#control-perfiles #led-${i} .led`);
      if (rutaSigue.length > 0) {
        for (let index = rutaSigue.length - 1, count = 0; count < lineaSigue.length && index >= 0; index--, count++) {
          rutaSigue[index].style.backgroundColor = colorCSS; // Aplicar el color CSS
        }
      }
    }
  }
  // Tercera iteración: Aplicar lógica a `#perfiles-entintado`
  for (let i = 1; i <= 22; i++) {
    const rutaEntregaIII = almacenObjetos[objeto][color][propiedadIII];
    if (!rutaEntregaIII) {
      console.error(`No se encontró la propiedad '${propiedadIII}' en el color '${color}'.`);
      return;
    } 
    const lineaKey = `grilla-${i}`;
    const linea = rutaEntregaIII[lineaKey];
    if (linea) {
      const rutaClona = document.querySelectorAll(`#perfiles-entintado #perfil-${color} #grilla-${i} .led-general`);
      if (rutaClona.length > 0) {
        for (let index = rutaClona.length - 1, count = 0; count < linea.length && index >= 0; index--, count++) {
          rutaClona[index].style.backgroundColor = colorCSS; // Aplicar el color CSS
        }
      } 
    }
  }  


  // Cuarta iteración: Aplicar lógica a `#tanque-tinta y tanque general`
  const rutaEntregaIV = almacenObjetos[objetoGlobal][color][propiedadV];
  if (!rutaEntregaIV) {
    console.error(`No se encontró '${propiedadV}' en '${color}'`);
    return;
  }
  const rutaClonaTinta = document.querySelectorAll(`#ctrl-gral #tanque-tinta .lineas-tinta`);
  const rutaClonaGralTinta = document.querySelectorAll(`#footer-perfiles #footer-${color} #footer-${footer} .divs-grales-tinta-${color}`);

  // ← limpiar todo primero
  rutaClonaTinta.forEach(el => el.style.backgroundColor = '');
  rutaClonaGralTinta.forEach(el => el.style.backgroundColor = '');

  const elementosATintear = rutaEntregaIV.length;
  for (let index = rutaClonaTinta.length - 1; index >= rutaClonaTinta.length - elementosATintear && index >= 0; index--) {
    rutaClonaTinta[index].style.backgroundColor = amarillo;
  }
  for (let index = rutaClonaGralTinta.length - 1; index >= rutaClonaGralTinta.length - elementosATintear && index >= 0; index--) {
    rutaClonaGralTinta[index].style.backgroundColor = colorCSS;
  }

  // Quinta iteración: Aplicar lógica a `#tanque-agua y tanque general`  
  const rutaEntregaV = almacenObjetos[objetoGlobal][color][propiedadVI];
  if (!rutaEntregaV) {
    console.error(`No se encontró '${propiedadVI}' en '${color}'`);
    return;
  }
  const rutaClonaAgua = document.querySelectorAll(`#ctrl-gral #tanque-solucion .lineas-solucion`);
  const rutaClonaGralAgua = document.querySelectorAll(`#footer-perfiles #footer-${color} #footer-${foot} .divs-grales-solucion-${color}`);

  // ← limpiar todo primero
  rutaClonaAgua.forEach(el => el.style.backgroundColor = '');
  rutaClonaGralAgua.forEach(el => el.style.backgroundColor = '');

  const elementosAAguar = rutaEntregaV.length;
  for (let index = rutaClonaAgua.length - 1; index >= rutaClonaAgua.length - elementosAAguar && index >= 0; index--) {
    rutaClonaAgua[index].style.backgroundColor = amarillo;
  }
  for (let index = rutaClonaGralAgua.length - 1; index >= rutaClonaGralAgua.length - elementosAAguar && index >= 0; index--) {
    rutaClonaGralAgua[index].style.backgroundColor = verdeAgua;
  }

  setTimeout(() => {
    displayTintaGral.textContent = almacenObjetos[objetoGlobal][color].nivelTinta.length + '%';
    displayTintaGral.style.top = 87 - (almacenObjetos[objetoGlobal][color].nivelTinta.length) + '%';
    displaySolucionGral.textContent = almacenObjetos[objetoGlobal][color].nivelAgua.length + '%';
    displaySolucionGral.style.top = 87 - (almacenObjetos[objetoGlobal][color].nivelAgua.length) + '%';     
    const elementos = document.querySelectorAll('.div-gral, .div-agua');
    elementos.forEach(elemento => {
    elemento.style.color = ''
    });
  }, 1000);
}



function eliminarColores(){
  const lineasSolucion = document.querySelectorAll('.lineas-solucion');
  const lineasTinta = document.querySelectorAll('.lineas-tinta');
  const lineasLeds = document.querySelectorAll('.leds');
  const lineasLed = document.querySelectorAll('.led');
  for (let i = 0; i < lineasSolucion.length; i++) {
    lineasSolucion[i].style.backgroundColor = '';
  }
  for (let i = 0; i < lineasTinta.length; i++) {
    lineasTinta[i].style.backgroundColor = '';
  }
  for (let i = 0; i < lineasLeds.length; i++) {
    lineasLeds[i].style.backgroundColor = '';
  }
  for (let i = 0; i < lineasLed.length; i++) {
    lineasLed[i].style.backgroundColor = '';
  } 


} 
function desactivarClick(classElements) {
  if (!Array.isArray(classElements)) {
    console.error('El parámetro debe ser un array de selectores.');
    return;
  }
  classElements.forEach(selector => {
    const botones = document.querySelectorAll(selector);
    botones.forEach(boton => {
      boton.style.pointerEvents = 'none'; 
      boton.querySelectorAll('*').forEach(hijo => hijo.style.pointerEvents = 'none'); // ← aquí
    });
  });
}
function desactivarClickTemporalmente(classElements, duracion) {
  if (!Array.isArray(classElements) || typeof duracion !== 'number') {
    console.error('Parámetros inválidos. Se espera un array de selectores y una duración en milisegundos.');
    return;
  }

  classElements.forEach(selector => {
    const botones = document.querySelectorAll(selector);
    
    botones.forEach(boton => {
      boton.style.pointerEvents = 'none'; // Desactivar clics
    });

    // Reactivar después del tiempo especificado
    setTimeout(() => {
      botones.forEach(boton => {
        boton.style.pointerEvents = 'auto'; // Reactivar clics
      });
    }, duracion);
  });
}
/* function restablecerClick(classElements) { 
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
} */  
function bloquearClick(event) {
  if (event.currentTarget.dataset.clickDisabled === 'true') {
    event.stopPropagation();
    event.preventDefault();
    console.log('Click desactivado en:', event.currentTarget); 
  }
}  
function limpiarColoresDeFondo() {
  // Lista de clases a recorrer
  const clases = ['.led-general', '.clase-dos', '.led', '.leds', '.lineas-tinta', '.lineas-solucion'];

  // Recorrer cada clase
  clases.forEach(clase => {
    // Seleccionar todos los elementos con la clase actual
    const elementos = document.querySelectorAll(clase);

    // Recorrer los elementos seleccionados
    elementos.forEach(elemento => {
      elemento.style.backgroundColor = ''; // Eliminar el color de fondo
    });
  });

  console.log('Colores de fondo eliminados para las clases:', clases.join(', '));
}
let inputBuscar = document.getElementById('input-buscar-perfil');


listaClientes.addEventListener('mouseleave', () => {
  setTimeout(() => {
    const menuContextual = document.getElementById('menu-contextual');
    const menuVisible = menuContextual && menuContextual.style.display === 'block';
    if (menuVisible) return;
    listaClientes.style.display = 'none';
    if (inputBuscar) inputBuscar.style.display = 'none';
    if(menuContextual)menuContextual.style.display = 'none';
    restablecerClick(['.base-datos']);
  }, 100);
});

const jobs = document.querySelectorAll('.jobs');
function mostrarNombresDeObjetos() {
  flagAplicacion = true;
  
  const almacenJSON = localStorage.getItem('coloresRegistrados');
  if (!almacenJSON) {
    console.log("No se encontraron objetos almacenados en localStorage.");
    return;
  }

  const almacenRecuperado = JSON.parse(almacenJSON);
  const almacenCapitalizado = {};

  Object.keys(almacenRecuperado).forEach(nombreObjeto => {
    const nombreCapitalizado = capitalizarTexto(nombreObjeto);
    almacenCapitalizado[nombreCapitalizado] = almacenRecuperado[nombreObjeto];
  });

  localStorage.setItem('coloresRegistrados', JSON.stringify(almacenCapitalizado));

  listaClientes.innerHTML = '';

  // ✅ Fix 1 — Eliminar menuContextual anterior si ya existe
  const menuAnterior = document.getElementById('menu-contextual');
  if (menuAnterior) menuAnterior.remove();

  // ✅ Fix 1 — Crear menuContextual una sola vez
  const menuContextual = document.createElement('div');
  menuContextual.id = 'menu-contextual';
  document.body.appendChild(menuContextual);

  const opcionesMenu = ['Editar', 'Filtrar', 'Eliminar'];
  opcionesMenu.forEach(opcion => {  
    const menuItem = document.createElement('div');
    menuItem.className = 'opcion';
    menuItem.textContent = opcion;
    menuItem.style.cursor = 'pointer';    
    menuItem.style.padding = '5px';
    menuItem.style.display = 'flex';
    menuItem.style.alignItems = 'center';
    menuItem.style.justifyContent = 'flex-start';

    menuItem.addEventListener('click', () => {
      menuContextual.style.display = 'none';

      if (opcion === 'Editar') {
        editarObjeto(menuContextual.dataset.nombreObjeto);
      } else if (opcion === 'Filtrar') {
        buscarPerfil(event);
      } else if (opcion === 'Eliminar') {
        eliminarObjeto(menuContextual.dataset.nombreObjeto); 
      }    
    });

    menuContextual.appendChild(menuItem);
  });

  // ✅ Fix 2 — Remover listeners anteriores antes de agregar nuevos
  document.removeEventListener('contextmenu', bloquearMenuPersonalizado);
  document.addEventListener('contextmenu', bloquearMenuPersonalizado);

  // ✅ Fix 2 — Usar una función nombrada para poder removerla
  const ocultarMenu = () => menuContextual.style.display = 'none';
  document.removeEventListener('click', ocultarMenu);
  document.addEventListener('click', ocultarMenu);

  Object.keys(almacenCapitalizado).forEach(nombreCapitalizado => {  
    const nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'cliente-item';
    nuevoDiv.textContent = nombreCapitalizado;  
    nuevoDiv.style.fontSize = '0.7em';

    /* nuevoDiv.addEventListener('click', () => {
      restablecerClick(['.estilo-1']);
      const panelUno = document.getElementById('panel-uno');
      const perfilador = document.querySelector('#perfiles-color');

      creaNombre.value = nombreCapitalizado;         
      const nombreCliente = document.querySelector('.nombre-cliente');
      nombreCliente.textContent = nombreCapitalizado;
      panelUno.textContent = nombreCapitalizado;
      panelUno.style.backgroundColor = 'rgb(0,0,23)';
      panelUno.style.color = 'rgb(200,200,200)';
      objetoGlobal = nombreCapitalizado;
      console.log('OBJETO GLOBAL :', objetoGlobal);
      listaClientes.style.display = 'none';

      if (!perfilador || getComputedStyle(perfilador).display === 'none') {
        mostrarBarraProgres(0.1, 33.5);
      }

      const btn = document.querySelector('#btn-execute');
      function parpadearBoton(elemento, duracion = 1000, intervalo = 50) {
        let encendido = false;
        const originalColor = elemento.style.backgroundColor;
        const originalTransform = elemento.style.transform;
        const originalTransition = elemento.style.transition;
        elemento.style.transition = `transform ${duracion}ms ease, background-color ${intervalo}ms linear`;
        elemento.style.transform = 'scale(1.3)';
        const intervalID = setInterval(() => {
          elemento.style.backgroundColor = encendido ? 'white' : 'green';
          encendido = !encendido;
        }, intervalo);
        setTimeout(() => {
          clearInterval(intervalID);
          elemento.style.backgroundColor = originalColor;
          elemento.style.transform = originalTransform;
          elemento.style.transition = originalTransition;
        }, duracion);
      }
      parpadearBoton(btn);
    }); */


function manejarSeleccionItem() {
  restablecerClick(['.estilo-1']);
  const panelUno = document.getElementById('panel-uno');
  const perfilador = document.querySelector('#perfiles-color');

  creaNombre.value = nombreCapitalizado;         
  const nombreCliente = document.querySelector('.nombre-cliente');
  nombreCliente.textContent = nombreCapitalizado;
  panelUno.textContent = nombreCapitalizado;
  panelUno.style.backgroundColor = 'rgb(0,0,23)';
  panelUno.style.color = 'rgb(200,200,200)';
  objetoGlobal = nombreCapitalizado;
  console.log('OBJETO GLOBAL :', objetoGlobal);
  listaClientes.style.display = 'none';

  if (!perfilador || getComputedStyle(perfilador).display === 'none') {
    mostrarBarraProgres(0.1, 33.5);
  }

  const btn = document.querySelector('#btn-execute');
  function parpadearBoton(elemento, duracion = 1000, intervalo = 50) {
    let encendido = false;
    const originalColor = elemento.style.backgroundColor;
    const originalTransform = elemento.style.transform;
    const originalTransition = elemento.style.transition;
    elemento.style.transition = `transform ${duracion}ms ease, background-color ${intervalo}ms linear`;
    elemento.style.transform = 'scale(1.3)';
    const intervalID = setInterval(() => {
      elemento.style.backgroundColor = encendido ? 'white' : 'green';
      encendido = !encendido;
    }, intervalo);
    setTimeout(() => {
      clearInterval(intervalID);
      elemento.style.backgroundColor = originalColor;
      elemento.style.transform = originalTransform;
      elemento.style.transition = originalTransition;
    }, duracion);
  }
  parpadearBoton(btn);
}

nuevoDiv.addEventListener('click', manejarSeleccionItem);
nuevoDiv.addEventListener('touchend', (e) => {
  e.preventDefault();
  manejarSeleccionItem();
});


    nuevoDiv.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      menuContextual.style.display = 'block';
      menuContextual.style.visibility = 'hidden';

      const menuAltura = menuContextual.offsetHeight;
      const menuAnchura = menuContextual.offsetWidth;
      const alturaVentana = window.innerHeight;
      const anchoVentana = window.innerWidth;

      let posX = event.pageX;
      let posY = event.pageY;

      if (posX + menuAnchura > anchoVentana) posX = anchoVentana - menuAnchura - 10;
      if (posY + menuAltura > alturaVentana) posY = alturaVentana - menuAltura - 10;

      menuContextual.style.left = `${posX}px`;
      menuContextual.style.top = `${posY}px`;
      menuContextual.style.visibility = 'visible';
      menuContextual.dataset.nombreObjeto = nombreCapitalizado;

      setTimeout(() => {
        document.querySelectorAll('.cliente-item').forEach(item => item.blur());
      }, 100);
    });

    listaClientes.appendChild(nuevoDiv);
  });

  // ✅ Fix 3 — Listeners del menuContextual solo una vez
  menuContextual.addEventListener('mouseover', () => {
    listaClientes.style.display = 'block';
    menuContextual.style.display = 'block';
  });

  menuContextual.addEventListener('mouseleave', () => {
    menuContextual.style.display = 'none';
  });

  listaClientes.addEventListener('mouseleave', () => {
    listaClientes.style.display = 'none';
    if(inputBuscar)inputBuscar.style.display='none'
    menuContextual.style.display = 'none';
    restablecerClick(['.base-datos']);
  });

  console.log('Nombres de objetos mostrados en lista-clientes:', Object.keys(almacenCapitalizado));
}

function buscarPerfil(event) {
  desactivarClick(['.cliente-item']); 

  if (!inputBuscar) {
    // Crear el input flotante solo si no existe
    inputBuscar = document.createElement('input');
    inputBuscar.type = 'text';
    inputBuscar.placeholder = 'Buscar perfil...';
    inputBuscar.style.position = 'absolute';
    inputBuscar.style.zIndex = '5000';
    inputBuscar.style.padding = '8px';
    inputBuscar.style.backgroundColor='#060101'
    inputBuscar.style.border = '1px solid #ccc';
    inputBuscar.style.color = '#ccc';  
    inputBuscar.style.borderRadius = '5px';
    inputBuscar.style.outline = 'none';
    inputBuscar.style.display = 'none'; // Inicialmente oculto
    document.body.appendChild(inputBuscar);

    // Agregar evento mouseleave para ocultar el input
    inputBuscar.addEventListener('mouseleave', () => {
      if (inputBuscar.value.trim() === '') { 
        // Solo ocultar si el input está vacío
        inputBuscar.style.display = 'none';
        listaClientes.style.display = 'none';
      }
    });    

  }  

  // Verificar si el evento es válido
  if (event && event.pageX !== undefined && event.pageY !== undefined) {
    inputBuscar.style.left = '47vw'
    inputBuscar.style.top = '44vh'
    inputBuscar.style.zIndex=5000
  } else {
    // Si no hay evento, ubicarlo en el centro de la pantalla como fallback
    inputBuscar.style.left = '50%';
    inputBuscar.style.top = '20px';
    inputBuscar.style.transform = 'translateX(-50%)';
  }

  inputBuscar.style.display = 'block';
  inputBuscar.value = '';
  inputBuscar.focus();

  // Evento para filtrar en tiempo real
  inputBuscar.addEventListener('input', () => {
    let textoIngresado = inputBuscar.value.toLowerCase();
    let clientes = document.querySelectorAll('.cliente-item');

    clientes.forEach(cliente => {
      let nombre = cliente.textContent.toLowerCase();
      cliente.style.display = nombre.startsWith(textoIngresado) ? 'block' : 'none';
    });
  });

  // Evento para ocultar el input cuando se haga clic fuera
  setTimeout(() => {
    document.addEventListener('click', function ocultarInput(evento) {
      if (evento.target !== inputBuscar) {
        inputBuscar.style.display = 'none';
        document.removeEventListener('click', ocultarInput);
      }
    });
    restablecerClick(['.cliente-item']);
  }, 500);
}
/* function guardarObjetoEnAlmacen(nombreObjeto, datosObjeto) {
  // Capitalizar el nombre antes de guardar
  const nombreCapitalizado = capitalizarTexto(nombreObjeto);

  // Obtener el objeto almacenado en localStorage
  almacenObjetos = JSON.parse(localStorage.getItem('coloresRegistrados')) || {};

  // Guardar o actualizar el objeto con el nombre capitalizado
  almacenObjetos[nombreCapitalizado] = datosObjeto;

  // Actualizar el almacenamiento en localStorage
  localStorage.setItem('coloresRegistrados', JSON.stringify(almacenObjetos));

  console.log(`Guardado en almacenObjetos:`, almacenObjetos);
} */

function eliminarObjeto(nombreObjeto) {
  desactivarClick(['.cliente-item']);
  document.querySelectorAll('.cliente-item').forEach(item => {
    item.style.filter = 'blur(15px)';
  });
  const divEliminacion = document.createElement('div');
  divEliminacion.id = 'alerta-nueve';
  listaClientes.appendChild(divEliminacion);

  // Crear elementos de la alerta
  const spanAnuncio = document.createElement('span');
  const nombreElemento = document.createElement('span');
  const spanConfirmar = document.createElement('span');
  const spanAbandonar = document.createElement('span');

  spanAnuncio.id = 'actual-nombre';
  spanAnuncio.textContent = 'Se eliminará definitivamente el perfil :'; 

  nombreElemento.id = 'name-span';
  nombreElemento.className =  'span-nueve'
  nombreElemento.textContent = `${nombreObjeto}`;

  spanConfirmar.textContent = 'Eliminar';
  spanConfirmar.id = 'perfil-eliminar';
  spanConfirmar.className =  'nueve-span'

  spanAbandonar.textContent = 'Abandonar'
  spanAbandonar.id = 'perfil-abandonar'
  spanAbandonar.className = 'nueve-span'
  divEliminacion.appendChild(spanAnuncio);
  divEliminacion.appendChild(nombreElemento);
  divEliminacion.appendChild(spanConfirmar);   
  divEliminacion.appendChild(spanAbandonar);
  divEliminacion.style.display = 'grid';
  divEliminacion.style.height = '21vh'
  // Evento para confirmar la eliminación
  spanConfirmar.addEventListener('click', (e) => {
    e.stopPropagation();
    const alertaNueve = document.getElementById('span-index');    
    divEliminacion.style.display='none'
    // Eliminar del localStorage  
    const almacenJSON = localStorage.getItem('coloresRegistrados');
    if (almacenJSON) {
      const almacenRecuperado = JSON.parse(almacenJSON);
      if (almacenRecuperado[nombreObjeto]) {
        delete almacenRecuperado[nombreObjeto]; // Eliminar la clave del objeto
        localStorage.setItem('coloresRegistrados', JSON.stringify(almacenRecuperado)); // Guardar cambios
        setTimeout(() => {
          almacenObjetos = JSON.parse(localStorage.getItem('coloresRegistrados')) || {};
        }, 50);
      }
    } 
    // Eliminar visualmente de la lista
    const elementosLista = document.querySelectorAll('.cliente-item');
    elementosLista.forEach((elemento) => {
      if (elemento.textContent === nombreObjeto) {
        elemento.remove();
      }
    }); 

    mostrarNombresDeObjetos(); // Refrescar la lista después de eliminar
    document.querySelector('.alerta-botones').style.display='flex'
    document.querySelector('.alerta-botones').style.top='43vh'
    document.querySelector('.alerta-botones').style.left='37vw'
    document.querySelector('.alerta-botones').textContent= `El perfil : ${nombreObjeto} ha sido eliminado exitosamente.`
    document.querySelectorAll('.cliente-item').forEach(item => {
    item.style.filter = 'blur(15px)';
    alertaNueve.style.zIndex=9999

    });  
  });

  spanAbandonar.addEventListener('click', (e) => {
    e.stopPropagation();
    
    restablecerClick(['.cliente-item']);
    document.querySelectorAll('.cliente-item').forEach(item => {
      item.style.filter = 'none';
    });
    divEliminacion.style.display = 'none';
  });
  document.getElementById('panel-uno').textContent = '';
  document.getElementById('panel-uno').style.backgroundColor=''

  desactivarClickTemporalmente(['.nueve-span'], 500);

}

function editarObjeto(nombreObjeto) {
  document.querySelectorAll('.cliente-item').forEach(item => {
    item.style.filter = 'blur(15px)';
  });
  
  let spanAviso = document.querySelector('#span-nombre')
  // Crear un input para capturar el nuevo nombre
  const inputNuevoNombre = document.createElement('input');
  inputNuevoNombre.type = 'text';
  inputNuevoNombre.value = nombreObjeto; // Valor actual por defecto 
  inputNuevoNombre.id = 'input-edicion'

  // Botón para confirmar el cambio de nombre
  const botonConfirmar = document.createElement('button');
  const botonSalir = document.createElement('button')
  botonConfirmar.textContent = 'Guardar';
  botonConfirmar.className = 'boton-edicion'
  botonConfirmar.className ='edicion-span'  

  botonSalir.textContent = 'Salir'
  botonSalir.className = 'boton-edicion'
  botonSalir.className ='edicion-span'

  // Contenedor temporal para edición
  const contenedorEdicion = document.createElement('div');
  contenedorEdicion.classList.add('contenedor-edicion'); // Usamos la clase para el posicionamiento estático  
  contenedorEdicion.appendChild(inputNuevoNombre);
  contenedorEdicion.appendChild(botonConfirmar);
  contenedorEdicion.appendChild(botonSalir);
 
  // Insertar el contenedor en el DOM
  listaClientes.appendChild(contenedorEdicion);
  contenedorEdicion.style.display='grid'
  
  inputNuevoNombre.focus();
  // Evento para confirmar el cambio de nombre
  botonConfirmar.addEventListener('click', (e) => {
    e.stopPropagation();
    const nuevoNombre = inputNuevoNombre.value.trim(); 
    if (!nuevoNombre) {
      alertaOcho.style.display='flex'
      alertaOcho.style.zIndex = 5000
      alertaOcho.textContent='El perfil debe tener un nombre'
      return;
    }
    // Recuperar el objeto almacenado en localStorage
    const almacenJSON = localStorage.getItem('coloresRegistrados');
    if (almacenJSON) {
      const almacenRecuperado = JSON.parse(almacenJSON);
      // Verificar que el nuevo nombre no exista ya
      if (almacenRecuperado[nuevoNombre]) {
        alertaOcho.style.display='flex'
        alertaOcho.style.zIndex = 5000

        alertaOcho.addEventListener('click', () => {
          alertaOcho.style.display='none'
          listaClientes.style.filter = 'none';
        });
        return;
      }
      // Actualizar el nombre en el almacenamiento
      almacenRecuperado[nuevoNombre] = almacenRecuperado[nombreObjeto]; // Copiar los datos del objeto
      delete almacenRecuperado[nombreObjeto]; // Eliminar la clave antigua
      // Guardar nuevamente en localStorage
      localStorage.setItem('coloresRegistrados', JSON.stringify(almacenRecuperado));
      // Actualizar la lista visualmente
      const elementosLista = document.querySelectorAll('.cliente-item');
      elementosLista.forEach((elemento) => {
        if (elemento.textContent === nombreObjeto) {
          elemento.textContent = nuevoNombre; // Cambiar el nombre visualmente 
          elemento.style.filter = 'blur(15px)';
        }
      });
      // Ordenar la lista después de actualizar el nombre
      ordenarListaClientes();
      mostrarNombresDeObjetos();
      alertaSiete.style.display='grid'
      alertaSiete.style.zIndex= 5000
      spanAviso.textContent = `${nuevoNombre}`;      
    }                           
    // Eliminar el contenedor temporal
    contenedorEdicion.remove();
    traerAlmacenObjetos();
  }); 

  botonSalir.addEventListener('click', (e) => {
    e.stopPropagation(); 
    document.querySelectorAll('.cliente-item').forEach(item => {
      item.style.filter = 'none';
    });
    let alertas = document.querySelectorAll('.cerrar')
    contenedorEdicion.style.display='none'
    alertas.forEach(alerta =>{
      alerta.style.display='none'
    })
    document.querySelectorAll('.datos-base').forEach((elemento) => {
    elemento.textContent = ''
    })
    restablecerClick(['.butt-perfiles', '.estilo-1','.digit','.digito']); 
    calculadora.classList.add('move-calculadora')
    objetoGlobal = '' 
    
  }) 
}
function ordenarListaClientes() {
  const elementos = Array.from(listaClientes.children);
  
  elementos.sort((a, b) => {
    return a.textContent.localeCompare(b.textContent, 'es', { sensitivity: 'base' });
  });

  // Reordenar los elementos en el DOM
  elementos.forEach(elemento => listaClientes.appendChild(elemento));
}
document.querySelector('#perfil-cambio').addEventListener('click', () =>{ 
  document.querySelector('#alerta-siete').style.display='none'
  restablecerClick((['.butt-perfiles']))
  document.querySelectorAll('.cliente-item').forEach(item => {
    item.style.filter = 'none';
  });
})
function ocultarConsultas(){
  let alertas = document.querySelectorAll('.cerrar')
  let menu = document.querySelector('#menu-contextual')
  let alerta = document.querySelector('#alerta-siete')
  ocultarElemento('#formulario-perfiles, .files-job, .listado-clientes, .consola-ir')
  botonesPerfilColor.forEach(elemento => {
    elemento.style.display = 'block';
  }) 
  detenerAlternarColor();
  alertas.forEach(alerta =>{
    alerta.style.display='none'
  })
  document.querySelectorAll('.datos-base').forEach((elemento) => {
  elemento.textContent = ''
  })
  restablecerClick(['.butt-perfiles', '.estilo-1','.digit','.digito']);
  if(menu){
    menu.style.display = 'none'
  }
  alerta.style.display = 'none'
  if(document.querySelector('#butt-job-track').style.backgroundColor === 'rgb(0,255,0)' && document.querySelector('#boton-perfiles').style.backgroundColor === 'rgb(0,255,0)' ){
    objetoGlobal = ''
  }
  console.log('OBJETO GLOBAL ', objetoGlobal)
}
function consultarCapacidadAlamcenamiento() {
  // Verificar uso actual
  let totalUsed = 0;
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      totalUsed += ((localStorage[key].length + key.length) * 2); // Cada carácter ocupa 2 bytes
    }
  }

  // Capacidad total estimada
  const totalCapacity = 5 * 1024 * 1024; // 5 MB en bytes (ajustar si sabes la capacidad específica de tu navegador)

  // Mostrar resultados
  console.log(`Uso actual: ${(totalUsed / 1024).toFixed(2)} KB`);
  console.log(`Capacidad total: ${(totalCapacity / 1024).toFixed(2)} KB`);
  console.log(`Espacio disponible: ${((totalCapacity - totalUsed) / 1024).toFixed(2)} KB`);

  const flagsEstado = {
    flagNegro,
    flagCyan,
    flagMagenta,
    flagAmarillo,
    flagEspecial,
    flagBarniz
  };
  
  // Muestra el estado actual de las banderas en la consola
  console.log("Estado de las banderas:", flagsEstado);
  
}

function traerAlmacenObjetos() {
  console.clear()
  // Recuperar el almacenamiento desde localStorage
  const datosGuardados = localStorage.getItem('coloresRegistrados');
  if (datosGuardados) {
    try {
      // Parsear los datos y asignarlos a almacenObjetos
      almacenObjetos = JSON.parse(datosGuardados);
      console.log('almacenObjetos CARGADO:', almacenObjetos);
      // Mostrar la composición detallada del objeto

    } catch (error) {
      console.error('Error al parsear almacenObjetos desde localStorage:', error);
      almacenObjetos = {}; // En caso de error, inicializar vacío
    }
  } else {
    console.warn('No se encontraron datos en localStorage.');
    almacenObjetos = {}; // Inicializar con un objeto vacío
  }
  // Asignar el objeto recuperado a objetoGlobal
  // Confirmar que el objeto se ha asignado correctamente
  console.log('objetoGlobal:', objetoGlobal);
  console.log('nombreProvisional:', nombreProvisional);
}

function moverFormulario() {
  const formulario = document.querySelector('#formulario-perfiles'); 
  formulario.style.display='none' 
  // Deshabilitar la transición para que el cambio sea inmediato
  formulario.style.transition = 'none';
  formulario.classList.remove('mover-izquierda');
  // FORZAR un reflow para aplicar el cambio de inmediato
  void formulario.offsetHeight;
  // Restaurar la transición
  formulario.style.transition = 'transform 0.5s ease-in-out';
  // Asegurar que el formulario es visible antes de moverlo
  formulario.style.display = 'grid';
  setTimeout(() => {
    formulario.style.display='grid'
    formulario.classList.add('mover-izquierda');
  }, 50);
}
function ocultarElemento(selectores) {
  const formularios = document.querySelectorAll(selectores); // Selecciona los elementos basados en el parámetro
  if (formularios.length === 0) return; // Si no hay elementos, salir
  let opacidad = 1;
  const duracion = 500; // 0.5 segundos
  const intervalo = 50; 
  const decremento = intervalo / duracion; 
  const animacion = setInterval(() => {
    opacidad -= decremento;
    formularios.forEach(formulario => {
      formulario.style.opacity = opacidad;
    });
    if (opacidad <= 0) {
      clearInterval(animacion); 
      formularios.forEach(formulario => {
        formulario.style.display = 'none';
        formulario.style.opacity = '1'; // Restablece para futuras apariciones
      });
    }
  }, intervalo);
}
function mostrarElemento(selectores) {
  const elementos = document.querySelectorAll(selectores); // Selecciona los elementos basados en el parámetro
  if (elementos.length === 0) return; // Si no hay elementos, salir

  elementos.forEach(elemento => {
    elemento.style.display = ''; // Asegura que sea visible antes de animar
    elemento.style.opacity = '0'; // Inicia en 0 para el efecto de aparición
  });

  let opacidad = 0;
  const duracion = 500; // 0.5 segundos
  const intervalo = 50;
  const incremento = intervalo / duracion;

  const animacion = setInterval(() => {
    opacidad += incremento;
    elementos.forEach(elemento => {
      elemento.style.opacity = opacidad;
    });
    if (opacidad >= 1) {
      clearInterval(animacion);
      elementos.forEach(elemento => elemento.style.opacity = '1'); // Asegura que quede en 1 al final
    }
  }, intervalo);
}

document.querySelectorAll('.section').forEach((btn, index) => {

  btn.addEventListener('mouseover', () => {
    let buttBlur = document.querySelectorAll('.btn-sections')[index]
    if (buttBlur) {
      buttBlur.style.backgroundColor = 'rgb(255,255,0)'
      btn.style.border = '1px solid rgb(111,111,111)'
    }
  })

  btn.addEventListener('mouseout', () => {
    let buttBlur = document.querySelectorAll('.btn-sections')[index]
    if (buttBlur) {
      buttBlur.style.backgroundColor = ''
      btn.style.border = ''
    }
  })
})

// mueve botones mezcladores DA COLOR NARANJA Y COLOR A PANTALLAS RGB Y CMYK
let values = { C: 0, M: 0, Y: 0, K: 0, A: 0, R: 0, G: 0, B: 0, W:0 };
let red = 0, green = 0, blue = 0; 
// ejecuta la función de inicialización de los sliders (initSliderCYK) para cada canal de color


function initSliderCMYK(trackId, spanId, channel) {
  const track = document.getElementById(trackId);
  const thumb = track.querySelector(".slider-thumb-cmyk");
  const span = document.getElementById(spanId);

  let dragging = false;

  const updateFromClientY = (clientY) => {
    const rect = track.getBoundingClientRect();
    const offset = rect.bottom - clientY;

    const porcentaje = Math.max(
      0,
      Math.min(100, (offset / rect.height) * 100)
    );

    const pos =
      (porcentaje / 100) * (rect.height - thumb.offsetHeight);

    thumb.style.bottom = `${pos}px`;
    track.style.background = `linear-gradient(to top, rgb(255,120,0) ${porcentaje}%, rgb(0,0,17) ${porcentaje}%)`;

    values[channel] = Math.round(porcentaje);
    if (span) span.textContent = `${values[channel]}%`;

    updateColorCMYK(channel);
  };

  const start = (e) => {
    e.preventDefault();
    dragging = true;
    thumb.setPointerCapture(e.pointerId);
    updateFromClientY(e.clientY);
  };

  const move = (e) => {
    if (!dragging) return;
    updateFromClientY(e.clientY);
  };

  const end = () => {
    dragging = false;
  };

  // Thumb
  thumb.addEventListener("pointerdown", start);
  thumb.addEventListener("pointermove", move);
  thumb.addEventListener("pointerup", end);
  thumb.addEventListener("pointercancel", end);

  // Track (permite tocar cualquier punto)
  track.addEventListener("pointerdown", start);
}

// Convierte los valores CMYKW a RGB y actualiza el color en 'colorBox' y los valores en labels e inputs.
function updateColorCMYK(channel) { // CMYK
  let rgb = cmykwToRgb(values.C, values.M, values.Y, values.K, values.A);
  document.getElementById("colorCMYK").style.backgroundColor = rgb;
  document.getElementById("c-span").textContent = values.C.toFixed(0); 
  document.getElementById("m-span").textContent = values.M.toFixed(0);
  document.getElementById("y-span").textContent = values.Y.toFixed(0);
  document.getElementById("k-span").textContent = values.K.toFixed(0);
  document.getElementById("w-span").textContent = values.A.toFixed(0);  
  document.getElementById("input-c").value = values.C.toFixed(0);
  document.getElementById("input-m").value = values.M.toFixed(0);
  document.getElementById("input-y").value = values.Y.toFixed(0);
  document.getElementById("input-k").value = values.K.toFixed(0);
  document.getElementById("input-a").value = values.A.toFixed(0);

  // Asegurar que objetoGlobalColor y su estructura existan
  if (!objetoGlobalColor) {
    objetoGlobalColor = { CMYK: {} };
  }
  if (!objetoGlobalColor.CMYK) {
    objetoGlobalColor.CMYK = {};
  }
  if (!objetoGlobalColor.CMYK[channel]) {
    objetoGlobalColor.CMYK[channel] = { value: 0 };
  }
  // Asignar el valor actualizado
  objetoGlobalColor.CMYK[channel].value = values[channel];
}
// Normaliza valores CMYK manteniendo la proporción entre ellos.
function normalizeCMYK(c, m, y, k) { // CMYK 
  let max = Math.max(c, m, y, k);
  if (max > 0) {
    c = Math.round((c / max) * 100);
    m = Math.round((m / max) * 100);
    y = Math.round((y / max) * 100);
    k = Math.round((k / max) * 100);
  }
  return { c, m, y, k };
}
// Anima el movimiento de los sliders hasta un porcentaje destino en un tiempo determinado.
function animarSlidersCMYK(sliderConfigs, duracion = 1000) {
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    let progress = (timestamp - startTime) / duracion;
    if (progress > 1) progress = 1;

    sliderConfigs.forEach(({ trackId, spanId, channel, porcentajeDestino }) => {
      let track = document.getElementById(trackId);
      let thumb = track.querySelector(".slider-thumb-cmyk");
      let span = document.getElementById(spanId);
      let rect = track.getBoundingClientRect();
      
      // Cálculo de la posición final según el porcentaje destino
      let endValue = (porcentajeDestino / 100) * (rect.height - thumb.offsetHeight);
      let newValue = progress * endValue;

      thumb.style.bottom = `${newValue}px`;
      let porcentaje = (newValue / (rect.height - thumb.offsetHeight)) * 100;

      track.style.background = `linear-gradient(to top, rgb(255,120,0) ${porcentaje}%, rgb(0,0,17) ${porcentaje}%)`;

      values[channel] = Math.round(porcentaje); // ✅ Ahora W se mantiene en escala 0-100 como los demás      

      span.textContent = Math.round(values[channel]); 
    });
    updateColorCMYK();
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
}

function initSliderRGB(trackId, spanId, channel) {
  const track = document.getElementById(trackId);
  const thumb = track.querySelector(".slider-thumb-rgb");
  const span = document.getElementById(spanId);

  let dragging = false;

  const updateFromClientY = (clientY) => {
    const rect = track.getBoundingClientRect();
    const offset = rect.bottom - clientY;

    const porcentaje = Math.max(0, Math.min(100, (offset / rect.height) * 100));
    const pos = (porcentaje / 100) * (rect.height - thumb.offsetHeight);

    thumb.style.bottom = `${pos}px`;
    track.style.background = `linear-gradient(to top, rgb(255,120,0) ${porcentaje}%, rgb(0,0,17) ${porcentaje}%)`;

    values[channel] = Math.round((porcentaje / 100) * 255);
    span.textContent = values[channel];

    updateColorRGB();
  };

  const start = (e) => {
    e.preventDefault();
    dragging = true;
    thumb.setPointerCapture(e.pointerId);
    updateFromClientY(e.clientY);
  };

  const move = (e) => {
    if (!dragging) return;
    updateFromClientY(e.clientY);
  };

  const end = () => {
    dragging = false;
  };

  // Thumb
  thumb.addEventListener("pointerdown", start);
  thumb.addEventListener("pointermove", move);
  thumb.addEventListener("pointerup", end);
  thumb.addEventListener("pointercancel", end);

  // Track (mejora UX: tocar cualquier punto del track)
  track.addEventListener("pointerdown", start);
}

function updateColorRGB() {
  let rgba = `rgba(${values.R}, ${values.G}, ${values.B}, ${values.W / 255})`;
  document.getElementById("colorDisplay").style.backgroundColor = rgba;

  document.getElementById("c-span-rgb").textContent = values.R;
  document.getElementById("m-span-rgb").textContent = values.G;
  document.getElementById("y-span-rgb").textContent = values.B;
  document.getElementById("w-span-rgb").textContent = (values.W / 255).toFixed(2);

  document.getElementById("input-r").value = values.R;
  document.getElementById("input-g").value = values.G;
  document.getElementById("input-b").value = values.B;
  document.getElementById("input-w").value = values.W;
}

/* const clamp = (value, min, max) =>
  Math.min(max, Math.max(min, value));

panelRGB
  .querySelectorAll('input[type="number"]')
  .forEach(input => {
    input.addEventListener('input', () => {
      if (input.value === '') return;

      const min = Number(input.min);
      const max = Number(input.max);

      let value = parseInt(input.value, 10);

      if (isNaN(value)) {
        input.value = '';
        return;
      }

      input.value = clamp(value, min, max);
    });
});

panelControlCMYK
  .querySelectorAll('input[type="number"]')
  .forEach(input => {
    input.addEventListener('input', () => {
      if (input.value === '') return;

      const min = Number(input.min);
      const max = Number(input.max);

      let value = parseInt(input.value, 10);

      if (isNaN(value)) {
        input.value = '';
        return;
      }

      input.value = clamp(value, min, max);
    });
}); */  

function animarSlidersRGB(sliderConfigs, duracion = 1000) {
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    let progress = (timestamp - startTime) / duracion;
    if (progress > 1) progress = 1;

    sliderConfigs.forEach(({ trackId, spanId, channel, porcentajeDestino }) => {
      let track = document.getElementById(trackId);
      let thumb = track.querySelector(".slider-thumb-rgb");
      let span = document.getElementById(spanId);
      let rect = track.getBoundingClientRect();

      // 🔹 W ahora usa el mismo cálculo que los demás
      let endValue = (porcentajeDestino / 255) * (rect.height - thumb.offsetHeight);
      let newValue = progress * endValue;

      thumb.style.bottom = `${newValue}px`;

      let porcentaje = (newValue / (rect.height - thumb.offsetHeight)) * 100;
      track.style.background = `linear-gradient(to top, rgb(255,120,0) ${porcentaje}%, rgb(0,0,17) ${porcentaje}%)`;

      values[channel] = Math.round((porcentaje / 100) * 255);
      span.textContent = values[channel];
    });
    updateColorRGB();
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
}
// Botón para animar los sliders según los valores en los inputs
document.getElementById("animate-btn").addEventListener("click", () => {
  let rValue = parseInt(document.getElementById("input-r").value) || 0;
  let gValue = parseInt(document.getElementById("input-g").value) || 0;
  let bValue = parseInt(document.getElementById("input-b").value) || 0;
  let wValue = parseInt(document.getElementById("input-w").value) || 0;

  animarSlidersRGB([
    { trackId: "slid-rojo-rgb", spanId: "c-span-rgb", channel: "R", porcentajeDestino: rValue },
    { trackId: "slid-verde-rgb", spanId: "m-span-rgb", channel: "G", porcentajeDestino: gValue },
    { trackId: "slid-azul-rgb", spanId: "y-span-rgb", channel: "B", porcentajeDestino: bValue },
    { trackId: "slid-blanco-rgb", spanId: "w-span-rgb", channel: "W", porcentajeDestino: wValue }
  ]);
});
document.getElementById("reset-btn-rgb").addEventListener("click", () => {
  const inputs = document.querySelectorAll('#control-rgb-inpt input[type="number"]');
  inputs.forEach(input => input.value = 0);
  resetBotonMezclador('padre-rgb') 
});
document.getElementById("reset-btn-cmyk").addEventListener("click", () => {
  const inputs = document.querySelectorAll('#control-cmyk-inpt input[type="number"]');
  inputs.forEach(input => input.value = 0);
  resetBotonMezclador('padre-cmyk') 
});
function cmykwToRgb(c, m, y, k, a) {  // RGB
  let normalized = normalizeCMYK(c, m, y, k);
  c = normalized.c;
  m = normalized.m;
  y = normalized.y;
  k = normalized.k;
  let r = 255 * (1 - c / 100) * (1 - k / 100);
  let g = 255 * (1 - m / 100) * (1 - k / 100);
  let b = 255 * (1 - y / 100) * (1 - k / 100);
  let factorBlanco = a / 100;
  r = r + (255 - r) * factorBlanco;
  g = g + (255 - g) * factorBlanco;
  b = b + (255 - b) * factorBlanco;
  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}
// renderiza cantidad guardada en inputs CMYK
document.getElementById("animate-btn-cmyk").addEventListener("mouseup", () => {
  let cValue = parseInt(document.getElementById("input-c").value) || 0;
  let mValue = parseInt(document.getElementById("input-m").value) || 0;
  let yValue = parseInt(document.getElementById("input-y").value) || 0;
  let kValue = parseInt(document.getElementById("input-k").value) || 0;
  let oValue = parseInt(document.getElementById("input-a").value) || 0;

  animarSlidersCMYK([
    { trackId: "slid-cian", spanId: "c-span", channel: "C", porcentajeDestino: cValue },
    { trackId: "slid-magenta", spanId: "m-span", channel: "M", porcentajeDestino: mValue },
    { trackId: "slid-amarillo", spanId: "y-span", channel: "Y", porcentajeDestino: yValue },
    { trackId: "slid-negro", spanId: "k-span", channel: "K", porcentajeDestino: kValue },
    { trackId: "slid-blanco", spanId: "w-span", channel: "A", porcentajeDestino: oValue }
  ]);
});
function animarColorSecuencia() {
  desactivarClick(['.butt-perfiles']);
  
  const botones = document.querySelectorAll(".btn-respaldo");
  const perfiles = document.querySelectorAll(".btn-respaldo"); // Selecciona los botones de perfil  

  if (botones.length === 0) return;

  let r = 0, g = 255, b = 0; // Inicia en verde
  let fase = 0; // Controla las fases del ciclo
  let tiempoInicio = Date.now(); // Guarda el tiempo de inicio

  function actualizarColor() {
    botones.forEach(btn => {
      btn.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
  }

  function iniciarTransicion(objetivoR, objetivoG, objetivoB, siguienteFase) {
    const intervalo = setInterval(() => {
      let tiempoTranscurrido = Date.now() - tiempoInicio;

      // Si han pasado 2000ms, forzar color verde y detener animación
      if (tiempoTranscurrido >= 2000) {
        clearInterval(intervalo);
        r = 0;
        g = 255;
        b = 0;
        actualizarColor();
        return;
      }

      if (r !== objetivoR) r += (r < objetivoR) ? 51 : -51;
      if (g !== objetivoG) g += (g < objetivoG) ? 51 : -51;
      if (b !== objetivoB) b += (b < objetivoB) ? 51 : -51;

      actualizarColor();

      if (r === objetivoR && g === objetivoG && b === objetivoB) {
        clearInterval(intervalo);
        setTimeout(() => {
          fase = siguienteFase;
          ejecutarFase();
        }, 100);
      }
    }, 1);
  }

  function ejecutarFase() {
    // Si ya pasaron 2000ms, no continuar con más transiciones
    if (Date.now() - tiempoInicio >= 1000) return;

    switch (fase) {
      case 0: iniciarTransicion(255, 255, 255, 1); break; // Verde → Blanco
      case 1: iniciarTransicion(255, 255, 0, 2); break;  // Blanco → Amarillo
      case 2: iniciarTransicion(255, 255, 255, 3); break; // Amarillo → Blanco
      case 3: iniciarTransicion(255, 0, 255, 4); break; // Blanco → Magenta
      case 4: iniciarTransicion(255, 255, 255, 5); break; // Magenta → Blanco
      case 5: iniciarTransicion(0, 255, 255, 6); break;  // Blanco → Cian
      case 6: iniciarTransicion(255, 255, 255, 7); break; // Cian → Blanco
      case 7: iniciarTransicion(0, 255, 0, 0); break; // Blanco → Verde (reinicio)
    }
  }

  ejecutarFase(); // Iniciar la secuencia
  setTimeout(() => {
    perfiles.forEach(btn => {
      btn.style.backgroundColor = `rgb(0,255,0)`;
    });
    restablecerClick(['.butt-perfiles'])
  }, 1010);
}
function animarSecuenciaPerfiles() {
  const perfilesFondo = document.querySelectorAll(".btn-respaldo");


  if (botonesPerfilColor.length === 0) return; // Si no hay elementos, no hacer nada

  let indice = 0;

  function cambiarColor() {
    if (indice >= botonesPerfilColor.length) return; // Si ya pasó por todos, detener ejecución

    const boton = botonesPerfilColor[indice]; // Selecciona el botón actual
    const botonFondo = perfilesFondo[indice]
    const colorOriginal = boton.style.backgroundColor; // Guarda su color original

    boton.style.backgroundColor = '#2bf22bc0'; // Lo cambia a verde
    botonFondo.style.backgroundColor = '#2bf22bc0'; // Lo cambia a verde

    setTimeout(() => {
      boton.style.backgroundColor = colorOriginal; // Lo regresa a su color original
      indice++; // Pasa al siguiente elemento

      cambiarColor(); // Llama a la función para el siguiente botón
    }, 145);

  }

  cambiarColor(); // Inicia la secuencia
}
function colorearRespaldos() {
  const respaldos = document.querySelectorAll('.btn-respaldo');
  const frentes   = botonesPerfilColor;
  if (!respaldos.length) return;

  // 1. Quitar color de fondo en ambos grupos
  respaldos.forEach(el => {
    el.style.backgroundColor = '';
    el.style.height = '3vh';
  });
  frentes.forEach(el => {
    el.style.backgroundColor = '';
  });

  // 2. Tras 100 ms aplicar verde a ambos grupos con intervalo de 0.1 s
  let i = 0;
  setTimeout(() => {
    const intervalo = setInterval(() => {
      if (i < respaldos.length) {
        respaldos[i].style.backgroundColor = 'rgb(0,255,0)';
      }
      i++;
      if (i >= Math.max(respaldos.length, frentes.length)) {
        clearInterval(intervalo);
      }
    }, 100);
  }, 100);
}
// arrastre PADRES mezcladores
function initDrag(elemento) {
  let isDragging = false;
  let offsetX, offsetY;

  elemento.addEventListener("mousedown", (e) => {
    if (e.target === elemento) {
      isDragging = true;
      offsetX = e.clientX - elemento.offsetLeft;
      offsetY = e.clientY - elemento.offsetTop;
    }
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      elemento.style.left = `${e.clientX - offsetX}px`;
      elemento.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  elemento.querySelectorAll("button, input[type='range']").forEach((btn) => {
    btn.addEventListener("mousedown", (e) => {
      e.stopPropagation();
    });
  });
}

/* initDrag(document.getElementById("padre-rgb"));
initDrag(document.getElementById("padre-cmyk"));
initResize(
  document.querySelector("#padre-rgb"),
  document.querySelector(".esquina-rgb")
);
initResize(
  document.querySelector("#padre-cmyk"),
  document.querySelector(".esquina-cmyk")
); */
function cmykFlotante() { // botones rojos
  var elementosExcluidos = ['colorCMYK','container-slider','simulador','boton-perfiles','boton-reseteo'] 
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  document.querySelectorAll('.cmyRgb-group, .lbls-cmyRgb').forEach(el => {
    el.style.display = 'block';
  });     

  let padreCmyk = document.querySelector("#padre-cmyk");
  let padreControles = document.querySelector("#container-slider");
  let perfilador = document.querySelector('#perfiles-color')

  padreCmyk.style.display = "grid";
  padreControles.style.display = 'grid';
  padreCmyk.style.zIndex = 200
  perfilador.removeAttribute("style");
}
function rgbFlotante() { // botones rojos
  var elementosExcluidos = ['colorDisplay','padre-controles','simulador','boton-perfiles','boton-reseteo'] 
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
   document.querySelectorAll('.btn-opcion, .lbls-cmyRgb').forEach(el => {
    el.style.display = 'block';
  });      

  let padreRgb = document.querySelector("#padre-rgb");
  let padreControles = document.querySelector("#padre-controles");
  let perfilador = document.querySelector('#perfiles-color')

  padreRgb.style.display = "grid";
  padreControles.style.display = 'grid';
  padreRgb.style.zIndex = 200
  perfilador.removeAttribute("style");
}
function initResize(contenedor, esquina) {
  const MIN_WIDTH = 200;
  const MIN_HEIGHT = 200;
  let isResizing = false, offsetX, offsetY;

  esquina.addEventListener("mousedown", (e) => {
    isResizing = true;
    offsetX = e.clientX;
    offsetY = e.clientY;
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stopResize);
  });

  function resize(e) {
    if (!isResizing) return;

    let nuevoAncho = e.clientX - contenedor.getBoundingClientRect().left;
    let nuevoAlto = e.clientY - contenedor.getBoundingClientRect().top;

    if (nuevoAncho >= MIN_WIDTH) {
      contenedor.style.width = `${nuevoAncho}px`;
    }
    if (nuevoAlto >= MIN_HEIGHT) {
      contenedor.style.height = `${nuevoAlto}px`;
    }
  }

  function stopResize() {
    isResizing = false;
    document.removeEventListener("mousemove", resize);
    document.removeEventListener("mouseup", stopResize);
  }
}
function resetBotonMezclador(parentContiner) {
  if (typeof parentContiner !== "string") return;
  parentContiner = parentContiner.trim().toLowerCase();

  let isCMYK = parentContiner === 'padre-cmyk';
  let sliders = document.querySelectorAll(isCMYK ? ".slider-thumb-cmyk" : ".slider-thumb-rgb");
  
  sliders.forEach(mezclador => {
    mezclador.style.transition = "bottom 0.8s ease"; 
    mezclador.style.bottom = "0%"; 

    setTimeout(() => {
      mezclador.style.transition = "";
    }, 800);
  });

  let colorElement = document.querySelector(isCMYK ? "#colorCMYK" : "#colorDisplay");
  if (colorElement) colorElement.style.backgroundColor = "";  

  // Reseteo de los valores de mezcla
  if (typeof values !== "object") values = {};
  Object.assign(values, isCMYK ? 
    { C: 0, M: 0, Y: 0, K: 0, A: 0 } : 
    { R: 0, G: 0, B: 0, W: 0 }
  );

  // **Aquí se restablece el degradado en el slider-track**
  let sliderTracks = document.querySelectorAll(isCMYK ? ".slider-track" : ".slider-track-rgb");
  sliderTracks.forEach(track => {
    track.style.transition = "background 0.8s ease";
    track.style.background = `linear-gradient(to top, rgb(255,120,0) 0%, rgb(0,0,17) 0%)`;

    setTimeout(() => {
      track.style.transition = "";
    }, 800);
  });

  // Llamar a la función de actualización correspondiente
  if (isCMYK) {
    updateColorCMYK();  
  } else {
    values.A = parseFloat(values.A) || 0;  
    updateColorRGB();
  }
}
function configurarBoton(selector, contenedor, callback) {
  const boton = document.querySelector(selector);
  const padre = document.querySelector(contenedor);
  if (!boton || !padre) return;

  boton.addEventListener('mousedown', () => {
    // Resetear todos los botones al estilo CSS original
    document.querySelectorAll('.cmyRgb-group').forEach(b => {
      b.style.backgroundColor = ''; // vacío => vuelve al color CSS
    });

    // Aplicar efecto solo al botón activo
    boton.style.backgroundColor = 'rgb(255,0,0)';

    // Ajustes al contenedor
    padre.style.width = '50vw';
    padre.style.height = '68vh';
    padre.style.zIndex = 200;
    padre.style.backgroundColor = '';

    if (callback) callback();
  });

  boton.addEventListener('mouseup', () => {
    boton.style.backgroundColor = ''; 
  });
}
// RGB CMYK
function alternarTeccnologia(tecnologia) {
  const padreCmyk = document.getElementById('padre-cmyk');
  const controlCmyk = document.getElementById('control-panel-cmyk');

  const padreRgb = document.getElementById('padre-rgb');
  const controlRgb = document.getElementById('control-panel-rgb');

  switch (tecnologia) {
    case 'rgb':
      if (padreCmyk) {
        ocultarElementoProgressivo(padreCmyk)
        ocultarElementoProgressivo(controlCmyk)
        mostrarElementoProgressivo(padreRgb);
        mostrarElementoProgressivo(controlRgb);
      
      }
    break;

    case 'cmyk':
      if (padreRgb) {
        ocultarElementoProgressivo(padreRgb)
        ocultarElementoProgressivo(controlRgb)
        mostrarElementoProgressivo(padreCmyk);
        mostrarElementoProgressivo(controlCmyk);
      }
    break;
  }
}
function ocultarElementoProgressivo(el, callback) {
  if (!el) return;
  // aceptar id/selector o elemento
  if (typeof el === 'string') el = document.getElementById(el) || document.querySelector(el);
  if (!el) return;

  // estado inicial claro para animar
  el.style.transition = '';
  el.style.opacity = '1';

  const wasHidden = getComputedStyle(el).display === 'none';
  if (wasHidden) {
    // ya estaba oculto → terminar inmediatamente
    el.style.display = 'none';
    return;
  }

  // iniciar fade out
  requestAnimationFrame(() => {
    el.style.transition = 'opacity 0.5s ease';
    el.style.opacity = '0';
  });

  let timer = null;

  const finish = () => {
    if (timer) { clearTimeout(timer); timer = null; }
    // mantén oculto y deja el elemento en estado "neutro" (sin residuos) excepto display:none
    el.style.display = 'none';   // importante: conservar oculto
    el.style.transition = '';
    el.style.opacity = '';       // limpio para la próxima aparición
    el.style.visibility = '';
    if (typeof callback === 'function') callback();
  };

  const onTransitionEnd = (ev) => {
    if (ev.target !== el) return;               // ignorar transiciones de hijos
    if (ev.propertyName && ev.propertyName !== 'opacity') return;
    el.removeEventListener('transitionend', onTransitionEnd);
    finish();
  };

  el.addEventListener('transitionend', onTransitionEnd);

  // fallback si no ocurre transitionend
  const cs = getComputedStyle(el);
  const dur = (parseFloat((cs.transitionDuration || '0').split(',')[0]) || 0) * 1000;
  const del = (parseFloat((cs.transitionDelay || '0').split(',')[0]) || 0) * 1000;
  const fallback = (dur + del) > 0 ? dur + del + 50 : 600;
  timer = setTimeout(() => {
    el.removeEventListener('transitionend', onTransitionEnd);
    finish();
  }, fallback);
}
function mostrarElementoProgressivo(el) {
  if (!el) return;

  // resetear estilos previos
  el.style.transition = '';
  el.style.opacity = '0';
  el.style.display = 'grid';

  // también forzar a todos los hijos
  Array.from(el.querySelectorAll('*')).forEach(hijo => {
    hijo.style.transition = '';
    hijo.style.opacity = '0';
    hijo.style.display = '';
    hijo.style.visibility = 'visible';
  });

  requestAnimationFrame(() => {
    // transición del padre
    el.style.transition = 'opacity 0.5s ease';
    el.style.opacity = '1';

    // transición de los hijos
    Array.from(el.querySelectorAll('*')).forEach(hijo => {
      hijo.style.transition = 'opacity 0.5s ease';
      hijo.style.opacity = '1';
    });
  });

  el.addEventListener("transitionend", () => {
    el.style.transition = '';
    Array.from(el.querySelectorAll('*')).forEach(hijo => {
      hijo.style.transition = '';
    });
  }, { once: true });
}
// MUESTRA LOS PADRES
function secuenciaAparicion(canal) {
 const controlColor = document.querySelector('#perfiles-color');
  if (!controlColor || getComputedStyle(controlColor).display !== "none") {
    return; 
  }
  const perfilesRgb = document.querySelector('#perfiles-color')
  mostrarElementoProgressivo(perfilesRgb)
  setTimeout(() => {
    if (!buscaNombre) return;

    buscaNombre.value = '';
    creaNombre.value = '';

    if (esDesktop) {
      buscaNombre.focus();
    }
  }, 100);
  
  
  switch(canal){
    case 'rgb':
      const ids = ['boton-rgb', 'boton-rgb-alternar', 'boton-rgb-salir','lab-rgb','lab-alternar','lab-salir-rgb'];
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
      });
    break
    case 'cmyk' :
      const keys = ['lab-seis', 'boton-seis', 'lab-cmyk','boton-cmyk','lab-salir-cmyk','boton-cmyk-salir'];
      keys.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
      });
    break
  }
}

buscaNombre.addEventListener('click', () => {
  creaNombre.value = ''
  listaClientes.style.display = 'none'
  keyboardWrapper.style.display='flex'
})


let parpadeoActivo = null;

function parpadearElemento(id,intervaloMs = 200, duracionMs = null) {
  detenerParpadeo();

  const el = document.getElementById(id);
  if (!el) return;

  const colorOriginal = getComputedStyle(el).backgroundColor;
  let alternar = false;

  const intervalo = setInterval(() => {
    el.style.backgroundColor = alternar
      ? colorOriginal
      : 'rgba(0,255,255,0.44)';

    alternar = !alternar;
  }, intervaloMs);

  let timeout = null;

  // Si se define duración total
  if (typeof duracionMs === 'number') {
    timeout = setTimeout(() => {
      detenerParpadeo();
    }, duracionMs);
  }

  parpadeoActivo = {
    el,
    intervalo,
    timeout,
    colorOriginal
  };
}

function detenerParpadeo() {
  if (!parpadeoActivo) return;

  clearInterval(parpadeoActivo.intervalo);

  if (parpadeoActivo.timeout) {
    clearTimeout(parpadeoActivo.timeout);
  }

  parpadeoActivo.el.style.backgroundColor =
    parpadeoActivo.colorOriginal;

  parpadeoActivo = null;
}


// BOTON BLANCO RGB
function crearPerfilColor() { // crear nuevo desde botón blanco
  const contRGB  = document.querySelector('#padre-rgb');
  const contCYMK = document.querySelector('#padre-cmyk');

  const primerImputRGB  = document.querySelector('#input-r');
  const segundoImputRGB = document.querySelector('#input-g');
  const tercerImputRGB  = document.querySelector('#input-b');
  const cuartoImputRGB  = document.querySelector('#input-w');

  const primerImputCMYK  = document.querySelector('#input-c');
  const segundoImputCMYK = document.querySelector('#input-m');
  const tercerImputCMYK  = document.querySelector('#input-y');
  const cuartoImputCMYK  = document.querySelector('#input-k');
  const quintoImputCMYK  = document.querySelector('#input-a');

  // Capturar nombre del perfil
  let inputNombre = document.getElementById('nombre-Perfil').value.trim();

  if (!inputNombre) {
    parpadearElemento('nombre-Perfil');
    /* mostrarVentanaEmergente('Por favor, ingrese un nombre válido'); */
    saltarAlerta('Por favor, ingrese un nombre válido','vacioRgb')
    return;
  }

  // Determinar prefijo según contenedor visible
  let prefijo = '';

  if (contRGB && contRGB.style.display === 'grid') {
    prefijo = 'RGB - ';
  } else if (contCYMK && contCYMK.style.display === 'grid') {
    prefijo = 'CMYK - ';
  }

  // Evitar duplicar prefijo
  if (prefijo && !inputNombre.startsWith(prefijo)) {
    inputNombre = prefijo + inputNombre;
  }

  // Capitalizar al final
  inputNombre = capitalizarTexto(inputNombre);

  // Validar si el perfil ya existe
  if (almacenObjetos[inputNombre]) {
    mostrarVentanaEmergente('Ya existe un perfil con este nombre');
    return;
  }

  // Crear nueva instancia
  const nuevoObjeto = new objetoColores();

  // Almacenar en el almacén global
  almacenObjetos[inputNombre] = nuevoObjeto;
  objetoGlobal = inputNombre;

  if (!almacenObjetos[objetoGlobal]) {
    console.error('Error: No se pudo encontrar el perfil en almacenObjetos.');
    return;
  }

  // Asignar valores según el contenedor activo
  if (contRGB && contRGB.style.display === 'grid') {
    almacenObjetos[objetoGlobal].RGBA.R = parseInt(primerImputRGB.value, 10) || 0;
    almacenObjetos[objetoGlobal].RGBA.G = parseInt(segundoImputRGB.value, 10) || 0;
    almacenObjetos[objetoGlobal].RGBA.B = parseInt(tercerImputRGB.value, 10) || 0;
    almacenObjetos[objetoGlobal].RGBA.A = parseInt(cuartoImputRGB.value, 10) || 0;
  }

  if (contCYMK && contCYMK.style.display === 'grid') {
    almacenObjetos[objetoGlobal].CMYK.C = parseInt(primerImputCMYK.value, 10) || 0;
    almacenObjetos[objetoGlobal].CMYK.M = parseInt(segundoImputCMYK.value, 10) || 0;
    almacenObjetos[objetoGlobal].CMYK.Y = parseInt(tercerImputCMYK.value, 10) || 0;
    almacenObjetos[objetoGlobal].CMYK.K = parseInt(cuartoImputCMYK.value, 10) || 0;
    almacenObjetos[objetoGlobal].CMYK.A = parseInt(quintoImputCMYK.value, 10) || 0;
  }

  // Ordenar almacenObjetos alfabéticamente
  const almacenObjetosOrdenado = Object.keys(almacenObjetos).sort().reduce((obj, key) => {obj[key] = almacenObjetos[key];return obj;}, {});

  // Persistir en localStorage
  localStorage.setItem('coloresRegistrados',JSON.stringify(almacenObjetosOrdenado) );

  // Feedback visual
  mostrarVentanaEmergente('Perfil creado y almacenado');

  // Limpiar input
  document.getElementById('nombre-Perfil').value = '';

  // Refrescar estado
  traerAlmacenObjetos();
}




function colorRenderizado(){
  let padreLuz = document.querySelector('#padre-rgb')
  let padrePigmento = document.querySelector('#padre-cmyk')

  if(padreLuz.style.display = 'grid'){
    padrePigmento.style.display = 'none'
    padreLuz.style.display  = 'grid'

    setTimeout(() => {
      renderizaMezclaRGB()
    }, 100);
  }

  if(padrePigmento.style.display = 'grid'){
    padreLuz.style.display = 'none'
    padrePigmento.style.display  = 'grid'

    setTimeout(() => {
      renderizaMezclaCMYK()
    }, 100);
  }
  
}
function renderizaMezclaRGB() {
  // Verificar si almacenObjetos está definido
  if (!almacenObjetos[objetoGlobal] || !almacenObjetos[objetoGlobal].CMYK) {
    console.warn("Error: objetoGlogal o objetoGlogal.RGBA no está definido.");
    document.getElementById("ventanaEmergente").classList.remove("oculta");
    document.getElementById("mensajeEmergente").textContent = "Cargue la base de datos antes de generar el perfil de color";
  return;
  }

  console.log('almacenObjetos.objetoGlobal', almacenObjetos[objetoGlobal])
  // Extraer valores asegurando que existen, de lo contrario asignar 0
  let rValue = almacenObjetos[objetoGlobal].RGBA.R;
  let gValue = almacenObjetos[objetoGlobal].RGBA.G;
  let bValue = almacenObjetos[objetoGlobal].RGBA.B;
  let wValue = almacenObjetos[objetoGlobal].RGBA.A;

  // Verificar si los valores fueron obtenidos correctamente
  console.log("Valores RGBA extraídos:", { R: rValue, G: gValue, B: bValue, W: wValue });

  animarSlidersRGB([
    { trackId: "slid-rojo-rgb", spanId: "c-span-rgb", channel: "R", porcentajeDestino: rValue },
    { trackId: "slid-verde-rgb", spanId: "m-span-rgb", channel: "G", porcentajeDestino: gValue },
    { trackId: "slid-azul-rgb", spanId: "y-span-rgb", channel: "B", porcentajeDestino: bValue },
    { trackId: "slid-blanco-rgb", spanId: "w-span-rgb", channel: "W", porcentajeDestino: wValue }
  ]);
  traerAlmacenObjetos()
}
function renderizaMezclaCMYK() {
  
  // Verificar si almacenObjetos está definido
  if (!almacenObjetos[objetoGlobal] || !almacenObjetos[objetoGlobal].CMYK) {
    console.warn("Error: objetoGlogal o objetoGlogal.CMYK no está definido.");
    document.getElementById("ventanaEmergente").classList.remove("oculta");
    document.getElementById("mensajeEmergente").textContent = "Cargue la base de datos antes de generar el perfil de color";
  return;
  }

  console.log('almacenObjetos.objetoGlobal', almacenObjetos.objetoGlobal)
  // Extraer valores asegurando que existen, de lo contrario asignar 0
  let cValue = almacenObjetos[objetoGlobal].CMYK.C;
  let mValue = almacenObjetos[objetoGlobal].CMYK.M;
  let yValue = almacenObjetos[objetoGlobal].CMYK.Y;
  let kValue = almacenObjetos[objetoGlobal].CMYK.K;
  let wValue = almacenObjetos[objetoGlobal].CMYK.A;


  // Verificar si los valores fueron obtenidos correctamente
  console.log("Valores CMYK extraídos:", { C: cValue, M: mValue, Y: yValue, K: kValue, A: wValue });

  animarSlidersCMYK([
    { trackId: "slid-cian", spanId: "c-span", channel: "C", porcentajeDestino: cValue },
    { trackId: "slid-magenta", spanId: "m-span", channel: "M", porcentajeDestino: mValue },
    { trackId: "slid-amarillo", spanId: "y-span", channel: "Y", porcentajeDestino: yValue },
    { trackId: "slid-negro", spanId: "k-span", channel: "K", porcentajeDestino: kValue },
    { trackId: "slid-blanco", spanId: "w-span", channel: "A", porcentajeDestino: wValue }
  ]);
  traerAlmacenObjetos()

}
configurarBoton('#boton-seis', '#padre-cmyk', () => resetBotonMezclador('padre-cmyk'));
configurarBoton('#boton-rgb', '#padre-rgb', () => resetBotonMezclador('padre-rgb'));
configurarBoton('#boton-cmyk','#padre-cmyk', '')

configurarBoton('#boton-rgb-alternar','#padre-rgb', '') 
configurarBoton('#boton-rgb-salir','#padre-rgb', '')
configurarBoton('#boton-cmyk-salir','#padre-cmyk', '')
document.querySelector('#btn-salir-perfiles').addEventListener('click', alternarOcultarBotones);
function alternarOcultarBotones() {
  const controlRgb = document.querySelector('#control-panel-rgb')
  const controCmyk = document.querySelector('#control-panel-cmyk')
  const perfiladorColor = document.querySelector('#perfiles-color')
  const mostrarFlex = (selector) => {
    document.querySelectorAll(selector).forEach(el => el.style.display = 'flex');
  };

  ['.lbl-cmyk', '.btnCmyk', '.lbl-opcion', '.btn-opcion'].forEach(mostrarFlex);
  ocultarElementoProgressivo(perfiladorColor)
  ocultarElementoProgressivo(controlRgb)
  ocultarElementoProgressivo(controCmyk)

}
// SALIR APLICACION INFERIOR
document.querySelectorAll('.alterna-panel').forEach(btn => {
  btn.addEventListener('click', () => {
    if(btn.id === 'exit-cmyk'){
      ocultarElementoProgressivo(panelControlCMYK)
    }
    if(btn.id === 'exit-rgb'){
      ocultarElementoProgressivo(panelRgb)
    }
  });
});
document.querySelector('#boton-rgb-alternar').addEventListener('mousedown',()=>{ 
  let slidersCMYK = document.querySelector('#container-slider')

  var elementosExcluidos = ['colorCMYK','container-slider','simulador','container01','links-inicialesI','links-iniciales','buscador','search-form'] 
  for (var i = 0; i < allContenedores.length; i++) { 
    var element = document.getElementById(allContenedores[i])
    if (element) {
      element.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  } 
  container1.style.display='grid'
  slidersCMYK.style.display = 'grid';
  aparecerElemento('padre-cmyk','grid')
  actualizarIdsArray('padre-cmyk');
})
document.querySelector('#boton-cmyk').addEventListener('mousedown',()=>{
  let slidersRGB = document.querySelector('#padre-controles')

  var elementosExcluidos = ['colorDisplay','padre-controles','simulador','container01','links-inicialesI','links-iniciales','buscador','search-form'] 
  for (var i = 0; i < allContenedores.length; i++) { 
    var element = document.getElementById(allContenedores[i])  
    if (element) {
      element.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  } 
  container1.style.display='grid'
  slidersRGB.style.display = 'grid';
  aparecerElemento('padre-rgb','grid')
  actualizarIdsArray('padre-rgb');
})
document.querySelector('#save-tecnology').addEventListener('click', ()=>{
  crearPerfilColor()
})
creaNombre.addEventListener('click', () => {
  document.querySelector('#nombre-Perfil').value = ''
  creaNombre.value = ''

  botonesPerfilColor.forEach(elemento => {   
    elemento.style.display = 'block';   
  });
  mostrarListaClientes('softwareColor')
  limpiarColoresDeFondo()
  desactivarClick(['.butt-perfiles', '.estilo-1']);  
  mostrarNombresDeObjetos(); 
  setTimeout(() => {
    if (listaClientes && listaClientes.children.length === 0) {
      mostrarVentanaMensaje('El almacenamiento y la base de datos estan vacíos')
    }
  }, 50);      

});
/* function configurarOcultarLista() {
  let temporizador;
  // Si el mouse entra en la lista antes de que pasen 3 segundos, cancelamos el ocultamiento
  listaClientes.addEventListener('pointerenter', () => {
    clearTimeout(temporizador);
  });
}

// BOTON VERDE RGB
configurarOcultarLista(); */
function pintarColor() {
  
  if (!creaNombre.value.trim()) {
      parpadearElemento("nombre-perfil-existe");
      saltarAlerta('Cargue la base de datos antes de generar el perfil de color','vacioCmyk')
    if (tecnologyCMYK) {
      resetBotonMezclador('padre-cmyk');
    }
    if (tecnologyRGB) {
      resetBotonMezclador('padre-rgb');
    }
    return;
  }

  if (tecnologyCMYK) {
    renderizaMezclaCMYK();
  }
  if (tecnologyRGB) {
    renderizaMezclaRGB();
  }
}
// Función para observar cambios en el DOM
function observarCambioDisplay() {
  const observer = new MutationObserver(() => {
    const rgbVisible = getComputedStyle(document.getElementById('padre-rgb')).display === 'grid';
    const cmykVisible = getComputedStyle(document.getElementById('padre-cmyk')).display === 'grid';

    if (rgbVisible) {
      tecnologyRGB = true;
      tecnologyCMYK = false;
    } else if (cmykVisible) {
      tecnologyRGB = false;
      tecnologyCMYK = true;
    }
  });
  // Observar cambios en el body y sus hijos
  observer.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['style', 'class'] });
}
function mostrarBarraProgres(inicio, fin) {
  const barraProgreso = document.getElementById("barra-progreso-registro");
  const contenedor = document.getElementById("contenedor-registro");

  barraProgreso.style.width = inicio + "%";

  if (intervaloProgreso) return;

  contenedor.style.display = "grid";

  setTimeout(() => {
    intervaloProgreso = setInterval(() => {
      let anchoActual = parseFloat(barraProgreso.style.width) || 0;
      let nuevoAncho = anchoActual + 0.5;

      if (nuevoAncho > fin) {
        nuevoAncho = fin;
        clearInterval(intervaloProgreso);
        intervaloProgreso = null; // liberar referencia
      }

      barraProgreso.style.width = nuevoAncho + "%";
    }, 10);
  }, 100);
}
function ejecutarFase(opcion) {
  switch (opcion) {
    case "inicio":
      mostrarBarraProgres(0.1, 33.5);
      break;
    case "medio":
      mostrarBarraProgres(33.5, 67);
      break;
    case "final":
      mostrarBarraProgres(67, 100);
      break;
  }
}
grupoBotsCrear.forEach(bot => {
  bot.addEventListener('mouseleave', () => {
    alertaTres.style.display = 'none';

    if (listaClientes.children.length === 0) {
      listaClientes.style.display = 'none';
      alertaMSG.style.display = 'none';
    } 

    if (lineaClientes && lineaClientes.children.length === 0) {
      lineaClientes.style.display = 'none';
    } else {
      alertaTres.style.display = 'none';
    }

    setTimeout(() => {
      // Solo ocultar si el cursor NO está sobre listaClientes
      if (!listaClientes.matches(':hover')) {
        listaClientes.style.display = 'none';
        restablecerClick(['.estilo-1', '.jobs']);
      }
    }, 300);
  });
});



function borrrrrrrrrrrarrrrrrrrrrrrrrrrrrrr(){
  const coleccionGraficos = document.querySelectorAll(".graphs-lines")
  coleccionGraficos.forEach(grafico => {
    grafico.style.display = 'flex'
  })

  const grafica9 = document.querySelector('#MiGrafica9');
  if (grafica9) {
    grafica9.style.opacity = 1;
    grafica9.style.display = 'flex';
    grafica9.style.visibility = 'visible';
  }

  const iconos = document.querySelector('#iconos');
  const contLineas = document.querySelector('#contLineas');
  const conteSecundario = document.querySelector('#conte-secundario');
  const conteBotones = document.querySelector('#conte-butts-graphs');
  const portaVisor = document.querySelector('#porta-visor');
  const portaImagen = document.querySelector("#porta-imagen");

  if (iconos) iconos.style.display = 'flex';
  if (contLineas) contLineas.style.display = 'grid';
  if (conteSecundario) conteSecundario.style.display = 'flex';
  if (conteBotones) conteBotones.style.display = 'grid';
  if (portaImagen) portaImagen.style.display = 'grid';

  aparecerElemento('porta-visor', 'grid');

  // ✅ Después de aparecerElemento
  setTimeout(() => {
    if (portaVisor && !portaVisor.classList.contains('modificarPosicion')) {
      portaVisor.classList.add('modificarPosicion');
    }
  }, 50);

  document.querySelector("#listaNombres").style.display = 'none';
  document.querySelector("#buscador-empleado").classList.add("ubicacion");
  document.querySelector("#visorImagen").classList.add('ubicar-visor');
  document.querySelector("#porta-visor > div.visor > span").classList.add('ubicado');
  document.querySelector("#porta-visor > div.visor > div.navegacion").classList.add('ancho');
}