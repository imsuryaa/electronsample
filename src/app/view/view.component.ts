import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router : Router) {
    console.log(this.route.snapshot.url[0].path)
  }

  ngOnInit() {
  }

}
