import { Component, OnInit } from '@angular/core';
import { AccountsService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'services';
  accounts:{name:string,status:string}[]=[]
 constructor(private accountsService:AccountsService){}
 ngOnInit(){
   this.accounts = this.accountsService.accounts
 }
}
