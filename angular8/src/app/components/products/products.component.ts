import { ProdcutService } from "./../../services/prodcut.service";
import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products: any = [];
  closeResult: string;
  errorMessage = "";
  modalRef: NgbModalRef;

  constructor(
    private service: ProdcutService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.service.getProducts().subscribe(
      succ => {
        console.log(succ);
        this.products = succ;
      },
      err => console.log(err)
    );
  }

  submitForm = (form, content) => {
    console.log(form.value);
    this.service.postProduct(form.value).subscribe(
      succ => {
        this.products.push(succ);
        console.log(succ);
        content.dismiss();
      },
      err => {
        console.log(err.error);
        this.errorMessage = err.error;
      }
    );
  };

  open(content) {
    this.modalRef = this.modalService.open(content, {
      size: "lg",
      ariaLabelledBy: "modal-basic-title"
    });
  }
  close() {
    this.modalRef.close();
  }
}
