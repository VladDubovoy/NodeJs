const fs = require("fs");

const SEX = {MALE: "MALE", FEMALE: "FEMALE"}
const USER_COUNT = 121;
/*
User

age: number
password: string
profile: {
username: string,
firstName: string,
lastName: string,
dateOfBirth: Date,
}
email: string
isMarried: boolean
children: [
  User
]
 */

const names = [
  "Harry", "Ross",
  "Bruce", "Cook",
  "Carolyn", "Morgan",
  "Albert", "Walker",
  "Randy", "Reed",
  "Larry", "Barnes",
  "Lois", "Wilson",
  "Jesse", "Campbell",
  "Ernest", "Rogers",
  "Theresa", "Patterson",
  "Henry", "Simmons",
  "Michelle", "Perry",
  "Frank", "Butler",
  "Shirley"
]

const lastNames = [
  "Ruth", "Jackson",
  "Debra", "Allen",
  "Gerald", "Harris",
  "Raymond", "Carter",
  "Jacqueline", "Torres",
  "Joseph", "Nelson",
  "Carlos", "Sanchez",
  "Ralph", "Clark",
  "Jean", "Alexander",
  "Stephen", "Roberts",
  "Eric", "Long",
  "Amanda", "Scott",
  "Teresa", "Diaz",
  "Wanda", "Thomas"
]

const getName = () => names[Math.floor(Math.random() * (names.length - 1))];
const getLastName = () => lastNames[Math.floor(Math.random() * (lastNames.length - 1))];
const generateAge = () => (Math.floor(Math.random() * (40 - 1)) + 1)
const getString = () => (Math.random() + 1).toString(36).substring(7);
const getMale = () => Math.random() > 0.5 ? SEX.FEMALE : SEX.MALE;
const getMarried = () => Math.random() > 0.5;
const getProfile = () => ({
  username: getString(),
  firstName: getName(),
  lastName: getLastName(),
  date: new Date()
});

const getUser = () => ({
  age: generateAge(),
  profile: getProfile(),
  male: getMale(),
  isMarried: getMarried(),
  password: getString(),
  email: getString(),
})

const arr = Array.from({length: USER_COUNT}, () => getUser())

fs.writeFileSync('users.json', JSON.stringify(arr, null, 8), 'utf8', () => {})

