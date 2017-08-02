<template>
  <div class="content praiseworthy">
    <figure class="image">
      <img v-img src="../assets/praiseworthy/title.png">
    </figure>
    <div class="level">
      <div class="level-item has-text-centered">
        <!-- <figure class="image"><img v-img src="../assets/praiseworthy/hi_fi_mobile.png" alt="Lo Fi Prototype Mobile"></figure> -->
        <iframe src="https://marvelapp.com/1df81g2?emb=1" width="300" height="598" allowtransparency="true" frameborder="0"></iframe>
        <!-- <iframe src="https://marvelapp.com/1df81g2/screen/24832762" width="300" height="598" allowtransparency="true" frameborder="0"></iframe> -->
        
      </div>
    </div>
    <br>
    <div class="level">
      <div class="level-item has-text-centered">
        <!-- <figure class="image"><img v-img src="../assets/praiseworthy/hi_fi_tablet.png" alt="Lo Fi Prototype Tablet"></figure> -->
        <iframe src="https://marvelapp.com/31g34hd?emb=1" width="948" height="676" allowtransparency="true" frameborder="0"></iframe>
      </div>
    </div>
    
    
    <div class="section">
      <h1 id="Praiseworthy-Project-Intro" class="title has-text-centered is-2">Project Intro</h1>
      <article>
        <h2 class="title is-4">The Company</h2>
        <p>
       Praiseworthy is an Individual Feedback Management platform, working with 1300+ SMB locations to help local businesses improve employee training one interaction at a time. Businesses can attain real feedback from their own customers, allowing their business to act upon it immediately.
        </p>
      </article>
      <br><br>
      <article>
        <h2 class="title is-4">The Opportunity</h2>
        <p>
        <strong>Platform:</strong> Responsive Web Interface<br>
        Redesign Dashboard based on the concept and value of Praiseworthy, so users can quickly browse all the information they use normally and take appropriate actions. Also be able to increase users’ participation and efficiency of Praiseworthy.
        </p>
      </article>
      <br><br>
      <article>
        <h2 class="title is-4">My Role</h2>
        <ul>
          <li>Created user survey questions</li>
          <li>Conducted user research, then analyzed and collated the research results</li>
          <li>Highly involved in the low-fidelity (Lo-Fi) design process</li>
          <li>Designed responsive Web pages</li>
        </ul>
      </article>
    </div>

    <div class="section">
          <article>
            <h1 id="Praiseworthy-Design-Process" class="title has-text-centered is-2">Design Process</h1>
            <figure class="image">
              <img v-img src="../assets/praiseworthy/design_process.png">
            </figure>
            <!-- <div class="columns">
              <div class="column">
                <h2 class="title is-4">Research</h2>
                <ul>
                  <li>Understanding Product</li>
                  <li>User Research</li>
                </ul>
              </div>
              <div class="column">
                <h2 class="title is-4">Ideation</h2>
                <ul>
                  <li>Design Studio</li>
                </ul>
              </div>
              <div class="column">
                <h2 class="title is-4">Lo-Fi Phase</h2>
                <ul>
                  <li>Lo-Fi WireFraming</li>
                  <li>Lo-Fi Validation</li>
                  <li>Lo-Fi Prototype</li>
                  <li>Style Guide</li>
                </ul>
              </div>
              <div class="column">
                <h2 class="title is-4">Hi-Fi Phase</h2>
                <ul>
                  <li>Hi-Fi Mockup</li>
                  <li>Hi-Fi Prototype</li>
                  <li>Final Deliveries</li>
                </ul>
              </div>
            </div> -->
          </article>

          <article>
            <h2 class="title is-4">Research</h2>
            <h3 class="title is-5">Understanding the Product</h3>
            <p>The Praiseworthy team showed us the product value that they have been using, but they believe that the existing product design does not illustrate their initial concepts well. So, they hope our re-design can help them  achieve their goal.    
            </p>
            <div class="columns">
              <div class="column is-half is-offset-one-quarter">
                <img v-img src="../assets/praiseworthy/product_value.png">
              </div>
            </div>
            <br>

            <h3 class="title is-5">Understanding Users</h3>
            <p>Praiseworthy has 3 main user groups:</p>
            <ul>
              <li><strong>Associate</strong> - Mostly work on the floor, directly interfacing with customers;</li>
              <li><strong>Store managers</strong> - Mostly work on the floor, manage 5 to 10 employees, and work closely with associates;</li>
              <li><strong>District/Regional Managers</strong> - Manage several stores, mostly know how associates perform based on reports.</li>
            </ul>
            <p>We interviewed both current & potential uses of Praiseworthy. Include Associates, Store Managers and Upper Level managers.  From <strong>6 current users</strong>. we better understand what the pain points during their daily work, and what kind of way thieving are using for managing.  From <strong>8 potential users</strong>, we better understand their insights of Praiseworthy and what we can do to let them be more benefit when using Praiseworthy.
            </p>
            <br>

            <h3 class="title is-5">Top Findings—Associates</h3>
            <ul>
              <li>They log in when at work, and seeing Praiseworthy <strong>feedback</strong> makes their day</li>
              <li>“Nothing is more important than making customers happy”</li>
              <li><strong>Ranking</strong> is important to them</li>
              <li>They are not sure what triggers alerts, but when a <strong>negative alert</strong> is received, their manager will talk to them</li>
            </ul>
            <br>
            
            <h3 class="title is-5">Top Findings—Managers</h3>
            <ul>
              <li>
                <strong>NPS, Praise Power, and CSAT</strong> are the most important metrics
                <ul>
                  <li>They aim to achieve an average of 85-90%</li>
                </ul>
              </li>
              <li>Log in at least once a week and <strong>whenever there is an alert</strong></li>
              <li>Focus on <strong>bottom-performing employees/stores</strong></li>
              <li>Expect <strong>alerts to close within 24-48 hours</strong></li>
              <li><strong>Important metrics at a glance</strong></li>
              </li>
              <li>Frequent use information
                <ul>
                  <li>Ability to drill down into more <strong>detailed data</strong></li>
                  <li><strong>Trends overtime</strong></li>
                  <li><strong>Ranking</strong> of employees and stores</li>
                  <li><strong>Response rate</strong></li>
                  <li><strong>Information on alerts</strong></li>
                </ul>
              </li>
            </ul>
            <br>
            <p>From all the findings, we understood which metrics are most important to Praiseworthy users, as well as their habits of using this product.</p>
            <p><strong>Design Focus:</strong> Overall data dashboard, Praise Power, NPS, ranking, alerts, feedback, response rate.</p>
          </article>
          <br><br><br>
          <article>
            <h2 class="title is-4">Design Studio</h2>
            <p>After understanding the product and the users, we all work together in a design studio to brainstorm as many ideas as possible. Based on the outcomes of this design studio, we can move to create the lo-fi wireframes.
            </p>
            <br>

            <div class="columns">
              <div class="column">
                <figure class="image"><img v-img src="../assets/praiseworthy/praiseworthy_design_studio_1.jpg" alt="Design Studio"></figure>
              </div>
              <div class="column">
                <figure class="image"><img v-img src="../assets/praiseworthy/praiseworthy_design_studio_2.jpg" alt="Design Studio"></figure>
              </div>
              <div class="column">
                <figure class="image"><img v-img src="../assets/praiseworthy/praiseworthy_design_studio_3.jpg" alt="Design Studio"></figure>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <ul>
                  <li>Individual ideate on wireframes based on learning from user interviews and competitor news platforms</li>
                  <li>2 rounds of presenting ideas to team and get feedback</li>
                </ul>
              </div>
              <div class="column">
                <ul>
                  <li>Converge Ideas</li>
                  <li>White Board UI sketches</li>
                  <li>Integrate on wireframes and consolidate into master sketch files</li>
                </ul>
                <figure class="image"><img v-img src="../assets/praiseworthy/praiseworthy_design_studio_4.jpg" alt="Design Studio"></figure>
              </div>
            </div>
          </article>
        </div>
         <br>
    
    <div class="section">
          <h1 id="Praiseworthy-LoFi-Phase" class="title has-text-centered is-2">Lo-Fi Phase</h1>
          <br>
           <br>

          <article>
            <h2 class="title is-4">Lo-Fi Wireframes</h2>
            <br>
            <div class="columns">
              <div class="column is-5 is-offset-1">
                <figure class="image"><img v-img src="../assets/praiseworthy/lo_fi_1.jpg" alt="Lo-Fi"></figure>
              </div>
              <div class="column is-5">
                <figure class="image"><img v-img src="../assets/praiseworthy/lo_fi_2.jpg" alt="Lo-Fi"></figure>
              </div>
            </div>
            <p>
            I was highly involved in the Lo-Fi phase. We compared and organized all the ideas we generated from the design studio, combined with the product value again to produce the Lo-Fi wire framing. What we obtained from the design studio more likely decided the main direction we could proceed, but how to design each component and all the details required more in depth thinking to arrive at the final decisions.  
            </p>
            <br>
            <br>
            <p class="has-text-centered"><strong>Original Home Page</strong></p>
            <figure class="image lo-fi-before"><img v-img src="../assets/praiseworthy/lo_fi_before_2.png" alt="Original Home Page"></figure>
            <br>
            <p class="has-text-centered"><strong>Redsigned Home Page</strong></p>
            <figure class="image"><img v-img src="../assets/praiseworthy/lo_fi_after_2.png" alt="Redesigned Home Page"></figure>

            <p class="has-text-centered">Redesigned <strong>Desktop Pages</strong></p>
            <div class="columns">
              <div class="column">
                <figure class="image"><img v-img src="../assets/praiseworthy/lo_fi_desktop_rankings.png" alt="Mobile Overall Health Page"></figure>
              </div>
              <div class="column">
                <figure class="image"><img v-img src="../assets/praiseworthy/lo_fi_desktop_alerts.png" alt="Mobile Rankings Page"></figure>
              </div>
              <div class="column">
                <figure class="image"><img v-img src="../assets/praiseworthy/lo_fi_mobile_3_alerts.png" alt="Mobile Alerts Page"></figure>
              </div>
              <div class="column">
                <figure class="image"><img v-img src="../assets/praiseworthy/lo_fi_desktop_employee.png" alt="Mobile Employees Page"></figure>
              </div>
              <div class="column">
                <figure class="image"><img v-img src="../assets/praiseworthy/lo_fi_desktop_locations.png" alt="Mobile Locations"></figure>
              </div>
            </div>

            <p class="has-text-centered">Redesigned <strong>Mobile Pages</strong></p>
            <div class="columns">
              <div class="column">
                <figure class="image"><img v-img src="../assets/praiseworthy/lo_fi_mobile_1_overall_health.png" alt="Mobile Overall Health Page"></figure>
              </div>
              <div class="column">
                <figure class="image"><img v-img src="../assets/praiseworthy/lo_fi_mobile_2_rankings.png" alt="Mobile Rankings Page"></figure>
              </div>
              <div class="column">
                <figure class="image"><img v-img src="../assets/praiseworthy/lo_fi_mobile_3_alerts.png" alt="Mobile Alerts Page"></figure>
              </div>
              <div class="column">
                <figure class="image"><img v-img src="../assets/praiseworthy/lo_fi_mobile_4_employees.png" alt="Mobile Employees Page"></figure>
              </div>
              <div class="column">
                <figure class="image"><img v-img src="../assets/praiseworthy/lo_fi_mobile_5_locations.png" alt="Mobile Locations"></figure>
              </div>
              <div class="column">
                <figure class="image"><img v-img src="../assets/praiseworthy/lo_fi_mobile_6_profile.png" alt="Mobile Employee Profile Page"></figure>
              </div>
            </div>
          </article>
          <br>
          <br>
          <br>

          <article>
            <h2 class="title is-4">Lo-Fi Prototypes</h2>
            <br>
            <div class="level">
              <div class="level-item has-text-centered">
                <!-- <figure class="image"><img v-img src="../assets/praiseworthy/lo_fi_prototypes_mobile.png" alt="Lo Fi Prototype Mobile"></figure> -->
                <iframe width="438" height="930" src="https://invis.io/5JA1GOOZR" frameborder="0" allowfullscreen=""></iframe>
              </div>
            </div>
            <br>
            <div class="level">
              <div class="level-item has-text-centered">
                <!-- <figure class="image"><img v-img src="../assets/praiseworthy/lo_fi_prototypes_tablet.png" alt="Lo Fi Prototype Tablet"></figure> -->
                <iframe src="https://marvelapp.com/3d4cca8?emb=1" width="948" height="676" allowtransparency="true" frameborder="0"></iframe>
              </div>
            </div>
          </article>
          <br><br><br><br>
          <article>
            <h2 class="title is-4">Style Guide</h2>
            <p>While we were working on the Lo-Fi design, there was another team working on the style guide.</p><br>
            <div class="columns">
              <div class="column">
                <figure class="image"><img v-img src="../assets/praiseworthy/style_guide_1.png" alt="Style Guides"></figure>
              </div>
              <div class="column">
                <figure class="image"><img v-img src="../assets/praiseworthy/style_guide_2.png" alt="Style Guides"></figure>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <figure class="image"><img v-img src="../assets/praiseworthy/style_guide_3.png" alt="Style Guides"></figure>
              </div>
              <div class="column">
                <figure class="image"><img v-img src="../assets/praiseworthy/style_guide_4.png" alt="Style Guides"></figure>
              </div>
            </div>
          </article>
        </div>
    
    <div class="section">
          <h1 id="Praiseworthy-HiFi-Phase" class="title has-text-centered is-2">Hi-Fi Phase</h1><br>
          <p>In this project, I was highly involved in the Lo-Fi phase. However, in the high-fidelity (Hi-Fi) phase, my role was more about providing critiques. I helped to offer ideas and refine the final deliverables. </p><br>
          <article>
            <h2 class="title is-4">Final Prototypes</h2>
            <div class="level">
              <div class="level-item has-text-centered">
                <figure class="image"><img v-img src="../assets/praiseworthy/hi_fi_mobile.png" alt="Lo Fi Prototype Mobile"></figure>
                <!-- <iframe src="https://marvelapp.com/1df81g2?emb=1" width="300" height="598" allowtransparency="true" frameborder="0"></iframe> -->
              </div>
            </div>
            <br>
            <div class="level">
              <div class="level-item has-text-centered">
                <figure class="image"><img v-img src="../assets/praiseworthy/hi_fi_tablet.png" alt="Lo Fi Prototype Tablet"></figure>
                <!-- <iframe src="https://marvelapp.com/31g34hd?emb=1" width="948" height="676" allowtransparency="true" frameborder="0"></iframe> -->
              </div>
            </div>
          </article>
        </div>

  </div>
</template>

<style lang="scss">
  .praiseworthy {
    .lo-fi-before {
      margin-top: -113px;
      margin-bottom: -100px;
    }
  }
</style>