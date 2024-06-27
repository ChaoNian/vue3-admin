import {createPinia} from 'pinia'

// 定义插件
function SecretPiniaPlugin() {
    return {secre: 'werew'}
}

const pinia = createPinia()

// 定义的插件 注入pinia
pinia.use(SecretPiniaPlugin)
