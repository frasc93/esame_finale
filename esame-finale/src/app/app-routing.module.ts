import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  {path: '', component: ProductsComponent, title: 'Homepage'},
  {path: 'product/:id', component: ProductDetailComponent, title: 'Dettaglio Prodotto'},
  {path: 'contacts', component: ContactsComponent, title: 'Contatti'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
