import { addFinal,
        coolReduce_final_calc,
        equilibrium_final_calc,
        infinity_final_calc,
        passive_final_calc,
        recycle_final_calc,
        template_infinity_final_calc } from "../functions/final_comp";
import { optimizeHyperUnion,
        optimizeHyperUnion_demon,
        optimizeHyperUnion_xenon } from "../functions/optimizer";
import {equipAuxiliary,
        equipCool,
        equipCoolComp,
        equipCoolComp_demon,
        equipCoolComp_xenon,
        equipCoreAdd,
        equipCoreAdd_demon,
        equipCoreAdd_xenon,
        equipFarm,
        equipFarm_demon,
        equipFarm_xenon,
        equipjobWeapattComp,
        equipLevel,
        equipLevelSmooth,
        equipLevel_demon,
        equipLevel_xenon,
        equipLumiComp,
        equipRecycleComp,
        equipSubStat,
        equipSubweap_case1,
        equipSubweap_case2,
        equipUnionReserved,
        gradeNames } from "./equip_data";
import {jobNames,
        jobPassive_base,
        jobSubweapBase,
        jobAbilityInfo,
        jobBuffCond,
        jobUseCoolReduce,
        jobUsebuffFinal,
        jobUseCriRein,
        jobSubweaptype,
        jobMainWeapAtt,
        jobLinkAbilities_main,
        jobPassive_Lv1,
        jobLinkAbilities_semi,
        jobUnion,
        jobCoreStats,
        jobFarm,
        jobStatCond,
        jobCReff,
        jobProperty,
        jobAddIGR,
        jobDopingData,
} from "./job_data";



export class statData
{
    stat_raw_data:number[] = [];
    current_data:number[] = [];

    main_stat_pure: number = 0;
    main_stat_rate: number = 0;
    main_stat_abs: number = 0;
    sub_stat_pure: number = 0;
    sub_stat_rate: number = 0;
    sub_stat_abs: number = 0;
    att_mag: number = 0;
    att_mag_rate: number = 0;
    dmg: number = 0;
    boss_dmg: number = 0;
    final_dmg: number = 0;
    ign_dmg: number = 0;
    cri_rate: number = 0;
    cri_dmg: number = 0;

    constructor(statinfo:number[])
    {
        for(var ii=0; ii<statinfo.length;ii++)
        {
            this.stat_raw_data.push(statinfo[ii]);
        }
        for(var ii=statinfo.length; ii<14;ii++)
        {
            this.stat_raw_data.push(0);
        }

        this.main_stat_pure = this.stat_raw_data[0];
        this.main_stat_rate = this.stat_raw_data[1];
        this.main_stat_abs = this.stat_raw_data[2];
        this.sub_stat_pure = this.stat_raw_data[3];
        this.sub_stat_rate = this.stat_raw_data[4];
        this.sub_stat_abs = this.stat_raw_data[5];
        this.att_mag = this.stat_raw_data[6];
        this.att_mag_rate = this.stat_raw_data[7];
        this.dmg = this.stat_raw_data[8];
        this.boss_dmg = this.stat_raw_data[9];
        this.final_dmg = this.stat_raw_data[10];
        this.ign_dmg = this.stat_raw_data[11];
        this.cri_rate = this.stat_raw_data[12];
        this.cri_dmg = this.stat_raw_data[13];

        
        
    }

    update()
    {
        this.current_data[0] = this.main_stat_pure;
        this.current_data[1] = this.main_stat_rate;
        this.current_data[2] = this.main_stat_abs;
        this.current_data[3] = this.sub_stat_pure;
        this.current_data[4] = this.sub_stat_rate;
        this.current_data[5] = this.sub_stat_abs;
        this.current_data[6] = this.att_mag;
        this.current_data[7] = this.att_mag_rate;
        this.current_data[8] = this.dmg;
        this.current_data[9] = this.boss_dmg;
        this.current_data[10] = this.final_dmg;
        this.current_data[11] = this.ign_dmg;
        this.current_data[12] = this.cri_rate;
        this.current_data[13] = this.cri_dmg;

    }


