'use strict';

/*
Vue.component('navigation', {
  template: '<aside class="meta-navigation">' + 
                '<header class="brand">' + 
                    '<h1>WebySafe</h1>' + 
                '</header>' +
                '<div class="profile-ctrl">' + 
                    '<div class="profile-frame">' + 
                       ' <img src="img/user.jpg" alt="">' + 
                   ' </div>' + 
                    '<<h2>Gina Bradford</h2>' + 
                   '<i class="material-icons" v-text="' + 'keyboard_arrow_down' + '"></i>' + 
                '</div>' + 
                '<nav class="navigation">' + 
                    '<header>' + 
                        '<h2>My Account</h2>' + 
                    '</header>' + 
                    '<ul>' + 
                        '<li class="active">' + 
                            '<a href="#">' + 
                            '<i class="icon material-icons" v-text="'+ ' person' + '"></i>' + 
                            '<h3>Profile</h3>' + 
                            '</a>' + 
                        '</li>' + 
                        '<li>' + 
                            '<a href="#">' + 
                            '<i class="icon material-icons" v-text="' + ' vpn_key ' + '"></i>' + 
                            '<h3>Credentials</h3>' + 
                            '</a>' + 
                        '</li>' + 
                        '<li>' + 
                            '<a href="#">' + 
                            '<i class="icon material-icons" v-text="' + ' folder' + '"></i>' + 
                            '<h3>Documents</h3>' + 
                            '</a>' + 
                        '</li>' + 
                        '<li>' + 
                            '<a href="#">' + 
                           ' <i class="icon material-icons" v-text="' + ' lens ' + '"></i>' + 
                            '<h3>Family</h3>' + 
                            '</a>' + 
                        '</li>' + 
                        '<li>' + 
                            '<a href="#">' + 
                            '<i class="icon material-icons" v-text="' + ' people ' + '"></i>' + 
                            '<h3>Delegation</h3>' + 
                            '</a>' + 
                        '</li>' + 
                   ' </ul>' + 
                '</nav>' + 
            '</aside>'
});
*/

Vue.component('navigation', {
  template: `<aside class="meta-navigation">
                <header class="brand">
                    <a href="index.html"><img src="img/WebySafeLogo.svg" title="WebySafe" /></a>
                </header>
                <div class="profile-ctrl">
                    <div class="profile-frame">
                        <img src="img/user.jpg" alt="">
                    </div>
                    <h2>Gina Bradford</h2>
                    <i class="material-icons" v-text="'keyboard_arrow_down'"></i>
                </div>
                <nav class="navigation">
                    <header>
                        <h2>My Account</h2>
                    </header>
                    <ul>
                      <nav-item v-for="i in items" :name="i.item" :icon="i.icon"></nav-item>
                    </ul>
                </nav>
            </aside>`,

            data() {
              return {
                items: [
                  {item: 'Profile', icon: 'person'},
                  {item: 'Credentials', icon: 'vpn_key'},
                  {item: 'Documents', icon: 'folder'},
                  {item: 'Family', icon: 'lens'},
                  {item: 'Delegation', icon: 'people'}
                ]
              }
            }
});

Vue.component('nav-item', {
    template: '<li>' + 
                  '<a :href="this.href">' + 
                  '<i class="icon material-icons" v-text="icon"></i>' + 
                  '<h3 v-text="name"></h3>' + 
                  '</a>' + 
              '</li>',
    props: {
      icon: {required: true},
      name: {required: true}
    },

    computed: {
        href() {
          return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    }
});

new Vue({
      el: '#webysafe',
  data: {
    message: 'Hello Brock!'
  }
});
