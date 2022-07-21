import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var $: (arg0: any) => any;
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit,AfterViewInit {
  @ViewChild('dataTable') table:ElementRef | any;
  dataTable:any
  constructor() { }

  ngOnInit(): void {
   
  }
  ngAfterViewInit(): void {
    this.dataTable=$(this.table.nativeElement);
    this.dataTable.DataTable();
  }

}

