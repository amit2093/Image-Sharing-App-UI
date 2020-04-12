import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  selectedOption: string;
  patientDetails: any;
  imagePath: any;
  imgURL: any;
  formData: any;
  uploadData: any;
  selectAttribute: any;
  loggedInUserId: any;

  constructor(private service : ApiCallsService) { }

  ngOnInit() {
    this.loggedInUserId = sessionStorage.getItem("USER_ID");
  }

  uploadDocs(docsUpload: NgForm) {
    this.uploadData = {
      'imageName': docsUpload.value.fileName,
      'description': docsUpload.value.description,
      'userId':this.loggedInUserId,
      'image': this.imgURL
    };
    this.service.uplaodfile(this.uploadData).subscribe(d => console.log(d));
  }

  selectChangeHandler (event: any) {
    this.selectAttribute = event.target.value;
  }

  previewFile(files) {
    if (files.length === 0) {
      return;
    }
    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      this.imgURL = reader.result;
    };
  }
}
