;(function () {

    let apiKey = 'OCuAzfRfKVr1HDAkN1lCOImvrRs8Rlwm';
    let app = document.querySelector('#app');
    let sections = ['automobiles', 'sports', 'technology'];

    
        // Get the articles from a particular section
        let getArticles = function (section) {
            fetch('https://api.nytimes.com/svc/topstories/v2/' + section + '.json?api-key=' + apiKey).then(function (response) {
                // Check the response after fetch
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(response);
                }
            }).then(function(data) {

                // Get the first few articles
                let firstFew = getFewArticles(data.results);

                // Render the first few articles to the DOM
                render(firstFew, section);
            })
            .catch(function(err) {
                console.log('Cannot display stories', err);
            });
        }
            
        // Get all articles for each section
        sections.forEach(function (section) {
            getArticles(section);
        })

        let getFewArticles = function (articles) {
            return articles.slice(0, 4);
        };

        let render = function (articles, section) {
            // Create a new array of markup strings with array.map(), then
            // combine them into one string with array.join(), then
            // insert them into the DOM with innerHTML

            app.innerHTML += '<h2>' + section + '</h2>' + articles.map(function (article) {
                let html = 
                    '<article>' +
                        '<h3><a href="' + article.url + '">' + article.title + '</a></h3>' +
                        '<p>' + article.byline + '</p>' +
                        '<p>' + article.abstract + '</p>' +
                    '</article>';
                    return html;
            }).join('');
        }
})();



