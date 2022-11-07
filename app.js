const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


let infoInputs = [];






formulario.addEventListener('submit', (event) =>{
    event.preventDefault();
    infoInputs = [];

    inputs.forEach((element) => {
        if(!element.value){
            mostrarError(element)
            return
            
        }else{
            borrarError(element);
            infoInputs.push({e: element.name, valor: element.value})

        }
    })

   guardarInfo();

});

function guardarInfo (){
    localStorage.setItem('arrayInputs', JSON.stringify(infoInputs ))
    alert(localStorage.getItem('arrayInputs'))
}


function mostrarError(inputElement){
    inputElement.classList.add('error');
    inputElement.nextElementSibling.classList.add('visible');
    inputElement.nextElementSibling.nextElementSibling.classList.add('visible');
}

function borrarError(inputElement) {
    inputElement.classList.remove('error');
    inputElement.nextElementSibling.classList.remove('visible');
    inputElement.nextElementSibling.nextElementSibling.classList.remove(
      'visible'
    );
  }



