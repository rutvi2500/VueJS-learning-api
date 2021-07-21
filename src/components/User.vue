<template>
    <div>
        <h1>Routing with VueJS</h1>
        <h1>User Component</h1>
        <h1>User Id is {{userId}}</h1>
    </div>
</template>

<script>
export default {
    name:'User',
    data()
    {
        return {userId:this.$route.params.id}
    }
}
</script>
