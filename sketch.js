var G1=[],G2=[],G3=[],G4=[],G5=[]
var P2=[],P3=[],P4=[],P5=[]
var P1,M1, QdG, QdF
var linha = []
var form
var game=0
var resetButton
function preload() {

}

function setup() {
  if(game!=1){game=1;createCanvas(windowWidth, windowHeight)}

  QdG=2//Math.round(random(1,4))
Pais(Math.round(random(1,2)),Math.round(random(1,2)),Math.round(random(1,2)),Math.round(random(1,2)))
console.log(QdG)
Filhos(Math.round(random(1,3)),0,1,1)

if(QdG==2){
  for(var f in G2){
  if(Math.round(random(1,2))==2){
      if(G2[f][2]!=undefined){G2[f][3]=2}
      else{G2[f][3]=1}}
 
    var a="", b="",c=Math.round(random(1,3))
    if(c==1){a="AA";b="green"}else if(c==2){a="Aa";;b="green"}else{a="aa";;b="white"}
    if(G2[f][3]!=undefined){
    P2.push([a,createSprite(width/(G2.length*2)*(1+(f-0.5)*2),G2[f][1].position.y, width/7, height/((QdG+1)*2))])     
    if(G2[f][3]==1){P2[P2.length-1][1].visible=false;P2[P2.length-1].push(b)}
    else{P2[P2.length-1][1].shapeColor=b}
    P2[P2.length-1].push(f)
    Filhos(Math.round(random(1,2)),1,G2[f],P2[P2.length-1])
  }
}
}

}

