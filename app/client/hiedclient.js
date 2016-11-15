export class HiedClient {
    getCounts(userId) {
        var url = "http://hi/apps/HiTicketsApi/api/count/getmycounts/";

        fetch(url + userId)
            .then(
            function (response) {
                var returnData = 0;
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return 0;
                }
                
                response.json().then(function (data) {
                    console.log(data);
                    returnData = data;
                    console.log("returnData = " + returnData)
                    return returnData;
                });
            })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    }
}