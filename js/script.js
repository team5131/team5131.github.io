function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        result = xmlhttp.response;
        let dom = new DOMParser()
            .parseFromString(result, 'text/html');
        let body = dom.body;
        console.log(body)
        let files = dom.getElementById("files")
        let i = 0
        for (const child of files.children) {
            if (i > 0) {
                let bodyhtml = document.getElementById("videoA")
                let video = document.createElement("video")
                video.src = "/video/" + child.children.item(0).title
                video.width = 320
                video.height = 240
                video.controls = true
                bodyhtml.appendChild(video)
            }
            i++
        }
    }
    return result;
}

loadFile('../video/')