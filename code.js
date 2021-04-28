console.log("--------Exercise-9------");
// Extra work :)
// create a repo for this app. we are coming later to it :)
// Create a program that generate a random password with the length of 30 character, every time you call the function should give you a different password

// Examples you will have other passwords for sure

// passwordGen()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
// passwordGen()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
// passwordGen()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP
function passwordGen() {
  let pw = "";
  let pwLength = 30;
  const pwChar =
    "abcdefghijklmnopqrstuvwxyzäöüABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ0123456789!§%&/()=?<>@€$#*+-_°^";
  for (let i = 0, n = pwChar.length; i < pwLength; ++i) {
    pw += pwChar.charAt(Math.floor(Math.random() * n));
  }
  console.log(pw);
}
passwordGen();
passwordGen();
passwordGen();
// branch js-only

// branch app-project
