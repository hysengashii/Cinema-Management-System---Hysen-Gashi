import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private localStorageKey = 'categories';

  constructor() {
    this.initCategories();
  }

  initCategories() {
    if (!localStorage.getItem(this.localStorageKey)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }
  }

  getCategories(): any[] {
    const categories = localStorage.getItem(this.localStorageKey);
    return categories ? JSON.parse(categories) : [];
  }

  getCategorieById(categorieId: number): any {
    const categories = this.getCategories();
    return categories.find(categorie => categorie.id === categorieId);
  }

  addCategorie(categorie: any) {
    const categories = this.getCategories();
    const isDuplicate = categories.some(existingCategorie =>
      existingCategorie.name === categorie.name
    );

    if (isDuplicate) {
      throw new Error('A categorie with this name already exists.');
    }
    categorie.id = new Date().getTime();
    categories.push(categorie);
    localStorage.setItem(this.localStorageKey, JSON.stringify(categories));
  }

  deleteCategorie(categorieId: number) {
    let categories = this.getCategories();
    categories = categories.filter(categorie => categorie.id !== categorieId);
    localStorage.setItem(this.localStorageKey, JSON.stringify(categories));
  }

  updateCategorie(categorieId: number, updatedCategorieData: any) {
    let categories = this.getCategories();
    const index = categories.findIndex(categorie => categorie.id === categorieId);
    if (index !== -1) {
      categories[index] = { ...categories[index], ...updatedCategorieData };
      localStorage.setItem(this.localStorageKey, JSON.stringify(categories));
    }
  }
}
