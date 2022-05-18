import { Layout } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import { Header } from 'components'
import { AppRoutes } from './routes'

const { Content } = Layout

const App = () => (
  <BrowserRouter>
    <Layout className="layout">
      <Header />
      <Content style={{ padding: '36px', height: '100%' }}>
        <AppRoutes />
      </Content>
    </Layout>
  </BrowserRouter>
)

export default App
