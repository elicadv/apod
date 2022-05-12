$("#botao").click(function (event) {
  event.preventDefault();
  escolhaData();
});
  
  function escolhaData() {
  
    var data = $('#data').val();
    
    
    function escolhaImagem(resultado){
        var img = $("#imagem");
        var titulo = $("#titulo");
        var explanation = $("#explanation");
        var copyright = $("#copyright");
        
      
        titulo.text(`${resultado.title}`);
        explanation.text(`${resultado.explanation}`);
        copyright.text(`${resultado.copyright}`);
      
        if(resultado.media_type == 'image') {
          img.html(`<img class='img' src="${resultado.url}"/>`)
        } else {
          img.html(`<iframe class="img" src="${resultado.url}?autoplay=1&mute=1"></iframe>`)
          }
        }
  
  
    $.ajax({
      url: `https://api.nasa.gov/planetary/apod?api_key=fQrLi2LVV4IvEe2fxaWTfegbrrS3eknb4vGFtwen&date=${data}`,
      success: function(dados){
        escolhaImagem(dados);
      },
      error: function () {
        alert("Ocorreu um erro!");
      },
    
    });
  };




