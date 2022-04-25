import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';


import { jobNames, jobs } from 'src/app/data/job_data';
import { TemplateData, jobData, UserStatdata } from 'src/app/data/data_format';
import { equipLevel, gradeMainStat, grades, templategrades } from 'src/app/data/equip_data';
import { polynomial_regression } from 'src/app/functions/poly_reg';
import { CubicSolver } from 'src/app/functions/eqsolver';
import { coreData, skillName } from 'src/app/data/job_core';

@Component({
  selector: 'app-container',
  templateUrl: './scouter.component.html',
  styleUrls: ['./scouter.component.scss']
})
export class ScouterComponent implements OnChanges {

  whole_preset:string[] = [];
  max_preset_size = 3;

  job_names = jobs;
  grade_names = grades;
  equip_levels = equipLevel;
  template_grades = templategrades;

  jobName:jobNames = '나이트로드';
  basicData:number[] = [0,275,25,0,0];//서버, 레벨, 최종댐, 루포쉴, 소울 순
  jobdata:jobData = new jobData(this.jobName);
  monster_guard:number = 50;

  jobTemplateData:TemplateData[] = [];
  job100dmgarr:number[]=[];
  jobMainstatarr:number[]=[];
  jobstatarr_for_waterfire:number[]=[];


  userStatData_:UserStatdata;

  cur_preset_num:number = 0;
  is_NAN:boolean = false;
 
  stat_table_front :number[] = [61638, 60038, 7494];
  stat_table_back :number[] = [52862565, 55, 387, 95.5, 99];
  link_table :number[] = [6,6,2,2,2,0];
  equip_table :number[] = [129, 13200, 4400, 150, 440];
  auxiliary_table :number[] = [0,0,0,0,0,0];
  core_table :number[] = [60,60,60,60,60,60];

  stat_table_list :string[]=[];
  stat_table : string[] = statListCommon;
  equip_table_list :string[]=[];
  auxiliary_table_list : number[]  = [];


  core_data : Record<jobNames,number[]> = coreData['나이트로드'];
  core_skill_name : string[] = skillName['나이트로드'];

  
  reboot_final_dmg : number = 0;
  ruin_final_dmg : number = 0;
  actual_final_dmg : number = 0;

  spline_data:number[] = [];
  spline_data_waterfire:number[] = [];
  water_fire_label:string = 'moderate';
  water_fire_info:string = '적정';

  actual_stat:number = 0;

  constructor(
    private snackbar: MatSnackBar,
    private titleService: Title
  ) {
    this.titleService.setTitle(
      'MapleScouter - 환산 스탯 계산'
    );

    this.load_preset();
    this.userStatData_ = new UserStatdata(this.jobdata, this.basicData, this.stat_table_front, this.stat_table_back, this.equip_table, this.auxiliary_table, this.link_table, this.core_table);


  }


  ngOnChanges(changes: SimpleChanges): void {
    
  }

  initializeJobValues()
  {
    this.jobdata = new jobData(this.jobName);
    

    if(this.jobdata.jobStatType_== 3)
    {
      this.stat_table_list = statListDemonavenger;
      this.equip_table_list = equipListDemonavenger;
    }
    else if(this.jobdata.jobStatType_== 2)
    {
      this.stat_table_list = statListXenon;
      this.equip_table_list = equipListXenon;
    }
    else if(this.jobdata.jobStatType_== 1)
    {
      this.stat_table_list = statListTwosub;
      this.equip_table_list = equipListDefault;
    }
    else
    {
      this.stat_table_list = statListDefault;
      this.equip_table_list = equipListDefault;
    }
    //코어 설정
    this.core_data = coreData[this.jobName];
    this.core_skill_name = skillName[this.jobName];




     //어빌, 쿨, 벞지, 크리인
    this.auxiliary_table_list = [this.jobdata.jobability_, this.jobdata.coolReduce_,this.jobdata.buffFinal_,this.jobdata.criRein_];

    //최종댐 계산
    this.calculate_additive_final_dmg();
    

    for (var ii = 0; ii<templategrades.length; ii++)
    {
      this.jobTemplateData[ii] = new TemplateData(templategrades[ii],this.jobdata,this.monster_guard, this.actual_final_dmg, this.basicData[4]);
      this.jobMainstatarr[ii]=gradeMainStat[templategrades[ii]];
      this.job100dmgarr[ii]=this.jobTemplateData[ii].calc100dmg();
      this.jobstatarr_for_waterfire[ii]= Math.floor(this.jobTemplateData[ii].totalStat_.main_stat_pure* (100+this.jobTemplateData[ii].totalStat_.main_stat_rate)/100) + this.jobTemplateData[ii].totalStat_.main_stat_abs;
    }

    console.log(this.jobMainstatarr);
    console.log(this.jobstatarr_for_waterfire);
    console.log(this.job100dmgarr);

    //추세선생성

    this.spline_data = polynomial_regression(this.jobMainstatarr,this.job100dmgarr,3);
    this.spline_data_waterfire = polynomial_regression(this.jobstatarr_for_waterfire,this.job100dmgarr,3);

  }

