import { Route, Routes } from "react-router-dom";
import Home from "../Containers/Home";
import List from "../Containers/List";
import Sidebar from "../Components/Sidebar";
import { Content } from "antd/es/layout/layout";
import { Flex, Layout } from "antd";
import Perfil from "../Components/Perfil"
import AddMovies from "../Components/AddMovies";

 const contentStyle = {
      textAlign: "center",
      lineHeight: "120px",
      height: "100%",
      color: "#000",
      backgroundColor: "#E5E8E8 ",
      marginLeft: "25%"
    };

   
    const layoutStyle = {
      borderRadius: 8,
      overflow: "hidden",
      width: "100%",
    };
const DashboardRouter = () => {
  return (
    <>
      <Flex gap="middle" wrap="wrap">
        <Layout style={layoutStyle}>
          <Sidebar />
          <Layout>
            <Content style={contentStyle}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<List />} />
                <Route path="/add" element={<AddMovies />} />
                <Route path="/pefil" element={<Perfil />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Flex>
    </>
  );
};

export default DashboardRouter;
