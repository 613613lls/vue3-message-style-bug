import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import DefineOptions from 'unplugin-vue-define-options/vite';
// 配合从iconify 中导入图标
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';


const path = require('path');

function resolve(pathStr) {
	return path.resolve(__dirname, pathStr);
}



export default defineConfig(({ command, mode }) => {
	return {
		base: '/',
		plugins: [
			vue(),
			// vue3中setup为组件注入name
			DefineOptions(),
			AutoImport({
				 // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
				imports: ['vue','vue-router'],
				resolvers: [
					// 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
					ElementPlusResolver(),
					// Auto import icon components
					// 自动导入图标组件
					IconsResolver({
						prefix: 'i',
					}),
				],
				dts: path.resolve(resolve("src"), 'auto-imports.d.ts'),
			}),
			Components({
				resolvers: [
					ElementPlusResolver({
						importStyle: 'sass',
					}),
					IconsResolver({ enabledCollections: ['ep'],}),
				],
				dts: path.resolve(resolve("src"), 'components.d.ts'),
			}),

			Icons({autoInstall: true, }),
		],

		server: {
			port: 3001,
			open: true,
			https: false,
			proxy: {},
		},
		css: {
			preprocessorOptions: {
				scss: {
					// 此处可更改element plus 全局主题颜色
					additionalData: `@use "@/assets/css/element.scss" as *;`,
				},
			},
		},
		resolve: {
			alias: {
				'@': resolve('src'),
				'@c': resolve('src/components'),
				'@img': resolve('src/assets/img'),
				'@api': resolve('src/http'),
			},
		},
		build: {
			// 打包生成的文件目录
			outDir: resolve('dist'),
			// 生成静态资源的存放路径(相对于 build.outDir)
			assetsDir: 'static',
		},
	};
});
