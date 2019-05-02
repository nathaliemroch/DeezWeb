const removeText = "Retirer des favoris";
const addText = "Ajouter aux favoris"


function onRemovefavorite(e) {
    let $self = $(this);
    $self.off("click", onRemovefavorite);
    $self.on("click", e.data, onAddfavorite);
    $self.html(addText);
    let $parent = $self.parents("#favorites");
    if ($parent.length > 0) {
        $self.parent(".song").remove();
    }
    removeFavorite(e.data.id);
}


function onAddfavorite(e) {
    let $self = $(this);
    $self.off("click", onAddfavorite);
    $self.on("click", e.data, onRemovefavorite);
    $self.html(removeText);
    addFavorite(e.data);
}


function addFavoriteBtn(music) {
    let btn = $('<button></button>');
    if (isFavorite(music.id)) {
        btn.html(removeText);
        btn.on("click", music, onRemovefavorite);
    } else {
        btn.html(addText);
        btn.on("click", music, onAddfavorite)
    }
    return btn;
}
