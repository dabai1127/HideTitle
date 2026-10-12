(() => {
  // Zero-width text keeps the tab label present while making its visible text empty.
  const HIDDEN_TITLE = "\u200B";

  const hideTitle = () => {
    if (document.title !== HIDDEN_TITLE) {
      document.title = HIDDEN_TITLE;
    }
  };

  hideTitle();

  // SPAs and page scripts often update document.title after navigation.
  const observer = new MutationObserver(hideTitle);
  observer.observe(document, {
    childList: true,
    subtree: true,
    characterData: true
  });

  // Covers title updates made through APIs that do not produce an observable
  // title-node mutation in every browser implementation.
  window.setInterval(hideTitle, 250);
})();
