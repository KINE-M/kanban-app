import KbnBoardView from '@components/templates/KbnBoardView'
import KbnLoginView from '@components/templates/KbnLoginView'
import KbnTaskDetailModal from '@components/templates/KbnTaskDetailModal'

export default [{
  path: '/',
  component: KbnBoardView,
  meta: { requireAuth: true }
}, {
  path: '/login',
  component: KbnLoginView
}, {
  path: '/tasks/:id',
  component: KbnTaskDetailModal,
  meta: { requireAuth: true }
}]
