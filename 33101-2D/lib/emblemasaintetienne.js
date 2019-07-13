
function enter(c, dx, dy, sx, sy) {
    c.save();
    c.translate(dx,dy);
    c.scale(sx,sy);
}

function leave(c, fs, ss) {
    c.restore();
    c.fillStyle = fs;
    c.strokeStyle = ss;
    c.fill();
    c.stroke();    
}
function circulo(c){        //circulo verde e branco 
    c.beginPath();
    c.arc(0,0, 1,0,2*Math.PI)
    c.closePath();
}

function Barra(c)
{
    c.beginPath();
    c.rect(0, 0, 1, 1);
    c.closePath();  
}

function estrela(c){
	c.beginPath();
		c.moveTo(-1,0);
		c.lineTo(-0.24,0);
		c.lineTo(0,-0.68);
		c.lineTo(0.24,0);
		C.lineTo(1.0,0);

	c.closePath();
}

function star(n, r) {
    points = new Array(2 *  n);
    var step_angle = Math.PI  / n;
    var angle = 0.0;
    for(var i = 0; i < 2 * n; i++) {
        var radius = 1.0;
        if (i % 2 == 0) {
            radius = r;
        }

        points[i] = {
            x: radius * Math.cos(angle),
            y: radius * Math.sin(angle)
        }

        angle = angle + step_angle;
    }
    return points;
}
 
function draw_points(c, a) {
    var n = a.length;

    c.beginPath();
        c.moveTo( a[0].x, a[0].y );
        for( var i = 1; i < n; i++) {
            c.lineTo( a[i].x, a[i].y );
        }
        c.lineTo( a[0].x, a[0].y );
    c.closePath();
}


//A FUNCAO NAO ESTA A FUNCIONAR COM O TEXTO TODO 
function textoCircular(c,texto,x,y,alpha,espaco,orientacao){
    //var alphaPorLetra = (Math.PI - espaco * 2) / texto.length;
    var alphaPorLetra = 0.2
    c.save();
    c.translate(x,y);
    var k = (orientacao) ? 1 : -1; 
    c.rotate(-k * ((Math.PI - alphaPorLetra) / 2 - espaco));

    for(var i=0;i<texto.length;i++){
        c.save();
        c.rotate(k*i*(alphaPorLetra));
        c.textAlign = "center";
        c.textBaseline = (!orientacao) ? "top" : "bottom";
        c.fillText(texto[i],0,-k*(alpha));
        c.restore();
        }
    c.restore();
}


      
function Texto(c)
{
	c.textBaseline = 'hanging';
	c.fillText('A.S.S.E.', 0, 0);
}



scene = function(c, pos, frame_func) {
    //
    //  atributos
    //
    this.c = c;
    this.pos = pos;
    /*this.size = size;
    this.color = color;*/
    this.frame_func = frame_func;
    //
    //  métodos
    //
    this.animate = function() {
        //  "ciclo de animação"
        //
        this.frame_func();
        //  redesenhar quando possível
        requestAnimationFrame(this.animate);
        //  atualizar os parâmetros
        TWEEN.update();        
    }
    //
    //  "truque"
    //
    return this;
}

function frame() {
    //
    //  fundo
    //
    this.ccfillStyle = "khaki";
    this.c.fillRect(0,0,400,400);
    //
    //  figura
    //
    this.c.fillStyle = "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a+")";
    this.c.fillRect(pos.x, pos.y, size.width, size.height);


    //
}

