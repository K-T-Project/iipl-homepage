function Loading(urlname){
  $.ajax({
      url: urlname,
      cache: false,
      async: false,
      success: function(html){
          document.write(html);
      }
  });
}
