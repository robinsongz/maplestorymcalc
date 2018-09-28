import React , {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CalculateButton extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-primary m-1 w-40" 
                        type="button"
                        onClick={this.props.damageCalc}
                >
                <FontAwesomeIcon icon="calculator" /> {" "}
                Calculate
                </button>
            </div>
            )
        }
}

class ResetButton extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-primary m-1 w-40" 
                                type="button" 
                                onClick={this.props.refreshPage}>
                        <FontAwesomeIcon icon="undo" /> {" "}
                        Reset
                        </button>
            </div>
        )
    }
}

class SaveButton extends Component {
    render() {
        return (
            <div>
                <button 
                    className="btn btn-primary m-1 w-40"
                    type="button"
                    onClick={this.props.saveDamage}>
                <FontAwesomeIcon icon="save" /> {" "}
                Save Damage
                </button>
            </div>
        )
    }
}

class MoreStatsButton extends Component {
    render() {
        return (
            <div>
                <button 
                    className="btn btn-warning ba bw-3 b--black rounded ma1" 
                    type="button" 
                    onClick={this.props.toggleDamageFormula}
                >
                <FontAwesomeIcon icon="caret-down" /> {" "}
                Damage Formula
                </button>
                <button 
                    className="btn btn-warning ba bw-3 b--black rounded ma1" 
                    type="button" 
                    onClick={this.props.toggleMoreStats}
                >
                <FontAwesomeIcon icon="caret-down" /> {" "}
                More Stats 
            </button>
            </div>
        )
    }
}
    

export { CalculateButton, ResetButton, SaveButton, MoreStatsButton, } 