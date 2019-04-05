<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <fa-icon icon="atom" size="2x" pull="left" />
          <h1 class="is-size-4">Chofito</h1>
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start"></div>
        <div class="navbar-end">
          <div class="navbar-item">
            <a href="https://github.com/Chofito">
              <fa-icon :icon="['fab', 'github-alt']" class="fa-2x" />
            </a>
          </div>
        </div>
      </div>
    </nav>
    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, itemkey) of items" :key="itemkey">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <fa-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
            <ul v-if="item.more">
              <li v-for="(post, postkey) of item.posts" :key="postkey">
                <nuxt-link :to="post.to" exact-active-class="is-active">
                  {{ post.title }}
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>

    <footer class="footer is-fixed-bottom">
      <div class="content has-text-centered">
        <p>
          <strong>Website by</strong> by
          <a href="https://github.com/Chofito">Rodolfo Robles</a>. The source
          code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
          website content is licensed
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >CC BY NC SA 4.0</a
          >.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
          more: false
        },
        {
          title: 'Portafolio',
          icon: 'mug-hot',
          to: { name: 'portafolio' },
          more: false
        },
        {
          title: 'blogs',
          icon: 'cubes',
          to: { name: 'blogs' },
          more: true,
          posts: [
            {
              title: 'Infografia #1',
              to: { name: 'info1' }
            }
          ]
        }
      ]
    }
  }
}
</script>
