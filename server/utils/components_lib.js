function generateTitle(name) 
{
    const title = name
      .replace(/_/g, ' ')  // Replace all underscores with spaces
      .replace(/\b\w/g, (match) => match.toUpperCase()); // Capitalize the first letter of each word

    return title;
}
  
function setComponentInputs(component, inputs) {
    inputs.forEach(function (input) {
        var name = input.name, type = input.type, customSocket = input.customSocket, description = input.description, defaultValue = input.defaultValue, title = input.title, choices = input.choices;
        
        if (!title || title == '') title = generateTitle(name);
        
        component.addInput(
            component.createInput(name, type, customSocket)
            .set('title', title || '')
            .set('description', description || '')
            .set('choices', choices || null)
            .setDefault(defaultValue)
            .toOmniIO()
        );
    });
    return component;
}

function setComponentOutputs(component, outputs) {
    outputs.forEach(function (output) {
        var name = output.name, type = output.type, customSocket = output.customSocket, description = output.description, title = output.title;

        if (!title || title == '') title = generateTitle(name);

        component.addOutput(
            component.createOutput(name, type, customSocket)
            .set('title', title || '')
            .set('description', description || '')
            .toOmniIO()
        );
    });
    return component;
}

function setComponentControls(component, controls) {
    controls.forEach(function (control) {
        var name = control.name, title = control.title, placeholder = control.placeholder, description = control.description;

        if (!title || title == '') title = generateTitle(name);

        component.addControl(
            component.createControl(name)
            .set('title', title || '')
            .set('placeholder', placeholder || '')
            .set('description', description || '')
            .toOmniControl() 
        );
    });
    return component;
}

export { setComponentInputs, setComponentOutputs, setComponentControls}