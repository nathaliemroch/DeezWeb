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
console.log(selectValue);

const album = 
    $.ajax({
        url : 'https://api.deezer.com/search?q='+searchValue+'&order='+selectValue+'&output=jsonp',
        dataType : 'jsonp'
    }).done(function(musiques) {
            
        console.log(musiques);

        document.querySelector('#results').innerHTML = 

        musiques.data.map(

           
            m =>
                '<div class="card"><p class="album">'
                + '<img width="300px" src="'+ m.album.cover_big+ '"/>' + '<br>'
                + m.artist.name + ' : ' 
                + m.album.title + '</p> <br> <p class="preview">' 
                + '<audio controls src="' + m.preview +'" ></audio></p> <br> <button class="btn-fav"><i class="fas fa-heart"></i> <span class="fav">Ajouter aux favoris</span></button></div>'
                ).join("<br>");

                //Changement du texte
                $(".btn-fav").click(function()
                {  $(this).html('Retirer des favoris'); 
            });
        }

    
    );


});


