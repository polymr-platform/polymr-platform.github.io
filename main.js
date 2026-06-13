const featureCards = [
	{
		sections: [
			{
				title: '1. Explicit MCP-only tool access',
				copy: 'Polymr does not enforce standard tools like file, shell, or other internal capabilities. You decide which tools are necessary. Tools can be always present, activated on demand or hidden from the LLM as needed.',
				image: './assets/mcp-servers-example.png',
				imageAlt: 'Configured MCP servers example in Polymr'
			}
		]
	},
	{
		sections: [
			{
				title: '2. Hierarchical scopes',
				copy: 'Scopes define what the model may do autonomously, what it may never do, and what should require user approval. The hierarchy makes it possible to allow broad reads while keeping writes dynamic or denied.',
				image: './assets/scopes-example.png',
				imageAlt: 'Hierarchical scopes example showing allow, dynamic, and deny settings'
			}
		]
	},
	{
		sections: [
			{
				title: '3. Standardized preview mode',
				copy: 'When a dynamic scope leads to an approval step, Polymr exposes a preview where possible so the user can inspect the effects before allowing the mutation. This pattern applies across tool types, and Polymr uses the MCP Apps specification to render both previews and tool results.',
				image: './assets/approval-request-file-example.png',
				imageAlt: 'Preview of a file change before approval'
			},
			{
				title: 'SQL preview with rollback',
				copy: 'For SQL, preview mode can execute the query inside a transaction and roll it back, allowing the user to inspect the effects before deciding whether the operation should actually proceed.',
				image: './assets/approval-request-sql-example.png',
				imageAlt: 'SQL approval preview example with rollback behavior'
			}
		]
	}
]

const configurationCards = [
	{
		sections: [
			{
				title: '1. Streaming configuration definitions and instances',
				copy: 'Polymr supports SEP-1596 for streaming configuration definitions during the initialization handshake. It extends that by allowing the client to stream the configuration instance back to the MCP server, making interactive configuration possible directly inside the platform.',
				image: './assets/configuration-example.png',
				imageAlt: 'Configuration definition example in Polymr'
			}
		]
	},
	{
		sections: [
			{
				title: '2. Policy-enabled configuration fields',
				copy: 'Configuration fields can be marked as policy enabled. This allows policies to reuse the same configuration schema, or selected parts of it, rather than introducing a separate policy-specific configuration surface.',
				image: './assets/policy-example.png',
				imageAlt: 'Configuration policy-enabled field example in Polymr'
			}
		]
	},
	{
		sections: [
			{
				title: '3. Runtime tag switching',
				copy: 'Users can create tag categories and tag values, attach policies to those tags, and switch them at runtime. Policies can then restrict or reconfigure MCP servers, switch databases, make folders immutable in certain contexts, or even swap MCP server instances such as dev, qlty, and prd.',
				image: './assets/tag-example.png',
				imageAlt: 'Runtime configuration and tag policy example in Polymr'
			},
			{
				title: 'Tag switch invalidation',
				copy: 'When tags change, Polymr calculates which tool results may have been invalidated.',
				image: './assets/tag-update-example.png',
				imageAlt: 'Tag switch invalidation example in Polymr'
			}
		]
	}
]

const multiUserCards = [
	{
		sections: [
			{
				title: '1. Multi-user by default',
				copy: 'Polymr is designed as a collaborative environment where multiple people can work in the same session rather than treating the session as belonging to a single operator.'
			}
		]
	},
	{
		sections: [
			{
				title: '2. Dynamic execution identity',
				copy: 'The system keeps track of which user sent the last message, and that user identity determines the environment in which a resulting request is executed.'
			},
			{
				title: 'User-scoped credentials at execution time',
				copy: 'If a tool call requires an OAuth token, Polymr will use the credential belonging to the user who triggered that execution path, instead of assuming one shared runtime identity. Shared identities remain possible when necessary.'
			}
		]
	},
	{
		sections: [
			{
				title: '3. Color-coded active sessions',
				copy: 'The active session list uses colors to show where user attention may be needed. No color means the LLM is still working. Yellow means user action is needed but someone is already looking at it. Red means user action is needed and no one is currently looking at it.',
				image: './assets/session-list.png',
				imageAlt: 'Color-coded active sessions in Polymr'
			}
		]
	}
]

