<template>
	<div class="StudentProfile">
		<div class="card border-dark" id="studentData">
			<div class="card-body">
				<h3>{{ student.name }} {{ student.surname }}</h3>
				<p>Born {{ getStudentDOB(student.rodjen) }}</p>
				<p>JMBG: {{ student.jmbg }}</p>
				<p>Razred: {{ student.razred }}-{{ student.odeljenje }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'StudentProfile',
	data () {
		return {
			student: {}
		}
	},
	methods: {
		onLoad: function () {
			let studentId = this.$cookie.get('studentId');
			this.$cookie.delete('studentId');

			fetch('http://localhost:3000/api/queryUcenici', {
				method: 'POST',
				headers: new Headers({
					'Content-Type': 'application/json'
				}),
				body: JSON.stringify({jmbg: studentId})
			}).then(res => res.json()).then(data => {
				data = data[0];
				this.student = JSON.parse(JSON.stringify(data)); 
			}).catch(err => {
				console.error(err);
			});
		},
		getStudentDOB: function (date) {
			date.slice(4, 4);
			date.slice(6, 4);
			return this.$moment(date, 'YYYYMMDD').fromNow();
		}
	},
	created: function () {
		this.onLoad();
	}
}
</script>


<style>
#studentData {
	width: 500px;
	margin-left: calc((100% - 500px)/2);
}
</style>
