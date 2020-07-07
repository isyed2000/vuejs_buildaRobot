<template>
    <div>
    <span>{{title}}</span>
    <img :src="title" :alt="title" /> <!--short hand syntax for binding-->
    <a @click="handleClick()">Click me!</a>
    <input type="text" v-bind:value="title" />
    <input type="button" v-on:click="handleClick" value="Click" />

    <h1>Computed Property.. The sum is {{MultiplyByTwo}}></h1>

    <h1>Auto incremented Value</h1>:<span>{{clickCounter}}</span>

    <button @click="AddPayment(1,'Iftikhar', 2)">Add Payment</button>
    <table width="100%">
        <tr>
        <th>Payment Id</th>
        <th>Payment Amount</th>
        <th>Payor Name</th>
        </tr>
        <tr v-for="payment in payments" v-bind:key="payment.id">
            <td>{{payment.id}}</td>
            <td>{{payment.amount}}</td>
            <td>{{payment.payorName}}</td>

            </tr>
        
        </table>

        <table width="100%">
        <tr>
        <th>Index</th>
        <th>Payment Id</th>
        <th>Payment Amount</th>
        <th>Payor Name</th>
        </tr>
        <tr v-for="(payment, index) in payments" v-bind:key="index"><!--vue needs some key for updates.  Here we use index as the key-->
           <td>{{index}}</td>
            <td>{{payment.id}}</td>
            <td>{{payment.amount}}</td>
            <td>{{payment.payorName}}</td>

            </tr>
        
        </table>

    </div>
</template>

<script>
     
//var clickCounter = 0;
function SomePrivateFunction(someArg)
{
    return someArg + " somePrivateFunction called";

}
export default {
   
    data(){
       
        return{
            title:"Welcome to Payments",
            clickCounter:0,
            payments:[]
        }
    
},

//computed is similar to methods.  They can have some logic.  HOwever, value are cached and refreshed only when some value changes.
computed:
{
 MultiplyByTwo(){
     return this.clickCounter*2;
 }
},


methods:{
   
          handleClick: function() {
              this.clickCounter+=1;
      alert(SomePrivateFunction("HandleClick" + this.clickCounter));
    
    },

    AddPayment:function(amount, payorName, id){

            
        this.payments.push({id:id, amount:amount, payorName:payorName});
    
    }
}
}
</script>