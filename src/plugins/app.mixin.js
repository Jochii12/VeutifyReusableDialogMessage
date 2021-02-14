
export default {
    data: () => ({
        
    }),
    methods: {
        confirm(title, message, options) {
            this.$root.dialog = true;
            this.$root.title = title;
            this.$root.message = message;
            if(options) this.$root.dialogOptions = Object.assign(this.dialogOptions, options);
            return new Promise((resolve, reject) => {
              this.$root.resolve = resolve;
              this.$root.reject = reject;
            });
        },
        agree() {
            this.$root.resolve(true);
            this.$root.dialog = false;
        },
        cancel() {
            this.$root.resolve(false);
            this.$root.dialog = false;
        },
    }
}