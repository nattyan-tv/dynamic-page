function dynamic(){
    var content = encodeURI(document.getElementById("coder").innerHTML.substring(0,15));
    console.log("https://nattyan-tv.github.io/dynamic-page/output.html#" + content)
}