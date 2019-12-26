$(document).ready(function () {
    
    //Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 1230,
        responsive: true
    });

    //Posts
    var posts = [
        {
            tittle: "Prueba de titulo 1", //moment().format("MMMM dddd/Do YYYY"),
            date: "Publicado el dia "+moment().date()+" de "+moment().format("MMMM")+" del año "+moment().format("YYYY"),
            content:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            tittle: "Prueba de titulo 2",
            date: "Publicado el dia "+moment().date()+" de "+moment().format("MMMM")+" del año "+moment().format("YYYY"),
            content:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            tittle: "Prueba de titulo 3",
            date: "Publicado el dia "+moment().date()+" de "+moment().format("MMMM")+" del año "+moment().format("YYYY"),
            content:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            tittle: "Prueba de titulo 4",
            date: "Publicado el dia "+moment().date()+" de "+moment().format("MMMM")+" del año "+moment().format("YYYY"),
            content:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            tittle: "Prueba de titulo 5",
            date: "Publicado el dia "+moment().date()+" de "+moment().format("MMMM")+" del año "+moment().format("YYYY"),
            content:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
    ];

    posts.forEach((item, index) =>{
        var post = `
            <article class="post">
                <h2>${item.tittle}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="button-more">Leer mas</a>
            </article> 
        `;
        $("#posts").append(post);
    });
    
    //Selector de tema
    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });

    //Scroll arriba de la web
    $(".subir").click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 500);
        
        return false;
    });

    //Login Falso
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar Sesion</a>");
        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }
    
});