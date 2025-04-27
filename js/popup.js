let isEnabled = true;  

chrome.storage.local.get(['isEnabled'], function(result) {
  if (result.isEnabled === false) {
    isEnabled = false; 
    document.getElementById("statusText").textContent = "Bloqueo desactivado";
    document.getElementById("toggleButton").textContent = "Activar Bloqueo";
    document.getElementById("toggleButton").style.backgroundColor = "#dc3545";  // Rojo
  }
});

document.getElementById('toggleButton').addEventListener('click', function() {
  isEnabled = !isEnabled; 
  chrome.storage.local.set({isEnabled});  

  if (isEnabled) {
    document.getElementById("statusText").textContent = "Bloqueo activado";
    document.getElementById("toggleButton").textContent = "Desactivar Bloqueo";
    document.getElementById("toggleButton").style.backgroundColor = "#28a745";  // Verde
  } else {
    document.getElementById("statusText").textContent = "Bloqueo desactivado";
    document.getElementById("toggleButton").textContent = "Activar Bloqueo";
    document.getElementById("toggleButton").style.backgroundColor = "#dc3545";  // Rojo
  }

  chrome.tabs.reload();
});
