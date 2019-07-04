import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  @Input() product: any;
  name: string;
  description?: string;
  quantity: number;
  constructor(private router: Router) {}

  ngOnInit() {
    this.name = this.product.name;
    this.description = this.product.description;
    this.quantity = this.product.quantity;
  }

  navigateToDetailsPage = id => this.router.navigate(["/products/" + id]);
}
