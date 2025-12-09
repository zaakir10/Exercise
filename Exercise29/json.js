async function fetchJSONData() {
    console.log("Start fetching JSON data...");

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    console.log("Fetched JSON Data:", data);
}

fetchJSONData();
console.log("This message runs immediately and is not blocked.");
