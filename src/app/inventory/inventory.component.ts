import { Component, OnInit } from '@angular/core';
import { ResourceInventoryService } from '../services/resource-inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  constructor(private riService: ResourceInventoryService) {}

  ngOnInit(): void {}

  checkInterceptor() {
    this.riService.check();
  }
}
