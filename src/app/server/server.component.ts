import { Component, OnInit, Input } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { CreateClusterModalComponent } from "src/modals/create-cluster-modal/create-cluster-modal.component";
import { ServersModalComponent } from "../servers-modal/servers-modal.component";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.scss"]
})
export class ServerComponent implements OnInit {
  @Input() id: string;
  @Input() info: object;
  @Input() clusterId: string;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  modifyServer() {
    const dialogRef = this.dialog.open(ServersModalComponent, {
      // width: '500px',
      data: {
        type: "Modify",
        serverId: this.id,
        info: this.info,
        clusterId: this.clusterId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
