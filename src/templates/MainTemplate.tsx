import { FC } from 'react';
import { Layout, Typography, Menu, Row, Col, Affix } from 'antd';
import PageNavigation from './PageNavigation';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

import "./MainTemplate.css";
import { homeRoute, plannedFeaturesRoute, productRoute } from '../routes/routes';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

interface MainTemplateProps {

}

const navlist: string[] = [
    "Home",
    "Product",
    "Planned Features",
];

const linkList: string[] = [
    homeRoute,
    productRoute,
    plannedFeaturesRoute,
];

const MainTemplate: FC = (props: MainTemplateProps) => {
    const pageId: string = sessionStorage.getItem("pageId") ?? '1';

    const updateMenu = (key: string) => {
        sessionStorage.setItem("pageId", key);
    }

    return (
        <Layout className="sr-layout">
            <Router>
                <Affix>
                    <Header>
                        <Title className="logo" level={4} >Study Room</Title>
                        <Menu mode="horizontal" defaultSelectedKeys={[pageId]} >
                            {navlist.map((_, index) => {
                                const key = index + 1;
                                return <Menu.Item key={key} onClick={() => updateMenu(key.toString())} ><Link to={linkList[index]}>{navlist[index]}</Link></Menu.Item>;
                            })}
                        </Menu>
                    </Header>
                </Affix>
                <Content className="sr-content">
                    <Row>
                        <Col className="sr-content-margin" xs={0} sm={1} md={2} lg={3} xl={3}>
                        </Col>
                        <Col className="sr-content-main" xs={24} sm={22} md={20} lg={18} xl={18}>
                            <PageNavigation />
                        </Col>
                        <Col className="sr-content-margin" xs={0} sm={1} md={2} lg={3} xl={3}>
                        </Col>
                    </Row>
                </Content>
                <Footer className="sr-footer">
                    <Title level={5}>Study Room - Computer Science 410/510 - Company 4</Title>
                </Footer>
            </Router>
        </Layout>
    );
}

export default MainTemplate;