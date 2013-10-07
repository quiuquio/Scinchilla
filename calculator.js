/*function trait(traitName, domincanceLevel, allele1, allele2, dominantAllele){
	this.traitName = traitName;
	this.dominance = domincanceLevel;
	this.allele1 = allele1;
	this.allele2 = allele2; 
	this.dominantAllele = dominantAllele;// 0 for none aa, 1 for allele1 Aa, 2 for allele2 aA, 3 for both AA;
}*/

/*
Modifica una stringa all'indice index
Example: 
	var hello="Hello World";
	alert(hello.replaceAt(3, "a"));
*/
String.prototype.replaceAt=function(index, character) {
      return this.substr(0, index) + character + this.substr(index+character.length);
   }


/*function genoTyper(genoma, traitName){
	if(traitName === "Non Beige"){
		genoma.replaceAt(0,"a");
		genoma.replaceAt(1,"a");
	}
	else if(traitName === ""){
		genoma.replaceAt(,"");
		genoma.replaceAt(,"");
	}else if(traitName === ""){
		genoma.replaceAt(,"");
		genoma.replaceAt(,"");
	}else if(traitName === ""){
		genoma.replaceAt(,"");
		genoma.replaceAt(,"");
	}else if(traitName === ""){
		genoma.replaceAt(,"");
		genoma.replaceAt(,"");
	}else if(traitName === ""){
		genoma.replaceAt(,"");
		genoma.replaceAt(,"");
	}else if(traitName === ""){
		genoma.replaceAt(,"");
		genoma.replaceAt(,"");
	}else if(traitName === ""){
		genoma.replaceAt(,"");
		genoma.replaceAt(,"");
	}else if(traitName === ""){
		genoma.replaceAt(,"");
		genoma.replaceAt(,"");
	}else if(traitName === ""){
		genoma.replaceAt(,"");
		genoma.replaceAt(,"");
	}else if(traitName === ""){
		genoma.replaceAt(,"");
		genoma.replaceAt(,"");
	}else if(traitName === ""){
		genoma.replaceAt(,"");
		genoma.replaceAt(,"");
	}else if(traitName === ""){
		genoma.replaceAt(,"");
		genoma.replaceAt(,"");
	}else if(traitName === ""){
		genoma.replaceAt(,"");
		genoma.replaceAt(,"");
	}else if(traitName === ""){
		genoma.replaceAt(,"");
		genoma.replaceAt(,"");
	}else if(traitName === ""){
		genoma.replaceAt(,"");
		genoma.replaceAt(,"");
	}else if(traitName === ""){
		genoma.replaceAt(,"");
		genoma.replaceAt(,"");
	}else if(traitName === ""){
		genoma.replaceAt(,"");
		genoma.replaceAt(,"");
	}
}*/


