import { Component, inject, OnInit } from '@angular/core';
import { SliderService } from '../../../core/services/slider.service';
import { EMPTY, Observable } from 'rxjs';
import { Slider } from '../../../globa/models/slider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

}
