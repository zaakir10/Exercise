function delayBlocking() {
    alert("Fetching user data..."); 
    return "Blocking delay completed!";
}

console.log("Start blocking delay...");
console.log(delayBlocking());
console.log("This message is blocked until the delay is complete.");
