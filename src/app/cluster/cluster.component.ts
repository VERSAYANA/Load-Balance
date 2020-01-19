import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateClusterModalComponent } from 'src/modals/create-cluster-modal/create-cluster-modal.component';


@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.scss']
})
export class ClusterComponent implements OnInit {
  clusterId
  clusterInfo
  clusterData
  constructor(private route: ActivatedRoute, private db: AngularFireDatabase, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.clusterId = params.get('clusterId');
      this.clusterInfo = this.db.object(`clusters/${this.clusterId}`).valueChanges();
      this.clusterInfo.subscribe(data => {
        this.clusterData = data
      })
    });

  }
  updateCluster(){
    console.log(this.clusterData)
    const dialogRef = this.dialog.open(CreateClusterModalComponent, {
      // width: '500px',
      data: {type: 'Update', ...this.clusterData}
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
  ngOnDestroy() {
    this.clusterInfo.unsubscribe();
  }

}
