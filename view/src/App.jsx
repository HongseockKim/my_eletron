import { Route, Routes } from 'react-router-dom'
import Default from './layout/Default'
import ProductDetail from './component/ProductDetail'
import LoginComponet from './component/LoginComponet'
import Main from './component/Main'
import BottomSheet from './component/BottomSheet'
import 'swiper/css'
import NavCom from "./component/NavCom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {

  return (
    <div className="App">
      <NavCom/>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route path="/" element={<LoginComponet />} />
          <Route path="/main" element={<Main />} />
          <Route
            path="product/open/:productId/:postId"
            element={<ProductDetail />}
          />
          <Route
            path="product/private/:productId/:postId"
            element={<ProductDetail />}
          />
        </Route>
      </Routes>
      <BottomSheet />
    </div>
  )
}

export default App
