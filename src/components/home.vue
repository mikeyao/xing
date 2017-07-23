<template>
  <div class="home">
    <div class="">
      <div class="motto columns">
        <div class="column is-half is-offset-one-quarter">
          <h1 class="has-text-centered title is-3">
            — I am a designer, illustrator, and a world explorer living in Bay Area
          </h1>
        </div>
      </div>

      <article id="Projects">
        <div class="columns is-multiline">
          <div class="column is-half">
            <router-link to="/laughly">
              <figure class="image">
                <img src="../assets/home/laughly.png">
                <div class="overlay">
                  <div class="content project-intro">
                    <ul>
                      <h1 class="title description">Laugh.ly</h1>
                      <li class="description">Navigation Flow Re-Design</li>
                      <li class="description">Information Structure Re-Design</li>
                    </ul>
                  </div>
                </div>
              </figure>
            </router-link>
          </div>
          <div class="column is-half">
            <router-link to="/newsbite">
              <figure class="image">
                <img src="../assets/home/newsbite.png">
                <div class="overlay">
                  <div class="content project-intro">
                    <ul>
                      <h1 class="title description">Newsbite</h1>
                      <li class="description">Responsive Web Design</li>
                      <li class="description">Interaction Design</li>
                      <li class="description">Define Visual Brand</li>
                    </ul>
                  </div>
                </div>
              </figure>
            </router-link>
          </div>
          <div class="column">
            <router-link to="/praiseworthy">
              <figure class="image">
                <img src="../assets/home/praiseworthy.png">
                <div class="overlay">
                  <div class="content project-intro praiseworthy">
                    <ul>
                      <h1 class="title description">Praiseworthy</h1>
                      <li class="description">Dashboard Re-Design</li>
                      <li class="description">Responsive Web Design</li>
                    </ul>
                  </div>
                </div>
              </figure>
            </router-link>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<style lang="scss">
  .home {
    .motto {
      margin-top: 25vh;
      margin-bottom: 25vh;
      .title {
        line-height: 1.5;
      }
    }

    .image {
      position: relative;
    }

    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: .5s ease;
      background-color: black;
    }

    .column:hover .overlay {
      opacity: 0.8;
    }

    .project-intro {
      position: relative;
      top: 2rem;
      left: 2rem;
      
      .description {
        color: white;
      }

      &.praiseworthy {
        left: 40%;
      }
    }

  }

</style>

