import React, { Component } from 'react'
import {Line} from 'react-chartjs-2';

export class Accueil extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                datasets: [
                    {
                        label: "Client",
                        backgroundColor: "rgba(255, 0, 255, 0.75)",
                        data: [4, 5, 1, 10, 32, 2, 12, 4, 5, 1, 10, 32, 2, 12],
                        // borderColor: 'none'
                    },
                    {
                        label: "Reservation",
                        backgroundColor: "rgba(0, 255, 0, 0.75)",
                        data: [14, 15, 11, 1, 2, 12, 2, 14, 15, 11, 1, 2, 12, 2],
                        // borderColor: '#f4f4f4'
                    },
                    {
                        label: "promotion",
                        backgroundColor: "rgba(0, 255, 150, 0.75)",
                        data: [18, 19, 21, 10, 22, 12, 32, 18, 19, 21, 10, 22, 12, 22],
                        // borderColor: '#f1f1f1'
                    }
                ]
            }
        }
    }

    setGradientColor = (canvas, color) => {
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.95, "rgba(133, 122, 144, 0.5)")
        return gradient;
    }

    getChartData = canvas => {
        const data = this.state.data;
        if (data.datasets) {
            let colors = ["rgba(255, 0, 255, 0.75)", "rgba(0, 255, 0, 0.75)"];
            data.datasets.forEach((set, i) => {
                set.backgroundColor = this.setGradientColor(canvas, colors[i]);
                set.borderColor = "withe";
                set.borderWidth = 2;
            });
        }

        return data;
    }
    render() {
        return (
            <div>
                <center>
                <div>
                    <div class="right_col" role="main">
                        <div class="col-md-12 col light">
                            <div class="tile_count">
                                <div class="col-md-2 col-sm-4  tile_stats_count">
                                    <span class="count_top"><i class="fa fa-user"></i> Total Users</span>
                                    <div class="count">2500</div>
                                    <span class="count_bottom"><i class="green">4% </i> From last Week</span>
                                </div>
                                <div class="col-md-2 col-sm-4  tile_stats_count">
                                    <span class="count_top"><i class="fa fa-clock-o"></i> Average Time</span>
                                    <div class="count">123.50</div>
                                    <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>3% </i> From last Week</span>
                                </div>
                                <div class="col-md-2 col-sm-4  tile_stats_count">
                                    <span class="count_top"><i class="fa fa-user"></i> Total Males</span>
                                    <div class="count green">2,500</div>
                                    <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>34% </i> From last Week</span>
                                </div>
                                <div class="col-md-2 col-sm-4  tile_stats_count">
                                    <span class="count_top"><i class="fa fa-user"></i> Total Females</span>
                                    <div class="count">4,567</div>
                                    <span class="count_bottom"><i class="red"><i class="fa fa-sort-desc"></i>12% </i> From last Week</span>
                                </div>
                                <div class="col-md-2 col-sm-4  tile_stats_count">
                                    <span class="count_top"><i class="fa fa-user"></i> Total Collections</span>
                                    <div class="count">2,315</div>
                                    <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>34% </i> From last Week</span>
                                </div>
                                
                            </div>
                        </div>   
                    </div>
                    <div class="clearfix"></div>
                    <div style={{position: 'relative', width: 1150, height: 900}} >
                        <Line
                            options={{
                                responsive: true
                            }}

                            data={this.state.data}
                        />
                    </div>
                    
                    </div>
                </center>
            </div>
        )
    }
}

export default Accueil

