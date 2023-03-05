function showContent() {
    document.querySelector(".preloader-wrap").classList.add("hidden");
    document.getElementById('app').classList.remove("none");
}
setTimeout(showContent, 2000);

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navbarTogle = document.getElementById('navbarTogle')
      

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        document.querySelector('#nav-toggle i').classList.remove('icon-view_headline')
        navMenu.classList.add('show-menu')
        console.log('Hello gays');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
        console.log('Hello');
        navToggle.classList.add('icon-view_headline')
    })
}


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);

// The first sound we lunch
let first_sound = document.querySelector('.wave');
let musicauto = document.querySelector('.audio_autoplay');
first_sound.addEventListener('click', ()=>{
    musicauto.pause()
    musicauto.setAttribute("autoplay", false)
})

// First the songs that will be displayed on the home page
var internationalContainer = document.getElementById('international');
const international = [
    {
        nomArtist: "Nicky Minaj",
        titreChanson: "Nicky Minaj Chun-li",
        photo: "assets/img/song.png",
        chanson: "assets/chansons/2.mp3"
    },
    {
        nomArtist: "Soan",
        titreChanson: "SOAN The voice kids",
        photo: "assets/img/song.png",
        chanson: "assets/chansons/bob_marley_redemption_song_soan_the_voice_kids_france_2019_demi-finale_mp3_67545.mp3"
    },
    {
        nomArtist: "CNCO",
        titreChanson: "CNCO-Beso",
        photo: "assets/img/song.png",
        chanson: "assets/chansons/cnco_beso_official_video_mp3_67597.mp3"
    },
    {
        nomArtist: "Kalash",
        titreChanson: "Arrêt du coeur",
        photo: "assets/img/song.png",
        chanson: "assets/chansons/6.mp3"
    },
    {
        nomArtist: "Kanierra ft dj_seven",
        titreChanson: "Bange",
        photo: "assets/img/song.png",
        chanson: "assets/chansons/dj_seven_x_rj_kanierra_bange_mp3_66768.mp3"
    },
    {
        nomArtist: "Franck Banza",
        titreChanson: "Nadji Vunia",
        photo: "assets/img/song.png",
        chanson: "assets/chansons/franck_banza_nadji_vunia_clip_integrale_hd_mp3_67478.mp3"
    },
    {
        nomArtist: "Mike Kalambay",
        titreChanson: "fongolela_ngai_lola",
        photo: "assets/img/song.png",
        chanson: "assets/chansons/mike_kalambay_fongolela_ngai_lola_video_officielle_mp3_67016.mp3"
    },
    {
        nomArtist: "Kalash",
        titreChanson: "Arrêt du coeur",
        photo: "assets/img/song.png",
        chanson: "assets/chansons/6.mp3"
    },
    {
        nomArtist: "L'homanix",
        titreChanson: "Oncle Moise",
        photo: "assets/img/song.png",
        chanson: "assets/chansons/oncle_moise_by_lhomanix_kyanzila_mp3_66956.mp3"
    },
    {
        nomArtist: "Pasteur Marcello",
        titreChanson: "Viens",
        photo: "assets/img/song.png",
        chanson: "assets/chansons/past_marcello_tunasi_viens_clip_officiel_mp3_67210.mp3"
    },
    {
        nomArtist: "PSON",
        titreChanson: "Toluka Mbongo",
        photo: "assets/img/song.png",
        chanson: "assets/chansons/pson_toluka_mbongo_clip_officiel_mp3_66364.mp3"
    },
    {
        nomArtist: "CNCO ft Rio Roma",
        titreChanson: "Princesa",
        photo: "assets/img/song.png",
        chanson: "assets/chansons/Río Roma - Princesa (Video Oficial) ft. CNCO(480P).mp3"
    },
    {
        nomArtist: "Rosny",
        titreChanson: "nazo_bondela_yo",
        photo: "assets/img/song.png",
        chanson: "assets/chansons/rosny_kayiba_nazo_bondela_yo_je_te_prie_clip_officiel_mp3_67357.mp3"
    },
    {
        nomArtist: "Soan",
        titreChanson: "Redemption",
        photo: "assets/img/song.png",
        chanson: "assets/chansons/bob_marley_redemption_song_soan_the_voice_kids_france_2019_demi-finale_mp3_67545.mp3"
    },
    {
        nomArtist: "CNCO",
        titreChanson: "Tan Facil",
        photo: "assets/img/song.png",
        chanson: "assets/chansons/CNCO - Tan Fácil (Official Video)(480P).mp3"
    },
    {
        nomArtist: "CNCO",
        titreChanson: "Llegaste Tú",
        photo: "assets/img/song.png",
        chanson: "assets/chansons/CNCO, Prince Royce - Llegaste Tú.mp3"
    }
];
            
