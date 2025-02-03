import './polyfills.server.mjs';
import{$ as ce,A as _,B as x,C as J,D as $,E as K,F as d,G as Q,H as Y,M as ee,P as te,Q as ne,R as ie,T as S,U as h,V as oe,W as m,X as ae,Y as re,a as z,b as V,c as b,d as p,da as O,e as B,f as R,g,ga as se,h as u,ha as le,i as M,ia as pe,j as k,k as E,l as c,m as W,n as Z,o as H,p as U,q as C,r as l,s as j,t as e,u as t,v as s,w as G,x as q,y as X,z as a}from"./chunk-3BUA5D5R.mjs";function ue(r,o){if(r&1&&(e(0,"li")(1,"a",9),Q(2,"async"),s(3,"hr",10),a(4),t()()),r&2){let n=o.$implicit,i=X();c(),j("active",Y(2,4,i.selectedFragment)===n.path),l("fragment",n.path),c(3),_(" ",n.name," ")}}var P=class r{scrolledFragment=M.required();isDarkMode=U.required();menuEntries=[{name:"ABOUT",path:"about"},{name:"EDUCATION",path:"education"},{name:"EXPERIENCE",path:"experience"},{name:"CONTACT",path:"contact"}];selectedFragment=b(O).fragment.pipe(V());constructor(){te(()=>{this.selectedFragment=z(this.scrolledFragment())})}changeTheme(){if(this.isDarkMode.update(o=>!o),this.isDarkMode()){document.documentElement.classList.add("dark");return}document.documentElement.classList.remove("dark")}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=p({type:r,selectors:[["app-header"]],inputs:{scrolledFragment:[1,"scrolledFragment"],isDarkMode:[1,"isDarkMode"]},outputs:{isDarkMode:"isDarkModeChange"},standalone:!0,features:[d],decls:12,vars:2,consts:[[1,"flex"],[1,"text-4xl","font-bold","text-accent-light","dark:text-accent-dark","mx-5","my-2","lg:mx-0"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","width","24px","height","24px",1,"mode-icon","opacity-100","dark:opacity-60","my-auto","ml-6",3,"click","ngClass"],["d","M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"],[1,"text-xl","font-medium","text-accent-light","dark:text-accent-dark","mx-5","lg:mx-0"],[1,"leading-normal","font-regular","dark:font-light","text-text-light","dark:text-text-dark","mx-5","my-6","w-1/2","lg:w-2/3","lg:mx-0","opacity-60"],[1,"hidden","h-auto","mx-5","lg:flex","lg:mx-0"],[1,"flex","flex-col","gap-3"],[4,"ngFor","ngForOf"],["routerLink","","ariaCurrentWhenActive","page",1,"flex","menu-item","text-sm","font-semibold",3,"fragment"],[1,"line","mr-3","my-auto"]],template:function(n,i){n&1&&(e(0,"div",0)(1,"h1",1),a(2,"Roxana Matei"),t(),g(),e(3,"svg",2),q("click",function(){return i.changeTheme()}),s(4,"path",3),t()(),u(),e(5,"h3",4),a(6,"Frontend Developer"),t(),e(7,"p",5),a(8,` I create performant and visual appealing web solutions
`),t(),e(9,"nav",6)(10,"ul",7),C(11,ue,5,6,"li",8),t()()),n&2&&(c(3),l("ngClass",i.isDarkMode()?"dark-mode":"light-mode"),c(8),l("ngForOf",i.menuEntries))},dependencies:[se,m,S,h,oe],styles:[".mode-icon[_ngcontent-%COMP%]{transition:fill .2s ease;cursor:pointer;fill:#092934}.mode-icon[_ngcontent-%COMP%]:where(.dark, .dark[_ngcontent-%COMP%]   *)[_ngcontent-%COMP%]{fill:#f3e9d2}.light-mode[_ngcontent-%COMP%]{fill:#092934}.dark-mode[_ngcontent-%COMP%]{fill:#f3e9d2}"]})};var D=class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=p({type:r,selectors:[["app-about"]],standalone:!0,features:[d],decls:36,vars:0,consts:[["header",""],[1,"pt-8","md:pt-16","lg:pt-24","mx-5","lg:mx-0"],[1,"flex","menu-item","lg:hidden","py-4"],[1,"line","mr-3","my-auto"],[1,"leading-normal"],[1,"leading-normal","font-regular","dark:font-light","text-text-light","dark:text-text-dark"],[1,"opacity-60"]],template:function(n,i){n&1&&(e(0,"section",1)(1,"div",2,0),s(3,"hr",3),e(4,"span",4),a(5,"ABOUT"),t()(),s(6,"p",5),e(7,"p")(8,"span",6),a(9,"I\u2019m a "),t(),a(10,"passionate "),e(11,"span",6),a(12,"and "),t(),e(13,"span"),a(14,"detail-oriented"),t(),e(15,"span",6),a(16," Frontend Developer with a keen eye for "),t(),a(17,"design "),e(18,"span",6),a(19,"and a deep understanding of "),t(),a(20,"modern web technologies"),e(21,"span",6),a(22,". I specialize in creating responsive, user-friendly, and visually appealing websites that deliver seamless experiences across all devices."),t()(),s(23,"br"),e(24,"p")(25,"span",6),a(26,"My interest in design drives me to stay updated on the latest design trends and best practices, allowing me to bridge the gap between "),t(),e(27,"span"),a(28,"development"),t(),e(29,"span",6),a(30," and "),t(),e(31,"span"),a(32,"design."),t()(),s(33,"br"),e(34,"p",6),a(35,"In my free time, I am usually reading, hiking, traveling and one of my favorite hobbies painting."),t()())},styles:[".menu-item[_ngcontent-%COMP%]{opacity:100%}"]})};function fe(r,o){if(r&1&&(e(0,"div",11),a(1),t()),r&2){let n=o.$implicit;c(),_(" ",n," ")}}var F=class r{experience;static \u0275fac=function(n){return new(n||r)};static \u0275cmp=p({type:r,selectors:[["app-experience-card"]],inputs:{experience:"experience"},standalone:!0,features:[d],decls:14,vars:7,consts:[[1,"w-100","h-auto","p-4","hover:bg-accent-light","dark:hover:bg-accent-dark","hover:bg-opacity-10","dark:hover:bg-opacity-10","hover:shadow-1","card-container","rounded-lg"],["target","_blank",3,"href"],[1,"flex","flex-row"],[1,"flex","my-2","period-text","uppercase","text-secondary-light","dark:text-secondary-dark","opacity-60","font-semibold","text-xs","leading-7"],[1,"flex","flex-col","px-4","bg-inherit"],[1,"card-title","my-2","text-secondary-light","dark:text-secondary-dark","text-xl","font-semibold"],[1,"material-symbols-outlined","arrow-icon","text-secondary-light","dark:text-secondary-dark"],[1,"text-secondary-light","dark:text-secondary-dark","opacity-60","font-regular","dark:font-light"],[3,"innerHTML"],[1,"flex","flex-row","gap-2","my-3","flex-wrap"],["class","rounded-full text-xs font-medium text-accent-light dark:text-accent-dark uppercase bg-primary-light dark:bg-primary-dark bg-opacity-10 dark:bg-opacity-20 px-3 py-1",4,"ngFor","ngForOf"],[1,"rounded-full","text-xs","font-medium","text-accent-light","dark:text-accent-dark","uppercase","bg-primary-light","dark:bg-primary-dark","bg-opacity-10","dark:bg-opacity-20","px-3","py-1"]],template:function(n,i){n&1&&(e(0,"div",0)(1,"a",1)(2,"div",2)(3,"div",3),a(4),t(),e(5,"div",4)(6,"div",5),a(7),e(8,"span",6),a(9," arrow_outward "),t()(),e(10,"div",7),s(11,"p",8),t(),e(12,"div",9),C(13,fe,2,1,"div",10),t()()()()()),n&2&&(c(),l("href",i.experience.url,E),c(3),x(" ",i.experience.periodStart," - ",i.experience.periodEnd," "),c(3),x(" ",i.experience.company," \u2022 ",i.experience.position," "),c(4),l("innerHTML",i.experience.description,k),c(2),l("ngForOf",i.experience.skills))},dependencies:[m,h],styles:[".line[_ngcontent-%COMP%]{width:1rem;height:1px;border:none;border-radius:7px;--tw-bg-opacity: 1;background-color:rgb(9 41 52 / var(--tw-bg-opacity))}.line[_ngcontent-%COMP%]:where(.dark, .dark[_ngcontent-%COMP%]   *)[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(198 218 191 / var(--tw-bg-opacity))}.period-text[_ngcontent-%COMP%]{min-width:7rem}.card-container[_ngcontent-%COMP%]{transition:.25s}.arrow-icon[_ngcontent-%COMP%]{width:20px;font-size:20px;position:absolute;margin-top:7px;margin-left:4px;transition:.25s}.card-container[_ngcontent-%COMP%]:hover   .card-title[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(26 147 111 / var(--tw-text-opacity))}.card-container[_ngcontent-%COMP%]:hover   .card-title[_ngcontent-%COMP%]:where(.dark, .dark[_ngcontent-%COMP%]   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(136 212 152 / var(--tw-text-opacity))}.card-container[_ngcontent-%COMP%]:hover   .arrow-icon[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(26 147 111 / var(--tw-text-opacity))}.card-container[_ngcontent-%COMP%]:hover   .arrow-icon[_ngcontent-%COMP%]:where(.dark, .dark[_ngcontent-%COMP%]   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(136 212 152 / var(--tw-text-opacity))}.card-container[_ngcontent-%COMP%]:hover   .arrow-icon[_ngcontent-%COMP%]{margin-top:2px;margin-left:8px}"]})};function Ce(r,o){if(r&1&&(e(0,"div",6),s(1,"app-experience-card",7),t()),r&2){let n=o.$implicit;c(),l("experience",n)}}var I=class r{experienceList=[{periodStart:"2022",periodEnd:"present",company:"PlentyONE",url:"https://www.plentyone.com/",position:"Front End Developer",description:"Developed and maintained dynamic, responsive web solutions using Angular and GWT (Google Web Toolkit) to enhance user experience and performance. Collaborated with UX/UI designers to implement intuitive user interfaces that align with modern design trends and improve usability. Played a key role in migrating legacy GWT applications to modern Angular architecture, improving overall maintainability and future scalability. Collaborated with backend developers to troubleshoot and resolve complex issues, ensuring smooth data exchange between the frontend and backend systems. Created design mockups using Figma for sharing my design ideas and getting feedback for new solutions before implementing them.",skills:["angular","typescript","scss","html","gwt","ux/ui","figma"]},{periodStart:"2021",periodEnd:"2022",company:"Webmagnat SRL",url:"https://webmagnat.ro/",position:"Front End Developer",description:"Designed and developed custom, responsive web applications using Vue.js, ensuring an optimal user experience across a variety of devices. Worked closely with clients to understand their needs, translating them custom solutions with intuitive interfaces and efficient functionality.",skills:["vue","javascript","laravel","css","html","jquery"]},{periodStart:"2019 June",periodEnd:"August",company:"Bitdefender",url:"https://www.bitdefender.com/",position:"Data Warehouse Developer Intern",description:"After my 3rd year of university I worked as a data warehouse develoepr intern where I assisted in the management of data warehouse systems, supported the design and implementation on fata models that accurately represent business scenarios and contributed to the management of databases. ",skills:["mysql","ssms","sscm","ssdt"]}];static \u0275fac=function(n){return new(n||r)};static \u0275cmp=p({type:r,selectors:[["app-experience"]],standalone:!0,features:[d],decls:7,vars:1,consts:[["header",""],[1,"pt-8","md:pt-16","lg:pt-24","mx-5","lg:mx-0"],[1,"flex","menu-item","lg:hidden","py-4"],[1,"line","mr-3","my-auto"],[1,"leading-normal"],["class","my-4",4,"ngFor","ngForOf"],[1,"my-4"],[3,"experience"]],template:function(n,i){n&1&&(e(0,"section",1)(1,"div",2,0),s(3,"hr",3),e(4,"span",4),a(5,"EXPERIENCE"),t()(),C(6,Ce,2,1,"div",5),t()),n&2&&(c(6),l("ngForOf",i.experienceList))},dependencies:[F,m,h],styles:[".menu-item[_ngcontent-%COMP%]{opacity:100%}"]})};var T=class r{isDarkMode=M.required();static \u0275fac=function(n){return new(n||r)};static \u0275cmp=p({type:r,selectors:[["app-contact"]],inputs:{isDarkMode:[1,"isDarkMode"]},standalone:!0,features:[d],decls:30,vars:5,consts:[["header",""],[1,"pt-8","md:pt-16","lg:pt-24","mx-5","lg:mx-0"],[1,"flex","menu-item","lg:hidden","py-4"],[1,"line","mr-3","my-auto"],[1,"leading-normal"],[1,"resume-text","my-4"],["href","../../download","download","resume.pdf","target","_blank"],[1,"py-3","font-medium"],[1,"material-symbols-outlined","arrow-icon"],[1,"leading-normal","font-medium","text-text-light","dark:text-text-dark"],[1,"flex","py-8","gap-3"],["href","https://www.linkedin.com/in/roxana-matei33/","target","_blank"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","width","36px","height","36px",1,"opacity-60","hover:opacity-100",3,"ngClass"],["d","M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"],["href","https://www.discordapp.com/users/rox1940","target","_blank"],["xmlns","http://www.w3.org/2000/svg","width","36px","height","36px","viewBox","0 0 24 24",1,"opacity-60","hover:opacity-100",3,"ngClass"],["d","M19.952,5.672c-1.904-1.531-4.916-1.79-5.044-1.801c-0.201-0.017-0.392,0.097-0.474,0.281 c-0.006,0.012-0.072,0.163-0.145,0.398c1.259,0.212,2.806,0.64,4.206,1.509c0.224,0.139,0.293,0.434,0.154,0.659 c-0.09,0.146-0.247,0.226-0.407,0.226c-0.086,0-0.173-0.023-0.252-0.072C15.584,5.38,12.578,5.305,12,5.305S8.415,5.38,6.011,6.872 c-0.225,0.14-0.519,0.07-0.659-0.154c-0.14-0.225-0.07-0.519,0.154-0.659c1.4-0.868,2.946-1.297,4.206-1.509 c-0.074-0.236-0.14-0.386-0.145-0.398C9.484,3.968,9.294,3.852,9.092,3.872c-0.127,0.01-3.139,0.269-5.069,1.822 C3.015,6.625,1,12.073,1,16.783c0,0.083,0.022,0.165,0.063,0.237c1.391,2.443,5.185,3.083,6.05,3.111c0.005,0,0.01,0,0.015,0 c0.153,0,0.297-0.073,0.387-0.197l0.875-1.202c-2.359-0.61-3.564-1.645-3.634-1.706c-0.198-0.175-0.217-0.477-0.042-0.675 c0.175-0.198,0.476-0.217,0.674-0.043c0.029,0.026,2.248,1.909,6.612,1.909c4.372,0,6.591-1.891,6.613-1.91 c0.198-0.172,0.5-0.154,0.674,0.045c0.174,0.198,0.155,0.499-0.042,0.673c-0.07,0.062-1.275,1.096-3.634,1.706l0.875,1.202 c0.09,0.124,0.234,0.197,0.387,0.197c0.005,0,0.01,0,0.015,0c0.865-0.027,4.659-0.667,6.05-3.111 C22.978,16.947,23,16.866,23,16.783C23,12.073,20.985,6.625,19.952,5.672z M8.891,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913s1.674,0.857,1.674,1.913S9.816,14.87,8.891,14.87z M15.109,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913c0.924,0,1.674,0.857,1.674,1.913S16.033,14.87,15.109,14.87z"],["href","https://github.com/r-matei","target","_blank"],["d","M 12 2 C 6.476563 2 2 6.476563 2 12 C 2 17.523438 6.476563 22 12 22 C 17.523438 22 22 17.523438 22 12 C 22 6.476563 17.523438 2 12 2 Z M 12 4 C 16.410156 4 20 7.589844 20 12 C 20 12.46875 19.953125 12.929688 19.875 13.375 C 19.628906 13.320313 19.265625 13.253906 18.84375 13.25 C 18.53125 13.246094 18.140625 13.296875 17.8125 13.34375 C 17.925781 12.996094 18 12.613281 18 12.21875 C 18 11.257813 17.53125 10.363281 16.78125 9.625 C 16.988281 8.855469 17.191406 7.535156 16.65625 7 C 15.074219 7 14.199219 8.128906 14.15625 8.1875 C 13.667969 8.070313 13.164063 8 12.625 8 C 11.933594 8 11.273438 8.125 10.65625 8.3125 L 10.84375 8.15625 C 10.84375 8.15625 9.964844 6.9375 8.34375 6.9375 C 7.777344 7.507813 8.035156 8.953125 8.25 9.6875 C 7.484375 10.417969 7 11.28125 7 12.21875 C 7 12.546875 7.078125 12.859375 7.15625 13.15625 C 6.878906 13.125 5.878906 13.03125 5.46875 13.03125 C 5.105469 13.03125 4.542969 13.117188 4.09375 13.21875 C 4.03125 12.820313 4 12.414063 4 12 C 4 7.589844 7.589844 4 12 4 Z M 5.46875 13.28125 C 5.863281 13.28125 7.0625 13.421875 7.21875 13.4375 C 7.238281 13.492188 7.257813 13.542969 7.28125 13.59375 C 6.851563 13.554688 6.019531 13.496094 5.46875 13.5625 C 5.101563 13.605469 4.632813 13.738281 4.21875 13.84375 C 4.1875 13.71875 4.148438 13.597656 4.125 13.46875 C 4.5625 13.375 5.136719 13.28125 5.46875 13.28125 Z M 18.84375 13.5 C 19.242188 13.503906 19.605469 13.570313 19.84375 13.625 C 19.832031 13.691406 19.796875 13.746094 19.78125 13.8125 C 19.527344 13.753906 19.109375 13.667969 18.625 13.65625 C 18.390625 13.652344 18.015625 13.664063 17.6875 13.6875 C 17.703125 13.65625 17.707031 13.625 17.71875 13.59375 C 18.058594 13.546875 18.492188 13.496094 18.84375 13.5 Z M 6.09375 13.78125 C 6.65625 13.785156 7.183594 13.824219 7.40625 13.84375 C 7.929688 14.820313 8.988281 15.542969 10.625 15.84375 C 10.222656 16.066406 9.863281 16.378906 9.59375 16.75 C 9.359375 16.769531 9.113281 16.78125 8.875 16.78125 C 8.179688 16.78125 7.746094 16.160156 7.375 15.625 C 7 15.089844 6.539063 15.03125 6.28125 15 C 6.019531 14.96875 5.929688 15.117188 6.0625 15.21875 C 6.824219 15.804688 7.097656 16.5 7.40625 17.125 C 7.683594 17.6875 8.265625 18 8.90625 18 L 9.03125 18 C 9.011719 18.109375 9 18.210938 9 18.3125 L 9 19.40625 C 6.691406 18.472656 4.933594 16.5 4.28125 14.0625 C 4.691406 13.960938 5.152344 13.855469 5.5 13.8125 C 5.660156 13.792969 5.863281 13.777344 6.09375 13.78125 Z M 18.625 13.90625 C 19.074219 13.917969 19.472656 14.003906 19.71875 14.0625 C 19.167969 16.132813 17.808594 17.855469 16 18.90625 L 16 18.3125 C 16 17.460938 15.328125 16.367188 14.375 15.84375 C 15.957031 15.554688 16.988281 14.863281 17.53125 13.9375 C 17.910156 13.910156 18.355469 13.898438 18.625 13.90625 Z M 12.5 18 C 12.773438 18 13 18.226563 13 18.5 L 13 19.9375 C 12.671875 19.980469 12.339844 20 12 20 L 12 18.5 C 12 18.226563 12.226563 18 12.5 18 Z M 10.5 19 C 10.773438 19 11 19.226563 11 19.5 L 11 19.9375 C 10.664063 19.894531 10.324219 19.832031 10 19.75 L 10 19.5 C 10 19.226563 10.226563 19 10.5 19 Z M 14.5 19 C 14.742188 19 14.953125 19.175781 15 19.40625 C 14.675781 19.539063 14.34375 19.660156 14 19.75 L 14 19.5 C 14 19.226563 14.226563 19 14.5 19 Z"],["href","https://www.instagram.com/roxanna.matei/","target","_blank"],["d","M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"],["href","https://dribbble.com/Mrrrazzz","target","_blank"],["d","M 4 2 C 2.898438 2 2 2.898438 2 4 L 2 20 C 2 21.101563 2.898438 22 4 22 L 20 22 C 21.101563 22 22 21.101563 22 20 L 22 4 C 22 2.898438 21.101563 2 20 2 Z M 12.25 4 C 13.257813 4 14.46875 4.980469 14.46875 9.65625 C 14.46875 11.328125 13.980469 13.816406 13.03125 15.8125 C 13.445313 16.375 13.839844 16.625 14.125 16.625 C 14.511719 16.546875 15.378906 15.003906 15.84375 13.53125 C 15.972656 13.125 16.386719 12.902344 16.78125 13.03125 C 17.183594 13.148438 17.398438 13.605469 17.28125 14 C 16.886719 15.253906 15.785156 18.15625 14.125 18.15625 C 13.601563 18.15625 12.921875 17.902344 12.25 17.21875 C 11.488281 18.285156 10.523438 19 9.40625 19 C 7.042969 19 6 16.847656 6 15 C 6 13.035156 7.003906 11.1875 9.1875 11.1875 C 9.554688 11.1875 9.890625 11.265625 10.1875 11.375 C 10.148438 10.8125 10.125 10.203125 10.125 9.5625 C 10.125 9.503906 10.125 4 12.25 4 Z M 12.3125 5.625 C 11.996094 6.179688 11.625 7.824219 11.625 9.5625 C 11.625 11.441406 11.839844 12.890625 12.15625 13.96875 C 12.640625 12.585938 12.96875 11.007813 12.96875 9.65625 C 12.96875 7.105469 12.550781 5.980469 12.3125 5.625 Z M 8.90625 12.71875 C 7.554688 12.988281 7.53125 15.179688 7.53125 15.28125 C 7.53125 15.941406 7.695313 17.46875 9.40625 17.46875 C 10.066406 17.46875 10.738281 16.84375 11.3125 15.875 C 10.964844 15.203125 10.644531 14.371094 10.4375 13.3125 C 10.386719 13.28125 10.34375 13.226563 10.3125 13.1875 C 10.3125 13.1875 9.828125 12.71875 9.1875 12.71875 C 9.085938 12.71875 8.996094 12.699219 8.90625 12.71875 Z"]],template:function(n,i){n&1&&(e(0,"section",1)(1,"div",2,0),s(3,"hr",3),e(4,"span",4),a(5,"CONTACT"),t()(),e(6,"div",5)(7,"a",6)(8,"span",7),a(9," Read Full Resume "),t(),e(10,"span",8),a(11," arrow_outward "),t()()(),e(12,"span",9),a(13," Feel free to contact me for collaborations! "),t(),e(14,"div",10)(15,"a",11),g(),e(16,"svg",12),s(17,"path",13),t()(),u(),e(18,"a",14),g(),e(19,"svg",15),s(20,"path",16),t()(),u(),e(21,"a",17),g(),e(22,"svg",15),s(23,"path",18),t()(),u(),e(24,"a",19),g(),e(25,"svg",15),s(26,"path",20),t()(),u(),e(27,"a",21),g(),e(28,"svg",15),s(29,"path",22),t()()()()),n&2&&(c(16),l("ngClass",i.isDarkMode()?"contact-icon-dark":"contact-icon"),c(3),l("ngClass",i.isDarkMode()?"contact-icon-dark":"contact-icon"),c(3),l("ngClass",i.isDarkMode()?"contact-icon-dark":"contact-icon"),c(3),l("ngClass",i.isDarkMode()?"contact-icon-dark":"contact-icon"),c(3),l("ngClass",i.isDarkMode()?"contact-icon-dark":"contact-icon"))},dependencies:[m,S],styles:[".menu-item[_ngcontent-%COMP%]{opacity:100%}.contact-icon[_ngcontent-%COMP%]{fill:#092934;transition:fill .2s ease}.contact-icon-dark[_ngcontent-%COMP%]{fill:#f3e9d2;transition:fill .2s ease}.resume-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{transition:color .25s ease}.resume-text[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]{width:20px;font-size:20px;position:absolute;margin-top:4px;margin-left:1px;transition:.25s!important}.resume-text[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(26 147 111 / var(--tw-text-opacity))}.resume-text[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:where(.dark, .dark[_ngcontent-%COMP%]   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(136 212 152 / var(--tw-text-opacity))}.resume-text[_ngcontent-%COMP%]:hover   .arrow-icon[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(26 147 111 / var(--tw-text-opacity))}.resume-text[_ngcontent-%COMP%]:hover   .arrow-icon[_ngcontent-%COMP%]:where(.dark, .dark[_ngcontent-%COMP%]   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(136 212 152 / var(--tw-text-opacity))}.resume-text[_ngcontent-%COMP%]:hover   .arrow-icon[_ngcontent-%COMP%]{margin-top:0;margin-left:4px}"]})};var L=class r{education={periodStart:"2017",periodEnd:"2021",company:"Politehnica University of Bucharest",url:"https://www.plentyone.com/",position:"Faculty of Automatic Control and Computer Science",description:'<span class="opacity-100!">Bachelor\u2019s Degree in Computer Science<br>Major: Systems Engineering</span><br><br>During my time as a student I participated in multiple coding hackathons, worked on several engineering projects involing software development and electronics. Contributed as a volunteer for EESTEC LC Bucharest where I gained organizational and teamwork skills by preparing event and working especially with IT and Public Relations departments.'};static \u0275fac=function(n){return new(n||r)};static \u0275cmp=p({type:r,selectors:[["app-education"]],standalone:!0,features:[d],decls:16,vars:6,consts:[["header",""],[1,"pt-8","md:pt-16","lg:pt-24","mx-5","lg:mx-0"],[1,"flex","menu-item","py-4","lg:hidden"],[1,"line","mr-3","my-auto"],[1,"leading-normal"],[1,"w-100","h-auto","p-4","my-4","bg-accent-light","dark:bg-accent-dark","bg-opacity-10","dark:bg-opacity-10","shadow-1","rounded-lg"],["target","_blank",1,"pointer-events-none",3,"href"],[1,"flex","flex-row"],[1,"flex","period-text","uppercase","text-secondary-light","dark:text-secondary-dark","opacity-60","font-semibold","text-xs","leading-7","my-2"],[1,"flex","flex-col","px-4","bg-inherit"],[1,"text-secondary-light","dark:text-secondary-dark","text-xl","font-semibold","my-2"],[1,"text-secondary-light","dark:text-secondary-dark","opacity-60","font-regular","dark:font-light"],[3,"innerHTML"]],template:function(n,i){n&1&&(e(0,"section",1)(1,"div",2,0),s(3,"hr",3),e(4,"span",4),a(5,"EDUCATION"),t()(),e(6,"div",5)(7,"a",6)(8,"div",7)(9,"div",8),a(10),t(),e(11,"div",9)(12,"div",10),a(13),t(),e(14,"div",11),s(15,"p",12),t()()()()()()),n&2&&(c(7),l("href",i.education.url,E),c(3),x(" ",i.education.periodStart," - ",i.education.periodEnd," "),c(3),x(" ",i.education.company," \u2022 ",i.education.position," "),c(2),l("innerHTML",i.education.description,k))},styles:[".menu-item[_ngcontent-%COMP%]{opacity:100%}.period-text[_ngcontent-%COMP%]{min-width:7rem}"]})};var w=class r{constructor(o){this.document=o}route=b(O);renderer=b(Z);scrolledFragment=H("about");isDarkMode=H(!0);ngOnInit(){this.route.fragment.subscribe(()=>{}),this.renderer.listen("window","scroll",o=>{this.isVisible(document.getElementById("contact"))?this.scrolledFragment.set("contact"):this.isVisible(document.getElementById("about"))?this.scrolledFragment.set("about"):this.isVisible(document.getElementById("education"))?this.scrolledFragment.set("education"):this.isVisible(document.getElementById("experience"))&&this.scrolledFragment.set("experience")})}ngAfterViewInit(){this.setThemeClass()}scrollToFragment(o){document.getElementById(o)?.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}isVisible(o){if(!(o instanceof Element))throw Error("DomUtil: elem is not an element.");let n=getComputedStyle(o);if(n.display==="none"||n.visibility!=="visible"||+n.opacity<.1||o.offsetWidth+o.offsetHeight+o.getBoundingClientRect().height+o.getBoundingClientRect().width===0)return!1;let i={x:o.getBoundingClientRect().left+o.offsetWidth/2,y:o.getBoundingClientRect().top+o.offsetHeight/2};if(i.x<0||i.x>(document.documentElement.clientWidth||window.innerWidth)||i.y<0||i.y>(document.documentElement.clientHeight||window.innerHeight))return!1;let f=document.elementFromPoint(i.x,i.y);do if(f===o)return!0;while(f=f?.parentNode);return!1}setThemeClass(){if(this.isDarkMode()){this.document.documentElement.classList.add("dark");return}this.document.documentElement.classList.remove("dark")}static \u0275fac=function(n){return new(n||r)(W(ie))};static \u0275cmp=p({type:r,selectors:[["app-root"]],standalone:!0,features:[d],decls:12,vars:3,consts:[["overview",""],["container",""],["menu",""],[1,"max-w-screen-xl","flex","mx-auto","px-6","py-6","md:px-12","md:py-12","lg:px-24","lg:pt-0","lg:pb-24"],[1,"flex","flex-col","lg:flex-row","justify-between","gap-4"],[1,"flex-1","lg:w-1/2"],[1,"sticky","top-8","md:top-16","lg:top-24",3,"isDarkModeChange","scrolledFragment","isDarkMode"],["id","content",1,"flex-1","lg:w-1/2","scroll-smooth"],["id","about"],["id","education"],["id","experience"],["id","contact",3,"isDarkMode"]],template:function(n,i){if(n&1){let f=G();e(0,"div",3,0)(2,"div",4,1)(4,"div",5,2)(6,"app-header",6),K("isDarkModeChange",function(A){return B(f),$(i.isDarkMode,A)||(i.isDarkMode=A),R(A)}),t()(),e(7,"div",7),s(8,"app-about",8)(9,"app-education",9)(10,"app-experience",10)(11,"app-contact",11),t()()()}n&2&&(c(6),l("scrolledFragment",i.scrolledFragment()),J("isDarkMode",i.isDarkMode),c(5),l("isDarkMode",i.isDarkMode()))},dependencies:[P,D,I,T,m,L],encapsulation:2})};var de=[{path:"",component:w}];var me={providers:[ee({eventCoalescing:!0}),le(de,pe({anchorScrolling:"enabled"})),re()]};var xe={providers:[ce()]},ge=ne(me,xe);var he=()=>ae(w,ge),ut=he;export{ut as a};
