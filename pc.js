var attributes = [
	// Environ
	"desert", "tundra", "mountain", "space", "field", "urban",
	// Stealth and cunning
	"hidden", "covert", "uncanny", "scheming", "decisive", "untouchable", "stalking",
	// Volitility
	"rowdy", "dangerous", "explosive", "threatening", "warring", "deadly", "killer", "insane", "wild",
	// Needs correction
	"bad", "unnecessary", "unknown", "unexpected", "waning",
	// Organic Gems and materials
	"amber", "bone", "coral", "ivory", "jet", "nacre", "pearl", "obsidian", "glass",
	// Regular Gems
	"agate", "beryl", "diamond", "opal", "ruby", "onyx", "sapphire", "emerald", "jade",
	// Colors
	"red", "orange", "yellow", "green", "blue", "violet",
	// Unsorted
	"draconic", "wireless", "spinning", "falling", "orbiting", "hunting", "chasing", "searching", "revealing", "flying", "destroyed", "inconceivable", "tarnished"
]

var objects = [
	// Large cats
	"panther", "wildcat", "tiger", "lion", "cheetah", "cougar", "leopard",
	// Snakes
	"viper", "cottonmouth", "python", "boa", "sidewinder", "cobra",
	// Other predators
	"grizzly", "jackal", "falcon",
	// Prey
	"wildebeest", "gazelle", "zebra", "elk", "moose", "deer", "stag", "pony", "koala", "sloth",
	// HORSES!
	"horse", "stallion", "foal", "colt", "mare", "yearling", "filly", "gelding",
	// Mythical creatures
	"mermaid", "unicorn", "fairy", "troll", "yeti", "pegasus", "griffin", "dragon",
	// Occupations
	"nomad", "wizard", "cleric", "pilot", "captain", "commander", "general", "major", "admiral", "chef", "inspector", 
	// Technology
	"mainframe", "device", "motherboard", "network", "transistor", "packet", "robot", "android", "cyborg", "display", "battery", "memory", "disk", "cartridge", "tape", "camera", "projector",
	// Sea life
	"octopus", "lobster", "crab", "barnacle", "hammerhead", "orca", "piranha",
	// Weather
	"storm", "thunder", "lightning", "rain", "hail", "sun", "drought", "snow", "drizzle"
	// Musical
	"piano", "keyboard", "guitar", "trumpet", "trombone", "flute", "cornet", "horn", "tuba", "clarinet", "saxophone", "piccolo", "violin", "harp", "cello", "drum", "organ", "banjo", "rhythm", "beat", "sound", "song",
	// Tools
	"screwdiver", "sander", "lathe", "mill", "welder", "mask", "hammer", "drill", "compressor", "wrench", "mixer", "router", "vacuum",
	// Other
	"warning", "presence", "weapon", "player", "ink", "case", "cup", "chain", "door"
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
