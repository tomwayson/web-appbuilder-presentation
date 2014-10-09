define([
  'dojo/_base/declare',

  './SubWidget',

  'jimu/BaseWidget'
], function(
  declare,
  SubWidget,
  BaseWidget
) {

  var clazz = declare([BaseWidget], {
    //these two properties are defined in the BaseWiget
    baseClass: 'dbs-demo-widget',
    name: 'DemoWidget',

    // add additional properties here

    postCreate: function() {
      // summary:
      //      Overrides method of same name in dijit._Widget.
      // tags:
      //      private
      this.inherited(arguments);
      console.log('DemoWidget::postCreate', arguments);

      this.subWidget = new SubWidget({
        map: this.map,
        config: this.config
      });
      this.subWidget.placeAt(this.domNode);


      // add additional post constructor logic here
    },

    // start up child widgets
    startup: function() {
      // summary:
      //      Overrides method of same name in dijit._Widget.
      // tags:
      //      private
      this.inherited(arguments);
      console.log('DemoWidget::startup', arguments);
    },

    onOpen: function() {
      // summary:
      //      Overrides method of same name in jimu._BaseWidget.
      console.log('DemoWidget::onOpen', arguments);

      // add code to execute whenever the widget is opened
    },

    onClose: function() {
      // summary:
      //      Overrides method of same name in jimu._BaseWidget.
      console.log('DemoWidget::onClose', arguments);

      // add code to execute whenever the widget is closed
    }
  });

  return clazz;
});