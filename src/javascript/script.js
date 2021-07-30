
// alert("hello world");
var numberOfquestions=document.querySelectorAll(".aa").length;
// alert(numberOfquestions);
for(var i=0; i<numberOfquestions; i++){

   document.querySelectorAll(".aa")[i].addEventListener("click",function(){
    var number=this.textContent;
    // alert(number);
    makequestion(number);
});
}
var j=1;

var question1="What is the default value of static variable";

var question2="2.Which of the following option leads to the portability and security of Java?";
var q2op1="Bytecode is executed by JVM";
var q2op2="The applet makes the Java code secure and portable";
var q2op3="Use of exception handling";
var q2op4="Dynamic binding between objects";

var question3="3.Which of the following is not a Java features?";
var q3op1="Dynamic"
var q3op2="Architecture Neutral"
var q3op3="Use of pointers";
var q3op4="Object-oriented";

var question4="4.What is the return type of the hashCode() method in the Object class?";
var q4op1="object"
var q4op2="int";
var q4op3="long";
var q4op4="void";

var question5="5.In which process, a local variable has the same name as one of the instance variables?";
var q5op1="Serialization"
var q5op2="Variable Shadowing";
var q5op3="Abstraction";
var q5op4="MultiThreading";

var question6="6.Which of the following is true about the anonymous inner class?";
var q6op1="It has only methods";
var q6op2="Objects can't be created";
var q6op3="t has a fixed class name";
var q6op4="It has no class name";

var question7="7.Which package contains the Random class?";
var q7op1="java.util package";
var q7op2="java.lang package";
var q7op3="java.io package";
var q7op4="java.awt package";

var question8="8.Which of the following option leads to the portability and security of Java?";
var q8op1="Bytecode is executed by JVM";
var q8op2="The applet makes the Java code secure and portable";
var q8op3="Use of exception handling";
var q8op4="Dynamic binding between objects";

var question9="9.Which of the following is not a Java features?";
var q9op1="Dynamic"
var q9op2="Architecture Neutral"
var q9op3="Use of pointers";
var q9op4="Object-oriented";

var question10="10.What is the return type of the hashCode() method in the Object class?";
var q10op1="object"
var q10op2="int";
var q10op3="long";
var q10op4="void";

var question11="11.In which process, a local variable has the same name as one of the instance variables?";
var q11op1="Serialization"
var q11op2="Variable Shadowing";
var q11op3="Abstraction";
var q11op4="MultiThreading";

var question12="12.Which package contains the Random class?";
var q12op1="java.util package";
var q12op2="java.lang package";
var q12op3="java.io package";
var q12op4="java.awt package";

var question13="13.What is the return type of the hashCode() method in the Object class?";
var q13op1="object"
var q13op2="int";
var q13op3="long";
var q13op4="void";

var question14="14.In which process, a local variable has the same name as one of the instance variables?";
var q14op1="Serialization"
var q14op2="Variable Shadowing";
var q14op3="Abstraction";
var q14op4="MultiThreading";


var question15="15.Which of the following is true about the anonymous inner class?";
var q15op1="It has only methods";
var q15op2="Objects can't be created";
var q15op4="It has no class name";
var q15op3="t has a fixed class name";

var question16="16.Which package contains the Random class?";
var q16op1="java.util package";
var q16op2="java.lang package";
var q16op3="java.io package";
var q16op4="java.awt package";

var question17="17.Which package contains the Random class?";
var q17op1="a";
var q17op2="b";
var q17op3="java.io package";
var q17op4="java.awt package";

var question18="18.Which package contains the Random class?";
var q18op1="ge";
var q18op2="java.lang package";
var q18op3="java.io package";
var q18op4="java.awt package";

var question19="19.Which package contains the Random class?";
var q19op1="19th";
var q19op2="java.lang package";
var q19op3="java.io package";
var q19op4="java.awt package";

var question20="20.Which package contains the Random class?";
var q20op1="20th";
var q20op2="java.lang package";
var q20op3="java.io package";
var q20op4="java.awt package";

var question21="21.Which package contains the Random class?";
var q21op1="21";
var q21op2="";
var q21op3="java.io package";
var q21op4="java.awt package";

var question22="22.Which package contains the Random class?";
var q22op1="22nd";
var q22op2="";
var q22op3="java.io package";
var q22op4="java.awt package";

