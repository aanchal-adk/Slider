function Slider() {
  this.element = document.getElementById('sliderId1');
  this.element;
  this.intervalId;
  this.marginLeft = 0;
  var that = this;
  
  this.init = function(){
    this.slide();
    this.addEvents();
  }
  this.slide = function(){
	if(that.intervalId == undefined){
    that.intervalId = setInterval(function () {
	  if(that.marginLeft<=(-5120)){
        that.marginLeft = 0;
      }
      
	  that.element.style.marginLeft = that.marginLeft+'px';
      that.marginLeft -= 8;
      var currentMargin = parseInt(that.element.style.marginLeft);
	  if(parseInt(that.element.style.marginLeft)%1024 ==0){
		that.colorCircle(Math.floor(currentMargin/1024)*(-1)+1);
	    that.pauseSlide();
	  }
	  
	  
	}, 2000 / 60);
    }
	console.log("slide",that.intervalId);
    
  }
  this.addEvents = function(){
    this.element.addEventListener('mouseover', that.stop);
		this.element.addEventListener('mouseleave',that.slide);
		document.getElementById('previous-id').addEventListener('click',that.previous);
		document.getElementById('next-id').addEventListener('click',that.next);
		document.getElementById('b1').addEventListener('click',function(){that.circleClick(1)});
		document.getElementById('b2').addEventListener('click',function(){that.circleClick(2)});
		document.getElementById('b3').addEventListener('click',function(){that.circleClick(3)});
		document.getElementById('b4').addEventListener('click',function(){that.circleClick(4)});
		document.getElementById('b5').addEventListener('click',function(){that.circleClick(5)});
  }
  
  this.next =function(){
    var m,n;
	console.log('forward entered');
	m = parseInt(that.element.style.marginLeft);
	if(m<=0 && m>-1024){
 		that.marginLeft=-1024;
		that.element.style.marginLeft=that.marginLeft+'px';
		console.log();
		that.colorCircle(2);
	}
	else if(m<=-1024 && m>-2048){
		that.marginLeft=-2048;
		that.element.style.marginLeft=that.marginLeft+'px';
		that.colorCircle(3);
	}
	else if(m<=-2048 && m>-3072){
		that.marginLeft=-3072;
		that.element.style.marginLeft=that.marginLeft+'px';
		that.colorCircle(4);
	}
	else if(m<=-3072 && m>-4096){
		that.marginLeft=-4096;
		that.element.style.marginLeft=that.marginLeft+'px';
		that.colorCircle(5);
	}
	else{
		that.marginLeft=0;
		that.element.style.marginLeft=that.marginLeft+'px';
	    that.colorCircle(1);
	}  
  }
  this.previous = function(){
    var m;
	console.log('back entered');
	m = parseInt(that.element.style.marginLeft);
	if(m<0 && m>=-1024){
 		that.marginLeft=0;
		that.element.style.marginLeft=that.marginLeft+'px';
		that.colorCircle(1);
	}
	else if(m<-1024 && m>=-2048){
		that.marginLeft=-1024;
		that.element.style.marginLeft=that.marginLeft+'px';
		that.colorCircle(2);
	}
	else if(m<-2048 && m>=-3072){
		that.marginLeft=-2048;
		that.element.style.marginLeft=that.marginLeft+'px';
		that.colorCircle(3);
	}
	else if(m<-3072 && m>=-4096){
		that.marginLeft=-3072;
		that.element.style.marginLeft=that.marginLeft+'px';
		that.colorCircle(4);
	}
	else{
		that.marginLeft=-4096;
		that.element.style.marginLeft=that.marginLeft+'px';
		that.colorCircle(5);
	}  
  }
  
  
  this.pauseSlide = function(){
	clearInterval(that.intervalId);console.log("pause",that.intervalId);
	that.intervalId = undefined;
	//~ that.element.removeEventListener('mouseover', that.stop);
	//~ that.element.removeEventListener('mouseleave',that.slide);
	setTimeout(function(){
	  that.slide(); 
	},3000);
	
  }
  this.stop = function(){
    console.log("stop",that.intervalId);
	clearInterval(that.intervalId);
	that.intervalId = undefined;
	
  }
  this.circleClick = function(n) {
	console.log('circle1');
    this.colorCircle(n);
	that.element.style.marginLeft=-1024*(n-1)+'px';
	that.marginLeft=-1024*(n-1);
  	if(n == 1){
	  that.element.style.marginLeft=0+'px';
    }
	else if(n == 2){
   	  that.element.style.marginLeft=(-1024)+'px';
	}
	else if(n == 3){
	  that.element.style.marginLeft=(-1024*2)+'px';
	}
	else if(n == 4){
	  that.element.style.marginLeft=(-1024*3)+'px';
	}
	else{
	  that.element.style.marginLeft=(-1024*4)+'px';
	} 
  }
  this.colorCircle = function(n){
	for(var j = 1; j <= 5; j++){
	  var idName = 'b' + j;
	  var element3 = document.getElementById(idName);
	  if(n == j){
	    element3.style.background = 'yellow';
	  }
	  else{
		element3.style.background = 'red';
	  }
    }
  }

}


slider = new Slider();
slider.init();
