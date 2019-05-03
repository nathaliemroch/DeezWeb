const storageName = "deezweb:FavSongs";

function itsFavorite(id) {
    let favorites = getFav();
    if (favorites.length > 0 && favorites.find((favorite) => favorite.id === id)) {
        return true;
    }
    return false;
}

function addFav(music) {
    let favorites = getFav();

    favorites.push(music);
    localStorage.setItem(storageName, JSON.stringify(favorites));
}

function removeFav(id) {
    let favorites = getFav();

    favorites = favorites.filter((favorite) => favorite.id !== id);
    localStorage.setItem(storageName, JSON.stringify(favorites));
}

function getFav() {
    return JSON.parse(localStorage.getItem(storageName)) || [];
}

// return integers between 0 included and max excluded
function random(max) {
    return Math.floor(Math.random() * max)
}

function getRandomFav() {
    let favorites = getFav();
    if (favorites.length > 0) {
        return favorites[random(favorites.length)];
    }
    return false;
}


