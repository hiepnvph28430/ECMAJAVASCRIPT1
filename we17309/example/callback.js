function loadScript(src, callback) {
    const script = document.createElement("script"); // tao mot the <script>
    script.src = src // <srcipt src="https://javascript.info/callbacks"></srcipt>
    script.onload = () => callback(script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
    document.head.append(script); // <head><srcipt src="https://javascript.info/callbacks"></srcipt></head>
}
loadScript("https://javascript.info/callbacks", function (error, data) {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})