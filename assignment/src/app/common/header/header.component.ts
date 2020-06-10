import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() public quantity;
  constructor(private router: Router) {}

  ngOnInit() {}
  goToMyCart() {
    this.router.navigate(["/my-cart"]);
  }
}