function trait(identifier, genoma){
	switch (identifier){
		case "p1T1no":
		case "p2T1no":
			this.traitName = "Non Beige";
			this.dominance = 0; 
			this.allele1 = "a";
			this.allele2 = "a";
			this.dominantAllele = 0;
			break;
		case "p1T1Etero":
		case "p2T1Etero":
			this.traitName = "Recessive Beige";
			this.dominance = 2;
			this.allele1 = "A";
			this.allele2 = "a"; 
			this.dominantAllele = 1;
			break;
		case "p1T1Homo":
		case "p2T1Homo":
			this.traitName = "Beige Homozigote";
			this.dominance = 1;
			this.allele1 = "A";
			this.allele2 = "A"; 
			this.dominantAllele = 3;
			break;
		//T2
		case "p1T2no":
		case "p2T2no":
			this.traitName = "Non Violet";
			this.dominance = 0;
			this.allele1 = "b";
			this.allele2 = "b"; 
			this.dominantAllele = 0;
			break;
		case "p1T2Etero":
		case "p2T2Etero":
			this.traitName = "Violet carrier";
			this.dominance = 3;
			this.allele1 = "B";
			this.allele2 = "b"; 
			this.dominantAllele = 1;
			break;
		case "p1T2Homo":
		case "p2T2Homo":
			this.traitName = "Violet";
			this.dominance = 3;
			this.allele1 = "B";
			this.allele2 = "B"; 
			this.dominantAllele = 3;
			break;
		//T3
		case "p1T3no":
		case "p2T3no":
			this.traitName = "Non Saphire";
			this.dominance = 0;
			this.allele1 = "c";
			this.allele2 = "c"; 
			this.dominantAllele = 0;
			break;
		case "p1T3Etero":
		case "p2T3Etero":
			this.traitName = "Saphire carrier";
			this.dominance = 3;
			this.allele1 = "C";
			this.allele2 = "c"; 
			this.dominantAllele = 1;
			break;
		case "p1T3Homo":
		case "p2T3Homo":
			this.traitName = "Saphire";
			this.dominance = 3;
			this.allele1 = "C";
			this.allele2 = "C"; 
			this.dominantAllele = 3;
			break;
		//T4
		case "p1T4no":
		case "p2T4no":
			this.traitName = "non German Violet";
			this.dominance = 0;
			this.allele1 = "d";
			this.allele2 = "d"; 
			this.dominantAllele = 0;
			break;
		case "p1T4Etero":
		case "p2T4Etero":
			this.traitName = "German Violet carrier";
			this.dominance = 3;
			this.allele1 = "D";
			this.allele2 = "d"; 
			this.dominantAllele = 1;
			break;
		case "p1T4Homo":
		case "p2T4Homo":
			this.traitName = "German Violet";
			this.dominance = 3;
			this.allele1 = "D";
			this.allele2 = "D"; 
			this.dominantAllele = 3;
			break;
		//T5
		case "p1T5no":
		case "p2T5no":
			this.traitName = "non White";
			this.dominance = 0;
			this.allele1 = "e";
			this.allele2 = "e"; 
			this.dominantAllele = 0;
			break;
		case "p1T5Etero":
		case "p2T5Etero":
			this.traitName = "White";
			this.dominance = 1;
			this.allele1 = "E";
			this.allele2 = "e"; 
			this.dominantAllele = 1;
			break;
		//T6
		case "p1T6no":
		case "p2T6no":
			this.traitName = "non TOV";
			this.dominance = 0;
			this.allele1 = "f";
			this.allele2 = "f"; 
			this.dominantAllele = 0;
			break;
		case "p1T6Etero":
		case "p2T6Etero":
			this.traitName = "TOV";
			this.dominance = 1;
			this.allele1 = "F";
			this.allele2 = "f"; 
			this.dominantAllele = 1;
			break;
		//T7
		case "p1T7no":
		case "p2T7no":
			this.traitName = "non Ebony";
			this.dominance = 0;
			this.allele1 = "g";
			this.allele2 = "g"; 
			this.dominantAllele = 0;
			break;
		case "p1T71":
		case "p2T71":
			this.traitName = "Ebony 1";
			this.dominance = 1;
			this.allele1 = "G";
			this.allele2 = "g"; 
			this.dominantAllele = 1;
			break;
		case "p1T72":
		case "p2T72":
			this.traitName = "Ebony 2";
			this.dominance = 1;
			this.allele1 = "G";
			this.allele2 = "G"; 
			this.dominantAllele = 3;
			break;
		//T8
		case "p1T8no":
		case "p2T8no":
			this.traitName = "non Grey";
			this.dominance = 0;
			this.allele1 = "h";
			this.allele2 = "h";
			this.dominantAllele = 0;
			break;
		case "p1T8Etero":
		case "p2T8Etero":
			this.traitName = "Grey Eterozigote";
			this.dominance = 2;
			this.allele1 = "H";
			this.allele2 = "h"; 
			this.dominantAllele = 1;
			break;
		case "p1T8Homo":
		case "p2T8Homo":
			this.traitName = "Grey Homozigote";
			this.dominance = 2;
			this.allele1 = "H";
			this.allele2 = "H"; 
			this.dominantAllele = 3;
			break;
	}
}

/*$("#parent1 :radio:checked").each(
	function(index) {
		var input = $(this).attr("aria-pressed","true");
		input.button("refresh");
		//console.log(JSON.stringify(input.attr("id")));
	});
var tratti = [];
$("#parent1 :radio:checked").each(
	function(index) {
		var input = $(this).prop("value","on");
		//console.log(index);
		tratti[index] = new trait(input.prop("id"));
		//input.button("refresh");
		//console.log(JSON.stringify(input.attr("id")));
	});

Object.keys(tratti).forEach(function(key) {
    console.log(key, tratti[key]);
});

console.log(tratti);
$("#parent1 [aria-pressed=true]").each(
	function(index) {
		var input = $(this);
		console.log(JSON.stringify(input.prop("for")));
	});*/


function parent(traits){
	this.T1 = traits[0];
	this.T2 = traits[1];
	this.T3 = traits[2];
	this.T4 = traits[3];
	this.T5 = traits[4];
	this.T6 = traits[5];
	this.T7 = traits[6];
	this.T8 = traits[7];
}

