export const formatearPeso = (numero) => {
  return numero.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })
}
