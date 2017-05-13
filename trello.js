
window.addEventListener("load", function(){
    enableGA();
    var instance = new window.cookieconsent.Popup({
    palette: {
    "popup": {
    "background": "#eaf7f7",
    "text": "#5c7291"
    },
"button": {
    "background": "#56cbdb",
    "text": "#ffffff"
    }
},
type: "opt-out",
content: {
    "allow": "Accept",
    "deny": "Decline",
    "href": "http://trello.de/dataprivacy.html"
    },
cookie:{
  "name":"trelloDeCookie",
  "path":"/",
  "domain":"trello.de"
},
    animateRevokable:false,
onStatusChange: function(status, chosenBefore) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (didConsent){
    enableGA()
    }

if (type == 'opt-out' && !didConsent) {
    delete_cookie("_ga");
    delete_cookie("_gat");
    delete_cookie("_gid");
    delete_cookie("trelloDeCookie");
}
}
});
if (!instance.hasAnswered()){
    instance.open();
    }else{
    instance.toggleRevokeButton(true);
    }
document.body.appendChild(instance.element);
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');


var trackOutboundLink = function(url) {
    ga('send', 'event', 'outbound to trello.com', 'click on link', url, {
        'transport': 'beacon',
        'hitCallback': function(){document.location = url;}
});
}

var trackOutboundImage = function(url) {
    ga('send', 'event', 'outbound to trello.com', 'click on Img', url, {
        'transport': 'beacon',
        'hitCallback': function(){document.location = url;}
});
}

function handleStayOnPage(event) {
    ga('send', 'event', {
        eventCategory: 'visitor stayed on pages',
        eventAction: 'click',
        eventLabel: 'click on X upper right corner',
        transport: 'beacon'
    });
}

var enableGA = function(){
    ga('create', 'UA-90457568-1', 'auto');
    ga('set', 'anonymizeIp', true);
    ga('send', 'pageview');
    }

var delete_cookie = function(name) {
    var domain = domain || document.domain;
    var path = path || "/";
        document.cookie = name +"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=" + domain + "; path=" + path;
    };


$(document).ready(function(){
    $('#content-wrapper').hide();

    $('body').addClass('stop-scrolling');
    setTimeout(function(){
    document.getElementById("myNav").style.height = "100%";
    $('body').bind('touchmove', function(e){e.preventDefault()});
}, 1000);
});

function closeOverlay() {
    handleStayOnPage();
    document.getElementById("myNav").style.height = "0%";
    $('body').unbind('touchmove');
    $('body').removeClass('stop-scrolling');
    $('#content-wrapper').show();
    }
