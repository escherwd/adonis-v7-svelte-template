import prettier from 'eslint-config-prettier'
import svelte from 'eslint-plugin-svelte'
import { configApp } from '@adonisjs/eslint-config'

export default configApp(prettier, svelte.configs.prettier)
