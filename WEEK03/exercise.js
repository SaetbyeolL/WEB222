/**
 * Week 3 - A Larger Example (String, Array, RegExp):
 * 
 * Write a series of functions to accomplish the following, building a larger program as you go:
 * 
 * 1. Split the string into an `Array` of separate rows (i.e., an `Array` with rows separated by `\n`).
 *    Bonus: how could we deal with data that includes both Unix (`\n`) and Windows (`\r\n`) line endings?
 * 
 * 2. Each row contains information user info: `ID`, `Name`, `Phone Number`, and `Height` info all separated by commas.
 *    Split each row into an `Array` with all of its different fields.  You need to deal with extra and/or no
 *    whitespace between the commas.
 * 
 * 3. Get rid of any extra spaces around the `Name` field
 * 
 * 4. Using a `RegExp`, extract the Area Code from the `Phone Number` field.  All `Phone Number`s are in one of two
 *    formats: `"555-555-5555"` or `"5555555555"`.
 * 
 * 5. Check if the `Height` field has `"cm"` at the end.  If it does, strip that out, convert the number to inches,
 *    and turn it into a `String` in the form `"xx inches"`.  For example: `"152 cm"` should become `"59 inches"`.  
 * 
 * 6. After doing all of the above steps, create a new record with `ID`, `Name`, `Area Code`, `Height In Inches`
 *    and separate them with commas.
 * 
 * 7. Combine all these processed records into a new CSV formatted string, with rows separated by `\n`.
 * 
 * Sample Data:
 * 
 * ```
 * 0134134,John Smith,555-567-2341,62 inches\n
 * 0134135   ,    June    Lee    ,  5554126347 ,        149 cm\n
 * 0134136,       Kim Thomas       , 5324126347, 138cm\n
 * ```
*/

// Multi-Line Template Literal to wrap the CSV data
var csvData = `0134134,John Smith,555-567-2341,62 inches
0134135   ,    June    Lee    ,  5554126347 ,        149 cm
0134136,       Kim Thomas       , 5324126347, 138cm`;

function splitIntoRows(s){
    return s.split(/\r?\n/);
}

function removeExtraWhitespace(s){
    return s.replace(/\s+/, ' ');
}

function extractAreaCode(phoneNumber){
    let matches = phoneNumber.match(/(\d{3})-?\d{3}-?\d{4}/);
    if(matches){
        return matches[1];
    }
    return phoneNumber;
}

function normalizeHeight(height){
    //Height is already in inches, return it
    if(height.endsWith('inches')){
        return height;
    }
    //Get the height in cm as a Number
    let cm = parseFloat(height);
    let inches = cm * 0.39;

    // `XX inches`
    return `${inches} inches`;
}

function rowToFields(row){
    //split on, with or without whitespace on either side
    let fields = row.split(/\s*,\s*/);

    // remove extra whitespace from name
    fields[1] = removeExtraWhitespace(fields[1]);

    //Extract Area Code from 555-555-5555 or 5555555555
    fields[2] = extractAreaCode(fields[2]);

    //Normalize Height to inches and format as a String
    fields[3]= normalizeHeight(fields[3]);

    return fields.join(',');
}

function processCSV(csv) {
    // Step1 - break the csv into rows
    let rows = splitIntoRows(csv);

    //Step2 - split all rows into array of fields
    //let data = rows.map((row) => rowToFields(row)); 
    let data = rows.map(rowToFields);  // It is more shorter than line54

    return data.join('\n');

    // for(let row of rows){ // it is same like line55
    //     let fields = rowToFields(row);
    //     //add this set of fields to our data
    //     data.push(fields);
    // }
}

// Log output of processing
let processed = processCSV(csvData);
console.log(csvData);
console.log(processed);