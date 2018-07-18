$(document).ready(function() {
  console.log("pv statistics");
  // source url
  var source = document.referrer;
  console.log(source);

  if (source.trim() == "") {
    source = "default";
  } else {
    source = new URL(document.referrer).hostname
  }
  console.log(source);
  
});
