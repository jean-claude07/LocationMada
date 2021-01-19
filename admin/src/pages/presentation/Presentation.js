import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2';

export class Presentation extends Component {
    render() {
        return (
            <div>
                <div class="col-md-12" role="main">

                    <div class="">
                        <div class="page-title">
                            <div class="title_left">
                            <h3>Presentation graphique</h3>
                            </div>
                        </div>
                    </div>

                    <div class="clearfix"></div>

                    <div class="row">
                        <div class="col-md-12 col-sm-12 ">
                            <Bar
                                data={{
                                    labels: ['red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange ', 'Darkblue'],
                                    datasets: [
                                        {
                                            label: '# clientelle',
                                            data: [5, 6 , 10, 15, 11, 69, 50],
                                            backgroundColor: ['red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange ', 'Darkblue'],
                                            borderWidth: 3,
                                        }
                                    ]
                                }}
                                width={1150}
                                height={500}
                                options={{
                                    maintainAspectRatio: false,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Presentation
