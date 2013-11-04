var attributes = [
	"glass",
	"desert",
	"hidden",
	"covert",
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
	"amber", "ammolite", "bone", "coral", "ivory", "jet", "nacre", "pearl", "obsidian", "unakite",
	// Regular Gems
	"agate", "alexandrite", "andalusite", "axinite", "benitoite", "aquamarine", "beryl", "bixbite", "cassiterite", "chrysocolla", "chrysoprase", "clinohumite", "iolite", "danburite", "diamond", "diopside", "dumortierite",
	"opal",
	"ruby",
	"onxy",
	"sapphire",
	"emerald",
	"jade",
]

var objects = [
	// Large cats
	"panther", "wildcat", "tiger", "lion", "cheeta", "cougar", "leopard",
	// Snakes
	"viper", "cottonmouth", "python",
	"grizzly",
	"wildabeast",
	"jackal",
	"nomad",
	"mainframe",
	"octopus"
]

var type = "PROJECT";

function createCodename()
{
	var f = attributes[Math.floor(Math.random() * attributes.length)].toUpperCase();
	var l = objects[Math.floor(Math.random() * objects.length)].toUpperCase();


	$('#codename').text(f + " " +  l);
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
}

createCodename();
$('#newProject').click(createCodename);
$('#switchType').click(switchType);