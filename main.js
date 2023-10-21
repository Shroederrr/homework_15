let hours = prompt("Enter hours:");
let seconds = hours * 3600;
if (hours < 0) {
    alert("Error, you cannot enter negative number");
} else {
    alert(`${seconds} seconds`);
}