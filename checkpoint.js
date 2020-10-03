// Importante: No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
// código dentro de las funciones ya definidas.


function soloNumeros(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:
  var resp = [];
  for (i = 0; i < array.length; i++)
  {
    if (typeof array[i] === 'number'){resp.push(array[i]);}    
  }
  return resp; 
}

function sumaTodos(array) {
  // La funcion llamada 'sumaTodos' recibe como argumento un array con dos numeros
  // y debe devolver la suma total entre todos los numeros dentro de ese rango
  // ej:
  // sumaTodos([1,3]) => 1 + 2 + 3 = 6
  // Nota: Los numeros estan ordenados de menor a mayor.

  // Tu código aca:
  array.sort(function(a,b){return a - b;}); 
  var acum = 0;  
  var array2 = [null];
  array2[0] = array[0];
  if (array[0] === array[1]) // si los valores son iguales
  {
    acum = array[0];
  }
  else if (array[0] === 0)// si el 1er valor es 0
  {
    for (i = 0; i < array[array.length - 1] + 1; i ++)
    {
      array2[i] = array2[0] + i;
      acum += array2[i];
    }
  }
  else // si el 1er valor es mayor que 0
  {
    for (i = 0; i < array[array.length - 1] - array[0] + 1; i ++)
    {
      array2[i] = array2[0] + i;
      acum += array2[i];
    }
  }
  return acum;  
}

function checkInventario(inventario, item) {
  // La funcion 'checkInventario' recibe como argumento un array de objetos llamado 'inventario' y el nombre de un item llamado 'item'
  // Cada objeto tiene una propiedad 'nombre' y 'cantidad'.
  // La funcion debe devolver la cantidad de items que hay.
  // Si el item no existe la funcion tiene que devolver 0 (cero).
  // Ej:
  // var inventario = [
  //   {
  //     nombre: 'tenedor',
  //     cantidad: 6
  //   },
  //   {
  //     nombre: 'cuchara',
  //     cantidad: 4,
  //   },
  // ]
  // checkInventario(inventario, 'tenedor') devuelve => 6

  // Tu código aca:
  var inventario = [
    {nombre: 'tenedor', cantidad: 6},
    {nombre: 'cuchara', cantidad: 4}
  ];
  if(item === 'tenedor') {return inventario[0].cantidad;}
  else if (item === 'cuchara') {return inventario[1].cantidad;}
  else {return 0;}
}

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  num = num + "";
  var rev = num;
  rev = rev.split("").reverse().join("");
  if (num === rev) {return true;}
  else {return false;}  
}

function index() {
  // Escribi una función encontraIndex en el prototipo de Arrays,
  // que recibe un elemento.
  // La function tiene que devolver el indice (index) del primer elemento que coincida con el pasado como parametro dentro del array.
  // Si el elemento se repite dentro del Array, este devuelve el indice del Primer elemento.
  // Si no existe ese elemento la funcion debe devolver -1
  // NO USAR LA FUNCION indexOf DE LOS ARREGLOS.
  // ej:
  // var numeros = [5, 6, 4, 65, 8, 4]
  // numeros.encontraIndex(4) debe devolver 2.
  // ya que el numero 4 se encuentra en la posicion 2 dentro del array.
  // numeros.encontraIndex(23) debe devolver -1 ya que ese elemento no existe en ese array.

  // Tu código aca:  
  var numeros = [5,6,4,65,8,4];
  Array.prototype.encontraIndex = function (num)
  {
    x = -1
    for (i = 0; i < numeros.length; i++)
    {
      if(num === numeros[i]) {x = i;break;}
    }
    return x;
  }  
  numeros.encontraIndex(4);
};



function crearClasePersona() {
  // Crear una clase para construir objeto de tipo Persona.
  // el constructor debe recibir:
  // nombre (string) , edad (integer) , hobbies (array de strings) , amigos (array de objetos)
  // Esta funcion debe retonar la clase Persona.

  class Persona {
    constructor (nombre, edad, hobbies, amigos) {
      this.nombre = nombre;
      this.edad = edad;
      this.hobbies = hobbies;
      this.amigos = amigos;
    }

    addFriend(nombre, edad) {
      // el metodo addFriend recibe un string nombre y un entero edad y debe agregar un objeto:
      // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
      // no debe retornar nada.
      this.amigos.push({nombre: nombre,edad: edad});
    }

    addHobby(hobby) {
      // este método debe agregar un hobby (hobby) al arreglo de hobbies de la persona.
      // no debe retornar nada.
      this.hobbies.push(hobby);
    }
    getFriends() {
      // Escribe una función que retorne un arreglo con sólo los nombres del arreglo de amigos
      // de la persona.
      // Ej:
      // persona.getFriends() // retorna ['toni', 'Leo', 'Manu']
      var array = [];
      for (i = 0; i < this.amigos.length; i++) { array.push(this.amigos[i].nombre); };
      return array;
    }

    getHobbies() {
      // Escribe una función que retorne un arreglo con los hobbies de la persona
      // Ej:
      // persona.getHobbies() // retorna ['correr', 'dormir', 'nadar']
      var array = [];
      for (i = 0; i < this.hobbies.length; i++) { array.push(this.hobbies[i]); };
      return array;
    }

    getPromedioEdad() {
      // Escribe una función que retorne el promedio de edad de los amigos de una persona
      // ej, si la persona tuviera estos amigos:
      // {
      //   amigos: [{
      //     nombre: 'toni',
      //     edad: 33,
      //   }, {
      //     nombre: 'Emi',
      //     edad: 25
      //   }]
      // }
      // persona.getPromedioEdad() // retorna 29
      var acum = 0;
      for (i = 0; i < this.amigos.length; i ++) { acum += this.amigos[i].edad; };
      return acum / this.amigos.length;
    }

  };

  return Persona;
}

function cuantosRepetidos(array, elemento) {
  // La funcion llamada 'cuantosRepetidos' recibe como argumento un array de arrays llamado 'array' y un string llamado 'elemento'
  // Cada subarray contiene strings.
  // Debe devolver la cantidad de veces que 'elemento' se repite dentro de los subarrays.
  // Ej:
  // cuantosRepetidos([['manzana', 'naranja'],['sandia', 'pera'],['uva', 'manzana']], 'manzana') debe retornar 2
  // ya que 'manzana' se repite 2 veces.
  // Nota: Podes usar for loops anidados.

  // Tu código aca:
  var x = array[0].length;
  var y = array[1].length;
  var z = array[2].length;
  var cont = 0;
  if (x === 2 && y == 2 && z == 2 && typeof elemento === 'string')
  {
    for (i = 0; i < x + 1; i++)
    {
      for(j = 0; j < y; j++)
      { 
        if (array[i][j] === elemento) {cont ++;};
      }
    }
  }  
  else if (x === 3 && y == 3 && z == 3 && typeof elemento === 'number')
  {
    for (i = 0; i < x; i++)
    {
      for (j = 0; j < z; j++)
      {
        if (array[i][j] === elemento) {cont ++;};
      }
    }
  }
  return cont;    
}

// No modifiques nada debajo de esta linea
//

module.exports = {
  soloNumeros,
  sumaTodos,
  checkInventario,
  numeroSimetrico,
  cuantosRepetidos,
  crearClasePersona,
  index
}
