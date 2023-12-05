import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  productId!: number;
  products: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}


  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      this.productService.getProducts().subscribe(
        data => {
          this.products = data.find((product: { id: number; }) => product.id === this.productId);
        },
        error => {
          console.error('Error', error);
        }
      );
    });
  }
}
