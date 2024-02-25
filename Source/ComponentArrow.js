
class ComponentArrow
{
	constructor(pointsFromStartToEnd)
	{
		this.pointsFromStartToEnd = pointsFromStartToEnd;
	}

	fieldPrototypesSet()
	{
		this.pointsFromStartToEnd.forEach
		(
			x => Object.setPrototypeOf(x, Coords.prototype)
		);
	}

	toSvg()
	{
		var points = this.pointsFromStartToEnd;

		var pointLast = points[points.length - 1];
		var pointNextToLast = points[points.length - 2];
		var directionOfLastSegment =
			pointLast.clone().subtract(pointNextToLast).normalize();
		var rightOfLastSegment = directionOfLastSegment.clone().right();
		var headSizeInPixels = 10; // todo
		var displacementToBackCornerOfHead =
			directionOfLastSegment.multiplyScalar
			(
				0 - headSizeInPixels
			).add
			(
				rightOfLastSegment.multiplyScalar
				(
					0 - headSizeInPixels / 2
				)
			);

		var pointForBackCornerOfHead = pointLast.clone().add
		(
			displacementToBackCornerOfHead
		);

		var pointsPlusHead = points.map(x => x);
		pointsPlusHead.push(pointForBackCornerOfHead)

		var pointsAsText =
			pointsPlusHead.map(x => x.x + "," + x.y);

		var pointsAsTextJoined = pointsAsText.join(" ");

		var thisAsSvg =
			"<polyline "
			+ "points='" + pointsAsTextJoined + "' "
			+ "fill='none' "
			+ "stroke='black' "
			// + "stroke-width='1' "
			// + "stroke-linecap='round' "
			+ "/>";

		return thisAsSvg;
	}
}
