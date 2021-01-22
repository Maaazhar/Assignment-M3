function budgetCalculator (watch,mobile,laptop) 
{
    if ((watch == 0 && mobile == 0 && laptop == 0) || (watch < 0 || mobile < 0 || laptop < 0))
    {
        if (watch < 0 || mobile < 0 || laptop < 0) 
        {
            return console.log("***WARNING***\nNumber of item can not be negative.\nPlease re-enter the value with caution.");
        } 
        else 
        {
            return console.log("***WARNING***\nSorry,if you don't want to buy anything from here,\nwe can not make a receipt for you.");
        }
    }
    else
    {
        return (watch*50)+(mobile*100)+(laptop*500);
    }
}
console.log(budgetCalculator(-10,-12,-1));
console.log(budgetCalculator(-10,10,10));
console.log(budgetCalculator(50,-20,10));
console.log(budgetCalculator(2,2,-10));
console.log(budgetCalculator(0,0,0));
console.log(budgetCalculator(0,10,10));
console.log(budgetCalculator(10,0,10));
console.log(budgetCalculator(10,10,0));
console.log(budgetCalculator(10,10,20));