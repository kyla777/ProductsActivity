import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pm-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  @Output() addProductEvent: EventEmitter<any> = new EventEmitter();

  productName: string;
  productCode: string;
  releaseDate: string;
  description: string;
  price: number;
  starRating: number;
  imageUrl: string;

  constructor() { }

  addMember() {
    if(this.productName != "" && this.productCode != "") {
      this.addProductEvent.emit({
        productName: this.productName,
        productCode: this.productCode,
        releaseDate: this.releaseDate,
        description: this.description,
        price: this.price,
        starRating: this.starRating,
        imageUrl: this.imageUrl
      })
    }
    else {
      
    }
    

    console.log(this.productName + " " + this.productCode + " "
    + this.releaseDate + " " + this.description + " " + this.price
    + " " + this.starRating + " " + this.imageUrl);

    this.productName = "";
    this.productCode = "";
    this.releaseDate = "",
    this.description = "";
    this.price = undefined;
    this.starRating = undefined;
    this.imageUrl = "";
  }

}
