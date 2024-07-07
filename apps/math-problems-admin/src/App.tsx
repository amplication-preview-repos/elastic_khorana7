import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProblemList } from "./problem/ProblemList";
import { ProblemCreate } from "./problem/ProblemCreate";
import { ProblemEdit } from "./problem/ProblemEdit";
import { ProblemShow } from "./problem/ProblemShow";
import { SolutionList } from "./solution/SolutionList";
import { SolutionCreate } from "./solution/SolutionCreate";
import { SolutionEdit } from "./solution/SolutionEdit";
import { SolutionShow } from "./solution/SolutionShow";
import { TagList } from "./tag/TagList";
import { TagCreate } from "./tag/TagCreate";
import { TagEdit } from "./tag/TagEdit";
import { TagShow } from "./tag/TagShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"math problems"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Problem"
          list={ProblemList}
          edit={ProblemEdit}
          create={ProblemCreate}
          show={ProblemShow}
        />
        <Resource
          name="Solution"
          list={SolutionList}
          edit={SolutionEdit}
          create={SolutionCreate}
          show={SolutionShow}
        />
        <Resource
          name="Tag"
          list={TagList}
          edit={TagEdit}
          create={TagCreate}
          show={TagShow}
        />
        <Resource
          name="Comment"
          list={CommentList}
          edit={CommentEdit}
          create={CommentCreate}
          show={CommentShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
