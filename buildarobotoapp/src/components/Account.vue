<template>
<div class="AccountFull">
    <profile />

    <paymentHistory />
</div>
</template>

<script>
import Profile  from './Profile';
import PaymentHistory from './PaymentHistory';

export default {
    components: {
    Profile, PaymentHistory
  }

}
</script>

<style scoped>
.AccountFull{

}
</style>