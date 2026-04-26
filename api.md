# VaifStudio

Methods:

- <code title="get /">client.<a href="./src/index.ts">retrieve</a>() -> void</code>

# Orgs

Methods:

- <code title="post /orgs/">client.orgs.<a href="./src/resources/orgs/orgs.ts">create</a>() -> void</code>
- <code title="get /orgs/">client.orgs.<a href="./src/resources/orgs/orgs.ts">list</a>() -> void</code>
- <code title="get /orgs/check-name">client.orgs.<a href="./src/resources/orgs/orgs.ts">checkName</a>() -> void</code>
- <code title="get /orgs/{orgId}/membership">client.orgs.<a href="./src/resources/orgs/orgs.ts">retrieveMembership</a>(orgID) -> void</code>

## Members

Methods:

- <code title="get /orgs/{orgId}/members">client.orgs.members.<a href="./src/resources/orgs/members.ts">list</a>(orgID) -> void</code>
- <code title="post /orgs/{orgId}/members/invite">client.orgs.members.<a href="./src/resources/orgs/members.ts">invite</a>(orgID) -> void</code>

## Invites

Methods:

- <code title="get /orgs/{orgId}/invites">client.orgs.invites.<a href="./src/resources/orgs/invites.ts">list</a>(orgID) -> void</code>
- <code title="delete /orgs/{orgId}/invites/{inviteId}">client.orgs.invites.<a href="./src/resources/orgs/invites.ts">delete</a>(inviteID, { ...params }) -> void</code>
- <code title="post /orgs/invites/accept">client.orgs.invites.<a href="./src/resources/orgs/invites.ts">accept</a>() -> void</code>

## Profile

Methods:

- <code title="get /orgs/{orgId}/profile">client.orgs.profile.<a href="./src/resources/orgs/profile.ts">retrieve</a>(orgID) -> void</code>
- <code title="patch /orgs/{orgId}/profile">client.orgs.profile.<a href="./src/resources/orgs/profile.ts">update</a>(orgID) -> void</code>

## BillingContacts

Types:

- <code><a href="./src/resources/orgs/billing-contacts.ts">BillingContactCreateResponse</a></code>
- <code><a href="./src/resources/orgs/billing-contacts.ts">BillingContactListResponse</a></code>
- <code><a href="./src/resources/orgs/billing-contacts.ts">BillingContactDeleteResponse</a></code>

Methods:

- <code title="post /orgs/{orgId}/billing-contacts">client.orgs.billingContacts.<a href="./src/resources/orgs/billing-contacts.ts">create</a>(orgID, { ...params }) -> BillingContactCreateResponse</code>
- <code title="get /orgs/{orgId}/billing-contacts">client.orgs.billingContacts.<a href="./src/resources/orgs/billing-contacts.ts">list</a>(orgID) -> BillingContactListResponse</code>
- <code title="delete /orgs/{orgId}/billing-contacts/{contactId}">client.orgs.billingContacts.<a href="./src/resources/orgs/billing-contacts.ts">delete</a>(contactID, { ...params }) -> BillingContactDeleteResponse</code>

# Schemas

Types:

- <code><a href="./src/resources/schemas.ts">SchemaCreateResponse</a></code>
- <code><a href="./src/resources/schemas.ts">SchemaListForProjectResponse</a></code>

Methods:

- <code title="post /schemas/">client.schemas.<a href="./src/resources/schemas.ts">create</a>({ ...params }) -> SchemaCreateResponse</code>
- <code title="get /schemas/project/{projectId}">client.schemas.<a href="./src/resources/schemas.ts">listForProject</a>(projectID) -> SchemaListForProjectResponse</code>

# Logs

## Project

Types:

- <code><a href="./src/resources/logs/project.ts">ProjectListResponse</a></code>

Methods:

- <code title="get /logs/project/{projectId}">client.logs.project.<a href="./src/resources/logs/project.ts">list</a>(projectID, { ...params }) -> ProjectListResponse</code>
- <code title="get /logs/project/{projectId}/stream">client.logs.project.<a href="./src/resources/logs/project.ts">stream</a>(projectID) -> void</code>

# Generated

Methods:

- <code title="post /generated/{table}">client.generated.<a href="./src/resources/generated/generated.ts">create</a>(table) -> void</code>
- <code title="get /generated/{table}/{id}">client.generated.<a href="./src/resources/generated/generated.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="patch /generated/{table}/{id}">client.generated.<a href="./src/resources/generated/generated.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /generated/{table}">client.generated.<a href="./src/resources/generated/generated.ts">list</a>(table) -> void</code>
- <code title="delete /generated/{table}/{id}">client.generated.<a href="./src/resources/generated/generated.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /generated/{table}/aggregate">client.generated.<a href="./src/resources/generated/generated.ts">aggregate</a>(table) -> void</code>
- <code title="post /generated/{table}/query">client.generated.<a href="./src/resources/generated/generated.ts">query</a>(table) -> void</code>
- <code title="get /generated/{table}/search">client.generated.<a href="./src/resources/generated/generated.ts">search</a>(table) -> void</code>

## Bulk

Methods:

- <code title="post /generated/{table}/bulk">client.generated.bulk.<a href="./src/resources/generated/bulk.ts">create</a>(table) -> void</code>
- <code title="patch /generated/{table}/bulk">client.generated.bulk.<a href="./src/resources/generated/bulk.ts">update</a>(table) -> void</code>
- <code title="delete /generated/{table}/bulk">client.generated.bulk.<a href="./src/resources/generated/bulk.ts">delete</a>(table) -> void</code>

# SchemaEngine

Types:

- <code><a href="./src/resources/schema-engine/schema-engine.ts">SchemaEngineApplyResponse</a></code>
- <code><a href="./src/resources/schema-engine/schema-engine.ts">SchemaEngineExecuteQueryResponse</a></code>
- <code><a href="./src/resources/schema-engine/schema-engine.ts">SchemaEngineGetChangesResponse</a></code>
- <code><a href="./src/resources/schema-engine/schema-engine.ts">SchemaEngineIntrospectResponse</a></code>
- <code><a href="./src/resources/schema-engine/schema-engine.ts">SchemaEnginePreviewResponse</a></code>

Methods:

- <code title="post /schema-engine/apply">client.schemaEngine.<a href="./src/resources/schema-engine/schema-engine.ts">apply</a>({ ...params }) -> SchemaEngineApplyResponse</code>
- <code title="post /schema-engine/query/{projectId}">client.schemaEngine.<a href="./src/resources/schema-engine/schema-engine.ts">executeQuery</a>(projectID, { ...params }) -> SchemaEngineExecuteQueryResponse</code>
- <code title="get /schema-engine/{projectId}/changes">client.schemaEngine.<a href="./src/resources/schema-engine/schema-engine.ts">getChanges</a>(projectID) -> SchemaEngineGetChangesResponse</code>
- <code title="get /schema-engine/introspect/{projectId}">client.schemaEngine.<a href="./src/resources/schema-engine/schema-engine.ts">introspect</a>(projectID) -> SchemaEngineIntrospectResponse</code>
- <code title="post /schema-engine/preview">client.schemaEngine.<a href="./src/resources/schema-engine/schema-engine.ts">preview</a>({ ...params }) -> SchemaEnginePreviewResponse</code>

## Migrations

Types:

- <code><a href="./src/resources/schema-engine/migrations.ts">MigrationListResponse</a></code>

Methods:

- <code title="get /schema-engine/migrations/project/{projectId}">client.schemaEngine.migrations.<a href="./src/resources/schema-engine/migrations.ts">list</a>(projectID) -> MigrationListResponse</code>

# Realtime

Methods:

- <code title="post /realtime/enable-all">client.realtime.<a href="./src/resources/realtime/realtime.ts">enableAll</a>() -> void</code>
- <code title="post /realtime/install">client.realtime.<a href="./src/resources/realtime/realtime.ts">install</a>() -> void</code>

## Status

Methods:

- <code title="get /realtime/status/project/{projectId}">client.realtime.status.<a href="./src/resources/realtime/status.ts">retrieve</a>(projectID) -> void</code>

## Stats

Methods:

- <code title="get /realtime/stats/project/{projectId}">client.realtime.stats.<a href="./src/resources/realtime/stats.ts">retrieve</a>(projectID) -> void</code>

## Connections

Methods:

- <code title="get /realtime/connections/project/{projectId}">client.realtime.connections.<a href="./src/resources/realtime/connections.ts">list</a>(projectID) -> void</code>

## Subscriptions

Methods:

- <code title="get /realtime/subscriptions/project/{projectId}">client.realtime.subscriptions.<a href="./src/resources/realtime/subscriptions.ts">list</a>(projectID) -> void</code>

## Events

Methods:

- <code title="get /realtime/events/project/{projectId}">client.realtime.events.<a href="./src/resources/realtime/events.ts">list</a>(projectID) -> void</code>

# Functions

Types:

- <code><a href="./src/resources/functions/functions.ts">FunctionCreateResponse</a></code>
- <code><a href="./src/resources/functions/functions.ts">FunctionUpdateResponse</a></code>
- <code><a href="./src/resources/functions/functions.ts">FunctionUpdateSourceResponse</a></code>

Methods:

- <code title="post /functions/">client.functions.<a href="./src/resources/functions/functions.ts">create</a>({ ...params }) -> unknown</code>
- <code title="get /functions/{functionId}">client.functions.<a href="./src/resources/functions/functions.ts">retrieve</a>(functionID) -> void</code>
- <code title="patch /functions/{functionId}">client.functions.<a href="./src/resources/functions/functions.ts">update</a>(functionID, { ...params }) -> unknown</code>
- <code title="delete /functions/{functionId}">client.functions.<a href="./src/resources/functions/functions.ts">delete</a>(functionID) -> void</code>
- <code title="get /functions/{functionId}/deploy-status">client.functions.<a href="./src/resources/functions/functions.ts">getDeployStatus</a>(functionID) -> void</code>
- <code title="get /functions/{functionId}/logs">client.functions.<a href="./src/resources/functions/functions.ts">getLogs</a>(functionID) -> void</code>
- <code title="get /functions/{functionId}/metrics">client.functions.<a href="./src/resources/functions/functions.ts">getMetrics</a>(functionID) -> void</code>
- <code title="post /functions/{functionIdOrName}/invoke">client.functions.<a href="./src/resources/functions/functions.ts">invoke</a>(functionIDOrName) -> void</code>
- <code title="put /functions/{functionId}/source">client.functions.<a href="./src/resources/functions/functions.ts">updateSource</a>(functionID, { ...params }) -> FunctionUpdateSourceResponse</code>

## Project

Methods:

- <code title="get /functions/project/{projectId}">client.functions.project.<a href="./src/resources/functions/project.ts">retrieve</a>(projectID) -> void</code>
- <code title="get /functions/project/{projectId}/name/{functionName}">client.functions.project.<a href="./src/resources/functions/project.ts">retrieveByName</a>(functionName, { ...params }) -> void</code>

## Invocations

Methods:

- <code title="get /functions/invocations/function/{functionId}">client.functions.invocations.<a href="./src/resources/functions/invocations.ts">retrieve</a>(functionID) -> void</code>
- <code title="get /functions/invocations">client.functions.invocations.<a href="./src/resources/functions/invocations.ts">list</a>() -> void</code>
- <code title="get /functions/{functionId}/invocations">client.functions.invocations.<a href="./src/resources/functions/invocations.ts">listByFunction</a>(functionID) -> void</code>

## Secrets

Types:

- <code><a href="./src/resources/functions/secrets.ts">SecretCreateResponse</a></code>
- <code><a href="./src/resources/functions/secrets.ts">SecretUpdateResponse</a></code>

Methods:

- <code title="post /functions/secrets">client.functions.secrets.<a href="./src/resources/functions/secrets.ts">create</a>({ ...params }) -> unknown</code>
- <code title="put /functions/secrets/{secretId}">client.functions.secrets.<a href="./src/resources/functions/secrets.ts">update</a>(secretID, { ...params }) -> unknown</code>
- <code title="delete /functions/secrets/{secretId}">client.functions.secrets.<a href="./src/resources/functions/secrets.ts">delete</a>(secretID) -> void</code>
- <code title="get /functions/secrets/{secretId}/value">client.functions.secrets.<a href="./src/resources/functions/secrets.ts">getValue</a>(secretID) -> void</code>
- <code title="get /functions/secrets/project/{projectId}">client.functions.secrets.<a href="./src/resources/functions/secrets.ts">listByProject</a>(projectID) -> void</code>

## Triggers

Types:

- <code><a href="./src/resources/functions/triggers.ts">TriggerCreateResponse</a></code>

Methods:

- <code title="post /functions/{functionId}/triggers">client.functions.triggers.<a href="./src/resources/functions/triggers.ts">create</a>(functionID, { ...params }) -> unknown</code>
- <code title="get /functions/{functionId}/triggers">client.functions.triggers.<a href="./src/resources/functions/triggers.ts">list</a>(functionID) -> void</code>
- <code title="delete /functions/triggers/{triggerId}">client.functions.triggers.<a href="./src/resources/functions/triggers.ts">delete</a>(triggerID) -> void</code>

