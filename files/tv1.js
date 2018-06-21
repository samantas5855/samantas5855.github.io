var channels = [{"title":"SMILE","url":"http:\/\/www.anacon.org\/app\/chans\/cy\/smilecy.html","img":"img\/smile.jpg"},
{"title":"RIK1","url":"http:\/\/www.fireshow.xyz\/rik1m.html","img":"img\/rik1.jpg"},
{"title":"RIK2","url":"http:\/\/www.fireshow.xyz\/rik2m.html","img":"img\/rik2.jpg"},
{"title":"RIKsat","url":"http:\/\/www.riknews.com.cy\/index.php\/tv\/sat-live","img":"img\/riksat.jpg"},
{"title":"ANT1 CY","url":"http:\/\/www.fireshow.xyz\/ant1cym.html","img":"img\/ant1cy.jpg"},
{"title":"ANT1 CY","url":"http:\/\/www.ant1iwo.com\/webtv\/web-tv-live\/","img":"img\/ant1cy.jpg"},
{"title":"SIGMA CY","url":"http://www.fireshow.xyz/sigmam.html","img":"img\/sigmacy.jpg"},
{"title":"Sigma CY","url":"http://www.sigmatv.com/live","img":"img\/sigmacy.jpg"},
{"title":"MEGA CY","url":"http:\/\/www.fireshow.xyz\/megacym.html","img":"img\/mega.jpg"},
{"title":"MEGA CY","url":"http://www.megatv.com.cy/live/?cs=1","img":"img\/mega.jpg"},
{"title":"ALPHA CY","url":"http://www.alphacyprus.com.cy/page/live","img":"img\/alphacy.jpg"},
{"title":"ALPHA CY","url":"http://www.alphacyprus.com.cy/page/live","img":"img\/alphacy.jpg"},
{"title":"PLUS CY","url":"http://www.anacon.org/app/chans/cy/pluscy.html","img":"img\/plus.jpg"},
{"title":"CAPITAL CY","url":"http:\/\/www.anacon.org\/app\/chans\/cy\/capitalcy.html","img":"img\/capital.jpg"},
{"title":"EXTRA CY","url":"http:\/\/www.anacon.org\/app\/chans\/cy\/extracy.html","img":"img\/extracy.jpg"},
{"title":"EPISTROFI","url":"http://www.radioepistrofi.com/live.html","img":"img\/radioepistrofi.jpg"},
{"title":"RELOAD TV","url":"http://www.anacon.org/app/chans/cy/reload.html","img":"img\/reloadtv.jpg"},
{"title":"REBOOT TV","url":"http://www.anacon.org/app/chans/cy/reboot.html","img":"img\/reboot.jpg"},
{"title":"SPICY TV","url":"http://www.anacon.org/app/chans/cy/spicy.html","img":"img\/spicytv.jpg"},
{"title":"SPICY TV2","url":"http://www.anacon.org/app/chans/cy/spicy2.html","img":"img\/spicytv.jpg"},
{"title":"RELOAD BIZZ","url":"http://www.anacon.org/app/chans/cy/reloadbizz.html","img":"img\/reloadbizz.jpg"},
{"title":"FAROS","url":"http://www.anacon.org/app/chans/cy/faros.html","img":"img\/faroscy.jpg"},
{"title":"CHURCH","url":"http:\/\/agiosgeorgios.quilloncy.com\/leitourgia.html","img":"img\/church.jpg"},
{"title":"ADAMS","url":"http:\/\/adamscam.click2stream.com\/","img":"img\/adams.jpg"},
{"title":"MAD","url":"http://www.anacon.org/app/chans/cy/mad.html","img":"img\/mad.jpg"},
{"title":"NRG","url":"http://www.anacon.org/app/chans/cy/nrg.html","img":"img\/nrg.jpg"},
{"title":"DIASPORA","url":"http://www.anacon.org/app/chans/cy/diaspora.html","img":"img\/diaspora.jpg"},
{"title":"CYSPORTS","url":"http://www.cysports.tv/home.html","img":"img\/cysports.jpg"},
{"title":"ALFASPORTS","url":"http://alfasports.tv/live-streaming/","img":"img\/alfasports.jpg"},
{"title":"7SPORTSTV","url":"http://www.istoikona.com/7sports.aspx","img":"img\/7sportstv.jpg"},
{"title":"TV MALL","url":"http://www.anacon.org/app/chans/cy/mall.html","img":"img\/tvmall.jpg"}];
function getDataByString(arr, str) {
	var keys = str.split('.');
	var tmp;
	tmp = arr;
	for (var i = 0; i < keys.length; i++) {
		if (tmp[keys[i]] == undefined) {
			return '';
		}
		else {
			tmp = tmp[keys[i]];
		}
	}
	return tmp;
}

var item_template =
	'<div class="collection-item  col s6 m4 l3" >' +
	'<div class="card">' +
	'<div class="card-image red blue lighten-4">' +
	'<img src="{{img}}"/>'+
	'</div>' +
	'<div class="card-action">' +
	'<a style="display:block; width: 100%" href="{{url}}">{{title}}</a>' +
	'</div> ' +
	'</div>'+
	'</div>';

var html = '';
for(var i = 0; i < channels.length; i++){
	if(!channels[i].img){
		channels[i].img = 'img/ic_live_tv_white_48dp.png';
	}
}
for(i = 0; i < channels.length; i++){
	var channel = channels[i];
	html += item_template.replace(/{{(.*?)}}/ig, function (k, s) {
		return getDataByString(channel, s);
	});
}
$('.channels-collection').html(html);
$('.collection-item').bind('click',function(e){
	window.location = $(this).find('a').attr('href');
});
window.onload = function()
{
    $('.row.channels-collection').masonry({
        itemSelector: '.collection-item.col.s6.m4.l3',
        percentPosition: true
    });
};
