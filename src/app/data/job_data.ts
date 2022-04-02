export const jobs: string[] =
[
    '나이트로드',
    '나이트워커',
    '다크나이트',
    '데몬슬레이어',
    '듀얼블레이드',
    '라라',
    '루미너스',
    '메르세데스',
    '메카닉',
    '미하일',
    '바이퍼',
    '배틀메이지',
    '보우마스터',
    '블래스터',
    '비숍',
    '섀도어',
    '소울마스터',
    '스트라이커',
    '신궁',
    '아델',
    '아란',
    '아크',
    '아크메이지(불,독)',
    '아크메이지(썬,콜)',
    '에반',
    '엔젤릭버스터',
    '와일드헌터',
    '윈드브레이커',
    '은월',
    '일리움',
    '제로',
    '카데나',
    '카이저',
    '카인',
    '캐논슈터',
    '캡틴',
    '키네시스',
    '팔라딘',
    '패스파인더',
    '팬텀',
    '플레임위자드',
    '호영',
    '히어로',
   
]


export type jobNames = typeof jobs[number];






//기본 패시브
export const jobPassive_base: Record<jobNames,number[]> =
{
'나이트로드': [70, 0, 0, 30, 0, 0, 80, 0, 0, 10, 25, 30, 85, 38, 0.9, 1.75],
'나이트워커': [60, 0, 0, 0, 0, 0, 70, 10, 30, 0, 20, 15, 50, 38, 0.85, 1.75],
'다크나이트': [50, 0, 0, 30, 0, 0, 100, 0, 5, 15, 167.3, 30, 85, 46, 0.9, 1.49],
'데몬슬레이어': [30, 0, 0, 30, 0, 0, 100, 0, 35, 0, 30, 30, 80, 23, 0.9, 1.2],
'듀얼블레이드': [30, 0, 0, 30, 0, 0, 90, 0, 0, 0, 20, 0, 50, 21, 0.9, 1.3],
'라라': [40, 0, 0, 0, 0, 0, 135, 0, 20, 10, 88.5, 40, 55, 28, 0.95, 1.2],
'루미너스': [80, 0, 0, 0, 0, 0, 80, 0, 15, 15, 90.4, 40, 50, 26, 0.95, 1.2],
'메르세데스': [50, 0, 0, 30, 0, 0, 90, 30, 50, 20, 57.5, 25, 70, 38, 0.85, 1.3],
'메카닉': [30, 0, 0, 30, 0, 0, 75, 0, 10, 0, 34, 30, 75, 13, 0.85, 1.5],
'미하일': [90, 0, 0, 30, 0, 0, 110, 10, 60, 0, 64.45, 40, 70, 28, 0.9, 1.2],
'바이퍼': [50, 0, 0, 30, 0, 0, 90, 30, 0, 20, 10, 40, 92, 23, 0.9, 1.7],
'배틀메이지': [40, 0, 0, 0, 0, 0, 80, 40, 70, 0, 25, 30, 70, 58, 0.95, 1.2],
'보우마스터': [130, 0, 0, 30, 0, 0, 150, 25, 0, 0, 37.8, 25, 65, 23, 0.85, 1.3],
'블래스터': [30, 0, 0, 30, 0, 0, 60, 15, 20, 20, 0, 35, 75, 28, 0.9, 1.7],
'비숍': [60, 0, 0, 0, 0, 0, 120, 0, 0, 10, 33.9, 36, 85, 21, 0.95, 1.2],
'섀도어': [60, 0, 0, 30, 0, 0, 160, 0, 0, 0, 43.75, 20, 65, 48, 0.9, 1.3],
'소울마스터': [110, 0, 0, 50, 0, 0, 215, 10, 0, 15, 37.5, 37, 60, 23, 0.9, 1.34],
'스트라이커': [60, 0, 0, 0, 0, 0, 50, 10, 5, 0, 20, 9, 45, 53, 0.9, 1.7],
'신궁': [130, 0, 0, 30, 0, 0, 60, 0, 15, 0, 63.94, 58, 65, 50, 0.85, 1.35],
'아델': [60, 0, 0, 0, 0, 0, 150, 10, 0, 10, 49.5, 20, 55, 18, 0.9, 1.3],
'아란': [30, 0, 0, 30, 0, 0, 180, 5, 20, 0, 8, 40, 65, 26, 0.9, 1.49],
'아크': [60, 0, 0, 0, 0, 0, 110, 0, 0, 30, 32, 30, 65, 38, 0.9, 1.7],
'아크메이지(불,독)': [60, 0, 0, 0, 0, 0, 70, 0, 50, 0, 50, 20, 45, 21, 0.95, 1.2],
'아크메이지(썬,콜)': [60, 0, 0, 0, 0, 0, 70, 0, 50, 0, 50, 20, 45, 21, 0.95, 1.2],
'에반': [70, 0, 0, 10, 0, 0, 185, 35, 20, 20, 49.5, 20, 60, 48, 0.95, 1.2],
'엔젤릭버스터': [80, 0, 0, 0, 0, 0, 90, 0, 20, 0, 25, 15, 45, 68, 0.95, 1.7],
'와일드헌터': [130, 0, 0, 70, 0, 0, 100, 35, 10, 10, 32, 30, 73, 47, 0.85, 1.35],
'윈드브레이커': [50, 15, 0, 30, 0, 0, 120, 20, 35, 40, 48.5, 15, 60, 35, 0.85, 1.3],
'은월': [60, 0, 0, 0, 0, 0, 20, 0, 20, 30, 40.07, 30, 40, 28, 0.9, 1.7],
'일리움': [40, 0, 0, 0, 0, 0, 115, 10, 20, 30, 40, 25, 55, 38, 0.9, 1.2],
'제로': [50, 0, 0, 0, 0, 0, 100, 0, 0, 90, 45, 19, 65, 8, 0.9, 1.49],
'카데나': [80, 0, 0, 30, 0, 0, 70, 0, 0, 0, 0, 20, 85, 41, 0.9, 1.3],
'카이저': [50, 0, 0, 0, 0, 0, 115, 30, 0, 18, 32, 40, 75, 23, 0.9, 1.34],
'카인': [60, 0, 0, 0, 0, 0, 110, 0, 10, 10, 87.2, 37, 70, 48, 0.85, 1.3],
'캐논슈터': [110, 0, 0, 90, 0, 0, 60, 0, 0, 40, 57.66, 20, 55, 23, 0.85, 1.5],
'캡틴': [50, 0, 0, 30, 0, 0, 90, 20, 0, 0, 29.6, 20, 85, 63, 0.85, 1.5],
'키네시스': [40, 0, 0, 0, 0, 0, 100, 10, 40, 30, 68, 25, 55, 38, 0.9, 1.2],
'팔라딘': [50, 0, 0, 30, 0, 0, 30, 0, 0, 0, 71.82, 31, 57, 28, 0.9, 1.34],
'패스파인더': [120, 0, 0, 30, 0, 0, 80, 20, 10, 0, 20, 30, 75, 25, 0.85, 1.3],
'팬텀': [140, 0, 0, 40, 0, 0, 80, 0, 30, 0, 71.6, 30, 50, 23, 0.9, 1.3],
'플레임위자드': [60, 0, 0, 0, 0, 0, 90, 10, 0, 0, 95, 30, 45, 28, 0.95, 1.2],
'호영': [60, 0, 0, 0, 0, 0, 110, 10, 10, 20, 51.25, 19, 65, 48, 0.9, 1.3],
'히어로': [50, 0, 0, 30, 0, 0, 80, 0, 0, 20, 202.5, 50, 35, 28, 0.9, 1.44],
'제논': [315, 20, 0, 0, 0, 0, 50, 0, 40, 0, 15, 30, 53, 16, 0.9, 1.3125],
}

