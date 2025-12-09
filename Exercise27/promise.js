function delayPromise() {
    return new Promise((resolve, reject) => {

        const isSuccessful = true; 

        setTimeout(() => {
            if (isSuccessful) {
                resolve("Success: Promise resolved after 2 seconds!");
            } else {
                reject("Error: Something went wrong!");
            }
        }, 2000);

    });
}

delayPromise()
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error(error);
    });
