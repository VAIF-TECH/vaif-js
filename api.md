# Activation

## Org

Methods:

- <code title="get /activation/org/{orgId}">client.activation.org.<a href="./src/resources/activation/org.ts">retrieve</a>(orgID) -> void</code>

# AI

## Copilot

### Chat

Types:

- <code><a href="./src/resources/ai/copilot/chat/chat.ts">ChatCreateResponse</a></code>

Methods:

- <code title="post /ai/copilot/chat">client.ai.copilot.chat.<a href="./src/resources/ai/copilot/chat/chat.ts">create</a>({ ...params }) -> unknown</code>

#### Stream

Methods:

- <code title="post /ai/copilot/chat/stream">client.ai.copilot.chat.stream.<a href="./src/resources/ai/copilot/chat/stream.ts">create</a>() -> void</code>

### ContextSummary

Methods:

- <code title="get /ai/copilot/context-summary/{projectId}">client.ai.copilot.contextSummary.<a href="./src/resources/ai/copilot/context-summary.ts">retrieve</a>(projectID) -> void</code>

### CreditStatus

Methods:

- <code title="get /ai/copilot/credit-status/{projectId}">client.ai.copilot.creditStatus.<a href="./src/resources/ai/copilot/credit-status.ts">retrieve</a>(projectID) -> void</code>

### Deploy

Types:

- <code><a href="./src/resources/ai/copilot/deploy/deploy.ts">DeployRetrieveResponse</a></code>

Methods:

- <code title="post /ai/copilot/deploy">client.ai.copilot.deploy.<a href="./src/resources/ai/copilot/deploy/deploy.ts">create</a>({ ...params }) -> void</code>
- <code title="get /ai/copilot/deploy/{deployId}">client.ai.copilot.deploy.<a href="./src/resources/ai/copilot/deploy/deploy.ts">retrieve</a>(deployID) -> unknown</code>

#### History

Types:

- <code><a href="./src/resources/ai/copilot/deploy/history.ts">HistoryRetrieveResponse</a></code>

Methods:

- <code title="get /ai/copilot/deploy/history/{projectId}">client.ai.copilot.deploy.history.<a href="./src/resources/ai/copilot/deploy/history.ts">retrieve</a>(projectID, { ...params }) -> HistoryRetrieveResponse</code>

#### Rollback

Methods:

- <code title="post /ai/copilot/deploy/{deployId}/rollback">client.ai.copilot.deploy.rollback.<a href="./src/resources/ai/copilot/deploy/rollback.ts">rollback</a>(deployID) -> void</code>

### Editor

#### Chat

Methods:

- <code title="post /ai/copilot/editor/chat">client.ai.copilot.editor.chat.<a href="./src/resources/ai/copilot/editor/chat.ts">create</a>({ ...params }) -> void</code>

### Execute

Types:

- <code><a href="./src/resources/ai/copilot/execute.ts">ExecuteCreateResponse</a></code>

Methods:

- <code title="post /ai/copilot/execute">client.ai.copilot.execute.<a href="./src/resources/ai/copilot/execute.ts">create</a>({ ...params }) -> ExecuteCreateResponse</code>

### Executions

Methods:

- <code title="get /ai/copilot/execution/{executionId}">client.ai.copilot.executions.<a href="./src/resources/ai/copilot/executions/executions.ts">retrieve</a>(executionID) -> void</code>
- <code title="get /ai/copilot/executions/{sessionId}">client.ai.copilot.executions.<a href="./src/resources/ai/copilot/executions/executions.ts">retrieve2</a>(sessionID) -> void</code>

#### Pause

Methods:

- <code title="post /ai/copilot/execution/{executionId}/pause">client.ai.copilot.executions.pause.<a href="./src/resources/ai/copilot/executions/pause.ts">pause</a>(executionID) -> void</code>

#### Resume

Types:

- <code><a href="./src/resources/ai/copilot/executions/resume.ts">ResumeResumeResponse</a></code>

Methods:

- <code title="post /ai/copilot/execution/{executionId}/resume">client.ai.copilot.executions.resume.<a href="./src/resources/ai/copilot/executions/resume.ts">resume</a>(executionID, { ...params }) -> ResumeResumeResponse</code>

#### Rollback

Types:

- <code><a href="./src/resources/ai/copilot/executions/rollback.ts">RollbackRollbackResponse</a></code>

Methods:

- <code title="post /ai/copilot/execution/{executionId}/rollback">client.ai.copilot.executions.rollback.<a href="./src/resources/ai/copilot/executions/rollback.ts">rollback</a>(executionID, { ...params }) -> RollbackRollbackResponse</code>

### Export

Methods:

- <code title="post /ai/copilot/export/{versionId}">client.ai.copilot.export.<a href="./src/resources/ai/copilot/export/export.ts">create</a>(versionID) -> void</code>

#### Docker

Methods:

- <code title="post /ai/copilot/export/docker">client.ai.copilot.export.docker.<a href="./src/resources/ai/copilot/export/docker.ts">create</a>() -> void</code>

#### GitHub

Methods:

- <code title="post /ai/copilot/export/github">client.ai.copilot.export.github.<a href="./src/resources/ai/copilot/export/github.ts">create</a>() -> void</code>

#### Terraform

##### Aws

Methods:

- <code title="post /ai/copilot/export/terraform/aws">client.ai.copilot.export.terraform.aws.<a href="./src/resources/ai/copilot/export/terraform/aws.ts">create</a>() -> void</code>

##### Gcp

Methods:

- <code title="post /ai/copilot/export/terraform/gcp">client.ai.copilot.export.terraform.gcp.<a href="./src/resources/ai/copilot/export/terraform/gcp.ts">create</a>() -> void</code>

#### Zip

Methods:

- <code title="post /ai/copilot/export/zip">client.ai.copilot.export.zip.<a href="./src/resources/ai/copilot/export/zip.ts">create</a>() -> void</code>

### Feedback

Types:

- <code><a href="./src/resources/ai/copilot/feedback.ts">FeedbackCreateResponse</a></code>

Methods:

- <code title="post /ai/copilot/feedback">client.ai.copilot.feedback.<a href="./src/resources/ai/copilot/feedback.ts">create</a>({ ...params }) -> FeedbackCreateResponse</code>

### Generation

#### Cancel

Methods:

- <code title="post /ai/copilot/generation/{manifestId}/cancel">client.ai.copilot.generation.cancel.<a href="./src/resources/ai/copilot/generation/cancel.ts">cancel</a>(manifestID) -> void</code>

#### Resume

Methods:

- <code title="post /ai/copilot/generation/resume">client.ai.copilot.generation.resume.<a href="./src/resources/ai/copilot/generation/resume.ts">create</a>() -> void</code>

### Git

#### Branches

Methods:

- <code title="post /ai/copilot/git/branch">client.ai.copilot.git.branches.<a href="./src/resources/ai/copilot/git/branches.ts">create</a>() -> void</code>
- <code title="get /ai/copilot/git/branches/{sessionId}">client.ai.copilot.git.branches.<a href="./src/resources/ai/copilot/git/branches.ts">retrieve</a>(sessionID) -> void</code>

#### Clone

Methods:

- <code title="post /ai/copilot/git/clone">client.ai.copilot.git.clone.<a href="./src/resources/ai/copilot/git/clone.ts">create</a>() -> void</code>

#### Commit

Methods:

- <code title="post /ai/copilot/git/commit">client.ai.copilot.git.commit.<a href="./src/resources/ai/copilot/git/commit.ts">create</a>() -> void</code>

#### Files

Methods:

- <code title="get /ai/copilot/git/files/{sessionId}">client.ai.copilot.git.files.<a href="./src/resources/ai/copilot/git/files.ts">retrieve</a>(sessionID) -> void</code>

#### Init

Methods:

- <code title="post /ai/copilot/git/init">client.ai.copilot.git.init.<a href="./src/resources/ai/copilot/git/init.ts">create</a>() -> void</code>

#### Log

Methods:

- <code title="get /ai/copilot/git/log/{sessionId}">client.ai.copilot.git.log.<a href="./src/resources/ai/copilot/git/log.ts">retrieve</a>(sessionID) -> void</code>

#### Pull

Methods:

- <code title="post /ai/copilot/git/pull">client.ai.copilot.git.pull.<a href="./src/resources/ai/copilot/git/pull.ts">create</a>() -> void</code>

#### Push

Methods:

- <code title="post /ai/copilot/git/push">client.ai.copilot.git.push.<a href="./src/resources/ai/copilot/git/push.ts">create</a>() -> void</code>

#### Status

Methods:

- <code title="get /ai/copilot/git/status/{sessionId}">client.ai.copilot.git.status.<a href="./src/resources/ai/copilot/git/status.ts">retrieve</a>(sessionID) -> void</code>

#### Write

Methods:

- <code title="post /ai/copilot/git/write">client.ai.copilot.git.write.<a href="./src/resources/ai/copilot/git/write.ts">create</a>() -> void</code>

### Job

Types:

- <code><a href="./src/resources/ai/copilot/job/job.ts">JobCreateResponse</a></code>

Methods:

- <code title="post /ai/copilot/job">client.ai.copilot.job.<a href="./src/resources/ai/copilot/job/job.ts">create</a>({ ...params }) -> JobCreateResponse</code>
- <code title="get /ai/copilot/job/{jobId}">client.ai.copilot.job.<a href="./src/resources/ai/copilot/job/job.ts">retrieve</a>(jobID) -> void</code>

#### Cancel

Methods:

- <code title="post /ai/copilot/job/{jobId}/cancel">client.ai.copilot.job.cancel.<a href="./src/resources/ai/copilot/job/cancel.ts">cancel</a>(jobID) -> void</code>

#### Events

Methods:

- <code title="get /ai/copilot/job/{jobId}/events">client.ai.copilot.job.events.<a href="./src/resources/ai/copilot/job/events.ts">getEvents</a>(jobID) -> void</code>

#### Retry

Methods:

- <code title="post /ai/copilot/job/{jobId}/retry">client.ai.copilot.job.retry.<a href="./src/resources/ai/copilot/job/retry.ts">retry</a>(jobID) -> void</code>

### Manifest

Methods:

- <code title="get /ai/copilot/manifest/{manifestId}">client.ai.copilot.manifest.<a href="./src/resources/ai/copilot/manifest/manifest.ts">retrieve</a>(manifestID) -> void</code>

#### Pause

Methods:

- <code title="post /ai/copilot/manifest/{manifestId}/pause">client.ai.copilot.manifest.pause.<a href="./src/resources/ai/copilot/manifest/pause.ts">pause</a>(manifestID) -> void</code>

### Memories

#### Promote

Methods:

- <code title="post /ai/copilot/memories/{memoryId}/promote">client.ai.copilot.memories.promote.<a href="./src/resources/ai/copilot/memories/promote.ts">promote</a>(memoryID) -> void</code>

### Metrics

Methods:

- <code title="get /ai/copilot/metrics/{projectId}">client.ai.copilot.metrics.<a href="./src/resources/ai/copilot/metrics/metrics.ts">retrieve</a>(projectID) -> void</code>

#### Org

Methods:

- <code title="get /ai/copilot/metrics/org/{orgId}">client.ai.copilot.metrics.org.<a href="./src/resources/ai/copilot/metrics/org.ts">retrieve</a>(orgID) -> void</code>

### Models

Methods:

- <code title="get /ai/copilot/models/{projectId}">client.ai.copilot.models.<a href="./src/resources/ai/copilot/models.ts">retrieve</a>(projectID) -> void</code>

### Rate

Types:

- <code><a href="./src/resources/ai/copilot/rate.ts">RateCreateResponse</a></code>

Methods:

- <code title="post /ai/copilot/rate/{messageId}">client.ai.copilot.rate.<a href="./src/resources/ai/copilot/rate.ts">create</a>(messageID, { ...params }) -> RateCreateResponse</code>

### Sessions

Types:

- <code><a href="./src/resources/ai/copilot/sessions.ts">SessionUpdateResponse</a></code>

Methods:

- <code title="get /ai/copilot/sessions/{projectId}">client.ai.copilot.sessions.<a href="./src/resources/ai/copilot/sessions.ts">retrieve</a>(projectID) -> void</code>
- <code title="patch /ai/copilot/session/{sessionId}">client.ai.copilot.sessions.<a href="./src/resources/ai/copilot/sessions.ts">update</a>(sessionID, { ...params }) -> SessionUpdateResponse</code>
- <code title="delete /ai/copilot/session/{sessionId}">client.ai.copilot.sessions.<a href="./src/resources/ai/copilot/sessions.ts">delete</a>(sessionID) -> void</code>
- <code title="get /ai/copilot/session/{sessionId}">client.ai.copilot.sessions.<a href="./src/resources/ai/copilot/sessions.ts">retrieve2</a>(sessionID) -> void</code>

### TrainingConsent

Types:

- <code><a href="./src/resources/ai/copilot/training-consent.ts">TrainingConsentCreateResponse</a></code>

Methods:

- <code title="post /ai/copilot/training-consent/{sessionId}">client.ai.copilot.trainingConsent.<a href="./src/resources/ai/copilot/training-consent.ts">create</a>(sessionID, { ...params }) -> TrainingConsentCreateResponse</code>

### Usage

Methods:

- <code title="get /ai/copilot/usage/{projectId}">client.ai.copilot.usage.<a href="./src/resources/ai/copilot/usage.ts">retrieve</a>(projectID) -> void</code>

### UsageOrg

Methods:

- <code title="get /ai/copilot/usage-org/{orgId}">client.ai.copilot.usageOrg.<a href="./src/resources/ai/copilot/usage-org.ts">retrieve</a>(orgID) -> void</code>

### Versions

Methods:

- <code title="get /ai/copilot/versions/{sessionId}">client.ai.copilot.versions.<a href="./src/resources/ai/copilot/versions/versions.ts">retrieve</a>(sessionID) -> void</code>
- <code title="get /ai/copilot/version/{versionId}">client.ai.copilot.versions.<a href="./src/resources/ai/copilot/versions/versions.ts">retrieve2</a>(versionID) -> void</code>

#### Diff

Methods:

- <code title="get /ai/copilot/version/{versionId}/diff/{compareVersionId}">client.ai.copilot.versions.diff.<a href="./src/resources/ai/copilot/versions/diff.ts">retrieve</a>(compareVersionID, { ...params }) -> void</code>

# AIUsage

## Org

### Breakdown

Methods:

- <code title="get /ai-usage/org/{orgId}/breakdown">client.aiUsage.org.breakdown.<a href="./src/resources/ai-usage/org/breakdown.ts">getBreakdown</a>(orgID) -> void</code>

