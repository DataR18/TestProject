import { Component } from '@angular/core';
import { ContactinfoComponent } from '../contactinfo/contactinfo.component';
import { ArticlesComponent } from '../articles/articles.component';
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'app-contactus',
  imports: [ContactinfoComponent, ArticlesComponent, CarouselComponent],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {

}
