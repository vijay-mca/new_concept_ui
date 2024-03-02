import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { log } from 'console';
import { stat } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle();
  }

  setTitle() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const pageTitle = this.getPageTitle(this.router.routerState, this.router.routerState.root).join(' - ');
        this.titleService.setTitle(pageTitle);
      }
    });
  }


  private getPageTitle(state: any, parent: any): string[] {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(...this.getPageTitle(state, state.firstChild(parent)));
    }
    return data;
  }
}
