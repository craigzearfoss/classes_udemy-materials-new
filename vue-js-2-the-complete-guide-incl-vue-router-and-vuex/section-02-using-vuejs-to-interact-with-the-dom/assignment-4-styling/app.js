new Vue({
  el: "#exercise",
  data: {
    attachedHighlight: true,
    attachedShrink: false,
    color: "blue",
    fontStyles: "font-styles",
    color3: "yellow",
    color4: "yellow",
    attachedBorderThick: true,
  },
  methods: {
    startEffect: function () {
      this.attachedHighlight = !this.attachedHighlight;
      this.attachedShrink = !this.attachedShrink;
    },
  },
  computed: {
    div4Border: function () {
      borderThick: event.target.value === "true";
    },
  },
});
