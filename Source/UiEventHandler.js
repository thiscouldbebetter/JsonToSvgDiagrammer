class UiEventHandler
{
	static buttonConvertJsonToSvg_Clicked()
	{
		var d = document;
		var textareaDiagramAsJson =
			d.getElementById("textareaDiagramAsJson");
		var diagramAsJson = textareaDiagramAsJson.value;

		var diagram = null;

		try
		{
			var diagramAsObject = JSON.parse(diagramAsJson);
			Object.setPrototypeOf(diagramAsObject, Diagram.prototype);
			diagram = diagramAsObject.fieldPrototypesSet();
		}
		catch (err)
		{
			alert("The specified JSON could not be parsed into a diagram.");
		}

		if (diagram != null)
		{
			var diagramAsSvg = diagram.toSvg();

			var textareaDiagramAsSvg =
				d.getElementById("textareaDiagramAsSvg");
			textareaDiagramAsSvg.value = diagramAsSvg;
		}
	}

	static buttonDiagramAsJsonClear_Clicked()
	{
		var d = document;
		var textareaDiagramAsJson =
			d.getElementById("textareaDiagramAsJson");
		textareaDiagramAsJson.value = "";
	}

	static buttonDiagramAsJsonLoadDemo_Clicked()
	{
		var d = document;
		var textareaDiagramAsJson =
			d.getElementById("textareaDiagramAsJson");

		var diagramDemo = Diagram.demo();
		var diagramDemoAsJson = diagramDemo.toJson();

		textareaDiagramAsJson.value = diagramDemoAsJson;
	}

	static buttonRenderSvgAsImage_Clicked()
	{
		var d = document;
		var textareaDiagramAsSvg =
			d.getElementById("textareaDiagramAsSvg");
		var diagramAsSvg = textareaDiagramAsSvg.value;

		var diagramAsSvgEncoded = encodeURIComponent(diagramAsSvg);
		var diagramAsDataUrl = "data:image/svg+xml," + diagramAsSvgEncoded;
		var diagramAsImgElement = d.createElement("img");
		diagramAsImgElement.src = diagramAsDataUrl;

		var divDiagramAsImage = d.getElementById("divDiagramAsImage");
		divDiagramAsImage.innerHTML = "";
		divDiagramAsImage.appendChild(diagramAsImgElement);
	}
}
