import React, {Component} from 'react'

class DamageChart extends Component {
    render() {
        return (
            <div className="tc w-25 h-100 bg-warning center ba bw-3 pa3 rounded">
            
                Damage: {this.props.totalDmg} 
                        <br />
                Boss Damage: {this.props.totalBossDmg}
                        <br />
                Player Damage: {this.props.totalPlayerDmg}
            
            </div>
        )
    }
}

export default DamageChart