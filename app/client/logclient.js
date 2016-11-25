class LogClient {
    getLogs(logLevel) {
        var url = "http://hi/apps/HalsburyCoreApi/api/log/" ;
        return fetch(url + logLevel);
    }
}

export default LogClient;