class Part
{
    constructor()
    {
        this.pos = createVector(random(30,WIDTH-30),random(30,HEIGHT-30));
        this.vel = createVector(random(-1, 1), random(-1, 1));
        this.acc = createVector();
        this.maxvel = 2;
        this.r = random(20,30);
        this.color = [random(0,255),random(0,255),random(0,255)];
        
    }
    upd()
    {
        if(this.pos.x   >= WIDTH - 15 || this.pos.x <= 15)
        {
            this.vel.x = -this.vel.x;
        }
        if(this.pos.y >= HEIGHT - 15 || this.pos.y <= 15)
        {
            this.vel.y = -this.vel.y;
        }

        if(this.vel.x > this.maxvel)
        {
            this.vel.x = this.maxvel;
        }
        if(this.vel.y > this.maxvel)
        {
            this.vel.y = this.maxvel;
        }


        this.pos.add(this.vel);
        this.vel.add(this.acc);
    }

    render()
    {
        fill(this.color[0], this.color[1],this.color[2]);
        noStroke()
        circle(this.pos.x, this.pos.y, this.r);
    }
}