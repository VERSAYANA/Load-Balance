import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, from } from 'rxjs';
import { Cluster } from '../modules';
// import { worker } from 'cluster';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateClusterModalComponent } from '../modals/create-cluster-modal/create-cluster-modal.component';


const newData = {
  "servers": [
    {
      "ramCapacity": 2000,
      "cpuCapacity": 200,
      "hardCapacity": 500000,
      "clients": [
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        }
      ]
    },
    {
      "ramCapacity": 2000,
      "cpuCapacity": 200,
      "hardCapacity": 500000,
      "clients": [
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        }
      ]
    },
    {
      "ramCapacity": 2000,
      "cpuCapacity": 200,
      "hardCapacity": 500000,
      "clients": [
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        },
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        }
      ]
    },
    {
      "ramCapacity": 2000,
      "cpuCapacity": 200,
      "hardCapacity": 500000,
      "clients": [
        {
          "ramUsage": 15,
          "cpuUsage": 1,
          "hardUsage": 80
        }
      ]
    }
  ],
  "ramCapacity": 0,
  "cpuCapacity": 0,
  "hardCapacity": 0,
  "ramUsage": 0,
  "cpuUsage": 0,
  "hardUsage": 0,
  "ramUtilization": 0,
  "cpuUtilization": 0,
  "hardUtilization": 0,
  "status": []
}

const worker = new Worker('./app.worker', { type: 'module' });

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clusters: Observable<any>;
  clustersInfo
  constructor(private db: AngularFireDatabase, public dialog: MatDialog) {

    worker.onmessage = ({ data }) => {
      // this.db.object('clusters/0').set(data)
    };



    this.clustersInfo = db.list('clustersInfo').valueChanges();
    this.clustersInfo.subscribe(data => {
      console.log(data);
    })
    this.clusters = db.object('clusters/0').valueChanges();
    this.clusters.subscribe(data => {
      // console.log(data);
      // worker.postMessage(data)
    });
  }
  title = 'social-media';

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateClusterModalComponent, {
      // width: '500px',
      data: {type: 'Create'}
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

  update() {
    this.db.object('clusters/0').set(newData)
  }
  // openDialog() {
  //   console.log('j');
  // }
}

// function  cl (cluster: Cluster) {
//   cluster
// }
// if (typeof Worker !== 'undefined') {
//   // Create a new
//   const worker = new Worker('./app.worker', { type: 'module' });
//   worker.onmessage = ({ data }) => {
//     console.log(`page got message: ${data}`);
//   };
//   worker.postMessage('hello');
// } else {
//   // Web Workers are not supported in this environment.
//   // You should add a fallback so that your program still executes correctly.
// }
