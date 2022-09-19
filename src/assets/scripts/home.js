window.onload = function() {

    $('p').hide();
    window.addEventListener('scroll', function(e) {
        $('p').fadeIn(3000);
    });
    // #initialement le popup est cache
    $('#box-popup').hide();



    // effect zoom sur les h1 et h2
    $("h1").on({
        mouseenter: function() {
            $(this).animate({
                fontSize: '+=10px',
            });
        },
        mouseleave: function() {
            $(this).animate({
                fontSize: '-=10px',
            });
        },
    });
    $("h2").on({
        mouseenter: function() {
            $(this).animate({
                fontSize: 42,
            });
        },
        mouseleave: function() {
            $(this).animate({
                fontSize: 32,
            });
        },
    });
    // #####
    // effet zoom image wakanda
    $("#tchalla").on({
        mouseenter: function() {
            $(this).animate({ width: '+=10%', });
        },
        mouseleave: function() {
            $(this).animate({ width: '-=10%', });
        },
    });

    $("#img-panther").on({
        mouseenter: function() {
            $(this).animate({ width: '+=10%', });
        },
        mouseleave: function() {
            $(this).animate({ width: '-=10%', });
        },
    });
    // Fin 
    // Varables des champs du formulaire
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');
    //####

    // click sur le bouton ok du popup
    $('#ok_message').click(function() {
        $('#box-popup').hide();
        name.value = "";
        email.value = "";
        message.value = "";
    });
    // #####

    // Envoi du formulaire
    $('#formulaire').submit(function(e) {
        e.preventDefault();
        $('#box-popup').show();
    });
    // #####

}