let namecatgory = document.querySelector('.section__title');        
var rows = 0;
international.forEach(song=>{
        let html = `
            <article id="article_chanson relative" class="anim">
                <div class="products__content">
                    <img src="${song.photo}" alt="" class="img-heigth">
                    <h3 class="products__title">${song.nomArtist}</h3>    
                    <button class="button button--flex products__button">
                        <i class="icon icon-play text-white button__icon"></i>
                    </button>
                    <div class="song">
                        <h3 class="products__title">${song.titreChanson}</h3> 
                        <div class="progression">
                            <div class="barre">
                                <p class="temps"></p>
                            </div>
                            <div class="minuterie">
                                <p class="courant_min">34s</p>
                                
                                <div class="">
                                <i class="icon-heart"></i>
                                </div>
                                <span>
                                    <i class="icon-play in_pause"></i>
                                    <i class="icon-pause in_play"></i>
                                </span>
                                <div class="">
                                <i class="icon-heartbeat"></i>
                                </div>
                                <p class="total_min">4m</p>
                            </div>
                            <audio class="audio" src="${song.chanson}" controls></audio>
                        </div>
                    </div><br />
                    <div class="">
                        <p class="title_song">Titre : ${song.titreChanson}</p>
                    </div>
                </div>
            </article>
        `;
        if(rows < 17){
            internationalContainer.insertAdjacentHTML('beforeend', html);
            rows++;  
        }  
});
function startLikes(){
    console.log('hello');
}
var products__container = document.querySelectorAll('.products__container button')
Songs(products__container)
rows = 0; 

// Call API
let term = '';
const updateTerm = () => {
    term = document.getElementById('search-bar').value;
    console.log(term);
    // check term exist
    if (!term || term === '') {
        document.querySelector('.isEmpty').classList.add('active'); //si le champs est vide
        document.querySelector('.not_result').classList.remove('active'); //On ne peut afficher les deux au même moment
    } else {
        document.querySelector('.isEmpty').classList.remove('active'); // Si c'est différent du vide on remove
        const url = `https://itunes.apple.com/search?term=${term}`;
   
        fetch(url)
            .then((Response) => Response.json())
            .then((data) => {
                const artists = data.results;
                if (artists.length === 0) {
                    document.querySelector('.not_result').classList.add('active') //S'il y a les résultats on remove le not result found
                }else{
                    internationalContainer.innerHTML = "";
                    return artists.map(result => {
                        console.log(result)
                        let html = `
                            <article id="article_chanson" class="relative anim">
                                <div class="products__content">
                                    <img src="${result.artworkUrl100}" alt="" class="img-heigth">
                                    <h3 class="products__title">${result.trackName}</h3>    
                                    <button class="button button--flex products__button">
                                        <i class="icon icon-play text-white button__icon"></i>
                                    </button>
                                    <div class="song">
                                        <h3 class="products__title">${result.trackName}</h3> 
                                        <div class="progression">
                                            <div class="barre">
                                                <p class="temps"></p>
                                            </div>
                                            <div class="minuterie">
                                                <p class="courant_min">34s</p>
                                                <div class="">
                                                    <i class="icon-hand-o-left"></i>
                                                </div>
                                                <span>
                                                    <i class="icon-play in_pause"></i>
                                                    <i class="icon-pause in_play"></i>
                                                </span>
                                                <div class="">
                                                    <i class="icon-hand-o-right"></i>
                                                </div>
                                                <p class="total_min">4m</p>
                                            </div>
                                            <div class="flex likies">
                                                <i class="icon-heart"></i>
                                                <i class="icon-heartbeat"></i>
                                            </div>
                                            <audio class="audio" src="${result.previewUrl}" controls></audio>
                                        </div>
                                    </div>
                                    <div class="">
                                        <p class="title_song"><b>Titre</b> : ${result.collectionName}</p>
                                    </div>
                                </div>
                            </article>
                        `;
                        if(rows < 30){
                            let products__conteur = document.querySelectorAll('.products__container button')
                            Songs(products__conteur)
                            internationalContainer.insertAdjacentHTML('beforeend', html);
                            rows++;
                            document.querySelector('.toggle-search').classList.remove('active');
                            document.querySelector('.search-bar-container').classList.remove('active');
                        } 
                    })
                }
                
            }).catch((error) => {
                console.log("Impossible de call l'api" + error)
            })
    }
}

