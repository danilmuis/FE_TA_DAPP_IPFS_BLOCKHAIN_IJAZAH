import DropDown from "./components/Dropdown.vue";
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import Multiselect from 'vue-multiselect';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component("drop-down", DropDown);
    Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);
    Vue.component('multiselect', Multiselect);
  }
};

export default GlobalComponents;
