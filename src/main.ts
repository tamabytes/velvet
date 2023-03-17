import './styles/style.css'
import jQuery from "jQuery";

jQuery("#greetings span").each(function() {
  console.log(jQuery(this));
})