const searchBtnResult = document.getElementById('searchTermBtn');
searchBtnResult.addEventListener('click',(e) =>{
    e.preventDefault()
    updateTerm();
    rows = 0
    document.getElementById('search-bar').value = "";
})

// Songs
function Songs(products__container) {
    for(var i = 0; i < products__container.length; i++){
        products__container[i].addEventListener('click', function(e){
            var article_contenu = this.parentNode        
            
            if(article_contenu.classList.contains('active')){
                return false
            }
            for(var j = 0; j < products__container.length; j++){
                products__container[j].parentNode.classList.remove('active')
                products__container[j].parentNode.querySelector('.song .audio').pause()
                musicauto.pause()
            }
            
            article_contenu.classList.add('active')
            var audio = article_contenu.querySelector('.audio')

            var stp = article_contenu.querySelector('.in_play')
            var pse = article_contenu.querySelector('.in_pause')
            stp.addEventListener('click', function () {
                stopper_la_lecture()
            })
            pse.addEventListener('click', function () {
                
                activer_la_lecture()
            })
            function stopper_la_lecture(){
                audio.pause()
                
                stp.classList.add('active')
                pse.classList.add('active')
            }
            function activer_la_lecture(){
                audio.play()
                pse.classList.remove('active')
                stp.classList.remove('active')
                musicauto.pause()
            }
            
            var temps = article_contenu.querySelector('.temps')
            audio.play()

            // bouton pour faire avancer la barre
            audio.addEventListener('timeupdate', (e)=>{
                const currentTime = e.target.currentTime;
                const duration = e.target.duration;
                let progressWidth = (currentTime / duration) * 100;

                //le temps d'avancement de la lecture de la chançon
                temps.style.width = `${progressWidth}%`;

                let d_min = article_contenu.querySelector('.progression .courant_min')
                let t_min = article_contenu.querySelector('.progression .total_min')

                let la_duree = audio.duration
                let total_m = Math.floor(la_duree / 60)
                let total_s = Math.floor(la_duree % 60)
                if(total_s < 10){
                    total_s = `${total_s}`
                }
                t_min.innerText = `${total_m+ "m"}`
                d_min.innerText = `${total_s+ "s"}`


                let cour_m = Math.floor(currentTime / 60)
                let cour_s = Math.floor(currentTime % 60)
                if(cour_s < 10){
                    cour_s = `${cour_s}`
                }
                t_min.innerText = `0${cour_m+ "m"}`
                d_min.innerText = `${cour_s+ "s"}`

                
            })

            let barre = temps.parentNode
            barre.addEventListener('click', function (e) {
                let barre_width = barre.clientWidth
                let clickedOffsetx = e.offsetX 
                let duree_chant = audio.duration
                audio.currentTime = (clickedOffsetx / barre_width) * duree_chant
                audio.play()
                if(!stp.classList.contains('active')){
                    stp.classList.add('active')
                    pse.classList.add('active')
                }
                stp.classList.remove('active')
                pse.classList.remove('active')
            })

        })
    }
}

// All section animation
const animatesSections = document.querySelectorAll('.anim');

observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
	    if(entry.intersectionRatio > 0) {
            entry.target.classList.add('active')
		}
		else {
            entry.target.classList.add('active')
		}
	})
})

animatesSections.forEach(image => {
	observer.observe(image)
    console.log(image);
})

