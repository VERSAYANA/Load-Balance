import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { AngularFireDatabase } from "@angular/fire/database";
import { FormBuilder, Validators } from "@angular/forms";
import { ClusterService } from "src/services/cluster.service";

interface NewCluster {
  name;
  sens;
  delay;
}

@Component({
  selector: "app-create-cluster-modal",
  templateUrl: "./create-cluster-modal.component.html",
  styleUrls: ["./create-cluster-modal.component.scss"]
})
export class CreateClusterModalComponent implements OnInit {
  createClusterForm;
  sens = 0.5;
  delay = 50;
  constructor(
    private db: AngularFireDatabase,
    private formBuilder: FormBuilder,
    // private clusterService: ClusterService,
    public dialogRef: MatDialogRef<CreateClusterModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.createClusterForm = this.formBuilder.group({
      name: ["", Validators.required]
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
  createCluster(data: NewCluster) {
    let pushId = this.db.createPushId();
    this.db.list("clustersInfo").set(pushId, {
      id: pushId,
      name: data.name
    });
    this.db.list("clusters").set(pushId, {
      id: pushId,
      name: data.name,
      sens: data.sens,
      delay: data.delay
    });
  }

  onSubmit(clusterData) {
    console.log(clusterData);
    console.log(this.delay, this.sens);
    this.createCluster({
      name: clusterData.name,
      sens: this.sens,
      delay: this.delay
    });
    this.dialogRef.close();
  }

  ngOnInit() {}
}
