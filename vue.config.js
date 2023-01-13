const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 프록시 설정
    proxy: {
        '/user': {
            // 프록시 요청을 보낼 서버의 주소
            target: 'http://localhost:8080',
            changeOrigin: true // cross origin 허용
        }
    }
}
})
