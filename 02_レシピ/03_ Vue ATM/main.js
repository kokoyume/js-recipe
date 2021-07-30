new Vue({
  el: "#v-model",
  data: {
    nyuuryokugaku: 0,
  },
})
new Vue({
  el: "#v-onclick",
  date: { zanndaka: 0 },
  methods: {
    nyuukinn: function() {
      this.zanndaka += Number(this.nyuryokugaku)
    },
    syukkinn: function() {
      this.zanndaka -= Number(this.nyuryokugaku)
    },
  },
})

new Vue({
  el: "#v-for-push",
  data: {
    torihikikiroku: [""],
    date: new Date(),
  },
  methods: {
    nyuukinn: function() {
      this.torihikikiroku.push("date", "入金", "nyuryokugaku")
    },
  },
})
