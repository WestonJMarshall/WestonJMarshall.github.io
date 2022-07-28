Vue.component('project-select', {
    props: ['name', 'image', 'description', 'index'],
    template: `<div class="project-template">
        <div class="row selectBox">
            <div class="col-sm-auto">
                <img :src="image" class="frontID" alt="Project Image">
            </div>
            <div class="col-4">
                <p class="frontText">{{name}}</p>
            </div>
            <div class="col-6">
                <p v-html="description" class="projectDescription"></p>
            </div>
        </div>
    </div>`
});