// 패시브1렙 시 패시브  수정
export const jobPassive_Lv1: Record<jobNames,number[]> =
{
'나이트로드': [70, 0, 0, 30, 0, 0, 80, 0, 0, 10, 25, 30, 85, 38, 0.9, 1.75],
'나이트워커': [60, 0, 0, 0, 0, 0, 70, 10, 30, 0, 20, 15, 50, 38, 0.85, 1.75],
'다크나이트': [50, 0, 0, 30, 0, 0, 100, 0, 5, 15, 167.3, 30, 85, 46, 0.9, 1.49],
'데몬슬레이어': [30, 0, 0, 30, 0, 0, 100, 0, 35, 0, 30, 30, 80, 23, 0.9, 1.2],
'듀얼블레이드': [30, 0, 0, 30, 0, 0, 90, 0, 0, 0, 20, 0, 50, 21, 0.9, 1.3],
'라라': [40, 0, 0, 0, 0, 0, 138, 0, 20, 10, 89.8, 41, 56, 29, 0.95, 1.2],
'루미너스': [80, 0, 0, 0, 0, 0, 80, 0, 15, 15, 90.4, 40, 50, 26, 0.95, 1.2],
'메르세데스': [50, 0, 0, 30, 0, 0, 90, 30, 50, 20, 57.5, 25, 70, 38, 0.85, 1.3],
'메카닉': [30, 0, 0, 30, 0, 0, 76, 0, 10, 0, 34, 30, 75, 13, 0.85, 1.5],
'미하일': [90, 0, 0, 30, 0, 0, 110, 10, 60, 0, 64.45, 40, 70, 28, 0.9, 1.2],
'바이퍼': [50, 0, 0, 30, 0, 0, 90, 30, 0, 20, 10, 40, 92, 23, 0.9, 1.7],
'배틀메이지': [40, 0, 0, 0, 0, 0, 80, 40, 70, 0, 25, 30, 70, 58, 0.95, 1.2],
'보우마스터': [130, 0, 0, 30, 0, 0, 150, 25, 0, 0, 37.8, 25, 65, 23, 0.85, 1.3],
'블래스터': [30, 0, 0, 30, 0, 0, 60, 15, 20, 20, 0, 35, 75, 28, 0.9, 1.7],
'비숍': [60, 0, 0, 0, 0, 0, 120, 0, 0, 10, 33.9, 36, 85, 21, 0.95, 1.2],
'섀도어': [60, 0, 0, 30, 0, 0, 160, 0, 0, 0, 43.75, 20, 65, 48, 0.9, 1.3],
'소울마스터': [110, 0, 0, 50, 0, 0, 215, 10, 0, 15, 37.5, 37, 60, 23, 0.9, 1.34],
'스트라이커': [60, 0, 0, 0, 0, 0, 50, 10, 5, 0, 20, 9, 45, 53, 0.9, 1.7],
'신궁': [130, 0, 0, 30, 0, 0, 60, 0, 15, 0, 63.94, 58, 65, 50, 0.85, 1.35],
'아델': [60, 0, 0, 0, 0, 0, 150, 10, 0, 10, 49.5, 20, 55, 18, 0.9, 1.3],
'아란': [30, 0, 0, 30, 0, 0, 180, 5, 20, 0, 8, 40, 65, 26, 0.9, 1.49],
'아크': [60, 0, 0, 0, 0, 0, 110, 0, 0, 30, 32, 30, 65, 38, 0.9, 1.7],
'아크메이지(불,독)': [60, 0, 0, 0, 0, 0, 70, 0, 50, 0, 50, 20, 45, 21, 0.95, 1.2],
'아크메이지(썬,콜)': [60, 0, 0, 0, 0, 0, 70, 0, 50, 0, 50, 20, 45, 21, 0.95, 1.2],
'에반': [70, 0, 0, 10, 0, 0, 185, 35, 20, 20, 49.5, 20, 60, 48, 0.95, 1.2],
'엔젤릭버스터': [80, 0, 0, 0, 0, 0, 90, 0, 20, 0, 25, 15, 45, 68, 0.95, 1.7],
'와일드헌터': [130, 0, 0, 70, 0, 0, 100, 35, 10, 10, 32, 30, 73, 47, 0.85, 1.35],
'윈드브레이커': [50, 15, 0, 30, 0, 0, 120, 20, 35, 40, 48.5, 15, 60, 35, 0.85, 1.3],
'은월': [60, 0, 0, 0, 0, 0, 20, 0, 20, 30, 40.07, 30, 40, 28, 0.9, 1.7],
'일리움': [40, 0, 0, 0, 0, 0, 115, 10, 20, 30, 40, 25, 55, 38, 0.9, 1.2],
'제로': [50, 0, 0, 0, 0, 0, 100, 0, 0, 90, 45, 19, 65, 8, 0.9, 1.49],
'카데나': [80, 0, 0, 30, 0, 0, 70, 0, 0, 0, 0, 20, 85, 41, 0.9, 1.3],
'카이저': [50, 0, 0, 0, 0, 0, 115, 30, 0, 18, 32, 40, 75, 23, 0.9, 1.34],
'카인': [60, 0, 0, 0, 0, 0, 112, 0, 11, 10, 87.2, 37.9, 70, 48, 0.85, 1.3],
'캐논슈터': [110, 0, 0, 90, 0, 0, 60, 0, 0, 40, 57.66, 20, 55, 23, 0.85, 1.5],
'캡틴': [50, 0, 0, 30, 0, 0, 90, 20, 0, 0, 29.6, 20, 85, 63, 0.85, 1.5],
'키네시스': [40, 0, 0, 0, 0, 0, 102, 10, 41, 30, 69.2, 26, 55, 39, 0.92, 1.2],
'팔라딘': [50, 0, 0, 30, 0, 0, 30, 0, 0, 0, 71.82, 31, 57, 28, 0.9, 1.34],
'패스파인더': [120, 0, 0, 30, 0, 0, 80, 20, 10, 0, 20, 30, 75, 25, 0.85, 1.3],
'팬텀': [140, 0, 0, 40, 0, 0, 80, 0, 30, 0, 71.6, 30, 50, 23, 0.9, 1.3],
'플레임위자드': [60, 0, 0, 0, 0, 0, 90, 10, 0, 0, 95, 30, 45, 28, 0.95, 1.2],
'호영': [60, 0, 0, 0, 0, 0, 112, 10, 10, 20, 52.63, 19.9, 65, 49, 0.91, 1.3],
'히어로': [50, 0, 0, 30, 0, 0, 80, 0, 0, 20, 202.5, 50, 35, 28, 0.9, 1.44],
'제논': [315, 20, 0, 0, 0, 0, 50, 0, 40, 0, 15, 30, 53, 16, 0.9, 1.3125],
}

