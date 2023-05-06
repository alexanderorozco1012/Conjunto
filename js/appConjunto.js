//#region Variables botones e imputs
const btnCantA = document.querySelector("#btn-cantA");
const btnShowA = document.querySelector("#btn-showA");
const btnCantB = document.querySelector("#btn-cantB");
const btnShowB = document.querySelector("#btn-showB");
const imputA = document.querySelector("#imputA");
const imputB = document.querySelector("#imputB");
const outValue = document.querySelector("#resultado");
const cantidad_conjunto = document.querySelector("#cantidad_conjunto");

//Botones de operaciones
const btn_union = document.querySelector("#union");
const btn_interseption = document.querySelector("#interseccion");
const btn_diferencia = document.querySelector("#diferencia");
const btn_difSimetrica = document.querySelector("#simetrica");
//#endregion

//
let cantInputs = 0;

//Podriamos guardar estas variables en SessionStorage, pero como es sincrono
let cantA = 0;
let cantB = 0;
let cantC = 0;
let cantD = 0;
let cantE = 0;
//-------------------
let arrayA = [];
let arrayB = [];
let arrayC = [];
let arrayD = [];
let arrayE = [];


let cont = 0;
let flag = true;

let cantInput = 0;
const ArryaLetter = ['A','B','C','D','E','F'];

document.addEventListener("DOMContentLoaded", () => {
  cantidad_conjunto.addEventListener("keydown", (e)=> {
    if (e.key === "Enter") {
      if (e.target.value > 5) {
        alert("La cantidad de conjuntos no puede ser superior a 5")
        return;
      }

      cantInputs = e.target.value;
      createHtml(e.target.value)
    }
  })
});

//#region SaveValue - Se encarga de llenar los array y validar la cantidad de digitos a introducir
function saveValue(e) {
  let input;
  let btn;
  switch (e.target.value.split(" ")[1].trim()) {
    case "A":
      input = e.target.previousSibling.previousSibling;
      btn = e.target.nextSibling.nextSibling;

      if (cantA != 0) {
        flag = false;
        if (arrayA.length >= cantA) {
          alert("Conjunto lleno A. No mas valores");
          input.disabled = true
          input.value = `{${arrayA}}`;
          return;
        }

        arrayA.push(input.value);
        input.value = "";
        btn.value = `Dato: ${arrayA.length}/${cantA}`;
        
        if (arrayA.length == cantA) {
          cont = 0;
          input.disabled = true
          input.value = `{${arrayA}}`;
        }

      } else {
        if (input.value.trim() === "") {
          alert("Ingrese un valor para el conjunto A");
          return;
        }

        flag = false;
        cantA = input.value;
        input.value = "";
        btn.value = `Dato: 0/${cantA}`;
      }
    break;

    case "B":
      input = e.target.previousSibling.previousSibling;
      btn = e.target.nextSibling.nextSibling;

      if (cantB != 0) {
        flag = false;
        if (arrayB.length >= cantB) {
          alert("Conjunto lleno A. No mas valores");
          input.disabled = true
          input.value = `{${arrayB}}`;
          return;
        }
  
        arrayB.push(input.value);
        input.value = "";
        btn.value = `Dato: ${arrayB.length}/${cantB}`;
        
        if (arrayB.length == cantB) {
          cont = 0;
          input.disabled = true
          input.value = `{${arrayB}}`;
        }

      } else {
        if (input.value.trim() === "") {
          alert("Ingrese un valor para el conjunto B");
          return;
        }

        flag = false;
        cantB = input.value;
        input.value = "";
        btn.value = `Dato: 0/${cantB}`;
      }
      
    break;

    case "C":
      input = e.target.previousSibling.previousSibling;
      btn = e.target.nextSibling.nextSibling;

      if (cantC != 0) {
        flag = false;
        if (arrayC.length >= cantC) {
          alert("Conjunto lleno A. No mas valores");
          input.disabled = true
          input.value = `{${arrayC}}`;
          return;
        }
  
        arrayC.push(input.value);
        input.value = "";
        btn.value = `Dato: ${arrayC.length}/${cantC}`;
        
        if (arrayC.length == cantC) {
          cont = 0;
          input.disabled = true
          input.value = `{${arrayC}}`;
        }

      } else {
        if (input.value.trim() === "") {
          alert("Ingrese un valor para el conjunto C");
          return;
        }

        flag = false;
        cantC = input.value;
        input.value = "";
        btn.value = `Dato: 0/${cantC}`;
      }
    break;

    case "D":
      input = e.target.previousSibling.previousSibling;
      btn = e.target.nextSibling.nextSibling;

      if (cantD != 0) {
        flag = false;
        if (arrayD.length >= cantD) {
          alert("Conjunto lleno A. No mas valores");
          input.disabled = true
          input.value = `{${arrayD}}`;
          return;
        }
  
        arrayD.push(input.value);
        input.value = "";
        btn.value = `Dato: ${arrayD.length}/${cantD}`;
        
        if (arrayD.length == cantD) {
          cont = 0;
          input.disabled = true
          input.value = `{${arrayD}}`;
        }

      } else {
        if (input.value.trim() === "") {
          alert("Ingrese un valor para el conjunto C");
          return;
        }

        flag = false;
        cantD = input.value;
        input.value = "";
        btn.value = `Dato: 0/${cantD}`;
      }
    break;

    case "E":
      input = e.target.previousSibling.previousSibling;
      btn = e.target.nextSibling.nextSibling;

      if (cantE != 0) {
        flag = false;
        if (arrayE.length >= cantE) {
          alert("Conjunto lleno A. No mas valores");
          input.disabled = true
          input.value = `{${arrayE}}`;
          return;
        }
  
        arrayE.push(input.value);
        input.value = "";
        btn.value = `Dato: ${arrayE.length}/${cantE}`;
        
        if (arrayE.length == cantE) {
          cont = 0;
          input.disabled = true
          input.value = `{${arrayE}}`;
        }

      } else {
        if (input.value.trim() === "") {
          alert("Ingrese un valor para el conjunto C");
          return;
        }

        flag = false;
        cantE = input.value;
        input.value = "";
        btn.value = `Dato: 0/${cantE}`;
      }
    break;

    default:
      break;
  }
}
//#endregion

