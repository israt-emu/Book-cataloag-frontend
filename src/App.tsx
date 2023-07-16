import {useAuthCheck} from "./hooks/useAuthCheck";
import Layout from "./layout/Layout";

function App() {
  const authChecked = useAuthCheck();
  if (!authChecked) {
    return <p>...Loading</p>;
  }
  return (
    <>
      {/* <Toaster /> */}
      <Layout />
    </>
  );
}

export default App;