### ExhaustionEvents

Methods:

- <code title="get /ai-usage/org/{orgId}/exhaustion-events">client.aiUsage.org.exhaustionEvents.<a href="./src/resources/ai-usage/org/exhaustion-events.ts">getExhaustionEvents</a>(orgID) -> void</code>

### History

Methods:

- <code title="get /ai-usage/org/{orgId}/history">client.aiUsage.org.history.<a href="./src/resources/ai-usage/org/history.ts">getHistory</a>(orgID) -> void</code>

### Recent

Methods:

- <code title="get /ai-usage/org/{orgId}/recent">client.aiUsage.org.recent.<a href="./src/resources/ai-usage/org/recent.ts">getRecent</a>(orgID) -> void</code>

### Rollups

Methods:

- <code title="get /ai-usage/org/{orgId}/rollups">client.aiUsage.org.rollups.<a href="./src/resources/ai-usage/org/rollups.ts">getRollups</a>(orgID) -> void</code>

### Summary

Methods:

- <code title="get /ai-usage/org/{orgId}/summary">client.aiUsage.org.summary.<a href="./src/resources/ai-usage/org/summary.ts">getSummary</a>(orgID) -> void</code>

# AlertRules

Methods:

- <code title="put /alert-rules/{ruleId}">client.alertRules.<a href="./src/resources/alert-rules/alert-rules.ts">update</a>(ruleID) -> void</code>
- <code title="delete /alert-rules/{ruleId}">client.alertRules.<a href="./src/resources/alert-rules/alert-rules.ts">delete</a>(ruleID) -> void</code>

## Project

Methods:

- <code title="post /alert-rules/project/{projectId}">client.alertRules.project.<a href="./src/resources/alert-rules/project.ts">create</a>(projectID) -> void</code>
- <code title="get /alert-rules/project/{projectId}">client.alertRules.project.<a href="./src/resources/alert-rules/project.ts">retrieve</a>(projectID) -> void</code>

# Announcements

Methods:

- <code title="get /announcements">client.announcements.<a href="./src/resources/announcements.ts">list</a>() -> void</code>

# Audit

## Org

Methods:

- <code title="get /audit/org/{orgId}">client.audit.org.<a href="./src/resources/audit/org.ts">retrieve</a>(orgID) -> void</code>

## Project

Methods:

- <code title="get /audit/project/{projectId}">client.audit.project.<a href="./src/resources/audit/project.ts">retrieve</a>(projectID) -> void</code>

# Auth

## Cli

### Authorize

Types:

- <code><a href="./src/resources/auth/cli/authorize.ts">AuthorizeCreateResponse</a></code>

Methods:

- <code title="post /auth/cli/authorize">client.auth.cli.authorize.<a href="./src/resources/auth/cli/authorize.ts">create</a>() -> AuthorizeCreateResponse</code>

### Callback

Types:

- <code><a href="./src/resources/auth/cli/callback.ts">CallbackCreateResponse</a></code>

Methods:

- <code title="post /auth/cli/callback">client.auth.cli.callback.<a href="./src/resources/auth/cli/callback.ts">create</a>({ ...params }) -> CallbackCreateResponse</code>

### Login

Types:

- <code><a href="./src/resources/auth/cli/login.ts">LoginCreateResponse</a></code>

Methods:

- <code title="post /auth/cli/login">client.auth.cli.login.<a href="./src/resources/auth/cli/login.ts">create</a>({ ...params }) -> LoginCreateResponse</code>

### Token

Types:

- <code><a href="./src/resources/auth/cli/token.ts">TokenCreateResponse</a></code>

Methods:

- <code title="post /auth/cli/token">client.auth.cli.token.<a href="./src/resources/auth/cli/token.ts">create</a>({ ...params }) -> TokenCreateResponse</code>

## ForgotPassword

Types:

- <code><a href="./src/resources/auth/forgot-password.ts">ForgotPasswordCreateResponse</a></code>

Methods:

- <code title="post /auth/forgot-password">client.auth.forgotPassword.<a href="./src/resources/auth/forgot-password.ts">create</a>({ ...params }) -> ForgotPasswordCreateResponse</code>

## Login

Types:

- <code><a href="./src/resources/auth/login.ts">LoginCreateResponse</a></code>

Methods:

- <code title="post /auth/login">client.auth.login.<a href="./src/resources/auth/login.ts">create</a>({ ...params }) -> LoginCreateResponse</code>

## Logout

Types:

- <code><a href="./src/resources/auth/logout.ts">LogoutCreateResponse</a></code>

Methods:

- <code title="post /auth/logout">client.auth.logout.<a href="./src/resources/auth/logout.ts">create</a>() -> LogoutCreateResponse</code>

## Me

Types:

- <code><a href="./src/resources/auth/me/me.ts">MeUpdateResponse</a></code>
- <code><a href="./src/resources/auth/me/me.ts">MeListResponse</a></code>

Methods:

- <code title="patch /auth/me">client.auth.me.<a href="./src/resources/auth/me/me.ts">update</a>({ ...params }) -> MeUpdateResponse</code>
- <code title="get /auth/me">client.auth.me.<a href="./src/resources/auth/me/me.ts">list</a>() -> MeListResponse</code>

### Admin

Types:

- <code><a href="./src/resources/auth/me/admin.ts">AdminListResponse</a></code>

Methods:

- <code title="get /auth/me/admin">client.auth.me.admin.<a href="./src/resources/auth/me/admin.ts">list</a>() -> AdminListResponse</code>

### Context

Types:

- <code><a href="./src/resources/auth/me/context.ts">ContextListResponse</a></code>

Methods:

- <code title="get /auth/me/context">client.auth.me.context.<a href="./src/resources/auth/me/context.ts">list</a>() -> ContextListResponse</code>

### LinkedAccounts

Types:

- <code><a href="./src/resources/auth/me/linked-accounts.ts">LinkedAccountListResponse</a></code>
- <code><a href="./src/resources/auth/me/linked-accounts.ts">LinkedAccountDeleteResponse</a></code>

Methods:

- <code title="get /auth/me/linked-accounts">client.auth.me.linkedAccounts.<a href="./src/resources/auth/me/linked-accounts.ts">list</a>() -> LinkedAccountListResponse</code>
- <code title="delete /auth/me/linked-accounts/{provider}">client.auth.me.linkedAccounts.<a href="./src/resources/auth/me/linked-accounts.ts">delete</a>(provider) -> LinkedAccountDeleteResponse</code>

## OAuth

Methods:

- <code title="get /auth/oauth/{provider}">client.auth.oauth.<a href="./src/resources/auth/oauth/oauth.ts">retrieve</a>(provider, { ...params }) -> void</code>

### Callback

Methods:

- <code title="get /auth/oauth/{provider}/callback">client.auth.oauth.callback.<a href="./src/resources/auth/oauth/callback.ts">getCallback</a>(provider, { ...params }) -> void</code>

### Providers

Types:

- <code><a href="./src/resources/auth/oauth/providers.ts">ProviderListResponse</a></code>

Methods:

- <code title="get /auth/oauth/providers">client.auth.oauth.providers.<a href="./src/resources/auth/oauth/providers.ts">list</a>() -> ProviderListResponse</code>

## Refresh

Types:

- <code><a href="./src/resources/auth/refresh.ts">RefreshCreateResponse</a></code>

Methods:

- <code title="post /auth/refresh">client.auth.refresh.<a href="./src/resources/auth/refresh.ts">create</a>() -> RefreshCreateResponse</code>

## ResetPassword

Types:

- <code><a href="./src/resources/auth/reset-password.ts">ResetPasswordCreateResponse</a></code>

Methods:

- <code title="post /auth/reset-password">client.auth.resetPassword.<a href="./src/resources/auth/reset-password.ts">create</a>({ ...params }) -> ResetPasswordCreateResponse</code>

## Signup

Types:

- <code><a href="./src/resources/auth/signup.ts">SignupCreateResponse</a></code>

Methods:

- <code title="post /auth/signup">client.auth.signup.<a href="./src/resources/auth/signup.ts">create</a>({ ...params }) -> SignupCreateResponse</code>

## VerifyEmail

### Confirm

Types:

- <code><a href="./src/resources/auth/verify-email/confirm.ts">ConfirmCreateResponse</a></code>

Methods:

- <code title="post /auth/verify-email/confirm">client.auth.verifyEmail.confirm.<a href="./src/resources/auth/verify-email/confirm.ts">create</a>({ ...params }) -> ConfirmCreateResponse</code>

### Send

Types:

- <code><a href="./src/resources/auth/verify-email/send.ts">SendCreateResponse</a></code>

Methods:

- <code title="post /auth/verify-email/send">client.auth.verifyEmail.send.<a href="./src/resources/auth/verify-email/send.ts">create</a>() -> SendCreateResponse</code>

# Billing

## Addons

### Catalog

Methods:

- <code title="get /billing/addons/catalog">client.billing.addons.catalog.<a href="./src/resources/billing/addons/catalog.ts">list</a>() -> void</code>

## Checkout

Types:

- <code><a href="./src/resources/billing/checkout/checkout.ts">CheckoutCreateResponse</a></code>

Methods:

- <code title="post /billing/checkout">client.billing.checkout.<a href="./src/resources/billing/checkout/checkout.ts">create</a>({ ...params }) -> CheckoutCreateResponse</code>

### Verify

Methods:

- <code title="get /billing/checkout/verify/{sessionId}">client.billing.checkout.verify.<a href="./src/resources/billing/checkout/verify.ts">retrieve</a>(sessionID) -> void</code>

## Credits

### Packages

Methods:

- <code title="get /billing/credits/packages">client.billing.credits.packages.<a href="./src/resources/billing/credits/packages.ts">list</a>() -> void</code>

## Enterprise

### Inquiry

Types:

- <code><a href="./src/resources/billing/enterprise/inquiry.ts">InquiryCreateResponse</a></code>

Methods:

- <code title="post /billing/enterprise/inquiry">client.billing.enterprise.inquiry.<a href="./src/resources/billing/enterprise/inquiry.ts">create</a>({ ...params }) -> InquiryCreateResponse</code>

## Org

### Addons

Methods:

- <code title="patch /billing/org/{orgId}/addons/{addonId}">client.billing.org.addons.<a href="./src/resources/billing/org/addons.ts">update</a>(addonID, { ...params }) -> void</code>
- <code title="delete /billing/org/{orgId}/addons/{addonId}">client.billing.org.addons.<a href="./src/resources/billing/org/addons.ts">delete</a>(addonID, { ...params }) -> void</code>
- <code title="post /billing/org/{orgId}/addons">client.billing.org.addons.<a href="./src/resources/billing/org/addons.ts">addons</a>(orgID) -> void</code>
- <code title="get /billing/org/{orgId}/addons">client.billing.org.addons.<a href="./src/resources/billing/org/addons.ts">getAddons</a>(orgID) -> void</code>

### Cancel

Types:

- <code><a href="./src/resources/billing/org/cancel.ts">CancelCancelResponse</a></code>

Methods:

- <code title="post /billing/org/{orgId}/cancel">client.billing.org.cancel.<a href="./src/resources/billing/org/cancel.ts">cancel</a>(orgID, { ...params }) -> CancelCancelResponse</code>

### ChangePlan

Types:

- <code><a href="./src/resources/billing/org/change-plan.ts">ChangePlanChangePlanResponse</a></code>

Methods:

- <code title="post /billing/org/{orgId}/change-plan">client.billing.org.changePlan.<a href="./src/resources/billing/org/change-plan.ts">changePlan</a>(orgID, { ...params }) -> ChangePlanChangePlanResponse</code>

### Contacts

Types:

- <code><a href="./src/resources/billing/org/contacts.ts">ContactContactsResponse</a></code>

Methods:

- <code title="delete /billing/org/{orgId}/contacts/{contactId}">client.billing.org.contacts.<a href="./src/resources/billing/org/contacts.ts">delete</a>(contactID, { ...params }) -> void</code>
- <code title="post /billing/org/{orgId}/contacts">client.billing.org.contacts.<a href="./src/resources/billing/org/contacts.ts">contacts</a>(orgID, { ...params }) -> ContactContactsResponse</code>
- <code title="get /billing/org/{orgId}/contacts">client.billing.org.contacts.<a href="./src/resources/billing/org/contacts.ts">getContacts</a>(orgID) -> void</code>

### CostBreakdown

Methods:

- <code title="get /billing/org/{orgId}/cost-breakdown">client.billing.org.costBreakdown.<a href="./src/resources/billing/org/cost-breakdown.ts">getCostBreakdown</a>(orgID) -> void</code>

### Credits

Types:

- <code><a href="./src/resources/billing/org/credits.ts">CreditPurchaseResponse</a></code>

Methods:

- <code title="get /billing/org/{orgId}/credits/transactions">client.billing.org.credits.<a href="./src/resources/billing/org/credits.ts">getTransactions</a>(orgID) -> void</code>
- <code title="post /billing/org/{orgId}/credits/purchase">client.billing.org.credits.<a href="./src/resources/billing/org/credits.ts">purchase</a>(orgID, { ...params }) -> CreditPurchaseResponse</code>

### Invoices

Methods:

- <code title="get /billing/org/{orgId}/invoices">client.billing.org.invoices.<a href="./src/resources/billing/org/invoices/invoices.ts">getInvoices</a>(orgID) -> void</code>

#### Pdf

Methods:

- <code title="get /billing/org/{orgId}/invoices/{invoiceId}/pdf">client.billing.org.invoices.pdf.<a href="./src/resources/billing/org/invoices/pdf.ts">getPdf</a>(invoiceID, { ...params }) -> void</code>

### Overages

Methods:

- <code title="get /billing/org/{orgId}/overages/history">client.billing.org.overages.<a href="./src/resources/billing/org/overages.ts">getHistory</a>(orgID) -> void</code>
- <code title="get /billing/org/{orgId}/overages">client.billing.org.overages.<a href="./src/resources/billing/org/overages.ts">getOverages</a>(orgID) -> void</code>

### Pause

Methods:

- <code title="post /billing/org/{orgId}/pause">client.billing.org.pause.<a href="./src/resources/billing/org/pause.ts">pause</a>(orgID) -> void</code>

### Portal

Methods:

- <code title="post /billing/org/{orgId}/portal">client.billing.org.portal.<a href="./src/resources/billing/org/portal.ts">portal</a>(orgID) -> void</code>

### Reactivate

Methods:

