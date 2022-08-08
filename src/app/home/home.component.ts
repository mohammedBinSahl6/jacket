import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tshirts = [
    {
      title : 'T-SHIRT GHOST',
      price : 25,
      id:1,
      image: '../assets/images/t1.png'
    },
    {
      title : 'T-SHIRT premium',
      price : 25,
      id:2,
      image: '../assets/images/t2.png'
    },
    {
      title : 'T-SHIRT DARK',
      price : 25,
      id:3,
      image: '../assets/images/t3.png'
    }, {
      title : 'T-SHIRT CHAN',
      price : 25,
      id:4,
      image: '../assets/images/t4.jpg'
    }, {
      title : 'T-SHIRT FIFTH',
      price : 25,
      id:5,
      image: '../assets/images/t5.jpg'
    }, {
      title : 'T-SHIRT BOB',
      price : 25,
      id:6,
      image: '../assets/images/t6.png'
    }, {
      title : 'T-SHIRT SPIDER',
      price : 25,
      id:7,
      image: '../assets/images/t7.png'
    }, {
      title : 'T-SHIRT HOT',
      price : 25,
      id:8,
      image: '../assets/images/t8.jpg'
    }, {
      title : 'T-SHIRT PROXY',
      price : 25,
      id:9,
      image: '../assets/images/t9.jpg'
    }, {
      title : 'T-SHIRT DIET',
      price : 25,
      id:10,
      image: '../assets/images/t10.jpg'
    }, {
      title : 'T-SHIRT GANG',
      price : 25,
      id:11,
      image: '../assets/images/t11.jpg'
    }, {
      title : 'T-SHIRT MONSTER',
      price : 25,
      id:12,
      image: '../assets/images/t12.jpg'
    }, {
      title : 'T-SHIRT BATTLE',
      price : 25,
      id:13,
      image: '../assets/images/t13.png'
    }
  ];
  caps = [
    {title : '1# CAP', id : 1 , image : '/assets/images/cap1', price : 10},
    {title : '2# CAP', id : 2 , image : '../assets/images/cap2', price : 10},
    {title : '3# CAP', id : 3 , image : '../assets/images/cap3', price : 10},
    {title : '4# CAP', id : 4 , image : '../assets/images/cap4', price : 10},
    {title : '5# CAP', id : 5 , image : '../assets/images/cap5', price : 10},
    {title : '6# CAP', id : 6 , image : '../assets/images/cap6', price : 10},
    {title : '7# CAP', id : 7 , image : '../assets/images/cap7', price : 10},
    {title : '8# CAP', id : 8 , image : '../assets/images/cap8', price : 10},
    {title : '9# CAP', id : 9 , image : '../assets/images/cap9', price : 10},
    {title : '10# CAP', id : 10 , image : '../assets/images/cap10', price : 10},
    {title : '11# CAP', id : 11 , image : '../assets/images/cap11', price : 10},
    {title : '12# CAP', id : 12 , image : '../assets/images/cap12', price : 10},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
