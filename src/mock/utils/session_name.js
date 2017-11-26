export function getSessionNameFromUrl() {
  let sessionName = null;

  location.search.substr(1).split('&').find((q) => {
    const parts = q.split('=');
    if (parts[0] === 'sn') {
      sessionName = parts[1];
    }
  });

  return sessionName;
}