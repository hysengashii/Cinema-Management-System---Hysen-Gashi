import { Router } from '@angular/router';
import { CategoriesService } from './../../categories-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {
  deleteCategorieModal: boolean = false;
  clickedCategorieData: any;
  categorieList: any[] = [];

  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.categorieList = this.categoriesService.getCategories();
  }

  deleteCategorie(item: any): void {
    this.clickedCategorieData = item;
    this.deleteCategorieModal = true;
  }

  confirmDeleteCategorie(): void {
    this.categoriesService.deleteCategorie(this.clickedCategorieData.id);
    this.closeDeleteCategorieModal();
    this.fetchCategories();
    window.alert('Category deleted!');
  }

  closeDeleteCategorieModal(): void {
    this.deleteCategorieModal = false;
  }

}
