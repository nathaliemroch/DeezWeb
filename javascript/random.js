addRandomFav(params) {
    params = params.data ? params.data: params;
    let music = getRandomFav()
    if (music) {
        let {parent, btn} = params;
        parent.html("");
        favMusic(parent, music);
        parent.append(btn);
        btn.click(params, this.addRandomFav.bind(this));
    }
}

$(function () {
            
    const $sectionRandom = $("#random");
    const $randomBtn = $('<button class="btn-random-song"><i class="icon fas fa-random"></i>Choisir une autre musique</button>');

    this.addRandomFav({parent: $sectionRandom, btn: $randomBtn});
});

   
