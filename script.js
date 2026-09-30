
// ==========================================
// AMA Supercross 17-0: Single HTML MVP — X-0 Sports Draft template #21 (forked from Supercross 17-0)
// Reuses the X-0 Sports template proven by
// NFL 38-0 (7/30), F1 17-0 (8/1), NASCAR 36-0 (8/17), Supercross 17-0 (9/17), Moto2 22-0 (9/27),
// ==========================================

// --- SEEDED RNG ---
function mulberry32(s) {
    return function() {
        s |= 0; s = (s + 0x6D2B79F5) | 0;
        let t = Math.imul(s ^ (s >>> 15), 1 | s);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

// --- Supercross RIDERS (84 legends across 6 eras) ---
// OVR: 70-99 scale. Each era: 1988-95 / 1996-02 / 2003-09 / 2010-15 / 2016-21 / 2022-26
// --- SUPERCROSS RIDERS (84 legends across 6 eras) ---
// Eras: 1974-82 / 1983-92 / 1993-02 / 2003-12 / 2013-19 / 2020-26
const DRIVERS = [
    { id: 1, name: "Marty Smith", team: "Honda", era: 1, ovr: 92 },
    { id: 2, name: "Bob Hannah", team: "Yamaha", era: 1, ovr: 99 },
    { id: 3, name: "Brooke Feil", team: "Suzuki", era: 1, ovr: 88 },
    { id: 4, name: "Kent Howerton", team: "Suzuki", era: 1, ovr: 91 },
    { id: 5, name: "Mike Bell", team: "Honda", era: 1, ovr: 89 },
    { id: 6, name: "Jim Weinert", team: "Kawasaki", era: 1, ovr: 86 },
    { id: 7, name: "Gaston Rahier", team: "Suzuki", era: 1, ovr: 87 },
    { id: 8, name: "Heikki Mikkola", team: "Yamaha", era: 1, ovr: 85 },
    { id: 9, name: "Håkan Carlqvist", team: "Yamaha", era: 1, ovr: 84 },
    { id: 10, name: "Tommy Croft", team: "Honda", era: 1, ovr: 82 },
    { id: 11, name: "Gary Semics", team: "KTM", era: 1, ovr: 80 },
    { id: 12, name: "Arne Lindfors", team: "Husqvarna", era: 1, ovr: 78 },
    { id: 13, name: "Brad Lackey", team: "Suzuki", era: 1, ovr: 81 },
    { id: 14, name: "Roger DeCoster", team: "Suzuki", era: 1, ovr: 94 },
    { id: 15, name: "Jeff Ward", team: "Suzuki", era: 2, ovr: 96 },
    { id: 16, name: "Rick Johnson", team: "Honda", era: 2, ovr: 97 },
    { id: 17, name: "David Bailey", team: "Honda", era: 2, ovr: 93 },
    { id: 18, name: "Johnny O'Mara", team: "Honda", era: 2, ovr: 91 },
    { id: 19, name: "Ron Lechien", team: "Honda", era: 2, ovr: 92 },
    { id: 20, name: "Broc Glover", team: "Yamaha", era: 2, ovr: 89 },
    { id: 21, name: "Jeff Matiasevich", team: "Kawasaki", era: 2, ovr: 86 },
    { id: 22, name: "Donnie Hansen", team: "Honda", era: 2, ovr: 88 },
    { id: 23, name: "Mark Barnett", team: "Honda", era: 2, ovr: 87 },
    { id: 17, name: "Kent Gaston", team: "Honda", era: 2, ovr: 83 },
    { id: 25, name: "Larry Ward", team: "Suzuki", era: 2, ovr: 85 },
    { id: 26, name: "Eddie Warren", team: "Suzuki", era: 2, ovr: 84 },
    { id: 27, name: "Mike Kiedrowski", team: "Honda", era: 2, ovr: 90 },
    { id: 28, name: "Pierre Karsmakers", team: "Honda", era: 2, ovr: 82 },
    { id: 29, name: "Jeremy McGrath", team: "Honda", era: 3, ovr: 99 },
    { id: 30, name: "Ricky Carmichael", team: "Kawasaki", era: 3, ovr: 98 },
    { id: 31, name: "Jeff Emig", team: "Kawasaki", era: 3, ovr: 95 },
    { id: 32, name: "Greg Albertyn", team: "Suzuki", era: 3, ovr: 89 },
    { id: 33, name: "Sebastien Tortelli", team: "Honda", era: 3, ovr: 90 },
    { id: 34, name: "Kevin Windham", team: "Honda", era: 3, ovr: 94 },
    { id: 35, name: "Mike LaRocco", team: "Honda", era: 3, ovr: 88 },
    { id: 36, name: "Tim Ferry", team: "Yamaha", era: 3, ovr: 87 },
    { id: 37, name: "Damon Huffman", team: "Honda", era: 3, ovr: 84 },
    { id: 38, name: "Ezra Lusk", team: "Honda", era: 3, ovr: 89 },
    { id: 39, name: "Stevie Lamson", team: "Yamaha", era: 3, ovr: 85 },
    { id: 40, name: "Travis Pastrana", team: "Suzuki", era: 3, ovr: 86 },
    { id: 41, name: "David Vuillemin", team: "Yamaha", era: 3, ovr: 88 },
    { id: 42, name: "Chad Reed", team: "Yamaha", era: 3, ovr: 93 },
    { id: 43, name: "James Stewart", team: "Kawasaki", era: 4, ovr: 99 },
    { id: 44, name: "Chad Reed", team: "Kawasaki", era: 4, ovr: 95 },
    { id: 45, name: "Ryan Villopoto", team: "Kawasaki", era: 4, ovr: 98 },
    { id: 46, name: "Ryan Dungey", team: "Suzuki", era: 4, ovr: 97 },
    { id: 47, name: "Trey Canard", team: "Honda", era: 4, ovr: 91 },
    { id: 48, name: "Justin Brayton", team: "KTM", era: 4, ovr: 86 },
    { id: 49, name: "Andrew Short", team: "Honda", era: 4, ovr: 87 },
    { id: 50, name: "Ivan Tedesco", team: "Honda", era: 4, ovr: 89 },
    { id: 51, name: "Mike Alessi", team: "KTM", era: 4, ovr: 88 },
    { id: 52, name: "Kevin Strijbos", team: "Suzuki", era: 4, ovr: 84 },
    { id: 53, name: "Brett Metcalfe", team: "Honda", era: 4, ovr: 85 },
    { id: 54, name: "Josh Grant", team: "Honda", era: 4, ovr: 86 },
    { id: 55, name: "Jake Weimer", team: "Kawasaki", era: 4, ovr: 82 },
    { id: 56, name: "Justin Barcia", team: "Honda", era: 4, ovr: 90 },
    { id: 57, name: "Ryan Dungey", team: "KTM", era: 5, ovr: 99 },
    { id: 58, name: "Ken Roczen", team: "Honda", era: 5, ovr: 96 },
    { id: 59, name: "Eli Tomac", team: "Kawasaki", era: 5, ovr: 98 },
    { id: 60, name: "Marvin Musquin", team: "KTM", era: 5, ovr: 94 },
    { id: 61, name: "Jason Anderson", team: "Husqvarna", era: 5, ovr: 93 },
    { id: 62, name: "Cooper Webb", team: "Yamaha", era: 5, ovr: 95 },
    { id: 63, name: "Zach Osborne", team: "Husqvarna", era: 5, ovr: 90 },
    { id: 64, name: "Dean Wilson", team: "Husqvarna", era: 5, ovr: 88 },
    { id: 65, name: "Justin Barcia", team: "Yamaha", era: 5, ovr: 92 },
    { id: 66, name: "Broc Tickle", team: "KTM", era: 5, ovr: 84 },
    { id: 67, name: "Blake Baggett", team: "KTM", era: 5, ovr: 89 },
    { id: 68, name: "Chase Sexton", team: "Honda", era: 5, ovr: 93 },
    { id: 69, name: "Aaron Plessinger", team: "KTM", era: 5, ovr: 87 },
    { id: 70, name: "Joey Savatgy", team: "Kawasaki", era: 5, ovr: 86 },
    { id: 71, name: "Eli Tomac", team: "Yamaha", era: 6, ovr: 99 },
    { id: 72, name: "Cooper Webb", team: "KTM", era: 6, ovr: 98 },
    { id: 73, name: "Chase Sexton", team: "Honda", era: 6, ovr: 97 },
    { id: 74, name: "Ken Roczen", team: "Suzuki", era: 6, ovr: 94 },
    { id: 75, name: "Jason Anderson", team: "Kawasaki", era: 6, ovr: 92 },
    { id: 76, name: "Marvin Musquin", team: "KTM", era: 6, ovr: 91 },
    { id: 77, name: "Aaron Plessinger", team: "KTM", era: 6, ovr: 89 },
    { id: 78, name: "Dylan Ferrandis", team: "Honda", era: 6, ovr: 88 },
    { id: 79, name: "Justin Barcia", team: "GasGas", era: 6, ovr: 90 },
    { id: 80, name: "Malcolm Stewart", team: "Husqvarna", era: 6, ovr: 87 },
    { id: 81, name: "Dean Wilson", team: "Honda", era: 6, ovr: 85 },
    { id: 82, name: "Christian Craig", team: "Husqvarna", era: 6, ovr: 86 },
    { id: 83, name: "Jett Lawrence", team: "Honda", era: 6, ovr: 98 },
    { id: 84, name: "Hunter Lawrence", team: "Honda", era: 6, ovr: 95 }
];

const ERA_NAMES = {
    1: "1974-82",
    2: "1983-92",
    3: "1993-02",
    4: "2003-12",
    5: "2013-19",
    6: "2020-26"
};

const ERA_LABELS = {
    1: "74-82",
    2: "83-92",
    3: "93-02",
    4: "03-12",
    5: "13-19",
    6: "20-26"
};

// Realistic 2026 Supercross calendar (17 races, 12 rounds × 2 races each, all road circuits)
// Track types: 17 road circuits (Phillip Island, Chang, Barcelona, Assen, Misano, Donington, Most, Cremona, Magny-Cours, Jerez, Portimão, Jerez finale)
// Note: No double points at any race. Standard 25-1 system. Win all 17 = 17-0!
// Realistic 2026 AMA Supercross calendar (17 rounds, all stadium events)
// Track type: 'stadium' (Supercross is always stadium - dirt + man-made obstacles)
// Note: 250SX East/West Showdown + Triple Crown format means slightly different formats per round,
// but we abstract to 1 main event per round for sweepability.
const SCHEDULE = [
    { name: "Round 1 — Anaheim 1", track: "Angel Stadium, Anaheim CA", type: "stadium" },
    { name: "Round 2 — San Diego", track: "Snapdragon Stadium, San Diego CA", type: "stadium" },
    { name: "Round 3 — Anaheim 2", track: "Angel Stadium, Anaheim CA", type: "stadium" },
    { name: "Round 4 — Houston", track: "NRG Stadium, Houston TX", type: "stadium" },
    { name: "Round 5 — Tampa", track: "Raymond James Stadium, Tampa FL", type: "stadium" },
    { name: "Round 6 — Detroit", track: "Ford Field, Detroit MI", type: "stadium" },
    { name: "Round 7 — Indianapolis", track: "Lucas Oil Stadium, Indianapolis IN", type: "stadium" },
    { name: "Round 8 — Birmingham", track: "Protective Stadium, Birmingham AL", type: "stadium" },
    { name: "Round 9 — Daytona", track: "Daytona International Speedway, Daytona FL", type: "stadium" },
    { name: "Round 10 — St. Louis", track: "The Dome at America's Center, St. Louis MO", type: "stadium" },
    { name: "Round 11 — Seattle", track: "Lumen Field, Seattle WA", type: "stadium" },
    { name: "Round 12 — Glendale", track: "State Farm Stadium, Glendale AZ", type: "stadium" },
    { name: "Round 13 — Atlanta", track: "Mercedes-Benz Stadium, Atlanta GA", type: "stadium" },
    { name: "Round 14 — Foxborough", track: "Gillette Stadium, Foxborough MA", type: "stadium" },
    { name: "Round 15 — Philadelphia", track: "Lincoln Financial Field, Philadelphia PA", type: "stadium" },
    { name: "Round 16 — Salt Lake City", track: "Rice-Eccles Stadium, Salt Lake City UT", type: "stadium" },
    { name: "Round 17 — Las Vegas Finale", track: "Allegiant Stadium, Las Vegas NV", type: "stadium" }
];

// --- GAME STATE ---
let state = {
    phase: 'draft',  // draft / season / finale
    drafted: [],
    selectedEra: 1,
    season: null,
    rng: null,
    seed: 0
};

// --- WIN PROBABILITY ---
// Reuses the F1 17-0 + NFL 38-0 calibrated formula
function winProb(ovr, raceType, isSuperspeedway) {
    // Base: 0.05 to 0.95 based on OVR
    let base = Math.min(0.95, Math.max(0.05, (ovr - 70) / 30));

    // Track-type bonuses (Supercross: 17 stadium rounds, no street chaos - all on dirt)
    const bonuses = {
        'oval': -0.03,    // pack racing, drafting reduces skill edge
        'road': 0.0,      // neutral - skill shows most
        'street': -0.05   // highest chaos, walls, tight corners
    };
    base += (bonuses[raceType] || 0);

    return Math.min(0.97, Math.max(0.03, base));
}

// --- ERA SYNERGY BONUS ---
// Picking drivers from same team or same era gives small bonus
function eraSynergy(drafted) {
    const eras = drafted.map(d => d.era);
    const eraCounts = {};
    eras.forEach(e => eraCounts[e] = (eraCounts[e] || 0) + 1);
    const maxCount = Math.max(...Object.values(eraCounts));
    // +1.5 OVR for each extra driver from same era beyond the first
    return (maxCount - 1) * 1.5;
}

// --- SIMULATE A SINGLE RACE ---
function simulateRace(playerOVR, raceType, rng) {
    // Generate AI field of 35 other cars with realistic OVR distribution
    const field = [];
    for (let i = 0; i < 35; i++) {
        // AI drivers weighted around OVR 84-93 (strong Supercross field, all-road circuits favor elite teams)
        const aiOVR = 84 + Math.floor(rng() * 10);
        field.push({ name: `AI #${i+2}`, ovr: aiOVR, type: raceType });
    }

    // Add player
    field.push({ name: 'YOU', ovr: playerOVR, type: raceType, isPlayer: true });

    // Each car: simulate a continuous score based on OVR + variance
    // Continuous scoring ensures the best OVR reliably finishes at the top,
    // not randomly tied with low-OVR AI cars that happened to roll 1 on a binary coin
    field.forEach(car => {
        const prob = winProb(car.ovr, raceType);
        // Variance: ±10% per race
        const variance = (rng() - 0.5) * 0.20;
        const adjusted = Math.min(0.97, Math.max(0.03, prob + variance));
        // Use a continuous noise term as score
        car.score = adjusted + (rng() - 0.5) * 0.20;
    });

    // Add oval pack-racing chaos (drafting can upset strong cars)
    if (raceType === 'oval') {
        field.forEach(car => {
            if (!car.isPlayer && car.ovr < 85) {
                car.score += rng() * 0.22;  // more chaos
            }
        });
    }

    // Sort by score, get player's position
    field.sort((a, b) => b.score - a.score);
    const playerPos = field.findIndex(c => c.isPlayer) + 1;
    return { playerPos, field };
}

// --- POINTS CALCULATION (Modern Supercross: 25-1 system, top 15 score) ---
function pointsForPos(pos, raceIdx) {
    // Modern Supercross: 25-1 system, top 15 score (since 2023)
    // P1=25, P2=20, P3=16, P4=13, P5=11, P6=10, P7=9, P8=8, P9=7, P10=6
    // P11=5, P12=4, P13=3, P14=2, P15=1, P16+ = 0
    // No double points at any race
    const POINTS = [25, 20, 16, 13, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    return POINTS[pos - 1] || 0;
}

// --- UI HELPERS ---
function $(id) { return document.getElementById(id); }
function show(id) { $(id).hidden = false; }
function hide(id) { $(id).hidden = true; }

function switchScreen(name) {
    hide('screen-draft');
    hide('screen-season');
    hide('screen-finale');
    show(`screen-${name}`);
    state.phase = name;
}

// --- ERA TABS RENDER ---
function renderTabs() {
    const tabs = $('era-tabs');
    tabs.innerHTML = '';
    for (let era = 1; era <= 6; era++) {
        const btn = document.createElement('button');
        btn.className = 'tab' + (era === state.selectedEra ? ' active' : '');
        btn.textContent = ERA_LABELS[era];
        btn.onclick = () => {
            state.selectedEra = era;
            renderTabs();
            renderDrivers();
        };
        tabs.appendChild(btn);
    }
}

// --- DRIVERS RENDER ---
function renderDrivers() {
    const grid = $('driver-grid');
    grid.innerHTML = '';
    const drivers = DRIVERS.filter(d => d.era === state.selectedEra);
    drivers.forEach(d => {
        const drafted = state.drafted.some(x => x.id === d.id);
        const card = document.createElement('div');
        card.className = 'driver-card' + (drafted ? ' drafted' : '');
        card.innerHTML = `
            <div class="ovr">${d.ovr}</div>
            <div class="name">${d.name}</div>
            <div class="team">${d.team}</div>
        `;
        if (!drafted) {
            card.onclick = () => draftDriver(d);
        }
        grid.appendChild(card);
    });
}

// --- DRAFT LOGIC ---
function draftDriver(d) {
    if (state.drafted.length >= 5) return;
    if (state.drafted.some(x => x.id === d.id)) return;
    state.drafted.push(d);
    updateDraftUI();
    renderDrivers();
}

function undraftDriver(id) {
    state.drafted = state.drafted.filter(d => d.id !== id);
    updateDraftUI();
    renderDrivers();
}

function updateDraftUI() {
    const n = state.drafted.length;
    $('stat-picked').textContent = n;
    if (n > 0) {
        const avg = (state.drafted.reduce((s, d) => s + d.ovr, 0) / n + eraSynergy(state.drafted)).toFixed(0);
        $('stat-avg').textContent = avg;
    } else {
        $('stat-avg').textContent = '—';
    }

    const status = $('draft-status');
    const countText = $('count-text');
    const helpText = $('help-text');
    if (n === 0) {
        countText.textContent = 'Pick 5 Supercross legends';
        helpText.textContent = 'Tap a driver to draft. Mix eras for synergy bonuses.';
        status.classList.remove('full');
    } else if (n < 5) {
        countText.textContent = `${n}/5 drivers drafted`;
        helpText.textContent = `Pick ${5 - n} more. Avg OVR: ${$('stat-avg').textContent}`;
        status.classList.remove('full');
    } else {
        countText.textContent = '🏎️ Roster Complete!';
        helpText.textContent = `Avg OVR: ${$('stat-avg').textContent} (incl +${eraSynergy(state.drafted).toFixed(1)} era synergy)`;
        status.classList.add('full');
    }

    // Show chips
    const existingChips = status.querySelectorAll('.roster-chip');
    existingChips.forEach(c => c.remove());
    if (n > 0) {
        const rosterDiv = document.createElement('div');
        rosterDiv.className = 'roster';
        rosterDiv.style.marginTop = '10px';
        state.drafted.forEach(d => {
            const chip = document.createElement('span');
            chip.className = 'roster-chip';
            chip.textContent = `${d.name} ${d.ovr}`;
            chip.onclick = () => undraftDriver(d.id);
            chip.style.cursor = 'pointer';
            chip.title = 'Tap to remove';
            rosterDiv.appendChild(chip);
        });
        status.appendChild(rosterDiv);
    }

    $('start-btn').disabled = n !== 5;
}

// --- RESET ---
$('reset-btn').onclick = () => {
    state.drafted = [];
    updateDraftUI();
    renderDrivers();
};

// --- START SEASON ---
$('start-btn').onclick = () => {
    // Pick highest-OVR drafted driver as primary; pool all 6 for variation
    state.seed = Date.now();
    state.rng = mulberry32(state.seed);
    state.season = {
        results: [],  // [{ race, name, pos, points }]
        standings: {},  // driver.id -> total points
        playerWins: 0,
        bestStreak: 0,
        currentStreak: 0,
        primaryDriver: state.drafted.sort((a, b) => b.ovr - a.ovr)[0],
        allDrafted: state.drafted
    };
    // Init standings
    state.season.standings[state.season.primaryDriver.id] = 0;
    state.drafted.forEach(d => state.season.standings[d.id] = 0);

    switchScreen('season');
    $('race-counter').textContent = '1';
    $('race-counter-end') && ($('race-counter-end').textContent = '1');
    showNextRace();
};

function showNextRace() {
    const i = state.season.results.length;
    if (i >= SCHEDULE.length) {
        showFinale();
        return;
    }
    const race = SCHEDULE[i];
    $('race-counter').textContent = (i + 1);
    $('season-race-num').textContent = (i + 1);
    $('race-title').textContent = race.name;
    $('race-track').textContent = `${race.track} · ${race.type}`;
    show('race-btn');
    hide('race-next-row');
    hide('race-detail');
}

$('race-btn').onclick = () => {
    const i = state.season.results.length;
    const race = SCHEDULE[i];
    // Player uses best drafted driver as primary; pool of 6 allows occasional rotation
    // For simplicity: use primary driver for entire season
    const playerOVR = state.season.primaryDriver.ovr + eraSynergy(state.season.allDrafted);
    const result = simulateRace(playerOVR, race.type, state.rng);
    const pts = pointsForPos(result.playerPos, i);
    const win = result.playerPos === 1;
    state.season.results.push({
        race: i + 1,
        name: race.name,
        track: race.track,
        type: race.type,
        pos: result.playerPos,
        points: pts,
        win: win
    });

    // Update standings
    state.season.standings[state.season.primaryDriver.id] += pts;

    // Streak
    if (win) {
        state.season.playerWins++;
        state.season.currentStreak++;
        if (state.season.currentStreak > state.season.bestStreak) {
            state.season.bestStreak = state.season.currentStreak;
        }
    } else {
        state.season.currentStreak = 0;
    }

    // Show race detail (top 5)
    let detailHTML = '<div style="font-size:11px; color:var(--muted); letter-spacing:0.1em; margin-bottom:6px;">TOP 5 FINISH</div>';
    result.field.slice(0, 5).forEach((car, idx) => {
        const pos = idx + 1;
        const isYou = car.isPlayer;
        detailHTML += `<div class="race-row ${isYou ? 'win' : ''}" style="border-left-color:${isYou ? 'var(--accent2)' : 'var(--border)'}">
            <div class="race-num">P${pos}</div>
            <div class="race-name">${car.name}${isYou ? ' 🏁' : ''}</div>
            <div class="race-result">OVR ${car.ovr}</div>
        </div>`;
    });
    $('race-detail').innerHTML = detailHTML;

    // Update season UI
    $('season-wins').textContent = state.season.playerWins;
    $('season-streak').textContent = state.season.currentStreak;
    $('season-points').textContent = state.season.results.reduce((s, r) => s + r.points, 0);

    // Update race log
    const logRow = document.createElement('div');
    logRow.className = `race-row ${win ? 'win' : 'loss'}`;
    logRow.innerHTML = `
        <div class="race-num">R${i + 1}</div>
        <div class="race-name">${race.name}</div>
        <div class="race-result">P${result.playerPos}${win ? ' 🏆' : ''}</div>
        <div class="race-pts">+${pts}</div>
    `;
    $('race-log').prepend(logRow);

    // Swap buttons
    hide('race-btn');
    show('race-next-row');
    if (i >= SCHEDULE.length - 1) {
        $('race-next-btn').textContent = 'See Final Standings →';
    } else {
        $('race-next-btn').textContent = 'Next Race →';
    }
};

$('race-detail-btn').onclick = () => {
    const d = $('race-detail');
    if (d.hidden) show('race-detail');
    else hide('race-detail');
};

$('race-next-btn').onclick = () => {
    showNextRace();
};

// --- FINALE ---
function showFinale() {
    switchScreen('finale');
    const wins = state.season.playerWins;
    const totalRaces = SCHEDULE.length;

    // Record (Wins-Losses)
    const record = `${wins}-${totalRaces - wins}`;
    $('finale-record').textContent = record;
    $('share-record').textContent = record;

    // Title
    let title = '';
    if (wins === 17) title = '🏆 UNDEFEATED — 17-0 LEGEND!';
    else if (wins >= 18) title = `🏆 ELITE — ${wins} wins / 17`;
    else if (wins >= 15) title = `🏟️ STRONG — ${wins} wins / 17`;
    else if (wins >= 10) title = `🏟️ CHAMPIONSHIP BID — ${wins} wins / 17`;
    else title = `${wins} wins / 17 — Try a stronger roster next time`;
    $('finale-title').textContent = title;

    // Badges
    let badgesHTML = '';
    if (wins === 17) badgesHTML += '<span class="badge gold">⭐ Perfect Season</span>';
    if (state.season.bestStreak >= 8) badgesHTML += `<span class="badge green">🔥 ${state.season.bestStreak}-Race Streak</span>`;
    if (wins >= 16) badgesHTML += '<span class="badge green">Title Contender</span>';
    if (wins < 8) badgesHTML += '<span class="badge red">Rebuild Year</span>';
    $('finale-badges').innerHTML = badgesHTML;

    // Podium (top 3 drafted drivers by points, but player = primary driver)
    const podiumHTML = `
        <div class="podium-place">
            <div class="pos">YOUR #1</div>
            <div class="nm">${state.season.primaryDriver.name}</div>
            <div class="pts">${state.season.standings[state.season.primaryDriver.id]}</div>
        </div>
    `;
    $('podium').innerHTML = podiumHTML;

    // Full season log
    $('finale-log').innerHTML = '';
    state.season.results.forEach(r => {
        const row = document.createElement('div');
        row.className = `race-row ${r.win ? 'win' : 'loss'}`;
        row.innerHTML = `
            <div class="race-num">R${r.race}</div>
            <div class="race-name">${r.name}</div>
            <div class="race-result">P${r.pos}${r.win ? ' 🏆' : ''}</div>
            <div class="race-pts">+${r.points}</div>
        `;
        $('finale-log').appendChild(row);
    });
}

$('replay-btn').onclick = () => {
    state = { phase: 'draft', drafted: [], selectedEra: 1, season: null, rng: null, seed: 0 };
    renderTabs();
    renderDrivers();
    updateDraftUI();
    $('race-log').innerHTML = '';
    switchScreen('draft');
};

$('share-btn').onclick = () => {
    const text = `🏟️ My Supercross 17-0 season: ${$('share-record').textContent}\n` +
                 `Driver: ${state.season.primaryDriver.name} (OVR ${state.season.primaryDriver.ovr})\n` +
                 `Best Streak: ${state.season.bestStreak}\n` +
                 `#SX17Zero #UndefeatedSeason`;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            $('share-btn').textContent = '✅ Copied!';
            setTimeout(() => $('share-btn').textContent = '📋 Copy Share Text', 1500);
        });
    } else {
        alert(text);
    }
};

// --- INIT ---
renderTabs();
renderDrivers();
updateDraftUI();
