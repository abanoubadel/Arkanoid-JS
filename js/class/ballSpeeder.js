var SpeederTimer = function(lapse,lapseV,lapseAcc) {

	this.originalLapse = lapse;
	this.originalLapseV = lapseV;
	this.set();
    this.lapseAcc = lapseAcc;


};

SpeederTimer.prototype.getTimer = function(){
	return this.lapse;
}

SpeederTimer.prototype.incSpeed = function(){
	this.lapse = Math.ceil(this.lapse/this.lapseV);
	this.lapseV = (this.lapseV-1)*this.lapseAcc+1;
}

SpeederTimer.prototype.set = function(){
	this.lapse = this.originalLapse;
	this.lapseV = this.originalLapseV;

}

SpeederTimer.prototype.reset = function(){
	this.set();
}


