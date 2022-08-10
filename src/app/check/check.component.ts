import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
submit(){
  alert('your items bought successfully ! ')
}
  constructor() { }

  ngOnInit(): void {
  }

}
