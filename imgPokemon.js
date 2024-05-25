let aver = document.getElementById('aver'); 

function PokeInf(id){
let datos = `https://pokeapi.co/api/v2/pokemon/${id}/`; 

fetch(datos)
.then(res => res.json())
.then(data => 
    imagenes(data)
) 
}

function imagenes(data){
aver.src = data.sprites.other['official-artwork'].front_default; 
}


function activar(){
return new Promise((resolver) => {
setTimeout(()=> {
    obtencion(150); 
    resolver(); 
}, 1000)

})

}

async function obtencion(data){
   for(let i=1; i< data; i++){
    await PokeInf(i); 
    await new Promise(resolve => setTimeout(resolve, 4000))
   } 
}


activar()

