//constructor para seguro
class Seguro {
  constructor(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
  }
  cotizarSeguro() {
    /*
              1 = amerciano 1.15
              2 = asiatico 1.05
              3 = europeo 1.35
          */
    const base = 2000;
    let cantidad;
    switch (this.marca) {
      case "1":
        cantidad = base * 1.15;
        break;
      case "2":
        cantidad = base * 1.05;
        break;
      case "3":
        cantidad = base * 1.35;
        break;
    }
    //leer el año
    const diferencia = new Date().getFullYear() - this.anio;
    //cada año de diferencia hay que reducir 3% el valor del seguro
    cantidad -= (diferencia * 3 * cantidad) / 100;

    /*
          si el seguro es basico se multiplica por 30% mas
          si el seguro es completo se multiplica por 50% mas
        */
    if (this.tipo === "basico") {
      cantidad *= 1.3;
    } else {
      cantidad *= 1.5;
    }
    //console.log(cantidad);
    return cantidad;
  }
}

//todo lo que se muestra
class Interfaz {
  //mensaje que se imprime en el html
  mostrarMensaje(mensaje, tipo) {
    const div = document.createElement("div");
    if (tipo === "error") {
      div.classList.add("mensaje", "error");
    } else {
      div.classList.add("mensaje", "correcto");
    }
    div.innerHTML = `${mensaje}`;
    //insertBefore toma dos parametros el primero elemento que queremos insertar
    //y el segundo  el elemento anterior donde se va insertar
    formulario.insertBefore(div, document.querySelector(".form-group"));
    setTimeout(function () {
      document.querySelector(".mensaje").remove();
    }, 3000);
  }
  //imprime el resultado de la cotizacion
  mostrarResultado (seguro, total) {
    const resultado = document.getElementById("resultado");
    let marca;
    switch (seguro.marca) {
      case "1":
        marca = "Americano";
        break;
      case "2":
        marca = "Asiatico";
        break;
      case "3":
        marca = "Europeo";
        break;
    }
    //crear un div
    const div = document.createElement("div");
    //Insertar la informacion
    div.innerHTML = `
            <p class='header'>Tu resumen: </p>
            <p>Marca: ${marca}</p>
            <p>Año: ${seguro.anio}</p>
            <p>Tipo: ${seguro.tipo}</p>
            <p>Total: ${total}</p>
        `;
  
    const spinner = document.querySelector("#cargando img");
    spinner.style.display = "block";
    setTimeout(function () {
      spinner.style.display = "none";
      resultado.appendChild(div);
    }, 2000);
  };
}

//eventListener
const formulario = document.getElementById("cotizar-seguro");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  //leer la marca seleccionada del select
  //console.log('presionado');
  const marca = document.getElementById("marca");
  const marcaSeleccionada = marca.options[marca.selectedIndex].value;
  //console.log(marcaSeleccionada);

  //leer el año seleccionado
  const anio = document.getElementById("anio");
  const anioSeleccionada = anio.options[anio.selectedIndex].value;
  //console.log(anioSeleccionada);
  //lee el valor del radioButton
  const tipo = document.querySelector('input[name="tipo"]:checked').value;
  //crear una instancia de la interfaz
  const interfaz = new Interfaz();
  //revisamos que los campos no esten vacios
  if (marcaSeleccionada === "" || anioSeleccionada === "" || tipo === "") {
    //interfaz imprimiendo un error
    interfaz.mostrarMensaje("faltan datos, revisar el formulario", "error");
  } else {
    //Limpiar resultado Anteriores
    const resultado = document.querySelector("#resultado div");
    if (resultado != null) {
      resultado.remove();
    }
    //instanciar seguro y mostrar interfaz
    const seguro = new Seguro(marcaSeleccionada, anioSeleccionada, tipo);
    //cotizar el seguro
    const cantidad = seguro.cotizarSeguro(seguro);
    //mostrar el resultado
    interfaz.mostrarResultado(seguro, cantidad);
    interfaz.mostrarMensaje("Cotizando...", "correcto");
  }
});

const max = new Date().getFullYear(),
  min = max - 20;

const selectAnios = document.getElementById("anio");
for (let i = max; i > min; i--) {
  let option = document.createElement("option");
  option.value = i;
  option.innerHTML = i;
  selectAnios.appendChild(option);
}
