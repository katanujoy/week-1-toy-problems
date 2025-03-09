class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        return (Math.PI * this.radius ** 2 * this.height).toFixed(4);
    }
}

// Predefined values for radius and height
const radius = 14;
const height = 20;

const cylinder = new Cylinder(radius, height);
console.log(`Radius: ${radius}, Height: ${height}`);
console.log(`Volume: ${cylinder.getVolume()}`);
