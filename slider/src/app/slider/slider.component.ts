import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  imgCollection: Array<object> =[
    {
      image:'/assets/img6.jpg',
      'thumbImage': '/assets/img2.jpg',
      alt :'Car',
      title: 'Car'
    },
    {
      image:'/assets/img7.jpg',
      'thumbImage': '/assets/img7.jpg',
      alt :'Car',
      title: 'Car'
    },
    {
      image:'/assets/merc.jpg',
      'thumbImage': '/assets/merc.jpg',
      alt :'Car',
      title: 'Car'
    },
    {
      image:'/assets/vin.jpg',
      'thumbImage': '/assets/vin.jpg',
      alt :'Car',
      title: 'Car'
    },
    {
      video:'https://youtu.be/JXVta1f8qeM',
      alt :'Cars',
      title: 'About Cars'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
