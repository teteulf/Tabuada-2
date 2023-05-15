var inp = document.querySelector("input");

inp.addEventListener("input", () => {
  var p = document.querySelector("p");
  let inputi = document.querySelector("input").value;
  p.innerHTML = `Tabuada do ${inputi}`;
});
