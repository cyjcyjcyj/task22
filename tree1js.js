// JavaScript Document
var queue=[];    
var timer=null; 
function preY(node){
	queue.push(node);
	if(node.firstElementChild)
	{
		preY(node.firstElementChild);
	}
	if(node.lastElementChild)
	{
		preY(node.lastElementChild)
	}
	
}
function minY(node){
	if(node.firstElementChild)
	{
		minY(node.firstElementChild);
	}
	queue.push(node);
	if(node.lastElementChild)
	{
		minY(node.lastElementChild)
	}
}
function afterY(node){
	if(node.firstElementChild)
	{
		afterY(node.firstElementChild);
	}
	if(node.lastElementChild)
	{
		afterY(node.lastElementChild)
	}
	queue.push(node);
}
function show(){
	clearInterval(timer);
	var i;
	var alltree= document.getElementsByClassName('tree');
	for(i=0;i<alltree.length;i++){
		alltree[i].style.background = '#fff';
	}
	i = 0;
	queue[0].style.background = '#000';
	timer = setInterval(function(){ 
		i++;
		if(i >= queue.length){
			queue[i-1].style.background = '#fff';
			clearInterval(timer);
		}else{
			queue[i].style.background = '#000';
			queue[i-1].style.background = '#fff';
		}
	}, 500);
}

 
window.onload=function(){
	
	document.getElementById('pre').onclick=function(){
		queue=[];
		preY(document.getElementsByClassName('NO1')[0]);
		show();
	}
	document.getElementById('min').onclick=function(){
		queue=[];
		minY(document.getElementsByClassName('NO1')[0]);
		show();
	}
	document.getElementById('aft').onclick=function(){
		queue=[];
		afterY(document.getElementsByClassName('NO1')[0]);
		show();
	}
}