var elts = document.getElementsByTagName('p');
for (var i = 0; i < elts.length; i++) {
    elts[i].style['background-color'] = '#F0C';
}

// Listen for messages
chrome.runtime.onMessage.addListener(receiver);

// Callback for when a message is received
function receiver(request, sender, sendResponse) {
    if (request.message === "user clicked!") {
        // Do something!
        console.log("Got from background.js");
    }
}