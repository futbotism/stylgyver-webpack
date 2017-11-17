export class Property {
  name: string;
  type: string;
  decorator?: string;

  constructor(name: string, type: string, decorator?: string) {
    this.name = name;
    this.type = type;
    this.decorator = decorator;
  }
}
