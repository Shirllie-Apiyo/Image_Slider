import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  // imgCollection =   [
  //   {
  //     image:'/assets/img6.jpg',
  //     'thumbImage': '/assets/img2.jpg',
  //     alt :'Car',
  //     title: 'Car'
  //   },
  //   {
  //     image:'/assets/img7.jpg',
  //     'thumbImage': '/assets/img7.jpg',
  //     alt :'Car',
  //     title: 'Car'
  //   },
  //   {
  //     image:'/assets/merc.jpg',
  //     'thumbImage': '/assets/merc.jpg',
  //     alt :'Car',
  //     title: 'Car'
  //   },
  //   {
  //     image:'/assets/vin.jpg',
  //     'thumbImage': '/assets/vin.jpg',
  //     alt :'Car',
  //     title: 'Car'
  //   },
  //   {
  //     video:'https://youtu.be/JXVta1f8qeM',
  //     alt :'Cars',
  //     title: 'About Cars'
  //   }
  // ]
  imgCollection: any;
  constructor(    private httpClient:HttpClient) { }

  ngOnInit(): void {


    this.httpClient.get("http://127.0.0.1:5000/api/products/getslider")
    .subscribe((data) => this.displaydata(data))
  }


  httpdata: any
  displaydata(data: any) {
    this.imgCollection = data
    console.log(data)
  }

}
