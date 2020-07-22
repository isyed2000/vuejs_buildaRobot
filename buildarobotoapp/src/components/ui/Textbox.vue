<template>
    <span>
    <input type="text" v-show="!ReadOnly" :value="Text" />
    <label v-show="ReadOnly">{{Text}}</label>
    <span class="error" v-show="!Valid">{{ErrorMessageComputed}} - Displayed</span>
    <br/>
    <span>Is Valid Computed: {{IsValidComputed}}</span><br/>
    <span>Error Message Computed: {{ErrorMessageComputed}}</span><br/>
    <span>Is Valid: {{Valid}}</span><br/>
    <span>Error Message: {{ErrorMessage}}</span><br/>
    </span>
</template>
<script>

 var _isValid = true;


   

export default {

   data(){
       return{
           Valid:_isValid,
           ErrorMessage :""
       }

   },

    created()
    {
        _isValid=true;
        this.Valid=true;
        this.ErrorMessage="Test";
        
    },

    props:{
        Text:String,
        ReadOnly:Boolean,
        Required:Boolean,
        MaxLength:Number,
        MinLength:Number,
        MinLengthValidationMessage:String,
        RequiredErrorMessage:String,
        MaxLengthValidationMessage:String
    },

    computed:{
        ErrorMessageComputed :function(){

                return this.ErrorMessage;

        },

        IsValidComputed:function(){
            return this.Valid;
        }

    },
    
    methods:{

        SetValid(flag){
            if(flag==true){
                alert(flag);
            this.ErrorMessage="";
            }
            else
            {
                 this.ErrorMessage="Error message set with SetValid function";
            }

          
            this.Valid=flag;
        },
        Validate:function(updateGui){
           
            alert(this.Text);
            if(this.Required && (this.Text == undefined || this.Text.length==0))
            {
                _isValid = false;

                if(updateGui){
                   {
                       alert('update');
                       this.ErrorMessage="Field doens't have a value."
                   } this.Valid=false;
                }
            }
            else{
                alert('not invalid');
            }
    
            return _isValid;
            
        },

        IsValid:function(){
            return _isValid;
        },

        ClearValidation:function(){
            
        }
    }
}
</script>