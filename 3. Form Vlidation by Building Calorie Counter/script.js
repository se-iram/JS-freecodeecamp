const calorieCounter = document.getElementById("calorie-counter")
const budgetNumberInput = document.getElementById("budget")
const entryDropdown = document.getElementById("entry-dropdown")
const addEntryButton = document.getElementById("add-entry")
const clearButton = document.getElementById("clear")
const output = document.getElementById("output")

// to check wether user input calue is valid or not
// let isError = false
// function to clean input string
function cleanInputString(str){
const regex = /[+-\s]/g
return str.replace(regex, "")
}
function isInvalidInput(str){
    const regex = /\d+e\d+/i;
    return str.match(regex)
}