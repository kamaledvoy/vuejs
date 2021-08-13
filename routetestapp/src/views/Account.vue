<template>
    <h1>My Account page</h1>

    <h2>{{ $route.params.id }}</h2>

    <h5>Router</h5>
    <p>{{ $router }}</p>

    <h5>Route</h5>
    <p>{{ $route }}</p>
    
</template>

<script>
export default {
    name: 'Account'
}
</script>

<style>

</style>