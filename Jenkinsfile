pipeline {
    agent any  // run on any available Jenkins node

    environment {
        NODE_ENV = 'development'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    if (fileExists('package-lock.json')) {
                        bat 'npm ci'
                    } else {
                        bat 'npm install'
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
            post {
                always {
                    junit 'reports/**/*.xml' // adjust path if your test reports are elsewhere
                }
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
