import 'jquery-mask-plugin';
import jquery from 'jquery';
import $ from "jquery";
window.jQuery = jquery;
window.$ = jquery;
import "jquery-ui";
import icon from "./formElements/icons/icon.svg"
$('.user').html('User is working')

$(function(){
  $('.input-date').mask("00.00.0000");
})
