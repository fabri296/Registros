
let caja=prompt("elija una caja")
let colordeletra=prompt("elija una color de letra")
let colordefondo=prompt("elija un color de fondo")
let texto=prompt("texto que quieres que valla en la caja")
let cajanueva=document.getElementById("caja"+ caja)
cajanueva.innerText=texto;
cajanueva.style.color=colordeletra;
cajanueva.style.backgroundColor=colordefondo;

