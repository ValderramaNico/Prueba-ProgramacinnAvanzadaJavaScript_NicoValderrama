export class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    this.nombre = nombre;
    this.edad = edad;
    this.img = img;
    this.comentarios = comentarios;
    this.sonido = sonido;
  }
}

export class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido, Rugir) {
    super(nombre, edad, img, comentarios, sonido);
    this.Rugir = Rugir;
  }
}
export class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido, Aullar) {
    super(nombre, edad, img, comentarios, sonido);
    this.Aullar = Aullar;
  }
}
export class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido, Grunir) {
    super(nombre, edad, img, comentarios, sonido);
    this.Grunir = Grunir;
  }
}
export class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido, Sisear) {
    super(nombre, edad, img, comentarios, sonido);
    this.Sisear = Sisear;
  }
}
export class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido, Chillar) {
    super(nombre, edad, img, comentarios, sonido);
    this.Chillar = Chillar;
  }
}
