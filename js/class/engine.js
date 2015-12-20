var Engine = function(swing, min, max) {
    this.swing = swing;
    var first_time = true;
    var posX;

    
    document.addEventListener('mousemove', function (e) {
        
        
        //finding if swing is out of it's domain
        if (swing.getX() < min) {
            swing.setX(min);
            return;
        }
        if (swing.getX() + swing.getWidth() > max) {
            swing.setX(max - swing.getWidth());
            return;
        }
        

        if(first_time)
        {
            first_time = false;
            posX = e.pageX;

        }

        else
        {
            
            this.whenEngineMove();
            step = e.pageX-posX;
            swing.move(e.pageX-posX);
            posX = e.pageX;
            if(step > 0)
            {
                if (swing.getX() + swing.getWidth() + step >= max) {
                    swing.setX(max - swing.getWidth());
                    return;
                }
            }
            else
            {
                if (swing.getX() <= min) {
                    swing.setX(min);
                    return;
                }
            } 
            swing.move(step);
        }   
        });
        this.whenEngineMove = function(){

        }


}
















/* function main(){
 	var s = new Swing(20,20);
 	var b = new Ball(70,70,-10,-10);
 	s.getIntoContainer(document.body);
 	b.getIntoContainer(document.body);
 	var r = new Rod("r1",true,0,0,1000);
 	var r2 = new Rod("r2",false,100,250,1000);
 	r.getIntoContainer(document.body);
 	r2.getIntoContainer(document.body);

 	var  e = new Engine(s,80,700);
 	var p = new Physics();
 	p.addObject(s);
 	p.addObject(b);
 	p.addObject(r);
 	p.addObject(r2);
 	setInterval(p.move,100,p.objects);

 }
 main();
*/