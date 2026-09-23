export type Role = 'admin' | 'customer' | 'guest';
export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  phoneNumber?: string;
}

export type CategoryType = 'electronics' | 'clothing' | 'books' | 'home';
export interface Rating {
  rate: number;
  count: number;
}
export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: CategoryType;
  imageUrl: string;
  rating: Rating;
}

export interface Category {
  id: number;
  name: string;
  active: boolean;
  icon: string;
}
