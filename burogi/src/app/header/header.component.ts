import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  bgcolor = '#424242' ;
  nav: any[] = [
    {
      name: 'Entertainment',
      link: 'entertainment',
      color: '#EF6C00',
    },
    {
      name: ' Games',
      link: 'games',
      color: '#F44336',
    },
    {
      name: 'Books',
      link: 'books',
      color: '#3F51B5',
    },
    {
      name: 'History',
      link: 'history',
      color: '#795548',
    },
    {
      name: 'Life',
      link: 'life',
      color: '#4CAF50',
    },
    {
      name: 'General',
      link: 'general',
      color: '#607D8B',
    }]

  constructor() { }

  ngOnInit() {
  }

  onClick(e) {
    // console.log(e);
    for (const nav of this.nav) {
      if (e.srcElement.innerHTML === nav.name) {
        this.bgcolor = nav.color;
      }
    }
  }

  getColor() {
    return this.bgcolor;
  }

  onClickStart() {
    this.bgcolor = '#424242';
  }
}
