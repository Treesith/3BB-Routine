function formatted_time(secs){
	hrs = parseInt(secs / 3600);
	secs = secs - hrs*3600;
	mins = parseInt(secs / 60);
	secs = secs % 60;
	
	hrs = ''+hrs;
	mins = ''+mins;
	secs = ''+secs;
	
	hrs = hrs.length==1 ? '0'+hrs : hrs;
	mins = mins.length==1 ? '0'+mins : mins;
	secs = secs.length==1 ? '0'+secs : secs;

	return hrs + ':' + mins + ':' + secs;
}

function period_class(subject, start_hrs, start_mins, end_hrs, end_mins)
{
	this.subject=subject;
	this.start_hrs=start_hrs;
	this.start_mins=start_mins;
	this.end_hrs=end_hrs;
	this.end_mins=end_mins;

	this.time=time;
	this.start_time_in_secs=start_time_in_secs;
	this.end_time_in_secs=end_time_in_secs;

	function time(){
		s_time = formatted_time(this.start_hrs*3600+this.start_mins*60);
		e_time = formatted_time(this.end_hrs*3600+this.end_mins*60);
		return s_time.substr(0,5) + '  -  ' + e_time.substr(0,5);
	}

	function start_time_in_secs(){
		return this.start_hrs*3600+this.start_mins*60;
	}

	function end_time_in_secs(){
		return this.end_hrs*3600+this.end_mins*60;
	}
}

//creating a period array for a week
period = new Array();

//routine for sunday
period[0] = new Array();

//routine for monday
period[1] = new Array();
period[1][0] = new period_class("Test", 7,15,8,5);
period[1][1] = new period_class("Machine(DS)",8,5,9,45);
period[1][2] = new period_class("Break", 9,45,10,35);
period[1][3] = new period_class("DSA(SK)", 10,35,12,15);
period[1][4] = new period_class("NM / Microprocessor Lab", 12,15,14,45);
period[1][5] = new period_class("Microprocessor(BRK)", 14,45,16,25);

//routine for tuesday
period[2] = new Array();
period[2][0] = new period_class("Instrumentation(MB)", 7,15,8,55);
period[2][1] = new period_class("NM(JS)", 8,55,10,35);
period[2][2] = new period_class("Break", 10,35,11,25);
period[2][3] = new period_class("Maths(RKS)", 11,25,12,15);
period[2][4] = new period_class("DSA Lab", 12,15,14,45);
period[2][5] = new period_class("Microprocessor(BRK)", 14,45,16,25);

//routine for wednesday
period[3] = new Array();
period[3][0] = new period_class("Test", 7,15,8,5);
period[3][1] = new period_class("Instrumentation/Machine Lab", 8,5,10,35);
period[3][2] = new period_class("Break", 10,35,11,25);
period[3][3] = new period_class("Maths(RKS)", 11,25,12,15);
period[3][4] = new period_class("Discrete Structure(AS)", 12,15,13,55);
period[3][5] = new period_class("Machine(DS)", 13,55,15,35);

//routine for thursday
period[4] = new Array();
period[4][0] = new period_class("NM(KT)", 7,15,8,55);
period[4][1] = new period_class("Break", 8,55,9,45);
period[4][2] = new period_class("NM / Microprocessor Lab", 9,45,12,15);
period[4][3] = new period_class("Discrete Structure(AS)",12,15,13,55);
period[4][4] = new period_class("Instrumentation(BRR)", 13,55,15,35);

//routine for friday
period [5] = new Array();
period[5][0] = new period_class("Test", 7,15,8,5);
period[5][1] = new period_class("Maths(JS)", 8,5,8,55);
period[5][2] = new period_class("Maths(SKM)", 8,55,9,45);
period[5][3] = new period_class("Maths(HDC)", 9,45,10,35);
period[5][4] = new period_class("Break", 10,35,12,15);
period[5][5] = new period_class("DSA Lab", 12,15,14,45);
period[5][6] = new period_class("Microprocessor(BRR)", 14,45,16,25);

//routine for saturday
period [6] = new Array();
