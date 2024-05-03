<template>
	<aside class="navbar">
		<router-link :to="'/'">
			<div :class="{ 'bold-text': isAllRecipesActive() }">
				Alla recept ({{ calculateTotalRecipes() }})
			</div>
		</router-link>
		<!-- If categories are available, display them as links -->
		<div v-if="categories.length > 0" class="non-bold-category">
			<div v-for="category in categories" :key="category.name">
				<router-link :to="'/category/' + category.name">
					<div :class="{ 'bold-text': category.name === getCategoryFromRoute($route.path) }" class="meme">
						{{ category.name }} ({{ category.recipeCount }})
					</div>
				</router-link>
			</div>
		</div>
	</aside>
</template>

<script>
export default {
	name: 'NavbarComponent',
	props: ['categories'],
	methods: {
		calculateTotalRecipes() {
			let total = 0;
			for (const category of this.categories) {
				total += category.recipeCount;

			}
			return total;
		},


		isAllRecipesActive() {
			return this.$route.path === '/';
		},

		getCategoryFromRoute(routePath) {
			const parts = routePath.split('/');
			return parts[2] || 'Unknown Category';
		},
	}
};

</script>

<style scoped>
a {
	text-decoration: none;
	color: #F3FAFF;
	margin-top: 40px;
}

.navbar {
	grid-column: 1 / 2;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
    background-color: #385F4E;
	padding: 1rem;
	margin-right: 5px;
	border-radius: 5px;
	overflow: hidden;
	transform: translateX(-100%);
	animation: slideIn 1s ease forwards;
}
@keyframes slideIn {
	from {
		transform: translateX(-100%);
	}
	to {
		transform: translateX(0%);
	}
}
@keyframes slideOut {
	from {
		transform: translateX(0%);
	}
	to {
		transform: translateX(-100%);
	}
}

.navbar.visible {
	transform: translateX(0%);
	transition: transform 0.3s ease;
}

.navbar.hidden {
	animation: slideOut 1s ease forwards;
}

.navbar>* {
	display: flex;
}

.non-bold-category {
	flex-direction: column;
}

.bold-text {
	font-weight: 900;
}

@media (max-width: 1000px) {
	.navbar {
		grid-column: 1 / 3;
		height: auto;
		flex-direction: row;
		display: flex;
		justify-content: center;
		margin-bottom: 5px;
		column-gap: 20px;
	}

	.non-bold-category {
		flex-direction: row;
		column-gap: 20px;
	}

	.bold-text {
		flex-direction: row;
	}
}
</style>

