import { Header } from '../../components/Header'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { Layout } from 'antd'

const App = () => (
  <BrowserRouter>
    <Layout className="layout">
      <Header />
    </Layout>

    <main>
      <AppRoutes />
    </main>
  </BrowserRouter>
)

export default App
