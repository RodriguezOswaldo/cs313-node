exports.test1 = function(weight, type){
    var price = "";
    switch (type) {
        case 'stamped':
        if(weight > 0 && weight < 12){
            price = 0.25;
        }else{
            price = 0.50;
        }
        break;
        case 'mettered':
        if(weight > 0 && weight < 12){
            price = 0.65;
        }else{
            price= 1.25;
        }
        case 'envelopes':
        if(weight > 0 && weight < 12){
            price = 26.35;
        }else{
            price = 36.21;
        }
        case 'firstclass':
        if(weight > 0 && weight < 12){
            price = 10.75;
        }else{
            price = 36.25;
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