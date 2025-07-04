var anchoPantalla = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var acumuladorVideos = []  

var intervaloColor;  
let videoStore = []
var contenedor2 = document.getElementById('canvasContainer2')   
var troublesh = document.getElementById('troubleshooting')  
var grafica2 = document.getElementById('MiGrafica') 
var linkIni1 = document.getElementById('links-inicialesI')
var linkIni2 = document.getElementById('links-iniciales') 
var arrayAllPneumatica = ['contImaginario-II','vid-pneumatic','bailarina','padre-neumat','pneumatico','control-neumatico','imag1','imag2','imag3','imag4','contImaginario','vid-basculante','rodillo-infeed','puesta-punto','contImgEntrenos']
const coleccion = document.querySelectorAll('.desbobinador, .desbobinador-I, .uTeñido, .alimentadorId, .unidpre-prensaProceso, .rebobinador, .contTorrImp')
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var contImgsDistribuidor = document.getElementById("images-distribuidor")
var contImgsEntintador = document.getElementById("images-entintador")
var contiVidDistribuidor = document.getElementById('conti-video-distribuidor')  
var contiVidEntintador = document.getElementById('conti-video-entintador') 
var contImgsSmed = document.getElementById('images-smed') 
var contImageneSmed = document.getElementById('imgsIsopropil') 
var contiVidSmed = document.getElementById('conti-video-smed')
var contibotsDistriV = document.getElementById('contenedor-7-VII')
var buttRepuestIII = document.getElementById('conti-boton-repuestos-II')
var padreImgsDistribuidor = document.getElementById("contene-images")         
var contiBotsFreno = document.getElementById('conti-boton-freno')
var contibotsDistri = document.getElementById('contenedor-7')
var contibotsDistriII = document.getElementById('contenedor-7-V')
var contibotsDistriIII = document.getElementById('contenedor-7-VI')
var contibotsDistriVI = document.getElementById('contenedor-8')
var btnsIniciales = document.querySelectorAll('.btn-bloque')
var buttRepuest = document.getElementById('butt-repuestos')
var buttRepuestI = document.getElementById('butt-repuestos-I')
var buttRepuestV = document.getElementById('conti-boton-repuestos-III')
var contVideo = document.getElementById('video-entintado')
var contVideoSmed = document.getElementById('conti-video-bancada')
var conteBancada = document.getElementById('bancada-torre-II')
var padreManometro = document.getElementById('padre-1')

let firstClick = true;
let clickHabilitado = true;
let primeraVez = false;
let tecnologyRGB = false;
let tecnologyCMYK = false;

let botonClick = document.getElementById('boton1')
let botonClickII = document.getElementById('boton7')
let botonClickIII = document.getElementById('boton13')  
let botonClickIV = document.getElementById('boton19')
let botonClickV = document.getElementById('boton25')

var iterations;
var arrayIdButtsMA = ['resultados','troubleshoot','def1','def2','adtBut','fua1','lup','kaizen']
var arrayButtsKaizen = ['btn10','btn11','btn12','btn17']
var arrayButtsPlanos = ['btn13','btn14','btn15']
var arrayImgsRodilleria = document.querySelectorAll ('.durezas')
var arrayButtsInstructivos = ['contBotCasos']
var enlacesIDs = ['link1', 'link2', 'link3', 'link4','link5'] 
var arrayPosicionnador = []
var destino = 257
var idsArray = []; 
var idsArrayEliminados = []
var idsMA = ['control-neumatico','rodillo-infeed','contBotCasos','puesta-punto','casos-kaizen','mejoras-kai','kaizen-propuestos','toyota-kaizen','toyota-kaizen-antes','planos-kaizen','materiales-kaizen','kaizenCont','conti-boton-planos', 'conti-boton-kaizen','troubleshooting','canvasContainer2','canvasContainer3', 'contImagNeg',,'contImagGraf','canvasContainer4','canvasContainer4-II','canvasContainer5','canvasContainer5-II','canvasContainer6','canvasContainer6-II','canvasContainer7','canvasContainer7-II','canvasContainer8','canvasContainer8-II','canvasContainer9','canvasContainer9-II']
var contenedoresMA = ['troubleshooting','canvasContainer2','canvasContainer3','contImagNeg','contImagGraf','kaizenCont']
var idsMAhijos = ['contBotCasos','materiales-kaizen','troubleshooting','canvasContainer2','canvasContainer3','contImagNeg','contImagGraf']

var contAdministrar = document.getElementById('cont-titulo-admin')
var contComercial = document.getElementById('cont-titulo-comercial')
var contCalidad = document.getElementById('cont-titulo-calidad')
var contOperativa = document.getElementById('cont-titulo-operacion')
var previousElementID
var elementoEliminado
var contPadre = document.getElementById('conti-boton-freno')
var linkList = document.getElementById("linkList")
var linkListI = document.getElementById("linkListI")
var uTeñido = document.getElementById('uTeñidos')
var arrayIdButtsCheck = ['boton2','boton3','boton4','boton5','boton6','boton7','boton8','boton9','boton10','boton11','boton12','btn600','btn700','btn800']
var contiBtt = ['archivo','btt2','btt3','btt4','btt5','btt6','btt7','btt8'] 
var currentID = null; 
var butInicio = document.getElementById('bot-inic')
var botonMa = document.getElementById('bot-mantaut')  
const padreUno = document.getElementById('contenedor_padre') 
const padreDos = document.getElementById('contenedor_padre_2')
const padreTres = document.getElementById('contenedor_padre_3')   
var display = document.getElementById('display') 
var displayII = document.getElementById('display_2')     
var aplique = document.getElementById('aplique_3')
var apliqueII = document.getElementById('aplique_2')

