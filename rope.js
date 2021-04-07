
class Rope {
    constructor(body1, body2, offsetX, offsetY){
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB : { x:this.offsetX, y:this.offsetY }

           
        }
        this.rope = Constraint.create(options);
        World.add(world, this.chain);

        rope1 = new this.rope(bobobj1.body, roofobj.body, -bobDiameter*2,0);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}

