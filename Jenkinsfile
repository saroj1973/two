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
                echo 'hallo fdsffdsfsf'
                node --version
                npm ci
                echo 'hallo fdsffdsfsf'
                npm run build
                ls -la
            }
        }
    }
}