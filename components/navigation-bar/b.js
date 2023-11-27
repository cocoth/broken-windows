// "use client"
// const Cek = ()=>{
//     function getBrowser(i){
//         const BrowserName={
//             chrome: 'chrome',
//             firefox: 'firefox',
//             edge: 'edge'
//         };
//         return BrowserName[i]||'not Definied';
//     }
//     let browser = getBrowser(
//         ()=>{
//             const data = window.navigator.userAgent.toLocaleLowerCase()
//             if (data.includes(getBrowser(data))) {
//                 console.log(browser)
//             }
//         }
//     )

// }
// export default Cek

// for(let z=0; z<args; z++){
//     if (i %2 ===1) {
//         console.log("maju: "+i)
//     } if (i %2 ===0) {
//         console.log("maju: "+i);
//     }
//     i+=1
// }

let i = 1 
function move() {
    if (i %2 ===1) {
        console.log("maju: "+i)
    } if (i %2 ===0) {
        console.log("maju: "+i);
    }
    i+=1
}
function putBeeper(){
    console.log("beep");
}
function turnLeft() {
    console.log("kiri");
}
function turnRight() {
    console.log("kanan");
}




function straightForward(){
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
}
function straightForward2(){
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
}
function moveLeft() {
    turnLeft();
    move();
    turnLeft();
}
function moveRight() {
    turnRight();
    move();
    turnRight();
}

function main(){
    straightForward(); 
    moveLeft();
    straightForward2();
    moveRight();
    straightForward(); 
    moveLeft();
    straightForward2();
    moveRight();
    straightForward(); 

}
main();