function megaFriend (friendsName) 
{
    var longestName = " ";
    if (friendsName == " " || friendsName.length == 1 || Array.isArray(friendsName) == false) 
    {
        if (friendsName == " " || friendsName.length == 1) 
        {
            return console.log("***WARNING***\nPlease enter more than 1 name to compare.");
        } 
        else 
        {
            return console.log("***WARNING***\nPlease enter more than 1 name in an array (in between [] third bracket) to compare.");
        }
    }
    else 
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
console.log(megaFriend("alom"));
console.log(megaFriend([" "]));
console.log(megaFriend(["alom"]));
console.log(megaFriend(["alu", "aloo", "aaloo", "kaaloo"]));