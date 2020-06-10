import {
  Component,
  OnInit,
  AfterViewChecked,
  HostListener,
} from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../product";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  public productDetail;
  public quantityArr = [];
  public quantitySelected;
  constructor(private router: Router) {
    const data = this.router.getCurrentNavigation().extras;
    this.productDetail = new Product(data);
    this.quantitySelected = Number(sessionStorage.getItem("quantitySelected"));
  }

  ngOnInit() {
    if (this.productDetail) {
      let arr = [];
      for (let i = 0; i < Number(this.productDetail.quantity); i++) {
        arr.push(i + 1);
      }
      this.quantityArr = arr;
    }
  }
  addToCart() {
    const itemInCart = sessionStorage.getItem("itemInCart")
      ? JSON.parse(sessionStorage.getItem("itemInCart"))
      : [];
    itemInCart.push(this.productDetail);
    sessionStorage.setItem("itemInCart", JSON.stringify(itemInCart));
    this.router.navigate(["/my-cart"], this.productDetail);
  }
  @HostListener("window:beforeunload") goToPage() {
    sessionStorage.clear();
    this.router.navigate(["/product"]);
  }
}
