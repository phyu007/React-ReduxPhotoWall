import * as firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyC4xGIxKbBLSGT9HBA8UcRg8YTa-2dUlMw",
    authDomain: "photowall-71f18.firebaseapp.com",
    databaseURL: "https://photowall-71f18.firebaseio.com",
    projectId: "photowall-71f18",
    storageBucket: "photowall-71f18.appspot.com",
    messagingSenderId: "166467400722",
    appId: "1:166467400722:web:76a0a0d1592557bf8ad4cb",
    measurementId: "G-K6ML9X423N"
  }


firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export {database}

