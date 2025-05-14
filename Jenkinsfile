pipeline{
    agent any
        environment{
            NETLIFY_SITE_ID ='6a2041a7-b4f0-4fa4-a148-45daacfce086'
            NETLIFY_AUTH_TOKEN = credentials('SHYAM')
        }
        stages{
            stage('builds'){
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
                        npm ci
                        npm run build
                        ls -la
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

            stage('deploy'){
                agent{
                    docker{
                        image 'node:18-alpine'
                        reuseNode true
                    }
                }
                steps{
                    sh '''
                        npm install netlify-cli@20.1.1
                        node_modules/.bin/netlify --version
                        node_modules/.bin/netlify status
                        echo "ID is $NETLIFY_SITE_ID"
                        node_modules/.bin/netlify deploy --dir=build --prod
                    '''

                }
            }

        }
}
