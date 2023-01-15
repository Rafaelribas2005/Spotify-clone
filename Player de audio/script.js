let musicas = [
    {titulo:'Black sheep', artista:'Metric', src:'../Player de audio/aud/Metric - Black Sheep (Brie Larson Vocal Version) ft. Brie Larson.mp3', img:'../Player de audio/img/blach sheep.jpg'},
    {titulo:'As it was', artista:'Harry Styles', src:'../Player de audio/aud/Harry Styles - As It Was.mp3', img:'../Player de audio/img/As it was.jpg'},
    {titulo:'Love like you', artista:'Rebecca Sugar', src:'../Player de audio/aud/Love Like You (feat. Rebecca Sugar) (End Credits).mp3', img:'../Player de audio/img/love like you.jpg'},
    {titulo:'Die in the fire', artista:'Raccon Studios', src:'../Player de audio/aud/fnaf3.mp3', img:'../Player de audio/img/dieinthefire.jfif'},
    {titulo:'Hear me now', artista:'DJ Alok', src:'../Player de audio/aud/hear me now.mp3', img:'../Player de audio/img/hearmenow.jpg'},
]

let musica = document.querySelector('audio')
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim')
let imagem = document.querySelector('img')
let nomeMusica = document.querySelector('.descricao h2')
let nomeArtista = document.querySelector('.descricao i')

renderizarMusica(indexMusica)


// eventos

musica.addEventListener('timeupdate', atualizarBarra)

// funções
function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src)
    musica.addEventListener('loadeddata', ()=>{
        nomeMusica.textContent = musicas[index].titulo
        nomeArtista.textContent = musicas[index].artista
        imagem.src = musicas[index].img
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration))
    })
}   

function tocarMusica(){
    musica.play() 
    document.querySelector('.botao-pause').style.display = 'block'
    document.querySelector('.botao-play').style.display = 'none'
}

function pausarMusica() {
    musica.pause()
    document.querySelector('.botao-pause').style.display = 'none'
    document.querySelector('.botao-play').style.display = 'block'
}

function atualizarBarra() {
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'
    let tempoDecorrido = document.querySelector('.inicio')
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime))
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60)
    let campoSegundos = segundos % 60
    if (campoSegundos < 10) {
        campoSegundos = '0'+ campoSegundos
    }

    return campoMinutos+':'+campoSegundos
}

function musicaAnterior() {
    indexMusica--
    if (indexMusica < 0) {
        indexMusica = 4
    }

    renderizarMusica(indexMusica)
}

function musicaProxima() {
    indexMusica++
    if (indexMusica > 4) {
        indexMusica = 0
    }
    renderizarMusica(indexMusica)
}

