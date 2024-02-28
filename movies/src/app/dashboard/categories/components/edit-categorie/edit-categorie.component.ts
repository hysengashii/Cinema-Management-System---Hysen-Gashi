import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router module
import { CategoriesService } from '../../categories-service';

@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.css']
})
export class EditCategorieComponent implements OnInit {
  categorieId!: number;
  categorie: any = {};

  constructor(private categoriesService: CategoriesService,
  private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit(): void {
    this.categorieId = +this.route.snapshot.params['id'];
    this.categorie = this.categoriesService.getCategorieById(this.categorieId);
  }

  onSubmit() {
    try {
      this.categoriesService.updateCategorie(this.categorieId, this.categorie);
      alert('Categorie updated successfully!');
      this.router.navigate(['/categories/all-categories']);
    } catch (error) {
      alert((error as any).message);
    }
  }
}
