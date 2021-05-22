export function IsWebApp() {
  if (window.navigator && (window.navigator as any).standalone === true) {
    // is loaded from iOS home screen
    return true;
  } else if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
    // is loaded from android home screen
    return true;
  }
  return false;
}
