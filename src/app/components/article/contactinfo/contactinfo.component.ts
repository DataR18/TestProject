import { Component, inject, OnInit } from '@angular/core';


import { CommonModule } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../core/state/app.state';
import { state } from '@angular/animations';
import { selectInformation } from '../../../core/state/selectors/conatctinfo.selector';

@Component({
  selector: 'app-contactinfo',
  imports: [CommonModule],
  templateUrl: './contactinfo.component.html',
  styleUrl: './contactinfo.component.scss'
})
export class ContactinfoComponent 
{

  

  store = inject(Store<AppState>)
  contactInfo$ = this.store.pipe(select(selectInformation));


 
  
}