    add_stat(to_add:statData)
    {
        this.main_stat_pure += to_add.main_stat_pure;
        this.main_stat_rate += to_add.main_stat_rate;
        this.main_stat_abs += to_add.main_stat_abs;
        this.sub_stat_pure += to_add.sub_stat_pure;
        this.sub_stat_rate += to_add.sub_stat_rate;
        this.sub_stat_abs += to_add.sub_stat_abs;
        this.att_mag += to_add.att_mag;
        this.att_mag_rate += to_add.att_mag_rate;
        this.dmg += to_add.dmg;
        this.boss_dmg += to_add.boss_dmg;
        this.final_dmg = addFinal(this.final_dmg, to_add.final_dmg);
        this.ign_dmg = (1 - (1 - this.ign_dmg * 0.01) * (1 - to_add.ign_dmg * 0.01)) * 100;
        this.cri_rate += to_add.cri_rate;
        this.cri_dmg += to_add.cri_dmg;

        this.update();

    }

    sub_stat(to_sub:statData)
    {
        this.main_stat_pure -= to_sub.main_stat_pure;
        this.main_stat_rate -= to_sub.main_stat_rate;
        this.main_stat_abs -= to_sub.main_stat_abs;
        this.sub_stat_pure -= to_sub.sub_stat_pure;
        this.sub_stat_rate -= to_sub.sub_stat_rate;
        this.sub_stat_abs -= to_sub.sub_stat_abs;
        this.att_mag -= to_sub.att_mag;
        this.att_mag_rate -= to_sub.att_mag_rate;
        this.dmg -= to_sub.dmg;
        this.boss_dmg -= to_sub.boss_dmg;
        this.final_dmg = (this.final_dmg * 0.01 + 1) / (to_sub.final_dmg * 0.01 + 1) * 100 -100;
        this.ign_dmg = (this.ign_dmg - to_sub.ign_dmg) / (1 - to_sub.ign_dmg * 0.01);
        this.cri_rate -= to_sub.cri_rate;
        this.cri_dmg -= to_sub.cri_dmg;

        this.update();

    }

    deepCopy()
    {   
        this.update();

        return new statData(this.current_data);
    }

    calcMainStat():number
    {
        return Math.floor(this.main_stat_pure * (this.main_stat_rate/100 + 1)) + this.main_stat_abs;

    }


    
}

export class jobData
{
    jobName_:string;

    jobBuffCond_:string;
    jobability_:number;
    jobSubweapType_:number;
    jobStatType_:number;
    jobProperty_:number[];

    coolReduce_:number;
    buffFinal_:number;
    criRein_:number;
    weapData_:number[];

    passiveData_:statData;
    passiveData_abl1lv:statData;
    subweap_:statData;
    linkAbility_main:statData;
    linkAbility_sub:statData;
    farm_:statData;
    union_:statData;
    doping_:statData
    coreStat_:statData;

    statData_:statData;

    constructor(jobName:jobNames)
    {
        this.jobName_= jobName;
        
        this.jobBuffCond_ = jobBuffCond[jobName];
        this.jobability_ = jobAbilityInfo[jobName];
        this.jobSubweapType_ = jobSubweaptype[jobName];
        this.jobStatType_ = jobStatCond[jobName];
        this.jobProperty_ = jobProperty[jobName];
        
        this.coolReduce_ = jobUseCoolReduce[jobName];
        this.buffFinal_ = jobUsebuffFinal[jobName];
        this.criRein_ = jobUseCriRein[jobName];
        this.weapData_ = jobMainWeapAtt[jobName];
        


        this.passiveData_ = new statData(jobPassive_base[jobName]);
        this.passiveData_.ign_dmg = jobAddIGR[jobName][0];
        this.passiveData_abl1lv = new statData(jobPassive_Lv1[jobName]);
        this.passiveData_abl1lv.ign_dmg = jobAddIGR[jobName][0];

        this.subweap_ = new statData(jobSubweapBase[jobName]);
        this.linkAbility_main = new statData(jobLinkAbilities_main[jobName]);
        this.linkAbility_sub  = new statData(jobLinkAbilities_semi[jobName]);
        this.farm_ = new statData(jobFarm[jobName]);
        this.union_ = new statData(jobUnion[jobName]);        
        this.coreStat_ = new statData(jobCoreStats[jobName]);

        this.doping_ = new statData(jobDopingData[jobName]);

        this.statData_ = this.passiveData_ ;
        if(this.jobability_ == 3)
        {
            this.statData_ = this.passiveData_abl1lv;
        }
        this.statData_.add_stat(this.subweap_);
        this.statData_.add_stat(this.linkAbility_main);
        this.statData_.add_stat(this.farm_);
        this.statData_.add_stat(this.union_);
        this.statData_.add_stat(this.coreStat_);



    }

