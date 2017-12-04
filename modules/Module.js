
function Buttonclick(){
var httpclient = new kony.net.HttpRequest();
httpclient.onReadyStateChange = onReady;
httpclient.open
(constants.HTTP_METHOD_GET,"https://www.tue.nl/", false);
httpclient.send
();
}

