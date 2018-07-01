if('serviceWorker' in navigator) {
    navigator.serviceWorker.register(
        'sw.js'
    )
        .then(function (registration) {
            console.log('Registered', registration.scope)
        }).catch(function (err) {
            console.log('error registering service worker', err)
    });
}