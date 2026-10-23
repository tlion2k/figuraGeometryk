// PADRE
export abstract class FiguraGeometrica {
  private nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  public abstract calcularPerimetro(): number;

  public getNombre(): string {
    return this.nombre;
  }
}

// HIJO
export class Circulo extends FiguraGeometrica {
  private radio: number;

  constructor(radio: number) {
    super("Círculo");
    this.radio = radio;
  }

  public calcularPerimetro(): number {
    const perimetro = 2 * Math.PI * this.radio;
    return parseFloat(perimetro.toFixed(2));
  }
}

// HIJO
export class TrianguloEscaleno extends FiguraGeometrica {
  private ladoA: number;
  private ladoB: number;
  private ladoC: number;

  constructor(ladoA: number, ladoB: number, ladoC: number) {
    super("Triángulo Escaleno");
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
  }

  public calcularPerimetro(): number {
    return this.ladoA + this.ladoB + this.ladoC;
  }
}

// NIETO
export class TrianguloEquilatero extends TrianguloEscaleno {
  constructor(ladoA: number) {
    super(ladoA, ladoA, ladoA);
  }
}
