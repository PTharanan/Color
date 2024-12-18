const butn = document.querySelector("button")
const color = document.querySelector(".color_div")
const te_color = document.querySelector(".color_name")
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"]

butn.addEventListener("click", () => {
    let hex_val = "#"
    for(i=0; i < 6; i++){
        hex_val += ram()   
    }
    color.style.backgroundColor = hex_val 
    te_color.style.color = hex_val 
    te_color.innerHTML = hex_val   
})


document.addEventListener("keypress", function(event){
    if(event.key === 'Enter'){
        event.preventDefault()
        butn.click()
    }
})

function ram(){
    let ran = Math.floor(Math.random()*15)
    return(hex[ran])
}