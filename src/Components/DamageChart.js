import React, {Component} from 'react'

class DamageChart extends Component {
    render() {
        return (
            <div className="w-75 bg-warning center ba bw2 b--black pa2 shadow-5 rounded">
            
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