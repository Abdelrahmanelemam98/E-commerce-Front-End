export class Product {
  constructor(
    public productCode: number,
    public name: string,
    public categories: string,
    public image: string,
    public minimumQuantity: number,
    public price: number,
    public discountRate: number
  ) {}
}
