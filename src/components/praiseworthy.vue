<template>
  <div class="content">
    <figure class="image">
      <!-- <img src="http://bulma.io/images/placeholders/128x128.png"> -->
      Missing Banner Image
    </figure>
    
    <div>
      <h1 id="Praiseworthy-Project-Intro" class="title has-text-centered is-2">Project Intro</h1>
      <article>
        <h2 class="title is-4">The Company</h2>
        <p>
        Praiseworthy is an Individual Feedback Management platfrom. Working with 1300+ SMB locations to help local business improve employee training one interaction at a time. Businesses can get real feedback from their own customers, allowing their business to act on it immediately
        </p>
      </article>
      <br><br>
      <article>
        <h2 class="title is-4">The Opportunity</h2>
        <p>
        Redesign Dashboard based on the concept and value of Praiseworthy, so users can quickly browse all the information they use normally and take appropriate actions. Also be able to increase users’ participation and efficiency of Praiseworthy.
        </p>
      </article>
      <br><br>
      <article>
        <h2 class="title is-4">My Role</h2>
        <ul>
          <li>Create user survey questions</li>
          <li>Conduct user research, then analyze and collate research results</li>
          <li>Highly involved in the Lo-Fi design process</li>
          <li>Design responsive Web pages</li>
        </ul>
      </article>
    </div>

    <div>
          <article>
            <h1 id="Praiseworthy-Design-Process" class="title has-text-centered is-2">Design Process</h1>
            <figure class="image">
              <img src="../assets/praiseworthy/design_process_banner.png">
            </figure>
            <div class="columns">
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
            </div>
          </article>

          <article>
            <h2 class="title is-4">Research</h2>
            <h3 class="title is-5">Understanding Product</h3>
            <p>Praiseworthy team showed us the concept and product value that they have been insisting. But they think the existing rpduct design did not show these ideas. So they hope our redeisng can help them achieve their goal.    
            </p>
            <div class="level">
              <div class="level-item has-text-centered">
                <img src="http://bulma.io/images/placeholders/480x480.png">
              </div>
            </div>
            <br>

            <h3 class="title is-5">Understanding Users</h3>
            <p>Praiseworthy have 3 main user group</p>
            <ul>
              <li><strong>Associate</strong> - Mostly work on the floor, directly facing customers</li>
              <li><strong>Store managers</strong> - Mostly work on the floor, managing around 10 employees, work closely with associates</li>
              <li><strong>District/Regional Managers</strong> - Managing several stores, mostly know how associates performed from reports</li>
            </ul>
            <p>We interviewed both current & potential uses of Praiseworthy. Include Associates, Store Managers and Upper Level managers.  From <strong>6 current users</strong>. we better understand what the pain points during their daily work, and what kind of way thieving are using for managing.  From <strong>8 potential users</strong>, we better understand their insights of Praiseworthy and what we can do to let them be more benefit when using Praiseworthy 
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
                <strong>NPS, Praise Power, and CSAT</strong> most important metric
                <ul>
                  <li>They aim to achieve an average of 85-90%</li>
                </ul>
              </li>
              <li>Log in at least once a week and whenever there is an alert</li>
              <li>Focus on bottom-performing employees/stores</li>
              <li>Expect <strong>alerts to close within 24-48 hours</strong></li>
              <li>Want to see the following on a dashboard:
                <ul>
                  <li><strong>Important metrics at a glance</strong></li>
                </ul>
              </li>
              <li>Frequent use information
                <ul>
                  <li>Ability to drill down into more detailed data</li>
                  <li><strong>Trends overtime</strong></li>
                  <li><strong>Ranking</strong> of employees and stores</li>
                  <li><strong>Response rate</strong></li>
                  <li><strong>Information on alerts</strong></li>
                </ul>
              </li>
            </ul>
            <br>
            <p>From all the findings, we understood which metrics are most important to Praiseworthy users, also their habbit of using this product.</p>
            <p><strong>Design Focus:</strong> Overall Data dashboard, Praise Power, NPS, Ranking, Alerts, Feedbacks, Respons Rate</p>
          </article>
          <br><br><br>
          <article>
            <h2 class="title is-4">Design Studio</h2>
            <p>After understanding the product and users, we all work together in a Design Studio to brainstorm as many as idea as possible. Base on outcomes of this Design Studio, we would be able to move to create the lo-fi wireframes.
            </p>
            <br>
            <div class="columns is-gapless">
              <div class="column" :style="{ height: '25px', 'background-color': '#314054'}"></div>
              <div class="column" :style="{ height: '25px', 'background-color': '#F89E20'}"></div>
            </div>
            <div class="columns">
              <div class="column">
                <figure class="image"><img src="../assets/praiseworthy/design_studio_1.jpg" alt="Design Studio"></figure>
              </div>
              <div class="column">
                <figure class="image"><img src="../assets/praiseworthy/design_studio_2.jpg" alt="Design Studio"></figure>
              </div>
              <div class="column">
                <figure class="image"><img src="../assets/praiseworthy/design_studio_3.jpg" alt="Design Studio"></figure>
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
              </div>
            </div>
            <figure class="image"><img src="../assets/praiseworthy/design_studio_4.jpg" alt="Design Studio"></figure>
          </article>
        </div>
    
    <div>
          <h1 id="Praiseworthy-LoFi-Phase" class="title has-text-centered is-2">Lo-Fi Phase</h1>

          <article>
            <h2 class="title is-4">Lo-Fi Wireframes</h2>
            <div class="columns">
              <div class="column is-one-quarter is-offset-one-quarter">
                <figure class="image"><img src="../assets/praiseworthy/lo_fi_1.jpg" alt="Lo-Fi"></figure>
              </div>
              <div class="column is-one-quarter">
                <figure class="image"><img src="../assets/praiseworthy/lo_fi_2.jpg" alt="Lo-Fi"></figure>
              </div>
            </div>
            <p>
            I was highly involved in Lo-Fi Phase (total 3 designers). We compared and organized all the ideas we generated from the Design Studio, combine with the product value again to produce the lo-fi wire framing. What we get from Design Studio more like decided the main direction we would go, but how to design each components and all the details, we need to do more deep thinking to make the final decisions. 
            </p>
            <br>
            <p class="has-text-centered"><strong>Original Home Page</strong></p>
            <figure class="image"><img src="../assets/praiseworthy/lo_fi_before.png" alt="Original Home Page"></figure>
            <p class="has-text-centered"><strong>Redsigned Home Page</strong></p>
            <figure class="image"><img src="../assets/praiseworthy/lo_fi_after.png" alt="Redesigned Home Page"></figure>
            <div class="columns">
              <div class="column">
                <p class="has-text-centered">Redesigned <strong>Rankings Page</strong></p>
                <figure class="image"><img src="../assets/praiseworthy/lo_fi_desktop_rankings.png" alt="Resigned Rankings Page"></figure>
              </div>
              <div class="column">
                <p class="has-text-centered">Redesigned <strong>Alerts Page</strong></p>
                <figure class="image"><img src="../assets/praiseworthy/lo_fi_desktop_alerts.png" alt="Redesigned Alerts Page"></figure>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <p class="has-text-centered">Redesigned <strong>Employee Page</strong></p>
                <figure class="image"><img src="../assets/praiseworthy/lo_fi_desktop_employee.png" alt="Resigned Employee Page"></figure>
              </div>
              <div class="column">
                <p class="has-text-centered">Redesigned <strong>Locations Page</strong></p>
                <figure class="image"><img src="../assets/praiseworthy/lo_fi_desktop_locations.png" alt="Redesigned Locations Page"></figure>
              </div>
              <div class="column">
                <p class="has-text-centered">Redesigned <strong>Employee Profile Page</strong></p>
                <figure class="image"><img src="../assets/praiseworthy/lo_fi_desktop_profile.png" alt="Redesigned Employee Profile Page"></figure>
              </div>
            </div>

            <p class="has-text-centered">Redesigned <strong>Mobile Page</strong></p>
            <div class="columns">
              <div class="column">
                <figure class="image"><img src="../assets/praiseworthy/lo_fi_mobile_1_overall_health.png" alt="Mobile Overall Health Page"></figure>
              </div>
              <div class="column">
                <figure class="image"><img src="../assets/praiseworthy/lo_fi_mobile_2_rankings.png" alt="Mobile Rankings Page"></figure>
              </div>
              <div class="column">
                <figure class="image"><img src="../assets/praiseworthy/lo_fi_mobile_3_alerts.png" alt="Mobile Alerts Page"></figure>
              </div>
              <div class="column">
                <figure class="image"><img src="../assets/praiseworthy/lo_fi_mobile_4_employees.png" alt="Mobile Employees Page"></figure>
              </div>
              <div class="column">
                <figure class="image"><img src="../assets/praiseworthy/lo_fi_mobile_5_locations.png" alt="Mobile Locations"></figure>
              </div>
              <div class="column">
                <figure class="image"><img src="../assets/praiseworthy/lo_fi_mobile_6_profile.png" alt="Mobile Employee Profile Page"></figure>
              </div>
            </div>
          </article>
          <br>

          <article>
            <h2 class="title is-4">Lo-Fi Prototypes</h2>
            <div class="level">
              <div class="level-item has-text-centered">
                <figure class="image"><img src="../assets/praiseworthy/lo_fi_prototypes_mobile.png" alt="Lo Fi Prototype Mobile"></figure>
              </div>
            </div>
            <br>
            <div class="level">
              <div class="level-item has-text-centered">
                <figure class="image"><img src="../assets/praiseworthy/lo_fi_prototypes_tablet.png" alt="Lo Fi Prototype Tablet"></figure>
              </div>
            </div>
          </article>
          <br><br>
          <article>
            <h2 class="title is-4">Style Guide</h2>
            <p>While we are working on Lo-Fi design, there was another team working on the style guides</p>
            <div class="columns">
              <div class="column">
                <figure class="image"><img src="../assets/praiseworthy/style_guide_1.png" alt="Style Guides"></figure>
              </div>
              <div class="column">
                <figure class="image"><img src="../assets/praiseworthy/style_guide_2.png" alt="Style Guides"></figure>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <figure class="image"><img src="../assets/praiseworthy/style_guide_3.png" alt="Style Guides"></figure>
              </div>
              <div class="column">
                <figure class="image"><img src="../assets/praiseworthy/style_guide_4.png" alt="Style Guides"></figure>
              </div>
            </div>
          </article>
        </div>
    
    <div>
          <h1 id="Praiseworthy-HiFi-Phase" class="title has-text-centered is-2">Hi-Fi Phase</h1>
          <div class="columns">
            <div class="column is-8 is-offset-2">
              <p class="has-text-centered">In this project, I was highly involved in the Lo-Fi phase. In Hi-Fi phase, my role was more about critics. I helped with offering ideas and refining the final deliveriables.</p>
            </div>
          </div>
          <article>
            <h2 class="title is-4">Final Prototypes</h2>
            <div class="level">
              <div class="level-item has-text-centered">
                <figure class="image"><img src="../assets/praiseworthy/hi_fi_mobile.png" alt="Lo Fi Prototype Mobile"></figure>
              </div>
            </div>
            <br>
            <div class="level">
              <div class="level-item has-text-centered">
                <figure class="image"><img src="../assets/praiseworthy/hi_fi_tablet.png" alt="Lo Fi Prototype Tablet"></figure>
              </div>
            </div>
          </article>
        </div>

  </div>
</template>