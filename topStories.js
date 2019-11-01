;(function () {

    let url = 'https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=OCuAzfRfKVr1HDAkN1lCOImvrRs8Rlwm'
    let app = document.querySelector('#app');

    fetch(url)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(response);
            } 
        }).then(function (data) {
            app.innerHTML = '<div>' + data.results.map(function (result) {
                let { abstract, byline, title, url } = result;
                    return '<h2><a href="'+ url +'">' + title + '</a></h2>' + '<p>' + byline + '</p>' + '<p>' + abstract + '</p>'
            }).join('') + '</div>';
        }).catch(function (err) {
            console.log(err);
            app.innerHTML = '<p>Unable to show stories</p>'
        });

})();



