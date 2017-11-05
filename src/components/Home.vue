<template>
		<div class="Home">
			<img src="../assets/profile.jpg" alt="Dusan Simic"></img>
			<p id="name"><b>{{ myName }}</b></p>
		</div>
</template>

<script>
export default {
	name: 'Home',
	data () {
		return {
			myName: ''
		}
	},
	created: function() {
		fetch('http://localhost:3000/api/myname').then(res => res.json()).then(data => {
			this.myName = data.name.toString() + ' ' + data.surname.toString();
		}).catch(err => {
			if (err) {
				console.error(err);
			}
		});
	}
}
</script>

<style>
</style>