var question23="23.Which package contains the Random class?";
var q23op1="23rd";
var q23op2="java.lang package";
var q23op3="java.io package";
var q23op4="java.awt package";

var question24="24.Which package contains the Random class?";
var q24op1="24th";
var q24op2="java.lang package";
var q24op3="java.io package";
var q24op4="java.awt package";

var question25="25.Which package contains the Random class?";
var q25op1="25";
var q25op2="java.lang package";
var q25op3="java.io package";
var q25op4="java.awt package";



function checkOptions(opt){
  if(opt == null){
    document.querySelector(".op1").checked = false;
    document.querySelector(".op2").checked = false;
    document.querySelector(".op3").checked = false;
    document.querySelector(".op4").checked = false;
  }
  else
    document.querySelector(".op" + opt).checked = true;
}



function makequestion(but){
  // alert(typeof(but));
  checkOptions(selected[parseInt(but)-1]);
  switch (parseInt(but)) {
    case 1:
    // alert("s1")
    document.querySelector(".questionpara").innerHTML=question1;
    document.querySelector("#option1").innerHTML=0;
    document.querySelector("#option2").innerHTML=1;
    document.querySelector("#option3").innerHTML=2;
    document.querySelector("#option4").innerHTML=3;
    j=but;
    break;

    case 2:

    document.querySelector(".questionpara").innerHTML=question2;
    document.querySelector("#option1").innerHTML=q2op1;
    document.querySelector("#option2").innerHTML=q2op2;
    document.querySelector("#option3").innerHTML=q2op3;
    document.querySelector("#option4").innerHTML=q2op4;
      document.querySelector(".nex").innerHTML="Next";
    j=but;
    break;

    case 3:
    // alert("s3");
    document.querySelector(".questionpara").innerHTML=question3;

    document.querySelector("#option1").innerHTML=q3op1;
    document.querySelector("#option2").innerHTML=q3op2;
    document.querySelector("#option3").innerHTML=q3op3;
    document.querySelector("#option4").innerHTML=q3op4;
      document.querySelector(".nex").innerHTML="Next";
    j=but;
    break;
    case 4:
    // alert("s4");
    document.querySelector(".questionpara").innerHTML=question4;
    document.querySelector("#option1").innerHTML=q4op1;
    document.querySelector("#option2").innerHTML=q4op2;
    document.querySelector("#option3").innerHTML=q4op3;
    document.querySelector("#option4").innerHTML=q4op4;
      document.querySelector(".nex").innerHTML="Next";
    j=but;
    break;

    case 5:
    // alert("s4");
    document.querySelector(".questionpara").innerHTML=question5;
    document.querySelector("#option1").innerHTML=q5op1;
    document.querySelector("#option2").innerHTML=q5op2;
    document.querySelector("#option3").innerHTML=q5op3;
    document.querySelector("#option4").innerHTML=q5op4;
      document.querySelector(".nex").innerHTML="Next";
    j=but;
    break;

    case 6:
    // alert("s4");
    document.querySelector(".questionpara").innerHTML=question6;
    document.querySelector("#option1").innerHTML=q6op1;
    document.querySelector("#option2").innerHTML=q6op2;
    document.querySelector("#option3").innerHTML=q6op3;
    document.querySelector("#option4").innerHTML=q6op4;
      document.querySelector(".nex").innerHTML="Next";
    j=but;
    break;

    case 7:
    // alert("s4");
    document.querySelector(".questionpara").innerHTML=question7;
    document.querySelector("#option1").innerHTML=q7op1;
    document.querySelector("#option2").innerHTML=q7op2;
    document.querySelector("#option3").innerHTML=q7op3;
    document.querySelector("#option4").innerHTML=q7op4;
     document.querySelector(".nex").innerHTML="Next";
    j=but;
    break;

    case 8:
    // alert("s4");
    document.querySelector(".questionpara").innerHTML=question8;
    document.querySelector("#option1").innerHTML=q8op1;
    document.querySelector("#option2").innerHTML=q8op2;
    document.querySelector("#option3").innerHTML=q8op3;
    document.querySelector("#option4").innerHTML=q8op4;
      document.querySelector(".nex").innerHTML="Next";
    j=but;
    break;

    case 9:
    // alert("s4");
    document.querySelector(".questionpara").innerHTML=question9;
    document.querySelector("#option1").innerHTML=q9op1;
    document.querySelector("#option2").innerHTML=q9op2;
    document.querySelector("#option3").innerHTML=q9op3;
    document.querySelector("#option4").innerHTML=q9op4;
      document.querySelector(".nex").innerHTML="Next";
    j=but;
    break;

    case 10:
    // alert("s4");
    document.querySelector(".questionpara").innerHTML=question10;
    document.querySelector("#option1").innerHTML=q10op1;
    document.querySelector("#option2").innerHTML=q10op2;
    document.querySelector("#option3").innerHTML=q10op3;
    document.querySelector("#option4").innerHTML=q10op4;
      document.querySelector(".nex").innerHTML="Next";
    j=but;
    break;

    case 11:
    // alert("s4");
    document.querySelector(".questionpara").innerHTML=question11;
    document.querySelector("#option1").innerHTML=q11op1;
    document.querySelector("#option2").innerHTML=q11op2;
    document.querySelector("#option3").innerHTML=q11op3;
    document.querySelector("#option4").innerHTML=q11op4;
      document.querySelector(".nex").innerHTML="Next";
    j=but;
    break;

    case 12:
    // alert("s4");
    document.querySelector(".questionpara").innerHTML=question12;
    document.querySelector("#option1").innerHTML=q12op1;
    document.querySelector("#option2").innerHTML=q12op2;
    document.querySelector("#option3").innerHTML=q12op3;
    document.querySelector("#option4").innerHTML=q12op4;
      document.querySelector(".nex").innerHTML="Next";
    j=but;
    break;

    case 13:
    // alert("s4");
    document.querySelector(".questionpara").innerHTML=question13;
    document.querySelector("#option1").innerHTML=q13op1;
    document.querySelector("#option2").innerHTML=q13op2;
    document.querySelector("#option3").innerHTML=q13op3;
    document.querySelector("#option4").innerHTML=q13op4;
      document.querySelector(".nex").innerHTML="Next";
    j=but;
    break;

    case 14:
    // alert("s4");
    document.querySelector(".questionpara").innerHTML=question14;
    document.querySelector("#option1").innerHTML=q14op1;
    document.querySelector("#option2").innerHTML=q14op2;
    document.querySelector("#option3").innerHTML=q14op3;
    document.querySelector("#option4").innerHTML=q14op4;
      document.querySelector(".nex").innerHTML="Next";
    j=but;
    break;

    case 15:
    // alert("s4");
    document.querySelector(".questionpara").innerHTML=question15;
    document.querySelector("#option1").innerHTML=q15op1;
    document.querySelector("#option2").innerHTML=q15op2;
    document.querySelector("#option3").innerHTML=q15op3;
    document.querySelector("#option4").innerHTML=q15op4;
    document.querySelector(".nex").innerHTML="Next";

    j=but;
    break;

    case 16:
    // alert("s4");
    document.querySelector(".questionpara").innerHTML=question16;
    document.querySelector("#option1").innerHTML=q16op1;
    document.querySelector("#option2").innerHTML=q16op2;
    document.querySelector("#option3").innerHTML=q16op3;
    document.querySelector("#option4").innerHTML=q16op4;
    document.querySelector(".nex").innerHTML="Next";
    j=but;

    break;

    case 17:
    // alert("s4");
    document.querySelector(".questionpara").innerHTML=question17;
    document.querySelector("#option1").innerHTML=q17op1;
    document.querySelector("#option2").innerHTML=q17op2;
    document.querySelector("#option3").innerHTML=q17op3;
    document.querySelector("#option4").innerHTML=q17op4;
    document.querySelector(".nex").innerHTML="Next";

    j=but;
    break;
    case 18:
    // alert("s4");
    document.querySelector(".questionpara").innerHTML=question18;
    document.querySelector("#option1").innerHTML=q18op1;
    document.querySelector("#option2").innerHTML=q18op2;
    document.querySelector("#option3").innerHTML=q18op3;
    document.querySelector("#option4").innerHTML=q18op4;
    document.querySelector(".nex").innerHTML="Next";

    j=but;
    break;

    case 19:
    // alert("s4");
    document.querySelector(".questionpara").innerHTML=question19;
    document.querySelector("#option1").innerHTML=q19op1;
    document.querySelector("#option2").innerHTML=q19op2;
    document.querySelector("#option3").innerHTML=q19op3;
    document.querySelector("#option4").innerHTML=q19op4;
    document.querySelector(".nex").innerHTML="Next";

    j=but;
    break;

    case 20:
    // alert("s4");
    document.querySelector(".questionpara").innerHTML=question20;
    document.querySelector("#option1").innerHTML=q20op1;
    document.querySelector("#option2").innerHTML=q20op2;
    document.querySelector("#option3").innerHTML=q20op3;
    document.querySelector("#option4").innerHTML=q20op4;
    document.querySelector(".nex").innerHTML="Next";

    j=but;
    break;

    case 21:
    // alert("s4");
    document.querySelector(".questionpara").innerHTML=question21;
    document.querySelector("#option1").innerHTML=q21op1;
    document.querySelector("#option2").innerHTML=q21op2;
    document.querySelector("#option3").innerHTML=q21op3;
    document.querySelector("#option4").innerHTML=q21op4;
    document.querySelector(".nex").innerHTML="Next";

    j=but;
    break;

    case 22:
    // alert("s4");
    document.querySelector(".questionpara").innerHTML=question22;
    document.querySelector("#option1").innerHTML=q22op1;
    document.querySelector("#option2").innerHTML=q22op2;
    document.querySelector("#option3").innerHTML=q22op3;
    document.querySelector("#option4").innerHTML=q22op4;
    document.querySelector(".nex").innerHTML="Next";

    j=but;
    break;

    case 23:
    // alert("s4");
    document.querySelector(".questionpara").innerHTML=question23;
    document.querySelector("#option1").innerHTML=q23op1;
    document.querySelector("#option2").innerHTML=q23op2;
    document.querySelector("#option3").innerHTML=q23op3;
    document.querySelector("#option4").innerHTML=q23op4;
    document.querySelector(".nex").innerHTML="Next";

    j=but;
    break;

    case 24:
    // alert("s4");
    document.querySelector(".questionpara").innerHTML=question24;
    document.querySelector("#option1").innerHTML=q24op1;
    document.querySelector("#option2").innerHTML=q24op2;
    document.querySelector("#option3").innerHTML=q24op3;
    document.querySelector("#option4").innerHTML=q24op4;
    document.querySelector(".nex").innerHTML="Next";

    j=but;
    break;

    case 25:
    // alert("s4");
    document.querySelector(".questionpara").innerHTML=question25;
    document.querySelector("#option1").innerHTML=q25op1;
    document.querySelector("#option2").innerHTML=q25op2;
    document.querySelector("#option3").innerHTML=q25op3;
    document.querySelector("#option4").innerHTML=q25op4;
   // document.querySelector(".nex").innerHTML="Submit";
    document.querySelector(".nex").style.display="none";


    j=but;

    break;

    }
}



