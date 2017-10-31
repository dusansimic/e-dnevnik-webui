<template>
	<div class="StudentSearch">
		<form action="" role="search"></form>
			<div id="searchBar" class="form-group">
				<label class="control-label" for="focusedInput"></label>
				<input type="text" id="focusedInput" class="form-control"></input>
			</div>
			<input type="button" value="Search" class="btn btn-default"></input>
		</form>
	</div>
</template>

<script>
export default {
	name: 'StudentSearch',
	data () {
		return {

		}
	}
}
</script>

<style>
.form-group .form-control {
	width: 500px;
	margin-left: calc((100% - 500px)/2);
}
</style>
