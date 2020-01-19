/// <reference lib="webworker" />
import {
  Cluster,
  Server,
  Client,
  calServerUtilization,
  calServerLoad,
  calcServerFuzzyLoad,
  calcClusterCapacityAndUsage,
  calcClusterUtilization,
  calcClusterLoad,
  fuzzifyCluster,
  calcFuzzyOutput,
  calcOutput,
  addClient
} from "../modules";

addEventListener("message", ({ data }) => {
  let cluster: Cluster = data;

  // console.log(data);

  for (let i = 0; i < cluster.servers.length; i++) {
    calServerUtilization(cluster.servers[i]);
    // cluster.servers[i] = calServerLoad(cluster.servers[i])
    calServerLoad(cluster.servers[i]);
    calcServerFuzzyLoad(cluster.servers[i]);
  }
  // console.log(cluster);

  calcClusterCapacityAndUsage(cluster);
  // console.log(cluster);

  calcClusterUtilization(cluster);
  // console.log(cluster);

  calcClusterLoad(cluster);
  // console.log(cluster);

  fuzzifyCluster(cluster);
  // console.log(cluster);

  calcFuzzyOutput(cluster);
  // console.log(cluster);

  calcOutput(cluster);
  // console.log(cluster);

  if (cluster.active) {
    addClient(
      cluster.servers[cluster.senderIndex].clients.pop(),
      cluster.servers[cluster.receiverIndex]
    );
  }

  // console.log(cluster);

  // const response = `worker response to ${data}`;
  postMessage(cluster);
});