/*Genera una stringa di tipo aabbccddee...*/
function getCombinations(chars) {
  var result = [];
  var f = function(prefix, chars) {
    for (var i = 0; i < chars.length; i++) {
      result.push(prefix + chars[i]);
      f(prefix + chars[i], chars.slice(i + 1));
    }
  }
  f('', chars);
  return result;
}
/*
asd = "aabbCCAaBbcc";
coolray=[];
for(var i = 0; i<asd.length;i++){
	if(asd[i].length == 2 ){
			coolray.push(asd[i]);
	}
}
function combinations(arr, k){
    var i,
    subI,
    ret = [],
    sub,
    next;
    for(i = 0; i < arr.length; i++){
        if(k === 1){
            ret.push( [ arr[i] ] );
        }else{
            sub = combinations(arr.slice(i+1, arr.length), k-1);
            for(subI = 0; subI < sub.length; subI++ ){
                next = sub[subI];
                next.unshift(arr[i]);
                ret.push( next );
            }
        }
    }
    return ret;
}

asd = combinations([	
						combinations(["aa","Aa","AA"],2),
						combinations(["bb","Bb","BB"],2),
						combinations(["cc","Cc","CC"],2),
						combinations(["dd","Dd","DD"],2)
					],
						3)
arr = combinations(["a","A","b","B","c","C","d","D","e","E","f","F","g","G","h","H"], 8);
var length = arr.length,
    element = [];
for (var i = 0; i < length; i++) {
  element[i] = arr[i].join("");
}*/

function checkForDuplicates(arr){
	var sorted_arr = arr.toLowerCase().split("").sort()
	var results = [];
	for (var i = 0; i < arr.length - 1; i++) {
	    if (sorted_arr[i + 1] == sorted_arr[i]) {
	        return true;
	    }
	}
	return false;
}

/**
@function {String} 
@param {parent} a parent Object();
@returns String di tipo "aabbccddee"...etc
*/
function generateCrossArray(parent1){
	var crossArray = [];
	for (key in parent1){
		var trait = parent1[key];
		for(prop in trait){
			if(trait.hasOwnProperty(prop)){
				//console.log(prop + " = " + trait[prop]);
				if (prop == "allele1" || prop == "allele2"){
					crossArray.push(trait[prop]);
				}
			}
		}
	}
	return crossArray.join("");
}

function generateFinalArray(alleles){
	var lun = alleles.length/2;
	arr = getCombinations(alleles);
	retArray=[];
	for(var i = 0; i<arr.length; i++){
		if(arr[i].length == lun){
			if(!checkForDuplicates(arr[i])){
				retArray.push(arr[i]);
			}
		}
	}
	return retArray;
}

function generateResults(arr1, arr2){
	resArray = [];
	size = arr1.length;
	for(var i = 0; i < size; i++){
		for(var j = 0; j < size; j++){
			resArray[i+(j*size)] = "";
			for(var k = 0; k < size; k++){
				gene1 =arr1[i].charAt(k);
				gene2 = arr2[j].charAt(k);
				//fa in modo che le maiuscole siano sempre prima delle minuscole.
				if(arr2[j].charAt(k) == arr2[j].charAt(k).toUpperCase()){
					resArray[i+(j*size)] += arr2[j].charAt(k);
					resArray[i+(j*size)] += arr1[i].charAt(k);
				}else{
					resArray[i+(j*size)] += arr1[i].charAt(k);
					resArray[i+(j*size)] += arr2[j].charAt(k);
				}
			}
		}
	}
	return resArray;
}

function getPercentage(values){
	genoTypes = [];
	var tmp;
	//console.log(genoTypes);
	for(var i = 0; i<values.length; i++){
		//tmp = values[i].split("").sort();
		//values[i] = tmp.join("");
		if (genoTypes[values[i]]>= 0){
			genoTypes[values[i]]++;
		}else{
			genoTypes[values[i]] = 1;
		}
	}
	for(key in genoTypes){
		genoTypes[key]= (genoTypes[key] * 100) / values.length;
	}
	//console.log(genoTypes);
	return genoTypes;
}

function phenotyper(genoma){

}

var names;
$(document).ready(function() {
	jQuery.get('fenotipi.csv', function(data) {
			names = $.csv.toArrays(data);
    		console.log(names);
		});
	$("#calculate").click( function(){
		$('#calculate').hide();
		$('#wait').show();
		setTimeout(main,500);
		//$('#wait').hide();
		$('#calculate').show();
	});
});

function translate(percentage){
	var tmp = [];
	var res = []
	for (key in percentage){
		trans = find(key,names);
		tmp[key] = trans[key];
		//console.log(tmp);
		res.push({phenoType:tmp[key],percentage: percentage[key]});
	}
	return res;
	//console.log(res);
}

