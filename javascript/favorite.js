
function favMusic(music) {
    return $(`<div class="song">
    <img class="cover" src="${music.album_cover}">
    <p class="title">${music.title}</p>
    <p class="artiste">${music.artist}</p>
    <p class="album">${music.album}</p>
    <audio controls src="${music.preview}">Your browser does not support the<code>audio</code> element.</audio></div>`);
}

function addFavToPage(parent, music) {
    let favMusicHtml = favMusic(music);
    parent.append(favMusicHtml);
    $('audio').last().after(setButtonToFav(music));
}

class Fav {

    constructor() {
        this.view = "fav";
    }

    init() {
        $(function () {
            "use strict"
            const $sectionFav = $("#favorites");

            let musics = getFav();
            if (musics.length > 0) {
                for (let music of musics) {
                    addFavToPage($sectionFav, music);
                }
            } else {
                $sectionFav.html("Aucun favoris dans votre liste ...");
            }
        });
    }
};
