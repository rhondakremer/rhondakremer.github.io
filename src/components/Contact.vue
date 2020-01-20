<template>
  <div id="form" class="col-lg-10 offset-lg-1 col-md-10 offset-md-1" method="post" enctype="text/plain">
    <form action="mailto:">
        <h2>Contact Me</h2>
            <label for="name">Name</label>
            <input type="text" id="name" class="form-control" v-model="nameInput">
            <label for="name">Email</label>
            <input type="text" id="email" class="form-control" v-model="emailInput">
            <label for="name">Message</label>
            <textarea type="text" id="name" class="form-control" v-model="messageInput"></textarea>
    </form>
    <br>
    <button @click="submitContact">Send</button>

  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return{
            nameInput: null,
            emailInput: null,
            messageInput: null,
            url: process.env.VUE_APP_FIREBASE_URL
        }
    },
    methods: {
       submitContact() {
        //    alert("message sent!")
           let data = {}
           data.name = this.nameInput;
           data.email = this.emailInput;
           data.message = this.messageInput;
           axios.post(this.url, data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
       }
   }
}
</script>

<style scoped>
#form {
    background-color: whitesmoke;
    padding: 2%;
    border-radius: 0.5em;
    margin-top: 4%;
    border: 1px solid black;
}

h2 {
    text-align: center;
    text-decoration: underline;
    text-underline-position: under;
}
</style>