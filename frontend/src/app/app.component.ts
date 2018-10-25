
import { Component } from '@angular/core';
import { ServiceService} from './service.service'
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { HammerGesturesPlugin } from '@angular/platform-browser/src/dom/events/hammer_gestures';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  create:FormGroup;
  public array:any=[];
  constructor(private ab:ServiceService,private c:FormBuilder){  }
  // print(uname,mail,psw)
  // {
  //   this.ab.register(uname,mail,psw).subscribe((data)=>{
    
  //     // this.array=data['main'];
  //     console.log(data);
  //     alert("Submitted : Go and view in Db");
  // })
  // }
//   open()
//   {
//     document.getElementById('openid').style.display="none";
//     document.getElementById('btnid').style.display="show";
//   }
//   close()
//   {
//     document.getElementById("openid").style.display="none";
//     document.getElementById('btnid').style.display="none";
//   }
// }


// this.userService.getUserProfile().subscribe(
//   res => {
//     this.userDetails = res['user'];
//   },
//   err => { 
//     console.log(err);
//uname.value,psw.value
//   }
// );

show(){

  document.getElementById('mainid').style.display="none";
}

note(){
  document.getElementById('mainid').style.display="none";

}
z:any=0;   

openNav() {
  this.z++;     if(this.z%2!=0){
       document.getElementById("mySidenav").style.width = "140px";
  
  }
   else{
   document.getElementById("mySidenav").style.width = "0px";
   }   
  }
  
   ngOnInit()
   {
    document.getElementById("mySidenav").style.width = "140px";
    // document.getElementById("login").style.display="none";

  }
 
}
