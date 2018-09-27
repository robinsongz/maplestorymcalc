import React, {Component} from 'react'

class DamageChart extends Component {
    render() {
        return (
            <div className="w-75 bg-warning center ba bw2 b--black pa2 shadow-5 rounded">
            
                Average Non-Crit Damage Per Line: {this.props.totalNonCritDmg}
                        <br />
                Average Crit Damage Per Line: {this.props.totalCritDmg}
                        <br />
                Average Total Damage: {this.props.totalDmg} 
                        <br />
            </div>
        )
    }
}

export default DamageChart