
class ComponentText
{
	constructor(pos, heightInPixels, text)
	{
		this.pos = pos;
		this.heightInPixels = heightInPixels;
		this.text = text;
	}

	fieldPrototypesSet()
	{
		Object.setPrototypeOf(this.pos, Coords.prototype);
	}

	toSvg()
	{
		var thisAsSvg =
			"<text "
			+ "x='" + this.pos.x + "' y='" + this.pos.y + "' "
			+ "font-size='" + this.heightInPixels + "' "
			+ "fill='black' "
			// + "transform='rotate(30 20,40)' " // todo
			+ ">"
			+ this.text
			+ "</text>";

		return thisAsSvg;
	}
}
