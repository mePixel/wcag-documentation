````
wcag-2.2/
├── README.md
├── docs/
│   ├── index.md
│   │
│   ├── getting-started/
│   │   ├── index.md
│   │   ├── conformance.md
│   │   ├── testing-tools.md
│   │   └── checklist.md
│   │
│   ├── principles/
│   │   ├── index.md
│   │   ├── perceivable.md
│   │   ├── operable.md
│   │   ├── understandable.md
│   │   └── robust.md
│   │
│   ├── criteria/
│   │   ├── index.md
│   │   │
│   │   ├── perceivable/
│   │   │   │
│   │   │   │   # Guideline 1.1 — Text Alternatives
│   │   │   ├── 1.1.1-non-text-content.md                           [A]
│   │   │   │
│   │   │   │   # Guideline 1.2 — Time-based Media
│   │   │   ├── 1.2.1-audio-only-video-only-prerecorded.md          [A]
│   │   │   ├── 1.2.2-captions-prerecorded.md                       [A]
│   │   │   ├── 1.2.3-audio-description-media-alternative.md        [A]
│   │   │   ├── 1.2.4-captions-live.md                              [AA]
│   │   │   ├── 1.2.5-audio-description-prerecorded.md              [AA]
│   │   │   ├── 1.2.6-sign-language-prerecorded.md                  [AAA]
│   │   │   ├── 1.2.7-extended-audio-description.md                 [AAA]
│   │   │   ├── 1.2.8-media-alternative-prerecorded.md              [AAA]
│   │   │   ├── 1.2.9-audio-only-live.md                            [AAA]
│   │   │   │
│   │   │   │   # Guideline 1.3 — Adaptable
│   │   │   ├── 1.3.1-info-and-relationships.md                     [A]
│   │   │   ├── 1.3.2-meaningful-sequence.md                        [A]
│   │   │   ├── 1.3.3-sensory-characteristics.md                    [A]
│   │   │   ├── 1.3.4-orientation.md                                [AA]
│   │   │   ├── 1.3.5-identify-input-purpose.md                     [AA]
│   │   │   ├── 1.3.6-identify-purpose.md                           [AAA]
│   │   │   │
│   │   │   │   # Guideline 1.4 — Distinguishable
│   │   │   ├── 1.4.1-use-of-color.md                               [A]
│   │   │   ├── 1.4.2-audio-control.md                              [A]
│   │   │   ├── 1.4.3-contrast-minimum.md                           [AA]
│   │   │   ├── 1.4.4-resize-text.md                                [AA]
│   │   │   ├── 1.4.5-images-of-text.md                             [AA]
│   │   │   ├── 1.4.6-contrast-enhanced.md                          [AAA]
│   │   │   ├── 1.4.7-low-background-audio.md                       [AAA]
│   │   │   ├── 1.4.8-visual-presentation.md                        [AAA]
│   │   │   ├── 1.4.9-images-of-text-no-exception.md                [AAA]
│   │   │   ├── 1.4.10-reflow.md                                    [AA]
│   │   │   ├── 1.4.11-non-text-contrast.md                         [AA]
│   │   │   ├── 1.4.12-text-spacing.md                              [AA]
│   │   │   └── 1.4.13-content-on-hover-or-focus.md                 [AA]
│   │   │
│   │   ├── operable/
│   │   │   │
│   │   │   │   # Guideline 2.1 — Keyboard Accessible
│   │   │   ├── 2.1.1-keyboard.md                                   [A]
│   │   │   ├── 2.1.2-no-keyboard-trap.md                           [A]
│   │   │   ├── 2.1.3-keyboard-no-exception.md                      [AAA]
│   │   │   ├── 2.1.4-character-key-shortcuts.md                    [A]
│   │   │   │
│   │   │   │   # Guideline 2.2 — Enough Time
│   │   │   ├── 2.2.1-timing-adjustable.md                          [A]
│   │   │   ├── 2.2.2-pause-stop-hide.md                            [A]
│   │   │   ├── 2.2.3-no-timing.md                                  [AAA]
│   │   │   ├── 2.2.4-interruptions.md                              [AAA]
│   │   │   ├── 2.2.5-re-authenticating.md                          [AAA]
│   │   │   ├── 2.2.6-timeouts.md                                   [AAA]
│   │   │   │
│   │   │   │   # Guideline 2.3 — Seizures and Physical Reactions
│   │   │   ├── 2.3.1-three-flashes-or-below-threshold.md           [A]
│   │   │   ├── 2.3.2-three-flashes.md                              [AAA]
│   │   │   ├── 2.3.3-animation-from-interactions.md                [AAA]
│   │   │   │
│   │   │   │   # Guideline 2.4 — Navigable
│   │   │   ├── 2.4.1-bypass-blocks.md                              [A]
│   │   │   ├── 2.4.2-page-titled.md                                [A]
│   │   │   ├── 2.4.3-focus-order.md                                [A]
│   │   │   ├── 2.4.4-link-purpose-in-context.md                    [A]
│   │   │   ├── 2.4.5-multiple-ways.md                              [AA]
│   │   │   ├── 2.4.6-headings-and-labels.md                        [AA]
│   │   │   ├── 2.4.7-focus-visible.md                              [AA]
│   │   │   ├── 2.4.8-location.md                                   [AAA]
│   │   │   ├── 2.4.9-link-purpose-link-only.md                     [AAA]
│   │   │   ├── 2.4.10-section-headings.md                          [AAA]
│   │   │   ├── 2.4.11-focus-not-obscured-minimum.md                [AA]
│   │   │   ├── 2.4.12-focus-not-obscured-enhanced.md               [AAA]
│   │   │   ├── 2.4.13-focus-appearance.md                          [AAA]
│   │   │   │
│   │   │   │   # Guideline 2.5 — Input Modalities
│   │   │   ├── 2.5.1-pointer-gestures.md                           [A]
│   │   │   ├── 2.5.2-pointer-cancellation.md                       [A]
│   │   │   ├── 2.5.3-label-in-name.md                              [A]
│   │   │   ├── 2.5.4-motion-actuation.md                           [A]
│   │   │   ├── 2.5.5-target-size-enhanced.md                       [AAA]
│   │   │   ├── 2.5.6-concurrent-input-mechanisms.md                [AAA]
│   │   │   ├── 2.5.7-dragging-movements.md                         [AA] 
│   │   │   └── 2.5.8-target-size-minimum.md                        [AA] 
│   │   │
│   │   ├── understandable/
│   │   │   │
│   │   │   │   # Guideline 3.1 — Readable
│   │   │   ├── 3.1.1-language-of-page.md                           [A]
│   │   │   ├── 3.1.2-language-of-parts.md                          [AA]
│   │   │   ├── 3.1.3-unusual-words.md                              [AAA]
│   │   │   ├── 3.1.4-abbreviations.md                              [AAA]
│   │   │   ├── 3.1.5-reading-level.md                              [AAA]
│   │   │   ├── 3.1.6-pronunciation.md                              [AAA]
│   │   │   │
│   │   │   │   # Guideline 3.2 — Predictable
│   │   │   ├── 3.2.1-on-focus.md                                   [A]
│   │   │   ├── 3.2.2-on-input.md                                   [A]
│   │   │   ├── 3.2.3-consistent-navigation.md                      [AA]
│   │   │   ├── 3.2.4-consistent-identification.md                  [AA]
│   │   │   ├── 3.2.5-change-on-request.md                          [AAA]
│   │   │   ├── 3.2.6-consistent-help.md                            [A]  
│   │   │   │
│   │   │   │   # Guideline 3.3 — Input Assistance
│   │   │   ├── 3.3.1-error-identification.md                       [A]
│   │   │   ├── 3.3.2-labels-or-instructions.md                     [A]
│   │   │   ├── 3.3.3-error-suggestion.md                           [AA]
│   │   │   ├── 3.3.4-error-prevention-legal-financial.md           [AA]
│   │   │   ├── 3.3.5-help.md                                       [AAA]
│   │   │   ├── 3.3.6-error-prevention-all.md                       [AAA]
│   │   │   ├── 3.3.7-redundant-entry.md                            [A]  
│   │   │   ├── 3.3.8-accessible-authentication-minimum.md          [AA] 
│   │   │   └── 3.3.9-accessible-authentication-enhanced.md         [AAA]
│   │   │
│   │   └── robust/
│   │       │
│   │       │   # Guideline 4.1 — Compatible
│   │       │   # Note: 4.1.1 Parsing is obsolete and removed in WCAG 2.2
│   │       ├── 4.1.2-name-role-value.md                            [A]
│   │       └── 4.1.3-status-messages.md                            [AA]
│   │
│   ├── guides/
│   │   ├── index.md
│   │   ├── keyboard-navigation.md
│   │   ├── focus-management.md
│   │   ├── color-contrast.md
│   │   ├── media-alternatives.md
│   │   ├── timing-and-animation.md
│   │   ├── forms-and-errors.md
│   │   ├── authentication.md
│   │   ├── reading-level.md
│   │   ├── pointer-and-touch.md
│   │   └── spas-and-dynamic-content.md
│   │
│   ├── patterns/
│   │   ├── index.md
│   │   ├── buttons.md
│   │   ├── modals.md
│   │   ├── navigation.md
│   │   ├── tables.md
│   │   ├── forms.md
│   │   ├── carousels.md
│   │   ├── tooltips.md
│   │   └── notifications.md
│   │
│   ├── testing/
│   │   ├── index.md
│   │   ├── automated.md
│   │   ├── manual.md
│   │   ├── user-testing.md
│   │   └── ci-integration.md
│   │
│   └── reference/
│       ├── index.md
│       ├── glossary.md
│       ├── success-criteria-map.md
│       ├── aria-quick-reference.md
│       └── changelog.md
│
└── examples/
    ├── index.md
    ├── react/
    │   ├── focus-trap.md
    │   ├── live-region.md
    │   └── skip-link.md
    ├── html-css/
    │   ├── high-contrast-theme.md
    │   └── readable-text-block.md
    └── vanilla-js/
    ├── timeout-warning.md
    └── keyboard-modal.md
````