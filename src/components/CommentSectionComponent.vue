<template>
	<div>
		<!-- Comment Form -->
		<form v-if="!commentSent" @submit.prevent="submitComment">
			<!-- Input for Comment -->
			<div>
				<!-- <label for="comment">Comment:</label> -->
				<textarea v-model="comment" id="comment" placeholder="Fyll i kommentar..."></textarea>
				<!-- <span v-if="!comment">Leave a comment</span> -->
			</div>
			<!-- Input for Name -->
			<div>
				<!-- <label for="name">Namn:</label> -->
				<input v-model="name" type="text" id="name" placeholder="Skriv namn...">
				<!-- <span v-if="!name">Enter</span> -->

			</div>
			<!-- Submit Button -->
			<button :disabled="formDisabled" type="submit" :title="formDisabled ? 'Var god och fyll i alla fält.' : ''">
				Skicka
			</button>
		</form>

		<!-- Comment Confirmation -->
		<p v-else>Tack för din kommentar!</p>

		<!-- Display Previous Comments -->
		<div v-if="comments.length > 0">
			<h2>Tidigare kommentarer:</h2>
			<ul>
				<li v-for="comment in comments" :key="comment.id">
					<p><strong>{{ comment.name }}:</strong> {{ comment.text }}</p>
					<p><em>{{ comment.date }}</em></p>
				</li>
			</ul>
		</div>
	</div>
</template>
  
<script>
export default {
	data() {
		return {
			comment: '',
			name: '',
			commentSent: false,
			comments: []
		};
	},
	computed: {
		formDisabled() {
			return this.commentSent || !this.comment || !this.name;
		}
	},
	created() {
		const recipeId = this.$route.params.recipeId;
		console.log('Recipe ID:', recipeId);

		this.fetchComments(recipeId);
	},
	methods: {
		async fetchComments(recipeId) {
			try {
				const response = await fetch(`https://jau22-recept-grupp3-j35j900nj4w3.reky.se/recipes/${recipeId}/comments`);
				const data = await response.json();
				console.log(data);

				this.comments = data.map(comment => ({
					name: comment.name,
					text: comment.comment,
					date: comment.createdAt
				}));
			} catch (error) {
				console.error('Error fetching comments:', error);
			}
		},
		async submitComment() {
			if (this.comment && this.name) {
				this.commentSent = false;
				const recipeId = this.$route.params.recipeId;

				try {
					const response = await fetch(`https://jau22-recept-grupp3-j35j900nj4w3.reky.se/recipes/${recipeId}/comments`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							comment: this.comment,
							name: this.name
						})
					});
					if (response.ok) {
						const data = await response.json();
						console.log('Comment submitted successfully:', data);

						this.comments.push({
							name: this.name,
							text: this.comment,
							date: new Date().toLocaleString(),
						});

						this.commentSent = true;
					} else {
						console.error('Error submitting comment:', response.statusText);
					}
				} catch (error) {
					console.error('Error submitting comment:', error);
				}
			}
		}
	}
};
</script>
  
<style scoped>

textarea {
    width: 300px; /* Set the desired width */
    height: 100px; /* Set the desired height */
}

button {
	margin-top: 10px;
}

</style>
  