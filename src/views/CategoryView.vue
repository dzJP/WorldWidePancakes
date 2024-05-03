<template>
	<div class="flex-box">
		<HeaderComponent />

		<main class="main-box">
			<NavbarComponent :categories="categories" />

			<div class="content">
				<SearchComponent v-model="searchQuery" @search="handleSearch" />
				<div v-if="loading" class="big-recipes-container">Loading...</div>
				<RecipesContainerComponent v-else :recipes="recipes" :searchQuery="searchQuery" />
			</div>

		</main>
	</div>
</template>
  
<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import SearchComponent from '../components/SearchComponent.vue';
import RecipesContainerComponent from '../components/RecipesContainerComponent.vue';

export default {
	components: {
		HeaderComponent,
		NavbarComponent,
		SearchComponent,
		RecipesContainerComponent,
	},
	data() {
		return {
			loading: true,
			recipes: [],
			categories: [],
			searchQuery: '',
			categoryId: null,
		};
	},
	computed: {
		uniqueRecipes() {
			const uniqueTitles = [...new Set(this.recipes.map(recipe => recipe.title))];
			return uniqueTitles.map(title => this.recipes.find(recipe => recipe.title === title));
		},
		filteredRecipes() {
			return this.uniqueRecipes.filter(recipe =>
				recipe.title.toLowerCase().includes(this.searchQuery.toLowerCase())
			);
		},
	},
	methods: {
		handleSearch(query) {
			this.searchQuery = query;
		},
		fetchCategoryRecipes() {
			this.loading = true;
			fetch(`https://jau22-recept-grupp3-j35j900nj4w3.reky.se/categories/${this.categoryId}/recipes`)
				.then(response => response.json())
				.then(data => {
					this.recipes = data;
					this.loading = false;
				})
				.catch(error => {
					console.error('Error fetching recipes:', error);
					this.loading = false;
				});
		},
	},
	created() {
		this.categoryId = this.$route.params.categoryId;

		this.fetchCategoryRecipes();

		fetch('https://jau22-recept-grupp3-j35j900nj4w3.reky.se/categories')
			.then(response => response.json())
			.then(data => {
				this.categories = data.map(category => ({
					name: category.name,
					recipeCount: category.count || 0,
				}));
			})
			.catch(error => {
				console.error('Error fetching categories:', error);
			});
	},
	watch: {
		'$route.params.categoryId': function (newCategoryId) {
			this.categoryId = newCategoryId;
			this.fetchCategoryRecipes();
		},
	},
};
</script>
  
<style scoped>
.main-box {
    display: grid;
    grid-template-columns: 180px auto;
    grid-template-rows: auto auto;
    /* grid-template-rows: 150px auto; */
}

.content {
    grid-column: 2 / 3;
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    flex-direction: column;
}

@media (max-width: 1000px) {
    .main-box {
        grid-template-columns: auto;
        grid-template-rows: auto auto;
    }

    .content {
        grid-column: 1 / 3;
    }
}
</style>