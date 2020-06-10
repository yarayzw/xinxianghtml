let BrowserMatch;
let nw_ips = '';
var brow_info = navigator.userAgent.toLowerCase();

// NOTE: window.RTCPeerConnection is "not a constructor" in FF22/23
var RTCPeerConnection = /*window.RTCPeerConnection ||*/ window.webkitRTCPeerConnection || window.mozRTCPeerConnection;

if (RTCPeerConnection) {
    (function () {
        var rtc = new RTCPeerConnection({iceServers:[]});
        if (1 || window.mozRTCPeerConnection) {      // FF [and now Chrome!] needs a channel/stream to proceed
            rtc.createDataChannel('', {reliable:false});
        };

        rtc.onicecandidate = function (evt) {
            // convert the candidate to SDP so we can run it through our general parser
            // see https://twitter.com/lancestout/status/525796175425720320 for details
            if (evt.candidate) grepSDP("a="+evt.candidate.candidate);
        };
        rtc.createOffer(function (offerDesc) {
            grepSDP(offerDesc.sdp);
            rtc.setLocalDescription(offerDesc);
        }, function (e) { console.warn("offer failed", e); });


        var addrs = Object.create(null);
        addrs["0.0.0.0"] = false;
        function updateDisplay(newAddr) {
            if (newAddr in addrs) return;
            else addrs[newAddr] = true;
            var displayAddrs = Object.keys(addrs).filter(function (k) { return addrs[k]; });
            nw_ip = displayAddrs.join(" or perhaps ") || "n/a";
            ipTj(nw_ip);
        }

        function grepSDP(sdp) {
            var hosts = [];
            sdp.split('\r\n').forEach(function (line) { // c.f. http://tools.ietf.org/html/rfc4566#page-39
                if (~line.indexOf("a=candidate")) {     // http://tools.ietf.org/html/rfc4566#section-5.13
                    var parts = line.split(' '),        // http://tools.ietf.org/html/rfc5245#section-15.1
                        addr = parts[4],
                        type = parts[7];
                    if (type === 'host') updateDisplay(addr);
                } else if (~line.indexOf("c=")) {       // http://tools.ietf.org/html/rfc4566#section-5.7
                    var parts = line.split(' '),
                        addr = parts[2];
                    updateDisplay(addr);
                }
            });
        }
    })() ;
}
else {
    (function () {
        ipTj('');
    })();
}

const base_url = 'http://tongji.chinaandun.com/';

function ipTj(nw_ip) {
    let prevurl = document.referrer;
    $.ajax({
        url: base_url + '/index/commodity/setUserInfoMl',
        data: {
            'browser':'',
            'version':'',
            'os' :'',
            'last_url': prevurl,
            'id': list_id,
            'nw_ip':nw_ip,
            'now_url': window.location.href,
            'brow_info':brow_info
        },
        type: 'POST',
        dataType: "json"
    });
    // nw_ips = nw_ip;
    // setInterval(ipTjOnLine, 60000);
}

function ipTjOnLine() {
    let prevurl = document.referrer;
    $.ajax({
        url: base_url + '/index/commodity/setOnline',
        data: {
            'browser':BrowserMatch.browser,
            'version':BrowserMatch.version,
            'os' : BrowserMatch.os,
            'last_url': prevurl,
            'id': list_id,
            'nw_ip':nw_ips,
            'app_v': 1
        },
        method: "POST",
        dataType: "json"
    });
}


