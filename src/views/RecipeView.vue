<template>
	<HeaderComponent />
	<div class="container">
		<main class="content">
			<section class="recipe section-recipe">
				<h1>{{ recipe.title }}</h1>
				<div class="recipe-info">
					<p>
						Rating: {{ recipe.avgRating || 'N/A' }} |
						Ingredienser: {{ recipe.ingredients ? recipe.ingredients.length : 'Loading...' }} |
						{{ recipe.timeInMins }} Minuter
					</p>
				</div>
				<div class="description-content">
					<p>{{ recipe.description }}</p>
				</div>
				<div class="recipe-ingredients" v-if="recipe.ingredients && recipe.ingredients.length > 0">
					<h3>Ingredienser</h3>
					<ul>
						<li v-for="(ingredient, index) in recipe.ingredients" :key="index">
							{{ ingredient.name }}: {{ ingredient.amount }} {{ ingredient.unit }}
						</li>
					</ul>
				</div>
				<div class="recipe-instructions">
						<h3>Gör så här</h3>
						<ol>
							<li v-for="(step, index) in recipe.instructions" :key="index">
								{{ step }}
							</li>
						</ol>
					</div>
			</section>
			<section class="recipe-description">
				<div class="image-ingredients-container">
					<img :src="recipe.imageUrl" alt="Recipe Image" class="recipe-image" />
				</div>
			</section>
		</main>

		<section class="recipe-rating-container section-recipe-rating-container">
			<h3>Vad tyckte du om receptet?</h3>
			<p>Klicka på en stjärna för att ge ditt betyg!</p>
			<div>
				<div v-if="!hasVoted" class="center-content">
					<RatingComponent :value="recipe.avgRating" :max-stars="5" :is-interactive="true" :enable-hover="true"
						@star-input="handleUserRating" />
				</div>
				<div v-else>
					<p>Tack för din röst!</p>
				</div>
				<div>
					<CommentSectionComponent />
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import CommentSectionComponent from '@/components/CommentSectionComponent.vue';
import RatingComponent from '@/components/RatingComponent.vue'

export default {
	components: {
		CommentSectionComponent,
		RatingComponent,
		HeaderComponent,
	},
	data() {
		return {
			loading: true,
			recipe: {},
			userRating: 0,
			hasVoted: false,
		};
	},
	created() {
		const recipeId = this.$route.params.recipeId;

		fetch(`https://jau22-recept-grupp3-j35j900nj4w3.reky.se/recipes/${recipeId}`)
			.then(response => response.json())
			.then(data => {
				if (data.avgRating !== undefined) {
					data.avgRating = parseFloat(data.avgRating.toFixed(1));
				}
				this.recipe = data;
				this.loading = false;
			})
			.catch(error => {
				console.error('Error fetching recipe:', error);
				this.loading = false;
			});

		// Load user's previous rating if any
		this.loadUserRating();
	},

	methods: {
		async storeRating() {
			try {
				const recipeId = this.$route.params.recipeId;
				const response = await fetch(`https://jau22-recept-grupp3-j35j900nj4w3.reky.se/recipes/${recipeId}/ratings`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						rating: this.userRating,
					})
				});
				if (response.ok) {
					this.hasVoted = true;
				}
			} catch (error) {
				console.error('Error submitting comment:', error);
			}
		},

		async loadUserRating() {
			try {
				const recipeId = this.$route.params.recipeId;
				const response = await fetch(`https://jau22-recept-grupp3-j35j900nj4w3.reky.se/recipes/${recipeId}/user-rating`);
				if (response.ok) {
					const data = await response.json();
					this.userRating = data.rating;
					this.hasVoted = true;
				}
			} catch (error) {
				console.error('Error fetching user rating:', error);
			}
		},

		handleUserRating(data) {
			this.userRating = data;
			this.storeRating(); // Store the user's rating
		},

		handleMouseOver() {
			// Handle mouseover
		}
	},
};
</script>

<style>
.container {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.content {
	display: flex;
	flex-direction: row;
}

.recipe {
	flex: 1;
	margin-right: 20px;
}

.recipe-rating-container {
	max-width: 300px;
	align-self: flex-start;
}

.recipe-ingredients h3 {
	margin-bottom: 1rem;
}

.recipe-description {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-right: 20px;
}

.section-recipe {
	font-size: 24px;
	margin-left: 20px;
}

.center-content {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
}

</style>
