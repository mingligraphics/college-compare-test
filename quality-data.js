/* Public test-site facts; evidence and review records are retained privately. */
const QualityData = {
  "aid": {
    "penn": {
      "need": {
        "text": "可申请；须在申请入学时同时申请资助，录取后满足经认定的经济需求。",
        "sources": [
          {
            "url": "https://admissions.upenn.edu/affording-penn/international-aid"
          }
        ],
        "checked": "2026-10-15"
      },
      "review": {
        "text": "Need-aware：家庭支付能力会影响录取；美国、加拿大、墨西哥公民及永久居民适用不同政策。",
        "sources": [
          {
            "url": "https://admissions.upenn.edu/affording-penn/international-aid"
          }
        ],
        "checked": "2026-10-15"
      },
      "merit": {
        "text": "不提供校方 merit-based 奖学金；Penn 本科资助按经济需求发放。",
        "sources": [
          {
            "url": "https://admissions.upenn.edu/affording-penn/financial-aid"
          }
        ],
        "checked": "2026-10-15"
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
        "text": "可申请；满足所有录取国际生经认定的经济需求。",
        "sources": [
          {
            "url": "https://admission.princeton.edu/apply/international-students"
          }
        ],
        "checked": "2026-10-15"
      },
      "review": {
        "text": "Need-blind：申请助学金不会影响录取。",
        "sources": [
          {
            "url": "https://admission.princeton.edu/apply/international-students"
          }
        ],
        "checked": "2026-10-15"
      },
      "merit": {
        "text": "不提供学术或体育 merit 奖学金。",
        "sources": [
          {
            "url": "https://admission.princeton.edu/apply/international-students"
          }
        ],
        "checked": "2026-10-15"
      }
    },
    "mit": {
      "need": {
        "text": "可申请；满足经认定的全部经济需求，需提交 CSS Profile 与家庭收入材料。",
        "sources": [
          {
            "url": "https://sfs.mit.edu/undergraduate-students/apply-for-aid/international/"
          }
        ],
        "checked": "2026-10-15"
      },
      "review": {
        "text": "Need-blind：包括国际本科申请人，支付能力不影响录取。",
        "sources": [
          {
            "url": "https://sfs.mit.edu/undergraduate-students/the-cost-of-attendance/making-mit-affordable/"
          }
        ],
        "checked": "2026-10-15"
      },
      "merit": {
        "text": "不提供校方 merit 奖学金；MIT 资助仅按经济需求发放。",
        "sources": [
          {
            "url": "https://sfs.mit.edu/undergraduate-students/types-of-aid/outside-scholarships-grants/"
          }
        ],
        "checked": "2026-10-15"
      }
    },
    "harvard": {
      "need": {
        "text": "国际本科新生可申请；满足录取学生经认定的全部经济需求。",
        "sources": [
          {
            "url": "https://college.harvard.edu/financial-aid/how-aid-works"
          }
        ],
        "checked": "2026-10-15"
      },
      "review": {
        "text": "Need-blind：国际本科新生的支付能力不影响录取。",
        "sources": [
          {
            "url": "https://college.harvard.edu/financial-aid/how-aid-works"
          }
        ],
        "checked": "2026-10-15"
      },
      "merit": {
        "text": "不提供校方 merit-based 奖学金；资助以经济需求为依据。",
        "sources": [
          {
            "url": "https://college.harvard.edu/resources/faq/are-there-any-merit-based-financial-aid-awards-harvard"
          }
        ],
        "checked": "2026-10-15"
      }
    },
    "yale": {
      "need": {
        "text": "国际本科新生可申请；满足录取学生经认定的全部经济需求。",
        "sources": [
          {
            "url": "https://admissions.yale.edu/international"
          }
        ],
        "checked": "2026-10-15"
      },
      "review": {
        "text": "Need-blind：国际本科新生的支付能力不影响录取。",
        "sources": [
          {
            "url": "https://admissions.yale.edu/international"
          }
        ],
        "checked": "2026-10-15"
      },
      "merit": {
        "text": "不提供校方 merit-based 奖学金；外部机构奖学金另行申请。",
        "sources": [
          {
            "url": "https://finaid.yale.edu/outsideresources"
          }
        ],
        "checked": "2026-10-15"
      }
    },
    "brown": {
      "need": {
        "text": "国际本科新生可申请；满足录取学生经认定的全部经济需求。须在入学申请时申请资助。",
        "sources": [
          {
            "url": "https://admission.brown.edu/international/financial-aid"
          }
        ],
        "checked": "2026-10-15"
      },
      "review": {
        "text": "Need-blind：国际本科新生的支付能力不影响录取。从2025年秋季入学的Class of 2029起适用；转学生政策不同。",
        "sources": [
          {
            "url": "https://admission.brown.edu/international/financial-aid"
          }
        ],
        "checked": "2026-10-15"
      },
      "merit": {
        "text": "不提供校方 merit-based 奖学金；资助以经济需求为依据。",
        "sources": [
          {
            "url": "https://finaid.brown.edu/aid-types/grants-scholarships"
          }
        ],
        "checked": "2026-10-15"
      }
    },
    "dartmouth": {
      "need": {
        "text": "国际本科新生可申请；满足录取学生经认定的全部经济需求。",
        "sources": [
          {
            "url": "https://admissions.dartmouth.edu/affordability-dartmouth"
          }
        ],
        "checked": "2026-10-15"
      },
      "review": {
        "text": "Need-blind：国际本科新生的支付能力不影响录取。",
        "sources": [
          {
            "url": "https://admissions.dartmouth.edu/affordability-dartmouth"
          }
        ],
        "checked": "2026-10-15"
      },
      "merit": {
        "text": "不提供校方 merit-based 奖学金；资助以经济需求为依据。",
        "sources": [
          {
            "url": "https://admissions.dartmouth.edu/estimate-your-cost/types-financial-aid"
          }
        ],
        "checked": "2026-10-15"
      }
    },
    "stanford": {
      "need": {
        "text": "可申请；须在入学申请时表明申请资助。对录取且已申请资助者满足经学校认定的全部经济需求；入学申请时声明不申请资助的国际生，通常四年内不能补申（身份改变并取得联邦资助资格者另论）。 2027–28国际新生资助材料页已发布：REA优先提交日为11月15日，RD为2月15日。",
        "sources": [
          {
            "url": "https://admission.stanford.edu/apply/international/",
            "year": "官网现行政策（未单独标注2027–28学年）；2026-10-16核查"
          },
          {
            "url": "https://financialaid.stanford.edu/undergrad/apply/requirements/rea_international.html",
            "year": "2027–28资助学年／2027秋入学；2026-10-16核查"
          },
          {
            "url": "https://financialaid.stanford.edu/undergrad/apply/requirements/rd_international.html",
            "year": "2027–28资助学年／2027秋入学；2026-10-16核查"
          }
        ],
        "checked": "2026-10-16"
      },
      "review": {
        "text": "Need-aware：国际公民申请资助会影响录取评估。美国公民、永久居民、无证学生及符合资格的非公民适用校方另列政策。",
        "sources": [
          {
            "url": "https://admission.stanford.edu/apply/international/",
            "year": "官网现行政策（未单独标注2027–28学年）；2026-10-16核查"
          }
        ],
        "checked": "2026-10-16"
      },
      "merit": {
        "text": "除少量体育奖学金外，不提供 merit 奖学金；普通本科助学金依据家庭经济需求。",
        "sources": [
          {
            "url": "https://admission.stanford.edu/apply/international/",
            "year": "官网现行政策（未单独标注2027–28学年）；2026-10-16核查"
          }
        ],
        "checked": "2026-10-16"
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
        "text": "国际新生可申请有限名额的 need-based aid；须在申请入学时表明需要资助，并在首年申请且获得资助，之后每年重新申请。获资助者满足经认定的全部需求；国际转学生不适用。",
        "sources": [
          {
            "url": "https://undergradaid.northwestern.edu/help-support/international-students/",
            "year": "官网现行政策（未单独标注2027–28学年）；2026-10-16核查"
          }
        ],
        "checked": "2026-10-16"
      },
      "review": {
        "text": "Need-aware：申请资助及所需金额均可能影响国际生录取决定。",
        "sources": [
          {
            "url": "https://undergradaid.northwestern.edu/help-support/international-students/",
            "year": "官网现行政策（未单独标注2027–28学年）；2026-10-16核查"
          }
        ],
        "checked": "2026-10-16"
      },
      "merit": {
        "text": "一般学术 merit 奖学金不提供；Bienen 音乐学院 Bachelor of Music 申请人可凭优秀试演／面试竞争音乐 merit 奖学金，无额外奖学金申请；国际申请人的 merit 评选流程相同。不是面向全校专业的普遍奖项。",
        "sources": [
          {
            "url": "https://undergradaid.northwestern.edu/faqs/eligibility-aid-applications/",
            "year": "官网现行政策（未单独标注2027–28学年）；2026-10-16核查"
          },
          {
            "url": "https://www.music.northwestern.edu/admission/undergraduate/financial-aid",
            "year": "官网现行政策（未单独标注2027–28学年）；2026-10-16核查"
          },
          {
            "url": "https://www.music.northwestern.edu/admission/undergraduate/faq",
            "year": "官网现行政策（未单独标注2027–28学年）；2026-10-16核查"
          }
        ],
        "checked": "2026-10-16"
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
    "penn": [
      {
        "name_cn": "沃顿 · 本科商科",
        "rank": 1,
        "system": "Poets&Quants",
        "year": "2026",
        "sources": [
          {
            "url": "https://poetsandquantsforundergrads.com/news/best-undergraduate-business-schools-of-2026/"
          }
        ]
      }
    ],
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
