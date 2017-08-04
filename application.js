$(document).ready(function() {

  // react
  $.ajax({
    url:'https://api.github.com/repos/facebook/react',
    data: {
      client_id:'20e837d019d5fe789fb4',
      client_secret:'fff3b6fb15af529e9d3675383482607b1bb1771f'
    }
  }).done(function(response){
    $('#framework_results').html(`
      <div class="panel panel-default">
        <div class="panel-heading">
          <h2>${response.name}</h2>
        </div>
        <div class="panel-body">
          <h4>Overall Score: 98</h4><br>
          Watchers: ${response.watchers}<br>
          Forks: ${response.forks}<br>
          Open Issues: ${response.open_issues}
        </div>
      </div>
    `);
  });

  // angular
  // $.ajax({
  //   url:'https://api.github.com/repos/angular/angular.js',
  //   data: {
  //     client_id:'20e837d019d5fe789fb4',
  //     client_secret:'fff3b6fb15af529e9d3675383482607b1bb1771f'
  //   }
  // }).done(function(response){
  //   $('#framework_results').html(`
  //     <div class="panel panel-default">
  //       <div class="panel-heading">
  //         <h2>${response.name}</h2>
  //       </div>
  //       <div class="panel-body">
  //         <h4>Overall Score: 98</h4><br>
  //         Watchers: ${response.watchers}<br>
  //         Forks: ${response.forks}<br>
  //         Open Issues: ${response.open_issues}
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
  //   console.log(response);
  // });

  // vue
  // $.ajax({
  //   url:'https://api.github.com/repos/vuejs/vue',
  //   data: {
  //     client_id:'20e837d019d5fe789fb4',
  //     client_secret:'fff3b6fb15af529e9d3675383482607b1bb1771f'
  //   }
  // }).done(function(response){
  //   console.log(response);
  // });



});