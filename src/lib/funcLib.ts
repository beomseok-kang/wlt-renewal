export const getTeamName = (teamName: string): string => {
  switch (teamName) {
    case 'dwg': return '담원 게이밍';
    case 't1': return 'SKT T1';
    case 'drx': return 'DRX';
    case 'gen': return 'GEN G';
    case 'af': return '아프리카 프릭스';
    case 'hle': return '한화생명';
    case 'sb': return '샌드박스';
    case 'sp': return '설해원 프린스';
    case 'kt': return 'KT 롤스터';
    case 'dyn': return '팀 다이나믹스';
    default: return '';
  }
};

export const getMaxNum = (teamName: string): number => {
  switch (teamName) {
    case 'dwg': return 500;
    case 't1': return 500;
    case 'drx': return 500;
    case 'gen': return 500;
    default: return 200;
  }
};

export const getCurrentNum = async (teamName: string): Promise<number> => {
  // ... get current number of people in the room
  const dummyNum = 100
  return dummyNum;
};

export const addRem = (args: string[]): number => {
  let result: number = 0;
  for (let i = 0; i < args.length; i++) {
    result += Number(args[i].slice(0, -3));
  }
  return result;
};