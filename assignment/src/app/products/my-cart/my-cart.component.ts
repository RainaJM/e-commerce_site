import { Component, OnInit, HostListener, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-my-cart",
  templateUrl: "./my-cart.component.html",
  styleUrls: ["./my-cart.component.scss"],
})
export class MyCartComponent implements OnInit {
  public cartProducts = [];
  public quantitySelected: number = 0;
  constructor(private router: Router) {
    const itemInCart = JSON.parse(sessionStorage.getItem("itemInCart"))
      ? JSON.parse(sessionStorage.getItem("itemInCart"))
      : [];
    // const data = this.router.getCurrentNavigation().extras;
    // itemInCart.push(data);
    // sessionStorage.setItem("itemInCart", JSON.stringify(itemInCart));
    this.cartProducts = itemInCart;
  }

  ngOnInit() {
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.quantitySelected += Number(this.cartProducts[i].quantity);
      sessionStorage.setItem(
        "quantitySelected",
        this.quantitySelected.toString()
      );
    }
  }
  goBack() {
    this.router.navigate(["/"]);
  }
  @HostListener("window:load")
  onLoad() {
    sessionStorage.clear();
    this.router.navigate(["/"]);
  }
}
