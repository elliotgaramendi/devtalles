const MeasureTime = (
  _target: object,
  methodName: string,
  descriptor: PropertyDescriptor,
) => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: unknown[]) {
    const start = performance.now();

    const result = originalMethod.apply(this, args);

    const end = performance.now();

    console.log(
      `${methodName} took ${(end - start).toFixed(2)} ms`,
    );

    return result;
  };
};

export class Pokemon {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  @MeasureTime
  speak(): string {
    return `${this.name} says hello!`;
  }
}

export const charmanderWithDecorator = new Pokemon("Charmander");
