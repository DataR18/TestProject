import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ContactusComponent } from "./components/article/contactus/contactus.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HomeComponent, FooterComponent, SidebarComponent, MatSidenavModule, ContactusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'quipuxProject';

  showFiller = true;

}
