//点击打开momo主页
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({
        url: "https://web.immomo.com"
    });
});

chrome.webRequest.onBeforeSendHeaders.addListener(function(request) {
    for (var i = 0; i < request.requestHeaders.length; i++) {
        if (request.requestHeaders[i].name == "Referer") {
            if (request.requestHeaders[i].value.match(/web\.immomo\.com/)) {
                console.log("说明是从momo跳转过来的页面");
                injection();
                break;
            }
        }
    }
    return {
        requestHeaders: request.requestHeaders
    }
}, {
    urls: ["http://*/*", "https://*/*"]
}, ["blocking", "requestHeaders"]);


chrome.extension.onRequest.addListener( //背景监听扩展发送过来的信息
    function(request, sender, sendResponse) {
        if (request == "getsitetime")
            getsitetime(function(x) {
                sendResponse(x);
            })


    });

chrome.runtime.onMessage.addListener(function(message, sender, sendResponseCallback)
{
    if(message.name == "action")
    {
         sendResponseCallback({cookie: document.cookie});
     alert("has cookie");

    }
    else if(message.browserkey)
    {
     alert("no cookie");
    }
    sendResponse({code: 200})

});
