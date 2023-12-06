export interface IProductData {
  data: {
    products: IProduct[];
  };
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  thumbnail: string;
  category: Category;
}

interface Category {
  name: string;
}
