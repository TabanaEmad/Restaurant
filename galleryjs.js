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







 
 
 /////////////////////////////////////////////////////////////          menu         /////////////////////////////////////////////////////////////
 
 
 
 
 
 
 /////////////////////////////////////////////////////////////          menu  Breakfast       /////////////////////////////////////////////////////////////
 
 var myArrayName = []; // Empty array
 var myArrayDescription = []; // Empty array
 var myArrayPrice = []; // Empty array
 var myArrayImage = []; // Empty array
 //myArray.push(4); // Add element at the end
// var value = myArray[0]; // read element 1
 //window.alert(value);
 
 
 
 	
  // read multi values 
	//var itemsRef = firebase.database().ref("images").child('menu');	
	var itemsRef = firebase.database().ref("foods").child('Breakfast');	
	    itemsRef.once('value', function (snapshot) {
				
        snapshot.forEach(
		function (item_snapshot) {
			
				 myArrayName.push(item_snapshot.val().name);
				 myArrayDescription.push(item_snapshot.val().description);
				 myArrayPrice.push(item_snapshot.val().price);
				 myArrayImage.push(item_snapshot.val().image);
				 
				 
			//	window.alert(item_snapshot.val().type);		

        });
    }).then(()=>{

			 // window.alert("emad");		
			 // window.alert(myArrayType[0]);		
			 // window.alert(myArrayType.length);		
			 // window.alert("emad");
		var repeatTimes = myArrayName.length;
		 
		  var container_mee = document.getElementById("Breakfast");

			// Loop to generate the HTML code
			for (var i = 0; i < repeatTimes; i++) {
				
			//	window.alert(myArrayType[i]);				
				var d= '<div class="menus d-flex align-items-center"><div class="menu-img rounded-circle"><img class="img-fluid" src="'+myArrayImage[i]+'" alt=""> </div><div class="text-wrap"><div class="row align-items-start"><div class="col-8"><h4>'+myArrayName[i]+'</h4></div> <div class="col-4"><h4 class="text-muted menu-price">'+myArrayPrice[i]+'</h4></div></div><p>'+myArrayDescription[i]+'</p></div></div>';
       		    container_mee.innerHTML += d;
			}
		});
	  
	  
	  
	  
 /////////////////////////////////////////////////////////////          menu  Lunch       /////////////////////////////////////////////////////////////
 

 
 var myArrayNameL = []; // Empty array
 var myArrayDescriptionL = []; // Empty array
 var myArrayPriceL = []; // Empty array
 var myArrayImageL = []; // Empty array
 	
 	
  // read multi values 
	//var itemsRef = firebase.database().ref("images").child('menu');	
	var itemsRef1 = firebase.database().ref("foods/Lunch");	
	    itemsRef1.once('value', function (snapshot) {
				
        snapshot.forEach(
		function (item_snapshot) {
			
				 myArrayNameL.push(item_snapshot.val().name);
				 myArrayDescriptionL.push(item_snapshot.val().description);
				 myArrayPriceL.push(item_snapshot.val().price);
				 myArrayImageL.push(item_snapshot.val().image);
				 
        });
    }).then(()=>{

			 // window.alert("emad");		
			 // window.alert(myArrayType[0]);		
			 // window.alert(myArrayName.length);		
			 // window.alert("emad");
		var repeatTimes = myArrayNameL.length;
		 
		  var container_mee = document.getElementById("Lunch");

			// Loop to generate the HTML code
			for (var i = 0; i < repeatTimes; i++) {
				
			//	window.alert(myArrayType[i]);				
				var v= '<div class="menus d-flex align-items-center"><div class="menu-img rounded-circle"><img class="img-fluid" src="'+myArrayImageL[i]+'" alt=""> </div><div class="text-wrap"><div class="row align-items-start"><div class="col-8"><h4>'+myArrayNameL[i]+'</h4></div> <div class="col-4"><h4 class="text-muted menu-price">'+myArrayPriceL[i]+'</h4></div></div><p>'+myArrayDescriptionL[i]+'</p></div></div>';
       		    container_mee.innerHTML += v;
			}
		});
	  
	  	 



	  
 /////////////////////////////////////////////////////////////          menu  Dinner       /////////////////////////////////////////////////////////////
 

 
 var myArrayNameD = []; // Empty array
 var myArrayDescriptionD = []; // Empty array
 var myArrayPriceD = []; // Empty array
 var myArrayImageD = []; // Empty array
 	
 	
  // read multi values 
	//var itemsRef = firebase.database().ref("images").child('menu');	
	var itemsRef1 = firebase.database().ref("foods/Dinner");	
	    itemsRef1.once('value', function (snapshot) {
				
        snapshot.forEach(
		function (item_snapshot) {
			
				 myArrayNameD.push(item_snapshot.val().name);
				 myArrayDescriptionD.push(item_snapshot.val().description);
				 myArrayPriceD.push(item_snapshot.val().price);
				 myArrayImageD.push(item_snapshot.val().image);
				 
        });
    }).then(()=>{

			 // window.alert("emad");		
			 // window.alert(myArrayType[0]);		
			 // window.alert(myArrayName.length);		
			 // window.alert("emad");
		var repeatTimes = myArrayNameD.length;
		 
		  var container_mee = document.getElementById("Dinner");

			// Loop to generate the HTML code
			for (var i = 0; i < repeatTimes; i++) {
				
			//	window.alert(myArrayType[i]);				
				var v= '<div class="menus d-flex align-items-center"><div class="menu-img rounded-circle"><img class="img-fluid" src="'+myArrayImageD[i]+'" alt=""> </div><div class="text-wrap"><div class="row align-items-start"><div class="col-8"><h4>'+myArrayNameD[i]+'</h4></div> <div class="col-4"><h4 class="text-muted menu-price">'+myArrayPriceD[i]+'</h4></div></div><p>'+myArrayDescriptionD[i]+'</p></div></div>';
       		    container_mee.innerHTML += v;
			}
		});
	  
	  	 		 
	  
 /////////////////////////////////////////////////////////////          menu         /////////////////////////////////////////////////////////////
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
 /////////////////////////////////////////////////////////////          gallery         /////////////////////////////////////////////////////////////
	
		
	
	
	
	
 var myArray = []; // Empty array
 //myArray.push(4); // Add element at the end
