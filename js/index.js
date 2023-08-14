// code source
// https://firebase.google.com/docs/database/web/read-and-write
const firebaseConfig = {
  apiKey: "AIzaSyChImT7xqnGTdkHGPqaTySRZhUDCkhVgw8",
  authDomain: "testter-67735.firebaseapp.com",
  databaseURL: "https://testter-67735-default-rtdb.firebaseio.com",
  projectId: "testter-67735",
  storageBucket: "testter-67735.appspot.com",
  messagingSenderId: "777410553847",
  appId: "1:777410553847:web:34830b9df66560408830f2",
  measurementId: "G-EYZC74RERC"
};




// initialize firebase
firebase.initializeApp(firebaseConfig);




  // write one value
  var newPostKey = firebase.database().ref("emad").child('posts').push("emadtabana");
  
  // set() overwrites data at the specified location, including any child nodes.
  // update
  firebase.database().ref("test").set({
	  "name":"ali",
  }).then(()=>{
		//  window.alert("dooone");
	  });
  
 
 
 
  // read path of database
 // window.alert( firebase.database().ref()+"testinsert/"+"oooo");
  


  // Read data once with get()
  const dbRef = firebase.database().ref("menu").child("drinks").child("drink1").child("image");
  dbRef.on('value', (snapshot) => {
  const data = snapshot.val();
  //window.alert(data);
});

  // read one value 
const dbRef1 = firebase.database().ref("test1");
dbRef1.on('value', (snapshot) => {
  const data = snapshot.val();
  //window.alert(data);
});





	
  // read multi values 
	var itemsRef = firebase.database().ref("menu");	
	    itemsRef.once('value', function (snapshot) {
        snapshot.forEach(
		function (item_snapshot) {
			item_snapshot.forEach(
				function (item_snapshot1) {
					
						var description = item_snapshot1.val().description;
						var image = item_snapshot1.val().image;
						var name = item_snapshot1.val().name;
						var price = item_snapshot1.val().price;
						//window.alert(price);
						
				});

        });
    });
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


// write multi values
function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

client.on("ready", () => { // when bot goes online
  console.log("Ready!");
  writeUserData("UserId", "Terry", "email@gmail.com", "https://imgur.com/t/bees/3bt83")
});

