var posicionPantalla = document.getElementById('positionDisplay')              
var positionDisplayIII = document.getElementById('positionDisplay_3')
var allContenedores = ['visor-tools','butts-simulador','contenedor-botonera','sections-fondo','sections-fondo','imagenes-sheeter','container01','perfiles-color','contenedor-2','control-panel-rgb','control-panel-cmyk','padre-rgb','padre-cmyk','simulador','conte-butts-graphs','gran-cortina','contraseña','input1','input2','input3','input4','tareas-lubricacion','dynamic-graphs-II','tareas-limpieza','dia','actividad-lubricacion','actividad-limpieza','meses','metas-diarias','calendario-mes','ventana-lateral','etqts-festo','vidColor-II','contenedor_padre_3','contenedor_padre_2','contenedor_padre','butt-links-I','butt-links-II','butt-links-III','buscador','search-form','butt-links','imagenes-plancha','uniteñido','video-placa','placa','imagen1','imagen2','imagen3','imagen4','imagenes-impresor','video-impresor','padre-naranja','tendencia-naranja','abuelo-variable','planetary','padre-variable','cont-variable','abuelo-plana','padre-plana','cont-plana','contenedorElementos','general','frec-lubrica','padre-grilla','grilla-durezas','abuelo-entintadores','padre-entintadores','abuelo-grilla-dureza','cont-arriba-rodillos','lubricantes','abuelo-cuadricula','abuelo-teñido','abuelo-grilla','abuelo-lubrica','padre-lubricante','freno-II','conti-boton-freno','cont-arriba','conti-boton-teñido','teñido-I','teñido-II','vidTeñido','teñido-vid','cont-arriba-freno','inicio','padre-lubrica','bis-abuelo','image-background','def2','over_size','over_side','equalizer','nicho_spans','padre','patern','first_half','cortina','second_half','wall_street_II','vid_festo','instrucciones_manometro','positionDisplay_3','display_2','container_interfaz_2','butts_interfaz_2','container_interfaz_3','butts_interfaz_3','display_3','subtitulo-I','display','container_interfaz','butts_interfaz','interfaz','conte-ayudas','ayudas-video','imagen-ayudas','logo-grande','agrupaOblicuos-XI','titulo-ancho','descripcion-I','ventana-lateral','linkList','contenedor','padre-circle','circle','options','nicho-videos','primerCont','vidColor','vid01','vidCicodelia','padre-interfaz','hijo-interaz-1','hijo-interaz-2','abandonar-perfiles','MiGrafica9-II','contLineas-II','contLineas','title-interfaz','vidElem','kaizen-propuestos','canvasContainer3','troubleshooting','conti-boton','canvasContainer2','conteneMantaut','MiGrafica','contImaginario-II','contImaginario-III','padre-1','padre-2','imag3','imag4','contImaginario','bailarina','pneumatico','padre-neumat','largoImpresion','contImgEntrenos','imag1','imag2','linksMA','linkLis','sitio-en-construccion','curado-uv','video-container','conti-video-background','video-background-planas','contenedor-9','conti-video-bancada','plate-smed-I','contVid-smed-I','butt-repuestos-III','conti-boton-repuestos-III','imgsIsopropil','contenedor-8','bancada','contVid-smed','contenedor-7-VII','butt-repuestos-II','butt-repuestos-I','conti-boton-repuestos-II','conti-boton-repuestos-I','contenedor-7-VI','sector-smed','sector-entintador','sector-distribuidor','conti-video-smed','conti-video-entintador','conti-video-distribuidor','conti-boton-repuestos','contenedor-7-V','plate-smed','contenedor-7','butt-repuestos','images-entintador','toggleVideoButton','videoElement1','videoElement1-II','video-entintado','videos-training','videoElement2','contenedor-7','contene-images','cuartoContDensito','tercerContDensito','segundoContDensito','contDensito','imgs-densito','conte-botDensito','conte-botDensitoII','imgs-prepress','frame-rollers','links-inicialesI','linkListI','links-iniciales','impresorImg','agrupaOblicuos-IX','imagenes-manta','cont-titulo-operacion','cont-titulo-calidad','cont-titulo-comercial','cont-titulo-admin','control-neumatico','rodillo-infeed','contBotCasos','puesta-punto','mejoras-kai','casos-kaizen','kaizen-propuestos','toyota-kaizen','toyota-kaizen-antes','materiales-kaizen','planos-kaizen','conti-boton','conti-boton-kaizen','conti-boton-planos','kaizenCont','pantalla-inicial','desbobinadorId','uTeñidos','alimentadorId','verticales-alimentador','unidProceso','rebobinador','torre-imp','tinter-o','bateria-entintado','pantalla-tintero','cont-links','imgTorre','imgsRepuestos','agrupaOblicuos-II','pantalla-frente','pantalla-mandos','pantalla-servicio','pantalla-atras','videosTraining','contPortPlaca','contPortManta','contImpresor','contImgDistribuidor','contImgEntintador','cont-variable','bancada-torre-II','bateria-entintado-II','cont-secador','sitema-humedad','pre-prensa','agrupaOblicuos-placa','densitometria','contImagGraf','contImagNeg','lubricacion','title-interfaz','iconos','canvasContainer4','canvasContainer4-II','canvasContainer5','canvasContainer5-II','canvasContainer6','canvasContainer6-II','canvasContainer7','canvasContainer7-II','canvasContainer8','canvasContainer8-II','canvasContainer9','canvasContainer9-II','conte-secundario','contenedor-vertical','franja-Blanca','cont-titulo','videoBackground','video-background','videoBackgroundII','lubri-II','lubri-I','images-smed','images-distribuidor','lubri-III','freno','uniTeñido','uniTeñidos','rodilleria', 'cont-user','cont-userI','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4','spn-blur-5','spn-blur-6', 'colorCMYK', 'colorDisplay','container-slider','padre-controles','alerta-perfiles', 'cliente-nombre', 'bot-revertir', 'formulario-perfiles','boton-reseteo','boton-perfiles','unit-job-track','lista-lineas','lista-clientes','job-files','clock','texto-perf-indiv','bot-modific','blur-interfaz-perfiles','cont-modificadores','info-perfiles','admin-perfiles','cronometro','cronos','inerfaz-ajuste-fino','perfil-individual','control-perfiles','interfaz-registro','perfiles-entintado','perfil-entintado','interfaz-perfiles','water-background','segunda-pantalla','contenedor-padre','conte-colors','sombra','control-panel','contiene-lineas','triada-videos','trinquete','home-gym','tinta_segmento','trinquete-multi','trinquete-rodillo-tintero-v','trinquete-rodillo-tintero','tintero-interior','tintero-palanca','dos-videos','video-doctor-blade','video-insolacion','video-desliza-plancha','ajuste-corte','corte-oscilacion','corte-ajuste','video-graduar-sheeter','video-cadena-offset','video-completo','video-manta-capas','video-manta-enrolla','video-la-manta','video-manta-dos','video-manta-render','video-cuchilla-1','video-cuchilla','video-cuchilla-1','video-cuchilla','imagenes-sheeter','contenedor-1','contenedor-2','image-uno','image-tres','image-cuatro','contenedor-sheeter','formulario-cuenta']
var linksIniciales = ['links-inicialesI','links-iniciales']
var allContIzquierdos = ['desbobinadorId','uTeñidos','alimentadorId','unidProceso','rebobinador']
var contenedoresHijo = ['contImgDistribuidor','rodillForma','portaPlancha','portaMantilla','cilindroImpresor']
var allContTintero = ['pantalla-tintero','cont-links','imgTorre','vidTintero','imgsRepuestos','agrupaOblicuos-II','container2']
var contVid = document.getElementById('videosTraining')
var contIMPlaca = document.getElementById('placa')
var contIMmanta = document.getElementById('manta')
var arrayButtsRutilantes = ['butt-113','butt-12','butt-16','butt-21','butt-22','butt-1130','butt-120','butt-160','butt-210','butt-220']
var arrayButtsRutilantesI = ['butt-024000','butt-020000','butt-023000','butt-015000','butt-013000','butt-7112000']
var arrayButtsRutilantesII = ['butt-01130','butt-012','butt-016','butt-021','butt-0202','butt-011300','butt-0120']
var arrayButtsRutilantesIII = ['butt-001130','butt-0012','butt-0016','butt-0021','butt-00202']
var buttonsMA = document.getElementsByClassName("butt-mautonomo")
var buttsToyota = ['toyota8', 'toyota7', 'toyota6', 'toyota5','toyota4','toyota3','toyota2','toyota1']
var contienePasos = document.getElementById('puesta-punto')
let contPlana = document.getElementById('cont-plana')
let contiButtCasos = document.getElementById('mejoras-kai')
const textToColor = document.getElementById("textToColor")
const line = document.getElementById("line")  
const lineI = document.getElementById("lineI")
let hoverTimeout;
let hideTimeout;
let contadorClicks = 0;
let container1 = document.getElementById('container01')
var botIzquierda = document.getElementById('bot-atras')
var botDerecha = document.getElementById('bot-atras12')

const alimentadorId = document.getElementById('alimentadorId')
const reBobinado = document.getElementById('rebobinador')
const seccionTintero = document.getElementById('pantalla-tintero')
const pantallas = ['pantalla-frente', 'pantalla-mandos','pantalla-servicio','pantalla-atras']
const imgsRepuestos = document.getElementById('imgsRepuestos')
const videoPrisma = document.getElementById('prisma-vid-II')
const padreVideos = document.getElementById('nicho-videos')

const videoElements = document.querySelectorAll('.video-training') 
const videosPrepress = document.querySelectorAll('.vid-prepress')  
const imgsDistribuidor = document.getElementById('contImgDistribuidor')
const imgsForma = document.getElementById('contImgEntintador')
const images = document.querySelectorAll('.image-training') 
const contImpresor = document.getElementById('contImpresor')
const input = document.querySelectorAll('.input-class')
const checks = document.querySelectorAll('.input-class')
const inpt = document.querySelectorAll('grafMini')

const verButtsInterfaz = document.getElementById('butts_interfaz')
const verButtsInterfazII = document.getElementById('butts_interfaz_2')
const verButtsInterfazIII = document.getElementById('butts_interfaz_3')

const positionDisplay = document.getElementById('positionDisplay')
const positionDisplayII = document.getElementById('positionDisplay_2')

const container = document.getElementById('container_interfaz')
const containerII = document.getElementById('container_interfaz_2')
const containerIII = document.getElementById('container_interfaz_3')

const spanGuide = document.getElementById('unicoide_triangulo')
const spanGuideI = document.getElementById('unicoide_flecha')
const cortina = document.getElementsByClassName('overlay')[0]
const buttonRight2 = document.getElementById('buttonRight_2')  
const buttonRight3 = document.getElementById('buttonRight_3')

const buttReset2 = document.getElementById('buttonReset_2')  
const buttReset3 = document.getElementById('buttonReset_3')  

const buttonLeft2 = document.getElementById('buttonLeft_2')
const buttonLeft3 = document.getElementById('buttonLeft_3')

