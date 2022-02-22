import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Availabilities} from "../../../../shared/models/availabilities";

const ELEMENT_DATA: Availabilities[] = [
  {
    id: 'Billy',
    userId: 'Bob',
    startTime: new Date(500000000000),
    endTime: new Date(Date.now()),
  },
  {
    id: 'Billy',
    userId: 'Bob',
    startTime: new Date(500000000000),
    endTime: new Date(Date.now()),
  },
  {
    id: 'Billy',
    userId: 'Bob',
    startTime: new Date(500000000000),
    endTime: new Date(Date.now()),
  },
];

@Component({
  selector: 'app-availability-list',
  templateUrl: './availability-list.component.html',
  styleUrls: ['./availability-list.component.scss']
})
export class AvailabilityListComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<Availabilities>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'startDate',
    'startTime',
    'endDate',
    'endTime',
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
