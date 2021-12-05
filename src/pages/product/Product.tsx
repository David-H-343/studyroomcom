import { FC } from 'react';
import { Typography, Divider, Row, Col, Image } from 'antd';
import create_studyset_page from '../../res/create_studyset_page.PNG';
import home_screen from '../../res/home_screen.PNG';
import login_screen from '../../res/login_screen.PNG';
import nav_logged_in from '../../res/nav_logged_in.PNG';
import nav_not_logged_in from '../../res/nav_not_loged_in.PNG';
import signup_screen from '../../res/Signup_screen.PNG';
import user_studyset_pages from '../../res/user_studyset_pages.PNG';
import "./Product.css";

const { Title } = Typography;

const titleSize = 3;
const imgHeight = 500;

const imgXS = 24;
const imgSM = 24;
const imgMD = 12;
const imgLG = 8;
const imgXL = 8;

const midXS = 24;
const midSM = 24;
const midMD = 12;
const midLG = 16;
const midXL = 16;

interface ProductProps {

}

const Product: FC = (props: ProductProps) => {
    return (
        <div className="product-content">
            <div className="sr-title-box">
                <Title className="sr-title">What It Can Do</Title>
                <Title className="sr-sub-title" level={2}>Learn about our application's capabilities.</Title>
            </div>
            <Divider />

            {/* CREATE STUDY SET */}
            <Row align="middle" gutter={64}>
                <Col xs={imgXS} sm={imgSM} md={imgMD} lg={imgLG} xl={imgXL}>
                    <Image height={imgHeight} src={create_studyset_page}></Image>
                </Col>
                <Col xs={midXS} sm={midSM} md={midMD} lg={midLG} xl={midXL}>
                    <Title level={titleSize}>
                        Quickly create new study sets by specifying a name, description, and the module or unit that
                        the study set belongs to.
                    </Title>
                    <Title level={titleSize}>
                        Study sets can be either private or public. Private study sets can only be shared with friends
                        whereas public study sets can be viewed by anyone using the app.
                    </Title>
                    <Title level={titleSize}>
                        Populate your study set with flashcards upon creation or wait until later to add cards.
                    </Title>
                </Col>
            </Row>
            <Divider />
            {/* HOME PAGE */}
            <Row align="middle" gutter={64}>
                <Col xs={midXS} sm={midSM} md={midMD} lg={midLG} xl={midXL}>
                    <Title level={titleSize}>
                        Public study sets are viewable even without an account. Creating an account and logging
                        in allows you to view all your private study sets along with all the other public study
                        sets that have been created by other users.
                    </Title>
                    <Title level={titleSize}>
                        Navigate to the home screen to explore all the study sets other users have created for
                        their classes. See what you can learn. Rediscover what you forgot.
                    </Title>
                    <Title level={titleSize}>
                        See at a glance what unit or module the study set is covering.
                    </Title>
                </Col>
                <Col className="right-align-img" xs={imgXS} sm={imgSM} md={imgMD} lg={imgLG} xl={imgXL}>
                    <Image height={imgHeight} src={home_screen}></Image>
                </Col>
            </Row>

            <Divider />

            {/* USER STUDY SETS */}
            <Row align="middle" gutter={64}>
                <Col xs={imgXS} sm={imgSM} md={imgMD} lg={imgLG} xl={imgXL}>
                    <Image height={imgHeight} src={user_studyset_pages}></Image>
                </Col>
                <Col xs={midXS} sm={midSM} md={midMD} lg={midLG} xl={midXL}>
                    <Title level={titleSize}>
                        Manage your study sets by editing their information, adding new flashcards, or removing old
                        ones. Create new study sets for each unit, and delete old study sets when they're no
                        longer needed.
                    </Title>
                    <Title level={titleSize}>
                        Pick from your personal list to decide which course you need to study more from. Dive
                        in to your flashcards and reviewing for your exams.
                    </Title>
                    <Title level={titleSize}>
                        Populate your study set with flashcards upon creation or wait until later to add cards.
                    </Title>
                </Col>
            </Row>

            <Divider />

            {/* LOGIN and SIGN-UP */}
            <Row align="middle" gutter={64}>
                <Col xs={0} sm={0} md={7} lg={7} xl={7}>
                    <Image height={imgHeight} src={login_screen}></Image>
                </Col>
                <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                    <Title level={titleSize}>
                        Log in to your account or explore existing public study sets as a guest.
                    </Title>
                    <Title level={titleSize}>
                        Or, register an account to start creating your own study sets to share with friends.
                    </Title>
                    <Title level={titleSize}>
                        Customize your own study sets to match how you study for exams best.
                    </Title>
                </Col>
                <Col className="right-align-img" xs={0} sm={0} md={7} lg={7} xl={7}>
                    <Image height={imgHeight} src={signup_screen}></Image>
                </Col>
            </Row>

            <Divider />

            {/* NAVIGATION */}
            <Row align="middle" gutter={64}>
                <Col xs={0} sm={0} md={7} lg={7} xl={7}>
                    <Image height={imgHeight} src={nav_logged_in}></Image>
                </Col>
                <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                    <Title level={titleSize}>
                        Easily navigate between the screens. View all public study sets or view your own. Customize your
                        account or create a new one.
                    </Title>
                </Col>
                <Col className="right-align-img" xs={0} sm={0} md={7} lg={7} xl={7}>
                    <Image height={imgHeight} src={nav_not_logged_in}></Image>
                </Col>
            </Row>

            <Divider />

        </div >
    );
}

export default Product;