- <code title="post /billing/org/{orgId}/reactivate">client.billing.org.reactivate.<a href="./src/resources/billing/org/reactivate.ts">reactivate</a>(orgID) -> void</code>

### Resume

Methods:

- <code title="post /billing/org/{orgId}/resume">client.billing.org.resume.<a href="./src/resources/billing/org/resume.ts">resume</a>(orgID) -> void</code>

### Summary

Methods:

- <code title="get /billing/org/{orgId}/summary">client.billing.org.summary.<a href="./src/resources/billing/org/summary.ts">getSummary</a>(orgID) -> void</code>

### TaxInfo

Types:

- <code><a href="./src/resources/billing/org/tax-info.ts">TaxInfoTaxInfoResponse</a></code>

Methods:

- <code title="get /billing/org/{orgId}/tax-info">client.billing.org.taxInfo.<a href="./src/resources/billing/org/tax-info.ts">getTaxInfo</a>(orgID) -> void</code>
- <code title="put /billing/org/{orgId}/tax-info">client.billing.org.taxInfo.<a href="./src/resources/billing/org/tax-info.ts">taxInfo</a>(orgID, { ...params }) -> TaxInfoTaxInfoResponse</code>

### Usage

Methods:

- <code title="get /billing/org/{orgId}/usage/history">client.billing.org.usage.<a href="./src/resources/billing/org/usage.ts">getHistory</a>(orgID) -> void</code>
- <code title="get /billing/org/{orgId}/usage/realtime">client.billing.org.usage.<a href="./src/resources/billing/org/usage.ts">getRealtime</a>(orgID) -> void</code>
- <code title="get /billing/org/{orgId}/usage">client.billing.org.usage.<a href="./src/resources/billing/org/usage.ts">getUsage</a>(orgID) -> void</code>

### UsageAlerts

Types:

- <code><a href="./src/resources/billing/org/usage-alerts.ts">UsageAlertUpdateResponse</a></code>
- <code><a href="./src/resources/billing/org/usage-alerts.ts">UsageAlertUsageAlertsResponse</a></code>

Methods:

- <code title="patch /billing/org/{orgId}/usage-alerts/{alertId}">client.billing.org.usageAlerts.<a href="./src/resources/billing/org/usage-alerts.ts">update</a>(alertID, { ...params }) -> UsageAlertUpdateResponse</code>
- <code title="delete /billing/org/{orgId}/usage-alerts/{alertId}">client.billing.org.usageAlerts.<a href="./src/resources/billing/org/usage-alerts.ts">delete</a>(alertID, { ...params }) -> void</code>
- <code title="get /billing/org/{orgId}/usage-alerts/configured">client.billing.org.usageAlerts.<a href="./src/resources/billing/org/usage-alerts.ts">getConfigured</a>(orgID) -> void</code>
- <code title="get /billing/org/{orgId}/usage-alerts/history">client.billing.org.usageAlerts.<a href="./src/resources/billing/org/usage-alerts.ts">getHistory</a>(orgID) -> void</code>
- <code title="get /billing/org/{orgId}/usage-alerts">client.billing.org.usageAlerts.<a href="./src/resources/billing/org/usage-alerts.ts">getUsageAlerts</a>(orgID) -> void</code>
- <code title="post /billing/org/{orgId}/usage-alerts">client.billing.org.usageAlerts.<a href="./src/resources/billing/org/usage-alerts.ts">usageAlerts</a>(orgID, { ...params }) -> UsageAlertUsageAlertsResponse</code>

## Plans

Methods:

- <code title="get /billing/plans">client.billing.plans.<a href="./src/resources/billing/plans.ts">list</a>() -> void</code>

## Portal

Types:

- <code><a href="./src/resources/billing/portal.ts">PortalCreateResponse</a></code>

Methods:

- <code title="post /billing/portal">client.billing.portal.<a href="./src/resources/billing/portal.ts">create</a>({ ...params }) -> PortalCreateResponse</code>

## PromoCodes

### Validate

Types:

- <code><a href="./src/resources/billing/promo-codes/validate.ts">ValidateCreateResponse</a></code>

Methods:

- <code title="post /billing/promo-codes/validate">client.billing.promoCodes.validate.<a href="./src/resources/billing/promo-codes/validate.ts">create</a>({ ...params }) -> ValidateCreateResponse</code>

## RedeemPromo

Types:

- <code><a href="./src/resources/billing/redeem-promo.ts">RedeemPromoCreateResponse</a></code>

Methods:

- <code title="post /billing/redeem-promo">client.billing.redeemPromo.<a href="./src/resources/billing/redeem-promo.ts">create</a>({ ...params }) -> RedeemPromoCreateResponse</code>

## Webhook

Methods:

- <code title="post /billing/webhook">client.billing.webhook.<a href="./src/resources/billing/webhook.ts">create</a>() -> void</code>

# Bootstrap

Methods:

- <code title="get /bootstrap/">client.bootstrap.<a href="./src/resources/bootstrap.ts">list</a>() -> void</code>

# Buckets

Types:

- <code><a href="./src/resources/buckets/buckets.ts">BucketUpdateResponse</a></code>

Methods:

- <code title="get /buckets/{bucketId}">client.buckets.<a href="./src/resources/buckets/buckets.ts">retrieve</a>(bucketID) -> void</code>
- <code title="put /buckets/{bucketId}">client.buckets.<a href="./src/resources/buckets/buckets.ts">update</a>(bucketID, { ...params }) -> BucketUpdateResponse</code>
- <code title="delete /buckets/{bucketId}">client.buckets.<a href="./src/resources/buckets/buckets.ts">delete</a>(bucketID) -> void</code>

## Files

Methods:

- <code title="delete /buckets/{bucketId}/files">client.buckets.files.<a href="./src/resources/buckets/files.ts">files</a>(bucketID) -> void</code>
- <code title="get /buckets/{bucketId}/files">client.buckets.files.<a href="./src/resources/buckets/files.ts">getFiles</a>(bucketID) -> void</code>

## Project

Methods:

- <code title="get /buckets/project/{projectId}">client.buckets.project.<a href="./src/resources/buckets/project.ts">retrieve</a>(projectID) -> void</code>

## SignedURL

Methods:

- <code title="post /buckets/{bucketId}/signed-url">client.buckets.signedURL.<a href="./src/resources/buckets/signed-url.ts">signedURL</a>(bucketID) -> void</code>

## Upload

Methods:

- <code title="post /buckets/{bucketId}/upload">client.buckets.upload.<a href="./src/resources/buckets/upload.ts">upload</a>(bucketID) -> void</code>

## UploadURL

Methods:

- <code title="post /buckets/{bucketId}/upload-url">client.buckets.uploadURL.<a href="./src/resources/buckets/upload-url.ts">uploadURL</a>(bucketID) -> void</code>

# Cms

## Careers

Methods:

- <code title="get /cms/careers">client.cms.careers.<a href="./src/resources/cms/careers.ts">list</a>() -> void</code>

## Faqs

Methods:

- <code title="get /cms/faqs/{pageSlug}">client.cms.faqs.<a href="./src/resources/cms/faqs.ts">retrieve</a>(pageSlug) -> void</code>

## Pages

Methods:

- <code title="get /cms/pages/{slug}">client.cms.pages.<a href="./src/resources/cms/pages.ts">retrieve</a>(slug) -> void</code>

## Partners

Methods:

- <code title="get /cms/partners">client.cms.partners.<a href="./src/resources/cms/partners.ts">list</a>() -> void</code>

## Team

Methods:

- <code title="get /cms/team">client.cms.team.<a href="./src/resources/cms/team.ts">list</a>() -> void</code>

## Testimonials

Methods:

- <code title="get /cms/testimonials">client.cms.testimonials.<a href="./src/resources/cms/testimonials.ts">list</a>() -> void</code>

# Contact

Types:

- <code><a href="./src/resources/contact.ts">ContactCreateResponse</a></code>

Methods:

- <code title="post /contact">client.contact.<a href="./src/resources/contact.ts">create</a>({ ...params }) -> ContactCreateResponse</code>

# Credits

## Org

Methods:

- <code title="get /credits/org/{orgId}">client.credits.org.<a href="./src/resources/credits/org/org.ts">retrieve</a>(orgID) -> void</code>

### Balance

Methods:

- <code title="get /credits/org/{orgId}/balance">client.credits.org.balance.<a href="./src/resources/credits/org/balance.ts">getBalance</a>(orgID) -> void</code>

# Database

## Connector

### Query

Types:

- <code><a href="./src/resources/database/connector/query.ts">QueryQueryResponse</a></code>

Methods:

- <code title="post /database/connector/{projectId}/query">client.database.connector.query.<a href="./src/resources/database/connector/query.ts">query</a>(projectID, { ...params }) -> unknown</code>

### Tables

Methods:

- <code title="get /database/connector/{projectId}/tables">client.database.connector.tables.<a href="./src/resources/database/connector/tables.ts">getTables</a>(projectID) -> void</code>

### Test

Methods:

- <code title="post /database/connector/{projectId}/test">client.database.connector.test.<a href="./src/resources/database/connector/test.ts">test</a>(projectID) -> void</code>

## Extensions

### Available

Methods:

- <code title="get /database/extensions/available">client.database.extensions.available.<a href="./src/resources/database/extensions/available.ts">list</a>() -> void</code>

### Project

Methods:

- <code title="get /database/extensions/project/{projectId}">client.database.extensions.project.<a href="./src/resources/database/extensions/project/project.ts">retrieve</a>(projectID) -> void</code>
- <code title="delete /database/extensions/project/{projectId}/{extensionId}">client.database.extensions.project.<a href="./src/resources/database/extensions/project/project.ts">delete</a>(extensionID, { ...params }) -> void</code>

#### Install

Types:

- <code><a href="./src/resources/database/extensions/project/install.ts">InstallInstallResponse</a></code>

Methods:

- <code title="post /database/extensions/project/{projectId}/install">client.database.extensions.project.install.<a href="./src/resources/database/extensions/project/install.ts">install</a>(projectID, { ...params }) -> unknown</code>

## Tiers

Methods:

- <code title="get /database/tiers">client.database.tiers.<a href="./src/resources/database/tiers.ts">list</a>() -> void</code>

## Wrappers

### Available

Methods:

- <code title="get /database/wrappers/available">client.database.wrappers.available.<a href="./src/resources/database/wrappers/available.ts">list</a>() -> void</code>

### Project

Types:

- <code><a href="./src/resources/database/wrappers/project/project.ts">ProjectUpdateResponse</a></code>

Methods:

- <code title="get /database/wrappers/project/{projectId}">client.database.wrappers.project.<a href="./src/resources/database/wrappers/project/project.ts">retrieve</a>(projectID) -> void</code>
- <code title="patch /database/wrappers/project/{projectId}/{wrapperId}">client.database.wrappers.project.<a href="./src/resources/database/wrappers/project/project.ts">update</a>(wrapperID, { ...params }) -> unknown</code>
- <code title="delete /database/wrappers/project/{projectId}/{wrapperId}">client.database.wrappers.project.<a href="./src/resources/database/wrappers/project/project.ts">delete</a>(wrapperID, { ...params }) -> void</code>

#### Install

Types:

- <code><a href="./src/resources/database/wrappers/project/install.ts">InstallInstallResponse</a></code>

Methods:

- <code title="post /database/wrappers/project/{projectId}/install">client.database.wrappers.project.install.<a href="./src/resources/database/wrappers/project/install.ts">install</a>(projectID, { ...params }) -> unknown</code>

# Deployments

Methods:

- <code title="get /deployments/{deploymentId}">client.deployments.<a href="./src/resources/deployments/deployments.ts">retrieve</a>(deploymentID) -> void</code>

## Project

Methods:

- <code title="get /deployments/project/{projectId}">client.deployments.project.<a href="./src/resources/deployments/project.ts">retrieve</a>(projectID) -> void</code>

## Promote

Methods:

- <code title="post /deployments/promote">client.deployments.promote.<a href="./src/resources/deployments/promote.ts">create</a>() -> void</code>

## Rollback

Methods:

- <code title="post /deployments/{deploymentId}/rollback">client.deployments.rollback.<a href="./src/resources/deployments/rollback.ts">rollback</a>(deploymentID) -> void</code>

## Steps

Methods:

- <code title="get /deployments/{deploymentId}/steps">client.deployments.steps.<a href="./src/resources/deployments/steps.ts">getSteps</a>(deploymentID) -> void</code>

## Tokens

Types:

- <code><a href="./src/resources/deployments/tokens/tokens.ts">TokenCreateResponse</a></code>

Methods:

- <code title="post /deployments/tokens">client.deployments.tokens.<a href="./src/resources/deployments/tokens/tokens.ts">create</a>({ ...params }) -> TokenCreateResponse</code>

### Project

Types:

- <code><a href="./src/resources/deployments/tokens/project.ts">ProjectRetrieveResponse</a></code>

Methods:

- <code title="get /deployments/tokens/project/{projectId}">client.deployments.tokens.project.<a href="./src/resources/deployments/tokens/project.ts">retrieve</a>(projectID) -> ProjectRetrieveResponse</code>

### Revoke

Types:

- <code><a href="./src/resources/deployments/tokens/revoke.ts">RevokeRevokeResponse</a></code>

Methods:

- <code title="post /deployments/tokens/{tokenId}/revoke">client.deployments.tokens.revoke.<a href="./src/resources/deployments/tokens/revoke.ts">revoke</a>(tokenID) -> RevokeRevokeResponse</code>

## Trigger

Methods:

- <code title="post /deployments/trigger">client.deployments.trigger.<a href="./src/resources/deployments/trigger.ts">create</a>() -> void</code>

# Docs

## AIAnswer

Methods:

- <code title="post /docs/ai-answer">client.docs.aiAnswer.<a href="./src/resources/docs/ai-answer.ts">create</a>({ ...params }) -> void</code>

## AISearch

Methods:

- <code title="get /docs/ai-search">client.docs.aiSearch.<a href="./src/resources/docs/ai-search.ts">list</a>() -> void</code>

## APIEndpoints

Methods:

- <code title="get /docs/api-endpoints/{id}">client.docs.apiEndpoints.<a href="./src/resources/docs/api-endpoints.ts">retrieve</a>(id) -> void</code>
- <code title="get /docs/api-endpoints">client.docs.apiEndpoints.<a href="./src/resources/docs/api-endpoints.ts">list</a>() -> void</code>

## Categories

Methods:

- <code title="get /docs/categories">client.docs.categories.<a href="./src/resources/docs/categories.ts">list</a>() -> void</code>

## Changelog

