import IconClose from '@/components/icons/IconClose'
import IconFile from '@/components/icons/IconFile'

export default {
    // подмена mdi-иконок на собственные компоненты
    icons: {
      values: {
        file: {
            component: IconFile,
            props: {
                color: '#681bff'
            }
        },
        clear: {
            component: IconClose
        }
      },
    },
  }
