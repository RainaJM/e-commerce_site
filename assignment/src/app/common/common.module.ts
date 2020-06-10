import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CommonRoutingModule } from "./common-routing.module";
import { HeaderComponent } from "./header/header.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FooterComponent } from "./footer/footer.component";
@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, CommonRoutingModule, MatFormFieldModule],
  exports: [HeaderComponent, FooterComponent],
})
export class AppCommonModule {}
