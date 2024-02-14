export default class OrderItem {
  private _id: string;
  private _productId: string;
  private _name: string;
  private _price: number;
  private _quantity: number;

  constructor(id: string, name: string, price: number, quantity: number, productId: string) {
    this._id = id;
    this._productId = productId;
    this._name = name;
    this._price = price;
    this._quantity = quantity;
    this.validate();
  }

  get id(): string {
    return this._id;
  }

  get productId(): string {
    return this._productId;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  get quantity(): number {
    return this._quantity;
  }

  validate(): boolean {
    if(this._quantity <= 0) {
        throw new Error("Quantity must be greater than 0");
    }
    return true;
  }

  orderItemTotal(): number {
    return this._price * this._quantity;
  }
}
