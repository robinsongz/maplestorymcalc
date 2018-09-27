import React, {Component} from 'react';

class MoreStats extends Component {
    render() {
        return (
            <div>
                <div className="w-75 bg-warning center ba bw2 b--black pa2 ma1 shadow-5 rounded">
            
            Average Total Boss Damage: {this.props.totalBossDmg}
                    <br />
            Average Total Player Damage: {this.props.totalPlayerDmg}
                    <br />
        </div>
            </div>
        )
    }
}

export default MoreStats;