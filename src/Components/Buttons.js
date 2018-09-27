import React , {Component} from 'react'

class CalculateButton extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-primary m-1 w-40" 
                        type="button"
                        onClick={this.props.damageCalc}
                >
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
                        Reset
                        </button>
            </div>
        )
    }
}

class RecordButton extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-primary m-1 w-40"
                        type="button"
                        onClick={this.props.recordDamage}>
                        Record Damage
                </button>
            </div>
        )
    }
}

export {CalculateButton, ResetButton, RecordButton}