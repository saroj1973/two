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
                echo 'testing hhshsfdsfsfsdsfsfsdfsdfd'
                npm ci
                npm run build
            '''
            }
        }
        stage('test'){
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps{
                sh '''
                    test -f build/index.html
                    npm test
                '''
            }
        }
    }
}