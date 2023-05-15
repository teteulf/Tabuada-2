function clicou() {
  const parag = document.querySelector("#box");
  const seletor = document.querySelector("#rang");
  var selector = Number(seletor.value);
  parag.innerHTML = selector;

  seletor.addEventListener("input", () => {
    parag.textContent = seletor.value;
  });

  if (selector <= 0) {
    alert("insira um número que seja válido");
  } else {
    for (let c = 1; c <= 10; c++) {
      let conteudo = document.createElement("option");
      conteudo.text = `${selector} x ${c} = ${selector * c}`;
    }
  }
}
