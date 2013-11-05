var attributes = [
	"glass",
	// Environ
	"desert", "tundra", "mountain", "space", "field", "urban",
	"hidden", "covert",
	"rowdy",
	"dangerous",
	"explosive",
	"uncanny",
	"scheming",
	"decisive",
	"bad",
	"waning",
	"warring",
	// Organic Gems
	"amber", "bone", "coral", "ivory", "jet", "nacre", "pearl", "obsidian",
	// Regular Gems
	"agate", "beryl", "diamond", "opal", "ruby", "onxy", "sapphire", "emerald", "jade"
]

var objects = [
	// Large cats
	"panther", "wildcat", "tiger", "lion", "cheetah", "cougar", "leopard",
	// Snakes
	"viper", "cottonmouth", "python", "boa", "sidewinder", "cobra",
	//
	"grizzly",
	// Prey
	"wildabeast", "gazelle", "zebra", "elk", "moose", "deer", "stag",
	//
	"jackal",
	//
	"nomad",
	// Technology
	"mainframe", "device", "motherboard", "network", "transistor", "packet",
	// Sea life
	"octopus", "lobster", "crab", "barnacle", "hammerhead", "orca", "piranha"
]

var type = "PROJECT";
var codename = "CODENAME";

function createCodename()
{
	var f = attributes[Math.floor(Math.random() * attributes.length)].toUpperCase();
	var l = objects[Math.floor(Math.random() * objects.length)].toUpperCase();
	codename = f + " " + l;

	$('#codename').text(codename);
	updateTwitterButton();
}

function switchType()
{
	if (type == "PROJECT")
	{
		type = "OPERATION";
		$('#switchType').text("It's a project.");
	}
	else
	{
		type = "PROJECT";
		$('#switchType').text("It's an operation.");
	}

	$('#opType').text(type);
	updateTwitterButton();
}

function updateTwitterButton()
{
	$('#twitter').replaceWith("<a href=\"https://twitter.com/share\" id=\"twitter\" class=\"twitter-share-button\" data-via=\"zachwlewis\" data-url=\"http://projectcodename.com\">Tweet</a>");
	$('#twitter').attr('data-text', type + ": " + codename + " is a go.");

	if(typeof(twttr) !== 'undefined')
	{
		twttr.widgets.load();
	}
}

createCodename();
$('#newProject').click(createCodename);
$('#switchType').click(switchType);