// 직업 보조 기본수치 보정
export const jobSubweapBase: Record<jobNames, number[]> =
{
'나이트로드': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'나이트워커': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'다크나이트': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'데몬슬레이어': [-11, 0, 0, -11, 0, 0, -3, 0, 0, 0, 0, 0, 0, 0],
'듀얼블레이드': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'라라': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'루미너스': [-10, 0, 0, -10, 0, 0, -3, 0, 0, 0, 0, 0, 0, 0],
'메르세데스': [-10, 0, 0, -10, 0, 0, -3, 0, 0, 0, 0, 0, 0, 0],
'메카닉': [19, 0, 0, -5, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0],
'미하일': [11, 0, 0, 11, 0, 0, -3, 0, 0, 0, 0, 0, 0, 0],
'바이퍼': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'배틀메이지': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'보우마스터': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'블래스터': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'비숍': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'섀도어': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'소울마스터': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'스트라이커': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'신궁': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'아델': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'아란': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'아크': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'아크메이지(불,독)': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'아크메이지(썬,콜)': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'에반': [38, 0, 0, 6, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0],
'엔젤릭버스터': [0, 0, 0, 0, 0, 0, -3, 0, 0, 0, 0, 0, 0, 0],
'와일드헌터': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'윈드브레이커': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'은월': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'일리움': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'제로': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'카데나': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'카이저': [0, 0, 0, 0, 0, 0, -3, 0, 0, 0, 0, 0, 0, 0],
'카인': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'캐논슈터': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'캡틴': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'키네시스': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'팔라딘': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'패스파인더': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'팬텀': [-10, 0, 0, -10, 0, 0, -3, 0, 0, 0, 0, 0, 0, 0],
'플레임위자드': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'호영': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'히어로': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'제논': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
}

//직업 링크어빌 보정값(에픽둘둘~18유닠둘둘까지 원래 링크어빌수치에서 해당수치 추가(마이너스값들)) 수정
export const jobLinkAbilities_semi: Record<jobNames, number[]> =
{
'나이트로드': [0, 0, 0, 0, 0, 0, -21, 0, 0, 0, 0, 0, 0, 0],
'나이트워커': [-70, 0, 0, -70, 0, 0, 0, 0, 0, 0, 0, 0, -5, 0],
'다크나이트': [0, 0, 0, 0, 0, 0, 0, 0, 0, -8, 0, 0, 0, 0],
'데몬슬레이어': [0, 0, 0, 0, 0, 0, 0, 0, 0, -8, 0, 0, 0, 0],
'듀얼블레이드': [-70, 0, 0, -70, 0, 0, 0, 0, 0, 0, 0, 0, -5, 0],
'라라': [0, 0, 0, 0, 0, 0, 0, 0, 0, -8, 0, 0, 0, 0],
'루미너스': [-70, 0, 0, -70, 0, 0, 0, 0, 0, 0, 0, 0, -5, 0],
'메르세데스': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -20, 0],
'메카닉': [0, 0, 0, 0, 0, 0, 0, 0, 0, -8, 0, 0, 0, 0],
'미하일': [0, 0, 0, 0, 0, 0, -21, 0, 0, 0, 0, 0, 0, 0],
'바이퍼': [0, 0, 0, 0, 0, 0, -21, 0, 0, 0, 0, 0, 0, 0],
'배틀메이지': [0, 0, 0, 0, 0, 0, -21, 0, 0, 0, 0, 0, 0, 0],
'보우마스터': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -20, 0],
'블래스터': [0, 0, 0, 0, 0, 0, -21, 0, 0, 0, 0, 0, 0, 0],
'비숍': [0, 0, 0, 0, 0, 0, 0, 0, 0, -8, 0, 0, 0, 0],
'섀도어': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -20, 0],
'소울마스터': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -20, 0],
'스트라이커': [-70, 0, 0, -70, 0, 0, 0, 0, 0, 0, 0, 0, -5, 0],
'신궁': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -20, 0],
'아델': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -20, 0],
'아란': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -20, 0],
'아크': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -20, 0],
'아크메이지(불,독)': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -20, 0],
'아크메이지(썬,콜)': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -20, 0],
'에반': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -20, 0],
'엔젤릭버스터': [-70, 0, 0, -70, 0, 0, 0, 0, 0, 0, 0, 0, -5, 0],
'와일드헌터': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -20, 0],
'윈드브레이커': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -20, 0],
'은월': [0, -10, 0, 0, -10, 0, 0, 0, 0, 0, 0, 0, -10, 0],
'일리움': [0, 0, 0, 0, 0, 0, -25, 0, 0, 0, 0, 0, -5, 0],
'제로': [0, -10, 0, 0, -10, 0, 0, 0, 0, 0, 0, 0, -5, 0],
'카데나': [0, 0, 0, 0, 0, 0, 0, 0, 0, -8, 0, 0, 0, 0],
'카이저': [0, 0, 0, 0, 0, 0, 0, 0, 0, -8, 0, 0, 0, 0],
'카인': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -20, 0],
'캐논슈터': [0, 0, 0, 0, 0, 0, -25, 0, 0, 0, 0, 0, -15, 0],
'캡틴': [0, 0, 0, 0, 0, 0, 0, 0, 0, -8, 0, 0, 0, 0],
'키네시스': [-70, 0, 0, -70, 0, 0, 0, 0, 0, 0, 0, 0, -5, 0],
'팔라딘': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -20, 0],
'패스파인더': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -20, 0],
'팬텀': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'플레임위자드': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'호영': [0, 0, 0, 0, 0, 0, 0, 0, 0, -8, 0, 0, 0, 0],
'히어로': [0, -10, 0, 0, -10, 0, 0, 0, 0, 0, 0, 0, -10, 0],
'제논': [-210, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -5, 0],

}