  calculate_additive_final_dmg()
  {
    if(this.basicData[0] == 1)
    {
      if(this.basicData[1]<250)
      {
        this.reboot_final_dmg = 60;
      }
      else
      {
        this.reboot_final_dmg = 65;
      }
    }
    else
    {
      this.reboot_final_dmg = 0;
    }
    if((this.basicData[3] == 1) && ((this.jobName == '데몬어벤져') || (this.jobName == '데몬슬레이어')))
    {
      this.ruin_final_dmg = 10;
    }
    else
    {
      this.ruin_final_dmg = 0;
    }

    this.basicData[2] = Math.round(((this.jobdata.statData_.final_dmg * 0.01 + 1) * (this.reboot_final_dmg * 0.01 + 1)* (this.ruin_final_dmg * 0.01 + 1) * 100 - 100)*100)/100 ;
    this.actual_final_dmg = Math.round(((this.jobdata.statData_.final_dmg * 0.01 + 1) * (this.ruin_final_dmg * 0.01 + 1) * 100 - 100)*100)/100 ;
  }

  calculate_user_stat()
  {
    this.userStatData_ = new UserStatdata(this.jobdata, this.basicData, this.stat_table_front, this.stat_table_back, this.equip_table, this.auxiliary_table, this.link_table, this.core_table);

    
    this.actual_stat = Math.floor(CubicSolver(this.spline_data,this.userStatData_.calc100dmg(this.monster_guard)));

    console.log(this.userStatData_.calc100dmg(this.monster_guard))

  }

  save()
  {
    var json_data = {
      preset_num: this.cur_preset_num,
      job_name: this.jobName,
      basic_data: this.basicData,
      stat_table_front : this.stat_table_front,
      stat_table_back : this.stat_table_back,
      link_table : this.link_table,
      equip_table : this.equip_table,
      auxiliary_table : this.auxiliary_table,
      core_table : this.core_table,
      };
    

    this.whole_preset[this.cur_preset_num] = JSON.stringify(json_data);

    var whole_json = new Array();

    for (var ii = 0; ii<this.whole_preset.length; ii++)
    {
      whole_json.push(JSON.parse(this.whole_preset[ii]));
    }


    console.log(whole_json);
    
    localStorage.setItem('user_data', JSON.stringify(whole_json));
    this.snackbar.open(
      '저장 완료',
      '닫기'
    );


  }

  load_preset()
  {
    const saved_user_data = JSON.parse(localStorage.getItem('user_data')!);

    if(saved_user_data)
    {
      console.log('chang')
      console.log(saved_user_data.length)
      for(var ii = 0; ii< saved_user_data.length; ii++)
      {
        if(saved_user_data[ii].preset_num == this.cur_preset_num)
        {
          this.jobName = saved_user_data[ii].job_name;
          this.basicData = saved_user_data[ii].basic_data;
          this.stat_table_front = saved_user_data[ii].stat_table_front;
          this.stat_table_back = saved_user_data[ii].stat_table_back;
          this.link_table = saved_user_data[ii].link_table;
          this.equip_table = saved_user_data[ii].equip_table;
          this.auxiliary_table = saved_user_data[ii].auxiliary_table;
          this.core_table = saved_user_data[ii].core_table;
        }

      }

    }
    // else
    // {
    //   this.jobName = '나이트로드';
    //   this.basicData = [0,275,25,0,0];
    //   this.stat_table_front = [61638, 60038, 7494];
    //   this.stat_table_back = [52862565, 55, 387, 95.5, 99];
    //   this.link_table = [6,6,2,2,2,0];
    //   this.equip_table = [129, 13200, 4400, 150, 440];
    //   this.auxiliary_table = [0,0,0,0,0,0];
    //   this.core_table = [60,60,60,60,60,60];
    // }

    this.initializeJobValues();
    this.userStatData_ = new UserStatdata(this.jobdata, this.basicData, this.stat_table_front, this.stat_table_back, this.equip_table, this.auxiliary_table, this.link_table, this.core_table);

  }