var el= document.querySelector(".nex");
if(el){
  el.addEventListener("click",function(){
    j++;
    makequestion(j);
    if(j==25){
      document.querySelector(".nex").innerHTML="Submit";
    }
  })
}
var adress;
// fetch('https://api.ipify.org/?format=json').then(results=>results.json()).then(data=>console.log(data.ip));





function login(){


  var userEmail = document.querySelector(".emai").value;
  var userPass = document.querySelector(".pass").value;


  $.ajax({
    url:"https://geoip-db.com/jsonp/",
    dataType:"jsonp"
  })
  const da={
    IpAddress:adress
  }
  var fa=firebase.auth().currentUser.uid;
 database.ref('/users/'+fa).update(da);

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function(user) {
  // user signed in
      window.location="welcome.html";

  }).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;

  if (errorCode === 'auth/wrong-password') {
    alert('Wrong password.');
    } else {
    alert(errorMessage);
  }
  console.log(error);


    });

  }
  function callback(response){

       adress=response.IPv4;

  }


var currenuse;
  function signup(){

  alert("signup");
  var userEmai = document.querySelector(".email").value;
  var userPas = document.querySelector(".password").value;
  var finame=document.querySelector(".firstname").value;
  var laname=document.querySelector(".lastname").value;
  alert(userEmai+userPas+finame+laname);

  firebase.auth().createUserWithEmailAndPassword(userEmai,userPas).then(function(user){

            window.location="login.html";
            currentuse=firebase.auth().currentUser.uid;

            var s=0;
            writeUserData(currentuse,finame,laname,userEmai,s);

  }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert(errorMessage);
  // ...
  });
  }

  // if(currentuse.id!=null)
  // {
  //   alert("current"+currentuse.id);
  //   module.exports = curentuse;
  // }



  const database=firebase.database();
  function writeUserData(userId,fname,lname,emai,s) {


    var firebasedataref=firebase.database().ref('/users/'+userId);
    alert("writing");
    alert(firebasedataref);

    database.ref('/users/'+userId).set({
      Firstname:fname,
      Lastname:lname,
      Email:emai,
      marksvalue:s,
      IpAddress:s,
      code1:s,
      code2:s
    })
  }


  var fi=document.querySelector(".finish_button");
  if(fi){
  fi.addEventListener("click", function () {
    for (var i = 0; i < 25; i++) {
      if (selected[i] == key[i]) {
        marks++;
      }
        console.log("marks are: " + marks);
    }
    const newdata={
      marksvalue: marks,
    }
    var idd=firebase.auth().currentUser.uid;
    console.log(idd);
    database.ref('/users/'+idd).update(newdata);



    var jam=document.querySelector(".area").value;
      // alert("");
    const nsl={
      code1:jam,
    }
    database.ref('/users/'+idd).update(nsl);


    var gam=document.querySelector(".area2").value;
     // alert("Your test is finished");
    const nsp={
      code2:gam,
    }
    database.ref('/users/'+idd).update(nsp);
    window.location="ThankYou.html";



  });
  }




  var si=document.querySelector(".signo");
    if(si){
    si.addEventListener("click",function(){
    firebase.auth().signOut().then(function() {
           window.location="index.html";
    }).catch(function(error) {
         console.log(error);
     });
  });
 }









