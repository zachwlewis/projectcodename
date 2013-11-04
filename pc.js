var attributes = [
	"glass",
	"desert",
	"hidden",
	"opal",
	"covert",
	"rowdy",
	"dangerous",
	"explosive",
	"uncanny",
	"scheming",
	"decisive"
]

var objects = [
	"grizzly",
	"tiger",
	"viper",
	"cottonmouth",
	"wildabeast",
	"jackal",
	"python",
	"nomad",
	"mainframe",
	"octopus",
	"panther"
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