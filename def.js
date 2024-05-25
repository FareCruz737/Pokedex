var FatherBox = document.getElementById('FatherBox'); 
var button = document.getElementById('button')



let subir = 50; 
let inicio = 1; 
button.addEventListener('click', () => {
recibirPokemons(inicio, subir)
inicio += subir; 
})
    

function Datos(id){
var datos = `https://pokeapi.co/api/v2/pokemon/${id}`
fetch(datos) 
.then((user) => user.json())
.then(data =>{
card(data)

},)
}


function recibirPokemons(inicio, cantidad){

for(let i = inicio; i < inicio + cantidad; i++){
Datos(i); 



}

}

function card(Info){
console.log(Info); 
let BoxOne = document.createElement('div'); 
BoxOne.classList.add('Cajaspokemons'); 
let icons = document.createElement('img');
icons.src = Info.sprites.versions['generation-vii'].icons.front_default; 
let Pokename = document.createElement('p'); 
Pokename.textContent = Info.name; 

BoxOne.appendChild(icons); 
BoxOne.appendChild(Pokename);
FatherBox.appendChild(BoxOne); 

let tipos = Info.types.map((type) => type.type.name )
tipos.forEach((tipos) => {
    let Poketipo = document.createElement('p');
    Poketipo.textContent = tipos.charAt(0).toUpperCase() + tipos.slice(1);
    Poketipo.className = `${tipos} tipos`;
    BoxOne.appendChild(Poketipo); 

})




let activar = false; 

icons.addEventListener('click',() => {
if(!activar){
activar = true

BoxOne.style.height = '600px'




icons.src = Info.sprites.other.showdown.front_default; 
icons.style.height = '110px'
icons.style.margin = '40px'

let cajaSalida = document.createElement('div'); 
cajaSalida.className = 'CajaSalida'; 
let salir = document.createElement('button'); 
salir.textContent = ' go Out'; 
salir.className = 'ButtonSalida'; 

let Boxstats = document.createElement('div'); 
Boxstats.className = 'Boxstats'; 
let stats = document.createElement('div'); 
let stats2 = document.createElement('div'); 
stats.className = 'BoxSt'; 
stats2.className = 'Boxnum'; 

// Creamos las cajas que van a tener los elementos; 

let NameStants = ['Attack', 'Defense', 'Sp.Attack', 'Sp.Defence', 'Speed']; 
NameStants.forEach((user)=> {
let nombre = document.createElement('span'); 
nombre.textContent = user; 
stats.appendChild(nombre); 

})


let num = [1,2,3,4,5]
num.forEach((user)=> {
let Stants = document.createElement('span'); 
Stants.textContent = Info.stats[user].base_stat;
stats2.appendChild(Stants)


})

salir.addEventListener('click', ()=> {
stats.remove()
stats2.remove()
salir.remove(); 
BoxOne.style.height = '330px';
BoxOne.style.width = '250px';
icons.src = Info.sprites.versions['generation-vii'].icons.front_default; 
activar = false
})



Boxstats.appendChild(stats)
Boxstats.appendChild(stats2)
BoxOne.appendChild(Boxstats)
cajaSalida.appendChild(salir)
BoxOne.appendChild(cajaSalida)
} else {console.log('Ya se activo')}




})



}
    




