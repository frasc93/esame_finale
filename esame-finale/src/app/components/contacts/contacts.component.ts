import { Component } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  products: any = [];
  
  constructor ( private productService: ProductsService, private location: Location,) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  navigateTo() {
    this.location.back();
  }

}
