import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'


// 環境変数から読み込み
const awsConfig = {
  "aws_project_region": process.env.VUE_APP_AWS_PROJECT_REGION,
  "aws_appsync_graphqlEndpoint": process.env.VUE_APP_AWS_APPSYNC_GRAPHQLENDPOINT,
  "aws_appsync_region": process.env.VUE_APP_AWS_APPSYNC_REGION,
  "aws_appsync_authenticationType": process.env.VUE_APP_AWS_APPSYNC_AUTHENTICATIONT_YPE,
  "aws_appsync_apiKey": process.env.VUE_APP_AWS_APPSYNC_APIKEY,
  Auth: {
      identityPoolId: process.env.VUE_APP_AWS_COGNIT_IDENTITY_POOL_ID,
      region: process.env.VUE_APP_AWS_COGNIT_REGION,
      identityPoolRegion: process.env.VUE_APP_AWS_COGNIT_IDENTITY_POOL_REGION,
      userPoolId: process.env.VUE_APP_AWS_COGNIT_USER_POOL_ID,
      userPoolWebClientId: process.env.VUE_APP_AWS_COGNIT_USER_POOL_WEB_CLIENT_ID
  }
};



Amplify.configure(awsConfig)
Vue.config.productionTip = false
Vue.use(AmplifyPlugin, AmplifyModules)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
