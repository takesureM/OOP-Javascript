class Tooltip {}

class ProjectItem {
    constructor(id) {
        this.id = id;
        this.connectMoreInfoButton();
        this.connectSwitchButton();
    }

    connectMoreInfoButton() {

    }

    connectSwitchButton() {
        const projectItemElement = document.getElementById(this.id);
        const switchBtn = projectItemElement.querySelectorAll('button:llsit-of-type');
        switchBtn.addEventListener('click',)
    }
}

class ProjectIList {
    projects = [];
    constructor(type) {
        const prjItems = document.querySelectorAll(`#${type}-projects li`);
        for(const prjItem of prjItems) {
            this.projects.push(new ProjectItem(prjItem.id));
        }
        console.log(this.projects);
    }

    addProject() {

    }

    switchProjects() {
        // const projectIndex = this.projects.findIndex(p => p.id === projectId);
        // thid.projects.splice(projectIndex, 1);

        this.projects = this.projects.filter(p => p.id !== projectId);
    }
}

class App {
    static init() {
        const activeProjectsList = new ProjectIList('active');
        const finishedProjectsList = new ProjectIList('finished');
    }
}

App.init();
