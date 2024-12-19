import { LucideIcon } from 'lucide-react';

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  icon: LucideIcon;
  name: string;
  description: string;
  specifications: ProductSpecification[];
  price: string;
  image: string;
}