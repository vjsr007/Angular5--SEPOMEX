import { Component, ChangeDetectorRef, OnDestroy, AfterViewInit, OnInit, OnChanges } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuItems } from './shared/menu-items/menu-items';
import {MenuItem} from 'primeng/api';
import { Router, NavigationStart, NavigationError, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, AfterViewInit, OnInit, OnChanges {

  mobileQuery: MediaQueryList;
  private items: MenuItem[];
  private home: MenuItem;
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    router.events.subscribe( (event) => {

      if (event instanceof NavigationStart) {
      }

      if (event instanceof NavigationEnd) {
        this.items = [
            {label: this.router.url.toString().replace('/', '').toUpperCase(), routerLink: this.router.url }
        ];

        this.home = {icon: 'pi pi-home'};
      }

      if (event instanceof NavigationError) {
          console.log(event.error);
      }
  });
  }

  ngOnInit() {
      this.items = [
        {label: this.router.url, routerLink: this.router.url}
    ];

    this.home = {icon: 'pi pi-home'};
  }

  ngOnChanges() {
    this.items = [
      {label: this.router.url, routerLink: this.router.url}
  ];

  this.home = {icon: 'pi pi-home'};
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngAfterViewInit() {}
}
