var oldSongArtist = ''
var oldSongName = ''

setInterval(function() {
    try {
        var songArtist = document.querySelectorAll("[data-testid=\"context-item-info-artist\"]")[0].innerText
        var songName = document.querySelectorAll("[data-testid=\"context-item-link\"]")[0].innerText

        if (oldSongArtist != songArtist || oldSongName != songName) {
            var http = new XMLHttpRequest()
            http.open('POST', 'http://127.0.0.1:50142', true)
            http.send(JSON.stringify({ artist: songArtist, name: songName }))
            oldSongArtist = songArtist
            oldSongName = songName
        }
    } catch {}
}, 500)
