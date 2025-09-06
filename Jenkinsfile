pipeline {
    agent any

    tools {
        nodejs "NodeJS
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/AryaBhatt05/react-selenium-test.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                powershell 'npm install'
            }
        }

        stage('Start React App') {
            steps {
                powershell '''
                Start-Process npm -ArgumentList "start" -NoNewWindow
                npx wait-on http://localhost:3000
                '''
            }
        }

        stage('Run E2E Tests') {
            steps {
                powershell 'npm run e2e'
            }
        }
    }

    post {
        always {
            junit 'reports/junit-e2e.xml'
        }
    }
}
