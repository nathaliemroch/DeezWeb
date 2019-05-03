$(document).ready(function () {
    $("#random").html(
        `<button type="submit" class="btn-refresh"><i class="fas fa-heart-broken"></i> Choisir une autre musique</button>`
    );
    function random() {
        let rand = JSON.parse(localStorage.getItem('deezweb:FavSongs')) || []; 
        let i = Math.floor(Math.random() * rand.length);
            
        if (rand) { 
        let m = rand[i];

        $(` <div class="random-song">
                <div class="song">
                    <img class="cover" src="${m.album.cover}">
                    <p class="title">${m.title}</p>
                    <p class="artiste">${m.artist.name}</p>
                    <p class="album">${m.album.title}</p>
                    <audio controls src="${m.preview}"></audio>
                    <button type="submit" class="btn-fav">
                        <i class="fas fa-heart-broken"></i>
                        <span class="text-favoris">Retirer des favoris</span>
                    </button>
                </div>
            </div>`)
            .data('m', m).prependTo("#random");
        }  
    }

    random();
    
    $("#random").on("click", ".btn-fav", function () {

        let m = $(this).parents('.container').data('m');
        let rand = JSON.parse(localStorage.getItem('deezweb:FavSongs')) || [];
    
        for (let i = 0; i < rand.length; i++) {
          if (rand[i].id === m.id) {
            rand.splice(i, 1);
            i--;
          }
        }
    
        localStorage.setItem('deezweb:FavSongs', JSON.stringify(rand));
    
    });

});