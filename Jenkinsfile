pipeline{
    agent any{
        stages{
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            stage('builds'){
                steps{
                    sh '''
                        ls -la
                        npm --version
                        node --version
                        npm ci
                        npm run build
                        ls -la
                    '''

                }
            }
        }
    }
}