Methods:

- <code title="get /docs/changelog/{id}">client.docs.changelog.<a href="./src/resources/docs/changelog.ts">retrieve</a>(id) -> void</code>
- <code title="get /docs/changelog">client.docs.changelog.<a href="./src/resources/docs/changelog.ts">list</a>() -> void</code>

## Examples

Methods:

- <code title="get /docs/examples/{slug}">client.docs.examples.<a href="./src/resources/docs/examples.ts">retrieve</a>(slug) -> void</code>
- <code title="get /docs/examples">client.docs.examples.<a href="./src/resources/docs/examples.ts">list</a>() -> void</code>

## Feedback

Methods:

- <code title="post /docs/feedback">client.docs.feedback.<a href="./src/resources/docs/feedback.ts">create</a>() -> void</code>

## Project

### Quickstart

Methods:

- <code title="get /docs/project/{projectId}/quickstart">client.docs.project.quickstart.<a href="./src/resources/docs/project/quickstart.ts">getQuickstart</a>(projectID) -> void</code>

## SDKs

Methods:

- <code title="get /docs/sdks/{platform}">client.docs.sdks.<a href="./src/resources/docs/sdks/sdks.ts">retrieve</a>(platform) -> void</code>
- <code title="get /docs/sdks">client.docs.sdks.<a href="./src/resources/docs/sdks/sdks.ts">list</a>() -> void</code>

### Examples

Methods:

- <code title="get /docs/sdks/{sdkId}/examples">client.docs.sdks.examples.<a href="./src/resources/docs/sdks/examples.ts">getExamples</a>(sdkID) -> void</code>

## Search

Methods:

- <code title="get /docs/search">client.docs.search.<a href="./src/resources/docs/search.ts">list</a>() -> void</code>

## SearchClick

Methods:

- <code title="post /docs/search-click">client.docs.searchClick.<a href="./src/resources/docs/search-click.ts">create</a>() -> void</code>

## V2

### Pages

Methods:

- <code title="get /docs/v2/pages/{slug}">client.docs.v2.pages.<a href="./src/resources/docs/v2/pages.ts">retrieve</a>(slug) -> void</code>
- <code title="get /docs/v2/pages">client.docs.v2.pages.<a href="./src/resources/docs/v2/pages.ts">list</a>() -> void</code>

# Enterprise

## Inquire

Types:

- <code><a href="./src/resources/enterprise/inquire.ts">InquireCreateResponse</a></code>

Methods:

- <code title="post /enterprise/inquire">client.enterprise.inquire.<a href="./src/resources/enterprise/inquire.ts">create</a>({ ...params }) -> InquireCreateResponse</code>

## Org

### Contract

Methods:

- <code title="get /enterprise/org/{orgId}/contract">client.enterprise.org.contract.<a href="./src/resources/enterprise/org/contract.ts">getContract</a>(orgID) -> void</code>

### Invoices

Methods:

- <code title="get /enterprise/org/{orgId}/invoices">client.enterprise.org.invoices.<a href="./src/resources/enterprise/org/invoices.ts">getInvoices</a>(orgID) -> void</code>

### Onboarding

Types:

- <code><a href="./src/resources/enterprise/org/onboarding.ts">OnboardingOnboardingResponse</a></code>

Methods:

- <code title="get /enterprise/org/{orgId}/onboarding">client.enterprise.org.onboarding.<a href="./src/resources/enterprise/org/onboarding.ts">getOnboarding</a>(orgID) -> void</code>
- <code title="patch /enterprise/org/{orgId}/onboarding">client.enterprise.org.onboarding.<a href="./src/resources/enterprise/org/onboarding.ts">onboarding</a>(orgID, { ...params }) -> OnboardingOnboardingResponse</code>

### Usage

Methods:

- <code title="get /enterprise/org/{orgId}/usage/history">client.enterprise.org.usage.<a href="./src/resources/enterprise/org/usage.ts">getHistory</a>(orgID) -> void</code>
- <code title="get /enterprise/org/{orgId}/usage/projects">client.enterprise.org.usage.<a href="./src/resources/enterprise/org/usage.ts">getProjects</a>(orgID) -> void</code>
- <code title="get /enterprise/org/{orgId}/usage">client.enterprise.org.usage.<a href="./src/resources/enterprise/org/usage.ts">getUsage</a>(orgID) -> void</code>

## Quotes

Methods:

- <code title="get /enterprise/quotes/{quoteId}">client.enterprise.quotes.<a href="./src/resources/enterprise/quotes/quotes.ts">retrieve</a>(quoteID) -> void</code>

### Accept

Methods:

- <code title="post /enterprise/quotes/{quoteId}/accept">client.enterprise.quotes.accept.<a href="./src/resources/enterprise/quotes/accept.ts">accept</a>(quoteID) -> void</code>

## Subdomain

Methods:

- <code title="get /enterprise/subdomain/{subdomain}">client.enterprise.subdomain.<a href="./src/resources/enterprise/subdomain.ts">retrieve</a>(subdomain) -> void</code>

# Entitlements

## Org

Methods:

- <code title="get /entitlements/org/{orgId}">client.entitlements.org.<a href="./src/resources/entitlements/org/org.ts">retrieve</a>(orgID) -> void</code>

### Check

Methods:

- <code title="post /entitlements/org/{orgId}/check">client.entitlements.org.check.<a href="./src/resources/entitlements/org/check.ts">check</a>(orgID) -> void</code>

# Functions

Types:

- <code><a href="./src/resources/functions/functions.ts">FunctionCreateResponse</a></code>
- <code><a href="./src/resources/functions/functions.ts">FunctionUpdateResponse</a></code>

Methods:

- <code title="post /functions/">client.functions.<a href="./src/resources/functions/functions.ts">create</a>({ ...params }) -> unknown</code>
- <code title="get /functions/{functionId}">client.functions.<a href="./src/resources/functions/functions.ts">retrieve</a>(functionID) -> void</code>
- <code title="patch /functions/{functionId}">client.functions.<a href="./src/resources/functions/functions.ts">update</a>(functionID, { ...params }) -> unknown</code>
- <code title="delete /functions/{functionId}">client.functions.<a href="./src/resources/functions/functions.ts">delete</a>(functionID) -> void</code>

## DeployStatus

Methods:

- <code title="get /functions/{functionId}/deploy-status">client.functions.deployStatus.<a href="./src/resources/functions/deploy-status.ts">getDeployStatus</a>(functionID) -> void</code>

## Invocations

Methods:

- <code title="get /functions/invocations">client.functions.invocations.<a href="./src/resources/functions/invocations/invocations.ts">list</a>() -> void</code>
- <code title="get /functions/{functionId}/invocations">client.functions.invocations.<a href="./src/resources/functions/invocations/invocations.ts">getInvocations</a>(functionID) -> void</code>

### Function

Methods:

- <code title="get /functions/invocations/function/{functionId}">client.functions.invocations.function.<a href="./src/resources/functions/invocations/function.ts">retrieve</a>(functionID) -> void</code>

## Invoke

Methods:

- <code title="post /functions/{functionIdOrName}/invoke">client.functions.invoke.<a href="./src/resources/functions/invoke.ts">invoke</a>(functionIDOrName) -> void</code>

## Logs

Methods:

- <code title="get /functions/{functionId}/logs">client.functions.logs.<a href="./src/resources/functions/logs.ts">getLogs</a>(functionID) -> void</code>

## Metrics

Methods:

- <code title="get /functions/{functionId}/metrics">client.functions.metrics.<a href="./src/resources/functions/metrics.ts">getMetrics</a>(functionID) -> void</code>

## Project

Methods:

- <code title="get /functions/project/{projectId}">client.functions.project.<a href="./src/resources/functions/project/project.ts">retrieve</a>(projectID) -> void</code>

### Name

Methods:

- <code title="get /functions/project/{projectId}/name/{functionName}">client.functions.project.name.<a href="./src/resources/functions/project/name.ts">retrieve</a>(functionName, { ...params }) -> void</code>

## Schedule

Types:

- <code><a href="./src/resources/functions/schedule.ts">ScheduleScheduleResponse</a></code>

Methods:

- <code title="get /functions/{functionId}/schedule">client.functions.schedule.<a href="./src/resources/functions/schedule.ts">getSchedule</a>(functionID) -> void</code>
- <code title="put /functions/{functionId}/schedule">client.functions.schedule.<a href="./src/resources/functions/schedule.ts">schedule</a>(functionID, { ...params }) -> unknown</code>
- <code title="delete /functions/{functionId}/schedule">client.functions.schedule.<a href="./src/resources/functions/schedule.ts">schedule2</a>(functionID) -> void</code>

## Secrets

Types:

- <code><a href="./src/resources/functions/secrets/secrets.ts">SecretCreateResponse</a></code>
- <code><a href="./src/resources/functions/secrets/secrets.ts">SecretUpdateResponse</a></code>

Methods:

- <code title="post /functions/secrets">client.functions.secrets.<a href="./src/resources/functions/secrets/secrets.ts">create</a>({ ...params }) -> unknown</code>
- <code title="put /functions/secrets/{secretId}">client.functions.secrets.<a href="./src/resources/functions/secrets/secrets.ts">update</a>(secretID, { ...params }) -> unknown</code>
- <code title="delete /functions/secrets/{secretId}">client.functions.secrets.<a href="./src/resources/functions/secrets/secrets.ts">delete</a>(secretID) -> void</code>

### Project

Methods:

- <code title="get /functions/secrets/project/{projectId}">client.functions.secrets.project.<a href="./src/resources/functions/secrets/project.ts">retrieve</a>(projectID) -> void</code>

### Value

Methods:

- <code title="get /functions/secrets/{secretId}/value">client.functions.secrets.value.<a href="./src/resources/functions/secrets/value.ts">getValue</a>(secretID) -> void</code>

## Source

Types:

- <code><a href="./src/resources/functions/source.ts">SourceSourceResponse</a></code>

Methods:

- <code title="put /functions/{functionId}/source">client.functions.source.<a href="./src/resources/functions/source.ts">source</a>(functionID, { ...params }) -> SourceSourceResponse</code>

## Triggers

Types:

- <code><a href="./src/resources/functions/triggers.ts">TriggerTriggersResponse</a></code>

Methods:

- <code title="delete /functions/triggers/{triggerId}">client.functions.triggers.<a href="./src/resources/functions/triggers.ts">delete</a>(triggerID) -> void</code>
- <code title="get /functions/{functionId}/triggers">client.functions.triggers.<a href="./src/resources/functions/triggers.ts">getTriggers</a>(functionID) -> void</code>
- <code title="post /functions/{functionId}/triggers">client.functions.triggers.<a href="./src/resources/functions/triggers.ts">triggers</a>(functionID, { ...params }) -> unknown</code>

# Generated

Methods:

- <code title="post /generated/{table}">client.generated.<a href="./src/resources/generated/generated.ts">create</a>(table) -> void</code>
- <code title="get /generated/{table}">client.generated.<a href="./src/resources/generated/generated.ts">retrieve</a>(table) -> void</code>
- <code title="patch /generated/{table}/{id}">client.generated.<a href="./src/resources/generated/generated.ts">update</a>(id, { ...params }) -> void</code>
- <code title="delete /generated/{table}/{id}">client.generated.<a href="./src/resources/generated/generated.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /generated/{table}/{id}">client.generated.<a href="./src/resources/generated/generated.ts">retrieve2</a>(id, { ...params }) -> void</code>

## Aggregate

Methods:

- <code title="get /generated/{table}/aggregate">client.generated.aggregate.<a href="./src/resources/generated/aggregate.ts">getAggregate</a>(table) -> void</code>

## Bulk

Methods:

- <code title="post /generated/{table}/bulk">client.generated.bulk.<a href="./src/resources/generated/bulk.ts">bulk</a>(table) -> void</code>
- <code title="patch /generated/{table}/bulk">client.generated.bulk.<a href="./src/resources/generated/bulk.ts">bulk2</a>(table) -> void</code>
- <code title="delete /generated/{table}/bulk">client.generated.bulk.<a href="./src/resources/generated/bulk.ts">bulk3</a>(table) -> void</code>

## Query

Methods:

- <code title="post /generated/{table}/query">client.generated.query.<a href="./src/resources/generated/query.ts">query</a>(table) -> void</code>

## Search

Methods:

- <code title="get /generated/{table}/search">client.generated.search.<a href="./src/resources/generated/search.ts">getSearch</a>(table) -> void</code>

# GitHub

## OAuth

### Authorize

Methods:

- <code title="get /github/oauth/authorize">client.github.oauth.authorize.<a href="./src/resources/github/oauth/authorize.ts">list</a>() -> void</code>

### Callback

Methods:

- <code title="get /github/oauth/callback">client.github.oauth.callback.<a href="./src/resources/github/oauth/callback.ts">list</a>() -> void</code>

# Incidents

## Ack

Types:

- <code><a href="./src/resources/incidents/ack.ts">AckAckResponse</a></code>

Methods:

- <code title="post /incidents/{incidentId}/ack">client.incidents.ack.<a href="./src/resources/incidents/ack.ts">ack</a>(incidentID) -> AckAckResponse</code>

## Bulk

Types:

- <code><a href="./src/resources/incidents/bulk.ts">BulkCreateResponse</a></code>

Methods:

- <code title="post /incidents/bulk">client.incidents.bulk.<a href="./src/resources/incidents/bulk.ts">create</a>({ ...params }) -> BulkCreateResponse</code>

## Project

Types:

- <code><a href="./src/resources/incidents/project.ts">ProjectRetrieveResponse</a></code>

Methods:

- <code title="get /incidents/project/{projectId}">client.incidents.project.<a href="./src/resources/incidents/project.ts">retrieve</a>(projectID) -> ProjectRetrieveResponse</code>

## Resolve

Types:

- <code><a href="./src/resources/incidents/resolve.ts">ResolveResolveResponse</a></code>

Methods:

- <code title="post /incidents/{incidentId}/resolve">client.incidents.resolve.<a href="./src/resources/incidents/resolve.ts">resolve</a>(incidentID) -> ResolveResolveResponse</code>

# Infrastructure

## PollStatus

Methods:

- <code title="post /infrastructure/poll-status">client.infrastructure.pollStatus.<a href="./src/resources/infrastructure/poll-status.ts">create</a>() -> void</code>

## Sizes

Methods:

- <code title="get /infrastructure/sizes">client.infrastructure.sizes.<a href="./src/resources/infrastructure/sizes.ts">list</a>() -> void</code>

# Integrations

## Analytics

### Project

#### Events

