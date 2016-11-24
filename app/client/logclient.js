class LogClient {
    getLogs(logLevel) {
        debugger;
        var url = "http://hi/apps/HalsburyCoreApi/api/log/" ;
        return fetch(url + logLevel);
    }
}

export default LogClient;