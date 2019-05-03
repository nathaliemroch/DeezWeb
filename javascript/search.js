const searchForm = $('#searchForm');
const tri = $('#tri');

searchForm.on('submit', function(event) {
event.preventDefault();

//Search
const search = searchForm.find('#search');
const searchValue = search.val();

//Selection
const selectOption = tri.find('option:selected');
const selectValue = selectOption.val();


const album = 
    $.ajax({
        url : 'https://api.deezer.com/search?q='+searchValue+'&order='+selectValue+'&output=jsonp',
        dataType : 'jsonp'
    }).done(function(music) {

        for (let i = 0; i < music.data.length ; i++) {
            let m = music.data[i];

            let $div = $('<div class="card">' +
                            '<p class="album">' +
                                '<img width="300px" src="'+ m.album.cover_big+ '"/>' + '<br>' +
                                m.artist.name + ' : ' +
                                m.title + '<br>' +
                                m.album.title +
                            '</p><br>' +
                            '<p class="preview">' +
                                '<audio controls src="' + m.preview +'" ></audio>' +
                            '</p> <br> <button class="btn-fav"><i class="fas fa-heart"></i> <span>Ajouter aux favoris</span></button>' +
                        '</div>');

            if (itsFavorite(m.id)) {
                setButtonToNotFavAnymore( $div.find('.btn-fav') );
            } else {
                setButtonToFav( $div.find('.btn-fav') );
            }

            $div.data('m', m);
            
            $('#results').append(
                $div
            );
        }

    });
});



$('#results').on("click",".btn-fav",function(){
    let m = $(this).parents('.card').data('m');

    if (itsFavorite(m.id)) {
        removeFav(m.id);
        setButtonToFav( $(this) );
    } else {
        addFav(m);
        setButtonToNotFavAnymore( $(this) );
    }
});


function setButtonToFav($button) {
    $button.removeClass('btn-is-fav').find('i.fas').removeClass('fa-heart-broken').addClass('fa-heart');
    $button.find('span').text('Ajouter aux favoris');
}

function setButtonToNotFavAnymore($button) {
    $button.addClass('btn-is-fav').find('i.fas').removeClass('fa-heart').addClass('fa-heart-broken');
    $button.find('span').text('Retirer des favoris');
}