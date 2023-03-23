let x=0;
var display1: HTMLInputElement | null = document.getElementById("display") as HTMLInputElement | null;
var memory: HTMLInputElement | null = document.getElementById('memory') as HTMLInputElement | null;
const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll("button");
var previous: HTMLInputElement | null = document.getElementById('previous') as HTMLInputElement | null;
var op: HTMLElement = document.getElementsByClassName('op') as unknown as HTMLElement;
let num: number = ((display1?.value as unknown) as number);
var mode = "DEG";
let number = Math.PI
let number1 = Math.E

buttons.forEach((item) => {
	
	item.addEventListener('click', (e) => {
		let val: string = (e.target as HTMLInputElement).value;
		let val1: string = (e.target as HTMLInputElement).value; 
		var expression = display1!.value;
		let clearall: HTMLInputElement | null = document.getElementById('clear') as HTMLInputElement | null;
//if there is value on screen then the button will be named as CE else C
		if(item.id == "clear"){
			clearall!.innerHTML = "C"
		}
		else{
			clearall!.innerHTML = "CE"
		}
		
		if(val1 == '='){
// log function
			const func = expression.split(" ");
			var a: any = func[0];
			var b: any = func[3];
			if(func[1]==="log"){
				var c = Math.log(a);
				var d = Math.log(b);
				if(c===0 && d===0){
					display1!.value = '0';
				}
				else{
					previous!.value = display1!.value;
					display1!.value = (c / d).toString();
				}
//root function
			}else if(func[1]==="root"){
					previous!.value = display1!.value;
					display1!.value = (Math.pow(a, 1/b)).toString();
			}
			else{
				previous!.value = display1!.value;
				val = eval(display1!.value);
				display1!.value = val;
			}
		}
		else if(val1 == 'deg'){
			display1!.value = "";
		}
		else if(val1 == 'rad'){
			display1!.value = "";
		}
		
		else if(display1!.value==="0"){
			display1!.value = val;
		}
//checks if there is nothing on the screen then operator should not be displayed
		else if(display1?.value === ""){
			let opr_arr: string[] = ["+", "*", "/", "%", "."];
			 if(opr_arr.includes(val)){
				 display1!.value += "";
			}else{
				display1.value = val;
			}
		}
//operator should not repeat
		else{
			let lastChar = display1!.value.charAt(display1!.value.length - 1);
			let op:any = ["+", "-", "*", "/", "%", "."];
			if(op.includes(val) && op.includes(lastChar)){
				display1!.value += "";
			}
			else{
				display1!.value += val;
			}
		}
		num = Number(display1?.value)	
	}
)}
); 

//function for trigonometry dropdown
function myFunction1() {
    var drop1: any = document.getElementById("drop1")
    drop1.classList.toggle("show");
}

//function for dropdown of functions
function myFunction2() {
    var drop2: any = document.getElementById("drop2");
	drop2.classList.toggle("show");
}
//function for memory dropdown
function myFunction3() {
		var drop3: any = document.getElementById("drop3");
		drop3.classList.toggle("show");
}
	

//change the button from deg to rad
function degtorad(){
	var click: any = document.getElementById("deg");
	var click1: any = document.getElementById("rad");
    if(click1.style.display ==="none") {
       click1.style.display ="block";
	   click.style.display ="none";
	   mode = "RAD";
    } else {
       click.style.display ="block";
	   click1.style.display ="none";
	   mode = "DEG";
    } 
}

// on clicking 2nd
function change(){
	const col1: any = document.getElementsByClassName("option1");
	const col2: any = document.getElementsByClassName("option2");
	if(col2[0].style.display === "inline-block"){
		for(let i=0;i<6;i++){
			col1[i].style.display = "inline-block";
		}
		for(let i=0;i<6;i++){
			col2[i].style.display = "none";
		}
	}else{
		for(let i=0;i<6;i++){
			col2[i].style.display = "inline-block";
		}
		for(let i=0;i<6;i++){
			col1[i].style.display = "none";
		}
	}};

