/*function trait(traitName, domincanceLevel, allele1, allele2, dominantAllele){
	this.traitName = traitName;
	this.dominance = domincanceLevel;
	this.allele1 = allele1;
	this.allele2 = allele2; 
	this.dominantAllele = dominantAllele;// 0 for none aa, 1 for allele1 Aa, 2 for allele2 aA, 3 for both AA;
}*/

function genotypePresence(){
	name:"";
	quant:0;
}

function trait(identifier){
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
		case "p1T7Etero":
		case "p2T7Etero":
			this.traitName = "Ebony 1";
			this.dominance = 1;
			this.allele1 = "G";
			this.allele2 = "g"; 
			this.dominantAllele = 1;
			break;
		case "p1T7Homo":
		case "p2T7Homo":
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

function generateCrossArray(parent1){
	crossArray = [];
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
				resArray[i+(j*size)] += arr1[i].charAt(k);
				resArray[i+(j*size)] += arr2[j].charAt(k);
			}
		}
	}
	return resArray;
}

function getPercentage(values){
	genoTypes = [];
	//console.log(genoTypes);
	for(var i = 0; i<values.length; i++){
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

function phenotyper(genoTypes){

}


$(document).ready(function() {
	$("#calculate").click( function(){
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
		
		finalArray1 = generateFinalArray(crossArray1);
		finalArray2 = generateFinalArray(crossArray2);
		//console.log(finalArray1);
		//console.log(finalArray2);

		var res = generateResults(finalArray1, finalArray2);
		var percentages = getPercentage(res);
		console.log(percentages);
		percentages.length;
		//console.log(parent1);
		//console.log(parent2);

		/*Object.keys(tratti).forEach(function(key) {
		    console.log(key, tratti[key]);
		});*/
	});
});