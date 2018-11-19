import React, {Component} from 'react';
import './CalculatorItems.css'

class Atk extends Component {
    constructor(props) {
        super(props);

        this.state = {stats: ''}

    }

    render() {
        return (
            <div>
                <label>PHY/MAG ATK</label><br/>
                <input  value={this.state.stats}
                        onChange={event =>  { 
                                    const stats = event.target.value;
                                    this.setState({ stats });
                                    this.props.onValueChange(stats); 
                                }
                        }
                        
                        type="number"
                />
                <br/><br/>
            </div>
        )
    }
}

class AtkIncrease extends Component {
    constructor(props) {
        super(props);

        this.state = {stats: ''}

    }

    render() {
        return (
            <div>
                <label  for ="atkincrease">PHY/MAG ATK Increase (%)</label><br/>
                <input  value={this.state.stats}
                        onChange={event => {
                                    const stats = event.target.value;
                                    this.setState({ stats });
                                    this.props.onValueChange(stats);
                                } 
                            }
                        type="number"
                />
                <br/><br/>
            </div>
        )
    }
}

class DmgIncrease extends Component {
    constructor(props) {
        super(props);

        this.state = {stats: ''}

    }
    render() {
        return (
            <div>
                <label  for="dmgpercent">PHY/MAG DMG Increase (%)</label><br/>
                <input  value={this.state.stats}
                        onChange={event => {
                            const stats = event.target.value;
                            this.setState({ stats });
                            this.props.onValueChange(stats);
                            } 
                        }
                        type ="number"
                />
                <br/><br/>
            </div>
        )
    }
}

class BossAtk extends Component {
    constructor(props) {
        super(props);

        this.state = {stats: ''}

    }
    render() {
        return (
            <div>
                <label  for ="bossatk">Boss ATK Increase (%)</label><br/>
                <input  value={this.state.stats}
                        onChange={event => {
                            const stats = event.target.value
                            this.setState({ stats });
                            this.props.onValueChange(stats);
                        } 
                        }
                        type="number"/>
                <br/><br/>
            </div>
        )
    }
}

class PlayerAtk extends Component {
    constructor(props) {
        super(props);

        this.state = {stats: ''}

    }
    render() {
        return (
            <div>
                <label  for="playeratk">Player ATK Increase (%)</label><br/>
                <input  value={this.state.stats}
                        onChange={event => {
                            const stats = event.target.value;
                            this.setState({ stats });
                            this.props.onValueChange(stats)
                            } 
                        }
                        type="number"
                />
                <br/><br/>
            </div>
        )
    }
}

class SkillDmg extends Component {
    constructor(props) {
        super(props);

        this.state = {stats: ''}

    }
    render() {
        return (
            <div>
                <label  for="skillpercent">Skill DMG %</label><br/>
                <input  value={this.state.stats}
                        onChange={event => {
                            const stats = event.target.value;
                            this.setState({ stats });
                            this.props.onValueChange(stats);
                            } 
                        } 
                        type="number"
                />
                <br/><br/>
            </div>
        )
    }
}

class SkillHit extends Component {
    constructor(props) {
        super(props);

        this.state = {stats: ''}

    }
    render() {
        return (
            <div>
                <label  for="skillhit">Skill Hit Count</label><br/>
                <input  value={this.state.stats}
                        onChange={event => {
                            const stats = event.target.value;
                            this.setState({ stats });
                            this.props.onValueChange(stats);
                            } 
                        }
                        type="number"
                />
                <br/><br/>
            </div>
        )
    }
}

class CritRate extends Component {
    constructor(props) {
        super(props);

        this.state = {stats: ''}

    }
    render() {
        return (
            <div>
                <label  for="critrate">Crit Rate (%)</label><br/>
                <input  value={this.state.stats}
                        onChange={event => {
                            const stats = event.target.value;
                            this.setState({ stats });
                            this.props.onValueChange(stats);
                            } 
                        }
                        type="number"
                />
                <br/><br/>
            </div>
        )
    }
}

class CritAtk extends Component {
    constructor(props) {
        super(props);

        this.state = {stats: ''}

    }
    render() {
        return (
            <div>
                <label  for="critatk">Crit ATK</label><br/>
                <input  value={this.state.stats}
                        onChange={event => {
                            const stats = event.target.value;
                            this.setState({ stats });
                            this.props.onValueChange(stats);
                            } 
                        }
                        type="number"
                />
                <br/><br/>
            </div>
        )
    }
}

class CritDmg extends Component {
    constructor(props) {
        super(props);

        this.state = {stats: ''}

    }
    render() {
        return (
            <div> 
                <label  for="critdmg">Crit DMG (%)</label><br/>
                <input  value={this.state.stats}
                        onChange={event => {
                            const stats = event.target.value;
                            this.setState({ stats });
                            this.props.onValueChange(stats);
                            } 
                        }
                        type="number"
                />
                <br/><br/>
            </div>
        )
    }
}

export { Atk, AtkIncrease, DmgIncrease, BossAtk, PlayerAtk, SkillDmg, SkillHit, CritRate, CritAtk, CritDmg }



