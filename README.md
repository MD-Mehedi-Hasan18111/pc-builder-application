### Application Live URL: https://pc-builder-application.vercel.app

### Project Instruction:
- git clone <https_uri>
- npm i
- Run the project on local `npm run dev`

### Project Explanation:
- This project is a PC Builder website built using Next.js, a React-based framework for server-side rendering and static site generation. The main goal of the website is to allow users to build their own PC by selecting various PC components and view product details.

- In this application the PC Builder page allows users to select PC components in different categories. Each category section (CPU, Motherboard, RAM, etc.) has a "Choose/Select" button. Clicking on this button takes the user to a page showing at least 3 components of that category. Each component card has an "Add To Builder" button that updates the state of the selected category section in the PC Builder page. The user can add at least 5-6 components to complete the PC build, and the "Complete Build" button is enabled after adding the required components.

- The project uses different Next.js data fetching methods for different pages, such as static site generation (SSG) for the home page and featured category sections, and server-side rendering (SSR) for the PC Builder page. It also uses Redux to manage the state of the selected components in the PC Builder page.

- Overall, the project provides a user-friendly interface for building a custom PC by selecting and viewing details of various PC components. It incorporates modern web development practices and technologies to deliver an efficient and interactive user experience.