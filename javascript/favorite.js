$(document).ready(function () {
    let fav = JSON.parse(localStorage.getItem('deezweb:FavSongs')) || [];
    for (let m of fav) {
      $(`<div class="song">
        <img class="cover" src="${m.album.cover}">
        <p class="title">${m.title}</p>
        <p class="artiste">${m.artist.name}</p>
        <p class="album">${m.album.title}</p>
        <audio controls src="${m.preview}"></audio>
        <button type="submit" class="btn-fav">
            <i class="fas fa-heart-broken"></i>
                <span class="text-favoris">Retirer des favoris</span>
            </button></div>`
        ).data('m', m).appendTo('#favorites');
    }
    
    $("#favoris").on("click", ".btn-fav", function () {
      let m = $(this).parents('.container').data('m');
      
      let fav = JSON.parse(localStorage.getItem('deezweb:FavSongs')) || [];
      
      for (let i = 0; i < fav.length; i++) {
        if (fav[i].id === m.id) {
          fav.splice(i, 1);
          i--;
        }
      }
      localStorage.setItem('deezweb:FavSongs', JSON.stringify(fav));     
    });
});
  
          