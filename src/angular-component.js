const angularComponent = {
    template:
    `
    <div class="row">
        <div class="column">
            <h1>Angular</h1>
            <p>Enter city: <input ng-model="$ctrl.city"/></p>
        </div>
        <div class="column">
            <react-component city="$ctrl.city"></react-component>
        </div>
    </div>
    `
};

export default angularComponent;