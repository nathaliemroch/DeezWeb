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
        document.querySelector('#results').innerHTML = 
        music.data.map(
            m =>
                '<div class="card"><p class="album">'
                + '<img width="300px" src="'+ m.album.cover_big+ '"/>' + '<br>'
                + m.artist.name + ' : ' 
                + m.album.title + '</p> <br> <p class="preview">' 
                + '<audio controls src="' + m.preview +'" ></audio></p> <br> <button class="btn-fav"><i class="fas fa-heart"></i> <span class="fav">Ajouter aux favoris</span></button></div>'
                ).join("<br>");

                //Changement du texte
                $(".btn-fav").click(function()
                {$(this).html(function(i, text){
                    return text === "Ajouter aux favoris" ? "Retirer des favoris" : "Ajouter aux favoris";
                })

                // $("#.btn-fav").click(function() { 
                //     if ($(this).text() == "Ajouter aux favoris") { 
                //         $(this).text("Retirer des favoris"); 
                //     } else { 
                //         $(this).text("Ajouter aux favoris"); 
                //     }; 
                

                // $(".btn-fav").toggle(function() {
                //     $(this).text("Retirer des favoris");
                // }, function() {
                //     $(this).text("Ajouter aux favoris");
            });
        }
    );
});


