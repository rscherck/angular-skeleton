import {Component, OnInit, Inject} from '@angular/core';
import {DataService} from '../services/data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})

export class MaterialComponent implements OnInit {

  public data: any[];

  constructor(private dataService: DataService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.data = this.dataService.getMyData();
    console.log(this.data);
  }

  openDialog(event, data): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      disableClose: true,
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog Result: ', result);
    });

  }
}


