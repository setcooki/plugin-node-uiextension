/* global PluginUIExtension, $ */
var PluginUIExtension = {

  /**
   * The function defined as the onready callback within the plugin configuration.
   */
  init: function () {
    var $nav = $('.pl-c-nav__list');
    $nav.prepend(/*NAVLINKS-BEFORE-SNIPPET*/);
    $nav.append(/*NAVLINKS-AFTER-SNIPPET*/);

    var $rightList = $('.pl-c-tools__list');
    $rightList.prepend(/*GEARLINKS-BEFORE-SNIPPET*/);
    $rightList.find('#sg-find').before(/*GEARLINKS-BEFORESEARCH-SNIPPET*/);
  }
};