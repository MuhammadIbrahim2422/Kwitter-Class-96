var firebaseConfig = {
    apiKey: "AIzaSyBbGrXTOtfCY6qU5LKo6BUUVdbagryVzMA",
    authDomain: "kwitter-96640.firebaseapp.com",
    databaseURL: "https://kwitter-96640-default-rtdb.firebaseio.com",
    projectId: "kwitter-96640",
    storageBucket: "kwitter-96640.appspot.com",
    messagingSenderId: "722065780462",
    appId: "1:722065780462:web:e5c43464d9e01acb574dff"
  };

  firebase.initializeApp(firebaseConfig)


  function send()
  {
      msg = document.getElementById("msg").nodeValue;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });

      document.getElementById("msg").value = "";
  }

  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
          window.location = "index.html";
}