function emblema(c)
{

    enter(c,0,0, 88/150,88/150);
    circulo(c);
    leave(c, "#209346" , "rgba(255,0,0,0.0)" );

    enter(c,0,0, 57/150, 57/150);
    circulo(c);
    leave(c, "white" , "rgba(255,0,0,0.0)");

    enter(c,((15/2)+16)/150,(0-57)/150,15/150,114/150);  //BARRA DIREITA
    Barra(c);
    leave(c, "#209346" , "rgba(255,0,0,0.0)" ); 

    enter(c,-(15/2)/150,(0-57)/150, 15/150,114/150);   //BARRA MEIO
    Barra(c);
    leave(c, "#209346" , "rgba(255,0,0,0.0)" ); 

    enter(c,((0-((15/2)+16+15))/150),(0-57)/150, 15/150,114/150);   //BARRA ESQUERDA
    Barra(c);
    leave(c, "#209346" , "rgba(255,0,0,0.0)" ); 

    
    c.lineWidth = 3/150;
    enter(c,0,0, 57/150, 57/150);
    circulo(c);
    leave(c, "rgba(255,0,0,0.0)", "white");

    c.lineWidth = 1.5/150;
    enter(c,(0-(46))/150,(0-15)/150, 92/150,30/150);  //rectangulo do meio
    Barra(c);
    leave(c, "white" , "#209346" ); 

    var num_points = 5;
    var star_points = star(num_points, 0.38);
    var alpha_0 = Math.PI / num_points + Math.PI / 2.0;

    c.lineWidth = 2/150;
    enter(c,0 ,0 -122/150 ,42/150 , 42/150);
    c.rotate( -alpha_0 );
    draw_points(c,star_points);
    leave(c, "white", "#392a8c");

    enter(c,0 ,-122/150 ,((42-12)/150) ,(42-12)/150);
    c.rotate( -alpha_0 );
    draw_points(c,star_points);
    leave(c, "white", "#e41e35");

    c.font = "0.42px Arial";

    // "SAINT-ETIENNE"
    enter(c ,0,0, 54/150, 54/150);
    textoCircular(c,"S",0,0,1,0.44,1);
    leave(c, "white", "red");

    enter(c ,0,0, 54/150, 54/150);
    textoCircular(c,"A",0,0,1,0.65,1);
    leave(c, "white", "red");

    enter(c ,0,0, 54/150, 54/150);
    textoCircular(c,"I",0,0,1,0.75,1);
    leave(c, "white", "red");

    enter(c ,0,0, 54/150, 54/150);
    textoCircular(c,"N",0,0,1,1.00,1);
    leave(c, "white", "red");

    enter(c ,0,0, 54/150, 54/150);
    textoCircular(c,"T",0,0,1,1.20,1);
    leave(c, "white", "red"); 
    
    enter(c ,0,0, 54/150, 54/150);
    textoCircular(c,"-",0,0,1,1.25,1);
    leave(c, "white", "red");  

    enter(c ,0,0, 54/150, 54/150);
    textoCircular(c,"E",0,0,1,1.5,1);
    leave(c, "white", "red");

    enter(c ,0,0, 54/150, 54/150);
    textoCircular(c,"T",0,0,1,1.70,1);
    leave(c, "white", "red");

    enter(c ,0,0, 54/150, 54/150);
    textoCircular(c,"I",0,0,1,1.75,1);
    leave(c, "white", "red"); 

    enter(c ,0,0, 54/150, 54/150);
    textoCircular(c,"E",0,0,1,2.00,1);
    leave(c, "white", "red");  

    enter(c ,0,0, 54/150, 54/150);
    textoCircular(c,"N",0,0,1,2.23,1);
    leave(c, "white", "red");

    enter(c ,0,0, 54/150, 54/150);
    textoCircular(c,"N",0,0,1,2.45,1);
    leave(c, "white", "red");

    enter(c ,0,0, 54/150, 54/150);
    textoCircular(c,"E",0,0,1,2.68,1);
    leave(c, "white", "red");
 
    c.font = "0.52px Arial";
    // "LOIRE"
    enter(c ,0, 0, 46/150, 46/150);
    textoCircular(c,"L",0,0,1,1.25,0);
    leave(c, "white", "red");

    enter(c ,0, 0, 46/150, 46/150);
    textoCircular(c,"O",0,0,1,1.40,0);
    leave(c, "white", "red");

    enter(c ,0, 0, 46/150, 46/150);
    textoCircular(c,"I",0,0,1,1.47,0);
    leave(c, "white", "red");

    enter(c ,0, 0, 46/150, 46/150);
    textoCircular(c,"R",0,0,1,1.72,0);
    leave(c, "white", "red");

    enter(c ,0, 0, 46/150, 46/150);
    textoCircular(c,"E",0,0,1,1.95,0);
    leave(c, "white", "red");


    //A.S.S.E
    enter(c , 0, 0, 100/150, 30/150)
    c.font = "bold 1px Arial";
    c.fillStyle = "#209346";
    c.fillText("ASSE", -60/150,50/150, 130/150);
    leave(c, "white", "red");

    enter(c , 0, 0, 100/150, 120/150)
    c.font = "0.2px Arial";
    c.fillStyle = "#209346";
    c.fillText(".", -35/150,10/150, 130/150);
    leave(c, "white", "red");

    enter(c , 0, 0, 100/150, 120/150)
    c.font = "0.2px Arial";
    c.fillStyle = "#209346";
    c.fillText(".", -5/150,10/150, 130/150);
    leave(c, "white", "red");

     enter(c , 0, 0, 100/150, 120/150)
    c.font = "0.2px Arial";
    c.fillStyle = "#209346";
    c.fillText(".", 27/150,10/150, 130/150);
    leave(c, "white", "red");
}

function espaco(){

    var grd=c.createLinearGradient(0,500,500,50);
    grd.addColorStop(0,"white");
    grd.addColorStop(1,"blue");

    this.c.fillStyle = grd;
    this.c.fillRect(0,0,800,800);

    enter (this.c, pos.x, pos.y, 200, 200);
    emblema(this.c);
    leave (this.c, "rgba(255,0,0,0)", "rgba(255,0,0,0)");
}

function main() {
    var c = document.getElementById("acanvas").getContext("2d");

    var pos = {x: 350, y: -250};
    var target_pos= { x: 200, y: 250};
    var pos_t = new TWEEN.Tween(pos).to(target_pos, 2500);
    pos_t.easing(TWEEN.Easing.Bounce.In);
    pos_t.start();
    //


        //
    //  Inicialização do modelo
    //
    var s = scene(c,pos, espaco);
    //
    //  Animação
    //
    s.animate();
  
}