function draw() {
  background(200);
fill("black");textSize(25);text("Verde = 'A'",100, height/20);text("Branco = 'a'",width-200,height/20)
  for(var t=0;t<G2.length;t+=1){
    Linha(G1[1][1],G1[0][1],G2[t][1])
    if(G2[t][2]!=undefined){fill(G2[t][2]);circle(G2[t][1].position.x,G2[t][1].position.y,(G2[t][1].width+G2[t][1].height)/2)}}
    
    for(var t=0;t<G3.length;t+=1){
      if(G3.length>0){
        if(G3[t][3]!=undefined){Linha(G3[t][3][0],G3[t][3][1],G3[t][1])}
      if(G3[t][2]!=undefined){fill(G3[t][2]);circle(G3[t][1].position.x,G3[t][1].position.y,(G3[t][1].width+G3[t][1].height)/2)}}}
    
      for(var t=0;t<G4.length;t+=1){
        if(G4.length>0){
    //if(G4[t][3]!=undefined){Linha(G1[1][1],G1[0][1],G4[t][1])}
    if(G4[t][2]!=undefined){fill(G4[t][2]);circle(G4[t][1].position.x,G4[t][1].position.y,(G4[t][1].width+G4[t][1].height)/2)}}}
    
    for(var t=0;t<G5.length;t+=1){
      if(G5.length>0){
        //if(G5[t][3]!=undefined){Linha(G1[1][1],G1[0][1],G5[t][1])}
      if(G5[t][2]!=undefined){fill(G5[t][2]);circle(G5[t][1].position.x,G5[t][1].position.y,(G5[t][1].width+G5[t][1].height)/2)}}}
  
      for(var t=0;t<P2.length;t+=1){
        //if(P2[t][3]!=undefined){Linha(G2[P2[t][3]][1],P2[t][1])}
        if(P2[t][2]=="white"||P2[t][2]=="green"){fill(P2[t][2]);circle(P2[t][1].position.x,P2[t][1].position.y,(P2[t][1].width+P2[t][1].height)/2)}}
  
  
  
fill(G1[1][2]);circle(G1[1][1].position.x,G1[1][1].position.y,(G1[1][1].width+G1[1][1].height)/2)
if(form==undefined){form=new Form();
    resetButton = createButton("Reset");
    resetButton.class("customButton");
    resetButton.style('font-size', (width/2+height/2)/16+'px')
    resetButton.size(width/4 , height/16)
    resetButton.position(width/2 - resetButton.width/2, 0 + resetButton.height/8);
    resetButton.mousePressed(() => {form.reset()})}else{form.res()}
    drawSprites()
}
function Pais(a,b,c,d){
  var p, m
if(a==1){P1="a"}else {P1="A"}
if(b==1){P1+="a"}else {P1+="A"}
if(c==1){M1="a"}else {M1="A"}
if(d==1){M1+="a"}else {M1+="A"}
if(P1=="aA"){P1="Aa"};if(M1=="aA"){M1="Aa"}
if(P1=="aa"){p="white"}else(p="green");if(M1=="aa"){m="white"}else{m="green"}

G1.push([P1,createSprite(width/2 - width/5,height/((QdG+1)*2)*(1*2-1), width/7, height/((QdG+1)*2))],[M1,createSprite(width/2 + width/5,height/((QdG+1)*2)*(1*2-1), width/7, height/((QdG+1)*2))])
G1[0][1].shapeColor=p
G1[1][1].visible=false;G1[1].push(m)


//console.log(P1+" "+M1+" "+QdG+" "+p+" "+m)
//console.log(G1)

}
//Codigo genetico do pai e da mãe
//Posição Y
//Cor
//Forma
function Filhos(Qd,g,M=0,P=0){
if (g==0){
  var Gg, Cc
  for(var f=0;f<Qd;f++)
  {
    Gg=G1[0][0].charAt(Math.round(random(0,1)))+G1[1][0].charAt(Math.round(random(0,1)))
    if(Gg=="aA"){Gg="Aa"}
  if(Gg=="aa"){Cc="white"}else(Cc="green")
    G2.push([Gg,createSprite(width/(Qd*2)*(1+f*2),height/((QdG+1)*2)*((g+2)*2-1), width/7, height/((QdG+1)*2))])
    if(Math.round(random(1,2))==1){G2[f][1].visible=false;G2[f].push(Cc)}else{G2[f][1].shapeColor=Cc}}
}
if (g==1){
  var Gg
  for(var f=0;f<Qd;f++){
    Gg=M[0].charAt(Math.round(random(0,1)))+P[0].charAt(Math.round(random(0,1)));if(Gg=="aA"){Gg="Aa"}
    if(Qd==2){
      if(f==0){G3.push([Gg,createSprite((P[1].position.x),height/((QdG+1)*2)*((g+2)*2-1), width/8, height/((QdG+1)*2))])}
      else{G3.push([Gg,createSprite((M[1].position.x),height/((QdG+1)*2)*((g+2)*2-1), width/8, height/((QdG+1)*2))])}
    }
    else{G3.push([Gg,createSprite((M[1].position.x-((M[1].position.x-P[1].position.x)/2)),height/((QdG+1)*2)*((g+2)*2-1), width/8, height/((QdG+1)*2))])}
if(G3[G3.length-1][0]=="Aa"||G3[G3.length-1][0]=="AA"){G3[G3.length-1][1].shapeColor="green"}
else{G3[G3.length-1][1].shapeColor="white"}
if(Math.round(random(1,2))==1){G3[G3.length-1][1].visible=false;G3[G3.length-1].push(G3[G3.length-1][1].shapeColor)}
G3[G3.length-1][3]=[M[1],P[1]]
console.log(G3[G3.length-1][3])
  }
}
if (g==2){
  for(var f=0;f<Qd;f++)
  {G4.push([G1[0][0].charAt(Math.round(random(0,1)))+G1[1][0].charAt(Math.round(random(0,1))),createSprite((P[1].position.x)+width/(Qd*2)*(1+f*2),height/((QdG+1)*2)*((g+2)*2-1), width/7, height/((QdG+1)*2))])}
}
if (g==3){
  for(var f=0;f<Qd;f++)
  {G5.push([G1[0][0].charAt(Math.round(random(0,1)))+G1[1][0].charAt(Math.round(random(0,1))),createSprite(width/(Qd*2)*(1+f*2),height/((QdG+1)*2)*((g+2)*2-1), width/7, height/((QdG+1)*2))])}
}

}
function Linha(M,P,F){
  fill("black")

  //M ao P
line(M.position.x,M.position.y,P.position.x,P.position.y)
//F a metade da distancia entre F e M//P
line(F.position.x,F.position.y,F.position.x,F.position.y-((F.position.y-P.position.y)/2))
//
line(F.position.x,F.position.y-((F.position.y-P.position.y)/2),M.position.x-((M.position.x-P.position.x)/2),F.position.y-((F.position.y-P.position.y)/2))
// Metade da distancia entre F e M//P ate metade da distancia entre M e P
line(M.position.x-((M.position.x-P.position.x)/2),F.position.y-((F.position.y-P.position.y)/2),M.position.x-((M.position.x-P.position.x)/2),M.position.y)

}