Methods:

- <code title="get /integrations/analytics/project/{projectId}/events">client.integrations.analytics.project.events.<a href="./src/resources/integrations/analytics/project/events.ts">getEvents</a>(projectID) -> void</code>

#### Stats

Methods:

- <code title="get /integrations/analytics/project/{projectId}/stats">client.integrations.analytics.project.stats.<a href="./src/resources/integrations/analytics/project/stats.ts">getStats</a>(projectID) -> void</code>

## Deliveries

### Event

Types:

- <code><a href="./src/resources/integrations/deliveries/event.ts">EventRetrieveResponse</a></code>

Methods:

- <code title="get /integrations/deliveries/event/{eventId}">client.integrations.deliveries.event.<a href="./src/resources/integrations/deliveries/event.ts">retrieve</a>(eventID) -> EventRetrieveResponse</code>

### Retry

Types:

- <code><a href="./src/resources/integrations/deliveries/retry.ts">RetryRetryResponse</a></code>

Methods:

- <code title="post /integrations/deliveries/{deliveryId}/retry">client.integrations.deliveries.retry.<a href="./src/resources/integrations/deliveries/retry.ts">retry</a>(deliveryID) -> RetryRetryResponse</code>

### Subscription

Types:

- <code><a href="./src/resources/integrations/deliveries/subscription.ts">SubscriptionRetrieveResponse</a></code>

Methods:

- <code title="get /integrations/deliveries/subscription/{subscriptionId}">client.integrations.deliveries.subscription.<a href="./src/resources/integrations/deliveries/subscription.ts">retrieve</a>(subscriptionID) -> SubscriptionRetrieveResponse</code>

## Dlq

### Project

Types:

- <code><a href="./src/resources/integrations/dlq/project.ts">ProjectRetrieveResponse</a></code>

Methods:

- <code title="get /integrations/dlq/project/{projectId}">client.integrations.dlq.project.<a href="./src/resources/integrations/dlq/project.ts">retrieve</a>(projectID) -> ProjectRetrieveResponse</code>

## Subscriptions

Types:

- <code><a href="./src/resources/integrations/subscriptions/subscriptions.ts">SubscriptionCreateResponse</a></code>
- <code><a href="./src/resources/integrations/subscriptions/subscriptions.ts">SubscriptionUpdateResponse</a></code>
- <code><a href="./src/resources/integrations/subscriptions/subscriptions.ts">SubscriptionDeleteResponse</a></code>

Methods:

- <code title="post /integrations/subscriptions">client.integrations.subscriptions.<a href="./src/resources/integrations/subscriptions/subscriptions.ts">create</a>({ ...params }) -> SubscriptionCreateResponse</code>
- <code title="patch /integrations/subscriptions/{id}">client.integrations.subscriptions.<a href="./src/resources/integrations/subscriptions/subscriptions.ts">update</a>(id) -> SubscriptionUpdateResponse</code>
- <code title="delete /integrations/subscriptions/{id}">client.integrations.subscriptions.<a href="./src/resources/integrations/subscriptions/subscriptions.ts">delete</a>(id) -> SubscriptionDeleteResponse</code>

### Project

Types:

- <code><a href="./src/resources/integrations/subscriptions/project.ts">ProjectRetrieveResponse</a></code>

Methods:

- <code title="get /integrations/subscriptions/project/{projectId}">client.integrations.subscriptions.project.<a href="./src/resources/integrations/subscriptions/project.ts">retrieve</a>(projectID) -> ProjectRetrieveResponse</code>

### Test

Types:

- <code><a href="./src/resources/integrations/subscriptions/test.ts">TestTestResponse</a></code>

Methods:

- <code title="post /integrations/subscriptions/{id}/test">client.integrations.subscriptions.test.<a href="./src/resources/integrations/subscriptions/test.ts">test</a>(id) -> TestTestResponse</code>

# Jobs

## Dlq

### Project

Methods:

- <code title="get /jobs/dlq/project/{projectId}">client.jobs.dlq.project.<a href="./src/resources/jobs/dlq/project.ts">retrieve</a>(projectID) -> void</code>

## Webhooks

### Delivery

Methods:

- <code title="get /jobs/webhooks/delivery/{deliveryId}">client.jobs.webhooks.delivery.<a href="./src/resources/jobs/webhooks/delivery.ts">retrieve</a>(deliveryID) -> void</code>

### Project

Methods:

- <code title="get /jobs/webhooks/project/{projectId}">client.jobs.webhooks.project.<a href="./src/resources/jobs/webhooks/project.ts">retrieve</a>(projectID) -> void</code>

# Logs

## Project

Types:

- <code><a href="./src/resources/logs/project/project.ts">ProjectRetrieveResponse</a></code>

Methods:

- <code title="get /logs/project/{projectId}">client.logs.project.<a href="./src/resources/logs/project/project.ts">retrieve</a>(projectID, { ...params }) -> ProjectRetrieveResponse</code>

### Stream

Methods:

- <code title="get /logs/project/{projectId}/stream">client.logs.project.stream.<a href="./src/resources/logs/project/stream.ts">getStream</a>(projectID) -> void</code>

# Maintenance

Methods:

- <code title="get /maintenance">client.maintenance.<a href="./src/resources/maintenance.ts">list</a>() -> void</code>

# Metrics

## Org

Methods:

- <code title="get /metrics/org/{orgId}">client.metrics.org.<a href="./src/resources/metrics/org.ts">retrieve</a>(orgID) -> void</code>

## Project

Methods:

- <code title="get /metrics/project/{projectId}">client.metrics.project.<a href="./src/resources/metrics/project/project.ts">retrieve</a>(projectID) -> void</code>

### Overview

Methods:

- <code title="get /metrics/project/{projectId}/overview">client.metrics.project.overview.<a href="./src/resources/metrics/project/overview.ts">getOverview</a>(projectID) -> void</code>

# MongoDB

## Aggregate

Methods:

- <code title="post /mongodb/{collection}/aggregate">client.mongoDB.aggregate.<a href="./src/resources/mongodb/aggregate.ts">aggregate</a>(collection) -> void</code>
- <code title="post /mongodb/{collection}/aggregate/cursor">client.mongoDB.aggregate.<a href="./src/resources/mongodb/aggregate.ts">cursor</a>(collection) -> void</code>

## BulkWrite

Methods:

- <code title="post /mongodb/{collection}/bulkWrite">client.mongoDB.bulkWrite.<a href="./src/resources/mongodb/bulk-write.ts">bulkWrite</a>(collection) -> void</code>

## Collections

Methods:

- <code title="post /mongodb/collections">client.mongoDB.collections.<a href="./src/resources/mongodb/collections/collections.ts">create</a>() -> void</code>
- <code title="get /mongodb/collections">client.mongoDB.collections.<a href="./src/resources/mongodb/collections/collections.ts">list</a>() -> void</code>
- <code title="delete /mongodb/collections/{name}">client.mongoDB.collections.<a href="./src/resources/mongodb/collections/collections.ts">delete</a>(name) -> void</code>

### Rename

Methods:

- <code title="post /mongodb/collections/{name}/rename">client.mongoDB.collections.rename.<a href="./src/resources/mongodb/collections/rename.ts">rename</a>(name) -> void</code>

## Command

Methods:

- <code title="post /mongodb/command">client.mongoDB.command.<a href="./src/resources/mongodb/command.ts">create</a>() -> void</code>

## Count

Methods:

- <code title="post /mongodb/{collection}/count">client.mongoDB.count.<a href="./src/resources/mongodb/count.ts">count</a>(collection) -> void</code>

## Cursor

### Close

Methods:

- <code title="post /mongodb/{collection}/cursor/{cursorId}/close">client.mongoDB.cursor.close.<a href="./src/resources/mongodb/cursor/close.ts">close</a>(cursorID, { ...params }) -> void</code>

### Next

Methods:

- <code title="post /mongodb/{collection}/cursor/{cursorId}/next">client.mongoDB.cursor.next.<a href="./src/resources/mongodb/cursor/next.ts">next</a>(cursorID, { ...params }) -> void</code>

## DeleteMany

Methods:

- <code title="post /mongodb/{collection}/deleteMany">client.mongoDB.deleteMany.<a href="./src/resources/mongodb/delete-many.ts">deleteMany</a>(collection) -> void</code>

## DeleteOne

Methods:

- <code title="post /mongodb/{collection}/deleteOne">client.mongoDB.deleteOne.<a href="./src/resources/mongodb/delete-one.ts">deleteOne</a>(collection) -> void</code>

## Distinct

Methods:

- <code title="post /mongodb/{collection}/distinct">client.mongoDB.distinct.<a href="./src/resources/mongodb/distinct.ts">distinct</a>(collection) -> void</code>

## EstimatedCount

Methods:

- <code title="get /mongodb/{collection}/estimatedCount">client.mongoDB.estimatedCount.<a href="./src/resources/mongodb/estimated-count.ts">getEstimatedCount</a>(collection) -> void</code>

## Find

Methods:

- <code title="post /mongodb/{collection}/find/cursor">client.mongoDB.find.<a href="./src/resources/mongodb/find.ts">cursor</a>(collection) -> void</code>
- <code title="post /mongodb/{collection}/find">client.mongoDB.find.<a href="./src/resources/mongodb/find.ts">find</a>(collection) -> void</code>

## FindByID

Methods:

- <code title="get /mongodb/{collection}/findById/{id}">client.mongoDB.findByID.<a href="./src/resources/mongodb/find-by-id.ts">retrieve</a>(id, { ...params }) -> void</code>

## FindOne

Methods:

- <code title="post /mongodb/{collection}/findOne">client.mongoDB.findOne.<a href="./src/resources/mongodb/find-one.ts">findOne</a>(collection) -> void</code>

## FindOneAndDelete

Methods:

- <code title="post /mongodb/{collection}/findOneAndDelete">client.mongoDB.findOneAndDelete.<a href="./src/resources/mongodb/find-one-and-delete.ts">findOneAndDelete</a>(collection) -> void</code>

## FindOneAndReplace

Methods:

- <code title="post /mongodb/{collection}/findOneAndReplace">client.mongoDB.findOneAndReplace.<a href="./src/resources/mongodb/find-one-and-replace.ts">findOneAndReplace</a>(collection) -> void</code>

## FindOneAndUpdate

Methods:

- <code title="post /mongodb/{collection}/findOneAndUpdate">client.mongoDB.findOneAndUpdate.<a href="./src/resources/mongodb/find-one-and-update.ts">findOneAndUpdate</a>(collection) -> void</code>

## Indexes

Methods:

- <code title="delete /mongodb/{collection}/indexes/{indexName}">client.mongoDB.indexes.<a href="./src/resources/mongodb/indexes.ts">delete</a>(indexName, { ...params }) -> void</code>
- <code title="get /mongodb/{collection}/indexes">client.mongoDB.indexes.<a href="./src/resources/mongodb/indexes.ts">getIndexes</a>(collection) -> void</code>
- <code title="post /mongodb/{collection}/indexes">client.mongoDB.indexes.<a href="./src/resources/mongodb/indexes.ts">indexes</a>(collection) -> void</code>

## InsertMany

Methods:

- <code title="post /mongodb/{collection}/insertMany">client.mongoDB.insertMany.<a href="./src/resources/mongodb/insert-many.ts">insertMany</a>(collection) -> void</code>

## InsertOne

Methods:

- <code title="post /mongodb/{collection}/insertOne">client.mongoDB.insertOne.<a href="./src/resources/mongodb/insert-one.ts">insertOne</a>(collection) -> void</code>

## ReplaceOne

Methods:

- <code title="post /mongodb/{collection}/replaceOne">client.mongoDB.replaceOne.<a href="./src/resources/mongodb/replace-one.ts">replaceOne</a>(collection) -> void</code>

## UpdateMany

Methods:

- <code title="post /mongodb/{collection}/updateMany">client.mongoDB.updateMany.<a href="./src/resources/mongodb/update-many.ts">updateMany</a>(collection) -> void</code>

## UpdateOne

Methods:

- <code title="post /mongodb/{collection}/updateOne">client.mongoDB.updateOne.<a href="./src/resources/mongodb/update-one.ts">updateOne</a>(collection) -> void</code>

# OAuth

## Callback

Methods:

- <code title="post /oauth/callback">client.oauth.callback.<a href="./src/resources/oauth/callback.ts">create</a>() -> void</code>

## Org

Types:

- <code><a href="./src/resources/oauth/org/org.ts">OrgRetrieveResponse</a></code>

Methods:

- <code title="get /oauth/org/{orgId}">client.oauth.org.<a href="./src/resources/oauth/org/org.ts">retrieve</a>(orgID) -> OrgRetrieveResponse</code>

### Configure

Types:

- <code><a href="./src/resources/oauth/org/configure.ts">ConfigureConfigureResponse</a></code>

Methods:

- <code title="post /oauth/org/{orgId}/configure">client.oauth.org.configure.<a href="./src/resources/oauth/org/configure.ts">configure</a>(orgID, { ...params }) -> ConfigureConfigureResponse</code>

### Provider

Types:

- <code><a href="./src/resources/oauth/org/provider/provider.ts">ProviderUpdateResponse</a></code>
- <code><a href="./src/resources/oauth/org/provider/provider.ts">ProviderDeleteResponse</a></code>

Methods:

- <code title="patch /oauth/org/{orgId}/provider/{provider}">client.oauth.org.provider.<a href="./src/resources/oauth/org/provider/provider.ts">update</a>(provider, { ...params }) -> ProviderUpdateResponse</code>
- <code title="delete /oauth/org/{orgId}/provider/{provider}">client.oauth.org.provider.<a href="./src/resources/oauth/org/provider/provider.ts">delete</a>(provider, { ...params }) -> ProviderDeleteResponse</code>

#### Authorize

Types:

- <code><a href="./src/resources/oauth/org/provider/authorize.ts">AuthorizeGetAuthorizeResponse</a></code>

Methods:

- <code title="get /oauth/org/{orgId}/provider/{provider}/authorize">client.oauth.org.provider.authorize.<a href="./src/resources/oauth/org/provider/authorize.ts">getAuthorize</a>(provider, { ...params }) -> AuthorizeGetAuthorizeResponse</code>

#### Refresh

Types:

- <code><a href="./src/resources/oauth/org/provider/refresh.ts">RefreshRefreshResponse</a></code>

Methods:

- <code title="post /oauth/org/{orgId}/provider/{provider}/refresh">client.oauth.org.provider.refresh.<a href="./src/resources/oauth/org/provider/refresh.ts">refresh</a>(provider, { ...params }) -> RefreshRefreshResponse</code>

