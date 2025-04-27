function eliminarShorts() {
    document.querySelectorAll('a[href*="shorts"], ytd-reel-shelf-renderer, ytd-reel-item-renderer, ytd-rich-section-renderer').forEach(el => {
      el.style.display = 'none';
    });
  
    if (window.location.href.includes('/shorts/')) {
      window.location.href = 'https://www.youtube.com';
    }
  }
  
  eliminarShorts();
  
  const observer = new MutationObserver(() => {
    eliminarShorts();
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
  