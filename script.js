let p = new Promise((resolve, reject) => {                          // Create the promise
    let a = 1+2;
    if (a == 2) {
        resolve("Success")                                                      // tell it what to do when it succeeds 
    } else {
        reject("Failed")                                                            // tell it what to do when it fails
    }
})


// now lets see how we interact with promises

p.then((message) => {                                                           //do this when it succeeds
    console.log("This is in the then " + message)
}).catch((message) => {                                                          // do this when it fails
    console.log("This is in the catch " + message)
})


/*======================
    Very simple callback function
=======================*/


const userLeft = false;
const userWatchingCatMeme = true; 

function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {                                                                                     // If variable 1 is true
        errorCallback({
            name: "User Left",
            message: ":("
        })
    } else if (userWatchingCatMeme) {                                                   // If variable 2 is true
        errorCallback({
            name: "User Watching Cat Meme",
            message: "WebDevSimplified < Cat"
        })
    } else {                                                                                                  // If both are false
        callback("Thumbs up and Subscribe")
    }
}

watchTutorialCallback((message) => {
    console.log("Success: " + message)
}, (error) => {
    console.log(error.name + " " + error.message)
})



function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {                                                                                     
            reject({
                name: "User Left",
                message: ":("
            })
        } else if (userWatchingCatMeme) {                                                   
            reject({
                name: "User Watching Cat Meme",
                message: "WebDevSimplified < Cat"
            })
        } else {                                                                                                 
            resolve("Thumbs up and Subscribe")
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log("Success: " + message)
}).catch((error) => {
    console.log(error.name + " " + error.message)
})


/*=========================
        What we can do with promises
==========================*/

const recordVideoOne = new Promise((resolve, reject) => {
    resolve("Video 1 Recorded")
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve("Video 2 Recorded")
})

const recordVideoThree= new Promise((resolve, reject) => {
    resolve("Video 3 Recorded")
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages)
})