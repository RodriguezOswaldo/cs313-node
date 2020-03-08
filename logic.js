exports.test1 = function(weight, type){
    var price = "";
    switch (type) {
        case 'Letters (Stamped)':
            if(weight > 0 && weight < 3.5){
                price = "Your total price is: $" + (0.55 * weight).toFixed(2);
            }else{
                price = "Incorrect weight, letter is too heavy, it shouldn't be heavier than 3";
            }
        break;
        case 'Letters (Metered)':
            if(weight > 0 && weight < 3.5){
                price = "Your total price is: $" + (0.50 * weight).toFixed(2);
            }else{
                price = "Incorrect weight, letter is too heavy, it shouldn't be heavier than 3.";
            }
        break;
        case 'Large Envelopes (Flats)':
            if(weight > 0 && weight < 14){
                price = "Your total price is: $" + (1.10 * weight).toFixed(2);
            }else{
                price = "Incorrect weight, envelope is too heavy, it shouldn't be heavier than 13.";
            }
        break;
        case 'First-Class Package Service—Retail':
            if(weight > 0){
                price = "Your total price is: $" + (3.80 * weight).toFixed(2);
            }else{
                price = "Incorrect weight";
            }
        break;
        default:
            price = 0;
            break;
    }
    // if(weight > 0 && weight < 12){
    //     price = 0.35;
    // }else if (weight )
    // if(weight > 0 && type == 'mettered')
    // if(weight > 0 && type == 'envelopes')
    // if(weight > 0 && type == 'firstclass')
    console.log('got it!');
    console.log(weight);
    console.log(type);
    return price;
}