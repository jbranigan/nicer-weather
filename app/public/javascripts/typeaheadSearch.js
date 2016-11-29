var citySearch = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  //prefetch: '../data/films/post_1960.json',
  remote: {
    url: 'search/%QUERY',
    wildcard: '%QUERY'
  }
});

$('.typeahead').typeahead('null', {
  name: 'city-search',
  displayKey: 'name',
  templates: {
      suggestion: function(data) {
          return '<li class="list-group-item"><p class="predictionText">'+data.name+'</p></li>';
      }
  },
  source: citySearch
});

$('.typeahead').bind('typeahead:select', function(ev, suggestion) {
  window.location = 'city/' + suggestion.zmw;
});