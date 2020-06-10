import { Component, OnInit, HostListener } from "@angular/core";
import { ProductService } from "../product.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  public productList = [];
  public quantitySelected: number;
  constructor(private productService: ProductService, private router: Router) {
    this.quantitySelected = Number(sessionStorage.getItem("quantitySelected"));
  }

  ngOnInit() {
    this.getProductList();
  }
  getProductList() {
    this.productService
      .getList("https://www.mocky.io/v2/5eda4003330000740079ea60")
      .subscribe(
        (response) => {
          this.productList = response.data;
        },
        (err) => {}
      );
  }
  getProductDetails(item) {
    this.router.navigate(["/product/detail"], item);
  }
  @HostListener("window:beforeunload") goToPage() {
    sessionStorage.clear();
    this.router.navigate(["/product"]);
  }
}
