
var health = 100;
var money = 10000;

var inventory = [];

document.getElementById('s1').style.display='block';
document.getElementById('GO').style.display='none';

document.getElementById('s1c1').addEventListener("click", function(){
  inventory.push("doorknob");
  inventory.push("splinter");
  document.getElementById("inv_box").innerHTML=inventory;
document.getElementById('s2').style.display='block';
document.getElementById('s1c2').style.display='none';
document.getElementById('s1c1',).style.color='gray';
document.getElementById('s1',).style.color='grey';

});
document.getElementById('s1c2').addEventListener("click", function(){
    document.getElementById("inv_box").innerHTML=inventory;
document.getElementById('back').style.display='block';
document.getElementById('s1c1').style.display='none';
document.getElementById('s1c2',).style.color='gray';
document.getElementById('s1',).style.color='grey';

});
document.getElementById('backSwing').addEventListener("click", function(){
    document.getElementById("inv_box").innerHTML=inventory;
document.getElementById('SwingSet').style.display='block';
document.getElementById('backDoor').style.display='none';
document.getElementById('backDoor',).style.color='gray';
document.getElementById('back',).style.color='grey';

});
document.getElementById('swing').addEventListener("click", function(){
    document.getElementById("inv_box").innerHTML=inventory;
document.getElementById('Swing2').style.display='block';
document.getElementById('backDoor2').style.display='none';
document.getElementById('swing',).style.color='gray';
document.getElementById('SwingSet',).style.color='grey';

});
document.getElementById('backDoor').addEventListener("click", function(){
  document.getElementById("inv_box").innerHTML=inventory;
document.getElementById('openbackdoor').style.display='block';
document.getElementById('backSwing').style.display='none';
document.getElementById('backDoor').style.color='grey';
document.getElementById('back',).style.color='grey';

});
document.getElementById('backDoor2').addEventListener("click", function(){
  document.getElementById("inv_box").innerHTML=inventory;
document.getElementById('openbackdoor').style.display='block';
document.getElementById('SwingSet').style.color='grey';
document.getElementById('swing').style.display='none';


});
document.getElementById('backDoor3').addEventListener("click", function(){
  document.getElementById("inv_box").innerHTML=inventory;
document.getElementById('openbackdoor').style.display='block';
document.getElementById('examine').style.display='none';
document.getElementById('backDoor3').style.color='grey';
document.getElementById('Swing2',).style.color='grey';

});
document.getElementById('run').addEventListener("click", function(){
  document.getElementById("inv_box").innerHTML=inventory;
document.getElementById('s1').style.display='none';
document.getElementById('back').style.display='none';;
document.getElementById('openbackdoor').style.display='none';
document.getElementById('GO').style.display='block';


});
