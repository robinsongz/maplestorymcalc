import React, {Component} from 'react'

class DamageChart extends Component {
    render() {
        return (
            <div className="w-75 bg-warning center ba bw2 b--black pa2 shadow-5 rounded">
            
                Average Non-Crit Damage Per Line: <b>{this.props.totalNonCritDmg}</b>
                        <br />
                Average Crit Damage Per Line: <b>{this.props.totalCritDmg}</b>
                        <br />
                Average Total Damage: <b>{this.props.totalDmg} </b>
                        <br />
            </div>
        )
    }
}

export default DamageChart