  check_actual_stat()
  {
    this.actual_stat = Math.floor(CubicSolver(this.spline_data,this.userStatData_.calc100dmg(this.monster_guard)));
    if(isNaN(this.actual_stat))
    {
      this.is_NAN = true;
      this.water_fire_info = '입력 수치 확인';
      this.water_fire_label = 'satelite';


      return '입력 수치 확인';

      

    }
    else
    {
      this.is_NAN = false;
      
      var user_stat = this.stat_table_front[0];

      var user_dmg = this.userStatData_.calc100dmg(this.monster_guard);

      var water_fire_dmg = this.spline_data_waterfire[0] + user_stat* this.spline_data_waterfire[1] + user_stat* user_stat* this.spline_data_waterfire[2] + user_stat* user_stat* user_stat* this.spline_data_waterfire[3];

      var stat_percentage = (user_dmg/water_fire_dmg) * 100;


      
      if(stat_percentage>280)
      {
        this.water_fire_info = '새틀라이트';
        this.water_fire_label = 'satelite';
      }
      else if(stat_percentage>160)
      {
        this.water_fire_info = '지옥불';
        this.water_fire_label = 'hell-fire';
      }
      else if(stat_percentage>120)
      {
        this.water_fire_info = '불';
        this.water_fire_label = 'fire';
      }
      else if(stat_percentage>100)
      {
        this.water_fire_info = '적정';
        this.water_fire_label = 'moderate';
      }
      else if(stat_percentage>95)
      {
        this.water_fire_info = '물';
        this.water_fire_label = 'water';
      }
      else if(stat_percentage>85)
      {
        this.water_fire_info = '맹물';
        this.water_fire_label = 'super-water';
      }
      else
      {
        this.water_fire_info = '스탯딸';
        this.water_fire_label = 'satelite';
      }





      return this.actual_stat;
    }


  }

  calculate_fire_water()
  {

  }


}

const statListDefault: string[] =
[
    '메용O 스탯(시드링 착용)',
    '메용X 스탯(시드링 착용)',
    '부스탯',
]

const statListTwosub: string[] =
[
    '메용O 스탯(시드링 착용)',
    '메용X 스탯(시드링 착용)',
    '부스탯(DEX)',
    '부스탯2(STR)',
]

const statListDemonavenger: string[] =
[
    '쓸뻥O HP(시드링 착용)',
    '쓸뻥X HP(시드링 착용)',
    '부스탯(STR)',
]

const statListXenon: string[] =
[
    'STR 메용O 스탯(시드링 착용)',
    'DEX 메용O 스탯(시드링 착용)',
    'LUK 메용O 스탯(시드링 착용)',
    'STR 메용X 스탯(시드링 착용)',
    'DEX 메용X 스탯(시드링 착용)',
    'LUK 메용X 스탯(시드링 착용)',
    
]


const statListCommon:string[] =
[
    '스공(메용O, 뒷스공)',
    '데미지',
    '보스 데미지(+어빌 상추뎀)',
    '방무',
    '쓸샾후 크뎀',
]







const equipListDefault: string[] =
[
    '템 공격력/마력 퍼',
    '아케인심볼 스탯',
    '어센틱심볼 스탯',
    '하이퍼 스탯+ 어빌 스탯',
    '유니온 공격대원 스탯',
]


const equipListDemonavenger: string[] =
[
    '템 공격력/마력 퍼',
    '아케인심볼 HP',
    '어센틱심볼 HP',
    '어빌 HP',
    '소마, 미하일 유니온 HP',
]

const equipListXenon: string[] =
[
  '템 공격력/마력 퍼',
  '아케인심볼 스탯(단일 스탯 수치)',
  '어센틱심볼 스탯(단일 스탯 수치)',
  '하이퍼 + 어빌 STR',
  '하이퍼 + 어빌 DEX',
  '하이퍼 + 어빌 LUK',
  '유니온 공격대원 STR',
  '유니온 공격대원 DEX',
  '유니온 공격대원 LUK',
]