    ap_by_hero(level:number):number
    {
        if(this.jobName_ == '팔라딘')
        {
            return Math.floor((18+5*level)*0.16);
        }
        else if(this.jobName_ == '제논')
        {
            return Math.floor((26+5*level)*0.15);
        }
        else
        {
            return Math.floor((18+5*level)*0.15);
        }
    }

    calc100dmg(statinfo:statData, level:number, petit_rumi:number,monster_guard:number):number
    {
        var prof_coeff = (this.jobProperty_[0]+1)/2;
        var weap_coeff = this.jobProperty_[1];
        var stat_coeff = (4*(Math.floor(statinfo.main_stat_pure * (statinfo.main_stat_rate/100 + 1)) + statinfo.main_stat_abs) + Math.floor(statinfo.sub_stat_pure * (statinfo.sub_stat_rate/100 + 1)) + statinfo.sub_stat_abs) / 100;
        if(this.jobName_ == '데몬어벤져')
        {
            let equip_main_stat = Math.floor(statinfo.main_stat_pure * (statinfo.main_stat_rate/100 + 1)) + statinfo.main_stat_abs;
            let pure_hp = 545 + level*90;

            stat_coeff = (4*(pure_hp/14 + (equip_main_stat - pure_hp)/17.5) +  Math.floor(statinfo.sub_stat_pure * (statinfo.sub_stat_rate/100 + 1)) + statinfo.sub_stat_abs) / 100;
        }
        
        var att_coeff = Math.floor(statinfo.att_mag * (statinfo.att_mag_rate/100 + 1)) + petit_rumi;
        var dmg_coeff = (100 + statinfo.dmg + statinfo.boss_dmg) / 100;
        var final_coeff = (100 + statinfo.final_dmg) / 100;
        var ign_coeff = Math.max(0, 1 - monster_guard / 100 * (1-statinfo.ign_dmg / 100));
        var cri_coeff = Math.min(statinfo.cri_rate,100)/100 * (0.35 + statinfo.cri_dmg/100) + 1;
       
        console.log("coeffs")
        console.log(prof_coeff)
        console.log(weap_coeff)
        console.log(stat_coeff)
        console.log(att_coeff)
        console.log(dmg_coeff)
        console.log(final_coeff)
        console.log(ign_coeff)
        console.log(cri_coeff)

        return Math.floor(prof_coeff * weap_coeff * stat_coeff * att_coeff * dmg_coeff * final_coeff * ign_coeff * cri_coeff);
    }


}


export class TemplateData
{
    
    jobData_:jobData;
    jobName_:jobNames;
    gradeName_:gradeNames;
    level_:number;
    hyper_point:number;
    union_blocks:number;
    reserved_blocks:number;

    petit_rumi:number = 0;
    monster_gaurd_rate:number;
    
    totalStat_ :statData;
    templatejobStat_:statData;
    gradeEquipStat_ :statData;
    optimizeResult_:statData;