//Solo permite introducir numeros.
function soloNumeros(e){
  if(flag){
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
      e.preventDefault();
    }
  }

}


//DOMScripting del puro y duro
const createHtml = (valor) => {
  const contenedor = document.getElementById("content");
  let html = "";
  for (let i = 0; i < valor; i++) {
    html += `
      <h5 class="modal-title" id="exampleModalLabel">CONJUNTO ${ArryaLetter[i]}:</h5>
      <div style="margin-bottom: 10px;" class="col-sm-10  c-in">
        <input class="form-control m-1 input_in" type="text" placeholder="" id="imput_${ArryaLetter[i]}" autocomplete="off">
        <input type="button" class="btn btn-info" value="N.Datos ${ArryaLetter[i]}" id="btn-cant${ArryaLetter[i]}" />
        <input type="button" class="btn btn-info" value="Dato:" id="btn-show${ArryaLetter[i]}" disabled />
      </div>    
    `
  }

  contenedor.innerHTML = html;

  // Seleccionar el elemento "padre" que contiene a todos los elementos que se crean dinámicamente
  // Asociar un manejador de eventos para el evento "click" en el elemento "padre"
  contenedor.addEventListener("click", (event) => {
    // Verificar si el elemento que desencadenó el evento es un botón
    if (event.target.nodeName === "INPUT" && event.target.type === "button") {
      saveValue(event);
    }
  });
}

// Seleccionar el contenedor
const contenedor = document.getElementById("content");

// Función de callback para el observador
const callback = function(mutationsList, observer) {

  const callbackInputs = function(mutationsList, observer) {
    // Filtrar mutaciones para atributos de "disabled"
    const disabledMutations = mutationsList.filter(mutation => mutation.attributeName === 'disabled');

    // Contar los inputs que están desactivados
    const disabledCount = [...inputs].filter(input => input.disabled).length;

    // Si hay cinco o más inputs desactivados, ejecutar la acción
    if (disabledCount >= cantInputs) {
      // Ejecutar la acción aquí
      btn_union.disabled = false;
      btn_interseption.disabled = false; 
      btn_diferencia.disabled = false; 
      btn_difSimetrica.disabled = false;
    }
  };

  const inputs = document.querySelectorAll(".input_in")
  
  // Crear un observador de mutación
  const observerI = new MutationObserver(callbackInputs);

  // Observar cada input
  inputs.forEach(input => {
    observerI.observe(input, {attributes: true});
  });

  // Función de callback para el observador

};

