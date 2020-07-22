<template>
  <div id="mainComp">
    <div style="border-style:solid;float:left">
      <div>Account Component</div>
    <Account></Account>
    </div>

    <div style="border-style:solid;float:left">
      <div>Payment List Component</div>
    <PaymentList></PaymentList>
    </div>

    <div style="border-style:solid;float:left">
      <div>Hello World Component</div>
    <hello-world/>
    </div>

    <div style="border-style:solid;float:left">
      <div>Contact List</div>

    <ContactList v-on:ContactSelected="contact=>this.selectedContact=contact" />
    </div>

    <div style="border-style:solid;float:left">
      <div>Selected Contact</div>
    <div>
    
     {{selectedContact.FirstName}}

    </div>

      </div>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
import PaymentList from './PaymentList.vue'
import Account from './Account.vue'
import ContactList from './ContactList';

export default {
  name: 'App',
  components: {
    HelloWorld, PaymentList, Account, ContactList
  },

  data(){
    return {
      selectedContact:{}
    }
  },

  methods:{

     HandleContactSelected(contact){

             this.selectedContact = contact;
     
     }

  }
}
</script>