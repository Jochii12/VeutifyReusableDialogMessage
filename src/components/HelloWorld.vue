<template>
  <v-container>
    <v-btn @click.native="testConfirm">ConfirmDialog</v-btn>
    <v-btn @click.native="about">About</v-btn>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    
    data: () => ({
      
    }),
    methods:{
      about(){
        this.$router.push("/about")
      },
      async testConfirm(){
        const res = await this.confirm("Confirm", "Are you sure you want to delete this record?");
        if(res){
          console.log(`good`);
        }
      }
    }
  }
</script>
