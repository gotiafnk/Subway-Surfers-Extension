chrome.action.onClicked.addListener(() => {
  // Resolución en formato 9:16 (ancho:alto)
  const width = 405;
  const height = 720;

  chrome.windows.create({
    url: "https://dreamy-travesseiro-3a98d7.netlify.app",
    type: "popup",
    width: width,
    height: height
  });
});
