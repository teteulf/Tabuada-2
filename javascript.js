function soltou() {
  var parag = document.querySelector("#box");
  var texto = Number("parag.innerHTML");
  var seletor = document.querySelector("#rang");
  var selector = Number(seletor.value);
  parag.innerHTML = selector;

  if (selector <= 0) {
    alert("insira um número que seja válido");
  } else {
    for (let c = 1; c <= 10; c++) {
      let conteudo = document.createElement("option");
      conteudo.text = `${selector} x ${c} = ${selector * c}`;
    }
  }
}
