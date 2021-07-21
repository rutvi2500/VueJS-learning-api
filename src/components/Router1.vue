<template>
    <div>
        <h1>Routing with VueJS</h1>
        <h1>Home page</h1>
        <p><router-link to="user/1">Root</router-link></p>
        <p><router-link to="user/2">Sam</router-link></p>
        <p><router-link to="user/3">Peter</router-link></p>
        <p><router-link to="user/4">Robert</router-link></p>
    </div>
</template>

<script>
export default {
    name:'Router1'
}
</script>
