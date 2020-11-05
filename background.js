
// var item = {
//     "id":"hello world",
//     "title":"the fiver extension",
//     "contexts":['selection']
// };
// console.log("helloo bro")
// chrome.contextMenus.create(item,function(){
//     console.log("hello bro...")
// });
// chrome.contextMenus.onClicked.addListener(function(clickData,tab){
//     console.log(clickData)
// });
// console.log("hello world");
blockedUrls = [
    "*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
]
chrome.webRequest.onBeforeRequest.addListener(
    function(details){return {cancel:true}},
    {
        urls: blockedUrls
    },
    ['blocking']
)

