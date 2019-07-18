// constructor para seguro
function Seguro(marca, anio, tipo){

    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

// contenido de gui
function Interfaz(){


}

// mensaje de error
Interfaz.prototype.mostrarError = function(mensaje, tipo){

    const div = document.createElement('div');

    if(tipo === 'error'){
        div.classList.add('mensaje', 'error');
    }else{
        div.classList.add('mensaje', 'correcto');
    }

    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector('.form-group'));

    setTimeout(function(){
        document.querySelector('.mensaje').remove();
    }, 3000);
}


// event listener
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function (e){

    e.preventDefault();

    // obtener la marca seleccionada de marca de carro
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;
    
    // obtener año seleccionado
    const anio = document.getElementById('anio');
    const anioSelecionado = anio.options[anio.selectedIndex].value;

    // obtener valor de radio buttons
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    // crear instancia de interfaz
    const interfaz = new Interfaz();

    // validar que los campos no esten vacios
    if(marcaSeleccionada === '' || anioSelecionado === '' || tipo === ''){

        // imprimir error
        interfaz.mostrarError('Faltan datos, revisar el formulario y enviar de nuevo', 'error');

    }else{
        console.log('todo correcto');
    }

});



// select de años
const max = new Date().getFullYear(),
      min = max - 20;

const selectAnios = document.getElementById('anio');

for(let i = max; i >= min; i--){

    let option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        selectAnios.appendChild(option);
}