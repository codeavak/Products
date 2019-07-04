import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root"
})
export class ProdcutService {
  prodBaseUrl = "https://johnnyproducts.azurewebsites.net/api/products";
  baseUrl = "https://localhost:44325/api/products";

  constructor(private http: HttpClient) {}

  getProducts = () => this.http.get(this.baseUrl);

  getProduct = id => this.http.get(this.baseUrl + "/" + id);

  postProduct = newProduct => this.http.post<Product>(this.baseUrl, newProduct);
}
