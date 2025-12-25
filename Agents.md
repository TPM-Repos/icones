# TPM Dynamic Icons Explorer - Agent Guidelines

## Project Overview

This is a fork of [Icônes](https://github.com/antfu/icones) by Anthony Fu (MIT License), customized for TPM's Dynamic Icons DriveWorks Plugin. The website serves TPM customers who need to find and use icons in their DriveWorks projects using `TpmIcon()` and `TpmIcons()` functions.

**Hosting:** [https://icons.tpmautomation.com/](https://icons.tpmautomation.com/)  
**Plugin Repo:** [Dynamic-Icon-Plugin](https://github.com/TPM-Repos/Dynamic-Icon-Plugin)

## Technical Requirements

### DriveWorks Integration
- All code changes must maintain compatibility with TPM's Dynamic Icons DriveWorks Plugin
- Focus on features that help TPM customers find and copy DriveWorks code snippets
- Support `TpmIcon("collection", "icon-name", "color")` and `TpmIcons("flags\\us", "nc")` formats


**Subcollection format:** Use backslashes (e.g., `awesome\\solid`, `material\\light`)

### TPM Customer Focus
- Keep the interface simple and focused on finding icons and copying DriveWorks code
- Remove or simplify features not relevant to DriveWorks usage (e.g., framework-specific export options)
- Ensure mobile-friendly responsive design
- Maintain instant fuzzy searching (all local, no web queries)

## Coding Standards

- **Conciseness:** The fewer lines of code, the better
- **Senior Development:** Proceed like a senior developer—write clean, maintainable code
- **Comments:** Never delete existing comments
- **Completeness:** Do not stop working until the feature is fully implemented and complete
- **Efficiency:** Break changes into truly necessary steps only

## Communication & Reasoning

### Analytical Approach
1. **Start with uncertainty** when reasoning—slowly gain confidence as you analyze
2. **Write three reasoning paragraphs** before jumping to conclusions about errors
3. **Be careful with red herrings** in search results—focus on relevant information
4. **Answer in short**—be concise in your responses

### Decision Making
- When evaluating solutions, write two detailed paragraphs (one for each) before committing
- Explain which solution is obviously better and why
- Provide unbiased analysis (50/50 consideration before conclusion)

### Progress Tracking
- Before proceeding with new work, provide a summary of the current state
- Include facts only: what we did, which files were updated, what didn't work
- Do not include assumptions or theories in summaries

## Research Methodology

When conducting searches, write one-paragraph search queries as if instructing a human researcher. Clearly state what to find and request code snippets or technical details when relevant.

## Documentation & Branding

- Keep all documentation (README, help text, UI labels) consistent with TPM's branding
- Match terminology used in the Dynamic Icons Plugin documentation
- Link to TPM resources when appropriate
- **Always credit the original Icônes project** by Anthony Fu when making significant changes

## Example Usage in DriveWorks

```DriveWorks rules
TpmIcons("flags\\us", "nc")                        // Flag icons
TpmIcon("material", "account-cog", "red")          // Material icon
TpmIcon("awesome\\solid", "adjust", "#34d67f")     // Font Awesome solid
TpmIcon("driveworks", "ArrowUp", "rgb(123,56,254)") // Custom DriveWorks icon
```

Compatible with Picture boxes, buttons, checkboxes, option buttons, and any rule accepting an image or image path.

## Resources

- **TPM Homepage:** [https://www.tpm.com/](https://www.tpm.com/)
- **TPM Docs Wiki:** [Dynamic Icons Plugin](https://tpmdocs.com/en/TPM-Tech/Plugins/Dynamic-Icons)
- **Material Icons:** [https://pictogrammers.com/library/mdi/](https://pictogrammers.com/library/mdi/)
- **Bootstrap Icons:** [https://icons.getbootstrap.com/#icons](https://icons.getbootstrap.com/#icons)

## License

MIT License - Original Icônes project by Anthony Fu 2020  
This fork maintained by TPM for use with Dynamic Icons DriveWorks Plugin.