// 직업링크 어빌 수정
export const jobLinkAbilities_main: Record<jobNames, number[]> =
{
'나이트로드': [70, 10, 0, 70, 10, 0, 46, 0, 49, 43, 0, 22.65, 0, 4],
'나이트워커': [70, 10, 0, 70, 10, 0, 25, 0, 49, 43, 0, 22.65, 20, 4],
'다크나이트': [0, 10, 0, 0, 10, 0, 25, 0, 49, 43, 0, 22.65, 0, 4],
'데몬슬레이어': [70, 10, 0, 70, 10, 0, 25, 0, 49, 33, 0, 22.65, 0, 4],
'듀얼블레이드': [70, 10, 0, 70, 10, 0, 25, 0, 49, 43, 0, 22.65, 20, 4],
'라라': [0, 10, 0, 0, 10, 0, 25, 0, 54, 25, 0, 22.65, 20, 4],
'루미너스': [70, 10, 0, 70, 10, 0, 25, 0, 49, 25, 0, 22.65, 20, 4],
'메르세데스': [0, 10, 0, 0, 10, 0, 0, 0, 49, 43, 0, 22.65, 35, 4],
'메카닉': [70, 10, 0, 70, 10, 0, 25, 0, 49, 33, 0, 22.65, 0, 4],
'미하일': [0, 10, 0, 0, 10, 0, 46, 0, 49, 43, 0, 22.65, 0, 4],
'바이퍼': [70, 10, 0, 70, 10, 0, 25, 0, 49, 43, 0, 22.65, 0, 4],
'배틀메이지': [0, 10, 0, 0, 10, 0, 46, 0, 49, 43, 0, 22.65, 15, 4],
'보우마스터': [0, 10, 0, 0, 10, 0, 0, 0, 49, 43, 0, 22.65, 45, 4],
'블래스터': [70, 10, 0, 70, 10, 0, 46, 0, 49, 43, 0, 22.65, 0, 4],
'비숍': [70, 10, 0, 70, 10, 0, 25, 0, 49, 33, 0, 22.65, 0, 4],
'섀도어': [70, 10, 0, 70, 10, 0, 25, 0, 49, 43, 0, 22.65, 20, 4],
'소울마스터': [70, 10, 0, 70, 10, 0, 25, 0, 49, 43, 0, 22.65, 20, 4],
'스트라이커': [70, 10, 0, 70, 10, 0, 25, 0, 49, 43, 0, 22.65, 20, 4],
'신궁': [0, 10, 0, 0, 10, 0, 0, 0, 49, 43, 0, 22.65, 45, 4],
'아델': [0, 10, 0, 0, 10, 0, 25, 0, 51, 29, 0, 22.65, 20, 4],
'아란': [0, 10, 0, 0, 10, 0, 25, 0, 49, 43, 0, 22.65, 20, 4],
'아크': [70, 10, 0, 70, 10, 0, 25, 0, 49, 43, 0, 22.65, 20, 4],
'아크메이지(불,독)': [70, 10, 0, 70, 10, 0, 0, 0, 49, 25, 0, 22.65, 35, 4],
'아크메이지(썬,콜)': [70, 10, 0, 70, 10, 0, 0, 0, 49, 25, 0, 22.65, 35, 4],
'에반': [0, 10, 0, 0, 10, 0, 25, 0, 49, 43, 0, 22.65, 20, 4],
'엔젤릭버스터': [70, 10, 0, 70, 10, 0, 25, 0, 49, 43, 0, 22.65, 20, 4],
'와일드헌터': [0, 10, 0, 0, 10, 0, 25, 0, 49, 25, 0, 22.65, 35, 4],
'윈드브레이커': [0, 10, 0, 0, 10, 0, 25, 0, 49, 43, 0, 22.65, 35, 4],
'은월': [0, 10, 0, 0, 10, 0, 0, 0, 49, 43, 0, 22.65, 35, 4],
'일리움': [0, 10, 0, 0, 10, 0, 25, 0, 57, 43, 0, 22.65, 20, 4],
'제로': [0, 10, 0, 0, 10, 0, 25, 0, 49, 43, 0, 30.385, 20, 4],
'카데나': [70, 10, 0, 70, 10, 0, 25, 0, 49, 33, 0, 22.65, 0, 4],
'카이저': [0, 10, 0, 0, 10, 0, 25, 0, 49, 43, 0, 22.65, 0, 4],
'카인': [0, 10, 0, 0, 10, 0, 0, 0, 57, 25, 0, 22.65, 35, 4],
'캐논슈터': [70, 10, 0, 70, 10, 0, 25, 0, 49, 43, 0, 22.65, 20, 4],
'캡틴': [70, 10, 0, 70, 10, 0, 25, 0, 49, 33, 0, 22.65, 0, 4],
'키네시스': [70, 10, 0, 70, 10, 0, 25, 0, 49, 25, 0, 22.65, 20, 4],
'팔라딘': [0, 10, 0, 0, 10, 0, 25, 0, 49, 43, 0, 22.65, 20, 4],
'패스파인더': [0, 10, 0, 0, 10, 0, 0, 0, 49, 43, 0, 22.65, 45, 4],
'팬텀': [0, 10, 0, 0, 10, 0, 25, 0, 49, 43, 0, 22.65, 15, 4],
'플레임위자드': [70, 10, 0, 70, 10, 0, 25, 0, 49, 43, 0, 22.65, 20, 4],
'호영': [0, 10, 0, 0, 10, 0, 25, 0, 49, 33, 0, 30.385, 0, 4],
'히어로': [0, 10, 0, 0, 10, 0, 0, 0, 49, 43, 0, 22.65, 35, 4],
'제논': [210, 10, 0, 0, 0, 0, 0, 0, 49, 43, 0, 22.65, 20, 4],
}