# Onboarding

## Org

Methods:

- <code title="get /onboarding/org/{orgId}">client.onboarding.org.<a href="./src/resources/onboarding/org/org.ts">retrieve</a>(orgID) -> void</code>

### AutoSetup

Methods:

- <code title="post /onboarding/org/{orgId}/auto-setup">client.onboarding.org.autoSetup.<a href="./src/resources/onboarding/org/auto-setup.ts">autoSetup</a>(orgID) -> void</code>

### CompleteStep

Methods:

- <code title="post /onboarding/org/{orgId}/complete-step">client.onboarding.org.completeStep.<a href="./src/resources/onboarding/org/complete-step.ts">completeStep</a>(orgID) -> void</code>

# OpenAPI

## Full

Methods:

- <code title="get /openapi/full">client.openAPI.full.<a href="./src/resources/openapi/full.ts">list</a>() -> void</code>

## Project

Methods:

- <code title="get /openapi/project/{projectId}">client.openAPI.project.<a href="./src/resources/openapi/project.ts">retrieve</a>(projectID) -> void</code>

# Orgs

Methods:

- <code title="post /orgs/">client.orgs.<a href="./src/resources/orgs/orgs.ts">create</a>() -> void</code>
- <code title="get /orgs/">client.orgs.<a href="./src/resources/orgs/orgs.ts">list</a>() -> void</code>

## BillingContacts

Types:

- <code><a href="./src/resources/orgs/billing-contacts.ts">BillingContactDeleteResponse</a></code>
- <code><a href="./src/resources/orgs/billing-contacts.ts">BillingContactBillingContactsResponse</a></code>
- <code><a href="./src/resources/orgs/billing-contacts.ts">BillingContactGetBillingContactsResponse</a></code>

Methods:

- <code title="delete /orgs/{orgId}/billing-contacts/{contactId}">client.orgs.billingContacts.<a href="./src/resources/orgs/billing-contacts.ts">delete</a>(contactID, { ...params }) -> BillingContactDeleteResponse</code>
- <code title="post /orgs/{orgId}/billing-contacts">client.orgs.billingContacts.<a href="./src/resources/orgs/billing-contacts.ts">billingContacts</a>(orgID, { ...params }) -> BillingContactBillingContactsResponse</code>
- <code title="get /orgs/{orgId}/billing-contacts">client.orgs.billingContacts.<a href="./src/resources/orgs/billing-contacts.ts">getBillingContacts</a>(orgID) -> BillingContactGetBillingContactsResponse</code>

## CheckName

Methods:

- <code title="get /orgs/check-name">client.orgs.checkName.<a href="./src/resources/orgs/check-name.ts">list</a>() -> void</code>

## Invites

Methods:

- <code title="delete /orgs/{orgId}/invites/{inviteId}">client.orgs.invites.<a href="./src/resources/orgs/invites/invites.ts">delete</a>(inviteID, { ...params }) -> void</code>
- <code title="get /orgs/{orgId}/invites">client.orgs.invites.<a href="./src/resources/orgs/invites/invites.ts">getInvites</a>(orgID) -> void</code>

### Accept

Methods:

- <code title="post /orgs/invites/accept">client.orgs.invites.accept.<a href="./src/resources/orgs/invites/accept.ts">create</a>() -> void</code>

## Members

Methods:

- <code title="get /orgs/{orgId}/members">client.orgs.members.<a href="./src/resources/orgs/members.ts">getMembers</a>(orgID) -> void</code>
- <code title="post /orgs/{orgId}/members/invite">client.orgs.members.<a href="./src/resources/orgs/members.ts">invite</a>(orgID) -> void</code>

## Membership

Methods:

- <code title="get /orgs/{orgId}/membership">client.orgs.membership.<a href="./src/resources/orgs/membership.ts">getMembership</a>(orgID) -> void</code>

## Profile

Methods:

- <code title="get /orgs/{orgId}/profile">client.orgs.profile.<a href="./src/resources/orgs/profile.ts">getProfile</a>(orgID) -> void</code>
- <code title="patch /orgs/{orgId}/profile">client.orgs.profile.<a href="./src/resources/orgs/profile.ts">profile</a>(orgID) -> void</code>

# Plans

Types:

- <code><a href="./src/resources/plans/plans.ts">PlanRetrieveResponse</a></code>

Methods:

- <code title="get /plans/{planId}">client.plans.<a href="./src/resources/plans/plans.ts">retrieve</a>(planID) -> PlanRetrieveResponse</code>

## Apply

Types:

- <code><a href="./src/resources/plans/apply.ts">ApplyCreateResponse</a></code>

Methods:

- <code title="post /plans/apply">client.plans.apply.<a href="./src/resources/plans/apply.ts">create</a>({ ...params }) -> ApplyCreateResponse</code>

## Org

Types:

- <code><a href="./src/resources/plans/org.ts">OrgRetrieveResponse</a></code>

Methods:

- <code title="get /plans/org/{orgId}">client.plans.org.<a href="./src/resources/plans/org.ts">retrieve</a>(orgID) -> OrgRetrieveResponse</code>

## Save

Types:

- <code><a href="./src/resources/plans/save.ts">SaveCreateResponse</a></code>

Methods:

- <code title="post /plans/save">client.plans.save.<a href="./src/resources/plans/save.ts">create</a>({ ...params }) -> SaveCreateResponse</code>

# Pricing

## AIFeatures

Methods:

- <code title="get /pricing/ai-features">client.pricing.aiFeatures.<a href="./src/resources/pricing/ai-features.ts">list</a>() -> void</code>

## Compare

Methods:

- <code title="get /pricing/compare">client.pricing.compare.<a href="./src/resources/pricing/compare.ts">list</a>() -> void</code>

## Enterprise

Methods:

- <code title="get /pricing/enterprise">client.pricing.enterprise.<a href="./src/resources/pricing/enterprise.ts">list</a>() -> void</code>

## Plans

Methods:

- <code title="get /pricing/plans/{plan}">client.pricing.plans.<a href="./src/resources/pricing/plans.ts">retrieve</a>(plan) -> void</code>
- <code title="get /pricing/plans">client.pricing.plans.<a href="./src/resources/pricing/plans.ts">list</a>() -> void</code>

# Projects

Types:

- <code><a href="./src/resources/projects/projects.ts">ProjectCreateResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectUpdateResponse</a></code>

Methods:

- <code title="post /projects/">client.projects.<a href="./src/resources/projects/projects.ts">create</a>({ ...params }) -> ProjectCreateResponse</code>
- <code title="get /projects/{projectId}">client.projects.<a href="./src/resources/projects/projects.ts">retrieve</a>(projectID) -> void</code>
- <code title="patch /projects/{projectId}">client.projects.<a href="./src/resources/projects/projects.ts">update</a>(projectID, { ...params }) -> ProjectUpdateResponse</code>
- <code title="get /projects/">client.projects.<a href="./src/resources/projects/projects.ts">list</a>() -> void</code>
- <code title="delete /projects/{projectId}">client.projects.<a href="./src/resources/projects/projects.ts">delete</a>(projectID) -> void</code>

## APIKeys

Types:

- <code><a href="./src/resources/projects/api-keys/api-keys.ts">APIKeyUpdateResponse</a></code>
- <code><a href="./src/resources/projects/api-keys/api-keys.ts">APIKeyAPIKeysResponse</a></code>

Methods:

- <code title="patch /projects/{projectId}/api-keys/{keyId}">client.projects.apiKeys.<a href="./src/resources/projects/api-keys/api-keys.ts">update</a>(keyID, { ...params }) -> APIKeyUpdateResponse</code>
- <code title="post /projects/{projectId}/api-keys">client.projects.apiKeys.<a href="./src/resources/projects/api-keys/api-keys.ts">apiKeys</a>(projectID, { ...params }) -> APIKeyAPIKeysResponse</code>
- <code title="get /projects/{projectId}/api-keys">client.projects.apiKeys.<a href="./src/resources/projects/api-keys/api-keys.ts">getAPIKeys</a>(projectID) -> void</code>

### Revoke

Methods:

- <code title="post /projects/{projectId}/api-keys/{keyId}/revoke">client.projects.apiKeys.revoke.<a href="./src/resources/projects/api-keys/revoke.ts">revoke</a>(keyID, { ...params }) -> void</code>

### Rotate

Methods:

- <code title="post /projects/{projectId}/api-keys/{keyId}/rotate">client.projects.apiKeys.rotate.<a href="./src/resources/projects/api-keys/rotate.ts">rotate</a>(keyID, { ...params }) -> void</code>

## Auth

Types:

- <code><a href="./src/resources/projects/auth.ts">AuthUpdateResponse</a></code>
- <code><a href="./src/resources/projects/auth.ts">AuthConfirmResponse</a></code>
- <code><a href="./src/resources/projects/auth.ts">AuthForgotPasswordResponse</a></code>
- <code><a href="./src/resources/projects/auth.ts">AuthLoginResponse</a></code>
- <code><a href="./src/resources/projects/auth.ts">AuthResetPasswordResponse</a></code>
- <code><a href="./src/resources/projects/auth.ts">AuthSettingsResponse</a></code>
- <code><a href="./src/resources/projects/auth.ts">AuthSignupResponse</a></code>

Methods:

- <code title="put /projects/{projectId}/auth/oauth-apps/{provider}">client.projects.auth.<a href="./src/resources/projects/auth.ts">update</a>(provider, { ...params }) -> AuthUpdateResponse</code>
- <code title="delete /projects/{projectId}/auth/oauth-apps/{provider}">client.projects.auth.<a href="./src/resources/projects/auth.ts">delete</a>(provider, { ...params }) -> void</code>
- <code title="post /projects/{projectId}/auth/verify-email/confirm">client.projects.auth.<a href="./src/resources/projects/auth.ts">confirm</a>(projectID, { ...params }) -> AuthConfirmResponse</code>
- <code title="post /projects/{projectId}/auth/forgot-password">client.projects.auth.<a href="./src/resources/projects/auth.ts">forgotPassword</a>(projectID, { ...params }) -> AuthForgotPasswordResponse</code>
- <code title="get /projects/{projectId}/auth/me">client.projects.auth.<a href="./src/resources/projects/auth.ts">getMe</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/auth/oauth-apps">client.projects.auth.<a href="./src/resources/projects/auth.ts">getOAuthApps</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/auth/settings">client.projects.auth.<a href="./src/resources/projects/auth.ts">getSettings</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/auth/login">client.projects.auth.<a href="./src/resources/projects/auth.ts">login</a>(projectID, { ...params }) -> AuthLoginResponse</code>
- <code title="post /projects/{projectId}/auth/logout">client.projects.auth.<a href="./src/resources/projects/auth.ts">logout</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/auth/refresh">client.projects.auth.<a href="./src/resources/projects/auth.ts">refresh</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/auth/reset-password">client.projects.auth.<a href="./src/resources/projects/auth.ts">resetPassword</a>(projectID, { ...params }) -> AuthResetPasswordResponse</code>
- <code title="post /projects/{projectId}/auth/verify-email/send">client.projects.auth.<a href="./src/resources/projects/auth.ts">send</a>(projectID) -> void</code>
- <code title="patch /projects/{projectId}/auth/settings">client.projects.auth.<a href="./src/resources/projects/auth.ts">settings</a>(projectID, { ...params }) -> AuthSettingsResponse</code>
- <code title="post /projects/{projectId}/auth/signup">client.projects.auth.<a href="./src/resources/projects/auth.ts">signup</a>(projectID, { ...params }) -> AuthSignupResponse</code>
- <code title="post /projects/{projectId}/auth/sync-users">client.projects.auth.<a href="./src/resources/projects/auth.ts">syncUsers</a>(projectID) -> void</code>

## Database

Types:

- <code><a href="./src/resources/projects/database.ts">DatabaseDedicatedResponse</a></code>

Methods:

- <code title="post /projects/{projectId}/database/dedicated">client.projects.database.<a href="./src/resources/projects/database.ts">dedicated</a>(projectID, { ...params }) -> unknown</code>
- <code title="delete /projects/{projectId}/database/dedicated">client.projects.database.<a href="./src/resources/projects/database.ts">dedicated2</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/database/dedicated/connection">client.projects.database.<a href="./src/resources/projects/database.ts">getConnection</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/database/dedicated">client.projects.database.<a href="./src/resources/projects/database.ts">getDedicated</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/database/dedicated/status">client.projects.database.<a href="./src/resources/projects/database.ts">getStatus</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/database/dedicated/restart">client.projects.database.<a href="./src/resources/projects/database.ts">restart</a>(projectID) -> void</code>

## EnvVars

Methods:

- <code title="patch /projects/{projectId}/env-vars/{envVarId}">client.projects.envVars.<a href="./src/resources/projects/env-vars/env-vars.ts">update</a>(envVarID, { ...params }) -> void</code>
- <code title="delete /projects/{projectId}/env-vars/{envVarId}">client.projects.envVars.<a href="./src/resources/projects/env-vars/env-vars.ts">delete</a>(envVarID, { ...params }) -> void</code>
- <code title="post /projects/{projectId}/env-vars">client.projects.envVars.<a href="./src/resources/projects/env-vars/env-vars.ts">envVars</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/env-vars">client.projects.envVars.<a href="./src/resources/projects/env-vars/env-vars.ts">getEnvVars</a>(projectID) -> void</code>

### Value

Methods:

- <code title="get /projects/{projectId}/env-vars/{envVarId}/value">client.projects.envVars.value.<a href="./src/resources/projects/env-vars/value.ts">getValue</a>(envVarID, { ...params }) -> void</code>

## Environments

Methods:

- <code title="patch /projects/{projectId}/environments/{envId}">client.projects.environments.<a href="./src/resources/projects/environments/environments.ts">update</a>(envID, { ...params }) -> void</code>
- <code title="delete /projects/{projectId}/environments/{envId}">client.projects.environments.<a href="./src/resources/projects/environments/environments.ts">delete</a>(envID, { ...params }) -> void</code>
- <code title="post /projects/{projectId}/environments/backfill-urls">client.projects.environments.<a href="./src/resources/projects/environments/environments.ts">backfillURLs</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/environments/bootstrap">client.projects.environments.<a href="./src/resources/projects/environments/environments.ts">bootstrap</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/environments">client.projects.environments.<a href="./src/resources/projects/environments/environments.ts">environments</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/environments">client.projects.environments.<a href="./src/resources/projects/environments/environments.ts">getEnvironments</a>(projectID) -> void</code>

