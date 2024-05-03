<template>
    <div class="searchbar">
        <input v-model="searchQuery" id="search-field" placeholder="Search recipes..."  class="search-field"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: '',
        };
    },
    watch: {
        searchQuery() {
            this.$emit('search', this.searchQuery);
        },
    },
};
</script>

<style scoped>
.searchbar {
    margin-top: 5px;
    height: 20px;
    display: flex;
    margin-bottom: 15px;
}

.searchbar input {
    width: 100%;
    height: 20px;
    border-radius: 5px;
    padding: 5px;
}

.search-field {
    border: 1px solid grey;
}

.search-field:focus {
    border: 1px solid green;
}

</style>