/ estos son los datos que debemos establecer
var postporpagina = 60; // la cantidad de entradas a mostrar por p�gina
var urlsitio = "http://miblog.blogspot.com"; // la url de nuestro blog
var minpaginas = 5; // la cantidad m�nima de p�ginas a mostrar
var maxpaginas = 10; // la cantidad m�xima de p�ginas a mostrar
var imgxdefecto = "http://xxxxxxxxxxx"; // la direcci�n de la imagen por defecto a ser utilizada

var firsttime = 0; // lo usamos para detectar la primera vez que se ejecuta
var paginaactual = 1; // contendr� el n�mero de p�gina donde estemos
var cantidadpaginas = 0; // contendr� el n�mero total de p�ginas
var cantidadposts = 0; // contendr� el n�mero total de entradas

// la funci�n que interpreta los feeds y que siempre es m�s o menos la misma
function showpageposts(json) {
  var entry, posttitle, posturl, postimg;
  var salida = "";

  // la primera vez que se ejecuta la funci�n, leemos la cantidad de entradas que hay y calculamos la cantidad de p�ginas
  if(cantidadpaginas==0) {
    cantidadposts = parseInt(json.feed.openSearch$totalResults.$t);
    cantidadpaginas = parseInt(cantidadposts / postporpagina) + 1;
  }

  // leemos los datos que luego mostraremos
  for (var i = 0; i < postporpagina; i++) {
    if (i == json.feed.entry.length) { break; } // si no hay m�s, salimos
    entry = json.feed.entry[i];

    // el t�tulo de las entradas
    posttitle = entry.title.$t;

    // buscamos la url de las entradas
    for (var k = 0; k < entry.link.length; k++) {
      if (entry.link[k].rel == 'alternate') {
        posturl = entry.link[k].href;
        break;
      }
    }

    // buscamos la imagen de las entradas o usamos la que establecimos por defecto
    if ("media$thumbnail" in entry) {
      postimg = entry.media$thumbnail.url;
    } else {
      postimg = imgxdefecto;
    }

    // armamos el c�digo HTML de salida de manera similar a lo que se ve�a en una <a href="http://vagabundia.blogspot.com/2010/12/usar-json-para-mostrar-las-entradas-del.html" target="_blank">entrada anterior</a>
    salida += "<div class='paginaposts'>";
    salida += "<a href='" + posturl + "' target='_blank'><img src='" + postimg + "' /></a>";
    salida += "<h6><a href='" + posturl + "' target='_blank'>" + posttitle + "</a></h6>";
    salida += "</div>";
  }
  
  // listo, ahora lo mostramos
  document.getElementById("resultados").innerHTML = salida;

  // y ejecutamos la funci�n para paginar
  paginacion();
}

