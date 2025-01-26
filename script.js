document.getElementById('submit').addEventListener("click",()=>{
    const arrayInput = document.getElementById('array').value;
    const start = parseInt(document.getElementById('starting').value);
    const end = parseInt(document.getElementById("ending").value);

    const array = arrayInput.split(",").map(Number);
    const missingNumbers = [];

    for(let i = start ; i <= end ; i++){
        if(!array.includes(i)){
            missingNumbers.push(i);
        }
    }

    const result = document.getElementById("result");
    result.textContent = `Missing numbers: ${missingNumbers.join(", ")}`;


    // console.log(missingNumbers);
    // console.log(array);
    // console.log(end);
})