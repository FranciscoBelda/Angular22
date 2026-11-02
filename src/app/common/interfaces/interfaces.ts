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
  id: number;
  title: string;
  price: number;
  stock: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Category {
  id: number;
  name: string;
  active: boolean;
  icon: string;
}

export interface UserProfile {
  name: string;
  city: string;
  isPremium: boolean;
}
