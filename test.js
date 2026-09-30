// AMA Supercross 17-0 Node Mock Test
const fs = require('fs');
const html = fs.readFileSync('/tmp/supercross-build/output.html', 'utf8');
const m = html.match(/<script>([\s\S]*?)<\/script>/);
const code = m[1];

const noop = () => {};
const fakeCtx = new Proxy({}, { get: () => noop });
const fakeEl = { classList:{add:noop,remove:noop}, innerHTML:'', textContent:'', appendChild:noop, querySelectorAll:()=>[], scrollTop:0, scrollHeight:0, style:{} };

global.document = {
    getElementById: () => fakeEl,
    querySelectorAll: () => [],
    createElement: () => ({ className:'', innerHTML:'', onclick:null }),
};
global.setTimeout = noop;

const fn = new Function('document', 'setTimeout',
    code + '; return { DRIVERS, SCHEDULE, simulateRace, pointsForPos, eraSynergy, winProb, mulberry32 };');
const api = fn(global.document, global.setTimeout);

console.log('DRIVERS:', api.DRIVERS.length);
console.log('SCHEDULE:', api.SCHEDULE.length);

// Single-race win rate check (OVR 99 vs stadium track)
function mulberry32(seed) {
    return function() {
        seed |= 0; seed = seed + 0x6D2B79F5 | 0;
        let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}

// Check signature
console.log('winProb signature:', api.winProb.toString().split('\n')[0]);

// Test 50 single races with OVR 99 vs random AI
for (const ovr of [70, 80, 85, 90, 95, 99]) {
    let wins = 0;
    let totalWins = 0;
    for (let seed = 1; seed <= 200; seed++) {
        let seasonWins = 0;
        const rng = mulberry32(seed * 1000);
        for (let r = 0; r < api.SCHEDULE.length; r++) {
            const race = api.SCHEDULE[r];
            const result = api.simulateRace(ovr, race.type, rng);
            if (result.playerPos === 1) {
                wins++;
                seasonWins++;
            }
        }
        if (seasonWins === api.SCHEDULE.length) totalWins++;
    }
    console.log(`OVR ${ovr}: avg wins = ${(wins/200).toFixed(2)}/${api.SCHEDULE.length}, perfect 17-0: ${totalWins}/200`);
}
