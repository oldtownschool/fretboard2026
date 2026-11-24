// "use client";
import Image from "next/image";
import { Navbar } from "../components/Navbar.jsx";
import Link from "next/link";
import { Footer } from "../components/Footer";
import Script from "next/script.js";



export default function Luthier2027() {
  return (
    <>
      <Navbar />
      <style jsx>{`
      .exhibitor-directory {
        --xd-text: inherit;
        --xd-muted: #5f6b77;
        --xd-line: #d9dfe5;
        --xd-surface: #ffffff;
        --xd-accent: #1f5f8b;
        --xd-tag-bg: #eef3f7;
        --xd-radius: 6px;
        color: var(--xd-text);
        max-width: 1100px;
        margin: 0 auto;
        padding: 1.5rem 1rem 3rem;
      }
      .exhibitor-directory * { box-sizing: border-box; }
      .exhibitor-directory h1 { margin: 0 0 1rem; }

      .xd-filters {
        display: grid;
        grid-template-columns: minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr);
        gap: .75rem;
        margin-bottom: 1rem;
      }
      .xd-filters label { display: block; font-size: .875rem; font-weight: 700; }
      .xd-filters input, .xd-filters select {
        display: block; width: 100%; margin-top: .25rem;
        padding: .5rem .6rem; font: inherit; color: inherit;
        background: var(--xd-surface);
        border: 1px solid var(--xd-line); border-radius: var(--xd-radius);
      }
      .xd-summary { display: flex; flex-wrap: wrap; gap: .5rem 1rem; align-items: baseline;
        margin: 0 0 1rem; color: var(--xd-muted); }
      .xd-clear { font: inherit; background: none; border: 0; padding: 0; color: var(--xd-accent);
        text-decoration: underline; cursor: pointer; }

      .xd-list { list-style: none; margin: 0; padding: 0;
        display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: .75rem; }
      .xd-card { background: var(--xd-surface); border: 1px solid var(--xd-line);
        border-radius: var(--xd-radius); padding: 1rem; }
      .xd-company { margin: 0; font-size: 1.1rem; line-height: 1.3; }
      .xd-room { margin: .25rem 0 0; color: var(--xd-muted); font-size: .9rem; }
      .xd-tags { display: flex; flex-wrap: wrap; gap: .3rem; margin: .6rem 0 0; padding: 0; list-style: none; }
      .xd-tag { font: inherit; font-size: .8rem; line-height: 1.4; padding: .1rem .55rem;
        border-radius: 999px; border: 1px solid transparent; background: var(--xd-tag-bg);
        color: inherit; cursor: pointer; }
      .xd-tag:hover, .xd-tag[aria-pressed="true"] { border-color: var(--xd-accent); color: var(--xd-accent); }
      .xd-other { display: block; margin-top: .4rem; font-size: .85rem; color: var(--xd-muted); }

      .xd-message { padding: 1.5rem; border: 1px dashed var(--xd-line); border-radius: var(--xd-radius);
        color: var(--xd-muted); }
      .exhibitor-directory :focus-visible { outline: 3px solid var(--xd-accent); outline-offset: 2px; }

      @media (max-width: 700px) {
        .xd-filters { grid-template-columns: 1fr 1fr; }
        .xd-filters .xd-search { grid-column: 1 / -1; }
      }
      `}
      </style>
      <Script type="text/javascript">
        {` 
        (() => {
          const root = document.getElementById('exhibitor-directory');
          if (!root) return;
          const $ = (id) => document.getElementById(id);
          const q = $('xd-q'), catSel = $('xd-cat'), roomSel = $('xd-room');
          const list = $('xd-list'), message = $('xd-message'), count = $('xd-count'), clear = $('xd-clear');
          let exhibitors = [];

          // All text is inserted with textContent, never as HTML.
          const el = (tag, cls, text) => {
            const n = document.createElement(tag);
            if (cls) n.className = cls;
            if (text != null) n.textContent = text;
            return n;
          };
          const norm = (s) => (s || '').toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
          const addOptions = (select, values) => values.forEach((v) => select.append(new Option(v, v)));

          function render() {
            const term = norm(q.value.trim());
            const cat = catSel.value, room = roomSel.value;
            const shown = exhibitors.filter((x) =>
              (!term || norm(x.company).includes(term)) &&
              (!cat || x.categories.includes(cat)) &&
              (!room || x.room === room));

            list.replaceChildren(...shown.map((x) => {
              const li = el('li', 'xd-card');
              li.append(el('h2', 'xd-company', x.company));
              if (x.room) li.append(el('p', 'xd-room', x.room));
              if (x.categories.length) {
                const tags = el('ul', 'xd-tags');
                x.categories.forEach((c) => {
                  const item = el('li');
                  const b = el('button', 'xd-tag', c);
                  b.type = 'button';
                  b.setAttribute('aria-pressed', String(c === cat));
                  b.title = c === cat ? 'Show all categories' : \`Show only \${c}\`;
                  b.addEventListener('click', () => { catSel.value = c === cat ? '' : c; render(); });
                  item.append(b);
                  tags.append(item);
                });
                li.append(tags);
              }
              if (x.other) li.append(el('span', 'xd-other', \`Other: \${x.other}\`));
              return li;
            }));

            const filtered = term || cat || room;
            count.textContent = filtered
              ? \`Showing \${shown.length} of \${exhibitors.length} exhibitors\`
              : \`\${exhibitors.length} exhibitor\${exhibitors.length === 1 ? '' : 's'}\`;
            clear.hidden = !filtered;
            message.hidden = shown.length > 0;
            if (!shown.length) message.textContent = 'No exhibitors match these filters.';
          }

          fetch(root.dataset.source, { cache: 'no-cache' })
            .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })
            .then((data) => {
              exhibitors = (data.exhibitors || []).map((x) => ({
                company: String(x.company || ''),
                categories: Array.isArray(x.categories) ? x.categories.map(String) : [],
                other: x.other ? String(x.other) : '',
                room: x.room ? String(x.room) : '',
              }));
              if (!exhibitors.length) {
                message.textContent = 'The exhibitor list will be published here soon.';
                return;
              }
              addOptions(catSel, data.categories || []);
              addOptions(roomSel, data.rooms || []);
              if (!(data.rooms || []).length) root.querySelector('.xd-room-filter').hidden = true;
              root.querySelector('.xd-filters').hidden = false;
              root.querySelector('.xd-summary').hidden = false;
              [q, catSel, roomSel].forEach((n) => n.addEventListener('input', render));
              clear.addEventListener('click', () => { q.value = ''; catSel.value = ''; roomSel.value = ''; render(); q.focus(); });
              render();
            })
            .catch(() => { message.textContent = 'The exhibitor list couldn’t be loaded. Please try again later.'; });
        })();

        `}
      </Script>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-[#322D35] to-[#4C454F]">
        

        <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#A4CCDA] text-[#322D25]">


          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center">
          2027 Exhibitor List 
          </h2>

          <p className="font-bold text-2xl mt-6">The midwest’s largest and finest gathering of makers, players, and industry experts are here at Fretboard Summit. </p>

          <p className="font-bold text-2xl mt-4">Try out, demo and purchase new, forthcoming and Summit-exclusive gear luthiers, pedal makers, amp, and gear companies. It’s a one-of-a-kind showcase you have to see to believe.
          </p>


          <h3 className="font-bold text-lg leading-relaxed mt-8">2027 Exhibitor List</h3>
          <p className="italic text-sm leading-relaxed">Updated: NOV 23, 2026</p>
          <p className="italic text-sm leading-relaxed">* asterisk indicates sponsor</p>


          <section class="exhibitor-directory" id="exhibitor-directory" data-source="https://evm.fretboardsummit.org/exhibitors.json">
            <h1>Exhibitors</h1>

            <div class="xd-filters" hidden>
              <label class="xd-search">Search exhibitors
                <input type="search" id="xd-q" placeholder="Company name" autoComplete="off"></input>
              </label>
              <label>Product category
                <select id="xd-cat"><option value="">All categories</option></select>
              </label>
              <label class="xd-room-filter">Room
                <select id="xd-room"><option value="">All rooms</option></select>
              </label>
            </div>

            <p class="xd-summary" hidden>
              <span id="xd-count" aria-live="polite"></span>
              <button type="button" class="xd-clear" id="xd-clear" hidden>Clear filters</button>
            </p>

            <ul class="xd-list" id="xd-list"></ul>
            <p class="xd-message" id="xd-message">Loading exhibitors…</p>
          </section>

          
        </div>


      </main>
      <Footer />
    </>
  );
}
