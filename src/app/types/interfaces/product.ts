export default interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  raiting: {
    rate:number;
    count: number;
  }
  title: string;
}