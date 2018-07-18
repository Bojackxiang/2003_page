$(document).ready(function() {
  console.log("pv statistics");
  // source url
  var source = document.referrer;
  
  if (source.trim() == "") {
    source = "default";
  } else {
    var stringQuery = source.split("/");
    source = stringQuery.reduce((first, second) => {
      first.length > second.length ? first : second
    });
  }
});
