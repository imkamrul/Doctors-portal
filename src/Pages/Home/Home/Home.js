import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Concept from '../Concept/Concept';
import OurDoctors from '../OurDoctors/OurDoctors';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || Doctor Portal</title>

            </Helmet>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Concept></Concept>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
            <Blogs></Blogs>
            <OurDoctors></OurDoctors>
        </div>
    );
};

export default Home;

