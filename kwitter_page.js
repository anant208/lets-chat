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
//YOUR FIREBASE LINKS

username = localStorage.getItem("username");
room_name= localStorage.getItem("roomname")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

name1 = message_data['name'];

message1= message_data['message'];

like1 = message_data['likes'];

namedisplay="<h4>"+name1+"<img src='tick.png' class='user_tick'> </h4>";
messagedisplay="<h4 class='message_h4'>"+message1+"</h4>";

console.log(name1);
console.log(message1);
console.log(like1);


likesdisplay="<button class='btn-warning' id="+firebase_message_id+" value="+like1+" onclick='updatelikes(this.id)'>";
spandisplay="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like1+"</span></button><hr>";

row1= namedisplay+messagedisplay+likesdisplay+spandisplay;
document.getElementById("output").innerHTML += row1;







//End code
      } });  }); }
getData();


function logout(){

localStorage.removeItem("username");
localStorage.removeItem("roomname");
window.location= "index.html";
}


function send(){

      msg= document.getElementById("input").value;
      firebase.database().ref(room_name).push({
            name: username,
            message: msg,
            likes: 0
      })

      document.getElementById("input").value="";


}

function updatelikes(message_id){

 button_id= message_id;
 likes=document.getElementById(button_id).value;
 update_like= Number(likes)+ 1 ;


 firebase.database().ref(room_name).child(message_id).update({


     likes : update_like

 });






}