### DomainStatus

Methods:

- <code title="get /projects/{projectId}/environments/{envId}/domain-status">client.projects.environments.domainStatus.<a href="./src/resources/projects/environments/domain-status.ts">getDomainStatus</a>(envID, { ...params }) -> void</code>

### DomainVerification

Methods:

- <code title="get /projects/{projectId}/environments/{envId}/domain-verification">client.projects.environments.domainVerification.<a href="./src/resources/projects/environments/domain-verification.ts">getDomainVerification</a>(envID, { ...params }) -> void</code>

### ProvisionSsl

Methods:

- <code title="post /projects/{projectId}/environments/{envId}/provision-ssl">client.projects.environments.provisionSsl.<a href="./src/resources/projects/environments/provision-ssl.ts">provisionSsl</a>(envID, { ...params }) -> void</code>

### VerifyCname

Methods:

- <code title="post /projects/{projectId}/environments/{envId}/verify-cname">client.projects.environments.verifyCname.<a href="./src/resources/projects/environments/verify-cname.ts">verifyCname</a>(envID, { ...params }) -> void</code>

### VerifyDomain

Methods:

- <code title="post /projects/{projectId}/environments/{envId}/verify-domain">client.projects.environments.verifyDomain.<a href="./src/resources/projects/environments/verify-domain.ts">verifyDomain</a>(envID, { ...params }) -> void</code>

## GitHub

Methods:

- <code title="post /projects/{projectId}/github/branch">client.projects.github.<a href="./src/resources/projects/github.ts">branch</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/github/connect">client.projects.github.<a href="./src/resources/projects/github.ts">connect</a>(projectID) -> void</code>
- <code title="delete /projects/{projectId}/github/disconnect">client.projects.github.<a href="./src/resources/projects/github.ts">disconnect</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/github/branches">client.projects.github.<a href="./src/resources/projects/github.ts">getBranches</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/github/repos">client.projects.github.<a href="./src/resources/projects/github.ts">getRepos</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/github/status">client.projects.github.<a href="./src/resources/projects/github.ts">getStatus</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/github/tracked-repos">client.projects.github.<a href="./src/resources/projects/github.ts">getTrackedRepos</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/github/pull">client.projects.github.<a href="./src/resources/projects/github.ts">pull</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/github/push">client.projects.github.<a href="./src/resources/projects/github.ts">push</a>(projectID) -> void</code>

## Infrastructure

Methods:

- <code title="delete /projects/{projectId}/infrastructure/{instanceId}">client.projects.infrastructure.<a href="./src/resources/projects/infrastructure/infrastructure.ts">delete</a>(instanceID, { ...params }) -> void</code>
- <code title="get /projects/{projectId}/infrastructure">client.projects.infrastructure.<a href="./src/resources/projects/infrastructure/infrastructure.ts">getInfrastructure</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/infrastructure/migration-status">client.projects.infrastructure.<a href="./src/resources/projects/infrastructure/infrastructure.ts">getMigrationStatus</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/infrastructure/migration/progress">client.projects.infrastructure.<a href="./src/resources/projects/infrastructure/infrastructure.ts">getProgress</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/infrastructure/provision">client.projects.infrastructure.<a href="./src/resources/projects/infrastructure/infrastructure.ts">provision</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/infrastructure/provision-custom">client.projects.infrastructure.<a href="./src/resources/projects/infrastructure/infrastructure.ts">provisionCustom</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/infrastructure/migration/retry">client.projects.infrastructure.<a href="./src/resources/projects/infrastructure/infrastructure.ts">retry</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/infrastructure/migration/rollback">client.projects.infrastructure.<a href="./src/resources/projects/infrastructure/infrastructure.ts">rollback</a>(projectID) -> void</code>

### Metrics

Methods:

- <code title="get /projects/{projectId}/infrastructure/{instanceId}/metrics">client.projects.infrastructure.metrics.<a href="./src/resources/projects/infrastructure/metrics.ts">getMetrics</a>(instanceID, { ...params }) -> void</code>

### MigrateNow

Methods:

- <code title="post /projects/{projectId}/infrastructure/{instanceId}/migrate-now">client.projects.infrastructure.migrateNow.<a href="./src/resources/projects/infrastructure/migrate-now.ts">migrateNow</a>(instanceID, { ...params }) -> void</code>

### Replicas

Methods:

- <code title="get /projects/{projectId}/infrastructure/{instanceId}/replicas">client.projects.infrastructure.replicas.<a href="./src/resources/projects/infrastructure/replicas.ts">getReplicas</a>(instanceID, { ...params }) -> void</code>
- <code title="post /projects/{projectId}/infrastructure/{instanceId}/replica">client.projects.infrastructure.replicas.<a href="./src/resources/projects/infrastructure/replicas.ts">replica</a>(instanceID, { ...params }) -> void</code>

### Resize

Methods:

- <code title="post /projects/{projectId}/infrastructure/{instanceId}/resize">client.projects.infrastructure.resize.<a href="./src/resources/projects/infrastructure/resize.ts">resize</a>(instanceID, { ...params }) -> void</code>

### ResizeCustom

Methods:

- <code title="post /projects/{projectId}/infrastructure/{instanceId}/resize-custom">client.projects.infrastructure.resizeCustom.<a href="./src/resources/projects/infrastructure/resize-custom.ts">resizeCustom</a>(instanceID, { ...params }) -> void</code>

### Start

Methods:

- <code title="post /projects/{projectId}/infrastructure/{instanceId}/start">client.projects.infrastructure.start.<a href="./src/resources/projects/infrastructure/start.ts">start</a>(instanceID, { ...params }) -> void</code>

### Stop

Methods:

- <code title="post /projects/{projectId}/infrastructure/{instanceId}/stop">client.projects.infrastructure.stop.<a href="./src/resources/projects/infrastructure/stop.ts">stop</a>(instanceID, { ...params }) -> void</code>

### UpgradeOptions

Methods:

- <code title="get /projects/{projectId}/infrastructure/{instanceId}/upgrade-options">client.projects.infrastructure.upgradeOptions.<a href="./src/resources/projects/infrastructure/upgrade-options.ts">getUpgradeOptions</a>(instanceID, { ...params }) -> void</code>

## Members

Methods:

- <code title="delete /projects/{projectId}/members/{userId}">client.projects.members.<a href="./src/resources/projects/members.ts">delete</a>(userID, { ...params }) -> void</code>
- <code title="get /projects/{projectId}/members">client.projects.members.<a href="./src/resources/projects/members.ts">getMembers</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/members">client.projects.members.<a href="./src/resources/projects/members.ts">members</a>(projectID) -> void</code>

## Region

Types:

- <code><a href="./src/resources/projects/region.ts">RegionRegionResponse</a></code>

Methods:

- <code title="get /projects/{projectId}/region">client.projects.region.<a href="./src/resources/projects/region.ts">getRegion</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/region">client.projects.region.<a href="./src/resources/projects/region.ts">region</a>(projectID, { ...params }) -> RegionRegionResponse</code>

## Settings

Methods:

- <code title="patch /projects/{projectId}/settings/addons">client.projects.settings.<a href="./src/resources/projects/settings.ts">addons</a>(projectID) -> void</code>
- <code title="patch /projects/{projectId}/settings/api">client.projects.settings.<a href="./src/resources/projects/settings.ts">api</a>(projectID) -> void</code>
- <code title="patch /projects/{projectId}/settings/compute">client.projects.settings.<a href="./src/resources/projects/settings.ts">compute</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/settings/addons">client.projects.settings.<a href="./src/resources/projects/settings.ts">getAddons</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/settings/api">client.projects.settings.<a href="./src/resources/projects/settings.ts">getAPI</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/settings/compute">client.projects.settings.<a href="./src/resources/projects/settings.ts">getCompute</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/settings/jwt">client.projects.settings.<a href="./src/resources/projects/settings.ts">getJwt</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/settings">client.projects.settings.<a href="./src/resources/projects/settings.ts">getSettings</a>(projectID) -> void</code>
- <code title="patch /projects/{projectId}/settings/jwt">client.projects.settings.<a href="./src/resources/projects/settings.ts">jwt</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/settings/jwt/rotate">client.projects.settings.<a href="./src/resources/projects/settings.ts">rotate</a>(projectID) -> void</code>

## Storage

Types:

- <code><a href="./src/resources/projects/storage.ts">StorageSettingsResponse</a></code>

Methods:

- <code title="get /projects/{projectId}/storage/settings">client.projects.storage.<a href="./src/resources/projects/storage.ts">getSettings</a>(projectID) -> void</code>
- <code title="patch /projects/{projectId}/storage/settings">client.projects.storage.<a href="./src/resources/projects/storage.ts">settings</a>(projectID, { ...params }) -> StorageSettingsResponse</code>

## Terminal

Methods:

- <code title="post /projects/{projectId}/terminal/exec">client.projects.terminal.<a href="./src/resources/projects/terminal.ts">exec</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/terminal/sessions">client.projects.terminal.<a href="./src/resources/projects/terminal.ts">getSessions</a>(projectID) -> void</code>

## Users

Types:

- <code><a href="./src/resources/projects/users/users.ts">UserUpdateResponse</a></code>
- <code><a href="./src/resources/projects/users/users.ts">UserUsersResponse</a></code>

Methods:

- <code title="get /projects/{projectId}/users/{userId}">client.projects.users.<a href="./src/resources/projects/users/users.ts">retrieve</a>(userID, { ...params }) -> void</code>
- <code title="patch /projects/{projectId}/users/{userId}">client.projects.users.<a href="./src/resources/projects/users/users.ts">update</a>(userID, { ...params }) -> UserUpdateResponse</code>
- <code title="delete /projects/{projectId}/users/{userId}">client.projects.users.<a href="./src/resources/projects/users/users.ts">delete</a>(userID, { ...params }) -> void</code>
- <code title="get /projects/{projectId}/users">client.projects.users.<a href="./src/resources/projects/users/users.ts">getUsers</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/users">client.projects.users.<a href="./src/resources/projects/users/users.ts">users</a>(projectID, { ...params }) -> UserUsersResponse</code>

### Ban

Types:

- <code><a href="./src/resources/projects/users/ban.ts">BanBanResponse</a></code>

Methods:

- <code title="post /projects/{projectId}/users/{userId}/ban">client.projects.users.ban.<a href="./src/resources/projects/users/ban.ts">ban</a>(userID, { ...params }) -> BanBanResponse</code>

### Sessions

Methods:

- <code title="delete /projects/{projectId}/users/{userId}/sessions/{sessionId}">client.projects.users.sessions.<a href="./src/resources/projects/users/sessions.ts">delete</a>(sessionID, { ...params }) -> void</code>
- <code title="get /projects/{projectId}/users/{userId}/sessions">client.projects.users.sessions.<a href="./src/resources/projects/users/sessions.ts">getSessions</a>(userID, { ...params }) -> void</code>
- <code title="post /projects/{projectId}/users/{userId}/sessions/revoke-all">client.projects.users.sessions.<a href="./src/resources/projects/users/sessions.ts">revokeAll</a>(userID, { ...params }) -> void</code>

### Unban

Methods:

- <code title="post /projects/{projectId}/users/{userId}/unban">client.projects.users.unban.<a href="./src/resources/projects/users/unban.ts">unban</a>(userID, { ...params }) -> void</code>

# Quickstart

## Project

Types:

- <code><a href="./src/resources/quickstart/project/project.ts">ProjectRetrieveResponse</a></code>

Methods:

- <code title="get /quickstart/project/{projectId}">client.quickstart.project.<a href="./src/resources/quickstart/project/project.ts">retrieve</a>(projectID, { ...params }) -> string</code>

### Json

Types:

- <code><a href="./src/resources/quickstart/project/json.ts">JsonGetJsonResponse</a></code>

Methods:

- <code title="get /quickstart/project/{projectId}/json">client.quickstart.project.json.<a href="./src/resources/quickstart/project/json.ts">getJson</a>(projectID) -> JsonGetJsonResponse</code>

# Realtime

## Connections

### Project

Methods:

- <code title="get /realtime/connections/project/{projectId}">client.realtime.connections.project.<a href="./src/resources/realtime/connections/project.ts">retrieve</a>(projectID) -> void</code>

## EnableAll

Methods:

- <code title="post /realtime/enable-all">client.realtime.enableAll.<a href="./src/resources/realtime/enable-all.ts">create</a>() -> void</code>

## Events

### Project

Methods:

- <code title="get /realtime/events/project/{projectId}">client.realtime.events.project.<a href="./src/resources/realtime/events/project.ts">retrieve</a>(projectID) -> void</code>

## Install

Methods:

- <code title="post /realtime/install">client.realtime.install.<a href="./src/resources/realtime/install.ts">create</a>() -> void</code>

## Stats

### Project

Methods:

- <code title="get /realtime/stats/project/{projectId}">client.realtime.stats.project.<a href="./src/resources/realtime/stats/project.ts">retrieve</a>(projectID) -> void</code>

## Status

### Project

Methods:

- <code title="get /realtime/status/project/{projectId}">client.realtime.status.project.<a href="./src/resources/realtime/status/project.ts">retrieve</a>(projectID) -> void</code>

## Subscriptions

### Project

Methods:

- <code title="get /realtime/subscriptions/project/{projectId}">client.realtime.subscriptions.project.<a href="./src/resources/realtime/subscriptions/project.ts">retrieve</a>(projectID) -> void</code>

# Refunds

Methods:

- <code title="get /refunds/{id}">client.refunds.<a href="./src/resources/refunds/refunds.ts">retrieve</a>(id) -> void</code>

## Org

Methods:

- <code title="get /refunds/org/{orgId}">client.refunds.org.<a href="./src/resources/refunds/org.ts">retrieve</a>(orgID) -> void</code>

# Regions

Methods:

- <code title="post /regions/">client.regions.<a href="./src/resources/regions/regions.ts">create</a>() -> void</code>
- <code title="get /regions/{key}">client.regions.<a href="./src/resources/regions/regions.ts">retrieve</a>(key) -> void</code>
- <code title="patch /regions/{key}">client.regions.<a href="./src/resources/regions/regions.ts">update</a>(key) -> void</code>
- <code title="get /regions/">client.regions.<a href="./src/resources/regions/regions.ts">list</a>() -> void</code>

## All

Methods:

- <code title="get /regions/all">client.regions.all.<a href="./src/resources/regions/all.ts">list</a>() -> void</code>

## Health

Methods:

- <code title="get /regions/health">client.regions.health.<a href="./src/resources/regions/health/health.ts">list</a>() -> void</code>

