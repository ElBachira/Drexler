document.addEventListener('DOMContentLoaded', function() {

    const audio = document.getElementById('song-player'); 
    const preloader = document.getElementById('preloader');
    
    const clickSound = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
    const swooshSound = new Audio('https://www.fesliyanstudios.com/play-mp3/570');
    
    document.querySelectorAll('.tab-button, .close-btn, .links-grid a, .player-ctrl-btn').forEach(element => {
        element.addEventListener('click', () => {
            if (element.matches('.links-grid a')) {
                swooshSound.currentTime = 0;
                swooshSound.play().catch(e => console.log("Error al reproducir swoosh:", e));
            } else {
                clickSound.currentTime = 0;
                clickSound.play().catch(e => console.log("Error al reproducir click:", e));
            }
        });
    });

    document.querySelectorAll('.typewriter').forEach((element, index) => {
        const text = element.innerHTML;
        element.innerHTML = '';
        element.style.opacity = 1;
        let i = 0;
        setTimeout(() => {
            const typing = setInterval(() => {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                }
            }, 25);
        }, 500 + index * 100); 
    });

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const xOffset = (clientX / innerWidth - 0.5) * -2;
        const yOffset = (clientY / innerHeight - 0.5) * -2;
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.body.style.backgroundPosition = `calc(50% + ${xOffset}%) calc(50% + ${yOffset}%)`;
        }
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    const closeButtons = document.querySelectorAll('.close-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const paneId = button.dataset.tab;
            document.getElementById(paneId).classList.add('active');
            if (paneId === 'stats-tab') { animateStats(); }
        });
    });
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.overlay-pane').classList.remove('active');
        });
    });
    function animateStats() {
        const bars = document.querySelectorAll('.overlay-pane.active .fill');
        bars.forEach(bar => {
            bar.style.transition = 'none';
            bar.style.width = '0%';
            void bar.offsetWidth; 
            bar.style.transition = 'width 1s ease-in-out';

            let rawVal = bar.getAttribute('data-p');
            if(rawVal) {
                const percentage = rawVal.replace('%', '').trim();
                setTimeout(() => {
                    bar.style.width = percentage + '%';
                }, 50);
            }
        });
    }
    
    // =================================================================
    // === CONFIGURACIÓN DE CANCIONES ===
    // =================================================================
    const songs = [
        {
            title: "Without Me",
            artist: "Halsey",
            src: "song.mp3",
            lyrics: [
  { "time": 14, "line": "Te encontré cuando estabas destrozada" },
  { "time": 18, "line": "Te llené de todo lo que necesitabas" },
  { "time": 21, "line": "Hice lo imposible por retenerte (retenerte)" },
  { "time": 25, "line": "Temía dejarte en soledad" },
  { "time": 28, "line": "Dije que iba a atraparte si caías" },
  { "time": 31, "line": "Y si se ríen, que se jodan todos" },
  { "time": 34, "line": "Te levanté cuando caíste" },
  { "time": 37, "line": "Te puse de nuevo en pie" },
  { "time": 39, "line": "Solo para que pudieras usarme a tu antojo" },
  { "time": 41, "line": "Dime, ¿qué se siente estar en la cima?" },
  { "time": 45, "line": "Sentir la gloria, muy lejos para abrazarme" },
  { "time": 49, "line": "Tú sabes que fui yo quien te llevó hasta ahí" },
  { "time": 52, "line": "Tu nombre es leyenda, ¿te sientes sola?" },
  { "time": 56, "line": "¿Crees que puedes vivir sin mí?" },
  { "time": 59, "line": "¿Crees que puedes vivir sin mí?" },
  { "time": 63, "line": "Fui yo quien te puso arriba, linda" },
  { "time": 66, "line": "No sé por qué (no sé por qué)" },
  { "time": 70, "line": "¿Crees que puedes vivir sin mí?" },
  { "time": 74, "line": "Vivir sin mí" },
  { "time": 77, "line": "Fui yo quien te puso arriba, linda" },
  { "time": 80, "line": "No sé por qué (no sé por qué)" },
  { "time": 85, "line": "Intenté amar cien veces" },
  { "time": 89, "line": "Te encontré cuándo escapabas de los demonios de tu mente" },
  { "time": 91, "line": "Entonces tomé tus demonios y los hice míos" },
  { "time": 96, "line": "No me di cuenta porque mi amor era ciego" },
  { "time": 98, "line": "Dije que iba a atraparte si caías" },
  { "time": 102, "line": "Y si se ríen, que se jodan todos" },
  { "time": 105, "line": "Te levanté cuando caíste" },
  { "time": 107, "line": "Te puse de nuevo en pie" },
  { "time": 109, "line": "Solo para que pudieras usarme a tu antojo" },
  { "time": 112, "line": "Dime, ¿qué se siente estar en la cima?" },
  { "time": 115, "line": "Sentir la gloria, muy lejos para abrazarme" },
  { "time": 119, "line": "Tú sabes que fui yo quien te llevó hasta ahí" },
  { "time": 123, "line": "Tu nombre es leyenda, ¿te sientes sola?" },
  { "time": 126, "line": "¿Crees que puedes vivir sin mí?" },
  { "time": 130, "line": "¿Crees que puedes vivir sin mí?" },
  { "time": 133, "line": "Fui yo quien te puso arriba, linda" },
  { "time": 137, "line": "No sé por qué (sí, no sé por qué)" },
  { "time": 140, "line": "¿Crees que puedes vivir sin mí?" },
  { "time": 144, "line": "Vivir sin mí" },
  { "time": 147, "line": "Fui yo quien te puso arriba, linda" },
  { "time": 151, "line": "No sé por qué, sí" },
  { "time": 156, "line": "No tienes que decirme lo que hiciste" },
  { "time": 159, "line": "Ya lo sé" },
  { "time": 160, "line": "Tuve que ir y averiguarlo por otros" },
  { "time": 165, "line": "Así que dime qué se siente" },
  { "time": 169, "line": "Dime, ¿qué se siente estar en la cima?" },
  { "time": 172, "line": "Sentir la gloria, muy lejos para abrazarme" },
  { "time": 176, "line": "Tú sabes que fui yo quien te llevó hasta ahí" },
  { "time": 179, "line": "Tu nombre es leyenda, ¿te sientes sola?" },
  { "time": 182, "line": "¿Crees que puedes vivir sin mí?" },
  { "time": 186, "line": "¿Crees que puedes vivir sin mí?" },
  { "time": 190, "line": "Fui yo quien te puso arriba, linda" },
  { "time": 193, "line": "No sé por qué (sí, no sé por qué)" }
           ]
        }
    ];

    let currentSongIndex = 0;
    let currentLyricIndex = -1;

    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const songTitleEl = document.getElementById('song-title');
    const songArtistEl = document.getElementById('song-artist');
    const spotifyIcon = document.querySelector('.spotify-icon');
    
    // CORRECCIÓN AQUÍ: Faltaba cerrar comilla y paréntesis, y el ID estaba cortado.
    const lyricsContainer = document.getElementById('lyrics-container');
    
    const playIcon = '<i class="fas fa-play"></i>';
    const pauseIcon = '<i class="fas fa-pause"></i>';

    function loadSong(songIndex) {
        const song = songs[songIndex];
        audio.src = song.src;
        songTitleEl.textContent = song.title;
        songArtistEl.textContent = song.artist;
        loadLyrics(song.lyrics);
        audio.pause();
        playPauseBtn.innerHTML = playIcon;
        spotifyIcon.classList.remove('is-spinning');
    }

    function loadLyrics(lyrics) {
        lyricsContainer.innerHTML = ''; 
        currentLyricIndex = -1; 

        if (!lyrics || lyrics.length === 0) {
            lyricsContainer.innerHTML = '<p class="lyric-line active">♪ No hay letra para esta canción ♪</p>';
            return;
        }

        lyrics.forEach((line, index) => {
            const p = document.createElement('p');
            p.textContent = line.line;
            p.classList.add('lyric-line');
            p.dataset.index = index; 
            lyricsContainer.appendChild(p);
        });
        
        lyricsContainer.style.transform = `translateY(0px)`;
    }

    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().catch(e => console.error("Error al intentar reproducir:", e));
            playPauseBtn.innerHTML = pauseIcon;
            spotifyIcon.classList.add('is-spinning');
        } else {
            audio.pause();
            playPauseBtn.innerHTML = playIcon;
            spotifyIcon.classList.remove('is-spinning');
        }
    });

    prevBtn.addEventListener('click', () => {
        currentSongIndex--;
        if (currentSongIndex < 0) {
            currentSongIndex = songs.length - 1; 
        }
        loadSong(currentSongIndex);
        audio.play().catch(e => console.error("Error al intentar reproducir:", e)); 
        playPauseBtn.innerHTML = pauseIcon;
        spotifyIcon.classList.add('is-spinning');
    });

    nextBtn.addEventListener('click', () => {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            currentSongIndex = 0; 
        }
        loadSong(currentSongIndex);
        audio.play().catch(e => console.error("Error al intentar reproducir:", e)); 
        playPauseBtn.innerHTML = pauseIcon;
        spotifyIcon.classList.add('is-spinning');
    });

    audio.addEventListener('ended', () => {
        nextBtn.click(); 
    });

    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        const lyrics = songs[currentSongIndex].lyrics;

        if (!lyrics || lyrics.length === 0) return; 

        let newActiveIndex = -1;
        for (let i = lyrics.length - 1; i >= 0; i--) {
            if (currentTime >= lyrics[i].time) {
                newActiveIndex = i;
                break;
            }
        }

        if (newActiveIndex === currentLyricIndex) {
            return;
        }

        currentLyricIndex = newActiveIndex;

        lyricsContainer.querySelectorAll('.lyric-line').forEach(lineEl => {
            lineEl.classList.remove('active');
        });

        if (currentLyricIndex !== -1) {
            const activeLine = lyricsContainer.querySelector(`.lyric-line[data-index="${currentLyricIndex}"]`);
            if (activeLine) {
                activeLine.classList.add('active');
                const scrollOffset = activeLine.offsetTop - (100 / 2) + (activeLine.clientHeight / 2);
                lyricsContainer.style.transform = `translateY(-${scrollOffset}px)`;
            }
        } else {
            lyricsContainer.style.transform = `translateY(0px)`;
        }
    });

    loadSong(currentSongIndex);

    const fnafSticker=document.getElementById('fnaf-sticker');const honkSound=new Audio('https://www.myinstants.com/media/sounds/fnaf-nose-honk.mp3');fnafSticker.addEventListener('click',()=>{honkSound.currentTime=0;honkSound.play().catch(e => {})});
    const copyBtn = document.getElementById('copy-link-btn');
    const originalBtnText = copyBtn.innerHTML;
    copyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(window.location.href).then(() => {
            copyBtn.innerHTML = '<i class="fas fa-check"></i> ¡Copiado!';
            copyBtn.classList.add('copied');
            swooshSound.currentTime = 0;
            swooshSound.play().catch(err => {});
            setTimeout(() => {
                copyBtn.innerHTML = originalBtnText;
                copyBtn.classList.remove('copied');
            }, 2000);
        });
    });

    // OCULTAR PRELOADER AL FINAL
    preloader.classList.add('loaded');

});
