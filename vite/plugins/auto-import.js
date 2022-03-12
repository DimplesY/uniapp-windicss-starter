import autoImport from 'unplugin-auto-import/vite'

export default function createAutoImport() {
    return autoImport({
        imports: [
            'uni-app',
            'vue',
            {
                'vuex': ['useStore']
            }
        ],
        dts: false
    })
}