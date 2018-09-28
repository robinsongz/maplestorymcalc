import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

class DamageFormula extends Component {
    render() {
        return (
            <div className="ba bw-3 ma1 pa2 rounded bg-warning">
                {<b>Non-Crit Damage</b>}: [ {<b>{this.props.atk}</b>} ATK ] <FontAwesomeIcon icon="times" /> [ 1 + {<b>{this.props.atkIncrease}%</b>} Atk Increase / 100 ] <FontAwesomeIcon icon="times" /> [ 1 + {<b>{this.props.bossAtk}% </b>} Boss Atk / 100 ] <FontAwesomeIcon icon="times" /> [ 1 + {<b>{this.props.playerAtk}% </b>} Player Atk / 100 ] <FontAwesomeIcon icon="times" /> <FontAwesomeIcon icon="arrow-right" />
                <br />
                <FontAwesomeIcon icon="arrow-right" /> [ 1 + {<b>{this.props.dmgIncrease}% </b>}Dmg Increase / 100 ] <FontAwesomeIcon icon="times" /> [ {<b>{this.props.skillDmg}%</b>} Skill Dmg ] <FontAwesomeIcon icon="times" /> [ {<b>{this.props.skillHit}</b>} Skill Hit ]
                <br />
        {<b>Crit Damage</b>}: [{<b>{this.props.atk}</b>} ATK + {<b>{this.props.critAtk}</b>} Crit ATK ] <FontAwesomeIcon icon="times" /> [ 1 + {<b>{this.props.atkIncrease}%</b>} Atk Increase / 100 ] <FontAwesomeIcon icon="times" /> [ 1 + {<b>{this.props.bossAtk}% </b>} Boss Atk / 100 ] <FontAwesomeIcon icon="times" /> [ 1 + {<b>{this.props.playerAtk}% </b>} Player Atk / 100 ] <FontAwesomeIcon icon="times" /> <FontAwesomeIcon icon="arrow-right" />
                <br />
                <FontAwesomeIcon icon="arrow-right" /> [ 1 + ({<b>{this.props.dmgIncrease}% </b>}Dmg Increase + {<b>{this.props.critDmg}%</b>} Crit Dmg) / 100 ] <FontAwesomeIcon icon="times" /> [ {<b>{this.props.skillDmg}%</b>} Skill Dmg ] <FontAwesomeIcon icon="times" /> [ {<b>{this.props.skillHit}</b>} Skill Hit ]
                <br />
        {<b>Average Damage</b>}: ((1 - {<b>{this.props.critRate}%</b>} Crit Rate / 100) * {<b>Non-Crit Damage</b>} ) + (({<b>{this.props.critRate}%</b>} Crit Rate / 100) * {<b>Crit Damage</b>} )
            </div>
        )
    }
}

export {MoreStats, DamageFormula,}