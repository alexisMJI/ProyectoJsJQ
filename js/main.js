$(document).ready(function(){
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200
    });

    //post
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


    
});