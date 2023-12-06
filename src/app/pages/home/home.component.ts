import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../types/product.type';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {
  products$: Observable<IProduct[]>;
  constructor(private readonly itemService: ItemService) {
    this.products$ = this.itemService.products;
  }

  ngOnInit() {
    this.itemService.getAll();
  }
}
