export class Product {
  public id: string;
  public name: string;
  public image: string;
  public description: string;
  public price: string;
  public quantity: string;
  constructor(d: any = {}) {
    this.id = d.id || "";
    this.name = d.name || "";
    this.image = d.image || "";
    this.description = d.description || "";
    this.price = d.price || "";
    this.quantity = d.quantity || "";
  }
}
