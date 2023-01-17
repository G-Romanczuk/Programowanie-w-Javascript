

    let btn = document.getElementById("btn");
    btn.addEventListener("click", () => { 
        let quantity = document.getElementById("quantity").value;
        calculate(quantity) 
    })
    
   function calculate(quantity){
    const t0 = performance.now();

    console.log(quantity);
    const asyncAdd = async (a, b) => {
        if (typeof a !== "number" || typeof b !== "number") {
          return Promise.reject("Argumenty muszą mieć typ number!");
        }
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(a + b)
          }, 100);
        });
    };
    const ar = [];
    let sum = 0;
    arguments();
     async function arguments() {
         

        for (let i = 0; i < quantity; i++) {
            ar.push(i)           
        }

        for (let item of ar) {
            sum = await asyncAdd(sum, item)
            }
            console.log(sum) 
            const t1 = performance.now();   
            console.log(` took ${t1 - t0} milliseconds.`);
      };
   }
  
   
   
     
      