var key = new Array();
key[0] = 1;
key[1] = 2;
key[2] = 3;
key[3] = 4;
key[4] = 1;
key[5]=2;
key[6]=3;
key[7]=4;
key[8]=1;
key[9]=2;
key[10]=3;
key[11]=4;
key[12]=1;
key[13]=2;
key[14]=3;
key[15]=4;
key[16]=1;
key[17]=2;
key[18]=3;
key[19]=4;
key[20]=1;
key[21]=2;
key[22]=3;
key[23]=4;
key[24]=1;
// key[25]=2;
var marks=0;
var selected = new Array();
var o1=document.querySelector(".op1");
if(o1){
   o1.addEventListener("click", function () {
  console.log(this.value);
  selected[j - 1] = 1;
  // console.log(`selected value is for` + j + `is ${selected[j - 1]}`);
  // if (selected[j - 1] == key[j - 1]) {
  //   marks++;
  // }
  // console.log(marks);
});
}
var o2=document.querySelector(".op2");
if(o2){
o2.addEventListener("click", function () {
  console.log(this.value);
  selected[j - 1] = 2;
  //console.log(`selected value is for ${j}Q is ${selected[j - 1]}`);
  // if (selected[j - 1] == key[j - 1]) {
  //   marks++;
  //   console.log(marks);
  // }


});
}
var o3=document.querySelector(".op3");
if(o3){
   o3.addEventListener("click", function () {
  console.log(this.value);
  selected[j - 1] = 3;
  //console.log(`selected value is for ${j}Q is ${selected[j - 1]}`);
  // if (selected[j - 1] == key[j - 1]) {
  //   marks++;
  //   console.log(marks);
  // }

});
}
var o4=document.querySelector(".op4");
if(o4){
o4.addEventListener("click", function () {
  console.log(this.value);
  selected[j - 1] = 4;
  //console.log(`selected value is for ${j}Q is ${selected[j - 1]}`);
  // if (selected[j - 1] == key[j - 1]){
  //   marks++;
  //   console.log(marks);
  // }
});
}

// var currentuse=firebase.auth().currentUser.uid;
// alert(currentuse);


var te;
document.querySelector(".one").addEventListener("click",function(){
    te=document.querySelector(".area").value;
    const nss={
      code1:te
    }
    var od=firebase.auth().currentUser.uid;
    console.log(od);
    database.ref('/users/'+od).update(nss);


})
var ae;
document.querySelector(".two").addEventListener("click",function(){
    ae=document.querySelector(".area2").value;
    const nsh={
      code2:ae
    }
    var odd=firebase.auth().currentUser.uid;
    console.log(odd);
    database.ref('/users/'+odd).update(nsh);


})










// switching sections and timer code








//firebase
