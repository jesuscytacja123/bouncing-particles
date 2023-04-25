const particlesAmount = 160;
let particlesArray=[];
const WIDTH = window.innerWidth;
const HEIGHT =  window.innerHeight;

function setup()
{
    createCanvas(WIDTH, HEIGHT);
    
    for(let i = 0; i < particlesAmount; i++)
    {
        particlesArray.push(new Part);
    }

}

function handleParticles()
{
    for(let part of particlesArray)
    {
        part.upd();
        part.render();
    }

    for(let part1 of particlesArray)
    {
        for(let part2 of particlesArray)
        {
            if(coll_det(part1,part2) && part1 != part2)
                {
                    pen_resolution(part1,part2);
                }
        }
    }
}

function coll_det(part1, part2)
{
    let d = dist(part1.pos.x, part1.pos.y, part2.pos.x, part2.pos.y);
    if (d < part1.r + part2.r-20)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function pen_resolution(part1, part2)
{
    let part1_pos_copy = part1.pos.copy();
    let part2_pos_copy = part2.pos.copy();
    let d = createVector(part2_pos_copy.x - part1_pos_copy.x, part2_pos_copy.y - part1_pos_copy);
    let pen_depth = part1.r + part2.r - d.mag();
    let pen_res = d.setMag(pen_depth);
    part2.vel.add(pen_res.setMag(0.5));
    part1.vel.add(pen_res.setMag(-0.5));
}

function coll_response(part1, part2)
{
    let part2_v_copy = part2.vel.copy();
    part2.vel = part1.vel;
    part1.vel = part2_v_copy;
}

function draw()
{
    background(0);
    handleParticles();
}