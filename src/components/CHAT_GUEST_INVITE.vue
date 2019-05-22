<template>
    <div>This is a test</div>
</template>
<script>
    // console.log('In test.vue')
    export default {
        name: 'CHAT_GUEST_INVITE',
        props: ['body'],
        data(){
            console.log(`props is ${this.body.url}`);
            return {
            }
        }
    }
</script>
