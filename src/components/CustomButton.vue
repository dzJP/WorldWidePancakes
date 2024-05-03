<template>
    <router-link :to="to" class="button">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        to: String,
    },
};
</script>

<style>
.button {
    background-color: #19a413;
    color: #F3FAFF;
    border-radius: 10px;
    text-align: center;
    border: none;
    padding: 10px;
    transition: background-color 0.3s ease;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;   
    text-decoration: none;
}

.button:hover {
    /* background-color: #6D94BC; */
    background-color: #FFD786;
}

</style>