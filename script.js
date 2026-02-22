function carregarVideo() {
    let link = document.getElementById("linkYoutube").value;
    let videoContainer = document.getElementById("video-container");

    // Regex para extrair o ID do vídeo
    let regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
    let match = link.match(regex);

    if (match && match[1]) {
        let videoId = match[1];
        
        // Monta o iframe do vídeo
        videoContainer.innerHTML = `
            <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>`;
    } else {
        alert("Ops! Esse link não parece ser do YouTube.");
    }
}
