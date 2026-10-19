/* Public test-site facts; evidence and review records are retained privately. */
const QualityData = {
  "aid": {
    "penn": {
      "need": {
        "text": "可申请；须在申请入学时同时申请资助，录取后满足经认定的经济需求。",
        "sources": [
          {
            "url": "https://admissions.upenn.edu/affording-penn/international-aid",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "review": {
        "text": "Need-aware：家庭支付能力会影响录取；美国、加拿大、墨西哥公民及永久居民适用不同政策。",
        "sources": [
          {
            "url": "https://admissions.upenn.edu/affording-penn/international-aid",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16"
      },
      "merit": {
        "text": "不提供校方 merit-based 奖学金；Penn 本科资助按经济需求发放。",
        "sources": [
          {
            "url": "https://admissions.upenn.edu/affording-penn/financial-aid",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      }
    },
    "jhu": {
      "need": {
        "text": "可申请，但名额有限；须在新生申请时申报并提交资助材料，之后不能补申。国际转学生不适用。",
        "sources": [
          {
            "url": "https://apply.jhu.edu/international-applicants/"
          }
        ],
        "checked": "2026-10-15"
      },
      "review": {
        "text": "Need-aware：申请资助的国际生，家庭经济状况会纳入录取考虑。",
        "sources": [
          {
            "url": "https://apply.jhu.edu/international-applicants/"
          }
        ],
        "checked": "2026-10-15"
      },
      "merit": {
        "text": "提供少量 merit-based 奖学金；国际申请人自动获考虑，无需额外申请。",
        "sources": [
          {
            "url": "https://apply.jhu.edu/international-applicants/"
          }
        ],
        "checked": "2026-10-15"
      }
    },
    "princeton": {
      "need": {
        "text": "国际本科生可申请；满足学校认定全部需求，申请资助不影响录取。",
        "sources": [
          {
            "url": "https://admission.princeton.edu/apply/international-students",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "review": {
        "text": "Need-blind：国际申请人的支付能力不影响录取。",
        "sources": [
          {
            "url": "https://admission.princeton.edu/apply/international-students",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16"
      },
      "merit": {
        "text": "不提供学术或体育 merit 奖学金。",
        "sources": [
          {
            "url": "https://admission.princeton.edu/apply/international-students",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      }
    },
    "mit": {
      "need": {
        "text": "国际本科生可申请；学校满足认定全部需求，需提交 CSS Profile 及家庭收入证明。",
        "sources": [
          {
            "url": "https://sfs.mit.edu/undergraduate-students/apply-for-aid/international/",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://sfs.mit.edu/undergraduate-students/the-cost-of-attendance/making-mit-affordable/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "review": {
        "text": "Need-blind：国际申请人的支付能力不影响录取。",
        "sources": [
          {
            "url": "https://sfs.mit.edu/undergraduate-students/the-cost-of-attendance/making-mit-affordable/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16"
      },
      "merit": {
        "text": "不按学术、体育、艺术或其他 merit 标准发奖；MIT Scholarship 是 need-based。",
        "sources": [
          {
            "url": "https://mitadmissions.org/help/faq/scholarships/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      }
    },
    "harvard": {
      "need": {
        "text": "国际生与美国学生享有相同 need-based 资格；满足学校认定全部需求，家庭贡献按校方评估。",
        "sources": [
          {
            "url": "https://college.harvard.edu/financial-aid/how-aid-works",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "review": {
        "text": "Need-blind：国际申请人的支付能力不影响录取。",
        "sources": [
          {
            "url": "https://college.harvard.edu/financial-aid/how-aid-works",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16"
      },
      "merit": {
        "text": "校方资助只按经济需求评定，不提供 merit 奖学金。",
        "sources": [
          {
            "url": "https://college.harvard.edu/financial-aid/how-aid-works",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      }
    },
    "yale": {
      "need": {
        "text": "不论国籍均可申请 need-based 资助；满足学校认定全部需求，国际生费用评估含食宿及规定旅费。",
        "sources": [
          {
            "url": "https://admissions.yale.edu/international",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "review": {
        "text": "Need-blind：国际申请人的支付能力不影响录取。",
        "sources": [
          {
            "url": "https://admissions.yale.edu/international",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16"
      },
      "merit": {
        "text": "Yale College 不提供 merit 或体育奖学金。",
        "sources": [
          {
            "url": "https://finaid.yale.edu/faq",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      }
    },
    "brown": {
      "need": {
        "text": "国际本科新生可申请；满足录取学生经认定的全部经济需求。须在入学申请时申请资助。",
        "sources": [
          {
            "url": "https://admission.brown.edu/international/financial-aid",
            "year": "Class of 2029起国际新生need-blind；其余年度规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "review": {
        "text": "Need-blind：国际本科新生的支付能力不影响录取。从2025年秋季入学的Class of 2029起适用；转学生政策不同。",
        "sources": [
          {
            "url": "https://admission.brown.edu/international/financial-aid",
            "year": "Class of 2029起国际新生need-blind；其余年度规则未单独确认"
          }
        ],
        "checked": "2026-10-16"
      },
      "merit": {
        "text": "不提供校方 merit-based 奖学金；资助以经济需求为依据。",
        "sources": [
          {
            "url": "https://finaid.brown.edu/aid-types/grants-scholarships",
            "year": "Class of 2029起国际新生need-blind；其余年度规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      }
    },
    "dartmouth": {
      "need": {
        "text": "国际本科生可申请；满足学校认定的全部经济需求，资助方案含校内工作安排。",
        "sources": [
          {
            "url": "https://financialaid.dartmouth.edu/apply-aid/international-students",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "review": {
        "text": "Need-blind：国际申请人的支付能力不影响录取。",
        "sources": [
          {
            "url": "https://financialaid.dartmouth.edu/apply-aid/international-students",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16"
      },
      "merit": {
        "text": "不按学术、艺术或体育表现发放 merit 奖学金。",
        "sources": [
          {
            "url": "https://admissions.dartmouth.edu/estimate-your-cost/types-financial-aid",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      }
    },
    "stanford": {
      "need": {
        "text": "可申请；须在入学申请时表明申请资助。对录取且已申请资助者满足经学校认定的全部经济需求；入学申请时声明不申请资助的国际生，通常四年内不能补申（身份改变并取得联邦资助资格者另论）。 2027–28国际新生资助材料页已发布：REA优先提交日为11月15日，RD为2月15日。",
        "sources": [
          {
            "url": "https://admission.stanford.edu/apply/international/",
            "year": "现行政策；2027–28资助规则未单独确认"
          },
          {
            "url": "https://financialaid.stanford.edu/undergrad/apply/requirements/rea_international.html",
            "year": "现行政策；2027–28资助规则未单独确认"
          },
          {
            "url": "https://financialaid.stanford.edu/undergrad/apply/requirements/rd_international.html",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "review": {
        "text": "Need-aware：国际公民申请资助会影响录取评估。美国公民、永久居民、无证学生及符合资格的非公民适用校方另列政策。",
        "sources": [
          {
            "url": "https://admission.stanford.edu/apply/international/",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16"
      },
      "merit": {
        "text": "除少量体育奖学金外，不提供 merit 奖学金；普通本科助学金依据家庭经济需求。",
        "sources": [
          {
            "url": "https://admission.stanford.edu/apply/international/",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      }
    },
    "duke": {
      "need": {
        "text": "国际新生可申请，资源有限；须在最初的新生入学申请中申请资助，入学时未申报者以后不能补申。国际转学生不符合 need-based aid 资格。",
        "sources": [
          {
            "url": "https://admissions.duke.edu/apply/",
            "year": "官网现行政策（未单独标注2027–28学年）；2026-10-16核查"
          },
          {
            "url": "https://financialaid.duke.edu/forms-resources/awarding-policy/",
            "year": "官网现行政策（未单独标注2027–28学年）；2026-10-16核查"
          }
        ],
        "checked": "2026-10-16"
      },
      "review": {
        "text": "Need-aware：申请 need-based aid 的外国公民进入竞争更激烈的单独申请池，不论需求金额大小；校方未把这类申请人与美国公民的 need-blind 政策等同。",
        "sources": [
          {
            "url": "https://admissions.duke.edu/apply/",
            "year": "官网现行政策（未单独标注2027–28学年）；2026-10-16核查"
          }
        ],
        "checked": "2026-10-16"
      },
      "merit": {
        "text": "提供少量 merit 奖学金，国际新生亦可获考虑；招生页说明自动考虑的校方奖学金，申请 need-based aid 不影响 merit 评选。具体项目须另核对项目规则。",
        "sources": [
          {
            "url": "https://admissions.duke.edu/apply/",
            "year": "官网现行政策（未单独标注2027–28学年）；2026-10-16核查"
          }
        ],
        "checked": "2026-10-16"
      }
    },
    "northwestern": {
      "need": {
        "text": "可申请；须在入学申请时申报并于首年获资助。少量国际新生获满足学校认定全部需求的资助；国际转学生不适用。",
        "sources": [
          {
            "url": "https://undergradaid.northwestern.edu/help-support/international-students/",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "review": {
        "text": "Need-aware：申请资助及所需金额可能影响国际生录取。",
        "sources": [
          {
            "url": "https://undergradaid.northwestern.edu/help-support/international-students/",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16"
      },
      "merit": {
        "text": "有专业限制：Bienen 音乐学院 Bachelor of Music 申请人可凭试演／面试竞争音乐奖学金，国际生同样适用；无需额外奖学金申请。",
        "sources": [
          {
            "url": "https://www.music.northwestern.edu/admission/undergraduate/financial-aid",
            "year": "现行政策；2027–28资助规则未单独确认"
          },
          {
            "url": "https://www.music.northwestern.edu/admission/international",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      }
    },
    "vanderbilt": {
      "need": {
        "text": "向少量国际本科新生提供 need-based 奖学金；须提交 CSS Profile 或 ISFAA。2027秋入学资助截止：ED I 2026-11-01、ED II 2027-01-01、RD 2027-02-01；不符合美国公民／eligible non-citizen 资格的国际转学生不适用。",
        "sources": [
          {
            "url": "https://admissions.vanderbilt.edu/affordability/international-costs-and-finances/",
            "year": "2026–27申请季／2027秋入学；2026-10-16核查"
          }
        ],
        "checked": "2026-10-16"
      },
      "review": {
        "text": "Need-aware：国际生在入学申请中申报 need-based aid 后，与申请资助的国际生一起评估，录取考虑经济需求及可用资源。",
        "sources": [
          {
            "url": "https://admissions.vanderbilt.edu/affordability/international-costs-and-finances/",
            "year": "2026–27申请季／2027秋入学；2026-10-16核查"
          }
        ],
        "checked": "2026-10-16"
      },
      "merit": {
        "text": "国际本科新生可申请各项 merit 奖学金，名额少。应通过 MyAppVU 申请；2027秋入学按12月1日截止要求申请 merit 奖学金，不提交 SAT/ACT 仍可获考虑。",
        "sources": [
          {
            "url": "https://admissions.vanderbilt.edu/affordability/international-costs-and-finances/",
            "year": "2026–27申请季／2027秋入学；2026-10-16核查"
          },
          {
            "url": "https://admissions.vanderbilt.edu/apply/testing-policies/",
            "year": "2026–27申请季／2027秋入学；2026-10-16核查"
          }
        ],
        "checked": "2026-10-16"
      }
    },
    "us_131159": {
      "need": {
        "text": "尚未确认：学校两个国际生页面对 need-based 资格的说明不一致，申请前请向校方确认。",
        "sources": [
          {
            "url": "https://www.american.edu/financialaid/prospective-international.cfm",
            "year": "现行政策；2027–28资助规则未单独确认"
          },
          {
            "url": "https://www.american.edu/admissions/international/first-year-merit.cfm",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "可申请；秋季国际新生按期申请即可竞争部分 merit 奖，录取时评定并须满足续领条件。EGL 全额奖覆盖账单费用，保险、书本、机票等仍需自付。",
        "sources": [
          {
            "url": "https://www.american.edu/admissions/international/first-year-merit.cfm",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "nyu": {
      "need": {
        "text": "国际本科新生可申请；纽约校区按学校认定需求评定资助。家庭年收入低于10万美元且资产符合要求者可免学费，须按期申请；免学费不等于全部就读费用免费。",
        "sources": [
          {
            "url": "https://bulletins.nyu.edu/undergraduate/social-work/cost-attendance/financial-aid/",
            "year": "2026–27本科目录；NYU Promise自2024–25起"
          },
          {
            "url": "https://bulletins.nyu.edu/undergraduate/liberal-studies/cost-attendance/",
            "year": "2026–27本科目录；NYU Promise自2024–25起"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "merit": {
        "text": "国际本科新生的独立 merit 奖资格尚未确认；学院在读奖项不能视为全校新生入学奖。",
        "sources": [
          {
            "url": "https://bulletins.nyu.edu/undergraduate/social-work/cost-attendance/financial-aid/",
            "year": "2026–27本科目录；NYU Promise自2024–25起"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      }
    },
    "ohio_state": {
      "need": {
        "text": "新生常规 need-based 资格尚未确认。International Student Grant 面向符合条件的在读国际生，首学年不能申请，不可作为入学资助。",
        "sources": [
          {
            "url": "https://oia.osu.edu/grants-and-scholarships/international-student-grant",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "学校一般新生 merit 奖不向国际生开放；其他校内专项的新生资格尚未确认。",
        "sources": [
          {
            "url": "https://undergrad.osu.edu/cost-and-aid/merit-based-Scholarships",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      }
    },
    "ucsb": {
      "need": {
        "text": "国际本科新生 need-based 资格尚未确认；OISS困难奖用于在读期间，不能作为入学资助。",
        "sources": [
          {
            "url": "https://oiss.ucsb.edu/resources/financial-resources",
            "year": "现行官网；2027–28新生资格未明确"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际新生 merit 资格尚未确认。Regents 奖有公民、永久居民或符合加州指定法案的身份限制，不能据此判断全校其他奖项。",
        "sources": [
          {
            "url": "https://www.finaid.ucsb.edu/types-aid/scholarship-awards/regents-scholarship",
            "year": "Regents 2026–27；2027–28未确认"
          },
          {
            "url": "https://oiss.ucsb.edu/resources/financial-resources",
            "year": "Regents 2026–27；2027–28未确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      }
    },
    "us_145600": {
      "merit": {
        "text": "已核实的 Laurette Kirstein 奖仅限在读国际生：须已完成至少一学期、全日制且 UIC GPA≥3.5；不属于入学前新生资助。2026轮已截止，2027规则未公布。",
        "sources": [
          {
            "url": "https://ois.uic.edu/programs/scholarships-and-awards/",
            "year": "2026轮；2027申请未公布"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "need": {
        "text": "不向国际生提供联邦、州或校方 need-based 资助；符合美国 eligible noncitizen 身份者适用其他规则。",
        "sources": [
          {
            "url": "https://financialaid.uic.edu/aid-process/eligibility/",
            "year": "2026轮；2027申请未公布"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      }
    },
    "us_174066": {
      "need": {
        "text": "尚未确认：招生总页称国际本科生无 financial aid，ISSS 另列新生 need-based 专项；当前申请资格及周期仍需校方确认。",
        "sources": [
          {
            "url": "https://admissions.tc.umn.edu/cost-aid/financial-aid",
            "year": "招生现行；ISSS专项页2021-06-04更新"
          },
          {
            "url": "https://isss.umn.edu/students/support-services/funding-basic-page",
            "year": "招生现行；ISSS专项页2021-06-04更新"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "可申请 Global Excellence Scholarship；国际本科新生按期完成入学申请及财务证明后自动获考虑，竞争录取且须满足续领条件。",
        "sources": [
          {
            "url": "https://admissions.tc.umn.edu/global-excellence-scholarships",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "uva": {
      "need": {
        "text": "通常不向国际本科申请人提供资助；就读 United World College（UWC）且获录取者可获 need-based 奖学金支持。",
        "sources": [
          {
            "url": "https://admission.virginia.edu/i-am/international",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "merit": {
        "text": "已核实的 Lorna Sundberg 奖仅限预计2028年5月毕业的国际本科在读生，须全日制、F-1 且 GPA≥3.0；不属于新生入学奖。",
        "sources": [
          {
            "url": "https://internationalcenter.virginia.edu/lorna-sundberg-international-scholarship",
            "year": "2027–28在读奖；2027-03-12截止"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      }
    },
    "us_100858": {
      "need": {
        "text": "国际本科新生资格尚未确认；招生说明与合作项目奖项线索的适用范围未厘清，暂不据此作资金规划。",
        "sources": [
          {
            "url": "https://www.auburn.edu/admissions/faq.php?accid=row47",
            "year": "现行政策；2027–28资助规则未单独确认"
          },
          {
            "url": "https://auburn.edu/admissions/prospective-students/international/index.php",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际本科新生资格尚未确认；招生说明与合作项目奖项线索的适用范围未厘清，暂不据此作资金规划。",
        "sources": [
          {
            "url": "https://www.auburn.edu/admissions/faq.php?accid=row47",
            "year": "现行政策；2027–28资助规则未单独确认"
          },
          {
            "url": "https://auburn.edu/admissions/prospective-students/international/index.php",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      }
    },
    "us_186867": {
      "need": {
        "text": "国际本科新生 need-based 资格尚未确认；不能把联邦资助不适用或转学生规则当作全校新生否定结论。",
        "sources": [
          {
            "url": "https://www.stevens.edu/page-basic/undergraduate-international-student-resources",
            "year": "现行政策；2027–28资助规则未单独确认"
          },
          {
            "url": "https://www.stevens.edu/page-right-nav/applying-for-financial-aid",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "可申请少量校方 merit 奖学金；国际申请人须按学校要求提交 CSS Profile，代码2819。",
        "sources": [
          {
            "url": "https://www.stevens.edu/page-chapter/international-students",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "bc": {
      "need": {
        "text": "不向非美国公民或永久居民的国际申请人提供常规 need-based 资助；须准备承担就读费用。",
        "sources": [
          {
            "url": "https://www.bc.edu/content/bc-web/admission/apply/international.html",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "可申请 Gabelli Presidential Scholarship：国际本科新生须在11月1日前完成申请；覆盖全学费，不适用转学生。",
        "sources": [
          {
            "url": "https://www.bc.edu/content/bc-web/academics/sites/gabelli-presidential-scholars-program/about/faq.html",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      }
    },
    "bu": {
      "merit": {
        "text": "国际本科新生可竞争 Presidential Scholarship；须12月1日前完成入学申请。2026年秋季入学起奖额为半额学费，不是全部就读费用。",
        "sources": [
          {
            "url": "https://www.bu.edu/admissions/tuition-aid/scholarships-financial-aid/first-year-merit/",
            "year": "2026秋入学起（Presidential奖额）；年度申请须复核"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "need": {
        "text": "有项目限制：通常不提供国际生 need-based 资助；Davis UWC 合作项目录取者可获满足学校认定全部需求的支持，不能推广为所有国际生资格。",
        "sources": [
          {
            "url": "https://www.bu.edu/finaid/undergraduate-students/international/",
            "year": "2026秋首届Davis UWC；现行合作政策，2027–28申请细则未确认"
          },
          {
            "url": "https://www.bu.edu/admissions/why-bu/diversity/access-at-bu/",
            "year": "2026秋首届Davis UWC；现行合作政策，2027–28申请细则未确认"
          },
          {
            "url": "https://www.bu.edu/articles/2026/inaugural-class-of-davis-united-world-college-scholars/",
            "year": "2026秋首届Davis UWC；现行合作政策，2027–28申请细则未确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      }
    },
    "cmu": {
      "need": {
        "text": "不向国际本科生提供校方资助（need-based 或 merit）；美国公民及符合条件的非公民适用其他规则。",
        "sources": [
          {
            "url": "https://coursecatalog.web.cmu.edu/aboutcmu/universitypolicies/financial-aid/",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "不向国际本科生提供校方资助（need-based 或 merit）；美国公民及符合条件的非公民适用其他规则。",
        "sources": [
          {
            "url": "https://coursecatalog.web.cmu.edu/aboutcmu/universitypolicies/financial-aid/",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      }
    },
    "usc": {
      "need": {
        "text": "不向国际申请人提供 need-based 资助；申请时须提交至少首年完整就读费用的资金证明。",
        "sources": [
          {
            "url": "https://admission.usc.edu/prospective-students/how-to-apply/international-students/",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "可申请；在相应截止日期前提交申请的国际生可竞争 USC Merit Scholarships。奖学金竞争激烈，均不覆盖完整就读费用。",
        "sources": [
          {
            "url": "https://admission.usc.edu/prospective-students/how-to-apply/international-students/",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "caltech": {
      "need": {
        "text": "可申请；须在申请入学时申报并于首年获得资助，录取且符合资格者满足学校认定全部需求。加拿大、墨西哥可能有例外；国际转学及3/2项目不适用。",
        "sources": [
          {
            "url": "https://www.admissions.caltech.edu/apply/first-year-applicants/international-applicants",
            "year": "现行政策；2027–28资助规则未单独确认"
          },
          {
            "url": "https://www.finaid.caltech.edu/applying/international-students",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "review": {
        "text": "Need-aware：国际申请人的经济需求可能影响录取；满足认定需求不等于录取不考虑经济状况。",
        "sources": [
          {
            "url": "https://www.admissions.caltech.edu/apply/first-year-applicants/international-applicants",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16"
      },
      "merit": {
        "text": "不提供校方 merit 奖学金；本科奖助金按经济需求评定。",
        "sources": [
          {
            "url": "https://www.finaid.caltech.edu/TypesofAid/grants",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      }
    },
    "pitt": {
      "need": {
        "text": "常规 need-based 资格尚未确认；国际招生页泛称无 financial aid，同时明确设有学术奖，不能把两类资助混为一谈。",
        "sources": [
          {
            "url": "https://admissions.pitt.edu/international/",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "可申请；匹兹堡校区秋季国际新生须2月1日前完成申请及材料，并提交 essay／个人陈述，自动获学术奖考虑；续领须达到学校要求。",
        "sources": [
          {
            "url": "https://admissions.pitt.edu/international/",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_151351": {
      "need": {
        "text": "有专项限制：ILLO 面向中国、香港、台湾及指定专业的学生，须证明经济需求；新生入学前能否申请尚未确认，不可作为通用入学资助。",
        "sources": [
          {
            "url": "https://bloomington.iu.edu/cost-aid/scholarships/international/illo-scholarship.html",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "merit": {
        "text": "国际本科新生可申请学术 merit 及部分国籍专项奖学金；各项目有独立资格，须核对适用国籍、专业和申请要求。",
        "sources": [
          {
            "url": "https://bloomington.iu.edu/cost-aid/scholarships/international/",
            "year": "现行政策；2027–28资助规则未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "case_western": {
      "need": {
        "text": "可申请有限 need-based 资助；国际新生及转学生须提交 CSS Profile，由学校评定。",
        "sources": [
          {
            "url": "https://case.edu/financialaid/undergraduates/international-students",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "merit": {
        "text": "国际本科新生可参加指定奖学金竞赛；不同奖项另有条件，不能把美国公民专属自动奖推广至国际生。",
        "sources": [
          {
            "url": "https://case.edu/financialaid/undergraduates/international-students",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://case.edu/admission/cost-and-aid/scholarships",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "columbia": {
      "need": {
        "text": "可申请；须在首次入学申请时申报资助，学校满足录取者认定的全部经济需求；未申请者以后通常不能补申。",
        "sources": [
          {
            "url": "https://bulletin.columbia.edu/columbia-engineering/undergraduate-studies/financial-aid-undergraduate-study/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "merit": {
        "text": "Columbia College／Engineering 不提供学术、体育或艺术 merit 奖学金。",
        "sources": [
          {
            "url": "https://bulletin.columbia.edu/columbia-engineering/undergraduate-studies/financial-aid-undergraduate-study/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "review": {
        "text": "Need-aware：国际申请人是否申请资助会纳入录取考虑。",
        "sources": [
          {
            "url": "https://cc-seas.financialaid.columbia.edu/ask/faq/question/4606",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16"
      }
    },
    "cornell": {
      "need": {
        "text": "可申请；国际新生及转学生须在申请入学时提交 CSS Profile。学校满足录取者认定的全部需求，方案可能含工读及贷款。",
        "sources": [
          {
            "url": "https://www.finaid.cornell.edu/first-year-and-transfer-students-international",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "review": {
        "text": "Need-aware：国际申请人的资助需求会纳入录取考虑。",
        "sources": [
          {
            "url": "https://www.finaid.cornell.edu/first-year-and-transfer-students-international",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16"
      },
      "merit": {
        "text": "不提供 merit 或体育奖学金；校方资助按经济需求评定。",
        "sources": [
          {
            "url": "https://finaid.cornell.edu/frequently-asked-questions-about-international-financial-aid",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      }
    },
    "emory": {
      "need": {
        "text": "仅向部分国际生提供 need-based 资助；须在入学申请时申报且首年获资助。财援页要求 Regular Decision，申请当年须复核轮次。",
        "sources": [
          {
            "url": "https://studentaid.emory.edu/undergraduate/apply/new-students/international.html",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://apply.emory.edu/apply/international",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "merit": {
        "text": "国际生可竞争 Emory Scholar Programs 的 merit 奖；名额有限，须按该项目截止日期申请。",
        "sources": [
          {
            "url": "https://studentaid.emory.edu/undergraduate/apply/new-students/international.html",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      }
    },
    "maryland": {
      "need": {
        "text": "常规校方资助有美国公民、永久居民等身份要求；普通国际申请人需自行准备费用，院系专项须另核资格。",
        "sources": [
          {
            "url": "https://financialaid.umd.edu/resources-policies/international-students",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://admissions.umd.edu/apply/financial-certification",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "尚未确认：国际招生页泛称不提供资助，财援办另建议向院系查询奖学金；具体国际新生资格须确认。",
        "sources": [
          {
            "url": "https://financialaid.umd.edu/resources-policies/international-students",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://admissions.umd.edu/apply/financial-certification",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      }
    },
    "michigan": {
      "need": {
        "text": "国际本科新生 need-based 资格尚未充分核实；学院专项及身份限制需逐项确认，不能据一般资助说明判断全校政策。",
        "sources": [
          {
            "url": "https://finaid.umich.edu/apply-aid",
            "year": "现行官网；2027–28新生资格未明确"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际本科新生 merit 资格尚未充分核实；学院专项及身份限制需逐项确认，不能据一般资助说明判断全校政策。",
        "sources": [
          {
            "url": "https://finaid.umich.edu/apply-aid",
            "year": "现行官网；2027–28新生资格未明确"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      }
    },
    "northeastern": {
      "need": {
        "text": "国际生不具备校方 need-based grant 或联邦学生资助资格。",
        "sources": [
          {
            "url": "https://admissions.northeastern.edu/application-information/international-applicants/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际生可竞争 merit 奖，无需额外申请；奖项不覆盖完整就读费用。",
        "sources": [
          {
            "url": "https://admissions.northeastern.edu/application-information/international-applicants/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "rice": {
      "need": {
        "text": "国际新生可申请有限 need-based 资助；获资助者满足学校认定全部需求。须申请入学时申报；不适用 Rice Investment，国际转学生不适用。",
        "sources": [
          {
            "url": "https://financialaid.rice.edu/apply-aid/international-students",
            "year": "2027–28国际首年need申请；merit现行政策"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "review": {
        "text": "Need-aware：国际申请人所需资助金额会影响录取评估。",
        "sources": [
          {
            "url": "https://financialaid.rice.edu/apply-aid/international-students",
            "year": "2027–28国际首年need申请；merit现行政策"
          }
        ],
        "checked": "2026-10-16"
      },
      "merit": {
        "text": "国际本科新生随入学申请自动获 merit 奖考虑，无额外申请；国际转学生不适用。",
        "sources": [
          {
            "url": "https://admission.rice.edu/apply/first-year-international-applicants",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      }
    },
    "rochester": {
      "need": {
        "text": "国际本科新生可申请 need-based 资助，须按轮次提交 CSS Profile；官网已列2027秋入学的申请要求。",
        "sources": [
          {
            "url": "https://www.rochester.edu/financial-aid/international-undergraduates/",
            "year": "2027秋／2027–28 need申请；merit现行，金额统计为2026–27"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "merit": {
        "text": "国际本科申请人可竞争 merit 奖；随入学申请评定，续领须保持全日制及良好学业表现。",
        "sources": [
          {
            "url": "https://admissions.rochester.edu/applying/international-students/international-faqs/",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://www.rochester.edu/financial-aid/scholarships/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "rutgers": {
      "need": {
        "text": "不提供国际本科入学新生 need-based 资助（F-1／J-1 签证）；在读紧急援助不属于入学前首年资助。",
        "sources": [
          {
            "url": "https://www.admissions.rutgers.edu/admitted-students",
            "year": "官网现行资格；2027–28完整资助周期未单独认证"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际新生可竞争有限 merit 奖，须按期提交入学申请；New Brunswick 续领有学分与 GPA 要求，不套用其他校区奖额。",
        "sources": [
          {
            "url": "https://admissions.rutgers.edu/costs-and-aid/scholarships",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "tufts": {
      "need": {
        "text": "国际新生可申请；学校满足录取者认定全部需求。必须申请入学时申报资助，录取后才提出申请不予受理。",
        "sources": [
          {
            "url": "https://admissions.tufts.edu/tuition-and-aid/applying-for-aid/international-student-aid/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "merit": {
        "text": "国际生招生专页明确不提供本科 merit 奖；一般页面的 National Merit／ROTC 条款不能直接视为国际生资格。",
        "sources": [
          {
            "url": "https://admissions.tufts.edu/tuition-and-aid/applying-for-aid/international-student-aid/",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://admissions.tufts.edu/tuition-and-aid/types-of-aid/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      }
    },
    "ucb": {
      "need": {
        "text": "有专项限制：Robinson、International Leaders、Swaniker 等国际生项目按各自地区／项目及需求条件评定；BIO困难补助须已完成两个学期，不属于入学资助。",
        "sources": [
          {
            "url": "https://financialaid.berkeley.edu/types-of-aid-at-berkeley/scholarships/regents-and-chancellors-scholarship/international-student-scholarships/",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://internationaloffice.berkeley.edu/node/475",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "merit": {
        "text": "国际本科新生及转学生可获 Regents’ & Chancellor’s Scholarship 自动考虑；获奖不保证覆盖全部费用。",
        "sources": [
          {
            "url": "https://financialaid.berkeley.edu/types-of-aid-at-berkeley/scholarships/regents-and-chancellors-scholarship/international-student-scholarships/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "ucdavis": {
      "need": {
        "text": "尚未确认：官网 work-study 页对国际生资格的表述范围不一致；该项目是工作所得，也不能视为新生入学奖助金。",
        "sources": [
          {
            "url": "https://financialaid.ucdavis.edu/work-study/undergraduate",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://financialaid.ucdavis.edu/undergraduate/apply/international",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际生可能符合部分奖学金资格；具体面向国际本科新生的校方 merit 项目及限制尚未确认。",
        "sources": [
          {
            "url": "https://financialaid.ucdavis.edu/undergraduate/apply/international",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      }
    },
    "uci": {
      "need": {
        "text": "国际生不具备 need-based aid 资格；不应提交或套用美国学生的 FAFSA／CA Dream Act 要求。",
        "sources": [
          {
            "url": "https://www.ofas.uci.edu/scholarships/faq.php",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际新生可竞争部分 merit 奖；Directors’ Scholarship 明列 F-1 国际生资格，其他奖有不同身份限制。",
        "sources": [
          {
            "url": "https://www.ofas.uci.edu/scholarships/faq.php",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://www.ofas.uci.edu/scholarships/applying-for-scholarships.php",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      }
    },
    "ucla": {
      "need": {
        "text": "不向非美国公民或永久居民的国际本科生提供校方 financial aid；须准备自行承担就读及生活费用。",
        "sources": [
          {
            "url": "https://admission.ucla.edu/apply/international-applicants",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际本科招生页明确不向非美国公民或永久居民提供校方奖学金；外部资助另核。",
        "sources": [
          {
            "url": "https://admission.ucla.edu/apply/international-applicants",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      }
    },
    "ucsd": {
      "need": {
        "text": "国际生不具备美国联邦或州资助资格；校方国际本科新生 need-based 资格尚未确认。",
        "sources": [
          {
            "url": "https://admissions.ucsd.edu/why/cost-aid/",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://fas.ucsd.edu/applying/undergraduates/index.html",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际本科新生校方 merit 资格尚未确认；国际办公室列出的外部奖项及在读项目不能视为入学奖。",
        "sources": [
          {
            "url": "https://iseo.ucsd.edu/resources/financial-resources/scholarships-grants.html",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      }
    },
    "uiuc": {
      "need": {
        "text": "不向国际本科生提供 need-based 资助，需准备整个学习期间的费用；ISSS有限专项和贷款须另查条件。",
        "sources": [
          {
            "url": "https://www.admissions.illinois.edu/financial-aid/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际本科新生 merit 资格尚未取得直接适用证据；一般申请人自动评审说明不能替代具体奖项的身份、专业及新生条件。",
        "sources": [
          {
            "url": "https://www.admissions.illinois.edu/first-year-apply-faq/",
            "year": "现行官网；2027–28新生资格未明确"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      }
    },
    "wake_forest": {
      "need": {
        "text": "不向外国籍国际生提供 need-based 资助；须按招生要求证明支付能力。",
        "sources": [
          {
            "url": "https://admissions.wfu.edu/become-a-deacon/international/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际生可竞争多数 merit 奖，包括少数覆盖完整费用的专项；一般入学申请兼作奖学金申请，获奖不保证。",
        "sources": [
          {
            "url": "https://admissions.wfu.edu/become-a-deacon/international/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "washu": {
      "need": {
        "text": "国际新生须申请入学时申请资助；学校满足录取者认定的全部经济需求，录取后不能首次补申。",
        "sources": [
          {
            "url": "https://admissions.washu.edu/how-to-apply/first-year-international-applicants/",
            "year": "2027秋国际本科新生页及同页资助/奖学金要求"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "merit": {
        "text": "国际新生可获所在学院四年学术奖自动考虑，最高可达全学费；Signature Scholar 项目另有申请要求，不等于全部费用免费。",
        "sources": [
          {
            "url": "https://admissions.washu.edu/how-to-apply/first-year-international-applicants/",
            "year": "2027秋国际本科新生页及同页资助/奖学金要求"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      }
    },
    "wisconsin": {
      "need": {
        "text": "King-Morgridge 是兼顾经济需求、学业及领导力的混合专项，不是两项独立奖；须有指定地区中学背景，中国大陆中学不在范围内。须 EA 录取并另申奖。",
        "sources": [
          {
            "url": "https://admissions.wisc.edu/international-scholarships/",
            "year": "明确2027秋专项；完整2027–28未认证"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "merit": {
        "text": "King-Morgridge 与 need-based 栏为同一混合专项；指定地区不含中国大陆中学，不能理解为所有国际生可申请。其他奖须另核资格。",
        "sources": [
          {
            "url": "https://admissions.wisc.edu/international-scholarships/",
            "year": "明确2027秋专项；完整2027–28未认证"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      }
    },
    "elon": {
      "need": {
        "text": "目前不向非美国公民提供 need-based 资助。",
        "sources": [
          {
            "url": "https://www.elon.edu/u/admissions/undergraduate/international-admissions/admissions-requirements/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际新生随入学申请获 Presidential、Engagement、International Scholar 奖考虑；Fellows／Scholars 另需申请及面试。",
        "sources": [
          {
            "url": "https://www.elon.edu/u/admissions/undergraduate/international-admissions/admissions-requirements/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "georgetown": {
      "need": {
        "text": "国际新生资助名额极少；须申请入学时申报并交 CSS Profile，首年未获资助者以后不能首次获奖。",
        "sources": [
          {
            "url": "https://finaid.georgetown.edu/undergrad/international-students/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "merit": {
        "text": "不提供一般学术 merit 奖；另有体育 grants-in-aid，但本轮未确认其国际新生适用范围。",
        "sources": [
          {
            "url": "https://uadmissions.georgetown.edu/financial-aid/",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://finaid.georgetown.edu/financial-resources/undergrad-scholarships/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      }
    },
    "penn_state": {
      "need": {
        "text": "University Park 国际本科新生校方 need-based 资格尚未确认；联邦资助排除不能推为全部校方无资助。",
        "sources": [
          {
            "url": "https://www.psu.edu/costs-aid/apply-for-aid/current-students",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "University Park 国际新生具体 merit 资格尚未确认；不套用 World Campus 或其他校区奖项。",
        "sources": [
          {
            "url": "https://www.psu.edu/costs-aid/types-of-aid/scholarships",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      }
    },
    "purdue": {
      "need": {
        "text": "国际本科新生 need-based 资格尚未充分核实；一般“不适用”说明不能推为全校无资助，在读小额奖也不能当作入学奖。",
        "sources": [
          {
            "url": "https://www.purdue.edu/gpp/iss/_documents/admission/InternationalAdmissionsGuide.pdf",
            "year": "现行官网；2027–28新生资格未明确"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际本科新生 merit 资格尚未充分核实；一般“不适用”说明不能推为全校无资助，在读小额奖也不能当作入学奖。",
        "sources": [
          {
            "url": "https://www.purdue.edu/gpp/iss/_documents/admission/InternationalAdmissionsGuide.pdf",
            "year": "现行官网；2027–28新生资格未明确"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      }
    },
    "umass_amherst": {
      "need": {
        "text": "国际本科生不适用常规 need-based 财援；须准备就读费用。",
        "sources": [
          {
            "url": "https://www.umass.edu/admissions/undergraduate-admissions/apply/international-students/financial-and-visa-information",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际本科新生自动获有限学术奖考虑，无需另申；奖项不保证覆盖全部费用。",
        "sources": [
          {
            "url": "https://www.umass.edu/admissions/undergraduate-admissions/apply/international-students/financial-and-visa-information",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "review": {
        "text": "Need-blind：国际申请人的支付能力不影响录取。",
        "sources": [
          {
            "url": "https://www.umass.edu/admissions/undergraduate-admissions/apply/international-students/financial-and-visa-information",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16"
      }
    },
    "us_110714": {
      "need": {
        "text": "F／J 等临时签证国际生通常不适用联邦、州或校方 need-based 财援；特殊移民身份另核。",
        "sources": [
          {
            "url": "https://financialaid.ucsc.edu/apply-for-aid/international/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际生可获 Dean’s Award／Regents 奖考虑；新生根据 UC 入学申请评定，获奖不保证。",
        "sources": [
          {
            "url": "https://financialaid.ucsc.edu/apply-for-aid/international/",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://catalog.ucsc.edu/current/general-catalog/undergraduate-information/undergraduate-expenses/financial-aid/scholarships/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_117946": {
      "need": {
        "text": "不向国际本科生提供 need-based 财援。",
        "sources": [
          {
            "url": "https://international.lmu.edu/faq/first-year/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际本科新生自动获校方学术奖考虑；金额及续领按录取奖函。",
        "sources": [
          {
            "url": "https://financialaid.lmu.edu/international/undergraduateinternationalstudents/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_121150": {
      "need": {
        "text": "Seaver 本科目录规定校方 need-based 资助须美国公民或永久居民；2027–28规则尚未确认。",
        "sources": [
          {
            "url": "https://seaver.pepperdine.edu/academics/content/2025-seaver-catalog.pdf",
            "year": "need身份规则依据2025 Seaver目录；merit为现行国际本科页"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际本科新生可竞争 Regents 等学术奖；获奖按学业及入学申请综合评定，不保证。",
        "sources": [
          {
            "url": "https://www.pepperdine.edu/international-students/future-students/cost-of-attendance.htm",
            "year": "need身份规则依据2025 Seaver目录；merit为现行国际本科页"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_121345": {
      "need": {
        "text": "国际本科新生可申请；满足学校认定全部需求，须与入学同时申请，不能录取后首次补申。",
        "sources": [
          {
            "url": "https://www.pomona.edu/financial-aid/applying-for-aid/international-aid",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "merit": {
        "text": "不提供 merit 或体育奖学金；资助按经济需求评定。",
        "sources": [
          {
            "url": "https://www.pomona.edu/admissions/apply/international-applicants",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "review": {
        "text": "Need-aware：国际申请人的支付能力或资助需求会纳入录取考虑。",
        "sources": [
          {
            "url": "https://www.pomona.edu/financial-aid/applying-for-aid/international-aid",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16"
      }
    },
    "us_122436": {
      "need": {
        "text": "F／J 等所列非移民签证不适用 USD need-based 财援；T／U 等特殊身份按官网另行办理。",
        "sources": [
          {
            "url": "https://www.sandiego.edu/torero-hub/financial-aid/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际新生及转学生随入学申请自动获 merit 奖考虑，无需另申；获奖不保证。",
        "sources": [
          {
            "url": "https://www.sandiego.edu/admission-and-aid/undergraduate/apply/decision-faq.php",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_122612": {
      "need": {
        "text": "国际生不适用 need-based 财援。",
        "sources": [
          {
            "url": "https://www.usfca.edu/admission/undergraduate/international-cost-scholarship",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际本科生可获部分 merit 奖；不提供国际生全学费奖，护理／AEM／Fresh Start 等另有评定规则。",
        "sources": [
          {
            "url": "https://www.usfca.edu/admission/undergraduate/international-cost-scholarship",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_122755": {
      "need": {
        "text": "有专项限制：Global Spartan 综合经济需求、学业及领导力评选，2026–27轮包括国际新生和在读生；2027–28尚未确认。",
        "sources": [
          {
            "url": "https://www.sjsu.edu/isss/resources/scholarships/global-spartan-scholarship.php",
            "year": "Global Spartan明确2026–27；2027–28未公布"
          },
          {
            "url": "https://sjsu.edu/faso/types-of-aid/scholarships/index.php",
            "year": "Global Spartan明确2026–27；2027–28未公布"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "merit": {
        "text": "国际生可竞争 merit 奖；Global Spartan 新生与在读申请分开，须另申并符合各自学业及身份条件。",
        "sources": [
          {
            "url": "https://www.sjsu.edu/isss/resources/scholarships/index.php",
            "year": "Global Spartan明确2026–27；2027–28未公布"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_122931": {
      "need": {
        "text": "2025–26本科目录明确国际生不适用 need-based 财援；现行财援页只确认联邦／州排除，未来周期须复核。",
        "sources": [
          {
            "url": "https://www-archive.scu.edu/bulletin/undergraduate/2025-2026/chapter-7-admission-of-undergraduate-students/index.html",
            "year": "need依据2025–26目录；merit现行政策"
          },
          {
            "url": "https://www.scu.edu/financialaid/international/",
            "year": "need依据2025–26目录；merit现行政策"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际新生可获部分 merit 奖考虑；Johnson Scholars 明确排除国际生，不能泛称全额奖都适用。",
        "sources": [
          {
            "url": "https://www.scu.edu/financialaid/types-of-aid/scholarships-and-grants/merit-scholarships/",
            "year": "need依据2025–26目录；merit现行政策"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_127060": {
      "need": {
        "text": "不向国际本科生提供 need-based 资助；普通本科全需求宣传不能外推国际生。",
        "sources": [
          {
            "url": "https://www.du.edu/admission-aid/undergraduate/international-applicants/tuition",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际新生随申请自动获 merit 奖考虑；通常不覆盖全部费用。",
        "sources": [
          {
            "url": "https://www.du.edu/admission-aid/undergraduate/international-applicants/tuition",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "review": {
        "text": "Need-aware：国际申请人的支付能力或资助需求会纳入录取考虑。",
        "sources": [
          {
            "url": "https://www.du.edu/admission-aid/undergraduate/international-applicants/tuition",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16"
      }
    },
    "us_129020": {
      "need": {
        "text": "国际本科新生的校方 need-based 资格尚未确认；I-20资金证明不等同财援资格结论。",
        "sources": [
          {
            "url": "https://admissions.uconn.edu/apply/international/financial-visa/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际申请人可竞争 Global Excellence／Distinction／Leader 等 merit 奖，按成绩与领导力评选；续领有条件。",
        "sources": [
          {
            "url": "https://admissions.uconn.edu/cost-aid/scholarship/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_130943": {
      "need": {
        "text": "不向国际生提供 need-based 财援。",
        "sources": [
          {
            "url": "https://www.udel.edu/apply/undergraduate-admissions/financing-your-degree/international-students/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际新生随入学申请自动获 merit 奖考虑；可竞争 Distinguished Scholars，获奖及续领另有条件。",
        "sources": [
          {
            "url": "https://www.udel.edu/apply/undergraduate-admissions/financing-your-degree/international-students/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_131283": {
      "need": {
        "text": "不向国际本科生提供校方 need-based 或联邦资助。",
        "sources": [
          {
            "url": "https://financial-aid.catholic.edu/undergraduate/international/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际本科申请人可获校方 merit 奖考虑；金额和条件按录取通知，不能当作全费用保证。",
        "sources": [
          {
            "url": "https://www.catholic.edu/admission-aid/international-admission/undergraduate-international-admission",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_131469": {
      "need": {
        "text": "国际新生不适用 need-based 或美国政府资助；在读30学分后的资助咨询渠道不等于新生资格。",
        "sources": [
          {
            "url": "https://undergraduate.admissions.gwu.edu/financial-aid/international-student-aid",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://financialaid.gwu.edu/revolutionary-promise",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际新生随申请自动获 merit 奖考虑；You Are Welcome Here 需另申，续领按奖函规定。",
        "sources": [
          {
            "url": "https://undergraduate.admissions.gwu.edu/financial-aid/international-student-aid",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_137847": {
      "need": {
        "text": "不向非美国公民／非永久居民提供 need-based 资助。",
        "sources": [
          {
            "url": "https://www.ut.edu/admissions/financial-aid/how-to-apply",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际本科新生自动获多数 merit 奖考虑；院系奖可能需另申，通常为部分学费减免。",
        "sources": [
          {
            "url": "https://www.ut.edu/admissions/financial-aid/scholarships-and-grants",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_139959": {
      "need": {
        "text": "国际本科新生常规 need-based 资格尚未确认；不能由 FAFSA 条件推导所有学院项目均无。",
        "sources": [
          {
            "url": "https://osfa.uga.edu/types-of-aid/undergraduate/scholarships/academic-scholarships/",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://gafamilies.uga.edu/ssac/scholarships-undergraduate",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "F-1国际新生可竞争多项学术奖，包括指定非居民奖；各奖续领有 GPA／全日制要求。",
        "sources": [
          {
            "url": "https://osfa.uga.edu/types-of-aid/undergraduate/scholarships/academic-scholarships/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_146427": {
      "need": {
        "text": "国际申请人不适用 need-based 资助。",
        "sources": [
          {
            "url": "https://www.knox.edu/admission/apply-to-knox/international-applicants/international-frequently-asked-questions",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际申请人自动获部分 merit 奖考虑；支付能力会影响录取，需提交财务支持证明。",
        "sources": [
          {
            "url": "https://www.knox.edu/admission/apply-to-knox/international-applicants/financial-aid-and-visa-information",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "review": {
        "text": "Need-aware：国际申请人的支付能力或资助需求会纳入录取考虑。",
        "sources": [
          {
            "url": "https://www.knox.edu/admission/apply-to-knox/international-applicants/financial-aid-and-visa-information",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16"
      }
    },
    "us_153658": {
      "need": {
        "text": "国际生不适用常规 grants／loans／need-based 财援；ISSS在读紧急短贷有需求及还款条件，不属于新生赠款。",
        "sources": [
          {
            "url": "https://admissions.uiowa.edu/resources-international-students-and-other-nationalities",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://international.uiowa.edu/isss/current-students/financial-aid-international-students",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际本科新生可竞争学术奖；官网国际首年页仍列奖学金需 SAT／ACT，须核对申请当年各奖要求。",
        "sources": [
          {
            "url": "https://admissions.uiowa.edu/international-first-year-admission-requirements",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_160977": {
      "need": {
        "text": "国际新生可申请；满足学校认定全部需求，须录取前申报并按要求提交 BISAFA；方案可含校内工作。",
        "sources": [
          {
            "url": "https://www.bates.edu/financial-services/financial-aid/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "merit": {
        "text": "不提供国际生 merit 或体育奖学金。",
        "sources": [
          {
            "url": "https://www.bates.edu/admission/apply/international-students/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "review": {
        "text": "Need-aware：国际申请人的支付能力或资助需求会纳入录取考虑。",
        "sources": [
          {
            "url": "https://www.bates.edu/financial-services/financial-aid/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16"
      }
    },
    "us_161004": {
      "need": {
        "text": "国际生可申请；满足学校认定全部需求，以奖助金及校内工作安排组成，不强制贷款。",
        "sources": [
          {
            "url": "https://www.bowdoin.edu/admissions/apply/international-students/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "merit": {
        "text": "校方资助均按经济需求评定，不提供 merit 奖。",
        "sources": [
          {
            "url": "https://www.bowdoin.edu/student-aid/types-of-aid/index.html",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "review": {
        "text": "Need-blind：国际申请人的支付能力不影响录取。",
        "sources": [
          {
            "url": "https://www.bowdoin.edu/admissions/apply/international-students/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16"
      }
    },
    "us_161086": {
      "need": {
        "text": "国际生可申请；满足学校认定全部需求，需 CSS Profile，困难者可询问费用豁免。",
        "sources": [
          {
            "url": "https://afa.colby.edu/apply/requirements/international-applicants/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "merit": {
        "text": "不提供学术、体育或其他才艺 merit 奖。",
        "sources": [
          {
            "url": "https://afa.colby.edu/apply/faq/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      }
    },
    "us_163268": {
      "need": {
        "text": "国际生不适用校方 need-based 或联邦资助。",
        "sources": [
          {
            "url": "https://scholarships.umbc.edu/international/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际本科新生自动获一般 merit 奖考虑，也可另申 Scholar Programs；各项目条件不同。",
        "sources": [
          {
            "url": "https://scholarships.umbc.edu/international/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_164739": {
      "need": {
        "text": "非美国公民或永久居民不适用 need-based 资助。",
        "sources": [
          {
            "url": "https://www.bentley.edu/offices/financial-assistance/frequently-asked-questions",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际本科新生可竞争有限学术奖，通过入学申请评定；在读未获入学奖者不能首次补获。",
        "sources": [
          {
            "url": "https://www.bentley.edu/offices/financial-assistance/frequently-asked-questions",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_168218": {
      "need": {
        "text": "国际新生可申请有限名额资助；满足录取且入学时申请者认定全部需求，国际生费用预算不含旅费。",
        "sources": [
          {
            "url": "https://www.wellesley.edu/admission-aid/student-financial-services/understanding-financial-aid/apply-for-aid/international-students",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://www.wellesley.edu/admission-aid/faqs",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "merit": {
        "text": "仅提供按经济需求评定的 grant，不提供 merit 奖。",
        "sources": [
          {
            "url": "https://www.wellesley.edu/admission-aid/student-financial-services/policies-faqs-stats-more",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "review": {
        "text": "Need-aware：国际申请人的支付能力或资助需求会纳入录取考虑。",
        "sources": [
          {
            "url": "https://www.wellesley.edu/admission-aid/faqs",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16"
      }
    },
    "us_168342": {
      "need": {
        "text": "国际申请人如入学期间可能需要资助，须在入学申请时申报；学校满足录取者认定需求，具体国际录取政策尚待确认。",
        "sources": [
          {
            "url": "https://www.williams.edu/admission-aid/tuition-aid/requirements-and-deadlines/",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://www.williams.edu/admission-aid/how-to-apply/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "merit": {
        "text": "只提供 need-based 资助，不提供 merit 奖学金。",
        "sources": [
          {
            "url": "https://www.williams.edu/admission-aid/how-to-apply/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      }
    },
    "us_171100": {
      "need": {
        "text": "国际新生不适用常规 need-based 财援；OISS另有在读紧急困难援助，通常排除首学期，不属于入学资金保证。",
        "sources": [
          {
            "url": "https://reg.msu.edu/academicPrograms/Print.aspx?Section=219",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://oiss.isp.msu.edu/grants/grants-and-scholarships-overview/oiss-funding/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "merit": {
        "text": "国际本科新生自动获学术 merit 奖考虑；续领须保持国际学费身份、学分及良好学业状态。",
        "sources": [
          {
            "url": "https://admissions.msu.edu/cost-aid/scholarships/international",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_171128": {
      "need": {
        "text": "国际生不适用 need-based 财援。",
        "sources": [
          {
            "url": "https://www.mtu.edu/admissions/apply/faqs/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际本科新生及转学生可自动获 International Ambassador 奖考虑；加拿大、校友、商学院等奖各有条件。",
        "sources": [
          {
            "url": "https://www.mtu.edu/finaid/students/international/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_179159": {
      "need": {
        "text": "国际本科生不适用 need-based 资助，包括 grants。",
        "sources": [
          {
            "url": "https://www.slu.edu/financial-aid/types-of-aid/index.php",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "圣路易斯校区国际新生随申请自动获 merit 奖考虑；MLK及Presidential需另申，非马德里校区政策。",
        "sources": [
          {
            "url": "https://www.slu.edu/admission/international/frequently-asked-questions.php",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "review": {
        "text": "Need-blind：国际申请人的支付能力不影响录取。",
        "sources": [
          {
            "url": "https://www.slu.edu/admission/international/frequently-asked-questions.php",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16"
      }
    },
    "us_181002": {
      "need": {
        "text": "不向国际生提供 need-based 资助。",
        "sources": [
          {
            "url": "https://www.creighton.edu/admissions/admissions-requirements/international",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际新生可获 merit 奖；不提供 full-ride，仍需证明可承担其余费用。",
        "sources": [
          {
            "url": "https://www.creighton.edu/admissions/admissions-requirements/international",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "rutgers_camden": {
      "need": {
        "text": "不提供国际本科入学新生 need-based 资助（F-1／J-1 签证）；此为 Camden 校区官方录取新生页说明。",
        "sources": [
          {
            "url": "https://admissions.camden.rutgers.edu/admitted-students/camden",
            "year": "官网现行资格；2027–28完整资助周期未单独认证"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "持有效非移民签证的国际申请人可自动获奖学金考虑；须按本校区条件，校区之间不可直接移用奖额。",
        "sources": [
          {
            "url": "https://admissions.camden.rutgers.edu/costs-and-aid/scholarships",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      }
    },
    "us_186399": {
      "need": {
        "text": "不向持 F-1／J-1 签证的国际本科入学新生提供 need-based 资助；Rutgers 官方录取新生总页涵盖 Newark 校区。",
        "sources": [
          {
            "url": "https://www.admissions.rutgers.edu/admitted-students",
            "year": "现行资格；2027–28完整周期未认证"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "持有效非移民签证的国际申请人可自动获奖学金考虑；须按本校区条件，校区之间不可直接移用奖额。",
        "sources": [
          {
            "url": "https://admissions.newark.rutgers.edu/costs-and-aid/scholarships",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_189097": {
      "need": {
        "text": "国际申请人可申请；满足学校认定全部需求，国际生采用 need-aware 录取。",
        "sources": [
          {
            "url": "https://barnard.edu/admissions/internationalstudents",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "merit": {
        "text": "不提供仅按 merit 评选的校方奖学金。",
        "sources": [
          {
            "url": "https://catalogue.barnard.edu/barnard-college/admissions/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "review": {
        "text": "Need-aware：国际申请人的支付能力或资助需求会纳入录取考虑。",
        "sources": [
          {
            "url": "https://barnard.edu/admissions/internationalstudents",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16"
      }
    },
    "us_190099": {
      "need": {
        "text": "国际新生可申请；须在入学申请时申报并提交 CSS，满足学校认定全部需求；资助可含工作和贷款。",
        "sources": [
          {
            "url": "https://www.colgate.edu/admission-aid/apply/international-applicants",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "merit": {
        "text": "无一般学术 merit 奖；部分体育校队奖明确不限国籍，由教练决定人选及金额。",
        "sources": [
          {
            "url": "https://www.colgate.edu/admission-aid/financial-aid/types-aid",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "review": {
        "text": "Need-aware：国际申请人的支付能力或资助需求会纳入录取考虑。",
        "sources": [
          {
            "url": "https://www.colgate.edu/admission-aid/apply/international-applicants",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16"
      }
    },
    "us_191515": {
      "need": {
        "text": "国际新生可申请；须入学时申报并证明需求，学校满足认定全部需求，方案可含工作及校方贷款。",
        "sources": [
          {
            "url": "https://www.hamilton.edu/admission/finaid/international",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "merit": {
        "text": "已停止发放 merit 奖；资助重点为经济需求。",
        "sources": [
          {
            "url": "https://www.hamilton.edu/admission/finaid/faq",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "review": {
        "text": "Need-aware：国际申请人的支付能力或资助需求会纳入录取考虑。",
        "sources": [
          {
            "url": "https://www.hamilton.edu/admission/finaid/international",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16"
      }
    },
    "us_191649": {
      "need": {
        "text": "不向国际生提供 need-based 资助。",
        "sources": [
          {
            "url": "https://www.hofstra.edu/admission/scholarship-opportunities.html",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际本科新生可获部分 merit 奖，随入学申请评定、无需另申；不提供 full-ride。",
        "sources": [
          {
            "url": "https://www.hofstra.edu/admission/scholarship-opportunities.html",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_194578": {
      "need": {
        "text": "国际生不适用 need-based 资助，不应提交 FAFSA 申请此类资助。",
        "sources": [
          {
            "url": "https://www.pratt.edu/admissions/undergraduate-admissions/finance-your-education/how-to-apply-for-financial-aid/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际本科新生录取时自动获 merit 奖考虑；按成绩及作品集等评定，无需另申。",
        "sources": [
          {
            "url": "https://www.pratt.edu/admissions/undergraduate-admissions/finance-your-education/financial-aid-options/scholarships/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_197133": {
      "need": {
        "text": "国际新生采用 need-aware 录取；须与入学同时申请资助，满足录取者认定全部需求，首年未获者不能以后首次申请。",
        "sources": [
          {
            "url": "https://www.vassar.edu/admission/apply/international/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "merit": {
        "text": "资助只按经济需求评定，不提供校方 merit 奖。",
        "sources": [
          {
            "url": "https://www.vassar.edu/admission/financial-aid/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "review": {
        "text": "Need-aware：国际申请人的支付能力或资助需求会纳入录取考虑。",
        "sources": [
          {
            "url": "https://www.vassar.edu/admission/apply/international/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16"
      }
    },
    "us_199193": {
      "need": {
        "text": "国际申请人不适用常规 financial aid；不把普通本科 need 项目套用于国际生。",
        "sources": [
          {
            "url": "https://admissions.ncsu.edu/apply/international/first-year/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际新生可竞争有限 merit 奖；录取后须经 PACKASSIST 申请，Park 等另有身份／美国高中背景限制。",
        "sources": [
          {
            "url": "https://admissions.ncsu.edu/apply/international/first-year/",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://admissions.ncsu.edu/afford/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_217882": {
      "need": {
        "text": "国际本科新生校方 need-based 资格尚未确认；联邦／州限制或资金证明不能推出全校无资助。",
        "sources": [
          {
            "url": "https://www.clemson.edu/financial-aid/how-aid-works/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "National Scholars 明确接受国际新生；须按期申请本科及 Honors，并经决选活动，名额极少。",
        "sources": [
          {
            "url": "https://www.clemson.edu/academics/programs/national-scholars/scholar-selection/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      }
    },
    "uw": {
      "need": {
        "text": "西雅图本科国际生招生页明确不提供校方 financial aid；应准备全部费用。",
        "sources": [
          {
            "url": "https://admit.washington.edu/costs/coa/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "西雅图本科国际生招生页明确不提供校方奖学金；不外推至其他校区或研究生。",
        "sources": [
          {
            "url": "https://admit.washington.edu/costs/coa/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      }
    },
    "william_mary": {
      "need": {
        "text": "普通国际本科生一般需自行承担完整费用；国际招生页称通常无奖／贷款资金，不能由此否认专项 merit 例外。",
        "sources": [
          {
            "url": "https://www.wm.edu/admission/undergraduateadmission/how-to-apply/international-applicants/expensesaid/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "1693 Scholars 明确接受国际新生；有独立遴选流程，不代表所有国际生可获全费用资助。",
        "sources": [
          {
            "url": "https://www.wm.edu/as/1693scholars/selectioninfo/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_201885": {
      "need": {
        "text": "不向国际本科生提供 need-based 奖学金；须准备未被奖项覆盖的费用。",
        "sources": [
          {
            "url": "https://www.admissions.uc.edu/information/international/internationaladmissionsfaq.html",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际本科新生可竞争部分 merit 奖，奖项用于指定学费／非居民附加费；不提供全学费保证。",
        "sources": [
          {
            "url": "https://www.admissions.uc.edu/information/international/internationaladmissionsfaq.html",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_206622": {
      "need": {
        "text": "国际招生页明确目前不按经济需求发放校方奖学金，也不提供 full-ride。",
        "sources": [
          {
            "url": "https://www.xavier.edu/international-admission/scholarships/index",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际本科新生随申请自动获 merit 奖考虑，无需另申；部分竞争奖需补充材料，不能保证覆盖完整费用。",
        "sources": [
          {
            "url": "https://www.xavier.edu/international-admission/scholarships/index",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_209922": {
      "need": {
        "text": "国际新生可申请；录取且按时申请者满足学校认定全部需求。须与入学同时申报，方案可含工作及贷款。",
        "sources": [
          {
            "url": "https://www.reed.edu/admission-aid/costs-and-financial-aid/financial-aid/international-applicants/faqs.html",
            "year": "现行资格；申请步骤仍列2026–27 CSS，2027–28材料须复核"
          },
          {
            "url": "https://www.reed.edu/admission-aid/costs-and-financial-aid/financial-aid/international.html",
            "year": "现行资格；申请步骤仍列2026–27 CSS，2027–28材料须复核"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "merit": {
        "text": "资助按经济需求评定，不提供学术或体育 merit 奖。",
        "sources": [
          {
            "url": "https://www.reed.edu/admission-aid/how-to-apply/international.html",
            "year": "现行资格；申请步骤仍列2026–27 CSS，2027–28材料须复核"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "review": {
        "text": "Need-aware：国际申请人的资助需求可能影响录取。",
        "sources": [
          {
            "url": "https://www.reed.edu/admission-aid/costs-and-financial-aid/financial-aid/international-applicants/faqs.html",
            "year": "现行资格；申请步骤仍列2026–27 CSS，2027–28材料须复核"
          }
        ],
        "checked": "2026-10-16"
      }
    },
    "us_212911": {
      "need": {
        "text": "国际新生有少量 need-based 名额；获资助者满足学校认定需求，不含国际旅费及放假生活费，含储蓄和工作预期；国际转学生排除。",
        "sources": [
          {
            "url": "https://www.haverford.edu/financial-aid/international-applicants",
            "year": "2027–28国际首年CSS及申请截止日期；其他条款按同页现行说明"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "merit": {
        "text": "校方资助全部按经济需求评定，不提供 merit 奖。",
        "sources": [
          {
            "url": "https://www.haverford.edu/financial-aid/international-applicants",
            "year": "2027–28国际首年CSS及申请截止日期；其他条款按同页现行说明"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      }
    },
    "us_217484": {
      "need": {
        "text": "国际生不适用 need-based 财援。",
        "sources": [
          {
            "url": "https://web.uri.edu/admission/international/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际本科新生可获 merit 奖考虑；按学业评选，不保证获奖或覆盖食宿等全部费用。",
        "sources": [
          {
            "url": "https://web.uri.edu/admission/international/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_218663": {
      "need": {
        "text": "国际新生常规 need-based 奖不适用；官网另有已读两学期、考量经济需求的2025–26 Excellence 项目，现行轮次须确认。",
        "sources": [
          {
            "url": "https://www.iss.sc.edu/about/offices_and_divisions/international_student_and_scholar_support/iss/new-student-arrival/understand_tuition_and_fees/university_scholarships_and_assistantships/",
            "year": "现行总页；Excellence在读专项仅列2025–26轮次"
          },
          {
            "url": "https://coliseum.sc.edu/about/offices_and_divisions/international_student_and_scholar_support/iss/new-student-arrival/understand_tuition_and_fees/university_scholarships_and_assistantships/international-student-excellence-scholarship/index.php",
            "year": "现行总页；Excellence在读专项仅列2025–26轮次"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "有院系国际生奖及在读 Excellence 专项；新生具体 merit 项目资格尚未确认，不能把非居民奖一概视为国际生适用。",
        "sources": [
          {
            "url": "https://www.iss.sc.edu/about/offices_and_divisions/international_student_and_scholar_support/iss/new-student-arrival/understand_tuition_and_fees/university_scholarships_and_assistantships/",
            "year": "现行总页；Excellence在读专项仅列2025–26轮次"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      }
    },
    "us_228246": {
      "need": {
        "text": "Need-based 财援限美国公民或永久居民；普通国际生不适用。",
        "sources": [
          {
            "url": "https://www.smu.edu/admission/apply/international",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "不论国籍，随入学申请自动获学术 merit 奖考虑；部分专项需额外材料，奖项组合不得超过规定上限。",
        "sources": [
          {
            "url": "https://www.smu.edu/admission/apply/international",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://www.smu.edu/admission/financial-aid-resources/scholarships-assistance",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_228787": {
      "need": {
        "text": "有国籍专项：居住在墨西哥、且有经济需求的墨西哥公民可申请按居民学费缴费；不适用于一般中国申请人，首年流程须另核。",
        "sources": [
          {
            "url": "https://finaid.utdallas.edu/receiving-aid/applying/",
            "year": "墨西哥需求减免现行；AES／McDermott目前页面列2026，2027轮待确认"
          },
          {
            "url": "https://finaid.utdallas.edu/aid-programs/exemptions-and-waivers/citizens-of-mexico-with-need/",
            "year": "墨西哥需求减免现行；AES／McDermott目前页面列2026，2027轮待确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "merit": {
        "text": "国际新生可竞争 AES／McDermott 等 merit 项目；各奖有成绩、申请时点及入学背景限制，当前页面仍列2026轮。",
        "sources": [
          {
            "url": "https://enroll.utdallas.edu/affordability/freshman-scholarships/academic-excellence-scholarship/aes-for-prospective-freshmen/",
            "year": "墨西哥需求减免现行；AES／McDermott目前页面列2026，2027轮待确认"
          },
          {
            "url": "https://provost.utdallas.edu/mcdermott-programs/eugene-mcdermott-scholars/",
            "year": "墨西哥需求减免现行；AES／McDermott目前页面列2026，2027轮待确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_230959": {
      "need": {
        "text": "国际本科生可申请；满足学校认定全部需求，方案可含工作、贷款及赠款；国际资助需求可能影响录取。",
        "sources": [
          {
            "url": "https://www.middlebury.edu/office-student-financial-services/common-questions",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://www.middlebury.edu/student-financial-services/affording-middlebury",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "merit": {
        "text": "全部资助仅按经济需求，不提供学术或体育 merit 奖。",
        "sources": [
          {
            "url": "https://www.middlebury.edu/office-student-financial-services/common-questions",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "review": {
        "text": "Need-aware：国际申请人的资助需求可能影响录取。",
        "sources": [
          {
            "url": "https://www.middlebury.edu/student-financial-services/affording-middlebury",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16"
      }
    },
    "us_231174": {
      "need": {
        "text": "国际本科新生校方 need-based 资格尚未确认；不将一般 FAFSA 申请规则或资金证明直接当作全校否定。",
        "sources": [
          {
            "url": "https://www.uvm.edu/admissions/undergraduate/how-apply-international-students",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://www.uvm.edu/studentfinancialservices/scholarships",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际本科新生自动获 merit 奖考虑，无需另申；Presidential续领须满足全日制及GPA要求。",
        "sources": [
          {
            "url": "https://www.uvm.edu/studentfinancialservices/scholarships-prospective-out-state-resident-and-international-students",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_235316": {
      "need": {
        "text": "国际生明确不能提交 FAFSA、WASFA 或 Needs Analysis Form，不适用该校常规 need 申请渠道。",
        "sources": [
          {
            "url": "https://www.gonzaga.edu/admission/tuition-scholarships-aid/financial-aid/apply-for-aid",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际本科新生随入学申请自动获 merit 奖考虑；“need-blind scholarships”描述奖项评选，不等于国际招生 need-blind。",
        "sources": [
          {
            "url": "https://www.gonzaga.edu/admission/tuition-scholarships-aid/financial-aid/apply-for-aid",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_236328": {
      "need": {
        "text": "国际本科新生校方 need-based 资格尚未确认；普通学生的 FAFSA 说明不能单独证明国际生全校无资助。",
        "sources": [
          {
            "url": "https://www.pugetsound.edu/admission/student-financial-services",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://www.pugetsound.edu/admission/international-students/first-year-international-students",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际新生自动获 merit 及 International Student Scholarship 考虑；Lillis／Matelich及才艺奖需额外申请或步骤。",
        "sources": [
          {
            "url": "https://www.pugetsound.edu/admission/international-students/first-year-international-students",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_236595": {
      "need": {
        "text": "不向国际生提供 need-based 财援；Washington College Bound 全需求承诺不能外推普通国际生。",
        "sources": [
          {
            "url": "https://www.seattleu.edu/admissions-aid/international-admissions/faqs/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "攻读首个本科学位的国际新生自动获 merit 奖考虑，无额外申请；续领有年限及学业要求。",
        "sources": [
          {
            "url": "https://www.seattleu.edu/admissions-aid/financial-aid--scholarships/scholarships--grants/undergraduate/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_239105": {
      "need": {
        "text": "国际本科生不适用 need-based 奖学金；merit 也不保证承担全部费用。",
        "sources": [
          {
            "url": "https://www.marquette.edu/oie/prospective-students/scholarships.php",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际生可申请部分 merit 项目；官网对 Père Marquette 与 Global Scholars 的适用范围表述不同，应按具体奖项确认。",
        "sources": [
          {
            "url": "https://www.marquette.edu/oie/prospective-students/scholarships.php",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://www.marquette.edu/tuition-financial-aid/scholarships-overview.php",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      }
    },
    "gatech": {
      "need": {
        "text": "国际本科新生 need-based 资格尚未确认；OIE困难减免及应急资助面向在读生，不能作为入学资助。",
        "sources": [
          {
            "url": "https://isss.oie.gatech.edu/isss/financial-assistance-international-students",
            "year": "现行官网；2027–28新生资格未明确"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "Stamps 通常限美国公民或永久居民；国际新生仅在极少数特殊情况下、按 Early Action 申请后可能获考虑。不是面向普通国际申请人的普遍奖项。",
        "sources": [
          {
            "url": "https://stampsps.gatech.edu/apply/frequently-asked-questions",
            "year": "现行官网；2027–28新生资格未明确"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      }
    },
    "us_173258": {
      "need": {
        "text": "国际新生可申请少量 need-based 资助；满足录取者学校认定需求，须在录取前申报，录取后不接受新增或修改申请。",
        "sources": [
          {
            "url": "https://www.carleton.edu/admissions/apply/steps/international/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "merit": {
        "text": "国际新生的独立 merit 资格尚未确认；不能用历史音乐奖或 National Merit 条款推断现行国际资格。",
        "sources": [
          {
            "url": "https://www.carleton.edu/admissions/apply/steps/international/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      }
    },
    "us_134097": {
      "need": {
        "text": "国际本科新生校方 need-based 资格尚未确认；普通 FAFSA 及海外交流资助说明不作国际新生依据。",
        "sources": [
          {
            "url": "https://admissions.fsu.edu/first-year/scholarships",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际本科新生自动获非居民学费减免奖考虑；不能把所有国内生 merit 项目外推国际生。",
        "sources": [
          {
            "url": "https://admissions.fsu.edu/first-year/scholarships/faq",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_196097": {
      "need": {
        "text": "国际生不具备联邦／州资助资格；校方国际本科新生 need-based 资格尚未确认。",
        "sources": [
          {
            "url": "https://www.stonybrook.edu/commcms/finaid/students/International.php",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际高中毕业新生自动获 Global Excellence 学术奖考虑，最长四年，续领须全日制并满足奖函条件。",
        "sources": [
          {
            "url": "https://www.stonybrook.edu/commcms/finaid/students/International.php",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_110671": {
      "need": {
        "text": "UCR Grant、USHIP等常规 need grant 明确排除国际生；其他校方专项的国际新生资格尚未确认，暂不作全校否定。",
        "sources": [
          {
            "url": "https://financialaid.ucr.edu/types-of-financial-aid/grants",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际新生及转学生自动获 Achievement Scholarship 考虑；须非居民身份、确认入学并满足续领GPA要求。",
        "sources": [
          {
            "url": "https://admissions.ucr.edu/international",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_126775": {
      "need": {
        "text": "国际生一般不适用常规 financial aid；具体本科新生 need 专项尚未确认，不能据此将全部校方机会判为无。",
        "sources": [
          {
            "url": "https://finaid.mines.edu/international-students-financial-aid/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "常规入学奖列美国公民／永久居民等身份；国际本科新生其他校方 merit 项目尚未确认。",
        "sources": [
          {
            "url": "https://finaid.mines.edu/scholarships/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      }
    },
    "us_185828": {
      "need": {
        "text": "国际生不具备联邦资助资格；校方国际本科新生 need-based 资格尚未确认。",
        "sources": [
          {
            "url": "https://www.njit.edu/financialaid/international",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "财援页列奖学金渠道与一般新生学术审核；具体国际新生校方 merit 资格尚未确认。",
        "sources": [
          {
            "url": "https://www.njit.edu/financialaid/international",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://www.njit.edu/financialaid/scholarship-eligibility",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_133951": {
      "need": {
        "text": "联邦／州 need-based 资助排除国际生；校方国际新生 need-based 专项仍待确认。",
        "sources": [
          {
            "url": "https://onestop.fiu.edu/finances/applying-for-aid/apply-for-fafsa/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "持F-1等合资格签证的国际本科新生可竞争适用 merit 奖；各奖有独立申请及续领条件。",
        "sources": [
          {
            "url": "https://scholarships.fiu.edu/browse-scholarships/",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://scholarships.fiu.edu/browse-scholarships/merit-scholarships/policies-renewal/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_137351": {
      "need": {
        "text": "普通国际生通常不具备 FAFSA 资格；校方独立 need-based 资格尚未确认，特殊身份须另核。",
        "sources": [
          {
            "url": "https://www.usf.edu/admissions/international/admission-information/cost-of-attendance/index.aspx",
            "year": "merit明确2027夏／秋；need资格尚未确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "2027夏／秋国际本科新生按期完成入学申请可自动竞争 merit 奖，无额外奖项申请；名额有限，不保证获奖。",
        "sources": [
          {
            "url": "https://www.usf.edu/admissions/international/admission-information/cost-of-attendance/scholarships.aspx",
            "year": "merit明确2027夏／秋；need资格尚未确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_126614": {
      "need": {
        "text": "联邦财援不适用国际生；校方国际本科新生 need-based 资格尚未确认。",
        "sources": [
          {
            "url": "https://www.colorado.edu/admissions/cost/scholarships-financial-aid/international",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际生可竞争部分 merit 奖，包括适用的非居民学术奖及少量体育／音乐奖；各项目另有条件。",
        "sources": [
          {
            "url": "https://www.colorado.edu/admissions/cost/scholarships-financial-aid/international",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://www.colorado.edu/scholarships/frequently-asked-questions",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_216339": {
      "need": {
        "text": "国际生不具备联邦／州资助资格；校方国际本科新生 need-based 资格尚未确认。",
        "sources": [
          {
            "url": "https://sfs.temple.edu/apply/international-students",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际本科新生可竞争 merit、YouAreWelcomeHere／WhyUS 等奖；各项目另有申请及续领要求。",
        "sources": [
          {
            "url": "https://admissions.temple.edu/apply/international-students/frequently-asked-questions",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_221759": {
      "need": {
        "text": "国际生不适用联邦／州资助；学校另有其他资助渠道，国际新生 need-based 资格尚未确认。",
        "sources": [
          {
            "url": "https://admissions.utk.edu/undergraduate-application/international-information/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际本科新生可获适用的非州内奖项考虑；学校明确不提供国际生 fully funded 奖，项目每年更新。",
        "sources": [
          {
            "url": "https://admissions.utk.edu/undergraduate-application/international-information/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_153603": {
      "need": {
        "text": "有在读专项：ISSO经济困难奖须已连续在读两个学期、按国际学费缴费并符合GPA条件，不是新生入学资金保证。",
        "sources": [
          {
            "url": "https://isso.dso.iastate.edu/resources/isso-scholarships",
            "year": "在读ISSO申请截止2027-03-25；不代表2027秋新生资助认证，merit现行"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "merit": {
        "text": "国际本科新生可竞争 merit 奖；Excellence自动评选，International Merit需OneApp另申，两类不能叠加。",
        "sources": [
          {
            "url": "https://www.iastate.edu/admission-and-aid/admissions/international-admissions/admitted-international-undergraduate-students",
            "year": "在读ISSO申请截止2027-03-25；不代表2027秋新生资助认证，merit现行"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_104151": {
      "need": {
        "text": "可申请有限 need-based 资助，仅限符合 Barrett 荣誉学院及奖项条件的国际本科新生，须交校方预算表；2027–28申请窗口已公布，不代表全校普遍提供或保证获奖。",
        "sources": [
          {
            "url": "https://students.barretthonors.asu.edu/funding/barrett-scholarships",
            "year": "Barrett 2027–28申请窗口；完整资助周期未认证"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "merit": {
        "text": "F-1国际本科新生可竞争 New American University 学术奖；学院奖条件各异，不套用排除国际生的国内奖学金估算器。",
        "sources": [
          {
            "url": "https://admission.asu.edu/cost-aid/international",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_104179": {
      "need": {
        "text": "官网列国际生经济需求审核表，但本科新生具体 need 项目资格尚未确认；不能把研究生费用减免程序外推本科生。",
        "sources": [
          {
            "url": "https://financialaid.arizona.edu/faculty-staff/stipends",
            "year": "merit现行项目及2026–27规则；2027–28未确认"
          },
          {
            "url": "https://international.arizona.edu/international-students/financial-guarantee-requirement-new-students",
            "year": "merit现行项目及2026–27规则；2027–28未确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际本科新生可竞争 Global Wildcat 学费奖；须按对应入学年度的资格与续领规则，2027–28尚未单独确认。",
        "sources": [
          {
            "url": "https://financialaid.arizona.edu/types-of-aid/scholarships/incoming-first-year-transfer",
            "year": "merit现行项目及2026–27规则；2027–28未确认"
          },
          {
            "url": "https://financialaid.arizona.edu/2026-2027-terms-and-conditions",
            "year": "merit现行项目及2026–27规则；2027–28未确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_132903": {
      "need": {
        "text": "F／J等国际生不适用联邦学生资助；校方国际本科新生 need-based 资格尚未确认。",
        "sources": [
          {
            "url": "https://www.ucf.edu/financial-aid/apply/international/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "财援办明确不向非美国公民发放其奖学金，但另列院系和其他机会；国际本科新生具体 merit 资格尚未确认。",
        "sources": [
          {
            "url": "https://www.ucf.edu/financial-aid/apply/international/",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://www.ucf.edu/financial-aid/types/scholarships/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      }
    },
    "us_145725": {
      "need": {
        "text": "国际本科新生校方 need-based 资格尚未确认；国际页泛称 scholarship／grant package 不等于经济需求资格。",
        "sources": [
          {
            "url": "https://www.iit.edu/admissions-aid/tuition-and-aid/scholarships/international-undergraduate-student-scholarships",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际本科新生及转学生按学业、社区参与等自动获校方奖考虑；部分领导力或专项奖另有条件。",
        "sources": [
          {
            "url": "https://www.iit.edu/admissions-aid/tuition-and-aid/scholarships/international-undergraduate-student-scholarships",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_146719": {
      "need": {
        "text": "国际本科新生校方 need-based 资格尚未确认；不采用研究生或海外交流项目规则。",
        "sources": [
          {
            "url": "https://www.luc.edu/undergrad/admissions/internationalstudents/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际新生随入学申请自动获 merit 奖考虑，录取信公布初步奖项；部分专项需另申。",
        "sources": [
          {
            "url": "https://www.luc.edu/undergrad/admissions/internationalstudents/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_202480": {
      "need": {
        "text": "国际本科新生校方 need-based 资格尚未确认；普通学生 FAFSA 规则和地区性外部贷款不作资格依据。",
        "sources": [
          {
            "url": "https://udayton.edu/tuition-aid/international/undergraduate.php",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://udayton.edu/tuition-aid/undergraduate/financial-aid/awards.php",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "多数国际本科新生录取时可获 merit 奖；具体金额和续领以录取奖函为准，不保证覆盖全部费用。",
        "sources": [
          {
            "url": "https://udayton.edu/tuition-aid/international/undergraduate.php",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_232186": {
      "need": {
        "text": "国际新生校方 need-based 资格尚未确认；VASA等州内特殊身份申请渠道不能当作普通F-1资格。",
        "sources": [
          {
            "url": "https://www.gmu.edu/international/financial-aid",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "全日制F-1国际本科新生及转学生可自动竞争有限 merit 奖，无需另申；续领须符合学业及年限要求。",
        "sources": [
          {
            "url": "https://www.gmu.edu/international/financial-aid",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_204024": {
      "need": {
        "text": "国际本科新生校方 need-based 资格尚未确认；州内 Access 等项目不能外推国际生。",
        "sources": [
          {
            "url": "https://miamioh.edu/onestop/financial-aid/funding-opportunities/scholarships/undergraduate-student-scholarships.html",
            "year": "merit明确2027秋；need国际新生资格未确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "2027秋国际新生达到该校折算GPA等要求可自动获 International Merit 考虑；另有竞争奖，获奖不保证。",
        "sources": [
          {
            "url": "https://miamioh.edu/onestop/financial-aid/funding-opportunities/scholarships/international-scholarships.html",
            "year": "merit明确2027秋；need国际新生资格未确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_100663": {
      "need": {
        "text": "国际本科新生校方 need-based 资格尚未确认；不把外部／研究生资源视为本科入学奖。",
        "sources": [
          {
            "url": "https://www.uab.edu/cost-aid/types-of-aid/scholarships/international",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "UAB International Scholarship有背景限制：境外高中毕业、未读过高等教育、拟持F-1等；按录取时GPA及资金可用性评选，获政府等资助者排除。",
        "sources": [
          {
            "url": "https://www.uab.edu/admissions/cost/scholarships/international-students",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      }
    },
    "us_110583": {
      "need": {
        "text": "国际生不具备联邦财援资格；校方本科新生 need-based 资格尚未确认。",
        "sources": [
          {
            "url": "https://www.csulb.edu/international/newly-admitted-students/frequently-asked-questions",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "官网称国际生可有部分校园及其他奖助渠道；具体面向国际本科新生的校方 merit 项目尚未确认。",
        "sources": [
          {
            "url": "https://www.csulb.edu/international/newly-admitted-students/frequently-asked-questions",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://www.csulb.edu/financial-aid-and-scholarships/scholarships",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      }
    },
    "us_122409": {
      "need": {
        "text": "国际本科新生校方 need-based 资格尚未确认；“很难获得资助”不等于不提供。",
        "sources": [
          {
            "url": "https://www.sdsu.edu/international-student-center/resources/finances-and-taxes",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际本科新生可竞争 International First-Year Student Advantage 等 merit 项目；在读Aztec平台另有资格和申请截止。",
        "sources": [
          {
            "url": "https://sacd.sdsu.edu/financial-aid/scholarships/recruitment-merit-scholarships",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://sacd.sdsu.edu/financial-aid/scholarships/sdsu-aztec-scholarships",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_225511": {
      "need": {
        "text": "有在读专项：Burke／Eichenberg奖需已完成一学期、全日制及经济需求和GPA等条件；2026–27轮已列，不属于国际新生入学奖保证。",
        "sources": [
          {
            "url": "https://www.uh.edu/issso/students/financial-services/scholarships/",
            "year": "在读专项2026–27；国际新生merit背景据2023传单和现行奖学金页，2027未确认"
          },
          {
            "url": "https://www.uh.edu/financial/undergraduate/types-aid/scholarships/index",
            "year": "在读专项2026–27；国际新生merit背景据2023传单和现行奖学金页，2027未确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "merit": {
        "text": "国际本科新生可竞争 Academic Excellence、Tier One 等学术奖；按项目截止及独立条件，不将全学费或两年食宿写成四年全部费用。",
        "sources": [
          {
            "url": "https://www.uh.edu/undergraduate-admissions/apply/international/_files/23-internationalscholarshipsflyer.pdf",
            "year": "在读专项2026–27；国际新生merit背景据2023传单和现行奖学金页，2027未确认"
          },
          {
            "url": "https://www.uh.edu/financial/undergraduate/types-aid/scholarships/index",
            "year": "在读专项2026–27；国际新生merit背景据2023传单和现行奖学金页，2027未确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      }
    },
    "us_100751": {
      "need": {
        "text": "国际本科新生校方 need-based 资格尚未确认；一般资金证明、外部奖或研究生assistantship不作本科need结论。",
        "sources": [
          {
            "url": "https://international.ua.edu/isss/future-new-students/scholarships-aid/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际本科新生可竞争学术奖；应按国际首年奖项页核对成绩、测试及申请时点，不套用旧FAQ的截止日期。",
        "sources": [
          {
            "url": "https://international.ua.edu/isss/future-new-students/scholarships-aid/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_155317": {
      "need": {
        "text": "国际办公室列院系奖及 Institutional Need Analysis Worksheet；具体国际本科新生 need-based 项目仍待确认。",
        "sources": [
          {
            "url": "https://iss.ku.edu/scholarship-loan-information",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际本科新生可按GPA等要求竞争 merit 奖；须按期完成申请，纯在线学位排除，逐年规则可能变化。",
        "sources": [
          {
            "url": "https://admissions.ku.edu/afford/scholarships",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_196413": {
      "need": {
        "text": "国际本科新生校方 need-based 资格尚未确认；不能用全体学生资助比例或泛称可负担外推。",
        "sources": [
          {
            "url": "https://www.syracuse.edu/admissions-aid/cost/international-costs/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际本科申请人可凭学业及个人成就竞争 merit 奖，录取时通知；研究生资助按院系另核。",
        "sources": [
          {
            "url": "https://www.syracuse.edu/admissions-aid/cost/international-costs/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_196079": {
      "need": {
        "text": "国际生不具备联邦／州资助资格；校方国际本科新生 need-based 资格尚未确认。",
        "sources": [
          {
            "url": "https://www.binghamton.edu/financial-aid/fafsa/eligibility.html",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "官网称所有学生可获奖学金考虑，但具体国际本科新生的校方 merit 资格仍待确认；不将普通学生规则直接外推。",
        "sources": [
          {
            "url": "https://www.binghamton.edu/financial-aid/types-of-aid/scholarships/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_196088": {
      "need": {
        "text": "国际本科新生校方 need-based 资格尚未确认；资金证明要求不能代替资格条款。",
        "sources": [
          {
            "url": "https://www.buffalo.edu/admissions/costs/scholarships.html",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://www.buffalo.edu/financialaid/manage/ug-eligibility.html",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际本科首年／首次入学者可竞争学术奖；奖项须按时接受并保持学分、GPA等续领条件。",
        "sources": [
          {
            "url": "https://www.buffalo.edu/admissions/costs/scholarships.html",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_126818": {
      "need": {
        "text": "国际本科新生校方 need-based 资格尚未确认；国际办公室多数资助为研究生项目，不能外推新生。",
        "sources": [
          {
            "url": "https://international.colostate.edu/isss/resources/finances/financial-aid-for-international-students/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际本科新生可自动获按成绩、课程难度及课外参与评定的奖考虑，无需额外申请；续领有学业条件。",
        "sources": [
          {
            "url": "https://thehub.colostate.edu/financial-aid/international-student-scholarships/",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_144740": {
      "need": {
        "text": "国际本科录取后清单将常规 need-based 财援申请限美国公民／永久居民；普通国际生不适用该渠道。",
        "sources": [
          {
            "url": "https://www.depaul.edu/admission/international-admission/admitted-students/undergraduate",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际本科新生随申请自动获 Global DePaul Scholarship 考虑；在读生可另查 Scholarship Connect，不能当作新生获奖保证。",
        "sources": [
          {
            "url": "https://www.depaul.edu/admission/international-admission/admitted-students/undergraduate",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_110422": {
      "need": {
        "text": "国际本科新生 need-based 资格尚未确认；一般need奖要求 FAFSA／CADAA，但不能据此排除所有专项。",
        "sources": [
          {
            "url": "https://www.calpoly.edu/financial-aid/types-of-aid/scholarships/cal-poly-scholarships",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "官网列新生自动评奖及在读院系奖，但具体国际本科新生 merit 资格尚未确认。",
        "sources": [
          {
            "url": "https://www.calpoly.edu/financial-aid/types-of-aid/scholarships",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      }
    },
    "us_190372": {
      "need": {
        "text": "国际本科新生额外 need-based 资格尚未确认；全体本科全需求宣传及 FAFSA 说明不能单独认证国际生资格。",
        "sources": [
          {
            "url": "https://cooper.edu/admissions/sfs",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://cooper.edu/sites/default/files/uploads/assets/admissions/financial_aid.pdf",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "所有录取本科生不论国籍均获半额学费奖；额外 Innovator／Named 等按各自条件，半额学费不是全部费用免费。",
        "sources": [
          {
            "url": "https://cooper.edu/sites/default/files/uploads/assets/admissions/financial_aid.pdf",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_193654": {
      "need": {
        "text": "有项目限制：成人／转学本科项目允许国际申请人通过 International Student Scholarship Application 申请need；不能推广为普通国际新生资格。",
        "sources": [
          {
            "url": "https://www.newschool.edu/bachelors-program/financial-aid-funding/",
            "year": "成人／转学本科项目列2026–27；一般国际merit现行，2027未确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "merit": {
        "text": "F-1／J-1国际申请人可在录取过程中获 merit 考虑；成人完成学位项目与Parsons等规则分别适用。",
        "sources": [
          {
            "url": "https://www.newschool.edu/financial-aid/international-students/",
            "year": "成人／转学本科项目列2026–27；一般国际merit现行，2027未确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_109651": {
      "need": {
        "text": "国际生无需证明经济需求即可获奖学金考虑；该说明不构成独立 need-based 新生项目资格，仍待确认。",
        "sources": [
          {
            "url": "https://www.artcenter.edu/admissions/tuition-and-aid/financial-aid/scholarships.html",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际本科新生可凭作品集及学业接受奖学金审核，无需 FAFSA；在读奖另有作品审核及GPA要求。",
        "sources": [
          {
            "url": "https://www.artcenter.edu/admissions/tuition-and-aid/financial-aid/scholarships.html",
            "year": "现行政策；2027–28资助周期未单独确认"
          },
          {
            "url": "https://handbooks.artcenter.edu/artcenter-catalog/artcenter-scholarship-and-grant-policies",
            "year": "现行政策；2027–28资助周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_189088": {
      "need": {
        "text": "国际本科新生可申请 need-based 资助，须随入学申请提交 BISFAA。不同申请轮次的满足需求承诺不同；通常需家庭承担部分费用，UWC 另有政策。已列2027–28表单，不代表完整学年条款已认证。",
        "sources": [
          {
            "url": "https://www.bard.edu/sfs/prospective/international/",
            "year": "2027–28国际申请表；资格按官网现行条款"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "merit": {
        "text": "Global Citizen 为按经济需求及学业表现共同评审的混合奖，面向非美国公民；不等于无需求要求的纯学术 merit 奖。须提交财援材料，Merit 的2027–28周期未单独确认。",
        "sources": [
          {
            "url": "https://www.bard.edu/sfs/prospective/international/",
            "year": "现行混合奖资格；Merit的2027–28周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      }
    },
    "us_164748": {
      "need": {
        "text": "不提供国际本科入学新生 need-based 资助；新生仅可申请 merit 奖。在读学生的 Thrive 另有条件，不能用于新生。",
        "sources": [
          {
            "url": "https://www.berklee.edu/student-financial-services/financial-aid",
            "year": "官网现行资格；2027–28完整周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际本科新生可参与 merit 奖评审；以录取及奖学金通知为准，不保证获奖或覆盖全部费用。",
        "sources": [
          {
            "url": "https://www.berklee.edu/student-financial-services/financial-aid",
            "year": "官网现行资格；2027–28完整周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_111081": {
      "need": {
        "text": "国际本科新生不提供 need-based 资助；校方该类资助限美国公民或符合资格的非公民，普通 F-1 国际生不在其内。",
        "sources": [
          {
            "url": "https://www.cca.edu/admissions/financial-aid/",
            "year": "官网现行资格；2027–28完整周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际本科新生可凭作品集与学业表现申请 merit 奖；按录取优先期限提交申请后自动考虑。",
        "sources": [
          {
            "url": "https://www.cca.edu/admissions/financial-aid/",
            "year": "官网现行资格；2027–28完整周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_168005": {
      "need": {
        "text": "Need-based 资助要求美国公民或符合资格的非公民身份，普通 F-1 国际本科新生不符合该条件。",
        "sources": [
          {
            "url": "https://www.suffolk.edu/student-financial-services/eligibility",
            "year": "官网现行资格；2027–28完整周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "no"
      },
      "merit": {
        "text": "国际本科新生在录取时自动考虑 merit 奖，以学业表现评审；须遵守申请期限，获奖并不保证。",
        "sources": [
          {
            "url": "https://www.suffolk.edu/student-financial-services/eligibility",
            "year": "官网现行资格；2027–28完整周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_209825": {
      "need": {
        "text": "国际本科新生的 need-based 资格尚未核实；财力证明及 merit 资格不代表可申请 need-based 资助。",
        "sources": [
          {
            "url": "https://www.up.edu/iss/prospective-students/index.html",
            "year": "官网现行资格；2027–28完整周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际本科新生可获与本土学生相同的 merit 奖评审机会；实际金额及条件以校方通知为准。",
        "sources": [
          {
            "url": "https://www.up.edu/iss/prospective-students/index.html",
            "year": "官网现行资格；2027–28完整周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_206589": {
      "need": {
        "text": "国际本科新生可申请 Wooster International Scholarship，按经济需求与学业表现共同评审；须随入学申请提交财力材料，招生考虑支付能力。",
        "sources": [
          {
            "url": "https://wooster.edu/admissions/financial-aid/international-students",
            "year": "官网现行资格；2027–28完整周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      },
      "merit": {
        "text": "Wooster International Scholarship 为 need 与 merit 共同评审的混合奖，不等于无需经济需求条件的纯学术奖；不保证覆盖全部费用。",
        "sources": [
          {
            "url": "https://wooster.edu/admissions/financial-aid/international-students",
            "year": "官网现行资格；2027–28完整周期未单独确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      }
    },
    "us_172644": {
      "need": {
        "text": "国际本科新生 need-based 资格尚未取得充分官网证据。",
        "sources": [
          {
            "url": "https://wayne.edu/scholarships/international",
            "year": "现行页；Need未知"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "可获 Warrior、Gold、Green 等新生学术奖评审；国际新生按入学申请自动考虑，须满足具体条件，不保证获奖。",
        "sources": [
          {
            "url": "https://wayne.edu/scholarships/international",
            "year": "现行资格；2027–28完整周期未认证"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_176080": {
      "need": {
        "text": "国际本科新生 need-based 资格尚未取得充分官网证据。",
        "sources": [
          {
            "url": "https://www.sfa.msstate.edu/scholarships/international-scholarships",
            "year": "现行页；Need未知"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "可按学术标准获国际新生奖学金评审；官网已列 2027年秋季／2028年春季。持有效招生代理合同者不符合奖学金资格，须核对校方具体规则。",
        "sources": [
          {
            "url": "https://www.sfa.msstate.edu/scholarships/international-scholarships",
            "year": "明确Fall2027／Spring2028；完整2027–28资助认证未完成"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "yes"
      }
    },
    "us_209551": {
      "need": {
        "text": "可申请 ICSP 混合专项：同时考虑经济需求、学术表现及文化展示能力，主要减免部分学费；不是两项独立奖。具体申请页仍为 2026年秋季，2027周期尚未确认。",
        "sources": [
          {
            "url": "https://isss.uoregon.edu/icsp/application",
            "year": "申请页Fall2026；招生总页现行，2027未确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      },
      "merit": {
        "text": "可申请 ICSP 混合专项：同时考虑经济需求、学术表现及文化展示能力，主要减免部分学费；不是两项独立奖。具体申请页仍为 2026年秋季，2027周期尚未确认。",
        "sources": [
          {
            "url": "https://isss.uoregon.edu/icsp/application",
            "year": "申请页Fall2026；招生总页现行，2027未确认"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      }
    },
    "ut_austin": {
      "need": {
        "text": "国际本科新生 need-based 资格尚未充分核实；ISSS多项奖有在读、地区或项目限制，2027–28申请窗口不代表普通国际新生符合资格。",
        "sources": [
          {
            "url": "https://global.utexas.edu/isss/advising-services/scholarships",
            "year": "现行官网；2027–28新生资格未明确"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际本科新生 merit 资格尚未充分核实；ISSS多项奖有在读、地区或项目限制，2027–28申请窗口不代表普通国际新生符合资格。",
        "sources": [
          {
            "url": "https://global.utexas.edu/isss/advising-services/scholarships",
            "year": "现行官网；2027–28新生资格未明确"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      }
    },
    "us_191241": {
      "need": {
        "text": "暂未确认：官网最低家庭贡献条件存在不一致，国际本科新生 need-based 结论暂缓；不能据此估算家庭应付费用。",
        "sources": [
          {
            "url": "https://www.fordham.edu/student-financial-services/undergraduate-financial-aid/international-students/",
            "year": "现行官网；2027–28新生资格未明确"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "merit": {
        "text": "国际新生可参加Merit，完整申请自动考虑；录取信通知。",
        "sources": [
          {
            "url": "https://www.fordham.edu/undergraduate-admission/international-students/international-faqs/",
            "year": "现行政策；2027–28未明确"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      }
    },
    "us_212674": {
      "merit": {
        "text": "国际本科新生 merit 资格暂未确认；一般奖学金页的申请人范围不足以确认国际生适用，不视为保证可申。",
        "sources": [
          {
            "url": "https://www.gettysburg.edu/admissions-aid/scholarships",
            "year": "现行官网；2027–28新生资格未明确"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": null
      },
      "need": {
        "text": "国际新生Need以国际财务表及国际财援申请表评审，无CSS要求；随录取通知。",
        "sources": [
          {
            "url": "https://www.gettysburg.edu/admissions-aid/admissions/international/accepted-steps/financial-aid",
            "year": "现行政策；2027–28未明确"
          }
        ],
        "checked": "2026-10-16",
        "expected_value": "limited"
      }
    },
    "us_164465": {
      "need": {
        "text": "国际本科申请人可申请按经济需求提供的资助；学校承诺满足录取学生经校方计算的全部经济需求，初始方案不含学生贷款。金额由校方审核，不等于人人获全额资助。",
        "sources": [
          {
            "url": "https://www.amherst.edu/offices/financialaid/international_students",
            "year": "现行国际生政策；2027–28年度未单独确认"
          }
        ]
      },
      "review": {
        "text": "Need-blind；国际生申请资助的意向不影响录取。",
        "sources": [
          {
            "url": "https://www.amherst.edu/offices/financialaid/international_students",
            "year": "现行国际生政策；2027–28年度未单独确认"
          }
        ]
      }
    }
  },
  "tests": {
    "penn": {
      "policy": "required",
      "cycle": "Fall 2027",
      "note": "遇到考试困难可申请豁免。",
      "sources": [
        {
          "url": "https://admissions.upenn.edu/how-to-apply/preparing-your-application/testing"
        }
      ]
    },
    "jhu": {
      "policy": "required",
      "cycle": "Fall 2027",
      "note": "",
      "sources": [
        {
          "url": "https://apply.jhu.edu/how-to-apply/application-deadlines-requirements/"
        }
      ]
    },
    "princeton": {
      "policy": "test_optional",
      "cycle": "Fall 2027",
      "note": "2028年秋季入学起恢复必须提交。",
      "sources": [
        {
          "url": "https://admission.princeton.edu/apply/counselors"
        }
      ]
    },
    "mit": {
      "policy": "required",
      "cycle": "Fall 2027",
      "note": "",
      "sources": [
        {
          "url": "https://mitadmissions.org/apply/firstyear/tests-scores/"
        }
      ]
    },
    "bc": {
      "policy": "test_optional",
      "cycle": "2026-27 application cycle (Fall 2027 entry)",
      "note": "鼓励已考试者提交；家庭教育强烈建议，但不强制；提交后不可移除",
      "sources": [
        {
          "url": "https://www.bc.edu/content/bc-web/admission/apply.html"
        },
        {
          "url": "https://www.bc.edu/content/bc-web/admission/apply/test-optional.html"
        }
      ]
    },
    "rice": {
      "policy": "test_optional",
      "cycle": "2026-27 application cycle (Fall 2027 entry)",
      "note": "推荐提交，不提交仍完整考虑；建筑作品集、音乐试演另列",
      "sources": [
        {
          "url": "https://admission.rice.edu/apply/first-year-international-applicants"
        }
      ]
    },
    "ucla": {
      "policy": "test_free",
      "cycle": "Fall 2027",
      "note": "录取与奖学金不考虑SAT/ACT；资格/分班等其他用途不等于录取考虑",
      "sources": [
        {
          "url": "https://admission.ucla.edu/apply/international-applicants"
        },
        {
          "url": "https://www.universityofcalifornia.edu/news/press-releases-and-statements/academic-senate-review-admissions"
        }
      ]
    },
    "ucdavis": {
      "policy": "test_free",
      "cycle": "Fall 2027",
      "note": "录取与奖学金不考虑SAT/ACT；资格/分班等其他用途不等于录取考虑",
      "sources": [
        {
          "url": "https://www.ucdavis.edu/admissions/undergraduate/first-year/requirements"
        },
        {
          "url": "https://www.universityofcalifornia.edu/news/press-releases-and-statements/academic-senate-review-admissions"
        }
      ]
    },
    "uci": {
      "policy": "test_free",
      "cycle": "Fall 2027",
      "note": "录取与奖学金不考虑SAT/ACT；资格/分班等其他用途不等于录取考虑",
      "sources": [
        {
          "url": "https://www.admissions.uci.edu/apply/how-to-apply/application-faq/index.php"
        },
        {
          "url": "https://www.universityofcalifornia.edu/news/press-releases-and-statements/academic-senate-review-admissions"
        }
      ]
    },
    "ucsd": {
      "policy": "test_free",
      "cycle": "Fall 2027",
      "note": "录取与奖学金不考虑SAT/ACT；资格/分班等其他用途不等于录取考虑",
      "sources": [
        {
          "url": "https://admissions.ucsd.edu/first-year/application-review.html"
        },
        {
          "url": "https://www.universityofcalifornia.edu/news/press-releases-and-statements/academic-senate-review-admissions"
        }
      ]
    },
    "uchicago": {
      "policy": "test_optional",
      "cycle": "2026-27 application cycle (Fall 2027 entry)",
      "note": "No Harm：仅在有助录取时使用成绩",
      "sources": [
        {
          "url": "https://collegeadmissions.uchicago.edu/apply/application/"
        },
        {
          "url": "https://collegeadmissions.uchicago.edu/apply/application/required-materials/"
        }
      ]
    },
    "us_126775": {
      "policy": "test_optional",
      "cycle": "Fall 2027",
      "note": "录取和merit均可不交；无测试不妨碍整体审查",
      "sources": [
        {
          "url": "https://undergraduate-admissions.mines.edu/first-year/"
        },
        {
          "url": "https://undergraduate-admissions.mines.edu/apply/"
        }
      ]
    },
    "us_151351": {
      "policy": "test_optional",
      "cycle": "2026-27 application cycle (Fall 2027 entry)",
      "note": "音乐试演/专业材料另行；不据此认证所有直录专业附加规则",
      "sources": [
        {
          "url": "https://ois.iu.edu/admissions/apply/freshmen/index.html"
        },
        {
          "url": "https://jsom.indiana.edu/admissions/how-to-apply/undergraduate.html"
        },
        {
          "url": "https://www.iu.edu/admissions/how-to-apply/index.html"
        }
      ]
    },
    "us_196079": {
      "policy": "test_optional",
      "cycle": "2026-27 application cycle (Fall 2027 entry)",
      "note": "艺术BFA/BMus另需作品集/试演；测试政策页ACT写作/科学及SAT essay不要求",
      "sources": [
        {
          "url": "https://www.binghamton.edu/admissions/undergraduate/apply/freshman/"
        },
        {
          "url": "https://www.binghamton.edu/admissions/undergraduate/apply/international/first-year.html"
        },
        {
          "url": "https://www.binghamton.edu/admissions/undergraduate/info/test-policy.html"
        }
      ]
    },
    "stanford": {
      "policy": "required",
      "cycle": "官网现行新生政策（2026-07-31更新；未单独标2027入学年度）",
      "note": "须提交 SAT 或 ACT；官网现行新生要求，2026-07-31更新，未单独标2027入学年度。英语能力考试不能替代 SAT/ACT。",
      "sources": [
        {
          "url": "https://admission.stanford.edu/apply/first-year/testing.html"
        }
      ]
    },
    "duke": {
      "policy": "test_optional",
      "cycle": "Fall 2027",
      "note": "官网明确2026–27申请季；国际生及 merit 奖学金申请人同样适用。ROTC奖学金另有要求。",
      "sources": [
        {
          "url": "https://admissions.duke.edu/resources/"
        }
      ]
    },
    "northwestern": {
      "policy": "test_optional",
      "cycle": "Fall 2027",
      "note": "官网现行新生政策，页面列明2026-11-01 ED及2027-01-04 RD截止；部分专业另有申请与考试要求，英语能力证明另行。",
      "sources": [
        {
          "url": "https://admissions.northwestern.edu/faqs/standardized-testing-policy/"
        }
      ]
    },
    "vanderbilt": {
      "policy": "test_optional",
      "cycle": "Fall 2027",
      "note": "官网明确2027及2028秋入学可不交，2029秋起要求提交。国际生英语能力证明另行；不交SAT/ACT仍可申请merit奖学金。",
      "sources": [
        {
          "url": "https://admissions.vanderbilt.edu/apply/testing-policies/"
        }
      ]
    },
    "cmu": {
      "policy": "test_by_program",
      "cycle": "2026–27申请季／2027秋入学",
      "note": "计算机科学学院须交SAT或ACT；工程、人文社科、信息系统、理学院、商学院须交SAT、ACT或指定的AP、IB、A-Level、法国会考成绩。IB、A-Level及法国会考可先交预测成绩，入学须补实际成绩。美术学院可不交SAT/ACT，另须作品集或试演。英语能力要求另行。",
      "sources": [
        {
          "url": "https://coursecatalog.web.cmu.edu/aboutcmu/undergraduateadmission/"
        },
        {
          "url": "https://www.cmu.edu/admission/admission/standardized-testing"
        }
      ]
    },
    "unc": {
      "policy": "test_conditional",
      "cycle": "2026–27申请季／2027秋入学",
      "note": "按GPA条件：自2026–27学年起，加权GPA（4.0制）≥2.8可不交；低于2.8须交ACT≥17或SAT≥930。未提供4.0制加权GPA但课程成绩高于B+者，校方说明无需SAT/ACT；Cambridge等学制的国际生以A-Level／外部考试成绩评估此GPA条件。以上最低考试分数不代表录取保证；英语能力要求另行。",
      "sources": [
        {
          "url": "https://admissions.unc.edu/faqs/how-does-unc-look-at-act-or-sat-test-scores/"
        }
      ]
    },
    "us_100751": {
      "policy": "test_conditional",
      "cycle": "2026–27申请季／2027秋入学",
      "note": "高中累计GPA低于3.0须交SAT或ACT；自动奖学金仍须考试成绩。国际生同样适用，英语能力要求另行。2028入学起所有申请人须交。",
      "sources": [
        {
          "url": "https://admissions.ua.edu/testing-requirements/"
        },
        {
          "url": "https://admissions.ua.edu/international/freshman/"
        }
      ]
    },
    "rutgers_camden": {
      "policy": "test_by_program",
      "cycle": "2026–27申请季／2027秋入学",
      "note": "普通本科可不交；BS/DO联合项目必须提交SAT或ACT。国际生英语能力要求另行。",
      "sources": [
        {
          "url": "https://admissions.rutgers.edu/apply/first-year-applicants"
        },
        {
          "url": "https://admissions.rutgers.edu/apply/international-applicants"
        }
      ]
    },
    "us_186399": {
      "policy": "test_by_program",
      "cycle": "2026–27申请季／2027秋入学",
      "note": "普通本科不考虑SAT/ACT；7年制BA/MD联合项目必须提交。国际生英语能力要求另行。",
      "sources": [
        {
          "url": "https://admissions.rutgers.edu/apply/first-year-applicants"
        },
        {
          "url": "https://admissions.rutgers.edu/apply/international-applicants"
        }
      ]
    },
    "umass_amherst": {
      "policy": "test_optional",
      "cycle": "官网现行政策；未明标目标入学年度",
      "note": "所有专业均适用；不提交仍可参与择优奖学金及特殊项目评选。国际生英语能力要求另行。",
      "sources": [
        {
          "url": "https://www.umass.edu/admissions/test-optional-policy"
        }
      ]
    },
    "us_161004": {
      "policy": "test_optional",
      "cycle": "官网现行政策；未明标目标入学年度",
      "note": "国际生英语能力考试也可选择提交。",
      "sources": [
        {
          "url": "https://www.bowdoin.edu/admissions/apply/test-optional-policy/index.html"
        },
        {
          "url": "https://www.bowdoin.edu/admissions/apply/"
        }
      ]
    },
    "us_216287": {
      "policy": "test_optional",
      "cycle": "官网现行政策；未明标目标入学年度",
      "note": "IB文凭毕业生仍须交官方IB成绩；美国境外就读者另须提交学校视频回答、英语考试或InitialView视频之一。",
      "sources": [
        {
          "url": "https://www.swarthmore.edu/admissions-aid/standardized-testing-policy"
        },
        {
          "url": "https://www.swarthmore.edu/admissions-aid/application-materials-deadlines"
        }
      ]
    },
    "us_168342": {
      "policy": "test_optional",
      "cycle": "Fall 2027",
      "note": "国际生同样适用；英语能力考试为鼓励提交。",
      "sources": [
        {
          "url": "https://hub.williams.edu/institutional-research/files/2026/04/Williams-CDS-2025-2026-V2.pdf"
        },
        {
          "url": "https://www.williams.edu/admission-aid/how-to-apply/"
        },
        {
          "url": "https://www.williams.edu/admission-aid/how-to-apply/additional-applicant-information/international/"
        }
      ]
    },
    "us_164465": {
      "policy": "test_optional",
      "cycle": "现行政策；2027年秋季适用性尚未明确",
      "note": "国际生同样适用；英语能力证明另有要求。",
      "sources": [
        {
          "url": "https://www.amherst.edu/admission/apply/firstyear/testing"
        }
      ]
    },
    "us_164580": {
      "policy": "test_optional",
      "cycle": "现行政策；2027年秋季适用性尚未明确",
      "note": "不提交成绩仍可参与择优奖学金评选；非英语母语国际生另须英语能力证明。",
      "sources": [
        {
          "url": "https://www.babson.edu/undergraduate/how-to-apply/"
        },
        {
          "url": "https://babson.edu/undergraduate/how-to-apply/evaluation-criteria/"
        }
      ]
    },
    "us_212911": {
      "policy": "test_optional",
      "cycle": "现行政策；2027年秋季适用性尚未明确",
      "note": "不提交成绩不影响申请；非英语母语且未在英语授课中学就读者另须英语能力考试。",
      "sources": [
        {
          "url": "https://www.haverford.edu/admission/applying/application-instructions"
        },
        {
          "url": "https://www.haverford.edu/college-communications/news/haverford-college-s-test-optional-pilot-now-official-policy"
        }
      ]
    },
    "us_197133": {
      "policy": "test_optional",
      "cycle": "现行政策；2027年秋季适用性尚未明确",
      "note": "近三年中学非英语授课者另须英语能力考试；毕业会考材料仍按学制提交。",
      "sources": [
        {
          "url": "https://www.vassar.edu/admission/apply/how-to-apply/"
        },
        {
          "url": "https://www.vassar.edu/admission/apply/international/"
        },
        {
          "url": "https://www.vassar.edu/news/vassar-makes-test-optional-policy-permanent-applicants"
        }
      ]
    },
    "us_130697": {
      "policy": "test_optional",
      "cycle": "现行政策；2027年秋季适用性尚未明确",
      "note": "国际生同样适用；非考试制国际学制建议提交SAT/ACT。IB、A-Level等考试制学制仍须提交预估或实际成绩。非英语母语者建议提交英语能力证明，学校可能另行要求。",
      "sources": [
        {
          "url": "https://www.wesleyan.edu/admission/undergraduate-admission/international/"
        },
        {
          "url": "https://www.wesleyan.edu/admission/admission-faq.html"
        }
      ]
    },
    "us_161086": {
      "policy": "test_optional",
      "cycle": "现行政策；2027年秋季适用性尚未明确",
      "note": "国际生同样适用；英语既非母语、也非当前授课语言者须交英语能力考试。",
      "sources": [
        {
          "url": "https://afa.colby.edu/apply/requirements/"
        }
      ]
    },
    "us_173902": {
      "policy": "test_optional",
      "cycle": "Fall 2027",
      "note": "国际生同样适用；不提交不影响录取及择优奖学金评选。IB、A-Level等学制成绩仍须按要求提交；英语能力证明可选，学校可能另行要求。",
      "sources": [
        {
          "url": "https://www.macalester.edu/admissions/us-admissions/first-year/"
        },
        {
          "url": "https://www.macalester.edu/admissions/international/first-year/"
        },
        {
          "url": "https://www.macalester.edu/admissions/us-admissions/faq/testing-policy/"
        }
      ]
    },
    "us_166939": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生同样适用；完全自学或仅上网课的在家教育申请人须交SAT/ACT，完成AP考试或大学课程者可个别申请豁免。英语能力要求另行。",
      "sources": [
        {
          "url": "https://www.mtholyoke.edu/admission/apply-undergraduate-first-year/standardized-testing-policies"
        },
        {
          "url": "https://www.mtholyoke.edu/admission/apply-undergraduate-first-year/application-process/international-admission"
        }
      ]
    },
    "us_209922": {
      "policy": "test_free",
      "cycle": "Fall 2027",
      "note": "国际生英语能力材料另行；官网将SAT/ACT列为可用英语证明之一，与学术录取不考虑SAT/ACT的政策分开。",
      "sources": [
        {
          "url": "https://www.reed.edu/ir/cds/cds2526/CDS_secC_202526.pdf"
        },
        {
          "url": "https://www.reed.edu/admission-aid/how-to-apply/"
        },
        {
          "url": "https://www.reed.edu/admission-aid/how-to-apply/international.html"
        }
      ]
    },
    "us_120254": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生同样适用；全程在家教育者强烈建议提交SAT/ACT或AP、IB等外部评估。英语能力要求另行。",
      "sources": [
        {
          "url": "https://www.oxy.edu/admission-aid/apply/test-optional-admission-policy"
        }
      ]
    },
    "us_123165": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生同样适用；英语能力证明及豁免另行。",
      "sources": [
        {
          "url": "https://www.scrippscollege.edu/admission/apply/first-year-applicants"
        }
      ]
    },
    "us_203535": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生同样适用；非英语授课学校的国际生仍须提供英语能力证明。",
      "sources": [
        {
          "url": "https://www.kenyon.edu/admissions-aid/apply-to-kenyon/standardized-testing-policy/"
        }
      ]
    },
    "us_237057": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生、在家教育及学校仅提供文字评价而无成绩者，强烈建议提交SAT/ACT。英语能力要求另行。",
      "sources": [
        {
          "url": "https://www.whitman.edu/admission-and-aid/applying-to-whitman/testing-policy"
        },
        {
          "url": "https://www.whitman.edu/admission-and-aid/applying-to-whitman/international-students/checklist"
        }
      ]
    },
    "us_165015": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生同样适用；英语能力要求另行。",
      "sources": [
        {
          "url": "https://www.brandeis.edu/admissions/apply/test-optional-policy.html"
        },
        {
          "url": "https://www.brandeis.edu/admissions/apply/application-process/first-year.html"
        }
      ]
    },
    "us_212674": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生强烈建议提交；在家教育者建议提交。英语能力要求另行。",
      "sources": [
        {
          "url": "https://www.gettysburg.edu/admissions-aid/admissions/undergraduate/gettysburg-ready"
        },
        {
          "url": "https://gettysburg.edu/admissions-aid/admissions/international"
        },
        {
          "url": "https://gettysburg.edu/academics/catalog/policies/home-schooled-student-application-process"
        }
      ]
    },
    "us_229267": {
      "policy": "test_optional",
      "cycle": "2027年秋季入学",
      "note": "国际生同样适用；英语能力要求另行。",
      "sources": [
        {
          "url": "https://admissions.trinity.edu/register/edearlyestimate"
        },
        {
          "url": "https://trinity.edu/admissions-and-aid/guides-and-resources/guide-international-applicants"
        }
      ]
    },
    "us_110556": {
      "policy": "test_free",
      "cycle": "2027年秋季入学",
      "note": "常规录取不考虑；特殊录取及分班可能使用。在家教育课程须校方审核。",
      "sources": [
        {
          "url": "https://studentaffairs.fresnostate.edu/are/multiple-measures.html"
        },
        {
          "url": "https://www.calstate.edu/attend/student-services/Documents/csu-admission-handbook.pdf"
        },
        {
          "url": "https://www.calstate.edu/apply/Pages/Frequently-Asked-Questions.aspx"
        }
      ]
    },
    "us_110565": {
      "policy": "test_free",
      "cycle": "2027年秋季入学",
      "note": "常规录取不考虑；特殊录取及分班可能使用。在家教育课程须校方审核。",
      "sources": [
        {
          "url": "https://admissions.fullerton.edu/newly-admitted-students/transcripts.html"
        },
        {
          "url": "https://www.calstate.edu/attend/student-services/Documents/csu-admission-handbook.pdf"
        },
        {
          "url": "https://www.calstate.edu/apply/Pages/Frequently-Asked-Questions.aspx"
        }
      ]
    },
    "us_110574": {
      "policy": "test_free",
      "cycle": "2027年秋季入学",
      "note": "常规录取不考虑；特殊录取及分班可能使用。在家教育课程须校方审核。",
      "sources": [
        {
          "url": "https://www.csueastbay.edu/iao/how-to-apply/first-time-freshman/admission-requirements.html"
        },
        {
          "url": "https://www.calstate.edu/attend/student-services/Documents/csu-admission-handbook.pdf"
        },
        {
          "url": "https://www.calstate.edu/apply/Pages/Frequently-Asked-Questions.aspx"
        }
      ]
    },
    "us_110583": {
      "policy": "test_free",
      "cycle": "2027年秋季入学",
      "note": "常规录取不考虑；特殊录取及分班可能使用。在家教育课程须校方审核。",
      "sources": [
        {
          "url": "https://www.csulb.edu/admissions/first-time-first-year-student-csulb-index"
        },
        {
          "url": "https://www.calstate.edu/attend/student-services/Documents/csu-admission-handbook.pdf"
        },
        {
          "url": "https://www.calstate.edu/apply/Pages/Frequently-Asked-Questions.aspx"
        }
      ]
    },
    "us_110608": {
      "policy": "test_free",
      "cycle": "2027年秋季入学",
      "note": "常规录取不考虑；特殊录取及分班可能使用。在家教育课程须校方审核。",
      "sources": [
        {
          "url": "https://catalog.csun.edu/policies/freshman-requirements/"
        },
        {
          "url": "https://www.calstate.edu/attend/student-services/Documents/csu-admission-handbook.pdf"
        },
        {
          "url": "https://www.calstate.edu/apply/Pages/Frequently-Asked-Questions.aspx"
        }
      ]
    },
    "us_409698": {
      "policy": "test_free",
      "cycle": "2027年秋季入学",
      "note": "常规录取不考虑；特殊录取及分班可能使用。在家教育课程须校方审核。",
      "sources": [
        {
          "url": "https://csumb.edu/admissions-aid/how-to-apply/first-year/"
        },
        {
          "url": "https://www.calstate.edu/attend/student-services/Documents/csu-admission-handbook.pdf"
        },
        {
          "url": "https://www.calstate.edu/apply/Pages/Frequently-Asked-Questions.aspx"
        }
      ]
    },
    "us_164748": {
      "policy": "test_free",
      "cycle": "现行政策（未标入学年度）",
      "note": "适用于伯克利音乐学院本科；试演、作品集及英语要求另行。",
      "sources": [
        {
          "url": "https://college.berklee.edu/admissions/undergraduate/how-to-apply"
        }
      ]
    },
    "us_117946": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "适用于所有专业及国际生；英语能力要求另行。",
      "sources": [
        {
          "url": "https://admission.lmu.edu/learnmore/prospectivestudents/frequentlyaskedquestions/"
        },
        {
          "url": "https://admission.lmu.edu/apply/"
        }
      ]
    },
    "us_217882": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生同样适用；英语能力要求另行。",
      "sources": [
        {
          "url": "https://www.clemson.edu/admissions/undergraduate-admissions/apply/first-year.html"
        },
        {
          "url": "https://www.clemson.edu/admissions/undergraduate-admissions/apply/international.html"
        }
      ]
    },
    "us_145725": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生及校内奖学金同样适用。",
      "sources": [
        {
          "url": "https://www.iit.edu/admissions-aid/undergraduate-admission/first-year-students"
        },
        {
          "url": "https://www.iit.edu/admissions-aid/undergraduate-admission/first-year-students/homeschooled-applicants"
        },
        {
          "url": "https://www.iit.edu/admissions-aid/undergraduate-admission/first-year-students/illinois-tech-nrotc-preparatory-program"
        },
        {
          "url": "https://www.iit.edu/admissions-aid/undergraduate-admission/first-year-students/recommended-admission-guidelines"
        }
      ]
    },
    "us_146719": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生及在家教育者同样适用；英语能力要求另行。",
      "sources": [
        {
          "url": "https://www.luc.edu/undergrad/admissions/first-yearstudents/"
        },
        {
          "url": "https://www.luc.edu/undergrad/admissions/internationalstudents/"
        }
      ]
    },
    "us_189088": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生及在家教育者同样适用；音乐学院另需试演。",
      "sources": [
        {
          "url": "https://www.bard.edu/admission/firstyear/"
        },
        {
          "url": "https://www.bard.edu/admission/applying/homeschooled/"
        },
        {
          "url": "https://www.bard.edu/admission/applying/international/"
        },
        {
          "url": "https://www.bard.edu/admission/applying/conservatory/"
        }
      ]
    },
    "us_195304": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生英语能力要求另行。",
      "sources": [
        {
          "url": "https://www.sarahlawrence.edu/admission/apply/first-year.html"
        },
        {
          "url": "https://www.sarahlawrence.edu/admission/apply/international/index.html"
        }
      ]
    },
    "us_126818": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "提交后须另行邮件申请，学校才会考虑成绩；不用于奖学金评定。",
      "sources": [
        {
          "url": "https://admissions.colostate.edu/apply/submitting-documents/"
        },
        {
          "url": "https://admissions.colostate.edu/apply/freshmen/"
        }
      ]
    },
    "us_232186": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "计算机与工程免交须四年数学，含高于代数Ⅱ课程，且各门B及以上。",
      "sources": [
        {
          "url": "https://www.gmu.edu/freshman/requirements/score-optional"
        },
        {
          "url": "https://www.gmu.edu/freshman/requirements/homeschool"
        }
      ]
    },
    "us_217484": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生申请奖学金及六年制药学建议提交；在家教育者可选交。",
      "sources": [
        {
          "url": "https://web.uri.edu/admission/first-year/"
        },
        {
          "url": "https://web.uri.edu/admission/admission-for-home-schooled-applicants/"
        },
        {
          "url": "https://web.uri.edu/admission/international/"
        }
      ]
    },
    "us_183044": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生及在家教育者同样适用；英语能力要求另行。",
      "sources": [
        {
          "url": "https://admissions.unh.edu/apply/test-optional"
        }
      ]
    },
    "us_196088": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生及奖学金同样适用；英语能力要求另行。",
      "sources": [
        {
          "url": "https://www.buffalo.edu/admissions/apply/first-year.html"
        },
        {
          "url": "https://www.buffalo.edu/admissions/apply/first-year.standardized-tests.html"
        },
        {
          "url": "https://www.buffalo.edu/admissions/apply/first-year.other-requirements.html"
        },
        {
          "url": "https://www.buffalo.edu/admissions/apply/international/first-year.standardized-tests.html"
        }
      ]
    },
    "us_104179": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "无需提交；成绩可用于课程能力认定及分班，荣誉学院与校内奖学金也不要求。",
      "sources": [
        {
          "url": "https://www.arizona.edu/admissions/undergraduate/first-year"
        },
        {
          "url": "https://www.arizona.edu/admissions/apply/high-school-competency"
        },
        {
          "url": "https://www.arizona.edu/admissions/faq"
        },
        {
          "url": "https://www.arizona.edu/admissions/undergraduate/international"
        },
        {
          "url": "https://snre.arizona.edu/undergraduate/admissions"
        }
      ]
    },
    "us_153603": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生及在家教育者同样可选交；英语能力要求另行。",
      "sources": [
        {
          "url": "https://www.iastate.edu/admission-and-aid/admissions/first-year-students"
        },
        {
          "url": "https://www.iastate.edu/admission-and-aid/admissions/international-admissions/international-first-year-requirements"
        }
      ]
    },
    "us_204024": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生及在家教育者同样适用；总统学者奖学金须交成绩。",
      "sources": [
        {
          "url": "https://miamioh.edu/admission-aid/apply/first-year-students/college-entrance-testing.html"
        },
        {
          "url": "https://miamioh.edu/admission-aid/apply/first-year-students/test-optional-faqs.html"
        },
        {
          "url": "https://miamioh.edu/admission-aid/apply/first-year-students/home-school-curriculum.html"
        }
      ]
    },
    "us_133669": {
      "policy": "test_flexible",
      "cycle": "现行政策（未标入学年度）",
      "note": "须交SAT、ACT或CLT；指定佛州高中双学分副学士路径可免交，但无成绩不获招生办优秀奖学金。",
      "sources": [
        {
          "url": "https://www.fau.edu/admissions/freshman/how-to-apply/admissions-requirements/"
        },
        {
          "url": "https://www.fau.edu/admissions/international/"
        }
      ]
    },
    "us_225511": {
      "policy": "test_optional",
      "cycle": "2027年秋季入学",
      "note": "国际生亦可选交；部分专业有额外成绩或课程门槛，须核对直录条件。",
      "sources": [
        {
          "url": "https://uh.edu/undergraduate-admissions/resources/test-optional-admissions/index.php"
        },
        {
          "url": "https://www.uh.edu/undergraduate-admissions/apply/international/international-freshman/"
        },
        {
          "url": "https://www.uh.edu/undergraduate-admissions/resources/undergraduate-faqs/index.php"
        },
        {
          "url": "https://www.uh.edu/undergraduate-admissions/academics/_files/additional-requirements-freshman.pdf"
        }
      ]
    },
    "us_204501": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "文理学院及音乐学院可选交；音乐学院另需试演，国际生英语要求另行。",
      "sources": [
        {
          "url": "https://www.oberlin.edu/admissions-and-aid/arts-and-sciences/testing-policy"
        },
        {
          "url": "https://www.oberlin.edu/admissions-and-aid/arts-and-sciences/first-year-applicants"
        },
        {
          "url": "https://www.oberlin.edu/admissions-and-aid/conservatory/academic-requirements-and-testing"
        }
      ]
    },
    "us_239017": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "在家教育者建议交但非必交；音乐学院另需试演，国际生英语要求另行。",
      "sources": [
        {
          "url": "https://www.lawrence.edu/admissions-aid/apply/"
        },
        {
          "url": "https://www.lawrence.edu/admissions-aid/apply/homeschool/"
        },
        {
          "url": "https://inside.lawrence.edu/admissions-aid/international-admissions/admission-requirements"
        },
        {
          "url": "https://www.lawrence.edu/admissions-aid/apply/conservatory/"
        }
      ]
    },
    "us_238333": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生及在家教育者同样可选交；英语能力要求另行。",
      "sources": [
        {
          "url": "https://www.beloit.edu/admission/apply/home-schooled-applicants/"
        },
        {
          "url": "https://www.beloit.edu/admission/apply/international-applicants/requirements/"
        }
      ]
    },
    "us_146427": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "在家教育或学校不提供成绩者须交；国际生英语能力要求另行。",
      "sources": [
        {
          "url": "https://www.knox.edu/admission/apply-to-knox"
        },
        {
          "url": "https://www.knox.edu/admission/apply-to-knox/homeschooled-applicants"
        },
        {
          "url": "https://www.knox.edu/admission/apply-to-knox/international-applicants"
        },
        {
          "url": "https://www.knox.edu/admission/apply-to-knox/test-scores"
        }
      ]
    },
    "us_230816": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "提交成绩仅在有利时考虑；国际生英语能力要求另行。",
      "sources": [
        {
          "url": "https://www.bennington.edu/admissions/apply/application-requirements"
        },
        {
          "url": "https://www.bennington.edu/admissions/apply/home-schooled-students"
        },
        {
          "url": "https://www.bennington.edu/admissions/apply/applying-international-student"
        }
      ]
    },
    "us_191630": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "无传统成绩单者（含在家教育）可能被要求补交；国际生英语要求另行。",
      "sources": [
        {
          "url": "https://www2.hws.edu/admissions/apply/testing-policy.aspx"
        }
      ]
    },
    "us_136950": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生及在家教育者同样可选交；荣誉项目及奖学金亦适用。",
      "sources": [
        {
          "url": "https://www.rollins.edu/apply/test-optional-admission/"
        },
        {
          "url": "https://www.rollins.edu/apply/international/"
        }
      ]
    },
    "us_221519": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "在家教育者可选交；田纳西州HOPE奖学金另有资格条件，国际生英语要求另行。",
      "sources": [
        {
          "url": "https://new.sewanee.edu/admission-aid/application-process/application-review/first-year-applicants/frequently-asked-questions/"
        },
        {
          "url": "https://new.sewanee.edu/admission-aid/application-process/application-review/homeschool-applicants/"
        }
      ]
    },
    "us_100663": {
      "policy": "test_optional",
      "cycle": "2027年秋季入学",
      "note": "2027高中毕业生及2026毕业后未入大学者，加权GPA≥3.5可免交；低于3.5须交。医、牙、视光提前录取须交，荣誉及提前升研项目另有要求。",
      "sources": [
        {
          "url": "https://www.uab.edu/admissions/apply/test-optional"
        },
        {
          "url": "https://www.uab.edu/admissions/apply/freshman/how-to-apply"
        }
      ]
    },
    "us_163268": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生及在家教育者同样可选交；各专业、荣誉学院及奖学金亦适用，英语要求另行。",
      "sources": [
        {
          "url": "https://umbc.edu/admissions/undergraduate/support-and-contact-information/"
        },
        {
          "url": "https://umbc.edu/admissions/undergraduate/international/first-year-international/"
        }
      ]
    },
    "us_166638": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生亦可选交；所有本科专业、荣誉学院及奖学金均可无成绩申请，英语要求另行。",
      "sources": [
        {
          "url": "https://www.umb.edu/admissions/first-year-students/apply/test-optional-admission/"
        }
      ]
    },
    "us_207500": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "在家教育者按同一标准审核；部分奖学金须交，无成绩入学前需分班测评，国际生英语要求另行。",
      "sources": [
        {
          "url": "https://www.ou.edu/admissions/apply/freshman/requirements-factors/ou-is-test-optional"
        },
        {
          "url": "https://www.ou.edu/admissions/apply/freshman/homeschool"
        },
        {
          "url": "https://www.ou.edu/admissions/apply/international/undergraduate-admission"
        }
      ]
    },
    "us_202480": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "奖学金评审亦可免交；已参加考试者确认入学后需交作记录，国际生英语要求另行。",
      "sources": [
        {
          "url": "https://udayton.edu/apply/undergraduate/resources/test-optional.php"
        },
        {
          "url": "https://catalog.udayton.edu/undergraduate/generalinformation/admission/applicationforadmission/"
        }
      ]
    },
    "us_206622": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生亦可选交；在家教育须提供AP、大学课程或SAT/ACT之一；LECOM提前录取须交。",
      "sources": [
        {
          "url": "https://www.xavier.edu/undergraduate-admission/admission-process/test-optional"
        },
        {
          "url": "https://www.xavier.edu/undergraduate-admission/admission-process/home-school-students"
        },
        {
          "url": "https://www.xavier.edu/international-admission/applications-and-requirements/freshman"
        }
      ]
    },
    "us_194310": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生及在家教育者可选交，荣誉学院亦适用；表演艺术另需试演或面试，英语要求另行。",
      "sources": [
        {
          "url": "https://www.pace.edu/admission-and-aid/undergraduate-admission/how-apply/test-optional-policy"
        },
        {
          "url": "https://www.pace.edu/admission-and-aid/undergraduate-admission/how-apply/homeschool-applicants"
        },
        {
          "url": "https://www.pace.edu/admission-and-aid/undergraduate-admission/how-apply/direct"
        },
        {
          "url": "https://www.pace.edu/admission-and-aid/undergraduate-admission/how-apply/program-specific-requirements"
        }
      ]
    },
    "us_170301": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生英语要求另行；录取后成绩可用于奖学金评审，仅在有利时采用。",
      "sources": [
        {
          "url": "https://hope.edu/admissions/apply.html"
        }
      ]
    },
    "us_170532": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生及在家教育者同样可选交；英语能力要求另行。",
      "sources": [
        {
          "url": "https://admission.kzoo.edu/how-to-apply-2/test-optional/"
        }
      ]
    },
    "us_168281": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生及在家教育者同样可选交；奖学金及助学金评审亦不要求，英语要求另行。",
      "sources": [
        {
          "url": "https://www.wheatoncollege.edu/admission/apply/homeschooled-students/"
        },
        {
          "url": "https://www.wheatoncollege.edu/admission/international-students/international-faq/"
        }
      ]
    },
    "us_161253": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "所有专业均可选交；国际生英语要求另行，SAT/ACT可作为部分英语豁免依据。",
      "sources": [
        {
          "url": "https://umaine.edu/admissions/apply/apply-info/"
        },
        {
          "url": "https://umaine.edu/admissions/apply/international-undergraduate-admissions/"
        },
        {
          "url": "https://umaine.edu/international/frequently-asked-questions-for-h1b-applicants/"
        }
      ]
    },
    "us_238032": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "在家教育者可选交；部分专业及奖学金仍须成绩，国际生英语要求另行。",
      "sources": [
        {
          "url": "https://www.wvu.edu/admissions/undergraduate/how-to-apply/first-time-freshmen/admission-requirements/"
        },
        {
          "url": "https://catalog.wvu.edu/undergraduate/admission/"
        }
      ]
    },
    "us_132903": {
      "policy": "test_flexible",
      "cycle": "现行政策（未标入学年度）",
      "note": "本科直录须交SAT、ACT或CLT；指定国际衔接项目可先申请、到校考ACT；佛州高中同步AA另有录取路径。",
      "sources": [
        {
          "url": "https://www.ucf.edu/admissions/undergraduate/question/does-ucf-require-standardized-tests-2/"
        },
        {
          "url": "https://global.ucf.edu/programs/"
        },
        {
          "url": "https://www.ucf.edu/admissions/undergraduate/resources/ftic-decisions/"
        },
        {
          "url": "https://www.ucf.edu/admissions/undergraduate/question/who-can-apply-to-ucf-using-the-common-application/"
        }
      ]
    },
    "us_131283": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生及在家教育者同样可选交，荣誉项目及奖学金亦适用；入学后仍须交分数用于学业评估，英语要求另行。",
      "sources": [
        {
          "url": "https://www.catholic.edu/admission-aid/undergraduate-admission/first-year-students/application-process"
        }
      ]
    },
    "us_140951": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "不交成绩不影响录取或奖学金评审；在家教育可用学术作品档案补充，国际生英语要求另行。",
      "sources": [
        {
          "url": "https://www.scad.edu/admission/admission-information/frequently-asked-questions"
        },
        {
          "url": "https://www.scad.edu/admission/admission-information/freshman/home-school-applicants"
        },
        {
          "url": "https://www.scad.edu/admission/admission-information/international"
        }
      ]
    },
    "us_163976": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "在家教育者建议交SAT、ACT或CLT，也可改用面试；国际生SAT/ACT可选，英语证明或面试要求另行。",
      "sources": [
        {
          "url": "https://www.sjc.edu/admissions-and-aid/undergraduate/apply/homeschooled-applicants"
        },
        {
          "url": "https://www.sjc.edu/admissions-and-aid/undergraduate/apply/international-students"
        }
      ]
    },
    "us_245652": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "在家教育者建议交SAT、ACT或CLT，也可改用面试；国际生SAT/ACT可选，英语证明或面试要求另行。",
      "sources": [
        {
          "url": "https://www.sjc.edu/admissions-and-aid/undergraduate/apply/homeschooled-applicants"
        },
        {
          "url": "https://www.sjc.edu/admissions-and-aid/undergraduate/apply/international-students"
        }
      ]
    },
    "us_155399": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "GPA≥3.25可免交达直接录取标准，未达者可个案审核；在家教育通常须交，也接受GED/HiSET审核；部分专业及奖学金另有要求。",
      "sources": [
        {
          "url": "https://www.k-state.edu/admissions/undergrad/manhattan/apply/incoming-freshmen/requirements.html"
        },
        {
          "url": "https://www.k-state.edu/admissions/undergrad/manhattan/apply/international/requirements.html"
        },
        {
          "url": "https://apdesign.k-state.edu/academics/admissions/"
        }
      ]
    },
    "us_142285": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "GPA≥3.0通常免交；2.60–2.99须交或选择Gateway路径，在家教育及GED申请须交；国际生英语要求另行。",
      "sources": [
        {
          "url": "https://www.uidaho.edu/admissions-apply/first-year-students"
        },
        {
          "url": "https://www.uidaho.edu/international/admissions"
        }
      ]
    },
    "us_141574": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "不利成绩不纳入评审；无认可学历的在家教育者须交SAT/ACT或高中同等学历考试，部分专业及国际生英语要求另行。",
      "sources": [
        {
          "url": "https://manoa.hawaii.edu/admissions/freshman/"
        },
        {
          "url": "https://manoa.hawaii.edu/admissions/international/"
        },
        {
          "url": "https://shidler.hawaii.edu/freshman-dap"
        }
      ]
    },
    "us_176017": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "州外GPA≥3.2可免交，低于3.2强烈建议交；在家教育及非认证高中须交，州内按GPA等路径录取；国际学历与英语要求另行。",
      "sources": [
        {
          "url": "https://olemiss.edu/admissions/undergraduate-admissions/"
        },
        {
          "url": "https://olemiss.edu/admissions/undergraduate-admissions/application-process/international-students/"
        }
      ]
    },
    "us_176080": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "在家教育者须交；国际生GPA低于3.0或申请奖学金须交，英语要求另行；无成绩者需综合审核或分班测评。",
      "sources": [
        {
          "url": "https://www.admissions.msstate.edu/apply/admission-process/freshman-admissions"
        },
        {
          "url": "https://www.admissions.msstate.edu/apply/admission-process/international"
        }
      ]
    },
    "us_228459": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "班级排名前75%可免交，后25%须达必需分数；在家教育及GED由学校赋予排名，国际生英语要求另行。",
      "sources": [
        {
          "url": "https://www.admissions.txst.edu/future-students/freshman/admission-requirements.html"
        },
        {
          "url": "https://www.admissions.txst.edu/contact/faq.html"
        },
        {
          "url": "https://www.admissions.txst.edu/future-students/international/admissions-requirements.html"
        }
      ]
    },
    "us_190372": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "艺术及建筑学院可选交，工程学院须交；国际生同样适用，特殊困难可申请豁免，获批不保证。",
      "sources": [
        {
          "url": "https://cooper.edu/admissions/standardized-test-requirements"
        },
        {
          "url": "https://cooper.edu/admissions/applying-to-cu/high-school-graduation-requirements/homeschool-appl"
        }
      ]
    },
    "us_211893": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "音乐学士SAT可选；申请阶段不要求SAT/ACT，录取后可用于分班；国际生英语及学位资格要求另行。",
      "sources": [
        {
          "url": "https://www.curtis.edu/apply/faq/"
        },
        {
          "url": "https://www.curtis.edu/apply/applying/"
        },
        {
          "url": "https://www.curtis.edu/learn/degrees-diplomas/"
        }
      ]
    },
    "us_199139": {
      "policy": "test_optional",
      "cycle": "2027年秋季入学",
      "note": "2027秋季：加权GPA高于2.8可免交，≤2.8须交SAT/ACT，CLT不能替代必交要求；国际生英语及专业补充材料另行。",
      "sources": [
        {
          "url": "https://admissions.charlotte.edu/apply/first-year-students/application-requirements/"
        },
        {
          "url": "https://admissions.charlotte.edu/apply/international-students/first-year-admission/"
        }
      ]
    },
    "us_168005": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "美国本土申请者可选交；在家教育者须交。国际生按语言背景可用英语考试或其他认可考试替代，另有豁免规则。",
      "sources": [
        {
          "url": "https://www.suffolk.edu/undergraduate-admission/information-for/freshman"
        },
        {
          "url": "https://www.suffolk.edu/admission/international-students/attending-suffolk/apply"
        }
      ]
    },
    "us_169983": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生及在家教育者同样可选交；国际生英语证明另行。",
      "sources": [
        {
          "url": "https://catalog.kettering.edu/undergrad/admissions/"
        },
        {
          "url": "https://www.kettering.edu/admissions-aid/international-students"
        }
      ]
    },
    "us_172699": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "录取及招生办公室奖学金可选交；国际生英语要求另行，成绩亦可用于数学分班及荣誉学院邀请。",
      "sources": [
        {
          "url": "https://wmich.edu/admissions/first-year-apply/criteria"
        },
        {
          "url": "https://wmich.edu/international"
        }
      ]
    },
    "us_174233": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "在家教育者建议提交；国际生须满足英语要求，入学后成绩可用于分班。",
      "sources": [
        {
          "url": "https://admissions.d.umn.edu/apply/test-optional"
        },
        {
          "url": "https://admissions.d.umn.edu/apply/international"
        }
      ]
    },
    "us_178411": {
      "policy": "test_optional",
      "cycle": "2027年秋季入学",
      "note": "2027秋季可选交；在家教育及GED/HiSET申请者须交。不交须完成短文并接受综合审核，奖学金及荣誉机会可能受限。",
      "sources": [
        {
          "url": "https://futurestudents.mst.edu/admissions/counselors-teachers-advisors/admissions-requirements/"
        }
      ]
    },
    "us_179566": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "一般申请者GPA≥3.0可免交，低于3.0须交；在家教育按新生标准审核。国际生免交，但成绩可帮助申请奖学金。",
      "sources": [
        {
          "url": "https://www.missouristate.edu/Admissions/act-sat-common-questions.htm"
        },
        {
          "url": "https://www.missouristate.edu/admissions/homeschooled.htm"
        },
        {
          "url": "https://www.missouristate.edu/Policy/Chapter5/Op5_01_6_AdmissionPolicyforHomeschooledStudents.htm"
        },
        {
          "url": "https://www.missouristate.edu/InternationalServices/intlfreshapp.htm"
        }
      ]
    },
    "us_182281": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "满足核心课程GPA等免考录取路径可不交；国际生同样不强制，成绩可用于其他录取路径及分班。",
      "sources": [
        {
          "url": "https://www.unlv.edu/admissions/undergraduate/first-year"
        },
        {
          "url": "https://www.unlv.edu/admissions/international/undergraduate"
        }
      ]
    },
    "us_182290": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "录取可选交；多数本土新生奖学金须交，国际生录取及奖学金不强制，英语要求另行。",
      "sources": [
        {
          "url": "https://www.unr.edu/admissions/freshman"
        },
        {
          "url": "https://www.unr.edu/admissions/international/undergraduate"
        }
      ]
    },
    "us_187985": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "在家教育及非认证高中可凭正式成绩单审核；成绩可能有帮助，国际生学历及英语要求另行。",
      "sources": [
        {
          "url": "https://admissions.unm.edu/future-students/freshmen/admission-requirements.html"
        },
        {
          "url": "https://international.unm.edu/misc/application-timeline-and-steps.html"
        },
        {
          "url": "https://international.unm.edu/undergraduate/admissions-requirements-by-home-country.html"
        }
      ]
    },
    "us_188030": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "可按GPA或其他合格路径免交，在家教育按常规标准审核；国际生GPA门槛另定，成绩有助奖学金及分班。",
      "sources": [
        {
          "url": "https://admissions.nmsu.edu/how-to-apply/first-time-freshmen/"
        },
        {
          "url": "https://admissions.nmsu.edu/how-to-apply/international/index.html"
        }
      ]
    },
    "us_198695": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "国际生及在家教育者同样可选交，学术奖学金不强制；英语证明及招募运动员的额外材料另行。",
      "sources": [
        {
          "url": "https://www.highpoint.edu/admissions/test-optional/"
        },
        {
          "url": "https://www.highpoint.edu/admissions/homeschooled-students/"
        },
        {
          "url": "https://www.highpoint.edu/admissions/international-admissions/"
        }
      ]
    },
    "us_200800": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "非特许高中及Williams荣誉学院须交；高中毕业超过两年者不要求也不考虑。国际生英语及入学分班要求另行。",
      "sources": [
        {
          "url": "https://www.uakron.edu/test-optional"
        },
        {
          "url": "https://www.uakron.edu/international/apply/"
        }
      ]
    },
    "us_201441": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "一般申请者可选交，荣誉学院也接受免交申请；在家教育等替代中学路径须交，部分院系奖学金及国际生英语要求另行。",
      "sources": [
        {
          "url": "https://www.bgsu.edu/content/bgsu/en/admissions/test-optional.html"
        },
        {
          "url": "https://www.bgsu.edu/admissions/apply-now/freshmen"
        },
        {
          "url": "https://www.bgsu.edu/admissions/international/undergraduate/admission-requirements.html"
        }
      ]
    },
    "us_209807": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "一般申请者可选交；在家教育及非标准高中须走SAT/ACT、高中同等学历考试或转学路径，国际生英语要求另行。",
      "sources": [
        {
          "url": "https://www.pdx.edu/admissions/first-year"
        },
        {
          "url": "https://www.pdx.edu/admissions/international/first-year"
        }
      ]
    },
    "us_218973": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "本土申请者录取及择优奖学金可选交；英语国家国际生须交SAT/ACT，非英语母语者另须英语证明，校内奖学金面试须交。",
      "sources": [
        {
          "url": "https://www.wofford.edu/admission/apply/test-optional-information"
        },
        {
          "url": "https://www.wofford.edu/admission/apply/international-applicants"
        }
      ]
    },
    "us_219471": {
      "policy": "test_optional",
      "cycle": "现行政策（未标入学年度）",
      "note": "可按GPA、排名等路径免交；在家教育可凭认可课程成绩审核。国际生GPA≥2.6或达考试标准，并须满足英语要求。",
      "sources": [
        {
          "url": "https://www.usd.edu/Admissions-and-Aid/Undergraduate-Admissions/How-to-Apply"
        },
        {
          "url": "https://usd.edu/Admissions-and-Aid/International-Admissions/Applying-for-International-Undergraduate-Admission"
        }
      ]
    },
    "us_224323": {
      "policy": "test_flexible",
      "cycle": "现行政策（未标入学年度）",
      "note": "须提交SAT、ACT或CLT之一，国际生及在家教育者同样适用；国际生另须满足英语要求。",
      "sources": [
        {
          "url": "https://udallas.edu/admissions-aid/undergraduate/admission-requirements.php"
        },
        {
          "url": "https://udallas.edu/admissions-aid/undergraduate/international-students/"
        }
      ]
    },
    "us_227368": {
      "policy": "test_optional",
      "cycle": "2027年秋季入学",
      "note": "2026–27申请季可选交；工程及生物医学项目、Tuition Advantage和奖学金须交，ACT考生须含科学部分；国际生英语要求另行。",
      "sources": [
        {
          "url": "https://www.utrgv.edu/admissions/freshman/index.htm"
        },
        {
          "url": "https://www.utrgv.edu/admissions/international/undergraduate-international-admissions/index.htm"
        }
      ]
    },
    "us_240453": {
      "policy": "test_optional",
      "cycle": "2027年秋季入学",
      "note": "2027秋季可选交；国际生成绩亦可用于分班及奖学金，英语证明另行；在家教育的保证录取另有门槛。",
      "sources": [
        {
          "url": "https://international.uwyo.edu/student-resources/"
        },
        {
          "url": "https://international.uwyo.edu/before-you-start/"
        },
        {
          "url": "https://www.wisconsin.edu/undergraduate-admission-resources/"
        }
      ]
    },
    "us_240727": {
      "policy": "test_optional",
      "cycle": "2027年秋季入学",
      "note": "2027秋季可选交，官网政策延续至2029春季；成绩有助提高资助。在家教育按新生标准审核，未满21岁的GED等替代学历申请者须交。",
      "sources": [
        {
          "url": "https://www.uwyo.edu/admissions/freshman/index.html"
        },
        {
          "url": "https://www.uwyo.edu/admissions/apply.html"
        },
        {
          "url": "https://www.uwyo.edu/admissions/freshman/admission-with-support.html"
        },
        {
          "url": "https://www.uwyo.edu/registrar/_files/docs/catalog/2526.pdf"
        }
      ]
    }
  },
  "rankings": {
    "jhu": [
      {
        "name_cn": "生物医学工程",
        "rank": 1,
        "system": "U.S. News 本科专业排名",
        "year": "2026年9月发布",
        "sources": [
          {
            "url": "https://www.bme.jhu.edu/news-events/news/hopkins-bme-undergrad-program-again-ranks-1-in-the-nation/"
          }
        ]
      }
    ]
  },
  "scores": {
    "penn": {
      "act_25": 34,
      "act_75": 35,
      "sat_25": null,
      "sat_75": null,
      "year": "2025年秋季入学新生（CDS 2025–26）",
      "note": "该来源未列 SAT 总分区间；阅读与写作 740–770、数学 770–800。分项分位数不能相加当作总分区间。",
      "sources": [
        {
          "url": "https://upenn.app.box.com/s/woo7d85yxpol6j9e2o121aucjc6dc1k5"
        }
      ]
    }
  },
  "programs": {
    "stanford": {
      "symbolic_systems": {
        "text": "符号系统为 B.S. 本科专业，须完成核心课程及五门课程组成的集中方向；适用要求按声明专业获批时或其后的有效版本确定，2027入学生应核对届时目录。",
        "sources": [
          {
            "url": "https://symsys.stanford.edu/undergraduates/major-policies-requirements",
            "year": "官网现行政策（未单独标注2027–28学年）；2026-10-16核查"
          }
        ],
        "checked": "2026-10-16"
      }
    },
    "duke": {
      "public_policy": {
        "text": "公共政策本科专业须完成至少300小时、事先获批准的实习；通常安排在大二或大三之后暑期。2026秋及以后入学生的实习先修课规则另列，须核对当届要求。",
        "sources": [
          {
            "url": "https://sanford.duke.edu/academics/undergraduate-program/current-students/internship-requirements/",
            "year": "官网现行政策（未单独标注2027–28学年）；2026-10-16核查"
          }
        ],
        "checked": "2026-10-16"
      }
    },
    "northwestern": {
      "journalism": {
        "text": "Medill 新闻本科的 Journalism Residency 为可选的一学季实践，与专业媒体机构合作；有教师指导，具体地点及出行安排可能调整。",
        "sources": [
          {
            "url": "https://www.medill.northwestern.edu/journalism/undergraduate-journalism/exclusive-opportunities/journalism-residency.html",
            "year": "官网现行政策（未单独标注2027–28学年）；2026-10-16核查"
          }
        ],
        "checked": "2026-10-16"
      }
    },
    "vanderbilt": {
      "human_organizational_development": {
        "text": "人类与组织发展为 B.S. 本科专业；结合心理学、组织研究及社会科学，并在大三或大四完成一学期的组织实践 capstone。",
        "sources": [
          {
            "url": "https://peabody.vanderbilt.edu/academics/undergraduate-majors/human-organizational-development/",
            "year": "官网现行政策（未单独标注2027–28学年）；2026-10-16核查"
          }
        ],
        "checked": "2026-10-16"
      }
    }
  }
};
