function preload(){
}
function setup(){
canvas= createCanvas(640, 480);
canvas.position(150, 150);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}
function draw(){
image(video,230,150, 220, 200);
fill(160,0,255);
stroke(160,0,255);
circle(50,50,80);
circle(590,50,80);
circle(50,430,80);
circle(590,430,80);
fill(255, 20, 147);
stroke (255, 20, 147);
rect (90, 40, 460, 20);
rect (90, 420, 460, 20);
rect (90, 40, 460, 20);
rect (40, 90, 20, 300);
rect (580, 90, 20, 300);
tint(tint_color);
}
function take_pic(){
save("selfie with filter.png");
}
function apply_filter(){
tint_color=document.getElementById("filter_color").value;

}