$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#btn-cancel').click(function(){
        $('form').slideUp();
    })
 
    $('form').on('submit', function(e){
        e.preventDefault();
        const newImageAdress = $('#img-adress').val();
        const newItem = $('<li style="display:none"></li>');
        $(`<img src="${newImageAdress}" />`).appendTo(newItem);
        $(`
            <div class="overlay-imagem-link">
            <a href="${newImageAdress}" target="_blank" title="Ver imagem em tamanho real">
            Ver imagem em tamanho real
            </a>
            </div>    
        `).appendTo(newItem);
        $(newItem).appendTo('ul');
        $(newItem).fadeIn(1000);
        $('#img-adress').val('');
    })
})