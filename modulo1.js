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

    // Si hay botón asociado, mostrarlo
    if (buttonID && typeof window[buttonID] !== 'undefined') {
      window[buttonID].style.display = 'block';
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
    imageElements[i].style.transform = `translateY(${i * 95}px)`;
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
  switch (elementId) {
  case 'contImgDistribuidor': 
    var elementosExcluidos = ['buscador','search-form','links-iniciales','links-inicialesI','frame-rollers'];   
    var elementosGrid = document.getElementById('contImgDistribuidor')        
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i]) 
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        elementosGrid.style.display = 'grid'
      }

      manejarTransicion('child-move-III', 'contImgDistribuidor', 'marco-rollers',1500);

    }
    container1.style.display='grid'
    if (screenWidth < 500) {
      var elementosExcluidos = ['buscador','search-form','links-iniciales','links-inicialesI','frame-rollers',];  
      var elementosGrid = document.getElementById('contImgDistribuidor')        
      for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        elementosGrid.style.display = 'grid'
      }}
      container1.style.display='grid'
      const movil = document.getElementById('child-move-III')
      movil.style.display='flex'
      const currentZone = document.getElementById('frame-rollers')
      moveElement(movil,currentZone)
    }  
    if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
      idsArray.push(elementId);
      console.log(idsArray);
    }
  break;
  case 'contImgEntintador':
    var elementosExcluidos = ['buscador','search-form','abuelo-entintadores','padre-entintadores','links-iniciales','links-inicialesI']; 
    var elementosGrid = document.getElementById('grilla-corta-entintado')                
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i]) 
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        elementosGrid.style.display = 'grid'
      }

      manejarTransicion('child-move-IV', 'abuelo-entintadores', 'marco-rodillos',1500);

    }

    if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
      idsArray.push(elementId);
      console.log(idsArray);
    }
  break;
  case 'contPortPlaca':  
    var elementosExcluidos = ['buscador','search-form','links-iniciales','links-inicialesI','contPortPlaca', 'agrupaOblicuos-placa','placa'];          
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i]);  
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
      }
    }
    container1.style.display='grid'
    crearOblicuosPlaca('agrupaOblicuos-DXXX');
    reproducirVideo('video-placa') 
    if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
    idsArray.push(elementId);
    console.log(idsArray);
    }
  break;       
  case 'contPortManta':
    var elementosExcluidos = ['buscador','search-form','contPortManta','manta','agrupaOblicuos-IX','links-iniciales','links-inicialesI'];           
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i]);  
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
      }
    }
    container1.style.display='grid'
    crearOblicuosMantilla('agrupaOblicuos-XC');
    reproducirVideo('videoManta');
    if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
    idsArray.push(elementId);
    console.log(idsArray);
    } 
  break;
  case 'contImpresor':
    var elementosExcluidos = ['buscador','search-form','agrupaOblicuos-XXIII','impresorImg','contImpresor','links-iniciales','links-inicialesI'];           
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i]);  
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
      }
    }
    container1.style.display='grid'
    crearOblicuosImpresor('agrupaOblicuos-C');
    reproducirVideo('video-impresor');
    if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
      idsArray.push(elementId);
      console.log(idsArray);
    }
  break;
  default: 
  }  
} 
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
function mostrarTroublesshIntervalo() {
  var contenedor = document.getElementById('troubleshooting')
  contenedor.style.display='grid'
  var elementos = contenedor.children;
  var index = 0;
  function hacerVisibleSiguienteElemento() {
    if (index < elementos.length) {
      elementos[index].style.display = 'grid'
      index++;
      setTimeout(hacerVisibleSiguienteElemento, 33)
    }
  }
  hacerVisibleSiguienteElemento()
}
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
      boton.style.backgroundColor = 'rgb(0,255,0)';
      boton.style.color = 'black'
    }, 35 * index + 7);
  });
}
function resetBotns() {  
  clearAllIntervals()
  var elementosExcluidos = ['nicho_spans','pantalla','conti-boton','conteneMantaut','buscador','search-form','links-inicialesI','links-iniciales'];          
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
    div.id = `oblicuo-tintero-${20 + index + 1}`; // IDs 21,22,23,24

    div.innerHTML = `
      <button class="Bot-inicio2">${opcion.label}</button>
      <button class="Bot-inicio2-fondo"></button>
    `;

    contenedor.appendChild(div);

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

  // Mostrar contenedor principal
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
  var elementosExcluidos = ['simulador','interfaz-perfiles','perfiles-entintado','boton-perfiles','boton-reseteo','bot-revertir','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4','spn-blur-5','spn-blur-6','spn-blur-7'] 
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  container1.style.display = 'none'
  setTimeout(() => {
    animarColorSecuencia();
  }, 100);
  setTimeout(() => {
    animarSecuenciaPerfiles();
  }, 200);
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
  manejarTransicion('child-move-variable', 'padre-variable', 'marco-variable',1200);
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
  manejarTransicion('child-move-plana', 'padre-plana', 'marco-plana',1200);
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
  manejarTransicion('child-move-naranja', 'tendencia-naranja', 'marco-planetario',1000);
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
  var items = document.querySelectorAll('.item-orange');
  items.forEach(function(item) {
    var label = item.querySelector('.first-lbl');
    var initialWidth = item.offsetWidth;
    var width = initialWidth;
    var decrement = width / 25;
    var interval = setInterval(function() {
      width -= decrement;
      if (width <= 5) {
        width = 5;
        clearInterval(interval);
        setTimeout(function() {
          item.style.width = initialWidth + 'px';
          label.textContent = initialWidth + 'px';
        }, 500);
      } else {
        item.style.width = width + 'px';
        label.textContent = Math.round(width) + 'px';
      }
    }, 16);
  });
});
function cerrarSecciones(){
  linkList.style.display = "none";
  linkListI.style.display = "none";
}
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
function alternarAyudas() {
  let imagenAyudas = document.getElementById('imagen-ayudas')
  let contenedorElementos = document.getElementById('contenedorElementos')
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
    contenedorElementos.style.display = 'block';
  }, 333);
  setTimeout(() => {
    imagenAyudas.classList.remove('pressed');
    ejecutando = false;
  },500);
}
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
    abrirSeccionContinua('pantalla-inicial')
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
    default:
  } 
  let elementoEliminado = idsArray.pop();
  if (!idsArrayEliminados.includes(elementoEliminado)) {
    idsArrayEliminados.push(elementoEliminado);
  } 
  console.log('1.', idsArray)
}
function irContenedorSiguiente() {
  var previousElementID = idsArrayEliminados[idsArrayEliminados.length - 1];
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])
    if (elemento) {
      elemento.style.display = 'none'
    }
  }

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
    default:
  } 

  idsArrayEliminados.pop();
  console.log('2.', idsArrayEliminados)
}
function listaEntrenamientosII(btnList) {
  restablecerPosiciones(['.ocultos'])      
  const solucionador = document.querySelector('#troubleshooting') 
  const conteLink = document.querySelector('#linksMA')
  conteLink.style = ''
  solucionador.style.top = ''
  solucionador.style.left = ''
  document.body.style.zoom = "100%"; 
  enlacesIDs.forEach(function (id) {
  var enlace = document.getElementById(id)
  if (enlace) {
    enlace.style.color = 'white'
  }
  })  
  switch(btnList){                                                                                                                      
    case 'archivo': 
      var elementosExcluidos = ['buscador','search-form','conteneMantaut','conti-boton','links-inicialesI','links-iniciales','largoImpresion','contImgEntrenos','linksMA','linkLis']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      document.getElementById('troubleshooting').style.display='grid'
      for (var i = 0; i < contiBtt.length; i++) {
        var botonId = contiBtt[i];
        var boton = document.getElementById(botonId);
        boton.style.backgroundColor = '';
        if (botonId === btnList) {
          boton.style.backgroundColor = '#4CAF50'; 
          boton.style.color='white' 
        }else{
          boton.style.color='black' 
        }
      }
      if(screenWidth < 500){
        
      }
    break;
    case 'btt2':
      var elementosExcluidos = ['buscador','search-form','conteneMantaut','conti-boton','troubleshooting','links-inicialesI','links-iniciales','largoImpresion','contImgEntrenos']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      for (var i = 0; i < contiBtt.length; i++) {
        var botonId = contiBtt[i];
        var boton = document.getElementById(botonId);
        boton.style.backgroundColor = '';
        if (botonId === btnList) {
          boton.style.backgroundColor = '#4CAF50'; 
          boton.style.color='white' 
        }else{
          boton.style.color='black' 
        }
      }
      document.getElementById('troubleshooting').style.display='grid'
    break;
    case 'btt3':
      var elementosExcluidos = ['buscador','search-form','conteneMantaut','conti-boton','troubleshooting','links-inicialesI','links-iniciales','largoImpresion','contImgEntrenos']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      for (var i = 0; i < contiBtt.length; i++) {
        var botonId = contiBtt[i];
        var boton = document.getElementById(botonId);
        boton.style.backgroundColor = '';
        if (botonId === btnList) {
          boton.style.backgroundColor = '#4CAF50'; 
          boton.style.color='white' 
        }else{
          boton.style.color='black' 
        }
      }
      document.getElementById('troubleshooting').style.display='grid'
    break;  
    case 'btt4':
      var elementosExcluidos = ['buscador','search-form','conteneMantaut','conti-boton','troubleshooting','links-inicialesI','links-iniciales','largoImpresion','contImgEntrenos']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      for (var i = 0; i < contiBtt.length; i++) {
        var botonId = contiBtt[i];
        var boton = document.getElementById(botonId);
        boton.style.backgroundColor = '';
        if (botonId === btnList) {
          boton.style.backgroundColor = '#4CAF50'; 
          boton.style.color='white' 
        }else{
          boton.style.color='black' 
        }
      }
      document.getElementById('troubleshooting').style.display='grid'
    break;  
    case 'btt5':
      var elementosExcluidos = ['buscador','search-form','conteneMantaut','conti-boton','troubleshooting','links-inicialesI','links-iniciales','largoImpresion','contImgEntrenos']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      for (var i = 0; i < contiBtt.length; i++) {
        var botonId = contiBtt[i];
        var boton = document.getElementById(botonId);
        boton.style.backgroundColor = '';
        if (botonId === btnList) {
          boton.style.backgroundColor = '#4CAF50'; 
          boton.style.color='white' 
        }else{
          boton.style.color='black' 
        }
      }
      document.getElementById('troubleshooting').style.display='grid'
    break;  
    case 'btt6':
      var elementosExcluidos = ['buscador','search-form','conteneMantaut','conti-boton','troubleshooting','links-inicialesI','links-iniciales','largoImpresion','contImgEntrenos']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      for (var i = 0; i < contiBtt.length; i++) {
        var botonId = contiBtt[i];
        var boton = document.getElementById(botonId);
        boton.style.backgroundColor = '';
        if (botonId === btnList) {
          boton.style.backgroundColor = '#4CAF50'; 
          boton.style.color='white' 
        }else{
          boton.style.color='black' 
        }
      }
      document.getElementById('troubleshooting').style.display='grid'
    break;  
    case 'btt7':
      var elementosExcluidos = ['buscador','search-form','conteneMantaut','conti-boton','troubleshooting','links-inicialesI','links-iniciales','largoImpresion','contImgEntrenos']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      for (var i = 0; i < contiBtt.length; i++) {
        var botonId = contiBtt[i];
        var boton = document.getElementById(botonId);
        boton.style.backgroundColor = '';
        if (botonId === btnList) {
          boton.style.backgroundColor = '#4CAF50'; 
          boton.style.color='white' 
        }else{
          boton.style.color='black' 
        }
      }
      document.getElementById('troubleshooting').style.display='grid'
    break;
        case 'btt8':
      var elementosExcluidos = ['buscador','search-form','conteneMantaut','conti-boton','troubleshooting','links-inicialesI','links-iniciales','largoImpresion','contImgEntrenos']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      for (var i = 0; i < contiBtt.length; i++) {
        var botonId = contiBtt[i];
        var boton = document.getElementById(botonId);
        boton.style.backgroundColor = '';
        if (botonId === btnList) {
          boton.style.backgroundColor = '#4CAF50'; 
          boton.style.color='white' 
        }else{
          boton.style.color='black' 
        }
      }
      document.getElementById('troubleshooting').style.display='grid'
    break;    
    
    default:
  }
  document.getElementById('context-menu').style.display='none'

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

  const solucionador = document.getElementById('troubleshooting');
  const conteLink = document.getElementById('linksMA');
  const botones = document.getElementsByClassName('colorClick');

  document.body.style.zoom = (screenWidth < 500) ? "100%" : "67%";
  conteLink.style.left = (screenWidth < 500) ? '43.5vw' : '43.5vw';
  conteLink.style.top = '16vh';

  // Configuración por cada link
  const pasos = {
    'link1': {
      excluidos: ['buscador', 'search-form', 'links-inicialesI', 'links-iniciales', 'conteneMantaut', 'conti-boton', 'largoImpresion', 'butt-links-II', 'linksMA', 'linkLis', 'imag1', 'contImgEntrenos', 'control-neumatico', 'padre-1'],
      scroll: 'control-neumatico'
    },
    'link2': {
      excluidos: ['buscador', 'search-form', 'links-inicialesI', 'links-iniciales', 'linksMA', 'butt-links-II', 'linkLis', 'conteneMantaut', 'conti-boton', 'largoImpresion', 'contImgEntrenos', 'padre-2', 'imag2', 'pneumatico', 'contImaginario-III'],
      scroll: 'pneumatico'
    },
    'link3': {
      excluidos: ['buscador', 'search-form', 'links-inicialesI', 'links-iniciales', 'largoImpresion', 'linksMA', 'linkLis', 'butt-links-II', 'conteneMantaut', 'conti-boton', 'contImgEntrenos', 'padre-neumat', 'contImaginario', 'imag3', 'bailarina'],
      scroll: 'bailarina'
    },
    'link4': {
      excluidos: ['buscador', 'search-form', 'links-inicialesI', 'links-iniciales', 'largoImpresion', 'linksMA', 'linkLis', 'butt-links-II', 'conteneMantaut', 'conti-boton', 'contImgEntrenos', 'padre-neumat', 'imag4', 'rodillo-infeed', 'contImaginario-II'],
      scroll: 'rodillo-infeed'
    },
    'link5': {
      excluidos: ['buscador', 'search-form', 'links-inicialesI', 'links-iniciales', 'largoImpresion', 'linksMA', 'linkLis', 'butt-links-II', 'conteneMantaut', 'conti-boton', 'contImgEntrenos', 'padre-neumat', 'puesta-punto'],
      scroll: 'puesta-punto'
    }
  };

  const paso = pasos[id];
  if (!paso) {
    console.warn('ID no reconocido:', id);
    return;
  }

  // Mostrar/ocultar elementos
  allContenedores.forEach(elId => {
    const el = document.getElementById(elId);
    if (el) el.style.display = paso.excluidos.includes(elId) ? 'flex' : 'none';
  });

  container1.style.display = 'grid';
  solucionador.style.display = 'grid';
  solucionador.style.left = (screenWidth < 500) ? '2px' : '11.5%';

  // Ajuste links iniciales
  document.getElementById('links-inicialesI').style.left = (screenWidth < 500) ? '47vw' : '107vw';
  document.getElementById('links-iniciales').style.left = (screenWidth < 500) ? '47vw' : '127vw';

  // Estilos especiales para link1 (padre y boton volver)
  if (id === 'link1') {
    const padre = document.getElementById('padre-1');
    const botonVolver = document.getElementById('butt-links-II');
    padre.style.top = '20vh';
    padre.style.left = '77vw';
    botonVolver.style.left = '105vw';
    botonVolver.style.top = 'vh';
    botonVolver.style.display = 'flex';
    botonVolver.style.marginTop = '0';

    if (screenWidth < 500) {
      solucionador.style.gridTemplateColumns = 'repeat(2, 1fr)';
      solucionador.style.gridTemplateRows = 'repeat(4, 1fr)';
    }
  }

  // Resaltar botón seleccionado
  Array.from(botones).forEach(b => b.style.color = (b.id === id) ? 'orange' : '');

  // Scroll al elemento
  animateScroll(paso.scroll);
}
function lubricacion(buttId){
  alternarButtsDesbobinador(buttId); 
  switch (buttId) {
    case 'boton2':  
      var elementosExcluidos = [
        'buscador', 'search-form', 'links-inicialesI', 'links-iniciales', 
        'pantalla-inicial', 'desbobinadorId', 'lubricacion', 'conti-boton-desb'
      ];  

      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
        }
      }
      container1.style.display = 'grid';
      mostrartBotonesIntervalo('butt-mautonomo-desbobina');
      eliminarEstilos('.butt-mautonomo-desbobina')
    break;
    case 'boton3':
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','desbobinadorId','freno','conti-boton-freno']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      mostrartBotonesIntervalo('butt-mautonomo-freno'); 
      eliminarEstilos('.butt-mautonomo-freno') 
    break;    
    case 'boton4':
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','desbobinadorId']  
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i])  
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
      }
    }
    container1.style.display='grid'
    palpitarBoton('desbobinadorId')       
    break;
    case 'boton5':
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','desbobinadorId']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      palpitarBoton('desbobinadorId')
    break  
    case 'boton6':
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','desbobinadorId']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      palpitarBoton('desbobinadorId')       
    break;
    default:
  }
}
function alternarButtsDesbobinador(buttId) {
  var buttsDesbobinador = ['boton2', 'boton3', 'boton4', 'boton5', 'boton6'];
  buttsDesbobinador.forEach(id => {
    var boton = document.getElementById(id);
    if (boton) {
      if (id === buttId) {
        boton.style.background = 'rgba(0,255,0,1)';
        boton.style.boxShadow = "inset 5px 15px 5px rgba(0, 0, 0, 0.8)";
      } else {
        boton.style = ''; // Resetear solo el color de fondo
      }
    }
  });
}
function alternarButtsTeñido(buttId) {
  var buttsDesbobinador = ['boton8', 'boton9', 'boton10', 'boton11', 'boton12'];
  buttsDesbobinador.forEach(id => {
    var boton = document.getElementById(id);
    if (boton) {
      if (id === buttId) {
        boton.style.background = 'rgba(0,255,0,1)';
        boton.style.boxShadow = "inset 5px 15px 5px rgba(0, 0, 0, 0.8)";
      } else {  
        boton.style = ''; // Resetear solo el color de fondo
      }
    }
  });
}
function alternarButtsFreno(idButt) {
  var buttsDesbobinador = ['btn60','btn70','btn80','btn1','btn2','btn3','btn4','btn5'];
  buttsDesbobinador.forEach(id => {
    var boton = document.getElementById(id);
    if (boton) {
      if (id === idButt) {
        boton.style.background = 'rgba(0,255,0,1)';
        boton.style.boxShadow = "inset 5px 15px 5px rgba(0, 0, 0, 0.8)";
        boton.style.color = 'white'
      } else {  
        boton.style = ''
        boton.style.display = 'block'
      }
    }
  });
}
function alternarButtsfeed(buttId) {
  var buttsDesbobinador = ['boton14', 'boton15', 'boton16', 'boton17', 'boton18'];
  buttsDesbobinador.forEach(id => {
    var boton = document.getElementById(id);
    if (boton) {
      if (id === buttId) {
        boton.style.background = 'rgba(0,255,0,1)';
        boton.style.boxShadow = "inset 5px 15px 5px rgba(0, 0, 0, 0.8)";
      } else {  
        boton.style = ''; // Resetear solo el color de fondo
      }
    }
  });
}
function alternarButtsUnit(buttId) {
  var buttsDesbobinador = ['boton20', 'boton21', 'boton22', 'boton23', 'boton24'];
  buttsDesbobinador.forEach(id => {
    var boton = document.getElementById(id);
    if (boton) {
      if (id === buttId) {
        boton.style.background = 'rgba(0,255,0,1)';
        boton.style.boxShadow = "inset 5px 15px 5px rgba(0, 0, 0, 0.8)";
      } else {  
        boton.style = ''; // Resetear solo el color de fondo
      }
    }
  });
}
function alternarButtsRebobina(buttId) {
  var buttsDesbobinador = ['boton26', 'boton27', 'boton28', 'boton29', 'boton30'];
  buttsDesbobinador.forEach(id => {
    var boton = document.getElementById(id);
    if (boton) {
      if (id === buttId) {
        boton.style.background = 'rgba(0,255,0,1)';
        boton.style.boxShadow = "inset 5px 15px 5px rgba(0, 0, 0, 0.8)";
      } else {  
        boton.style = ''; // Resetear solo el color de fondo
      }
    }
  });
}  
function alternarButtsnPneumatic(buttId) {
  var buttsDesbobinador = ['btn600','btn700','btn800'];
  buttsDesbobinador.forEach(id => {
    var boton = document.getElementById(id);
    if (boton) {
      if (id === buttId) {
        boton.style.background = 'rgba(0,255,0,1)';
        boton.style.boxShadow = "inset 5px 15px 5px rgba(0, 0, 0, 0.8)";
      } else { 
        boton.style = ''; // Resetear solo el color de fondo
        boton.style.display = 'block'
      }
    }
  });
}
function alternarButtsnRodilleria(botId) {
  var buttsDesbobinador = ['btn06','btn07','btn08'];
  buttsDesbobinador.forEach(id => {
    var boton = document.getElementById(id);
    if (boton) {
      if (id === botId) {
        boton.style.background = 'rgba(0,255,0,1)';
        boton.style.boxShadow = "inset 5px 15px 5px rgba(0, 0, 0, 0.8)";
      } else { 
        boton.style = ''; // Resetear solo el color de fondo
        boton.style.display = 'block'
      }
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
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','desbobinadorId','lubricacion','conti-boton-desb','frec-lubrica']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
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
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','abuelo-grilla','freno','cont-arriba-freno','conti-boton-freno','desbobinadorId','padre-lubrica','pantalla-inicial']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      alternarButtsFreno(idButt)
      manejarTransicion('child-move-II', 'abuelo-grilla','marco-freno',1000);
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
function UnidadTeñido(buttId){
  alternarButtsTeñido(buttId)
  switch (buttId) {
    case 'boton8' :
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','uTeñidos','uniteñido','conti-boton-teñido']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      mostrartBotonesIntervalo('butt-mautonomo-teñido');    
      eliminarEstilos('.butt-mautonomo-teñido')
      break;
    case 'boton9' :
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','uTeñidos','rodilleria']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      mostrartBotonesIntervalo('butt-mautonomo-rodilleria'); 
      eliminarEstilos('.butt-mautonomo-rodilleria')
    break; 
    case 'boton10' :
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','uTeñidos']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }      
      container1.style.display='grid'
      palpitarBoton('uTeñidos')
    break; 
    case 'boton11' : 
    var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','uTeñidos']  
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i])  
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
      }
    }
    container1.style.display='grid'
    palpitarBoton('uTeñidos')
    break; 
    case 'boton12' :
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','uTeñidos']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      palpitarBoton('uTeñidos')
    break; 
    case 'btn600' :
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','uTeñidos','uniteñido','conti-boton-teñido','cont-arriba','padre-grilla','teñido-I','vidTeñido','teñido-vid']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      alternarButtsnPneumatic(buttId)
      container1.style.display='grid'
      manejarTransicion('pieza-movil', 'abuelo-grilla-teñido', 'marco-teñido',1200);
    break; 
    case 'btn700' :
    var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','uTeñidos','uniteñido','conti-boton-teñido','teñido-I','vidTeñido','teñido-vid']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      alternarButtsnPneumatic(buttId)
      container1.style.display='grid'
     break; 
    case 'btn800' :
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','uTeñidos','uniteñido','conti-boton-teñido','teñido-I','vidTeñido','teñido-vid']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      alternarButtsnPneumatic(buttId)
      container1.style.display='grid'
    break;                               
    default:
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
function UnidadAlimenta(buttId){
  alternarButtsfeed(buttId)
  switch (buttId) {
    case 'boton14' :
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','alimentadorId']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      palpitarBoton('alimentadorId')
    break;
    case 'boton15' :
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','alimentadorId']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      palpitarBoton('alimentadorId')
    break; 
    case 'boton16' :
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','alimentadorId']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      palpitarBoton('alimentadorId')
    break; 
    case 'boton17' : 
    var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','alimentadorId']  
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i])  
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
      }
    }        
    container1.style.display='grid'
    palpitarBoton('alimentadorId')
    break; 
    case 'boton18' :
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','alimentadorId']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }        
      container1.style.display='grid'
      palpitarBoton('alimentadorId')
    break; 
    default:
  }
}
function UnidadProceso(buttId){
  alternarButtsUnit(buttId)
  switch (buttId) {
    case 'boton20' :
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','unidProceso']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      palpitarBoton('unidProceso')
    break;
    case 'boton21' :
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','unidProceso']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      palpitarBoton('unidProceso')
    break; 
    case 'boton22' :
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','unidProceso']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      palpitarBoton('unidProceso')
    break; 
    case 'boton23' : 
    var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','unidProceso']  
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i])  
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
      }
    }
    container1.style.display='grid'
    palpitarBoton('unidProceso')
  break; 
    case 'boton24' :
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','unidProceso']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      palpitarBoton('unidProceso')
    break; 
    default:
  }
}
function UnidadRebonina(buttId){
  alternarButtsRebobina(buttId)
  switch (buttId) {
      case 'boton26' :
        var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','rebobinador']  
        for (var i = 0; i < allContenedores.length; i++) { 
          var elemento = document.getElementById(allContenedores[i])  
          if (elemento) {
            elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
          }
        }
        container1.style.display='grid'
        palpitarBoton('rebobinador')
      break;
      case 'boton27' :
        var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','rebobinador']  
        for (var i = 0; i < allContenedores.length; i++) { 
          var elemento = document.getElementById(allContenedores[i])  
          if (elemento) {
            elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
          }
        }
        container1.style.display='grid'
        palpitarBoton('rebobinador')
      break; 
      case 'boton28' :
        var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','rebobinador']  
        for (var i = 0; i < allContenedores.length; i++) { 
          var elemento = document.getElementById(allContenedores[i])  
          if (elemento) {
            elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
          }
        }
        container1.style.display='grid'
        palpitarBoton('rebobinador')
      break; 
      case 'boton29' : 
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','rebobinador']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }
      container1.style.display='grid'
      palpitarBoton('rebobinador')
    break; 
      case 'boton30' :
        var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pantalla-inicial','rebobinador']  
        for (var i = 0; i < allContenedores.length; i++) { 
          var elemento = document.getElementById(allContenedores[i])  
          if (elemento) {
            elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
          }
        }
        container1.style.display='grid'
        palpitarBoton('rebobinador')
      break; 
      default:
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
      var elementosExcluidos = ['buscador','search-form','cont-links','links-inicialesI','links-iniciales','pantalla-inicial','uTeñidos','rodilleria','vidRodillos','rodilleria-vid','conti-boton-rodilleria','cont-arriba-rodillos','abuelo-cuadricula']  
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
  var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','conti-boton-desb','desbobinadorId','frec-lubrica','lubricacion','padre-lubrica','pantalla-inicial']  
  var elementosGrid =['lubricantes','abuelo-lubrica','padre-lubricante']
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
function resultadosEmpleado(idEmpleado, functionExe,icono,state) {
  detenerDinamica()
  verificarPosicionTop(['conte-butts-graphs']);
  setTimeout(() => {
    turnGraphic = false
    const iconosPermitidos = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7'];
    var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','iconos','contenedor-vertical','title-interfaz','contLineas','canvasContainer4','MiGrafica4','canvasContainer5','MiGrafica5','canvasContainer6','MiGrafica6','canvasContainer7','MiGrafica7','canvasContainer9','MiGrafica9']
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i])
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
      }
    }
    restaurarPosicion(["conte-butts-graphs"]);
    container1.style.display='grid'
    if(turnBlock === 'false'){
      restablecerClick(['.desactivar', '.graphs-lines'])
    }

    document.getElementById('contLineas').style.backgroundColor='rgb(0,0,17)'
    const elementos = document.querySelectorAll('.graphs-lines');
    elementos.forEach((elemento) => {
      elemento.removeAttribute('style');
    });
    if(screenWidth < 500){
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','dynamic-graphs-II','iconos','contLineas-II','contenedor-vertical','canvasContainer4-II','MiGrafica4-II','canvasContainer5-II','MiGrafica5-II','canvasContainer6-II','MiGrafica6-II','canvasContainer7-II','MiGrafica7-II','canvasContainer8-II','MiGrafica8-II','canvasContainer9-II','MiGrafica9-II']
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }     
      container1.style.display='grid'
      desactivarClicsPorUnTiempo(1000)
      const elementos = document.querySelectorAll('.graphs-employee');
      elementos.forEach((elemento) => {
        elemento.removeAttribute('style');
      });    
      if(state === 'true'){
        setTimeout(() => {
          animateScroll('contenedor-vertical')
        }, 500);}
      if (iconosPermitidos.includes(icono)) {
      }
        ubicaPerfil(idEmpleado)
        document.getElementById('links-iniciales').style.left='16vw'

      }else{
          
        ubicaPerfil(idEmpleado)
        document.getElementById('conte-butts-graphs').style.display = 'grid'
    }
      switch (functionExe) {
      case 'updateAna':
        updateAna() 
        updateAnaII()
      break;
      case 'updateMario':
        updateMario()
        updateMarioII()
      break;
      case 'updateSandra':
        updateSandra()
        updateSandraII()
      break;
      case 'updateJesus':
        updateJesus()
        updateJesusII()      
      break;
      case 'updateJorge':
        updateJorge()
        updateJorgeII()      
      break;
      case 'updateAndres':
        updateAndres()
        updateAndresII()      
      break;
      case 'updateCarlos':
        updateCarlos()
        updateCarlosII()      
      break;
      default:
      break;
    }

  }, 100);
}
function resultadosMA(){
  restablecerPosiciones(['.ocultos'])      
  var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','iconos','conte-secundario','title-interfaz']  
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    } 
  }
  container1.style.display='grid'
  document.body.style.zoom = "100%";
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
document.getElementById('textToColorI').addEventListener('mouseenter', () => {
  let padreLinks = document.getElementById('links-inicialesI');
  let conteLinks = document.getElementById('linkListI');

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
      expandHeight('linkListI');
    }, 400);
  } else {
    padreLinks.style.display = 'block';
    conteLinks.style.display = 'block';
    expandHeight('linkListI');    
  }
});
document.getElementById('textToColor').addEventListener('mouseenter', () => {
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
      expandHeight('linkList')
    }, 400);
  }else{
    padreLinks.style.display='block'
    conteLinks.style.display='block'
    expandHeight('linkList')    
  }
}
);
let intervaloAltura = null; 
let intervaloAlturaI = null;
let alturaObjetivoAlcanzada = false;
function expandHeight(linksGuard) {
  if(linksGuard === 'linkListI'){
    let elemento = document.getElementById('linkListI');
    let items = elemento.querySelectorAll('li');
    // Eliminar estilos en línea aplicados previamente al <ul> y a los <li>
    elemento.style.height = ''; // Restablece la altura del <ul>
    items.forEach(item => item.style.display = 'none'); // Oculta todos los <li> al inicio
    // Reiniciar el control de la altura objetivo alcanzada
    alturaObjetivoAlcanzada = false;
    const alturaInicial = elemento.offsetHeight;
    const alturaObjetivo = alturaInicial + 200; // Define la altura objetivo
    const incrementoPorItem = 100 / items.length; // Cuánto debe incrementarse la altura por cada <li> mostrado
    // Verifica si ya hay un intervalo en ejecución o si la altura objetivo se alcanzó
    if (intervaloAltura || alturaObjetivoAlcanzada) {
      return; // Si ya hay un intervalo activo o la altura objetivo se alcanzó, no hace nada
    }
    // Crear el intervalo
    intervaloAltura = setInterval(function () {
      let alturaActual = elemento.offsetHeight;
      // Incrementar la altura si no se ha alcanzado la altura objetivo
      if (alturaActual < alturaObjetivo) {
        elemento.style.height = (alturaActual + 1) + 'px';
        // Mostrar los <li> a medida que la altura crece
        items.forEach((item, index) => {
          if (alturaActual >= alturaInicial + (incrementoPorItem * (index + 1))) {
            item.style.display = 'block'; // Mostrar el <li> si la altura es suficiente
          }
        });
      } else {
        // Detener el intervalo y marcar que la altura objetivo se ha alcanzado
        clearInterval(intervaloAltura);
        intervaloAltura = null; // Reinicia el intervalo
        alturaObjetivoAlcanzada = true; // Marca que la altura objetivo ha sido alcanzada
      }
    }, 7);
  }else{
    let elemento = document.getElementById('linkList');
    let items = elemento.querySelectorAll('li');
    elemento.style.height = '';
    items.forEach(item => item.style.display = 'none'); 
    alturaObjetivoAlcanzada = false;
    const alturaInicial = elemento.offsetHeight;
    const alturaObjetivo = alturaInicial + 200;
    const incrementoPorItem = 100 / items.length;
    if (intervaloAlturaI || alturaObjetivoAlcanzada) {
      return;
    }
    intervaloAlturaI = setInterval(function () {
      let alturaActual = elemento.offsetHeight;
      if (alturaActual < alturaObjetivo) {
        elemento.style.height = (alturaActual + 1) + 'px';
        items.forEach((item, index) => {
          if (alturaActual >= alturaInicial + (incrementoPorItem * (index + 1))) {
            item.style.display = 'block'; // Mostrar el <li> si la altura es suficiente
          }
        });
      } else {
        clearInterval(intervaloAlturaI);
        intervaloAlturaI = null;
        alturaObjetivoAlcanzada = true;
      }
    }, 7);
  }
}
document.getElementById('linkListI').addEventListener('mouseleave', () =>{
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
        elemento.style.filter = '';
      }
    }
    document.getElementById('linkListI').style.display='none'
})
document.getElementById('links-inicialesI').addEventListener('mouseleave', () =>{
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
        elemento.style.filter = '';
      }
    }
    document.getElementById('linkListI').style.display='none'
})
document.getElementById('linkList').addEventListener('mouseleave', () =>{
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
        elemento.style.filter = '';
      }
    }
    document.getElementById('linkList').style.display='none'
})
document.getElementById('links-iniciales').addEventListener('mouseleave', () =>{
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
        elemento.style.filter = '';
    }
  }
  document.getElementById('linkList').style.display='none'
})

