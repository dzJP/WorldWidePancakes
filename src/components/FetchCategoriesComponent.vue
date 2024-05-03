<template>
    <div></div>
</template>
  
<script>
export default {
    created() {
        fetch('https://jau22-recept-grupp3-j35j900nj4w3.reky.se/categories')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.$emit('categories-loaded', data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }
};
</script>
  