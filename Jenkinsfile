pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub')
	}

	stages {
	  
		stage('Build') {

			steps {
				sh 'docker build -t anushkaw98/nodejs:latest .'
				
			}
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh 'Docker push anushkaw98/nodejs:latest'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}
