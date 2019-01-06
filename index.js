var vm = new Vue({
    el: '#repoList',
    data () {
        return {
            repos: []
        }
    },
    mounted () {
        axios
            .get("https://api.github.com/users/chofito/repos")
            .then( response => { 
                response.data.forEach(element => {
                    if (!element.fork) {
                        this.repos.push(element)
                    }
                });
                /* this.repos = response.data */
            })
            .catch(error => {
                console.log(error)
            })
            /* .finally(() => this.loading = false) */
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });