import { FC } from 'react';
import { List, Typography, Divider } from 'antd';
import "./PlannedFeatures.css";

const { Title } = Typography;


interface IFeature {
    title: string;
    description: string;
}

const inProgressFeatures: IFeature[] = [
    { title: "Flashcards", description: "View all of the flash cards in a study set.", },
    { title: "Edit Study Sets", description: "Edit all the information of a study set (i.e. title, description, etc.)", },
];

const plannedFeatures: IFeature[] = [
    { title: "Studying Flashcards", description: "Enter into study-mode to view each flash card in the set. Shuffle the deck to view the cards out of order each time. Decide whether to view the answer-side first or the question-side first.", },
    { title: "Edit Flashcard List", description: "Reorder the flashcards to any order you want.", },
    { title: "Update Account Info", description: "Update your info; give yourself a different display name or change your email/password.", },
    { title: "Adding Friends", description: "Add friends to a friend list to study with. View all public study sets created by friends.", },
    { title: "Study With Friends", description: "Create study groups and add study sets that are only visible to that study group.", },
];

interface PlannedFeaturesProps {

}

const PlannedFeatures: FC = (props: PlannedFeaturesProps) => {
    return (
        <div className="product-content">
            <div className="sr-title-box">
                <Title className="sr-title">Our Plans</Title>
                <Title className="sr-sub-title" level={2}>See where this application is headed.</Title>
            </div>
            <Divider />

            <List
                size="large"
                bordered
                dataSource={inProgressFeatures}
                header={<Title level={5}>In Progress</Title>}

                renderItem={item => <List.Item>
                    <List.Item.Meta
                        title={item.title}
                        description={item.description}
                    />
                </List.Item>}
            />

            <Divider />

            <List
                size="large"
                bordered
                dataSource={plannedFeatures}
                header={<Title level={5}>Planned</Title>}

                renderItem={item => <List.Item>
                    <List.Item.Meta
                        title={item.title}
                        description={item.description}
                    />
                </List.Item>}
            />

        </div >
    );
}

export default PlannedFeatures;