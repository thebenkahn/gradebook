import React, {Component} from 'react';
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';

class Chart extends Component{

  const: data = {
  	labels: [
  		'Red',
  		'Green',
  		'Yellow'
  	],
  	datasets: [{
  		data: [300, 50, 100],
  		backgroundColor: [
  		'#FF6384',
  		'#36A2EB',
  		'#FFCE56'
  		],
  		hoverBackgroundColor: [
  		'#FF6384',
  		'#36A2EB',
  		'#FFCE56'
  		]
  	}]
  };

    render(){
      return(
        <div>
          <h2>Doughnut Examplewdwd</h2>
          <Bar
            data={this.data}
            options={{
              title:{
                display:true,
                text:'Largesst Cities in ' + this.props.location,
                fontSize:25
              },

            }}
          />
        </div>
      )
  	}
  }

export default Chart;
