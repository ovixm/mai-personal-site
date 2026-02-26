const apps = {
  internet: {
    title: "~ my_personal_site.exe ~",
    render() {
      return `
        <!-- inputs -->
        <input type="radio" name="tab" id="tab1" checked>
        <input type="radio" name="tab" id="tab2">
        <input type="radio" name="tab" id="tab3">

        <!-- labels -->
        <div class="tabs">
          <label for="tab1">Home</label>
          <label for="tab2">Projects</label>
          <label for="tab3">Art</label>
        </div>

        <div class="content">

          <!-- Hero Section -->
          <div class="tab-content" id="content1">
            <div class="hero">
              <h2> Welcome to MaiSpace </h2>
              <img src="img/pfp.jpg" alt="Profile Picture" class="pfp" title="Profile Picture of Cat">
              <p> learn more about me! </p>
            </div>
            
            <!-- Bio Section -->
            <div class="bio">
              <h3> About Me </h3>
              <p> I'm Mai! I'm a current university student looking to become a game developer. I love playing many types of games and I hope one day to make one that can inspire others! o((>ω< ))o </p>
            </div></br>
            
            <!-- Skill Section -->
            <div class="skills">
              <h3> Skills </h3>
              <div class="icon-links">
                <img src="img/java.png" alt="Java Icon" title="Java Icon">
                <img src="img/c.png" alt="C Icon" title="C Icon">
                <img src="img/csharp.png" alt="C Sharp Icon" title="C Sharp Icon">
                <img src="img/html.png" alt="HTML Icon" title="HTML Icon">
              </div>
            </div></br>

            <div class="contact">
              <h3> Contact Me! </h3>
              <div class="icon-links">
                <a href="mailto:mt.vu555@gmail.com">
                  <img src="img/email.png" alt="Email Icon" title="Email Icon">
                </a>
                  
                <a href="https://github.com/ovixm">
                  <img src="img/github.png" alt="GitHub Icon" title="GitHub Icon">
                </a>
              </div>
              
            </div>

          </div>
        

          <!-- Projects Section -->
          <div class="tab-content" id="content2">
            <h2> Projects </h2></br>

            <div class="projects">
              <div class="project-card">
                <h3>shinwa.exe</h3>
                <p>A horror game inspired by Japanese mythology (currently in the works)</p>
              </div>

              <div class="project-card">
                <h3>
                <a href="https://ovixm.github.io/05-charity-water-game-prototype/">
                charity: water Game</a>
                </h3>
                <p>A resource management game to raise awareness for clean water access.</p>
              </div>

              <div class="project-card">
                <h3>
                <a href="https://ovixm.github.io/08-prj-loreal-chatbot/">
                L'Oreal Chatbot</a>
                </h3>
                <p>A L'Oreal Chatbot that helps users with any questions related to beauty and L'Oreal products (OpenAI API Key has expired)</p>
              </div>

              <div class="project-card">
                <h3>Portfolio Website</h3>
                <p>Personal site to get to know me and my work!</p>
                <a href="#">Live Demo</a>
              </div>
            </div>
            
          </div>

          <div class="tab-content" id="content3">

              <h2> Art </h2></br>
              <div class="projects">
              <div class="project-card" id="image">
                <h3>Haruki's Room</h3>
                <img src="img/Haruki'sRoom.png" alt="3D Environment of Haruki's Room" style="width: 100%; height: auto; border: 2px solid #000;" title="3D Environment of Haruki's Room">
                <p>Prototype of Haruki's Room in the game "shinwa.exe"</p>
              </div>

            </div>

        </div>

        <!-- Footer -->
        <footer class="footer">
          &copy; 2025 Mai Trinh Vu.
        </footer>
      `;
    },
    cloneContent: true
  },

  music: {
    title: "Music",
    render() { 
      return `
          <div class="music">Under Construction: Currently waiting for Spotify API to be fixed.</div>
      `;
    }
  },

  error: {
    title: "Error",
    render() { 
      return `
          <div class="error">Error! Only one instance of this app can be opened at a time.</div>
      `;
    }
  }

};