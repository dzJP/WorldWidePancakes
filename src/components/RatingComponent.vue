<template>
	<div class="star-rating">
		<i v-for="index in maxStars" :key="index" @click="handleClick(index)"
			@mouseover="enableHover && handleMouseOver(index)" @mouseleave="enableHover && handleMouseLeave()"
			:class="['star', { 'filled': index <= (hoverRating || rating) }]">
			&#9733; <!-- Unicode star character -->
		</i>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: Number,
			default: 0,
		},
		maxStars: {
			type: Number,
			default: 5,
		},
		isInteractive: {
			type: Boolean,
			default: true,
		},
		enableHover: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			rating: this.value,
			hoverRating: null,
		};
	},
	methods: {
		handleClick(index) {
			if (this.isInteractive) {
				this.rating = index;
				this.$emit('star-input', this.rating);
			}
		},
		handleMouseOver(index) {
			if (this.isInteractive && this.enableHover) {
				this.hoverRating = index;
			}
		},
		handleMouseLeave() {
			if (this.isInteractive && this.enableHover) {
				this.hoverRating = null;
			}
		},
	},
};
</script>

<style scoped>
.star-rating {
	font-size: 0;
	margin-bottom: 30px;
}

.star {
    display: inline-block;
    cursor: pointer;
    font-size: 36px;
    color: #ccc;
	vertical-align: middle;
}

.star.filled {
	color: #059700;
}
</style>
