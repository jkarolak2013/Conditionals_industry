//manufacturing pool panels that require very close tolerance of .125 in per panel. If that panel exceeds this tolerance this panel must be replaced. 
//measured in inches
var standardpoolPanel = 55;
//measured in inches
var poolPanelmax = 54.125;
//measured in inches
var poolPanelmin = 53.875;
//measured in inches
if(standardpoolPanel > poolPanelmax || standardpoolPanel < poolPanelmin) {
//then this statement is false
	console.log("Throw this panel away!");

}else{ if( standardpoolPanel < poolPanelmax && standardpoolPanel > poolPanelmin) 

	console.log("Keep this panel!");

}
