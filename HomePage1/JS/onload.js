window.onload=function()
{
	ageRenew();
}

function ageRenew()
{
	var dt=new Date();		
	var age=document.getElementById("name-from");
	var trueAge=dt.getFullYear()-1997;
	age.innerHTML="I am a "+trueAge.toString()+" years old boy from Wuhan, Hubei province.";
}
