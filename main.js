function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio).play();

  if (elemento === null) {
    console.log("Elemento não encontrado");
  } else if (elemento != null && elemento.localName === "audio") {
    elemento.play();
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

// for (let i = 0; i <= listaDeTeclas.length; i++) {
//   listaDeTeclas[i].onclick = tocaSomPom;
// }

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = () => {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (evento) {
    if (evento.code == "Space" || evento.code == "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
