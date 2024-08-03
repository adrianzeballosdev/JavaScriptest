const ListaDeTeclas = document.querySelectorAll(".tecla");

function TocaSom(IdElementSom) {
  document.querySelector(IdElementSom).play();
}

for (let contador = 0; contador < ListaDeTeclas.length; contador++) {
  const tecla = ListaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const IdAudio = `#som_${instrumento}`;
  tecla.onclick = function () {
    TocaSom(IdAudio);
  };
}
