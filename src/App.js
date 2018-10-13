import React, {Component} from 'react';
import {Atk, AtkIncrease, DmgIncrease, BossAtk, PlayerAtk, SkillDmg, SkillHit, CritRate, CritAtk, CritDmg} from './Components/CalculatorItems';
import Swal from 'sweetalert2';
import {CalculateButton, MoreStatsButton, } from './Components/Buttons';
import {DamageFormula, MoreStats, Notepad } from './Components/PopUps'
import DamageChart from './Components/DamageChart';
import Navbar from './Components/Navbar';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalculator, faTimes, faArrowRight, faCaretDown, faSave, faEdit, faSquareRootAlt} from '@fortawesome/free-solid-svg-icons'

library.add(faCalculator, faTimes, faArrowRight, faCaretDown, faSave, faEdit, faSquareRootAlt )




class App extends Component {
    constructor(props) {
        super(props);

        this.state = {  atk: '',
                        atkIncrease: '',
                        dmgIncrease: '',
                        bossAtk: '',
                        playerAtk: '',
                        skillDmg: '',
                        skillHit: '',
                        critRate: '',
                        critAtk: '',
                        critDmg: '',
                        totalDmg: '',
                        totalCritDmg: '',
                        totalNonCritDmg: '',
                        totalBossDmg: '',
                        totalPlayerDmg: '',
                        damageFormula: false,
                        moreStats: false,
                        notePad: false,
                        
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
        let dmgIncrease = this.state.dmgIncrease;
        let skillDmg = this.state.skillDmg;
        let skillHit = this.state.skillHit;
        let critRate = this.state.critRate;
        let critAtk = this.state.critAtk;
        let critDmg = this.state.critDmg;

        let totalDamageWithoutCrit = (atk) * (1+atkIncrease/100) * (1+dmgIncrease/100) * (skillDmg/100) * (skillHit);
        let totalDamageWithCrit = (Number(atk) + Number(critAtk)) * (1+atkIncrease/100) * (1+(25+Number(dmgIncrease)+Number(critDmg))/100) * (skillDmg/100) * (skillHit);

        let totalCritDamagePerLine = totalDamageWithCrit / skillHit;
        let totalNonCritDamagePerLine = totalDamageWithoutCrit / skillHit;

        let totalAverageDamage = ((1 - critRate/100) * totalDamageWithoutCrit) + ((critRate/100) * totalDamageWithCrit);

        let totalBossDamageWithoutCrit = (atk) * (1+atkIncrease/100) * (1+(2.5*(bossAtk/100))) * (1+dmgIncrease/100) * (skillDmg/100) * (skillHit);
        let totalBossDamageWithCrit = ((Number(atk) + Number(critAtk)) * (1+atkIncrease/100) * (1+(2.5*(bossAtk/100))) * (1+(25+Number(dmgIncrease)+Number(critDmg))/100) * (skillDmg/100) * (skillHit));

        let totalAverageBossDamage = ((1 - critRate/100) * totalBossDamageWithoutCrit) + ((critRate/100) * totalBossDamageWithCrit);

        let totalPlayerDamageWithoutCrit = (atk) * (1+atkIncrease/100) * (1+playerAtk/100) * (1+dmgIncrease/100) * (skillDmg/100) * (skillHit);
        let totalPlayerDamageWithCrit = ((Number(atk) + Number(critAtk)) * (1+atkIncrease/100) * (1+playerAtk/100) * (1+(25+Number(dmgIncrease)+Number(critDmg))/100) * (skillDmg/100) * (skillHit));

        let totalAveragePlayerDamage = ((1 - critRate/100) * totalPlayerDamageWithoutCrit) + ((critRate/100) * totalPlayerDamageWithCrit);

        

        let totalDamageRound = round(totalAverageDamage,0);
        let totalBossDamageRound = round(totalAverageBossDamage,0);
        let totalPlayerDamageRound = round(totalAveragePlayerDamage,0);
        let totalCritDamageRound = round(totalCritDamagePerLine,0);
        let totalNonCritDamageRound = round(totalNonCritDamagePerLine,0);


        if (atk === "" || atkIncrease === "" || dmgIncrease ===  "" || bossAtk === '' || playerAtk === '' || bossAtk === '' || dmgIncrease === '' || skillDmg === '' || skillHit === '' || critRate === '' || critAtk === '' || critDmg === '') {
            return Swal("Please input all stats", "", "warning");
        }

        if (critRate > 100) {
            return Swal("You can't have more than", "100% Crit Rate!", "warning")
        }

        this.setState({ totalDmg: totalDamageRound, 
                        totalBossDmg: totalBossDamageRound,
                        totalPlayerDmg: totalPlayerDamageRound,
                        totalCritDmg: totalCritDamageRound,
                        totalNonCritDmg: totalNonCritDamageRound,
        
        })
    
}

    refreshPage = () => {
        window.location.reload();
    } 

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          this.damageCalc();
        }
    }

    toggleDamageFormula = () => {
        this.setState({damageFormula: !this.state.damageFormula})
    }

    toggleMoreStats = () => {
        this.setState({moreStats: !this.state.moreStats})
    }

    toggleNotepad = () => {
        this.setState({notePad: !this.state.notePad})

    }

    resetButton = () => {
        this.setState({
            atk: '',
            atkIncrease: '',
            dmgIncrease: '',
            bossAtk: '',
            playerAtk: '',
            skillDmg: '',
            skillHit: '',
            critRate: '',
            critAtk: '',
            critDmg: '',
            totalDmg: '',
            totalCritDmg: '',
            totalNonCritDmg: '',
            totalBossDmg: '',
            totalPlayerDmg: '',
    })
    }

    

    
    
    render() {
        const show = (this.state.damageFormula) ? "show" : "" ;
        const hi = (this.state.moreStats) ? "show" : "" ;
        const hey = (this.state.notePad) ? "show" : "";
        return (
            <div>
                <div className="nowrap">
                <Navbar />
                </div>
           

                <div className="bg-washed-yellow mt2">
                    
                <div className="bg-light-yellow w-90 tc center rounded">
                <div className="tc w-100 h-100 p-2">

                        <MoreStatsButton toggleMoreStats={this.toggleMoreStats} toggleDamageFormula={this.toggleDamageFormula} toggleNotepad={this.toggleNotepad}/>
                    <div className={"collapse navbar-collapse " + show}>
                            <DamageFormula 
                                atk={this.state.atk} 
                                critRate={this.state.critRate} 
                                critAtk={this.state.critAtk} 
                                atkIncrease={this.state.atkIncrease} 
                                bossAtk={this.state.bossAtk}
                                playerAtk={this.state.playerAtk}
                                dmgIncrease={this.state.dmgIncrease} 
                                critDmg={this.state.critDmg} 
                                skillDmg={this.state.skillDmg} 
                                skillHit={this.state.skillHit}
                            />
                    </div>
                </div>
                    <div className="tc">
                        <DamageChart 
                            totalDmg={this.state.totalDmg} 
                            totalNonCritDmg={this.state.totalNonCritDmg}
                            totalCritDmg={this.state.totalCritDmg}
                        />
                        <div className={"collapse navbar-collapse " + hi}>
                        <MoreStats 
                                totalBossDmg={this.state.totalBossDmg}
                                totalPlayerDmg={this.state.totalPlayerDmg}
                                totalNonCritDmgRed={this.state.totalNonCritDmgRed}
                                totalCritDmgRed={this.state.totalCritDmgRed}
                                totalNonCritDmgGray={this.state.totalNonCritDmgGray}
                                totalCritDmgGray={this.state.totalCritDmgGray}
                                totalDmgGray={this.state.totalDmgGray}
                                totalDmgRed={this.state.totalDmgRed}
                            />
                        </div>
                    </div>
                    <div className={"collapse navbar-collapse " + hey}>
                    <Notepad />
                    </div>
                    <hr />
                <form className="form-group m-2 p-2" onKeyPress={this._handleKeyPress}>
                    <div className="row justify-content-center">
                        <div className="col col-lg-3 text-center">
                            <Atk onValueChange={atk => this.setState({ atk })}/>
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
                </form>
            </div>  
            </div> 
        </div>                 
        )    
    }
}


export default App;
