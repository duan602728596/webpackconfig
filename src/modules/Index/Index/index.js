export default {
  data(): Object{
    return {};
  },
  methods: {
    handleAddState(): void{
      this.$store.dispatch('index/add');
    }
  }
};