const channelsWorkflowsCards = [
	{
		sections: [
			{
				title: '1. Channels as preconfigured sessions',
				copy: 'By default a new conversation inherits its settings from the workspace, but a channel acts as a preconfigured session. It can define its own prompt, a subset of the available MCP servers, and other session-level choices so the same setup can be reused repeatedly for a specific purpose, such as a dedicated meal planning channel.',
				image: './assets/channel-example.png',
				imageAlt: 'Channel configuration example in Polymr'
			}
		]
	},
	{
		sections: [
			{
				title: '2. Workflows on top of the platform',
				copy: 'Polymr is based on LangGraph4j. The standard conversation is itself the most commonly used workflow, but users can also define their own workflows on top of the platform when they want a more explicit orchestration model.',
				image: './assets/workflow-example.png',
				imageAlt: 'Workflow example in Polymr'
			}
		]
	}
]

const mcpEcosystemCards = [
	{
		sections: [
			{
				title: 'Standard MCP compatibility',
				copy: 'Polymr works with standard MCP servers, but I\'ve added a number of MCP servers built specifically to take full advantage of features such as dynamic scopes, preview mode, and richer result rendering.'
			}
		]
	},
	{
		sections: [
			{
				title: 'mcp-fs',
				copy: 'File access with preview mode for edits. It is written in Rust and uses ripgrep for high-performance search and file operations.'
			}
		]
	},
	{
		sections: [
			{
				title: 'mcp-cli',
				copy: 'Also written in Rust. It uses Tree-sitter to parse incoming scripts and classify the commands they use according to a user-configurable setup plus extensive defaults. Safe and unsafe operations can then be mapped onto dynamic scopes so the user decides the required level of autonomy before execution.'
			}
		]
	},
	{
		sections: [
			{
				title: 'mcp-sql',
				copy: 'Written in java, it connects to databases, including through SSH hops. It introspects SQL statements and uses dynamic scoping to determine which permissions are required. For DML previews it can execute the statement inside a transaction and roll it back, giving the user an exact view of what would happen before proceeding.'
			}
		]
	},
	{
		sections: [
			{
				title: 'mcp-search',
				copy: 'Written in Rust. It uses Tree-sitter to create smart embeddings and stores them in LanceDB. It can run as a standalone MCP server configured to watch the file system, but can also be plugged into other servers by extending the JSON-RPC protocol.'
			}
		]
	},
	{
		sections: [
			{
				title: 'Other servers',
				copy: 'Other MCP servers include mcp-web for web searching and downloading, mcp-browser for browser session automation and replay, mcp-excel for Excel manipulation, mcp-ui as an MCP Apps compatible bridge, and mcp-test as a standalone test tool for MCP servers.'
			}
		]
	}
]

const extensibilityCards = [
	{
		sections: [
			{
				title: '1. Pages and scripts built on MCP',
				copy: 'In Polymr the LLM can use the MCP tool surface to build components and pages for custom visualization and scripts for deterministic data flows. A simple prompt can produce a custom JIRA task overview based on the standard Atlassian MCP.',
				image: './assets/page-jira-example.png',
				imageAlt: 'Custom JIRA page generated in Polymr from MCP tools and a prompt'
			}
		]
	},
	{
		sections: [
			{
				title: '2. Reusable collaborative applications',
				copy: 'Combined with generic MCP tools for things like database access, this makes it possible to build substantial applications directly inside Polymr. In a multi-user setup, people can install pages built by other people and contribute to a shared application layer.',
				image: './assets/page-file-example.png',
				imageAlt: 'Reusable collaborative application example in Polymr'
			},
			{
				title: 'Shared tool surface between UI and LLM',
				copy: 'Because pages use the same MCP tools that the LLM already uses, anything visible on screen can also be interacted with through the LLM. This supports workflows that combine prompting with custom-built application interfaces.'
			},
			{
				title: 'Scripts as MCP',
				copy: 'You can create new virtual MCP servers using scripts, allowing the LLMs to work off of higher level custom dataflows.'
			}
		]
	},
	{
		sections: [
			{
				title: '3. Canvas for ad-hoc session-local views',
				copy: 'The LLM can create dynamic views on the fly inside a session, similar to localized pages that exist only for that session. This is useful for ad-hoc needs that do not fit a prebuilt application intended to serve everyone.',
				image: './assets/canvas-echarts-example.png',
				imageAlt: 'Canvas example using ECharts in Polymr'
			},
			{
				title: 'Reusable components and on-demand composition',
				copy: 'The LLM can create reusable components such as a JIRA ticket view or it can create new shortlived components on the fly, then compose them in real time for a specific task. If a dynamic component or page seems reusable, simply ask the LLM to create a persistent version of it.',
				image: './assets/canvas-jira-example.png',
				imageAlt: 'Canvas charting and composite view example in Polymr'
			}
		]
	}
]

