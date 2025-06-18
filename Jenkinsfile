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
                ls -la
                npm --version
                node --version
                echo 'testing hhshs'
                npm ci
                npm run build

            }
        }
    }
}