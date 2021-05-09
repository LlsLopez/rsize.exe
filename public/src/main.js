console.log("mains");
db.collection('Exercises').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        let exercise = doc.data();
        ex2 = exercise.type;  
        console.log(ex2);
    })
} );

let exercise = db.collection("Exercises");

console.log("h");