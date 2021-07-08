console.log("background.js is running");

// Add a listener for the browser action
chrome.browserAction.onClicked.addListener(buttonClicked);

// The user clicked the button!
function buttonClicked(tab) {
    // 'tab' is an object with information about the current open tab
    // This will work if popup is disabled else it is overrided by default by the popup.html
    console.log("Clicked");
    console.log(tab);
}
$.ajax({
    url: "http://localhost:3000/save-products",
    data: { test: "test data" },
    type: 'POST',
    success: function (response) {
        console.log('response:', response);
    },
    error: function (response) {
        console.log('response:', response);
    }
});