import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-create-cluster-modal',
  templateUrl: './create-cluster-modal.component.html',
  styleUrls: ['./create-cluster-modal.component.scss']
})
export class CreateClusterModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateClusterModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
