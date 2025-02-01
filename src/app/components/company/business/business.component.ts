import { Component } from '@angular/core';
import { ArticlesComponent } from '../../article/articles/articles.component';
import { ContactinfoComponent } from "../../article/contactinfo/contactinfo.component";

@Component({
  selector: 'app-business',
  imports: [ArticlesComponent, ContactinfoComponent],
  templateUrl: './business.component.html',
  styleUrl: './business.component.scss'
})
export class BusinessComponent {

}
