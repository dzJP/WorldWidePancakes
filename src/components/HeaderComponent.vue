<template>
    <header class="header">
        <div class="h1-box">
            <router-link :to="'/'" class="header-router">
                <h1>Worldwide Pancakes</h1>
            </router-link>
        </div>
		<p class="welcome-text">
			Welcome to the world of pancakes! Craving sweet or salty pancakes? Don't panicake, we have all the recipes gathered on one website to make it easy for you.
		</p>
        <div class="text-box">
            <div class="slideshow-container">
                <div class="mySlides fade">
                    <img src="@/assets/pancake1.png" class="slide-image">
                </div>
                <div class="mySlides fade">
                    <img src="@/assets/pancake2.png" class="slide-image">
                </div>
                <div class="mySlides fade">
                    <img src="@/assets/pancake3.png" class="slide-image">
                </div>
                <div class="mySlides fade">
                    <img src="@/assets/pancake4.png" class="slide-image">
                </div>
				<div class="mySlides fade">
                    <img src="@/assets/pancake5.png" class="slide-image">
                </div>
				<div class="mySlides fade">
                    <img src="@/assets/pancake6.png" class="slide-image">
                </div>
				<div class="mySlides fade">
                    <img src="@/assets/pancake7.png" class="slide-image">
                </div>
				<div class="mySlides fade">
                    <img src="@/assets/pancake8.png" class="slide-image">
                </div>
				<div class="mySlides fade">
                    <img src="@/assets/pancake9.png" class="slide-image">
                </div>
				<div class="mySlides fade">
                    <img src="@/assets/pancake10.png" class="slide-image">
                </div>
				<div class="mySlides fade">
                    <img src="@/assets/pancake11.png" class="slide-image">
                </div>
				<div class="mySlides fade">
                    <img src="@/assets/pancake12.png" class="slide-image">
                </div>
				<div class="mySlides fade">
                    <img src="@/assets/pancake13.png" class="slide-image">
                </div>
				<div class="mySlides fade">
                    <img src="@/assets/pancake14.png" class="slide-image">
                </div>
				<div class="mySlides fade">
                    <img src="@/assets/pancake15.png" class="slide-image">
                </div>
				<div class="mySlides fade">
                    <img src="@/assets/pancake16.png" class="slide-image">
                </div>
				<div class="mySlides fade">
                    <img src="@/assets/pancake17.png" class="slide-image">
                </div>
				<div class="mySlides fade">
                    <img src="@/assets/pancake18.png" class="slide-image">
                </div>
				<div class="mySlides fade">
                    <img src="@/assets/pancake19.png" class="slide-image">
                </div>
				<div class="mySlides fade">
                    <img src="@/assets/pancake20.png" class="slide-image">
                </div>
				<div class="mySlides fade">
                    <img src="@/assets/pancake21.png" class="slide-image">
                </div>
				<div class="mySlides fade">
                    <img src="@/assets/pancake22.png" class="slide-image">
                </div>
				<div class="mySlides fade">
                    <img src="@/assets/pancake23.png" class="slide-image">
                </div>
				<div class="mySlides fade">
                    <img src="@/assets/pancake24.png" class="slide-image">
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderView'
};
</script>

<style scoped>

.header {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
	letter-spacing: 5px;
	text-transform: uppercase;
	font-family: 'Oxanium', sans-serif;
    background-color: rgb(240, 240, 240);
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.header header {
	margin-top: 5%;
}

.header-router {
	color: #384241;
	font-size: 20px;
	text-decoration: none !important;
	transition: color 0.3s ease, text-shadow 0.3s ease;
}

.header-router:hover {
    color: rgb(173, 216, 230);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.welcome-text {
	color:rgb(50, 50, 50);
	font-size: 20px;
	font-weight: 400;
	text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
	letter-spacing: 1px;
	text-transform: none;
	font-family: 'Oxanium', sans-serif;
}

.text-box {
    width: 100vw;
    height: auto;
    overflow: hidden;
}

.mySlides {
	display: flex;
	justify-content: center;
	align-items: flex-end;
	height: 100%;
}

.slideshow-container {
    display: flex;
    animation: slide 180s infinite linear;
	box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
}

.slide-image {
	max-width: 400px;
	max-height: 200px;
	background-repeat: no-repeat;
	background-position: bottom center;
}

@keyframes slide {
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-100%);
    }
}
</style>