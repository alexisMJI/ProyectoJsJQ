$(document).ready(function(){

    // Slider
    // si esta en index o en otra pag carga la funcionalidad
    if(window.location.href.indexOf('index') > -1){
      $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
      });
    }
    //post
    if(window.location.href.indexOf('index') > -1){  
      var posts = [
        {
        title: "Titulo del articulo 1",
        date: "Publicado el dia: " + moment().date() + " de " + moment().format("MMMM") +" del "+ moment().format("YYYY"),
        content: "Contenido Lorem impsu Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci lacus, pharetra non vehicula blandit, auctor ac odio. Suspendisse rhoncus nisl ipsum, a vehicula sem venenatis vel. Pellentesque mollis ligula quis erat egestas dignissim. Nulla a est dictum, euismod tellus non, fringilla erat. "
        },
        {
          title: "Titulo del articulo 2",
          date: "Publicado el dia: " + moment().date() + " de " + moment().format("MMMM") +" del "+ moment().format("YYYY"),
          content: "Contenido Lorem impsu Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci lacus, pharetra non vehicula blandit, auctor ac odio. Suspendisse rhoncus nisl ipsum, a vehicula sem venenatis vel. Pellentesque mollis ligula quis erat egestas dignissim. Nulla a est dictum, euismod tellus non, fringilla erat. "
        },
        {
          title: "Titulo del articulo 3",
          date: "Publicado el dia: " + moment().date() + " de " + moment().format("MMMM") +" del "+ moment().format("YYYY"),
          content: "Contenido Lorem impsu Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci lacus, pharetra non vehicula blandit, auctor ac odio. Suspendisse rhoncus nisl ipsum, a vehicula sem venenatis vel. Pellentesque mollis ligula quis erat egestas dignissim. Nulla a est dictum, euismod tellus non, fringilla erat. "
        },
        {
          title: "Titulo del articulo 4",
          date: "Publicado el dia: " + moment().date() + " de " + moment().format("MMMM") +" del "+ moment().format("YYYY"),
          content: "Contenido Lorem impsu Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci lacus, pharetra non vehicula blandit, auctor ac odio. Suspendisse rhoncus nisl ipsum, a vehicula sem venenatis vel. Pellentesque mollis ligula quis erat egestas dignissim. Nulla a est dictum, euismod tellus non, fringilla erat. "
        },
      ]
      console.log(posts);

      posts.forEach((item, index) => {
        var post = `
          <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>
              ${item.content}
            </p>
            <a href="#" class="btnMore">Leer más</a>
          </article>
        `;
        $("#posts").append(post);
      });
    }
    // Selector de tema
    var theme = $("#theme");

    $("#toGreen").click(function(){
      theme.attr("href", "css/green.css");
    });
    $("#toRed").click(function(){
      theme.attr("href", "css/red.css");
    });
    $("#toBlue").click(function(){
      theme.attr("href", "css/blue.css");
    });
    
    //Scroll subir la pag
    $(".subir").click((e)=>{
      e.preventDefault();

      $("html, body").animate({
        scrollTop: 0
      }, 500);
      return false;
    });

    //login falso
    $("#login").submit((e)=>{
      var valorDelName = $("#formName").val();
      localStorage.setItem("nombredelform", valorDelName);
    });

    var nameAlmacenado = localStorage.getItem("nombredelform");
    
    
    if(nameAlmacenado != null && nameAlmacenado != "undifined"){
      var aboutParrafo = $("#about p");

      aboutParrafo.html("<br><strong>Bienvenido, "+nameAlmacenado+"</strong> ");
      aboutParrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");
      
      $("#login").hide();

      $("#logout").click(function(){
           localStorage.clear();
           location.reload();
       });
   }
   
   //pagina aboutme
    if(window.location.href.indexOf('aboutme') > -1){
      $("#acordeon").accordion();
   }

   //pagina reloj

    if(window.location.href.indexOf ('reloj') > -1){

      var reloj = moment().format('LTS');
          $("#reloj").html(reloj);
      
      setInterval(function(){
          var reloj = moment().format('LTS');
          $("#reloj").html(reloj);
      }, 1000);
    }

    //validacion form pagina https://github.com/victorjonsson/jQuery-Form-Validator
    //es una version descontinuada..
    // Validación
	if(window.location.href.indexOf('contact') > -1){
	
		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
		    lang: 'es',
		    errorMessagePosition: 'top',
		    scrollToTopOnError: true
		});

	}
    

});