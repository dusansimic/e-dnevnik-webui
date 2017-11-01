<template>
	<div class="AddStudent">
		<div class="panel panel-default" id="addStudentPanel">
			<div class="panel-body">
				<form action="" role="search" class="form-horizontal"></form>
					<fieldset>
						<legend>Add Student</legend>
						<div class="form-group">
							<label for="inputName" class="col-lg-2 control-label">Ime</label>
							<div class="col-lg-10">
								<input type="text" class="form-control" id="inputName" placeholder="Name" autocomplete="off" v-model="studentData.name">
							</div>
						</div>
						<div class="form-group">
							<label for="inputSurname" class="col-lg-2 control-label">Prezime</label>
							<div class="col-lg-10">
								<input type="text" class="form-control" id="inputSurname" placeholder="Surname" autocomplete="off" v-model="studentData.surname">
							</div>
						</div>
						<div class="form-group">
							<label for="inputJMBG" class="col-lg-2 control-label">JMBG</label>
							<div class="col-lg-10">
								<input type="number" class="form-control" id="inputJMBG" placeholder="JMBG" autocomplete="off" v-model="studentData.jmbg">
							</div>
						</div>
						<div class="form-group">
							<label for="inputRodjen" class="col-lg-2 control-label">Rodjen</label>
							<div class="col-lg-10">
								<input type="date" class="form-control" id="inputRodjen" autocomplete="off" v-model="studentData.rodjen">
							</div>
						</div>
						<div class="form-group">
							<label for="inputRazred" class="col-lg-2 control-label">Razred</label>
							<div class="col-lg-10">
								<input type="number" class="form-control" id="inputRazred" autocomplete="off" v-model="studentData.razred">
							</div>
						</div>
						<div class="form-group">
							<label for="inputOdeljenje" class="col-lg-2 control-label">Odeljenje</label>
							<div class="col-lg-10">
								<input type="number" class="form-control" id="inputOdeljenje" autocomplete="off" v-model="studentData.odeljenje">
							</div>
						</div>
						<div class="form-group">
							<label for="inputIspisan" class="col-lg-2 control-label">Ispisan</label>
							<div class="col-lg-10">
								<div class="checkbox">
									<label class="noselect">
										<input type="checkbox" id="inputIspisan" v-model="studentData.ispisan"> Ucenik je ispisan
									</label>
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="col-lg-10 col-lg-offset-2">
								<button type="reset" class="btn btn-default">Cancel</button>
								<button type="submit" class="btn btn-primary" @click="addStudent()">Add</button>
							</div>
						</div>
					</fieldset>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AddStudent',
	data () {
		return {
			studentData: {
				name: '',
				surname: '',
				jmbg: 0,
				rodjen: '',
				razred: 0,
				odeljenje: 0,
				ispisan: undefined
			}
		}
	},
	methods: {
		addStudent: function () {
			// Implement method for adding students
		}
	}
}
</script>

<style>
#addStudentPanel {
	width: 500px;
	margin-left: calc((100% - 500px)/2);
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
</style>
