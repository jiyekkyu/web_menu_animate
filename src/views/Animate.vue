<template>
	<div class="Animate">
		<input type="radio" name="tab" id="menu" />
		<div class="container">
			<input
				type="radio"
				name="tab"
				id="home"
				value="1"
				@click="menuCli"
				checked="check"
				/>
			<section class="home">
				<h1>Home</h1>
				<label for="home"></label>
			</section>
			<input type="radio" name="tab" id="about" value="2" @click="menuCli" />
			<section class="about">
				<h1>About</h1>
				<label for="about"></label>
			</section>
			<input type="radio" name="tab" id="work" value="3" @click="menuCli" />
			<section class="work">
				<h1>Work</h1>
				<label for="work"></label>
			</section>
			<input type="radio" name="tab" id="contact" value="4" @click="menuCli" />
			<section class="contact">
				<h1>Contact</h1>
				<label for="contact"></label>
			</section>
		</div>
		<div class="menu">
			<div>
				<label for="menu"></label>
				<label :for="cliFlag"></label>
			</div>
		</div>

	</div>
</template>

<script>
export default {
  name: "Animate",
  data() {
    return {
      cliFlag: "home",
    };
  },
  methods: {
    menuCli: function (e) {
      let tar = e.target;

      this.cliFlag = tar.id;
    },
  },
};
</script>
