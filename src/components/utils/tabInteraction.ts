/// <reference types="chrome"/>

export function getCurrentTabUrl(callback: (url:string | undefined) => void) {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        const url = tabs[0]?.url;
        callback(url);
    });
}


export function executeScriptInActiveTab(callback: (result: any) => void) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab?.id) {
        chrome.tabs.sendMessage(
          activeTab.id,
          { action: "getPageInfo" },
          (response) => {
            if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError);
              callback(null);
            } else {
              callback(response);
            }
          }
        );
      } else {
        callback(null);
      }
    });
  }
