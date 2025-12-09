function nonBlockingDelay(callback) {
    setTimeout(() => {
        callback("Non-blocking delay finished!");
    }, 2000);
}

nonBlockingDelay((message) => {
    console.log(message);
});
