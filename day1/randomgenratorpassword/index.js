// **************************************************************************************************************
// Getting Elements
// **************************************************************************************************************************88
const lengthSlider = document.querySelector(".password-length input");
const options = document.querySelectorAll(".option input");
const generateBtn = document.querySelector(".generate-btn")
// *************************************************************************************************************************
// Declaring variable
// ************************************************************************************************************************************
const characters = {
lowercase: "abcdefghijklmnopqrstuvwxyz",
uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
numbers:"0123456789",
symbols:"^%$#@&*()_+~:?><}{"
}
// *************************************************************************************************************************
// making function
// ************************************************************************************************************************************
const updateSlider= ()=>{
document.querySelector(".password-length span").innerText = lengthSlider.value
}
const generatePassword = ()=> {
    let staticPassword = "",
    randomPassword = "",
    passLength = lengthSlider.value;
    console.log("Password Length", passLength)
    options.forEach((option)=>{
        if(option.checked){
            console.log("Option", option)
            staticPassword += characters[option.id]
        }
        console.log("Static Password", staticPassword)

    })
    for (let i=0; i< passLength; i++){
        console.log("Calling Loop", i)
   const random=    Math.floor(Math.random() * staticPassword.length)
   console.log("Random Password:", random)
        randomPassword += staticPassword[Math.floor(Math.random() * staticPassword.length)]
    }
    console.log("Random Password:", randomPassword)
    console.log("Static Password", staticPassword)
}
// ********************************************^***************************************************************************************************************8
// calling function
// ********************************************************************************************************************************************88888*******************

updateSlider();
// **************************************************************************************************************************************************************************88
// Making Event Listener
// *************************************************************************************************************************************************************************************8
lengthSlider.addEventListener("input", updateSlider)
generateBtn.addEventListener("click", generatePassword);