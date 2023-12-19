let inpu = document.getElementById("text_entered");
let btn1 = document.getElementById("btn1");
let ou1 = document.getElementById("output1");
function resetPage() {
    // Clear input field
    inpu.value = '';
    
    // Clear output display
    ou1.innerHTML = '';
  
    // Stop audio if it's playing
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  
    // Remove any displayed GIFs
    while (gifContainer.firstChild) {
      gifContainer.removeChild(gifContainer.firstChild);
    }
  }
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
              title.append(' \u{1F609}  \u{1F609}  thala test passed');

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
              }, 7000);
              ou1.innerHTML = 'true thala fan'}
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
              }, 7000);   
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
              }, 7000);}
            }
        
    
btn1.addEventListener('click',fun1) 
