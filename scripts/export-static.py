"""Read-only export from existing public test endpoints. Run before build; never writes DB."""
import json, urllib.request, pathlib, hashlib, datetime, gzip
ROOT=pathlib.Path(__file__).resolve().parents[1]
BASE='https://hmnoqybdcfwqbjhorwzd.supabase.co/functions/v1/'
FIELDS=['school_id', 'school_name', 'school_name_cn', 'short_name', 'institution_control', 'school_type', 'city', 'city_cn', 'state', 'state_cn', 'tuition_fees', 'tuition_fees_year', 'coa', 'coa_year', 'undergrad_enrollment', 'undergrad_enrollment_year', 'applicants', 'admitted', 'first_year_enrollment', 'acceptance_rate', 'admissions_year', 'sat_25', 'sat_75', 'act_25', 'act_75', 'test_policy', 'test_policy_cycle', 'international_pct', 'international_pct_year', 'international_pct_scope', 'graduation_rate_4yr', 'graduation_rate_4yr_year', 'international_need_aid', 'international_merit_aid', 'english_proficiency_policy', 'english_tests_accepted', 'english_policy_cycle', 'ranking_usnews', 'ranking_category', 'ranking_year', 'region', 'location_cn', 'ranking_tier', 'campus_type', 'campus_description', 'campus_description_cn', 'famous_majors', 'famous_majors_cn', 'career_model', 'career_model_cn', 'notable_alumni', 'gpa_unweighted_25', 'gpa_unweighted_75', 'gpa_scale_definition', 'gpa_population', 'gpa_year', 'signature_programs']
PROGRAM_FIELDS={'reason','name_cn','name_en','sources','program_key','evidence_category','application_note','ranking','ranking_year','ranking_source','rank','rank_display','ranking_category','selection_basis'}
def request(endpoint, body):
    req=urllib.request.Request(BASE+endpoint,data=json.dumps(body).encode(),headers={'Content-Type':'application/json'})
    with urllib.request.urlopen(req,timeout=45) as response: return json.load(response)
def clean(row):
    if set(row)!=set(FIELDS): raise ValueError('Public detail schema changed; review allowlist before export')
    result={key:row[key] for key in FIELDS}
    for program in result.get('signature_programs') or []:
        if set(program)-PROGRAM_FIELDS: raise ValueError('Unreviewed program fields: '+str(set(program)-PROGRAM_FIELDS))
        for source in program.get('sources') or []:
            if set(source)-{'url','year','title','publisher','accessed_at'}: raise ValueError('Unreviewed source fields')
    return result
def main():
    directory=request('discover-schools-test',{})
    ids=[row['school_id'] for row in directory]
    assert len(ids)==301 and len(set(ids))==301
    rows={}
    for i in range(0,len(ids),2):
        a,b=ids[i],ids[(i+1)%len(ids)]
        batch=request('compare-schools-basic-v2',{'schoolA':a,'schoolB':b})
        assert [row['school_id'] for row in batch]==[a,b]
        for row in batch: rows[row['school_id']]=clean(row)
    assert set(rows)==set(ids)
    for row in directory:
        assert all(rows[row['school_id']][k]==v for k,v in row.items()), 'Directory/detail mismatch'
    payload={'schema':1,'count':301,'exportedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'directory':directory,'details':[rows[id] for id in ids]}
    raw=json.dumps(payload,ensure_ascii=False,separators=(',',':')).encode()
    digest=hashlib.sha256(raw).hexdigest()
    filename='schools-'+digest[:16]+'.json'
    target=ROOT/'data';target.mkdir(exist_ok=True)
    (target/filename).write_bytes(raw)
    (ROOT/'snapshot-config.js').write_text('const CollegeSnapshot = Object.freeze('+json.dumps({'schema':1,'count':301,'url':'data/'+filename,'sha256':digest,'detailFields':FIELDS})+');\n')
    print(json.dumps({'count':301,'bytes':len(raw),'gzipBytes':len(gzip.compress(raw)),'file':filename}))
if __name__=='__main__': main()
