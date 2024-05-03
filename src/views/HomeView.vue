<template>
    <main class="main-box">
        <HeaderComponent />
        <div class="hamburger-icon" @click="toggleNavbarVisibility" :class="{ 'active': navbarVisible }">
            <div v-if="!navbarVisible" class="line"></div>
            <div v-if="!navbarVisible" class="line"></div>
            <div v-if="!navbarVisible" class="line"></div>
            <div v-if="navbarVisible" class="close-icon">X</div>
        </div>
        <NavbarComponent :categories="categories" :class="{ 'hidden': !navbarVisible }" />
        <div class="content">
            <SearchComponent v-model="searchQuery" @search="handleSearch" />
            <FetchRecipesComponent @recipes-loaded="handleRecipesLoaded" />
            <FetchCategoriesComponent @categories-loaded="handleCategoriesLoaded" />
            <LoadingComponent v-if="loading" />
            <RecipesContainerComponent :recipes="recipes" :searchQuery="searchQuery" />
        </div>
    </main>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import SearchComponent from '../components/SearchComponent.vue';
import RecipesContainerComponent from '../components/RecipesContainerComponent.vue';
import LoadingComponent from '../components/LoadingComponent.vue';
import FetchRecipesComponent from '../components/FetchRecipesComponent.vue';
import FetchCategoriesComponent from '../components/FetchCategoriesComponent.vue';

export default {
    components: {
        HeaderComponent,
        NavbarComponent,
        SearchComponent,
        RecipesContainerComponent,
        LoadingComponent,
        FetchRecipesComponent,
        FetchCategoriesComponent,
    },
    data() {
        return {
            loading: true,
            recipes: [],
            categories: [],
            searchQuery: '',
            navbarVisible: false
        };
    },
    computed: {
        recipe() {
            return this.recipes[0];
        },
        isRatingInteractive() {
            return !this.recipe;
        }
    },
    methods: {
        handleSearch(query) {
            this.searchQuery = query;
        },
        handleRecipesLoaded(data) {
            this.recipes = data;
            this.loading = false;
        },
        handleCategoriesLoaded(data) {
            this.categories = data.map(category => ({
                name: category.name,
                recipeCount: category.count || 0,
            }));
        },
        toggleNavbarVisibility() {
            this.navbarVisible = !this.navbarVisible;
        }
    },
};
</script>

<style scoped>
.main-box {
    background-color: rgb(240, 240, 240);
    display: grid;
    grid-template-columns: 180px auto;
    grid-template-rows: auto auto;
}

.content {
    grid-column: 2 / 3;
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    flex-direction: column;
}

.hamburger-icon {
    width: 30px;
    height: 20px;
    cursor: pointer;
    position: absolute;
    top: 375px;
    left: 20px;
    z-index: 1000;
}

.line {
    width: 100%;
    height: 3px;
    background-color: #000;
    margin: 5px 0;
    transition: transform 0.3s ease;
}

.close-icon {
    font-size: 34px;
    position: absolute;
    left: 15px;
    top: -5px;
    transform: translateX(-50%);
    font-family: 'Oxanium', sans-serif;
    font-weight: 600;
}

.hamburger-icon.active .line:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}

.hamburger-icon.active .line:nth-child(2) {
    opacity: 0;
}

.hamburger-icon.active .line:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}

@media (max-width: 1000px) {
    .main-box {
        grid-template-columns: auto;
        grid-template-rows: auto auto;
    }

    .content {
        grid-column: 1 / 3;
    }

    .hamburger-icon {
        top: 500px;
        left: 15px;
    }
}
</style>