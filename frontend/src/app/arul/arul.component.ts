import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service'

@Component({
  selector: 'app-arul',
  templateUrl: './arul.component.html',
  styleUrls: ['./arul.component.css']
})
export class ArulComponent implements OnInit {

data:any=[]
  constructor(private service :ServiceService) { }
  // let details=[];

 
 click(){
   document.getElementById("custsignup").style.display="none";
   document.getElementById("login").style.display="block";

 }

clickk(name,empid,mail,pwd){
  console.log(name,empid,mail,pwd);

  this.service.usersignup(name,empid,mail,pwd).subscribe();
}

userlogin(name,empid,pwd)
{
  this.service.userlog(name,empid,pwd).subscribe();
}


//name.value,empid.value,mail.value,pwd.value

  ngOnInit() {
    
  }
 


}
