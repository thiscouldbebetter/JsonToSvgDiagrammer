
class Diagram
{
	constructor(name, size, components)
	{
		this.name = name;
		this.size = size;
		this.components = components || [];
	}

	static demo()
	{
		var components =
		[
			new ComponentText
			(
				new Coords(0, 20), // pos
				20, // heightInPixels
				"Diagram!"
			),

			new ComponentBox
			(
				new Coords(10, 40), // pos
				new Coords(30, 40), // size
				10, // textHeightInPixels
				"Tall!"
			),

			new ComponentArrow
			([
				new Coords(40, 60),
				new Coords(60, 60),
				new Coords(60, 80),
				new Coords(100, 80)
			]),

			new ComponentText
			(
				new Coords(64, 76),
				10, // heightInPixels
				"Arrow!"
			),

			new ComponentBox
			(
				new Coords(100, 60), // pos
				new Coords(40, 30), // size
				10, // textHeightInPixels
				"Wide!"
			),

		];

		var demoDiagram = new Diagram
		(
			"Demo",
			new Coords(200, 200), // size
			components
		);

		return demoDiagram;
	}

	fieldPrototypesSet()
	{
		this.components.forEach
		(
			x =>
			{
				var prototypeToSet =
					x.typeName == ComponentArrow.name
					? ComponentArrow.prototype
					: x.typeName == ComponentBox.name
					? ComponentBox.prototype
					: x.typeName == ComponentText.name
					? ComponentText.prototype
					: null;

				if (prototypeToSet == null)
				{
					throw new Error("Unrecognized type name: " + x.typeName);
				}

				Object.setPrototypeOf(x, prototypeToSet);
				x.fieldPrototypesSet();
			}
		);

		this.components.forEach(x => delete x.typeName);

		return this;
	}

	toJson()
	{
		this.components.forEach(x => x.typeName = x.constructor.name);

		var thisAsJson = JSON.stringify(this, null, 4);

		this.components.forEach(x => delete x.typeName);

		return thisAsJson;
	}

	toSvg()
	{
		var diagramAsLines =
		[
			"<?xml version='1.0' encoding='UTF-8' standalone='no'?>",
			"<svg "
			+ "xmlns='http://www.w3.org/2000/svg' "
			+ "viewBox='0 0 " + this.size.x + this.size.y + "'"
			+ ">"
		];

		var componentsAsSvg = this.components.map(x => x.toSvg() );

		diagramAsLines.push(...componentsAsSvg);

		diagramAsLines.push("</svg>");

		var newlines = "\n\n";

		var diagramAsSvg = diagramAsLines.join(newlines);

		return diagramAsSvg;
	}
}
