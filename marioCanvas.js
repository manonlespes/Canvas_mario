    var canvas = document.getElementById("canvasExo")
    var ctx = canvas.getContext("2d")

// floor//
//x=horizon,y=vertical//
    ctx.beginPath()
    ctx.moveTo(0,550)
    ctx.lineTo(650,550)
    ctx.lineTo(650,650)
    ctx.lineTo(0,650)
    ctx.closePath()
    ctx.stroke()
    ctx.fillStyle="maroon"
    ctx.fill()

// brique solo//
//x=horizon,y=vertical//
    ctx.beginPath()
    ctx.moveTo(400,400)
    ctx.lineTo(400,420)
    ctx.lineTo(420,420)
    ctx.lineTo(420,400)
    ctx.closePath()
    ctx.stroke()
    ctx.fillStyle="maroon"
    ctx.fill()
        //Point d'interrogation
    ctx.beginPath()
    ctx.moveTo(405,405)
    ctx.lineTo(405,407)
    ctx.lineTo(407,407)
    ctx.lineTo(407,405)
    ctx.closePath()
    ctx.fillStyle="yellow"
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(407,403)
    ctx.lineTo(407,405)
    ctx.lineTo(409,405)
    ctx.lineTo(409,403)
    ctx.closePath()
    ctx.fillStyle="yellow"
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(409,403)
    ctx.lineTo(409,405)
    ctx.lineTo(411,405)
    ctx.lineTo(411,403)
    ctx.closePath()
    ctx.fillStyle="yellow"
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(411,403)
    ctx.lineTo(411,405)
    ctx.lineTo(413,405)
    ctx.lineTo(413,403)
    ctx.closePath()
    ctx.fillStyle="yellow"
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(413,405)
    ctx.lineTo(413,407)
    ctx.lineTo(415,407)
    ctx.lineTo(415,405)
    ctx.closePath()
    ctx.fillStyle="yellow"
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(413,407)
    ctx.lineTo(413,409)
    ctx.lineTo(415,409)
    ctx.lineTo(415,407)
    ctx.closePath()
    ctx.fillStyle="yellow"
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(412,409)
    ctx.lineTo(412,411)
    ctx.lineTo(410,411)
    ctx.lineTo(410,409)
    ctx.closePath()
    ctx.fillStyle="yellow"
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(410,411)
    ctx.lineTo(410,413)
    ctx.lineTo(412,413)
    ctx.lineTo(412,411)
    ctx.closePath()
    ctx.fillStyle="yellow"
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(410,413)
    ctx.lineTo(410,415)
    ctx.lineTo(412,415)
    ctx.lineTo(412,413)
    ctx.closePath()
    ctx.fillStyle="yellow"
    ctx.fill()

// brique block 1//
//x=horizon,y=vertical//

    ctx.beginPath()
    ctx.moveTo(450,400)
    ctx.lineTo(450,420)
    ctx.lineTo(470,420)
    ctx.lineTo(470,400)
    ctx.closePath()
    ctx.stroke()
    ctx.fillStyle="maroon"
    ctx.fill()

// brique block 2//
//x=horizon,y=vertical//

    ctx.beginPath()
    ctx.moveTo(470,400)
    ctx.lineTo(470,420)
    ctx.lineTo(490,420)
    ctx.lineTo(490,400)
    ctx.closePath()
    ctx.stroke()
    ctx.fillStyle="maroon"
    ctx.fill()

// brique block 3//
//x=horizon,y=vertical//

ctx.beginPath()
    ctx.moveTo(490,400)
    ctx.lineTo(490,420)
    ctx.lineTo(510,420)
    ctx.lineTo(510,400)
    ctx.closePath()
    ctx.stroke()
    ctx.fillStyle="maroon"
    ctx.fill()

// brique block 4//
//x=horizon,y=vertical//

    ctx.beginPath()
    ctx.moveTo(510,400)
    ctx.lineTo(510,420)
    ctx.lineTo(530,420)
    ctx.lineTo(530,400)
    ctx.closePath()
    ctx.stroke()
    ctx.fillStyle="maroon"
    ctx.fill()

// brique block 1 - hauteur//
//x=horizon,y=vertical//

ctx.beginPath()
    ctx.moveTo(510,300)
    ctx.lineTo(510,320)
    ctx.lineTo(530,320)
    ctx.lineTo(530,300)
    ctx.closePath()
    ctx.stroke()
    ctx.fillStyle="brown"
    ctx.fill()


//bonhomme//  
    //pied droite//  
ctx.beginPath();
    ctx.ellipse(250, 543, 5, 8, 35 * Math.PI/150, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle="black"
    ctx.fill()
    //pied gauche//  
ctx.beginPath();
    ctx.ellipse(230, 543, 5, 8, -35 * Math.PI/150, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle="black"
    ctx.fill()
    //corps
ctx.beginPath()
    ctx.arc(240,540,20,1 * Math.PI, Math.PI*2)
    ctx.closePath()
    ctx.stroke()
    ctx.fillStyle="indianred"
    ctx.fill()
    //yeux
        //gauche
ctx.beginPath()
    ctx.ellipse(233,530,4,6,1 * Math.PI/150, 0, 2 * Math.PI)
    ctx.stroke();
    ctx.fillStyle="white"
    ctx.fill()
ctx.beginPath()
    ctx.ellipse(234,530,1,2,1 * Math.PI/150, 0, 2 * Math.PI)
    ctx.stroke();
    ctx.fillStyle="black"
    ctx.fill()
        //droit
ctx.beginPath()
    ctx.ellipse(247,530,4,6,1 * Math.PI/150, 0, 2 * Math.PI)
    ctx.stroke();
    ctx.fillStyle="white"
    ctx.fill()
ctx.beginPath()
    ctx.ellipse(246,530,1,2,1 * Math.PI/150, 0, 2 * Math.PI)
    ctx.stroke();
    ctx.fillStyle="black"
    ctx.fill()
// sourcil
        //gauche
ctx.beginPath()
    ctx.moveTo(231,521)
    ctx.lineTo(239,525)
    ctx.closePath()
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle="black"
    ctx.fill()
        //droit
ctx.beginPath()
    ctx.moveTo(250,521)
    ctx.lineTo(242,525)
    ctx.closePath()
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle="black"
    ctx.fill()





  //  ctx.beginPath();
//   ctx.arc(600, 75, 30, 0, Math.PI);
  //    ctx.closePath();
 //     ctx.lineWidth = 3;
  //    ctx.fillStyle = 'red';
  //    ctx.fill();
   //   ctx.strokeStyle = '#550000';
  //    ctx.stroke();

