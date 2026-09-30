#!/usr/bin/env python3
"""Build AMA Supercross 17-0 from WSBK 24-0 template (X-0 Sports Draft #21)"""
import re, sys

with open('/tmp/supercross-build/source/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# === 1) Title + meta ===
html = html.replace(
    '<title>🏍️ 24-0: World Superbike Draft — Can You Sweep The Season?</title>',
    '<title>🏟️ 17-0: AMA Supercross Draft — Can You Sweep The Season?</title>'
)
html = html.replace(
    'Draft legendary World Superbike riders across the eras and try to win every race in a 24-race WSBK season. 84 legends. 6 eras. 24 races. 1 goal: 24-0.',
    'Draft legendary AMA Supercross riders across the eras and try to win every Main Event in a 17-round stadium supercross season. 84 legends. 6 eras. 17 rounds. 1 goal: 17-0.'
)

# === 2) Color accent (Supercross dirt red/orange vs WSBK Ducati red) ===
html = html.replace(
    '    --accent: #dc2626;          /* WSBK Ducati red */',
    '    --accent: #ea580c;          /* AMA Supercross dirt orange */'
)

# === 3) h1 ===
html = html.replace(
    '<h1>🏍️ 24-0: World Superbike Draft</h1>',
    '<h1>🏟️ 17-0: AMA Supercross Draft</h1>'
)

# === 4) Pick 5 (HTML + JS) ===
html = html.replace(
    '<div class="count" id="count-text">Pick 5 WSBK legends</div>',
    '<div class="count" id="count-text">Pick 5 Supercross legends</div>'
)
html = html.replace(
    "countText.textContent = 'Pick 5 WSBK legends';",
    "countText.textContent = 'Pick 5 Supercross legends';"
)

# === 5) Hashtag + share text ===
html = html.replace(
    '<div style="font-size:11px; color:var(--muted); margin-top:6px;">#WSBK24Zero #UndefeatedSeason</div>',
    '<div style="font-size:11px; color:var(--muted); margin-top:6px;">#SX17Zero #UndefeatedSeason</div>'
)

# === 6) Footer cross-link list + tagline ===
html = html.replace(
    'Made for 🏍️ World Superbike fans · 84 legends · 6 eras · 24 races · 1 dream<br>',
    'Made for 🏟️ AMA Supercross fans · 84 legends · 6 eras · 17 rounds · 1 dream<br>'
)

# === 7) Cross-link matrix to include X-0 #21 ===
# Replace the cross-link list with all 21 variants
old_links = 'A tribute to <a href="https://github.com/TeapoyY/squad-draft-football" style="color:var(--accent);">38-0</a> & <a href="https://github.com/TeapoyY/app-pixelgp-web" style="color:var(--accent);">24-0</a> drafting lineage.'
new_links = '''🏟️ <a href="https://github.com/TeapoyY/supercross-17-draft" style="color:var(--accent);">17-0 SX</a> · <a href="https://github.com/TeapoyY/moto2-22-draft" style="color:var(--accent);">22-0 Moto2</a> · <a href="https://github.com/TeapoyY/wsbk-24-draft" style="color:var(--accent);">24-0 WSBK</a> · <a href="https://github.com/TeapoyY/motogp-20-draft" style="color:var(--accent);">20-0 MotoGP</a> · <a href="https://github.com/TeapoyY/endurance-24-draft" style="color:var(--accent);">24-0 WEC</a> · <a href="https://github.com/TeapoyY/tour-de-france-21-draft" style="color:var(--accent);">21-0 TdF</a> · <a href="https://github.com/TeapoyY/squad-draft-football" style="color:var(--accent);">38-0 NFL</a>'''
html = html.replace(old_links, new_links)

# === 8) JS header comment ===
html = html.replace(
    '// WSBK 24-0: Single HTML MVP — X-0 Sports Draft template #19 (forked from WSBK 20-0)',
    '// AMA Supercross 17-0: Single HTML MVP — X-0 Sports Draft template #21 (forked from WSBK 24-0)'
)
html = html.replace(
    '// NFL 38-0 (7/30), F1 24-0 (8/1), NASCAR 36-0 (8/17), NASCAR Truck 24-0 (8/21)',
    '// NFL 38-0 (7/30), F1 24-0 (8/1), NASCAR 36-0 (8/17), WSBK 24-0 (9/24), Moto2 22-0 (9/27),'
)
html = html.replace(
    '// IndyCar 17-0 (8/22), MotoGP 20-0 (8/28), Endurance 24-0 (8/29)',
    '// IndyCar 17-0 (8/22), MotoGP 20-0 (8/28), Endurance 24-0 (8/29), Tour 21-0 (9/3), Formula E 17-0 (9/4),'
)

# === 9) DRIVERS dataset: 84 AMA Supercross legends across 6 eras ===
# Eras: 1: 1974-82 (early), 2: 1983-92 (golden), 3: 1993-2002 (modern era 1), 4: 2003-12 (transition), 5: 2013-19 (450SX golden), 6: 2020-26 (modern)
new_drivers = '''// --- SUPERCROSS RIDERS (84 legends across 6 eras) ---
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
    { id: 24, name: "Kent Gaston", team: "Honda", era: 2, ovr: 83 },
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
];'''

# Match the entire DRIVERS = [ ... ]; block
old_drivers_pattern = re.compile(r'const DRIVERS = \[[\s\S]*?\];', re.MULTILINE)
html = old_drivers_pattern.sub(new_drivers, html)

# === 10) ERA_NAMES + ERA_LABELS ===
html = html.replace(
    '''const ERA_NAMES = {
    1: "1988-95",
    2: "1996-02",
    3: "2003-09",
    4: "2010-15",
    5: "2016-21",
    6: "2022-26"
};''',
    '''const ERA_NAMES = {
    1: "1974-82",
    2: "1983-92",
    3: "1993-02",
    4: "2003-12",
    5: "2013-19",
    6: "2020-26"
};'''
)
html = html.replace(
    '''const ERA_LABELS = {
    1: "88-95",
    2: "96-02",
    3: "03-09",
    4: "10-15",
    5: "16-21",
    6: "22-26"
};''',
    '''const ERA_LABELS = {
    1: "74-82",
    2: "83-92",
    3: "93-02",
    4: "03-12",
    5: "13-19",
    6: "20-26"
};'''
)

# === 11) SCHEDULE: 17 rounds (AMA Supercross 2026 calendar) ===
# 17 rounds × 1 main event = 17 races. Track types: all 'stadium' (Supercross is 100% stadium)
new_schedule = '''// Realistic 2026 AMA Supercross calendar (17 rounds, all stadium events)
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
];'''
old_schedule_pattern = re.compile(r'const SCHEDULE = \[[\s\S]*?\];', re.MULTILINE)
html = old_schedule_pattern.sub(new_schedule, html)

# === 12) Update track-type comment (Supercross is all stadium) ===
html = html.replace(
    '// Track-type bonuses (WSBK: 24 road circuits, no street chaos)',
    '// Track-type bonuses (Supercross: 17 stadium rounds, no street chaos - all on dirt)'
)

# === 13) Update race counter from /24 to /17 in HTML ===
# Find the line that has "OF 24" and replace
html = re.sub(r'OF 24\b', 'OF 17', html)
html = re.sub(r'/\s*24\s*races', '/ 17 races', html)
html = re.sub(r'\b24\s+races\b', '17 races', html)
html = re.sub(r'24-0', '17-0', html)
html = re.sub(r'\b24\b(?!-0|\d)', '17', html)  # avoid breaking id="24" etc — but careful

# Safer: only replace specific number-24 contexts
# Replace "wins / 24" → "wins / 17" (used in finale titles)
html = re.sub(r'wins / 24', 'wins / 17', html)
# Replace "24-race" → "17-round"
html = re.sub(r'\b24-race\b', '17-round', html)

# === 14) Finale threshold: 24 → 17 (perfect target) ===
html = html.replace(
    "if (wins === 24) title = '🏆 UNDEFEATED — 24-0 LEGEND!';",
    "if (wins === 17) title = '🏆 UNDEFEATED — 17-0 LEGEND!';"
)
html = html.replace(
    "else if (wins >= 18) title = `🏆 ELITE — ${wins} wins / 24`;",
    "else if (wins >= 13) title = `🏆 ELITE — ${wins} wins / 17`;"
)
html = html.replace(
    "else if (wins >= 15) title = `🏍️ STRONG — ${wins} wins / 24`;",
    "else if (wins >= 11) title = `🏟️ STRONG — ${wins} wins / 17`;"
)
html = html.replace(
    "else if (wins >= 10) title = `🏍️ CHAMPIONSHIP BID — ${wins} wins / 24`;",
    "else if (wins >= 7) title = `🏟️ CHAMPIONSHIP BID — ${wins} wins / 17`;"
)
html = html.replace(
    "else title = `${wins} wins / 24 — Try a stronger roster next time`;",
    "else title = `${wins} wins / 17 — Try a stronger roster next time`;"
)

# === 15) Share text ===
html = html.replace(
    'const text = `🏍️ My WSBK 24-0 season: ${$(\'share-record\').textContent}\\n` +',
    'const text = `🏟️ My SX 17-0 season: ${$(\'share-record\').textContent}\\n` +'
)
html = html.replace(
    '                 `#WSBK24Zero #UndefeatedSeason`;',
    '                 `#SX17Zero #UndefeatedSeason`;'
)

# === 16) Belt-and-suspenders: replace any remaining WSBK strings ===
html = html.replace('World Superbike', 'AMA Supercross')
html = html.replace('WSBK', 'Supercross')
html = html.replace('WSBK Ducati red', 'Supercross dirt orange')

# === 17) Belt-and-suspenders: replace any remaining 24-0 with 17-0 in JS context ===
# (Don't break "24-0" in dates like 2024)
# Already done above, but let's belt-and-suspenders 🏍️ → 🏟️
html = html.replace('🏍️', '🏟️')

# === 18) n !== 6 defense ===
html = html.replace("disabled = n !== 6;", "disabled = n !== 5;")

# Write output
with open('/tmp/supercross-build/output.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Build complete: /tmp/supercross-build/output.html")
print(f"Size: {len(html)} bytes")

# Quick sanity checks
assert 'const DRIVERS = [' in html
assert 'const SCHEDULE = [' in html
assert 'AMA Supercross' in html
assert '17-0' in html
assert '#SX17Zero' in html
print("✅ All assertions passed")
