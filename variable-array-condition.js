var bottleColor = "yellow";
var waterQuantity = 1;
var isFull = false;

// array
var items = ['bottle', 'mug', 'paper', 'pen'];
items.indexOf('paper');
items.push('envelope');
items.push('watch');
items.pop();

// condition 
if(items.length >= 4){
    console.log('You have too many stuff on your desk.');
}
// else{
//     console.log('Wow! You have a clean desk.')
// }
else if(items.length == 4){
    console.log('you only have one hali items');
}
