import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriesService } from '../../categories-service';

@Component({
  selector: 'app-create-categorie',
  templateUrl: './create-categorie.component.html',
  styleUrls: ['./create-categorie.component.css']
})
export class CreateCategorieComponent implements OnInit {
  categorieForm!: FormGroup;

  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    private formBuilder: FormBuilder 
  ) {}

  ngOnInit(): void {
    this.categorieForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    try {
      this.categoriesService.addCategorie(this.categorieForm.value);
      this.categorieForm.reset();
      alert('Categorie added successfully!');
      this.router.navigate(['/categories/all-categories']);
    } catch (error) {
      alert((error as any).message);
    }
  }
}
