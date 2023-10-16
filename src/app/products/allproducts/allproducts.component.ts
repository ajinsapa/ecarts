import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  allProducts: any = []
  categoryProducts:any=[]
  searchString:any=""
  constructor(private ds: DataService) {

  }








  ngOnInit(): void {

    this.ds.getAllProducts().subscribe({
      next: (result: any) => {
        this.allProducts = result
        this.categoryProducts=this.allProducts
       // console.log(this.allProducts);
       console.log(this.categoryProducts);
       
      }
      })




this.ds.search.subscribe((data:any)=>{

this.searchString=data

})



  }


  categoryProduct(catId:any){
   this.categoryProducts=this.allProducts.filter((item:any)=>
item["categoryid"]==catId || catId=="")

//console.log(this.categoryProducts);


  }

}
