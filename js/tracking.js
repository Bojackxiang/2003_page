$(document).ready(function() {
  console.log("pv statistics");
  // source url
  var source = document.referrer;

  if (source.trim() == "") {
    source = "default";
  } else {
    source = source
  }
  console.log(source);
});
