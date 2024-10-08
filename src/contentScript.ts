chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
    if (request.action === "getPageInfo") {
      const pageInfo = {
        title: document.title,
        url: window.location.href,
        // Add any other information you want to extract from the page
      };
      sendResponse(pageInfo);
    }
    return true; // Indicates that the response is sent asynchronously
}); 