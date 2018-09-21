import React, {Component} from 'react'

class DamageChart extends Component {
    render() {
        return (
            <div>
                Damage: {this.props.totalDmg} 
                        <br />
                Boss Damage: {this.props.totalBossDmg}
            </div>
        )
    }
}

export default DamageChart