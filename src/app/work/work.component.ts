import { Component, OnInit } from '@angular/core';
import { DataService} from '../services/data.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  public data: any[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.data = this.dataService.getMyData();
    console.log(this.data);
  }
}
