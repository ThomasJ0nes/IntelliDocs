chrome.runtime.onMessage.addListener((e,o,t)=>{if(e.action==="getPageInfo"){const n={title:document.title,url:window.location.href};t(n)}return!0});
