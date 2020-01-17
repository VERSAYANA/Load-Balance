export interface Server {
    ramCapacity: number,
    cpuCapacity: number,
    hardCapacity: number,
    clients: Array<Client>
    ramUtilization: number,
    cpuUtilization: number,
    hardUtilization: number,
    load: number
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

 export function calUtilization(server: Server) {
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

export function calServerLoad(server: Server) {
    if (server.hardUtilization >= 100) {
        server.load = 100;
    } else {
        server.load = Math.max(server.cpuUtilization, server.ramUtilization)
    }
    return server
}