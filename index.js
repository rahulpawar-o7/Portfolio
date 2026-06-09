
document.addEventListener("DOMContentLoaded", () => {

    const profileImg = document.getElementById('profile-img');
    let clickCount = 0;
    
    if(profileImg) {
        profileImg.addEventListener('click', () => {
            clickCount++;
            
            
            if(clickCount === 3) {
                document.body.classList.toggle('hacker-mode'); 
                clickCount = 0; 
            }
            
           
            setTimeout(() => {
                clickCount = 0;
            }, 3000);
        });
    }


 
    const textToType = "Initializing sequence...\nLoading React components... 100%\nConnecting to PostgreSQL database... Success\nRunning Express.js server on port 3000...\nAccess Granted: Full-Stack Developer Mode Engaged.";
    const typingElement = document.getElementById('typing-text');
    const autoCursor = document.getElementById('auto-cursor');
    const interactiveLine = document.getElementById('interactive-line');
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');
    const terminalBody = document.getElementById('terminal-body');
    let index = 0;

    // A. Automatic Typing Function
    function typeTerminal() {
        if(index < textToType.length) {
            if(textToType.charAt(index) === '\n') {
                typingElement.innerHTML += '<br><span class="prompt" style="color: #3b82f6; font-weight: bold;">guest@rahul-portfolio:~$</span> ';
            } else {
                typingElement.innerHTML += textToType.charAt(index);
            }
            index++;
            
            
            terminalBody.scrollTop = terminalBody.scrollHeight;
            
            setTimeout(typeTerminal, 40); 
        } else {
          
            if(autoCursor) autoCursor.style.display = 'none'; 
            if(interactiveLine) interactiveLine.style.display = 'flex'; 
            if(terminalInput) terminalInput.focus(); 
            
            terminalOutput.innerHTML += '<p style="color: #ffbd2e; margin-top: 15px; margin-bottom: 10px;">Type \'help\' to see available commands.</p>';
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    }
    
  
    const terminalSection = document.getElementById('terminal-section');
    if(terminalSection && typingElement) {
        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting) {
                setTimeout(typeTerminal, 500); 
                observer.disconnect(); 
            }
        }, { threshold: 0.5 }); 
        observer.observe(terminalSection);
    }

    if(terminalInput) {
        terminalInput.addEventListener('keydown', function(event) {
            if(event.key === 'Enter') {
                const command = this.value.trim().toLowerCase();
                let response = '';

                // Commands ka logic
                if(command === 'help') {
                    response = "Available commands: <br> -> <b>about</b>: Know who I am <br> -> <b>skills</b>: View my tech stack <br> -> <b>contact</b>: Get my email <br> -> <b>clear</b>: Clear the terminal";
                } 
                else if (command === 'about') {
                    response = "Hi, I'm Rahul Pawar! A 2nd-year CS engineering student at Dadaji College, passionate about Full-Stack Web Development.";
                } 
                else if (command === 'skills') {
                    response = "[Frontend]: HTML, CSS, JS, React <br> [Backend]: Node.js, Express, REST APIs <br> [Database]: PostgreSQL, SQLite";
                } 
                else if (command === 'contact') {
                    response = "Email me at: pawar.rahuljii@gmail.com";
                } 
                else if (command === 'clear') {
                 
                    typingElement.innerHTML = '';
                    const extraMessages = terminalOutput.querySelectorAll('p:not(:first-child)');
                    extraMessages.forEach(msg => msg.remove());
                    this.value = '';
                    return;
                } 
                else if (command === '') {
                    response = ""; 
                } 
                else {
                    response = `bash: ${command}: command not found. Type 'help' for options.`;
                }

                if(command !== '') {
                    terminalOutput.innerHTML += `<p><span class="prompt" style="color: #3b82f6; font-weight: bold;">guest@rahul-portfolio:~$</span> <span style="color: #10b981;">${command}</span></p>`;
                    if(response) {
                        terminalOutput.innerHTML += `<p style="color: #a78bfa; margin-bottom: 10px;">${response}</p>`;
                    }
                }
                
                this.value = ''; 
                terminalBody.scrollTop = terminalBody.scrollHeight;
            }
        });
    }

   
   
    const githubUsername = "rahulpawar-o7"; 
    
    const repoCountEl = document.getElementById('repo-count');
    const followerCountEl = document.getElementById('follower-count');

    if(repoCountEl && followerCountEl) {
     
        fetch(`https://api.github.com/users/${githubUsername}`)
            .then(response => {
                if(!response.ok) {
                    throw new Error("API call failed");
                }
                return response.json();
            })
            .then(data => {
                
                repoCountEl.innerText = data.public_repos !== undefined ? data.public_repos : "N/A";
                followerCountEl.innerText = data.followers !== undefined ? data.followers : "N/A";
            })
            .catch(error => {
                repoCountEl.innerText = "Error";
                followerCountEl.innerText = "Error";
                console.error("GitHub API Data Fetch karne mein problem aayi:", error);
            });
    }
   
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}



    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".project-card, .skill-category, .stat-box"), {
            max: 15,            
            speed: 500,         
            glare: true,        
            "max-glare": 0.6,   
            scale: 1.02       
        });
    }



    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#2563eb" }, /* Professional Blue Color */
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": false },
                "size": { "value": 3, "random": true },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#2563eb", /* Blue Connecting Lines */
                    "opacity": 0.4,
                    "width": 1.2
                },
                "move": {
                    "enable": true,
                    "speed": 2, /* Floating speed */
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" }, 
                    "onclick": { "enable": true, "mode": "push" }, 
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
                    "push": { "particles_nb": 4 }
                }
            },
            "retina_detect": true
        });
    }


});
