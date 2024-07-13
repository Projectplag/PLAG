import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SimilarityReportList } from "./similarityReport/SimilarityReportList";
import { SimilarityReportCreate } from "./similarityReport/SimilarityReportCreate";
import { SimilarityReportEdit } from "./similarityReport/SimilarityReportEdit";
import { SimilarityReportShow } from "./similarityReport/SimilarityReportShow";
import { CheckList } from "./check/CheckList";
import { CheckCreate } from "./check/CheckCreate";
import { CheckEdit } from "./check/CheckEdit";
import { CheckShow } from "./check/CheckShow";
import { DocumentList } from "./document/DocumentList";
import { DocumentCreate } from "./document/DocumentCreate";
import { DocumentEdit } from "./document/DocumentEdit";
import { DocumentShow } from "./document/DocumentShow";
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
        title={"PlagiarismDetectionService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="SimilarityReport"
          list={SimilarityReportList}
          edit={SimilarityReportEdit}
          create={SimilarityReportCreate}
          show={SimilarityReportShow}
        />
        <Resource
          name="Check"
          list={CheckList}
          edit={CheckEdit}
          create={CheckCreate}
          show={CheckShow}
        />
        <Resource
          name="Document"
          list={DocumentList}
          edit={DocumentEdit}
          create={DocumentCreate}
          show={DocumentShow}
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
