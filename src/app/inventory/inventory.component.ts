import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { ResourceInventoryService } from '../services/resource-inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  private inProgressFlag = false;

  constructor(private riService: ResourceInventoryService) {}
  ngOnInit(): void {}

  selectedVals: Map<string, any> = new Map<string, any>([
    ['location', 'MR_CENTER'],
    ['type', 2],
    ['pagenum', 1],
    ['pagesize', 10],
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

  response: any = { status: 'No data' };

  getIt() {
    this.inProgressFlag = true;

    this.riService
      .getIt(this.selectedVals)
      .then((val) => {
        this.response = val;
      })
      .catch((err) => {
        alert(err.message);
      })
      .finally(() => (this.inProgressFlag = false));
  }

  get inProgress() {
    return this.inProgressFlag;
  }
}
