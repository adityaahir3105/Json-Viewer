// pages/index.js
'use client'
import React, { useState } from 'react';
import MyForm from './components/MyForm';
import JsonViewer from './components/JsonViewer';


const HomePage = () => {
  const [jsonData, setJsonData] = useState({
    "_id": "64c0b3a62327e30d2c076598",
    "TOURNAMENT_ID": "BA268474",
    "TOURNAMENT_NAME": "gszhzzhxj",
    "STATUS": true,
    "LOCATION": "yxhx",
    "CITY": "hfcucj",
    "TYPE": "Fixed",
    "START_DATE": "27-07-2023",
    "COLOR": "0xff6BB8FF",
    "END_DATE": "28-07-2023",
    "REGISTRATION_CLOSES_BEFORE": 6,
    "START_TIME": "11:18",
    "END_TIME": "11:18",
    "SPORT": "Badminton",
    "CANCELLATION_STATUS": false,
    "CATEGORY": "Men's Doubles",
    "MATCHES": [],
    "NO_OF_COURTS": 8,
    "BREAK_TIME": "",
    "PARTICIPANTS": [],
    "NO_OF_KNOCKOUT_ROUNDS": 0,
    "SPOT_STATUS_ARRAY": [],
    "GOLD": 0,
    "SILVER": 0,
    "BRONZE": 0,
    "PRIZE_POOL": 1,
    "AGE_CATEGORY": "Above 30",
    "ENTRY_FEE": 0,
    "IMG_URL": "https://ardentbucketnew.s3.ap-south-1.amazonaws.com/badminton.png",
    "START_TIMESTAMP": "2023-07-27T11:18:00.000Z",
    "END_TIMESTAMP": "2023-07-28T11:18:00.000Z",
    "ORGANIZER_NAME": "duxdu",
    "ORGANIZER_ID": "533443",
    "EVENT_TYPE": "knockout",
    "TEST": "true",
    "__v": 0,
    "spotStatusArrays": [
        {
            "category": "Above 30 Men's Doubles",
            "start_time": "11:18",
            "end_time": "11:18",
            "start_date": "27-07-2023",
            "end_date": "28-07-2023",
            "starttimestamp": "2023-07-27T11:18:00.000Z",
            "endtimestamp": "2023-07-28T11:18:00.000Z",
            "category_name": true,
            "eventType": "knockout",
            "tournament_id": "BA268474",
            "id": 301828,
            "array": [
                "8160050969-987654321",
                "",
                "",
                ""
            ],
            "STATUS": true,
            "SPORT": "Badminton",
            "CATEGORY_TYPE": "DOUBLES",
            "GOLD": 1,
            "SILVER": 0,
            "BRONZE": 0,
            "OTHER": 0,
            "ENTRY_FEE": 1,
            "BOOKING_CLOSED": false
        }
    ]
});

  const handleJsonDataChange = (data) => {
    setJsonData(data);
  };

  return (
    <div> {/* Center the content */}
      <div className="flex flex-col items-center">
        <MyForm onJsonDataChange={handleJsonDataChange} />
      </div>
      <div className="flex flex-col items-left">
        {jsonData && <JsonViewer jsonData={jsonData} />}
      </div>
    </div>
  );
};

export default HomePage;
