<template>
    <div class="card border-primary">
        <div class="card-body text-center">
            <img :src="user.picture?.large" height="150" width="150" class="rounded-circle img-thumbnail border-danger zoomIn" alt="">
            <div class="cart-title">
                <h1 class="h5 text-primary">
                    <span class="ps-2">{{user.name?.title}}</span>
                    <span class="ps-2">{{user.name?.first}}</span>
                    <span class="ps-2">{{user.name?.last}}</span>                   
                </h1>
                <p class="badge bg-success text-uppercase">{{user.gender}}</p>
                <p class="m-0"><i class="fa fa-envelope fa-lg"></i> <span class="ps-2">{{user.email}}</span></p>
                <p class="m-0"><i class="fa fa-map-marker-alt fa-lg"></i> 
                    <span class="ps-2">{{user.location?.city}}</span>,
                    <span class="ps-2">{{user.location?.state}}</span>,
                    <span class="ps-2">{{user.location?.country}}</span>
                </p>
               <p class="m-0"><i class="fa fa-phone-alt fa-lg"></i> <span class="ps-2">{{user.phone}}</span></p>
               <p class="m-0"><i class="fa fa-envelope fa-lg"></i> <span class="ps-2">{{user.email}}</span></p>
                
                <p class="text-muted">Registered on: <small>{{user.registered?.date}}</small></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserCard',
    props:["user"]
}
</script>

<style>

</style>