<template>
	<div class="StudentSearch">
		<div class="alert alert-dismissable alert-danger" v-if="alertData.showAlert && alertData.isBad">
			<button type="button" class="close" data-dismiss="alert" @click="hideAlerts()">&times;</button>
			{{ alertData.alertMessage }}
		</div>
		<div class="alert alert-dismissable alert-warning" v-else-if="alertData.showAlert && alertData.isWarn">
			<button type="button" class="close" data-dismiss="alert" @click="hideAlerts()">&times;</button>
			{{ alertData.alertMessage }}
		</div>
		<div class="alert alert-dismissable alert-success" v-else-if="alertData.showAlert">
			<button type="button" class="close" data-dismiss="alert" @click="hideAlerts()">&times;</button>
			{{ alertData.alertMessage }}
		</div>
		<div class="panel panel-default" id="searchPanel">
			<div class="panel-body">
				<form action="" role="search" class="form-horizontal"></form>
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
				<li v-for="student in studentList" v-bind:key="student.id">
					<div class="panel panel-default">
						<div class="panel-body">
							<h3>{{ student.name }} {{ student.surname }}</h3>
							<p>Born {{ getStudentDOB(student.rodjen) }}</p>
						</div>
					</div>
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
			alertData: {
				alertMessage: '',
				showAlert: false,
				isBad: false,
				isWarn: false
			},
			studentList: []
		}
	},
	methods: {
		searchStudents: function() {
			// Send query data
			fetch('http://localhost:3000/api/queryUcenici', {
				method: 'POST',
				headers: new Headers({
					'Content-Type': 'application/json'
				}),
				body: JSON.stringify(this.queryData)
			}).then(res => res.json()).then(data => {
				if (data.error) {
					this.alertData.isBad = true;
					this.alertData.isWarn = false;
					this.alertData.showAlert = true;
					this.alertData.alertMessage = data.error.message;
				} else if (data.warn) {
					this.alertData.isBad = false;
					this.alertData.isWarn = true;
					this.alertData.showAlert = true;
					this.alertData.alertMessage = data.warn.message;
				} else {
					this.alertData.isBad = false;
					this.alertData.isWarn = data.length ? false : true;
					this.alertData.showAlert = true;
					if (data.length > 1) {
						this.alertData.alertMessage = 'Ucenici su pronadjeni!';
					} else if (data.length == 1) {
						this.alertData.alertMessage = 'Ucenik je pronadjen!';
					} else {
						this.alertData.alertMessage = 'Ni jedan ucenik nije pronadjen!';
					}

					this.studentList = JSON.parse(JSON.stringify(data));
				}
			}).catch(err => {
				this.alertData.isBad = true;
				this.alertData.isWarn = false;
				this.alertData.showAlert = true;
				this.alertMessage = err.message;
			});

			this.queryData = {
				name: '',
				surname: ''
			}
		},
		hideAlerts: function () {
			this.alertData.showAlert = false;
		},
		getStudentDOB: function (date) {
			date.slice(4, 4);
			date.slice(6, 4);
			return this.$moment(date, 'YYYYMMDD').fromNow();
		}
	}
}
</script>

<style>
#searchPanel {
	width: 500px;
	margin-left: calc((100% - 500px)/2);
}
#results ul {
	padding: 0;
	list-style-type: none;
}
#results ul li {
	width: 500px;
	margin-left: calc((100% - 500px)/2);
}
.alert {
	width: 250px;
	margin-left: calc((100% - 250px)/2);
}
</style>
