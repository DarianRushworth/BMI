// Getting user input and assigning it
let beginning = "Welcome to your very own BMI calculator"
let ageQuestion = "What is your age in years?"
let heightQuestion = "What is your height in meters?"
let weightQuestion = "What is your weight in kilograms?"
let genderQuestion = "m/f?"
let exerciseDailyQuestion = "Do you exercise daily? True or false?"


console.log(`${beginning}
1) ${ageQuestion}
2) ${heightQuestion}
3) ${weightQuestion}
4) ${genderQuestion}
5) ${exerciseDailyQuestion}`)
console.log(process.argv)

if (process.argv.length !== 7) {
    console.log(`
      You gave ${process.argv.length - 2} arguments(s) to the program
  
      Please provide 5 arguments for
      
      weight (kg), 
      height (m), 
      age (years), 
      wether you exercise daily (yes or no)
      and your gender (m or f)
      
      Example:
  
      $ node index.js 82 1.79 32 yes m
    `);
  
    process.exit();
  }
  const age = process.argv[2]
const height = process.argv[3]
const weight = process.argv[4]
const gender = process.argv[5]
const exerciseDaily = process.argv[6]

if(age<20){
    console.log(`This BMI calculator is designed for people over 20 years old.`)
}
if(weight<30 || weight>300){
    console.log(`Please provide a number between 30 and 300 for your weight:
    example: 78.`)
}
if(exerciseDaily !=="true" || exerciseDaily !=="false"){
    console.log(`Please specify with true or false.`)
}
if (isNaN(weightInKg) || isNaN(heightInM) || isNaN(age)) {
    console.log(`
      Please make sure weight, height and age are numbers:
  
      weight (kg) example: 82 | your input: ${process.argv[4]}
      height (m) example 1.79 | your input: ${process.argv[3]}
      age (years) example 32  | your input: ${process.argv[2]} 
  
      $ node index.js 82 1.79 32 yes m
    `);
  
    process.exit();
  }

//Using the user's input 
function calculateBMI(weight, height){
    const BMI= Math.round(weight /(height*height));
    return BMI
}
const BMI= calculateBMI(process.argv[4], process.argv[3]);
console.log(`Your BMI is: ${BMI}`)

const idealWeight = Math.round(22.5 * (height * height))
console.log(`This is your ideal weight: ${idealWeight}Kg`)

const genderModifier = gender === "m"? 50: -150
const bmr = Math.round(10 * weight + 6.25 *(height*100)-5
* age + genderModifier)
console.log(`This is your BMR (basel metabolic rate): ${bmr}`)

const exerciseModifier = exerciseDaily == true? 1.6: 1.4
const caloriesPerDay = bmr * exerciseModifier
console.log(`This is your total calorie intake per day: ${caloriesPerDay}`)

const weightDifferenceToIdealWeight = idealWeight - weight
if(weightDifferenceToIdealWeight>0){
    console.log(`You must gain ${weightDifferenceToIdealWeight}Kg to be at your ideal weight.`)
} else if (weightDifferenceToIdealWeight<0){
    console.log(`You must lose ${Math.abs(weightDifferenceToIdealWeight)}Kg to be at your ideal weight.`)
} else {console.log(`You are the ideal weight.`)}

const dietWeeks = Math.abs(weightDifferenceToIdealWeight/0.5)
const dietCaloriesPerDay = weightDifferenceToIdealWeight>0? caloriesPerDay+500:caloriesPerDay-500
const dietOrNot = weightDifferenceToIdealWeight>0? ["gain weight", "increasing"]: ["diet","decreasing"]
console.log(`You should ${dietOrNot[0]} for ${dietWeeks} week(s), by ${dietOrNot[1]} your total calorie intake per day to ${dietCaloriesPerDay} calories.`)

