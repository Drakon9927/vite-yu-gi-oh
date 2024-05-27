<template>
    <header>
        <img :src="logo" alt="Logo">
        <h4>Yu-Gi-OH Api</h4>
    </header>
</template>

<script>
export default {
    data() {
        return {
            logo: 'public/img/yugi.png'
        };
    }
}
</script>

<style scoped>
header {
    height: 3rem;
}
</style>