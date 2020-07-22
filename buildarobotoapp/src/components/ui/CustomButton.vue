<template>
    <button>Custom Button</button>

</template>

<script>
export default {
    name:"btn",
    props:{

        validate:{
            required:true,
            type:Boolean
        }
    }
    
}
</script>

<style>
