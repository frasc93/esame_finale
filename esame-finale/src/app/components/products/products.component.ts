import { Component } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor (private productService: ProductsService) {}

  products: any[] = [];
  filteredProducts!: any[]; 
  searchQuery: string = '';
  selectedCategory: string = 'Tutte';

  ngOnInit(){
    this.getProducts();
 
  }

  getProducts(){
    this.productService.getProducts().subscribe({
      next: (res: any) => {
        this.products = res;
        this.filteredProducts = [...this.products];
        this.filterProducts();
      }
    })
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
      (this.selectedCategory === 'Tutte' || product.category.toLowerCase() === this.selectedCategory.toLowerCase())
    );
    
  }
  
}
