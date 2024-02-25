
class Coords
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
	}

	add(other)
	{
		this.x += other.x;
		this.y += other.y;
		return this;
	}

	addXY(x, y)
	{
		this.x += x;
		this.y += y;
		return this;
	}

	clone()
	{
		return new Coords(this.x, this.y);
	}

	divideScalar(scalar)
	{
		this.x /= scalar;
		this.y /= scalar;
		return this;
	}

	magnitude()
	{
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	multiplyScalar(scalar)
	{
		this.x *= scalar;
		this.y *= scalar;
		return this;
	}

	normalize()
	{
		return this.divideScalar(this.magnitude() );
	}

	right()
	{
		var xBeforeTransform = this.x;

		this.x = 0 - this.y;
		this.y = xBeforeTransform;

		return this;
	}

	subtract(other)
	{
		this.x -= other.x;
		this.y -= other.y;
		return this;
	}

}