## Schedule

Types:

- <code><a href="./src/resources/functions/schedule.ts">ScheduleUpdateResponse</a></code>

Methods:

- <code title="get /functions/{functionId}/schedule">client.functions.schedule.<a href="./src/resources/functions/schedule.ts">retrieve</a>(functionID) -> void</code>
- <code title="put /functions/{functionId}/schedule">client.functions.schedule.<a href="./src/resources/functions/schedule.ts">update</a>(functionID, { ...params }) -> unknown</code>
- <code title="delete /functions/{functionId}/schedule">client.functions.schedule.<a href="./src/resources/functions/schedule.ts">delete</a>(functionID) -> void</code>

# OpenAPI

Methods:

- <code title="get /openapi/full">client.openAPI.<a href="./src/resources/openapi.ts">retrieveFull</a>() -> void</code>
- <code title="get /openapi/project/{projectId}">client.openAPI.<a href="./src/resources/openapi.ts">retrieveProject</a>(projectID) -> void</code>

# SDK

Methods:

- <code title="post /sdk/generate">client.sdk.<a href="./src/resources/sdk.ts">generate</a>() -> void</code>

# Docs

Methods:

- <code title="get /docs/ai-search">client.docs.<a href="./src/resources/docs/docs.ts">aiSearch</a>() -> void</code>
- <code title="get /docs/categories">client.docs.<a href="./src/resources/docs/docs.ts">listCategories</a>() -> void</code>
- <code title="post /docs/search-click">client.docs.<a href="./src/resources/docs/docs.ts">recordSearchClick</a>() -> void</code>
- <code title="get /docs/search">client.docs.<a href="./src/resources/docs/docs.ts">search</a>() -> void</code>
- <code title="post /docs/ai-answer">client.docs.<a href="./src/resources/docs/docs.ts">submitAIAnswer</a>({ ...params }) -> void</code>
- <code title="post /docs/feedback">client.docs.<a href="./src/resources/docs/docs.ts">submitFeedback</a>() -> void</code>

## Project

Methods:

- <code title="get /docs/project/{projectId}/quickstart">client.docs.project.<a href="./src/resources/docs/project.ts">retrieveQuickstart</a>(projectID) -> void</code>

## V2

### Pages

Methods:

- <code title="get /docs/v2/pages/{slug}">client.docs.v2.pages.<a href="./src/resources/docs/v2/pages.ts">retrieve</a>(slug) -> void</code>
- <code title="get /docs/v2/pages">client.docs.v2.pages.<a href="./src/resources/docs/v2/pages.ts">list</a>() -> void</code>

## SDKs

Methods:

- <code title="get /docs/sdks">client.docs.sdks.<a href="./src/resources/docs/sdks.ts">list</a>() -> void</code>
- <code title="get /docs/sdks/{platform}">client.docs.sdks.<a href="./src/resources/docs/sdks.ts">retrieveByPlatform</a>(platform) -> void</code>
- <code title="get /docs/sdks/{sdkId}/examples">client.docs.sdks.<a href="./src/resources/docs/sdks.ts">retrieveExamples</a>(sdkID) -> void</code>

## APIEndpoints

Methods:

- <code title="get /docs/api-endpoints/{id}">client.docs.apiEndpoints.<a href="./src/resources/docs/api-endpoints.ts">retrieve</a>(id) -> void</code>
- <code title="get /docs/api-endpoints">client.docs.apiEndpoints.<a href="./src/resources/docs/api-endpoints.ts">list</a>() -> void</code>

## Examples

Methods:

- <code title="get /docs/examples/{slug}">client.docs.examples.<a href="./src/resources/docs/examples.ts">retrieve</a>(slug) -> void</code>
- <code title="get /docs/examples">client.docs.examples.<a href="./src/resources/docs/examples.ts">list</a>() -> void</code>

## Changelog

Methods:

- <code title="get /docs/changelog/{id}">client.docs.changelog.<a href="./src/resources/docs/changelog.ts">retrieve</a>(id) -> void</code>
- <code title="get /docs/changelog">client.docs.changelog.<a href="./src/resources/docs/changelog.ts">list</a>() -> void</code>

# AI

## Copilot

Types:

- <code><a href="./src/resources/ai/copilot/copilot.ts">CopilotUpdateResponse</a></code>
- <code><a href="./src/resources/ai/copilot/copilot.ts">CopilotExecuteResponse</a></code>
- <code><a href="./src/resources/ai/copilot/copilot.ts">CopilotFeedbackResponse</a></code>

Methods:

- <code title="get /ai/copilot/usage-org/{orgId}">client.ai.copilot.<a href="./src/resources/ai/copilot/copilot.ts">retrieve</a>(orgID) -> void</code>
- <code title="post /ai/copilot/rate/{messageId}">client.ai.copilot.<a href="./src/resources/ai/copilot/copilot.ts">update</a>(messageID, { ...params }) -> CopilotUpdateResponse</code>
- <code title="post /ai/copilot/execute">client.ai.copilot.<a href="./src/resources/ai/copilot/copilot.ts">execute</a>({ ...params }) -> CopilotExecuteResponse</code>
- <code title="post /ai/copilot/feedback">client.ai.copilot.<a href="./src/resources/ai/copilot/copilot.ts">feedback</a>({ ...params }) -> CopilotFeedbackResponse</code>

### Chat

Types:

- <code><a href="./src/resources/ai/copilot/chat.ts">ChatCreateResponse</a></code>

Methods:

- <code title="post /ai/copilot/chat">client.ai.copilot.chat.<a href="./src/resources/ai/copilot/chat.ts">create</a>({ ...params }) -> unknown</code>
- <code title="post /ai/copilot/chat/stream">client.ai.copilot.chat.<a href="./src/resources/ai/copilot/chat.ts">stream</a>() -> void</code>

### Generation

Methods:

- <code title="post /ai/copilot/generation/{manifestId}/cancel">client.ai.copilot.generation.<a href="./src/resources/ai/copilot/generation.ts">cancel</a>(manifestID) -> void</code>
- <code title="post /ai/copilot/generation/resume">client.ai.copilot.generation.<a href="./src/resources/ai/copilot/generation.ts">resume</a>() -> void</code>

### Manifest

Methods:

- <code title="get /ai/copilot/manifest/{manifestId}">client.ai.copilot.manifest.<a href="./src/resources/ai/copilot/manifest.ts">retrieve</a>(manifestID) -> void</code>
- <code title="post /ai/copilot/manifest/{manifestId}/pause">client.ai.copilot.manifest.<a href="./src/resources/ai/copilot/manifest.ts">pause</a>(manifestID) -> void</code>

### Session

Types:

- <code><a href="./src/resources/ai/copilot/session.ts">SessionUpdateResponse</a></code>

Methods:

- <code title="get /ai/copilot/session/{sessionId}">client.ai.copilot.session.<a href="./src/resources/ai/copilot/session.ts">retrieve</a>(sessionID) -> void</code>
- <code title="patch /ai/copilot/session/{sessionId}">client.ai.copilot.session.<a href="./src/resources/ai/copilot/session.ts">update</a>(sessionID, { ...params }) -> SessionUpdateResponse</code>
- <code title="delete /ai/copilot/session/{sessionId}">client.ai.copilot.session.<a href="./src/resources/ai/copilot/session.ts">delete</a>(sessionID) -> void</code>

### Execution

Types:

- <code><a href="./src/resources/ai/copilot/execution.ts">ExecutionResumeResponse</a></code>
- <code><a href="./src/resources/ai/copilot/execution.ts">ExecutionRollbackResponse</a></code>

Methods:

- <code title="get /ai/copilot/execution/{executionId}">client.ai.copilot.execution.<a href="./src/resources/ai/copilot/execution.ts">retrieve</a>(executionID) -> void</code>
- <code title="post /ai/copilot/execution/{executionId}/pause">client.ai.copilot.execution.<a href="./src/resources/ai/copilot/execution.ts">pause</a>(executionID) -> void</code>
- <code title="post /ai/copilot/execution/{executionId}/resume">client.ai.copilot.execution.<a href="./src/resources/ai/copilot/execution.ts">resume</a>(executionID, { ...params }) -> ExecutionResumeResponse</code>
- <code title="post /ai/copilot/execution/{executionId}/rollback">client.ai.copilot.execution.<a href="./src/resources/ai/copilot/execution.ts">rollback</a>(executionID, { ...params }) -> ExecutionRollbackResponse</code>

### Version

Methods:

- <code title="get /ai/copilot/version/{versionId}/diff/{compareVersionId}">client.ai.copilot.version.<a href="./src/resources/ai/copilot/version.ts">retrieve</a>(compareVersionID, { ...params }) -> void</code>

### Export

Methods:

- <code title="post /ai/copilot/export/{versionId}">client.ai.copilot.export.<a href="./src/resources/ai/copilot/export/export.ts">update</a>(versionID) -> void</code>
- <code title="post /ai/copilot/export/docker">client.ai.copilot.export.<a href="./src/resources/ai/copilot/export/export.ts">docker</a>() -> void</code>
- <code title="post /ai/copilot/export/github">client.ai.copilot.export.<a href="./src/resources/ai/copilot/export/export.ts">github</a>() -> void</code>
- <code title="post /ai/copilot/export/zip">client.ai.copilot.export.<a href="./src/resources/ai/copilot/export/export.ts">zip</a>() -> void</code>

#### Terraform

Methods:

- <code title="post /ai/copilot/export/terraform/aws">client.ai.copilot.export.terraform.<a href="./src/resources/ai/copilot/export/terraform.ts">aws</a>() -> void</code>
- <code title="post /ai/copilot/export/terraform/gcp">client.ai.copilot.export.terraform.<a href="./src/resources/ai/copilot/export/terraform.ts">gcp</a>() -> void</code>

### Job

Types:

- <code><a href="./src/resources/ai/copilot/job.ts">JobCreateResponse</a></code>

Methods:

- <code title="post /ai/copilot/job">client.ai.copilot.job.<a href="./src/resources/ai/copilot/job.ts">create</a>({ ...params }) -> JobCreateResponse</code>
- <code title="get /ai/copilot/job/{jobId}">client.ai.copilot.job.<a href="./src/resources/ai/copilot/job.ts">retrieve</a>(jobID) -> void</code>
- <code title="post /ai/copilot/job/{jobId}/cancel">client.ai.copilot.job.<a href="./src/resources/ai/copilot/job.ts">cancel</a>(jobID) -> void</code>
- <code title="get /ai/copilot/job/{jobId}/events">client.ai.copilot.job.<a href="./src/resources/ai/copilot/job.ts">retrieveEvents</a>(jobID) -> void</code>
- <code title="post /ai/copilot/job/{jobId}/retry">client.ai.copilot.job.<a href="./src/resources/ai/copilot/job.ts">retry</a>(jobID) -> void</code>

### Metrics

Methods:

- <code title="get /ai/copilot/metrics/org/{orgId}">client.ai.copilot.metrics.<a href="./src/resources/ai/copilot/metrics.ts">retrieve</a>(orgID) -> void</code>

### Editor

Methods:

- <code title="post /ai/copilot/editor/chat">client.ai.copilot.editor.<a href="./src/resources/ai/copilot/editor.ts">chat</a>({ ...params }) -> void</code>

### Memories

Methods:

- <code title="post /ai/copilot/memories/{memoryId}/promote">client.ai.copilot.memories.<a href="./src/resources/ai/copilot/memories.ts">promote</a>(memoryID) -> void</code>

### Deploy

Types:

- <code><a href="./src/resources/ai/copilot/deploy.ts">DeployRetrieveResponse</a></code>

Methods:

- <code title="post /ai/copilot/deploy">client.ai.copilot.deploy.<a href="./src/resources/ai/copilot/deploy.ts">create</a>({ ...params }) -> void</code>
- <code title="get /ai/copilot/deploy/history/{projectId}">client.ai.copilot.deploy.<a href="./src/resources/ai/copilot/deploy.ts">retrieve</a>(projectID, { ...params }) -> DeployRetrieveResponse</code>
- <code title="post /ai/copilot/deploy/{deployId}/rollback">client.ai.copilot.deploy.<a href="./src/resources/ai/copilot/deploy.ts">rollback</a>(deployID) -> void</code>

### Git

Methods:

- <code title="get /ai/copilot/git/files/{sessionId}">client.ai.copilot.git.<a href="./src/resources/ai/copilot/git.ts">retrieve</a>(sessionID) -> void</code>
- <code title="post /ai/copilot/git/branch">client.ai.copilot.git.<a href="./src/resources/ai/copilot/git.ts">branch</a>() -> void</code>
- <code title="post /ai/copilot/git/clone">client.ai.copilot.git.<a href="./src/resources/ai/copilot/git.ts">clone</a>() -> void</code>
- <code title="post /ai/copilot/git/commit">client.ai.copilot.git.<a href="./src/resources/ai/copilot/git.ts">commit</a>() -> void</code>
- <code title="post /ai/copilot/git/init">client.ai.copilot.git.<a href="./src/resources/ai/copilot/git.ts">init</a>() -> void</code>
- <code title="post /ai/copilot/git/pull">client.ai.copilot.git.<a href="./src/resources/ai/copilot/git.ts">pull</a>() -> void</code>
- <code title="post /ai/copilot/git/push">client.ai.copilot.git.<a href="./src/resources/ai/copilot/git.ts">push</a>() -> void</code>
- <code title="post /ai/copilot/git/write">client.ai.copilot.git.<a href="./src/resources/ai/copilot/git.ts">write</a>() -> void</code>

