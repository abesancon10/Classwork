//ex:
//Input: "let's go"
//Output: 2

function wordcount(str) {
  return str.split(" ").length;
}

//Binary Search:
//requirement is an Assorted Array

//turn the problem into a smaller problem in order to solve into

//This is an object

var answers = {
  r: {
    r: "tie",
    p: "lose",
    s: "win"
  },
  p: {
    r: "win",
    p: "tie",
    s: "lose"
  },
  s: {
    r: "lose",
    p: "win",
    s: "tie"
  }
};

answers[myChoice][computerChoice];

//arrays are numbers; keys are used with anything other than numbers

//Fizz Buzz a basic interview question
//Fizz = multiple of 3; Buzz is a multiple of 5
//1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz ...... FizzBuzz //FizzBuzz is mult of 3 and 5
// That's what you want to do with the function

//function FizzBuzz(x){
// for (x = 0; x < 100; x++){
// if (% 3 === "Fizz");
//   % 5 === "Buzz";
//  }
//}
//My stuff

function FizzBuzz(x) {
  //100 times
  for (var i = 1; i <= x; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(FizzBuzz);
    } else if (i % 3 === 0) {
      console.log(Fizz);
    } else if (i % 5 === 0) {
      console.log(Buzz);
    }
  }
}
//Modulus represented by %; it is the remainder

//ex. 2 % 3 = 2; 3 % 3 = 0; 10 % 3 = 1

//Turnary statement is a shorthand if and else statement

//ex.
var bool;
bool ? "This is true " : "This is false.";
// ':' means 'or else' in a if else statement

//Is this number prime?

function isPrime(x) {
  //the only number that a number should be modulous by is 1 and no other number
  if (x === 2) return true;

  for (var i = 2; i < x; i++) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
}
//always start with the most forward solution to the problem

//Which card is missing (standard 52 caed deck)
//Steps I would take
    //count number of cards in suit
    //if number = 13 then their is no missing card
    //else if number /= 13 then there is a missing card in that suit
    //from that suit go through the array of which card is missing

//Sort files by img and vid
var files = [
  "pavans_first_birthday.mov",
  "owens_asleep_at_the_computer.jpg",
  "michael_fights_a_polar_bear.mp4",
  "nate_road_rage.avi",
  "ruby_skydiving.jpeg",
  "ken_getting_his_black_belt.png",
  "dan_winning_underground_street_race.mov",
  "its_hard_to_come_up_with_file_names.gif",
  "seriously_this_is_taking_too_long.mpg",
  "i_wonder_how_many_of_these_i_should_have.png",
  "probably_a_few_more.avi",
  "nutmeg_is_clawing_my_sneakers_again.mp4",
  "cat_i_will_destroy_you.gif",
  "i_wish_we_had_a_dog.jpeg",
  "stop_looking_at_me_like_that_nutmeg.mpeg",
  "aww_i_cant_hate_you.png",
  "omg_my_sneakers.avi",
  "cat_you_are_the_worst.mp4"
];

   var img = ["jpg", "gif", "jpeg", "png"];
   var vid = ["mov", "avi", "mpeg", "mp4", "mpg"];

   files.sort(function(){return a.img - b.vid});

//Osei's method

var extMov = ["mov", "avi", "mpeg", "mp4", "mpg"];
var extImg = ["jpg", "gif", "jpeg", "png"];

var isMovie = function(file) {
    var extension = file.split('.').pop()
    return extMov.includes(extension)
}
var isImage = function(x) { return extImg.includes(x.split('.').slice(-1)[0])
}

var movies = files.filter(isMovie);
var images = files.filter(isImage);

//filter is important for readability

//.includes // array.includes

//1. determine the extension of a file
//2. determine based on the extension of the file movie vs img
//3. we need to add it to the proper list

var str = "ruby_skydiving.jpeg";
str.endsWith(".jpeg");
str.split(".").pop() === ".jpeg";
str.split(".").slice(-1)[0] === ".jpeg";
//conceptually all three work; help complete number 1


