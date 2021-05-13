var firebaseConfig = {
  apiKey: "AIzaSyDc22RgsHmXEmm8_ae0p7sy2bJqBUN4cMM",
  authDomain: "taste-bcdfc.firebaseapp.com",
  databaseURL: "https://taste-bcdfc-default-rtdb.firebaseio.com",
  projectId: "taste-bcdfc",
  storageBucket: "taste-bcdfc.appspot.com",
  messagingSenderId: "715519027026",
  appId: "1:715519027026:web:b70e0940c5308341f53c8b",
  measurementId: "G-TQMFT7PVQ1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'> #"+Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


username = localStorage.getItem("username");
document.getElementById("user_name").innerHTML= "Welcome " + username + "!";


function Addroom(){

  roomname = document.getElementById("addroom").value;
  localStorage.setItem("roomname",roomname);

  firebase.database().ref("/").child(roomname).update({
    purpose : "adding user"
  });

  window.location= "kwitter_page.html"
}


function logout(){
localStorage.removeItem("username");
localStorage.removeItem("roomname")
window.location="index.html";

}

function redirect(rooms){

console.log(rooms);
localStorage.setItem("roomname",rooms);
window.location="kwitter_page.html";

}

