<template>
    <div class="big-recipes-container">
        <div v-for="recipe in filteredRecipes" :key="recipe._id" class="recipe-container">
            <router-link :to="'/recipe/' + recipe._id">
                <div class="img-container">
                    <img :src="recipe.imageUrl" alt="Recipe Image" class="recipe-image" />
                </div>
            </router-link>
            <div class="button-container">
                <div class="button-wrapper">
                    <CustomButton :to="'/recipe/' + recipe._id">Läs mer</CustomButton>
                </div>
            </div>
            <div class="recipe-details">
                <div class="recipe-heading">
                    <div>
                        <h3 class="recipe-title">{{ recipe.title }}</h3>
                    </div>
                    <div>
                        <p class="recipe-description">{{ recipe.description }}</p>
                    </div>
                    <div class="rating-wrapper">
                        <RatingComponent :value="recipe.avgRating" :max-stars="5" :is-interactive="false" />
                    </div>
                </div>
                <div class="recipe-info">
                    <div class="recipe-info-item">
                        Antal ingredienser: {{ recipe.ingredients.length }}
                    </div>
                    <div class="recipe-info-item">
                        Tid: {{ recipe.timeInMins }} mins
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RatingComponent from '../components/RatingComponent.vue';
import CustomButton from '../components/CustomButton.vue';

export default {
    props: ['recipes', 'searchQuery'],
    components: {
        RatingComponent,
        CustomButton,
    },
    computed: {
        filteredRecipes() {
            if (Array.isArray(this.recipes)) {
                return this.recipes.filter(recipe =>
                    recipe.title.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            }
            return [];
        },
    },
};
</script>

<style scoped>
.big-recipes-container {
    background-color: rgb(240, 240, 240);
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
}

.recipe-container {
    background-color: rgb(255, 255, 255);
    flex: 0 1 calc(33.33% - 20px);
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;

}

.recipe-details {
    flex-grow: 1;
    /* Allow recipe details to grow within the container */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.recipe-image img {
    width: 100%;
    max-height: 200px;
    height: auto;
    border-radius: 8px;
}

.recipe-title {
    font-size: 1.2rem;
    margin: 10px 0;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.recipe-description {
    font-size: 1rem;
    margin: 10px 0;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    overflow: hidden;
    max-height: 3.6em;
    line-height: 1.2em;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}

.recipe-info {
    margin-top: 10px;
}

.recipe-info-item {
    font-size: 0.9rem;
    color: #555;
    flex: 1;
    /* Allow items to take up equal space */

}

.rating-wrapper {
    position: relative;
    top: 30px;
    /* Adjusted from 10px to 15px */
}

.button-container {
    position: absolute;
    bottom: 25px;
    right: 10px;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: auto;
}

.button-wrapper {
    display: inline-block;
    margin-top: 10px;
}

.recipe-image {
    border: 1px solid #FFD786;
    box-shadow: 5px 5px 5px black;
    width: 200px;
    height: 200px;
    transition: transform 0.3s ease-in-out;
    border-radius: 9999px;
}

.recipe-image {
    max-width: 100%;
}

.recipe-image:hover {
    transform: scale(1.1);
}

@media (max-width: 1000px) {

    .recipe-description,
    .rating-wrapper,
    .recipe-info {
        display: none;
    }
}
</style>
