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

  selectedVals: Map<string, any> = new Map<string, any>([
    ['location', 'MR_CENTER'],
    ['type', 2],
    ['pagenum', 1],
    ['pagesize', 100],
    ['stock', 8],
    ['code', 2],
    ['status', 'available'],
  ]);

  updateVal($event: any) {
    const target: any = $event.target || $event.source;
    const prm = target.name || target.id;
    const val = target.value;
    this.updateParam(prm, val);
  }

  updateParam(paramType: string, val: any) {
    this.selectedVals.set(paramType, val);
  }

  response = '';

  getIt() {
    this.riService
      .getIt(this.selectedVals)
      .then((val) => {
        this.response = val;
      })
      .catch((err) => {
        alert(err.message);
      });
  }
}
