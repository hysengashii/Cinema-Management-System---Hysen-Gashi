import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../../categories-service';

@Component({
  selector: 'app-create-categorie',
  templateUrl: './create-categorie.component.html',
  styleUrls: ['./create-categorie.component.css']
})
export class CreateCategorieComponent implements OnInit {
  categorie: any = {};

  constructor(private categoriesService: CategoriesService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    try {
      this.categoriesService.addCategorie(this.categorie);
      this.categorie = {};
      alert('Categorie added successfully!');
      this.router.navigate(['/categories/all-categories']);
    } catch (error) {
      alert((error as any).message);
    }
  }
}
