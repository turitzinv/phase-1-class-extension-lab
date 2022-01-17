// Your code here

class Polygon {
  constructor(array) {
    this.array = array;
  }
  get countSides() {
    return this.array.length
  }
  get perimeter() {
    let sum = 0
    for (let i = 0; i < this.array.length; i++) {
      sum += this.array[i]
    }
    return sum
  }
}

class Triangle extends Polygon {
  get isValid() {
    let a = this.array[0]
    let b = this.array[1]
    let c = this.array[2]
    if (a + b > c && a + c > b && b + c > a) {
      return true
    } else {
      return false
    }
  }
}

class Square extends Polygon {
  get isValid() {
    let a = this.array[0]
    let b = this.array[1]
    let c = this.array[2]
    let d = this.array[3]
    if (a == b && a == c && a == d && c == d && b == c && b == d) {
      return true
    } else {
      return false
    }
  }
  get area() {
    return Math.pow(this.array[0],2)
  }
}