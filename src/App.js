// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePageLogin from './components/HomeDonor';
import ScholarshipDetails from './components/ScholarshipDetails';
 import ApplicantStatus from './components/ApplicantStatus'; 
 import AcceptedStatus from './components/AcceptedStatus';
 import DeclinedStatus from './components/DeclinedStatus';
 import ViewMore from './components/ViewMore';
 import SignUp from './components/SignUp';
 import ProviderSignUp from './components/ProviderSignUp';
 import ScholarshipForm from './components/ScholarshipForm';
// import S_status from './components/S_status';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePageLogin />} />
                <Route path="/ScholarshipDetails" element={<ScholarshipDetails />} />
                 <Route path="/ApplicantStatus" element={<ApplicantStatus />} />
                <Route path="/AcceptedStatus" element={<AcceptedStatus />} />
                <Route path="/DeclinedStatus" element={<DeclinedStatus />} />
                <Route path="/ViewMore" element={<ViewMore />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/ProviderSignUp" element={<ProviderSignUp />} />
                <Route path="/ScholarshipForm" element={<ScholarshipForm />} />
                {/*<Route path="/S_status" element={<S_status />} /> */}

                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;
