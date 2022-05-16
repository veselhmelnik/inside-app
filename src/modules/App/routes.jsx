import { Route, Routes } from 'react-router-dom'
import { ROUTES } from 'helpers/routes'
import { Projects } from 'modules/Projects'
import { Coordinator } from 'modules/Coordinator'
import { Operators } from 'modules/Operators'
import { Delivery } from 'modules/Delivery'

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Projects />} />
    <Route path={ROUTES.OPERATORS.link} element={<Operators />} />
    <Route path={ROUTES.DELIVERY.link} element={<Delivery />} />
    <Route path={ROUTES.COORDINATOR.link} element={<Coordinator />}></Route>
  </Routes>
)
