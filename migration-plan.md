# Migration Plan — Phase 4

**Date:** 2026-07-05
**Principle:** Zero destructive changes. Every step has rollback.

---

## Migration Order

1. Documentation first (no agent changes)
2. Scorecard system (no agent changes)
3. Agent renaming (minimal risk)
4. New agent creation (additive only)
5. Workflow enforcement (process change)
6. Routines/automations (new capabilities)

---

## Step 1: Create Documentation Structure

**Current:**
```
/ (root)
  80+ .md files scattered
  reports/, qa/, review/, content-requests/ (partial)
```

**New:**
```
/pos/
  templates/          (13 template files)
  workflows/          (pipeline diagrams)
  architecture/       (this system's docs)
  scorecards/         (completed scorecards)
  decisions/          (decision log)
  retrospectives/     (weekly retros)
```

**Reason:** Organize docs without moving existing files.
**Risk:** None — creates new folders only.
**Rollback:** Delete /pos/ folder.

---

## Step 2: Create Scorecard System

**Current:** No scoring.
**New:** scorecard.md template + scoring rubric.

**Reason:** Establishes objective prioritization before creating agents.
**Risk:** None — template only.
**Rollback:** Delete template.

---

## Step 3: Rename Existing Agents

| Current | New | Reason | Risk | Rollback |
|---------|-----|--------|------|----------|
| Likhit CEO (bce06f6d) | Orchestrator | Capability-based naming | Low — status already error | Rename back |
| CTO (f1d3b529) | Engineering Lead | Maps to capability 08 | Low — idle | Rename back |
| Likhit CEO 2 (578b0ebe) | Research Coordinator | Maps to intelligence layer | Low — idle | Rename back |

**Rollback:** `paperclipai agent update <id> --name "Old Name"`

---

## Step 4: Create New Agents

**Order:** Intelligence layer first (no dependencies), then strategy, then execution, then governance.

| Agent | Capability | Depends On | Risk | Rollback |
|-------|-----------|------------|------|----------|
| Competitor Intelligence | 01 | None | Low | Delete agent |
| SEO Intelligence | 02 | None | Low | Delete agent |
| UX Intelligence | 03 | None | Low | Delete agent |
| Dataset Intelligence | 04 | None | Low | Delete agent |
| Analytics Intelligence | 05 | None | Low | Delete agent |
| Product Strategist | 06 | Intelligence reports | Low | Delete agent |
| Priority Engine | 07 | Product backlog | Low | Delete agent |
| QA Lead | 09 | Engineering changes | Low | Delete agent |
| Executive Review | 10 | QA reports | Low | Delete agent |
| Continuous Improvement | 11 | Sprint data | Low | Delete agent |

**Total new agents:** 10
**Total agents after migration:** 13 (3 existing + 10 new)

**Rollback:** `paperclipai issue delete <agent-creation-issue>`

---

## Step 5: Create Standard Workflows

**Current:** No workflow enforcement.
**New:** Each capability has documented workflow.

**Reason:** Ensures pipeline is followed.
**Risk:** Low — documentation only.
**Rollback:** Remove workflow docs.

---

## Step 6: Set Up Routines

| Routine | Frequency | Purpose | Risk | Rollback |
|---------|-----------|---------|------|----------|
| Weekly Intelligence Sweep | Monday 9am | All intelligence agents produce reports | Low | Delete routine |
| Weekly Priority Review | Monday 10am | Priority Engine scores new opportunities | Low | Delete routine |
| Weekly Sprint Review | Friday 3pm | Continuous Improvement retrospective | Low | Delete routine |
| Monthly Architecture Review | 1st of month | Executive Review assesses OS health | Low | Delete routine |

**Rollback:** Delete routines via API.

---

## Step 7: Migrate Active Issues

**Current active issues:** Map to new capability ownership.

| Issue | Current Owner | New Owner | Reason |
|-------|--------------|-----------|--------|
| LIK-43 | CEO 2 | Engineering Lead | Engineering task |
| LIK-19 | CEO 2 | Orchestrator | Coordination task |
| LIK-30 | CEO 2 | SEO Intelligence | SEO task |
| LIK-65 | CTO | Engineering Lead | Already correct role |
| LIK-33 | CEO 2 | Analytics Intelligence | Analytics task |
| LIK-32 | CEO 2 | Engineering Lead | Engineering task |
| LIK-26 | CEO 2 | Engineering Lead | Engineering task |
| LIK-25 | CEO 2 | Product Strategist | Strategy task |
| LIK-21 | CEO 2 | UX Intelligence | UX task |

**Risk:** Low — reassignment only.
**Rollback:** Reassign back to original agents.

---

## Step 8: Archive Noise

**Issues to archive:**
- 12 cancelled "Review silent active run" issues (LIK-22, 24, 35-41, 46)
- 8 cancelled "DeepSeek test" issues (LIK-8 through LIK-16)

**Reason:** Reduces noise in issue list.
**Risk:** None — already cancelled.
**Rollback:** Unarchive via API.

---

## Validation Checklist

After each step:
- [ ] All existing agents still exist
- [ ] All existing issues still accessible
- [ ] No data deleted
- [ ] Rollback tested
- [ ] History preserved

---

## Timeline

| Step | Estimated Time | Dependencies |
|------|---------------|--------------|
| 1. Documentation structure | 10 min | None |
| 2. Scorecard system | 10 min | Step 1 |
| 3. Agent renaming | 5 min | None |
| 4. New agent creation | 30 min | Steps 1-3 |
| 5. Workflow documentation | 15 min | Steps 1-4 |
| 6. Routines setup | 10 min | Steps 1-5 |
| 7. Issue migration | 15 min | Steps 1-6 |
| 8. Archive noise | 5 min | Steps 1-7 |
| **Total** | **100 min** | |
