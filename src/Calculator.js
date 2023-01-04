import React, { useState, useContext } from 'react';
import './index.css';
import Result from './Result';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const initialState = {
    prin: "",
    rat: "",
    tim: ""
}
const Calculator = () => {
    const [interests, setInterests] = useState(initialState);
    const [finalData, setFinalData] = useState([]);
    const {si, setSi} = useContext(Result);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (document.getElementById("interest").value === 'Simple Interest') {
            if (document.getElementById("duration").value === 'Year') {
                let results = (interests.prin * interests.rat * interests.tim) / 100;
                setSi(results);
                setFinalData(finalData => [...finalData, results]);
            }
            else if (document.getElementById("duration").value === 'Month') {
                let results = (interests.prin * interests.rat * interests.tim) / 1200;
                setSi(results);
                setFinalData(finalData => [...finalData, results]);
            }
            else {
                let results = (interests.prin * interests.rat * interests.tim) / 36500;
                setSi(results);
                setFinalData(finalData => [...finalData, results]);
            }
        }
        else {
            let results = interests.prin * (Math.pow(1 + interests.rat/100, interests.tim));
            setSi(results);
            setFinalData(finalData => [...finalData, results]);
            console.log(results);
        }
    }
    const options1 = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            color: 'black',
            text: 'Calculator Graph',
          },
        },
      };
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

      const data1 = {
        labels,
        datasets: [
          {
            label: 'Interest',
            data: finalData.slice(0, 7),
            backgroundColor: 'black',
            color: 'black'
          }
        ],
      };

    return (
        <div className="container1">
            <div className="calculations">
                <div className="InterestType">
                    <select name="type" id="interest">
                        <option value="Simple Interest">Simple Interest</option>
                        <option value="Compound Interest">Compound Interest</option>
                    </select>
                </div>
                <div className="PrincipalAndRate">
                    <div className="Principal">
                        <label htmlFor="principal" className="Label">Principal:</label><br />
                        <input type="text" className='Input' onChange={(e) => setInterests((prev) => ({...prev, prin: e.target.value}))} />
                    </div>

                    <div className="Rate">
                        <label htmlFor="rate" className="Label">Rate:</label><br />
                        <input type="text" className="Input" onChange={(e) => setInterests((prev) => ({...prev, rat: e.target.value}))} />
                    </div>
                </div>

                <div className="TimeAndDropdown">
                    <div className="Time">
                        <label htmlFor="time" className="Label">Time</label><br />
                        <input type="text" className="Input" onChange={(e) => setInterests((prev) => ({...prev, tim: e.target.value}))} />
                    </div>

                    <div className="Dropdown" id='Drop'>
                        <select name="duration" id="duration">
                            <option value="Year">Year</option>
                            <option value="Month">Month</option>
                            <option value="Day">Day</option>
                        </select>
                    </div>
                </div>

                <div className="Button">
                    <button onClick={handleSubmit} className="calculatebtn">Calculate</button>
                </div>

                <hr />
                <h1 className='Results'>Your Results:</h1><br />
                <p className='InterestResult'>Interest:{si}</p>
            </div>

            <div className="Graph">
                <Bar options={options1} data={data1} />
            </div>
        </div>
    )
}

export default Calculator
