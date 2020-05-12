// from data.js 
//change vars to lets 
let tableData = data;
//reference
let tbody = d3.select("tbody");
// 
// Using the UFO dataset provided in the form of an array of JavaScript objects,
// write code that appends a table to your web page and then adds new rows of data
// for each UFO sighting.
function appendTable(tableData) {
    tableData.forEach((item) => {
        // Create table row
        let row = tbody.append("tr");
        Object.entries(item).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    
};
appendTable(data);

