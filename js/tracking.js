$(document).ready(function() {
    console.log("pv statistics")
    var source = document.referrer;
    if(source.trim() == ""){
        console.log("get in from default");
    }else{
        var stringQuery = source.split("/");
        console.log(stringQuery);
    }
    
});