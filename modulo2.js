function deslizaContenedor(identificador, idButton) {
  restablecerPosiciones(['.ocultos', '.class-line'])     
  let contenedor = document.querySelector('#troubleshooting')
  contenedor.style.top=''
  contenedor.style.left=''
  clearAllIntervals()   
  desactivarClicsPorUnTiempo(500)
  arrayIdButtsMA.forEach(element => {                                                                                                        
    var elemento = document.getElementById(element)
    if (elemento) {
      if (element === idButton) {
         elemento.style.backgroundColor = 'orange'
         elemento.style.color = 'black'
      } else {
        elemento.style.backgroundColor = 'rgba(83, 82, 82, 0.678)'
        elemento.style.color = ''
      }
    }
  })
  contiBtt.forEach(element => {                                                                                                                                                   
    var elemento = document.getElementById(element)
    if (elemento) {
      elemento.style.backgroundColor = ''
    }
  })  
  if (document.body.style.zoom !== "100%") {                                                                                          
    document.body.style.zoom = "100%";
  }
  switch(identificador){
    case 'troubleshooting' :
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','conti-boton','conteneMantaut']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }
      container1.style.display='grid'
      var contenedorPadre = document.getElementById(identificador)
      if (contenedorPadre) {
        contenedorPadre.style.display = 'grid'  
      }
      mostrarTroublesshIntervalo()
      cambiaColorBotones()
      if(screenWidth < 500){
        document.getElementById('conti-boton').style.display='flex'
        document.getElementById('conti-boton').style.top=''
      }
    break;
    case 'canvasContainer2' :
      var elementosExcluidos = ['def2','buscador','search-form','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','canvasContainer2','MiGrafica','wall_street_II','general']
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }
      container1.style.display='grid'
      if(screenWidth < 500){
        document.getElementById('conti-boton').style.display='flex'
        document.getElementById('conti-boton').style.top=''
      }
      incrementoHeightVII()
    break;
    case 'contChecks' :
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','general','first_half']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }
      container1.style.display='grid'
      document.getElementById('conti-boton').removeAttribute('style');
      stopWidth = false
      let mitad1 = document.getElementById('first_half')
      let general = document.getElementById('general')
      general.style.display = 'block'
      mitad1.style.display = 'grid'

      setTimeout(() => {
        firstMovement()
      }, 7);
      setTimeout(() => {
        secondMovement()
      }, 117);
      if(screenWidth < 500){
        document.getElementById('conti-boton').style.display='flex'
      }  
    break;
    case 'canvasContainer3' :
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','canvasContainer3','general','padre']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }
      container1.style.display='grid'
      inicioTracker()
      if(screenWidth < 500){        
        var canvas3 = document.getElementById(identificador);
        if (canvas3 !== null) {
          canvas3.style.marginTop = '12%';
        }
        document.getElementById('conti-boton').style.top='20vh'
        document.getElementById('conti-boton').style.display='flex'
      }
    break;
    case 'contImagNeg' :  
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conteneMantaut','contImagNeg','general','equalizer']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }
      container1.style.display='grid'
      document.getElementById('conti-boton').removeAttribute('style');
      changeColorToGreen()
      const numeros = document.querySelectorAll('.column_spans')
      document.getElementById('column_2').style.marginTop = '-6%'
      numeros.forEach((numero) => {
        numero.style.marginTop = '260%'
      });
      if(screenWidth < 500){
        document.getElementById('conti-boton').style.display='flex'
      }  
    break;
    case 'contImagGraf' :
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conteneMantaut','contImagGraf','general','patern']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }
      container1.style.display='grid'
      document.getElementById('conti-boton').removeAttribute('style');
      detenerCicodelia()
      let padre = document.getElementById('patern')
      padre.style.display = 'grid'
      changeColors()
        if(screenWidth < 500){
          document.getElementById('conti-boton').style.display='flex'  
        }
    break;
    case 'conti-boton-kaizen' :
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conti-boton-kaizen']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }
      container1.style.display='grid'
      document.getElementById('conti-boton').removeAttribute('style');
      hideButtonsKaizenRetraso()
      setTimeout(function() {
        showButtonsKaizenRetraso();
      }, 500);
      if(screenWidth < 500){
        document.getElementById('conti-boton').style.display='flex'  
      }
    break;
    default:
  }
}  
function resetearBarras(){
  let ensayos = document.querySelectorAll('.first_table .barras .horizontales');
  ensayos.forEach(ensayo => {
    ensayo.style.top = '';
    ensayo.style.height = '';
    ensayo.style.width = '';
  });
  imgWallStreetI.style.width = ''
  imgWallStreet.style.height = ''
  parentElements.style.display = 'none'

  isAnimatingXIII = false      
  isAnimatingXIV = false      
  isAnimatingXV = false 
  isAnimatingXII = false
  isAnimatingXI = false
  isAnimatingX = false
  isAnimatingIX = false
  isAnimatingVIII = false
  isAnimatingVII = false
  isAnimatingVI = false
}
function cerrarAyudas(){
  let ayudas = document.getElementById('ventana-lateral')
  ayudas.style.display='none'
  let video = document.getElementById('prisma-vid-II');
  video.style.left = '';  
}
var nuevosDatos = [0, 70, 30, 70, 50, 90];
var nuevosDatosI = [55, 5, 95, 30, 10, 10];
var nuevosDatosII = [30, 50, 60, 77, 20, 8]; 
var nuevosDatosIII = [5, 17, 8, 30, 44, 10];
var nuevosDatosIIII = [11, 50, 20, 80, 10, 100];
var nuevosDatosV = [5, 17, 33, 45, 51, 57, 67, 99];
function actualizarDatos() {
  intervaloActualizar = setInterval(function() {
    [nuevosDatos, nuevosDatosI, nuevosDatosII, nuevosDatosIII, nuevosDatosIIII, nuevosDatosV].forEach(function(array, index) {
      for (var i = 0; i < array.length; i++) {
        array[i] += 17;
        if (array[i] > 100) {
          array[i] = 0;   
        }
      }      
      // Actualizar los gráficos
      switch (index) {
        case 0: chart7.data.datasets[0].data = array; chart7.update(); break;
        case 1: chart8.data.datasets[0].data = array; chart8.update(); break;
        case 2: chart9.data.datasets[0].data = array; chart9.update(); break;
        case 3: chart10.data.datasets[0].data = array; chart10.update(); break;
        case 4: chart11.data.datasets[0].data = array; chart11.update(); break;
        case 5: chart12.data.datasets[0].data = array; chart12.update(); break;
      }
    });
  }, 1000);
}
function updateAna() {
  setTimeout(function() { graficosAutomaticos('canvasContainer4'); }, 500);
  setTimeout(function() { graficosAutomaticos('canvasContainer7'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer5'); }, 900);
  setTimeout(function() { graficosAutomaticos('canvasContainer6'); }, 1100);
  setTimeout(function() { graficosAutomaticos('canvasContainer8'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer9'); }, 1200); 
  var nuevosDatos = [0,70,30,70,50,90];
  chart7.data.datasets[0].data = nuevosDatos;
  chart7.update();  
  var nuevosDatosI = [55,5,95,30,10,10];
  chart8.data.datasets[0].data = nuevosDatosI;
  chart8.update();  
  var nuevosDatosII = [30,50,60,77,20,8];
  chart9.data.datasets[0].data = nuevosDatosII;
  chart9.update();  
  var nuevosDatosIII = [5,17,8,30,44,10];
  chart10.data.datasets[0].data = nuevosDatosIII;
  chart10.update();  
  var nuevosDatosIIII = [11,50,20,80,10,100];
  chart11.data.datasets[0].data = nuevosDatosIIII;
  chart11.update();  
  var nuevosDatosV = [5,17,33,45,51,57,67,99];           
  chart12.data.datasets[0].data = nuevosDatosV;
  chart12.update();
}
function updateAnaII() {
  setTimeout(function() { graficosAutomaticos('canvasContainer4'); }, 500);
  setTimeout(function() { graficosAutomaticos('canvasContainer7'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer5'); }, 900);
  setTimeout(function() { graficosAutomaticos('canvasContainer6'); }, 1100);
  setTimeout(function() { graficosAutomaticos('canvasContainer8'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer9'); }, 1200);
  var nuevosDatos = [ 0,70,30,70,50,90]
  chart7II.data.datasets[0].data = nuevosDatos;
  chart7II.update()
  var nuevosDatosI = [ 55,5,95,30,10,10]            
  chart8II.data.datasets[0].data = nuevosDatosI;
  chart8II.update()
  var nuevosDatosII = [ 30,50,60,77,20,8]        
  chart9II.data.datasets[0].data = nuevosDatosII;
  chart9II.update() 
  var nuevosDatosIII = [ 5,17,8,30,44,10]
  chart10II.data.datasets[0].data = nuevosDatosIII;
  chart10II.update()
  var nuevosDatosIIII = [ 11,50,20,80,10,100]
  chart11II.data.datasets[0].data = nuevosDatosIIII; 
  chart11II.update() 
  var nuevosDatosV = [ 5,17,33,45,51,57,67,99]
  chart12II.data.datasets[0].data = nuevosDatosV;
  chart12II.update() 
}
function updateMario() {
  setTimeout(function() { graficosAutomaticos('canvasContainer4'); }, 500);
  setTimeout(function() { graficosAutomaticos('canvasContainer7'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer5'); }, 900);
  setTimeout(function() { graficosAutomaticos('canvasContainer6'); }, 1100);
  setTimeout(function() { graficosAutomaticos('canvasContainer8'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer9'); }, 1200); 
  var nuevosDatos = [ 100,20,70,10,80,90]
  chart7.data.datasets[0].data = nuevosDatos;
  chart7.update()
  var nuevosDatosI = [ 30,25,90,110,50,77]
  chart8.data.datasets[0].data = nuevosDatosI;
  chart8.update()
  var nuevosDatosII = [ 100,90,10,30,70,10]
  chart9.data.datasets[0].data = nuevosDatosII;
  chart9.update() 
  var nuevosDatosIII = [ 99,11,70,47,17,80]
  chart10.data.datasets[0].data = nuevosDatosIII;
  chart10.update()
  var nuevosDatosIIII = [ 10,80,50,20,90,40]
  chart11.data.datasets[0].data = nuevosDatosIIII;
  chart11.update() 
  var nuevosDatosV = [ 55,67,73,70,65,80,80,91]
  chart12.data.datasets[0].data = nuevosDatosV;
  chart12.update() 
}
function updateMarioII() {
  setTimeout(function() { graficosAutomaticos('canvasContainer4'); }, 500);
  setTimeout(function() { graficosAutomaticos('canvasContainer7'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer5'); }, 900);
  setTimeout(function() { graficosAutomaticos('canvasContainer6'); }, 1100);
  setTimeout(function() { graficosAutomaticos('canvasContainer8'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer9'); }, 1200); 
  var nuevosDatos = [ 100,20,70,10,80,90]
  chart7II.data.datasets[0].data = nuevosDatos;
  chart7II.update()
  var nuevosDatosI = [ 30,25,90,110,50,77]
  chart8II.data.datasets[0].data = nuevosDatosI;
  chart8II.update()
  var nuevosDatosII = [ 100,90,10,30,70,10]
  chart9II.data.datasets[0].data = nuevosDatosII;
  chart9II.update() 
  var nuevosDatosIII = [ 99,11,70,47,17,80]
  chart10II.data.datasets[0].data = nuevosDatosIII;
  chart10II.update()
  var nuevosDatosIIII = [ 10,80,50,20,90,40]
  chart11II.data.datasets[0].data = nuevosDatosIIII;
  chart11II.update() 
  var nuevosDatosV = [ 55,67,73,70,65,80,80,91]
  chart12II.data.datasets[0].data = nuevosDatosV;
  chart12II.update() 
}
function updateSandra() {
  setTimeout(function() { graficosAutomaticos('canvasContainer4'); }, 500);
  setTimeout(function() { graficosAutomaticos('canvasContainer7'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer5'); }, 900);
  setTimeout(function() { graficosAutomaticos('canvasContainer6'); }, 1100);
  setTimeout(function() { graficosAutomaticos('canvasContainer8'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer9'); }, 1200); 
  var nuevosDatos = [ 33,20,100,50,80,10]
  chart7.data.datasets[0].data = nuevosDatos;
  chart7.update()
  var nuevosDatosI = [ 30,75,20,100,50,17]
  chart8.data.datasets[0].data = nuevosDatosI;
  chart8.update()
  var nuevosDatosII = [ 33,50,30,90,100,5]
  chart9.data.datasets[0].data = nuevosDatosII;
  chart9.update() 
  var nuevosDatosIII = [ 9,5,70,97,37,60]
  chart10.data.datasets[0].data = nuevosDatosIII;
  chart10.update()
  var nuevosDatosIIII = [ 30,40,250,600,45,800]
  chart11.data.datasets[0].data = nuevosDatosIIII;
  chart11.update() 
  var nuevosDatosV = [ 50,37,33,17,51,77,67,70]
  chart12.data.datasets[0].data = nuevosDatosV;
  chart12.update()  
}
function updateSandraII() {
  setTimeout(function() { graficosAutomaticos('canvasContainer4'); }, 500);
  setTimeout(function() { graficosAutomaticos('canvasContainer7'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer5'); }, 900);
  setTimeout(function() { graficosAutomaticos('canvasContainer6'); }, 1100);
  setTimeout(function() { graficosAutomaticos('canvasContainer8'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer9'); }, 1200); 
  var nuevosDatos = [ 33,20,100,50,80,10]
  chart7II.data.datasets[0].data = nuevosDatos;
  chart7II.update()
  var nuevosDatosI = [ 30,75,20,100,50,17]
  chart8II.data.datasets[0].data = nuevosDatosI;
  chart8II.update()
  var nuevosDatosII = [ 33,50,30,90,100,5]
  chart9II.data.datasets[0].data = nuevosDatosII;
  chart9II.update() 
  var nuevosDatosIII = [ 9,5,70,97,37,60]
  chart10II.data.datasets[0].data = nuevosDatosIII;
  chart10II.update()
  var nuevosDatosIIII = [ 30,40,250,600,45,800]
  chart11II.data.datasets[0].data = nuevosDatosIIII;
  chart11II.update() 
  var nuevosDatosV = [ 50,37,33,17,51,77,67,70]
  chart12II.data.datasets[0].data = nuevosDatosV;
  chart12II.update()  
}
function updateJesus() {
  setTimeout(function() { graficosAutomaticos('canvasContainer4'); }, 500);
  setTimeout(function() { graficosAutomaticos('canvasContainer7'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer5'); }, 900);
  setTimeout(function() { graficosAutomaticos('canvasContainer6'); }, 1100);
  setTimeout(function() { graficosAutomaticos('canvasContainer8'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer9'); }, 1200); 
  var nuevosDatos = [ 10,100,10,20,50,90]
  chart7.data.datasets[0].data = nuevosDatos;
  chart7.update()  
  var nuevosDatosI = [ 100,50,10,100,50,17]
  chart8.data.datasets[0].data = nuevosDatosI;
  chart8.update()
  var nuevosDatosII = [ 10,100,50,30,10,90]
  chart9.data.datasets[0].data = nuevosDatosII;
  chart9.update() 
  var nuevosDatosIII = [ 9,90,70,47,87,10]
  chart10.data.datasets[0].data = nuevosDatosIII;
  chart10.update()
  var nuevosDatosIIII = [ 100,8,50,70,30,10]
  chart11.data.datasets[0].data = nuevosDatosIIII;
  chart11.update()
  var nuevosDatosV = [ 33,37,33,77,45,77,80,87]  
  chart12.data.datasets[0].data = nuevosDatosV;
  chart12.update()   
}
function updateJesusII() {
  setTimeout(function() { graficosAutomaticos('canvasContainer4'); }, 500);
  setTimeout(function() { graficosAutomaticos('canvasContainer7'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer5'); }, 900);
  setTimeout(function() { graficosAutomaticos('canvasContainer6'); }, 1100);
  setTimeout(function() { graficosAutomaticos('canvasContainer8'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer9'); }, 1200); 
  var nuevosDatos = [ 10,100,10,20,50,90]
  chart7II.data.datasets[0].data = nuevosDatos;
  chart7II.update()  
  var nuevosDatosI = [ 100,50,10,100,50,17]
  chart8II.data.datasets[0].data = nuevosDatosI;
  chart8II.update()
  var nuevosDatosII = [ 10,100,50,30,10,90]
  chart9II.data.datasets[0].data = nuevosDatosII;
  chart9II.update() 
  var nuevosDatosIII = [ 9,90,70,47,87,10]
  chart10II.data.datasets[0].data = nuevosDatosIII;
  chart10II.update()
  var nuevosDatosIIII = [ 100,8,50,70,30,10]
  chart11II.data.datasets[0].data = nuevosDatosIIII;
  chart11II.update()
  var nuevosDatosV = [ 33,37,33,77,45,77,80,87]
  chart12II.data.datasets[0].data = nuevosDatosV;
  chart12II.update()   
}
function updateJorge() {
  setTimeout(function() { graficosAutomaticos('canvasContainer4'); }, 500);
  setTimeout(function() { graficosAutomaticos('canvasContainer7'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer5'); }, 900);
  setTimeout(function() { graficosAutomaticos('canvasContainer6'); }, 1100);
  setTimeout(function() { graficosAutomaticos('canvasContainer8'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer9'); }, 1200); 
  var nuevosDatos = [ 10,20,50,10,10,5]
  chart7.data.datasets[0].data = nuevosDatos;
  chart7.update()
  var nuevosDatosI = [ 77,33,44,66,55,17]
  chart8.data.datasets[0].data = nuevosDatosI;
  chart8.update()
  var nuevosDatosII = [ 50,5,5,10,100,77]
  chart9.data.datasets[0].data = nuevosDatosII;
  chart9.update() 
  var nuevosDatosIII = [ 55,17,77,100,47,7]
  chart10.data.datasets[0].data = nuevosDatosIII;
  chart10.update()
  var nuevosDatosIIII = [ 44,99,17,77,10,5]
  chart11.data.datasets[0].data = nuevosDatosIIII;
  chart11.update() 
  var nuevosDatosV = [ 100,37,55,77,77,77,81,99]
  chart12.data.datasets[0].data = nuevosDatosV;
  chart12.update()  
}
function updateJorgeII() {
  setTimeout(function() { graficosAutomaticos('canvasContainer4'); }, 500);
  setTimeout(function() { graficosAutomaticos('canvasContainer7'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer5'); }, 900);
  setTimeout(function() { graficosAutomaticos('canvasContainer6'); }, 1100);
  setTimeout(function() { graficosAutomaticos('canvasContainer8'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer9'); }, 1200); 
  var nuevosDatos = [ 10,20,50,10,10,5]
  chart7II.data.datasets[0].data = nuevosDatos;
  chart7II.update()
  var nuevosDatosI = [ 77,33,44,66,55,17]
  chart8II.data.datasets[0].data = nuevosDatosI;
  chart8II.update()
  var nuevosDatosII = [ 50,5,5,10,100,77]
  chart9II.data.datasets[0].data = nuevosDatosII;
  chart9II.update() 
  var nuevosDatosIII = [ 55,17,77,100,47,7]
  chart10II.data.datasets[0].data = nuevosDatosIII;
  chart10II.update()
  var nuevosDatosIIII = [ 44,99,17,77,10,5]
  chart11II.data.datasets[0].data = nuevosDatosIIII;
  chart11II.update() 
  var nuevosDatosV = [ 100,37,55,77,77,77,81,99]
  chart12II.data.datasets[0].data = nuevosDatosV;
  chart12II.update()  
}
function updateAndres() {
  setTimeout(function() { graficosAutomaticos('canvasContainer4'); }, 500);
  setTimeout(function() { graficosAutomaticos('canvasContainer7'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer5'); }, 900);
  setTimeout(function() { graficosAutomaticos('canvasContainer6'); }, 1100);
  setTimeout(function() { graficosAutomaticos('canvasContainer8'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer9'); }, 1200); 
  var nuevosDatos = [ 0,20,10,0,0,5]
  chart7.data.datasets[0].data = nuevosDatos;
  chart7.update()
  var nuevosDatosI = [ 7,3,4,6,5,7]
  chart8.data.datasets[0].data = nuevosDatosI;
  chart8.update()
  var nuevosDatosII = [ 5,15,55,10,100,77]
  chart9.data.datasets[0].data = nuevosDatosII;
  chart9.update() 
  var nuevosDatosIII = [ 0,17,37,50,97,27]
  chart10.data.datasets[0].data = nuevosDatosIII;
  chart10.update()
  var nuevosDatosIIII = [ 5,29,17,47,3,19]
  chart11.data.datasets[0].data = nuevosDatosIIII;
  chart11.update()
  var nuevosDatosV = [ 77,37,55,41,33,77,50,60]
  chart12.data.datasets[0].data = nuevosDatosV;
  chart12.update()  
}
function updateAndresII() {
  setTimeout(function() { graficosAutomaticos('canvasContainer4'); }, 500);
  setTimeout(function() { graficosAutomaticos('canvasContainer7'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer5'); }, 900);
  setTimeout(function() { graficosAutomaticos('canvasContainer6'); }, 1100);
  setTimeout(function() { graficosAutomaticos('canvasContainer8'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer9'); }, 1200); 
  var nuevosDatos = [ 0,20,10,0,0,5]
  chart7II.data.datasets[0].data = nuevosDatos;
  chart7II.update()
  var nuevosDatosI = [ 7,3,4,6,5,7]
  chart8II.data.datasets[0].data = nuevosDatosI;
  chart8II.update()
  var nuevosDatosII = [ 5,15,55,10,100,77]
  chart9II.data.datasets[0].data = nuevosDatosII;
  chart9II.update() 
  var nuevosDatosIII = [ 0,17,37,50,97,27]
  chart10II.data.datasets[0].data = nuevosDatosIII;
  chart10II.update()
  var nuevosDatosIIII = [ 5,29,17,47,3,19]
  chart11II.data.datasets[0].data = nuevosDatosIIII;
  chart11II.update()
  var nuevosDatosV = [ 77,37,55,41,33,77,50,60]
  chart12II.data.datasets[0].data = nuevosDatosV;
  chart12II.update()  
}
function updateCarlos() {
  setTimeout(function() { graficosAutomaticos('canvasContainer4'); }, 500);
  setTimeout(function() { graficosAutomaticos('canvasContainer7'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer5'); }, 900);
  setTimeout(function() { graficosAutomaticos('canvasContainer6'); }, 1100);
  setTimeout(function() { graficosAutomaticos('canvasContainer8'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer9'); }, 1200); 
  var nuevosDatos = [ 17,99,44,0,7,5]
  chart7.data.datasets[0].data = nuevosDatos;
  chart7.update()
  var nuevosDatosI = [ 27,33,84,6,15,97]
  chart8.data.datasets[0].data = nuevosDatosI;
  chart8.update()
  var nuevosDatosII = [ 15,5,55,90,100,17]
  chart9.data.datasets[0].data = nuevosDatosII;
  chart9.update() 
  var nuevosDatosIII = [ 20,97,27,80,7,77]
  chart10.data.datasets[0].data = nuevosDatosIII;
  chart10.update()
  var nuevosDatosIIII = [ 50,91,17,77,33,89]
  chart11.data.datasets[0].data = nuevosDatosIIII
  chart11.update() 
  var nuevosDatosV = [ 17,37,22,30,5,60,77,80]
  chart12.data.datasets[0].data = nuevosDatosV;
  chart12.update()  
}
function updateCarlosII() {
  setTimeout(function() { graficosAutomaticos('canvasContainer4'); }, 500);
  setTimeout(function() { graficosAutomaticos('canvasContainer7'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer5'); }, 900);
  setTimeout(function() { graficosAutomaticos('canvasContainer6'); }, 1100);
  setTimeout(function() { graficosAutomaticos('canvasContainer8'); }, 700);
  setTimeout(function() { graficosAutomaticos('canvasContainer9'); }, 1200); 
  var nuevosDatos = [ 17,99,44,0,7,5]
  chart7II.data.datasets[0].data = nuevosDatos
  chart7II.update()
  var nuevosDatosI = [ 27,33,84,6,15,97]
  chart8II.data.datasets[0].data = nuevosDatosI
  chart8II.update()
  var nuevosDatosII = [ 15,5,55,90,100,17]
  chart9II.data.datasets[0].data = nuevosDatosII
  chart9II.update() 
  var nuevosDatosIII = [ 20,97,27,80,7,77]
  chart10II.data.datasets[0].data = nuevosDatosIII;
  chart10II.update()
  var nuevosDatosIIII = [ 50,91,17,77,33,89]  
  chart11II.data.datasets[0].data = nuevosDatosIIII; 
  chart11II.update() 
  var nuevosDatosV = [ 17,37,22,30,5,60,77,80]
  chart12II.data.datasets[0].data = nuevosDatosV
  chart12II.update()  
}
function updateDinamico() {
  desactivarClick(['.desactivar'])
  if(turnBlock === false){
    setTimeout(function() { graficosAutomaticos('canvasContainer4'); }, 500);
    setTimeout(function() { graficosAutomaticos('canvasContainer7'); }, 700);
    setTimeout(function() { graficosAutomaticos('canvasContainer5'); }, 900);
    setTimeout(function() { graficosAutomaticos('canvasContainer6'); }, 1100);
    setTimeout(function() { graficosAutomaticos('canvasContainer8'); }, 700);
    setTimeout(function() { graficosAutomaticos('canvasContainer9'); }, 1200); 
  }
  var nuevosDatos = [0,70,30,70,50,90];
  chart7.data.datasets[0].data = nuevosDatos;
  chart7.update();  
  var nuevosDatosI = [55,5,95,30,10,10];
  chart8.data.datasets[0].data = nuevosDatosI;
  chart8.update();  
  var nuevosDatosII = [30,50,60,77,20,8];
  chart9.data.datasets[0].data = nuevosDatosII;
  chart9.update();  
  var nuevosDatosIII = [5,17,8,30,44,10];
  chart10.data.datasets[0].data = nuevosDatosIII;
  chart10.update();  
  var nuevosDatosIIII = [11,50,20,80,10,100];
  chart11.data.datasets[0].data = nuevosDatosIIII;
  chart11.update();  
  var nuevosDatosV = [5,17,33,45,51,57,67,99];           
  chart12.data.datasets[0].data = nuevosDatosV;
  chart12.update();
  actualizarDatos()
}
function updateDinamicoII() {
  if(turnBlock === false){
    setTimeout(function() { graficosAutomaticos('canvasContainer4-II'); }, 500);
    setTimeout(function() { graficosAutomaticos('canvasContainer7-II'); }, 700);
    setTimeout(function() { graficosAutomaticos('canvasContainer5-II'); }, 900);
    setTimeout(function() { graficosAutomaticos('canvasContainer6-II'); }, 1100);
    setTimeout(function() { graficosAutomaticos('canvasContainer8-II'); }, 700);
    setTimeout(function() { graficosAutomaticos('canvasContainer9-II'); }, 1200); 
  }
  var nuevosDatos = [0,70,30,70,50,90];
  chart7II.data.datasets[0].data = nuevosDatos; 
  chart7II.update();    
  var nuevosDatosI = [55,5,95,30,10,10];
  chart8II.data.datasets[0].data = nuevosDatosI;
  chart8II.update();  
  var nuevosDatosII = [30,50,60,77,20,8];
  chart9II.data.datasets[0].data = nuevosDatosII;
  chart9II.update();  
  var nuevosDatosIII = [5,17,8,30,44,10];  
  chart10II.data.datasets[0].data = nuevosDatosIII;
  chart10II.update();  
  var nuevosDatosIIII = [11,50,20,80,10,100];
  chart11II.data.datasets[0].data = nuevosDatosIIII;
  chart11II.update();  
  var nuevosDatosV = [5,17,33,45,51,57,67,99];           
  chart12II.data.datasets[0].data = nuevosDatosV;
  chart12II.update();
  actualizarDatosII()
}
function detenerDinamica(){
  restablecerClick(['.desactivar'])
  var intervalos = [intervaloActualizar, intervaloActualizarII];
  intervalos.forEach(function(intervalo, index) {
    if (intervalo) {
      clearInterval(intervalo);
      if (index === 0) intervaloActualizar = null;
      if (index === 1) intervaloActualizarII = null;
    }
  });
}
function actualizarDatosII() {
  if (intervaloActualizarII) {
    clearInterval(intervaloActualizarII);
    intervaloActualizarII = null; // Reiniciar la variable
  }

  intervaloActualizarII = setInterval(function() {
    [nuevosDatos, nuevosDatosI, nuevosDatosII, nuevosDatosIII, nuevosDatosIIII, nuevosDatosV].forEach(function(array, index) {
      for (var i = 0; i < array.length; i++) {
        array[i] += 17;
        if (array[i] > 100) {
          array[i] = 0;   
        }
      }      
      // Actualizar los gráficos
      switch (index) {
        case 0: chart7II.data.datasets[0].data = array; chart7II.update(); break;
        case 1: chart8II.data.datasets[0].data = array; chart8II.update(); break;
        case 2: chart9II.data.datasets[0].data = array; chart9II.update(); break;
        case 3: chart10II.data.datasets[0].data = array; chart10II.update(); break;
        case 4: chart11II.data.datasets[0].data = array; chart11II.update(); break;
        case 5: chart12II.data.datasets[0].data = array; chart12II.update(); break;
      }
    });
  }, 1000);
}
function deslizaMosaicoII(idElement) {
  var contLinkMant = document.getElementById('linksMA')
  var elementoAnterior = null;
  var elementoActual = null;

  if (contLinkMant !== null && contImgEntrenos !== null) {
    contLinkMant.style.display = 'none'
    contImgEntrenos.style.display = 'none'
  }
  // Verificar si el elemento ya está en el array
  if (!arrayPosicionnador.includes(idElement)) {
    arrayPosicionnador.push(idElement)
  }
  var contenedor = document.getElementById(idElement)  
  contenedor.style.display = 'flex'
  contenedor.style.left = '257px'
  var inicio = 1100;
  var velocidad = 500;
  var duracion = Math.abs(destino - inicio) / velocidad * 100;
  var inicioTiempo = null;
  function animar(tiempo) {
    if (!inicioTiempo) inicioTiempo = tiempo;
    var progreso = (tiempo - inicioTiempo) / duracion;
    var izquierda = inicio + progreso * (destino - inicio)
    if (progreso < 1) {
      contenedor.style.left = izquierda + 'px'
      requestAnimationFrame(animar)
    } else {
      contenedor.style.left = destino + 'px'
    }
  }
  requestAnimationFrame(animar)

  for (var i = 1; i < arrayPosicionnador.length; i++) {
    var elementoActual = document.getElementById(arrayPosicionnador[i])
    var elementoAnterior = document.getElementById(arrayPosicionnador[i - 1])

    if (elementoActual && elementoAnterior) {
      var estiloAnterior = window.getComputedStyle(elementoAnterior)
      var posicionAnterior = parseFloat(estiloAnterior.getPropertyValue('left'))
      var anchoAnterior = parseFloat(estiloAnterior.getPropertyValue('width'))

      destino = posicionAnterior + anchoAnterior;
    }
  }

}
function ampliaIndicaciones(index) {
  var botonConico = document.getElementById('bot-indicacionesII')
  var indicEjeI = document.getElementById('indicaciones-conico')
  var indicEje = document.getElementById('indicaciones-eje') 
  var conico = document.getElementById('conico')
  var eje = document.getElementById('eje')

  switch (index) {
    case 'eje':
    eje.style.width = (window.innerWidth * 0.75) + 'px' 
    eje.style.height = window.innerHeight + 'px' 
    indicEje.style.display = 'flex'
    eje.style.position = 'fixed'
    conico.style.zIndex = '0'     
    eje.style.zIndex = '999'
    eje.style.left = '0' 
    eje.style.top = '0' 
    
    break;
    case 'conico':
      botonConico.style.display = 'block'
      indicEjeI.style.display = 'flex' 
      conico.style.position = 'fixed'
      conico.style.height = window.innerHeight + 'px' 
      conico.style.width = (window.innerWidth * 0.75) + 'px'    
      conico.style.zIndex = '999'
      conico.style.left = '0' 
      conico.style.top = '0'    
      break;
    case 2:
    break;
    case 3:
    break;
    default:
    break;
  }
}
function ocultarIndicaciones(idIndicador) {
  var indicEjeI = document.getElementById('indicaciones-conico')
  var indicEje = document.getElementById('indicaciones-eje')
  var conico = document.getElementById('conico')
  var eje = document.getElementById('eje')

  switch(idIndicador) {
    case 'eje':
      indicEje.style.display = 'none'
      eje.style.position = 'relative'
      eje.style.height = '117px'
      eje.style.display = 'flex'
      eje.style.width = '143px'
    break;
    case 'conico':
      conico.style.position = 'relative'
      indicEjeI.style.display = 'none'
      conico.style.display = 'flex'  
      conico.style.height = '117px'
      conico.style.width = '143px'
    break;  
    default:
  }
  linkListI.style.display = "none";  
  linkList.style.display = "none";

}
function rodillosKaizen(idButton,vidElem) {
  var buttsTerceros = document.getElementsByClassName('butt-mautonomo-planos') 
  var imgsEstudio = document.getElementById('mejoras-kai')
  var casoEstudio = document.getElementById('casos-kaizen')
  var contMateriales = document.getElementById('materiales-kaizen')
  var contplanosKaizen = document.getElementById('planos-kaizen')
  var videoKaizen = document.getElementById('videoElem')
  var imgsPlanos = document.getElementsByClassName('imgs-Planos')
  var contBotKaizen = document.getElementById('conti-boton-kaizen')
  var conPlanos = document.getElementById('planos-kaizen')
  var bton12 = document.getElementById('btn12')
  if (bton12 !== null) {
    bton12.style.backgroundColor = '' 
    bton12.style.color = ''
    bton12.innerText = 'IMPLEMENTADOS'
  }
  switch(idButton){
    case 'btn10':
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conti-boton-kaizen','toyota-kaizen']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      } 
      container1.style.display='grid'
      if(screenWidth < 500){
        for (var i = 0; i < buttsToyota.length; i++) {
        var elemento = document.getElementById(buttsToyota[i])      
          var estiloDisplay = window.getComputedStyle(elemento).getPropertyValue('display')
          elemento.style.display = 'none'
        }
        imgsEstudio.classList.remove('move-casos')        
        casoEstudio.removeAttribute('style')
        casoEstudio.style.display = 'none' 
        casoEstudio.style.left=''
        imgsEstudio.style.display = 'none'       
        const imagenes = document.querySelectorAll('.imgs-toyota');
        imagenes.forEach((imagen, index) => {
          setTimeout(() => {
              imagen.style.display = 'block';
          }, 400 + index * 177);
          desactivarClicsPorUnTiempo(3000)
          setTimeout(() => {
            imgsEstudio.style.display = 'flex'       
            casoEstudio.style.display = 'flex'  
            casoEstudio.classList.remove('move-label')    
          }, 1700);
          setTimeout(() => {
            casoEstudio.classList.add('move-label')         
          }, 1710);
          setTimeout(() => {
            imgsEstudio.classList.add('move-casos')         
          }, 1910);  
        });
      } else{               
      for (var i = 0; i < buttsToyota.length; i++) {
        var elemento = document.getElementById(buttsToyota[i])      
        if (elemento) {
          // Accede a la propiedad 'display' utilizando window.getComputedStyle
          var estiloDisplay = window.getComputedStyle(elemento).getPropertyValue('display')       
          // Verifica si la propiedad 'display' es 'none' y cámbiala a 'flex' si es necesario
          if (estiloDisplay === 'none') {
            elemento.style.display = 'flex'
          }
        }
      }
      transicionImagenes()
    } 
    break;
    case 'btn11':
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conti-boton-planos','conti-boton-kaizen']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      } 
      container1.style.display='grid' 
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      for (var i = 0; i < arrayButtsPlanos.length; i++) {                                                                            /// OCULTA TERCEROS BOTONES
        var elemento = document.getElementById(arrayButtsPlanos[i])
        if (elemento) {
          elemento.style.display = 'none'
        }
      }
    break; 
    case 'btn12':
      var miBot = document.getElementById('btn12')
      var videoKaizen = document.getElementById('vidElem')
      var contBotKaizen = document.getElementById('conti-boton-kaizen')
      contadorClicks++;
      console.log(contadorClicks)
      if (contadorClicks === 1) {
        miBot.innerText = 'ANTES';
        miBot.style.backgroundColor = 'red' 
        var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conti-boton-kaizen','conti-boton-planos','toyota-kaizen-antes']
        for (var i = 0; i < allContenedores.length; i++) { 
          var elemento = document.getElementById(allContenedores[i])  
          if (elemento) {
            elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
          }
        } 
        container1.style.display='grid'
      } else if (contadorClicks === 2) {
          miBot.innerText = 'DESPUES';
          miBot.style.backgroundColor = 'green' 
          var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conti-boton-kaizen','conti-boton-planos','kaizenCont','vidElem']  
          for (var i = 0; i < allContenedores.length; i++) { 
            var elemento = document.getElementById(allContenedores[i])  
            if (elemento) {
              elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
            }
          } 
          container1.style.display='grid'
          videoKaizen.style.display = 'flex'
          videoKaizen.currentTime = 0
          videoKaizen.play()  
          contadorClicks = 0;
          if (screenWidth < 500){
            contBotKaizen.removeAttribute('style')
            document.getElementById('conti-boton-kaizen').style.display='flex'
          }
        }
      for (var i = 0; i < buttsTerceros.length; i++) {
        var boton = buttsTerceros[i]
        setTimeout(function(currentBoton) { 
          return function() {
            currentBoton.style.display = 'block'
            setTimeout(function() {
              currentBoton.style.transform = 'scale(4)'
              setTimeout(function() {
                currentBoton.style.transform = 'scale(1)'
              }, 200)
            }, 200)
          };
        }(boton), i * 100) // Multiplicar por i para aplicar el intervalo adecuado
      }       
    break;
    case 'btn13':
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','planos-kaizen','conteneMantaut','conti-boton-kaizen','conti-boton','conti-boton-planos']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      }  
      container1.style.display='grid'
      Array.from(buttsTerceros).forEach(elemento => { 
        var element = document.getElementById(elemento.id)
        if (element) {
          element.style.display = 'inline-block'
        }
      })
      conPlanos.style.display = 'flex'
      for(var i = 0; i < imgsPlanos.length; i ++ ){
        var elto = imgsPlanos[i]
        if(elto){
          elto.style.display = 'flex'
        }
      }
      contplanosKaizen.style.display = 'flex'
    break;  
    case 'btn14':
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','materiales-kaizen','conteneMantaut','conti-boton-kaizen','conti-boton','conti-boton-planos']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      } 
      container1.style.display='grid' 
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      Array.from(buttsTerceros).forEach(elemento => {                                                                                /// MOSTRAR BOTONES TERCEROS
        var element = document.getElementById(elemento.id) // Aquí asumo que cada elemento tiene un atributo 'id'
        if (element) {
          element.style.display = 'inline-block'
        }
      })
      contMateriales.style.display = 'flex'
    break;  
    case 'btn15':
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conti-boton-planos','conti-boton-kaizen']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      } 
      container1.style.display='grid' 
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      Array.from(buttsTerceros).forEach(elemento => {                                                                                /// MOSTRAR BOTONES TERCEROS
        var element = document.getElementById(elemento.id) // Aquí asumo que cada elemento tiene un atributo 'id'
        if (element) {
          element.style.display = 'inline-block'
        }
      })
    break;
    case 'btn17':
      var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conti-boton-kaizen','kaizen-propuestos']  
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
function transicionImagenes() {
  var casoEstudio = document.getElementById('casos-kaizen')
  var index = 0;
  casoEstudio.style.display = 'none'

    function ocultarSiguienteImagen() {
        var imageId = buttsToyota[index]
        var image = document.getElementById(imageId)
        if (image) {
          image.style.display = 'none'
        }
        index++;
        if (index < buttsToyota.length) {
          setTimeout(ocultarSiguienteImagen, 150)
        } else {
          var imgToyota = document.getElementById('toyota7')
          imgToyota.style.display = 'flex'
          casoEstudio.style.display = 'flex' 
          casoEstudio.style.marginLeft = '7%'                                                                    
        }
    }
    ocultarSiguienteImagen()
}
function mostrarBotonConRetardo(index) {
  let arrayButtCasos = ['caso1', 'caso2', 'caso3']

  contiButtCasos.style.display = 'flex'

  if (index < arrayButtCasos.length) {

    let casoId = arrayButtCasos[index]
    document.getElementById(casoId).style.display = 'flex'

    // Luego de 1 segundo, mostrar el siguiente botón
    setTimeout(function () {
        mostrarBotonConRetardo(index + 1)
    }, 350)
  }
}
function showButtonsKaizenRetraso() {
  var contiButtsKaizen = document.getElementById('conti-boton-kaizen')
  contiButtsKaizen.style.display = 'flex'
  function mostrarConRetraso(i) {
    if (i < arrayButtsKaizen.length) {
      var botonId = arrayButtsKaizen[i]
      var boton = document.getElementById(botonId)

      if (boton) {
        boton.style.display = 'inline-block'
        boton.color = ''
        boton.style.backgroundColor = ''
        setTimeout(function() {
          mostrarConRetraso(i + 1)
        }, 150) // 150 milisegundos de retraso entre botones
      }
    }
  }
  mostrarConRetraso(0) // Comienza desde el primer botón
}
function hideButtonsKaizenRetraso() {
  var contiButtsKaizen = document.getElementById('conti-boton-kaizen')
  contiButtsKaizen.style.display = 'flex'
  function mostrarConRetraso(i) {
    if (i < arrayButtsKaizen.length) {
      var botonId = arrayButtsKaizen[i]
      var boton = document.getElementById(botonId)

      if (boton) {
        boton.style.display = 'none'
        boton.style.color = ''
        boton.style.backgroundColor = ''
          if(boton.id === 'btn12'){
            boton.textContent = 'IMPLEMENTADOS';        
          }
        setTimeout(function() {
          mostrarConRetraso(i + 1)
        }, 17) 
      }
    }
  }
  mostrarConRetraso(0) // Comienza desde el primer botón
}
function showButtonsPlanosRetraso() {
  var contiButtsPlanos = document.getElementById('conti-boton-planos')
  contiButtsPlanos.style.display = 'flex'
  function mostrarConRetraso(i) {
    if (i < arrayButtsPlanos.length) {
      var botonId = arrayButtsPlanos[i]
      var boton = document.getElementById(botonId)

      if (boton) {
        boton.style.display = 'inline-block' // o 'inline-block' según tus necesidades

        setTimeout(function() {
          mostrarConRetraso(i + 1)
        }, 150) // 150 milisegundos de retraso entre botones
      }
    }
  }
  mostrarConRetraso(0) // Comienza desde el primer botón
}
function tamaño100(){
  var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','troubleshooting','linksMA','linkLis']  
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }  
  container1.style.display='grid'
  troublesh.removeAttribute('style')
  document.body.style.zoom = "100%"
}  
const imagenesAumentar = document.querySelectorAll('img.aumentar')
imagenesAumentar.forEach(image => {
  image.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      if (image.requestFullscreen) {
        image.requestFullscreen()
      } else if (image.mozRequestFullScreen) { // Firefox
        image.mozRequestFullScreen()
      } else if (image.webkitRequestFullscreen) { // Chrome, Safari y Opera
        image.webkitRequestFullscreen()
      } else if (image.msRequestFullscreen) { // IE/Edge
        image.msRequestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) { // Chrome, Safari y Opera
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen()
      }
    }
  })
})
botones.forEach(function(boton) {
var id = boton.getAttribute('id')
alternarVisibilidad(id)
}) 
images.forEach(image => {
  let isFullscreen = false;
  image.addEventListener('click', () => {
    if (!isFullscreen) {
      if (image.requestFullscreen) {
        image.requestFullscreen()
      } else if (image.mozRequestFullScreen) {
        image.mozRequestFullScreen()
      } else if (image.webkitRequestFullscreen) {
        image.webkitRequestFullscreen()
      } else if (image.msRequestFullscreen) {
        image.msRequestFullscreen()
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
    isFullscreen = !isFullscreen;
  })
})
images.forEach((image, index) => {
  // Añadir el evento de aumento de tamaño al hacer clic
  image.addEventListener('click', () => {
    // Guardar el tamaño original para volver a él después
    const originalWidth = image.width;
    const originalHeight = image.height;
    // Aumentar el tamaño de la imagen en un 30% durante 0.1 segundos
    image.style.transition = 'transform 0.1s'
    image.style.transform = 'scale(1.3)'    
    // Volver al tamaño original después de 0.1 segundos
    setTimeout(() => {
      image.style.transition = 'transform 0.1s'
      image.style.transform = 'scale(1)'
    }, 400) 
  })
})
var chart = new Chart(miCanvas, {
    type: 'bar',    
    data: {
        labels: ['TROUBLESHOOTING', 'DEFECTOS TIPO 1', 'DEFECTOS TIPO 2', 'ADT', 'FUA', 'LUP'],
        datasets: [
            {
                label: 'Participación en M.A',
                backgroundColor: ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)', 'rgb(0, 255, 255)', 'rgb(255, 0, 255)'],
                data: [57, 88, 62, 33, 14, 20]
            }
        ]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(255,255,255)' // Color de las etiquetas de texto en el eje X
                }
            },
            y: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(255,255,255)' ,// Color de las etiquetas de texto en el eje X

                    beginAtZero: true // Empezar el eje Y desde cero
                }

            }
        },
        indexAxis: 'y', // Mostrar barras horizontalmente
        plugins: {
            legend: {
                display: false // Ocultar la leyenda
            }
        }
    }
})
var chart3 = new Chart(miCanvas2, {
    type: 'bar',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [
            {
                label: 'Datos del Segundo Gráfico',
                backgroundColor: ['rgb(0, 128, 0)', 'rgb(0,0,255)', 'rgb(255, 102, 0)', 'rgb(255, 0, 0)'],
                data: [15, 25, 35, 20, 10, 19]
            }
        ]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(255,255,0)' // Color de las etiquetas de texto en el eje X
                }
            },
            y: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(255,255,0)', // Color de las etiquetas de texto en el eje X
                    beginAtZero: true // Empezar el eje Y desde cero
                }

            }
        },
        indexAxis: 'x', // Mostrar barras horizontalmente
        plugins: {
            legend: {
                display: false // Ocultar la leyenda
            }
        }
    }
})
var chart4 = new Chart(miCanvas3, {
    type: 'line',
    data: {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
        datasets: [
            {
                label: 'Datos del Segundo Gráfico',
                backgroundColor: ['rgb(0, 128, 0)', 'rgb(255, 102, 0)', 'rgb(0,0,255)', 'rgb(255,255,0)', 'rgb(255, 0, 0)', 'rgb(255, 0, 255)' ],
                data: [15, 25, 35, 20, 10, 19]
            }
        ]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(255,255,255)' // Color de las etiquetas de texto en el eje X
                }
            },
            y: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(255,255,255)', // Color de las etiquetas de texto en el eje X
                    beginAtZero: true // Empezar el eje Y desde cero
                }

            }
        },
        indexAxis: 'x', // Mostrar barras horizontalmente
        plugins: {
            legend: {
                display: false // Ocultar la leyenda
            }
        }
    }
})
var chart5 = new Chart(miCanvas4, {
    type: 'pie',
    data: {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
        datasets: [
            {
                label: 'Datos del Segundo Gráfico',
                backgroundColor: ['#ff1700', '#ff2e00', '#ff4500', '#ff7300', '#ffa200)', '#ffff00'],
                data: [15, 25, 35, 20, 10, 19],
                borderWidth: 0.3,
            }
        ]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(3, 237, 253)' // Color de las etiquetas de texto en el eje X
                }
            },
            y: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(3, 237, 253)', // Color de las etiquetas de texto en el eje X
                    beginAtZero: true // Empezar el eje Y desde cero
                }

            }
        },
        indexAxis: 'x', // Mostrar barras horizontalmente
        plugins: {
            legend: {
                display: false // Ocultar la leyenda
            }
        }
    }
})
var chart6 = new Chart(miCanvas5, {
    type: 'bar',
    data: {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
        datasets: [
            {
                label: 'Datos del Segundo Gráfico',
                backgroundColor: ['rgb(0,255,0)', '#ff1700', 'green', '#ff1700', '#ffa200)', '#ffff00'],
                data: [55, -65, 35, -90, 10, 19],
                borderWidth: 0.3,
            }
        ]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(3, 237, 253)' // Color de las etiquetas de texto en el eje X
                }
            },
            y: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(3, 237, 253)', // Color de las etiquetas de texto en el eje X
                    beginAtZero: true // Empezar el eje Y desde cero
                }

            }
        },
        indexAxis: 'x', // Mostrar barras horizontalmente
        plugins: {
            legend: {
                display: false // Ocultar la leyenda
            }
        }
    }
})
var chart7 = new Chart(miCanvas6, { 
  type: 'bar',
  data: {
      labels: ['DEFECTOS IDENTIFICADOS', 'DEFECTOS CORREGIDOS', 'TIPO 1', 'TIPO 2'],
      datasets: [
          {
              label: 'Participación en M.A',
              backgroundColor: ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(128,128,128)', 'rgb(255, 255, 0)'],
              data: [57, 88, 62, 33]
          }
      ]
  },
  options: {
      scales: {
          x: {
              grid: {
                  display: false
              },
              ticks: {
                  color: 'rgb(255,255,255)',
                  font: {
                      size: 9
                  }
              }
          },
          y: {
              grid: {
                  display: false
              },
              ticks: {
                  color: 'rgb(255,255,255)',
                  font: {
                      size: 10
                  },
                  beginAtZero: true
              }
          }
      },
      indexAxis: 'x',
      plugins: {
          legend: {
              display: false
          },
          title: {  // Agregar un título al gráfico
              display: true,  // Mostrar el título
              text: 'Participacion semanal',  // Texto del título
              font: {
                  size: 16  // Tamaño del texto del título
              }
          }
      }
  }
})
var chart7II = new Chart(miCanvas6II, { 
  type: 'bar',
  data: {
    labels: ['DEFECTOS IDENTIFICADOS', 'DEFECTOS CORREGIDOS', 'TIPO 1', 'TIPO 2'],
    datasets: [
      {
        label: 'Participación en M.A',
        backgroundColor: ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(128,128,128)', 'rgb(255, 255, 0)'],
        data: [57, 88, 62, 33]
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 4
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 5
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Participacion semanal',
        font: {
          size: 14
        }
      },
      datalabels: {
        color: 'rgb(255,255,255)',
        font: {
          size: 5 // Tamaño de la fuente para las etiquetas del conjunto de datos
        },
        anchor: 'end',
        align: 'end',
        formatter: function(value, context) {
          return value; // Puedes personalizar el formato del valor si es necesario
        }
      }
    }
  }
});
var chart8 = new Chart(miCanvas7, {
  type: 'bar',
  data: {
    labels: ['Propuestas', 'Ejecutadas','Entrenadas'],
    datasets: [
      {
        label: 'Participación en M.A',
        backgroundColor: ['rgb(255, 165, 0)', 'rgb(0, 255, 0)','rgb(125,77,157)'],
        data: [17, 9,27]
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 9
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 10
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Lección de un punto',
        font: {
          size: 16
        }
      }
    }
  }
})
var chart8II = new Chart(miCanvas7II, {
  type: 'bar',
  data: {
    labels: ['Propuestas', 'Ejecutadas','Entrenadas'],
    datasets: [
      {
        label: 'Participación en M.A',
        backgroundColor: ['rgb(255, 165, 0)', 'rgb(0, 255, 0)','rgb(125,77,157)'],
        data: [17, 9,27]
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 4
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 5
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Lección de un punto',
        font: {
          size: 14
        }
      }
    }
  }
})
var chart9 = new Chart(miCanvas8, {
  type: 'line',
  data: {
    labels: ['Mecanicas', 'Layout','Diseño','Temporales','Fijas','Transicion'],
    datasets: [
      {
        label: 'Participación en M.A',
        borderColor: 'rgb(0, 0, 255)',
        backgroundColor: ['rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)'],
        borderWidth: 1,        
        data: [17, 9,27,55,19,33]
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 9
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 10
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Areas De Dificil Acceso',
        font: {
          size: 16
        }
      }
    }
  }
})
var chart9II = new Chart(miCanvas8II, {
  type: 'line',
  data: {
    labels: ['Mecanicas', 'Layout','Diseño','Temporales','Fijas','Transicion'],
    datasets: [
      {
        label: 'Participación en M.A',
        borderColor: 'rgb(0, 0, 255)',
        backgroundColor: ['rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)'],
        borderWidth: 1,        
        data: [17, 9,27,55,19,33]
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 4
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 5
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Areas de dificil acceso',
        font: {
          size: 14
        }
      }
    }
  }
})
var chart10 = new Chart(miCanvas9, {
  type: 'doughnut',
  data: {
    labels: ['Mecanicas', 'Layout','Diseño','Temporales','Fijas'],
    datasets: [
      {
        label: 'Participación en M.A',
        backgroundColor: ['rgb(255, 165, 0)', 'rgb(0, 255, 0)','rgb(125,77,157)','rgb(255,255,0)','rgb(255,0,0)','rgb(0,0,255)'],
        data: [17, 9,27,55,19,33]
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 9
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 10
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Ayudas De Trabajo',
        font: {
          size: 16
        }
      }
    }
  }
})
var chart10II = new Chart(miCanvas9II, {
  type: 'doughnut',
  data: {
    labels: ['Mecanicas', 'Layout','Diseño','Temporales','Fijas'],
    datasets: [
      {
        label: 'Participación en M.A',
        backgroundColor: ['rgb(255, 165, 0)', 'rgb(0, 255, 0)','rgb(125,77,157)','rgb(255,255,0)','rgb(255,0,0)','rgb(0,0,255)'],
        data: [17, 9,27,55,19,33]
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 7
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 7
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false
      },
        title: {
          display: true,
          text: 'Ayudas de trabajo',
          font: {
            size: 20
          },
          align: 'center',
        }

    }
  }
})
var chart11 = new Chart(miCanvas10, {
  type: 'pie',
  data: {
    labels: ['LUP', 'DEF 1','DEF 2','ADA','ADT'],
    datasets: [
      {
        label: 'Participación en M.A',
        backgroundColor: ['rgb(255, 165, 0)', 'rgb(0, 255, 0)','#d6919a','rgb(255,255,0)','rgb(128,128,128)','rgb(0,255,255)'],
        data: [7, 19,17,37,9,77]
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 9
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 10
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Ejecución ',
        font: {
          size: 16
        }
      }
    }
  }
})
var chart11II = new Chart(miCanvas10II, {
  type: 'pie',
  data: {
    labels: ['LUP', 'DEF 1','DEF 2','ADA','ADT'],
    datasets: [
      {
        label: 'Participación en M.A',
        backgroundColor: ['rgb(255, 165, 0)', 'rgb(0, 255, 0)','#d6919a','rgb(255,255,0)','rgb(128,128,128)','rgb(0,255,255)'],
        data: [7, 19,17,37,9,77]
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 9
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 10
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Ejecución ',
        font: {
          size: 16
        }
      }
    }
  }
})
var chart12 = new Chart(miCanvas11, {
  type: 'line',
  data: {
    labels: ['S1','S2','S3','S4','S5','S6','S7','S8'],
    datasets: [
      {
        label: 'Participación en M.A',
        borderColor: 'rgb(255,165,0)', 
        borderWidth: 1,
        pointRadius: 0,                       
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 9
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 10
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Tendencia',
        font: {
          size: 16
        }
      }
    }
  }
});
var chart12II = new Chart(miCanvas11II, {
  type: 'line',
  data: {
    labels: ['S1','S2','S3','S4','S5','S6','S7','S8'],
    datasets: [
      {
        label: 'Participación en M.A',
        borderColor: 'rgb(255,165,0)', 
        borderWidth: 1,
        pointRadius: 0, 
        data: [7, 19,17,37,9,77]
                      
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 4
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 5
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Tendencia',
        font: {
          size: 14
        }
      }
    }
  }
});
const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search-input')
const suggestionsList = document.getElementById('suggestions')
searchForm.addEventListener('submit', function (e) {
  e.preventDefault() // Evita que se envíe el formulario
  const searchTerm = searchInput.value.toLowerCase() // Obtenemos el término de búsqueda y lo convertimos a minúsculas

  // ... Tu código de manejo de búsqueda actual ...
  switch (searchTerm) {
    case 'autonomo':
    case 'mantenimiento autonomo':
      ElementosMaII('conteneMantaut')
    break;
    case 'densitometria':
      abrirDensitometria()
    break;
    case 'inicio':
      VolveraInicio()
    break;
    case 'tintero':
      changeButtonStyles('pantalla-tintero')
    break;
    case 'bateria':
      changeButtonStyles('bateria-entintado-II', 'contene-7')
    break;
    case 'variable':
      abrirSeccionVariable('cont-variable')
    break;
    case 'planas':
      abrirSeccionPlanas('cont-plana')
    break;
    case 'secador uv':
    case 'secador':      
      abrirSeccionCurado('cont-secador')
    break;
    case 'torre':      
      cambioContenedor('torre-imp')
    break;
    case 'smed':      
    changeButtonStyles('bancada-torre-II')
    break;  
    case 'plancha':  
    case 'porta plancha': 
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i])
        if (elemento) {
          elemento.style.display = 'none'
        }
      }             
      showRepuesto('contPortPlaca')
    break;
    case 'pantalla inicial':
    case 'pantalla-inicial':
      abrirSeccionContinua('pantalla-inicial')
    break;
    case 'preprensa':
    abrirPrepress('pre-prensa')
    break;
    case 'mantilla': 
    case 'manta':      
    case 'porta mantilla': 
    for (var i = 0; i < allContenedores.length; i++) {
      var elemento = document.getElementById(allContenedores[i])
      if (elemento) {
        elemento.style.display = 'none'
      }
    }          
    showRepuesto('contPortManta', 'videoTrain03')
    break;
    case 'contra':      
    case 'contraPresion':
    case 'impresorImg':
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i])
        if (elemento) {
          elemento.style.display = 'none'
        }
      }       
    showRepuesto('contImpresor', 'videoTrain01')
    break;
    case 'empleados':
    case 'resultados':
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i])
        if (elemento) {
          elemento.style.display = 'none'
        }
      } 
      resultadosMA() 
      container1.style.display = 'flex'           
    break;
    default:
      alert("No se encontró ninguna coincidencia para la búsqueda: " + searchTerm)  
    break;
  }
})
const canvasElements2 = document.querySelectorAll('#canvasContainer2 canvas')
const canvasElements3 = document.querySelectorAll('#canvasContainer3 canvas')
const canvasElements4 = document.querySelectorAll('#contChecks input')
canvasElements2.forEach(canvas => {
  canvas.addEventListener('click', () => {
    toggleFullScreen(canvas)
  })
})
canvasElements3.forEach(canvas => {
  canvas.addEventListener('click', () => {
    toggleFullScreen(canvas)
  })
})
canvasElements4.forEach(input => {
  input.addEventListener('click', () => {
    toggleFullScreen(input)
  })
})
var colorClickLinks = document.querySelectorAll('.colorClick')
  colorClickLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault()
      link.classList.add('orange-text')
      imagenesPasoApaso(link.getAttribute('data-imagen'))
    })
})
function moveScroll(container) {
  // Mover el scroll 100px hacia abajo
  container.scrollTop += 100;
  // Reducir el número de iteraciones en 1
  iterations--;
  // Verificar si quedan más iteraciones
  if (iterations > 0) {
    // Llamar a la función nuevamente después de 1 segundo
    setTimeout(function() {
      // Restaurar el color de fondo del botón antes de mover el scroll
      moveScroll(container);
    }, 57);
  } else {
    // Cuando termina el desplazamiento, regresar a la parte superior
    container.scrollTop = 0;
  }
}
function scrollToTop(element) {
  const startTime = performance.now();
  const duration = 500; 
  const startScrollTop = element.scrollTop;
  const endScrollTop = 0;  
  function animate(time) {
    const elapsedTime = time - startTime;
    const progress = Math.min(elapsedTime / duration, 1);    
    element.scrollTop = startScrollTop - progress * startScrollTop;
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }  
  requestAnimationFrame(animate);
}
function animateScroll(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollTop = element.scrollHeight - element.clientHeight;
    scrollToTop(element);
  } else {
    console.error(`Element with ID ${elementId} not found.`);
  }
}
var canvas = document.getElementById("sinusoidalCanvas");         
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "rgb(0, 255, 0)"; // Verde
ctx.lineWidth = 1;
drawSinusoidalI();
function drawSinusoidalI() {
  // Ajusta la escala de la onda y el desplazamiento
  var amplitude = 50; // Altura máxima de la onda
  var frequency = 0.05; // Frecuencia de la onda
  var phase = 0; // Desplazamiento horizontal
  // Comienza el trazado de la onda
  ctx.beginPath();
  for (var x = 0; x < canvas.width; x++) {
  // Calcula el valor y de la onda en función de x
  var y = amplitude * Math.sin(frequency * x + phase);
  // Dibuja un segmento de la onda
  ctx.lineTo(x, canvas.height / 2 - y);
  }
  // Finaliza el trazado y dibuja la línea
  ctx.stroke();
  // Dibuja el eje horizontal con numeración y etiquetas rojas
  drawHorizontalAxisI();
  // Dibuja el eje vertical con numeración y etiquetas rojas
  drawVerticalAxis();
}
function drawHorizontalAxisI() {
  // Dibuja el eje horizontal
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.stroke();
  // Dibuja las marcas y etiquetas en el eje horizontal
  for (var x = 0; x <= canvas.width; x += 50) {
  ctx.beginPath();
  ctx.moveTo(x, canvas.height / 2 - 5);
  ctx.lineTo(x, canvas.height / 2 + 5);
  ctx.stroke();
  ctx.fillStyle = "yellow"; // Etiquetas rojas
  ctx.fillText(x - canvas.width / 2, x - 10, canvas.height / 2 + 20);
  }
}
function drawVerticalAxis() {
  // Dibuja el eje vertical
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();
  // Dibuja las marcas y etiquetas en el eje vertical
  for (var y = 0; y <= canvas.height; y += 50) {
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 - 5, y);
  ctx.lineTo(canvas.width / 2 + 5, y);
  ctx.stroke();
  ctx.fillStyle = "yellow"; // Etiquetas rojas
  ctx.fillText(canvas.height / 2 - y, canvas.width / 2 - 30, y + 5);
  }
}
var canvasI = document.getElementById("diagonalCanvas");
var dcx = canvasI.getContext("2d");
dcx.strokeStyle = "rgb(0,255,0)"; // Azul
dcx.lineWidth = 1;
drawDiagonalLine();
function drawDiagonalLine() {
  // Comienza el trazado de la línea
  dcx.beginPath();
  // Establece el punto de inicio en (300, 0)
  dcx.moveTo(0, 177);
  // Dibuja la línea hasta (0, 300)
  dcx.lineTo(300, 0);
  // Finaliza el trazado y dibuja la línea
  dcx.stroke();

  // Dibuja el eje horizontal con numeración y etiquetas rojas
  drawHorizontalAxisII();
  // Dibuja el eje vertical con numeración y etiquetas rojas
  drawVerticalAxisII();
}
function drawHorizontalAxisII() {
  // Dibuja el eje horizontal
  dcx.beginPath();
  dcx.moveTo(0, canvasI.height / 2);
  dcx.lineTo(canvasI.width, canvasI.height / 2);
  dcx.stroke();
  // Dibuja las marcas y etiquetas en el eje horizontal
  for (var x = 0; x <= canvasI.width; x += 50) {
  dcx.beginPath();
  dcx.moveTo(x, canvasI.height / 2 - 5);
  dcx.lineTo(x, canvasI.height / 2 + 5);
  dcx.stroke();
  dcx.fillStyle = "orangered"; // Etiquetas rojas
  dcx.fillText(x - canvasI.width / 2, x - 10, canvasI.height / 2 + 20);
  }
}
function drawVerticalAxisII() {
  // Dibuja el eje vertical
  dcx.beginPath();
  dcx.moveTo(canvasI.width / 2, 0);
  dcx.lineTo(canvasI.width / 2, canvasI.height);
  dcx.stroke();
  // Dibuja las marcas y etiquetas en el eje vertical
  for (var y = 0; y <= canvasI.height; y += 50) {
  dcx.beginPath();
  dcx.moveTo(canvasI.width / 2 - 5, y);
  dcx.lineTo(canvasI.width / 2 + 5, y);
  dcx.stroke();
  dcx.fillStyle = "orangered"; // Etiquetas rojas
  dcx.fillText(canvasI.height / 2 - y, canvasI.width / 2 - 30, y + 5);
  }
}
var canvasII = document.getElementById("dualSinusoidalCanvas");
var cdsc = canvasII.getContext("2d");
cdsc.strokeStyle = "rgb(0, 255, 0)"; // Verde
cdsc.lineWidth = 1;
drawSinusoidalDoubleI(50, 0.05, 0);
cdsc.strokeStyle = "rgb(0, 0, 255)"; // Amarillo
cdsc.lineWidth = 1;
drawSinusoidalDoubleI(60, 0.05, Math.PI / 2); // Parámetros diferentes para la segunda onda
drawGridI(4, 7);
function drawSinusoidalDoubleI(amplitude, frequency, phase) {
  // Comienza el trazado de la onda
  cdsc.beginPath();
  for (var x = 0; x < canvasII.width; x++) {
  // Calcula el valor y de la onda en función de x
  var y = amplitude * Math.sin(frequency * x + phase);
  // Dibuja un segmento de la onda
  cdsc.lineTo(x, canvasII.height / 2 - y);
  }
  // Finaliza el trazado y dibuja la línea
  cdsc.stroke();
}
function drawGridI(horizontalLinesI, verticalLinesI) {
  // Configura el color y el grosor de las líneas de la cuadrícula
  cdsc.strokeStyle = "rgb(0,255,0)"; // Gris
  cdsc.lineWidth = 1;
  // Dibuja líneas horizontales
  for (var i = 1; i < horizontalLinesI; i++) {
  var y = (i / horizontalLinesI) * canvasII.height;
  cdsc.beginPath();
  cdsc.moveTo(0, y);
  cdsc.lineTo(canvasII.width, y);
  cdsc.stroke();
  }
  // Dibuja líneas verticales
  for (var j = 1; j < verticalLinesI; j++) {
  var x = (j / verticalLinesI) * canvasII.width;
  cdsc.beginPath();
  cdsc.moveTo(x, 0);
  cdsc.lineTo(x, canvasII.height);
  cdsc.stroke();
  }
}        
var canvas = document.getElementById("tripleSinusoidalCanvas");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "rgb(255, 125, 0)"; // Verde
ctx.lineWidth = 1;
drawSinusoidalDouble(50, 0.05, 0);
ctx.strokeStyle = "rgb(255, 0, 255)"; // Amarillo
ctx.lineWidth = 1;
drawSinusoidalDouble(60, 0.05, Math.PI / 2); // Parámetros diferentes para la segunda onda
ctx.strokeStyle = "rgb(255, 255, 0)"; // Azul
ctx.lineWidth = 1;
drawSinusoidal(40, 0.1, Math.PI); // Parámetros diferentes para la tercera onda
drawGrid(4, 7);
function drawSinusoidal(amplitude, frequency, phase) {
// Comienza el trazado de la onda
ctx.beginPath();
for (var x = 0; x < canvas.width; x++) {
// Calcula el valor y de la onda en función de x
var y = amplitude * Math.sin(frequency * x + phase);
// Dibuja un segmento de la onda
ctx.lineTo(x, canvas.height / 2 - y);
}
// Finaliza el trazado y dibuja la línea
ctx.stroke();
}
function drawSinusoidalDouble(amplitude, frequency, phase) {
  // Comienza el trazado de la onda
  ctx.beginPath();
  for (var x = 0; x < canvas.width; x++) {
  // Calcula el valor y de la onda en función de x
  var y = amplitude * Math.sin(frequency * x + phase);
  // Dibuja un segmento de la onda
  ctx.lineTo(x, canvas.height / 2 - y);
  }
  // Finaliza el trazado y dibuja la línea
  ctx.stroke();
}
function drawGrid(horizontalLines, verticalLines) {
  // Configura el color y el grosor de las líneas de la cuadrícula
  ctx.strokeStyle = "rgb(150, 150, 150)"; // Gris
  ctx.lineWidth = 1;
  // Dibuja líneas horizontales
  for (var i = 1; i < horizontalLines; i++) {
  var y = (i / horizontalLines) * canvas.height;
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(canvas.width, y);
  ctx.stroke();
  }
  // Dibuja líneas verticales
  for (var j = 1; j < verticalLines; j++) {
  var x = (j / verticalLines) * canvas.width;
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, canvas.height);
  ctx.stroke(); 
  }
}
var intervalId;
function iniciarEventos() {
  var contSinusoidales = document.getElementById('contMetrics')
  var contCicodelicos = document.getElementById('botonesContainer')   
  var colores = ['verde', 'rojo', 'amarillo', 'azul', 'violeta','magenta','gris','verdesat','cyan','purpura','anaranjado'] 
  // Inicia cada botón con un índice de inicio diferente
  var botones = document.querySelectorAll('#botonesContainer .botoneras')
  botones.forEach(function (boton, index) {
    boton.dataset.indiceInicio = index;
  });
  function cambiarColor() {
    botones.forEach(function (boton) {
      var indiceInicio = parseInt(boton.dataset.indiceInicio)
      var indiceColor = (indiceInicio + 1) % colores.length

      // Cambia la clase de color del botón
      boton.classList.remove(...colores);
      boton.classList.add(colores[indiceColor])

      // Actualiza el índice de inicio para el próximo color
      boton.dataset.indiceInicio = indiceColor
    });
  }
  // Llama a la función cambiarColor cada 77 MS y guarda el ID del intervalo
  intervalId = setInterval(cambiarColor, 77)
  contSinusoidales.style.display = 'flex'
  contCicodelicos.style.display = 'grid'

}
function detenerEventos() {
  clearInterval(intervalId);
  var contCicodelicos = document.getElementById('botonesContainer')  
  contCicodelicos.style.left = '555px'
}
function iniciarTransito() {
  var boton = document.getElementById("buttSolitario");
  var stopFlag = false;
  var anchoPantalla = window.innerWidth;
  var altoPantalla = window.innerHeight - 37;
  var duracion = 1000;

  // 1. Array de colores
  var colores = ['verde', 'rojo', 'amarillo', 'azul', 'violeta', 'magenta', 'gris', 'verdesat', 'cyan', 'purpura', 'anaranjado'];
  // 2. Elemento del botón
  var boton = document.getElementById("buttSolitario");
  // 3. Función para cambiar el color del botón con un intervalo
  function cambiarColorConIntervalo() {
    var i = 0;
    setInterval(function () {
      // Cambiar el color del botón
      boton.style.backgroundColor = colores[i];      
      // Incrementar el índice para el próximo color
      i = (i + 1) % colores.length;
    }, 77); // Intervalo de 0.1 segundos (100 milisegundos)
  }
  // Llamar a la función para iniciar el cambio de colores
  cambiarColorConIntervalo();

  // Función para mover el botón y reiniciar el ciclo
  function mover(distanciaX, distanciaY, transitionProperty, nextMove) {
    if (stopFlag) return;
    // Aplicar la transición
    boton.style.transition = transitionProperty;
    boton.style.left = distanciaX + "px";
    boton.style.top = distanciaY + "px";
    // Esperar y luego realizar el siguiente movimiento
    setTimeout(function () {
      if (nextMove) {
        nextMove();
      } 
    }, duracion);
  }
  // Primer movimiento: Derecha a izquierda
  function moverDerechaIzquierda() {
    boton.style.backgroundColor = 'rgb(0,255,0)'
    mover(anchoPantalla - boton.offsetWidth, 0, 'left ' + duracion / 1000 + 's', moverArribaAbajo);
  }
  // Segundo movimiento: Arriba a abajo
  function moverArribaAbajo() {
    boton.style.backgroundColor = 'rgb(255,0,0)'
    mover(anchoPantalla - boton.offsetWidth, altoPantalla - boton.offsetHeight, 'top ' + duracion / 1000 + 's', moverIzquierdaDerecha);
  }
  // Tercer movimiento: Izquierda a derecha
  function moverIzquierdaDerecha() {
    boton.style.backgroundColor = 'rgb(255,255,0)'
    mover(0, altoPantalla - boton.offsetHeight, 'left ' + duracion / 1000 + 's', moverAbajoArriba);
  }
  // Cuarto movimiento: Abajo a arriba
  function moverAbajoArriba() {
    boton.style.backgroundColor = 'rgb(0,0,255)'
    mover(0, 0, 'top ' + duracion / 1000 + 's', moverDiagonal);
  }
  // Quinto movimiento: Diagonal
  function moverDiagonal() {
    boton.style.backgroundColor = 'rgb(255,0,255)'
    mover(anchoPantalla - boton.offsetWidth, altoPantalla - boton.offsetHeight, 'left ' + duracion / 1000 + 's, top ' + duracion / 1000 + 's', moverAbajoArribaII);
  }
  // Sexto movimiento: Abajo a arriba
  function moverAbajoArribaII() {
    boton.style.backgroundColor = 'orangered'
    mover(anchoPantalla - boton.offsetWidth, 0, 'top ' + duracion / 1000 + 's',moverDiagonalI);
  } 
  // séptimo movimiento: Diagonal inversa
  function moverDiagonalI() {
    boton.style.backgroundColor = 'white'
    mover(0, altoPantalla - boton.offsetHeight, 'left ' + duracion / 1000 + 's, top ' + duracion / 1000 + 's', moverAbajoArribaI);
  }
  // Cuarto movimiento: Abajo a arriba
  function moverAbajoArribaI() {
    boton.style.backgroundColor = 'purple'
    mover(0, 0, 'top ' + duracion / 1000 + 's', moverDerechaIzquierda);
  }  
  // Iniciar el ciclo de movimientos
  moverDerechaIzquierda();
  iniciarEventos()
}
function detenerMovimiento() {
  stopFlag = true;
  clearTimeout(timeoutId);
}
var botonSolitario = document.getElementById('buttSolitario');
var botonSeguidor = document.getElementById('boton2');
const buttons = document.querySelectorAll('.buttons')  
var contButtsAround = document.getElementById('button-container')
function moverBoton(boton, index) {
  const valoresLeft = ['-52px', '-104px', '-156px', '-208px', '-260px', '-312px', '-364px', '-416px', '-468px', '-520px', '-572px', '-624px', '-676px', '-728px', '-780px', '-832px', '-884px', '-936px', '-988px', '-1040px', '-1092px', '-1144px', '-1196px', '-1248px', '-1300px', '-1352px', '-1404px', '-1456px', '-1508px', '-1560px', '-1612px', '-1664px', '-1716px', '-1768px', '-1820px', '-1872px', '-1924px', '-1976px', '-2028px', '-2080px', '-2132px', '-2184px', '-2236px', '-2288px', '-2340px', '-2392px', '-2444px', '-2496px', '-2548px', '-2600px', '-2652px', '-2704px', '-2756px', '-2808px', '-2860px', '-2912px', '-2964px', '-3016px', '-3068px', '-3120px', '-3172px', '-3224px', '-3276px', '-3328px', '-3380px', '-3432px', '-3484px', '-3536px', '-3588px']

  // Calcular la distancia total de los cuatro lados de la pantalla
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const totalDistance = screenWidth + screenHeight + screenWidth + screenHeight;
  // Obtener la cantidad de botones
  const cantidadBotones = valoresLeft.length;
  // Calcular el espacio entre botones (considerando 2px de separación)
  const espacioEntreBotones = 2;
  const espacioTotalEntreBotones = (cantidadBotones - 1) * espacioEntreBotones;
  // Calcular la distancia disponible para posicionar los botones
  const distanciaDisponible = totalDistance - espacioTotalEntreBotones;
  // Calcular la distancia entre cada botón
  const distanciaEntreBotones = distanciaDisponible / cantidadBotones;
  // Posicionar los botones en el lado izquierdo de la pantalla
  const nuevosValoresLeft = Array.from({ length: cantidadBotones }, (_, index) => `-${index * (distanciaEntreBotones + espacioEntreBotones)}px`);
  // Asignar las nuevas posiciones a los botones
  nuevosValoresLeft.forEach((valor, index) => {
  const boton = document.getElementById(`buttons${index + 2}`)
  if (boton) {
    boton.style.left = valor
  } 
});
  boton.style.left = nuevosValoresLeft[index]
  const velocidad = 26
  let x = parseFloat(boton.style.left) || 0
  let y = 0
  let moviendoDerecha = true
  let moviendoAbajo = false
  let moviendoIzquierda = false
  let moviendoArriba = false
  let contador = 0
  let nuevoContador = 0

  function mover() {
    contador++;  // Incrementa el primer contador cuando moviendoDerecha es true
    contButtsAround.style.display = 'flex'
    /////////////////////////////////////////////////////////////////////////////////////////////
    if (contador ===20) {
      contador = 0;  // Reinicia el primer contador cuando llega a 80 unidades
      nuevoContador++;  // Incrementa el nuevo contador cada vez que contador llega a 80 unidades
      console.log("Nuevo Contador:", nuevoContador)          
    }    
    //////////////////////////////////////////////////////////////////////////////////////////////
    if (moviendoDerecha) {
      if (x < window.innerWidth - boton.offsetWidth) {
        x += velocidad
        boton.style.background = 'rgb(0,255,0)'
        const colores = {
          1: 'rgb(255, 0, 0)',
          2: 'rgb(255, 255, 0)',
          3: 'rgb(0, 0, 255)',
          4: 'rgb(255, 145, 0)',
          5: 'rgb(125, 125, 125)',
          6: 'rgb(233, 2, 25)',
          7: 'rgb(222, 53, 230)'
        };        
        if (nuevoContador >= 1 && nuevoContador <= 7) {
          boton.style.background = colores[nuevoContador];
        }
      } else {
        x = window.innerWidth - boton.offsetWidth
        moviendoDerecha = false
        moviendoAbajo = true        
      }
    }  
    else if (moviendoAbajo) {
      if (y < (window.innerHeight) - boton.offsetHeight) {
        y += velocidad;
        boton.style.background = 'rgb(255,255,0)'
        const colores = {

          3: 'rgb(0, 255, 0)',
          4: 'rgb(0, 255, 255)',
          5: 'rgb(222, 53, 230)',
          6: 'rgb(100, 255, 100)',
          7: 'rgb(255, 255, 0)',
          8: 'rgb(77, 0, 255)',
          9: 'rgb(255, 145, 0)'
        };
        
        if (nuevoContador >= 3 && nuevoContador <= 9) {
          boton.style.background = colores[nuevoContador];
        }
      } else {
        y = (window.innerHeight) - boton.offsetHeight
        moviendoAbajo = false;
        moviendoIzquierda = true
      }
    } else if (moviendoIzquierda) {
      if (x > 0) {
        x -= velocidad
        boton.style.background = 'rgb(255,0,255)'
        const colores = {
          4: 'rgb(255, 0, 0)',
          5: 'rgb(255, 255, 0)',
          6: 'rgb(0, 0, 255)',
          7: 'rgb(255, 145, 0)',
          8: 'rgb(125, 125, 125)',
          9: 'rgb(233, 2, 25)',
          10: 'rgb(222, 53, 230)'
        }        
        if (nuevoContador >= 4 && nuevoContador <= 11) {
          boton.style.background = colores[nuevoContador];
        }
      } else {
        x = 0
        moviendoIzquierda = false
        moviendoArriba = true
      }
    } else if (moviendoArriba) {
      if (y > 0) {
        y -= velocidad
        boton.style.background = 'rgb(0,255,255)'
        const colores = {
        7: 'rgb(0, 255, 0)',
        8: 'rgb(0, 255, 255)',
        9: 'rgb(222, 53, 230)',
        10: 'rgb(100, 255, 100)',
        11: 'rgb(255, 255, 0)',
        12: 'rgb(77, 0, 255)',
        13: 'rgb(255, 145, 0)'
      };      
      if (nuevoContador >= 7 && nuevoContador <= 13) {
        boton.style.background = colores[nuevoContador];
      }
      if(nuevoContador >= 9){
        nuevoContador = 0
      }

      } else {
      y = 0
      moviendoArriba = false
      // Inicia el movimiento hacia la derecha para reiniciar el ciclo
      moviendoDerecha = true
  }
    }
    boton.style.left = x + 'px'
    boton.style.top = y + 'px'
    requestAnimationFrame(mover);
  }
  mover();
} 
function iniciaMove() {
  var contiVideoJuegos = document.getElementById('cont-videojuegos')
  contiVideoJuegos.style.display = 'block'
  buttons.forEach((button, index) => {
    moverBoton(button, index);
  });
  iniciarTransito()
}
function palpitarBoton(elemento){
  switch (elemento){

    case 'desbobinadorId':
      document.getElementById('boton1').classList.add('parpadea');
    setTimeout(function () {
      document.getElementById('boton1').classList.remove('parpadea');
    }, 277);
    break;
    case 'uTeñidos':
      document.getElementById('boton7').classList.add('parpadea');
    setTimeout(function () {
      document.getElementById('boton7').classList.remove('parpadea');
    }, 277);
    break;
    case 'alimentadorId':
      document.getElementById('boton13').classList.add('parpadea');
    setTimeout(function () {
      document.getElementById('boton13').classList.remove('parpadea');
    }, 277);
    break;
    case 'unidProceso':
      document.getElementById('boton19').classList.add('parpadea');
    setTimeout(function () {
      document.getElementById('boton19').classList.remove('parpadea');
    }, 277);
    case 'rebobinador':
      document.getElementById('boton25').classList.add('parpadea');
    setTimeout(function () {
      document.getElementById('boton25').classList.remove('parpadea');
    }, 277);
    break;       
    default:
  }

}
function palpitarBotonTintero() {
  document.getElementById('tinteroButton').classList.add('parpadea');
  setTimeout(function() {
    document.getElementById('tinteroButton').classList.remove('parpadea');
  }, 277);  
}
function palpitarBotonBateria() {
  document.getElementById('bateriaButton').classList.add('parpadea');
  setTimeout(function() {
    document.getElementById('bateriaButton').classList.remove('parpadea');
  }, 277);  
}
function palpitarBotonTorre() {
  document.getElementById('bancadaButton').classList.add('parpadea');
  setTimeout(function() {
    document.getElementById('bancadaButton').classList.remove('parpadea');
  }, 277);  
}
function palpitarBotonHumedad() {
  document.getElementById('humedadButton').classList.add('parpadea');
  setTimeout(function() {
    document.getElementById('humedadButton').classList.remove('parpadea');
  }, 277);  
}
document.getElementById('iniciar').addEventListener('click', function() {
  contibotsDistri.classList.toggle('move-down')
  contVideo.classList.toggle('move-down-I')
});
function transicionElementos() {
  contibotsDistri.classList.add('move-up')
  contVideo.classList.add('move-up-left')
}
var contOblicuosInicio = document.getElementById('cont-titulo')
function transitoInicio(){
  contOblicuosInicio.style.animation = "giro-y 1s linear";
  contOblicuosInicio.classList.add('move-images-IV');
}
function transicionElementosII() {
  contibotsDistriII.classList.add('move-butts')
  contImgsDistribuidor.classList.add('move-images')
  buttRepuest.classList.add('move-repuest')
  contiVidDistribuidor.classList.add('move-video')    
}
function transicionElementosIII() {
  contibotsDistriIII.classList.add('move-butts-II')
  contImgsEntintador.classList.add('move-images-II') 
  buttRepuestI.classList.add('move-repuest-II')
  contiVidEntintador.classList.add('move-vid-entintador') 
} 
function transicionElementosIV(){
  contibotsDistriV.classList.add('move-butts-III')
  contImgsSmed.classList.add('move-images-III') 
  buttRepuestIII.classList.add('move-repuest-III')
  contiVidSmed.classList.add('move-vid-smed') 
}
function transicionElementosV(){
  contibotsDistriVI.classList.add('move-butts-IV')
  contVideoSmed.classList.add('move-vid-smed-II')
  contImageneSmed.classList.add('move-images-IV')
  buttRepuestV.classList.add('move-repuest-IV')
}
function restablecerEstilos(elemento) {
  // Eliminar estilos en línea
  elemento.removeAttribute('style');

  // Asegurarse de que no haya clases que apliquen estilos no deseados
  elemento.className = '';

  // Agregar la clase que define el lugar desde CSS
  elemento.classList.add('clase-contenedor-7');  // Ajusta el nombre de la clase según tu caso
}
function volverApre(){
  var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','pre-prensa','imgs-prepress','primerCont','vidCicodelia']  
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }  
  container1.style.display='grid'
}
const applyFilters = () => {
  videoStore.forEach(videoElement => {
    videoElement.style.filter = `blur(${blurAmount}px)`;
  });   
};
const applyFiltersII = () => {
  videoStore.forEach(videoElement => {
    videoElement.style.transform = `scale(${zoomAmount}%) rotate(${degreesAmount}deg)`
  })
};
const applyFiltersV = () => {
  videoStore.forEach(videoElement => {
    videoElement.style.transform = `scale(${zoomAmount}%) rotate(${degreesAmount}deg)`;
  });
};
const applyFiltersIII = () => {
  videoStore.forEach(videoElement => {
    videoElement.style.transform = `scale(${zoomAmount}%) rotate(${degreesAmount}deg)`;
});

  
};
const applyFiltersIV = () => {
  videoPrisma.style.filter = `blur(${blurAmount}px)`;
}
const makeFilters = () => { // Resetear filtros
  blurAmount = 1
  videoStore.forEach(videoElement => {
    videoElement.style.filter = `blur(${1}px)`;
  });
  button.style.left = '0'
  slider1.style.width = '0'
  slider2.style.width = '0'
  slider3.style.width = '0'
  display.style.color = 'rgb(0,255,0)'
  posicionPantalla.style.borderColor = 'rgb(0,255,0)'
  posicionPantalla.style.color = 'rgb(0,255,0)'
  positionDisplay.textContent = `${'0'} - µpm`
  applyFiltersII()
  applyFiltersIII()
};
const makeFiltersII = () => { // Resetear filtros 
  currentRotation = 0
  degreesAmount = 0
  videoStore.forEach(videoElement => {
    videoElement.style.transform = `rotate(${0}deg)`;
  });
  spanGuide.style.left = '0'
  slider5.style.width = '0'
  positionDisplayII.textContent = `${'0'}°`
  applyFilters()
  applyFiltersII()
  applyFiltersIII()
  applyFiltersIV()
};
const makeFiltersIII = () => { // Resetear filtros
  currentZoom = 0
  zoomAmount = 100
  videoPrisma.style.transform = `scale(100%)`
  spanGuideI.style.left = '0'
  slider4.style.width = '0'
  positionDisplayIII.textContent = `${'100'} %`
  applyFilters()
  applyFiltersII()
  applyFiltersIII()
  applyFiltersIV()
};
const makeFiltersIV = () => { // Resetear filtros
  positionDisplay.textContent = `${'400'} - µpm`
};
let degreesAmount = 0
let zoomAmount = 100
let blurAmount = 0
let brightnessAmount = 1   
var intervalId = null
let intervalId2 = null
let intervalId3 = null
let intervalId4 = null
let intervalId5 = null
let intervalId6 = null
let intervalId7 = null
buttonLeft.addEventListener('mousedown', () => {
  if (!clickHabilitado) return; 
  intervalId = setInterval(() => {
    var tituloElement = document.getElementById("titulo");
    let currentLeft = parseFloat(window.getComputedStyle(button).left)        
    let newLeft = currentLeft + 2
    if(newLeft <= 2){
      makeFilters()
      blurAmount = 0;
      brightnessAmount = 1;      
    }
    if (newLeft <= 150) {
      posicionPantalla.style.color = 'rgb(0,255,0)'
      posicionPantalla.style.borderColor = 'rgb(0,255,0)'
      button.style.left = `${newLeft}px`;
      slider1.style.width = `${newLeft}px`;
      blurAmount += 0.01
      applyFilters();
      console.log(videoStore)
    }    
    if(newLeft === 150){
      clearInterval(intervalId)
      verButtsInterfaz.style.pointerEvents = "none";    
      interfaz.style.display = 'flex'
      tituloElement.textContent = "BAJA DEFINICION DE VIDEO"; 
      tituloElement.style.backgroundColor = 'orange'
      tituloElement.style.color = 'black'           
    }
    if(newLeft >= 150){
      posicionPantalla.style.color = 'orange'
      posicionPantalla.style.borderColor = 'orange'
      slider2.style.width = `${newLeft-150}px`
      button.style.left = `${newLeft}px`
      blurAmount += 0.01
      applyFilters();
    } 
    if(newLeft === 330){
      clearInterval(intervalId)
      interfaz.style.display = 'flex'
      tituloElement.textContent = "PERDIDA TOTAL DE DEFINICION";  
      tituloElement.style.backgroundColor = 'rgb(255,0,0)'
      tituloElement.style.color = 'white'
      verButtsInterfaz.style.pointerEvents = "none";
    }
    if(newLeft >= 330){
      posicionPantalla.style.color = 'rgb(255,0,0)'
      posicionPantalla.style.borderColor = 'rgb(255,0,0)'
      slider3.style.width = `${newLeft-327}px`
      button.style.left = `${newLeft}px`
      blurAmount += 0.1
      applyFilters();
    }
    if (newLeft >= 400) {
      positionDisplay.textContent = `400 - µpm`
      clearInterval(intervalId);
      clickHabilitado = false;
    }    
    positionDisplay.textContent = `${newLeft} - µpm`
  }, 7);
});
buttonLeft.addEventListener('mouseup', () => {
  clearInterval(intervalId)
}); 
buttonLeft.addEventListener('mouseleave', () => {
  clearInterval(intervalId)
});
buttonRight.addEventListener('mousedown', () => {
  intervalId2 = setInterval(() => {
    const currentLeft = parseFloat(window.getComputedStyle(button).left)
    const barraWidth = parseFloat(window.getComputedStyle(slider3).width)
    const barraWidth1 = parseFloat(window.getComputedStyle(slider2).width) 
    const barraWidth2 = parseFloat(window.getComputedStyle(slider1).width)
    const newLeft = currentLeft - 2
    const newWidth = barraWidth -2 
    const withNew1 = barraWidth1 - 2
    const withNew2 = barraWidth2 - 2
    if (newLeft >=330) {
      button.style.left = `${newLeft}px`
      slider3.style.width = `${newWidth}px`
      blurAmount -= 0.025;
      applyFilters(); // Aplicar los filtros actualizados
      posicionPantalla.style.borderColor = 'rgb(255,0,0)'
      display.style.color = 'rgb(255,0,0)'
    }
    if (newLeft >= 130 && newLeft <= 330) {
      button.style.left = `${newLeft}px`
      slider2.style.width = `${withNew1}px`
      blurAmount -= 0.025;
      applyFilters(); // Aplicar los filtros actualizados
      posicionPantalla.style.color = 'orange'
      posicionPantalla.style.borderColor = 'orange'      
      display.style.color = 'rgb(255,100,0)'
    }
    if (newLeft >= 0 && newLeft <= 150) {
      button.style.left = `${newLeft}px`
      slider1.style.width = `${withNew2}px`
      blurAmount -= 0.025;
      applyFilters(); // Aplicar los filtros actualizados
      posicionPantalla.style.color = 'rgb(0,255,0)'
      posicionPantalla.style.borderColor = 'rgb(0,255,0)'    
      display.style.color = 'rgb(0,255,0)'
    }
    if (newLeft <= 0) {
      setTimeout(() => {
      positionDisplay.textContent = `${'0'} - µpm`     
      clearInterval(intervalId2)        
      }, 17);
      makeFilters()
      blurAmount = 0;
    }
    positionDisplay.textContent = `${newLeft} - µpm`
  }, 7)
})
buttonRight.addEventListener('mouseup', () => {
  clearInterval(intervalId2)
})
buttonRight.addEventListener('mouseleave', () => {
  clearInterval(intervalId2)
})
buttReset.addEventListener('mousedown', () => {
  makeFilters()
    clickHabilitado = true;
})
buttonLeft2.addEventListener('mousedown', () => {
  intervalId5 = setInterval(() => {    
    if (currentRotation < 360) {
      currentRotation++
      console.log(currentZoom)
      posicionPantalla.style.color = 'rgb(0,255,0)'
      posicionPantalla.style.borderColor = 'rgb(0,255,0)'
      spanGuide.style.left = `${currentRotation}px`
      slider5.style.width = `${currentRotation}px`
      degreesAmount += 1
      applyFiltersV();  
      positionDisplayII.textContent = `${currentRotation}°` 
    }
    if(currentRotation >= 360){
      clearInterval(intervalId5)
    }
  }, 77);

});
buttonLeft2.addEventListener('mouseup', () => {
  clearInterval(intervalId5)
})
buttonLeft2.addEventListener('mouseleave', () => {
  clearInterval(intervalId5)
})
buttonRight2.addEventListener('mousedown', () => {
  clearInterval(intervalId4); // Limpiar intervalo anterior si existe
  intervalId4 = setInterval(() => {    
    if (currentRotation > 0) {
      currentRotation--;
      posicionPantalla.style.color = 'rgb(0,255,0)';
      posicionPantalla.style.borderColor = 'rgb(0,255,0)';
      spanGuide.style.left = `${currentRotation}px`;
      slider5.style.width = `${currentRotation}px`;
      degreesAmount -= 1;
      applyFiltersII(); // Aplicar los filtros actualizados
      positionDisplayII.textContent = `${currentRotation}°`;
    }
  }, 77);
}); 
buttonRight2.addEventListener('mouseup', () => {
  clearInterval(intervalId4);
})
buttonRight2.addEventListener('mouseleave', () => {
  clearInterval(intervalId4);
})
buttReset2.addEventListener('mousedown', () => {
  makeFiltersII()
})
buttonLeft3.addEventListener('mousedown', () => {
  intervalId6 = setInterval(() => {        
    if (currentZoom + 101 <= 300) {
      currentZoom++;
      positionDisplayIII.style.color = 'rgb(0,255,255)';
      positionDisplayIII.style.borderColor = 'rgb(0,255,255)';
      spanGuideI.style.left = `${(currentZoom)*1.7}px`;
      slider4.style.width = `${(currentZoom)*1.7}px`;
      zoomAmount += 1;
      applyFiltersIII(videoStore); // Aplicar los filtros actualizados
      positionDisplayIII.textContent = `${currentZoom + 100} %`;
      console.log(currentZoom)
    }
    if(currentZoom + 100 === 300){
      clearInterval(intervalId6);
      console.log(currentZoom)
    }
  }, 77);
});
buttonLeft3.addEventListener('mouseup', () => {
  clearInterval(intervalId6);
})
buttonLeft3.addEventListener('mouseleave', () => {
  clearInterval(intervalId6);
})
buttonRight3.addEventListener('mousedown', () => {
  intervalId7 = setInterval(() => {     
    if (currentZoom + 100 <= 300 && currentZoom + 99 >= 100) {
      currentZoom--;
      positionDisplayIII.style.color = 'rgb(0,255,255)';
      positionDisplayIII.style.borderColor = 'rgb(0,255,255)';
      spanGuideI.style.left = `${(currentZoom)*1.7}px`;
      slider4.style.width = `${(currentZoom)*1.7}px`;
      zoomAmount -= 1;
      applyFiltersIII(); // Aplicar los filtros actualizados
      positionDisplayIII.textContent = `${currentZoom + 100} %`;
      console.log(currentZoom)

    }
  }, 77);
});
buttonRight3.addEventListener('mouseup', () => {
  clearInterval(intervalId7);
})
buttonRight3.addEventListener('mouseleave', () => {
  clearInterval(intervalId7);
})
buttReset3.addEventListener('mousedown', () => {
  makeFiltersIII()
})
botVerde.addEventListener('mousedown', () => {
  verButtsInterfaz.style.pointerEvents = "auto"
  interfaz.style.display = 'none'
  container.style.visibility = 'visible'
  verButtsInterfaz.style.visibility = 'visible'
  button.style.visibility = 'visible'
  posicionPantalla.style.visibility = 'visible'
})
botNaran.addEventListener('mousedown', () => {
  verButtsInterfaz.style.pointerEvents = "auto"
  interfaz.style.display = 'none'
  container.style.visibility = 'visible'
  verButtsInterfaz.style.visibility = 'visible'
  button.style.visibility = 'visible'
  posicionPantalla.style.visibility = 'visible'
  slider1.style.width = '0'
  slider2.style.width = '0'
  slider3.style.width = '0'
  positionDisplay.textContent = `${'0'} - µpm`
  positionDisplay.style.borderColor = 'rgb(0,255,0)'  
  positionDisplay.style.color = 'rgb(0,255,0)'  
  button.style.left = '0'
  makeFilters()
})
function mostrarInterfaz() { 
  container.style.display = 'flex'
  verButtsInterfaz.style.display = 'flex'
  display.style.display = 'flex'
  button.style.display = 'flex'
  posicionPantalla.style.display = 'flex'
  slider1.style.width = '0'
  slider2.style.width = '0'
  slider3.style.width = '0'
  posicionPantalla.textContent = `${'0'} - µpm`
  posicionPantalla.style.borderColor = 'rgb(0,255,0)'  
  posicionPantalla.style.color = 'rgb(0,255,0)'  
  button.style.left = '0'
  container.style.zIndex = '3'
  verButtsInterfaz.style.zIndex = '3'
  button.style.zIndex = '3'
  posicionPantalla.style.zIndex = '3'
  display.style.zIndex = '3'
}
function eliminarEstilosInline(elemento) {
  var estilosAplicados = window.getComputedStyle(elemento)
  for (var i = 0; i < estilosAplicados.length; i++) {
    var propiedad = estilosAplicados[i];
    elemento.style[propiedad] = ""
  }
}
let contFriends = []
function animateVideoWidth(eltoHtml) {
  const videoElement = document.getElementById(eltoHtml); // Obtén el elemento de video
  const initialWidth = 60; // Ancho inicial en píxeles
  const targetWidth = 400; // Ancho final en píxeles
  const duration = 500; // Duración de la animación en milisegundos (0.5 segundos)
  let startTime;
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1); // Asegúrate de no exceder el 100% de progreso
    const newWidth = initialWidth + (targetWidth - initialWidth) * progress;
    videoElement.style.width = `${newWidth}px`; // Aplica el nuevo ancho al elemento de video
    if (progress < 1) {
      requestAnimationFrame(step); // Sigue animando hasta que se complete el tiempo
    }
  }
  requestAnimationFrame(step); // Comienza la animación
}
function animateVideoWidthII(eltoHtml) {
  const videoElement = document.getElementById(eltoHtml); // Obtén el elemento de video
  const initialWidth = 60; // Ancho inicial en píxeles
  const targetWidth = 800; // Ancho final en píxeles
  const duration = 500; // Duración de la animación en milisegundos (0.5 segundos)
  let startTime;
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1); // Asegúrate de no exceder el 100% de progreso
    const newWidth = initialWidth + (targetWidth - initialWidth) * progress;
    videoElement.style.width = `${newWidth}px`; // Aplica el nuevo ancho al elemento de video
    if (progress < 1) {
      requestAnimationFrame(step); // Sigue animando hasta que se complete el tiempo
    }
  }
  requestAnimationFrame(step); // Comienza la animación
}
function moveCursorToEnd(input) {
  // Obtener la longitud del texto en el input
  var textLength = input.value.length;
  // Mover el cursor al final del input
  input.setSelectionRange(textLength, textLength); 
} 
function trasladarOblicuos(){
  var contOblicuosXI = document.getElementById('agrupaOblicuos-XI');
  contOblicuosXI.classList.add('move-oblicuos');
  console.log('se AGREGO la clase')
}
function desactivarClicsPorUnTiempo(tiempoDuracion) {
  function bloquearClic(e) {
    e.stopPropagation();
    e.preventDefault();  }
  document.addEventListener('click', bloquearClic, true);
  setTimeout(function() {
    document.removeEventListener('click', bloquearClic, true);
  }, tiempoDuracion);
}
function bloquearClic(event) {
event.stopPropagation();
event.preventDefault();
}
const boton = document.getElementById('butt-Institucional');
function animarBoton() {
  if(screenWidth < 500){  
    boton.classList.add('big-button'); // Agregar clase para aumentar tamaño
    setTimeout(() => {
      boton.classList.remove('big-button'); 
    }, 400);
  }else{
    boton.classList.add('big-buttonII'); // Agregar clase para aumentar tamaño
    setTimeout(() => {
      boton.classList.remove('big-buttonII'); 
    }, 400);
  }  
}
const elements = document.querySelectorAll('.Bot-inicio7');
function changeColorToRedAndBack() {
  const elements = document.querySelectorAll('.secuence');
  elements.forEach((element, index) => {
  setTimeout(() => {
    element.style.backgroundColor = 'rgb(255,160,0)';
    // Verificar si es el último elemento
    if (index === elements.length - 1) {
      // Después de cambiar todos los elementos a rojo, programar el retorno del color original
      setTimeout(() => {
        elements.forEach((elem, idx) => {
          setTimeout(() => {
            elem.style.backgroundColor = '';
          }, idx * 25);
        });
      },25); // Retraso inicial de 100 milisegundos
    }
    }, index * 25);
  });
  changeColorRedAndBack() 
}
function changeColorRedAndBack() {
  const elements = document.querySelectorAll('.secuence');
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.style.backgroundColor = 'rgb(255,160,0)';
      // Verificar si es el último elemento
      if (index === elements.length - 1) {
        // Después de cambiar todos los elementos a rojo, programar el retorno del color original
        setTimeout(() => {
          elements.forEach((elem, idx) => {
            setTimeout(() => {
              elem.style.backgroundColor = '';
            }, idx * 25);
          });
        }, 25); // Retraso inicial de 25 milisegundos
      }
    }, index * 25);
  });
}
function dañarLogo() {
  var imagenAyudas = document.getElementById('imagen-ayudas')
  var imagenAyudasII = document.getElementById('imagen-ayudasII')

  imagenAyudas.style.display = 'none'
  setTimeout(() => {  
    imagenAyudasII.style.display = 'flex'      
  }, 77);
  setTimeout(() => {  
    imagenAyudasII.style.display = 'none' 
    imagenAyudas.style.display = 'flex'
  }, 350);  

}
let ocultarTimer = null; 
function mostrarElementos() {
  const contenedorElementos = document.getElementById('contenedorElementos');
  contenedorElementos.style.display = 'block';
}
let isMouseOver = false;
var conteElementos = document.getElementById('contenedorElementos');
conteElementos.addEventListener('mouseover', () => {
  isMouseOver = true;
});
conteElementos.addEventListener('mouseout', () => {
  isMouseOver = false;
});
function ocultarElementos(eltoID) {
  const contenedorElementos = document.getElementById('contenedorElementos');
  const segundoListado = document.getElementById('segundaLista');
  segundoListado.style.display = 'none'
  switch(eltoID){
    case 'miBoton':
      if (segundoListado.style.display === 'block') {
        return;
      }      
      ocultarTimer = setTimeout(() => {
        // Verifica si el ratón todavía está sobre el contenedor
        if (!contenedorElementos.matches(':hover')) {
          contenedorElementos.style.display = 'none';
        }
      }, 100)
    break;
    case 'contenedorElementos':
      if (segundoListado.style.display === 'none') {   
        ocultarTimer = setTimeout(() => {
          if (!contenedorElementos.matches(':hover')) {
            contenedorElementos.style.display = 'none';
          }
        }, 200)        
      }else{
        contenedorElementos.style.display = 'block';
        segundoListado.style.display = 'block';
      }
    break;
    case 'imagen-ayudas':
      const imagenAyudas = document.getElementById('imagen-ayudas');
      imagenAyudas.style.display = 'flex'
      if (conteElementos.style.display === 'block') { 
        setTimeout(() => {
          // Solo oculta el elemento si el ratón no está sobre él
          if (!isMouseOver) {
            conteElementos.style.display = 'none';
          }
        }, 200);
      }
    break;
    default:  
  }
} 
let barraI = document.getElementById('iniciador_1')
let barraII = document.getElementById('iniciador_2')
let barraIII = document.getElementById('iniciador_3')
let barraIV = document.getElementById('iniciador_4')
let barraV = document.getElementById('iniciador_5')
let barraVI = document.getElementById('iniciador_6')
let barraVII = document.getElementById('iniciador_7')
let barraVIII = document.getElementById('iniciador_8')
let barraIX = document.getElementById('iniciador_9')
let barraX = document.getElementById('iniciador_10')
let barra = document.getElementById('iniciador_11')
let barraXI = document.getElementById('animatedDiv')
let barraXII = document.getElementById('iniciador_11')
let pantallaI = document.getElementById('pantalla');
let pantallaII = document.getElementById('pantalla_II')
let pantallaIII = document.getElementById('pantalla_III')
let pantallaIV = document.getElementById('pantalla_IV')
let pantallaV = document.getElementById('pantalla_V')
let pantallaVI = document.getElementById('pantalla_VI')
let paternStreet = document.getElementById('equalizer')
let paternLittles = document.getElementById('padre')
let imgWallStreet = document.getElementById('cortina')
let imgWallStreetI = document.getElementById('cortina_II')  
let parentElements = document.getElementById('nicho_spans');
let wallSt = document.getElementById('wall_street')
let wallStI = document.getElementById('wall_street_II')
let secondMid = document.getElementById('second_half')
let firstMid = document.getElementById('first_half')
let alturaBarras = 77 
let topBarra = 320
let topBarraI = 300
let topBarraII = 270
let topBarraIII = 330
let topBarraIV = 290 
let heightBarra = 0
let counter = 0
let contador = 0
let contadorII = 0
let contadorIII = 0
let stopFunction = false
let stopWidth = true
const INTERVALOS = {
  intervaloI: null,
  intervaloII: null,
  intervaloIII: null,
  intervaloIV: null,
  intervaloV: null,
  intervaloXI: null,
  intervaloXII: null,
  intervaloXIII: null,
  intervaloXIV: null,
  intervaloXV: null,
  intervaloXXI: null,
  intervaloXXVI: null,
  intervaloXXVII: null,
  intervaloXXVIII: null,
  intervaloXXIX: null,
  intervaloXXX: null,
  intervaloXXXI: null,
  intervaloXXXII: null,
  intervaloXXXIII: null,
  intervaloXXXIV: null,
  intervaloXXXV: null,
  intervaloXXXVI: null,
  intervaloXXXVII: null,
  intervaloXXXVIII: null,
  intervaloXXXIX: null,
  intervaloXL: null,
  intervaloXLI: null,  //column_1 .lineas
  intervaloXLII: null,// column_3 .lineas
  intervaloXLIII: null, // column_1 .lineas
  intervaloXLIV: null,// column_1 .lineas
  intervaloXLV: null, //column_2 .column_spans
  intervaloXLVI: null,  // numeros equalizaer
};
const INTERVALOSHORIZONTALES = {
  intervaloXVI: null,
  intervaloXVII: null,
  intervaloXVIII: null,
  intervaloXIX: null,
  intervaloXX: null,
  intervaloXLVII: null, // iniciador_11
  intervaloXXII: null,
  intervaloXXIII: null,
  intervaloXXIV: null,
  intervaloXXV: null,
  intervaloXLVIII: null,
}
function barraInteligente() {
  var elementosExcluidos = ['first_half','buscador','search-form','conteneMantaut','conti-boton','links-inicialesI','links-iniciales']  
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  container1.style.display='grid'
  const elementos = document.querySelectorAll('nicho_spans .estilos'); 
  elementos.forEach(elemento => {
    elemento.removeAttribute('style');
  });

  removeInlineStyles(parentElements);   
  removeInlineStyles(imgWallStreet);
  removeInlineStyles(imgWallStreetI); 
  removeInlineStyles(firstMid)        
  removeInlineStyles(secondMid);
  removeInlineStyles(wallStI);
  removeInlineStyles(paternLittles);
  removeInlineStyles(paternStreet);
  clearAllIntervals(firstMid)  

  stopWidth = false
  resetearBarras()
  incrementoHeightXI()
  incrementoHeightXII()
  incrementoHeightXIII()
  incrementoHeightXIV()
  incrementoHeightXV()
}
function removeInlineStyles(element) {
  element.removeAttribute('style');
  const children = element.querySelectorAll('*');
  children.forEach(child => {
    child.removeAttribute('style');
  });
}
function incrementoHeightXI() {
  INTERVALOS.intervaloXXVI = setInterval(() => {  
    const animatedDiv = document.getElementById('animatedDiv');
    let currentTop = parseInt(window.getComputedStyle(animatedDiv).top);
    let currentHeight = parseInt(window.getComputedStyle(animatedDiv).height);    
    animatedDiv.style.top = (currentTop - 1) + 'px';
    animatedDiv.style.height = (currentHeight + 1) + 'px';
    if (currentTop <= 50) {
      clearInterval(INTERVALOS.intervaloXXVI);
      reduccionHeightXI()
      if(stopWidth === false){
        incrementoWidth()
        stopWidth = true; 
      }
    }
  }, 1);
}
function reduccionHeightXI() {
  INTERVALOS.intervaloXXXVII = setInterval(() => {  
    const animatedDiv = document.getElementById('animatedDiv');
    let currentTop = parseInt(window.getComputedStyle(animatedDiv).top);
    let currentHeight = parseInt(window.getComputedStyle(animatedDiv).height);    
    animatedDiv.style.top = (currentTop + 1) + 'px';
    animatedDiv.style.height = (currentHeight - 1) + 'px';
    if (currentTop >= 215) {
      clearInterval(INTERVALOS.intervaloXXXVII);
      incrementoHeightXI()
    }
  }, 1);
}
function incrementoHeightXII() {
  INTERVALOS.intervaloXXVIII = setInterval(() => {
    const animatedDiv = document.getElementById('animatedDivI');
    let currentTop = parseInt(window.getComputedStyle(animatedDiv).top);
    let currentHeight = parseInt(window.getComputedStyle(animatedDiv).height);    
    // Decrementar la posición top y aumentar height
    animatedDiv.style.top = (currentTop - 1) + 'px';
    animatedDiv.style.height = (currentHeight + 1) + 'px';
    if(currentTop <= 50){
      clearInterval(INTERVALOS.intervaloXXVIII);
      reduccionHeightXII()
    }
  }, 11);
} 
function reduccionHeightXII() {
  INTERVALOS.intervaloXXVIII = setInterval(() => {  
    const animatedDiv = document.getElementById('animatedDivI');
    let currentTop = parseInt(window.getComputedStyle(animatedDiv).top);
    let currentHeight = parseInt(window.getComputedStyle(animatedDiv).height);    
    animatedDiv.style.top = (currentTop + 1) + 'px';
    animatedDiv.style.height = (currentHeight - 1) + 'px';
    if (currentTop >= 215) {
      clearInterval(INTERVALOS.intervaloXXVIII);
      incrementoHeightXII()
    }
  }, 11);
}
function incrementoHeightXIII() {
  INTERVALOS.intervaloXXIX = setInterval(() => {
    const animatedDiv = document.getElementById('animatedDivII');
    let currentTop = parseInt(window.getComputedStyle(animatedDiv).top);
    let currentHeight = parseInt(window.getComputedStyle(animatedDiv).height);    
    // Decrementar la posición top y aumentar height
    animatedDiv.style.top = (currentTop - 1) + 'px';
    animatedDiv.style.height = (currentHeight + 1) + 'px';
    if(currentTop <= 50){
      clearInterval(INTERVALOS.intervaloXXIX);
      reduccionHeightXIII()
    }
  }, 22);
}
function reduccionHeightXIII() {
  INTERVALOS.intervaloXXXVIII = setInterval(() => {  
    const animatedDiv = document.getElementById('animatedDivII');
    let currentTop = parseInt(window.getComputedStyle(animatedDiv).top);
    let currentHeight = parseInt(window.getComputedStyle(animatedDiv).height);    
    animatedDiv.style.top = (currentTop + 1) + 'px';
    animatedDiv.style.height = (currentHeight - 1) + 'px';
    if (currentTop >= 215) {
      clearInterval(INTERVALOS.intervaloXXXVIII);
      incrementoHeightXIII()
    }
  }, 22);
}
function incrementoHeightXIV() {
  INTERVALOS.intervaloXXX = setInterval(() => {
    const animatedDiv = document.getElementById('animatedDivIII');
    let currentTop = parseInt(window.getComputedStyle(animatedDiv).top);
    let currentHeight = parseInt(window.getComputedStyle(animatedDiv).height);    
    // Decrementar la posición top y aumentar height
    animatedDiv.style.top = (currentTop - 1) + 'px';
    animatedDiv.style.height = (currentHeight + 1) + 'px';
    if(currentTop <= 50){
      clearInterval(INTERVALOS.intervaloXXX);
      reduccionHeightXIV()
    }
  }, 33);
}
function reduccionHeightXIV() {
  INTERVALOS.intervaloXXXIX = setInterval(() => {  
    const animatedDiv = document.getElementById('animatedDivIII');
    let currentTop = parseInt(window.getComputedStyle(animatedDiv).top);
    let currentHeight = parseInt(window.getComputedStyle(animatedDiv).height);    
    animatedDiv.style.top = (currentTop + 1) + 'px';
    animatedDiv.style.height = (currentHeight - 1) + 'px';
    if (currentTop >= 215) {
      clearInterval(INTERVALOS.intervaloXXXIX);
      incrementoHeightXIV()
    }
  }, 33);
}
function incrementoHeightXV() {
  INTERVALOS.intervaloXXXI = setInterval(() => {
    const animatedDiv = document.getElementById('animatedDivIV');
    let currentTop = parseInt(window.getComputedStyle(animatedDiv).top);
    let currentHeight = parseInt(window.getComputedStyle(animatedDiv).height);    
    // Decrementar la posición top y aumentar height
    animatedDiv.style.top = (currentTop - 1) + 'px';
    animatedDiv.style.height = (currentHeight + 1) + 'px';
    if(currentTop <= 50){
      clearInterval(INTERVALOS.intervaloXXXI);
      reduccionHeightXV()
    }
  }, 17);
}
function reduccionHeightXV() {
  INTERVALOS.intervaloXL = setInterval(() => {  
    const animatedDiv = document.getElementById('animatedDivIV');
    let currentTop = parseInt(window.getComputedStyle(animatedDiv).top);
    let currentHeight = parseInt(window.getComputedStyle(animatedDiv).height);    
    animatedDiv.style.top = (currentTop + 1) + 'px';
    animatedDiv.style.height = (currentHeight - 1) + 'px';
    if (currentTop >= 215) {
      clearInterval(INTERVALOS.intervaloXL);
      incrementoHeightXV()
    }
  }, 17);
}
function incrementoWidth() {
  imgWallStreetI.style.display = 'flex'
  stopWidth === true
  INTERVALOS.intervaloXXXII = setInterval(() => {
    let currentWidth = parseFloat(window.getComputedStyle(imgWallStreetI).width) / parseFloat(window.getComputedStyle(imgWallStreetI.parentElement).width) * 100;
    imgWallStreetI.style.width = (currentWidth + 1) + '%';

     if(currentWidth >= 99){
      clearInterval(INTERVALOS.intervaloXXXII);            
    }
  }, 1);
}
function incrementoHeight(barra, pantalla, intervaloVariable, intervaloTiempo) {
  parentElements.style.display = 'grid' //NICHO SPANS
  INTERVALOS[intervaloVariable] = setInterval(() => {
    let currentValue = parseInt(pantalla.textContent);
    let newValue = currentValue + 5773;
    pantalla.textContent = newValue;
    let alturaAct = parseInt(barra.style.height) || 0;
    barra.style.height = (alturaAct + 5) + 'px';
    let alturaAcumuladaBarra = alturaAct + 1;
    let alturaMaxima = 90;
    let iniciador = 100
    contador++

    if (parseInt (alturaAcumuladaBarra) >= alturaMaxima) {
      clearInterval(INTERVALOS[intervaloVariable]);
      if(barra.id === 'iniciador_1'){
        reduccionHeight(barraI, pantallaI,'intervaloI', 30);
      }
      if(barra.id === 'iniciador_2'){
        reduccionHeight(barraII, pantallaII,'intervaloII',30);
      }
      if(barra.id === 'iniciador_3'){
        reduccionHeight(barraIII, pantallaIII,'intervaloIII',30); 
      }
      if(barra.id === 'iniciador_4'){
        reduccionHeight(barraIV, pantallaIV,'intervaloIV',30); 
      }
      if(barra.id === 'iniciador_5'){
        reduccionHeight(barraV, pantallaV,'intervaloV',30);
    }
    } 
  }, intervaloTiempo);
}
function reduccionHeight(elementoBarra, elementoPantalla, intervaloVariable, intervaloTiempo) {
  INTERVALOS[intervaloVariable] = setInterval(() => {
    let currentValue = parseInt(elementoPantalla.textContent);
    let newValue = currentValue + 7328;
    elementoPantalla.textContent = newValue;
    let altura = parseInt(elementoBarra.style.height) || 0;
    elementoBarra.style.height = (altura - 4) + 'px';
    let alturaAcumuladaBarra = altura - 4;
    elementoPantalla.style.display = 'flex';
    if (parseInt(alturaAcumuladaBarra) <= 0) {
      clearInterval(INTERVALOS[intervaloVariable]);
        if(elementoBarra.id === 'iniciador_1'){
          incrementoHeight(barraI, pantallaI,'intervaloI', 25);
        }
        if(elementoBarra.id === 'iniciador_2'){
          incrementoHeight(barraII, pantallaII,'intervaloII', 25);
        }
        if(elementoBarra.id === 'iniciador_3'){
          incrementoHeight(barraIII, pantallaIII,'intervaloIII', 25);
        }
        if(elementoBarra.id === 'iniciador_4'){
          incrementoHeight(barraIV, pantallaIV,'intervaloIV', 25);
        }
        if(elementoBarra.id === 'iniciador_5'){
          incrementoHeight(barraV, pantallaV,'intervaloV', 25);
        }
    }
  }, intervaloTiempo);
}
let isAnimatingVI = false; 
let isAnimatingVII = false;
let isAnimatingVIII = false;  
let isAnimatingIX = false;   
let isAnimatingX = false;
let isAnimatingXI = false;
function incrementoHeightVII() {
  if (isAnimatingVII) return;
  isAnimatingVII = true;
  contadorII = 0;
  let r = 0;
  let g = 255;
  let b = 255;
  barraVII.style.display = 'flex';
  INTERVALOSHORIZONTALES.intervaloXVII = setInterval(() => {
      let alturaAct = parseFloat(barraVII.style.width) || 0;
      barraVII.style.width = (alturaAct + 1) + '%';
      let alturaAcumuladaBarraI = alturaAct + 1;
      if (alturaAcumuladaBarraI <= alturaBarras) {
          let progreso = alturaAcumuladaBarraI / alturaBarras;
          g = alturaAcumuladaBarraI + 1.4;
      }
      barraVII.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      if (alturaAcumuladaBarraI >= alturaBarras) {
          clearInterval(INTERVALOSHORIZONTALES.intervaloXVII);
          isAnimatingVII = false;
          reduccionHeightVII();
      }
  }, 6);
}
function reduccionHeightVII() {
  if (isAnimatingVII) return;
  isAnimatingVII = true;
  INTERVALOSHORIZONTALES.intervaloXXII = setInterval(() => {
    let altura = parseFloat(barraVII.style.width) || 0;
    barraVII.style.width = (altura - 1) + '%';
    let alturaAcumuladaBarraIII = altura - 1;
    if (parseInt(alturaAcumuladaBarraIII) <= 0) {             
      clearInterval(INTERVALOSHORIZONTALES.intervaloXXII);
      isAnimatingVII = false
      incrementoHeightVII();
    }
    if (alturaAcumuladaBarraIII <= 10 && !isAnimatingVIII) {             
      incrementoHeightVIII();
    }    
  }, 5); 
}
function incrementoHeightVIII() {  
  if (isAnimatingVIII) return;
  isAnimatingVIII = true;
  let r = 255; 
  let g = 0; 
  let b = 0; 
  INTERVALOSHORIZONTALES.intervaloXVIII = setInterval(() => {
    let alturaAct = parseFloat(barraVIII.style.width) || 0;
    barraVIII.style.width = (alturaAct + 1) + '%';
    let alturaAcumuladaBarraI = alturaAct + 1;
    if (alturaAcumuladaBarraI <= alturaBarras) {
      let progreso = alturaAcumuladaBarraI / alturaBarras;
      g = alturaAcumuladaBarraI + 1.4
    }
    barraVIII.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    barraVII.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    if (alturaAcumuladaBarraI >= 20 && !isAnimatingIX) {
      isAnimatingIX = false
      incrementoHeightIX();
    }
    if (alturaAcumuladaBarraI >=alturaBarras) {
      clearInterval(INTERVALOSHORIZONTALES.intervaloXVIII);
      isAnimatingVIII = false;
      reduccionHeightVIII();
    }
  }, 7);
}
function reduccionHeightVIII() {
  if (isAnimatingVIII) return;
  isAnimatingVIII = true;
  INTERVALOSHORIZONTALES.intervaloXXIII = setInterval(() => {
    let altura = parseFloat(barraVIII.style.width) || 0;
    barraVIII.style.width = (altura - 1) + '%';
    let alturaAcumuladaBarraIII = altura - 1;
    if (parseInt(alturaAcumuladaBarraIII) <= 0) {             
      clearInterval(INTERVALOSHORIZONTALES.intervaloXXIII);
      isAnimatingVIII = false
      incrementoHeightVIII();
    }    
  }, 5); 
}
function incrementoHeightIX() {
  if (isAnimatingIX) return;
  isAnimatingIX = true
  let r = 100; 
  let g = 50; 
  let b = 255; 
  INTERVALOSHORIZONTALES.intervaloXIX = setInterval(() => {
    let alturaAct = parseFloat(barraIX.style.width) || 0;
    barraIX.style.width = (alturaAct + 1) + '%';
    let alturaAcumuladaBarraI = alturaAct + 1;
    if (alturaAcumuladaBarraI <= alturaBarras) {
      let progreso = alturaAcumuladaBarraI / alturaBarras;
      b = alturaAcumuladaBarraI + 1.4 
    }
    barraVIII.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    barraIX.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    if (alturaAcumuladaBarraI >= 20 && !isAnimatingX) {
      isAnimatingX = false
      incrementoHeightX();
    }
   if (parseInt(alturaAcumuladaBarraI) >=alturaBarras) {
      clearInterval(INTERVALOSHORIZONTALES.intervaloXIX);
      isAnimatingIX = false
      reduccionHeightIX();
    }
  }, 8);
}
function reduccionHeightIX() {
  if (isAnimatingIX) return;
  isAnimatingIX = true
  INTERVALOSHORIZONTALES.intervaloXXIV = setInterval(() => {
    let altura = parseFloat(barraIX.style.width) || 0;
    barraIX.style.width = (altura - 1) + '%';
    let alturaAcumuladaBarraIII = altura - 1;
    if (parseInt(alturaAcumuladaBarraIII) <= 0) {             
      clearInterval(INTERVALOSHORIZONTALES.intervaloXXIV);
      isAnimatingIX = false;
      incrementoHeightIX();
    }    
  }, 5); 
}
function incrementoHeightX() {
  if (isAnimatingX) return;
  isAnimatingX = true;
  let r = 170;
  let g = 50; 
  let b = 255; 
  INTERVALOSHORIZONTALES.intervaloXX = setInterval(() => {
    let anchoAct = parseFloat(barraX.style.width) || 0;    
    barraX.style.width = (anchoAct + 1) + '%'; 
    let alturaAcumuladaBarraI = anchoAct + 1;    
      if (alturaAcumuladaBarraI <= alturaBarras) {
      let progreso = alturaAcumuladaBarraI / alturaBarras;
      b = alturaAcumuladaBarraI + 1.4 
      g = alturaAcumuladaBarraI + 1.4
    }         
    barraX.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    barraIX.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    if (alturaAcumuladaBarraI >= 20) {
    }
    if (parseInt(alturaAcumuladaBarraI) >=alturaBarras) {
      clearInterval(INTERVALOSHORIZONTALES.intervaloXX);
      isAnimatingX = false;
      reduccionHeightX();
    }
  }, 9);
}
function reduccionHeightX() {
  if (isAnimatingX) return;
  isAnimatingX = true;
  INTERVALOSHORIZONTALES.intervaloXXV = setInterval(() => {
    let altura = parseFloat(barraX.style.width) || 0;
    barraX.style.width = (altura - 1) + '%';
    let alturaAcumuladaBarraIII = altura - 1;
    if (parseInt(alturaAcumuladaBarraIII) <= 0) {             
      clearInterval(INTERVALOSHORIZONTALES.intervaloXXV);
      isAnimatingX = false
      incrementoHeightX()
    }    
  }, 5); 
}
function incrementoWidthI() { 
  INTERVALOS.intervaloXXXIII = setInterval(() => {
    imgWallStreet.style.display = 'flex'
    let currentHeight = parseInt(window.getComputedStyle(imgWallStreet).height);
    imgWallStreet.style.height = (currentHeight + 1) + 'px'
    if(parseInt(currentHeight) >= 103){
      clearInterval(INTERVALOS.intervaloXXXIII);
    }
  }, 9); 
}
function aumentarOverSize() {
  let overSize = document.getElementById('over_size');
  let overSide = document.getElementById('over_side');
  overSize.style.display = 'flex'
  overSide.style.display = 'flex'
  let actualHeight = parseInt(window.getComputedStyle(overSize).height);
  INTERVALOS.intervaloXXXIV = setInterval(() => {
    actualHeight += 10;
    overSize.style.height = actualHeight + 'px';
    overSide.style.width = actualHeight + 'px'
    console.log(actualHeight)
    console.log(window.innerHeight)
    if (actualHeight >= window.innerHeight) {
    clearInterval(INTERVALOS.intervaloXXXIV);
    resetStyles();
    console.log('Se han restablecido los estilos.');
    }
  },5);
}
function incrementarBlur() {
  let overSize = document.getElementById('wall_street_II');
  let overSizeI = document.getElementById('second_half');
  let overSizeII = document.getElementById('first_half');
  let overSizeIII = document.getElementById('cortina');
  let overSizeIV = document.getElementById('nicho_spans');
  let blurValue = 0;
  INTERVALOS.intervaloXXXV = setInterval(() => {
    blurValue += 1;
    overSize.style.filter = `blur(${blurValue}px)`; 
    overSizeI.style.filter = `blur(${blurValue}px)`;
    overSizeII.style.filter = `blur(${blurValue}px)`;
    overSizeIII.style.filter = `blur(${blurValue}px)`;
    overSizeIV.style.filter = `blur(${blurValue}px)`;
    if (blurValue >= 20) { // Ajusta este valor según sea necesario
      clearInterval(INTERVALOS.intervaloXXXV);
    }
  }, 100);
}
function eliminarBlur() {
  var elementsWithBlur = [
    document.getElementById('first_half'),
    document.getElementById('cortina'),
    document.getElementById('second_half'),
    document.getElementById('nicho_spans'),
    document.getElementById('wall_street_II')
  ];
  // Iteramos sobre los elementos y eliminamos el efecto blur
  elementsWithBlur.forEach(function(element) {
    if (element) {
      element.style.filter = 'none';
    }
  });
}
function resetStyles() {
  let elements = [
    document.getElementById('animatedDiv'),
    document.getElementById('first_half'),
    document.getElementById('cortina'),
    document.getElementById('second_half'),
    document.getElementById('nicho_spans'),
    document.getElementById('wall_street_II'),
    document.getElementById('over_size'),
    document.getElementById('over_side'),
  ];
  
  elements.forEach(el => {
    if (el) {
      el.style.height = '';
      el.style.width = '';
      el.style.display = '';
      el.style.visibility = '';
      el.style.filter = ''; 
      el.style.top = ''; 
      el.style.display = 'none'    
    }
  });
    imgWallStreetI.style.display = ''
    imgWallStreet.style.display = ''
  clearAllIntervals()
}
function stopLogic() {
  clearAllIntervals()
  stopFunction = true
}
function clearAllIntervals() {
    for (let key in INTERVALOS) {
      if (INTERVALOS[key]) {
        clearInterval(INTERVALOS[key]);
        INTERVALOS[key] = null;
      }
    }
}
function changeColorToGreen() {
  let index = 0;
  paternStreet.style.display = 'flex'
  clearInterval(INTERVALOS.intervaloXLI);  
  const lines = document.querySelectorAll('#column_1 .lineas');
  lines.forEach(line => {
  line.style.backgroundColor = '';
  });
  changeColorToGreenII();
  changeColorToNumbres();
  INTERVALOS.intervaloXLI = setInterval(() => {
    if (index < lines.length) {
      if (index < 8) {
        lines[index].style.backgroundColor = 'rgb(0, 255, 0)'; // Verde
      } else if (index < 11) {
        lines[index].style.backgroundColor = 'rgb(255, 235, 0)'; // Naranja
      } else if (index < 13) {
        lines[index].style.backgroundColor = 'rgb(255, 115, 0)'; // Naranja
      } else if(index < 14) {
        lines[index].style.backgroundColor = 'rgb(255, 0, 0)'; // Rojo
      }      
      index++;
    } else {
      clearInterval(INTERVALOS.intervaloXLI); 
      changeColorToTransparent();
    }
  }, 57);  
}
function changeColorToGreenII() {
  let index = 0;  
  const lines = document.querySelectorAll('#column_3 .lineas');
  clearInterval(INTERVALOS.intervaloXLII);
  INTERVALOS.intervaloXLII = setInterval(() => {
    if (index < lines.length) {
      if (index < 8) {
        lines[index].style.backgroundColor = 'rgb(0, 255, 0)'; // Verde
      } else if (index < 11) {
        lines[index].style.backgroundColor = 'rgb(255, 235, 0)'; // Naranja
      } else if (index < 13) {
        lines[index].style.backgroundColor = 'rgb(255, 115, 0)'; // Naranja
      } else if(index < 14) {
        lines[index].style.backgroundColor = 'rgb(255, 0, 0)'; // Rojo
      }      
      index++;
    } else {
      clearInterval(INTERVALOS.intervaloXLII); 
      changeColorToTransparentII()
    }
  }, 57);
}
function changeColorToNumbres() {
  let index = 0;  
  clearInterval(INTERVALOS.intervaloXLV);
  const numbers = document.querySelectorAll('#column_2 .column_spans')
  numbers.forEach(line => {
    line.style.backgroundColor = '';
  });
  INTERVALOS.intervaloXLV = setInterval(() => {
    if (index < numbers.length) {
      if (index < 8) {
        numbers[index].style.display = 'flex'
        numbers[index].style.color = 'rgb(0, 255, 0)'; // Verde
      } else if (index < 11) {
        numbers[index].style.display = 'flex'
        numbers[index].style.color = 'rgb(255,235, 0)'; // Naranja
      } else if (index < 13) {
        numbers[index].style.display = 'flex'
        numbers[index].style.color = 'rgb(255, 115, 0)'; // Rojo
      }else if (index < 14) {
        numbers[index].style.display = 'flex'
        numbers[index].style.color = 'rgb(255, 0, 0)'; // Rojo
      }
      index++;
    } else {
      clearInterval(INTERVALOS.intervaloXLV); 
      changeColorTransparent()
    }
  }, 57);
}
function changeColorToTransparent() {
  const lines = document.querySelectorAll('#column_1 .lineas');
  let index = lines.length - 1;  
  INTERVALOS.intervaloXLIII = setInterval(() => {
    if (index >= 0) {
      lines[index].style.backgroundColor = '';
      index--;
    } else {
      clearInterval(INTERVALOS.intervaloXLIII); 
      changeColorToGreen(); 
    }
  }, 50);
}
function changeColorToTransparentII() {
  const lines = document.querySelectorAll('#column_3 .lineas');
  let index = lines.length - 1;  
  INTERVALOS.intervaloXLIV = setInterval(() => {
    if (index >= 0) {
      lines[index].style.backgroundColor = '';
      index--;
    } else {
      clearInterval(INTERVALOS.intervaloXLIV); 
      changeColorToGreenII(); 
    }
  }, 50);
}
function changeColorTransparent() {
  const numbers = document.querySelectorAll('#column_2 .column_spans')
  let index = numbers.length - 1;  
  INTERVALOS.intervaloXLVI = setInterval(() => {
    if (index >= 0) {
      numbers[index].style.color = 'rgb(255,255,255)';
      index--;
    } else {
      clearInterval(INTERVALOS.intervaloXLVI); 
      changeColorToNumbres()
    }
  }, 50);
}
const INTERVAL = {
  intervalo1: null,
  intervalo2: null,
}
const barras = document.querySelectorAll('.barras');
let timeoutHandles = [];
let trackerStarted = false; 
const screenHeight = window.innerHeight;
function controlHeight(index) {
  if (index >= 0 && index < barras.length) {
    changeHeight(barras[index], 7, screenHeight * 0.12, incrementaAlto);
  }
}
function changeHeight(barra, step, limit, onComplete) {
  if (barra.interval) {
    clearInterval(barra.interval);
  }
  barra.interval = setInterval(() => {
    let alturaActual = parseInt(barra.style.height) || 0;
    barra.style.height = (alturaActual + step) + '%';
    barra.style.transition = 'height 0.03s linear';

    if ((step > 0 && alturaActual >= limit) || (step < 0 && alturaActual <= 0)) {
      clearInterval(barra.interval);
      if (onComplete) {
        onComplete(barra);
      }
    }
  }, 27);
}
function incrementaAlto(barra) {
  changeHeight(barra, -7, 0, reduccionAlto);
}
function reduccionAlto(barra) {
  changeHeight(barra, 7, screenHeight * 0.12, incrementaAlto);
}
function detenerAllInterval() {
  barras.forEach(barra => {
    if (barra.interval) {
      clearInterval(barra.interval);
    }
  });
}  
function resetStylesAndIntervals() {
  // Limpiar intervalos
  if (INTERVAL.intervalo1) {
      clearInterval(INTERVAL.intervalo1);
      INTERVAL.intervalo1 = null;
  }
  if (INTERVAL.intervalo2) {
      clearInterval(INTERVAL.intervalo2);
      INTERVAL.intervalo2 = null;
  }

  // Limpiar timeouts pendientes
  timeoutHandles.forEach(handle => clearTimeout(handle));
  timeoutHandles = []; // Vaciar la lista de identificadores de setTimeout

  // Resetear estilos de las barras
  barras.forEach(barra => {
      removeInlineStyles(barra);
      if (barra.interval) {
          clearInterval(barra.interval);
          barra.interval = null; // Asegurarse de que el intervalo se restablezca
      }
      barra.style.height = '0'; // Asegurarse de que la altura se restablezca
  });

  trackerStarted = false; // Reiniciar la bandera
}
function inicioTracker() {
  resetStylesAndIntervals();
  // Iniciar nuevos timeouts
  const delay = 122; // Retraso de 122ms entre cada llamada
  for (let i = 0; i < barras.length; i++) {
    let handle = setTimeout(() => {
      controlHeight(i);
    }, i * delay);
    timeoutHandles.push(handle); // Almacenar el identificador del setTimeout
  }
  trackerStarted = true; // Marcar que inicioTracker ha sido ejecutado
}
let counterI = 0;
const elementsB = document.querySelectorAll('#patern .irisado');
const originalColors = Array.from(elementsB).map(el => el.style.backgroundColor);
const elementsC = ['elem1', 'elem2', 'elem3', 'elem4', 'elem5', 'elem6', 'elem7', 'elem8', 'elem9', 'elem10', 'elem11', 'elem12', 'elem13', 'elem14', 'elem15', 'elem16', 'elem17', 'elem18', 'elem19', 'elem20', 'elem21', 'elem22', 'elem23', 'elem24'];
let index = 0
let lista = 0
let intervaloColors = null
let intervaloColorsI = null
function changeColors() {
  setTimeout(() => {
    intervaloColors = setInterval(() => {
      if (index < elementsC.length) {
        const element = document.getElementById(elementsC[index]);
        if (element) {
          element.style.backgroundColor = 'black';
        }
        index++;
      } else {
        clearInterval(intervaloColors);
        applyColors()
        index=0
      }
    }, 55);    
  }, 500);
}
function applyColors() {
  intervaloColorsI = setInterval(() => {
    if (lista < elementsC.length) {
      const element = document.getElementById(elementsC[lista]);
      if (element) {
        element.style.backgroundColor = ''; // Restablece al valor predeterminado del CSS
      }
      lista++;
    } else {
      clearInterval(intervaloColorsI);
      detenerCicodelia()
      changeColors()
      lista=0
    }
  }, 55);
}
function detenerCicodelia() {
  if (intervaloColors !== null) {
    clearInterval(intervaloColors);
    intervaloColors = null; // Resetea la variable para evitar problemas
  }
  if (intervaloColorsI !== null) {
    clearInterval(intervaloColorsI);
    intervaloColorsI = null; // Resetea la variable para evitar problemas
  }
}
function showMetrics(){
  setTimeout(() => {
    firstMovement()
  }, 7);
  setTimeout(() => {
    secondMovement()
  }, 907);
}   
function firstMovement(){
  stopWidth = false
  var slider1 = document.getElementById('first_half')
  var estilosAplicados = window.getComputedStyle(slider1)
  for (var i = 0; i < estilosAplicados.length; i++) {
    var propiedad = estilosAplicados[i];
    slider1.style[propiedad] = ""; // Establecer el estilo en una cadena vacía
  }

  clearAllIntervals(firstMid) 
  removeInlineStyles(imgWallStreetI); 
  incrementoHeightXI()  
  incrementoHeightXII()
  incrementoHeightXIII()
  incrementoHeightXIV() 
  incrementoHeightXV()
}
function secondMovement(){
  var padre = document.getElementById('nicho_spans');    
  if (padre) {
    padre.style.display = 'none';
      var hijos = padre.children;
    for (var i = 0; i < hijos.length; i++) {
      hijos[i].style.display = 'none';
    }
  }
  var elementosExcluidos = ['def2','general','first_half','second_half','nicho_spans','buscador','search-form','conteneMantaut','conti-boton','links-inicialesI','links-iniciales']  
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  container1.style.display='grid'
  clearInterval(INTERVALOS.intervaloI);
  clearInterval(INTERVALOS.intervaloII);
  clearInterval(INTERVALOS.intervaloIII);
  clearInterval(INTERVALOS.intervaloIV);
  clearInterval(INTERVALOS.intervaloV);
  clearInterval(INTERVALOS.intervaloXXXIII);
  removeInlineStyles(imgWallStreet); 

  function makeElementsVisibleSimultaneously(parentId1, parentId2) {
    let parentElement1 = document.getElementById(parentId1);
    let parentElement2 = document.getElementById(parentId2);

    parentElement1.style.display = 'grid';
    parentElement2.style.display = 'grid';

    let childElements1 = parentElement1.children;
    let childElements2 = parentElement2.children;

    let maxLength = Math.max(childElements1.length, childElements2.length);

    let intervaloNichos = null

    for (let i = 0; i < maxLength; i++) {
       intervaloNichos = setInterval(() => {
        if (i < childElements1.length) {
          childElements1[i].style.display = 'inline-block';
          childElements1[i].style.visibility = 'visible';
      }
      if (i < childElements2.length) {
          childElements2[i].style.display = 'inline-block';
          childElements2[i].style.visibility = 'visible';
      }        
      }, 100);
    }
  }

  // Hacer visibles los hijos de 'second_half' y 'nicho_spans' simultáneamente
  makeElementsVisibleSimultaneously('second_half', 'nicho_spans');

  incrementoHeight(barraI, pantallaI,'intervaloI',1);
  incrementoHeight(barraII, pantallaII,'intervaloII',15);
  incrementoHeight(barraIII, pantallaIII,'intervaloIII',25);
  incrementoHeight(barraIV, pantallaIV,'intervaloIV',35);
  incrementoHeight(barraV, pantallaV,'intervaloV',45)  
  incrementoWidthI()
}  
function thirdMovement(){
  var slider1 = document.getElementById('wall_street_II')
  var estilosAplicados = window.getComputedStyle(slider1)
  for (var i = 0; i < estilosAplicados.length; i++) {
    var propiedad = estilosAplicados[i];
    slider1.style[propiedad] = ""; // Establecer el estilo en una cadena vacía
  }

  isAnimatingVII = false;
  document.getElementById('iniciador_7').style.width = '1px'
  for (let key in INTERVALOSHORIZONTALES) {
    if (INTERVALOSHORIZONTALES[key]) {
      clearInterval(INTERVALOSHORIZONTALES[key]);
      INTERVALOSHORIZONTALES[key] = null;
    }
  }    
  contadorII = 0;
  isAnimatingVII = false;
  isAnimatingVIII = false;
  isAnimatingIX = false;
  isAnimatingX = false;
  incrementoHeightVII()
}
function fourthMovement(){
var elementosExcluidos = ['def2','general','first_half','second_half','nicho_spans','wall_street_II','equalizer','buscador','search-form','cortina','conteneMantaut','conti-boton','links-inicialesI','links-iniciales'];
for (var i = 0; i < allContenedores.length; i++) { 
  var elemento = document.getElementById(allContenedores[i])  
  if (elemento) {
    elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
  }
}
container1.style.display='grid'
var padre = document.getElementById('equalizer');    
if (padre) {
  padre.style = ''
    var hijos = padre.children;
  for (var i = 0; i < hijos.length; i++) {
    hijos[i].style = ''
  }
}
changeColorToGreen()
}
function fifthMovement(){
  var elementosExcluidos = ['def2','general','first_half','second_half','nicho_spans','wall_street_II','equalizer','padre','buscador','search-form','cortina','conteneMantaut','conti-boton','links-inicialesI','links-iniciales'];
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  container1.style.display='grid'
  var slider1 = document.getElementById('padre')
  var estilosAplicados = window.getComputedStyle(slider1)
  for (var i = 0; i < estilosAplicados.length; i++) {
    var propiedad = estilosAplicados[i];
    slider1.style[propiedad] = ""; // Establecer el estilo en una cadena vacía
  }
  inicioTracker()
}
function sixthMovement(){
  var elementosExcluidos = ['def2','general','first_half','second_half','nicho_spans','wall_street_II','equalizer','padre','patern','buscador','search-form','cortina','conteneMantaut','conti-boton','links-inicialesI','links-iniciales'];
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  container1.style.display='grid'
  var padre = document.getElementById('patern');    
  if (padre) {
    padre.style = ''
      var hijos = padre.children;
    for (var i = 0; i < hijos.length; i++) {
      hijos[i].style = ''
    }
  }
  document.getElementById('patern').style.display = 'grid'
  changeColors()
}
let pos = 0;
let step = 3;
const speed = 1;
const intervals = {
  derecha: null,
  baja: null,
  izquierda: null,
  arriba: null
};
function stopAllIntervals() {
  for (let key in intervals) {
    if (intervals[key] !== null) {
      clearInterval(intervals[key]);
      intervals[key] = null;
    }
  }
}
function moveElement(element, parent) {
  stopAllIntervals();
  let positionParent = parent.clientWidth - element.clientWidth;
  intervals.derecha = setInterval(() => {
      pos += step;
      element.style.left = pos + 'px';
      if (pos >= parent.clientWidth - element.clientWidth) {
          clearInterval(intervals.derecha);
          pos = 0;

          intervals.baja = setInterval(() => {
              pos += step;
              element.style.top = pos + 'px';
              if (pos >= parent.clientHeight - element.clientHeight) {
                  clearInterval(intervals.baja);
                  pos = 0;

                  intervals.izquierda = setInterval(() => {
                      positionParent -= step * 2;
                      element.style.left = positionParent + 'px';
                      if (positionParent <= 0) {
                          clearInterval(intervals.izquierda);
                          positionParent = parent.clientHeight - element.clientHeight;
                          pos = parent.clientHeight - element.clientHeight;

                          intervals.arriba = setInterval(() => {
                              pos -= step;
                              element.style.top = pos + 'px';
                              if (pos <= 0) {
                                  clearInterval(intervals.arriba);
                                  pos = 0;
                                  moveElement(element, parent); // Llama de nuevo a la función para crear un bucle
                              }
                          }, speed * 2);
                      }
                  }, speed * 2);
              }
          }, speed * 2);
      }
  }, speed * 2);
}
document.getElementById('butt-sitio').addEventListener('click', () => {
  var elementosExcluidos = ['buscador','search-form','sitema-humedad','links-inicialesI','links-iniciales']
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  container1.style.display='grid' 
  document.getElementById('butt-sitio').style.display='none'
  abrirSeccionContinua()
})
function isVisible(element) {
  const style = window.getComputedStyle(element);
  return (
    style.display !== 'none' &&
    style.visibility !== 'hidden' &&
    element.offsetWidth > 0 &&
    element.offsetHeight > 0
  );
}
function cerrarVentanasII(){
  let botonVuelve = document.querySelector('#butt-links-II')
  botonVuelve.style.left = ''
  botonVuelve.style.top = ''
  if(screenWidth < 500){
    let contFreno = document.getElementById('grilla-frena');
    let lubricantes = document.getElementById('lubricantes'); 
    let rodamientos = document.getElementById('inicio');
    let rodillos = document.getElementById('abuelo-cuadricula')
    let vidManometros = document.getElementById('vid_festo')
    let padreManometros = document.getElementById('padre-1')
    let vidZapatas = document.getElementById('padre-2')
    let vidBailarina = document.getElementById('contImaginario')
    let rugosos = document.getElementById('contImaginario-II')
    let instrucciones = document.getElementById('puesta-punto')
    let imgsDurezas = document.getElementById('grilla-durezas')
    if (isVisible(lubricantes)) {
      LubricaDesbobinador('btn1');
    }
    if (isVisible(contFreno)) {
      abrirSeccionContinua('pantalla-inicial');
    }
    if (isVisible(rodamientos)) {
      abrirSeccionContinua('pantalla-inicial');
    }
    if (isVisible(rodillos)) {
      abrirSeccionContinua('pantalla-inicial'); 
    }
    if (isVisible(padreManometros)) {
      listaEntrenamientosII('archivo')
    }
    if (isVisible(vidManometros)) {
      imagenesPasoApaso('contImgEntrenos','','contBotInfeed','imag1','link1','control-neumatico')
    }
    if (isVisible(vidZapatas)) {
      listaEntrenamientosII('archivo')
    }
    if (isVisible(vidBailarina)) {
      listaEntrenamientosII('archivo')
    }
    if (isVisible(rugosos)) {
      listaEntrenamientosII('archivo')
    }
    if (isVisible(instrucciones)) {
      listaEntrenamientosII('archivo')
    }
    if (isVisible(imgsDurezas)) {
      abrirSeccionContinua('pantalla-inicial'); 
    }
  }else{
    var elementosExcluidos = ['buscador','search-form','conteneMantaut','conti-boton','links-inicialesI','links-iniciales','largoImpresion','contImgEntrenos','linksMA','linkLis']  
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i])  
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
      }
    }
    container1.style.display='grid'
    document.getElementById('troubleshooting').style.display='grid'
    const ventanas = document.querySelectorAll('.ventana');
    for (let i = 0; i < ventanas.length; i++) {
      ventanas[i].style.display = 'none';
    }
  }
}
function cerrarPilares(){
  document.getElementById('linkListI').style.display='none'
  document.getElementById('linkList').style.display='none'
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
      elemento.style.filter = '';
    }
  }
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
      elemento.style.filter = '';
    }
  }
}
function abrirAyudas(){
  let padreAyudas = document.getElementById('pre-prensa')
  let ayudas = document.getElementById('ventana-lateral')
  padreAyudas.style.display='flex'
  ayudas.style.display='block'
  desenrrollarVentana()
}
function desenrrollarVentana() {
  let anchoVentana = document.getElementById('ventana-lateral');
  anchoVentana.style.width = '';
  // Obtener el ancho inicial en vw
  let anchoInicial = parseFloat(window.getComputedStyle(anchoVentana).width) / window.innerWidth * 100;
  let anchoFinal = 94.4;
  let duracion = 1000;
  let startTime = null;
  if(screenWidth < 500){
    function animar(timestamp) {
      if (!startTime) startTime = timestamp;
      let tiempoTranscurrido = timestamp - startTime;
      let progreso = tiempoTranscurrido / duracion;
      let easeOutProgress = 1 - Math.pow(1 - progreso, 3);
      let anchoActual = anchoInicial + (anchoFinal - anchoInicial) * easeOutProgress;
      anchoVentana.style.width = anchoActual + 'vw';
      if (tiempoTranscurrido < duracion) {
        requestAnimationFrame(animar);
      } else {
        anchoVentana.style.width = anchoFinal + 'vw';
      }
    }
    requestAnimationFrame(animar);  
  }else{
    let anchoFinal = 23;
    function animar(timestamp) {
      if (!startTime) startTime = timestamp;
      let tiempoTranscurrido = timestamp - startTime;
      let progreso = tiempoTranscurrido / duracion;
      let easeOutProgress = 1 - Math.pow(1 - progreso, 3);
      let anchoActual = anchoInicial + (anchoFinal - anchoInicial) * easeOutProgress;
      anchoVentana.style.width = anchoActual + 'vw';
      if (tiempoTranscurrido < duracion) {
        requestAnimationFrame(animar);
      } else {
        anchoVentana.style.width = anchoFinal + 'vw';
      }
    }
    requestAnimationFrame(animar);
  }
  moverVideoDerecha()
}
function moverVideoDerecha() {
  if(screenWidth > 500){
    const videos = document.querySelectorAll('.vid-prepress');
    videos.forEach(function(video) {
        if (video.style.display === 'flex') {
          video.classList.add('move-video-right')
        }
    });
  }
}
document.getElementById('ventana-lateral').addEventListener('mouseleave',() =>{
  const videos = document.querySelectorAll('.vid-prepress');
  videos.forEach(function(video) {
    if (video.style.display === 'flex') {
      video.classList.remove('move-video-right')
    }
  });
})
function reponerEstilos(){
  let padreSolucionador = document.getElementById('troubleshooting')
  padreSolucionador.style.gridTemplateColumns = '';
  padreSolucionador.style.gridTemplateRows = '';
  padreSolucionador.style.left=''
  document.getElementById('padre-1').style.top=''
  document.getElementById('padre-1').style.left=''
  document.getElementById('links-inicialesI').style.left=''
  document.getElementById('links-iniciales').style.left=''
  document.getElementById('vid01').style.left=''
  document.getElementById('contenedor_padre_3').style.top=''
  document.getElementById('contenedor_padre_2').style.top=''
  document.getElementById('contenedor_padre').style.top=''
  document.getElementById('butt-links-II').style.top=''
  document.getElementById('butt-links-II').style.left=''
  padreVideos.classList.remove('move_vid_pre')
  padreVideos.classList.remove('move-vid-dens-up')
  let padreImgs = document.getElementById('imgs-prepress')
  let blurValue = 0
  padreImgs.style.filter=`blur(${blurValue}px)`;
  let padreAyudas = document.getElementById('ventana-lateral')
  padreAyudas.style.width=''
  padreManometro.style.height=''
  padreManometro.style.left=''
  if(document.body.style.zoom != "100%"){document.body.style.zoom = "100%"}
  padreVideos.classList.remove('move_video');
  padreTres.classList.remove('move_container')
  padreTres.classList.remove('move_containerI')
  padreTres.classList.remove('move_containerII') 
  padreUno.classList.remove('move_container')
  padreUno.classList.remove('move_containerI')
  padreUno.classList.remove('move_containerII')
  const vidPrePre = padreVideos.querySelectorAll('*');
  vidPrePre.forEach(child => {
    child.classList.remove('move_vid_pre')
  });
  const dias = document.querySelectorAll(".dia");
  dias.forEach((dia) => {
    dia.removeAttribute("style");
    dia.style.display='none'
  });
  meses.forEach((mes) => {
    meses.forEach((m) => {
      m.style.backgroundColor = "";
      m.style.color = "";
    });
  
  });  
  document.getElementById('month-display').textContent=''
  document.getElementById('month-display').classList.remove('move-month')
  if(document.getElementById('dia')){document.getElementById('dia').style.display='none'}

  var intervalos = [intervaloActualizar, intervaloActualizarII];
  intervalos.forEach(function(intervalo) {
    if (intervalo) {
      clearInterval(intervalo);
    }
  });
  
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
      elemento.style.filter = '';
    }
  }
}
const targetDiv = document.querySelector('.img1');
const contextMenu = document.getElementById('context-menu');
function showContextMenu(x, y) {
  contextMenu.style.left = `${x - 5}px`;
  contextMenu.style.top = `${y - 5}px`;
  contextMenu.style.display = 'block';
}
// Menú en PC
targetDiv.addEventListener('click', (event) => {
  if(screenWidth > 500){
    contextMenu.style.display='block'
    contextMenu.style.position='absolute'
    contextMenu.style.top='27vh'
    contextMenu.style.left='82vw'
    contextMenu.style.width='10vw'
  }else{
    showContextMenu(event.clientX, event.clientY);
  }
}); 
contextMenu.addEventListener('mouseleave', () => {
  contextMenu.style.display = 'none';
});
// En moviles
let shouldShowMenu = true;
targetDiv.addEventListener('touchstart', function(event) {
  shouldShowMenu = true;
  setTimeout(() => {
    if (shouldShowMenu) {
      event.preventDefault();
      const touch = event.touches[0];
      showContextMenu(touch.clientX, touch.clientY);
    }
  }, 0);
}, { passive: true });
document.addEventListener('touchstart', (event) => {
  if (!contextMenu.contains(event.target) && !targetDiv.contains(event.target)) {
    contextMenu.style.display = 'none';
    shouldShowMenu = false;
  }
  let vinculos = document.getElementById('contenedorElementos')
  if(vinculos.style.display !== 'block'){
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i]) 
      if (elemento) {
        elemento.style.filter = 'none';
      }
    }
  }
});
const elementosPrePren = document.querySelectorAll('#contenedorElementos .conte-listado, #contenedorElementos .listado');
  elementosPrePren.forEach(elemento => {
    elemento.addEventListener('mouseover', () => {
      elemento.classList.add('hover-style'); // Agregar la clase al elemento actual
    });
    elemento.addEventListener('mouseout', () => {
      elemento.classList.remove('hover-style'); // Quitar la clase cuando el mouse salga
    });
});
let listadoPrePrensa = document.getElementById('contenedorElementos')
listadoPrePrensa.addEventListener('mouseleave',() =>{
  listadoPrePrensa.style.display='none'
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);  
    if (elemento) {
      elemento.style.removeProperty('filter');
    }
  }
})
let subMenu = document.getElementById('segundaLista')
subMenu.addEventListener('mouseleave',() =>{
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);  
    if (elemento) {
      elemento.style.removeProperty('filter');
    }
  }
  subMenu.style.display='none'
})
function muestraMenu(){
  document.getElementById('segundaLista').style.display='block'
}
let intervalEnEjecucion = false;

function openGraphics(elementId){
  if(turnBlock === false){
    turnBlock = true
  }
  desactivarClick(['.graphs-lines'])
  if(screenWidth > 500){
    var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','contLineas','iconos','conte-secundario']
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i])
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
      }   
    }
    container1.style.display='grid'
    desactivarClicsPorUnTiempo(1500)
    document.getElementById('contLineas').style.backgroundColor = 'rgb(30,30,30)';
    document.getElementById('month-display').textContent = ''
    const month = document.querySelectorAll('.mes')
    month.forEach((mes) => {
      mes.style.backgroundColor = ''
      mes.style.color = ''
    })
    const elementos = document.querySelectorAll('.graphs-lines');
    elementos.forEach((miElemento) => {
      if (miElemento.id === elementId) {
        miElemento.style.display = 'block';
        miElemento.style.left = '16vw';
        miElemento.style.top = '15vh';
        miElemento.style.backgroundColor='rgb(0,0,17)'
        miElemento.style.borderRadius = '10px';
      }
    });
    if(elementId === 'canvasContainer9'){
      setTimeout(() => {
        mostrarSecuencialmente()
      }, 1400);
    }    
    if(elementId === 'canvasContainer7'){
      const elementosDia = document.querySelectorAll('.dia');
      elementosDia.forEach((elemento) => {
        elemento.removeAttribute('style');
      });
      setTimeout(() => {
        document.getElementById('month-display').style.display='flex'
        document.getElementById('meses').style.display='grid'
        document.getElementById('calendario-mes').style.display='grid'
        iniciarAnimacionDias()
      }, 1400);
      setTimeout(() => {
        desvanecerDiasSimultaneamenteConIntervalo()
      }, 1400);
    }
    
    setTimeout(() => {   
      if(turnGraphic === false){
        turnGraphic = true
        moverElementos(["conte-butts-graphs"], 27, -7);
      }
    }, 1300);
  }else {
    var elementosExcluidos = ['buscador','search-form','links-inicialesI','links-iniciales','contLineas-II','iconos','conte-secundario','MiGrafica9-II']
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i])
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
      }
    }
    container1.style.display='grid'
    document.getElementById('contenedor-2').style.display='none'

    const elementosLi = document.querySelectorAll("#metas-diarias li")
    elementosLi.forEach((li, index) => {
      setTimeout(() => {
        li.classList.remove("visible");
      }, index * 1);
    });  
    
    const elementos = document.querySelectorAll('.graphs-employee');
    elementos.forEach((miElemento) => {
      if (miElemento.id === elementId) {
        miElemento.style.border='none'
        miElemento.style.display = 'block';
        miElemento.style.left = '33vw';
        miElemento.style.top = '21vh';        
        miElemento.style.height='20vh'
        miElemento.style.backgroundColor='rgb(0,0,17)'
      }
    });
    desactivarClicsPorUnTiempo(1500)
    if(elementId === 'canvasContainer9-II'){
      setTimeout(() => {
        mostrarSecuencialmente()
      }, 1400);
    } 
    if(elementId === 'canvasContainer7-II'){
      setTimeout(() => {
        document.getElementById('month-display').style.display='flex'
        document.getElementById('meses').style.display='grid'
        document.getElementById('calendario-mes').style.display='grid'
        const dias = document.querySelectorAll(".dia");
        let index = 0;        
        const interval = setInterval(() => {
          if (index < dias.length) {  
            dias[index].style.display = "flex";
            dias[index].textContent = '';
            index++;
          } else {
            clearInterval(interval);
          }
        }, 17);
        
      }, 1400);
      setTimeout(() => {
        desvanecerDiasSimultaneamenteConIntervalo()
      }, 1400);
    } 
  }
}
function iniciarAnimacionDias() {
  if (intervalEnEjecucion) return;
  setTimeout(() => {
    intervalEnEjecucion = true; //intervalo en ejecución
  }, 50);
  setTimeout(() => {
    const dias = document.querySelectorAll(".dia");
    let index = 0;
  
    const interval = setInterval(() => {
      if (index < dias.length) {
        dias[index].style.display = "flex";
        dias[index].textContent = '';
        index++;
      } else {
        clearInterval(interval);
        intervalEnEjecucion = false; // Restablecer intervalo
      }
    }, 17);
  }, 100);
}
function mostrarSecuencialmente() {
  const padreElementos = document.getElementById('metas-diarias')
  const elementos = document.querySelectorAll("#metas-diarias li")

  if(screenWidth < 500){
    padreElementos.style.top = '40vh'
    padreElementos.style.left = '23vw'
  }else{
    padreElementos.style.left = '41vw';
  }

  elementos.forEach((li, index) => {
  setTimeout(() => {
      li.classList.remove("visible");
    }, index * 1);
  });
  setTimeout(() => {
    padreElementos.style.display = 'flex'
  }, 250);

  setTimeout(() => {
    elementos.forEach((li, index) => {
      setTimeout(() => {
        li.classList.add("visible");
      }, index * 20); 
    });
  }, 300);
  
}
const meses = document.querySelectorAll("#meses .mes");
const calendarioMes = document.getElementById("calendario-mes");
const monthDisplay = document.getElementById("month-display");
const diasPorMes = {
  Enero: 31,
  Febrero: 28,
  Marzo: 31,
  Abril: 30,
  Mayo: 31,
  Junio: 30,
  Julio: 31,
  Agosto: 31,
  Septiembre: 30,
  Octubre: 31,
  Noviembre: 30,
  Diciembre: 31,
};
function mostrarCalendario(mesSeleccionado) {
  const diasDelMes = diasPorMes[mesSeleccionado];
  calendarioMes.innerHTML = ""; // Limpia el calendario para mostrar el mes seleccionado

  // Actualizar el texto del mes en el elemento 'month-display'
  monthDisplay.textContent = mesSeleccionado;

  let semana = document.createElement("div");
  semana.className = "semana";
  
  for (let dia = 1; dia <= diasDelMes; dia++) {
    const diaElemento = document.createElement("div");
    diaElemento.className = "dia";
    diaElemento.textContent = dia;
    diaElemento.style.display = 'flex'; // Asegurar que se muestre como 'flex'
    semana.appendChild(diaElemento);

    if (dia % 7 === 0) {
      calendarioMes.appendChild(semana);
      semana = document.createElement("div");
      semana.className = "semana";
    }
  }

  // Añade la última semana si tiene días restantes
  if (semana.children.length > 0) {
    calendarioMes.appendChild(semana);
  }

  // Rellena la última semana con días vacíos
  while (semana.children.length < 7) {
    const diaVacio = document.createElement("div");
    diaVacio.className = "dia vacio";
    diaVacio.style.display = 'flex'; // Asegurar que también los días vacíos tengan display 'flex'
    semana.appendChild(diaVacio);
  }
  asignarEventosDias();
}
let nuevoElemento;
meses.forEach((mes) => {
  mes.addEventListener("click", function () {
    document.getElementById('tareas-lubricacion').style.display='none'
    document.getElementById('tareas-limpieza').style.display='none'
    document.getElementById('actividad-lubricacion').style.display='none'
    document.getElementById('actividad-limpieza').style.display='none'
    meses.forEach((m) => {
      m.style.backgroundColor = "";
      m.style.color = "";
    });
    document.getElementById('actividad-lubricacion').style.backgroundColor=''
    document.getElementById('actividad-lubricacion').style.color=''
    document.getElementById('actividad-limpieza').style.backgroundColor=''
    document.getElementById('actividad-limpieza').style.color=''

    document.getElementById('actividad-limpieza').style.display='none'

    mes.style.display = "flex";
    mes.style.backgroundColor = "#ccc";
    mes.style.color = "rgb(0,0,20)";
    // Llama a la función para mostrar el calendario del mes seleccionado
    mostrarCalendario(mes.textContent);
    setTimeout(() => {
      mostrarSemanasSecuencialmente()
    }, 50);
  });

}); 
function mostrarSemanasSecuencialmente() {
  const semanas = document.querySelectorAll(".semana"); // Selecciona todas las semanas
  let index = 0; // Índice para rastrear la semana actual

  // Inicializa la opacidad de todas las semanas a 0 (invisibles)
  semanas.forEach((semana) => {
    semana.style.opacity = "0";
  });

  // Función que se ejecutará a intervalos regulares
  const interval = setInterval(() => {
    if (index < semanas.length) {
      semanas[index].style.transition = "opacity 0.5s"; // Añade una transición de opacidad
      semanas[index].style.opacity = "1"; // Cambia la opacidad a 1 para mostrar la semana
      index++;
    } else {
      clearInterval(interval); // Detiene el intervalo cuando todas las semanas son visibles
    }
  }, 33); // Intervalo de 77 milisegundos
}
function asignarEventosDias() {
  const day = document.getElementById('dia')
  const dias = document.querySelectorAll(".dia");
  const displayLimpieza = document.getElementById('actividad-limpieza')
  const displayLubrica = document.getElementById('actividad-lubricacion')
  desactivarClicsPorUnTiempo(500)
  if(screenWidth < 500){  
    dias.forEach((dia, index) => {
      dia.addEventListener("click", () => {
        dias.forEach((d) => {
          d.style.display = "none"; 
        });
        dia.style.display = "flex";
        dia.style.position = 'fixed';
        dia.style.borderRadius = '0 6px 6px 0';
        dia.style.top = '45.2vh';
        dia.style.left = '68vw';
        day.style.display='flex'
        document.getElementById('month-display').classList.add('move-month')
        if (index === 2) {
          displayLubrica.style.display='flex'
          displayLimpieza.style.display='flex'
        }
      });
    });
  }else{
    dias.forEach((dia, index) => {
      dia.addEventListener("click", () => {
        dias.forEach((d) => {
          d.style.display = "none"; 
        });
        dia.style.display = "flex";
        dia.style.position = 'fixed';
        dia.style.borderRadius = '0 6px 6px 0';
        dia.style.top = '20vh';
        dia.style.left = '70vw';
        dia.style.height='4vh'
        dia.style.width='5vw'
        day.style.display='flex'
        document.getElementById('month-display').classList.add('move-month')
        if (index === 2) {
          document.getElementById('actividad-lubricacion').style.display='flex' 
          document.getElementById('actividad-limpieza').style.display='flex'
        }
      });
    });
  }  
} 
const activLimpieza = document.getElementById('tareas-limpieza');  
const activLubricacion = document.getElementById('tareas-lubricacion');
actividadesLubricacion.addEventListener('click',() =>{
  activLimpieza.style.display='flex'
  actividadesLimpieza.style.backgroundColor=''
  actividadesLimpieza.style.color=''
  activLimpieza.classList.remove('move-tareas-limpieza')
  activLubricacion.style.display='flex'
  actividadesLubricacion.style.backgroundColor='rgb(0,255,0)'
  actividadesLubricacion.style.color='rgb(33,0,0)'
  actividadesLimpieza.style.display='flex'
  setTimeout(() => {
    animateScroll('tareas-lubricacion')
  }, 500); 
})
actividadesLimpieza.addEventListener('click', () => {
  activLimpieza.style.left=''
  activLimpieza.style.display='flex'
  actividadesLimpieza.style.backgroundColor = 'rgb(0,255,0)'; // boton
  actividadesLimpieza.style.color = 'rgb(33,0,0)';
  actividadesLubricacion.style.backgroundColor='' // boton
  actividadesLubricacion.style.color=''  
  setTimeout(() => {
    activLimpieza.classList.add('move-tareas-limpieza'); // cajon  
  }, 100); 
  setTimeout(() => {
    animateScroll('tareas-limpieza');    
  }, 500); 
});
function desvanecerDiasSimultaneamenteConIntervalo() {
  const dias = document.querySelectorAll(".dia");
  intervaloGlobal = setInterval(() => {
    dias.forEach((dia) => {
      dia.style.opacity = '0';
    });
    setTimeout(() => {
      dias.forEach((dia) => {
        dia.style.opacity = '1';
      });
    }, 577);
  }, 1154);

}
const dias = document.querySelectorAll('.dia');
function mostrarDiaEspecifico(posicion) {
  dias.forEach((dia) => {
    dia.style.display = 'none';
  });
  if (posicion >= 0 && posicion < dias.length) {
    dias[posicion].style.display = 'block';
  } else {
    console.error('Posición fuera del rango de elementos disponibles.');
  }
}
const elemento = document.getElementById('padre-naranja');
let desplazamientoX = 0;
let desplazamientoY = 0;
let activo = false;
// Iniciar el arrastre cuando se toca el elemento
elemento.addEventListener('touchstart', (event) => {
  activo = true;
  const touch = event.touches[0];
  desplazamientoX = touch.clientX - elemento.offsetLeft;
  desplazamientoY = touch.clientY - elemento.offsetTop;
});
// Mover el elemento mientras se arrastra
document.addEventListener('touchmove', (event) => {
  if (activo) {
    const touch = event.touches[0];
    const x = touch.clientX - desplazamientoX;
    const y = touch.clientY - desplazamientoY;
    elemento.style.left = `${x}px`;
    elemento.style.top = `${y}px`;
  }   
});
// Detener el arrastre cuando se suelta
document.addEventListener('touchend', () => {
  activo = false;
});
function verificarPosicionTop(childID) {
  let elementos = childID  
  elementos.forEach(id => {
    let elemento = document.getElementById(id);      
    if (elemento) {
      // Obtener la posición actual en píxeles
      let posicionTopPx = elemento.getBoundingClientRect().top;          
      // Convertir 32vh a píxeles según la altura de la ventana
      let limiteVH = (window.innerHeight * 10) / 100; 
      // Verificar si la posición top es menor al límite
      if (posicionTopPx < limiteVH) {
        restaurarEstilosPadre("contLineas");
      }
    }
  });
}