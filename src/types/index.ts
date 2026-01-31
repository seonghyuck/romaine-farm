export interface Product {
  id: string;
  name: string;
  price: number;
  desc: string;
  image: string;
  category?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
}
