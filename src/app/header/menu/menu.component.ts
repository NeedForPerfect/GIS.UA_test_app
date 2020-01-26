import { Component, OnInit } from '@angular/core';
import { menuItem } from 'src/app/models/models';

@Component({
  selector: 'suppliers-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuLinks: menuItem[] = [
      { title: 'SUPPLIERS', link: '' },
      { title: 'ABOUT', link: '/about' },
      { title: 'CONTACTS', link: '/contacts' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
