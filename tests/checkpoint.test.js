const {
  soloNumeros,
  sumaTodos,
  checkInventario,
  numeroSimetrico,
  cuantosRepetidos,
  crearClasePersona,
  index
} = require('../checkpoint.js');


describe('Funciones', function() {
  describe('soloNumeros', function() {
    it('should return [1, 2] for [1, "Henry", 2]', function() {
        expect(soloNumeros([1, 'Henry', 2])).toStrictEqual([1, 2]);
    });
    it('should return [1, 3, 2] for [1, "Soy", 3, "Henry", 2]', function() {
      expect(soloNumeros([1,'Soy', 3, 'Henry', 2])).toStrictEqual([1, 3, 2]);
  });
  });

  describe('sumaTodos', function() {
    it('should return 9 for [2,4]', function() {
        expect(sumaTodos([2,4])).toBe(9)
    })
    it('should return 15 for [0,5]', function() {
      expect(sumaTodos([0,5])).toBe(15)
    })
    it('should return 5 for [5,5]', function() {
      expect(sumaTodos([5,5])).toBe(5)
    })
  })

  describe('checkInventario',function(){
    let inventario = [
      {
        nombre: 'tenedor',
        cantidad: 6
      },
      {
        nombre: 'cuchara',
        cantidad: 4,
      },
    ]
    it('should return 6', function(){
      expect(checkInventario(inventario, 'tenedor')).toBe(6);
    })
    it('should return 4', function() {
      expect(checkInventario(inventario, 'cuchara')).toBe(4);
    })
    it('should return 0', function() {
      expect(checkInventario(inventario, 'cucharon')).toBe(0);
    })
  })

  describe('numeroSimetrico', function() {
    it('should return true for 4424', function() {
        expect(numeroSimetrico(4224)).toBe(true);
    });
    it('should return false for 2341', function() {
      expect(numeroSimetrico(2341)).toBe(false);
    });
  });

  describe('index', function() {
    index();
    var numeros = [5, 6, 4, 65, 8, 4]
    var strings = ['henry', 'programmer','javascript'];
    it('should return index', function() {
      expect(numeros.encontraIndex(4)).toBe(2);
    })
    it('should return -1 if no element found', function() {
      expect(strings.encontraIndex('js')).toBe(-1);
    })
  })

});

describe('Clase', function() {
  describe('crearClasePersona', function() {
    it('should return a user constructor that correctly builds user objects', function() {
        const Persona = crearClasePersona();
        const persona = new Persona('toni', 23, ['futbol'], [{nombre: 'martin', edad: 31}]);
        expect(persona.nombre).toBe('toni');
        expect(persona.edad).toBe(23);
        expect(persona.hobbies).toEqual(['futbol']);
        expect(persona.amigos).toEqual([{nombre:'martin', edad: 31}]);
    });
    it('should add a friend with addFriend', function() {
        const Persona = crearClasePersona();
        const persona = new Persona('toni', 23, ['futbol'], [{nombre: 'martin', edad: 31}]);
        persona.addFriend('Leo', 45);
        expect(persona.amigos[1]).toEqual({ nombre: 'Leo', edad: 45});
    });
    it('should add a hobbie with addHobby', function() {
        const Persona = crearClasePersona();
        const persona = new Persona('toni', 23, ['futbol'], [{nombre: 'martin', edad: 31}]);
        persona.addHobby('hobbie');
        expect(persona.hobbies[1]).toBe('hobbie');
    });
    it('should get all friends with getFriends', function() {
      const Persona = crearClasePersona();
      const persona = new Persona('toni', 23, ['futbol'], [{nombre: 'martin', edad: 31},{nombre: 'toni', edad: 33}]);
      expect(persona.getFriends()).toEqual(['martin','toni']);
    });
    it('should get all hobbies with getHobbies', function() {
      const Persona = crearClasePersona();
      const persona = new Persona('toni', 23, ['futbol'], [{nombre: 'martin', edad: 31}]);
      expect(persona.getHobbies()).toEqual(['futbol']);
    });
    it('should get age average with getPromedioEdad', function() {
      const Persona = crearClasePersona();
      const persona = new Persona('toni', 23, ['futbol'], [{
          nombre: 'toni',
          edad: 33,
        }, {
          nombre: 'Emi',
          edad: 25
        }]);
      expect(persona.getPromedioEdad()).toBe(29);
    });
  });
});

describe('Extra Credit', function() {
  describe('cuantosRepetidos', function() {
    let items1 = [["manzana", "naranja"],["sandia", "pera"],["uva", "manzana"]];
    let items2 = [[3,23,1],[9,23,5],[1,23,8]]
    it('should return 2 for [["manzana", "naranja"],["sandia", "pera"],["uva", "manzana"]] and "manzana"', function() {
        expect(cuantosRepetidos(items1, 'manzana')).toBe(2);
    });
    it('should return 3 for [[3,23,1],[9,23,5],[1,23,8]] and 23', function() {
      expect(cuantosRepetidos(items2, 23)).toBe(3);
    });
  });
});