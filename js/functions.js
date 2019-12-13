//calculate BMR
// BMR =
// if male = *66* + (*6.3* * weight) +  (*12.9 * height) - (*6.8* * age)
// if female = *655 + (*4.3 x weight) + (*4.7 x height) - (*4.7 x age)

const MALE_BMR_FIRST_VALUE = 66;
const MALE_WEIGHT_MULTIPLIER = 6.3;
const MALE_HEIGHT_MULTIPLIER = 12.9;
const MALE_AGE_MULTIPLIER = 6.8;

const FEMALE_BMR_FIRST_VALUE = 655;
const FEMALE_WEIGHT_MULTIPLIER = 4.3;
const FEMALE_HEIGHT_MULTIPLIER = 4.7;
const FEMALE_AGE_MULTIPLIER = 4.7;
results = 0;

function getBasalMetabolicRate() {
  var sel = document.getElementById("sex-select");
  var sex = sel.options[sel.selectedIndex].text;
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var age = document.getElementById("age").value;

  var basalMetabolicRate = 0;
  if ((sex = "male")) {
    basalMetabolicRate =
      MALE_BMR_FIRST_VALUE +
      MALE_WEIGHT_MULTIPLIER * weight +
      MALE_HEIGHT_MULTIPLIER * height -
      MALE_AGE_MULTIPLIER * age;
  } else {
    basalMetabolicRate =
      FEMALE_BMR_FIRST_VALUE +
      FEMALE_WEIGHT_MULTIPLIER * weight +
      FEMALE_HEIGHT_MULTIPLIER * height -
      FEMALE_AGE_MULTIPLIER * age;
  }

  return basalMetabolicRate;
}

function checkEmptyValues() {
  var age = document.getElementById("age").value;
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  if (
    age == "" ||
    age <= 0 ||
    age >= 120 ||
    weight == "" ||
    weight < 5 ||
    weight >= 500 ||
    height == "" ||
    height < 10 ||
    height > 100
  ) {
    alert("Please enter missing field");
  } else {
    getCalories();
  }
}

function getCalories() {
  var calories = 0;
  var activityLevel = document.getElementById("activity-level").value;

  const SEDENTARY_MULTIPLIER = 1.2;
  const LIGHT_ACTIVITY_MULTIPLIER = 1.375;
  const MODERATE_ACTIVITY_MULTIPLIER = 1.55;
  const VERY_ACTIVE_MULTIPLIER = 1.725;
  const EXTREMELY_ACTIVE_MULTIPLIER = 1.9;

  if (activityLevel == "sedentary") {
    calories = getBasalMetabolicRate() * SEDENTARY_MULTIPLIER;
  } else if (activityLevel == "lightly-active") {
    calories = getBasalMetabolicRate() * LIGHT_ACTIVITY_MULTIPLIER;
  } else if (activityLevel == "moderately-active") {
    calories = getBasalMetabolicRate() * MODERATE_ACTIVITY_MULTIPLIER;
  } else if (activityLevel == "very-active") {
    calories = getBasalMetabolicRate() * VERY_ACTIVE_MULTIPLIER;
  } else {
    calories = getBasalMetabolicRate() * EXTREMELY_ACTIVE_MULTIPLIER;
  }
  results = Math.round(calories);
  document.getElementById("result").innerHTML =
    "Your daily calorie requirements are: " + results;
  document.getElementById("button-01").remove();
}
