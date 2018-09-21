import React, {Component} from 'react';
import {Atk, AtkIncrease, DmgIncrease, BossAtk, PlayerAtk, SkillDmg, SkillHit, CritRate, CritAtk, CritDmg} from './CalculatorItems';
import Swal from 'sweetalert2';
import './Calculator.css'
import {CalculateButton, ResetButton, RecordButton} from './Buttons';
import DamageChart from './DamageChart';


class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {  atk: 0,
                        atkIncrease: 0,
                        dmgIncrease: 0,
                        bossAtk: 0,
                        playerAtk: 0,
                        skillDmg: 100,
                        skillHit: 1,
                        critRate: 0,
                        critAtk: 0,
                        critDmg: 0,
                        totalDmg: 0,
                        totalBossDmg: 0,
                        totalDmgRecord: null,
                        totalBossDmgRecord: null
                      }
    }


    damageCalc = () => {

        const round = (num, places) => {
            var multiplier = Math.pow(10, places);
            return Math.round(num * multiplier) / multiplier;
        }
        let atk = this.state.atk;
        let atkIncrease = this.state.atkIncrease;
        let playerAtk = this.state.playerAtk;
        let bossAtk = this.state.bossAtk;

        let bossPlayerAtk = (playerAtk + bossAtk);

        let dmgIncrease = this.state.dmgIncrease;
        let skillDmg = this.state.skillDmg;
        let skillHit = this.state.skillHit;
        let critRate = this.state.critRate;
        let critAtk = this.state.critAtk;
        let critDmg = this.state.critDmg;

        let critAtkCalc = (critRate/100) * critAtk;
        let critDmgCalc = (critRate/100) * critDmg;

        let totalDamage = ((atk + critAtkCalc) * (1+atkIncrease/100) * (1+playerAtk/100) * (1+(dmgIncrease+critDmgCalc)/100) * (skillDmg/100) * skillHit);
        let totalBossDamage = ((atk + critAtkCalc) * (1+atkIncrease/100) * (1+bossPlayerAtk/100) * (1+(dmgIncrease+critDmgCalc)/100) * (skillDmg/100) * skillHit);
        

        let totalDamageRound = round((totalDamage),0);
        let totalBossDamageRound = round(totalBossDamage,0);

        if (atk === null ) {
            return Swal("Please input ATK", "", "warning");
        }

        if (critRate > 100) {
            return Swal("You can't have more than", "100% Crit Rate!", "warning")
        }

        this.setState({ totalDmg: totalDamageRound, 
                        totalBossDmg: totalBossDamageRound})
        

        //Swal(damageStatement(totalDamageRound), damageStatement(totalBossDamageRound) + " against bosses", "success")
        
    }

    refreshPage = () => {
        window.location.reload();
    } 

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          this.damageCalc();
        }
    }

    recordDamage = () => {
        this.setState({totalDmgRecord: this.state.totalDmg, 
                        totalBossDmgRecord: this.state.totalBossDmg})

    }

    
    
    render() {
        return (
            <div onKeyPress={this._handleKeyPress}>
                <div className="card card-image bg-light-yellow">
                    <br />
                    <div className="tc w-25 h-100 bg-warning center">
                        <br />
                        <DamageChart totalDmg={this.state.totalDmg} totalBossDmg={this.state.totalBossDmg}/>
                        <br />
                    </div>
                    <hr />
                <form className="form-group m-2 p-2">
                    <div className="row justify-content-center">
                        <div className="col col-lg-3 text-center">
                            <Atk onValueChange={atk => this.setState({ atk })} onType={this.damageCalc}/>
                            <AtkIncrease onValueChange={atkIncrease => this.setState({ atkIncrease })}/>
                            <DmgIncrease onValueChange={dmgIncrease => this.setState({ dmgIncrease })}/>
                            <BossAtk onValueChange={bossAtk => this.setState({ bossAtk })}/>
                            <PlayerAtk onValueChange={playerAtk => this.setState({ playerAtk })}/>
                        </div>
                        <div className="col col-lg-3 text-center">
                            <SkillDmg onValueChange={skillDmg => this.setState({ skillDmg })}/>
                            <SkillHit onValueChange={skillHit => this.setState({ skillHit })}/>
                            <CritRate onValueChange={critRate => this.setState({ critRate })}/>
                            <CritAtk onValueChange={critAtk => this.setState({ critAtk })}/>
                            <CritDmg onValueChange={critDmg => this.setState({ critDmg })}/>
                        </div>
                    </div>
                    <hr />
                
                    <div className="tc">
                        <CalculateButton damageCalc={this.damageCalc}/>
                    </div>
                    {" "}
                    <div className="tc">
                        <RecordButton recordDamage={this.recordDamage} />
                    </div>
                    <div className="tc">
                        <ResetButton refreshPage={this.refreshPage}/>
                        <br/>
                    </div>
                    <div className="tc">
                        Damage: {this.state.totalDmgRecord} <br/>
                        BossDamage: {this.state.totalBossDmgRecord} <br/>
                    </div>
                </form>
            </div>   
        </div>                    
        )    
    }
}


export default Calculator;
