import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  getAllFilesByLoggedInUser: any;
  selectedImage: any;
  userData = [];
  imageId: any;
  getAllRegisteredUsers = [];
  loggedInUserId: any;

  constructor(private service: ApiCallsService) { }

  ngOnInit() {
    this.loggedInUserId = sessionStorage.getItem("USER_ID");

    this.service.getSharedByMeClicked().subscribe(data => {
      if (data === 1) {
        this.service.sharedByMe(this.loggedInUserId).subscribe(sharedByMeData => {
          this.getAllFilesByLoggedInUser = sharedByMeData.response;
          this.selectedImage = sharedByMeData.response[0];
          this.service.setSharedByMeClicked(0);
        });
      }
    });

    this.service.getSharedToMeClicked().subscribe(data => {
      if (data === 1) {
        this.service.sharedToMe(this.loggedInUserId).subscribe(sharedToMeData => {
          this.getAllFilesByLoggedInUser = sharedToMeData.response;
          this.selectedImage = sharedToMeData.response[0];
          this.service.setSharedToMeClicked(0);
        });
      }
    });

    this.service.getUserData(this.loggedInUserId).subscribe(data => {
      this.getAllFilesByLoggedInUser = data.fileList;
      this.selectedImage = data.fileList[0];
    });

    this.service.getGoHomeClicked().subscribe(data => {
      if (data === 1) {
        this.service.getUserData(this.loggedInUserId).subscribe(userDataVal => {
          this.getAllFilesByLoggedInUser = userDataVal.fileList;
          this.selectedImage = userDataVal.fileList[0];
          this.service.setGoHomeClicked(0);
        });
      }
    });
  }

  showImage(image) {
    this.selectedImage = image;
  }

  shareImageTo(user) {
    const obj = {
      "photoId": this.imageId,
      "shareFrom": this.loggedInUserId,
      "shareTo": user.registrationId
    };

    this.service.shareImages(obj).subscribe(data => {
      console.log(data);
    })
  }

  shareImage(image) {
    this.imageId = image.imageId;
    this.service.getAllUser().subscribe(users => {
      this.getAllRegisteredUsers = null;
      this.getAllRegisteredUsers = users;
    });
  }
}
