# Zolfi™ Production Merge Plan

**Date:** 2026-05-24
**Owner:** ONEGODIAN, LLC
**Primary Domains:** capital.onegodian.com, OMOS.OneGodian.com, app.OneGodian.com

## Purpose

This document defines the production merge of Zolfi™ into the OneGodian operating ecosystem. Zolfi™ is no longer positioned as a separate standalone destination. It is the shared infrastructure intelligence and security layer supporting Capital, OMOS, and the App command center.

## Domain Roles

| Domain | Production Role | Zolfi™ Function |
|---|---|---|
| capital.onegodian.com | Financial infrastructure, ODC, treasury, investor onboarding | Smart contract intelligence, wallet safety, fraud monitoring, QRV validation, capital security |
| OMOS.OneGodian.com | Protocol, operating architecture, system alignment | Runtime integrity, protocol verification, execution trust, system health |
| app.OneGodian.com | Command center, dashboards, workflows, agents | Auth protection, dashboard integrity, alerting, permissions, cross-platform orchestration |

## Shared Infrastructure Model

```txt
Zolfi™ Core Layer
├── Contract Intelligence
├── Wallet Safety
├── Fraud / Risk Monitoring
├── QRV Verification Hooks
├── Runtime Integrity Checks
├── Capital Portal Security
├── OMOS Protocol Health
└── App Command Center Alerts
```

## Production Routes

### Capital
- `/`
- `/zolfi`
- `/odc`
- `/odc/smart-contract`
- `/odc/buy`
- `/verify`
- `/treasury`
- `/investors`
- `/notes`
- `/bonds`
- `/security`
- `/docs`
- `/dashboard`

### OMOS
- `/`
- `/core`
- `/protocol`
- `/ohi-kernel`
- `/zolfi-integrity`
- `/qrv-verification`
- `/time`
- `/architecture`
- `/docs`

### App
- `/dashboard`
- `/systems`
- `/agents`
- `/treasury`
- `/qrv-records`
- `/security-alerts`
- `/workflows`
- `/settings`

## Compliance Language

Zolfi™ provides technology, security, verification, and monitoring infrastructure. It does not provide financial, investment, legal, or tax advice. ODC does not represent equity, ownership, membership interest, or guaranteed financial return in ONEGODIAN, LLC.

## Production Requirements

- [ ] Shared environment variable contract
- [ ] QRV API connection
- [ ] ODC smart contract reference page
- [ ] Security warning modal before external wallet links
- [ ] Treasury and dashboard metrics schema
- [ ] Disclosure center banner
- [ ] Public risk disclosures
- [ ] Health endpoints for deploys
- [ ] CI build validation
- [ ] Deployment notes

## Immediate Build Order

1. `capital.onegodian.com/odc/smart-contract`
2. `capital.onegodian.com/zolfi`
3. `capital.onegodian.com/verify`
4. `capital.onegodian.com/security`
5. `app.OneGodian.com/dashboard`
6. `OMOS.OneGodian.com/core`

## Versioning Rule

If it is not fully operational, documented, and repeatable, it remains scaffolded and must not be represented as production-complete.
