const apps = {
  internet: {
    title: "~ my_personal_site.exe ~",
    render() {
      return `
        <!-- inputs -->
        <input type="radio" name="tab" id="tab1" checked>
        <input type="radio" name="tab" id="tab2">

        <!-- labels -->
        <div class="tabs">
          <label for="tab1">Home</label>
          <label for="tab2">Projects</label>
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
                <h3>Portfolio Website</h3>
                <p>Personal site to get to know me and my work!</p>
                <a href="#">Live Demo</a>
              </div>
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
          <div>UnderConstruction</div>
      
      `;
    }
  }

};