### Check

Methods:

- <code title="post /regions/health/check">client.regions.health.check.<a href="./src/resources/regions/health/check.ts">create</a>() -> void</code>

## Metrics

Methods:

- <code title="get /regions/{key}/metrics">client.regions.metrics.<a href="./src/resources/regions/metrics.ts">getMetrics</a>(key) -> void</code>

# Rls

## Policies

Methods:

- <code title="post /rls/policies/{projectId}">client.rls.policies.<a href="./src/resources/rls/policies/policies.ts">create</a>(projectID) -> void</code>
- <code title="get /rls/policies/{projectId}">client.rls.policies.<a href="./src/resources/rls/policies/policies.ts">retrieve</a>(projectID) -> void</code>
- <code title="patch /rls/policies/{policyId}">client.rls.policies.<a href="./src/resources/rls/policies/policies.ts">update</a>(policyID) -> void</code>
- <code title="delete /rls/policies/{policyId}">client.rls.policies.<a href="./src/resources/rls/policies/policies.ts">delete</a>(policyID) -> void</code>

### Toggle

Methods:

- <code title="post /rls/policies/{policyId}/toggle">client.rls.policies.toggle.<a href="./src/resources/rls/policies/toggle.ts">toggle</a>(policyID) -> void</code>

# SchemaEngine

## Apply

Types:

- <code><a href="./src/resources/schema-engine/apply.ts">ApplyCreateResponse</a></code>

Methods:

- <code title="post /schema-engine/apply">client.schemaEngine.apply.<a href="./src/resources/schema-engine/apply.ts">create</a>({ ...params }) -> ApplyCreateResponse</code>

## Changes

Types:

- <code><a href="./src/resources/schema-engine/changes.ts">ChangeGetChangesResponse</a></code>

Methods:

- <code title="get /schema-engine/{projectId}/changes">client.schemaEngine.changes.<a href="./src/resources/schema-engine/changes.ts">getChanges</a>(projectID) -> ChangeGetChangesResponse</code>

## Introspect

Types:

- <code><a href="./src/resources/schema-engine/introspect.ts">IntrospectRetrieveResponse</a></code>

Methods:

- <code title="get /schema-engine/introspect/{projectId}">client.schemaEngine.introspect.<a href="./src/resources/schema-engine/introspect.ts">retrieve</a>(projectID) -> IntrospectRetrieveResponse</code>

## Migrations

### Project

Types:

- <code><a href="./src/resources/schema-engine/migrations/project.ts">ProjectRetrieveResponse</a></code>

Methods:

- <code title="get /schema-engine/migrations/project/{projectId}">client.schemaEngine.migrations.project.<a href="./src/resources/schema-engine/migrations/project.ts">retrieve</a>(projectID) -> ProjectRetrieveResponse</code>

## Preview

Types:

- <code><a href="./src/resources/schema-engine/preview.ts">PreviewCreateResponse</a></code>

Methods:

- <code title="post /schema-engine/preview">client.schemaEngine.preview.<a href="./src/resources/schema-engine/preview.ts">create</a>({ ...params }) -> PreviewCreateResponse</code>

## Query

Types:

- <code><a href="./src/resources/schema-engine/query.ts">QueryCreateResponse</a></code>

Methods:

- <code title="post /schema-engine/query/{projectId}">client.schemaEngine.query.<a href="./src/resources/schema-engine/query.ts">create</a>(projectID, { ...params }) -> QueryCreateResponse</code>

# Schemas

Types:

- <code><a href="./src/resources/schemas/schemas.ts">SchemaCreateResponse</a></code>

Methods:

- <code title="post /schemas/">client.schemas.<a href="./src/resources/schemas/schemas.ts">create</a>({ ...params }) -> SchemaCreateResponse</code>

## Project

Types:

- <code><a href="./src/resources/schemas/project.ts">ProjectRetrieveResponse</a></code>

Methods:

- <code title="get /schemas/project/{projectId}">client.schemas.project.<a href="./src/resources/schemas/project.ts">retrieve</a>(projectID) -> ProjectRetrieveResponse</code>

# SDK

## Generate

Methods:

- <code title="post /sdk/generate">client.sdk.generate.<a href="./src/resources/sdk/generate.ts">create</a>() -> void</code>

# Security

## Audit

Methods:

- <code title="get /security/audit/{projectId}">client.security.audit.<a href="./src/resources/security/audit.ts">retrieve</a>(projectID) -> void</code>

## Overview

Methods:

- <code title="get /security/overview/{projectId}">client.security.overview.<a href="./src/resources/security/overview.ts">retrieve</a>(projectID) -> void</code>

# SSO

## Org

Methods:

- <code title="get /sso/org/{orgId}">client.sso.org.<a href="./src/resources/sso/org/org.ts">retrieve</a>(orgID) -> void</code>

### Configure

Methods:

- <code title="post /sso/org/{orgId}/configure">client.sso.org.configure.<a href="./src/resources/sso/org/configure.ts">configure</a>(orgID) -> void</code>

# Status

Methods:

- <code title="get /status">client.status.<a href="./src/resources/status/status.ts">list</a>() -> void</code>

## Atom

Methods:

- <code title="get /status/atom">client.status.atom.<a href="./src/resources/status/atom.ts">list</a>() -> void</code>

## Incidents

Methods:

- <code title="get /status/incidents">client.status.incidents.<a href="./src/resources/status/incidents.ts">list</a>() -> void</code>

## Rss

Methods:

- <code title="get /status/rss">client.status.rss.<a href="./src/resources/status/rss.ts">list</a>() -> void</code>

## Subscribe

Types:

- <code><a href="./src/resources/status/subscribe.ts">SubscribeCreateResponse</a></code>

Methods:

- <code title="post /status/subscribe">client.status.subscribe.<a href="./src/resources/status/subscribe.ts">create</a>({ ...params }) -> SubscribeCreateResponse</code>

## Subscribers

### Count

Methods:

- <code title="get /status/subscribers/count">client.status.subscribers.count.<a href="./src/resources/status/subscribers/count.ts">list</a>() -> void</code>

## Unsubscribe

Types:

- <code><a href="./src/resources/status/unsubscribe.ts">UnsubscribeRetrieveResponse</a></code>

Methods:

- <code title="get /status/unsubscribe/{token}">client.status.unsubscribe.<a href="./src/resources/status/unsubscribe.ts">retrieve</a>(token) -> UnsubscribeRetrieveResponse</code>

## Uptime

Types:

- <code><a href="./src/resources/status/uptime.ts">UptimeRetrieveResponse</a></code>

Methods:

- <code title="get /status/uptime/{componentId}">client.status.uptime.<a href="./src/resources/status/uptime.ts">retrieve</a>(componentID) -> UptimeRetrieveResponse</code>

# Storage

## Buckets

Types:

- <code><a href="./src/resources/storage/buckets/buckets.ts">BucketCreateResponse</a></code>

Methods:

- <code title="post /storage/buckets">client.storage.buckets.<a href="./src/resources/storage/buckets/buckets.ts">create</a>({ ...params }) -> BucketCreateResponse</code>
- <code title="get /storage/buckets">client.storage.buckets.<a href="./src/resources/storage/buckets/buckets.ts">list</a>() -> void</code>

### Policies

Methods:

- <code title="put /storage/buckets/{bucketId}/policies/{policyId}">client.storage.buckets.policies.<a href="./src/resources/storage/buckets/policies/policies.ts">update</a>(policyID, { ...params }) -> void</code>
- <code title="delete /storage/buckets/{bucketId}/policies/{policyId}">client.storage.buckets.policies.<a href="./src/resources/storage/buckets/policies/policies.ts">delete</a>(policyID, { ...params }) -> void</code>
- <code title="get /storage/buckets/{bucketId}/policies">client.storage.buckets.policies.<a href="./src/resources/storage/buckets/policies/policies.ts">getPolicies</a>(bucketID) -> void</code>
- <code title="post /storage/buckets/{bucketId}/policies">client.storage.buckets.policies.<a href="./src/resources/storage/buckets/policies/policies.ts">policies</a>(bucketID) -> void</code>

#### Toggle

Methods:

- <code title="post /storage/buckets/{bucketId}/policies/{policyId}/toggle">client.storage.buckets.policies.toggle.<a href="./src/resources/storage/buckets/policies/toggle.ts">toggle</a>(policyID, { ...params }) -> void</code>

## Download

Methods:

- <code title="get /storage/download">client.storage.download.<a href="./src/resources/storage/download.ts">list</a>() -> void</code>

## DownloadURL

Types:

- <code><a href="./src/resources/storage/download-url.ts">DownloadURLCreateResponse</a></code>

Methods:

- <code title="post /storage/download-url">client.storage.downloadURL.<a href="./src/resources/storage/download-url.ts">create</a>({ ...params }) -> DownloadURLCreateResponse</code>

## Files

### Copy

Methods:

- <code title="post /storage/files/copy">client.storage.files.copy.<a href="./src/resources/storage/files/copy.ts">create</a>() -> void</code>

### DeleteBatch

Methods:

- <code title="post /storage/files/delete-batch">client.storage.files.deleteBatch.<a href="./src/resources/storage/files/delete-batch.ts">create</a>() -> void</code>

### Metadata

Methods:

- <code title="get /storage/files/{bucketId}/metadata">client.storage.files.metadata.<a href="./src/resources/storage/files/metadata.ts">getMetadata</a>(bucketID) -> void</code>
- <code title="patch /storage/files/{bucketId}/metadata">client.storage.files.metadata.<a href="./src/resources/storage/files/metadata.ts">metadata</a>(bucketID) -> void</code>

### Move

Methods:

- <code title="post /storage/files/move">client.storage.files.move.<a href="./src/resources/storage/files/move.ts">create</a>() -> void</code>

## Multipart

### Abort

Types:

- <code><a href="./src/resources/storage/multipart/abort.ts">AbortAbortResponse</a></code>

Methods:

- <code title="post /storage/multipart/{uploadId}/abort">client.storage.multipart.abort.<a href="./src/resources/storage/multipart/abort.ts">abort</a>(uploadID, { ...params }) -> AbortAbortResponse</code>

### Complete

Types:

- <code><a href="./src/resources/storage/multipart/complete.ts">CompleteCompleteResponse</a></code>

Methods:

- <code title="post /storage/multipart/{uploadId}/complete">client.storage.multipart.complete.<a href="./src/resources/storage/multipart/complete.ts">complete</a>(uploadID, { ...params }) -> CompleteCompleteResponse</code>

### Create

Types:

- <code><a href="./src/resources/storage/multipart/create.ts">CreateCreateResponse</a></code>

Methods:

- <code title="post /storage/multipart/create">client.storage.multipart.create.<a href="./src/resources/storage/multipart/create.ts">create</a>({ ...params }) -> CreateCreateResponse</code>

### PartURL

Types:

- <code><a href="./src/resources/storage/multipart/part-url.ts">PartURLPartURLResponse</a></code>

Methods:

- <code title="post /storage/multipart/{uploadId}/part-url">client.storage.multipart.partURL.<a href="./src/resources/storage/multipart/part-url.ts">partURL</a>(uploadID, { ...params }) -> PartURLPartURLResponse</code>

## Upload

Methods:

- <code title="post /storage/upload">client.storage.upload.<a href="./src/resources/storage/upload.ts">create</a>() -> void</code>

## UploadBase64

Types:

- <code><a href="./src/resources/storage/upload-base64.ts">UploadBase64CreateResponse</a></code>

Methods:

- <code title="post /storage/upload-base64">client.storage.uploadBase64.<a href="./src/resources/storage/upload-base64.ts">create</a>({ ...params }) -> UploadBase64CreateResponse</code>

## UploadFromURL

Methods:

- <code title="post /storage/upload-from-url">client.storage.uploadFromURL.<a href="./src/resources/storage/upload-from-url.ts">create</a>() -> void</code>

## UploadURL

Types:

- <code><a href="./src/resources/storage/upload-url.ts">UploadURLCreateResponse</a></code>

Methods:

- <code title="post /storage/upload-url">client.storage.uploadURL.<a href="./src/resources/storage/upload-url.ts">create</a>({ ...params }) -> UploadURLCreateResponse</code>

# Templates

Methods:

- <code title="post /templates/">client.templates.<a href="./src/resources/templates/templates.ts">create</a>() -> void</code>
- <code title="get /templates/{slug}">client.templates.<a href="./src/resources/templates/templates.ts">retrieve</a>(slug) -> void</code>
- <code title="get /templates/">client.templates.<a href="./src/resources/templates/templates.ts">list</a>() -> void</code>

## CreateProject

Methods:

- <code title="post /templates/create-project">client.templates.createProject.<a href="./src/resources/templates/create-project.ts">create</a>() -> void</code>

## Install

### Apply

Methods:

- <code title="post /templates/install/apply">client.templates.install.apply.<a href="./src/resources/templates/install/apply.ts">create</a>() -> void</code>

### Preview

Methods:

- <code title="post /templates/install/preview">client.templates.install.preview.<a href="./src/resources/templates/install/preview.ts">create</a>() -> void</code>

### Rollback

Methods:

- <code title="post /templates/install/{installId}/rollback">client.templates.install.rollback.<a href="./src/resources/templates/install/rollback.ts">rollback</a>(installID) -> void</code>

# Users

## Me

Methods:

- <code title="patch /users/me">client.users.me.<a href="./src/resources/users/me/me.ts">update</a>() -> void</code>
- <code title="get /users/me">client.users.me.<a href="./src/resources/users/me/me.ts">list</a>() -> void</code>

### ChangePassword

Methods:

- <code title="post /users/me/change-password">client.users.me.changePassword.<a href="./src/resources/users/me/change-password.ts">create</a>() -> void</code>

### Preferences

Methods:

- <code title="patch /users/me/preferences">client.users.me.preferences.<a href="./src/resources/users/me/preferences.ts">update</a>() -> void</code>
- <code title="get /users/me/preferences">client.users.me.preferences.<a href="./src/resources/users/me/preferences.ts">list</a>() -> void</code>

### RequestAccountDelete

Methods:

- <code title="post /users/me/request-account-delete">client.users.me.requestAccountDelete.<a href="./src/resources/users/me/request-account-delete.ts">create</a>() -> void</code>

# V1

## Health

Methods:

- <code title="get /v1/health">client.v1.health.<a href="./src/resources/v1/health.ts">list</a>() -> void</code>

## Project

Methods:

- <code title="get /v1/project">client.v1.project.<a href="./src/resources/v1/project.ts">list</a>() -> void</code>
