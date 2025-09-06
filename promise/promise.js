
// new Promise((resolve, reject) => reject()).then(() => console.log("promise resolved")).catch(() => console.log("promise rejected")).catch(() => console.log("promise rejected"))


let saveResolve, saveReject;
const myPromise = new Promise((resolve, reject) => {
    saveResolve = resolve;
    saveReject = reject;
})

myPromise.then((value) => console.log("Promise resolved", value)).catch((err) => console.log("Promise rejected", err))




setTimeout(()=> {
    // saveResolve("I am resolved")
    saveReject("I am rejected")
},3000)