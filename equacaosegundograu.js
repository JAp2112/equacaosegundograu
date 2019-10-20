function equacaosegundograu()
{
  let a = document.getElementById("a")
  let b = document.getElementById("b")
  let c = document.getElementById("c")
  let resultado = document.getElementById("resultado")
   
  let va = parseInt(a.value)
  let vb = parseInt(b.value)
  let vc = parseInt(c.value)
  
  let delta = Math.pow(vb,2) - 4*va*vc
  
  if(delta < 0)
    resultado.textContent = "Não possui raízes reais."
  else if(delta == 0)
  {
    let x = -vb/(2*va)
    resultado.textContent = "Possui uma raíz real. Ela é " + x
  }
  else if(delta > 0)
  {  
    let x1 = (-vb+Math.sqrt(delta))/(2*va)
    let x2 = (-vb-Math.sqrt(delta))/(2*va)
    resultado.textContent = "Possui duas raízes reais. x1 = " + x1 + " e x2 = " + x2
  }
}
