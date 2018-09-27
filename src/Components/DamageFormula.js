import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class DamageFormula extends Component {
    render() {
        return (
            <div className="ba bw-3 ma1 pa2 rounded bg-warning">
                Non-Crit Damage: [ {<b>{this.props.atk}</b>} ATK ] <FontAwesomeIcon icon="times" /> [ 1 + {<b>{this.props.atkIncrease}%</b>} Atk Increase / 100 ] <FontAwesomeIcon icon="times" /> [ 1 + {<b>{this.props.bossAtk}% </b>} Boss Atk / 100 ] <FontAwesomeIcon icon="times" /> [ 1 + {<b>{this.props.playerAtk}% </b>} Player Atk / 100 ] <FontAwesomeIcon icon="times" /> <FontAwesomeIcon icon="arrow-right" />
                <br />
                <FontAwesomeIcon icon="arrow-right" /> [ 1 + {<b>{this.props.dmgIncrease}% </b>}Dmg Increase / 100 ] <FontAwesomeIcon icon="times" /> [ {<b>{this.props.skillDmg}%</b>} Skill Dmg ] <FontAwesomeIcon icon="times" /> [ {<b>{this.props.skillHit}</b>} Skill Hit ]
                <br />
                Crit Damage : [{<b>{this.props.atk}</b>} ATK + {<b>{this.props.critAtk}</b>} Crit ATK ] <FontAwesomeIcon icon="times" /> [ 1 + {<b>{this.props.atkIncrease}%</b>} Atk Increase / 100 ] <FontAwesomeIcon icon="times" /> [ 1 + {<b>{this.props.bossAtk}% </b>} Boss Atk / 100 ] <FontAwesomeIcon icon="times" /> [ 1 + {<b>{this.props.playerAtk}% </b>} Player Atk / 100 ] <FontAwesomeIcon icon="times" /> <FontAwesomeIcon icon="arrow-right" />
                <br />
                <FontAwesomeIcon icon="arrow-right" /> [ 1 + ({<b>{this.props.dmgIncrease}% </b>}Dmg Increase + {<b>{this.props.critDmg}%</b>} Crit Dmg) / 100 ] <FontAwesomeIcon icon="times" /> [ {<b>{this.props.skillDmg}%</b>} Skill Dmg ] <FontAwesomeIcon icon="times" /> [ {<b>{this.props.skillHit}</b>} Skill Hit ]
                <br />
                Average Damage : ((1 + {<b>{this.props.critRate}%</b>} / 100) * Non-Crit Damage ) + (({<b>{this.props.critRate}%</b>} / 100) * Crit Damage )
            </div>
        )
    }
}

export default DamageFormula;