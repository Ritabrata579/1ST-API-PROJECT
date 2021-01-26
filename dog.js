async function start(){
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    console.log(data.message);
    createBreedList(data.message);
}
start()


function createBreedList(breedlist){
  var x =  document.getElementById("breed");
x.innerHTML = `<select onchange="lodeByBreed(this.value)">
<option>Choose a dog breed</option>
${Object.keys(breedlist).map(function(breed){
return `<option>${breed}</option>`;
}).join("")}
</select> `;
}

async function lodeByBreed(breed){
    if(breed != "Choose a dog breed" ){
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();  
    // console.log(data.message);
    showImages(data.message);

    }
}
function showImages(images){
    if(images.length>0){
        const slieshowElem = document.getElementById("slideshow");
        slieshowElem.innerHTML = `<ul class="imglist">
        ${Object.keys(images).map(function(image){
            return `<li><img src="${images[image]}"/></li>`;
            }).join("")}
        </ul>`
    }
}