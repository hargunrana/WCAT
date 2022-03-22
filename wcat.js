// 1) node wcat.js filepath => it displays the contents of a file in terminal
// 2) node wcat.js filepath1 filepath2 filepath3 => it displays the contents of a file in terminal

const fs = require("fs");
let inputArr = process.argv.slice(2);

let filesArr = [];
let optionsArr = [];

//----------------->Placed Files in Array<---------------------

for (let i = 0; i < inputArr.length; i++) {
    let firstChar = inputArr[i].charAt(0);
    if (firstChar == "-") {
        optionsArr.push(inputArr[i]);
    } else {
        filesArr.push(inputArr[i]);
    }
}

//----------------->Check if All files Exist or not<---------------------

for (let i = 0; i < filesArr.length; i++) {
    let doesExist = fs.existsSync(filesArr[i]);

    if (!doesExist) {
        console.log("One or File(s) Doesnt exist");
        process.exit();
    }
}

//----------------->Content Reading and appending starts<---------------------

let content = "";
for (let i = 0; i < filesArr.length; i++) {
    let fileContent = fs.readFileSync(filesArr[i]);
    content += fileContent + "\n";
}

//----------------->Appling the Options<---------------------

let contentArr = content.split("\n");

//----------------->Applying -s option<---------------------

let isSPresent = optionsArr.includes("-s");

let tempArr = [];
if (isSPresent) {
    for (let i = 1; i < contentArr.length; i++) {
        if (
            contentArr[i] == "" &&
            (contentArr[i - 1] == "" || contentArr[i - 1] == null)
        ) {
            contentArr[i] = null;
        }
    }

    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != null) {
            tempArr.push(contentArr[i]);
        }
    }
    contentArr = tempArr;
}

let isNPresent = optionsArr.includes("-n");
let isBPresent = optionsArr.includes("-b");

//----------------->Appling -n and -b options<---------------------

// Getting index of -n and -b
let indexOfN = optionsArr.indexOf("-n");
let indexOfB = optionsArr.indexOf("-b");

let finalOption = "";

// if both -n and -b are present in the optionsArr
if (indexOfN != -1 && indexOfB != -1) {
    if (indexOfN < indexOfB) {
        finalOption = "-n";
    } else {
        finalOption = "-b";
    }
} else {
    if (indexOfN != -1) {
        finalOption = "-n";
    } else if (indexOfB != -1) {
        finalOption = "-b";
    }
}
// Running the Final Option
if (finalOption == "-n") {
    modifyContentByN();
} else {
    modifyContentByB();
}

// Function to run -n
function modifyContentByN() {
    for (let i = 0; i < contentArr.length; i++) {
        contentArr[i] = i + 1 + ". " + contentArr[i];
    }
}

// Function to run -b
function modifyContentByB() {
    let count = 1;
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != "") {
            contentArr[i] = count + ". " + contentArr[i];
            count++;
        }
    }
}

console.log(contentArr);
