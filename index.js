var btn = document.querySelector('#botao')

btn.addEventListener("click", function (event) {
  event.preventDefault();
  escolhaData();
});
  
  function escolhaData() {
  
    var data = $('#data').val();
  
  
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
function escolhaImagem(resultado){
  var imagem = $("#imagem");
  var titulo = $("#titulo");
  var explanation = $("#explanation");
  var copyright = $("#copyright");

  titulo.html(`${resultado.title}`);
  explanation.html(`${resultado.explanation}`);
  copyright.html(`${resultado.copyright}`);
  

  if(resultado.media_type == 'image') {
    imagem.html(`<img class='img' src="${resultado.url}"/>`)
  } else {
    imagem.html(`<iframe class="img" src="${resultado.url}?autoplay=1&mute=1"></iframe>`)
    }
  }



