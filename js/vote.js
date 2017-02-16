$(function(){
  event.preventDefault();
  var over18 = confirm("Are you over 18? Click ok for yes or Cancel for no.")

  if (over18) {
    $("#voteAge").show();
  } else {
    $("#minors").show();
  }
});
