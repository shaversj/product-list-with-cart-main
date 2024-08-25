export interface Product {
  name: string;
  category: string;
  price: number;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
    thumbnail: string;
  };
  quantity?: number;
}
