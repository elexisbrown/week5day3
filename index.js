///1 
function sumAll(arr) {
    var maxNum = Math.max.apply(null,arr);
    var minNum = Math.min.apply(null, arr);

    var range = maxNum-minNum;
    var total = 0;

    for(var i=1; i<range;i++){
        total = total +minNum + i;
    }
    total = total + maxNum + minNum;

    return total;
}

sumAll([1,4]);

//2

function  where(collection, source) {
    var arr = collection.filter(function(item){
        for(var i in source){
            if(source[i]!=item[i]){
                return false;
            }
           return true;
        }
    });

    return arr;

}

where([{first: "Romeo", last: "Montague" }, {first: "Mercutio", last: null}, {first: "Tybalt", last: "Capulet"}], { last: "Capulet"});

//3 

function convert(num){
    var roman = "";

    var romanNumeral = ["M", "CM", "D" ,"CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    for(var i=0; i<numbers.length; i++){
        while(num>=numbers[i]){
            roman = roman + romanNumeral[i];
            num = num - numbers[i]
        }
    }
    return roman;
}

convert(36)