import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  tabs: MenuItem[]  = [
    {
      label: "Home",
      routerLink: "/",
      routerLinkActiveOptions: "active"
    },
    {
      label: "Living Room",
      routerLink: "/living",
      routerLinkActiveOptions: "active"
    },
    {
      label: "Kitchen",
      routerLink: "/kitchen",
      routerLinkActiveOptions: "active"
    },
    {
      label: "Bathroom",
      routerLink: "/bathroom",
      routerLinkActiveOptions: "active"
    },
    {
      label: "Dining Room",
      routerLink: "/dining",
      routerLinkActiveOptions: "active"
    },
    {
      label: "Bedroom",
      routerLink: "/bedroom",
      routerLinkActiveOptions: "active"
    },
    {
      label: "Other",
      routerLink: "/other",
      routerLinkActiveOptions: "active"
    },
    {
      label: "About",
      routerLink: "/about",
      routerLinkActiveOptions: "active"
    }
  ]

}
