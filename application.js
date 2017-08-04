var frameworks = {
  facebook: "react",
  angular: "angular.js",
  emberjs: "ember.js",
  vuejs: "vue"
}

var calculateScore = function(stars, forks, issues) {
  var weightedAverage = (stars + forks - (issues * .5)) / 3;
  var score = weightedAverage / 100;
  return score.toFixed(0);
};

// var setInterval(function(refreshRequest){
//   $('#framework_results').load(refreshRequest);
// }, 2000)

$(document).ready(function() {
  for (var i in frameworks) {
    var refresh = $.ajax({
      url: "https://api.github.com/repos/" + i + "/" + frameworks[i],
      data: {
        client_id:'20e837d019d5fe789fb4',
        client_secret:'fff3b6fb15af529e9d3675383482607b1bb1771f'
      },
    }).done(function(response){
      var overallScore = calculateScore(response.stargazers_count, response.forks, response.open_issues)
      $('#framework_results').append(`
        <div class="panel panel-default">
          <div class="panel-heading text-center">
            <h2>${response.name}</h2>
          </div>
          <div class="panel-body">
            <ul class="list-unstyled">
              <li><h4>Overall Score: ${overallScore}</h4></li>
              <li>Stars: ${response.stargazers_count}</li>
              <li>Forks: ${response.forks}</li>
              <li>Open Issues: ${response.open_issues}</li>
            </ul>
          </div>
        </div>
      `);
    });
    // console.log(refresh);
    // setInterval(refresh);
  };
});