// esta es la funci�n que muestra la paginaci�n
function paginacion() {
  contadorP = 0;
  salida = "";

  // dependiendo de donde estamos, ponemos un enlace para retroceder o no
  if(paginaactual>1) {
    salida += "<a class='antesdespues' href='javascript:incluirscript(" + parseInt(paginaactual-1) + ")'>anterior</a>";
  } else {
    salida += "<span class='deshabilitado'>anterior</span>";
  }

  // se calcula y se muestran los n�meros de las primeras p�ginas, una sepaci�n y las �ltimas p�ginas
  if (cantidadpaginas<(maxpaginas+1)) {
    for (contadorP = 1; contadorP <= cantidadpaginas; contadorP++){
      if (contadorP==paginaactual) {
        salida += "<span class='actual'>" + contadorP + "</span>";
      } else {
        salida += "<a href='javascript:incluirscript(" + contadorP + ")'>" + contadorP + "</a>";
      }
    }
  } else if(cantidadpaginas>(maxpaginas-1)) {
    if(paginaactual<minpaginas) {
      for (contadorP=1; contadorP<(maxpaginas-2); contadorP++){
       if (contadorP == paginaactual) {
         salida += "<span class='actual'>" + contadorP + "</span>";
       } else {
         salida += "<a href='javascript:incluirscript(" + contadorP + ")'>" + contadorP + "</a>";
       }
     }
     salida += " ... ";
     salida += "<a href='javascript:incluirscript(" + parseInt(cantidadpaginas-1) + ")'>" + parseInt(cantidadpaginas-1) + "</a>";
     salida += "<a href='javascript:incluirscript(" + cantidadpaginas + ")'>" + cantidadpaginas + "</a>";
    } else if(cantidadpaginas-(minpaginas-1)>paginaactual&&paginaactual>(minpaginas-1)) {
      salida += "<a href='javascript:incluirscript(1)'>1</a>";
      salida += "<a href='javascript:incluirscript(2)'>2</a>";
      salida += " ... ";
      for (contadorP=paginaactual-2; contadorP<=paginaactual+2; contadorP++) {
        if (contadorP==paginaactual) {
          salida += "<span class='actual'>" + contadorP + "</span>";
        } else {
          salida += "<a href='javascript:incluirscript(" + contadorP + ")'>" + contadorP + "</a>";
        }
      }
      salida += " ... ";
      salida += "<a href='javascript:incluirscript(" + parseInt(cantidadpaginas-1) + ")'>" + parseInt(cantidadpaginas-1) + "</a>";
      salida += "<a href='javascript:incluirscript(" + cantidadpaginas + ")'>" + cantidadpaginas + "</a>";
    } else {
      salida += "<a href='javascript:incluirscript(1)'>1</a>";
      salida += "<a href='javascript:incluirscript(2)'>2</a>";
      salida += " ... ";
      for (contadorP=cantidadpaginas-(minpaginas+1); contadorP<=cantidadpaginas; contadorP++) {
        if (contadorP==paginaactual) {
          salida += "<span class='actual'>" + contadorP + "</span>";
        } else {
          salida += "<a href='javascript:incluirscript(" + contadorP + ")'>" + contadorP + "</a>";
        }
      }
    }
  }

  // dependiendo de donde estamos, ponemos un enlace para avanzar o no
  if (paginaactual<contadorP-1) {
    salida += "<a class='antesdespues' href='javascript:incluirscript(" + parseInt(paginaactual+1) + ")'>siguiente</a>";
  } else {
    salida += "<span class='deshabilitado'>siguiente</span>";
  }

  // mostramos el resultado
  document.getElementById("paginacion").innerHTML = salida;

  // y eventualmente, podemos mostrar la cantidad total
  var iniciopagina = (paginaactual * postporpagina) - (postporpagina - 1);
  var finalpagina = paginaactual * postporpagina;
  var totales = "Total de entradas publicadas: " + cantidadposts + " - Mostrando entradas " + iniciopagina + " a " + finalpagina;
  document.getElementById("totales").innerHTML = totales;
}

// esta es la funci�n que escribe y ejecuta el script de manera din�mica
function incluirscript(pagina) {

  // salvo que sea la primera vez, antes, borramos el script
  if(firsttime==1) {removerscript();}

  // borramos todo y mostramos alg�n mensaje de carga
  document.getElementById("resultados").innerHTML = "<div id='loadingscript'>cargando ...</div>";
  document.getElementById("paginacion").innerHTML = "";
  document.getElementById("totales").innerHTML = "";

  // calculamos el valor a colocar en start-index
  var iniciopagina = (pagina * postporpagina) - (postporpagina - 1);

  // y armamos la url del feed
  var archivo = urlsitio + "/feeds/posts/default?start-index=" + iniciopagina;
  archivo += "&max-results=" + postporpagina;
  archivo += "&orderby=published&alt=json-in-script&callback=showpageposts";

  // cargamos y ejecutamos el script de manera din�mica
  var nuevo = document.createElement('script');
  nuevo.setAttribute('type', 'text/javascript');
  nuevo.setAttribute('src', archivo);
  nuevo.setAttribute('id', 'TEMPORAL');
  document.getElementsByTagName('head')[0].appendChild(nuevo);

  // establecemos los nuevos datos
  firsttime = 1;
  paginaactual = pagina;
}

// esta es la funci�n que elimina un script previamente agregado utilizando su ID
function removerscript() {
  var el = document.getElementById("TEMPORAL");
  var padre = el.parentNode;
  padre.removeChild(el);
}

// ejecutamos la funci�n por primera vez cuando se termina de cargar nuestro sitio
onload=function() { incluirscript(1); }