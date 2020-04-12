import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallsService } from '../api-calls.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router,
              private service: ApiCallsService) { }

  ngOnInit() {
  }
  
  upload(){
    this.router.navigate(["/upload"]);
  }

  goHome(){
    this.service.setGoHomeClicked(1);
    this.router.navigate(['/timeline']);
  }

  SharedByMe(){
    this.service.setSharedByMeClicked(1); 
    this.router.navigate(['/timeline']);
  }
  
  SharedToMe(){
    this.service.setSharedToMeClicked(1); 
    this.router.navigate(['/timeline'])
  }
}
