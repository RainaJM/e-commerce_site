import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { MyCartComponent } from "./my-cart/my-cart.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/product",
    pathMatch: "full",
  },
  {
    path: "product",
    component: ProductListComponent,
  },
  {
    path: "product/detail",
    component: ProductDetailComponent,
  },
  {
    path: "my-cart",
    component: MyCartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
