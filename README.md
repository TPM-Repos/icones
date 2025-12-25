# TPM Dynamic Icons Explorer

<p align="center">A fork of <a href="https://github.com/antfu/icones" target="_blank">Icônes</a> by Anthony Fu, customized for TPM's <a href="https://github.com/TPM-Repos/Dynamic-Icon-Plugin" target="_blank">Dynamic Icons DriveWorks Plugin</a></p>

## About This Fork

This is a customized version of the excellent Icônes icon explorer, adapted for TPM customers using the Dynamic Icons DriveWorks Plugin. The original Icônes project was created by [Anthony Fu](https://github.com/antfu) as an instant searching icon explorer powered by Iconify.

**Original Project**: [Icônes](https://github.com/antfu/icones) by Anthony Fu (MIT License)

## TPM Dynamic Icons Plugin

This website is hosted at [https://icons.tpmautomation.com/](https://icons.tpmautomation.com/) and serves as the icon browser for TPM's Dynamic Icons DriveWorks Plugin.

**Plugin Status:** ✅ v1.1 released as stable  
**Plugin Repo:** [Dynamic-Icon-Plugin](https://github.com/TPM-Repos/Dynamic-Icon-Plugin/releases)

### Features & Benefits

1. **14,000+ Icons Available** - Removes the burden of building and maintaining a library of image files for UI needs. Icons are open source, public domain, or designed in-house, all available for commercial use.

2. **Vector SVG Format** - Use icons at any size without pixelation. Vectors are highly performant for website usage.

3. **Easy DriveWorks Integration** - Copy code snippets directly to your DriveWorks project using `TpmIcon()` or `TpmIcons()` functions.

4. **Wide Icon Variety**:
   - Country and US State Flags
   - Font Awesome (Brands, Regular, Solid)
   - Extended Material Design Icons (and Light variant)
   - Bootstrap
   - Feather
   - Heroicons
   - Iconoir
   - Spinners (animated loading icons)
   - Custom icons from TPM and DriveWorks

### Website Features

- **Instant Fuzzy Searching** - All searching is done locally, no web queries
- Copy TPM DriveWorks code snippets directly
- Download SVGs for direct use
- Mobile friendly responsive design
- Collection bookmarks
- Category filters
- Dark mode toggle
- Built with [Vite](https://github.com/vitejs/vite) and Vue 3

## Usage with DriveWorks

### Prerequisites

Install the TPM Dynamic Icons Plugin from [GitHub Releases](https://github.com/TPM-Repos/Dynamic-Icon-Plugin/releases/latest).

> **Important:** The .dll must be installed on all machines running DriveWorks applications!
>
> For DriveWorks Live through IIS, the .dll must be installed from a local drive (like C:). Network locations and UNC paths will not work.

### Using the Icons

Browse this website to find icons, then use the TPM Dynamic Icon Plugin functions in your DriveWorks rules:

```
TpmIcons("flags\us", "nc")              // For flags
TpmIcon("material", "account-cog", "red")  // For regular icons
TpmIcon("awesome\solid", "adjust", "#34d67f")
TpmIcon("driveworks", "ArrowUp", "rgb(123,56,254)")
```

Compatible with Picture boxes, buttons, checkboxes, option buttons, and any rule that accepts an image or image path.

## Compatibility

- Thoroughly tested in DriveWorks Pro 22
- Not tested in DriveWorks 21 (no known issues expected)

## Resources

With so many icons available, search the websites of respective icon packs to find specific icons:

- **Material:** [https://pictogrammers.com/library/mdi/](https://pictogrammers.com/library/mdi/)
- **Bootstrap:** [https://icons.getbootstrap.com/#icons](https://icons.getbootstrap.com/#icons)
- **TPM Website:** [https://tpmautomation.com/icon/material](https://tpmautomation.com/icon/material)

## Screenshots

![](./screenshots/1.png)
![](./screenshots/2.png)
![](./screenshots/3.png)
![](./screenshots/4.png)
![](./screenshots/5.png)

Easy switching between light and dark mode:

![](./screenshots/6.png)

## Support

- **TPM Homepage:** [https://www.tpm.com/](https://www.tpm.com/)
- **TPM Docs Wiki:** [Dynamic Icons Plugin](https://tpmdocs.com/en/TPM-Tech/Plugins/Dynamic-Icons) (requires customer login)
- **Plugin GitHub:** [https://github.com/TPM-Repos/Dynamic-Icon-Plugin](https://github.com/TPM-Repos/Dynamic-Icon-Plugin)

## License

MIT License - Original Icônes project by Anthony Fu 2020  
This fork maintained by TPM for use with Dynamic Icons DriveWorks Plugin.

## Original Icônes Community

- [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=afzalsayed96.icones) by [@afzalsayed96](https://github.com/afzalsayed96)
- [Figma Plugin](https://www.figma.com/community/plugin/735098390272716381/iconify) by [@Vjacheslav Trushkin](https://www.figma.com/@cyberalien)