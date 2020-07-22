<template>
    <div>
        <table>
            <tr>
                <th>First Name</th><th>Last Name</th><th>Pic</th><th>Phone Number</th>
            </tr>
            
            <tr v-for="contact in contactList" v-bind:key="contact.id" @click="HandleRowClicked(contact)">
                <td>
                    <span>{{contact.FirstName}} + {{contact.id}}</span>
                    </td>
                    <td>{{contact.LastName}}</td>
                <td>
                    <img v-bind:src="contact.src" />
                </td>
                <td>{{contact.PhoneNumber}}</td>
                </tr>

        </table>
    </div>
</template>

<script>
import appDB from '../data/parts.js';

export default {
    data(){
        return {
            contactList:appDB.PeopleList
        }
    },
    created(){
        
    },

    methods:{

        HandleRowClicked:function(contact){

               this.$emit('ContactSelected', contact);
        }
    }


}
</script>