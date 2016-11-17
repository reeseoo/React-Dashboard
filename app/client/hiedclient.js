class HiedClient {
    getCounts(userId) {
        var url = "http://hi/apps/HiTicketsApi/api/count/getmycounts/";
        return fetch(url + userId);
    }

    getPayments() {
        var url = "http://hi/apps/HiTicketsApi/api/ticket/getbyrelatesto/27";
        return fetch(url);
    }
}

export default HiedClient;