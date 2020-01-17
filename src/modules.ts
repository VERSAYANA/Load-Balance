export interface Server {
    ramCapacity: number,
    cpuCapacity: number,
    hardCapacity: number,
    clients: Array<Client>
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

export type fuzzyLoad = [number, number, number, number, number]


export function calUtilization(server: Server): Server {
    let totalRamUsage: number = 0;
    let totalCpuUsage: number = 0;
    let totalHardUsage: number = 0;

    for (let i = 0; i < server.clients.length; i++) {
        totalRamUsage = totalRamUsage + server.clients[i].ramUsage;
        totalCpuUsage = totalCpuUsage + server.clients[i].cpuUsage;
        totalHardUsage = totalHardUsage + server.clients[i].hardUsage;
    }

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

export function fuzzifyServer (inputs: Array<Server>): Array<Server> {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].fuzzyLoad = calcFuzzyLoad(inputs[i])
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

function calcFuzzyLoad (server: Server): fuzzyLoad {
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