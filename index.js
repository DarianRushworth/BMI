var weightInKg = 82;
var heightInM = 1.79;

const age = process.argv[2]
const height = process.argv[3]
const weight = process.argv[4]
const gender = process.argv[5]
const exerciseDaily = process.argv[6]

//Using the user's input 
const bmi = (weight / Math.round(height*height));
console.log(`This is your BMI (body mass index): ${bmi}`)

const idealWeight = Math.round(22.5 * (height * height))
console.log(`This is your ideal weight: ${idealWeight}Kg`)

const genderModifier = gender === "M"? 5: -161
const bmr = Math.round(10 * weight + 6.25 *(height*100)-5
* age + genderModifier)
console.log(`This is your BMR (basel metabolic rate): ${bmr}`)

const exerciseModifier = exerciseDaily == true? 1.5: 1.2
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

