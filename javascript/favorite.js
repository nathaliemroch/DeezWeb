// $(document).ready(function () {
//     let fav = JSON.parse(localStorage.getItem('deezweb:FavSongs')) || [];
//     for (let m of fav) {
//       let $div = $(`<div class="song">
//         <img class="cover" src="${m.album.cover}">
//         <p class="title">${m.title}</p>
//         <p class="artiste">${m.artist.name}</p>
//         <p class="album">${m.album.title}</p>
//         <audio controls src="${m.preview}"></audio>
//         <button type="submit" class="btn-fav">
//             <i class="fas fa-heart-broken"></i>
//                 <span class="text-favoris">Retirer des favoris</span>
//             </button></div>`
//         );
//         if (itsFavorite(m.id)) {
//             setButtonToNotFavAnymore( $div.find('.btn-fav') );
//         } else {
//             setButtonToFav( $div.find('.btn-fav') );
//         }
//         $div.data('m', m);
            
//         $('#favorites').appendTo($div);
//     }
// });
    
//     $("#favoris").on("click", ".btn-fav", function () {
//       let m = $(this).parents('.container').data('m');
      
//       let fav = JSON.parse(localStorage.getItem('deezweb:FavSongs')) || [];
      
//       for (let i = 0; i < fav.length; i++) {
//         if (fav[i].id === m.id) {
//           fav.splice(i, 1);
//           i--;
//         }
//       }
//       localStorage.setItem('deezweb:FavSongs', JSON.stringify(fav));     
//     });

  
// function setButtonToFav($button) {
//     $button.removeClass('btn-is-fav').find('i.fas').removeClass('fa-heart-broken').addClass('fa-heart');
//     $button.find('span').text('Ajouter aux favoris');
// }

// function setButtonToNotFavAnymore($button) {
//     $button.addClass('btn-is-fav').find('i.fas').removeClass('fa-heart').addClass('fa-heart-broken');
//     $button.find('span').text('Retirer des favoris');
// }



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
  
          