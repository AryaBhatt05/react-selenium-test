pipeline {
    agent any

    environment {
        NODE_HOME = "C:\\Program Files\\nodejs" // Update if your Node.js path is different
        PATH = "${env.NODE_HOME};${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                node {
                    checkout scm
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                node {
                    // Clean npm cache just in case
                    bat 'npm cache clean --force'
                    bat 'npm install'
                }
            }
        }

        stage('Build Project') {
            steps {
                node {
                    bat 'npm run build'
                }
            }
        }

        stage('Run Selenium Tests') {
            steps {
                node {
                    bat 'npm test' // Assuming you have a test script in package.json
                }
            }
        }

        stage('Publish Test Results') {
            steps {
                node {
                    // Adjust the path if your test results are elsewhere
                    junit '**/test-results/*.xml'
                }
            }
        }
    }

    post {
        always {
            node {
                echo 'Cleaning workspace after build...'
                deleteDir() // Optional: cleans workspace after build
            }
        }
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
