<template>
	<div class="StudentSearch">
		<div class="panel panel-default" id="searchPanel">
			<div class="panel-body">
				<form action="" role="search" class="form-horizontal"></form>
					<!--<div id="searchBar" class="form-group">
						<div class="input-group">
							<input type="text" class="form-control" v-model="queryString"></input>
							<span class="input-group-btn">
								<button type="button" class="btn btn-default">Search</button>
							</span>
						</div>
					</div>-->
					<fieldset>
						<legend>Search Students</legend>
						<div class="form-group">
							<label for="inputName" class="col-lg-2 control-label">Name</label>
							<div class="col-lg-10">
								<input type="text" class="form-control" id="inputName" placeholder="Name" autocomplete="off" v-model="queryData.name">
							</div>
						</div>
						<div class="form-group">
							<label for="inputSurname" class="col-lg-2 control-label">Surname</label>
							<div class="col-lg-10">
								<input type="text" class="form-control" id="inputSurname" placeholder="Surname" autocomplete="off" v-model="queryData.surname">
							</div>
						</div>
						<div class="form-group">
							<div class="col-lg-10 col-lg-offset-2">
								<button type="reset" class="btn btn-default">Cancel</button>
								<button type="submit" class="btn btn-primary" @click="searchStudents()">Search</button>
							</div>
						</div>
					</fieldset>
				</form>
			</div>
		</div>
		<div id="results">
			<ul>
				<li v-for="student in studentList" v-bind:key="student._id">
					<p>{{ student.name }} {{ student.surname }} {{ student.age }}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'StudentSearch',
	data () {
		return {
			queryData: {
				name: '',
				surname: ''	
			},
			studentList: []
		}
	},
	methods: {
		searchStudents: function() {
			let data = new FormData();
			data.append('json', JSON.stringify(this.queryData));

			fetch('https://localhost:3000/api/queryUcenici', {
				method: 'POST',
				body: data
			}).then(res => res.json()).then(data => {
				this.studentList = JSON.parse(JSON.stringify(data));
			});
		}
	}
}
</script>

<style>
#searchPanel {
	width: 500px;
	margin-left: calc((100% - 500px)/2);
}
</style>
