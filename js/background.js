chrome.storage.local.get(['isEnabled'], function(result) {
  if (result.isEnabled !== false) {
    chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
      if (details.url.includes('/shorts/')) {
        chrome.tabs.update(details.tabId, { url: 'https://www.youtube.com' });
      }
    }, { url: [{ hostContains: 'youtube.com' }] });
  } else {
    chrome.webNavigation.onBeforeNavigate.removeListener(function(details) {
      if (details.url.includes('/shorts/')) {
        chrome.tabs.update(details.tabId, { url: 'https://www.youtube.com' });
      }
    });
  }
});
