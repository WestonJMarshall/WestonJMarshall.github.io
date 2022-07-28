const app = new Vue({
    el: '#root',
    data: {
        title: "Portfolio",
        goal: "I am a T shaped developer. I have a wide range of skills from my experiences and education, with strong interests in low level graphics, high level website and game design, and python scripting. However I have drilled down the strongest with C# and .Net, my favorite language and platform. I am looking to continue to expand my width on a variety of topics while also drilling down on and sharing my strong C# skills. This site is mainly a creative portfolio and does not include business projects, please contact me directly for visual examples of business related work. Check out some of what I've done below!",
        selectedProject: {},
        projects: [{
            name: "Dungeon Display",
            image: "src/media/DD_LibLogo.png",
            description: "<b>About:  </b><ul><li>An intuitive RPG map making and map roleplaying app</li><li>Created with Unity and written in C#</li><li>Published on Steam</li></ul>",
            display: `<div>
            <div class="row">
                <aside class="col-lg" id="intro">
                    <div class="row">
                        <aside class="col-lg">
                            <h3>Dungeon Display &amp; ShadowGen</h3>
                        </aside>
                    </div>
                    <div class="row">
                        <aside class="col-md">
                            <img src="src/media/ShadowGenExample.gif" class="currentImageItem" alt="ShadowGen">
                        </aside>
                        <aside class="col-md" id="recentText">
                            This is ShadowGen, a dynamic 2D shadow creation plugin for Unity. This plugin was created as the basis for Dungeon Display. ShadowGen lets the creator use special tool within Unity to quickly setup shadows and lights. <br> <br>
                        </aside>
                    </div>
                    <br>
                    <div class="row">
                        <aside class="col-md">
                            <img src="src/media/DDExampleB.gif" class="currentImageItem" alt="ShadowGen">
                        </aside>
                        <aside class="col-md">
                            <img src="src/media/DDExampleA.gif" class="currentImageItem" alt="ShadowGen">
                        </aside>
                    </div>
                    <br>
                    <div class="row">
                        <aside class="col-md">
                            <img src="src/media/DDExampleC.gif" class="currentImageItem" alt="ShadowGen">
                        </aside>
                        <aside class="col-md" id="recentText">
                            This is Dungeon Display, An intuitive RPG map making and map roleplaying app. Created in Unity and published on Steam. Comes with full support for online multiplayer through the Steamworks and Facepunch APIs, allowing players to easily invite Steam friends to their games. Allows map makers to setup maps using any 2D assets they wish to import into the game, toggle functional pieces on the map, and place character and object tokens anywhere. Includes a shadow generation tool where map makers can quickly create both concave and convex shapes to cast shadows in their maps. Shadows update as character tokens move. <br> <br>
                        </aside>
                    </div>
                    <div class="row">
                    <a class='col-12 text-center' href='https://github.com/wjm3824/Dungeon-Display'>GitHub</a>
                    </div>
                </aside>
            </div>
        </div>`
        }, {
            name: "Compute Particles",
            image: "src/media/CSP_Icon.png",
            description: "<b>About:  </b><ul><li>A graphical exhibition showing off a highly optimized particle system and other 'from-scratch' graphical components.</li><li>Created with DirectX 11 and HLSL</li><li>Written in C++</li></ul>",
            display: `<div>
            <div class="row">
                <aside class="col-lg" id="intro">
                    <div class="row">
                        <aside class="col-lg">
                            <h3>Compute Shader Based Particle System</h3>
                        </aside>
                    </div>
                    <div class="row">
                        <aside class="col-md">
                            <img src="src/media/particlesDisplay.gif" class="currentImageItem" alt="ShadowGen">
                        </aside>
                        <aside class="col-md" id="recentText">
                            A DirectX11 and HLSL based graphical exhibition. Uses compute shaders to handle particle data and updates, as well as custom texture map integration to change particle parameters within these shaders. Highly optimized and runs exceptionally well even with many thousands of particles running at a time. Produces normal and depth maps to be used for outlines and runs lighting calculations for cell shading. <br> <br> Also includes cube mapping, a custom camera, and PBR lighting calculations <br>
                        </aside>
                    </div>
                    <br>
                    <div class="row">
                    <h3 class='col-12 text-center'>Sample</h3>
                    </div>
<br>
                    <div class="row">
                        <aside class="col-md">
                            <img src="src/media/particlesSample.png" class="currentImageItem" alt="ShadowGen">
                        </aside>
                    </div>
                    <br>
                    <div class="row">
                    <p class='col-12 text-center'>Some of the 'Core' and 'Starter' files provided by a professor and not my work.</p>
                    </div>
                    <div class="row">
                    <a class='col-12 text-center' href='https://github.com/wjm3824/ComputeParticles/'>GitHub</a>
                    </div>
                </aside>
            </div>
        </div>`
        }, {
            name: "Extensive Extensiveness",
            image: "src/media/EE_Icon.png",
            description: "<b>About:  </b><ul><li>A web-based word game using the RiTa.js, Wikipedia, and Oxford Dictionary APIs</li><li>Created with Vue, Bootstrap, and PHP for proxy servers</li></ul>",
            display: `<div>
            <div class="row">
                <aside class="col-lg" id="intro">
                    <div class="row">
                        <aside class="col-lg">
                            <h3>Extensive Extensiveness</h3>
                        </aside>
                    </div>
                    <div class="row">
                        <aside class="col-md">
                            <img src="src/media/extensiveCode.png" class="currentImageItem" alt="ShadowGen">
                        </aside>
                        <aside class="col-md" id="recentText">
                            In this web-based word swapping game, create the longest possible grammatically correct sentence by swapping out words. Use the RiTa.js API to swap words with random ones with the same part-of-speech. Use the Oxford Dictionary API to swap with words from a word’s definition. Create “random” starting sentences by using a clever call to Wikipedia. Website created with Vue.js and Bootstrap, check out the game for yourself by clicking on the  link below. <br> <br>
                        </aside>
                    </div>
                    <br>
                    <div class="row">
                    <h3 class='col-12 text-center'>Example</h3>
                    </div>
                    <br>
                    <div class="row">
                        <aside class="col-md">
                            <img src="src/media/extensiveSample.png" class="currentImageItem" alt="ShadowGen">
                        </aside>
                    </div>
                    <br>
                    <div class="row">
                    <a class='col-12 text-center' href='https://people.rit.edu/wjm3824/330/330-project-3-03/'>Website</a>
                    </div>
                </aside>
            </div>
        </div>`
        }, {
            name: "Full Tiltadillo",
            image: "src/media/ftaSample.png",
            description: "<b>About:  </b><ul><li>A 3D Super Monkey Ball inspired game where you must tilt levels to roll an armadillo to victory</li><li>Created with C++ and OpenGL</li></ul>",
            display: `<div>
            <div class="row">
                <aside class="col-lg" id="intro">
                    <div class="row">
                        <aside class="col-lg">
                            <h3>Full Tiltadillo</h3>
                        </aside>
                    </div>
                    <div class="row">
                        <aside class="col-md">
                            <img src="src/media/fftDisplayA.gif" class="currentImageItem" alt="ShadowGen">
                        </aside>
                        <aside class="col-md" id="recentText">
                            Roll around a bunch of levels as an armadillo, trying to reach the end without falling or running out of time.<br> <br>I was the lead programmer in the group of four that created this game. Some of my work on this project includes:
                            <br>
                            <ul class='text-left'>
                            <br>    
                            <li>Building an algorithm that parsed text files and loaded levels based on the contents</li>
                            <li>Creating all of the collision detection and collision resolution, including physics</li>
                            <li>Assisting with parts of the octree system</li>
                            </ul>
                            <br>
                            This project was created off of a base library that a professor provided, which does some of the OpenGl and rendering work.
                        </aside>
                    </div>
                    <div class="row">
                        <aside class="col-md">
                            <img src="src/media/fftDisplayB.gif" class="currentImageItem" alt="ShadowGen">
                        </aside>
                        <aside class="col-md">
                        </aside>
                    </div>
                    <br>
                    <div class="row">
                    <h3 class='col-12 text-center'>Example</h3>
                    </div>
                    <br>
                    <div class="row">
                        <aside class="col-md">
                            <img src="src/media/fftCode.png" class="currentImageItem" alt="ShadowGen">
                        </aside>
                    </div>
                    <br>
                    <div class="row">
                    <p class='col-12 text-center'>Some of the 'Core', 'Starter', and most graphics based code provided by a professor and not my work.</p>
                    </div>
                    <div class="row">
                    <a class='col-12 text-center' href='https://github.com/wjm3824/Full-Tiltadillo-Public-Files'>GitHub</a>
                    </div>
                </aside>
            </div>
        </div>`
        }, {
            name: "Audio Visualizer",
            image: "src/media/AV_Icon.jpg",
            description: "<b>About:  </b><ul><li>An audio visualizer that has a number of graphical and audio altering effects</li><li>Created with Javascript, web audio, and canvas</li></ul>",
            display: `<div>
            <div class="row">
                <aside class="col-lg" id="intro">
                    <div class="row">
                        <aside class="col-lg">
                            <h3>Audio Visualizer</h3>
                        </aside>
                    </div>
                    <div class="row">
                        <aside class="col-md">
                            <img src="src/media/avDisplay.gif" class="currentImageItem" alt="ShadowGen">
                        </aside>
                        <aside class="col-md" id="recentText">
                            An audio visualizer that has a number of graphical effects that show waveform data. There are a couple of different algorithms to display the data, including ones that smooth and average the displayed data. There is also a system that stores lines and has them pulse outwards on every beat. Finally, there are a couple of global image effects that can be applied, such as emboss and threshold.<br> <br> There are also a number of audio effects that can be applied, such as filters and a bunch of cool reverb effects.
                        </aside>
                    </div>
                    <br>
                    <div class="row">
                    <h3 class='col-12 text-center'>Example</h3>
                    </div>
                    <br>
                    <div class="row">
                        <aside class="col-md">
                            <img src="src/media/avSample.png" class="currentImageItem" alt="ShadowGen">
                        </aside>
                    </div>
                    <br>
                    <div class="row">
                    <a class='col-12 text-center' href='https://people.rit.edu/wjm3824/330/330-project-2-03/'>Website</a>
                    </div>
                </aside>
            </div>
        </div>`
        }, {
            name: "Faux-llotaxis",
            image: "src/media/FT_Icon.png",
            description: "<b>About:  </b><ul><li>A visualizer for a custom and editable phyllotaxis algorithm</li><li>Phyllotaxis is the way that leaves naturally tend to grow on a plant</li><li>Created with Javascript and the web canvas</li></ul>",
            display: `<div>
            <div class="row">
                <aside class="col-lg" id="intro">
                    <div class="row">
                        <aside class="col-lg">
                            <h3>Faux-llotaxis</h3>
                        </aside>
                    </div>
                    <div class="row">
                        <aside class="col-md">
                            <img src="src/media/ftSample.png" class="currentImageItem" alt="Faux-llotaxis">
                        </aside>
                        <aside class="col-md" id="recentText">
                            A visualizer for a custom and editable phyllotaxis algorithm. Here's a wikipedia page that describes what phyllotaxis is: <a href='https://en.wikipedia.org/wiki/Phyllotaxis'>Link</a>. This web page lets you alter a bunch of the variables used in the phyllotaxis algorithm, leading to some really cool animations and effects. There are also a couple of especially cool presets that you can click. Designed to be as easy to use as possible.<br> <br>
                        </aside>
                    </div>
                    <br>
                    <div class="row">
                    <h3 class='col-12 text-center'>Example</h3>
                    </div>
                    <br>
                    <div class="row">
                        <aside class="col-md">
                            <img src="src/media/ftCode.png" class="currentImageItem" alt="ftCode">
                        </aside>
                    </div>
                    <br>
                    <div class="row">
                    <a class='col-12 text-center' href='https://people.rit.edu/wjm3824/330/330-project-1-03/'>Website</a>
                    </div>
                </aside>
            </div>
        </div>`
        },],

    },
    methods: {
        projectClick(input) {
            this.selectedProject = this.projects[Number(input)];
            document.querySelector("#project-section").scrollIntoView();
        },
    }
});

window.onload = () => {
    init();
}

function init() {
    app.selectedProject = app.projects[0];
    document.querySelectorAll(".project-template").forEach(e => {
        e.onclick = _ => {
            app.projectClick(Array.from(document.querySelectorAll(".project-template")).indexOf(e));
        }
    });
}
