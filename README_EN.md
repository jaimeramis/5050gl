# 50&50gl

Web Development - Front End - 50&50gl

# Functionality:

Web demo for the company 50&50gl. A presentation card in case they want to improve their website in terms of design and internal functionalities.

# Features:

- Home Page and routes to different pages.

# Requirements:

- Tech stack: HTML, CSS with Tailwind, JS, PNPM / NPM.
- Frameworks: React.

# Project Structure:

- **assets**: Folder that includes font and icon files.
- **components**: Folder containing different components.
- **data**: Folder where JSON files with useful website information are stored.
- **public**: Folder where images and static files of the website are stored.
- **pages**: Folder containing both current and future pages.

# Installation:

1. Download or clone the repository.
2. Make sure you have all necessary dependencies installed on your system, such as PNPM (optional). You can use NPM if you prefer.
3. To run the project:

```bash
# Command to display the content folder. Once executed, go to localhost and type the name of one of the files.
# Example: http://localhost:1313/en/preferences-contact/

hugo server
```

4. To build the delivery package, use the created command:

```bash
# This command cleans the public folder and generates the deploy folder.
# It contains the compiled HTML, CSS, and JS for each instance.
pnpm run build

# Alternative if you don't want to use PNPM:
npm run build
```

Thanks for your attention.<br>
JR
