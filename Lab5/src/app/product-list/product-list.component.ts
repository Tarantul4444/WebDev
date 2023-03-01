import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    products = [...products];

    share() {
        window.location.href = "https://web.telegram.org/z/";
    }
  
    onNotify() {
      window.alert('You will be notified when the product goes on sale');
    }

    filter() {
      let select = document.getElementById('sele') as HTMLSelectElement;
      let text = select.options[select.selectedIndex].text
      this.products = products.filter(prod => {
          if(prod.type==text){
            return prod
          }
      })
    }
    delete(elem: string){
      let ele = document.getElementById(elem)
      ele?.remove()
   } 
   like(){
      
   }
}