class HiedClient {
    getCounts(userId) {
        var url = "http://hi/apps/HiTicketsApi/api/count/getmycounts/";

        return fetch(url + userId);
    }
}

export default HiedClient;