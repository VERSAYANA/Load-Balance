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
  serverForm
  constructor(
    private db: AngularFireDatabase,
    private formBuilder: FormBuilder,
    // private clusterService: ClusterService,
    public dialogRef: MatDialogRef<ServersModalComponent>,
    @Inject(MAT_DIALOG_DATA) public receivedData
  ) {}

  ngOnInit() {
    this.serverForm = this.formBuilder.group({
      name: ["", Validators.required],
      ram: [8000, Validators.required],
      cpu: [4, Validators.required],
      hard: [1000, Validators.required],


    })
  }

  onSubmit(formData) {
    console.log(formData, this.receivedData.clusterId);
    this.addServer({
      name: formData.name,
      ram: formData.ram,
      cpu: formData.cpu * 100,
      hard: formData.hard * 1000,
    })
  }

  addServer(data) {
    this.db.list(`clusters/${this.receivedData.clusterId}/servers`).push(data)
  }
  modifyServer(){

  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
