function calcular(){
  const {idade, peso, altura} = getValues();
  const resultado = imc(peso, altura);
  const basico1 = planoA_basico1(idade, resultado);
  const standart1 = planoA_standart1(idade, resultado);
  const premium1 = planoA_premium1(idade, resultado);
  const basico2 = planoB_basico2(resultado);
  const standart2 = planoB_standart2(resultado);
  const premium2 = planoB_premium2(resultado);
  const comparacaoPlanoBasico = comparaPlanoBasico(basico1, basico2);
  const comparacaoPlanoStandart = comparaPlanoStandart(standart1, standart2);
  const comparacaoPlanoPremium = comparaPlanoPremium(premium1, premium2);
  const isValid = calcularImc(idade, peso, altura);
  if(!isValid){
    return; 
  }
  setResult(resultado);
  setbasic1(basico1);
  setstandart1(standart1);
  setpremium1(premium1);
  setbasic2(basico2);
  setstandart2(standart2);
  setpremium2(premium2);
  setCompareBasic(comparacaoPlanoBasico);
  setCompareStandart(comparacaoPlanoStandart);
  setComparePremium(comparacaoPlanoPremium)
  }

function calcularImc(idade, peso, altura){
  if (idade == "" || peso == "" || altura == ""){
    alert(`Preencha todos os campos`);
    return false;
  }
  return true;
}

function imc(valor1, valor2){
  var resultado = parseFloat(valor1) / (parseFloat(valor2) **2);
  return resultado.toFixed(2);
}

function converValueToNumber (value){
  return parseFloat(value);
}

function getValues(){
  const idade = document.getElementById('idade').value;
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;
    return {idade, peso, altura};
}

function setResult(result){
  document.getElementById('resultado').innerHTML = result;
}

//plano A

function planoA_basico1(idade, resultado){
  var basico1 = 100 + (idade * 10 * (resultado / 10));
    return parseFloat (basico1.toFixed(2));
}
function planoA_standart1(idade, resultado){
  var standart1 = (150 + (idade * 15)) * (resultado / 10);
    return parseFloat (standart1.toFixed(2));
}
function planoA_premium1(idade, resultado){
  var premium1 = (200 - (resultado * 10) + (idade * 20)) * (resultado / 10);
    return parseFloat (premium1.toFixed(2));
}
function setbasic1(basic1){
  document.getElementById('basico1').innerHTML = basic1
}
function setstandart1(stand1){
  document.getElementById('standart1').innerHTML = stand1
}
function setpremium1(premiumm1){
  document.getElementById('premium1').innerHTML = premiumm1
}

// plano B

function fatorComorbidade(resultado){
  if (resultado < 18,5){
    return 10;
  }
  else if (18,5 <= resultado <= 24,9){
    return 1;
  }
  else if (25,0 <= resultado <= 29,9){
    return 6;
  }
  else if (30,0 <= resultado <= 34,9){
    return 10;
  }
  else if (35,0 <= resultado <= 39,9){
    return 20;
  }
  else if (resultado >= 40){
    return 30;
  }
}
function planoB_basico2(resultado){
  var basico2 = 100 + (fatorComorbidade(resultado) * 10 * (resultado / 10));
    return parseFloat (basico2.toFixed(2));
}
function planoB_standart2(resultado){
  var standart2 = (150 + (fatorComorbidade(resultado) * 15)) * (resultado / 10);
    return parseFloat (standart2.toFixed(2));
}
function planoB_premium2(resultado){
  var premium2 = (200 - (resultado * 10) + (fatorComorbidade(resultado) * 20)) * (resultado / 10);
    return parseFloat (premium2.toFixed(2));
}
function setbasic2(basic2){
  document.getElementById('basico2').innerHTML = basic2
}
function setstandart2(stand2){
  document.getElementById('standart2').innerHTML = stand2
}
function setpremium2(premiumm2){
  document.getElementById('premium2').innerHTML = premiumm2
}

//Comparação de Planos

function comparaPlanoBasico(basico1, basico2){
  if (basico1 < basico2){
    return 'Melhor plano básico para você é o PLANO A';
  }
    else if (basico2 < basico1){
    return 'Melhor plano básico para você é o PLANO B';
  }
  else if (basico1 == basico2){
    return 'O PLANO A e o PLANO B, neste caso, possuem o mesmo valor';
  }
}
function comparaPlanoStandart(standart1, standart2){
  if (standart1 < standart2){
    return 'Melhor plano Standart para você é o PLANO A';
  }
  else if (standart2 < standart1){
    return 'Melhor plano Standart para você é o PLANO B';
  }
  else if (standart1 == standart2){
    return 'O PLANO A e o PLANO B, neste caso, possuem o mesmo valor';
  }
}

function comparaPlanoPremium(premium1, premium2){
  if (premium1 < premium2){
    return 'Melhor plano Premium para você é o PLANO A';
  }
  else if (premium2 < premium1){
    return 'Melhor plano Premium para você é o PLANO B';
  }
  else if (premium1 == premium2){
    return 'O PLANO A e o PLANO B, neste caso, possuem o mesmo valor';
  }
  }
function setCompareBasic(comparaPlanos_Basico){
  console.log(comparaPlanos_Basico)
  document.getElementById('comparacaoPlanoBasico').innerHTML = comparaPlanos_Basico
}
function setCompareStandart(comparaPlanos_Standart){
  document.getElementById('comparacaoPlanoStandart').innerHTML = comparaPlanos_Standart
}
function setComparePremium(comparaPlanos_Premium){
  document.getElementById('comparacaoPlanoPremium').innerHTML = comparaPlanos_Premium
}