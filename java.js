var inp = document.querySelector("input");
var p = document.querySelector("p");
var select = document.querySelector("#select");

inp.addEventListener("input", () => {
  let inputi = inp.value;
  p.innerHTML = `Tabuada do ${inputi}`;
  select.innerHTML = "";

  for (let c = 1; c <= 10; c++) {
    var num = Number(inp.value);
    var opt = document.createElement("option");
    opt.text = `${num} x ${c} = ${num * c}`;
    select.appendChild(opt);
  }
});
