define([
  'widgets/DemoWidget/SubWidget',

  'dojo/dom-construct'
], function(
  WidgetUnderTest,

  domConstruct
) {
  describe('widgets/DemoWidget/SubWidget', function() {
    var widget;
    var destroy = function (widget) {
      if (widget && widget.destroyRecursive) {
        widget.destroyRecursive();
        widget = null;
      }
    };

    beforeEach(function() {
      widget = new WidgetUnderTest(null, domConstruct.create('div', null, document.body));
    });

    afterEach(function() {
      destroy(widget);
    });

    describe('Sanity', function() {
      it('should create a SubWidget', function() {
        expect(widget).to.be.a(WidgetUnderTest);
      });
    });
  });
});
