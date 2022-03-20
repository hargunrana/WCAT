# 👨🏻‍💻Build WCAT commands

It is used to display or make a copy content of one or more files in the terminal

### ⚜️General Syntax:

`node wcat.js [options] [filepaths]`<br>
option to remove big line break `-s`<br>
option to add line number to non empty lines `-b`<br>
option to add line numbers to all lines `-n`<br>

## 😚Commands:

1. `node wcat.js filepath` => displays content of the file in the terminal ✅<br>
2. `node wcat.js filepath1 filepath2 filepath3...` => displays content of all files in the terminal in (contactinated form) in the given order. ✅<br>
3. `node wcat.js -s filepath` => convert big line breaks into a singular line break.✅<br>
4. `node wcat.js -n filepath` => give numbering to all the lines.✅<br>
5. `node wcat -b filepath` => give numbering to non-empty lines.✅<br>
   We can mix and match the options.

## 😬Edge cases:

1. If file entered is not found then it gives file does not exist error. ✅ 
2. `-n` and `-b` are 2 options which are mutually exclusive so if user types both of them together only the first enter option should work.✅
3. `-s` and any or both `-n` and `-b` present then `-s` will be executed first and then `-n` and `-b` according second rule.✅

## Extra cases: 

Link:https://www.tecmint.com/13-basic-cat-command-examples-in-linux/<br>
1. Create a new file using `node wcat.js -c FILENAME`
2. Display $ at the end of file
3. Sorting contents of multiple files in a single file
