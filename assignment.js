

//1. Kilometer To Meter Converter.
function kilometerToMeter (kilometer) 
{
    if (kilometer <= 0) // warning part
    {
        if (kilometer < 0) // negative input warning
        {
            return console.log("***WARNING***\nDistance can not be negative.\nPlease re-enter the kilometer value with caution.");    
        }   
        else // 0 input warning
        {
            return console.log("***WARNING***\nPlease enter a value more than 0 to get the right answer.");
        } 
    }
    else // main functioning part
    {
        return kilometer*1000;    
    }
}
console.log(kilometerToMeter(-100)); // false input sample
console.log(kilometerToMeter(0)); // false input sample
console.log(kilometerToMeter(50)); // right input sample

// 2. Budget Calculator
function budgetCalculator (watch,mobile,laptop) 
{
    if ((watch == 0 && mobile == 0 && laptop == 0) || (watch < 0 || mobile < 0 || laptop < 0)) // warning part
    {
        if (watch < 0 || mobile < 0 || laptop < 0) // negative input warning
        {
            return console.log("***WARNING***\nNumber of item can not be negative.\nPlease re-enter the value with caution.");
        } 
        else // 0 input warning
        {
            return console.log("***WARNING***\nSorry,if you don't want to buy anything from here,\nwe can not make a receipt for you.");
        }
    }
    else // main functioning part
    {
        return (watch*50)+(mobile*100)+(laptop*500);
    }
}
console.log(budgetCalculator(-10,-12,-1)); // false input sample
console.log(budgetCalculator(-10,10,10)); // false input sample
console.log(budgetCalculator(50,-20,10)); // false input sample
console.log(budgetCalculator(2,2,-10)); // false input sample
console.log(budgetCalculator(0,0,0)); // false input sample
console.log(budgetCalculator(0,10,10)); // right input sample
console.log(budgetCalculator(10,0,10)); // right input sample
console.log(budgetCalculator(10,10,0)); // right input sample
console.log(budgetCalculator(10,10,20)); // right input sample

// 3. Hotel Cost Calculator
function hotelCost (numberOfDays) 
{
    if (numberOfDays <= 0) // warning part
    {
        if (numberOfDays < 0) // negative input warning
        {
            return console.log("***WARNING***\nStaying days can not be negative.\nPlease re-enter the value with caution.");
        } 
        else // 0 input warning
        {
            return console.log("***WARNING***\nSorry,if you don't want to stay here at least a day,\nwe can not calculate your total amount.");
        }
    }
    else if (numberOfDays <= 10) // main functioning part within 10days
    {
       return numberOfDays*100;
    } 
    else if (numberOfDays <= 20)  // main functioning part within 20days
    {
        var first10Days = 10*100;
        return first10Days+((numberOfDays-10)*80);
    }
    else  // main functioning part more than 20days
    {
        var first20Days = (10*100)+(10*80);
        return first20Days+((numberOfDays-20)*50);
    }
}
console.log(hotelCost(-5)); // false input sample
console.log(hotelCost(0)); // false input sample
console.log(hotelCost(5)); // right input sample within 10 days
console.log(hotelCost(15)); // right input sample within 20 days
console.log(hotelCost(25)); // right input sample more than 20 days

// 4. Mega Friends Name Finder
function megaFriend (friendsName) 
{
    var longestName = " ";
    if (friendsName == " " || friendsName.length == 1 || Array.isArray(friendsName) == false) // warning part
    {
        if (friendsName == " " || friendsName.length == 1) // 0 and 1 input warning
        {
            return console.log("***WARNING***\nPlease enter more than 1 name to compare.");
        } 
        else // without array input warning
        {
            return console.log("***WARNING***\nPlease enter more than 1 name in an array (in between [] third bracket) to compare.");
        }
    }
    else // main functioning part
    {
        for (let i = 0; i < friendsName.length; i++) 
        {
            if (friendsName[i].length > longestName.length) 
            {
                longestName = friendsName[i];
            }        
        }    
    }
    return longestName;
}
console.log(megaFriend("alom")); // false input sample not an array
console.log(megaFriend([" "])); // false input sample no name
console.log(megaFriend(["alom"])); // false input sample 1 name
console.log(megaFriend(["alu", "aloo", "aaloo", "kaaloo"])); // right input sample