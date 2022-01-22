import React, { useState } from 'react';

const ClockAngle = () => {
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [degrees, setDegrees] = useState(-1);

    const handleSubmit = event => {
        event.preventDefault();
        setDegrees(calculateAngle());
    }

    const validateHour = h => {
        if (h < 0 || h > 12) {
            return false;
        }
        return true;
    }

    const validateMinutes = m => {
        if (m < 0 || m > 59) {
            return false;
        }
        return true;
    }

     //Returns smaller of 2 numbers
    const getMin = (a1, a2) => {
        if (a1 < a2) {
            return a1;
        }
        return a2;
    } 

    const calculateAngle = () => {
        let h = Number(hours);
        let m = Number(minutes);
        //initial validate
        if (!validateHour(h) || !validateMinutes(m)){
            return -1;
        }

        //User will likely input 12 and not 0
        if (h === 12){
            h = 0;
        }
        
        const hourHandAngle = (1/2) * (h * 60 + m);
        const minuteHandAngle = 6 * m;
        const absDiff = Math.abs(hourHandAngle - minuteHandAngle);
        
        //need the min between 360 - difference and difference
        //to get valid results around the clock
        return getMin(absDiff, 360 - absDiff);
    }

    return (
        <div className="clock-angle-wrapper">
            <h1 className="form-title">Find the angle between analog clock hands given the hour/minutes</h1>
            <form onSubmit={handleSubmit}>
                <label> Hours (HH)
                    <input type="number" onChange={event => setHours(event.target.value)}/>
                </label>
                <label> Minutes (MM)
                    <input type="number" onChange={event => setMinutes(event.target.value)}/>
                </label>
                <button type="submit">Submit</button>
            </form>
            <br />
            {degrees === -1 ? '' : `${degrees} degrees`}          
        </div>
    );
};

export default ClockAngle;
