// importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');
   
// firebase.initializeApp({
//     apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
//     projectId: "larafire-push",
//     messagingSenderId: "XXXXXXXXXXXXXXXXXXX",
//     appId: "1:XXXXXXXXXXXXX:web:XXXXXXXXXXXXXXXXXXXXXXX"
// });
  
// const messaging = firebase.messaging();
// messaging.setBackgroundMessageHandler(function({data:{title,body,icon}}) {
//     return self.registration.showNotification(title,{body,icon});
// });

importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "***************",
    authDomain: "****************.firebaseapp.com",
    projectId: "****************",
    storageBucket: "****************.appspot.com",
    messagingSenderId: "********",
    appId: "1:************:web:***",
    measurementId: "G-*****"

});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function({data:{title,body,icon}}) {
    return self.registration.showNotification(title,{body,icon});
});