//직업농장 수정
export const jobFarm: Record<jobNames, number[]> =
{
'나이트로드': [78, 0, 0, 51, 0, 0, 11, 0, 10, 13, 0, 14.5, 12, 2],
'나이트워커': [78, 0, 0, 51, 0, 0, 11, 0, 10, 13, 0, 14.5, 12, 2],
'다크나이트': [76, 0, 0, 49, 0, 0, 11, 0, 9, 13, 0, 19.63, 9, 2],
'데몬슬레이어': [78, 0, 0, 44, 0, 0, 5, 0, 10, 13, 0, 14.5, 12, 2],
'듀얼블레이드': [78, 0, 0, 51, 0, 0, 11, 0, 10, 13, 0, 14.5, 12, 2],
'라라': [63, 0, 0, 42, 0, 0, 11, 0, 10, 13, 0, 14.5, 12, 2],
'루미너스': [63, 0, 0, 42, 0, 0, 5, 0, 10, 13, 0, 10, 12, 2],
'메르세데스': [70, 0, 0, 27, 0, 0, 11, 0, 9, 13, 0, 14.5, 15, 2],
'메카닉': [70, 0, 0, 27, 0, 0, 11, 0, 9, 13, 0, 14.5, 12, 2],
'미하일': [78, 0, 0, 44, 0, 0, 11, 0, 10, 13, 0, 14.5, 12, 2],
'바이퍼': [78, 0, 0, 44, 0, 0, 11, 0, 10, 13, 0, 14.5, 12, 2],
'배틀메이지': [78, 0, 0, 42, 0, 0, 11, 0, 10, 13, 0, 14.5, 12, 2],
'보우마스터': [70, 0, 0, 27, 0, 0, 11, 0, 9, 13, 0, 14.5, 15, 2],
'블래스터': [78, 0, 0, 44, 0, 0, 11, 0, 10, 13, 0, 14.5, 12, 2],
'비숍': [63, 0, 0, 42, 0, 0, 5, 0, 10, 13, 0, 10, 12, 2],
'섀도어': [78, 0, 0, 51, 0, 0, 11, 0, 10, 13, 0, 14.5, 12, 2],
'소울마스터': [78, 0, 0, 44, 0, 0, 11, 0, 10, 13, 0, 14.5, 12, 2],
'스트라이커': [78, 0, 0, 44, 0, 0, 11, 0, 10, 13, 0, 14.5, 12, 2],
'신궁': [85, 0, 0, 27, 0, 0, 11, 0, 9, 13, 0, 14.5, 15, 2],
'아델': [78, 0, 0, 44, 0, 0, 5, 0, 10, 13, 0, 14.5, 12, 2],
'아란': [56, 0, 0, 44, 0, 0, 11, 0, 10, 13, 0, 14.5, 12, 2],
'아크': [78, 0, 0, 44, 0, 0, 11, 0, 10, 13, 0, 14.5, 12, 2],
'아크메이지(불,독)': [63, 0, 0, 42, 0, 0, 5, 0, 10, 13, 0, 10, 12, 2],
'아크메이지(썬,콜)': [63, 0, 0, 42, 0, 0, 5, 0, 10, 13, 0, 10, 12, 2],
'에반': [78, 0, 0, 42, 0, 0, 11, 0, 10, 13, 0, 14.5, 12, 2],
'엔젤릭버스터': [85, 0, 0, 27, 0, 0, 11, 0, 10, 13, 0, 14.5, 12, 2],
'와일드헌터': [70, 0, 0, 27, 0, 0, 11, 0, 9, 13, 0, 14.5, 15, 2],
'윈드브레이커': [85, 0, 0, 27, 0, 0, 11, 0, 9, 13, 0, 14.5, 15, 2],
'은월': [78, 0, 0, 44, 0, 0, 11, 0, 10, 13, 0, 14.5, 12, 2],
'일리움': [63, 0, 0, 42, 0, 0, 11, 0, 10, 13, 0, 14.5, 12, 2],
'제로': [78, 0, 0, 44, 0, 0, 11, 0, 10, 13, 0, 14.5, 12, 2],
'카데나': [63, 0, 0, 51, 0, 0, 5, 0, 9, 13, 0, 14.5, 12, 2],
'카이저': [78, 0, 0, 44, 0, 0, 11, 0, 10, 13, 0, 14.5, 12, 2],
'카인': [85, 0, 0, 27, 0, 0, 11, 0, 9, 13, 0, 14.5, 15, 2],
'캐논슈터': [56, 0, 0, 44, 0, 0, 5, 0, 10, 13, 0, 14.5, 12, 2],
'캡틴': [70, 0, 0, 27, 0, 0, 11, 0, 9, 13, 0, 19.63, 9, 2],
'키네시스': [78, 0, 0, 42, 0, 0, 11, 0, 10, 13, 0, 14.5, 12, 2],
'팔라딘': [78, 0, 0, 44, 0, 0, 11, 0, 10, 13, 0, 14.5, 12, 2],
'패스파인더': [85, 0, 0, 27, 0, 0, 11, 0, 9, 13, 0, 14.5, 15, 2],
'팬텀': [78, 0, 0, 51, 0, 0, 11, 0, 10, 13, 0, 14.5, 12, 2],
'플레임위자드': [63, 0, 0, 42, 0, 0, 5, 0, 10, 13, 0, 10, 12, 2],
'호영': [63, 0, 0, 51, 0, 0, 11, 0, 9, 13, 0, 14.5, 12, 2],
'히어로': [56, 0, 0, 44, 0, 0, 11, 0, 10, 13, 0, 14.5, 12, 2],
'제논': [131, 0, 0, 0, 0, 0, 11, 0, 10, 13, 0, 19.63, 12, 2],
}

