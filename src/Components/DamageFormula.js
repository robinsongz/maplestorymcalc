import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class DamageFormula extends Component {
    render() {
        return (
            <div className="ba bw-3 pa2 rounded bg-warning">
                [ {<b>{this.props.atk}</b>} ATK + ( ({<b>{this.props.critRate}%</b>} Crit Rate /100) * ({<b>{this.props.critAtk}</b>} Crit ATK) ) ] <FontAwesomeIcon icon="times" /> [ 1 + {<b>{this.props.atkIncrease}%</b>} Atk Increase / 100 ] <FontAwesomeIcon icon="times" /> [ 1 + {<b>{this.props.bossAtk}% </b>} Boss Atk / 100 ] <FontAwesomeIcon icon="times" /> [ 1 + {<b>{this.props.playerAtk}% </b>} Player Atk / 100 ] <FontAwesomeIcon icon="times" /> <FontAwesomeIcon icon="arrow-right" />
                <br />
                <br />
                <FontAwesomeIcon icon="arrow-right" /> [ 1 + ( ({<b>{this.props.dmgIncrease}% </b>}Dmg Increase) + ( ({<b>{this.props.critRate}%</b>} Crit Rate / 100) * ({<b>{this.props.critDmg}%</b>} Crit Dmg) ) ) / 100 ] <FontAwesomeIcon icon="times" /> [ {<b>{this.props.skillDmg}%</b>} Skill Dmg ] <FontAwesomeIcon icon="times" /> [ {<b>{this.props.skillHit}</b>} Skill Hit ]
            </div>
        )
    }
}

export default DamageFormula;