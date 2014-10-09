define([
  'dojo/text!./templates/SubWidget.html',

  'dojo/_base/declare',

  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin'
], function(
  template,

  declare,

  _WidgetBase,
  _TemplatedMixin,
  _WidgetsInTemplateMixin
) {
  return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
    // description:
    //    A sub widget

    templateString: template,
    baseClass: 'sub-widget',
    widgetsInTemplate: true,

    // Properties to be sent into constructor

    postCreate: function() {
      // summary:
      //    Overrides method of same name in dijit._Widget.
      // tags:
      //    private
      console.log('widget.DemoWidget.SubWidget::postCreate', arguments);

      this.setupConnections();

      this.inherited(arguments);
    },
    setupConnections: function() {
      // summary:
      //    wire events, and such
      //
      console.log('widget.DemoWidget.SubWidget::setupConnections', arguments);

    }
  });
});