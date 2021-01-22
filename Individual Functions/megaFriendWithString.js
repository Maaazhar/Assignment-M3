function megaFriend (friendsName) 
{
    var longestName = " ";
    if (Array.isArray(friendsName) == false) 
    {
        var friendsNameSplit = friendsName.split(" ");
        for (let i = 0; i < friendsNameSplit.length; i++) 
        {
            if (friendsNameSplit[i].length > longestName.length) 
            {
                longestName = friendsNameSplit[i];
            } 
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

console.log(megaFriend(["alu", "aloo", "aaloo", "kaaloo"]));
console.log(megaFriend("alu aloo aaloo kaaloo kaaalooo"));

 