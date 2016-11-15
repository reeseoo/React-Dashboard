export class HiedClient {
    getCounts() {
        var url = "http://hi/apps/HiTicketsApi/api/getrequestuser/7151";

        return fetch(url)
            .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                
                response.json().then(function (data) {
                    console.log(data);
                });
            }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    }
}