# Templates

Methods:

- <code title="post /templates/">client.templates.<a href="./src/resources/templates/templates.ts">create</a>() -> void</code>
- <code title="get /templates/{slug}">client.templates.<a href="./src/resources/templates/templates.ts">retrieve</a>(slug) -> void</code>
- <code title="get /templates/">client.templates.<a href="./src/resources/templates/templates.ts">list</a>() -> void</code>
- <code title="post /templates/create-project">client.templates.<a href="./src/resources/templates/templates.ts">createProject</a>() -> void</code>

## Install

Methods:

- <code title="post /templates/install/apply">client.templates.install.<a href="./src/resources/templates/install.ts">apply</a>() -> void</code>
- <code title="post /templates/install/preview">client.templates.install.<a href="./src/resources/templates/install.ts">preview</a>() -> void</code>
- <code title="post /templates/install/{installId}/rollback">client.templates.install.<a href="./src/resources/templates/install.ts">rollback</a>(installID) -> void</code>

# Plans

Types:

- <code><a href="./src/resources/plans.ts">PlanRetrieveResponse</a></code>
- <code><a href="./src/resources/plans.ts">PlanApplyResponse</a></code>
- <code><a href="./src/resources/plans.ts">PlanListForOrgResponse</a></code>
- <code><a href="./src/resources/plans.ts">PlanSaveResponse</a></code>

Methods:

- <code title="get /plans/{planId}">client.plans.<a href="./src/resources/plans.ts">retrieve</a>(planID) -> PlanRetrieveResponse</code>
- <code title="post /plans/apply">client.plans.<a href="./src/resources/plans.ts">apply</a>({ ...params }) -> PlanApplyResponse</code>
- <code title="get /plans/org/{orgId}">client.plans.<a href="./src/resources/plans.ts">listForOrg</a>(orgID) -> PlanListForOrgResponse</code>
- <code title="post /plans/save">client.plans.<a href="./src/resources/plans.ts">save</a>({ ...params }) -> PlanSaveResponse</code>

# Auth

Types:

- <code><a href="./src/resources/auth/auth.ts">AuthLoginResponse</a></code>
- <code><a href="./src/resources/auth/auth.ts">AuthLogoutResponse</a></code>
- <code><a href="./src/resources/auth/auth.ts">AuthRefreshTokenResponse</a></code>
- <code><a href="./src/resources/auth/auth.ts">AuthRequestPasswordResetResponse</a></code>
- <code><a href="./src/resources/auth/auth.ts">AuthResetPasswordResponse</a></code>
- <code><a href="./src/resources/auth/auth.ts">AuthSignupResponse</a></code>

Methods:

- <code title="post /auth/login">client.auth.<a href="./src/resources/auth/auth.ts">login</a>({ ...params }) -> AuthLoginResponse</code>
- <code title="post /auth/logout">client.auth.<a href="./src/resources/auth/auth.ts">logout</a>() -> AuthLogoutResponse</code>
- <code title="post /auth/refresh">client.auth.<a href="./src/resources/auth/auth.ts">refreshToken</a>() -> AuthRefreshTokenResponse</code>
- <code title="post /auth/forgot-password">client.auth.<a href="./src/resources/auth/auth.ts">requestPasswordReset</a>({ ...params }) -> AuthRequestPasswordResetResponse</code>
- <code title="post /auth/reset-password">client.auth.<a href="./src/resources/auth/auth.ts">resetPassword</a>({ ...params }) -> AuthResetPasswordResponse</code>
- <code title="post /auth/signup">client.auth.<a href="./src/resources/auth/auth.ts">signup</a>({ ...params }) -> AuthSignupResponse</code>

## Me

Types:

- <code><a href="./src/resources/auth/me/me.ts">MeRetrieveResponse</a></code>
- <code><a href="./src/resources/auth/me/me.ts">MeUpdateResponse</a></code>
- <code><a href="./src/resources/auth/me/me.ts">MeCheckAdminResponse</a></code>
- <code><a href="./src/resources/auth/me/me.ts">MeGetContextResponse</a></code>

Methods:

- <code title="get /auth/me">client.auth.me.<a href="./src/resources/auth/me/me.ts">retrieve</a>() -> MeRetrieveResponse</code>
- <code title="patch /auth/me">client.auth.me.<a href="./src/resources/auth/me/me.ts">update</a>({ ...params }) -> MeUpdateResponse</code>
- <code title="get /auth/me/admin">client.auth.me.<a href="./src/resources/auth/me/me.ts">checkAdmin</a>() -> MeCheckAdminResponse</code>
- <code title="get /auth/me/context">client.auth.me.<a href="./src/resources/auth/me/me.ts">getContext</a>() -> MeGetContextResponse</code>

### LinkedAccounts

Types:

- <code><a href="./src/resources/auth/me/linked-accounts.ts">LinkedAccountListResponse</a></code>
- <code><a href="./src/resources/auth/me/linked-accounts.ts">LinkedAccountUnlinkResponse</a></code>

Methods:

- <code title="get /auth/me/linked-accounts">client.auth.me.linkedAccounts.<a href="./src/resources/auth/me/linked-accounts.ts">list</a>() -> LinkedAccountListResponse</code>
- <code title="delete /auth/me/linked-accounts/{provider}">client.auth.me.linkedAccounts.<a href="./src/resources/auth/me/linked-accounts.ts">unlink</a>(provider) -> LinkedAccountUnlinkResponse</code>

## VerifyEmail

Types:

- <code><a href="./src/resources/auth/verify-email.ts">VerifyEmailConfirmResponse</a></code>
- <code><a href="./src/resources/auth/verify-email.ts">VerifyEmailSendResponse</a></code>

Methods:

- <code title="post /auth/verify-email/confirm">client.auth.verifyEmail.<a href="./src/resources/auth/verify-email.ts">confirm</a>({ ...params }) -> VerifyEmailConfirmResponse</code>
- <code title="post /auth/verify-email/send">client.auth.verifyEmail.<a href="./src/resources/auth/verify-email.ts">send</a>() -> VerifyEmailSendResponse</code>

## OAuth

Types:

- <code><a href="./src/resources/auth/oauth.ts">OAuthListProvidersResponse</a></code>

Methods:

- <code title="get /auth/oauth/{provider}/callback">client.auth.oauth.<a href="./src/resources/auth/oauth.ts">handleCallback</a>(provider, { ...params }) -> void</code>
- <code title="get /auth/oauth/{provider}">client.auth.oauth.<a href="./src/resources/auth/oauth.ts">initiate</a>(provider, { ...params }) -> void</code>
- <code title="get /auth/oauth/providers">client.auth.oauth.<a href="./src/resources/auth/oauth.ts">listProviders</a>() -> OAuthListProvidersResponse</code>

## Cli

Types:

- <code><a href="./src/resources/auth/cli.ts">CliApproveCallbackResponse</a></code>
- <code><a href="./src/resources/auth/cli.ts">CliAuthorizeResponse</a></code>
- <code><a href="./src/resources/auth/cli.ts">CliLoginResponse</a></code>
- <code><a href="./src/resources/auth/cli.ts">CliPollTokenResponse</a></code>

Methods:

- <code title="post /auth/cli/callback">client.auth.cli.<a href="./src/resources/auth/cli.ts">approveCallback</a>({ ...params }) -> CliApproveCallbackResponse</code>
- <code title="post /auth/cli/authorize">client.auth.cli.<a href="./src/resources/auth/cli.ts">authorize</a>() -> CliAuthorizeResponse</code>
- <code title="post /auth/cli/login">client.auth.cli.<a href="./src/resources/auth/cli.ts">login</a>({ ...params }) -> CliLoginResponse</code>
- <code title="post /auth/cli/token">client.auth.cli.<a href="./src/resources/auth/cli.ts">pollToken</a>({ ...params }) -> CliPollTokenResponse</code>

# Bootstrap

Methods:

- <code title="get /bootstrap/">client.bootstrap.<a href="./src/resources/bootstrap.ts">retrieve</a>() -> void</code>

# Audit

Methods:

- <code title="get /audit/org/{orgId}">client.audit.<a href="./src/resources/audit.ts">retrieveOrg</a>(orgID) -> void</code>
- <code title="get /audit/project/{projectId}">client.audit.<a href="./src/resources/audit.ts">retrieveProject</a>(projectID) -> void</code>

# Regions

Methods:

- <code title="post /regions/">client.regions.<a href="./src/resources/regions/regions.ts">create</a>() -> void</code>
- <code title="get /regions/{key}">client.regions.<a href="./src/resources/regions/regions.ts">retrieve</a>(key) -> void</code>
- <code title="patch /regions/{key}">client.regions.<a href="./src/resources/regions/regions.ts">update</a>(key) -> void</code>
- <code title="get /regions/">client.regions.<a href="./src/resources/regions/regions.ts">list</a>() -> void</code>
- <code title="get /regions/all">client.regions.<a href="./src/resources/regions/regions.ts">listAll</a>() -> void</code>
- <code title="get /regions/{key}/metrics">client.regions.<a href="./src/resources/regions/regions.ts">retrieveMetrics</a>(key) -> void</code>

## Health

Methods:

- <code title="get /regions/health">client.regions.health.<a href="./src/resources/regions/health.ts">check</a>() -> void</code>
- <code title="post /regions/health/check">client.regions.health.<a href="./src/resources/regions/health.ts">performCheck</a>() -> void</code>

# Deployments

Methods:

- <code title="get /deployments/{deploymentId}">client.deployments.<a href="./src/resources/deployments/deployments.ts">retrieve</a>(deploymentID) -> void</code>
- <code title="get /deployments/{deploymentId}/steps">client.deployments.<a href="./src/resources/deployments/deployments.ts">listSteps</a>(deploymentID) -> void</code>
- <code title="post /deployments/promote">client.deployments.<a href="./src/resources/deployments/deployments.ts">promote</a>() -> void</code>
- <code title="get /deployments/project/{projectId}">client.deployments.<a href="./src/resources/deployments/deployments.ts">retrieveByProject</a>(projectID) -> void</code>
- <code title="post /deployments/{deploymentId}/rollback">client.deployments.<a href="./src/resources/deployments/deployments.ts">rollback</a>(deploymentID) -> void</code>
- <code title="post /deployments/trigger">client.deployments.<a href="./src/resources/deployments/deployments.ts">trigger</a>() -> void</code>

## Tokens

Types:

- <code><a href="./src/resources/deployments/tokens.ts">TokenCreateResponse</a></code>
- <code><a href="./src/resources/deployments/tokens.ts">TokenListByProjectResponse</a></code>
- <code><a href="./src/resources/deployments/tokens.ts">TokenRevokeResponse</a></code>

Methods:

- <code title="post /deployments/tokens">client.deployments.tokens.<a href="./src/resources/deployments/tokens.ts">create</a>({ ...params }) -> TokenCreateResponse</code>
- <code title="get /deployments/tokens/project/{projectId}">client.deployments.tokens.<a href="./src/resources/deployments/tokens.ts">listByProject</a>(projectID) -> TokenListByProjectResponse</code>
- <code title="post /deployments/tokens/{tokenId}/revoke">client.deployments.tokens.<a href="./src/resources/deployments/tokens.ts">revoke</a>(tokenID) -> TokenRevokeResponse</code>

# Metrics

Methods:

- <code title="get /metrics/org/{orgId}">client.metrics.<a href="./src/resources/metrics/metrics.ts">retrieveOrg</a>(orgID) -> void</code>

## Project

Methods:

- <code title="get /metrics/project/{projectId}">client.metrics.project.<a href="./src/resources/metrics/project.ts">retrieve</a>(projectID) -> void</code>
- <code title="get /metrics/project/{projectId}/overview">client.metrics.project.<a href="./src/resources/metrics/project.ts">retrieveOverview</a>(projectID) -> void</code>

# Incidents

Types:

- <code><a href="./src/resources/incidents.ts">IncidentAcknowledgeResponse</a></code>
- <code><a href="./src/resources/incidents.ts">IncidentBulkAcknowledgeOrResolveResponse</a></code>
- <code><a href="./src/resources/incidents.ts">IncidentListForProjectResponse</a></code>
- <code><a href="./src/resources/incidents.ts">IncidentResolveResponse</a></code>

Methods:

- <code title="post /incidents/{incidentId}/ack">client.incidents.<a href="./src/resources/incidents.ts">acknowledge</a>(incidentID) -> IncidentAcknowledgeResponse</code>
- <code title="post /incidents/bulk">client.incidents.<a href="./src/resources/incidents.ts">bulkAcknowledgeOrResolve</a>({ ...params }) -> IncidentBulkAcknowledgeOrResolveResponse</code>
- <code title="get /incidents/project/{projectId}">client.incidents.<a href="./src/resources/incidents.ts">listForProject</a>(projectID) -> IncidentListForProjectResponse</code>
- <code title="post /incidents/{incidentId}/resolve">client.incidents.<a href="./src/resources/incidents.ts">resolve</a>(incidentID) -> IncidentResolveResponse</code>