    constructor(gradeName:gradeNames, jobData:jobData, monGaurd:number, final_dmg:number)
    {
        this.monster_gaurd_rate = monGaurd;
        this.gradeName_ = gradeName;
        this.jobData_ = jobData;
        this.jobName_ = jobData.jobName_;
        this.templatejobStat_ = jobData.statData_.deepCopy();
        this.level_ = equipAuxiliary[gradeName][0];
        this.hyper_point = equipAuxiliary[gradeName][1];
        this.union_blocks = equipAuxiliary[gradeName][2];
        this.reserved_blocks = equipUnionReserved[gradeName][jobData.buffFinal_];
        
        this.jobData_.statData_.final_dmg = final_dmg;


        //장비 수준 확정
        this.gradeEquipStat_ = new statData(equipLevel[gradeName]);
        this.gradeEquipStat_.add_stat(new statData(equipCoreAdd[gradeName]));
        //무기공 보정
        this.gradeEquipStat_.att_mag -= jobMainWeapAtt["히어로"][equipjobWeapattComp[gradeName]];
        this.gradeEquipStat_.att_mag += jobMainWeapAtt[jobData.jobName_][equipjobWeapattComp[gradeName]];
        //특이 직업은 별도로 빼버림
        if(this.jobName_ == '제논')
        {
            this.gradeEquipStat_ = new statData(equipLevel_xenon[gradeName]);
            this.gradeEquipStat_.add_stat(new statData(equipCoreAdd_xenon[gradeName]));
        }
        else if(this.jobName_ == '데몬어벤져')
        {
            this.gradeEquipStat_ = new statData(equipLevel_demon[gradeName]);
            this.gradeEquipStat_.add_stat(new statData(equipCoreAdd_demon[gradeName]));
        }
        this.gradeEquipStat_.add_stat(this.jobData_.doping_);
        
        //메용, 시그 보정
        //아 씨발 진짜 데벤져 병신같은 직업 좆같아서 못해먹겠네
        if(this.jobName_ != '데몬어벤져')
        {
            this.gradeEquipStat_.main_stat_pure += this.jobData_.ap_by_hero(this.level_);
        }
        

        
        if((jobData.jobName_ == '나이트워커')
        ||(jobData.jobName_ == '소울마스터')
        ||(jobData.jobName_ == '스트라이커')
        ||(jobData.jobName_ == '윈드브레이커')
        ||(jobData.jobName_ == '플레임위자드'))
        {
            this.gradeEquipStat_.main_stat_pure += Math.floor(this.level_/2)
        }


        
        //2부스탯, 보조 보정
        if(jobData.jobStatType_ == 1)
        {
            this.gradeEquipStat_.sub_stat_pure = 2 * this.gradeEquipStat_.sub_stat_pure - equipSubStat[gradeName];
        }
        if(jobData.jobSubweapType_ == 1)
        {
            this.gradeEquipStat_.add_stat(new statData(equipSubweap_case1[gradeName]));
        }
        else if(jobData.jobSubweapType_ == 2)
        {
            this.gradeEquipStat_.add_stat(new statData(equipSubweap_case2[gradeName]));
        }
        //18 유닠둘둘 이하 보정
        if(equipLevelSmooth[gradeName] == 1)
        {
            this.templatejobStat_.sub_stat(jobData.farm_);

            if(this.jobName_ == '제논')
            {
                this.templatejobStat_.add_stat(new statData(equipFarm_xenon[gradeName]));    
            }
            else if(this.jobName_ == '데몬어벤져')
            {
                this.templatejobStat_.add_stat(new statData(equipFarm_demon[gradeName]));    
            }
            else
            {
                this.templatejobStat_.add_stat(new statData(equipFarm[gradeName]));
            }
            
            
            if(gradeName=='버닝메린이')
            {
                this.gradeEquipStat_.sub_stat(jobData.linkAbility_main);
                this.gradeEquipStat_.sub_stat(jobData.union_);
                this.gradeEquipStat_.sub_stat(jobData.coreStat_);
            }
            else{
                this.gradeEquipStat_.add_stat(jobData.linkAbility_sub);
            }

        }
        else
        {
            this.petit_rumi = Math.floor(this.level_/20);
        }
        //쿨감 보정
        if(jobData.coolReduce_ == 1)
        {
            if(this.jobName_ == '제논')
            {
                this.gradeEquipStat_.main_stat_rate -= equipCoolComp_xenon[gradeName][jobCReff[jobData.jobName_][3]];
            }
            else if(this.jobName_ == '데몬어벤져')
            {
                this.gradeEquipStat_.main_stat_rate -= equipCoolComp_demon[gradeName][jobCReff[jobData.jobName_][3]];
            }
            else
            {
                this.gradeEquipStat_.main_stat_rate -= equipCoolComp[gradeName][jobCReff[jobData.jobName_][3]];
            }
           
        }
        

        this.totalStat_ = this.templatejobStat_;
        this.totalStat_.add_stat(this.gradeEquipStat_);
        this.optimizeResult_ = optimizeHyperUnion(this.totalStat_,this.hyper_point,this.union_blocks,this.reserved_blocks,jobData.criRein_,monGaurd);
        if(this.jobName_ == '제논')
        {
            this.optimizeResult_ = optimizeHyperUnion_xenon(this.totalStat_,this.hyper_point,this.union_blocks,this.reserved_blocks,jobData.criRein_,monGaurd);
        }
        if(this.jobName_ == '데몬어벤져')
        {
            this.optimizeResult_ = optimizeHyperUnion_demon(this.totalStat_,this.hyper_point,this.union_blocks,this.reserved_blocks,jobData.criRein_,monGaurd,this.level_);
        }
        this.totalStat_.add_stat(this.optimizeResult_);

        //직업 특색에 따른 종댐 보정
        //초과 크리 보정
        if(this.totalStat_.cri_rate > 100)
        {
            var over_rate = this.totalStat_.cri_rate - 100;
            this.totalStat_.cri_rate = 100;
            this.totalStat_.att_mag += over_rate*2.35;
        }
        //벞지 보정
        if(this.jobData_.buffFinal_ == 2)
        {
            this.totalStat_.final_dmg = addFinal(this.totalStat_.final_dmg,equilibrium_final_calc(equipLumiComp[this.gradeName_]));
           
        }
        else if(this.jobData_.buffFinal_ == 1)
        {
            this.totalStat_.final_dmg = addFinal(this.totalStat_.final_dmg,template_infinity_final_calc(this.gradeName_));
        }
        //쿨감 보정
        if(this.jobData_.coolReduce_ == 1)
        {
            this.totalStat_.final_dmg = addFinal(this.totalStat_.final_dmg,coolReduce_final_calc(this.jobName_,equipCool[this.gradeName_][jobCReff[this.jobName_][3]]))
            
        }
        //패시브, 재사용 보정
        if(this.jobData_.jobability_ == 3)
        {
            this.totalStat_.final_dmg = addFinal(this.totalStat_.final_dmg,passive_final_calc(this.jobName_));
        } 
        else if(this.jobData_.jobability_ == 2)
        {
            this.totalStat_.final_dmg = addFinal(this.totalStat_.final_dmg,recycle_final_calc(equipRecycleComp[this.gradeName_]));
        }


    }

