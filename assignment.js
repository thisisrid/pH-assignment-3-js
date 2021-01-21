
//KM to METER converter
function kilometerToMeter(num){
    if(num<0){
        return "Sorry Sir! Give Me any positive value"
    }
    else{
        return num*1000;
    }
}
//Budget Calculator
function budgetCalculator(watch, mobile, laptop){
    if(watch < 0 || mobile < 0 || laptop < 0){
        return "Give a valid input"
    }
    else{
        var watchCost = watch*50;
        var mobileCost = mobile*100;
        var laptopCost = laptop*500;
        return watchCost+mobileCost+laptopCost;
    }
}


//Hotel Cost
function hotelCost(day){
    var totalCost=0;
    if(day < 0 || day == 0){
        return "Dear Sir, you NEED to pay NOTHING$!"
    }
    else{
        if(day <= 10){
            totalCost = day*100;
                }
                else if (day <= 20){
            var firstTenDay = 10*100;
            var remainingDay = day - 10;
            var extraDay = remainingDay*80;
            totalCost = firstTenDay + extraDay;
                }
                else{
            var firstTenDay = 10*100;
            var secondTenDay = 10*80;
            var remainingDay = day - 20;
            var extraDay = remainingDay*50;
            totalCost = firstTenDay +secondTenDay+ extraDay;
                }
            return totalCost;
    }
}
