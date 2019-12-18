import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  public authorId: '';
  constructor(activatedRoute: ActivatedRoute) {
    this.authorId = activatedRoute.snapshot.params['id']
  }

  ngOnInit() {
  }

}
