import { register } from "register-service-worker";

function dispathServiceWorkerEvent(eventName) {
  const event = document.createEvent("Event");
  event.initEvent(eventName, true, true);
  window.dispatchEvent(event);
}

if (process.env.NODE_ENV === "production") {
  register("/service-worker.js", {
    updated() {
      dispathServiceWorkerEvent("sw.updated");
    },

    offline() {
      dispathServiceWorkerEvent("sw.offline");
    },

    //   ready (registration) {
    //     console.log('Service worker is active.')
    //   },
    //   registered (registration) {
    //     console.log('Service worker has been registered.')
    //   },
    //   cached (registration) {
    //     console.log('Content has been cached for offline use.')
    //   },
    //   updatefound (registration) {
    //     console.log('New content is downloading.')
    //   },
    //   updated (registration) {
    //     console.log('New content is available; please refresh.')
    //   },
    //   offline () {
    //     console.log('No internet connection found. App is running in offline mode.')
    //   },
    //   error (error) {
    //     console.error('Error during service worker registration:', error)
    //   }
  });
}
