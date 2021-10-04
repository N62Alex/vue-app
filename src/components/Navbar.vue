<template>
    <nav class="green darken-2">
        <div class="nav-wrapper">

            <router-link to="/" class="brand-logo">App</router-link>
            <ul class="right hide-on-med-and-down">
                <router-link
                tag="li"
                to="/"
                exact
                active-class="active"
                >
                    <a href="#">Create task</a>
                </router-link>
                <router-link
                tag="li"
                to="/list"
                active-class="active"
                >
                    <a href="#">Task list</a>
                </router-link>
            </ul>
            </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
nav {
    padding: 0 2rem;
}
.hide-on-med-and-down {
    display: flex;
}
</style>