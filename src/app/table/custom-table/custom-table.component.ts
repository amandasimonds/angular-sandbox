import { Component, Input, OnInit } from '@angular/core';

const constants = {
  PAGE_SIZE : 5
}

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {

  @Input() cols: any[] = [];
  @Input() data: any[] = [];
  @Input() pageSize = constants.PAGE_SIZE;

  page = 0;
  items: any[] = [];
  pageData = {} as {
    start: number;
    end: number;
  }

  constructor() { }

  ngOnInit(): void {
    this.initPagination();
  }

  private initPagination(): void {
    this.paginate(this.page, this.pageSize);
  }

  public get size(): number {
    return this.data.length;
  }

  public get totalPages(): number {
    return Math.ceil(this.size / this.pageSize);
  }


  private paginate(page: number, pageSize: number): void {
    const startPortion = page * pageSize;
    let endPortion = startPortion + pageSize;

    //if calculated endportion is greater than the actual item size, deduct (endPortion - size) from endPortion
    if (endPortion > this.size) {
      endPortion -= endPortion - this.size;
    }

    this.saveCalculatedPortion(startPortion, endPortion);

    this.items = [...this.data.slice(startPortion, endPortion)];
  }

  private saveCalculatedPortion(start: number, end: number): void {
    this.pageData = {
      ...this.pageData,
      start,
      end
    }
  }

}
