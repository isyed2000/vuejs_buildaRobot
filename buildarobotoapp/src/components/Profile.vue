<template>
    
    <div class="Profile">
            <div>
                <label>First Name:</label>:     
                <Textbox  ref="txtFirstName" v-bind:Required="true"  v-bind:ReadOnly="true" />     
                <input type="textbox" v-show="EditMode" v-bind:value="FirstName" />
                <label v-show="!EditMode">{{FirstName}}</label>                
            </div>

            <input type="button" @click="EditProfile" value="Edit" />
            <input type="button" @click="ValidateForm" value="Validate" />
            <CustomButton  v-bind:validate="true" />
    </div>
</template>

<script>
  var isEditMode=false;
  
import Textbox from './ui/Textbox';
import CustomButton from './ui/CustomButton';

export default {
  components:{
      Textbox, CustomButton
  },
  data(){
    return{
        FirstName:"Iftikhar",
        EditMode:false
    }
  }
     ,
    computed:{

       
    },
    methods:{

        ValidateForm:function(){

            //toggleValid=!toggleValid;
             this.$refs.txtFirstName.Validate(true);

        },

        EditProfile:function(){
            this.$refs.txtFirstName.Validate();
            console.log("Is Textbox Valid: " + this.$refs.txtFirstName.IsValid(true));
            alert(this.FirstName);
            isEditMode=!isEditMode;
            this.EditMode = !this.EditMode;
        }

    }

}
</script>
<style scoped>
.profile{
    width:100%
}
</style>