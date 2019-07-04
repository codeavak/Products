import { ProdcutService } from "./../../services/prodcut.service";

import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  routeParamId: string;
  product: any;
  productLoaded: boolean = false;
  producErrored: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProdcutService
  ) {}

  ngOnInit() {
    this.routeParamId = this.route.snapshot.paramMap.get("id");
    console.log(this.routeParamId);
    this.product = this.service.getProduct(this.routeParamId).subscribe(
      succ => {
        this.product = succ;
        this.productLoaded = true;
        console.log(succ);
      },
      err => {
        this.producErrored = true;
        console.log(err);
      }
    );
  }

  navigateToList = () => {
    this.router.navigateByUrl("");
  };
}
