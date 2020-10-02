import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  lat: number;
  lng: number;

  ngOnInit(): void {
    this.lat = 17.445790;
    this.lng = 78.445680;
  }

}
