$(function() {   
    getPokemon();
    
});

let html='';         
let id=1;
function getPokemon(){   
    for (let i=2; i<=20; i++){      
        pokemon(); 
        
        id=i;      
    }      
}
async function pokemon(){
    let response= await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let data= await response.json();    
    let Mayuscula= data.name[0].toUpperCase() + data.name.substring(1);
    console.log(data);
    html +=
    `<div  >`+
    `<div class="card" style="width: 150px; margin: 10px">`+
    `<img src="${data.sprites.front_shiny}" class="card-img-top" alt="...">`+
    `<div class="card-body">`+
    `<h5 class="card-title" style="text-align: center"> ${Mayuscula}</h5>`+
    `<p class="card-text" style="text-align: center">${data.abilities[0].ability.name}</p>`+
    `</div>`+
    `</div>`+
    `</div>`;          
     $('#pokemon').html(html);
    return   data;       
    }
  
  


