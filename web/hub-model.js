(()=>{const items=[{id:'classic',name:'森林旅人',kind:'装扮',cost:0,filter:'none',color:'#f3bc63',desc:'橘白毛色、绿围巾和紫色小背包。最初的冒险。'},{id:'mint',name:'薄荷来信',kind:'装扮',cost:300,filter:'hue-rotate(65deg) saturate(.75)',color:'#98ddbd',desc:'一抹清凉的薄荷色，献给森林里的好奇心。'},{id:'rose',name:'落日莓果',kind:'装扮',cost:600,filter:'hue-rotate(315deg) saturate(.8)',color:'#eea2b7',desc:'夕阳与莓果的配色，给冒险添一点甜。'},{id:'moon',name:'月光漫游',kind:'装扮',cost:1000,filter:'hue-rotate(180deg) saturate(.65)',color:'#b0bafa',desc:'月光蓝与星尘紫，属于不肯早睡的冒险家。'},{id:'goldtrail',name:'金色星尘',kind:'足迹',cost:450,color:'#ffe59a',desc:'落地时留下金色星尘，只有视觉效果。'},{id:'rosestep',name:'花瓣小径',kind:'足迹',cost:750,color:'#ee9cbb',desc:'粉色的像素花瓣，跟着脚步轻轻飞散。'}];
items.push(
{id:'aurora',name:'极光信使',kind:'装扮',cost:1500,requires:'marathon',filter:'hue-rotate(115deg) saturate(1.2)',color:'#83e5c8',desc:'穿过一万米森林后，才能收下的极光。'},
{id:'obsidian',name:'永夜守望',kind:'装扮',cost:2800,requires:'clean2000',filter:'grayscale(.65) brightness(.75) contrast(1.25)',color:'#b9a6e3',desc:'无伤行者的夜色，留给沉着的冒险家。'},
{id:'comet',name:'蓝色彗尾',kind:'足迹',cost:1200,requires:'stomp100',color:'#8acffe',desc:'冰蓝色星尘随脚步飞散，见证百次跳踩。'},
{id:'phoenix',name:'不熄余烬',kind:'足迹',cost:2400,requires:'run3000',color:'#ffb175',desc:'单局远行者留下的温暖余烬，永不熄灭。'},
{id:'leafhat',name:'嫩叶小帽',kind:'饰品',cost:350,shape:'leaf',color:'#a8cd86',desc:'把森林的一片新绿，轻轻戴在头上。'},
{id:'berrybow',name:'莓果蝴蝶结',kind:'饰品',cost:500,shape:'bow',color:'#e28fae',desc:'在耳边系一抹莓果红，出发也要有仪式感。'},
{id:'glasses',name:'探险家眼镜',kind:'饰品',cost:800,shape:'glasses',color:'#f0d296',desc:'圆圆的金色镜框，让好奇的眼睛更神气。'},
{id:'mooncharm',name:'月光伴星',kind:'饰品',cost:1400,requires:'explorer',shape:'moon',color:'#bdc8ff',desc:'一枚悬浮的月光饰物，陪你走过夜林。'},
{id:'starcrown',name:'远行星冠',kind:'饰品',cost:2200,requires:'run3000',shape:'star',color:'#f4d588',desc:'献给单局走过三千米的星光旅人。'},
{id:'royalcrown',name:'无伤王冠',kind:'饰品',cost:5000,requires:'clean2000',shape:'crown',color:'#ffe3a0',desc:'连续两千米不受撞击，才配得上的王冠。'});
const badges=[{id:'first',name:'第一片风景',key:'distance',goal:100,icon:'✦',desc:'累计前进 100 米'},{id:'explorer',name:'森林探险家',key:'distance',goal:1000,icon:'⌁',desc:'累计前进 1,000 米'},{id:'seed',name:'瓜子收藏家',key:'seeds',goal:100,icon:'◈',desc:'累计收集 100 颗瓜子'},{id:'stomp',name:'轻盈小脚',key:'kills',goal:10,icon:'↟',desc:'累计跳踩 10 只甲虫'},{id:'digger',name:'地下专家',key:'digs',goal:10,icon:'↧',desc:'累计成功使用 10 次挖洞'},{id:'detective',name:'真相只有一个',key:'fakes',goal:5,icon:'◇',desc:'累计识破 5 个假陷阱'}];
badges.push(
{id:'marathon',name:'万米远征',key:'distance',goal:10000,icon:'⌁',tier:'挑战',desc:'累计前进 10,000 米'},
{id:'longwalk',name:'越过五万重山',key:'distance',goal:50000,icon:'♧',tier:'史诗',desc:'累计前进 50,000 米'},
{id:'legend',name:'森林传说',key:'distance',goal:100000,icon:'♛',tier:'传说',desc:'累计前进 100,000 米'},
{id:'seeds1000',name:'千粒丰收',key:'seeds',goal:1000,icon:'◈',tier:'挑战',desc:'累计收集 1,000 颗瓜子'},
{id:'seeds5000',name:'五千颗小太阳',key:'seeds',goal:5000,icon:'☀',tier:'史诗',desc:'累计收集 5,000 颗瓜子'},
{id:'stomp100',name:'甲虫克星',key:'kills',goal:100,icon:'↟',tier:'挑战',desc:'累计跳踩 100 只甲虫'},
{id:'stomp500',name:'森林巡逻终结者',key:'kills',goal:500,icon:'♜',tier:'传说',desc:'累计跳踩 500 只甲虫'},
{id:'dig100',name:'地下通行大师',key:'digs',goal:100,icon:'↧',tier:'挑战',desc:'累计成功使用 100 次挖洞'},
{id:'fake100',name:'百次识破',key:'fakes',goal:100,icon:'◇',tier:'史诗',desc:'累计识破 100 个假陷阱'},
{id:'run3000',name:'一口气到远方',key:'bestRunDistance',goal:3000,icon:'➶',tier:'史诗',desc:'单局最远到达 3,000 米'},
{id:'run10000',name:'不散场的冒险',key:'bestRunDistance',goal:10000,icon:'∞',tier:'传说',desc:'单局最远到达 10,000 米'},
{id:'clean2000',name:'纤尘不染',key:'bestCleanDistance',goal:2000,icon:'✧',tier:'史诗',desc:'连续前进 2,000 米不受撞击、不坠落'},
{id:'clean5000',name:'完美行者',key:'bestCleanDistance',goal:5000,icon:'♔',tier:'传说',desc:'连续前进 5,000 米不受撞击、不坠落'},
{id:'runseeds250',name:'满载而归',key:'bestRunSeeds',goal:250,icon:'▣',tier:'史诗',desc:'单局收集 250 颗瓜子'});
const bestKeys=['bestRunDistance','bestCleanDistance','bestRunSeeds'];
const missions=[{id:'walk',name:'去远一点的地方',key:'distance',goal:300,reward:30,unit:'米'},{id:'seeds',name:'口袋里装满阳光',key:'seeds',goal:20,reward:25,unit:'颗'},{id:'stomp',name:'甲虫巡逻结束啦',key:'kills',goal:3,reward:35,unit:'只'}];
const zeros=()=>({distance:0,seeds:0,kills:0,digs:0,fakes:0,bestRunDistance:0,bestCleanDistance:0,bestRunSeeds:0});function fresh(day){return{version:1,balance:0,xp:0,stats:zeros(),daily:{day,stats:zeros(),claimed:[],checkin:false},owned:['classic'],equipped:'classic',trail:null,accessory:null,seen:[0],settings:{sound:true,fx:true}}}
function clean(raw,day){const p=fresh(day);if(!raw||raw.version!==1)return p;const num=v=>Number.isFinite(v)&&v>=0?Math.min(1e9,Math.floor(v)):0;for(const k of ['balance','xp'])p[k]=num(raw[k]);for(const k of Object.keys(p.stats))p.stats[k]=num(raw.stats?.[k]);p.owned=items.filter(i=>i.id==='classic'||Array.isArray(raw.owned)&&raw.owned.includes(i.id)).map(i=>i.id);if(p.owned.includes(raw.equipped)&&items.some(i=>i.id===raw.equipped&&i.kind==='装扮'))p.equipped=raw.equipped;if(p.owned.includes(raw.trail)&&items.some(i=>i.id===raw.trail&&i.kind==='足迹'))p.trail=raw.trail;if(p.owned.includes(raw.accessory)&&items.some(i=>i.id===raw.accessory&&i.kind==='饰品'))p.accessory=raw.accessory;p.seen=[...new Set([0,...(Array.isArray(raw.seen)?raw.seen.filter(n=>[0,1,2].includes(n)):[])])];p.settings={sound:raw.settings?.sound!==false,fx:raw.settings?.fx!==false};if(raw.daily?.day===day){p.daily.checkin=raw.daily.checkin===true;p.daily.claimed=missions.filter(m=>Array.isArray(raw.daily.claimed)&&raw.daily.claimed.includes(m.id)).map(m=>m.id);for(const k of Object.keys(p.stats))p.daily.stats[k]=num(raw.daily.stats?.[k])}return p}
function dayCheck(p,day){if(p.daily.day!==day)p.daily={day,stats:zeros(),claimed:[],checkin:false}}
function gain(p,delta,biome){for(const k of Object.keys(p.stats)){const v=Math.max(0,Math.floor(delta[k]||0));if(bestKeys.includes(k)){p.stats[k]=Math.max(p.stats[k],v);p.daily.stats[k]=Math.max(p.daily.stats[k],v)}else{p.stats[k]+=v;p.daily.stats[k]+=v}}p.balance+=Math.max(0,Math.floor(delta.seeds||0));p.xp+=Math.max(0,Math.floor(delta.seeds||0))*5+Math.max(0,Math.floor(delta.distance||0));if([0,1,2].includes(biome)&&!p.seen.includes(biome))p.seen.push(biome)}
function claim(p,id){const m=missions.find(m=>m.id===id);if(!m||p.daily.claimed.includes(id)||p.daily.stats[m.key]<m.goal)return false;p.balance+=m.reward;p.daily.claimed.push(id);return true}
function checkin(p){if(p.daily.checkin)return false;p.daily.checkin=true;p.balance+=15;return true}
function unlocked(p,item){return !item.requires||badges.some(b=>b.id===item.requires&&p.stats[b.key]>=b.goal)}
function buy(p,id){const item=items.find(i=>i.id===id);if(!item||p.owned.includes(id)||p.balance<item.cost||!unlocked(p,item))return false;p.balance-=item.cost;p.owned.push(id);return true}
function equip(p,id){const item=items.find(i=>i.id===id);if(!item||!p.owned.includes(id))return false;if(item.kind==='装扮')p.equipped=id;else if(item.kind==='饰品')p.accessory=p.accessory===id?null:id;else p.trail=p.trail===id?null:id;return true}
globalThis.HubModel={items,badges,missions,bestKeys,unlocked,fresh,clean,dayCheck,gain,claim,checkin,buy,equip,level:p=>Math.floor(Math.sqrt(p.xp/120))+1};})();
