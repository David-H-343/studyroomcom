import { FC } from 'react';
import { Typography, Divider } from 'antd';
import "./PlannedFeatures.css";

const { Title } = Typography;


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

        </div >
    );
}

export default PlannedFeatures;