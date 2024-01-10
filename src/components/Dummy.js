import React from 'react'
import "./Dummy.css"
import ReactApexChart from 'react-apexcharts';
import { useState } from 'react';

export const Dummy = () =>{

        // Sample data for the horizontal bar graph
        const [chartData] = useState({
            series: [{
              data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
            }],
            options: {
              chart: {
                type: 'bar',
                height: 350,
              },
              plotOptions: {
                bar: {
                  borderRadius: 4,
                  horizontal: true,
                },
              },
              dataLabels: {
                enabled: false,
              },
              xaxis: {
                categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                  'United States', 'China', 'Germany',
                ],
              },
            },
          });
    return(
        <>
            <div className="main">
                <div className="header">
                    <div className="metrics">Company Metrics</div>
                    <div className="first">
                        <div class="card mb-3 modifyCard" >
                            <div class="row g-0">
                                <div class="col-md-1">
                                    
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">$107,43.45</h5>
                                    <p class="card-text">Toatal Revenue</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-1">
                                    
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">$620</h5>
                                    <p class="card-text">Total Jobs Avg.</p>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-1">
                                    
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">$620</h5>
                                    <p class="card-text">Total Jobs Avg.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-1">
                                    
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">$620</h5>
                                    <p class="card-text">Total Jobs Avg.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="first">
                    <div class="card mb-3 modifyCard" >
                            <div class="row g-0">
                                <div class="col-md-1">
                                    
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">$107,43.45</h5>
                                    <p class="card-text">Toatal Revenue</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-1">
                                    
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">$620</h5>
                                    <p class="card-text">Total Jobs Avg.</p>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-1">
                                    
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">$620</h5>
                                    <p class="card-text">Total Jobs Avg.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-1">
                                    
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">$620</h5>
                                    <p class="card-text">Total Jobs Avg.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
                </div>
            </div>
        </>
    );
}