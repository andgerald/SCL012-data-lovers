/* import LoL from './data/lol/lol.js'*/
 
/*import { example } from './data.js';

console.log(example); */


import  LoL  from './data/lol/lol.js';
import {filtroXrol} from './data.js';
//import {attack} from'./data.js';

console.log('LoL', LoL);

const dataLol=Object.values(LoL.data);
console.log(dataLol);
//const para boton champions
const btnChampions=document.getElementById("btnChampions");
//const para contenedor de fichas champions
const containerChampions=document.getElementById("containerChampions");

/* PROPIEDADES X FILTRAR 
    name, title, img, blurb, info,( attack, defense, magic, difficulty), tags, 
    stats: hp, armor, attackrange, attackdamage,movespeed 
*/
btnChampions.addEventListener('click', () =>{   
    //Object.value y Object.keys capturamos los valores
    //containerChampions.innerHTML = dataLol[0].name;
    containerChampions.innerHTML=""
    for (let i=0;i <dataLol.length; i++){
        containerChampions.innerHTML += 

        `<div class="card-champion">
        <div><img class="avatar" src="${dataLol[i].img}">
        </div>
        <div class="name">
        <h1>${dataLol[i].name}</h1></div>
        <div class="tittle">
        <h4>${dataLol[i].title}</h4></div>
        <div><img class=power src="imagen/attack.jpg"
        <p> Ataque ${dataLol[i]. info. attack}</p></div>
        <div><img class=power src="imagen/defense.jpg"
        <p> Defensa ${dataLol[i]. info. defense}</p></div>
        <div><img class=power src="imagen/magic.jpg"
        <p> Magia ${dataLol[i]. info. magic}</p></div>
        <div><img class=power src="imagen/difficulty.jpg"
        <p> Dificultad ${dataLol[i]. info. difficulty}</p></div>
        </div>
        </div>`
        
       // containerChampions.innerHTML += dataLol[i].title;
    }

});

//BOTON ASESINOS
const btnassassin= document.getElementById('assassin');
console.log(btnassassin)
btnassassin.addEventListener('click', () => {
    let valorClase= document.getElementById("assassin").value
    console.log(valorClase)
    containerChampions.innerHTML=""
    let datosAssasin=filtroXrol(valorClase)
    crearTarjeta(datosAssasin)
});
/*/checklistOne
const chkOne= document.getElementById('checkss');
console.log(chkOne)
chkOne.addEventListener("click",()=> {
    let valorAttack=document.getElementById("checkss").value
    console.log(valorAttack) 
});
function crear (masatack){
    for (let i=0;i <masatack.length; i++){
        containerChampions.innerHTML += 

        `<div class="card-champion">
        <div><img class="avatar" src="${datos[i].img}">
        </div>
        <div class="name">
        <h1>${datos[i].name}</h1></div>
        <div class="tittle">
        <h4>${datos[i].title}</h4></div>
        <div><img class=power src="imagen/attack.jpg"
        <p> Ataque ${atta[i]. info. attack}</p></div>
        <div><img class=power src="imagen/defense.jpg"
        <p> Defensa ${datos[i]. info. defense}</p></div>
        <div><img class=power src="imagen/magic.jpg"
        <p> Magia ${datos[i]. info. magic}</p></div>
        <div><img class=power src="imagen/difficulty.jpg"
        <p> Dificultad ${datos[i]. info. difficulty}</p></div>
        </div> 
        </div>`
    }
}    
*/
//BOTON LUCHADORES
const btnfighters= document.getElementById('fighters');
console.log(btnfighters)
btnfighters.addEventListener("click", () => {
    let valorFight=document.getElementById("fighters").value
    console.log(valorFight)
    containerChampions.innerHTML=""
    let datosFight=filtroXrol(valorFight)
    console.log(valorFight)
    crearTarjeta(datosFight)
});
//BOTON MAGOS
const btnMage= document.getElementById('mages');
console.log(btnMage)
btnMage.addEventListener('click', () =>{
    let valorMage= document.getElementById("mages").value
    console.log(valorMage)
    containerChampions.innerHTML=""
    let datosMage=filtroXrol(valorMage)
    console.log(valorMage)
    crearTarjeta(datosMage)
});
//BOTON TANQUES
const btntank= document.getElementById('tanks');
console.log(tanks)
btntank.addEventListener('click', () => {
    let valorTanks= document.getElementById("tanks").value
    console.log(valorTanks)
    containerChampions.innerHTML=""
    let datosTank=filtroXrol(valorTanks)
    crearTarjeta(datosTank)
});
//BOTON TIRADORES
const btnmarksman= document.getElementById('marksmans');
console.log(marksmans)
btnmarksman.addEventListener('click', () => {
    let valorMarksman= document.getElementById("marksmans").value
    containerChampions.innerHTML=""
    console.log(valorMarksman)
    let datosMarksman=filtroXrol(valorMarksman)
    crearTarjeta(datosMarksman)
});
//BOTON SOPORTE
const btnsupport= document.getElementById('supports');
console.log(supports)
btnsupport.addEventListener('click', () => {
    let valorSupport=document.getElementById("supports").value
    containerChampions.innerHTML=""
    console.log(valorSupport)
    let datoSupport = filtroXrol(valorSupport)
    crearTarjeta(datoSupport)
    
});

function crearTarjeta (datos){
    for (let i=0;i <datos.length; i++){
        containerChampions.innerHTML += 

        `<div class="card-champion">
        <div><img class="avatar" src="${datos[i].img}">
        </div>
        <div class="name">
        <h1>${datos[i].name}</h1></div>
        <div class="tittle">
        <h4>${datos[i].title}</h4></div>
        <div><img class=power src="imagen/attack.jpg"
        <p> Ataque ${datos[i]. info. attack}</p></div>
        <div><img class=power src="imagen/defense.jpg"
        <p> Defensa ${datos[i]. info. defense}</p></div>
        <div><img class=power src="imagen/magic.jpg"
        <p> Magia ${datos[i]. info. magic}</p></div>
        <div><img class=power src="imagen/difficulty.jpg"
        <p> Dificultad ${datos[i]. info. difficulty}</p></div>
        </div> 
        </div>`
    
    }
}
/*/checklist SECOND
const chkSec= document.getElementById('checkse');
console.log(chkSec)
chkSec.addEventListener("click",()=> {
    let valorMagia=document.getElementById("checkse").value
    console.log(valorMagia)
})  


//checklist THIRD
const chkThird= document.getElementById('checkt');
console.log(chkThird)
chkThird.addEventListener("click",()=> {
    let valorDifficult=document.getElementById("checkt").value
    console.log(valorDifficult)
})  
//checklist FOURTH
const chkFourth= document.getElementById('checkf');
console.log(chkFourth)
chkFourth.addEventListener("click",()=> {
    let valorDefense=document.getElementById("checkf").value
    console.log(valorDefense)
})  
//});
/*
console.log(btnassassin)
btnassassin.addEventListener('click', () => {
    let valorClase= document.getElementById("assassin").value
    console.log(valorClase)
    containerChampions.innerHTML=""
    let datosAssasin=lala(valorClase)
    crearTarjeta(datosAssasin)
*/