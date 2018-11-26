import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import List from './NotepadList';

class MoreStats extends Component {
    render() {
        return (
            <div>
                <div className="w-75 bg-warning center ba bw2 b--black pa2 ma1 shadow-5 rounded">
            
            Average Total Boss Damage: <b>{this.props.totalBossDmg}</b>
            <br />
            Average Total Player Damage: <b>{this.props.totalPlayerDmg}</b>
        </div>
            </div>
        )
    }
}

class DamageFormula extends Component {
    render() {
        return (
            <div className="ba bw-3 ma1 pa2 rounded bg-warning">
                {<b>Non-Crit Damage</b>}: [ {<b>{this.props.atk}</b>} ATK ] <FontAwesomeIcon icon="times" /> [ 1 + {<b>{this.props.atkIncrease}%</b>} Atk Increase / 100 ] <FontAwesomeIcon icon="times" /> [ 1 + (2.5*({<b>{this.props.bossAtk}% </b>} Boss Atk / 100)) ] <FontAwesomeIcon icon="times" /> [ 1 + {<b>{this.props.playerAtk}% </b>} Player Atk / 100 ] <FontAwesomeIcon icon="times" /> <FontAwesomeIcon icon="arrow-right" />
                <br />
                <FontAwesomeIcon icon="arrow-right" /> [ 1 + {<b>{this.props.dmgIncrease}% </b>}Dmg Increase / 100 ] <FontAwesomeIcon icon="times" /> [ {<b>{this.props.skillDmg}%</b>} Skill Dmg ] <FontAwesomeIcon icon="times" /> [ {<b>{this.props.skillHit}</b>} Skill Hit ]
                <br />
        {<b>Crit Damage</b>}: [{<b>{this.props.atk}</b>} ATK + {<b>{this.props.critAtk}</b>} Crit ATK ] <FontAwesomeIcon icon="times" /> [ 1 + {<b>{this.props.atkIncrease}%</b>} Atk Increase / 100 ] <FontAwesomeIcon icon="times" /> [ 1 + (2.5*({<b>{this.props.bossAtk}% </b>} Boss Atk / 100)) ] <FontAwesomeIcon icon="times" /> [ 1 + {<b>{this.props.playerAtk}% </b>} Player Atk / 100 ] <FontAwesomeIcon icon="times" /> <FontAwesomeIcon icon="arrow-right" />
                <br />
                <FontAwesomeIcon icon="arrow-right" /> [ 1 + (25 + ({<b>{this.props.dmgIncrease}% </b>}Dmg Increase + {<b>{this.props.critDmg}%</b>} Crit Dmg)) / 100 ] <FontAwesomeIcon icon="times" /> [ {<b>{this.props.skillDmg}%</b>} Skill Dmg ] <FontAwesomeIcon icon="times" /> [ {<b>{this.props.skillHit}</b>} Skill Hit ]
                <br />
        {<b>Average Damage</b>}: ((1 - {<b>{this.props.critRate}%</b>} Crit Rate / 100) * {<b>Non-Crit Damage</b>} ) + (({<b>{this.props.critRate}%</b>} Crit Rate / 100) * {<b>Crit Damage</b>} )
            </div>
        )
    }
}

class Notepad extends Component {
    constructor(props) {
        super()
        this.state = {
            name: '',
            damage: '',
            items: []
        };
    }

    onChangeName = (event) => {
        this.setState({name: event.target.value})
    }

    onChangeDamage = (event) => {
        this.setState({damage: event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
            name: '',
            damage: '',
            items: [...this.state.items, this.state.name, this.state.damage],
        });
    }

    clearForm = (event) => {
        event.preventDefault()
        this.setState({
                items: [],
        })
    }
    render() {
        return (
            <div className="w-50 bg-warning center ba bw2 b--black pa2 ma1 shadow-5 rounded">
                <h3>Notepad</h3>
                <hr />
                
                <form className="black-80">
                <div className="row">
                <div className="column tc center">
                    <label for="Skill Name" className="f6 b db mb2">Skill Name + Damage</label>
                  
                    <input 
                        value={this.state.name}
                        onChange={this.onChangeName}
                        id="Skill Name"
                        type="text"
                        className="input-reset ba b--black-20 pa2 mb2 db"
                    />
                </div>
                </div>
                    
                    <button onClick={this.onSubmit}
                    className="b ph3 pv2 ba b--black grow pointer f6">Add</button> {" "}
                    <button onClick={this.clearForm}
                    className="b ph3 pv2 ba b--black grow pointer f6">Clear</button>

                </form>
                <hr />
                <List items={this.state.items}
                      
                 />
            </div>
        )
    }
}

export {MoreStats, DamageFormula, Notepad}