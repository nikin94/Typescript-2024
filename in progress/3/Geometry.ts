// Створіть класи Circle, Rectangle, Square і Triangle.
// У кожного з них є загальнодоступний метод calculateArea.
// У кожної фігури є загальнодоступні властивості - колір і назва, які не можна змінювати після створення.
// У Square і Rectangle зі свого боку є ще додатковий метод print, який виводить рядок із формулою розрахунку площі

abstract class Figure {
  protected color: string
  protected name: string

  constructor(color: string, name: string) {
    this.color = color
    this.name = name
  }

  abstract calculateArea(): number
}

class Circle extends Figure {
  private radius: number

  constructor(color: string, name: string, radius: number) {
    super(color, name)
    this.radius = radius
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2
  }
}

class Rectangle extends Figure {
  private width: number
  private height: number

  constructor(color: string, name: string, width: number, height: number) {
    super(color, name)
    this.width = width
    this.height = height
  }

  calculateArea(): number {
    return this.width * this.height
  }

  print(): void {
    console.log(`Rectangle area formula: width * height`)
  }
}

class Square extends Rectangle {
  constructor(color: string, name: string, side: number) {
    super(color, name, side, side)
  }

  print(): void {
    console.log(`Square area formula: side^2`)
  }
}

class Triangle extends Figure {
  private base: number
  private height: number

  constructor(color: string, name: string, base: number, height: number) {
    super(color, name)
    this.base = base
    this.height = height
  }

  calculateArea(): number {
    return 0.5 * this.base * this.height
  }
}