//on clicking second inside of trigo
function inverse(){
	var trigon1: any = document.getElementsByClassName('trigo1');
	var trigon2: any = document.getElementsByClassName('trigo2');
	var trigon3: any = document.getElementsByClassName('trigo3');
	if(trigon2[0].style.display==="none" && trigon1[0].style.display==="inline"){
		for(let i=0;i<6;i++){
			trigon2[i].style.display = "inline";
		}
		for(let i=0;i<6;i++){
			trigon1[i].style.display = "none";
		}
		for(let i=0;i<6;i++){
			trigon3[i].style.display = "none";
		}
	}
	else{
		for(let i=0;i<6;i++){
			trigon1[i].style.display = "inline";
		}
		for(let i=0;i<6;i++){
			trigon2[i].style.display = "none";
		}
		for(let i=0;i<6;i++){
			trigon3[i].style.display = "none";
		}
	}
};

//on clicking hyp inside of trigo
function hyp(){
	var trigon1: any = document.getElementsByClassName('trigo1');
	var trigon2: any = document.getElementsByClassName('trigo2');
	var trigon3: any = document.getElementsByClassName('trigo3');
	if(trigon3[0].style.display==="none" && trigon1[0].style.display==="inline"){
		for(let i=0;i<6;i++){
			trigon3[i].style.display = "inline";
		}
		for(let i=0;i<6;i++){
			trigon1[i].style.display = "none";
		}
		for(let i=0;i<6;i++){
			trigon2[i].style.display = "none";
		}
	}
	else{
		for(let i=0;i<6;i++){
			trigon1[i].style.display = "inline";
		}
		for(let i=0;i<6;i++){
			trigon3[i].style.display = "none";
		}
		for(let i=0;i<6;i++){
			trigon2[i].style.display = "none";
		}
	}
};

//find factorial 
function fact(){
	previous!.value = "fact("+display1!.value+")";
	if (display1!.value < '0') {
		display1!.value = "Error!";
	}
	
	else if (display1!.value === '0') {
		display1!.value = "1";
	}
	
	else {
		let fact = 1;
		for (let i = 1; i <= parseInt(display1!.value); i++) {
			fact *= i;
		}
		display1!.value = fact.toString();
	}
}
//clear all
function clearall(){
	previous!.value = ""
	display1!.value = ""
}
//number is plus then convert it to minus and vice versa
function plusminus(){
	display1!.value = (-(display1!.value)).toString()
}
//square of a number
function square(): void{
	previous!.value = "square("+display1!.value+")";
	display1!.value = (num ** 2).toString();
}
//cube of a number
function cube(){
	previous!.value = "cube("+display1!.value+")";
	display1!.value = (num ** 3).toString();
}
//ten to the power any number
function tenpowerx(){
	previous!.value = "10 ^"+display1!.value;
	display1!.value = (10**num).toString();
}
//two to the power any number
function twopowerx(){
	previous!.value = "2 ^"+display1!.value;
	display1!.value = (2**num).toString();
}
//remove one character at a time
function backspace(){
	display1!.value = display1!.value.substr(0, display1!.value.length - 1);
}

