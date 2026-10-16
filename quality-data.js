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
