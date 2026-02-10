//Synchronous

// console.log("step 1 done")
// console.log("step 2 done")
// console.log("step 3 done")

//asynch
// console.log("step 1 done")
// setTimeout(()=>{
//     console.log("step 2 done")
// },2000)
// console.log("step 3 done")

//callback
// function HomeWork(subject, callback){
   
//     setTimeout(()=>console.log("Subject " + subject + " homework finished"), 2000)

//      callback()
// }
// function finished(){
//     console.log("Homework finished Completely")
// }
// HomeWork("Maths", finished)

//call backhell (with triangle primid shape )
// setTimeout(()=>{
//     console.log("step 1 done")
//     setTimeout(()=>{
//         console.log("step 2 done")
//         setTimeout(()=>{
//             console.log("step 3 done")
//         },2000)
//     },2000)
// },3000)

// function BoilWater(callback){
//     setTimeout(()=>{
//         console.log("Boiling the Water")
//         callback();
//     }, 5000)
// }
// function AddNoodles(callback){
//     setTimeout(()=>{
//         console.log("Adding Noodles ")
//         callback();
//     }, 2000)
// }
// function AddMasala(callback){
//     setTimeout(()=>{
//         console.log("Adding Masala ")
//         callback();
//     }, 2000)
// }
// function Serve(){
//     setTimeout(()=>{
//         console.log("Maggie Served to Everyone")
//     }, 2000)
// }
// BoilWater(()=>{
//     AddNoodles(()=>{
//         AddMasala(()=>{
//             Serve()
//         })
//     })
// })


function find_car_key(callback){
    setTimeout(()=>{
        console.log("founded the car key, we can go now")
        callback()
    },5000)
}
function car_key_insert(callback){
    setTimeout(()=>{
        console.log("there is our car enter and inserted the key")
        callback()
    },2000)
}
function start_engine(callback){
    setTimeout(() => {
        console.log("the car engine is started now ") 
        callback()
    }, 2000);
}

function Accelerator_pressed(callback){
    setTimeout(()=>{
        console.log("Accelerator pressed the start moving")
        callback()
    },2000)
}
function reach_end_point(){
    setTimeout(()=>{
        console.log("we have reached the destination ")
    },3000)
}

find_car_key(()=>{
    car_key_insert(()=>{
        start_engine(()=>{
            Accelerator_pressed(()=>{
                reach_end_point()
            })
        })
    })
})

