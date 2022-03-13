function dynamic(){
    var content = encodeURI(document.getElementById("coder").content);
    console.log("https://raspberrypi.local/dynamic-page/output.html#" + content)
}