import { FC } from 'react';
import Home from '../pages/Home';
import {
    Routes,
    Route,
} from "react-router-dom";
import { homeRoute, plannedFeaturesRoute, productRoute } from '../routes/routes';
import Product from '../pages/product/Product';
import PlannedFeatures from '../pages/planned-features/PlannedFeatures';

interface PageNavigationProps {

}

const PageNavigation: FC = (props: PageNavigationProps) => {
    return (
        <div className="current-page" >
            <Routes>
                <Route path={homeRoute} element={<Home />} />
                <Route path={productRoute} element={<Product />} />
                <Route path={plannedFeaturesRoute} element={<PlannedFeatures />} />
            </Routes>
        </div>
    );
}

export default PageNavigation;