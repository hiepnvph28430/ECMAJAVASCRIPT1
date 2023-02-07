function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script"); // tao mot the <script>
        script.src = src // <srcipt src="https://javascript.info/callbacks"></srcipt>
        script.onload = () => resolve(10);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
        document.head.append(script); // <head><srcipt src="https://javascript.info/callbacks"></srcipt></head>
    })

}
loadScript("https://javascript.info/callbacks")
    .then((data) => data + " co them cai nha")
    .then((data2) => data2 + " va 10 o to")
    .then((data3) => console.log(data3))
    .catch((error) => console.log(error))