# SSO

## Org

Methods:

- <code title="get /sso/org/{orgId}">client.sso.org.<a href="./src/resources/sso/org.ts">retrieve</a>(orgID) -> void</code>
- <code title="post /sso/org/{orgId}/configure">client.sso.org.<a href="./src/resources/sso/org.ts">configure</a>(orgID) -> void</code>

# Onboarding

## Org

Methods:

- <code title="get /onboarding/org/{orgId}">client.onboarding.org.<a href="./src/resources/onboarding/org.ts">retrieve</a>(orgID) -> void</code>
- <code title="post /onboarding/org/{orgId}/auto-setup">client.onboarding.org.<a href="./src/resources/onboarding/org.ts">autoSetup</a>(orgID) -> void</code>
- <code title="post /onboarding/org/{orgId}/complete-step">client.onboarding.org.<a href="./src/resources/onboarding/org.ts">completeStep</a>(orgID) -> void</code>

# Quickstart

## Project

Types:

- <code><a href="./src/resources/quickstart/project.ts">ProjectRetrieveResponse</a></code>
- <code><a href="./src/resources/quickstart/project.ts">ProjectRetrieveJsonResponse</a></code>

Methods:

- <code title="get /quickstart/project/{projectId}">client.quickstart.project.<a href="./src/resources/quickstart/project.ts">retrieve</a>(projectID, { ...params }) -> string</code>
- <code title="get /quickstart/project/{projectId}/json">client.quickstart.project.<a href="./src/resources/quickstart/project.ts">retrieveJson</a>(projectID) -> ProjectRetrieveJsonResponse</code>

# Entitlements

## Org

Methods:

- <code title="get /entitlements/org/{orgId}">client.entitlements.org.<a href="./src/resources/entitlements/org.ts">retrieve</a>(orgID) -> void</code>
- <code title="post /entitlements/org/{orgId}/check">client.entitlements.org.<a href="./src/resources/entitlements/org.ts">check</a>(orgID) -> void</code>

# Pricing

Methods:

- <code title="get /pricing/ai-features">client.pricing.<a href="./src/resources/pricing/pricing.ts">aiFeatures</a>() -> void</code>
- <code title="get /pricing/compare">client.pricing.<a href="./src/resources/pricing/pricing.ts">compare</a>() -> void</code>
- <code title="get /pricing/enterprise">client.pricing.<a href="./src/resources/pricing/pricing.ts">enterprise</a>() -> void</code>

## Plans

Methods:

- <code title="get /pricing/plans/{plan}">client.pricing.plans.<a href="./src/resources/pricing/plans.ts">retrieve</a>(plan) -> void</code>
- <code title="get /pricing/plans">client.pricing.plans.<a href="./src/resources/pricing/plans.ts">list</a>() -> void</code>

# Status

Types:

- <code><a href="./src/resources/status/status.ts">StatusGetUptimeResponse</a></code>
- <code><a href="./src/resources/status/status.ts">StatusSubscribeResponse</a></code>
- <code><a href="./src/resources/status/status.ts">StatusUnsubscribeResponse</a></code>

Methods:

- <code title="get /status">client.status.<a href="./src/resources/status/status.ts">retrieve</a>() -> void</code>
- <code title="get /status/atom">client.status.<a href="./src/resources/status/status.ts">getAtomFeed</a>() -> void</code>
- <code title="get /status/rss">client.status.<a href="./src/resources/status/status.ts">getRssFeed</a>() -> void</code>
- <code title="get /status/uptime/{componentId}">client.status.<a href="./src/resources/status/status.ts">getUptime</a>(componentID) -> StatusGetUptimeResponse</code>
- <code title="get /status/incidents">client.status.<a href="./src/resources/status/status.ts">listIncidents</a>() -> void</code>
- <code title="post /status/subscribe">client.status.<a href="./src/resources/status/status.ts">subscribe</a>({ ...params }) -> StatusSubscribeResponse</code>
- <code title="get /status/unsubscribe/{token}">client.status.<a href="./src/resources/status/status.ts">unsubscribe</a>(token) -> StatusUnsubscribeResponse</code>

## Subscribers

Methods:

- <code title="get /status/subscribers/count">client.status.subscribers.<a href="./src/resources/status/subscribers.ts">getCount</a>() -> void</code>

# Announcements

Methods:

- <code title="get /announcements">client.announcements.<a href="./src/resources/announcements.ts">list</a>() -> void</code>

# Maintenance

Methods:

- <code title="get /maintenance">client.maintenance.<a href="./src/resources/maintenance.ts">list</a>() -> void</code>

# Activation

Methods:

- <code title="get /activation/org/{orgId}">client.activation.<a href="./src/resources/activation.ts">retrieveOrg</a>(orgID) -> void</code>

# Billing

Types:

- <code><a href="./src/resources/billing/billing.ts">BillingCreatePortalResponse</a></code>
- <code><a href="./src/resources/billing/billing.ts">BillingRedeemPromoResponse</a></code>

Methods:

- <code title="post /billing/portal">client.billing.<a href="./src/resources/billing/billing.ts">createPortal</a>({ ...params }) -> BillingCreatePortalResponse</code>
- <code title="post /billing/webhook">client.billing.<a href="./src/resources/billing/billing.ts">handleWebhook</a>() -> void</code>
- <code title="get /billing/plans">client.billing.<a href="./src/resources/billing/billing.ts">listPlans</a>() -> void</code>
- <code title="post /billing/redeem-promo">client.billing.<a href="./src/resources/billing/billing.ts">redeemPromo</a>({ ...params }) -> BillingRedeemPromoResponse</code>

## Checkout

Types:

- <code><a href="./src/resources/billing/checkout.ts">CheckoutCreateResponse</a></code>

Methods:

- <code title="post /billing/checkout">client.billing.checkout.<a href="./src/resources/billing/checkout.ts">create</a>({ ...params }) -> CheckoutCreateResponse</code>
- <code title="get /billing/checkout/verify/{sessionId}">client.billing.checkout.<a href="./src/resources/billing/checkout.ts">verify</a>(sessionID) -> void</code>

## Org

Types:

- <code><a href="./src/resources/billing/org/org.ts">OrgCancelResponse</a></code>
- <code><a href="./src/resources/billing/org/org.ts">OrgChangePlanResponse</a></code>

Methods:

- <code title="post /billing/org/{orgId}/cancel">client.billing.org.<a href="./src/resources/billing/org/org.ts">cancel</a>(orgID, { ...params }) -> OrgCancelResponse</code>
- <code title="post /billing/org/{orgId}/change-plan">client.billing.org.<a href="./src/resources/billing/org/org.ts">changePlan</a>(orgID, { ...params }) -> OrgChangePlanResponse</code>
- <code title="post /billing/org/{orgId}/portal">client.billing.org.<a href="./src/resources/billing/org/org.ts">createPortal</a>(orgID) -> void</code>
- <code title="post /billing/org/{orgId}/pause">client.billing.org.<a href="./src/resources/billing/org/org.ts">pause</a>(orgID) -> void</code>
- <code title="post /billing/org/{orgId}/reactivate">client.billing.org.<a href="./src/resources/billing/org/org.ts">reactivate</a>(orgID) -> void</code>
- <code title="post /billing/org/{orgId}/resume">client.billing.org.<a href="./src/resources/billing/org/org.ts">resume</a>(orgID) -> void</code>
- <code title="get /billing/org/{orgId}/cost-breakdown">client.billing.org.<a href="./src/resources/billing/org/org.ts">retrieveCostBreakdown</a>(orgID) -> void</code>
- <code title="get /billing/org/{orgId}/summary">client.billing.org.<a href="./src/resources/billing/org/org.ts">retrieveSummary</a>(orgID) -> void</code>

### UsageAlerts

Types:

- <code><a href="./src/resources/billing/org/usage-alerts.ts">UsageAlertCreateResponse</a></code>
- <code><a href="./src/resources/billing/org/usage-alerts.ts">UsageAlertUpdateResponse</a></code>

Methods:

- <code title="post /billing/org/{orgId}/usage-alerts">client.billing.org.usageAlerts.<a href="./src/resources/billing/org/usage-alerts.ts">create</a>(orgID, { ...params }) -> UsageAlertCreateResponse</code>
- <code title="patch /billing/org/{orgId}/usage-alerts/{alertId}">client.billing.org.usageAlerts.<a href="./src/resources/billing/org/usage-alerts.ts">update</a>(alertID, { ...params }) -> UsageAlertUpdateResponse</code>
- <code title="get /billing/org/{orgId}/usage-alerts">client.billing.org.usageAlerts.<a href="./src/resources/billing/org/usage-alerts.ts">list</a>(orgID) -> void</code>
- <code title="delete /billing/org/{orgId}/usage-alerts/{alertId}">client.billing.org.usageAlerts.<a href="./src/resources/billing/org/usage-alerts.ts">delete</a>(alertID, { ...params }) -> void</code>
- <code title="get /billing/org/{orgId}/usage-alerts/configured">client.billing.org.usageAlerts.<a href="./src/resources/billing/org/usage-alerts.ts">listConfigured</a>(orgID) -> void</code>
- <code title="get /billing/org/{orgId}/usage-alerts/history">client.billing.org.usageAlerts.<a href="./src/resources/billing/org/usage-alerts.ts">retrieveHistory</a>(orgID) -> void</code>

### Overages

Methods:

- <code title="get /billing/org/{orgId}/overages">client.billing.org.overages.<a href="./src/resources/billing/org/overages.ts">list</a>(orgID) -> void</code>
- <code title="get /billing/org/{orgId}/overages/history">client.billing.org.overages.<a href="./src/resources/billing/org/overages.ts">retrieveHistory</a>(orgID) -> void</code>

### TaxInfo

Types:

- <code><a href="./src/resources/billing/org/tax-info.ts">TaxInfoUpdateResponse</a></code>

Methods:

- <code title="get /billing/org/{orgId}/tax-info">client.billing.org.taxInfo.<a href="./src/resources/billing/org/tax-info.ts">retrieve</a>(orgID) -> void</code>
- <code title="put /billing/org/{orgId}/tax-info">client.billing.org.taxInfo.<a href="./src/resources/billing/org/tax-info.ts">update</a>(orgID, { ...params }) -> TaxInfoUpdateResponse</code>

### Invoices

Methods:

- <code title="get /billing/org/{orgId}/invoices">client.billing.org.invoices.<a href="./src/resources/billing/org/invoices.ts">list</a>(orgID) -> void</code>
- <code title="get /billing/org/{orgId}/invoices/{invoiceId}/pdf">client.billing.org.invoices.<a href="./src/resources/billing/org/invoices.ts">retrievePdf</a>(invoiceID, { ...params }) -> void</code>

### Usage

Methods:

- <code title="get /billing/org/{orgId}/usage">client.billing.org.usage.<a href="./src/resources/billing/org/usage.ts">list</a>(orgID) -> void</code>
- <code title="get /billing/org/{orgId}/usage/history">client.billing.org.usage.<a href="./src/resources/billing/org/usage.ts">retrieveHistory</a>(orgID) -> void</code>
- <code title="get /billing/org/{orgId}/usage/realtime">client.billing.org.usage.<a href="./src/resources/billing/org/usage.ts">retrieveRealtime</a>(orgID) -> void</code>

### Credits

Types:

- <code><a href="./src/resources/billing/org/credits.ts">CreditPurchaseResponse</a></code>

Methods:

- <code title="get /billing/org/{orgId}/credits/transactions">client.billing.org.credits.<a href="./src/resources/billing/org/credits.ts">listTransactions</a>(orgID) -> void</code>
- <code title="post /billing/org/{orgId}/credits/purchase">client.billing.org.credits.<a href="./src/resources/billing/org/credits.ts">purchase</a>(orgID, { ...params }) -> CreditPurchaseResponse</code>

### Contacts

Types:

- <code><a href="./src/resources/billing/org/contacts.ts">ContactCreateResponse</a></code>

Methods:

- <code title="post /billing/org/{orgId}/contacts">client.billing.org.contacts.<a href="./src/resources/billing/org/contacts.ts">create</a>(orgID, { ...params }) -> ContactCreateResponse</code>
- <code title="get /billing/org/{orgId}/contacts">client.billing.org.contacts.<a href="./src/resources/billing/org/contacts.ts">list</a>(orgID) -> void</code>
- <code title="delete /billing/org/{orgId}/contacts/{contactId}">client.billing.org.contacts.<a href="./src/resources/billing/org/contacts.ts">delete</a>(contactID, { ...params }) -> void</code>

### Addons

Methods:

- <code title="post /billing/org/{orgId}/addons">client.billing.org.addons.<a href="./src/resources/billing/org/addons.ts">create</a>(orgID) -> void</code>
- <code title="patch /billing/org/{orgId}/addons/{addonId}">client.billing.org.addons.<a href="./src/resources/billing/org/addons.ts">update</a>(addonID, { ...params }) -> void</code>
- <code title="get /billing/org/{orgId}/addons">client.billing.org.addons.<a href="./src/resources/billing/org/addons.ts">list</a>(orgID) -> void</code>
- <code title="delete /billing/org/{orgId}/addons/{addonId}">client.billing.org.addons.<a href="./src/resources/billing/org/addons.ts">delete</a>(addonID, { ...params }) -> void</code>

## Credits

Methods:

- <code title="get /billing/credits/packages">client.billing.credits.<a href="./src/resources/billing/credits.ts">listPackages</a>() -> void</code>

## Enterprise

Types:

- <code><a href="./src/resources/billing/enterprise.ts">EnterpriseSubmitInquiryResponse</a></code>

Methods:

- <code title="post /billing/enterprise/inquiry">client.billing.enterprise.<a href="./src/resources/billing/enterprise.ts">submitInquiry</a>({ ...params }) -> EnterpriseSubmitInquiryResponse</code>

## PromoCodes

Types:

- <code><a href="./src/resources/billing/promo-codes.ts">PromoCodeValidateResponse</a></code>

Methods:

- <code title="post /billing/promo-codes/validate">client.billing.promoCodes.<a href="./src/resources/billing/promo-codes.ts">validate</a>({ ...params }) -> PromoCodeValidateResponse</code>

## Addons

Methods:

- <code title="get /billing/addons/catalog">client.billing.addons.<a href="./src/resources/billing/addons.ts">retrieveCatalog</a>() -> void</code>

# AIUsage

## Org

Methods:

- <code title="get /ai-usage/org/{orgId}/breakdown">client.aiUsage.org.<a href="./src/resources/ai-usage/org.ts">retrieveBreakdown</a>(orgID) -> void</code>
- <code title="get /ai-usage/org/{orgId}/exhaustion-events">client.aiUsage.org.<a href="./src/resources/ai-usage/org.ts">retrieveExhaustionEvents</a>(orgID) -> void</code>
- <code title="get /ai-usage/org/{orgId}/history">client.aiUsage.org.<a href="./src/resources/ai-usage/org.ts">retrieveHistory</a>(orgID) -> void</code>
- <code title="get /ai-usage/org/{orgId}/recent">client.aiUsage.org.<a href="./src/resources/ai-usage/org.ts">retrieveRecent</a>(orgID) -> void</code>
- <code title="get /ai-usage/org/{orgId}/rollups">client.aiUsage.org.<a href="./src/resources/ai-usage/org.ts">retrieveRollups</a>(orgID) -> void</code>
- <code title="get /ai-usage/org/{orgId}/summary">client.aiUsage.org.<a href="./src/resources/ai-usage/org.ts">retrieveSummary</a>(orgID) -> void</code>

# Users

## Me

Methods:

- <code title="get /users/me">client.users.me.<a href="./src/resources/users/me/me.ts">retrieve</a>() -> void</code>
- <code title="patch /users/me">client.users.me.<a href="./src/resources/users/me/me.ts">update</a>() -> void</code>
- <code title="post /users/me/change-password">client.users.me.<a href="./src/resources/users/me/me.ts">changePassword</a>() -> void</code>
- <code title="post /users/me/request-account-delete">client.users.me.<a href="./src/resources/users/me/me.ts">requestAccountDelete</a>() -> void</code>

### Preferences

Methods:

- <code title="get /users/me/preferences">client.users.me.preferences.<a href="./src/resources/users/me/preferences.ts">retrieve</a>() -> void</code>
- <code title="patch /users/me/preferences">client.users.me.preferences.<a href="./src/resources/users/me/preferences.ts">update</a>() -> void</code>

# Storage

Types:

- <code><a href="./src/resources/storage/storage.ts">StorageDownloadURLResponse</a></code>
- <code><a href="./src/resources/storage/storage.ts">StorageUploadBase64Response</a></code>
- <code><a href="./src/resources/storage/storage.ts">StorageUploadURLResponse</a></code>

Methods:

- <code title="get /storage/download">client.storage.<a href="./src/resources/storage/storage.ts">download</a>() -> void</code>
- <code title="post /storage/download-url">client.storage.<a href="./src/resources/storage/storage.ts">downloadURL</a>({ ...params }) -> StorageDownloadURLResponse</code>
- <code title="post /storage/upload">client.storage.<a href="./src/resources/storage/storage.ts">upload</a>() -> void</code>
- <code title="post /storage/upload-base64">client.storage.<a href="./src/resources/storage/storage.ts">uploadBase64</a>({ ...params }) -> StorageUploadBase64Response</code>
- <code title="post /storage/upload-from-url">client.storage.<a href="./src/resources/storage/storage.ts">uploadFromURL</a>() -> void</code>
- <code title="post /storage/upload-url">client.storage.<a href="./src/resources/storage/storage.ts">uploadURL</a>({ ...params }) -> StorageUploadURLResponse</code>

## Buckets

Types:

- <code><a href="./src/resources/storage/buckets/buckets.ts">BucketCreateResponse</a></code>

Methods:

- <code title="post /storage/buckets">client.storage.buckets.<a href="./src/resources/storage/buckets/buckets.ts">create</a>({ ...params }) -> BucketCreateResponse</code>
- <code title="get /storage/buckets">client.storage.buckets.<a href="./src/resources/storage/buckets/buckets.ts">list</a>() -> void</code>

### Policies

Methods:

- <code title="post /storage/buckets/{bucketId}/policies">client.storage.buckets.policies.<a href="./src/resources/storage/buckets/policies.ts">create</a>(bucketID) -> void</code>
- <code title="put /storage/buckets/{bucketId}/policies/{policyId}">client.storage.buckets.policies.<a href="./src/resources/storage/buckets/policies.ts">update</a>(policyID, { ...params }) -> void</code>
- <code title="get /storage/buckets/{bucketId}/policies">client.storage.buckets.policies.<a href="./src/resources/storage/buckets/policies.ts">list</a>(bucketID) -> void</code>
- <code title="delete /storage/buckets/{bucketId}/policies/{policyId}">client.storage.buckets.policies.<a href="./src/resources/storage/buckets/policies.ts">delete</a>(policyID, { ...params }) -> void</code>
- <code title="post /storage/buckets/{bucketId}/policies/{policyId}/toggle">client.storage.buckets.policies.<a href="./src/resources/storage/buckets/policies.ts">toggle</a>(policyID, { ...params }) -> void</code>

## Multipart

Types:

- <code><a href="./src/resources/storage/multipart.ts">MultipartCreateResponse</a></code>
- <code><a href="./src/resources/storage/multipart.ts">MultipartAbortResponse</a></code>
- <code><a href="./src/resources/storage/multipart.ts">MultipartCompleteResponse</a></code>
- <code><a href="./src/resources/storage/multipart.ts">MultipartGetPartURLResponse</a></code>

Methods:

- <code title="post /storage/multipart/create">client.storage.multipart.<a href="./src/resources/storage/multipart.ts">create</a>({ ...params }) -> MultipartCreateResponse</code>
- <code title="post /storage/multipart/{uploadId}/abort">client.storage.multipart.<a href="./src/resources/storage/multipart.ts">abort</a>(uploadID, { ...params }) -> MultipartAbortResponse</code>
- <code title="post /storage/multipart/{uploadId}/complete">client.storage.multipart.<a href="./src/resources/storage/multipart.ts">complete</a>(uploadID, { ...params }) -> MultipartCompleteResponse</code>
- <code title="post /storage/multipart/{uploadId}/part-url">client.storage.multipart.<a href="./src/resources/storage/multipart.ts">getPartURL</a>(uploadID, { ...params }) -> MultipartGetPartURLResponse</code>

## Files

Methods:

- <code title="post /storage/files/copy">client.storage.files.<a href="./src/resources/storage/files/files.ts">copy</a>() -> void</code>
- <code title="post /storage/files/delete-batch">client.storage.files.<a href="./src/resources/storage/files/files.ts">deleteBatch</a>() -> void</code>
- <code title="post /storage/files/move">client.storage.files.<a href="./src/resources/storage/files/files.ts">move</a>() -> void</code>

### Metadata

Methods:

- <code title="get /storage/files/{bucketId}/metadata">client.storage.files.metadata.<a href="./src/resources/storage/files/metadata.ts">retrieve</a>(bucketID) -> void</code>
- <code title="patch /storage/files/{bucketId}/metadata">client.storage.files.metadata.<a href="./src/resources/storage/files/metadata.ts">update</a>(bucketID) -> void</code>

# Buckets

Types:

- <code><a href="./src/resources/buckets/buckets.ts">BucketUpdateResponse</a></code>

Methods:

- <code title="get /buckets/{bucketId}">client.buckets.<a href="./src/resources/buckets/buckets.ts">retrieve</a>(bucketID) -> void</code>
- <code title="put /buckets/{bucketId}">client.buckets.<a href="./src/resources/buckets/buckets.ts">update</a>(bucketID, { ...params }) -> BucketUpdateResponse</code>
- <code title="delete /buckets/{bucketId}">client.buckets.<a href="./src/resources/buckets/buckets.ts">delete</a>(bucketID) -> void</code>
- <code title="post /buckets/{bucketId}/signed-url">client.buckets.<a href="./src/resources/buckets/buckets.ts">createSignedURL</a>(bucketID) -> void</code>
- <code title="post /buckets/{bucketId}/upload-url">client.buckets.<a href="./src/resources/buckets/buckets.ts">createUploadURL</a>(bucketID) -> void</code>
- <code title="get /buckets/project/{projectId}">client.buckets.<a href="./src/resources/buckets/buckets.ts">retrieveByProject</a>(projectID) -> void</code>
- <code title="post /buckets/{bucketId}/upload">client.buckets.<a href="./src/resources/buckets/buckets.ts">upload</a>(bucketID) -> void</code>

## Files

Methods:

- <code title="get /buckets/{bucketId}/files">client.buckets.files.<a href="./src/resources/buckets/files.ts">list</a>(bucketID) -> void</code>
- <code title="delete /buckets/{bucketId}/files">client.buckets.files.<a href="./src/resources/buckets/files.ts">delete</a>(bucketID) -> void</code>

# Integrations

## Subscriptions

Types:

- <code><a href="./src/resources/integrations/subscriptions.ts">SubscriptionCreateResponse</a></code>
- <code><a href="./src/resources/integrations/subscriptions.ts">SubscriptionUpdateResponse</a></code>
- <code><a href="./src/resources/integrations/subscriptions.ts">SubscriptionDeleteResponse</a></code>
- <code><a href="./src/resources/integrations/subscriptions.ts">SubscriptionListForProjectResponse</a></code>
- <code><a href="./src/resources/integrations/subscriptions.ts">SubscriptionSendTestEventResponse</a></code>

Methods:

- <code title="post /integrations/subscriptions">client.integrations.subscriptions.<a href="./src/resources/integrations/subscriptions.ts">create</a>({ ...params }) -> SubscriptionCreateResponse</code>
- <code title="patch /integrations/subscriptions/{id}">client.integrations.subscriptions.<a href="./src/resources/integrations/subscriptions.ts">update</a>(id) -> SubscriptionUpdateResponse</code>
- <code title="delete /integrations/subscriptions/{id}">client.integrations.subscriptions.<a href="./src/resources/integrations/subscriptions.ts">delete</a>(id) -> SubscriptionDeleteResponse</code>
- <code title="get /integrations/subscriptions/project/{projectId}">client.integrations.subscriptions.<a href="./src/resources/integrations/subscriptions.ts">listForProject</a>(projectID) -> SubscriptionListForProjectResponse</code>
- <code title="post /integrations/subscriptions/{id}/test">client.integrations.subscriptions.<a href="./src/resources/integrations/subscriptions.ts">sendTestEvent</a>(id) -> SubscriptionSendTestEventResponse</code>

## Deliveries

Types:

- <code><a href="./src/resources/integrations/deliveries.ts">DeliveryListForEventResponse</a></code>
- <code><a href="./src/resources/integrations/deliveries.ts">DeliveryListForSubscriptionResponse</a></code>
- <code><a href="./src/resources/integrations/deliveries.ts">DeliveryRetryResponse</a></code>

Methods:

- <code title="get /integrations/deliveries/event/{eventId}">client.integrations.deliveries.<a href="./src/resources/integrations/deliveries.ts">listForEvent</a>(eventID) -> DeliveryListForEventResponse</code>
- <code title="get /integrations/deliveries/subscription/{subscriptionId}">client.integrations.deliveries.<a href="./src/resources/integrations/deliveries.ts">listForSubscription</a>(subscriptionID) -> DeliveryListForSubscriptionResponse</code>
- <code title="post /integrations/deliveries/{deliveryId}/retry">client.integrations.deliveries.<a href="./src/resources/integrations/deliveries.ts">retry</a>(deliveryID) -> DeliveryRetryResponse</code>

## Dlq

Types:

- <code><a href="./src/resources/integrations/dlq.ts">DlqListForProjectResponse</a></code>

Methods:

- <code title="get /integrations/dlq/project/{projectId}">client.integrations.dlq.<a href="./src/resources/integrations/dlq.ts">listForProject</a>(projectID) -> DlqListForProjectResponse</code>

## Analytics

### Project

Methods:

- <code title="get /integrations/analytics/project/{projectId}/events">client.integrations.analytics.project.<a href="./src/resources/integrations/analytics/project.ts">getEvents</a>(projectID) -> void</code>
- <code title="get /integrations/analytics/project/{projectId}/stats">client.integrations.analytics.project.<a href="./src/resources/integrations/analytics/project.ts">getStats</a>(projectID) -> void</code>

# OAuth

Methods:

- <code title="post /oauth/callback">client.oauth.<a href="./src/resources/oauth/oauth.ts">handleCallback</a>() -> void</code>

## Org

Types:

- <code><a href="./src/resources/oauth/org/org.ts">OrgListResponse</a></code>
- <code><a href="./src/resources/oauth/org/org.ts">OrgConfigureResponse</a></code>

Methods:

- <code title="get /oauth/org/{orgId}">client.oauth.org.<a href="./src/resources/oauth/org/org.ts">list</a>(orgID) -> OrgListResponse</code>
- <code title="post /oauth/org/{orgId}/configure">client.oauth.org.<a href="./src/resources/oauth/org/org.ts">configure</a>(orgID, { ...params }) -> OrgConfigureResponse</code>

### Provider

Types:

- <code><a href="./src/resources/oauth/org/provider.ts">ProviderUpdateResponse</a></code>
- <code><a href="./src/resources/oauth/org/provider.ts">ProviderDeleteResponse</a></code>
- <code><a href="./src/resources/oauth/org/provider.ts">ProviderAuthorizeResponse</a></code>
- <code><a href="./src/resources/oauth/org/provider.ts">ProviderRefreshResponse</a></code>

Methods:

- <code title="patch /oauth/org/{orgId}/provider/{provider}">client.oauth.org.provider.<a href="./src/resources/oauth/org/provider.ts">update</a>(provider, { ...params }) -> ProviderUpdateResponse</code>
- <code title="delete /oauth/org/{orgId}/provider/{provider}">client.oauth.org.provider.<a href="./src/resources/oauth/org/provider.ts">delete</a>(provider, { ...params }) -> ProviderDeleteResponse</code>
- <code title="get /oauth/org/{orgId}/provider/{provider}/authorize">client.oauth.org.provider.<a href="./src/resources/oauth/org/provider.ts">authorize</a>(provider, { ...params }) -> ProviderAuthorizeResponse</code>
- <code title="post /oauth/org/{orgId}/provider/{provider}/refresh">client.oauth.org.provider.<a href="./src/resources/oauth/org/provider.ts">refresh</a>(provider, { ...params }) -> ProviderRefreshResponse</code>

# Security

Methods:

- <code title="get /security/audit/{projectId}">client.security.<a href="./src/resources/security.ts">retrieveAudit</a>(projectID) -> void</code>
- <code title="get /security/overview/{projectId}">client.security.<a href="./src/resources/security.ts">retrieveOverview</a>(projectID) -> void</code>

# Jobs

## Webhooks

Methods:

- <code title="get /jobs/webhooks/delivery/{deliveryId}">client.jobs.webhooks.<a href="./src/resources/jobs/webhooks.ts">retrieveByDelivery</a>(deliveryID) -> void</code>
- <code title="get /jobs/webhooks/project/{projectId}">client.jobs.webhooks.<a href="./src/resources/jobs/webhooks.ts">retrieveByProject</a>(projectID) -> void</code>

## Dlq

Methods:

- <code title="get /jobs/dlq/project/{projectId}">client.jobs.dlq.<a href="./src/resources/jobs/dlq.ts">retrieveByProject</a>(projectID) -> void</code>

# Enterprise

Types:

- <code><a href="./src/resources/enterprise/enterprise.ts">EnterpriseInquireResponse</a></code>

Methods:

- <code title="post /enterprise/inquire">client.enterprise.<a href="./src/resources/enterprise/enterprise.ts">inquire</a>({ ...params }) -> EnterpriseInquireResponse</code>
- <code title="get /enterprise/subdomain/{subdomain}">client.enterprise.<a href="./src/resources/enterprise/enterprise.ts">retrieveSubdomain</a>(subdomain) -> void</code>

## Quotes

Methods:

- <code title="get /enterprise/quotes/{quoteId}">client.enterprise.quotes.<a href="./src/resources/enterprise/quotes.ts">retrieve</a>(quoteID) -> void</code>
- <code title="post /enterprise/quotes/{quoteId}/accept">client.enterprise.quotes.<a href="./src/resources/enterprise/quotes.ts">accept</a>(quoteID) -> void</code>

## Org

Methods:

- <code title="get /enterprise/org/{orgId}/invoices">client.enterprise.org.<a href="./src/resources/enterprise/org/org.ts">listInvoices</a>(orgID) -> void</code>
- <code title="get /enterprise/org/{orgId}/contract">client.enterprise.org.<a href="./src/resources/enterprise/org/org.ts">retrieveContract</a>(orgID) -> void</code>

### Usage

Methods:

- <code title="get /enterprise/org/{orgId}/usage">client.enterprise.org.usage.<a href="./src/resources/enterprise/org/usage.ts">retrieve</a>(orgID) -> void</code>
- <code title="get /enterprise/org/{orgId}/usage/history">client.enterprise.org.usage.<a href="./src/resources/enterprise/org/usage.ts">listHistory</a>(orgID) -> void</code>
- <code title="get /enterprise/org/{orgId}/usage/projects">client.enterprise.org.usage.<a href="./src/resources/enterprise/org/usage.ts">listProjects</a>(orgID) -> void</code>

### Onboarding

Types:

- <code><a href="./src/resources/enterprise/org/onboarding.ts">OnboardingUpdateResponse</a></code>

Methods:

- <code title="get /enterprise/org/{orgId}/onboarding">client.enterprise.org.onboarding.<a href="./src/resources/enterprise/org/onboarding.ts">retrieve</a>(orgID) -> void</code>
- <code title="patch /enterprise/org/{orgId}/onboarding">client.enterprise.org.onboarding.<a href="./src/resources/enterprise/org/onboarding.ts">update</a>(orgID, { ...params }) -> OnboardingUpdateResponse</code>

# Refunds

Methods:

- <code title="get /refunds/{id}">client.refunds.<a href="./src/resources/refunds.ts">retrieve</a>(id) -> void</code>
- <code title="get /refunds/org/{orgId}">client.refunds.<a href="./src/resources/refunds.ts">listByOrg</a>(orgID) -> void</code>

# Credits

## Org

Methods:

- <code title="get /credits/org/{orgId}">client.credits.org.<a href="./src/resources/credits/org.ts">retrieve</a>(orgID) -> void</code>
- <code title="get /credits/org/{orgId}/balance">client.credits.org.<a href="./src/resources/credits/org.ts">retrieveBalance</a>(orgID) -> void</code>

# MongoDB

Methods:

- <code title="post /mongodb/{collection}/bulkWrite">client.mongoDB.<a href="./src/resources/mongodb/mongodb.ts">bulkWrite</a>(collection) -> void</code>
- <code title="post /mongodb/{collection}/count">client.mongoDB.<a href="./src/resources/mongodb/mongodb.ts">count</a>(collection) -> void</code>
- <code title="post /mongodb/{collection}/deleteMany">client.mongoDB.<a href="./src/resources/mongodb/mongodb.ts">deleteMany</a>(collection) -> void</code>
- <code title="post /mongodb/{collection}/deleteOne">client.mongoDB.<a href="./src/resources/mongodb/mongodb.ts">deleteOne</a>(collection) -> void</code>
- <code title="post /mongodb/{collection}/distinct">client.mongoDB.<a href="./src/resources/mongodb/mongodb.ts">distinct</a>(collection) -> void</code>
- <code title="get /mongodb/{collection}/estimatedCount">client.mongoDB.<a href="./src/resources/mongodb/mongodb.ts">estimatedCount</a>(collection) -> void</code>
- <code title="post /mongodb/command">client.mongoDB.<a href="./src/resources/mongodb/mongodb.ts">executeCommand</a>() -> void</code>
- <code title="get /mongodb/{collection}/findById/{id}">client.mongoDB.<a href="./src/resources/mongodb/mongodb.ts">findByID</a>(id, { ...params }) -> void</code>
- <code title="post /mongodb/{collection}/findOne">client.mongoDB.<a href="./src/resources/mongodb/mongodb.ts">findOne</a>(collection) -> void</code>
- <code title="post /mongodb/{collection}/findOneAndDelete">client.mongoDB.<a href="./src/resources/mongodb/mongodb.ts">findOneAndDelete</a>(collection) -> void</code>
- <code title="post /mongodb/{collection}/findOneAndReplace">client.mongoDB.<a href="./src/resources/mongodb/mongodb.ts">findOneAndReplace</a>(collection) -> void</code>
- <code title="post /mongodb/{collection}/findOneAndUpdate">client.mongoDB.<a href="./src/resources/mongodb/mongodb.ts">findOneAndUpdate</a>(collection) -> void</code>
- <code title="post /mongodb/{collection}/insertMany">client.mongoDB.<a href="./src/resources/mongodb/mongodb.ts">insertMany</a>(collection) -> void</code>
- <code title="post /mongodb/{collection}/insertOne">client.mongoDB.<a href="./src/resources/mongodb/mongodb.ts">insertOne</a>(collection) -> void</code>
- <code title="post /mongodb/{collection}/replaceOne">client.mongoDB.<a href="./src/resources/mongodb/mongodb.ts">replaceOne</a>(collection) -> void</code>
- <code title="post /mongodb/{collection}/updateMany">client.mongoDB.<a href="./src/resources/mongodb/mongodb.ts">updateMany</a>(collection) -> void</code>
- <code title="post /mongodb/{collection}/updateOne">client.mongoDB.<a href="./src/resources/mongodb/mongodb.ts">updateOne</a>(collection) -> void</code>

## Collections

Methods:

- <code title="post /mongodb/collections">client.mongoDB.collections.<a href="./src/resources/mongodb/collections.ts">create</a>() -> void</code>
- <code title="get /mongodb/collections">client.mongoDB.collections.<a href="./src/resources/mongodb/collections.ts">list</a>() -> void</code>
- <code title="delete /mongodb/collections/{name}">client.mongoDB.collections.<a href="./src/resources/mongodb/collections.ts">delete</a>(name) -> void</code>
- <code title="post /mongodb/collections/{name}/rename">client.mongoDB.collections.<a href="./src/resources/mongodb/collections.ts">rename</a>(name) -> void</code>

## Find

Methods:

- <code title="post /mongodb/{collection}/find/cursor">client.mongoDB.find.<a href="./src/resources/mongodb/find.ts">cursor</a>(collection) -> void</code>
- <code title="post /mongodb/{collection}/find">client.mongoDB.find.<a href="./src/resources/mongodb/find.ts">execute</a>(collection) -> void</code>

## Aggregate

Methods:

- <code title="post /mongodb/{collection}/aggregate/cursor">client.mongoDB.aggregate.<a href="./src/resources/mongodb/aggregate.ts">cursor</a>(collection) -> void</code>
- <code title="post /mongodb/{collection}/aggregate">client.mongoDB.aggregate.<a href="./src/resources/mongodb/aggregate.ts">execute</a>(collection) -> void</code>

## Indexes

Methods:

- <code title="post /mongodb/{collection}/indexes">client.mongoDB.indexes.<a href="./src/resources/mongodb/indexes.ts">create</a>(collection) -> void</code>
- <code title="get /mongodb/{collection}/indexes">client.mongoDB.indexes.<a href="./src/resources/mongodb/indexes.ts">list</a>(collection) -> void</code>
- <code title="delete /mongodb/{collection}/indexes/{indexName}">client.mongoDB.indexes.<a href="./src/resources/mongodb/indexes.ts">delete</a>(indexName, { ...params }) -> void</code>

## Cursor

Methods:

- <code title="post /mongodb/{collection}/cursor/{cursorId}/close">client.mongoDB.cursor.<a href="./src/resources/mongodb/cursor.ts">close</a>(cursorID, { ...params }) -> void</code>
- <code title="post /mongodb/{collection}/cursor/{cursorId}/next">client.mongoDB.cursor.<a href="./src/resources/mongodb/cursor.ts">next</a>(cursorID, { ...params }) -> void</code>

# Database

Methods:

- <code title="get /database/tiers">client.database.<a href="./src/resources/database/database.ts">listTiers</a>() -> void</code>

## Extensions

Methods:

- <code title="get /database/extensions/available">client.database.extensions.<a href="./src/resources/database/extensions/extensions.ts">listAvailable</a>() -> void</code>

### Project

Types:

- <code><a href="./src/resources/database/extensions/project.ts">ProjectInstallResponse</a></code>

Methods:

- <code title="get /database/extensions/project/{projectId}">client.database.extensions.project.<a href="./src/resources/database/extensions/project.ts">retrieve</a>(projectID) -> void</code>
- <code title="delete /database/extensions/project/{projectId}/{extensionId}">client.database.extensions.project.<a href="./src/resources/database/extensions/project.ts">delete</a>(extensionID, { ...params }) -> void</code>
- <code title="post /database/extensions/project/{projectId}/install">client.database.extensions.project.<a href="./src/resources/database/extensions/project.ts">install</a>(projectID, { ...params }) -> unknown</code>

## Wrappers

Methods:

- <code title="get /database/wrappers/available">client.database.wrappers.<a href="./src/resources/database/wrappers/wrappers.ts">listAvailable</a>() -> void</code>

### Project

Types:

- <code><a href="./src/resources/database/wrappers/project.ts">ProjectUpdateResponse</a></code>
- <code><a href="./src/resources/database/wrappers/project.ts">ProjectInstallResponse</a></code>

Methods:

- <code title="get /database/wrappers/project/{projectId}">client.database.wrappers.project.<a href="./src/resources/database/wrappers/project.ts">retrieve</a>(projectID) -> void</code>
- <code title="patch /database/wrappers/project/{projectId}/{wrapperId}">client.database.wrappers.project.<a href="./src/resources/database/wrappers/project.ts">update</a>(wrapperID, { ...params }) -> unknown</code>
- <code title="delete /database/wrappers/project/{projectId}/{wrapperId}">client.database.wrappers.project.<a href="./src/resources/database/wrappers/project.ts">delete</a>(wrapperID, { ...params }) -> void</code>
- <code title="post /database/wrappers/project/{projectId}/install">client.database.wrappers.project.<a href="./src/resources/database/wrappers/project.ts">install</a>(projectID, { ...params }) -> unknown</code>

## Connector

Types:

- <code><a href="./src/resources/database/connector.ts">ConnectorQueryResponse</a></code>

Methods:

- <code title="get /database/connector/{projectId}/tables">client.database.connector.<a href="./src/resources/database/connector.ts">listTables</a>(projectID) -> void</code>
- <code title="post /database/connector/{projectId}/query">client.database.connector.<a href="./src/resources/database/connector.ts">query</a>(projectID, { ...params }) -> unknown</code>
- <code title="post /database/connector/{projectId}/test">client.database.connector.<a href="./src/resources/database/connector.ts">test</a>(projectID) -> void</code>

# Rls

## Policies

Methods:

- <code title="post /rls/policies/{projectId}">client.rls.policies.<a href="./src/resources/rls/policies.ts">create</a>(projectID) -> void</code>
- <code title="get /rls/policies/{projectId}">client.rls.policies.<a href="./src/resources/rls/policies.ts">retrieve</a>(projectID) -> void</code>
- <code title="patch /rls/policies/{policyId}">client.rls.policies.<a href="./src/resources/rls/policies.ts">update</a>(policyID) -> void</code>
- <code title="delete /rls/policies/{policyId}">client.rls.policies.<a href="./src/resources/rls/policies.ts">delete</a>(policyID) -> void</code>
- <code title="post /rls/policies/{policyId}/toggle">client.rls.policies.<a href="./src/resources/rls/policies.ts">toggle</a>(policyID) -> void</code>

# Infrastructure

Methods:

- <code title="get /infrastructure/sizes">client.infrastructure.<a href="./src/resources/infrastructure.ts">listSizes</a>() -> void</code>
- <code title="post /infrastructure/poll-status">client.infrastructure.<a href="./src/resources/infrastructure.ts">pollStatus</a>() -> void</code>

# GitHub

## OAuth

Methods:

- <code title="get /github/oauth/authorize">client.github.oauth.<a href="./src/resources/github/oauth.ts">authorize</a>() -> void</code>
- <code title="get /github/oauth/callback">client.github.oauth.<a href="./src/resources/github/oauth.ts">callback</a>() -> void</code>

# Cms

Methods:

- <code title="get /cms/careers">client.cms.<a href="./src/resources/cms.ts">listCareers</a>() -> void</code>
- <code title="get /cms/partners">client.cms.<a href="./src/resources/cms.ts">listPartners</a>() -> void</code>
- <code title="get /cms/team">client.cms.<a href="./src/resources/cms.ts">listTeam</a>() -> void</code>
- <code title="get /cms/testimonials">client.cms.<a href="./src/resources/cms.ts">listTestimonials</a>() -> void</code>
- <code title="get /cms/faqs/{pageSlug}">client.cms.<a href="./src/resources/cms.ts">retrieveFaqs</a>(pageSlug) -> void</code>
- <code title="get /cms/pages/{slug}">client.cms.<a href="./src/resources/cms.ts">retrievePage</a>(slug) -> void</code>

# Contact

Types:

- <code><a href="./src/resources/contact.ts">ContactSubmitResponse</a></code>

Methods:

- <code title="post /contact">client.contact.<a href="./src/resources/contact.ts">submit</a>({ ...params }) -> ContactSubmitResponse</code>

# AlertRules

Methods:

- <code title="put /alert-rules/{ruleId}">client.alertRules.<a href="./src/resources/alert-rules/alert-rules.ts">update</a>(ruleID) -> void</code>
- <code title="delete /alert-rules/{ruleId}">client.alertRules.<a href="./src/resources/alert-rules/alert-rules.ts">delete</a>(ruleID) -> void</code>

## Project

Methods:

- <code title="post /alert-rules/project/{projectId}">client.alertRules.project.<a href="./src/resources/alert-rules/project.ts">create</a>(projectID) -> void</code>
- <code title="get /alert-rules/project/{projectId}">client.alertRules.project.<a href="./src/resources/alert-rules/project.ts">retrieve</a>(projectID) -> void</code>

# Health

Methods:

- <code title="get /v1/health">client.health.<a href="./src/resources/health.ts">check</a>() -> void</code>

# Projects

Types:

- <code><a href="./src/resources/projects/projects.ts">ProjectCreateResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectUpdateResponse</a></code>

Methods:

- <code title="post /projects/">client.projects.<a href="./src/resources/projects/projects.ts">create</a>({ ...params }) -> ProjectCreateResponse</code>
- <code title="patch /projects/{projectId}">client.projects.<a href="./src/resources/projects/projects.ts">update</a>(projectID, { ...params }) -> ProjectUpdateResponse</code>
- <code title="get /projects/">client.projects.<a href="./src/resources/projects/projects.ts">list</a>() -> void</code>
- <code title="delete /projects/{projectId}">client.projects.<a href="./src/resources/projects/projects.ts">delete</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}">client.projects.<a href="./src/resources/projects/projects.ts">retrieve0</a>(projectID) -> void</code>
- <code title="get /v1/project">client.projects.<a href="./src/resources/projects/projects.ts">retrieve1</a>() -> void</code>

## Region

Types:

- <code><a href="./src/resources/projects/region.ts">RegionCreateResponse</a></code>

Methods:

- <code title="post /projects/{projectId}/region">client.projects.region.<a href="./src/resources/projects/region.ts">create</a>(projectID, { ...params }) -> RegionCreateResponse</code>
- <code title="get /projects/{projectId}/region">client.projects.region.<a href="./src/resources/projects/region.ts">retrieve</a>(projectID) -> void</code>

## APIKeys

Types:

- <code><a href="./src/resources/projects/api-keys.ts">APIKeyCreateResponse</a></code>
- <code><a href="./src/resources/projects/api-keys.ts">APIKeyUpdateResponse</a></code>

Methods:

- <code title="post /projects/{projectId}/api-keys">client.projects.apiKeys.<a href="./src/resources/projects/api-keys.ts">create</a>(projectID, { ...params }) -> APIKeyCreateResponse</code>
- <code title="patch /projects/{projectId}/api-keys/{keyId}">client.projects.apiKeys.<a href="./src/resources/projects/api-keys.ts">update</a>(keyID, { ...params }) -> APIKeyUpdateResponse</code>
- <code title="get /projects/{projectId}/api-keys">client.projects.apiKeys.<a href="./src/resources/projects/api-keys.ts">list</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/api-keys/{keyId}/revoke">client.projects.apiKeys.<a href="./src/resources/projects/api-keys.ts">revoke</a>(keyID, { ...params }) -> void</code>
- <code title="post /projects/{projectId}/api-keys/{keyId}/rotate">client.projects.apiKeys.<a href="./src/resources/projects/api-keys.ts">rotate</a>(keyID, { ...params }) -> void</code>

## Settings

Methods:

- <code title="get /projects/{projectId}/settings">client.projects.settings.<a href="./src/resources/projects/settings/settings.ts">retrieve</a>(projectID) -> void</code>

### Compute

Methods:

- <code title="get /projects/{projectId}/settings/compute">client.projects.settings.compute.<a href="./src/resources/projects/settings/compute.ts">retrieve</a>(projectID) -> void</code>
- <code title="patch /projects/{projectId}/settings/compute">client.projects.settings.compute.<a href="./src/resources/projects/settings/compute.ts">update</a>(projectID) -> void</code>

### API

Methods:

- <code title="get /projects/{projectId}/settings/api">client.projects.settings.api.<a href="./src/resources/projects/settings/api.ts">retrieve</a>(projectID) -> void</code>
- <code title="patch /projects/{projectId}/settings/api">client.projects.settings.api.<a href="./src/resources/projects/settings/api.ts">update</a>(projectID) -> void</code>

### Jwt

Methods:

- <code title="get /projects/{projectId}/settings/jwt">client.projects.settings.jwt.<a href="./src/resources/projects/settings/jwt.ts">retrieve</a>(projectID) -> void</code>
- <code title="patch /projects/{projectId}/settings/jwt">client.projects.settings.jwt.<a href="./src/resources/projects/settings/jwt.ts">update</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/settings/jwt/rotate">client.projects.settings.jwt.<a href="./src/resources/projects/settings/jwt.ts">rotate</a>(projectID) -> void</code>

### Addons

Methods:

- <code title="get /projects/{projectId}/settings/addons">client.projects.settings.addons.<a href="./src/resources/projects/settings/addons.ts">retrieve</a>(projectID) -> void</code>
- <code title="patch /projects/{projectId}/settings/addons">client.projects.settings.addons.<a href="./src/resources/projects/settings/addons.ts">update</a>(projectID) -> void</code>

## Members

Methods:

- <code title="post /projects/{projectId}/members">client.projects.members.<a href="./src/resources/projects/members.ts">create</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/members">client.projects.members.<a href="./src/resources/projects/members.ts">list</a>(projectID) -> void</code>
- <code title="delete /projects/{projectId}/members/{userId}">client.projects.members.<a href="./src/resources/projects/members.ts">delete</a>(userID, { ...params }) -> void</code>

## Environments

Methods:

- <code title="post /projects/{projectId}/environments">client.projects.environments.<a href="./src/resources/projects/environments.ts">create</a>(projectID) -> void</code>
- <code title="patch /projects/{projectId}/environments/{envId}">client.projects.environments.<a href="./src/resources/projects/environments.ts">update</a>(envID, { ...params }) -> void</code>
- <code title="get /projects/{projectId}/environments">client.projects.environments.<a href="./src/resources/projects/environments.ts">list</a>(projectID) -> void</code>
- <code title="delete /projects/{projectId}/environments/{envId}">client.projects.environments.<a href="./src/resources/projects/environments.ts">delete</a>(envID, { ...params }) -> void</code>
- <code title="post /projects/{projectId}/environments/backfill-urls">client.projects.environments.<a href="./src/resources/projects/environments.ts">backfillURLs</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/environments/bootstrap">client.projects.environments.<a href="./src/resources/projects/environments.ts">bootstrap</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/environments/{envId}/provision-ssl">client.projects.environments.<a href="./src/resources/projects/environments.ts">provisionSsl</a>(envID, { ...params }) -> void</code>
- <code title="get /projects/{projectId}/environments/{envId}/domain-status">client.projects.environments.<a href="./src/resources/projects/environments.ts">retrieveDomainStatus</a>(envID, { ...params }) -> void</code>
- <code title="get /projects/{projectId}/environments/{envId}/domain-verification">client.projects.environments.<a href="./src/resources/projects/environments.ts">retrieveDomainVerification</a>(envID, { ...params }) -> void</code>
- <code title="post /projects/{projectId}/environments/{envId}/verify-cname">client.projects.environments.<a href="./src/resources/projects/environments.ts">verifyCname</a>(envID, { ...params }) -> void</code>
- <code title="post /projects/{projectId}/environments/{envId}/verify-domain">client.projects.environments.<a href="./src/resources/projects/environments.ts">verifyDomain</a>(envID, { ...params }) -> void</code>

## Storage

### Settings

Types:

- <code><a href="./src/resources/projects/storage/settings.ts">SettingUpdateResponse</a></code>

Methods:

- <code title="get /projects/{projectId}/storage/settings">client.projects.storage.settings.<a href="./src/resources/projects/storage/settings.ts">retrieve</a>(projectID) -> void</code>
- <code title="patch /projects/{projectId}/storage/settings">client.projects.storage.settings.<a href="./src/resources/projects/storage/settings.ts">update</a>(projectID, { ...params }) -> SettingUpdateResponse</code>

## EnvVars

Methods:

