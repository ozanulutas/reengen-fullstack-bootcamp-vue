export const global = {
  data() {
    return {
      number: 12,
    }
  },
  methods: {
    alertTitle(val) {
      alert(val);
    }
  },
  computed: {
    titleSize() {
      return this.title.length;
    },
    msgSize() {
      return this.msg.length;
    },
  },
  created() {
    console.log("created");
  },
}