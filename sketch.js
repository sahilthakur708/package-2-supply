const Engine = Matter.Engine ;
 const World = Matter.World ;
  const Bodies = Matter.Bodies ; 
  var engine , world ,ground , box,helecopter;
  var rectangle1,rectangle2,ractangle3;
   function setup() {
     createCanvas(400,400);

      engine = Engine.create();
      world = engine.world ;

      var additional_Props ={ isStatic: true } 
      ground = Bodies.rectangle(200, 380 , 400, 40 ,additional_Props )
      World.add ( world , ground) 
     // console.log(world) 

     helicopter=createSprite(200,50,100,30)

     var additional_props={ restituition: 50 } 
     box=Bodies.rectangle(200,50,30,30,additional_props);
     World.add ( world,box) 
     
    var  additional_Props ={isStatic: true}
    rectangle1=Bodies.rectangle(200,350,200,20,additional_Props)
    World.add ( world,rectangle1) ;

    var additional_props={isStatic: true}
    rectangle2=Bodies.rectangle(100,310,20,100,additional_Props)
    World.add ( world,rectangle2) ;

    var additional_props={isStatic: true}
    rectangle3=Bodies.rectangle(300,310,20,100,additional_Props)
    World.add ( world,rectangle3) ;
    } 

      function draw() {
        background(0);

        Engine.update(engine)
        
         rectMode(CENTER) 
         rect(ground.position.x, ground.position.y, 400 , 40)
         rect(box.position.x, box.position.y, 30 , 30)

         push();
         fill("red");
         rect(rectangle1.position.x,rectangle1.position.y,200,20)
         pop();

         push()
         fill("red");
         rect(rectangle2.position.x,rectangle2.position.y,20,100)
         pop()

         push()
         fill("red")
         rect(rectangle3.position.x,rectangle3.position.y,20,100)
         pop()

         drawSprites();
         }