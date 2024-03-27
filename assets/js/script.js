
class Propietario {
    constructor(nombre, direccion, telefono) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.telefono = telefono;
    }
  
    datosPropietario() {
      return `El nombre del dueño es: ${this.nombre}\nEl domicilio es: ${this.direccion}, y el número telefónico de contacto: ${this.telefono}`;
    }
  }
  
  
  class Animal {
    constructor(tipo) {
      this.tipo = tipo;
    }
  
    getTipo() {
      return `El tipo de animal es un: ${this.tipo}`;
    }
  }
  
  
  class Mascota extends Animal {
    constructor(tipo, nombre, enfermedad) {
      super(tipo);
      this.nombre = nombre;
      this.enfermedad = enfermedad;
    }
  
    getNombre() {
      return this.nombre;
    }
  
    setNombre(nombre) {
      this.nombre = nombre;
    }
  
    getEnfermedad() {
      return this.enfermedad;
    }
  
    setEnfermedad(enfermedad) {
      this.enfermedad = enfermedad;
    }
  }
  
 
let propietario = new Propietario('Juan', 'Chile', '123456789');
let mascota = new Mascota('Perro', 'Tatty', 'Otitis Leve');


console.log('Propietario:', propietario);
console.log('Mascota:', mascota);

