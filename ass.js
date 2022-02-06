/* function anaToVori(ana) {

    if (ana >= 0 && (typeof ana == 'number')) {
        let vori = ana / 16;
        return vori; 
        
    }
    else {
        console.log('Please put a positive NUMBER!');
    }
    
} */







/* function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity) {

    if (singaraQuantity >= 0 && somuchaQuantity >= 0 && jilapiQuantity >= 0) {
        
    let singaraPrice = 7 * singaraQuantity;
    let somuchaPrice = 10 * somuchaQuantity;
    let jilapiPrice = 15 * jilapiQuantity;
    let totalPrice = singaraPrice + somuchaPrice + jilapiPrice;
        return totalPrice;
    }

    else {
        console.log('Positive integer needed!');
        return;
    }
} */







function picnicBudget(perticipants) {
    
    if (perticipants >= 0 && perticipants <= 100) {
        var totalCost = 0;
        totalCost = 5000 * perticipants;
        
    }
    else if (perticipants >= 101 && perticipants <= 200) {
        var totalCost = 0;
        totalCost = 500000 + 4000 * (perticipants - 100);
       
    }
    else if (perticipants > 200) {
        var totalCost = 0;
        totalCost = 900000 + 3000 * (perticipants - 200);
        
        }
    else {
        console.log('Please put a positive number. ');
    }
    return totalCost;
}







/* function oddFriend(friends) {
     
    if (typeof friends == 'object' && Array.isArray(friends) == true) {
        var friend = 0;
        for (let i = 0; i < friends.length; i++) {
            var charLength = friends[i].length;
            if (charLength % 2 == 1) {
                friend = friends[i];
                console.log(friend);
                break;
                return friend;
            }
        }
    }
    else {
        console.log('put an Array with Name list.')
        return;
    }

} */


