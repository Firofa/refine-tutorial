import { Refine } from "@pankod/refine-core"
import {
  Layout,
  ReadyPage,
  notificationProvider,
  ErrorComponent
} from "@pankod/refine-antd"
import RouterProvider from "@pankod/refine-react-router-v6"
import dataProvider from "@pankod/refine-simple-rest"
import { AntdInferencer } from "@pankod/refine-inferencer/antd";

import "@pankod/refine-antd/dist/reset.css";

const App: React.FC = () => {
  return (
    <Refine
        routerProvider={RouterProvider}
        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
        Layout={Layout}
        ReadyPage={ReadyPage}
        notificationProvider={notificationProvider}
        catchAll={<ErrorComponent />}
        resources={[
          {
            name: "products",
            list: AntdInferencer,
            show: AntdInferencer,
            create: AntdInferencer,
            edit: AntdInferencer
          }
        ]}
      />
  );
};

export default App;