const buttonRight = document.getElementById('buttonRight')
const buttonLeft = document.getElementById('buttonLeft')
const buttReset = document.getElementById('buttonReset') 
const slider5 = document.getElementById('slider_1')
const slider4 = document.getElementById('slider_4')
const botVerde = document.getElementById('butt_green')
const botNaran = document.getElementById('butt_orange')
const botRed = document.getElementById('butt_red')   
const interfaz = document.getElementById('interfaz')
const slider2 = document.getElementById('slider_2')
const slider3 = document.getElementById('slider_3')
const button = document.getElementById('button1')
const slider1 = document.getElementById('slider')
const butt2 = document.getElementById('button2')
const actividadesLubricacion = document.getElementById('actividad-lubricacion')
const actividadesLimpieza = document.getElementById('actividad-limpieza')
const inputs = document.querySelectorAll('.numero');    
var padreImgs = document.getElementById('imgs-prepress')
var currentRotation = 0;
var currentZoom = 0;
let currentLeft = parseFloat(window.getComputedStyle(button).left)
var newLeft = currentLeft + 2
let miCanvas2 = document.getElementById('MiSegundaGrafica').getContext('2d')
let miCanvas3 = document.getElementById('MiTerceraGrafica').getContext('2d')
let miCanvas4 = document.getElementById('MiCuartaGrafica').getContext('2d')
let miCanvas5 = document.getElementById('MiQuintaGrafica').getContext('2d')  
let miCanvas = document.getElementById('MiGrafica').getContext('2d')
let miCanvas6 = document.getElementById('MiGrafica4').getContext('2d')
let miCanvas6II = document.getElementById('MiGrafica4-II').getContext('2d')
let miCanvas7 = document.getElementById('MiGrafica5').getContext('2d')
let miCanvas7II = document.getElementById('MiGrafica5-II').getContext('2d')
let miCanvas8 = document.getElementById('MiGrafica6').getContext('2d')
let miCanvas8II = document.getElementById('MiGrafica6-II').getContext('2d')
let miCanvas9 = document.getElementById('MiGrafica7').getContext('2d')
let miCanvas9II = document.getElementById('MiGrafica7-II').getContext('2d')
let miCanvas10 = document.getElementById('MiGrafica8').getContext('2d')
let miCanvas10II = document.getElementById('MiGrafica8-II').getContext('2d')
let miCanvas11 = document.getElementById('MiGrafica9').getContext('2d');
let miCanvas11II = document.getElementById('MiGrafica9-II').getContext('2d')
var botones = document.querySelectorAll('.butt-mautonomo')
var arrayButtsIniciales = ['bot-atras','bot-inicial','iniciar','bot-atras12']
let turnBlock = false
let turnGraphic = false
let currentIndex = 0;
let actualtIndex = 0;
let nowIndex = 0;
idsArray.push("cont-titulo") 
idsArrayEliminados.push('cont-titulo')
const IDSARRAYCICODELIA = ['first_half','cortina','second_half','nicho_spans','wall_street_II','equalizer','padre','patern']
const masterKey = [4];
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar sliders CMYK
  initSliderCMYK("slid-cian", "c-span-", "C");
  initSliderCMYK("slid-magenta", "m-span", "M");
  initSliderCMYK("slid-amarillo", "y-span", "Y");
  initSliderCMYK("slid-negro", "k-span", "K");
  initSliderCMYK("slid-blanco", "w-span", "A");
  updateColorCMYK();
  // Inicializar sliders RGB
  initSliderRGB("slid-rojo-rgb", "c-span-rgb", "R");
  initSliderRGB("slid-verde-rgb", "m-span-rgb", "G");
  initSliderRGB("slid-azul-rgb", "y-span-rgb", "B");
  initSliderRGB("slid-blanco-rgb", "w-span-rgb", "W");
  updateColorRGB();
  // Lazy loading de imágenes
  const lazyImages = Array.from(document.querySelectorAll("img.lazy"));
  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    lazyImages.forEach(lazyImage => lazyImageObserver.observe(lazyImage));
  } else {
    lazyImages.forEach(lazyImage => {
      lazyImage.src = lazyImage.dataset.src;
    });
  }
  // Lazy loading de videos
  const lazyVideos = Array.from(document.querySelectorAll("video.lazy"));
  if ("IntersectionObserver" in window) {
    let lazyVideoObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let lazyVideo = entry.target;
          for (let source of lazyVideo.children) {
            if (source.tagName === "SOURCE") {
              source.src = source.dataset.src;
            }
          }
          lazyVideo.load();
          lazyVideo.classList.remove("lazy");
          lazyVideoObserver.unobserve(lazyVideo);
        }
      });
    });
    lazyVideos.forEach(lazyVideo => lazyVideoObserver.observe(lazyVideo));
  } else {
    lazyVideos.forEach(lazyVideo => {
      for (let source of lazyVideo.children) {
        if (source.tagName === "SOURCE") {
          source.src = source.dataset.src;
        }
      }
      lazyVideo.load();
    });
  }
  // Hover en botones
  const buttons = document.querySelectorAll('.Bot-inicio3, .Bot-inicio7');
  buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "red";
      setTimeout(() => {
        button.style.backgroundColor = "";
      }, 200);
    });
  });
  // Botón para pausar el video
  const toggleVideoButton = document.getElementById("toggleVideoButton");
  const video = document.getElementById("videoElement");
  if (toggleVideoButton && video) {
    toggleVideoButton.addEventListener("click", () => video.pause());
  }


  // elementosDinamicamente(PADRE , CANTIDAD , CLASE , TEXTO ENTRE DIVS , span); 
  elementosDinamicamente('tanque-solucion', 100,'lineas-solucion');
  AelementosDinamicamente('tanque-tinta', 100, 'lineas-tinta');
  elementosDinamicamente('puntos', 22,'punto');
  elementosDinamicamente('indexado', 22,'indexar',1);
  elementosDinamicamente('perfil-barniz', 22,'grilla-barniz','','grilla');
  elementosDinamicamente('perfil-especial', 22,'grilla-especial','','grilla');
  elementosDinamicamente('perfil-amarillo', 22,'grilla-amarillo','','grilla');  
  elementosDinamicamente('perfil-magenta', 22,'grilla-magenta','','grilla');
  elementosDinamicamente('perfil-azul', 22,'grilla-azul','','grilla');
  elementosDinamicamente('perfil-negro', 22,'grilla-negro','','grilla');
  elementosDinamicamente('conte-colors',8,'celda');
  clasePadreCantidadClaseTextId('grilla-negro', 24, 'led-general', '','')
  clasePadreCantidadClaseTextId('grilla-amarillo', 24, 'led-general', '','')
  clasePadreCantidadClaseTextId('grilla-azul', 24, 'led-general', '','')
  clasePadreCantidadClaseTextId('grilla-magenta', 24, 'led-general', '','')
  clasePadreCantidadClaseTextId('grilla-especial', 24, 'led-general', '','')
  clasePadreCantidadClaseTextId('grilla-barniz', 24, 'led-general', '','')
  idPadreCantidadClaseTextId('footer-1', 100, 'divs-grales-tinta-negro','clase-dos', '','','','');
  idPadreCantidadClaseTextId('footer-2', 100, 'divs-grales-solucion-negro','clase-dos', '','','footer-2', 'negro', 'footer-1')
  idPadreCantidadClaseTextId('footer-3', 100, 'divs-grales-tinta-azul','clase-dos', '','')
  idPadreCantidadClaseTextId('footer-4', 100, 'divs-grales-solucion-azul','clase-dos', '','', 'footer-4', 'azul', 'footer-3')
  idPadreCantidadClaseTextId('footer-5', 100, 'divs-grales-tinta-magenta','clase-dos', '','')
  idPadreCantidadClaseTextId('footer-6', 100, 'divs-grales-solucion-magenta','clase-dos', '','','footer-6', 'magenta', 'footer-5')
  idPadreCantidadClaseTextId('footer-7', 100, 'divs-grales-tinta-amarillo','clase-dos', '','')
  idPadreCantidadClaseTextId('footer-8', 100, 'divs-grales-solucion-amarillo','clase-dos', '','','footer-8', 'amarillo', 'footer-7')
  idPadreCantidadClaseTextId('footer-9', 100, 'divs-grales-tinta-especial','clase-dos', '','')
  idPadreCantidadClaseTextId('footer-10', 100, 'divs-grales-solucion-especial','clase-dos', '','','footer-10', 'especial', 'footer-9')
  idPadreCantidadClaseTextId('footer-11', 100, 'divs-grales-tinta-barniz','clase-dos', '','')
  idPadreCantidadClaseTextId('footer-12', 100, 'divs-grales-solucion-barniz','clase-dos', '','','footer-12', 'barniz', 'footer-11')

 const botonesLatentes = document.querySelectorAll('.butt-selector'); 
 const colorActual = document.querySelector('#current-Color');   
  botonesLatentes.forEach((boton,index) => {
    boton.addEventListener('click', () => {
      // Cambia el color de fondo y el color del texto del span dentro del botón clicado
      boton.style.backgroundColor = 'rgb(0,255,0)';
      const spanBoton = boton.querySelector('span');
      if (spanBoton) {
        spanBoton.style.color = 'black'; // Cambia el color del texto a negro
      }  
      // Reinicia el color de fondo y el color del texto del span en los demás botones
      botonesLatentes.forEach(otroBoton => {
        if (otroBoton !== boton) {
          otroBoton.style.backgroundColor = ''; // Reinicia el color de fondo
          const spanOtroBoton = otroBoton.querySelector('span');
          if (spanOtroBoton) {
            spanOtroBoton.style.color = ''; // Reinicia el color del texto
          }
        }
      });
      switch (index) {
        case 0:
          colorActual.textContent = 'NEGRO';
          colorActual.style.color = 'black'
          break;
        case 1:
          colorActual.textContent = 'AZUL';
          colorActual.style.color = 'rgb(0,255,255)';
          break;
        case 2:
          colorActual.textContent = 'MAGENTA';
          colorActual.style.color = 'rgb(255,0,255)'
          break;
        case 3:
          colorActual.textContent = 'AMARILLO';
          colorActual.style.color = 'rgb(255,255,0)'
          break;
        case 4:
          colorActual.textContent = 'ESPECIAL';
          colorActual.style.color = 'rgb(255,130,0)'
          break;
        case 5:
          colorActual.textContent = 'BARNIZ';
          colorActual.style.color = 'rgb(200,200,200)'
          break;
      }

    });
  }); 
  document.querySelector('.alerta-perfil').addEventListener('click', function () {  
    this.classList.add('move-alerta-perfil');
  });
  document.querySelector('#butts-selectores > div:nth-of-type(1)').addEventListener('click', () => {  
    alertaSeis.classList.remove('move-alerta')
    color = 'rgb(0,0,0)'
    if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
      if(!flagAplicacion){
        alertaPerfil.style.display = 'flex'
        alertaPerfil.style.backgroundColor = verde
        alertaPerfil.style.color = 'black'
        setTimeout(() => {
          alertaPerfil.style.backgroundColor = ''  
          alertaPerfil.style.color = ''  
        }, 500);
      }else{      
        if (!flagNegro) {
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
        }    
      }  
    }else{
      alertaSeis.style.display='grid'
      desactivarClick(['.div-ctrl','.butt-perfiles', '.butt-selector', '.digit']);
    }
  });
  document.querySelector('#butts-selectores > div:nth-of-type(2)').addEventListener('click', () => { 
    alertaSeis.classList.remove('move-alerta')
    color = 'rgb(0,0,255)'
    if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
      if(!flagAplicacion){
        console.log('ESTADO BANDERA ', flagAplicacion)
        alertaPerfil.style.display = 'flex'
        alertaPerfil.style.backgroundColor = verde
        alertaPerfil.style.color = 'black'
        setTimeout(() => {
          alertaPerfil.style.backgroundColor = ''  
          alertaPerfil.style.color = ''  
        }, 500);
      }else{      
        if (!flagCyan) {
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
      } 
    }else{
      alertaSeis.style.display='grid'
      desactivarClick(['.div-ctrl','.butt-perfiles', '.butt-selector', '.digit']);
    }   
  });
  document.querySelector('#butts-selectores > div:nth-of-type(3)').addEventListener('click',() => {
    alertaSeis.classList.remove('move-alerta')
    color = 'rgb(255,0,255)'
    if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
      if(!flagAplicacion){
        console.log('ESTADO BANDERA ', flagAplicacion)
        alertaPerfil.style.display = 'flex'
        alertaPerfil.style.backgroundColor = verde
        alertaPerfil.style.color = 'black'
        desactivarClicEnElementos(buttSelector,buttsPerfiles,buttsColores,buttSuma,buttResta,buttsControl);
        setTimeout(() => {
          alertaPerfil.style.backgroundColor = ''  
          alertaPerfil.style.color = ''  
        }, 500);
      }else{      
        if (!flagMagenta) {
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
      }  
    }else{
      alertaSeis.style.display='grid'
      desactivarClick(['.div-ctrl','.butt-perfiles', '.butt-selector', '.digit']);
    }  
  });
  document.querySelector('#butts-selectores > div:nth-of-type(4)').addEventListener('click',() => {
    alertaSeis.classList.remove('move-alerta')
    color = 'rgb(255,255,0)'
    if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
      if(!flagAplicacion){
        console.log('ESTADO BANDERA ', flagAplicacion)
        alertaPerfil.style.display = 'flex'
        alertaPerfil.style.backgroundColor = verde
        alertaPerfil.style.color = 'black'
        desactivarClicEnElementos(buttSelector,buttsPerfiles,buttsColores,buttSuma,buttResta,buttsControl);
        setTimeout(() => {
          alertaPerfil.style.backgroundColor = ''  
          alertaPerfil.style.color = ''  
        }, 500);
      }else{      
        if (!flagAmarillo) {
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
      }  
    }else{
      alertaSeis.style.display='grid'
      desactivarClick(['.div-ctrl','.butt-perfiles', '.butt-selector', '.digit']);
    }  
  });  
  document.querySelector('#butts-selectores > div:nth-of-type(5)').addEventListener('click',() => {
    alertaSeis.classList.remove('move-alerta')
    color = 'rgb(255,130,0)'
    if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
      if(!flagAplicacion){
        console.log('ESTADO BANDERA ', flagAplicacion)
        alertaPerfil.style.display = 'flex'
        alertaPerfil.style.backgroundColor = verde
        alertaPerfil.style.color = 'black'
        desactivarClicEnElementos(buttSelector,buttsPerfiles,buttsColores,buttSuma,buttResta,buttsControl);
        setTimeout(() => {
          alertaPerfil.style.backgroundColor = ''  
          alertaPerfil.style.color = ''  
        }, 500);
      }else{      
        if (!flagEspecial) {
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
      } 
    }else{
      alertaSeis.style.display='grid'
      desactivarClick(['.div-ctrl','.butt-perfiles', '.butt-selector', '.digit']);
    }   
  });
  document.querySelector('#butts-selectores > div:nth-of-type(6)').addEventListener('click',() => {
    alertaSeis.classList.remove('move-alerta')
    color = 'rgb(200,200,200)'
    if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
      if(objetoGlobal != '' && objetoGlobal != null){
        if(!flagAplicacion){
          console.log('ESTADO BANDERA ', flagAplicacion)
          alertaPerfil.style.display = 'flex'
          alertaPerfil.style.backgroundColor = verde
          alertaPerfil.style.color = 'black'
          desactivarClicEnElementos(buttSelector,buttsPerfiles,buttsColores,buttSuma,buttResta,buttsControl);
          setTimeout(() => {
            alertaPerfil.style.backgroundColor = ''  
            alertaPerfil.style.color = ''  
          }, 500);
        }else{      
          if (!flagBarniz) {
            flagBarniz = true;
            flagCyan = false;
            flagMagenta = false;
            flagAmarillo = false;
            flagEspecial = false;
            flagNegro = false; 
            crearBotoneraDinamica(color)
            setTimeout(() => {
              eliminarColores()
            }, 50);
            setTimeout(() => {
              if (objetoGlobal && flagBarniz) {
                muestraRenderObjetoGlobal(objetoGlobal, 'barniz', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 11,12);
              }
            }, 100);
          }    
        }
      }else{
        alertaSeis.style.display='grid'
      }
    }else{
      alertaSeis.style.display='grid'
      desactivarClick(['.div-ctrl','.butt-perfiles', '.butt-selector', '.digit']);
    }     
  });
  idPadreCantidadClaseTextId('control-perfiles', 22,'leds-indiv','','','led');
  idPadreCantidadClaseTextId('regla-barniz', textosReglas.length, 'spn-gral','', textosReglas, 'spn');
  idPadreCantidadClaseTextId('regla-especial', textosReglas.length, 'spn-gral','', textosReglas, 'spn');
  idPadreCantidadClaseTextId('regla-amarillo', textosReglas.length, 'spn-gral','', textosReglas, 'spn'); 
  idPadreCantidadClaseTextId('regla-magenta', textosReglas.length, 'spn-gral','', textosReglas, 'spn');
  idPadreCantidadClaseTextId('regla-azul', textosReglas.length, 'spn-gral','', textosReglas, 'spn');
  idPadreCantidadClaseTextId('regla-negro', textosReglas.length, 'spn-gral','', textosReglas, 'spn');
  const negroGeneral = document.querySelector('#perfiles-entintado > #encabezado > div:nth-of-type(1)')
  const cyanGeneral = document.querySelector('#perfiles-entintado > #encabezado > div:nth-of-type(2)')
  const magentaGeneral = document.querySelector('#perfiles-entintado > #encabezado > div:nth-of-type(3)')
  const amarilloGeneral = document.querySelector('#perfiles-entintado > #encabezado > div:nth-of-type(4)')
  const especialGeneral = document.querySelector('#perfiles-entintado > #encabezado > div:nth-of-type(5)')
  const barnizGeneral = document.querySelector('#perfiles-entintado > #encabezado > div:nth-of-type(6)')
  const  botonesGenerales = [negroGeneral, cyanGeneral, magentaGeneral, amarilloGeneral, especialGeneral, barnizGeneral];
  const bloqueTinta = document.getElementById('ctrl-gral-tinta')
  const bloqueAgua = document.getElementById('ctrl-gral-agua')
  const clases = [
    'move-generales-cyan',
    'move-generales-magenta',
    'move-generales-amarillo',
    'move-generales-especial',
    'move-generales-barniz',
    'move-generales-barniz-II'
  ];  
  function alertaCrearPerfil(){
    alertaSeis.classList.remove('move-alerta')
    darColorVerdeCabeza()
    alertaSeis.style.display='grid'   
    alertaSeis.style.backgroundColor = 'rgb(0, 166, 255)'
    alertaSeis.style.color = 'black'
    alertaSeis.style.top = '42vh'
    setTimeout(() => {
      alertaSeis.style.backgroundColor = ''  
      alertaSeis.style.color = ''  
    }, 500);
    desactivarClicEnElementos(buttsPerfiles,buttsAguaGral,buttsAguaSingle);
  }  
  negroGeneral.addEventListener('mousedown', () => { 
    if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
        color = 'rgb(0,0,0)';
        manejoGeneralIndividual('negro', negro, estadoBalanceNegro, negroGeneral, 'negro', 'NEGRO', 'flagNegro', 1, 0);  
        muestraRenderObjetoGlobal(objetoGlobal, 'negro', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 1, 2);  
    } else {
        alertaCrearPerfil();  
    }
  })
  cyanGeneral.addEventListener('mousedown', () => {
    if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
    color = 'rgb(0,0,255)'
    manejoGeneralIndividual('azul',cian,estadoBalanceCyan,cyanGeneral,'cyan','AZUL','flagCyan',2,1)  
    muestraRenderObjetoGlobal(objetoGlobal, 'azul', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 3,4);
  }else{
    alertaCrearPerfil()
  }
  })
  magentaGeneral.addEventListener('mousedown', () => {
    if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
      color = 'rgb(255,0,255)'
    manejoGeneralIndividual('magenta',magenta,estadoBalanceMagenta ,magentaGeneral,'magenta','MAGENTA','flagMagenta',3,2)  
    muestraRenderObjetoGlobal(objetoGlobal, 'magenta', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 5,6);
  }else{
    alertaCrearPerfil()
  }
  })
  amarilloGeneral.addEventListener('mousedown', () => {
    if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
      color = 'rgb(255,255,0)'
    manejoGeneralIndividual('amarillo',amarillo,estadoBalanceAmarillo,amarilloGeneral,'amarillo','AMARILLO','flagAmarillo',4,3)  
    muestraRenderObjetoGlobal(objetoGlobal, 'amarillo', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 7,8);
  }else{
    alertaCrearPerfil()
  }
  })
  especialGeneral.addEventListener('mousedown', () => {
    if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
      color = 'rgb(255,130,0)'
    manejoGeneralIndividual('especial',especial,estadoBalanceEspecial,especialGeneral,'especial','ESPECIAL','flagEspecial',5,4)  
    muestraRenderObjetoGlobal(objetoGlobal, 'especial', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 9,10);
  }else{
    alertaCrearPerfil()
  }
  })
  barnizGeneral.addEventListener('mousedown', () => {
    if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
      color = 'rgb(200,200,200)'
    manejoGeneralIndividual('barniz',barniz,estadoBalanceBarniz,barnizGeneral,'especial','BARNIZ','flagBarniz',6,5)  
    muestraRenderObjetoGlobal(objetoGlobal, 'barniz', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 11,12);
  }else{
    alertaCrearPerfil()
  }
  })  
  function manejoGeneralIndividual(grilla,botoneraDinamica,actualBalanceColor,botonActual,claseColor,textoSpan,banderaActiva,index,indexSelector){
    const lineaLeds = document.querySelectorAll(`.grilla-${grilla}`);
    lineaLeds.forEach((elto, index) => { 
      setTimeout(() => {
        elto.style.backgroundColor = verde;
      }, index * 7); // Retraso de 100ms entre cada elemento
    });
    setTimeout(() => {
      lineaLeds.forEach((elto, index) => {
        setTimeout(() => {
          elto.style.backgroundColor = '';
        }, index * 7); // Retraso de 100ms entre cada elemento
      });    
    }, 177);
    clases.forEach(clase => {
      bloqueTinta.classList.remove(clase);
      bloqueAgua.classList.remove(clase);
    });
    flagNegro = false;
    flagCyan = false;
    flagMagenta = false;
    flagAmarillo = false;
    flagEspecial = false;
    flagBarniz = false;
    switch (banderaActiva) {
      case 'flagNegro':
        flagNegro = true;
        break;
      case 'flagCyan':
        flagCyan = true;
        break;
      case 'flagMagenta':
        flagMagenta = true;
        break;
      case 'flagAmarillo':
        flagAmarillo = true;
        break;
      case 'flagEspecial':
        flagEspecial = true;
        break;
      case 'flagBarniz':
        flagBarniz = true;
        break;
      default:
        console.warn('Bandera no reconocida');
    }
    crearBotoneraDinamica(botoneraDinamica);
    botonesGenerales.forEach(boton => {
      boton.style.backgroundColor = ''; // Reinicia el color
    });    
    botonActual.style.backgroundColor = verde;    
    bloqueTinta.classList.add(`move-generales-${claseColor}`)
    bloqueAgua.classList.add(`move-generales-${claseColor}`)    
    colorActual.textContent= textoSpan    
    const todosSpan = document.querySelectorAll('.texto-selectores');
    todosSpan.forEach(span => {
      span.style.color = ''; 
    });  
    const spanElement = botonActual.querySelector('span.texto-selectores');
    if (spanElement) {
      spanElement.style.color = 'black';
    }
    const spanSelectores = document.querySelector(`#butts-selectores div:nth-child(${index}) .texto-selectores`);
    if (spanSelectores) {
      spanSelectores.style.color = 'black';
    }
    const bottsSelectores = document.querySelectorAll('.butt-selector');  
    bottsSelectores.forEach((boton, i) => {
      if (i === indexSelector) {
        boton.style.backgroundColor = verde ; // Aplicar fondo verde al botón en la posición `index`
      } else {
        boton.style.backgroundColor = ''; // Restablecer color para los demás botones
      }
    });
  }      
  function mostrarSecuenciaPerfiles(){
    manejoGeneralIndividual('negro',negro,estadoBalanceNegro,negroGeneral,'negro','NEGRO','flagNegro',1,0)  
    muestraRenderObjetoGlobal(objetoGlobal, 'negro', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 1,2);  
    setTimeout(() => {
      manejoGeneralIndividual('azul',cian,estadoBalanceCyan,cyanGeneral,'cyan','AZUL','flagCyan',2,1)  
      muestraRenderObjetoGlobal(objetoGlobal, 'azul', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 3,4);
    }, 150);
    setTimeout(() => {
      manejoGeneralIndividual('magenta',magenta,estadoBalanceMagenta ,magentaGeneral,'magenta','MAGENTA','flagMagenta',3,2)  
      muestraRenderObjetoGlobal(objetoGlobal, 'magenta', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 5,6);
    }, 300);
    setTimeout(() => {
      manejoGeneralIndividual('amarillo',amarillo,estadoBalanceAmarillo,amarilloGeneral,'amarillo','AMARILLO','flagAmarillo',4,3)  
      muestraRenderObjetoGlobal(objetoGlobal, 'amarillo', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 7,8);
    }, 450);
    setTimeout(() => {
      manejoGeneralIndividual('especial',especial,estadoBalanceEspecial,especialGeneral,'especial','ESPECIAL','flagEspecial',5,4)  
      muestraRenderObjetoGlobal(objetoGlobal, 'especial', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 9,10);
    }, 600);
    setTimeout(() => {
      manejoGeneralIndividual('barniz',barniz,estadoBalanceBarniz,barnizGeneral,'especial','BARNIZ','flagBarniz',6,5)  
      muestraRenderObjetoGlobal(objetoGlobal, 'barniz', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 11,12);
    }, 750);

  }
  irAconsola.addEventListener('click', () =>{
    nombreCliente.style.top=''
    let nombreDatos = document.querySelector('#cliente-nombre')
    let interfazPerfiles = document.getElementById('perfiles-entintado')
    interfazPerfiles.classList.remove('move-perfiles-entintado')
    desactivarClick(['.butt-perfiles', '.cabeza', '.mod-tinta']); 
    var elementosExcluidos = ['simulador','interfaz-perfiles','perfiles-entintado','boton-perfiles','boton-reseteo','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4','spn-blur-5','spn-blur-6','spn-blur-7']
    for (var i = 0; i < allContenedores.length; i++) {
      var elemento = document.getElementById(allContenedores[i])  
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'  
      }
    }
    const elementos = document.querySelectorAll('.div-gral, .div-agua');
    elementos.forEach(elemento => {
      elemento.style.color = 'transparent'
    });
    container1.style.display = 'none'
    restablecerClick(['.butt-perfiles', '.cabeza', '.mod-tinta']);
    if(objetoGlobal === null || objetoGlobal === ''){nombreDatos.textContent = ''}
    setTimeout(() => {
      interfazPerfiles.classList.add('move-perfiles-entintado')
    }, 100);
    setTimeout(() => {
      document.querySelector('.nombre-cliente').style.display='flex'
    }, 1500);
    setTimeout(() =>{
      mostrarSecuenciaPerfiles()                        
    },1550);
      document.querySelectorAll('.butt-perfiles').forEach(elemento => {
      elemento.style.display = 'flex'; 
    });
    buttsPerfiles.forEach(boton =>{ 
      boton.style.backgroundColor = ''
    })
    document.querySelector('#butt-perfil-tinta').style.backgroundColor='rgb(0,255,0)'
    irAconsola.style.display='none'
      restablecerClick(['.perfiles'])
  })
  observarCambioDisplay()
});
function manejarLogica() {
  const inputs = document.querySelectorAll('.numero');
  let valoresIngresados = [0, 0, 0, 0];
  inputs.forEach(input => {
    input.style.display = 'flex';
  });
  if(screenWidth < 500){
      var tituloAngosto = document.getElementById('img-logo');
      tituloAngosto.style.width = '100%';      
      document.getElementById('input1').classList.add('move-inputI')
      document.getElementById('input2').classList.add('move-inputII')
      document.getElementById('input3').classList.add('move-inputIII')
      document.getElementById('input4').classList.add('move-inputIV')
      document.getElementById('contraseña').classList.add('move-contraseña')
      if (inputs.length > 0) {
        inputs[0].focus();
      }
  }else{
      var tituloAncho = document.getElementById('titulo-ancho');
      tituloAncho.style.width = '100%'
      document.getElementById('input1').classList.add('move-inputI')
      document.getElementById('input2').classList.add('move-inputII')
      document.getElementById('input3').classList.add('move-inputIII')
      document.getElementById('input4').classList.add('move-inputIV')
      document.getElementById('contraseña').classList.add('move-contraseña')
      if (inputs.length > 0) {
        inputs[0].focus();          
      }
    // Función para manejar la entrada en los inputs
    function manejarEntrada(event) {
      const inputActual = event.target;
      let valor = inputActual.value.replace(/\D/g, ""); // Elimina cualquier carácter que no sea número

      if (valor.length > 1) {
        valor = valor.charAt(0); // Solo permite un solo dígito
      }

      inputActual.value = valor; // Actualiza el input con solo el número válido

      const indice = Array.from(inputs).indexOf(inputActual);
      valoresIngresados[indice] = valor ? parseInt(valor) : 0;

      setTimeout(() => {
          inputActual.value = '*'; // Oculta el número ingresado
          if (indice < inputs.length - 1) {
            inputs[indice + 1].focus(); // Mueve el foco al siguiente input
          }
      }, 177);

      // Verifica la suma de los valores ingresados
      const suma = valoresIngresados.reduce((acumulador, valor) => acumulador + valor, 0);
      if (suma === masterKey[0]) {
          inputs.forEach(input => {
            input.style.display = 'none';
          });
          document.getElementById('contraseña').style.display = 'none';
          setTimeout(() => {
            abrirInterfaz();
          }, 200);
          inputs.forEach(input => {
            input.value = '';
          });
      }
    }

    // Función para evitar que se ingresen caracteres no numéricos
    function validarTecla(event) {
      const teclaPresionada = event.key;
      if (!/^\d$/.test(teclaPresionada) && teclaPresionada !== "Backspace" && teclaPresionada !== "Tab") {
        event.preventDefault(); // Bloquea la tecla si no es un número, Backspace o Tab
      }
    }

    // Agregar eventos a cada input
    inputs.forEach(input => {
      input.addEventListener('input', manejarEntrada);
      input.addEventListener('keydown', validarTecla); // Restringe la entrada de teclas no numéricas
    });
  }
}
function abrirInterfaz() {
  document.querySelectorAll("*").forEach(el => {
    el.style.setProperty("cursor", "none", "important"); 
  });

  var elementosExcluidos = ['videoBackgroundII','video-background','padre-interfaz','cont-titulo','franja-Blanca','subtitulo-I','descripcion-I','butt-Institucional','padre-interfaz', 'agrupaOblicuos-XI', 'hijo-interaz-1', 'hijo-interaz-2', 'contFrente-V','titulo-ancho','logo-grande','image-background'];
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
    }
  }
  var titulo = document.getElementById('subtitulo-I')

  if(screenWidth < 500){
    var elementoPadre = document.getElementById('cont-titulo');
    elementoPadre.classList.remove('move-oblicuos');
    setTimeout(function () {
    elementoPadre.classList.add ('move-oblicuos');
    desactivarClicsPorUnTiempo(4000)
    }, 177);
    setTimeout(() => {
      alternarColorVerde() 
    }, 900);
    setTimeout(() => {
      alternarColorVerdeInverso() 
    }, 1200); 
    setTimeout(() => {
      alternarColorVerde() 
    }, 1500);
    setTimeout(() => {
      alternarColorVerdeInverso() 
    }, 1800); 
    setTimeout(() => {
      titulo.classList.add('move-title')
    }, 1900);
    setTimeout(() => {
      document.querySelectorAll("*").forEach(el => {
        el.style.removeProperty("cursor");
      });
    }, 2500);

  }else{
    var elementoPadre = document.getElementById('cont-titulo');
    elementoPadre.classList.remove('move-oblicuosII');
    setTimeout(function () {   
    elementoPadre.classList.add('move-oblicuosII');
    desactivarClicsPorUnTiempo(4000)
    }, 177);
    setTimeout(() => {
      titulo.classList.add('move-title')    
    }, 1222);
    setTimeout(() => {
      alternarColorVerde() 
    },2500);  
    setTimeout(() => {
      alternarColorVerdeInverso()           
    }, 2800);  
    setTimeout(() => {
      alternarColorVerde() 
    }, 3100);
    setTimeout(() => {
      alternarColorVerdeInverso() 
    }, 3400);
    setTimeout(() => {
      document.querySelectorAll("*").forEach(el => {
        el.style.removeProperty("cursor");
      });
    }, 4000);
  }
}
function activarPantallaCompleta(){
  // Verificamos si el navegador está en modo de pantalla completa
  if (
    document.fullscreenElement || 
    document.mozFullScreenElement ||
    document.webkitFullscreenElement || 
    document.msFullscreenElement 
  ) {
    // Si está en pantalla completa, salir
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { 
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { 
      document.msExitFullscreen();
    }
  } else {
    const docEl = document.documentElement;
    if (docEl.requestFullscreen) {
      docEl.requestFullscreen();
    } else if (docEl.mozRequestFullScreen) {
      docEl.mozRequestFullScreen();
    } else if (docEl.webkitRequestFullscreen) {
      docEl.webkitRequestFullscreen();
    } else if (docEl.msRequestFullscreen) {   
      docEl.msRequestFullscreen();   
    }
  }


}
function VolveraInicio(){
  location.reload()
  idsArray = []
  idsArrayEliminados = []
}
function ElementosMaII(elementId){
    var elementosExcluidos = ['buscador','search-form', 'conteneMantaut', 'conti-boton','links-inicialesI', 'links-iniciales'];  
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
    setTimeout(() => {
      document.body.style.zoom = "100%"    
    }, 10);
    setTimeout(() => {
      showButtonsMAconRetraso()  
    }, 20);  
    arrayIdButtsMA .forEach(function (elto) {
      var elemento = document.getElementById(elto)    
      if (elemento) {
        elemento.style.backgroundColor = 'rgba(83, 82, 82, 0.678)'
        elemento.style.color = ''
      }
    })
    if(screenWidth < 500){
      document.getElementById('conti-boton').style.top=''
    }
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId)
    if (index !== -1) {
      idsArray.splice(index, 1);
    }
    idsArray.push(elementId);
    console.log(idsArray);
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
      boton.style.pointerEvents = 'none'; // Bloquea clic
    });
  });
}
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
function moverElementos(idsElementos, porcentajeLeft, porcentajeTop) {
  idsElementos.forEach(id => {
      let elemento = document.getElementById(id);

      if (elemento) {
          elemento.style.display = "grid"; 
          elemento.style.opacity = "1";  
          
          elemento.style.position = "absolute";

          // Aplicar una transición para suavizar el movimiento
          elemento.style.transition = "all 0.5s ease-in-out";

          // Obtener la posición actual
          let currentLeft = elemento.offsetLeft;
          let currentTop = elemento.offsetTop;

          // Obtener dimensiones del contenedor padre
          let parent = elemento.offsetParent || document.body;
          let parentWidth = parent.clientWidth;
          let parentHeight = parent.clientHeight;

          // Calcular nueva posición sumando el desplazamiento relativo al padre
          let newLeft = currentLeft + (parentWidth * porcentajeLeft / 100);
          let newTop = currentTop + (parentHeight * porcentajeTop / 100);

          // Aplicar la nueva posición con animación
          elemento.style.left = `${newLeft}px`;
          elemento.style.top = `${newTop}px`;
      } else {
          console.warn(`El elemento con ID "${id}" no existe.`);
      }
  });
}
function restaurarPosicion(idsElementos){
  idsElementos.forEach(id => {
    let elemento = document.getElementById(id);
    if (elemento) {
      elemento.style.position = "";
      elemento.style.left = "";
      elemento.style.top = "";
      elemento.style.transition = "";
    } else {
      console.warn(`El elemento con ID "${id}" no existe.`);
    }
  });
}
function restaurarEstilosPadre(idContenedor) {
  let contenedor = document.getElementById(idContenedor);

  if (contenedor) {
    // Obtener todos los elementos hijos dentro del contenedor
    let elementosHijos = contenedor.querySelectorAll("*");

    elementosHijos.forEach(elemento => {
      // Remover todos los estilos en línea aplicados por JavaScript
      elemento.removeAttribute("style");
    });
  } else {
    console.warn(`El contenedor con ID "${idContenedor}" no existe.`);
  }
}
function restablecerPosiciones(claseElto) {
  if (!Array.isArray(claseElto)) {
    console.error('El parámetro debe ser un array de selectores.'); 
    return;
  }
  claseElto.forEach(selector => {
    const botones = document.querySelectorAll(selector);
    botones.forEach(boton => {
      boton.style.top = ''
      boton.style.left = ''
    });
  });
}
function desvanecerColor(contenedor) {
  let padreCmyk = document.querySelector(contenedor)
  let propiedadesOriginales = {
    opacity: 1,
    display: padreCmyk.style.display,
    transition: padreCmyk.style.transition
  };
  // Aplicar transición de opacidad
  padreCmyk.style.transition = "opacity 1.5s ease";
  padreCmyk.style.opacity = "0";
  // Esperar 1.5 segundos y ocultar completamente el elemento
  setTimeout(() => {
    padreCmyk.style.display = "none";
    // Restaurar propiedades originales
    padreCmyk.style.opacity = propiedadesOriginales.opacity;
    padreCmyk.style.transition = propiedadesOriginales.transition;
  }, 1500);
}
function aparecerColor(contenedor) {
  let padre = document.querySelector(contenedor);
  
  // Restaurar la visibilidad antes de iniciar la animación
  padre.style.display = "grid";
  padre.style.opacity = "0";
  padre.style.transition = "opacity 1.5s ease";

  // Pequeño retraso para que la transición tenga efecto
  setTimeout(() => {
    padre.style.opacity = "1";
  }, 10);
}
function eliminarEstilos(coleccionEltos) {
  let elementos = document.querySelectorAll(coleccionEltos);
    elementos.forEach(elemento => {
    elemento.removeAttribute("style");
  });
}
function showButtonsMAconRetraso() {
  var botones = document.querySelectorAll('.butt-mautonomo');
  botones.forEach(boton => {
    boton.style.display = 'none';
  });
  function mostrarBotonConRetraso(i) {
    if (i < botones.length) {
      var boton = botones[i];
      boton.style.display = 'inline-block';
      boton.style.marginTop = '10px';
      setTimeout(function() {
        mostrarBotonConRetraso(i + 1);
      }, 100);
    }
  }
  mostrarBotonConRetraso(0);
}
function showButtonsTeoriaConRetraso() {
  var botones = document.querySelectorAll('.butt-prepre');
  for (var i = 0; i < botones.length; i++) {
      botones[i].style.display = 'none';
  }
  function mostrarBotonConRetraso(i) {
    if (i < botones.length) {
      var boton = botones[i];
      boton.style.display = 'inline-block';
      boton.style.marginTop = '10px';
      setTimeout(function() {
          mostrarBotonConRetraso(i + 1);
      }, 100);
    }
  }
  mostrarBotonConRetraso(0);
}
function showButtonsDensitoConRetraso() {
  var botones = document.querySelectorAll('.deploy-butt');
  for (var i = 0; i < botones.length; i++) {
      botones[i].style.display = 'none';
  }
  function mostrarBotonConRetraso(i) {
    if (i < botones.length) {
      var boton = botones[i];
      boton.style.display = 'inline-block';
      boton.style.marginTop = '10px';
      setTimeout(function() {
          mostrarBotonConRetraso(i + 1);
      }, 100);
    }
  }
  mostrarBotonConRetraso(0);
}
function reproducirVideo(videoId) {
  var video = document.getElementById(videoId);
  if (!video) {
    console.error(`No se encontró el video con ID: ${videoId}`);
    return;
  }
  video.style.display = 'block';
  video.pause();
  video.currentTime = 0;
  video.load();
  if (video.readyState >= 3) {  // 3 = HAVE_FUTURE_DATA
    video.play().catch(error => console.error('Error al intentar reproducir el video:', error));
  } else {
    video.addEventListener('canplaythrough', function() {
      video.play().catch(error => console.error('Error al intentar reproducir el video:', error));  
    }, { once: true });
  }
}
function changeButtonStyles(elementId){
  switch (elementId) {
    case 'pantalla-tintero':
      var elementosExcluidos = ['buscador','search-form','cont-links','pantalla-tintero','links-inicialesI','links-iniciales','agrupaOblicuos-II','imgTorre','video-entintado','videoElement1-II']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      } 
      container1.style.display='grid'
      if(screenWidth < 500){        
        var elementosExcluidos = ['buscador','search-form','cont-links','pantalla-tintero','links-inicialesI','links-iniciales','imgTorre','video-entintado','videoElement1-II']  
        for (var i = 0; i < allContenedores.length; i++) { 
          var elemento = document.getElementById(allContenedores[i]) 
          if (elemento) {
            elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
          }
        }
        container1.style.display='grid'
        videoElements.forEach(video => {
          if (video.id === 'vidTintero') {
            video.style.top = '-4.5vh'
            video.style.left='65vw'
            video.style.display = 'block'            
            video.addEventListener('canplay', function() {
              video.play().catch(error => console.error('Error al intentar reproducir el video:', error));
            }, { once: true });            
            setTimeout(function () {
              video.style.display = 'none'
            }, 977);
          } else {
            video.style.display = 'none'
          }
          });
          if (typeof elementId !== 'undefined') {
            const index = idsArray.indexOf(elementId);
            if (index !== -1) {
              idsArray.splice(index, 1);
            }
            idsArray.push(elementId);
            console.log(idsArray);
          }   
      }else{
        videoElements.forEach(video => {
        if (video.id === 'vidTintero') {
          reproducirVideo('vidTintero');
          setTimeout(() => {
            video.style.display = 'none'
          }, 1000);
        } else {
          video.style.display = 'none'
        }
        });  
        if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
          idsArray.push(elementId);
          console.log(idsArray);
        }
      }  
    break;    
    case 'bateria-entintado-II': 
      var elementosExcluidos = ['buscador','search-form','contenedor-7','links-inicialesI','links-iniciales','video-entintado','videoElement1-II','bateria-entintado-II'];         
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }
      container1.style.display='grid'
      videoElements.forEach(video => {
        if (video.id === 'videoElement1-II') {
          video.style.display = 'block'
          video.currentTime = 0
          video.play()      
        } else {
          video.style.display = 'none'
        }
      })
      contibotsDistri.style.marginTop = '1%'
      const buttonElements = document.querySelectorAll('.boton-f')
      var delay = 10;
      for (var i = 0; i < buttonElements.length; i++) {
        setTimeout(function(index) {
          buttonElements[index].style.display = 'flex'
      }, delay * i,i)}

      if (screenWidth < 500) {   
        var elementosExcluidos = ['buscador','search-form','links-iniciales','links-inicialesI','contenedor-7','video-entintado','videoElement1-II','bateria-entintado-II'];
        for (var i = 0; i < allContenedores.length; i++) { 
          var elemento = document.getElementById(allContenedores[i]) 
          if (elemento) {
            elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
          }
        }
        container1.style.display='grid'
        contibotsDistri.classList.remove('move-up')
        contVideo.classList.remove('move-up-left')
        contVid.style.display='block' 
        videoElements.forEach(video => {
          if (video.id === 'videoElement1-II') {
            video.play()      
          } else {
            video.style.display = 'none'
          }
        })
        desplegarBotones()
      }
      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray);
      }
    break;
    case 'bancada-torre-II': 
      var elementosExcluidos = ['buscador','search-form','conti-boton-repuestos-III','butt-repuestos-III','bancada-torre-II','links-inicialesI','links-iniciales','conti-video-bancada','plate-smed-I','contenedor-8','imgsIsopropil'];
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
        }
      } 
      container1.style.display='grid'
      desactivarClicsPorUnTiempo(500)
      const botonElement = document.querySelectorAll('.boton-g, .image-isopropil')
      var delay = 100;
      for (var i = 0; i < botonElement.length; i++) {
        setTimeout(function(index) {
          botonElement[index].style.display = 'flex'
        }, delay * i,i)
      }
      contVid.style.display='flex' 
      reproducirVideo('plate-smed-I');
      setTimeout(() => {
        applyImageEffects4() 
      }, 277)

    if (screenWidth < 500) {   
      var elementosExcluidos = ['buscador','search-form','conti-boton-repuestos-III','butt-repuestos-III','bancada-torre-II','links-inicialesI','links-iniciales','conti-video-bancada','plate-smed-I','contenedor-8','imgsIsopropil'];
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
        }
      }
      container1.style.display='grid'
      const botonElement = document.querySelectorAll('.boton-g, .image-isopropil')
      var delay = 100;
      for (var i = 0; i < botonElement.length; i++) {
        setTimeout(function(index) {
          botonElement[index].style.display = 'flex'
        }, delay * i,i)
      }
      contVid.style.display='flex' 
      setTimeout(() => {
        applyImageEffects4() 
      }, 277)
      reproducirVideo('plate-smed-I');

      contibotsDistriVI.classList.remove('move-butts-IV')
      contVideoSmed.classList.remove('move-vid-smed-II')
      contImageneSmed.classList.remove('move-images-IV')
      buttRepuestV.classList.remove('move-repuest-IV')
      desplegarBotonesV()  
     }

      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray);
      }
    break;
    case 'sitema-humedad':     
      var elementosExcluidos = ['buscador','search-form','sitema-humedad','links-inicialesI','links-iniciales','sitio-en-construccion']
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      } 
      container1.style.display='grid'
      document.getElementById('butt-sitio').style.display='flex'
      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray);
      } 
    break;
    case 'fua':
    break;
    case 'lup':
    break;
    default:
  }  
} 
function desplegarBotones(){
  const buttonElements = document.querySelectorAll('.boton-f')
  var delay = 100;
  for (var i = 0; i < buttonElements.length; i++) {
    setTimeout(function(index) {
      buttonElements[index].style.display = 'flex'
  }, delay * i,i)}

  setTimeout(function () {
    transicionElementos()
  }, 477);
}
function desplegarBotonesII(){
  const buttonElements = document.querySelectorAll('.boton-f')
  var delay = 100;
  for (var i = 0; i < buttonElements.length; i++) {
    setTimeout(function(index) {
      buttonElements[index].style.display = 'flex'
  }, delay * i,i)}

  setTimeout(function () {
    transicionElementosII()
  }, 477);
}
function desplegarBotonesIII(){
  const buttonElements = document.querySelectorAll('.boton-f')
  var delay = 100;
  for (var i = 0; i < buttonElements.length; i++) {
    setTimeout(function(index) {
      buttonElements[index].style.display = 'flex'
  }, delay * i,i)}

  setTimeout(function () {
    transicionElementosIII()
  }, 477);
}  
function desplegarBotonesIV(){
  const buttonElements = document.querySelectorAll('.boton-f')
  var delay = 100;
  for (var i = 0; i < buttonElements.length; i++) {
    setTimeout(function(index) {
      buttonElements[index].style.display = 'flex'
  }, delay * i,i)}

  setTimeout(function () {
    transicionElementosIV()
  }, 477);
}
function desplegarBotonesV(){
  const buttonElements = document.querySelectorAll('.boton-f')
  var delay = 100;
  for (var i = 0; i < buttonElements.length; i++) {
    setTimeout(function(index) {
      buttonElements[index].style.display = 'flex'
  }, delay * i,i)}

  setTimeout(function () {
    transicionElementosV()
  }, 477);
}
function cambioContenedor(elementId){
  var elementsToHide = document.querySelectorAll('.alimentador, .uTeñido, .desbobinador,.unidProceso,.rebobinador,.links-inicialesI,.links-iniciales') 
  var torreImpresion = document.getElementById('torre-imp')
  var botonTorre = document.getElementById('toggleVideoButton')
  var botAtras = document.getElementById('bot-atras10')
  var botTrasII = document.getElementById('bot-atras11')
  for (var i = 0; i < elementsToHide.length; i++) {
    elementsToHide[i].style.display = 'none'
  }
  botAtras.style.display='block'
  botTrasII.style.display='block'
  torreImpresion.style.position='absolute'
  torreImpresion.style.left='77px'
  botonTorre.style.position='absolute'
  botonTorre.style.left='307px'
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId);
    if (index !== -1) {
      idsArray.splice(index, 1);             
    }
    idsArray.push(elementId);
    console.log(idsArray);
  }  
}
function building(){
  var elementosExcluidos = ['buscador','search-form','sitema-humedad','links-inicialesI','links-iniciales','sitio-en-construccion']
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  } 
  container1.style.display='grid'
  if(document.body.style.zoom != "100%"){document.body.style.zoom = "100%"}
  if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
    idsArray.push(elementId);
    console.log(idsArray);
  } 
  let botonSitio = document.getElementById('butt-sitio')
  botonSitio.style.display='flex'
}
const neumatica = document.getElementById('neumatica');
const moveButton = document.getElementById('moveButton');
function secuenciaEntrena(){
  let instrucciones = document.getElementById('instrucciones_manometro')
  let padre = document.getElementById('padre-1')
  var elementosExcluidos = ['padre-1','imag1','instrucciones_manometro','vid_festo']  
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  container1.style.display='none'
  document.querySelector('#back-container').style.display='none'

  padre.style.top='9.3vh'
  padre.style.left='40vw'

  document.getElementById('butt-links-II').style.display='flex'
  document.getElementById('butt-links-II').style.left='68vw'
  document.getElementById('butt-links-II').style.top='95vh'
  if(screenWidth < 500){
    document.getElementById('butt-links-II').style.display='flex'
    document.getElementById('butt-links-II').style.left=''
    let etiquetas = document.getElementById('etqts-festo')
    etiquetas.style.display='flex'

    padre.style.top='2vh'
    padre.style.left='0' 

    instrucciones.style.zIndex=13 
  }
  document.getElementById('context-menu').style.display='none'  
}
botonClick.addEventListener('mouseup', () => {                   
  cierraContenedores('desbobinadorId','boton1')
})
botonClickII.addEventListener('mouseup', () => {
  cierraContenedores('uTeñido')
})   
botonClickIII.addEventListener('mouseup', () => {                
 cierraContenedores('alimentadorId')
}) 
botonClickIV.addEventListener('mouseup', () => {                
  cierraContenedores('unidProceso')
}) 
botonClickV.addEventListener('mouseup', () => {                
  cierraContenedores('rebobinador')
}) 
videoPrisma.addEventListener('mouseup', () =>{
  abrirPrepress('pre-prensa')
})