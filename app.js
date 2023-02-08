document.addEventListener("DOMContentLoaded", event => {
    let bipEvent = null;
    window.addEventListener('beforeinstallprompt', event => {
        event.preventDefault()
        bipEvent = event;
    })

    document.querySelector("#btnInstall").addEventListener("click", event => {
        if (bipEvent) {
            bipEvent.prompt();
        }
        else {
            alert("To install the app look for Add to Homescreen or Install in your browser's menu");
        }
    })

    document.querySelector("#btnShare").addEventListener("click", event => {
        navigator.share({
            title: "Calculator",
            text: "A Calculator at your disposal",
        })
    })
})