    calcMainStat():number
    {
        return this.totalStat_.calcMainStat();
    }

    calc100dmg():number
    {
        return this.jobData_.calc100dmg(this.totalStat_,this.level_,this.petit_rumi,this.monster_gaurd_rate);
    }

}

export class UserStatdata
{
    jobName:jobNames;
    jobData_:jobData;
    dopingData:statData;
    statData_:statData;
    doping_applied:statData;

    server:number;
    level:number;
    final_dmg:number;

    stat_w_hero:number;
    stat_wo_hero:number;

    stat_pure:number;
    stat_rate:number;
    stat_abs:number;
    sub_stat:number;
    stat_atk:number;
    dmg:number;
    boss_dmg:number;
    ign_dmg:number;
    cri_dmg:number;
    att_mag:number;
    att_mag_rate:number;
    auxiliary_data:number[];
    link_dmg:number;


    

    constructor(jobData:jobData, baseData:number[], statData_front:number[], statData_back:number[], equipData:number[], auxiliaryData:number[],linkData:number[])
    {
        this.jobName = jobData.jobName_;
        this.jobData_ = jobData;
        this.dopingData = jobData.doping_;

        this.server = baseData[0];
        this.level = baseData[1];
        this.final_dmg = baseData[2];

        //스탯 계산

        this.stat_w_hero = 0;
        this.stat_wo_hero = 0;
        this.sub_stat = 0;

        if(this.jobData_.jobStatType_== 2) //제논
        {
            this.stat_w_hero = statData_front[0]+statData_front[1]+statData_front[2];
            this.stat_wo_hero = statData_front[3]+statData_front[4]+statData_front[5];
        }
        else if(this.jobData_.jobStatType_== 1) //이중 부스탯
        {
            this.stat_w_hero = statData_front[0];
            this.stat_wo_hero = statData_front[1];
            this.sub_stat = statData_front[2]+statData_front[3];
        }
        else
        {
            this.stat_w_hero = statData_front[0];
            this.stat_wo_hero = statData_front[1];
            this.sub_stat = statData_front[2];
        }

        this.stat_atk = statData_back[0];
        this.dmg = statData_back[1];
        this.boss_dmg = statData_back[2];
        this.ign_dmg =  (1 - (1 - statData_back[3] * 0.01) * (1 - 3 * Math.floor((linkData[0]+1)/2) * 0.01)) * 100;
        this.cri_dmg = statData_back[4];

        this.att_mag_rate = equipData[0]+jobData.statData_.att_mag_rate;
        
        this.stat_abs = 0;
        for(var ii=1; ii < equipData.length; ii++)
        {
            this.stat_abs += equipData[ii];
        }

        this.auxiliary_data = auxiliaryData;

        this.link_dmg = 3 * Math.floor((linkData[0]+1)/2) + 1.5 * linkData[1] + 6 * linkData[2] + 4.5 * linkData[3] + 4 * linkData[4] + 2 * linkData[5];

        //calculate stat rate
        var stat_difference = this.stat_w_hero - this.stat_wo_hero;
        var pure_hero_ap = jobData.ap_by_hero(this.level);
        this.stat_rate = Math.round((stat_difference/pure_hero_ap-1)*100);        
        //calculate pure stat
        var stat_w_per = this.stat_wo_hero - this.stat_abs;
        this.stat_pure = Math.ceil(stat_w_per/(1+this.stat_rate/100));
       
        //데벤져 진짜 아아아아아아아아아아아아ㅏㅇ
        var actual_main_stat = this.stat_w_hero;
        if(this.jobName == '데몬어벤져')
        {
            var temp_hp = stat_difference * 2.5;
            var hp_w_per = this.stat_w_hero - this.stat_abs;
            this.stat_rate = Math.round((hp_w_per/temp_hp-1)*100);
            this.stat_pure = Math.ceil(hp_w_per/(1+this.stat_rate/100));
            var level_hp = 545 + this.level * 90;
            var item_hp = this.stat_w_hero - level_hp;
            actual_main_stat = level_hp / 14 + item_hp / 17.5;          
        }
         //calculate att_mag
         var job_weap_coeff = jobData.jobProperty_[1];

        this.att_mag = Math.ceil(this.stat_atk/((this.sub_stat+4*actual_main_stat)*0.01*job_weap_coeff*(1+this.dmg*0.01)*(1+this.final_dmg*0.01)*(1+this.att_mag_rate*0.01)))
        
        console.log("췡")
        console.log(this.stat_pure)
        console.log(this.stat_rate)
        console.log(this.stat_abs)
        console.log(this.sub_stat)
        console.log(this.stat_atk)
        console.log(this.dmg)
        console.log(this.att_mag_rate)
        console.log(this.final_dmg)
        console.log(this.att_mag)

        this.statData_ = new statData([this.stat_pure, this.stat_rate, this.stat_abs, this.sub_stat,0,0,this.att_mag,this.att_mag_rate,this.dmg+this.link_dmg,this.boss_dmg,this.final_dmg,this.ign_dmg,100,this.cri_dmg]);

        

        
        //직업 특색에 따른 종댐 보정 (aux 4)
        if(this.jobData_.criRein_ == 1)
        {
            var over_rate = this.auxiliary_data[4] - 100;
            if(over_rate < 0)
            {
                over_rate = 0;
            }
            this.statData_.att_mag += over_rate*2.35;
        }
        //벞지 보정 (aux 3)
        if(this.jobData_.buffFinal_ == 2)
        {
            this.statData_.final_dmg = addFinal(this.statData_.final_dmg,equilibrium_final_calc(this.auxiliary_data[3]));
        }
        else if(this.jobData_.buffFinal_ == 1)
        {
            this.statData_.final_dmg = addFinal(this.statData_.final_dmg,infinity_final_calc(this.auxiliary_data[2], this.auxiliary_data[3], 30, 0.05));
        }
        //쿨감 보정 (aux 2)
        if(this.jobData_.coolReduce_ == 1)
        {
            this.statData_.final_dmg = addFinal(this.statData_.final_dmg,coolReduce_final_calc(this.jobName,this.auxiliary_data[2]))
        }
        //패시브, 재사용 보정 (aux 1)
        if(this.jobData_.jobability_ == 3)
        {
            if(this.auxiliary_data[1] == 3)
            {
                this.statData_.final_dmg = addFinal(this.statData_.final_dmg,passive_final_calc(this.jobName));
            }
            else
            {
                this.jobData_.jobProperty_[0] = jobPassive_base[this.jobName][14];
                this.jobData_.jobProperty_[1] = jobPassive_base[this.jobName][15];
            }
            
        } 
        else if(this.jobData_.jobability_ == 2)
        {
            this.statData_.final_dmg = addFinal(this.statData_.final_dmg,recycle_final_calc(this.auxiliary_data[1]));
        }
        




        this.doping_applied = this.statData_.deepCopy();
        this.doping_applied.add_stat(jobData.doping_);

        //추가 조정, 메소드 관리 필요
        
        if(this.jobName == '데몬어벤져')
        {
            this.doping_applied.main_stat_rate -= 40; //쓸뻥이 이미 고려되어있기 때문에 뺸다
        }
        else
        {
            this.doping_applied.main_stat_pure += this.jobData_.ap_by_hero(this.level);    
        }
        this.doping_applied.ign_dmg = (1 - (1 -this.doping_applied.ign_dmg * 0.01) * (1 - jobAddIGR[this.jobName][1] * 0.01) * (1 - auxiliaryData[0] * 2 * 0.01)) * 100;
        

    }

    calc100dmg(monster_gaurd_rate:number):number
    {
        return this.jobData_.calc100dmg(this.doping_applied,this.level,0,monster_gaurd_rate);
    }

}