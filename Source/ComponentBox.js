
class ComponentBox
{
	constructor(pos, size, textHeightInPixels, text)
	{
		this.pos = pos;
		this.size = size;
		this.textHeightInPixels = textHeightInPixels;
		this.text = text;
	}

	fieldPrototypesSet()
	{
		Object.setPrototypeOf(this.pos, Coords.prototype);
		Object.setPrototypeOf(this.size, Coords.prototype);
	}

	toSvg()
	{
		var thisAsSvg =
			"<rect "
			+ "x='" + this.pos.x + "' y='" + this.pos.y + "' "
			+ "width='" + this.size.x + "' height='" + this.size.y + "' "
			+ "stroke='black' fill='none' "
			+ "/>";

		if (this.text != null)
		{
			var textPos = this.pos.clone().addXY(0, this.textHeightInPixels);
			var textAsComponent =
				new ComponentText(textPos, this.textHeightInPixels, this.text);
			var textAsSvg = textAsComponent.toSvg();
			var newline = "\n"
			thisAsSvg += newline + textAsSvg;
		}

		return thisAsSvg;
	}
}