function renderCardList(containerId, items, renderItem) {
	const container = document.getElementById(containerId)

	if (!container) {
		console.error(`Missing container: ${containerId}`)
		return
	}

	container.innerHTML = items.map(renderItem).join('')
}

function renderSection(section, index) {
	const titleTag = index === 0 ? 'h4' : 'h5'
	const layoutClass = section.image ? 'feature-row' : 'feature-row feature-row-text-only'
	const divider = index > 0 ? '<div class="feature-row-divider"></div>' : ''
	const image = section.image
		? `
			<div class="feature-media-stack">
				<img class="feature-image" src="${section.image}" alt="${section.imageAlt || ''}" data-preview-image="${section.image}" data-preview-alt="${section.imageAlt || ''}" />
			</div>
		`
		: ''

	return `
		${divider}
		<div class="${layoutClass}">
			<div class="feature-copy">
				<${titleTag}>${section.title}</${titleTag}>
				<p>${section.copy}</p>
			</div>
			${image}
		</div>
	`
}

function renderFeatureCard(card) {
	return `
		<article class="panel feature-card">
			${card.sections.map((section, index) => renderSection(section, index)).join('')}
		</article>
	`
}

renderCardList('featureGrid', featureCards, renderFeatureCard)
renderCardList('configurationGrid', configurationCards, renderFeatureCard)
renderCardList('multiUserGrid', multiUserCards, renderFeatureCard)
renderCardList('channelsWorkflowsGrid', channelsWorkflowsCards, renderFeatureCard)
renderCardList('mcpEcosystemGrid', mcpEcosystemCards, renderFeatureCard)
renderCardList('extensibilityGrid', extensibilityCards, renderFeatureCard)

const tabButtons = Array.from(document.querySelectorAll('[data-tab-target]'))
const tabPanels = Array.from(document.querySelectorAll('[data-tab-panel]'))

function activateTab(target) {
	const activeButton = tabButtons.find((button) => button.dataset.tabTarget === target)
	const activePanel = tabPanels.find((panel) => panel.dataset.tabPanel === target)

	if (!activeButton || !activePanel) {
		console.error('Tab target is missing', { target })
		return
	}

	tabButtons.forEach((button) => {
		const selected = button === activeButton
		button.setAttribute('aria-selected', selected ? 'true' : 'false')
		button.tabIndex = selected ? 0 : -1
	})

	tabPanels.forEach((panel) => {
		panel.hidden = panel !== activePanel
	})
}

tabButtons.forEach((button, index) => {
	button.addEventListener('click', () => {
		activateTab(button.dataset.tabTarget)
	})

	button.addEventListener('keydown', (event) => {
		if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
			return
		}

		event.preventDefault()
		const direction = event.key === 'ArrowRight' ? 1 : -1
		const nextIndex = (index + direction + tabButtons.length) % tabButtons.length
		const nextButton = tabButtons[nextIndex]

		nextButton.focus()
		activateTab(nextButton.dataset.tabTarget)
	})
})

const imageModal = document.getElementById('imageModal')
const imageModalPreview = document.getElementById('imageModalPreview')
const imageModalClose = document.getElementById('imageModalClose')

function closeImageModal() {
	if (!imageModal || !imageModalPreview) {
		console.error('Image modal elements are missing')
		return
	}

	imageModal.hidden = true
	imageModalPreview.src = ''
	imageModalPreview.alt = ''
}

function openImageModal(src, alt) {
	if (!imageModal || !imageModalPreview) {
		console.error('Image modal elements are missing')
		return
	}

	imageModalPreview.src = src
	imageModalPreview.alt = alt
	imageModal.hidden = false
}

document.querySelectorAll('[data-preview-image]').forEach((image) => {
	image.addEventListener('click', () => {
		openImageModal(image.getAttribute('data-preview-image'), image.getAttribute('data-preview-alt') || '')
	})
})

if (!imageModalClose || !imageModal) {
	console.error('Image modal controls are missing')
}
else {
	imageModalClose.addEventListener('click', closeImageModal)
	imageModal.addEventListener('click', (event) => {
		const target = event.target

		if (!(target instanceof HTMLElement)) {
			console.error('Unexpected modal click target', event.target)
			return
		}

		if (target.dataset.closeModal === 'true') {
			closeImageModal()
		}
	})

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && !imageModal.hidden) {
			closeImageModal()
		}
	})
}
