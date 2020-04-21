
import LoL from './data/lol/lol.js';

//Funcion Filtrar x Roles
export function filtroXrol(dato){
  let resultadoFiltro= dataLol.filter(elemento => (elemento.tags.includes(dato)))  
  return resultadoFiltro
}
//Funcion filtrar x ataque
export function check (attack){
  let resultadoAttack=dataLol.filter(propiedad => (propiedad.info.includes(attack)))
  return resultadoAttack

}
/* ´Funcion filtrar x rol BOTON LUCHADORES´ */
export function check(attack) {
  const resultadoAttack = dataLol.filter((propiedad) => (propiedad.info.includes(attack)));
  return resultadoAttack;
} 
