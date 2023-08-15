import { useRoutes } from "react-router-dom";
import { router } from './routes';
import MainLayout from './layouts/MainLayout';

function App() {
  const routers = useRoutes(router);
  
  return (
    <>
      <MainLayout>
        {routers}
      </MainLayout>
    </>
  )
}

export default App
