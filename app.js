"use strict";


$(document).ready(function() {
  $.getJSON('data.json', function(data) {
    var $dataTemplate = $('#dataTemplate').html();
    var newHtml = Mustache.to_html($dataTemplate, data);
    $('.data').html(newHtml);
  });
  $('.container').on('click', '.fa-play', function() {
    $('i').removeClass('fa-stop').addClass('fa-play');
    $(this).removeClass('fa-play').addClass('fa-stop');
    $('h1').text('Now Playing ' + $(this).attr('value'));
  });
  $('.container').on('click', '.fa-stop', function() {
    $(this).removeClass('fa-stop').addClass('fa-play');
    $('h1').text('Select a Song!');
  });
});
