
//-----------------  kilometerToMeter

function kilometerToMeter(kilometer){
    var meter = kilometer / 0.001; // 1meter = 0.001 kilometer
    
    if ( kilometer < 0){
        return "length can't be negitive";
    }
return meter;
}


//-----------------  budgetCalculator

function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = watch * 50;     //Watch price is 50$
    var mobilePrice = mobile * 100;  //Mobile price is 100
    var laptopPrice = laptop * 500;  //laptop price is 500$

    if (watch <0 ){
        return "item can not be zero or negitive";
    }
    if (mobile <0){
        return "item can not be zero or negitive";
    }
    if (laptop <0){
        return "item can not be zero or negitive";
    }
    var needBudget = watchPrice + mobilePrice + laptopPrice;
    return needBudget;
}


//----------------------- hotelCost

function hotelCost(days) {
    var stay = 0;

    if (days <=0){         
        return undefined;

    } if (days <=10){
        stay = days * 100;  
    } else if (days <=20){
        var firstTenDays = 10 *100;          // $100 for first 10 days of month
        var remaining = days - 10;
        var secondTenDays = remaining * 80;  // $80 for second 10days of month
        stay = firstTenDays + secondTenDays;

    } else{
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = days - 20;
        var remainingDays = remaining * 50;   //$50 for rest of the days
        stay = firstTenDays + secondTenDays + remainingDays
    }
    return stay;
}


//------------- megaFriend

function megaFriend(friends) {
    var mega = friends[0];
    
    //if array is empty
    if(friends.length < 1){
        return "no name in the array";
    }

    for (var i = 0; i < friends.length; i++){
        var newMega = friends[i];
        if(newMega.length > mega.length){
            mega = newMega;
        }
    }
    return mega;
}
