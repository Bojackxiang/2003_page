$(document).ready(function() {
  console.log("pv statistics");
  // source url
  var source = document.referrer;

  if (source.trim() == "") {
    source = "default";
  } else {
    sourceQuery = source.split("/").indexOf("com");
    sourcePos =sourceQuery.indexOf(".com")
    source = sourceQuery[sourcePos];
    console.log(source);
  }
});
