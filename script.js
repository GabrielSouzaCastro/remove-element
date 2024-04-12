const caixa1 = document.querySelector("#caixa1");

const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "Kotlin"];

cursos.map((el, chave) => {
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c"+chave);
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = el;

  const btn_lixeira = document.createElement("img")
  btn_lixeira.setAttribute("src","./lixeira.png")
  btn_lixeira.setAttribute("class", "btn_lixeira")
  btn_lixeira.addEventListener("click", (evt) => {
    caixa1.removeChild(evt.target.parentNode)
  })

  novoElemento.appendChild(btn_lixeira)
  caixa1.appendChild(novoElemento);
});













































// const novoElemento = document.createElement("div")
// novoElemento.setAttribute("id","c7")
// novoElemento.setAttribute("class","curso c1")
// novoElemento.innerHTML="Kotlin"
// caixa1.appendChild(novoElemento)
