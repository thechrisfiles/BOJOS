let imagen = document.getElementById("cajap");
let panel = document.getElementById("index1");
let amor = document.getElementsByClassName("mini");
let cuadro = document.getElementById("cuadro");
let body = document.body;
let boton = document.getElementsByTagName("button");
let flecha = document.getElementsByClassName("fa");
let i = 0;
let dialog = document.getElementById("popup");
let bt = document.getElementById("bt1");
let cl = document.getElementById("cls");
let imageno = document.getElementById("cajao");


bt.addEventListener("click", open);

cl.addEventListener("click", close);

function open(){
    dialog.showModal();
}

function close(){
    dialog.close();
}



function texto() {
  switch (i) {
    case 0:
      cuadro.innerHTML = "Reputation, Taylor Swift";
      break;
    case 1:
      cuadro.innerHTML = "Ultralife, Oh Wonder";
      break;
    case 2:
      cuadro.innerHTML = "Who Killed Matt Maeson, Matt Maeson";
      break;
    case 3:
      cuadro.innerHTML = "Melodrama, Lorde";
      break;
    case 4:
      cuadro.innerHTML = "Expectations, Hayley Kiyoko";
      break;
    case 5:
      cuadro.innerHTML = "Art Angels, Grimes";
      break;
    case 6:
      cuadro.innerHTML = "Always In Between, Jess Glynne";
      break;
    case 7:
      cuadro.innerHTML = "What Is Love, Clean Bandit";
      break;
    case 8:
      cuadro.innerHTML = "Hellvisback, Salmo";
      break;
  }
}

function enseñar() {
  panel.style.transform ="translate(0px, 0px)";

}

function quitar() {
  panel.style.transform ="translate(0px, -540px)";
}

function cambio(imagensource, indiceactual) {
  imagen.src = imagensource;
  imageno.src = imagensource;
  i = indiceactual;
  texto();
}

function alante() {
  if (i == 8) {
    (i = 0);
  } else {
    (i = i + 1);
  }
  imagen.src = amor[i].src;
  imageno.src = amor[i].src;
  texto();
}

function atras() {
  if (i == 0) {
   (i = 8);
  } else {
    (i = i - 1);
  }
  imagen.src = amor[i].src;
  imageno.src = amor[i].src;
  texto();
}

function temauno() {
    body.style.backgroundColor = "#ffffff";
    boton[0].style.backgroundColor = "#3897f0";
    boton[0].style.border = "#3897f0";
    boton[1].style.backgroundColor = "#3897f0";
    boton[1].style.border = "#3897f0";
    boton[2].style.backgroundColor = "#3897f0";
    boton[2].style.border = "#3897f0";
    boton[3].style.backgroundColor = "#3897f0";
    boton[3].style.border = "#3897f0";
    boton[4].style.backgroundColor = "#3897f0";
    boton[4].style.border = "#3897f0";
    flecha[0].style.color = "#3897f0";
    flecha[1].style.color = "#3897f0";
}

function temados() {
    body.style.backgroundColor = "#1e1848";
    boton[0].style.backgroundColor = "#ef4030";
    boton[0].style.border = "#ef4030";
    boton[1].style.backgroundColor = "#ef4030";
    boton[1].style.border = "#ef4030";
    boton[2].style.backgroundColor = "#ef4030";
    boton[2].style.border = "#ef4030";
    boton[3].style.backgroundColor = "#ef4030";
    boton[3].style.border = "#ef4030";
    boton[4].style.backgroundColor = "#ef4030";
    boton[4].style.border = "#ef4030";
    flecha[0].style.color = "#ef4030";
    flecha[1].style.color = "#ef4030";
}

function tematres() {
    body.style.backgroundColor = "rgb(121, 121, 121)";
    boton[0].style.backgroundColor = "palevioletred";
    boton[0].style.border = "palevioletred";
    boton[1].style.backgroundColor = "palevioletred";
    boton[1].style.border = "palevioletred";
    boton[2].style.backgroundColor = "palevioletred";
    boton[2].style.border = "palevioletred";
    boton[3].style.backgroundColor = "palevioletred";
    boton[3].style.border = "palevioletred";
    boton[4].style.backgroundColor = "palevioletred";
    boton[4].style.border = "palevioletred";
    flecha[0].style.color = "palevioletred";
    flecha[1].style.color = "palevioletred";

}

imagen.addEventListener("click", enseñar);
panel.addEventListener("click", quitar);


