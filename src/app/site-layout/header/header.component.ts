import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/products/service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  
  searchData:any=""

constructor(private ds:DataService)
{

}


ngOnInit(): void {
  throw new Error('Method not implemented.');
}



accessData(event:any){

  this.searchData=event.target.value
 // console.log(this.searchData);
  this.ds.search.next(this.searchData)
}

}
