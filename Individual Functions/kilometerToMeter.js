function kilometerToMeter (kilometer) 
{
    if (kilometer <= 0) 
    {
        if (kilometer < 0) 
        {
            return console.log("***WARNING***\nDistance can not be negative.\nPlease re-enter the kilometer value with caution.");    
        }   
        else
        {
            return console.log("***WARNING***\nPlease enter a value more than 0 to get the right answer.");
        } 
    }
    else
    {
        return kilometer*1000;    
    }
}
console.log(kilometerToMeter(-100));
console.log(kilometerToMeter(0));
console.log(kilometerToMeter(50));