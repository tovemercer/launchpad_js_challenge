var frameworks = {
  facebook: "react",
  angular: "angular.js",
  emberjs: "ember.js",
  vuejs: "vue"
}

// console.log(frameworks);
// console.log(Object.keys(frameworks));
// console.log(Object.values(frameworks));

// for (key in frameworks[0]) {
//   console.log(frameworks[0][key])
// }



$(document).ready(function() {

  for (var i in frameworks) {
    $.ajax({
      url:"https://api.github.com/repos/" + i + "/" + frameworks[i],
      data: {
        client_id:'20e837d019d5fe789fb4',
        client_secret:'fff3b6fb15af529e9d3675383482607b1bb1771f'
      }
    }).done(function(response){
      $('#framework_results').append(`
        <div class="panel panel-default">
          <div class="panel-heading text-center">
            <h2>${response.name}</h2>
          </div>
          <div class="panel-body">
            <ul class="list-unstyled">
              <li><h4>Overall Score: 98</h4></li>
              <li>Stars: ${response.stargazers_count}</li>
              <li>Forks: ${response.forks}</li>
              <li>Open Issues: ${response.open_issues}</li>
            </ul>
          </div>
        </div>
      `);
    });
  }


  // react
  // $.ajax({
  //   url:'https://api.github.com/repos/facebook/react',
  //   data: {
  //     client_id:'20e837d019d5fe789fb4',
  //     client_secret:'fff3b6fb15af529e9d3675383482607b1bb1771f'
  //   }
  // }).done(function(response){
  //   $('#framework_results').append(`
  //     <div class="panel panel-default">
  //       <div class="panel-heading text-center">
  //         <h2>${response.name}</h2>
  //       </div>
  //       <div class="panel-body">
  //         <ul class="list-unstyled">
  //           <li><h4>Overall Score: 98</h4></li>
  //           <li>Stars: ${response.stargazers_count}</li>
  //           <li>Forks: ${response.forks}</li>
  //           <li>Open Issues: ${response.open_issues}</li>
  //         </ul>
  //       </div>
  //     </div>
  //   `);
  // });

  // angular
  // $.ajax({
  //   url:'https://api.github.com/repos/angular/angular.js',
  //   data: {
  //     client_id:'20e837d019d5fe789fb4',
  //     client_secret:'fff3b6fb15af529e9d3675383482607b1bb1771f'
  //   }
  // }).done(function(response){
  //   $('#framework_results').append(`
  //     <div class="panel panel-default">
  //       <div class="panel-heading text-center">
  //         <h2>${response.name}</h2>
  //       </div>
  //       <div class="panel-body">
  //         <ul class="list-unstyled">
  //           <li><h4>Overall Score: 98</h4></li>
  //           <li>Stars: ${response.stargazers_count}</li>
  //           <li>Forks: ${response.forks}</li>
  //           <li>Open Issues: ${response.open_issues}</li>
  //         </ul>
  //       </div>
  //       </div>
  //     </div>
  //   `);
  // });

  // ember
  // $.ajax({
  //   url:'https://api.github.com/repos/emberjs/ember.js',
  //   data: {
  //     client_id:'20e837d019d5fe789fb4',
  //     client_secret:'fff3b6fb15af529e9d3675383482607b1bb1771f'
  //   }
  // }).done(function(response){
  //   $('#framework_results').append(`
  //     <div class="panel panel-default">
  //       <div class="panel-heading text-center">
  //         <h2>${response.name}</h2>
  //       </div>
  //       <div class="panel-body">
  //         <ul class="list-unstyled">
  //           <li><h4>Overall Score: 98</h4></li>
  //           <li>Stars: ${response.stargazers_count}</li>
  //           <li>Forks: ${response.forks}</li>
  //           <li>Open Issues: ${response.open_issues}</li>
  //         </ul>
  //       </div>
  //       </div>
  //     </div>
  //   `);
  // });

  // vue
  // $.ajax({
  //   url:'https://api.github.com/repos/vuejs/vue',
  //   data: {
  //     client_id:'20e837d019d5fe789fb4',
  //     client_secret:'fff3b6fb15af529e9d3675383482607b1bb1771f'
  //   }
  // }).done(function(response){
  //   $('#framework_results').append(`
  //     <div class="panel panel-default">
  //       <div class="panel-heading text-center">
  //         <h2>${response.name}</h2>
  //       </div>
  //       <div class="panel-body">
  //         <ul class="list-unstyled">
  //           <li><h4>Overall Score: 98</h4></li>
  //           <li>Stars: ${response.stargazers_count}</li>
  //           <li>Forks: ${response.forks}</li>
  //           <li>Open Issues: ${response.open_issues}</li>
  //         </ul>
  //       </div>
  //       </div>
  //     </div>
  //   `);
  // });



});