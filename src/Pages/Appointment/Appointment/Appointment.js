import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointHeader from '../AppointmentHeader/AppointHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Helmet>
                <title>Appointment || Doctor Portal</title>

            </Helmet>
            <Navigation></Navigation>
            <AppointHeader date={date} setDate={setDate}></AppointHeader>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;