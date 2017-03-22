var guys = {
	"bdog": "https://twitch.tv/bdog_cx",
	"standard": "https://twitch.tv/standardbredstyle",
	"beats": "https://twitch.tv/beatstr33t",
	"m": "http://steamcommunity.com/profiles/76561198104516043",
	"connor": "https://instagram.com/good.sipp",
}

var links = {
	"discord": "https://discordapp.com/invite/dhh2GQv"
}

var marquee = document.getElementsByClassName("js-marquee")[0];

for (var guy in guys)
{
	var node = document.createElement("a");
	var text = document.createTextNode(guy);

	node.appendChild(text);
	node.href = guys[guy];
	node.target = "_blank";
	marquee.appendChild(node);

	var keys = Object.keys(guys);
	if (guy != keys[keys.length - 1])
		marquee.innerHTML += ' - ';
}

var center = document.getElementById("center");

for (var link in links)
{
	var pre = document.createElement("pre");
	var node = document.createElement("a");
	var text = document.createTextNode(link);

	node.appendChild(text);
	node.href = links[link];
	node.target = "_blank";
	pre.appendChild(node);
	center.appendChild(pre);
}