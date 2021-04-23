export function maskCep(cep) {
  let newCep = cep.replace(/[^0-9]+/, '')
  if(newCep.length > 5 && newCep.charAt(5) !== '-') {
    let str = newCep.substring(5, newCep.length)
    newCep = newCep.substring(0, 5) + '-' + str.replace(/[^0-9]+/, '')
  }
  return newCep.substring(0, 9)
}
export function maskTel(numero) {
  let newNumero = numero.replace(/[^0-9]+/, '')
  if( newNumero.length > 0 && newNumero.charAt(0) !== '(' ) {
    let str = newNumero.substring(0, newNumero.length)
    newNumero = newNumero.substring(0, 0) + '(' +  str.replace(/[^0-9]+/, '')
  }
  if( newNumero.length > 3 && newNumero.charAt(3) !== ')' ) {
    let str = newNumero.substring(3, newNumero.length)
    newNumero = newNumero.substring(0, 3) + ')' + str.replace(/[^0-9]+/, '')
  }
  if( newNumero.length > 9 && newNumero.charAt(9) !== '-' ) {
    let str = newNumero.substring(9, newNumero.length)
    newNumero = newNumero.substring(0, 9) + '-' + str.replace(/[^0-9]+/, '')
  }
  return newNumero.substring(0, 14)
}

export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}