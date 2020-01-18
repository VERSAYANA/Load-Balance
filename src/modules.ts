
export interface Server {
    ramCapacity: number,
    cpuCapacity: number,
    hardCapacity: number,

    clients: Array<Client>

    ramUsage: number,
    cpuUsage: number,
    hardUsage: number,

    ramUtilization: number,
    cpuUtilization: number,
    hardUtilization: number,

    load: number,
    fuzzyLoad: fuzzyLoad
    fuzzyOutput: fuzzyOutput
    status: status
}

export interface Cluster {
    servers: Array<Server>,

    ramCapacity: number,
    cpuCapacity: number,
    hardCapacity: number,

    ramUsage: number,
    cpuUsage: number,
    hardUsage: number,

    ramUtilization: number,
    cpuUtilization: number,
    hardUtilization: number,

    load: number,
    fuzzyLoad: fuzzyLoad

}

export interface Client {
    ramUsage: number,
    cpuUsage: number,
    hardUsage: number
}

export function addClient(client: Client, server: Server) {
    server.clients.push(client)
    return server
}

export type fuzzyLoad = [number, number, number, number, number];
export type fuzzyOutput = [number, number, number];
export type status = -1 | 0 | 1;

export function calServerUtilization(server: Server): Server {
    let totalRamUsage: number = 0;
    let totalCpuUsage: number = 0;
    let totalHardUsage: number = 0;

    for (let i = 0; i < server.clients.length; i++) {
        totalRamUsage = totalRamUsage + server.clients[i].ramUsage;
        totalCpuUsage = totalCpuUsage + server.clients[i].cpuUsage;
        totalHardUsage = totalHardUsage + server.clients[i].hardUsage;
    }

    server.ramUsage = totalRamUsage;
    server.cpuUsage = totalCpuUsage;
    server.hardUsage = totalHardUsage;

    server.ramUtilization = (totalRamUsage / server.ramCapacity) * 100
    server.cpuUtilization = (totalCpuUsage / server.cpuCapacity) * 100
    server.hardUtilization = (totalHardUsage / server.hardCapacity) * 100
    return server
}

export function calServerLoad(server: Server): Server {
    if (server.hardUtilization >= 100) {
        server.load = 100;
    } else {
        server.load = Math.max(server.cpuUtilization, server.ramUtilization)
    }
    return server
}

export function fuzzifyServer(inputs: Array<Server>): Array<Server> {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].fuzzyLoad = calcServerFuzzyLoad(inputs[i])
        // let load = inputs[i].load;
        // let veryLow = 0;
        // let low = 0;
        // let medium = 0;
        // let high = 0;
        // let veryHigh = 0;

        // if (load <= 10) {
        //     veryLow = 1;
        // } else if (load > 10 && load <= 30) {
        //     veryLow = (30 - load) / 20;
        //     low = (load - 10) / 20;
        // } else if (load > 30 && load <= 50) {
        //     low = (50 - load) / 20;
        //     medium = (load - 30) / 20;
        // } else if (load > 50 && load <= 70) {
        //     medium = (70 - load) / 20;
        //     high = (load - 50) / 20;
        // } else if (load > 70 && load <= 90) {
        //     high = (90 - load) / 20;
        //     veryHigh = (load - 70) / 20;
        // } else if (load > 90) {
        //     veryHigh = 1;
        // }

        // inputs[i].fuzzyLoad = [veryLow, low, medium, high, veryHigh];
    }

    return inputs;
}

export function calcClusterCapacityAndUsage(cluster: Cluster): Cluster {
    let servers = cluster.servers;

    let totalRamUsage = 0;
    let totalCpuUsage = 0;
    let totalHardUsage = 0;

    let totalRamCapacity = 0;
    let totalCpuCapacity = 0;
    let totalHardCapacity = 0;

    for (let i = 0; i < servers.length; i++) {
        totalRamCapacity = totalRamCapacity + servers[i].ramCapacity;
        totalCpuCapacity = totalCpuCapacity + servers[i].cpuCapacity;
        totalHardCapacity = totalHardCapacity + servers[i].hardCapacity;

        totalRamCapacity = totalRamUsage + servers[i].ramUsage;
        totalCpuCapacity = totalCpuUsage + servers[i].cpuUsage;
        totalHardUsage = totalHardUsage + servers[i].hardUsage;
    }

    cluster.ramCapacity = totalRamCapacity;
    cluster.cpuCapacity = totalCpuCapacity;
    cluster.hardCapacity = totalHardCapacity;

    cluster.ramUsage = totalRamUsage;
    cluster.cpuUsage = totalCpuUsage;
    cluster.hardUsage = totalHardUsage;

    return cluster
}

export function calcClusterUtilization(cluster: Cluster): Cluster {
    cluster.ramUtilization = (cluster.ramUsage / cluster.ramCapacity) * 100;
    cluster.cpuUtilization = (cluster.cpuUsage / cluster.cpuCapacity) * 100;
    cluster.hardUtilization = (cluster.hardUsage / cluster.hardCapacity) * 100;

    return cluster;
}

export function calcClusterLoad(cluster: Cluster): Cluster {
    if (cluster.hardUtilization >= 100) {
        cluster.load = 100;
    } else {
        cluster.load = Math.max(cluster.cpuUtilization, cluster.ramUtilization)
    }
    return cluster
}

