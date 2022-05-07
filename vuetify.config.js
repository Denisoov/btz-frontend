import IconClose from '@/components/icons/IconClose'
import IconFile from '@/components/icons/IconFile'
import IconNext from '@/components/icons/IconNext'
import IconPrev from '@/components/icons/IconPrev'

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
      },
      next: {
        component: IconNext
      },
      prev: {
        component: IconPrev
      }
    },
  },
}
