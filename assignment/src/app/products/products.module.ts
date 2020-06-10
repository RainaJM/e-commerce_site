import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsRoutingModule } from "./products-routing.module";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { MyCartComponent } from "./my-cart/my-cart.component";
import { HeaderComponent } from "../common/header/header.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatBadgeModule } from "@angular/material/badge";
import { FormsModule } from "@angular/forms";
import { FooterComponent } from "../common/footer/footer.component";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    MyCartComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    FormsModule,
  ],
})
export class ProductsModule {}
