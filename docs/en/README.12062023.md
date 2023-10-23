# KUNGalgame Forum Vue Frontend Refactor

The technology stack for this project is: Vite + Vue3 + Ts + Pinia + Scss, and it does not rely on any UI libraries.

### Pure HTML/CSS version: [kungalgame-pure-css](https://github.com/KUN1007/kungalgame-pure-css)

PS: This project is currently overwhelming for me. If you have any good ideas, feel free to help out. The project's documentation can be found in ./src/assets/docs.

The current issues are that there are too many problems to handle, and there is no reasonable starting point. For example:

* There are no suitable backend data interfaces for me to use. I tried to set up a tiny data interface using Express, but it didn't serve any purpose for me.
* I'm unsure how to layout this project. Because the project itself is relatively large, I can't even figure out how to structure it properly. For instance, I'm not sure if I need a ./src/layout.
* I'm unsure how to integrate data. For example, I need to define the data for individual topics and users and then call them from anywhere in the project. I think this might be because I haven't learned Pinia well enough?
* I'm unsure how to provide reasonable interfaces. I think this may be because my knowledge of Axios is not sufficient.
* My components are nested too deeply. For instance, the Home component has 7 layers, which is obviously unreasonable. I need to find a reasonable solution.
* I've come to realize that my knowledge of TypeScript/JavaScript is not sufficient (???).

The biggest problem is that I don't know where to start because I'm not sure where to put basic data, such as in a store, and then how to call it. This is causing significant obstacles to my development because most of my pages require data, and without data flow, nothing is possible.

---

06/05/2023
Now I understand that my current project falls into the realm of the "big frontend." It involves knowledge of web architecture and requires learning many interactive technologies. I currently lack the knowledge of a "big frontend," so I'm temporarily shelving this project for now and will revisit it later.

12/06/2023
I've encountered another tricky problem, the issue of frontend-backend integration. I find that I can never figure out how to design the API properly. It seems that this indeed requires a good understanding of backend knowledge.

In summary, the current state of this project is somewhat improved, but it's still a shell. I'll call it an advanced shell (HTML++?). It can only be considered a website once the interface and authentication-related work is completed.