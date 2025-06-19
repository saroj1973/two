pipeline{
    agent any
    stages{
        stage('bulid'){
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps{
                sh '''
                ls -la
                npm --version
                node --version
                echo 'testing hhshsfdsfsfsd'
                npm ci
                npm run build
            '''
            }
        }
    }
}