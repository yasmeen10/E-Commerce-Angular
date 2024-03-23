import { Component, Input, OnInit, Output, input } from '@angular/core';
import { IProduct } from '../../../modles/product.modle';
import { ProductsService } from '../../services/product/products.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Router } from '@angular/router';
import { CartRequestService } from '../../services/cart/cart.request.service';
import EventEmitter from 'events';
import { CartService } from '../../services/cart/cart.service';
import { ICart } from '../../../modles/cart.modle';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls:[ './products.component.css'],
})
export class ProductsComponent implements OnInit {
  product: IProduct[] = [];
  loading: boolean = false;
  
  
 

  @Input() cartItem: ICart = {
    product: {
      _id: '',
      title: '',
      description: '',
      price: 0,
      discount: 0,
      stock: 0,
      brand: '',
      category: '',
      thumbnail: '',
      images: [''],
      rating: 0,
      reviews: [''],
      createdAt: '',
      updatedAt: '',
    },
    isInWishList: false,
    quantity: 0,
  };
  clickedButtonIndex: number | null = null;


  constructor(
    private productService: ProductsService,
   
  ) {}

  ngOnInit(): void {
    // this.loading==false
    this.getProducts();
   
  }

  

  sortProductByPrice(){
    this.product.sort((a,b)=>a.price - b.price)
  }
  getProducts() {
    this.loading = true;
    this.productService.getAllProducts().subscribe(
      (res: any) => {
        // console.log(res);
        this.product = res;
        this.loading = false;

       
      },
      (err) => {
        alert(err.message);
        this.loading = false;
        
        console.log(err.message);
      }
      );
    }
    
   
  
  
  
  
 
 

}
