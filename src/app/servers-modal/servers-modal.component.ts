import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { AngularFireDatabase } from "@angular/fire/database";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-servers-modal",
  templateUrl: "./servers-modal.component.html",
  styleUrls: ["./servers-modal.component.scss"]
})
export class ServersModalComponent implements OnInit {
  serverForm;
  type;
  constructor(
    private db: AngularFireDatabase,
    private formBuilder: FormBuilder,
    // private clusterService: ClusterService,
    public dialogRef: MatDialogRef<ServersModalComponent>,
    @Inject(MAT_DIALOG_DATA) public receivedData
  ) {}

  ngOnInit() {
    this.type = this.receivedData.type;
    let name;
    let ram;
    let cpu;
    let hard;
    if (this.receivedData.type === "Modify") {
      name = this.receivedData.info.name;
      ram = this.receivedData.info.ram;
      cpu = this.receivedData.info.cpu / 100;
      hard = this.receivedData.info.hard / 1000;
      // this.serverId
    } else {
      name = "";
      ram = 8000;
      cpu = 4;
      hard = 1000;
    }
    this.serverForm = this.formBuilder.group({
      name: [name, Validators.required],
      ram: [ram, Validators.required],
      cpu: [cpu, Validators.required],
      hard: [hard, Validators.required]
    });
  }

  onSubmit(formData) {
    this.db.object(`clusters/${this.receivedData.clusterId}`).update({
      active: false
    });
    console.log(formData, this.receivedData.clusterId);
    const data = {
      name: formData.name,
      ram: formData.ram,
      cpu: formData.cpu * 100,
      hard: formData.hard * 1000
    };
    if (this.receivedData.type === "Modify") {
      this.modifyServer(data);
    } else {
      this.addServer({
        ...data,
        ramUsage: 0,
        cpuUsage: 0,
        hardUsage: 0,
        ramUtilization: 0,
        cpuUtilization: 0,
        hardUtilization: 0
      });
    }
    this.db.object(`clusters/${this.receivedData.clusterId}`).update({
      active: true
    });
    this.dialogRef.close();
  }

  addServer(data) {
    this.db.list(`clusters/${this.receivedData.clusterId}/servers`).push(data);
  }
  modifyServer(data) {
    this.db
      .object(
        `clusters/${this.receivedData.clusterId}/servers/${this.receivedData.serverId}`
      )
      .update(data);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
