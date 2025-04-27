const navigationListener = function(details) {
  if (details.url.includes('/shorts/')) {
    chrome.tabs.update(details.tabId, { url: 'https://www.youtube.com' });
  }
};

function toggleRedirectListener(enabled) {
  chrome.webNavigation.onBeforeNavigate.removeListener(navigationListener);

  if (enabled) {
    chrome.webNavigation.onBeforeNavigate.addListener(navigationListener, {
      url: [{ hostContains: 'youtube.com' }]
    });
    console.log("Listener de redirección de Shorts ACTIVADO.");
  } else {
    console.log("Listener de redirección de Shorts DESACTIVADO.");
  }
}

chrome.storage.local.get(['isEnabled'], function(result) {
  const isCurrentlyEnabled = result.isEnabled !== false;
  toggleRedirectListener(isCurrentlyEnabled);
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
  if (namespace === 'local' && changes.isEnabled) {
    const newState = changes.isEnabled.newValue;
    console.log("Cambio detectado en isEnabled:", newState);
    toggleRedirectListener(newState);
  }
});
