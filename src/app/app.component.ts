import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, from } from 'rxjs';
import { Cluster } from '../modules';
// import { worker } from 'cluster';

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
  constructor(private db: AngularFireDatabase) {

    worker.onmessage = ({ data }) => {
      this.db.object('clusters/0').set(data)
    };



    this.clusters = db.object('clusters/0').valueChanges();
    this.clusters.subscribe(data => {
      // console.log(data);
      worker.postMessage(data)
    })
  }
  title = 'social-media';

  update() {
    this.db.object('clusters/0').set(newData)
  }
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