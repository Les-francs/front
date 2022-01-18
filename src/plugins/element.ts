import ElementPlus from 'element-plus'
import '../element-variables.scss'
import locale from 'element-plus/lib/locale/lang/fr'
import { App } from 'vue'

export default (app: App) => {
  app.use(ElementPlus, { locale })
}