export function fuzzifyCluster(cluster: Cluster): Cluster {
    let load = cluster.load;
    let veryLow = 0;
    let low = 0;
    let medium = 0;
    let high = 0;
    let veryHigh = 0;

    if (load <= 10) {
        veryLow = 1;
    } else if (load > 10 && load <= 30) {
        veryLow = (30 - load) / 20;
        low = (load - 10) / 20;
    } else if (load > 30 && load <= 50) {
        low = (50 - load) / 20;
        medium = (load - 30) / 20;
    } else if (load > 50 && load <= 70) {
        medium = (70 - load) / 20;
        high = (load - 50) / 20;
    } else if (load > 70 && load <= 90) {
        high = (90 - load) / 20;
        veryHigh = (load - 70) / 20;
    } else if (load > 90) {
        veryHigh = 1;
    }

    cluster.fuzzyLoad = [veryLow, low, medium, high, veryHigh]

    return cluster
}

// export function averageFuzzyLoad ()

function calcServerFuzzyLoad(server: Server): fuzzyLoad {
    let load = server.load;
    let veryLow = 0;
    let low = 0;
    let medium = 0;
    let high = 0;
    let veryHigh = 0;

    if (load <= 10) {
        veryLow = 1;
    } else if (load > 10 && load <= 30) {
        veryLow = (30 - load) / 20;
        low = (load - 10) / 20;
    } else if (load > 30 && load <= 50) {
        low = (50 - load) / 20;
        medium = (load - 30) / 20;
    } else if (load > 50 && load <= 70) {
        medium = (70 - load) / 20;
        high = (load - 50) / 20;
    } else if (load > 70 && load <= 90) {
        high = (90 - load) / 20;
        veryHigh = (load - 70) / 20;
    } else if (load > 90) {
        veryHigh = 1;
    }

    return [veryLow, low, medium, high, veryHigh]
}


export function calcFuzzyOutput(cluser: Cluster): Cluster {
    let averageLoad = cluser.fuzzyLoad;
    let servers = cluser.servers;

    for (let i = 0; i < servers.length; i++) {
        servers[i].fuzzyOutput = [0, 1, 0];
        let load = servers[i].fuzzyLoad;
        let length = averageLoad.length;

        if (load[length - 1] === 1 && averageLoad[length - 1] === 0) {
            servers[i].fuzzyOutput = [1, 0, 0];
        } else if (load[length - 1] === 0 && averageLoad[length - 1] === 1) {
            servers[i].fuzzyOutput = [0, 0, 1];
        } else if (load[length - 1] === 1 && averageLoad[length - 1] === 1) {
            servers[i].fuzzyOutput = [0, 1, 0];
        }

        for (let j = 0; j < length - 1; j++) {
            if (load[j] === 1 && averageLoad[j] === 0) {
                servers[i].fuzzyOutput = [1, 0, 0];

            } else if (load[j] === 0 && averageLoad[j] === 1) {
                servers[i].fuzzyOutput = [0, 0, 1];

            } else if (load[j] === 1 && averageLoad[j] === 1) {
                servers[i].fuzzyOutput = [0, 1, 0];

            } else if ( bZO(load[j]) && averageLoad[j] === 0 && averageLoad[j + 1] === 0 ) {
                servers[i].fuzzyOutput = [1, 0, 0];

            } else if ( bZO(averageLoad[j]) && load[j] === 0 && load[j + 1] === 0) {
                servers[i].fuzzyOutput = [0, 0, 1];

            } else if ( bZO(load[j]) && bZO(load[j + 1]) && averageLoad[j] === 0 && bZO(averageLoad[j + 1]) ) {
                let s = 0;
                let n = Math.min(load[j + 1], averageLoad[j + 1]);
                let r = 1 - n;
                servers[i].fuzzyOutput = [r, n, s];

            } else if ( load[j] === 0 && bZO(load[j + 1]) && bZO(averageLoad[j + 1]) && bZO(averageLoad[j]) ) {
                let r = 0;
                let n = Math.min(load[j + 1], averageLoad[j + 1]);
                let s = 1 - n;
                servers[i].fuzzyOutput = [r, n, s];

            } else if ( bZO(load[j]) && bZO(load[j + 1]) && bZO(averageLoad[j + 1]) && bZO(averageLoad[j]) ) {
                if (load[j + 1] > averageLoad[j + 1]) {
                    let r = 0;
                    let n = Math.max(Math.min(averageLoad[j], load[j]), Math.min(averageLoad[j + 1], load[j + 1]));
                    let s = 1 - n;
                    servers[i].fuzzyOutput = [r, n, s];

                } else if (load[j + 1] < averageLoad[j + 1]) {
                    let s = 0;
                    let n = Math.max(Math.min(averageLoad[j], load[j]), Math.min(averageLoad[j + 1], load[j + 1]));
                    let r = 1 - n;
                    servers[i].fuzzyOutput = [r, n, s];

                } else {
                    servers[i].fuzzyOutput = [0, 1, 0];
                }
            }
        }
    }
    return cluser;
}

function calcOutput(cluster: Cluster) {

}

function bZO(input: number): boolean {
    if (input > 0 && input < 1) {
        return true
    } else {
        return false
    }
}