function hotelCost (numberOfDays) 
{
    if (numberOfDays <= 0)
    {
        if (numberOfDays < 0) 
        {
            return console.log("***WARNING***\nStaying days can not be negative.\nPlease re-enter the value with caution.");
        } 
        else 
        {
            return console.log("***WARNING***\nSorry,if you don't want to stay here at least a day,\nwe can not calculate your total amount.");
        }
    }
    else if (numberOfDays <= 10) 
    {
       return numberOfDays*100;
    } 
    else if (numberOfDays <= 20) 
    {
        var first10Days = 10*100;
        return first10Days+((numberOfDays-10)*80);
    }
    else 
    {
        var first20Days = (10*100)+(10*80);
        return first20Days+((numberOfDays-20)*50);
    }
}
console.log(hotelCost(-5));
console.log(hotelCost(0));
console.log(hotelCost(5));
console.log(hotelCost(15));
console.log(hotelCost(25));