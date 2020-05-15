import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-widget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  @Input() data: PeriodicElement[]

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.data;
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
