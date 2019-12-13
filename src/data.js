/* Manejo de data */
// esta es una función de ejemplo
import  LoL  from './data/lol/lol.js';

// return 'filtrar';
//};
/* Manejo de data */
// esta es una función de ejemplo
const dataLol=Object.values(LoL.data); //.entries llama a las [key:value]
console.log(dataLol);

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
