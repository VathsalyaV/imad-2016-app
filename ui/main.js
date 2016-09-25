
var button = document.getElementById('counter');

button.onclick = function() {
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if(request.readyState == XMLHttpRequest.DONE)
        {
            if(request.status == 200)
            {
                var counter = request.responseText;
                var count=document.getElementById('count');
                count.innerHtml=counter.toString();
            }
        }
    };
    
    request.open('GET', 'http://vathsalyav.imad.hasura-app.io', true);
    request.send(null);
};