//pi value
function pi(): any{
	
	// if(display1?.value === "" || parseFloat(display1!.value) == number){
		display1!.value = (number as unknown) as string;
	
	// }
}
//value of e
function evalue(){
	
	// if(display1?.value === "" || display1?.value !== null){
		display1!.value = (number1 as unknown) as string;
	// }
}
//ln function
function ln(){
	previous!.value = "ln("+display1!.value+")";
	display1!.value = (Math.log(num)).toString();
}
//log function
function log(){
	previous!.value = "log("+display1!.value+")";
	display1!.value = (Math.log10(num)).toString();
}
//square root of a number
function sqroot(){
	previous!.value = "squareroot("+display1!.value+")";
	display1!.value = (Math.sqrt(num)).toString();
}
//cube root of a number
function cbroot(){
	previous!.value = "cuberoot("+display1!.value+")";
	display1!.value = (Math.cbrt(num)).toString();
}
//one divide by x 
function onebyx(){
	previous!.value = "1/"+display1!.value;
	display1!.value = (1/num).toString();
}
//convert any number to positive
function abs(){
	previous!.value = "abs("+display1!.value+")";
	display1!.value = (Math.abs(num)).toString();
}
//next nearest integer
function floor(){
	previous!.value = "floor("+display1!.value+")";
	display1!.value = (Math.floor(num)).toString();
}
//previous nearest integer
function ceil(){
	previous!.value = "ceil("+display1!.value+")";
	display1!.value = (Math.ceil(num)).toString();
}
//sin function
function sin(){
	if(mode =="RAD"){
		previous!.value = "sin("+display1!.value+")";
		display1!.value = (Math.sin(num)).toString();
	}
	else{
	previous!.value = "sin("+display1!.value+")";
	display1!.value = (Math.sin(num* (Math.PI/180))).toString();
	}
}
//cos function
function cos(){
	if(mode =="RAD"){
		previous!.value = "cos("+display1!.value+")";
		display1!.value = (Math.cos(num)).toString();
	}
	else{
	previous!.value = "cos("+display1!.value+")";
	display1!.value = (Math.cos(num* (Math.PI/180))).toString();
	}
}
//tan function
function tan(){
	if(mode =="RAD"){
		previous!.value = "tan("+display1!.value+")";
		display1!.value = (Math.tan(num)).toString();
	}
	else{
	previous!.value = "tan("+display1!.value+")";
	display1!.value = (Math.tan(num * (Math.PI/180))).toString();
	}
}
//sec function
function sec(){
	if(mode =="RAD"){
	previous!.value = "sec("+display1!.value+")";
    display1!.value = (1/Math.cos(num)).toString();
	}else{
		previous!.value = "sec("+display1!.value+")";
	display1!.value = (1/Math.cos(num * (Math.PI/180))).toString();
	}
}
//cosec function
function cosec(){
	if(mode =="RAD"){
		previous!.value = "cosec("+display1!.value+")";
		display1!.value = (1/Math.sin(num)).toString();
		}else{
			previous!.value = "cosec("+display1!.value+")";
		display1!.value = (1/Math.sin(num * (Math.PI/180))).toString();
		}
}
//cot function
function cot(){
	if(mode =="RAD"){
		previous!.value = "cot("+display1!.value+")";
		display1!.value = (1/Math.tan(num)).toString();
		}else{
			previous!.value = "cot("+display1!.value+")";
		display1!.value = (1/Math.tan(num * (Math.PI/180))).toString();
		}
}
//sinh function
function sinh(){
	previous!.value = "sinh("+display1!.value+")";
    display1!.value = (Math.sinh(num)).toString();
}
//cosh function
function cosh(){
	previous!.value = "cosh("+display1!.value+")";
    display1!.value = (Math.cosh(num)).toString();
}
//tanh function
function tanh(){
	previous!.value = "tanh("+display1!.value+")";
    display1!.value = (Math.tanh(num)).toString();
}
//sech function
function sech(){
	previous!.value = "sech("+display1!.value+")";
    display1!.value = (1/Math.sinh(num)).toString();
}
//cosech function
function cosech(){
	previous!.value = "cosech("+display1!.value+")";
    display1!.value = (1/Math.sinh(num)).toString();
}
//coth function
function coth(){
	previous!.value = "coth("+display1!.value+")";
    display1!.value = (1/Math.tanh(num)).toString();
}
//sinh function
function sinin(){
	previous!.value = "sin-1("+display1!.value+")";
    if(parseFloat(display1!.value) > -1 && parseFloat(display1!.value) < 1) {
    display1!.value = (Math.asin(num)).toString();
    }
    else{
        display1!.value = "Invalid input";
    }
}
//cos inverse function
function cosin(){
	previous!.value = "cos-1("+display1!.value+")";
    if(parseFloat(display1!.value) > -1 && parseFloat(display1!.value) < 1) {
        display1!.value = (Math.acos(num)).toString();
        }
        else{
            display1!.value = "Invalid input";
        }
}
//tan inverse function
function tanin(){
	previous!.value = "tan-1("+display1!.value+")";
    if(parseFloat(display1!.value) > -1 && parseFloat(display1!.value) < 1) {
        display1!.value = (Math.atan(num)).toString();
        }
        else{
            display1!.value = "Invalid input";
        }
}
//sec inverse function
function secin(){
		previous!.value = "sec-1("+display1!.value+")";
        display1!.value = (Math.acos(1/num)).toString();
}
//cosec inverse function
function cosecin(){
		previous!.value = "cosec-1("+display1!.value+")";
        display1!.value = (Math.asin(1/num)).toString();
    
}
//cot inverse function
function cotin(){
		previous!.value = "cot-1("+display1!.value+")";
        display1!.value = (Math.atan(1/num)).toString();
       
}
//M+ function adding number memory
function mplus(){
	x += eval(display1!.value);
	console.log(x);
	memory!.value = x.toString();
	var mc_element: any = document.getElementById("mc");
    mc_element.classList.add("fontWt");
    mc_element.classList.remove("btnDark");
    var mr_element: any = document.getElementById("mr");
    mr_element.classList.add("fontWt");
    mr_element.classList.remove("btnDark");
	var md_element: any = document.getElementById("btn3");
	md_element.classList.add("fontWt");
    md_element.classList.remove("btnDark");
}
//M- function removing number from memory
function mminus(){
	x -= eval(display1!.value);
	console.log(x);
	memory!.value = x.toString();
	var mc_element: any = document.getElementById("mc");
    mc_element.classList.add("fontWt");
    mc_element.classList.remove("btnDark");
    var mr_element: any = document.getElementById("mr");
    mr_element.classList.add("fontWt");
    mr_element.classList.remove("btnDark");
	var md_element: any = document.getElementById("btn3");
	md_element.classList.add("fontWt");
    md_element.classList.remove("btnDark");
}
//store in memory
function ms(){
	try{
		x = eval(display1!.value);
		console.log(display1!.value);
		memory!.value = x.toString();
	}
	catch(error){
		display1!.value = "error";
	}
	var mc_element: any = document.getElementById("mc");
    mc_element.classList.add("fontWt");
    mc_element.classList.remove("btnDark");
    var mr_element: any = document.getElementById("mr");
    mr_element.classList.add("fontWt");
    mr_element.classList.remove("btnDark");
	var md_element: any = document.getElementById("btn3");
    md_element.classList.add("fontWt");
    md_element.classList.remove("btnDark");
}
//clear from memory
function mc(){
	console.clear();
	x=0;
	memory!.value = "";
	var mc_element: any = document.getElementById("mc");
    mc_element.classList.remove("fontWt");
    mc_element.classList.add("btnDark");
    var mr_element: any = document.getElementById("mr");
    mr_element.classList.remove("fontWt");
    mr_element.classList.add("btnDark");
	var md_element: any = document.getElementById("btn3");
    md_element.classList.remove("fontWt");
    md_element.classList.add("btnDark");
}
//show record of memory
function mr(){
	display1!.value = x.toString();
}

function fe(){
	if(display1!.value == ""){
		display1!.value = "0.e + 0"
	}else{
	display1!.value = parseFloat(display1!.value).toExponential();
	}
}
//exp function
function exp(){
	var expression = display1!.value;
	const eval1 = expression.split(".");
	if(eval1.length === 2){
		display1!.value += "e+0"
	}
	else{
	display1!.value += ".e+0"
	}
}
//dms function
function ConvertDDToDMS()
{
	previous!.value = "dms("+display1!.value+")";
	var degree =  Math.floor(num);
    var minutes = ((num - Math.floor(num)) * 60.0); 
    var seconds = (minutes - Math.floor(minutes)) * 60.0;
	display1!.value = degree + ":" + Math.floor(minutes) + ":" + seconds.toFixed(2);
}
function deg(){
	previous!.value = "degrees("+display1!.value+")";
   display1!.value = (num * (180/Math.PI)).toString();
}
//random number form 0-1
function rand(){
	display1!.value = (Math.random()).toString();
}