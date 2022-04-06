import { jobCReff, jobNames } from "../data/job_data";
import { polynomial_regression } from './poly_reg';
import { CubicSolver } from "./eqsolver";
import { templategradeNames } from "../data/equip_data";


export function addFinal(elem1:number,elem2:number):number
{
    return (1 + elem1 * 0.01) * (1 + elem2 * 0.01) * 100 -100;
}








export function template_infinity_final_calc(grade:templategradeNames):number
{
    switch(grade)
    {
        case '버닝메린이' :
            return infinity_final_calc(0, 50, 1, 0);
        case '에픽둘둘' :
            return infinity_final_calc(0, 175, 30, 0.05);
        case '에픽+둘둘' :
            return infinity_final_calc(0, 175, 30, 0.05);
        case '유닠둘둘':
            return infinity_final_calc(2, 175, 30, 0.05);
        case '18유닠둘둘':
            return infinity_final_calc(2, 175, 30, 0.05);
        case '반레전둘둘':
            return infinity_final_calc(3, 191, 30, 0.05);
        case '레전둘둘':
            return infinity_final_calc(3, 191, 30, 0.05);
        case '해방 초고스펙':
            return infinity_final_calc(4, 191, 30, 0.05);
        case '5칠흑 2여명':
            return infinity_final_calc(5, 196, 30, 0.05);
        case '9칠흑 2여명':
            return infinity_final_calc(5, 196, 30, 0.05);
        default:
            return 0;
    }
}




export function infinity_final_calc(coolDown:number, buffLength:number, unstable_lvl:number, decrease_ratio:number):number
{
    const prob_table = [1, 6, 6, 6, 10, 11, 12, 12, 12, 8, 6, 5, 2, 2, 1];
    const decrease_table = [20, 23, 24, 25, 27, 30, 33, 35, 38, 40, 45, 50, 55, 60, 65];

    const basic_infinity_length = 41;
    const basic_unstable_cool = (430 - 3 * unstable_lvl);

    var infinity_length = basic_infinity_length * (100 + buffLength) * 0.01;
    var unstable_cool = basic_unstable_cool * (1 - decrease_ratio) - coolDown;


    var reduced_infinity_cool = 0;
    var blank_time = 0;
    var net_efficiency = 0;

    for (var ii = 0; ii < prob_table.length; ii++)
    {
        reduced_infinity_cool = unstable_cool*(100-decrease_table[ii])/100;
        blank_time = reduced_infinity_cool - 2 * infinity_length;
        if(blank_time <0)
        {
            blank_time = 0;
        }
        var cur_efficiency = infinity_efficiency(infinity_length, blank_time);

        net_efficiency = cur_efficiency * prob_table[ii] * 0.01;


    }

    return 100 * net_efficiency;

}


function infinity_efficiency(infinity_time:number, blank_time:number):number
{
    const interval = 7;
    const increment = 3;
    const starting = 70;

    var integration_one_inf = 0;
    var current_final_dmg = starting;
    var elapsed_time = interval;

     
    while (infinity_time > elapsed_time)
    {
        elapsed_time += interval;
        integration_one_inf += current_final_dmg * interval;
        current_final_dmg += increment;
    }
    integration_one_inf += current_final_dmg * (infinity_time + interval - elapsed_time);

    return integration_one_inf * 2 / (infinity_time * 2 + blank_time);

}


export function equilibrium_final_calc(buffLength:number):number
{

    //apocal, light_refl, door_truth, eq_pun, dark_pun, light_pun, ab_kill, baptism,
    var skill_num = [44,0,4,0,0,0,0,0];
    const skill_deal = [9009, 6040.32, 128700, 156240, 98000, 110320, 163363.2, 90090];

    const basic_eq = 17;

    var eq_length = basic_eq * (100 + buffLength) * 0.01;

    const eq_mem = basic_eq;
    var total_eq = eq_length * 3 + eq_mem;

    const mem_cool = 150;

    var first_deal_cycle = total_eq + 56;
    var buff_scarce_sunf = 0;

    if(first_deal_cycle < mem_cool)
    {
        buff_scarce_sunf = mem_cool - first_deal_cycle;
    }

    var final_deal_time = first_deal_cycle + buff_scarce_sunf;

    var total_punishing_num = Math.floor((final_deal_time-6)/28.5);

    // 딜사이클 동안 스킬사용횟수

    const eq_punishing_delay = 0.99;
    
    

    if (eq_length > 35.3)
    {
        skill_num[3] = 6;
    }
    else
    {
        skill_num[3] = 4;
        skill_num[5] = 1;

    }

    skill_num[4] = total_punishing_num - skill_num[3]- skill_num[5];
    skill_num[1] = 25 + Math.floor(buff_scarce_sunf*0.72);

    var eq_deal_time = total_eq - eq_punishing_delay*skill_num[3] - 3.48;

    skill_num[6] = eq_deal_time/7.83;
    skill_num[7] = eq_deal_time/7.83;

    var total_deal = 0;

    for (var ii = 0 ; ii<skill_num.length; ii++)
    {
        total_deal += skill_num[ii] * skill_deal[ii];
    }

    var ratio = total_deal / final_deal_time / 31710.75267;


    return (ratio * 100 - 100);



}

export function coolReduce_final_calc(job_name:jobNames, cool_reduce:number):number
{
    if(jobCReff[job_name][3] == 0)
    {
        return 0;
    }

    var cool_reduce_table = [0,2,4,5];
    var efficiency = [0,jobCReff[job_name][0],jobCReff[job_name][1],jobCReff[job_name][2]];

    var spline_data = polynomial_regression(cool_reduce_table,efficiency,3);
    
    var assumed_efficiency = spline_data[0] + cool_reduce * spline_data[1] +  cool_reduce * cool_reduce * spline_data[2] + cool_reduce *cool_reduce *cool_reduce *spline_data[3]; 

    return assumed_efficiency * 100;

}

export function passive_final_calc(job_name:jobNames):number
{
    switch(job_name)
    {
        case '라라' :
            return 1.8;
        case '메카닉' :
            return 4.51;
        case '카인' :
            return 3.3;
        case '키네시스':
            return 0.86;
        case '호영':
            return 1.55;
        default:
            return 0;
    }
}

export function recycle_final_calc(recycle_:number):number
{
    return recycle_ * 0.225;
}
