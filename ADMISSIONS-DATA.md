# Overall undergraduate first-year admission data

Each record in admissions-verified.js carries its own cohort, source, reporting unit, and method. Values refer to overall first-time, first-year undergraduate admission, including domestic and international applicants; they are not international-only, early-round-only, or major-specific rates.

The federal historical fallback is NCES IPEDS ADM2023: https://nces.ed.gov/ipeds/datacenter/data/ADM2023.zip . Rates are calculated from total ADMSSN / APPLCN * 100. School identities are matched by UNITID through HD2024, with explicit aliases for Columbia, Penn State University Park, Purdue West Lafayette, and Washington Seattle.

Selected newer records use university-published CDS C1 tables or an explicitly reported overall first-year profile rate. Their source_checked_at records the original source review date; reviewed_at records later review of archived evidence. A new local review does not imply a fresh external retrieval. Displayed rates round to one decimal; source values and available calculations are retained.

Alaska Fairbanks: the university's linked 2025-2026 CDS has stale 2024-2025 template footers, but C1 explicitly identifies Fall 2025. Gender-category applicant totals 2577 + 3224 + 35 = 5836 and admit totals 1678 + 2056 + 15 = 3749 agree with the residency table totals on the same page. Overall rate = 3749 / 5836 * 100 = 64.24%.

Detail and comparison use the sourced record for refreshed schools. For other schools, an existing API rate with a newer cohort is preserved; absent API rates can use the explicitly dated sourced fallback. Homepage historical rates can therefore differ from a newer detail record, with cohort years shown. An old rate is never relabeled with a newer API year. Original API/database fields are not modified.
