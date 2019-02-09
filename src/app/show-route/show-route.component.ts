import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-route',
  templateUrl: './show-route.component.html',
  styleUrls: ['./show-route.component.css']
})
export class ShowRouteComponent implements OnInit {
  currentRoute: string;

  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit() {
    this.currentRoute = this.router.url;
  }

}
