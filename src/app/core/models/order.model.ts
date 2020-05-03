export interface Order{ 
  id: number;
  idProduct: string;
  titleProduct: string;
  color: string;
  size: string;
  priceProduct: number;
  discount: boolean;
  percentaje: number;
  valueDiscount: number;
  amound: number;
  totalPrice: number;
}