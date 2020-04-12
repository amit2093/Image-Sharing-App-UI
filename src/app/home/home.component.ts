import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallsService } from '../api-calls.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private router: Router,
              private service: ApiCallsService) { }

  ngOnInit() {
  }

  goLogin(login){
    const obj = {
      'name': login.name,
      'password': login.password
    }
    console.log(obj);
    this.service.login(obj).subscribe(data => {
      if(data){
        console.log(data);
        sessionStorage.setItem("USER_ID", data.response.registrationId)
        this.router.navigate(['timeline']);
      }
    });
  }

  goRegistration(reg){
    const obj = {
      'name': reg.name,
      'password': reg.password,
      'state': reg.state,
      'dob': reg.dob,
      'email': reg.email 
    }
    this.service.register(obj).subscribe(data => {
      if(data){
        console.log(data);
      }
    });
  }
}