- <code title="post /projects/{projectId}/env-vars">client.projects.envVars.<a href="./src/resources/projects/env-vars.ts">create</a>(projectID) -> void</code>
- <code title="patch /projects/{projectId}/env-vars/{envVarId}">client.projects.envVars.<a href="./src/resources/projects/env-vars.ts">update</a>(envVarID, { ...params }) -> void</code>
- <code title="get /projects/{projectId}/env-vars">client.projects.envVars.<a href="./src/resources/projects/env-vars.ts">list</a>(projectID) -> void</code>
- <code title="delete /projects/{projectId}/env-vars/{envVarId}">client.projects.envVars.<a href="./src/resources/projects/env-vars.ts">delete</a>(envVarID, { ...params }) -> void</code>
- <code title="get /projects/{projectId}/env-vars/{envVarId}/value">client.projects.envVars.<a href="./src/resources/projects/env-vars.ts">retrieveValue</a>(envVarID, { ...params }) -> void</code>

## Database

### Dedicated

Types:

- <code><a href="./src/resources/projects/database/dedicated.ts">DedicatedCreateResponse</a></code>

Methods:

- <code title="post /projects/{projectId}/database/dedicated">client.projects.database.dedicated.<a href="./src/resources/projects/database/dedicated.ts">create</a>(projectID, { ...params }) -> unknown</code>
- <code title="get /projects/{projectId}/database/dedicated">client.projects.database.dedicated.<a href="./src/resources/projects/database/dedicated.ts">retrieve</a>(projectID) -> void</code>
- <code title="delete /projects/{projectId}/database/dedicated">client.projects.database.dedicated.<a href="./src/resources/projects/database/dedicated.ts">delete</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/database/dedicated/restart">client.projects.database.dedicated.<a href="./src/resources/projects/database/dedicated.ts">restart</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/database/dedicated/connection">client.projects.database.dedicated.<a href="./src/resources/projects/database/dedicated.ts">retrieveConnection</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/database/dedicated/status">client.projects.database.dedicated.<a href="./src/resources/projects/database/dedicated.ts">retrieveStatus</a>(projectID) -> void</code>

## Users

Types:

- <code><a href="./src/resources/projects/users/users.ts">UserCreateResponse</a></code>
- <code><a href="./src/resources/projects/users/users.ts">UserUpdateResponse</a></code>
- <code><a href="./src/resources/projects/users/users.ts">UserBanResponse</a></code>

Methods:

- <code title="post /projects/{projectId}/users">client.projects.users.<a href="./src/resources/projects/users/users.ts">create</a>(projectID, { ...params }) -> UserCreateResponse</code>
- <code title="get /projects/{projectId}/users/{userId}">client.projects.users.<a href="./src/resources/projects/users/users.ts">retrieve</a>(userID, { ...params }) -> void</code>
- <code title="patch /projects/{projectId}/users/{userId}">client.projects.users.<a href="./src/resources/projects/users/users.ts">update</a>(userID, { ...params }) -> UserUpdateResponse</code>
- <code title="get /projects/{projectId}/users">client.projects.users.<a href="./src/resources/projects/users/users.ts">list</a>(projectID) -> void</code>
- <code title="delete /projects/{projectId}/users/{userId}">client.projects.users.<a href="./src/resources/projects/users/users.ts">delete</a>(userID, { ...params }) -> void</code>
- <code title="post /projects/{projectId}/users/{userId}/ban">client.projects.users.<a href="./src/resources/projects/users/users.ts">ban</a>(userID, { ...params }) -> UserBanResponse</code>
- <code title="post /projects/{projectId}/users/{userId}/unban">client.projects.users.<a href="./src/resources/projects/users/users.ts">unban</a>(userID, { ...params }) -> void</code>

### Sessions

Methods:

- <code title="get /projects/{projectId}/users/{userId}/sessions">client.projects.users.sessions.<a href="./src/resources/projects/users/sessions.ts">list</a>(userID, { ...params }) -> void</code>
- <code title="delete /projects/{projectId}/users/{userId}/sessions/{sessionId}">client.projects.users.sessions.<a href="./src/resources/projects/users/sessions.ts">delete</a>(sessionID, { ...params }) -> void</code>
- <code title="post /projects/{projectId}/users/{userId}/sessions/revoke-all">client.projects.users.sessions.<a href="./src/resources/projects/users/sessions.ts">revokeAll</a>(userID, { ...params }) -> void</code>

## Auth

Types:

- <code><a href="./src/resources/projects/auth/auth.ts">AuthForgotPasswordResponse</a></code>
- <code><a href="./src/resources/projects/auth/auth.ts">AuthLoginResponse</a></code>
- <code><a href="./src/resources/projects/auth/auth.ts">AuthResetPasswordResponse</a></code>
- <code><a href="./src/resources/projects/auth/auth.ts">AuthSignupResponse</a></code>

Methods:

- <code title="post /projects/{projectId}/auth/forgot-password">client.projects.auth.<a href="./src/resources/projects/auth/auth.ts">forgotPassword</a>(projectID, { ...params }) -> AuthForgotPasswordResponse</code>
- <code title="post /projects/{projectId}/auth/login">client.projects.auth.<a href="./src/resources/projects/auth/auth.ts">login</a>(projectID, { ...params }) -> AuthLoginResponse</code>
- <code title="post /projects/{projectId}/auth/logout">client.projects.auth.<a href="./src/resources/projects/auth/auth.ts">logout</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/auth/refresh">client.projects.auth.<a href="./src/resources/projects/auth/auth.ts">refresh</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/auth/reset-password">client.projects.auth.<a href="./src/resources/projects/auth/auth.ts">resetPassword</a>(projectID, { ...params }) -> AuthResetPasswordResponse</code>
- <code title="get /projects/{projectId}/auth/me">client.projects.auth.<a href="./src/resources/projects/auth/auth.ts">retrieveMe</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/auth/signup">client.projects.auth.<a href="./src/resources/projects/auth/auth.ts">signup</a>(projectID, { ...params }) -> AuthSignupResponse</code>
- <code title="post /projects/{projectId}/auth/sync-users">client.projects.auth.<a href="./src/resources/projects/auth/auth.ts">syncUsers</a>(projectID) -> void</code>

### Settings

Types:

- <code><a href="./src/resources/projects/auth/settings.ts">SettingPatchAllResponse</a></code>

Methods:

- <code title="get /projects/{projectId}/auth/settings">client.projects.auth.settings.<a href="./src/resources/projects/auth/settings.ts">list</a>(projectID) -> void</code>
- <code title="patch /projects/{projectId}/auth/settings">client.projects.auth.settings.<a href="./src/resources/projects/auth/settings.ts">patchAll</a>(projectID, { ...params }) -> SettingPatchAllResponse</code>

### OAuthApps

Types:

- <code><a href="./src/resources/projects/auth/oauth-apps.ts">OAuthAppUpdateResponse</a></code>

Methods:

- <code title="put /projects/{projectId}/auth/oauth-apps/{provider}">client.projects.auth.oauthApps.<a href="./src/resources/projects/auth/oauth-apps.ts">update</a>(provider, { ...params }) -> OAuthAppUpdateResponse</code>
- <code title="delete /projects/{projectId}/auth/oauth-apps/{provider}">client.projects.auth.oauthApps.<a href="./src/resources/projects/auth/oauth-apps.ts">delete</a>(provider, { ...params }) -> void</code>
- <code title="get /projects/{projectId}/auth/oauth-apps">client.projects.auth.oauthApps.<a href="./src/resources/projects/auth/oauth-apps.ts">retrieveOAuthApps</a>(projectID) -> void</code>

### VerifyEmail

Types:

- <code><a href="./src/resources/projects/auth/verify-email.ts">VerifyEmailConfirmResponse</a></code>

Methods:

- <code title="post /projects/{projectId}/auth/verify-email/confirm">client.projects.auth.verifyEmail.<a href="./src/resources/projects/auth/verify-email.ts">confirm</a>(projectID, { ...params }) -> VerifyEmailConfirmResponse</code>
- <code title="post /projects/{projectId}/auth/verify-email/send">client.projects.auth.verifyEmail.<a href="./src/resources/projects/auth/verify-email.ts">send</a>(projectID) -> void</code>

## Infrastructure

Methods:

- <code title="get /projects/{projectId}/infrastructure">client.projects.infrastructure.<a href="./src/resources/projects/infrastructure/infrastructure.ts">list</a>(projectID) -> void</code>
- <code title="delete /projects/{projectId}/infrastructure/{instanceId}">client.projects.infrastructure.<a href="./src/resources/projects/infrastructure/infrastructure.ts">delete</a>(instanceID, { ...params }) -> void</code>
- <code title="post /projects/{projectId}/infrastructure/{instanceId}/migrate-now">client.projects.infrastructure.<a href="./src/resources/projects/infrastructure/infrastructure.ts">migrateNow</a>(instanceID, { ...params }) -> void</code>
- <code title="post /projects/{projectId}/infrastructure/provision">client.projects.infrastructure.<a href="./src/resources/projects/infrastructure/infrastructure.ts">provision</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/infrastructure/provision-custom">client.projects.infrastructure.<a href="./src/resources/projects/infrastructure/infrastructure.ts">provisionCustom</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/infrastructure/{instanceId}/replica">client.projects.infrastructure.<a href="./src/resources/projects/infrastructure/infrastructure.ts">replica</a>(instanceID, { ...params }) -> void</code>
- <code title="post /projects/{projectId}/infrastructure/{instanceId}/resize">client.projects.infrastructure.<a href="./src/resources/projects/infrastructure/infrastructure.ts">resize</a>(instanceID, { ...params }) -> void</code>
- <code title="post /projects/{projectId}/infrastructure/{instanceId}/resize-custom">client.projects.infrastructure.<a href="./src/resources/projects/infrastructure/infrastructure.ts">resizeCustom</a>(instanceID, { ...params }) -> void</code>
- <code title="get /projects/{projectId}/infrastructure/{instanceId}/metrics">client.projects.infrastructure.<a href="./src/resources/projects/infrastructure/infrastructure.ts">retrieveMetrics</a>(instanceID, { ...params }) -> void</code>
- <code title="get /projects/{projectId}/infrastructure/migration-status">client.projects.infrastructure.<a href="./src/resources/projects/infrastructure/infrastructure.ts">retrieveMigrationStatus</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/infrastructure/{instanceId}/replicas">client.projects.infrastructure.<a href="./src/resources/projects/infrastructure/infrastructure.ts">retrieveReplicas</a>(instanceID, { ...params }) -> void</code>
- <code title="get /projects/{projectId}/infrastructure/{instanceId}/upgrade-options">client.projects.infrastructure.<a href="./src/resources/projects/infrastructure/infrastructure.ts">retrieveUpgradeOptions</a>(instanceID, { ...params }) -> void</code>
- <code title="post /projects/{projectId}/infrastructure/{instanceId}/start">client.projects.infrastructure.<a href="./src/resources/projects/infrastructure/infrastructure.ts">start</a>(instanceID, { ...params }) -> void</code>
- <code title="post /projects/{projectId}/infrastructure/{instanceId}/stop">client.projects.infrastructure.<a href="./src/resources/projects/infrastructure/infrastructure.ts">stop</a>(instanceID, { ...params }) -> void</code>

### Migration

Methods:

- <code title="get /projects/{projectId}/infrastructure/migration/progress">client.projects.infrastructure.migration.<a href="./src/resources/projects/infrastructure/migration.ts">retrieveProgress</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/infrastructure/migration/retry">client.projects.infrastructure.migration.<a href="./src/resources/projects/infrastructure/migration.ts">retry</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/infrastructure/migration/rollback">client.projects.infrastructure.migration.<a href="./src/resources/projects/infrastructure/migration.ts">rollback</a>(projectID) -> void</code>

## GitHub

Methods:

- <code title="post /projects/{projectId}/github/branch">client.projects.github.<a href="./src/resources/projects/github.ts">branch</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/github/connect">client.projects.github.<a href="./src/resources/projects/github.ts">connect</a>(projectID) -> void</code>
- <code title="delete /projects/{projectId}/github/disconnect">client.projects.github.<a href="./src/resources/projects/github.ts">deleteDisconnect</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/github/pull">client.projects.github.<a href="./src/resources/projects/github.ts">pull</a>(projectID) -> void</code>
- <code title="post /projects/{projectId}/github/push">client.projects.github.<a href="./src/resources/projects/github.ts">push</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/github/branches">client.projects.github.<a href="./src/resources/projects/github.ts">retrieveBranches</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/github/repos">client.projects.github.<a href="./src/resources/projects/github.ts">retrieveRepos</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/github/status">client.projects.github.<a href="./src/resources/projects/github.ts">retrieveStatus</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/github/tracked-repos">client.projects.github.<a href="./src/resources/projects/github.ts">retrieveTrackedRepos</a>(projectID) -> void</code>

## Terminal

Methods:

- <code title="post /projects/{projectId}/terminal/exec">client.projects.terminal.<a href="./src/resources/projects/terminal.ts">exec</a>(projectID) -> void</code>
- <code title="get /projects/{projectId}/terminal/sessions">client.projects.terminal.<a href="./src/resources/projects/terminal.ts">retrieveSessions</a>(projectID) -> void</code>
