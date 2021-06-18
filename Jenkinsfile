pipeline {

    agent any

    stages {
        stage('git') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: '25d35eeb-25a7-4bcb-b913-b24121e43a49', url: 'http://212.129.149.40/181250035_6pluscoin/frontend-coin.git']]])
            }
        }
        stage('install') {
            steps {
                sh 'rm package-lock.json'
                sh 'npm config set registry https://registry.npm.taobao.org'
                sh 'npm install'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
                sh 'npm run serve -- --port 8082 &'
            }
        }
        stage('deploy') {
            steps {
                sh 'cp -r dist /var/lib/jenkins/workspace/6plusCOIN-frontend@2'
            }
        }
    }

}
