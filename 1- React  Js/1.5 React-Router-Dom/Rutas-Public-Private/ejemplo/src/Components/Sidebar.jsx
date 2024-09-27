import { Button, Layout, Menu } from "antd"
import Sider from "antd/es/layout/Sider"
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { actionLogout } from "../reducers/actions/actionsUser";


const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarColor: 'unset',

};



const siderStyle2 = {
  marginTop: "40px",
  textAlign: "center",
  lineHeight: "100px",
  color: "#fff",
  // backgroundColor: "#000",
};

const Sidebar = () => {

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    console.log("Adios");
    dispatch(actionLogout());
    navigate("/login");
  };


  return (
    <div> 
      <Layout hasSider>
      <Sider style={siderStyle}>
        <div className="demo-logo-vertical" />
         <Menu mode="vertical" style={siderStyle2} defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/" style={{ margin: "5px" }}>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/add" style={{ margin: "5px" }}>
            Add
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/pefil" style={{ margin: "5px" }}>
            Perfil
          </Link>
        </Menu.Item>
         <Menu.Item key="4">
          <Button onClick={handleLogout} >Logout</Button>
        </Menu.Item>
      </Menu>
        
  
      </Sider>
      
    </Layout>
    </div>
  )
}

export default Sidebar