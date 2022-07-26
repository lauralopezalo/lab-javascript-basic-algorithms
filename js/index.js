// Iteration 1: Names and Input

let hacker1 = "Simon";
console.log("The driver's name is " + hacker1);

let hacker2 = "Garfunkel"; 
console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length)
    console.log("The driver has the longest name, it has " + hacker1.length + " characters");
else if (hacker1.length < hacker2.length)
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters");
else if (hacker1.length == hacker2.length)
    console.log("Wow, you both have equally long names, " + hacker2.length + " characters!");


// Iteration 3: Loops

let hacker1Space = "";
for (let i = 0; i < hacker1.length; i++)
    hacker1Space += hacker1[i] + " ";
console.log(hacker1Space.toUpperCase());

let hacker2Reverse = "";
for (i = hacker2.length - 1; i >= 0; i--)
    hacker2Reverse += hacker2[i];
console.log(hacker2Reverse);

if (hacker1 < hacker2)
    console.log("The driver's name goes first.");
else if (hacker1 > hacker2) 
    console.log(`Yo, the navigator goes first definitely.`);
else
    console.log(`What?! You both have the same name?`);



//Bonus 1---------------------------------------------------------------

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent auctor ut enim ut auctor. Sed placerat erat quis justo lacinia, et dictum ligula tempus. Phasellus purus erat, eleifend nec velit vel, scelerisque aliquet quam. Aliquam ante enim, dictum at semper et, pharetra vitae augue. Curabitur eget vulputate ante. Duis justo augue, tempor a consequat sit amet, eleifend sit amet elit. Morbi quam nisl, ultricies pulvinar arcu ullamcorper, pellentesque venenatis dolor. Proin cursus lacus in ligula vestibulum cursus. Vestibulum id mollis magna. Cras dictum ligula justo, nec tempor orci commodo eget. Nunc imperdiet id nisl in laoreet. Phasellus quam sem, commodo eu tincidunt vitae, blandit nec eros. Nam ut odio vestibulum, interdum sem quis, pretium neque. Etiam tempor fermentum viverra. Sed semper id felis at dignissim. Ut non sapien sit amet metus commodo rutrum nec id metus. Proin tristique pellentesque elit et vulputate. In pellentesque interdum tortor, a tempor neque feugiat sit amet. Suspendisse tincidunt varius efficitur. Nam vestibulum malesuada felis id hendrerit. Maecenas dapibus feugiat elit blandit aliquam. Suspendisse at faucibus ex, eget tincidunt mauris. In imperdiet ultrices fringilla. Phasellus imperdiet arcu eu laoreet maximus. Aliquam eu mauris quis lectus consectetur rhoncus. Proin dolor elit, tristique sit amet lorem vel, viverra fermentum ante. Maecenas luctus purus tincidunt erat fringilla, vel volutpat ex tempus. Donec hendrerit, massa eget aliquam sollicitudin, urna ex pellentesque ante, eu tincidunt elit elit sit amet massa. Sed in interdum urna. Maecenas eu elit ut massa venenatis egestas. Etiam vel dui a libero consectetur posuere quis eu odio. Nullam a nisl felis. Vestibulum ac erat eget ligula dictum scelerisque in nec metus. Curabitur eu vehicula mi, a convallis urna. Aenean in est quis eros congue tincidunt. In hac habitasse platea dictumst. Etiam sagittis viverra est, at tempor ex egestas at. Nunc ut porta enim, vel consequat odio. Mauris at luctus quam. Sed ut egestas metus. Sed ac ultricies ipsum, sed semper ligula. Duis semper purus vitae nunc pretium, eget fermentum tellus varius.";

function countWords(string) {
    return string.split(' ').length;
}
console.log(countWords(text));


function countEt(str) {
    let words = [... str.split(' ')];
    let count = 0;
    for (let i = 0; i < words.length; i++)
    {
        if (words[i] === "et" || words[i] === "et,")
        count++;
    }
    return count;
}
console.log(countEt(text));

//Bonus 2-------------------------------------------------------

