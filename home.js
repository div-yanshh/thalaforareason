let inpu = document.getElementById("text_entered");
let btn1 = document.getElementById("btn1");
let ou1 = document.getElementById("output1");
function fun1(){
    
    ou1.innerHTML= inpu.value;
    
    
    if (((inpu.value).length)==7 ){
        
        let audio = new Audio('audiotrue.mp3');
        audio.play()
        let gif = document.createElement('img');
              gif.src = 'dhoni.gif';
              gif.alt = 'Your GIF';
        
              // Get a reference to the container where you want to append the GIF
              let container = document.getElementById('gifContainer');
        
              // Append the GIF image to the container
              container.appendChild(gif);
              setTimeout(function() {
                if (audio) {
                  audio.pause();
                  audio.currentTime = 0;
                  alert('Wanna Try again! ? by refreshing');
                  location.reload();}
              }, 12000);
              
              ou1.innerHTML = '<h2>true thala fan<\h2>';
              let title =document.getElementById('title');
              title.innerHTML += '<div>\u{1F609}  \u{1F609}  thala test passed</div>';

  }
    else if(/^\d+$/.test(inpu.value)){
        const sum = (inpu.value).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        if (sum == 7){
            let audio = new Audio('audiotrue.mp3');
        audio.play()
        let gif = document.createElement('img');
              gif.src = 'dhoni.gif';
              gif.alt = 'Your GIF';
        
              // Get a reference to the container where you want to append the GIF
              let container = document.getElementById('gifContainer');
                
              // Append the GIF image to the container
              container.appendChild(gif);
              setTimeout(function() {
                if (audio) {
                  audio.pause();
                  audio.currentTime = 0;
                  alert('Wanna Try again! ? by refreshing');
                  location.reload();}
              }, 10000);
              
              ou1.innerHTML = '<h2>true thala fan<\h2>';
              let title =document.getElementById('title');
              title.append(' \u{1F609}  \u{1F609}  thala test passed');}
        else{let audio = new Audio('audiofalse.mp3');
        audio.play()
             let gif = document.createElement('img');
              gif.src = 'sad-icegif-1.gif';
              gif.alt = 'Your GIF';
        
              // Get a reference to the container where you want to append the GIF
              let container = document.getElementById('gifContainer');
        
              // Append the GIF image to the container
              container.appendChild(gif);
              setTimeout(function() {
                if (audio) {
                  audio.pause();
                  audio.currentTime = 0;
                  alert('Wanna Try again! ? by refreshing');
                  location.reload();}
              }, 10000);   
              ou1.innerHTML = '<h2>thala test failed<\h2>';
              let title =document.getElementById('title');
              title.append(' \u{1F622}  \u{1F622}  thala test failed');
            }
    }
    else{   
        let audio = new Audio('audiofalse.mp3');
        audio.play()
             let gif = document.createElement('img');
              gif.src = 'sad-icegif-1.gif';
              gif.alt = 'Your GIF';
        
              // Get a reference to the container where you want to append the GIF
              let container = document.getElementById('gifContainer');
        
              // Append the GIF image to the container
              container.appendChild(gif);
              setTimeout(function() {
                if (audio) {
                  audio.pause();
                  audio.currentTime = 0;
                  alert('Wanna Try again! ? by refreshing');
                  location.reload();}
              }, 10000);
              ou1.innerHTML = '<h2>thala test failed<\h2>';
              let title =document.getElementById('title');
              title.append(' \u{1F622}  \u{1F622}  thala test failed');}
            }
        
    
btn1.addEventListener('click',fun1) 
inpu.addEventListener('keypress', function(event) {
  // Check if Enter key (key code 13) is pressed
  if (event.keyCode === 13) {
    fun1(); // Call fun1() when Enter key is pressed
  }
});