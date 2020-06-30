$(document).ready(function () {
  $.get('http://file-generation-svc.herokuapp.com').then((res) => {
    console.log('csv generator is up');
  });
  $.get('http://mernolithic.herokuapp.com').then((res) => {
    console.log('mernolithic demo is up');
  });
  $.get('http://stabilyzr.herokuapp.com').then((res) => {
    console.log('Stabilyzr is up');
  });
  $.get('https://google-books-search-45506.herokuapp.com/').then((res) => {
    console.log('Google Books Search is up');
  });
  $.get('https://scrape-n-surf-58013.herokuapp.com/').then((res) => {
    console.log('Scrape N Surf is up');
  });
  $.get('http://dupegen.herokuapp.com/').then((res) => {
    console.log('Dupegen is up');
  });
});
