const citiesIndexes = [
  {
  cd: 'AD',
  start: 0,
  end: 9,
  },
  {
    cd: 'AE',
    start: 10,
    end: 23,
  },
  {
    cd: 'AF',
    start: 24,
    end: 334,
  },
  {
    cd: 'AG',
    start: 335,
    end: 340,
  },
  {
    cd: 'AI',
    start: 341,
    end: 357,
  },
  {
    cd: 'AL',
    start: 358,
    end: 711,
  },
  {
    cd: 'AM',
    start: 712,
    end: 1023,
  },
  {
    cd: 'AO',
    start: 1024,
    end: 1062,
  },
  {
    cd: 'AR',
    start: 1063,
    end: 2039,
  },
  {
    cd: 'AS',
    start: 2040,
    end: 2053,
  },
  {
    cd: 'AT',
    start: 2054,
    end: 4298,
  },
  {
    cd: 'AU',
    start: 4299,
    end: 6096,
  },
  {
    cd: 'AW',
    start: 6097,
    end: 6097,
  },
  {
    cd: 'AX',
    start: 6098,
    end: 6113,
  },
  {
    cd: 'AZ',
    start: 6114,
    end: 6287,
  },
  {
    cd: 'BA',
    start: 6288,
    end: 6550,
  },
  {
    cd: 'BB',
    start: 6551,
    end: 6560,
  },
  {
    cd: 'BD',
    start: 6561,
    end: 6676,
  },
  {
    cd: 'BE',
    start: 6677,
    end: 7219,
  },
  {
    cd: 'BF',
    start: 7220,
    end: 7295,
  },
  {
    cd: 'BG',
    start: 7296,
    end: 7584,
  },
  {
    cd: 'BH',
    start: 7585,
    end: 7593,
  },
  {
    cd: 'BI',
    start: 7594,
    end: 7613,
  },
  {
    cd: 'BJ',
    start: 7614,
    end: 7658,
  },
  {
    cd: 'BL',
    start: 7659,
    end: 7659,
  },
  {
    cd: 'BM',
    start: 7660,
    end: 7661,
  },
  {
    cd: 'BN',
    start: 7662,
    end: 7668,
  },
  {
    cd: 'BO',
    start: 7669,
    end: 7796,
  },
  {
    cd: 'BQ',
    start: 7797,
    end: 7803,
  },
  {
    cd: 'BR',
    start: 7804,
    end: 9818,
  },
  {
    cd: 'BS',
    start: 9819,
    end: 9843,
  },
  {
    cd: 'BT',
    start: 9844,
    end: 9868,
  },
  {
    cd: 'BW',
    start: 9869,
    end: 9955,
  },
  {
    cd: 'BY',
    start: 9956,
    end: 10217,
  },
  {
    cd: 'BZ',
    start: 10218,
    end: 10229,
  },
  {
    cd: 'CA',
    start: 10230,
    end: 11068,
  },
  {
    cd: 'CC',
    start: 11069,
    end: 11069,
  },
  {
    cd: 'CD',
    start: 11070,
    end: 11140,
  },
  {
    cd: 'CF',
    start: 11141,
    end: 11177,
  },
  {
    cd: 'CG',
    start: 11178,
    end: 11196,
  },
  {
    cd: 'CH',
    start: 11197,
    end: 12609,
  },
  {
    cd: 'CI',
    start: 12610,
    end: 12723,
  },
  {
    cd: 'CK',
    start: 12724,
    end: 12724,
  },
  {
    cd: 'CL',
    start: 12725,
    end: 12867,
  },
  {
    cd: 'CM',
    start: 12868,
    end: 12989,
  },
  {
    cd: 'CN',
    start: 12991,
    end: 13697,
  },
  {
    cd: 'CO',
    start: 15698,
    end: 16864,
  },
  {
    cd: 'CR',
    start: 16865,
    end: 16992,
  },
  {
    cd: 'CU',
    start: 16993,
    end: 17172,
  },
  {
    cd: 'CV',
    start: 17173,
    end: 17198,
  },
  {
    cd: 'CW',
    start: 17199,
    end: 17202,
  },
  {
    cd: 'CX',
    start: 17203,
    end: 17203,
  },
  {
    cd: 'CY',
    start: 17204,
    end: 17285,
  },
  {
    cd: 'CZ',
    start: 17286,
    end: 18572,
  },
  {
    cd: 'DE',
    start: 18573,
    end: 25743,
  },
  {
    cd: 'DJ',
    start: 25744,
    end: 25756,
  },
  {
    cd: 'DK',
    start: 25757,
    end: 26094,
  },
  {
    cd: 'DM',
    start: 26095,
    end: 26111,
  },
  {
    cd: 'DO',
    start: 26112,
    end: 26319,
  },
  {
    cd: 'DZ',
    start: 26320,
    end: 26577,
  },
  {
    cd: 'EC',
    start: 26578,
    end: 26699,
  },
  {
    cd: 'EE',
    start: 26700,
    end: 26813,
  },
  {
    cd: 'EG',
    start: 26814,
    end: 26951,
  },
  {
    cd: 'EH',
    start: 26952,
    end: 26954,
  },
  {
    cd: 'ER',
    start: 26955,
    end: 26966,
  },
  {
    cd: 'ES',
    start: 26967,
    end: 27500,
  },
  {
    cd: 'ET',
    start: 33889,
    end: 33997,
  },
  {
    cd: 'FI',
    start: 33998,
    end: 34457,
  },
  {
    cd: 'FJ',
    start: 34458,
    end: 34464,
  },
  {
    cd: 'NL',
    start: 79412,
    end: 80000,
  },
  {
    cd: 'NO',
    start: 80816,
    end: 81115,
  },
  
  




    
  

]

export default citiesIndexes;
