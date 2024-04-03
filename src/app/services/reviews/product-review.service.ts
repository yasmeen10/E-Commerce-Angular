import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reviews } from '../../../modles/review.modle';
@Injectable({
  providedIn: 'root'
})
export class ProductReviewService {

  constructor(private http : HttpClient) { }

  getreviewsById(productId:string){
    return this.http.get<Reviews[]>(`http://localhost:3010/api/v1/products/${productId}/reviews`);
  }
  //
  removeDelete(productId:string){
    return this.http.delete<Reviews[]>(`http://localhost:3010/api/v1/products/${productId}/reviews`);
  }
  //
  addNewReview(productId:string,reviews:Reviews){
    return this.http.post<Reviews[]>(`http://localhost:3010/api/v1/products/${productId}/reviews`,reviews);
  }
}
// 65f65b6cbc8b5a64c143026c