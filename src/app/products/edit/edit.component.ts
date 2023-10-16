import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
pid:any=""
pdata:any=[]

constructor(private ar:ActivatedRoute,private ds:DataService,private rout:Router){}


  ngOnInit(): void {
   

    this.ar.params.subscribe(data=>{
console.log(data["id"]);
this.pid=data["id"]
//console.log(this.pid);

    })

this.ds.getProduct(this.pid).subscribe({
next:(result:any)=>{
  this.pdata=result
  console.log(this.pdata);
  

  //console.log(result);
  
}

})

  }

update()
{

this.ds.updataProduct(this.pid,this.pdata).subscribe({

next:(result:any)=>{
  alert("product data updated")
  this.rout.navigateByUrl(`products/view-products/${this.pid}`)
}



})


}



}
