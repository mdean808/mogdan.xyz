<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<style lang="scss">
    @import "./scss/defaults.scss";

    @media screen and (max-width: $small_screen) {
        .nav-align {
            text-align: center;
        }
    }

    @font-face {
        font-family: 'Painting With Chocolate Regular';
        src: local('Painting With Chocolate Regular'), url('/assets/Painting_With_Chocolate.woff') format('woff');
    }

    .choc {
        font-family: "Painting With Chocolate Regular", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 56px;
        text-decoration: none;
        margin: -15px 0 0;
    }


    #nav {
        padding: 20px;
    }

    body {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: white;
        background: $primary_gradient;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    h1 {
        color: white;
    }

    h2 {
        color: white;
        font-weight: lighter;
    }

    h3 {
        color: white;

    }

    p {
        color: white;
    }

    .header {
        height: 45vh;
    }

    .btn {
        cursor: pointer;
        font-weight: bold;
        color: white;
        margin: 5px;
        text-decoration: none;
        padding: 8px 12px;
        border: 2px solid white;
        transition: .4s all;

        .github {
            fill: white !important;
        }
    }

    .btn:hover {
        color: black;
        border-color: black;

        .github {
            fill: black !important;
        }

        // border-color: white;
    }

    // Defaults
    .center {
        text-align: center;
    }

    .vertical-align-center {
        position: relative;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    .right {
        float: right
    }

    .left {
        float: left;
    }

    .left-text {
        text-align: left;
    }

    .right-text {
        text-align: right;
    }

    .container {
        margin: 20px 10%;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }

    .projects {
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    body::-webkit-scrollbar {
        width: 0 !important
    }

    body {
        overflow: -moz-scrollbars-none;
    }

    body {
        -ms-overflow-style: none;
    }

</style>
