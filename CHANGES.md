# TPM Dynamic Icons - Changes from Original Icônes

This document details the modifications made to the original [Icônes](https://github.com/antfu/icones) project by Anthony Fu to create TPM's Dynamic Icons website. These changes focus on optimizing the icon explorer for TPM's Dynamic Icons DriveWorks Plugin.

**Original Project:** Icônes by Anthony Fu (MIT License)  
**Fork:** TPM Dynamic Icons for DriveWorks Plugin  
**Status:** Active - v1.1.0  
**Website:** https://icons.tpmautomation.com/

---

## 1. Core Functionality Changes

### TPM DriveWorks Integration

The most significant change is the addition of TPM-specific code generation for the Dynamic Icons DriveWorks Plugin.

#### Install Icon Set Component
- **Modified:** `src/components/InstallIconSet.vue`
- **Changes:**
  - Replaced npm/pnpm package installation code with TPM DriveWorks Icon Plugin code snippets
  - Added `getTpmDriveWorksCode()` function to generate proper DriveWorks code
  - Support for both `TpmIcons()` (for flags) and `TpmIcon()` (for all other icons) functions
  - Handle subcollections with backslashes (e.g., `awesome\solid`)
  - Always use the selected preview color instead of 'currentColor'
  - Updated help link to point to TPM DriveWorks Icon Plugin documentation

#### Example Code Snippets Generated
The tool now generates DriveWorks-compatible code like:
```text
TpmIcon("material", "account-cog", "red")
TpmIcons("flags\us", "nc")
TpmIcon("awesome\solid", "adjust", "#34d67f")
```

#### Help Page Updates
- **Modified:** `src/components/HelpPage.vue`
- **Changes:**
  - Replaced generic icon library instructions with TPM Dynamic Icon Plugin guidance
  - Removed references to Iconify Runtime, Atomic CSS (@unocss/preset-icons), and Components (unplugin-icons)
  - Added DriveWorks-specific alternatives:
    - Recommended: TPM Dynamic Icon Plugin
    - PNG/SVG downloads for picture elements
    - Direct URL (with performance warning)
    - Base64 encoding for DriveWorks emails

### 2. UI Simplification for TPM Customers

#### Removed Framework-Specific Exports
- **Removed:** Iconify, JSX, Vue, React, React TS, and React Native export buttons
- **File:** `src/components/IconDetail.vue`
- **Reason:** These are not relevant to DriveWorks users and simplify the interface

#### Removed 'View on' Section
- **Removed:** Links to external icon collection websites
- **File:** `src/components/IconDetail.vue`
- **Reason:** Keep users focused on DriveWorks integration

#### Removed Package Manager Options
- **Removed:** Bun and Yarn package manager options
- **Kept:** pnpm (used for development)
- **Reason:** Streamline development and remove unused options

### 3. Development Workflow Changes

#### Removed Azure CI/CD
- **Deleted:** `.github/workflows/*.yml` (Azure Static Web Apps workflow)
- **Reason:** TPM uses different deployment infrastructure

#### Updated Linting Rules
- **Modified:** `.cursorrules`
- **Changes:**
  - Added project context rules for TPM fork
  - Added DriveWorks integration guidelines
  - Added icon collection support rules
  - Added TPM customer focus guidelines
  - Added documentation consistency rules

### 4. Documentation Updates

#### README.md
- **Completely rewritten** to focus on TPM's use case
- **Added sections:**
  - TPM Dynamic Icons Plugin overview
  - DriveWorks usage instructions
  - Compatibility information
  - TPM-specific resources
  - Links to TPM website and documentation
- **Removed:** Generic framework installation instructions

#### Package.json
- **Updated:** 
  - Name: `icones` → `tpm-dynamic-icons`
  - Version: `0.0.0` → `1.1.0`
  - Author: Added TPM attribution
  - Description: Added TPM-specific description
  - Homepage: `https://github.com/antfu/icones#readme` → `https://icons.tpmautomation.com/`
  - Repository: Updated to TPM repository
  - Bugs: Updated to TPM issue tracker

#### LICENSE
- **Added:** Attribution to TPM fork
- **Added:** Notice that this is a fork of Icônes
- **Maintained:** Original MIT license

#### New Files Created
- **CONTRIBUTING.md:** Guidelines for contributing to TPM's fork
- **AUTHORS.md:** Attribution to original project and third-party resources

#### index.html
- **Changed:** Page title from "Icônes" to "TPM Dynamic Icons"
- **Changed:** OpenSearch XML title to "TPM Dynamic Icons"

### 5. Icon Collection Focus

#### Supported Collections
The TPM fork maintains focus on these specific icon collections used in the Dynamic Icons Plugin:

- Material Design Icons (and Light variant)
- Bootstrap Icons
- Font Awesome (Brands, Regular, Solid)
- Feather Icons
- Heroicons
- Iconoir
- Country and US State Flags
- Spinners (animated loading icons)
- Custom TPM and DriveWorks icons

#### Special Handling
- **Flags:** Use `TpmIcons()` function instead of `TpmIcon()`
- **Subcollections:** Use backslash notation (e.g., `awesome\solid`)
- **Colors:** Preserve user-selected color in code snippets

## Technical Implementation Details

### getTpmDriveWorksCode() Function

Location: `src/utils/icons.ts`

```typescript
export function getTpmDriveWorksCode(
  icon: string,
  color = "currentColor",
): string {
  if (!icon) return "";

  // Parse icon identifier (format: "collection:name" or "collection:subcollection:name")
  const parts = icon.split(":");
  const iconPack = parts[0];

  // Build pack string with backslashes if multiple parts exist
  const packString = parts.slice(0, parts.length - 1).join("\\");

  // Get icon name (last part)
  const iconName = parts[parts.length - 1];

  // Use the actual color value
  const colorValue = color;

  // Determine function name based on collection
  const isFlags = iconPack.toLowerCase().includes("flags");
  const functionName = isFlags ? "TpmIcons" : "TpmIcon";

  return `${functionName}("${packString}","${iconName}","${colorValue}")`;
}
```

## Architecture Decisions

### Why These Changes Were Made

1. **Single-Purpose Focus:** The original Icônes serves multiple communities (web developers using various frameworks). TPM's fork serves a specific use case: DriveWorks users who need to find and copy icon code.

2. **Reduced Complexity:** Removing unused framework options simplifies the UI and reduces maintenance burden.

3. **DriveWorks Optimization:** Every change prioritizes the DriveWorks user experience over general web development needs.

4. **Brand Consistency:** All documentation and UI now reflect TPM branding and the Dynamic Icons Plugin ecosystem.

5. **Performance:** Instant searching remains a priority, ensuring the site is fast for TPM customers.

## Future Considerations

Potential areas for future enhancement:

- Additional DriveWorks-specific features
- Improved mobile experience for field technicians
- Enhanced search filters for DriveWorks-specific use cases
- Integration with TPM's authentication system (if needed)

## Acknowledgments

All changes are made with respect to the original Icônes project by Anthony Fu. The fork maintains the MIT license and gives full credit to the original work.

- **Original Project:** [Icônes](https://github.com/antfu/icones)
- **Original Author:** [Anthony Fu](https://github.com/antfu)
- **License:** MIT

---

*Last Updated: December 2025*