//유니온 공격대 수치
export const jobUnion: Record<jobNames, number[]> =
{
'나이트로드': [0, 0, 440, 0, 0, 440, 20, 0, 0, 5, 0, 5, 9, 5],
'나이트워커': [0, 0, 460, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'다크나이트': [0, 0, 680, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'데몬슬레이어': [0, 0, 680, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'듀얼블레이드': [0, 0, 460, 0, 0, 1140, 20, 0, 0, 5, 0, 5, 8, 5],
'라라': [0, 0, 580, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'루미너스': [0, 0, 580, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'메르세데스': [0, 0, 440, 0, 0, 680, 20, 0, 0, 5, 0, 5, 8, 5],
'메카닉': [0, 0, 440, 0, 0, 680, 20, 0, 0, 5, 0, 5, 8, 5],
'미하일': [0, 0, 680, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'바이퍼': [0, 0, 700, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'배틀메이지': [0, 0, 580, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'보우마스터': [0, 0, 460, 0, 0, 680, 20, 0, 0, 5, 0, 5, 8, 5],
'블래스터': [0, 0, 680, 0, 0, 440, 20, 0, 0, 5, 0, 6, 8, 5],
'비숍': [0, 0, 580, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'섀도어': [0, 0, 460, 0, 0, 1140, 20, 0, 0, 5, 0, 5, 8, 5],
'소울마스터': [0, 0, 680, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'스트라이커': [0, 0, 700, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'신궁': [0, 0, 440, 0, 0, 680, 20, 0, 0, 5, 0, 5, 9, 5],
'아델': [0, 0, 700, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'아란': [0, 0, 680, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'아크': [0, 0, 700, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'아크메이지(불,독)': [0, 0, 560, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'아크메이지(썬,콜)': [0, 0, 580, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'에반': [0, 0, 560, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'엔젤릭버스터': [0, 0, 460, 0, 0, 680, 20, 0, 0, 5, 0, 5, 8, 5],
'와일드헌터': [0, 0, 440, 0, 0, 680, 20, 0, 0, 5, 0, 5, 8, 5],
'윈드브레이커': [0, 0, 460, 0, 0, 680, 20, 0, 0, 5, 0, 5, 8, 5],
'은월': [0, 0, 680, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 6],
'일리움': [0, 0, 560, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'제로': [0, 0, 680, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'카데나': [0, 0, 460, 0, 0, 1140, 20, 0, 0, 5, 0, 5, 8, 5],
'카이저': [0, 0, 680, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'카인': [0, 0, 460, 0, 0, 680, 20, 0, 0, 5, 0, 5, 8, 5],
'캐논슈터': [0, 0, 700, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'캡틴': [0, 0, 440, 0, 0, 680, 20, 0, 0, 5, 0, 5, 8, 5],
'키네시스': [0, 0, 580, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'팔라딘': [0, 0, 700, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'패스파인더': [0, 0, 460, 0, 0, 680, 20, 0, 0, 5, 0, 5, 8, 5],
'팬텀': [0, 0, 440, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'플레임위자드': [0, 0, 580, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'호영': [0, 0, 460, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'히어로': [0, 0, 700, 0, 0, 440, 20, 0, 0, 5, 0, 5, 8, 5],
'제논': [0, 0, 1560, 0, 0, 0, 20, 0, 0, 5, 0, 5, 8, 5],
}

// 직업 코강으로 오르는 패시브 수치 정리
export const jobCoreStats: Record<jobNames, number[]> =
{
'나이트로드': [0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
'나이트워커': [0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
'다크나이트': [30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'데몬슬레이어': [30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'듀얼블레이드': [0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
'라라': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'루미너스': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'메르세데스': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'메카닉': [0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0],
'미하일': [30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'바이퍼': [0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0],
'배틀메이지': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'보우마스터': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'블래스터': [30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'비숍': [30, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
'섀도어': [0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
'소울마스터': [30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'스트라이커': [0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0],
'신궁': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'아델': [30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'아란': [30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'아크': [0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0],
'아크메이지(불,독)': [30, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
'아크메이지(썬,콜)': [30, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
'에반': [35, 0, 0, 0, 0, 0, 35, 0, 0, 0, 0, 0, 0, 0],
'엔젤릭버스터': [40, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0],
'와일드헌터': [0, 0, 0, 0, 0, 0, 65, 0, 0, 0, 0, 0, 0, 0],
'윈드브레이커': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'은월': [0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0],
'일리움': [0, 0, 0, 0, 0, 0, 65, 0, 0, 0, 0, 0, 0, 0],
'제로': [30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'카데나': [0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0],
'카이저': [30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'카인': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'캐논슈터': [0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0],
'캡틴': [0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0],
'키네시스': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'팔라딘': [30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'패스파인더': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'팬텀': [0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
'플레임위자드': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'호영': [0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
'히어로': [30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
'제논': [0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0],
}







// 직업 스탯창 조건
export const jobBuffCond: Record<jobNames, string> =
{
'나이트로드': '메용 사용',
'나이트워커': '메용 사용',
'다크나이트': '비홀더, 메용, 크오체, 다크레조넌스 사용',
'데몬슬레이어': '메용, 메타모포시스 사용',
'듀얼블레이드': '메용 사용, 파이널컷X',
'라라': '메용 사용, 오버로드 마나X, 발현X',
'루미너스': '메용, 포틱 메디테이션 사용, 오버로드 마나X, 다크 크레센도X',
'메르세데스': '메용, 앤시언트 스피릿 사용, 스택X',
'메카닉': '탱크상태, 메용 사용, 로디드X',
'미하일': '메용, 격려, 소울 레이지 사용, 소울 링크X',
'바이퍼': '메용, 바이퍼지션 사용, 미완충 상태, 로디드X',
'배틀메이지': '메용, 다크 오라, 배틀레이지 사용, 오버로드 마나X',
'보우마스터': '메용, 샤프아이즈 , 아쳐리 사용',
'블래스터': '메용 사용, 스택X',
'비숍': '메용, 벤전스ON, 오버로드 마나X',
'섀도어': '메용 사용, 플립 더 코인 0스택, 프리마 크리티컬 크뎀10퍼',
'소울마스터': '메용, 소울포지, 솔루나 타임 사용',
'스트라이커': '메용 사용,로디드X',
'신궁': '메용, 샤프아이즈, 아쳐리 사용',
'아델': '레조스택x, 메용사용',
'아란': '메용 사용, 500콤보',
'아크': '레프폼, 메용 사용, 스펠버프X, 로디드X',
'아크메이지(불,독)': '메용, 메디테이션 사용, 오버로드 마나X',
'아크메이지(썬,콜)': '메용 사용, 오버로드 마나X',
'에반': '메용, 오닉스의 축복, 교감 사용,오버로드 마나X',
'엔젤릭버스터': '메용, 소울게이즈 사용,로디드X',
'와일드헌터': '메용,  샤프아이즈, 하울링 서먼 재규어 사용',
'윈드브레이커': '메용, 샤프아이즈, 엘리멘트 : 스톰 사용',
'은월': '메용 사용, 로디드X',
'일리움': '메용 사용, 오버로드 마나X, 스택X',
'제로': '제로-베타 디바인포스, 메용',
'카데나': '메용 사용, 스택X',
'카이저': '인간폼, 공격모드, 모프3, 블레이즈 업 사용',
'카인': '메용 사용',
'캐논슈터': '메용, 몽키 매직 사용, 로디드X',
'캡틴': '메용, 파이렛 스타일 사용, 로디드X',
'키네시스': '메용 사용, 오버로드 마나X',
'팔라딘': '메용, 컴뱃, 디바인블레싱, 가드 사용, 0차지',
'패스파인더': '메용, 샤프 아이즈 사용',
'팬텀': '메용 사용, 파이널컷X, 크오체X',
'플레임위자드': '메용, 북 오브 파이어 사용,오버로드 마나X',
'호영': '메용 사용',
'히어로': '메용, 10콤보, 인레이지O, 분노',
'제논': '메용, 서플러스 서플라이 20/20, 인클라인파워X, 오파츠 코드X'
}

// 스탯조건(0:일반, 1:이중부스탯, 2:제논, 3:데벤)
export const jobStatCond: Record<jobNames, number> =
{
'나이트로드': 0,
'나이트워커': 0,
'다크나이트': 0,
'데몬슬레이어': 0,
'듀얼블레이드': 1,
'라라': 0,
'루미너스': 0,
'메르세데스': 0,
'메카닉': 0,
'미하일': 0,
'바이퍼': 0,
'배틀메이지': 0,
'보우마스터': 0,
'블래스터': 0,
'비숍': 0,
'섀도어': 1,
'소울마스터': 0,
'스트라이커': 0,
'신궁': 0,
'아델': 0,
'아란': 0,
'아크': 0,
'아크메이지(불,독)': 0,
'아크메이지(썬,콜)': 0,
'에반': 0,
'엔젤릭버스터': 0,
'와일드헌터': 0,
'윈드브레이커': 0,
'은월': 0,
'일리움': 0,
'제로': 0,
'카데나': 1,
'카이저': 0,
'카인': 0,
'캐논슈터': 0,
'캡틴': 0,
'키네시스': 0,
'팔라딘': 0,
'패스파인더': 0,
'팬텀': 0,
'플레임위자드': 0,
'호영': 0,
'히어로': 0,
'제논': 2,
}

// 쿨감사용유무
export const jobUseCoolReduce: Record<jobNames, number> =
{
'나이트로드': 0,
'나이트워커': 0,
'다크나이트': 1,
'데몬슬레이어': 0,
'듀얼블레이드': 1,
'라라': 0,
'루미너스': 0,
'메르세데스': 0,
'메카닉': 1,
'미하일': 0,
'바이퍼': 0,
'배틀메이지': 0,
'보우마스터': 0,
'블래스터': 0,
'비숍': 0,
'섀도어': 0,
'소울마스터': 0,
'스트라이커': 0,
'신궁': 0,
'아델': 1,
'아란': 0,
'아크': 1,
'아크메이지(불,독)': 1,
'아크메이지(썬,콜)': 0,
'에반': 0,
'엔젤릭버스터': 1,
'와일드헌터': 0,
'윈드브레이커': 1,
'은월': 1,
'일리움': 0,
'제로': 0,
'카데나': 1,
'카이저': 1,
'카인': 0,
'캐논슈터': 0,
'캡틴': 0,
'키네시스': 0,
'팔라딘': 0,
'패스파인더': 1,
'팬텀': 1,
'플레임위자드': 0,
'호영': 0,
'히어로': 1,
'제논': 1,
}

// 벞지 최종 보정 유무 (1:모법, 2:루미)
export const jobUsebuffFinal: Record<jobNames, number> =
{
'나이트로드': 0,
'나이트워커': 0,
'다크나이트': 0,
'데몬슬레이어': 0,
'듀얼블레이드': 0,
'라라': 0,
'루미너스': 2,
'메르세데스': 0,
'메카닉': 0,
'미하일': 0,
'바이퍼': 0,
'배틀메이지': 0,
'보우마스터': 0,
'블래스터': 0,
'비숍': 1,
'섀도어': 0,
'소울마스터': 0,
'스트라이커': 0,
'신궁': 0,
'아델': 0,
'아란': 0,
'아크': 0,
'아크메이지(불,독)': 1,
'아크메이지(썬,콜)': 1,
'에반': 0,
'엔젤릭버스터': 0,
'와일드헌터': 0,
'윈드브레이커': 0,
'은월': 0,
'일리움': 0,
'제로': 0,
'카데나': 0,
'카이저': 0,
'카인': 0,
'캐논슈터': 0,
'캡틴': 0,
'키네시스': 0,
'팔라딘': 0,
'패스파인더': 0,
'팬텀': 0,
'플레임위자드': 0,
'호영': 0,
'히어로': 0,
'제논': 0,
}

// 크리인 사용 유무
export const jobUseCriRein: Record<jobNames, number> =
{
'나이트로드': 0,
'나이트워커': 0,
'다크나이트': 0,
'데몬슬레이어': 0,
'듀얼블레이드': 0,
'라라': 0,
'루미너스': 0,
'메르세데스': 1,
'메카닉': 0,
'미하일': 0,
'바이퍼': 0,
'배틀메이지': 0,
'보우마스터': 1,
'블래스터': 0,
'비숍': 0,
'섀도어': 0,
'소울마스터': 0,
'스트라이커': 0,
'신궁': 1,
'아델': 0,
'아란': 0,
'아크': 0,
'아크메이지(불,독)': 0,
'아크메이지(썬,콜)': 0,
'에반': 0,
'엔젤릭버스터': 0,
'와일드헌터': 1,
'윈드브레이커': 1,
'은월': 0,
'일리움': 0,
'제로': 0,
'카데나': 0,
'카이저': 0,
'카인': 1,
'캐논슈터': 0,
'캡틴': 0,
'키네시스': 0,
'팔라딘': 0,
'패스파인더': 1,
'팬텀': 0,
'플레임위자드': 0,
'호영': 0,
'히어로': 0,
'제논': 0,
}

// 보조 보정 유무
export const jobSubweaptype : Record<jobNames, number> =
{
'나이트로드': 0,
'나이트워커': 0,
'다크나이트': 0,
'데몬슬레이어': 0,
'듀얼블레이드': 2,
'라라': 0,
'루미너스': 0,
'메르세데스': 0,
'메카닉': 0,
'미하일': 0,
'바이퍼': 0,
'배틀메이지': 1,
'보우마스터': 0,
'블래스터': 0,
'비숍': 1,
'섀도어': 1,
'소울마스터': 0,
'스트라이커': 0,
'신궁': 0,
'아델': 0,
'아란': 0,
'아크': 0,
'아크메이지(불,독)': 1,
'아크메이지(썬,콜)': 1,
'에반': 1,
'엔젤릭버스터': 0,
'와일드헌터': 0,
'윈드브레이커': 0,
'은월': 0,
'일리움': 0,
'제로': 0,
'카데나': 0,
'카이저': 0,
'카인': 0,
'캐논슈터': 0,
'캡틴': 0,
'키네시스': 0,
'팔라딘': 0,
'패스파인더': 0,
'팬텀': 0,
'플레임위자드': 1,
'호영': 0,
'히어로': 0,
'제논': 0,
}

// 직업링크 어빌 정보(0:보공 1:벞지 2:재사용 3:패시브1렙) 수정
export const jobAbilityInfo: Record<jobNames, number> =
{
'나이트로드': 0,
'나이트워커': 0,
'다크나이트': 1,
'데몬슬레이어': 2,
'듀얼블레이드': 0,
'라라': 3,
'루미너스': 1,
'메르세데스': 0,
'메카닉': 3,
'미하일': 0,
'바이퍼': 0,
'배틀메이지': 0,
'보우마스터': 0,
'블래스터': 0,
'비숍': 1,
'섀도어': 0,
'소울마스터': 0,
'스트라이커': 0,
'신궁': 0,
'아델': 2,
'아란': 0,
'아크': 0,
'아크메이지(불,독)': 1,
'아크메이지(썬,콜)': 1,
'에반': 0,
'엔젤릭버스터': 0,
'와일드헌터': 2,
'윈드브레이커': 0,
'은월': 0,
'일리움': 0,
'제로': 0,
'카데나': 2,
'카이저': 0,
'카인': 3,
'캐논슈터': 0,
'캡틴': 2,
'키네시스': 3,
'팔라딘': 0,
'패스파인더': 0,
'팬텀': 0,
'플레임위자드': 0,
'호영': 3,
'히어로': 0,
'제논': 0,
}

//무기공 수치
export const jobMainWeapAtt: Record<jobNames, number[]> =
{
'나이트로드': [282, 492, 512, 551, 574],
'나이트워커': [282, 492, 512, 551, 574],
'다크나이트': [451, 759, 799, 828, 875],
'데몬슬레이어': [438, 736, 775, 804, 848],
'듀얼블레이드': [429, 725, 762, 789, 832],
'라라': [512, 853, 900, 938, 992],
'루미너스': [512, 853, 900, 938, 992],
'메르세데스': [429, 725, 762, 789, 832],
'메카닉': [359, 615, 644, 662, 696],
'미하일': [438, 736, 775, 804, 848],
'바이퍼': [366, 624, 654, 673, 707],
'배틀메이지': [518, 865, 913, 949, 1004],
'보우마스터': [429, 725, 762, 789, 832],
'블래스터': [366, 624, 654, 673, 707],
'비숍': [518, 865, 913, 949, 1004],
'섀도어': [429, 725, 762, 789, 832],
'소울마스터': [451, 759, 799, 828, 875],
'스트라이커': [366, 624, 654, 673, 707],
'신궁': [438, 736, 775, 804, 848],
'아델': [451+30, 759+44, 799+44, 828+51, 875+51],
'아란': [417, 703, 739, 763, 804],
'아크': [366+15, 624+22, 654+22, 673+25, 707+25],
'아크메이지(불,독)': [518, 865, 913, 949, 1004],
'아크메이지(썬,콜)': [518, 865, 913, 949, 1004],
'에반': [518, 865, 913, 949, 1004],
'엔젤릭버스터': [366, 624, 654, 673, 707],
'와일드헌터': [438, 736, 775, 804, 848],
'윈드브레이커': [429, 725, 762, 789, 832],
'은월': [366, 624, 654, 673, 707],
'일리움': [512+48, 853+69, 900+69, 938+80, 992+80],
'제로': [428, 714, 750, 779, 820],
'카데나': [429, 725, 762, 789, 832],
'카이저': [451, 759, 799, 828, 875],
'카인': [429, 725, 762, 789, 832],
'캐논슈터': [460, 771, 812, 843, 891],
'캡틴': [359, 615, 644, 662, 696],
'키네시스': [512, 853, 900, 938, 992],
'팔라딘': [451, 759, 799, 828, 875],
'패스파인더': [429, 725, 762, 789, 832],
'팬텀': [438, 733, 770, 804, 848],
'플레임위자드': [518, 865, 913, 949, 1004],
'호영': [429, 725, 762, 789, 832],
'히어로': [451, 759, 799, 828, 875],
'제논': [0, 0, 0, 0, 0],
}





// 최종방무, 추가방무 순
export const jobAddIGR: Record<jobNames,number[]> =
{
'나이트로드': [60.5107692307692, 43.5868131868132],
'나이트워커': [53.1659340659341, 44.9010989010989],
'다크나이트': [67.3753846153846, 53.3934065934066],
'데몬슬레이어': [69.8523076923077, 56.9318681318681],
'듀얼블레이드': [71.6923076923077, 71.6923076923077],
'라라': [58.7233406593407, 30.0395604395604],
'루미너스': [68.5784615384615, 47.6307692307692],
'메르세데스': [67.8505494505495, 57.1340659340659],
'메카닉': [43.2835164835165, 18.9764521193093],
'미하일': [67.243956043956, 45.4065934065934],
'바이퍼': [62.4518681318681, 37.4197802197802],
'배틀메이지': [56.3353846153846, 37.621978021978],
'보우마스터': [35.8527472527473, 14.4703296703297],
'블래스터': [66.88, 49.0461538461539],
'비숍': [71.8540659340659, 56.021978021978],
'섀도어': [59.2369230769231, 49.0461538461539],
'소울마스터': [66.5615384615385, 46.9230769230769],
'스트라이커': [52.896, 48.2373626373626],
'신궁': [76.4763076923077, 43.9912087912088],
'아델': [57.6597802197802, 47.0747252747253],
'아란': [64.9995604395604, 41.6659340659341],
'아크': [65.1107692307692, 50.1582417582418],
'아크메이지(불,독)': [38.8553846153846, 23.5692307692308],
'아크메이지(썬,콜)': [40.9582417582418, 26.1978021978022],
'에반': [44.5978021978022, 30.7472527472528],
'엔젤릭버스터': [51.5331868131868, 42.9802197802198],
'와일드헌터': [46.2153846153846, 23.1648351648352],
'윈드브레이커': [33.8307692307692, 22.1538461538462],
'은월': [57.9984615384615, 39.9978021978022],
'일리움': [48.4395604395604, 31.2527472527473],
'제로': [72.9762637362638, 66.6373626373626],
'카데나': [53.0092307692308, 41.2615384615385],
'카이저': [60.6320879120879, 34.3868131868132],
'카인': [46.4465978021978, 13.7626373626374],
'캐논슈터': [53.170989010989, 41.4637362637363],
'캡틴': [55.3547252747253, 44.1934065934066],
'키네시스': [54.5135824175824, 38.5318681318681],
'팔라딘': [81.8628571428571, 73.7142857142857],
'패스파인더': [50.4615384615385, 29.2307692307692],
'팬텀': [56.8307692307692, 38.3296703296703],
'플레임위자드': [53.8584615384615, 34.0835164835165],
'호영': [51.6848351648352, 40.3516483516484],
'히어로': [61.2791208791209, 22.5582417582418],
'제논': [50.16, 28.8],
}

export const jobProperty: Record<jobNames,number[]> =
{
  '나이트로드': [0.9, 1.75],
  '나이트워커': [0.85, 1.75],
  '다크나이트': [0.9, 1.49],
  '데몬슬레이어': [0.9, 1.2],
  '듀얼블레이드': [0.9, 1.3],
  '라라': [0.95, 1.2],
  '루미너스': [0.95, 1.2],
  '메르세데스': [0.85, 1.3],
  '메카닉': [0.85, 1.5],
  '미하일': [0.9, 1.2],
  '바이퍼': [0.9, 1.7],
  '배틀메이지': [0.95, 1.2],
  '보우마스터': [0.85, 1.3],
  '블래스터': [0.9, 1.7],
  '비숍': [0.95, 1.2],
  '섀도어': [0.9, 1.3],
  '소울마스터': [0.9, 1.34],
  '스트라이커': [0.9, 1.7],
  '신궁': [0.85, 1.35],
  '아델': [0.9, 1.3],
  '아란': [0.9, 1.49],
  '아크': [0.9, 1.7],
  '아크메이지(불,독)': [0.95, 1.2],
  '아크메이지(썬,콜)': [0.95, 1.2],
  '에반': [0.95, 1.2],
  '엔젤릭버스터': [0.95, 1.7],
  '와일드헌터': [0.85, 1.35],
  '윈드브레이커': [0.85, 1.3],
  '은월': [0.9, 1.7],
  '일리움': [0.9, 1.2],
  '제로': [0.9, 1.49],
  '카데나': [0.9, 1.3],
  '카이저': [0.9, 1.34],
  '카인': [0.85, 1.3],
  '캐논슈터': [0.85, 1.5],
  '캡틴': [0.85, 1.5],
  '키네시스': [0.92, 1.2],
  '팔라딘': [0.9, 1.34],
  '패스파인더': [0.85, 1.3],
  '팬텀': [0.9, 1.3],
  '플레임위자드': [0.95, 1.2],
  '호영': [0.91, 1.3],
  '히어로': [0.9, 1.44],
  '제논': [0.9, 1.3125],
  }

// 쿨감효율(최적 1:5초 2:2초)
export const jobCReff: Record<jobNames, number[]> =
{
  '나이트로드': [0, 0, 0, 0],
  '나이트워커': [0, 0, 0, 0],
  '다크나이트': [0.0469, 0.0831, 0.1005, 1],
  '데몬슬레이어': [0, 0, 0, 0],
  '듀얼블레이드': [0.042, 0.0778, 0.0908, 1],
  '라라': [0, 0, 0, 0],
  '루미너스': [0, 0, 0, 0],
  '메르세데스': [0, 0, 0, 0],
  '메카닉': [0.027, 0.048, 0.0582, 1],
  '미하일': [0, 0, 0, 0],
  '바이퍼': [0, 0, 0, 0],
  '배틀메이지': [0, 0, 0, 0],
  '보우마스터': [0, 0, 0, 0],
  '블래스터': [0, 0, 0, 0],
  '비숍': [0, 0, 0, 0],
  '섀도어': [0, 0, 0, 0],
  '소울마스터': [0, 0, 0, 0],
  '스트라이커': [0, 0, 0, 0],
  '신궁': [0, 0, 0, 0],
  '아델': [0.0362, 0.0686, 0.0686, 1],
  '아란': [0, 0, 0, 0],
  '아크': [0.0366, 0.0443, 0.0524, 2],
  '아크메이지(불,독)': [0.03603, 0.05512, 0.07442, 1],
  '아크메이지(썬,콜)': [0, 0, 0, 0],
  '에반': [0, 0, 0, 0],
  '엔젤릭버스터': [0.0306, 0.0423, 0.0451, 2],
  '와일드헌터': [0, 0, 0, 0],
  '윈드브레이커': [0.0084, 0.0327, 0.0386, 1],
  '은월': [0.02659, 0.03135, 0.03357, 2],
  '일리움': [0, 0, 0, 0],
  '제로': [0, 0, 0, 0],
  '카데나': [0.03985, 0.06843, 0.08997, 1],
  '카이저': [0.0195, 0.0408, 0.059, 1],
  '카인': [0, 0, 0, 0],
  '캐논슈터': [0, 0, 0, 0],
  '캡틴': [0, 0, 0, 0],
  '키네시스': [0, 0, 0, 0],
  '팔라딘': [0, 0, 0, 0],
  '패스파인더': [0.0214, 0.0334, 0.0479, 2],
  '팬텀': [0.0355, 0.0528, 0.0891, 1],
  '플레임위자드': [0, 0, 0, 0],
  '호영': [0, 0, 0, 0],
  '히어로': [0.017, 0.0247, 0.0403, 2],
  '제논': [0, 0, 0, 0],
}
