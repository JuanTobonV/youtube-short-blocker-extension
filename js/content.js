let observer = null; 
let currentlyEnabled = true; 

function eliminarShorts() {
  if (!currentlyEnabled) return;

  document.querySelectorAll('a[href*="shorts"], ytd-reel-shelf-renderer, ytd-reel-item-renderer, ytd-rich-section-renderer').forEach(el => {
      
      el.style.display = 'none';
  });

 
  if (window.location.href.includes('/shorts/')) {
      window.location.href = 'https://www.youtube.com';
  }
}

function startObserver() {
  if (!currentlyEnabled || observer) return;

  observer = new MutationObserver(() => {
      eliminarShorts();
  });

  observer.observe(document.body, { childList: true, subtree: true });
  console.log("Observer de Content Script ACTIVADO.");
}

function stopObserver() {
  if (observer) {
      observer.disconnect();
      observer = null; 
      console.log("Observer de Content Script DESACTIVADO.");
  }
}

function setContentScriptState(enabled) {
    currentlyEnabled = enabled;
    if (enabled) {
        eliminarShorts(); 
        startObserver();  
    } else {
        stopObserver();   
        
    }
}

chrome.storage.local.get(['isEnabled'], function(result) {
    const isEnabled = result.isEnabled !== false; 
    setContentScriptState(isEnabled);
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
    if (namespace === 'local' && changes.isEnabled) {
        const newState = changes.isEnabled.newValue;
        console.log("Cambio detectado en content.js - isEnabled:", newState);
        setContentScriptState(newState);
      
    }
});