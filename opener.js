function editPage(url){
  var win = window.open(url);
  win.focus();
  win.onload = function(){
    alert("here");
    document.getElementsByClassName("edit-post")[0].click();
    win.setTimeout(function(){
      document.getElementById("fix").click();
    }, 1000);
    win.setTimeout(function(){
      document.getElementsByTagName("input")[14].click();
    }, 1500);
  }
}
