import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#1e5f9a",
        secondary: "#c8e4ff"
      }
    },
    options: {
      customProperties: true
    }
  }
});
