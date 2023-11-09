// Iteration 1: Names and Input
const hacker1 = "Lisi";
const length1 = hacker1.length;
const hacker2 = "Marvin";
const length2 = hacker2.length;
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (length1 > length2) {
  console.log(`The driver has the longest name, it has ${length1} characters.`);
} else if (length1 < length2) {
  console.log(
    `It seems that the navigator has the longest name, it has ${length2} characters`
  );
} else {
  console.log(`Wow, you both have equally long names, ${length1} characters!`);
}

// Iteration 3: Loops
let hacker1Capital = "";

for (let i = 0; i < length1; i++) {
  hacker1Capital += hacker1[i].toUpperCase() + " ";
}

console.log(hacker1Capital);

let hacker2Reverse = "";

for (let i = length2 - 1; i >= 0; i--) {
  hacker2Reverse += hacker2[i];
}

console.log(hacker2Reverse);

if (hacker1 > hacker2) {
  console.log("The driver's name goes first");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus Time!
// Bonus 1
const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nibh mi. Fusce vel quam turpis. Maecenas quis est auctor, gravida orci non, blandit erat. Nullam condimentum lacus vitae pretium pulvinar. Ut eget laoreet nisl, ac commodo elit. Integer faucibus dictum lectus, vitae mollis leo imperdiet in. Pellentesque pulvinar ex justo, nec pellentesque erat consequat eu. Integer maximus, eros sed dictum aliquam, ipsum leo tristique ipsum, non posuere nulla orci a turpis. Mauris non dui et est viverra volutpat. In id commodo ex. Phasellus vel tellus nec nulla suscipit convallis non non quam. Praesent quis varius orci, quis facilisis diam. Sed vel dolor porttitor, sodales nisi vel, efficitur nisl. Nam id velit at purus gravida laoreet vitae ut nisi. Donec mollis pellentesque porta. Donec blandit leo ligula, cursus tincidunt quam fringilla ac. Fusce sit amet posuere dolor. Pellentesque ornare, lacus non vestibulum sodales, libero dolor eleifend metus, at imperdiet risus magna eget velit. Fusce ligula augue, elementum nec tempor at, semper sit amet tortor. Nam at erat scelerisque ex iaculis euismod pellentesque vel nulla. Sed sollicitudin porttitor elit, ut sagittis lorem accumsan ut. Cras eget rutrum turpis. Vestibulum eget bibendum nunc. Nullam ut turpis at justo viverra venenatis vitae id arcu. Nunc hendrerit pulvinar nibh in fermentum. Donec posuere vestibulum orci, quis condimentum velit imperdiet scelerisque. Vivamus sit amet nibh interdum, posuere nibh eget, hendrerit purus. Proin id fermentum quam. Vestibulum cursus felis ac fringilla laoreet. Ut vitae malesuada massa. Etiam vehicula congue ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel risus at orci bibendum auctor. Vivamus a libero mi. Phasellus mattis mattis orci, ac mollis risus viverra et. Aliquam molestie porttitor sodales. Donec gravida orci purus, vehicula sollicitudin erat consectetur eget. Etiam sodales, risus in lobortis viverra, nisi lectus molestie ex, quis cursus mi augue a nisl. Phasellus sed mollis ipsum, et eleifend felis. Ut hendrerit purus sapien, eu commodo felis condimentum vitae. Vestibulum quis dui a arcu consequat efficitur.";
const textLength = longText.length;
let countWords = 0;

for (let i = 0; i < textLength; i++) {
  if (longText[i] === " ") {
    countWords++;
  }
}
if (longText[textLength - 1] !== " ") {
  countWords += 1;
}

console.log(`The longText string has ${countWords} words.`);

let countEt = 0;
let word = "";

for (let i = 0; i < textLength; i++) {
  if (longText[i] === " " || longText[i] === "," || longText[i] === ".") {
    if (word === "et") {
      countEt++;
    }
    word = "";
  } else {
    word += longText[i];
  }
}

console.log(
  `The latin word et appears ${countEt} times in the longText string.`
);

// Bonus 2
let phraseToCheck1 = "Was it a car or a cat I saw?";
let phraseToCheck2 = "Is this string a palindrome!?";

function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    let charLeft = str[i];
    let charRight = str[j];

    if (charLeft.charCodeAt(0) < 65 || charLeft.charCodeAt(0) > 90) {
      i++;
      continue;
    }

    if (charRight.charCodeAt(0) < 65 || charRight.charCodeAt(0) > 90) {
      j--;
      continue;
    }

    if (charLeft === charRight) {
      i++;
      j--;
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(phraseToCheck1.toUpperCase()));
console.log(isPalindrome(phraseToCheck2.toUpperCase()));
