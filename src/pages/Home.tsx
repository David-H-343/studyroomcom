import { FC } from 'react';
import { Typography, Divider, Space, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { productRoute } from '../routes/routes';
import "./Home.css";

const { Title, Text } = Typography;

interface HomeProps {

}

const Home: FC = (props: HomeProps) => {
    return (
        <div className="home-content">
            <div className="sr-title-box">
                <Title className="sr-title">Study Room</Title>
                <Title className="sr-sub-title" level={2}>Study with All Your Friends for All Your Classes</Title>
            </div>
            <Divider />
            <Row gutter={16}>
                <Col className="home-learn-more" xs={24} sm={24} md={8} lg={8} xl={8}>
                    <div>
                        <Title>Never struggle with studying again.</Title>
                        <Title level={5} ><Link to={productRoute}>Learn more</Link></Title>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                    <Space direction="vertical">
                        <Text>
                            Study Room is an application focused around studying for your courses by providing an easy way to
                            create studying material in an efficient manner. Using Study Room will keep you on top of all your
                            quizzes and exams so you and your friends are never left unprepared again. We saw a need for a new
                            method of studying; one that involved collaborating with friends.
                        </Text>
                        <Text>
                            Our goal is to help students reach their studying goals. Studying can be a very difficult process
                            to prepare for; students do not want to spend extra time figuring out a complicated process for
                            creating flashcards and studying for their exams. They want a quick-and-easy set-up that allows
                            them to instantly get started studying. Our application will help individuals not only create
                            their own study sets for exams and quizzes, but also allow them to view their friend's study sets
                            so that they do not have to reinvent the wheel.
                        </Text>
                    </Space>
                </Col>
            </Row>
            <Divider />
            <Space direction="vertical">
                <Text>
                    Study Room allows you to create study sets tied to a given class and module. Studying is always done for a
                    specific class and a specific module for that class. Organize your study sets by class and module to
                    find them more easily when studying for the final!
                </Text>
                <Text>
                    Create flashcards according to how you study best; whether that's seeing the question then the answer,
                    or seeing the definition and then the term, you get to decide. Shuffle the cards in your study set so
                    you never get used to the same pattern.
                </Text>
                <Text>
                    View all of your friend's study sets! Study with friends and learn from their flashcards so you don't have
                    to go through all the effort yourself. See what your friends are studying so you don't forget to include
                    anything.
                </Text>
            </Space>
        </div>
    );
}

export default Home;