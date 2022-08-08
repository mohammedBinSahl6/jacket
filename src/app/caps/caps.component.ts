import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'caps',
  templateUrl: './caps.component.html',
  styleUrls: ['./caps.component.css']
})
export class CapsComponent implements OnInit {
  caps = [
    {title : '1# CAP', id : 1 , image : '../assets/images/cap1.jpg', price : 10},
    {title : '2# CAP', id : 2 , image : '../assets/images/cap2.jpg', price : 10},
   
    {title : '5# CAP', id : 5 , image : '../assets/images/cap13.jpg', price : 10},
    {title : '6# CAP', id : 6 , image : '../assets/images/cap6.jpg', price : 10},
    {title : '7# CAP', id : 7 , image : '../assets/images/cap7.jpg', price : 10},
    {title : '8# CAP', id : 8 , image : '../assets/images/cap8.jpg', price : 10},
    {title : '9# CAP', id : 9 , image : '../assets/images/cap9.jpg', price : 10},
    {title : '10# CAP', id : 10 , image : '../assets/images/cap10.jpg', price : 10},
    {title : '11# CAP', id : 11 , image : '../assets/images/cap11.jpg', price : 10},
 
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
