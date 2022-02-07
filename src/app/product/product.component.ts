import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Product } from './product';
declare let alertify:any;


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title= "Ürün Listesi"
  filterText=""

  products :Product[] =[
    {id:1, name:"Laptop", price:2500,categoryId:1,description:"Asus ZenBook",imageUrl:"https://media.istockphoto.com/photos/isolated-laptop-on-white-background-stock-photo-picture-id1294325987?k=20&m=1294325987&s=612x612&w=0&h=xZItYJyt0dk3HToR3gQF72PnA2XSulp6GqcoYCpNXFo="},
    {id:2, name:"Maouse", price:125,categoryId:2,description:"A4 Tech",imageUrl:"https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60="},
    {id:3, name:"Araba", price:25000,categoryId:3,description:"BMW",imageUrl:"https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60="},
    {id:4, name:"Kitap", price:50,categoryId:4,description:"Roman",imageUrl:"https://media.istockphoto.com/photos/winter-tea-picture-id1276848067?b=1&k=20&m=1276848067&s=170667a&w=0&h=BYrycl6Qo0VFvVlDphEOqk27q1mLvfauEuHVDLfiklQ="}
  ]

  ngOnInit(): void {
  }
//event binding 
  addToCart(product){
    alertify.success(product.name + " added ")
  }


}
