export interface Product{
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  discount?: boolean;
  percentaje?: number;
  images?: string[];
}