// Crear un observador de mutación
const observer = new MutationObserver(callback);

// Observar el contenedor
observer.observe(contenedor, {childList: true});

//Union
btn_union.addEventListener("click", ()=> {
  union();
})

btn_interseption.addEventListener("click", ()=> {
  inserseption();
})

btn_diferencia.addEventListener("click", ()=> {
  diference();
})

btn_difSimetrica.addEventListener("click", ()=> {
  difSimetrica();
})


//#region Operaciones
function union() {
  /*Usamos SpreedOperator para duplicar los arrgelos y
    los pasamos por la funcion Set para devolver un nuevo array sin elementos duplicados*/
  let union = new Set([...arrayA, ...arrayB]);
  outValue.value = `{${Array.from(union)}}`; // Usamos array.from para comvertir el objecto Set en un array y mostrarlo
}

function inserseption() {
  const resultado = interseccionDeArreglos(arrayA, arrayB, arrayC, arrayD, arrayE);
  outValue.value = `{${resultado}}`;
}

function diference() {
  const resultado = diferenciaDeArreglos(arrayA, arrayB, arrayC, arrayD, arrayE);
  outValue.value = `{${resultado}}`;
}

function diferenciaDeArreglos(...arreglos) {
  // Crear un arreglo con todos los elementos únicos de todos los arreglos
  const todosLosElementos = arreglos.reduce((acc, arr) => {
    return [...acc, ...new Set(arr)];
  }, []);
  
  // Filtrar los elementos que sólo están en uno de los arreglos
  const elementosUnicos = todosLosElementos.filter(elemento => {
    let seEncuentra = false;
    for (let i = 0; i < arreglos.length; i++) {
      if (arreglos[i].includes(elemento)) {
        if (seEncuentra) {
          // Si el elemento se encuentra en más de un arreglo, no se cuenta como único
          return false;
        } else {
          seEncuentra = true;
        }
      }
    }
    return seEncuentra;
  });
  
  // Devolver el arreglo con los elementos únicos
  return elementosUnicos;
}


function interseccionDeArreglos(...arreglos) {
  // Filtrar los arreglos vacíos
  const arreglosNoVacios = arreglos.filter(arreglo => arreglo.length > 0);

  // Si no hay arreglos no vacíos, devolver un arreglo vacío
  if (arreglosNoVacios.length === 0) {
    return [];
  }

  let elementosUnicos = [...new Set(arreglosNoVacios[0])];
  
  for (let i = 1; i < arreglosNoVacios.length; i++) {
    // Hacer la intersección con el arreglo actual
    elementosUnicos = elementosUnicos.filter(elemento => arreglosNoVacios[i].includes(elemento));
  }

  return elementosUnicos
}

function difSimetrica() {
  const symmetricDifference = diferenciaSimetricaDeArreglos(arrayA, arrayB, arrayC, arrayD, arrayE);
  outValue.value = `{${symmetricDifference}}`;
}

function diferenciaSimetricaDeArreglos(...arreglos) {
  // Filtrar los arreglos vacíos
  const arreglosFiltrados = arreglos.filter(arreglo => arreglo.length > 0);
  
  // Inicializar un arreglo vacío para almacenar los elementos únicos
  let elementosUnicos = [];
  
  // Iterar sobre cada arreglo
  for (let i = 0; i < arreglosFiltrados.length; i++) {
    // Iterar sobre cada elemento del arreglo
    for (let j = 0; j < arreglosFiltrados[i].length; j++) {
      const elemento = arreglosFiltrados[i][j];
      
      // Verificar si el elemento no está en ningún otro arreglo
      const estaEnOtrosArreglos = arreglosFiltrados.some((arreglo, indice) => {
        if (indice !== i) {
          return arreglo.includes(elemento);
        }
      });
      
      // Si el elemento no está en ningún otro arreglo, agregarlo a la lista de elementos únicos
      if (!estaEnOtrosArreglos && !elementosUnicos.includes(elemento)) {
        elementosUnicos.push(elemento);
      }
    }
  }
  
  // Devolver el arreglo con los elementos únicos
  return elementosUnicos;
}

//#endregion