function find(thing, theArray) {
    var results, col, row, subArray;

    results = []; // Empty array
    results[thing] ="";
    for (row = 0; row < theArray.length; ++row) {
        subArray = theArray[row];
        for (col = 0; col < subArray.length; ++col) {
            value = subArray[col];
            if (value == thing) { // or whatever your criterion
            	results[thing] += subArray[col-1];
                //results.push({thing: thing, row: row, col: col});
            }
        }
    }
    //console.log(results[thing]);
    if(results[thing] == ""){
    	results[thing] = getGenesFormula(thing);
    	//console.log("Igot there!");
    }

    return results;
}

function getGenesFormula(genes){
	var res = "";
	if(genes.indexOf("Aa")>=0){
		res += "Beige Hetero + ";
	}
	if(genes.indexOf("AA")>=0){
		res += "Beige Homo + ";
	}
	if(genes.indexOf("Bb")>=0){
		res += "Violet Carrier + ";
	}
	if(genes.indexOf("BB")>=0){
		res += "Violet + ";
	}
	if(genes.indexOf("Cc")>=0){
		res += "Saphire Carrier + ";
	}
	if(genes.indexOf("CC")>=0){
		res += "Saphire + ";
	}
	if(genes.indexOf("Dd")>=0){
		res += "German Violet Carrier + ";
	}
	if(genes.indexOf("DD")>=0){
		res += "German Violet + ";
	}
	if(genes.indexOf("Ee")>=0){
		res += "White + ";
	}
	if(genes.indexOf("EE")>=0){
		res += "LETAL FACTOR FOR WHITE + ";
	}
	if(genes.indexOf("Ff")>=0){
		res += "TOV + ";
	}
	if(genes.indexOf("FF")>=0){
		res += "LETAL FACTOR FOR TOV + ";
	}
	if(genes.indexOf("Gg")>=0){
		res += "Ebony Carrier + ";
	}
	if(genes.indexOf("GG")>=0){
		res += "Ebony + ";
	}
	if(res!=""){
		res = res.slice(0,-3);
	}
	return res;
}


function main(){
	/*http://stackoverflow.com/questions/750358/with-jquery-how-can-i-implement-a-page-loading-animation*/
	var tratti = [];
	$("#parent1 :radio:checked").each(
		function(index) {
			var input = $(this).prop("value","on");
			tratti[index] = new trait(input.prop("id"));
		});
	tratti.push(new trait("p1T8Homo"));
	parent1 = new parent(tratti);
	var tratti = [];
	$("#parent2 :radio:checked").each(
		function(index) {
			var input = $(this).prop("value","on");
			tratti[index] = new trait(input.prop("id"));
		});
	tratti.push(new trait("p1T8Homo"));
	parent2 = new parent(tratti);
	var crossArray1 = generateCrossArray(parent1);
	var crossArray2 = generateCrossArray(parent2);
	console.log("You are crossing: " + crossArray1 + " x " + crossArray2);

	var finalArray1 = generateFinalArray(crossArray1);
	var finalArray2 = generateFinalArray(crossArray2);
	//console.log(finalArray1);
	//console.log(finalArray2);

	var res = generateResults(finalArray1, finalArray2);
	var percentages = getPercentage(res);
	//console.log(percentages);
	percentages = translate(percentages);
	console.log(percentages);
	var percArray = []
	for(var prop in percentages){
		console.log(JSON.stringify(percentages[prop],null,4));
		percArray[prop] =[ percentages[prop].phenoType, percentages[prop].percentage]; 
	}
	console.log(percArray);
	//console.log(JSON.stringify(percentages,null,4));
	//$( "#results" ).html( JSON.stringify(percentages,null,4) );
	$( "#results" ).html( '<div class="container" style="min-width: 310px; width: 75%; margin: 0 auto"></div>');    	
		
	// Build the chart
	$('.container').empty();
    $('.container').highcharts({
        chart: {
        	renderTo: 'container',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Risultato incrocio'
        },
        tooltip: {
    	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    formatter: function() {
                        return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Risultato',
            data: percArray /*[['phenotype' , percentage], ['phenotype' , percentage], ...] */
            /*data: [
                ['Firefox',   45.0],
                ['IE',       26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Safari',    8.5],
                ['Opera',     6.2],
                ['Others',   0.7]
            ]*/
        }],
        colors: Highcharts.map(Highcharts.getOptions().colors, function(color) {
		    return {
		        radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
		        stops: [
		            [0, color],
		            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
		        ]
		    };
		})
    });






	//console.log(parent1);
	//console.log(parent2);

	/*Object.keys(tratti).forEach(function(key) {
	    console.log(key, tratti[key]);
	});*/

}