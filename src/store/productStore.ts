import { observable, action, makeObservable, runInAction } from 'mobx';
import { IProduct } from '../common/types';

export class ProductStore {
  categories: string[] = [];
  selectedProduct: IProduct | null = null;
  searchTerm: string = '';

  constructor() {
    makeObservable(this, {
      categories: observable,
      selectedProduct: observable,
      searchTerm: observable,
      addCategory: action,
      removeCategory: action,
      setSelectedProduct: action,
      setSearchTerm: action
    });
  }

  addCategory = (val: string) => {
    this.categories.push(val);
  };

  removeCategory = (val: string) => {
    this.categories = this.categories.filter((f) => f !== val);
  };

  setSelectedProduct = (product: IProduct) => {
    runInAction(() => {
      this.selectedProduct = product;
    });
  };

  setSearchTerm = (val: string) => {
    this.searchTerm = val;
  };
}

export const productStore = new ProductStore();