// var value = myArray[0]; // read element 1
 //window.alert(value);
 
 
 
 	
  // read multi values 
	var itemsRef = firebase.database().ref("images").child('gallery');	
	    itemsRef.once('value', function (snapshot) {
        snapshot.forEach(
		function (item_snapshot) {
			 myArray.push(item_snapshot.val());

        });
    }).then(()=>{
		  var repeatTimes = myArray.length;
		  
		  var container = document.getElementById("container_gallery");

			// Loop to generate the HTML code
			for (var i = 0; i < repeatTimes; i++) {
			  // Create the HTML code for the design
			  var imageUrl = myArray[i];

			  if(i ==1 || i%3 == 0){
				var htmlCode = '<div class="col-sm-12 col-md-4 col-lg-4"><a class="lightbox"><img class="img-fluid" src='+'"'+imageUrl+'"' +'alt="Gallery Images"></a></div>';  
			  }else{
				var htmlCode = '<div class="col-sm-6 col-md-4 col-lg-4"><a class="lightbox" ><img class="img-fluid" src='+'"'+imageUrl+'"' +'alt="Gallery Images"></a></div>';  
			  }
     		  container.innerHTML += htmlCode;
			}
		  
		  
		  
	  });
	
 
 	
	
 /////////////////////////////////////////////////////////////          gallery         /////////////////////////////////////////////////////////////
	
		
 
 
 
 
 
 
 
 
 
	
	
	
	
	