
var counter=0;
var button = document.getElementById('counter');

button.onClick = function() {
    
    //var request = new XMLHttpRequest();
   // request.onReadyStateChange = function() {
        
    //}
    
    counter=counter+1;
    var count=document.getElementById('count');
    count.innerHtml=counter.toString();
};