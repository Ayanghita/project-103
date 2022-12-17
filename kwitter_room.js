
var firebaseConfig = {
      apiKey: "AIzaSyAkciIVsOeaMR9DeXBxaKnZg1G1RYhtE6o",
      authDomain: "game-c87c5.firebaseapp.com",
      databaseURL: "https://game-c87c5-default-rtdb.firebaseio.com",
      projectId: "game-c87c5",
      storageBucket: "game-c87c5.appspot.com",
      messagingSenderId: "509472898898",
      appId: "1:509472898898:web:c2c019ea5b21762358448b"
    };
    
    firebase.initializeApp(firebaseConfig);
  
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}