# Homepage admission rates

The homepage uses an independently verified Fall 2023 snapshot of overall first-time, first-year undergraduate admissions. It does not use international applicant rates, and does not relabel the snapshot with the API's admissions_year. The details/comparison API is unchanged and may have a different reporting year.

Source: https://nces.ed.gov/ipeds/datacenter/data/ADM2023.zip
Calculation: ADMSSN / APPLCN * 100, stored to two decimals, displayed to one decimal.
Saved project adm2023.csv SHA256: 7ced24c8df30f7235af429b4963eb09f3966a2ff5def4c12e58772cb3522bd11.

All 301 public test-directory schools were matched to NCES UNITID using the existing HD2024 institution directory. Numeric school IDs carry UNITID directly. Named IDs use exact institution names after punctuation normalization, with four explicit name aliases: Columbia University → 190150; Pennsylvania State University (University Park) → 214777; Purdue University (West Lafayette) → 243780; University of Washington–Seattle → 236948. Each verified record includes UNITID and original total applicant/admitted counts.

Coverage: 300 / 301 schools. University of Alaska Fairbanks (102614) has no usable overall counts in this saved admissions file; its homepage rate remains absent. A future rate requires sourced overall undergraduate first-year applicant and admit counts, with the reporting year and institutional scope confirmed.

The earlier f525582 implementation was deployed, but its 244-entry verification table omitted all named IDs, including MIT and Princeton. Its strict comparison with live API values/years also suppressed any mismatched records. The corrected homepage reads the source snapshot with its own scope and year and uses a new script cache version. No database records or APIs were changed.
